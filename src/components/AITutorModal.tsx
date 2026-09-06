import React, { useState } from 'react';
import { Sparkles, X, Send, AlertCircle, WifiOff, Bot, User as UserIcon, RefreshCw, BookOpen } from 'lucide-react';
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

export const AITutorModal: React.FC<AITutorModalProps> = ({
  isOpen,
  onClose,
  currentClass,
  currentSubject = 'Biologia',
  lessonContextTopic,
}) => {
  const [inputQuery, setInputQuery] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: `Olá! Eu sou o seu Tutor Inteligente TANmz. Estou preparado para responder às suas dúvidas de Biologia e Química de forma simples, direta e adequada à sua ${currentClass}.\n\nComo posso ajudar nos seus estudos hoje?`,
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [offlineNotice, setOfflineNotice] = useState(!navigator.onLine);

  if (!isOpen) return null;

  const quickQuestions = [
    `Explique o conceito de fotossíntese para a ${currentClass}`,
    `Qual é a diferença entre ligação iónica e covalente?`,
    `Como funciona a seleção natural descrita por Darwin?`,
    `Dê um exemplo de reação química do dia a dia em Moçambique`,
  ];

  const handleSend = async (textToSend?: string) => {
    const query = (textToSend || inputQuery).trim();
    if (!query || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: query,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputQuery('');
    setIsLoading(true);

    if (!navigator.onLine) {
      setOfflineNotice(true);
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            role: 'assistant',
            content: `Você está offline. Os conteúdos disponíveis (aulas, resumos, exercícios e testes) continuam 100% acessíveis no menu do TANmz sem necessidade de internet!\n\nAssim que reconectar à internet, poderei gerar novas explicações personalizadas com IA para você.`,
          },
        ]);
        setIsLoading(false);
      }, 500);
      return;
    }

    try {
      const response = await fetch(getApiEndpoint('/api/tutor'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: query,
          classLevel: currentClass,
          subject: currentSubject,
          history: messages.slice(-5),
        }),
      });

      if (!response.ok) {
        throw new Error('Falha no servidor do Tutor.');
      }

      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: data.reply || 'Desculpe, não consegui obter a resposta no momento. Tente novamente!',
        },
      ]);
    } catch (err) {
      console.warn('Erro ao chamar tutor:', err);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: `Tivemos uma pequena oscilação na conexão com a IA, mas não se preocupe! Consulte as aulas e resumos de ${currentSubject} na ${currentClass} no menu principal do TANmz, onde todos os conteúdos oficiais estão disponíveis offline.`,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white w-full max-w-2xl h-[85vh] max-h-[680px] rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in fade-in-50 zoom-in-95">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center">
              <Sparkles size={18} className="text-emerald-200" />
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-base leading-tight">
                Pergunte ao Tutor TANmz
              </h3>
              <p className="text-[11px] text-emerald-100/90 leading-tight">
                Ajustado para a {currentClass} • Biologia e Química
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Offline Banner if detected */}
        {offlineNotice && (
          <div className="bg-amber-50 border-b border-amber-200 px-4 py-2 text-xs text-amber-800 flex items-center gap-2">
            <WifiOff size={14} className="shrink-0 text-amber-600" />
            <span>
              Você está offline. As funções de IA requerem internet, mas todas as aulas, exercícios e testes continuam acessíveis no TANmz!
            </span>
          </div>
        )}

        {/* Messages Scroll Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-slate-50/50">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start gap-2.5 ${
                msg.role === 'user' ? 'flex-row-reverse' : ''
              }`}
            >
              <div
                className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs shrink-0 ${
                  msg.role === 'user'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-teal-100 text-teal-800'
                }`}
              >
                {msg.role === 'user' ? <UserIcon size={14} /> : <Bot size={15} />}
              </div>
              <div
                className={`max-w-[85%] rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed whitespace-pre-wrap ${
                  msg.role === 'user'
                    ? 'bg-emerald-600 text-white rounded-tr-xs'
                    : 'bg-white text-slate-800 border border-slate-200 shadow-2xs rounded-tl-xs'
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex items-center gap-2 text-slate-500 text-xs py-2 px-3 bg-white rounded-xl border border-slate-200 w-fit">
              <RefreshCw size={14} className="animate-spin text-emerald-600" />
              <span>O Tutor TANmz está a formular a explicação...</span>
            </div>
          )}
        </div>

        {/* Quick Suggestion Pills */}
        <div className="px-3 py-2 bg-white border-t border-slate-100 overflow-x-auto flex gap-1.5 no-scrollbar">
          {quickQuestions.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(q)}
              className="text-[11px] whitespace-nowrap px-2.5 py-1 rounded-full bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 text-slate-600 transition-colors shrink-0"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="p-3 bg-white border-t border-slate-200 flex items-center gap-2"
        >
          <input
            type="text"
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            placeholder={`Faça uma pergunta sobre Biologia ou Química (${currentClass})...`}
            className="flex-1 text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-hidden"
          />
          <button
            type="submit"
            disabled={!inputQuery.trim() || isLoading}
            className="p-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            title="Enviar pergunta"
          >
            <Send size={16} />
          </button>
        </form>
      </div>
    </div>
  );
};
