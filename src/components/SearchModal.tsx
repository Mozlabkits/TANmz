import React, { useState, useMemo } from 'react';
import { Search, X, BookOpen, ChevronRight, Layers } from 'lucide-react';
import { CURRICULUM_UNITS } from '../data/curriculumData';
import { DETAILED_LESSONS } from '../data/lessonsData';
import { ClassLevel, Subject } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectLesson: (unitId: string, topicTitle: string, classLevel: ClassLevel, subject: Subject, unitTitle: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectLesson,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const searchResults = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return [];

    const results: Array<{
      unitId: string;
      topicTitle: string;
      classLevel: ClassLevel;
      subject: Subject;
      unitTitle: string;
      snippet: string;
    }> = [];

    // Search detailed lessons first
    for (const lesson of DETAILED_LESSONS) {
      if (
        lesson.title.toLowerCase().includes(term) ||
        lesson.theme.toLowerCase().includes(term) ||
        lesson.content.definition.toLowerCase().includes(term) ||
        lesson.content.explanation.some(e => e.toLowerCase().includes(term))
      ) {
        const unit = CURRICULUM_UNITS.find(u => u.id === lesson.unitId);
        results.push({
          unitId: lesson.unitId,
          topicTitle: lesson.theme,
          classLevel: lesson.classLevel,
          subject: lesson.subject,
          unitTitle: unit ? unit.title : lesson.theme,
          snippet: lesson.content.definition,
        });
      }
    }

    // Search curriculum topics
    for (const unit of CURRICULUM_UNITS) {
      for (const topic of unit.lessonTopics) {
        if (
          (topic.toLowerCase().includes(term) || unit.title.toLowerCase().includes(term)) &&
          !results.some(r => r.topicTitle.toLowerCase() === topic.toLowerCase() && r.classLevel === unit.classLevel)
        ) {
          results.push({
            unitId: unit.id,
            topicTitle: topic,
            classLevel: unit.classLevel,
            subject: unit.subject,
            unitTitle: unit.title,
            snippet: `${unit.title} • ${unit.description}`,
          });
        }
      }
    }

    return results.slice(0, 15); // limit to 15 results
  }, [searchTerm]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-12 sm:pt-20 px-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white w-full max-w-xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in-50 zoom-in-95">
        {/* Search Input Bar */}
        <div className="p-3 border-b border-slate-200 flex items-center gap-3">
          <Search size={20} className="text-slate-400 ml-1" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Pesquisar conceitos (ex: Célula, Átomo, Mol, Mendel, pH)..."
            className="flex-1 text-sm sm:text-base outline-hidden text-slate-800 placeholder:text-slate-400"
            autoFocus
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="text-xs text-slate-400 hover:text-slate-600 p-1"
            >
              Limpar
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Suggestions & Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-3 divide-y divide-slate-100">
          {!searchTerm.trim() ? (
            <div className="py-8 text-center text-slate-400">
              <BookOpen size={36} className="mx-auto mb-2 text-slate-300" />
              <p className="text-sm font-medium">Digite um conceito ou tema para pesquisar</p>
              <div className="mt-4 flex flex-wrap justify-center gap-1.5 max-w-md mx-auto">
                {['Célula', 'Átomo', 'Estequiometria', 'Genética', 'Ligações Químicas', 'pH', 'Gorongosa'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSearchTerm(tag)}
                    className="text-xs px-2.5 py-1 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : searchResults.length === 0 ? (
            <div className="py-8 text-center text-slate-500">
              <p className="text-sm">Nenhum resultado encontrado para "{searchTerm}".</p>
              <p className="text-xs text-slate-400 mt-1">
                Tente pesquisar por termos como "Reações", "Ecologia", "Célula", etc.
              </p>
            </div>
          ) : (
            searchResults.map((result, idx) => (
              <button
                key={`${result.unitId}-${idx}`}
                onClick={() => {
                  onSelectLesson(result.unitId, result.topicTitle, result.classLevel, result.subject, result.unitTitle);
                  onClose();
                }}
                className="w-full text-left py-2.5 px-2 hover:bg-slate-50 rounded-xl transition-colors flex items-start justify-between gap-3 group"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 mb-1 flex-wrap">
                    <span
                      className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                        result.subject === 'Biologia'
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-cyan-100 text-cyan-800'
                      }`}
                    >
                      {result.subject}
                    </span>
                    <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">
                      {result.classLevel}
                    </span>
                    <span className="text-[11px] text-slate-400 line-clamp-1">
                      {result.unitTitle}
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {result.topicTitle}
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-2 mt-0.5 leading-relaxed">
                    {result.snippet}
                  </p>
                </div>
                <ChevronRight
                  size={16}
                  className="text-slate-300 group-hover:text-emerald-600 transition-colors mt-1 shrink-0"
                />
              </button>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-4 py-2 text-[11px] text-slate-400 flex items-center justify-between border-t border-slate-100">
          <span>{searchResults.length} resultados encontrados</span>
          <span>TANmz • Pesquisa Integrada</span>
        </div>
      </div>
    </div>
  );
};
