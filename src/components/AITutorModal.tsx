import React, { useEffect, useMemo, useState } from 'react';
import {
  Sparkles,
  X,
  Send,
  WifiOff,
  Bot,
  User as UserIcon,
  RefreshCw,
  AlertCircle,
  BookOpen,
} from 'lucide-react';

import { ClassLevel, Subject } from '../types';
import { getApiEndpoint } from '../utils/apiConfig';

interface AITutorModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentClass: ClassLevel;
  currentSubject?: Subject;
  lessonContextTopic?: string;
}

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

interface TutorResponse {
  reply?: string;
  error?: string;
  message?: string;
}

export const AITutorModal: React.FC<AITutorModalProps> = ({
  isOpen,
  onClose,
  currentClass,
  currentSubject = 'Biologia',
  lessonContextTopic,
}) => {
  const [inputQuery, setInputQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOnline, setIsOnline] = useState(
    typeof navigator !== 'undefined' ? navigator.onLine : true
  );

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [lastQuestion, setLastQuestion] = useState('');

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content:
        `Olá! 👋 Eu sou o Tutor Inteligente TANmz.\n\n` +
        `Estou aqui para ajudar nos estudos de ${currentSubject}, ` +
        `com explicações simples, corretas e adequadas à ${currentClass}.\n\n` +
        `Podes perguntar sobre uma matéria, conceito, exercício, experiência ` +
        `ou qualquer dúvida relacionada com os teus estudos.\n\n` +
        `Como posso ajudar-te hoje?`,
    },
  ]);

  /*
   * ============================================================
   * MONITORAMENTO DA INTERNET
   * ============================================================
   */

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setErrorMessage(null);
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  /*
   * ============================================================
   * PERGUNTAS RÁPIDAS
   * ============================================================
   */

  const quickQuestions = useMemo(() => {
    if (currentSubject === 'Química') {
      return [
        `Explique o que é uma ligação iónica para a ${currentClass}`,
        `Qual é a diferença entre ligação iónica e covalente?`,
        `O que é uma reação química?`,
        `Dê um exemplo de reação química do dia a dia em Moçambique`,
      ];
    }

    return [
      `Explique o conceito de fotossíntese para a ${currentClass}`,
      `O que é uma célula e quais são as suas principais partes?`,
      `Como funciona a seleção natural de Darwin?`,
      `Qual é a diferença entre mitose e meiose?`,
    ];
  }, [currentClass, currentSubject]);

  /*
   * ============================================================
   * CONSTRUÇÃO DO HISTÓRICO
   * ============================================================
   */

  const buildHistory = () => {
    return messages
      .slice(-8)
      .map((message) => ({
        role: message.role,
        content: message.content,
      }));
  };

  /*
   * ============================================================
   * ENVIO DA PERGUNTA
   * ============================================================
   */

  const handleSend = async (textToSend?: string) => {
    const query = (textToSend ?? inputQuery).trim();

    if (!query || isLoading) {
      return;
    }

    setErrorMessage(null);
    setLastQuestion(query);

    /*
     * Verificação real do estado da rede
     */

    if (!navigator.onLine) {
      setIsOnline(false);

      const offlineMessage: ChatMessage = {
        id: `offline-${Date.now()}`,
        role: 'assistant',
        content:
          `Neste momento não tenho acesso à internet.\n\n` +
          `As aulas, conteúdos, exercícios e testes do TANmz continuam disponíveis offline.\n\n` +
          `Assim que a internet voltar, podes enviar novamente a pergunta para eu gerar uma resposta com IA.`,
      };

      setMessages((prev) => [...prev, offlineMessage]);
      return;
    }

    setIsOnline(true);

    /*
     * Adiciona pergunta do aluno
     */

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: query,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputQuery('');
    setIsLoading(true);

    try {
      /*
       * Endpoint do Tutor
       */

      const endpoint = getApiEndpoint('/api/tutor');

      const controller = new AbortController();

      const timeout = window.setTimeout(() => {
        controller.abort();
      }, 45000);

      /*
       * Envia a pergunta para o servidor
       */

      const response = await fetch(endpoint, {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },

        body: JSON.stringify({
          question: query,

          classLevel: currentClass,

          subject: currentSubject,

          lessonContextTopic:
            lessonContextTopic || null,

          history: buildHistory(),
        }),

        signal: controller.signal,
      });

      window.clearTimeout(timeout);

      /*
       * Tenta interpretar a resposta
       */

      let data: TutorResponse = {};

      try {
        data = await response.json();
      } catch {
        data = {};
      }

      /*
       * Tratamento específico dos erros HTTP
       */

      if (!response.ok) {
        if (response.status === 400) {
          throw new Error(
            data.error ||
              'A pergunta enviada ao Tutor não é válida.'
          );
        }

        if (response.status === 401 || response.status === 403) {
          throw new Error(
            'O serviço de IA não está autorizado. Verifique a configuração da API do Tutor.'
          );
        }

        if (response.status === 404) {
          throw new Error(
            'O serviço /api/tutor não foi encontrado. O backend do Tutor ainda não está publicado corretamente.'
          );
        }

        if (response.status === 429) {
          throw new Error(
            'O Tutor atingiu temporariamente o limite de utilização da IA. Aguarde alguns segundos e tente novamente.'
          );
        }

        if (response.status >= 500) {
          throw new Error(
            data.error ||
              'O servidor do Tutor encontrou um erro ao contactar a IA.'
          );
        }

        throw new Error(
          data.error ||
            `Erro do Tutor. Código HTTP: ${response.status}`
        );
      }

      /*
       * Obtém a resposta da IA
       */

      const reply =
        typeof data.reply === 'string'
          ? data.reply.trim()
          : '';

      if (!reply) {
        throw new Error(
          'A IA respondeu, mas não enviou nenhum texto.'
        );
      }

      /*
       * Mostra a resposta no chat
       */

      const assistantMessage: ChatMessage = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content: reply,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error: unknown) {
      console.error('Erro no Tutor TANmz:', error);

      let friendlyMessage =
        'Não foi possível obter uma resposta do Tutor neste momento.';

      /*
       * Timeout
       */

      if (
        error instanceof DOMException &&
        error.name === 'AbortError'
      ) {
        friendlyMessage =
          'A resposta da IA demorou demasiado tempo. Verifique a internet e tente novamente.';
      }

      /*
       * Erros normais
       */

      else if (error instanceof Error) {
        friendlyMessage = error.message;
      }

      /*
       * Mostra erro sem apagar a conversa
       */

      setErrorMessage(friendlyMessage);

      const errorChatMessage: ChatMessage = {
        id: `error-${Date.now()}`,
        role: 'assistant',
        content:
          `Não consegui gerar a resposta desta vez.\n\n` +
          `${friendlyMessage}\n\n` +
          `Podes tocar em "Tentar novamente" para repetir a pergunta.`,
      };

      setMessages((prev) => [...prev, errorChatMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  /*
   * ============================================================
   * TENTAR NOVAMENTE
   * ============================================================
   */

  const handleRetry = () => {
    if (!lastQuestion || isLoading) {
      return;
    }

    handleSend(lastQuestion);
  };

  /*
   * ============================================================
   * LIMPAR ERRO
   * ============================================================
   */

  const clearError = () => {
    setErrorMessage(null);
  };

  /*
   * ============================================================
   * MODAL FECHADO
   * ============================================================
   */

  if (!isOpen) {
    return null;
  }

  /*
   * ============================================================
   * INTERFACE
   * ============================================================
   */

  return (
    <div
      className="
        fixed inset-0
        z-50
        flex
        items-center
        justify-center
        p-3
        sm:p-4
        bg-slate-900/60
        backdrop-blur-sm
      "
    >
      <div
        className="
          bg-white
          w-full
          max-w-2xl
          h-[85vh]
          max-h-[720px]
          rounded-2xl
          shadow-2xl
          border
          border-slate-200
          flex
          flex-col
          overflow-hidden
        "
      >
        {/* =====================================================
            CABEÇALHO
        ====================================================== */}

        <div
          className="
            bg-gradient-to-r
            from-emerald-600
            to-teal-700
            text-white
            px-4
            py-3
            flex
            items-center
            justify-between
          "
        >
          <div className="flex items-center gap-2.5">
            <div
              className="
                w-9
                h-9
                rounded-xl
                bg-white/15
                flex
                items-center
                justify-center
              "
            >
              <Sparkles
                size={19}
                className="text-emerald-100"
              />
            </div>

            <div>
              <h3 className="font-bold text-sm sm:text-base">
                Pergunte ao Tutor TANmz
              </h3>

              <p className="text-[11px] text-emerald-100">
                {currentClass} • {currentSubject}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            type="button"
            aria-label="Fechar Tutor"
            className="
              p-1.5
              rounded-lg
              text-white/80
              hover:text-white
              hover:bg-white/10
              transition-colors
            "
          >
            <X size={20} />
          </button>
        </div>

        {/* =====================================================
            STATUS DA INTERNET
        ====================================================== */}

        {!isOnline && (
          <div
            className="
              bg-amber-50
              border-b
              border-amber-200
              px-4
              py-2.5
              text-xs
              text-amber-800
              flex
              items-center
              gap-2
            "
          >
            <WifiOff
              size={15}
              className="text-amber-600 shrink-0"
            />

            <span>
              Sem ligação à internet. A IA do Tutor precisa de
              internet para gerar novas respostas.
            </span>
          </div>
        )}

        {/* =====================================================
            AVISO DE ERRO
        ====================================================== */}

        {errorMessage && (
          <div
            className="
              bg-red-50
              border-b
              border-red-200
              px-4
              py-2.5
              flex
              items-start
              gap-2
            "
          >
            <AlertCircle
              size={15}
              className="text-red-600 shrink-0 mt-0.5"
            />

            <div className="flex-1">
              <p className="text-xs text-red-800">
                {errorMessage}
              </p>

              <button
                type="button"
                onClick={handleRetry}
                disabled={isLoading || !lastQuestion}
                className="
                  mt-1.5
                  text-xs
                  font-semibold
                  text-red-700
                  hover:text-red-900
                  underline
                  disabled:opacity-50
                "
              >
                Tentar novamente
              </button>
            </div>

            <button
              type="button"
              onClick={clearError}
              className="text-red-500 hover:text-red-700"
              aria-label="Fechar aviso"
            >
              <X size={15} />
            </button>
          </div>
        )}

        {/* =====================================================
            CONTEXTO DA AULA
        ====================================================== */}

        {lessonContextTopic && (
          <div
            className="
              px-4
              py-2
              bg-emerald-50
              border-b
              border-emerald-100
              flex
              items-center
              gap-2
              text-xs
              text-emerald-800
            "
          >
            <BookOpen size={14} />

            <span>
              Tema da aula:
              <strong className="ml-1">
                {lessonContextTopic}
              </strong>
            </span>
          </div>
        )}

        {/* =====================================================
            ÁREA DE MENSAGENS
        ====================================================== */}

        <div
          className="
            flex-1
            overflow-y-auto
            p-4
            space-y-3.5
            bg-slate-50/70
          "
        >
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`
                flex
                items-start
                gap-2.5
                ${msg.role === 'user' ? 'flex-row-reverse' : ''}
              `}
            >
              {/* ÍCONE */}

              <div
                className={`
                  w-8
                  h-8
                  rounded-lg
                  flex
                  items-center
                  justify-center
                  shrink-0
                  ${
                    msg.role === 'user'
                      ? 'bg-emerald-600 text-white'
                      : 'bg-teal-100 text-teal-800'
                  }
                `}
              >
                {msg.role === 'user' ? (
                  <UserIcon size={15} />
                ) : (
                  <Bot size={16} />
                )}
              </div>

              {/* MENSAGEM */}

              <div
                className={`
                  max-w-[85%]
                  rounded-2xl
                  p-3.5
                  text-xs
                  sm:text-sm
                  leading-relaxed
                  whitespace-pre-wrap
                  ${
                    msg.role === 'user'
                      ? `
                        bg-emerald-600
                        text-white
                        rounded-tr-sm
                      `
                      : `
                        bg-white
                        text-slate-800
                        border
                        border-slate-200
                        shadow-sm
                        rounded-tl-sm
                      `
                  }
                `}
              >
                {msg.content}
              </div>
            </div>
          ))}

          {/* ===================================================
              LOADING
          ==================================================== */}

          {isLoading && (
            <div
              className="
                flex
                items-center
                gap-2
                text-slate-500
                text-xs
                py-2.5
                px-3
                bg-white
                rounded-xl
                border
                border-slate-200
                w-fit
                shadow-sm
              "
            >
              <RefreshCw
                size={14}
                className="
                  animate-spin
                  text-emerald-600
                "
              />

              <span>
                O Tutor TANmz está a pensar...
              </span>
            </div>
          )}
        </div>

        {/* =====================================================
            PERGUNTAS RÁPIDAS
        ====================================================== */}

        <div
          className="
            px-3
            py-2
            bg-white
            border-t
            border-slate-100
            overflow-x-auto
            flex
            gap-1.5
            no-scrollbar
          "
        >
          {quickQuestions.map((question, index) => (
            <button
              key={index}
              type="button"
              disabled={isLoading}
              onClick={() => handleSend(question)}
              className="
                text-[11px]
                whitespace-nowrap
                px-3
                py-1.5
                rounded-full
                bg-slate-100
                hover:bg-emerald-50
                hover:text-emerald-700
                text-slate-600
                transition-colors
                shrink-0
                disabled:opacity-50
              "
            >
              {question}
            </button>
          ))}
        </div>

        {/* =====================================================
            CAMPO DE PERGUNTA
        ====================================================== */}

        <form
          onSubmit={(event) => {
            event.preventDefault();

            handleSend();
          }}
          className="
            p-3
            bg-white
            border-t
            border-slate-200
            flex
            items-center
            gap-2
          "
        >
          <input
            type="text"
            value={inputQuery}
            onChange={(event) =>
              setInputQuery(event.target.value)
            }
            disabled={isLoading}
            placeholder={
              `Faça uma pergunta sobre ${currentSubject} ` +
              `(${currentClass})...`
            }
            className="
              flex-1
              text-xs
              sm:text-sm
              px-3.5
              py-2.5
              rounded-xl
              border
              border-slate-200
              focus:border-emerald-500
              focus:ring-1
              focus:ring-emerald-500
              outline-none
              disabled:bg-slate-100
            "
          />

          <button
            type="submit"
            disabled={
              !inputQuery.trim() ||
              isLoading ||
              !isOnline
            }
            className="
              p-2.5
              rounded-xl
              bg-emerald-600
              hover:bg-emerald-700
              text-white
              disabled:opacity-40
              disabled:cursor-not-allowed
              transition-colors
            "
            title="Enviar pergunta"
          >
            {isLoading ? (
              <RefreshCw
                size={17}
                className="animate-spin"
              />
            ) : (
              <Send size={17} />
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
