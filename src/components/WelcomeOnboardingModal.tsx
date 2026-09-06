import React from 'react';
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { ClassLevel } from '../types';
import { ALL_CLASSES } from '../data/curriculumData';

interface WelcomeOnboardingModalProps {
  isOpen: boolean;
  onSelectClass: (selected: ClassLevel) => void;
}

export const WelcomeOnboardingModal: React.FC<WelcomeOnboardingModalProps> = ({
  isOpen,
  onSelectClass,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/75 backdrop-blur-sm animate-in fade-in-50">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl border border-slate-200 p-6 text-center animate-in zoom-in-95">
        {/* TANmz Badge */}
        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-md shadow-emerald-500/25">
          <span className="font-extrabold text-2xl tracking-tight">TAN</span>
        </div>

        <h2 className="text-2xl font-black text-slate-900 mb-1">
          Bem-vindo ao TANmz!
        </h2>
        <p className="text-sm font-medium text-emerald-700 mb-1">
          Biologia e Química ao alcance de todos
        </p>
        <p className="text-xs text-slate-500 mb-6 leading-relaxed">
          Aprenda Biologia e Química do seu jeito com resumos claros, exemplos de Moçambique, exercícios imediatos e modo offline.
        </p>

        {/* Question */}
        <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 mb-6">
          <h3 className="text-sm font-bold text-slate-800 mb-3">
            Qual é a sua classe?
          </h3>
          <div className="grid grid-cols-3 gap-2">
            {ALL_CLASSES.map((cls) => (
              <button
                key={cls}
                onClick={() => onSelectClass(cls)}
                className="py-3 px-2 rounded-xl bg-white hover:bg-emerald-600 hover:text-white text-slate-800 font-bold text-xs sm:text-sm border border-slate-200/80 hover:border-emerald-600 shadow-xs hover:shadow-md transition-all active:scale-95 flex flex-col items-center justify-center gap-1 group"
              >
                <span>{cls}</span>
                <span className="text-[10px] font-normal text-slate-400 group-hover:text-emerald-100">
                  Ensino Secundário
                </span>
              </button>
            ))}
          </div>
        </div>

        <p className="text-[11px] text-slate-400">
          Você poderá alterar a sua classe a qualquer momento no topo do aplicativo.
        </p>
      </div>
    </div>
  );
};
