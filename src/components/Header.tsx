import React, { useState, useEffect } from 'react';
import { BookOpen, Sparkles, Search, Wifi, WifiOff, ChevronDown, Award } from 'lucide-react';
import { ClassLevel, Subject } from '../types';
import { ALL_CLASSES } from '../data/curriculumData';

interface HeaderProps {
  selectedClass: ClassLevel;
  onSelectClass: (c: ClassLevel) => void;
  onOpenSearch: () => void;
  onOpenTutor: () => void;
  points: number;
}

export const Header: React.FC<HeaderProps> = ({
  selectedClass,
  onSelectClass,
  onOpenSearch,
  onOpenTutor,
  points,
}) => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [isClassDropdownOpen, setIsClassDropdownOpen] = useState(false);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200/80 shadow-xs">
      <div className="max-w-5xl mx-auto px-4 py-2.5 flex items-center justify-between gap-3">
        {/* Brand & Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-sm shadow-emerald-500/20 font-bold text-lg tracking-tight">
            TAN
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-lg tracking-tight text-slate-900 leading-none">
                TANmz
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                Moçambique
              </span>
            </div>
            <p className="text-[11px] text-slate-500 font-medium leading-tight line-clamp-1">
              Biologia e Química ao alcance de todos
            </p>
          </div>
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-2">
          {/* Class Switcher */}
          <div className="relative">
            <button
              onClick={() => setIsClassDropdownOpen(!isClassDropdownOpen)}
              className="flex items-center gap-1 text-xs font-semibold px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200/80 text-slate-800 transition-colors border border-slate-200/60"
              title="Trocar de classe escolar"
            >
              <span>{selectedClass}</span>
              <ChevronDown size={14} className="text-slate-500" />
            </button>

            {isClassDropdownOpen && (
              <>
                <div
                  className="fixed inset-0 z-20"
                  onClick={() => setIsClassDropdownOpen(false)}
                />
                <div className="absolute right-0 mt-1.5 w-40 bg-white rounded-xl shadow-lg border border-slate-200 py-1 z-30 animate-in fade-in-50 zoom-in-95">
                  <div className="px-3 py-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Escolha a sua classe
                  </div>
                  {ALL_CLASSES.map((c) => (
                    <button
                      key={c}
                      onClick={() => {
                        onSelectClass(c);
                        setIsClassDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-xs font-medium transition-colors flex items-center justify-between ${
                        selectedClass === c
                          ? 'bg-emerald-50 text-emerald-700 font-semibold'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span>{c}</span>
                      {selectedClass === c && (
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                      )}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Quick Points Counter */}
          <div className="hidden sm:flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-lg bg-amber-50 text-amber-700 border border-amber-200/70">
            <Award size={14} className="text-amber-600" />
            <span>{points} pts</span>
          </div>

          {/* Search Button */}
          <button
            onClick={onOpenSearch}
            className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            title="Pesquisar conceitos e temas"
          >
            <Search size={18} />
          </button>

          {/* Ask AI Tutor */}
          <button
            onClick={onOpenTutor}
            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-xs shadow-teal-600/20 transition-all cursor-pointer"
            title="Pergunte ao Tutor Inteligente TANmz"
          >
            <Sparkles size={14} />
            <span className="hidden sm:inline">Pergunte ao Tutor</span>
            <span className="sm:hidden">Tutor</span>
          </button>

          {/* Offline/Online Status Pill */}
          <div
            className={`hidden md:flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full border ${
              isOnline
                ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                : 'bg-amber-50 text-amber-700 border-amber-200'
            }`}
            title={isOnline ? 'Conectado à Internet' : 'Modo Offline: Conteúdos locais disponíveis'}
          >
            {isOnline ? <Wifi size={12} /> : <WifiOff size={12} />}
            <span>{isOnline ? 'Online' : 'Offline'}</span>
          </div>
        </div>
      </div>
    </header>
  );
};
