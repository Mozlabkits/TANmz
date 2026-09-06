import React, { useState } from 'react';
import {
  ArrowLeft,
  BookOpen,
  CheckCircle,
  AlertTriangle,
  Lightbulb,
  Check,
  X,
  Award,
  Sparkles,
  MapPin,
  ChevronRight,
  HelpCircle,
} from 'lucide-react';
import { Lesson, QuickCheck, ExerciseItem } from '../types';

interface LessonViewProps {
  lesson: Lesson;
  unitTitle: string;
  onBack: () => void;
  onCompleteLesson: (lessonId: string) => void;
  isCompleted: boolean;
  onOpenTutorForLesson: (topic: string) => void;
}

export const LessonView: React.FC<LessonViewProps> = ({
  lesson,
  unitTitle,
  onBack,
  onCompleteLesson,
  isCompleted,
  onOpenTutorForLesson,
}) => {
  // Quick checks interactive state
  const [quickCheckAnswers, setQuickCheckAnswers] = useState<Record<string, number>>({});
  const [showQuickCheckFeedback, setShowQuickCheckFeedback] = useState<Record<string, boolean>>({});

  // Exercises interactive state
  const [exerciseAnswers, setExerciseAnswers] = useState<Record<string, number>>({});
  const [showExerciseResult, setShowExerciseResult] = useState<Record<string, boolean>>({});

  const handleSelectQuickCheck = (checkId: string, optionIdx: number) => {
    setQuickCheckAnswers((prev) => ({ ...prev, [checkId]: optionIdx }));
    setShowQuickCheckFeedback((prev) => ({ ...prev, [checkId]: true }));
  };

  const handleSelectExercise = (exId: string, optionIdx: number) => {
    setExerciseAnswers((prev) => ({ ...prev, [exId]: optionIdx }));
    setShowExerciseResult((prev) => ({ ...prev, [exId]: true }));
  };

  return (
    <div className="pb-24 pt-2 max-w-3xl mx-auto px-4 animate-in fade-in-50">
      {/* Back Button & Top Action */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-white hover:bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200 transition-colors shadow-2xs"
        >
          <ArrowLeft size={16} />
          <span>Voltar aos Temas</span>
        </button>

        <button
          onClick={() => onOpenTutorForLesson(lesson.theme)}
          className="flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-xl bg-teal-50 hover:bg-teal-100 text-teal-800 border border-teal-200 transition-colors"
        >
          <Sparkles size={14} className="text-teal-600" />
          <span>Dúvidas neste tema? Pergunte ao Tutor</span>
        </button>
      </div>

      {/* 1. CABEÇALHO DA AULA (SEÇÃO 13 DO PROMPT) */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs mb-5">
        <div className="flex flex-wrap items-center gap-2 mb-2.5">
          <span
            className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
              lesson.subject === 'Biologia'
                ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                : 'bg-cyan-100 text-cyan-800 border border-cyan-200'
            }`}
          >
            {lesson.subject}
          </span>
          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
            {lesson.classLevel}
          </span>
          <span className="text-xs text-slate-500 font-medium">
            Aula nº {lesson.lessonNumber}
          </span>
        </div>

        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
          Unidade: {unitTitle}
        </p>
        <h1 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
          {lesson.theme}
        </h1>
      </div>

      {/* 2. OBJETIVOS DE APRENDIZAGEM */}
      <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-4 sm:p-5 mb-5">
        <h3 className="text-xs font-bold text-emerald-900 uppercase tracking-wider mb-3 flex items-center gap-1.5">
          <BookOpen size={16} className="text-emerald-700" />
          <span>Objetivos de Aprendizagem</span>
        </h3>
        <ul className="space-y-2">
          {lesson.objectives.map((obj, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-emerald-950">
              <span className="w-5 h-5 rounded-full bg-emerald-200 text-emerald-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <span className="leading-relaxed">{obj}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* 3. CONTEÚDO CIENTÍFICO E EXPLICATIVO */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs mb-5 space-y-4">
        <div>
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
            Definição Científica
          </h3>
          <div className="p-3.5 bg-slate-50 border-l-4 border-emerald-500 rounded-r-xl text-slate-800 font-medium text-sm sm:text-base leading-relaxed">
            {lesson.content.definition}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
            Explicação Progressiva
          </h3>
          <div className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
            {lesson.content.explanation.map((par, i) => (
              <p key={i}>{par}</p>
            ))}
          </div>
        </div>

        {lesson.content.diagramOrFormula && (
          <div className="bg-slate-900 text-emerald-400 font-mono text-xs sm:text-sm p-3.5 rounded-xl text-center overflow-x-auto border border-slate-800">
            {lesson.content.diagramOrFormula}
          </div>
        )}
      </div>

      {/* 4. EXEMPLO PRÁTICO */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs mb-5">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
          <Lightbulb size={16} className="text-amber-500" />
          <span>Exemplo Prático</span>
        </h3>
        <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
          {lesson.example.title}
        </h4>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
          {lesson.example.description}
        </p>
        {lesson.example.solution && (
          <div className="mt-2.5 p-3 rounded-lg bg-slate-50 text-slate-800 text-xs font-mono">
            {lesson.example.solution}
          </div>
        )}
      </div>

      {/* 5. APLICAÇÃO NO QUOTIDIANO / CONTEXTO DE MOÇAMBIQUE */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-50/60 border border-amber-200/80 rounded-2xl p-5 mb-5">
        <div className="flex items-center justify-between gap-2 mb-2">
          <h3 className="text-xs font-bold text-amber-900 uppercase tracking-wider flex items-center gap-1.5">
            <MapPin size={16} className="text-amber-700" />
            <span>Aplicação no Quotidiano em Moçambique</span>
          </h3>
          <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-amber-200/80 text-amber-900">
            {lesson.mozambiqueApplication.contextArea}
          </span>
        </div>
        <h4 className="text-sm font-bold text-slate-900 mb-1">
          {lesson.mozambiqueApplication.title}
        </h4>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
          {lesson.mozambiqueApplication.description}
        </p>
      </div>

      {/* 6. ATENÇÃO: ERROS COMUNS */}
      <div className="bg-rose-50/70 border border-rose-200 rounded-2xl p-4 sm:p-5 mb-5">
        <h3 className="text-xs font-bold text-rose-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
          <AlertTriangle size={16} className="text-rose-600" />
          <span>Atenção: Erro Comum de Estudantes</span>
        </h3>
        <div className="space-y-1.5 text-xs sm:text-sm">
          <p className="text-rose-950">
            <strong className="font-semibold text-rose-800">Erro comum:</strong> {lesson.attention.commonError}
          </p>
          <p className="text-emerald-950 bg-emerald-50/90 p-2.5 rounded-lg border border-emerald-200">
            <strong className="font-semibold text-emerald-800">Compreensão correta:</strong> {lesson.attention.correctUnderstanding}
          </p>
        </div>
      </div>

      {/* 7. RESUMO DOS PONTOS ESSENCIAIS */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs mb-5">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
          Resumo dos Pontos Essenciais
        </h3>
        <ul className="space-y-2">
          {lesson.summaryPoints.map((point, idx) => (
            <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
              <CheckCircle size={16} className="text-emerald-600 shrink-0 mt-0.5" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* 8. VERIFICAÇÃO RÁPIDA (3 A 5 PERGUNTAS) */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 mb-5">
        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-1.5">
          <HelpCircle size={16} className="text-slate-600" />
          <span>Verificação Rápida de Conceitos</span>
        </h3>
        <p className="text-xs text-slate-500 mb-4">
          Responda para checar imediatamente o que você acabou de aprender.
        </p>

        <div className="space-y-4">
          {lesson.quickChecks.map((qc, qcIdx) => {
            const userPick = quickCheckAnswers[qc.id];
            const isAnswered = showQuickCheckFeedback[qc.id];
            const isCorrect = userPick === qc.correctAnswerIndex;

            return (
              <div key={qc.id} className="bg-white rounded-xl p-4 border border-slate-200 shadow-2xs">
                <p className="text-xs sm:text-sm font-semibold text-slate-900 mb-2.5">
                  {qcIdx + 1}. {qc.question}
                </p>

                <div className="space-y-1.5 mb-2.5">
                  {qc.options.map((opt, optIdx) => {
                    let btnStyle = 'border-slate-200 hover:bg-slate-50 text-slate-700';
                    if (isAnswered) {
                      if (optIdx === qc.correctAnswerIndex) {
                        btnStyle = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-semibold';
                      } else if (userPick === optIdx) {
                        btnStyle = 'border-rose-400 bg-rose-50 text-rose-800';
                      }
                    }

                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleSelectQuickCheck(qc.id, optIdx)}
                        className={`w-full text-left p-2.5 rounded-lg border text-xs transition-all flex items-center justify-between ${btnStyle}`}
                      >
                        <span>{opt}</span>
                        {isAnswered && optIdx === qc.correctAnswerIndex && (
                          <Check size={14} className="text-emerald-600 shrink-0 ml-2" />
                        )}
                        {isAnswered && userPick === optIdx && optIdx !== qc.correctAnswerIndex && (
                          <X size={14} className="text-rose-600 shrink-0 ml-2" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {isAnswered && (
                  <div
                    className={`p-2.5 rounded-lg text-xs leading-relaxed ${
                      isCorrect ? 'bg-emerald-50 text-emerald-900' : 'bg-slate-100 text-slate-800'
                    }`}
                  >
                    <strong className="font-semibold">
                      {isCorrect ? 'Correto! ' : 'Explicação: '}
                    </strong>
                    {qc.explanation}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* 9. EXERCÍCIOS COM NÍVEIS E EXPLICAÇÃO DETALHADA */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs mb-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Exercícios de Fixação
          </h3>
          <span className="text-xs text-slate-400">
            Correção imediata e explicação
          </span>
        </div>

        <div className="space-y-4">
          {lesson.exercises.map((ex, exIdx) => {
            const userPick = exerciseAnswers[ex.id];
            const isAnswered = showExerciseResult[ex.id];
            const isCorrect = userPick === Number(ex.correctAnswer);

            const difficultyColors: Record<string, string> = {
              Fácil: 'bg-emerald-100 text-emerald-800',
              Médio: 'bg-amber-100 text-amber-800',
              Avançado: 'bg-rose-100 text-rose-800',
            };

            return (
              <div key={ex.id} className="border border-slate-200 rounded-xl p-4">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold text-slate-500">
                    Questão {exIdx + 1}
                  </span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${difficultyColors[ex.difficulty] || 'bg-slate-100'}`}>
                    Nível: {ex.difficulty}
                  </span>
                </div>

                <p className="text-xs sm:text-sm font-medium text-slate-900 mb-3 leading-relaxed">
                  {ex.statement}
                </p>

                {ex.options && (
                  <div className="space-y-1.5 mb-3">
                    {ex.options.map((opt, optIdx) => {
                      let btnClasses = 'border-slate-200 hover:bg-slate-50 text-slate-700';
                      if (isAnswered) {
                        if (optIdx === Number(ex.correctAnswer)) {
                          btnClasses = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-semibold';
                        } else if (userPick === optIdx) {
                          btnClasses = 'border-rose-400 bg-rose-50 text-rose-800';
                        }
                      }

                      return (
                        <button
                          key={optIdx}
                          onClick={() => handleSelectExercise(ex.id, optIdx)}
                          className={`w-full text-left p-2.5 rounded-lg border text-xs transition-all flex items-center justify-between ${btnClasses}`}
                        >
                          <span>{opt}</span>
                          {isAnswered && optIdx === Number(ex.correctAnswer) && (
                            <Check size={14} className="text-emerald-600 shrink-0 ml-2" />
                          )}
                          {isAnswered && userPick === optIdx && optIdx !== Number(ex.correctAnswer) && (
                            <X size={14} className="text-rose-600 shrink-0 ml-2" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* Resposta e Explicação fundamentada */}
                {isAnswered && (
                  <div className="bg-slate-50 border-l-3 border-emerald-500 p-3 rounded-r-lg text-xs leading-relaxed text-slate-800 animate-in fade-in-50">
                    <p className="font-bold mb-0.5 text-slate-900">
                      {isCorrect ? '✅ Resposta Correta!' : '❌ Resposta Incorreta'}
                    </p>
                    <p className="text-slate-600">
                      <strong className="text-slate-800">Por que esta é a resposta certa: </strong>
                      {ex.explanation}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Completion & Next Action Bar */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          {isCompleted ? (
            <div className="flex items-center gap-1.5 text-emerald-700 font-bold text-xs">
              <CheckCircle size={18} />
              <span>Aula Concluída! (+20 pontos ganhos)</span>
            </div>
          ) : (
            <div className="flex items-center gap-1.5 text-slate-600 text-xs">
              <Award size={18} className="text-amber-500" />
              <span>Conclua esta aula para registrar seu progresso escolar</span>
            </div>
          )}
        </div>

        <button
          onClick={() => {
            onCompleteLesson(lesson.id);
          }}
          className={`w-full sm:w-auto px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 ${
            isCompleted
              ? 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm shadow-emerald-600/30'
          }`}
        >
          <CheckCircle size={16} />
          <span>{isCompleted ? 'Registrada como Concluída' : 'Marcar Aula como Concluída'}</span>
        </button>
      </div>
    </div>
  );
};
