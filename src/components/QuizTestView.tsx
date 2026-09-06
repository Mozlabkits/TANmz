import React, { useState, useEffect } from 'react';
import {
  Clock,
  ArrowLeft,
  CheckCircle,
  XCircle,
  Award,
  AlertCircle,
  RotateCcw,
  Check,
  X,
  ChevronRight,
} from 'lucide-react';
import { QuizTest, Question } from '../types';
import { getScoreClassification } from '../utils/storage';

interface QuizTestViewProps {
  quiz: QuizTest;
  onBack: () => void;
  onFinishQuiz: (quizId: string, title: string, correctCount: number, totalCount: number) => void;
}

export const QuizTestView: React.FC<QuizTestViewProps> = ({
  quiz,
  onBack,
  onFinishQuiz,
}) => {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [secondsRemaining, setSecondsRemaining] = useState(quiz.timeLimitMinutes * 60);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Timer countdown
  useEffect(() => {
    if (isSubmitted) return;

    const interval = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleSubmitTest();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isSubmitted]);

  const questions = quiz.questions;
  const currentQuestion = questions[currentQuestionIdx];

  const handleSelectOption = (optIdx: number) => {
    if (isSubmitted) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestionIdx]: optIdx,
    }));
  };

  const handleSubmitTest = () => {
    setIsSubmitted(true);
    let correct = 0;
    questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctAnswerIndex) {
        correct++;
      }
    });
    onFinishQuiz(quiz.id, quiz.title, correct, questions.length);
  };

  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

  // Results calculation
  let correctCount = 0;
  if (isSubmitted) {
    questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctAnswerIndex) {
        correctCount++;
      }
    });
  }
  const scorePercent = Math.round((correctCount / Math.max(1, questions.length)) * 100);
  const classification = getScoreClassification(scorePercent);

  return (
    <div className="pb-24 max-w-2xl mx-auto px-4 pt-3 animate-in fade-in-50">
      {/* Top Navigation */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-white hover:bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200 transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Voltar aos Testes</span>
        </button>

        {!isSubmitted && (
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-mono text-xs font-bold border border-slate-200">
            <Clock size={14} className={secondsRemaining < 120 ? 'text-rose-600 animate-pulse' : 'text-slate-500'} />
            <span>{formattedTime}</span>
          </div>
        )}
      </div>

      {/* Quiz Header */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs mb-5">
        <div className="flex items-center gap-2 mb-2">
          <span
            className={`text-xs font-bold px-2 py-0.5 rounded-full ${
              quiz.subject === 'Biologia'
                ? 'bg-emerald-100 text-emerald-800'
                : 'bg-cyan-100 text-cyan-800'
            }`}
          >
            {quiz.subject}
          </span>
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
            {quiz.classLevel}
          </span>
        </div>
        <h1 className="text-lg sm:text-xl font-black text-slate-900 leading-tight">
          {quiz.title}
        </h1>
      </div>

      {/* ================= IF SUBMITTED: SHOW DIAGNOSTIC REPORT ================= */}
      {isSubmitted ? (
        <div className="space-y-5 animate-in zoom-in-95">
          {/* Diagnostic Score Card */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm text-center">
            <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-700 mx-auto flex items-center justify-center mb-3">
              <Award size={32} />
            </div>

            <h2 className="text-xl font-black text-slate-900 mb-1">
              Resultado da Avaliação
            </h2>
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-4xl font-black text-slate-900">
                {scorePercent}%
              </span>
              <span className="text-sm text-slate-400 font-medium">
                ({correctCount} de {questions.length} certas)
              </span>
            </div>

            {/* Educational Classification Badge (Section 16) */}
            <div
              className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold border mb-3 ${classification.badgeColor}`}
            >
              Classificação: {classification.label}
            </div>

            <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              {classification.description}
            </p>

            <div className="mt-5 flex justify-center gap-3">
              <button
                onClick={() => {
                  setSelectedAnswers({});
                  setIsSubmitted(false);
                  setCurrentQuestionIdx(0);
                  setSecondsRemaining(quiz.timeLimitMinutes * 60);
                }}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center gap-1.5 transition-colors"
              >
                <RotateCcw size={14} />
                <span>Repetir Teste</span>
              </button>
              <button
                onClick={onBack}
                className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors"
              >
                Continuar Estudos
              </button>
            </div>
          </div>

          {/* Detailed Question Review */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Revisão Detalhada das Questões
            </h3>

            {questions.map((q, idx) => {
              const userAns = selectedAnswers[idx];
              const isCorrect = userAns === q.correctAnswerIndex;

              return (
                <div
                  key={q.id}
                  className="bg-white rounded-2xl p-4 border border-slate-200 shadow-2xs"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold text-slate-500">
                      Questão {idx + 1}
                    </span>
                    <span
                      className={`text-[11px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 ${
                        isCorrect
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-rose-100 text-rose-800'
                      }`}
                    >
                      {isCorrect ? <Check size={12} /> : <X size={12} />}
                      <span>{isCorrect ? 'Acertou' : 'Errou'}</span>
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm font-semibold text-slate-900 mb-3">
                    {q.statement}
                  </p>

                  <div className="space-y-1.5 mb-3">
                    {q.options.map((opt, oIdx) => {
                      let itemClass = 'border-slate-200 text-slate-700';
                      if (oIdx === q.correctAnswerIndex) {
                        itemClass = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-bold';
                      } else if (userAns === oIdx) {
                        itemClass = 'border-rose-400 bg-rose-50 text-rose-900 font-semibold';
                      }

                      return (
                        <div
                          key={oIdx}
                          className={`p-2.5 rounded-lg border text-xs flex items-center justify-between ${itemClass}`}
                        >
                          <span>{opt}</span>
                          {oIdx === q.correctAnswerIndex && (
                            <Check size={14} className="text-emerald-600 shrink-0 ml-2" />
                          )}
                          {userAns === oIdx && oIdx !== q.correctAnswerIndex && (
                            <X size={14} className="text-rose-600 shrink-0 ml-2" />
                          )}
                        </div>
                      );
                    })}
                  </div>

                  <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-700 leading-relaxed border-l-2 border-emerald-500">
                    <strong className="font-semibold text-slate-900">
                      Explicação Científica:
                    </strong>{' '}
                    {q.explanation}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        /* ================= ACTIVE TEST MODE ================= */
        <div className="space-y-4">
          {/* Question Index Dots / Navigator */}
          <div className="flex items-center justify-between gap-1 overflow-x-auto pb-1 no-scrollbar">
            {questions.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentQuestionIdx(idx)}
                className={`w-8 h-8 rounded-xl font-bold text-xs shrink-0 transition-all ${
                  currentQuestionIdx === idx
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : selectedAnswers[idx] !== undefined
                    ? 'bg-emerald-100 text-emerald-800'
                    : 'bg-white text-slate-600 border border-slate-200'
                }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>

          {/* Current Question Card */}
          {currentQuestion && (
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-bold text-slate-400">
                  Questão {currentQuestionIdx + 1} de {questions.length}
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                  Nível: {currentQuestion.difficulty}
                </span>
              </div>

              <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-4 leading-relaxed">
                {currentQuestion.statement}
              </h3>

              <div className="space-y-2 mb-6">
                {currentQuestion.options.map((option, optIdx) => {
                  const isSelected = selectedAnswers[currentQuestionIdx] === optIdx;
                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleSelectOption(optIdx)}
                      className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm font-medium transition-all flex items-center justify-between ${
                        isSelected
                          ? 'border-emerald-500 bg-emerald-50/80 text-emerald-950 font-bold shadow-2xs'
                          : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <span>{option}</span>
                      {isSelected && (
                        <div className="w-2 h-2 rounded-full bg-emerald-600 shrink-0 ml-2" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <button
                  onClick={() => setCurrentQuestionIdx((p) => Math.max(0, p - 1))}
                  disabled={currentQuestionIdx === 0}
                  className="px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  Anterior
                </button>

                {currentQuestionIdx < questions.length - 1 ? (
                  <button
                    onClick={() => setCurrentQuestionIdx((p) => Math.min(questions.length - 1, p + 1))}
                    className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-900 hover:bg-slate-800 text-white transition-colors"
                  >
                    Próxima Questão
                  </button>
                ) : (
                  <button
                    onClick={handleSubmitTest}
                    className="px-5 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-600/30 transition-all"
                  >
                    Finalizar e Corrigir
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
