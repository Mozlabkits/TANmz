import React from 'react';
import {
  TrendingUp,
  Award,
  Flame,
  CheckCircle2,
  BookOpen,
  Calendar,
  Sparkles,
  Dna,
  Atom,
  Clock,
} from 'lucide-react';
import { StudentProfile } from '../types';
import { CURRICULUM_UNITS } from '../data/curriculumData';
import { getScoreClassification } from '../utils/storage';

interface ProgressViewProps {
  profile: StudentProfile;
  onNavigateToStudy: () => void;
}

export const ProgressView: React.FC<ProgressViewProps> = ({
  profile,
  onNavigateToStudy,
}) => {
  // Curriculum statistics
  const classUnits = CURRICULUM_UNITS.filter((u) => u.classLevel === profile.selectedClass);
  const totalTopics = classUnits.reduce((acc, u) => acc + u.lessonTopics.length, 0);
  const completedTopicsCount = profile.completedLessonIds.length;
  const overallPercentage = Math.min(100, Math.round((completedTopicsCount / Math.max(1, totalTopics)) * 100));

  // Average quiz score
  const avgQuizScore =
    profile.quizScores.length > 0
      ? Math.round(
          profile.quizScores.reduce((acc, q) => acc + q.scorePercent, 0) / profile.quizScores.length
        )
      : 0;

  const currentClassification = getScoreClassification(avgQuizScore || 75);

  // Motivational Badges
  const badges = [
    {
      id: 'b1',
      title: 'Primeiros Passos',
      desc: 'Iniciou seus estudos no TANmz',
      achieved: profile.points > 0,
      icon: BookOpen,
      color: 'bg-emerald-100 text-emerald-800',
    },
    {
      id: 'b2',
      title: 'Sequência Ativa',
      desc: `${profile.studyStreakDays} dias consecutivos de foco`,
      achieved: profile.studyStreakDays >= 1,
      icon: Flame,
      color: 'bg-orange-100 text-orange-800',
    },
    {
      id: 'b3',
      title: 'Praticante Dedicado',
      desc: 'Mais de 3 exercícios resolvidos',
      achieved: profile.exercisesCompletedCount >= 3,
      icon: CheckCircle2,
      color: 'bg-teal-100 text-teal-800',
    },
    {
      id: 'b4',
      title: 'Avaliador Oficial',
      desc: 'Realizou teste de avaliação diagnóstica',
      achieved: profile.quizzesCompletedCount >= 1,
      icon: Award,
      color: 'bg-amber-100 text-amber-800',
    },
  ];

  return (
    <div className="pb-24 max-w-4xl mx-auto px-4 pt-3 space-y-5 animate-in fade-in-50">
      {/* 1. Header Banner */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              Painel de Rendimento Académico
            </span>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
              Progresso Escolar: {profile.name}
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Classe Atual: <strong className="text-slate-800">{profile.selectedClass}</strong> • Ensino Secundário Geral de Moçambique
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-100 text-center">
              <span className="text-xs text-emerald-800 font-bold block">Pontos Totais</span>
              <span className="text-xl font-black text-emerald-700">{profile.points}</span>
            </div>
            <div className="p-3 bg-orange-50 rounded-2xl border border-orange-100 text-center">
              <span className="text-xs text-orange-800 font-bold block">Sequência</span>
              <span className="text-xl font-black text-orange-600">{profile.studyStreakDays}d</span>
            </div>
          </div>
        </div>

        {/* Overall Curriculum Bar */}
        <div className="mt-5 pt-4 border-t border-slate-100">
          <div className="flex items-center justify-between text-xs mb-1.5 font-bold">
            <span className="text-slate-700">Cobertura do Programa Curricular</span>
            <span className="text-emerald-700">{overallPercentage}% concluído</span>
          </div>
          <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald-600 rounded-full transition-all duration-500"
              style={{ width: `${overallPercentage}%` }}
            />
          </div>
          <div className="flex justify-between text-[11px] text-slate-400 mt-1">
            <span>{completedTopicsCount} temas concluídos</span>
            <span>{totalTopics} temas no currículo da {profile.selectedClass}</span>
          </div>
        </div>
      </div>

      {/* 2. Key Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-2xs">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
            Aulas Concluídas
          </span>
          <span className="text-2xl font-black text-slate-900">
            {profile.completedLessonIds.length}
          </span>
          <span className="text-[11px] text-slate-500 block mt-0.5">Leituras realizadas</span>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-2xs">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
            Exercícios Feitos
          </span>
          <span className="text-2xl font-black text-teal-700">
            {profile.exercisesCompletedCount}
          </span>
          <span className="text-[11px] text-slate-500 block mt-0.5">Questões resolvidas</span>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-2xs">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
            Testes e Simulados
          </span>
          <span className="text-2xl font-black text-slate-900">
            {profile.quizzesCompletedCount}
          </span>
          <span className="text-[11px] text-slate-500 block mt-0.5">Avaliações completadas</span>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-2xs">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
            Média de Acertos
          </span>
          <span className="text-2xl font-black text-emerald-700">
            {avgQuizScore > 0 ? `${avgQuizScore}%` : 'N/A'}
          </span>
          <span className="text-[11px] text-slate-500 block mt-0.5">
            {avgQuizScore > 0 ? currentClassification.label : 'Faça um teste'}
          </span>
        </div>
      </div>

      {/* 3. Motivational Badges (Seção 18) */}
      <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-xs">
        <h3 className="text-sm font-black text-slate-900 mb-3 flex items-center gap-2">
          <Award size={18} className="text-amber-500" />
          <span>Conquistas Académicas Desbloqueadas</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {badges.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.id}
                className={`p-3.5 rounded-2xl border flex items-center gap-3 transition-all ${
                  b.achieved
                    ? 'bg-white border-slate-200 shadow-2xs'
                    : 'bg-slate-50/70 border-dashed border-slate-200 opacity-60'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                    b.achieved ? b.color : 'bg-slate-200 text-slate-400'
                  }`}
                >
                  <Icon size={20} />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                    {b.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-tight mt-0.5">
                    {b.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. Recent Test History */}
      <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-xs">
        <h3 className="text-sm font-black text-slate-900 mb-3 flex items-center gap-2">
          <Clock size={18} className="text-slate-500" />
          <span>Histórico Recente de Simulados</span>
        </h3>

        {profile.quizScores.length === 0 ? (
          <div className="py-6 text-center text-slate-400">
            <p className="text-xs font-medium">Você ainda não realizou simulados cronometrados.</p>
            <button
              onClick={onNavigateToStudy}
              className="mt-3 px-4 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition-colors"
            >
              Fazer Primeiro Simulado
            </button>
          </div>
        ) : (
          <div className="divide-y divide-slate-100">
            {profile.quizScores.map((item, idx) => {
              const cls = getScoreClassification(item.scorePercent);
              return (
                <div key={idx} className="py-3 flex items-center justify-between gap-3">
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                      {item.quizTitle}
                    </h4>
                    <span className="text-[11px] text-slate-400">
                      Data: {item.completedAt} • Acertos: {item.correctCount}/{item.totalCount}
                    </span>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="text-sm font-black text-slate-900 block">
                      {item.scorePercent}%
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${cls.badgeColor}`}>
                      {cls.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
