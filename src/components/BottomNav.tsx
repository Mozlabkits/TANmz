import React from 'react';
import { Home, BookOpen, CheckCircle2, TrendingUp, User } from 'lucide-react';

export type TabType = 'home' | 'subjects' | 'exercises' | 'progress' | 'profile';

interface BottomNavProps {
  currentTab: TabType;
  onSelectTab: (tab: TabType) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentTab, onSelectTab }) => {
  const navItems = [
    { id: 'home' as TabType, label: 'Início', icon: Home },
    { id: 'subjects' as TabType, label: 'Disciplinas', icon: BookOpen },
    { id: 'exercises' as TabType, label: 'Exercícios', icon: CheckCircle2 },
    { id: 'progress' as TabType, label: 'Progresso', icon: TrendingUp },
    { id: 'profile' as TabType, label: 'Perfil', icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-lg safe-area-bottom">
      <div className="max-w-md mx-auto grid grid-cols-5 h-16">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSelectTab(item.id)}
              className={`flex flex-col items-center justify-center gap-1 transition-all relative ${
                isActive
                  ? 'text-emerald-700 font-semibold'
                  : 'text-slate-500 hover:text-slate-700 font-medium'
              }`}
            >
              {/* Active Indicator Pill */}
              {isActive && (
                <div className="absolute top-1.5 w-10 h-1 bg-emerald-600 rounded-full" />
              )}
              <div
                className={`p-1 rounded-xl transition-all ${
                  isActive ? 'bg-emerald-50 text-emerald-700' : ''
                }`}
              >
                <Icon size={20} strokeWidth={isActive ? 2.3 : 1.8} />
              </div>
              <span className="text-[10px] tracking-tight leading-none">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
