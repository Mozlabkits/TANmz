import React, { useState } from 'react';
import { BookOpen, CheckCircle, ChevronRight, Dna, Atom, Layers } from 'lucide-react';
import { ClassLevel, Subject, Unit } from '../types';
import { ALL_CLASSES, CURRICULUM_UNITS } from '../data/curriculumData';
import { DETAILED_LESSONS } from '../data/lessonsData';

interface SubjectsViewProps {
  currentClass: ClassLevel;
  onChangeClass: (c: ClassLevel) => void;
  activeSubject: Subject;
  onChangeSubject: (s: Subject) => void;
  onOpenLesson: (unitId: string, topicTitle: string, unitTitle: string) => void;
  completedLessonIds: string[];
}

export const SubjectsView: React.FC<SubjectsViewProps> = ({
  currentClass,
  onChangeClass,
  activeSubject,
  onChangeSubject,
  onOpenLesson,
  completedLessonIds,
}) => {
  const [expandedUnitId, setExpandedUnitId] = useState<string | null>(null);

  // Filter units for the selected class and subject
  const units = CURRICULUM_UNITS.filter(
    (u) => u.classLevel === currentClass && u.subject === activeSubject
  );

  return (
    <div className="pb-24 max-w-4xl mx-auto px-4 pt-3 space-y-4 animate-in fade-in-50">
      {/* 1. Class Selector Horizontal Scroll / Pills */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            1. Selecione a Classe Escolar
          </h2>
          <span className="text-xs font-semibold text-slate-500">
            {currentClass}
          </span>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
          {ALL_CLASSES.map((cls) => (
            <button
              key={cls}
              onClick={() => onChangeClass(cls)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                currentClass === cls
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
              }`}
            >
              {cls}
            </button>
          ))}
        </div>
      </div>

      {/* 2. Subject Switcher: Biologia vs Química */}
      <div className="bg-slate-200/80 p-1 rounded-2xl grid grid-cols-2 gap-1">
        <button
          onClick={() => onChangeSubject('Biologia')}
          className={`py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 ${
            activeSubject === 'Biologia'
              ? 'bg-emerald-600 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Dna size={16} />
          <span>Biologia</span>
        </button>

        <button
          onClick={() => onChangeSubject('Química')}
          className={`py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 ${
            activeSubject === 'Química'
              ? 'bg-cyan-600 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Atom size={16} />
          <span>Química</span>
        </button>
      </div>

      {/* 3. Units & Topics Accordion / List */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-extrabold text-slate-900">
            Unidades Temáticas • {currentClass}
          </h3>
          <span className="text-xs text-slate-500 font-medium">
            {units.length} Unidades Curriculares
          </span>
        </div>

        <div className="space-y-3">
          {units.map((unit) => {
            const isExpanded = expandedUnitId === unit.id || expandedUnitId === null; // default show or allow toggle

            return (
              <div
                key={unit.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs overflow-hidden transition-all"
              >
                {/* Unit Header */}
                <div
                  onClick={() => setExpandedUnitId(isExpanded && expandedUnitId !== null ? '' : unit.id)}
                  className="p-4 sm:p-5 flex items-start justify-between gap-3 cursor-pointer hover:bg-slate-50/80 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <span
                      className={`w-8 h-8 rounded-xl font-black text-xs flex items-center justify-center shrink-0 mt-0.5 ${
                        unit.subject === 'Biologia'
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-cyan-100 text-cyan-800'
                      }`}
                    >
                      U{unit.unitNumber}
                    </span>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                        {unit.title}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-2 mt-0.5 leading-relaxed">
                        {unit.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[11px] font-bold text-slate-400 px-2 py-0.5 rounded-full bg-slate-100">
                      {unit.lessonTopics.length} aulas
                    </span>
                  </div>
                </div>

                {/* Topics in this unit */}
                <div className="border-t border-slate-100 divide-y divide-slate-100 bg-slate-50/40">
                  {unit.lessonTopics.map((topic, topicIdx) => {
                    const matchingPreAuthored = DETAILED_LESSONS.find(
                      (l) =>
                        l.unitId === unit.id &&
                        (l.theme.toLowerCase() === topic.toLowerCase() ||
                          l.title.toLowerCase().includes(topic.toLowerCase()))
                    );

                    const isCompleted = completedLessonIds.some(
                      (id) =>
                        (matchingPreAuthored && id === matchingPreAuthored.id) ||
                        id === `${unit.id}-${encodeURIComponent(topic).slice(0, 15)}` ||
                        (id.includes(unit.id) && id.includes(encodeURIComponent(topic).slice(0, 15)))
                    );

                    return (
                      <button
                        key={topicIdx}
                        onClick={() => onOpenLesson(unit.id, topic, unit.title)}
                        className="w-full text-left py-3 px-4 sm:px-5 hover:bg-white transition-colors flex items-center justify-between gap-3 group"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <span className="w-5 h-5 rounded-full bg-slate-200/70 text-slate-600 font-bold text-[10px] flex items-center justify-center shrink-0">
                            {topicIdx + 1}
                          </span>
                          <span className="text-xs sm:text-sm font-medium text-slate-800 group-hover:text-emerald-700 transition-colors line-clamp-1">
                            {topic}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          {isCompleted ? (
                            <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                              <CheckCircle size={12} />
                              <span>Concluída</span>
                            </span>
                          ) : (
                            <span className="text-xs font-semibold text-slate-400 group-hover:text-slate-600 flex items-center gap-1">
                              <span>Estudar</span>
                              <ChevronRight size={14} />
                            </span>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
