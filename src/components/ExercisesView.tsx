import React, { useState } from 'react';
import {
  CheckCircle2,
  Filter,
  Play,
  Clock,
  Award,
  Check,
  X,
  HelpCircle,
  Dna,
  Atom,
} from 'lucide-react';
import { ClassLevel, Subject, Question, QuizTest } from '../types';
import { QUESTION_BANK, QUIZ_TESTS } from '../data/quizData';
import { ALL_CLASSES } from '../data/curriculumData';

interface ExercisesViewProps {
  currentClass: ClassLevel;
  onStartQuiz: (quiz: QuizTest) => void;
  onRecordExerciseAnswer: (isCorrect: boolean) => void;
}

export const ExercisesView: React.FC<ExercisesViewProps> = ({
  currentClass,
  onStartQuiz,
  onRecordExerciseAnswer,
}) => {
  const [activeTab, setActiveTab] = useState<'simulados' | 'banco'>('simulados');
  const [filterSubject, setFilterSubject] = useState<'Todas' | Subject>('Todas');
  const [filterClass, setFilterClass] = useState<ClassLevel>(currentClass);
  const [filterDifficulty, setFilterDifficulty] = useState<'Todas' | 'Fácil' | 'Médio' | 'Avançado'>('Todas');

  // Exercise interactive answering state for question bank practice
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [revealedResults, setRevealedResults] = useState<Record<string, boolean>>({});

  // Filtered Questions
  const filteredQuestions = QUESTION_BANK.filter((q) => {
    if (filterClass && q.classLevel !== filterClass) return false;
    if (filterSubject !== 'Todas' && q.subject !== filterSubject) return false;
    if (filterDifficulty !== 'Todas' && q.difficulty !== filterDifficulty) return false;
    return true;
  });

  // Filtered Quiz Tests
  const availableQuizzes = QUIZ_TESTS.filter(
    (quiz) => quiz.classLevel === filterClass && (filterSubject === 'Todas' || quiz.subject === filterSubject)
  );

  const handleAnswerPractice = (qId: string, optIdx: number, correctIdx: number) => {
    if (revealedResults[qId]) return;
    setUserAnswers((prev) => ({ ...prev, [qId]: optIdx }));
    setRevealedResults((prev) => ({ ...prev, [qId]: true }));
    onRecordExerciseAnswer(optIdx === correctIdx);
  };

  return (
    <div className="pb-24 max-w-4xl mx-auto px-4 pt-3 space-y-4 animate-in fade-in-50">
      {/* Tab Switcher: Simulados vs Banco de Questões */}
      <div className="bg-slate-200/80 p-1 rounded-2xl grid grid-cols-2 gap-1">
        <button
          onClick={() => setActiveTab('simulados')}
          className={`py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5 ${
            activeTab === 'simulados'
              ? 'bg-white text-slate-900 shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Clock size={16} />
          <span>Testes e Simulados</span>
        </button>

        <button
          onClick={() => setActiveTab('banco')}
          className={`py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5 ${
            activeTab === 'banco'
              ? 'bg-white text-slate-900 shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <CheckCircle2 size={16} />
          <span>Prática de Questões</span>
        </button>
      </div>

      {/* Filter Toolbar */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-2xs space-y-3">
        {/* Class Filter Scroll */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
          <span className="text-[11px] font-bold text-slate-400 uppercase shrink-0">
            Classe:
          </span>
          {ALL_CLASSES.map((c) => (
            <button
              key={c}
              onClick={() => setFilterClass(c)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                filterClass === c
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Subject and Difficulty Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
          <span className="text-[11px] font-bold text-slate-400 uppercase shrink-0">
            Disciplina:
          </span>
          {(['Todas', 'Biologia', 'Química'] as const).map((s) => (
            <button
              key={s}
              onClick={() => setFilterSubject(s)}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                filterSubject === s
                  ? s === 'Biologia'
                    ? 'bg-emerald-600 text-white'
                    : s === 'Química'
                    ? 'bg-cyan-600 text-white'
                    : 'bg-slate-800 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {s}
            </button>
          ))}

          {activeTab === 'banco' && (
            <>
              <span className="text-[11px] font-bold text-slate-400 uppercase shrink-0 ml-2">
                Dificuldade:
              </span>
              {(['Todas', 'Fácil', 'Médio', 'Avançado'] as const).map((d) => (
                <button
                  key={d}
                  onClick={() => setFilterDifficulty(d)}
                  className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-all ${
                    filterDifficulty === d
                      ? 'bg-amber-600 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {d}
                </button>
              ))}
            </>
          )}
        </div>
      </div>

      {/* ================= TAB 1: TESTES & SIMULADOS ================= */}
      {activeTab === 'simulados' && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-extrabold text-slate-900">
              Testes de Avaliação e Exames • {filterClass}
            </h3>
            <span className="text-xs text-slate-500">
              {availableQuizzes.length} simulados disponíveis
            </span>
          </div>

          {availableQuizzes.length === 0 ? (
            <div className="bg-white rounded-2xl p-8 text-center border border-slate-200 text-slate-500">
              <Award size={36} className="mx-auto mb-2 text-slate-300" />
              <p className="text-sm font-semibold">Nenhum simulado específico para este filtro.</p>
              <p className="text-xs text-slate-400 mt-1">
                Alterne para a aba "Prática de Questões" ou selecione outra classe para testar seus conhecimentos.
              </p>
            </div>
          ) : (
            availableQuizzes.map((quiz) => (
              <div
                key={quiz.id}
                className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs hover:border-emerald-400/80 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        quiz.subject === 'Biologia'
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-cyan-100 text-cyan-800'
                      }`}
                    >
                      {quiz.subject}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                      {quiz.classLevel}
                    </span>
                    <span className="text-xs text-slate-500 flex items-center gap-1 font-medium">
                      <Clock size={12} />
                      {quiz.timeLimitMinutes} minutos
                    </span>
                  </div>

                  <h4 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {quiz.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {quiz.questions.length} questões com relatório diagnóstico e classificação pedagógica.
                  </p>
                </div>

                <button
                  onClick={() => onStartQuiz(quiz)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-xs shrink-0"
                >
                  <Play size={14} fill="currentColor" />
                  <span>Iniciar Simulado</span>
                </button>
              </div>
            ))
          )}
        </div>
      )}

      {/* ================= TAB 2: BANCO DE QUESTÕES / PRÁTICA RÁPIDA ================= */}
      {activeTab === 'banco' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-extrabold text-slate-900">
              Banco de Questões Curriculares • {filterClass}
            </h3>
            <span className="text-xs text-slate-500">
              {filteredQuestions.length} questões encontradas
            </span>
          </div>

          {filteredQuestions.map((q, idx) => {
            const userPick = userAnswers[q.id];
            const isRevealed = revealedResults[q.id];
            const isCorrect = userPick === q.correctAnswerIndex;

            return (
              <div
                key={q.id}
                className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs space-y-3"
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        q.subject === 'Biologia'
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-cyan-100 text-cyan-800'
                      }`}
                    >
                      {q.subject}
                    </span>
                    <span className="text-xs font-bold text-slate-500">
                      Questão {idx + 1} • {q.theme}
                    </span>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                    Nível: {q.difficulty}
                  </span>
                </div>

                <p className="text-xs sm:text-sm font-semibold text-slate-900 leading-relaxed">
                  {q.statement}
                </p>

                <div className="space-y-2">
                  {q.options.map((opt, optIdx) => {
                    let btnStyle = 'border-slate-200 hover:bg-slate-50 text-slate-700';
                    if (isRevealed) {
                      if (optIdx === q.correctAnswerIndex) {
                        btnStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-bold';
                      } else if (userPick === optIdx) {
                        btnStyle = 'border-rose-400 bg-rose-50 text-rose-900';
                      }
                    }

                    return (
                      <button
                        key={optIdx}
                        disabled={isRevealed}
                        onClick={() => handleAnswerPractice(q.id, optIdx, q.correctAnswerIndex)}
                        className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all flex items-center justify-between ${btnStyle}`}
                      >
                        <span>{opt}</span>
                        {isRevealed && optIdx === q.correctAnswerIndex && (
                          <Check size={16} className="text-emerald-600 shrink-0 ml-2" />
                        )}
                        {isRevealed && userPick === optIdx && optIdx !== q.correctAnswerIndex && (
                          <X size={16} className="text-rose-600 shrink-0 ml-2" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {isRevealed && (
                  <div className="bg-slate-50 border-l-3 border-emerald-500 p-3 rounded-r-xl text-xs text-slate-700 leading-relaxed animate-in fade-in-50">
                    <p className="font-bold text-slate-900 mb-0.5">
                      {isCorrect ? '✅ Resposta Certa! (+10 pontos)' : '❌ Incorreto'}
                    </p>
                    <p>
                      <strong className="text-slate-800">Explicação: </strong>
                      {q.explanation}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
