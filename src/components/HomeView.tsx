import React from 'react';
import {
  BookOpen,
  Sparkles,
  TrendingUp,
  Search,
  Flame,
  Award,
  ChevronRight,
  CheckCircle2,
  Calendar,
  Atom,
  Dna,
  Zap,
} from 'lucide-react';
import { ClassLevel, Subject, StudentProfile } from '../types';
import { CURRICULUM_UNITS } from '../data/curriculumData';

interface HomeViewProps {
  profile: StudentProfile;
  onSelectSubjectTab: (subject: Subject) => void;
  onOpenSearch: () => void;
  onOpenProgress: () => void;
  onOpenTutor: () => void;
  onContinueStudy: () => void;
  onChangeClass: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  profile,
  onSelectSubjectTab,
  onOpenSearch,
  onOpenProgress,
  onOpenTutor,
  onContinueStudy,
  onChangeClass,
}) => {
  // Calculate total units and completed count for selected class
  const classUnits = CURRICULUM_UNITS.filter((u) => u.classLevel === profile.selectedClass);
  const bioUnits = classUnits.filter((u) => u.subject === 'Biologia');
  const quiUnits = classUnits.filter((u) => u.subject === 'Química');

  const totalTopicsInClass = classUnits.reduce((acc, u) => acc + u.lessonTopics.length, 0);
  const completedInClass = profile.completedLessonIds.length;
  const progressPercent = Math.min(100, Math.round((completedInClass / Math.max(1, totalTopicsInClass)) * 100));

  return (
    <div className="pb-24 max-w-4xl mx-auto px-4 pt-3 sm:pt-4 space-y-5 animate-in fade-in-50">
      {/* 1. Hero Card with Branding & Motivational Quote */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-800 via-teal-800 to-slate-900 text-white p-6 sm:p-8 shadow-xl shadow-emerald-950/15">
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[11px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-200 border border-emerald-400/30">
              Plataforma Oficial TANmz
            </span>
            <span className="text-xs text-emerald-100/80 font-medium">
              Moçambique
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-black tracking-tight mb-2">
            Olá, {profile.name}!
          </h1>
          <p className="text-sm sm:text-base text-emerald-100/95 font-medium italic max-w-xl leading-relaxed mb-6">
            "A ciência transforma o conhecimento em futuro para Moçambique. Aprenda Biologia e Química no seu ritmo, onde quer que esteja."
          </p>

          {/* Main Action Buttons */}
          <div className="flex flex-wrap gap-2.5">
            <button
              onClick={() => onSelectSubjectTab('Biologia')}
              className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95 flex items-center gap-2"
            >
              <BookOpen size={16} />
              <span>Começar a estudar</span>
            </button>

            <button
              onClick={onContinueStudy}
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm border border-white/20 transition-all flex items-center gap-2"
            >
              <Zap size={16} className="text-amber-300" />
              <span>Continuar estudo</span>
            </button>

            <button
              onClick={onOpenSearch}
              className="px-3.5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm border border-white/20 transition-all flex items-center gap-1.5"
            >
              <Search size={16} />
              <span>Pesquisar</span>
            </button>

            <button
              onClick={onOpenProgress}
              className="px-3.5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm border border-white/20 transition-all flex items-center gap-1.5"
            >
              <TrendingUp size={16} />
              <span>Meu progresso</span>
            </button>
          </div>
        </div>

        {/* Decorative subtle background illustration elements */}
        <div className="absolute right-0 -bottom-6 opacity-10 pointer-events-none">
          <Atom size={220} />
        </div>
      </div>

      {/* 2. Key Metrics Row (Classe, Progresso Geral, Pontos, Sequência) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {/* Selected Class */}
        <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-2xs">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
            Classe Selecionada
          </span>
          <div className="flex items-center justify-between">
            <span className="text-base sm:text-lg font-black text-slate-900">
              {profile.selectedClass}
            </span>
            <button
              onClick={onChangeClass}
              className="text-[10px] font-bold text-emerald-700 hover:text-emerald-800 underline"
            >
              Mudar
            </button>
          </div>
          <span className="text-[11px] text-slate-500 block mt-0.5">
            {totalTopicsInClass} temas curriculares
          </span>
        </div>

        {/* General Progress */}
        <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-2xs">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
            Progresso Geral
          </span>
          <div className="flex items-center gap-2">
            <span className="text-base sm:text-lg font-black text-emerald-700">
              {progressPercent}%
            </span>
            <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-emerald-600 rounded-full transition-all"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
          <span className="text-[11px] text-slate-500 block mt-0.5">
            {completedInClass} conteúdos concluídos
          </span>
        </div>

        {/* Points */}
        <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-2xs">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
            Pontuação TANmz
          </span>
          <div className="flex items-center gap-1.5">
            <Award size={18} className="text-amber-500" />
            <span className="text-base sm:text-lg font-black text-slate-900">
              {profile.points}
            </span>
            <span className="text-xs text-slate-500">pts</span>
          </div>
          <span className="text-[11px] text-slate-500 block mt-0.5">
            Exercícios e testes
          </span>
        </div>

        {/* Study Streak */}
        <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-2xs">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
            Sequência de Estudo
          </span>
          <div className="flex items-center gap-1.5">
            <Flame size={18} className="text-orange-500 fill-orange-500" />
            <span className="text-base sm:text-lg font-black text-slate-900">
              {profile.studyStreakDays}
            </span>
            <span className="text-xs text-slate-500">{profile.studyStreakDays === 1 ? 'dia' : 'dias'}</span>
          </div>
          <span className="text-[11px] text-slate-500 block mt-0.5">
            Mantenha o ritmo!
          </span>
        </div>
      </div>

      {/* 3. TWO MAJOR SUBJECT AREAS: BIOLOGIA & QUÍMICA (SEÇÃO 4 DO PROMPT) */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-extrabold text-slate-900">
            Grandes Áreas do Conhecimento
          </h2>
          <span className="text-xs font-semibold text-slate-500">
            {profile.selectedClass}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* BIOLOGIA CARD */}
          <div
            onClick={() => onSelectSubjectTab('Biologia')}
            className="group cursor-pointer rounded-3xl p-6 bg-gradient-to-br from-emerald-50 via-teal-50/50 to-white border border-emerald-200/90 hover:border-emerald-500/80 shadow-xs hover:shadow-md transition-all"
          >
            <div className="flex items-start justify-between gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-md shadow-emerald-600/20 group-hover:scale-105 transition-transform">
                <Dna size={26} />
              </div>
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">
                {bioUnits.length} Unidades
              </span>
            </div>

            <h3 className="text-xl font-black text-slate-900 group-hover:text-emerald-800 transition-colors mb-1">
              BIOLOGIA
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 mb-4 leading-relaxed">
              Explore o mundo dos seres vivos, ecossistemas moçambicanos, citologia, genética mendeliana e fisiologia humana.
            </p>

            <div className="flex items-center justify-between text-xs font-bold text-emerald-700 pt-2 border-t border-emerald-200/60">
              <span>Abrir Unidades de Biologia</span>
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* QUÍMICA CARD */}
          <div
            onClick={() => onSelectSubjectTab('Química')}
            className="group cursor-pointer rounded-3xl p-6 bg-gradient-to-br from-cyan-50 via-sky-50/50 to-white border border-cyan-200/90 hover:border-cyan-500/80 shadow-xs hover:shadow-md transition-all"
          >
            <div className="flex items-start justify-between gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-600 text-white flex items-center justify-center shadow-md shadow-cyan-600/20 group-hover:scale-105 transition-transform">
                <Atom size={26} />
              </div>
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-cyan-100 text-cyan-800">
                {quiUnits.length} Unidades
              </span>
            </div>

            <h3 className="text-xl font-black text-slate-900 group-hover:text-cyan-800 transition-colors mb-1">
              QUÍMICA
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 mb-4 leading-relaxed">
              Descubra a estrutura da matéria, reações balanceadas, tabela periódica, estequiometria do Mol e hidrocarbonetos.
            </p>

            <div className="flex items-center justify-between text-xs font-bold text-cyan-700 pt-2 border-t border-cyan-200/60">
              <span>Abrir Unidades de Química</span>
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>

      {/* 4. Banner: Pergunte ao Tutor Inteligente */}
      <div className="bg-gradient-to-r from-teal-900 to-emerald-900 text-white rounded-3xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-emerald-300 shrink-0">
            <Sparkles size={24} />
          </div>
          <div>
            <h3 className="font-bold text-base sm:text-lg leading-tight">
              Tutor de IA TANmz Disponível
            </h3>
            <p className="text-xs text-emerald-100/80 leading-relaxed max-w-md">
              Tem dúvidas na {profile.selectedClass}? Pergunte ao Tutor e receba explicações científicas simples, diretas e contextualizadas para Moçambique.
            </p>
          </div>
        </div>
        <button
          onClick={onOpenTutor}
          className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shrink-0 text-center"
        >
          Pergunte ao Tutor
        </button>
      </div>
    </div>
  );
};
