import React, { useState } from 'react';
import {
  User,
  Settings,
  BookOpen,
  Sliders,
  HardDrive,
  Info,
  Check,
  RotateCcw,
  ExternalLink,
  ShieldCheck,
  Award,
  Smartphone,
  Download,
} from 'lucide-react';
import { StudentProfile, ClassLevel, Subject } from '../types';
import { ALL_CLASSES } from '../data/curriculumData';
import { OFFICIAL_REFERENCES } from '../data/referencesData';

interface ProfileViewProps {
  profile: StudentProfile;
  onUpdateProfile: (updated: StudentProfile) => void;
  onResetProgress: () => void;
}

export const ProfileView: React.FC<ProfileViewProps> = ({
  profile,
  onUpdateProfile,
  onResetProgress,
}) => {
  const [name, setName] = useState(profile.name);
  const [selectedClass, setSelectedClass] = useState<ClassLevel>(profile.selectedClass);
  const [preferredSubject, setPreferredSubject] = useState<'Biologia' | 'Química' | 'Ambas'>(
    profile.preferredSubject
  );
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>(profile.fontSize);
  const [saveMessage, setSaveMessage] = useState(false);
  const [referenceTab, setReferenceTab] = useState<'curricular' | 'cientifica'>('curricular');
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const updated: StudentProfile = {
      ...profile,
      name: name.trim() || 'Estudante TANmz',
      selectedClass,
      preferredSubject,
      fontSize,
    };
    onUpdateProfile(updated);
    setSaveMessage(true);
    setTimeout(() => setSaveMessage(false), 2500);
  };

  const filteredRefs = OFFICIAL_REFERENCES.filter((r) => r.category === referenceTab);

  return (
    <div className="pb-24 max-w-4xl mx-auto px-4 pt-3 space-y-5 animate-in fade-in-50">
      {/* 1. Header Profile Card */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center sm:items-start gap-4">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white font-extrabold text-2xl flex items-center justify-center shadow-md shadow-emerald-600/20 shrink-0">
          {name.charAt(0).toUpperCase() || 'E'}
        </div>
        <div className="flex-1 text-center sm:text-left">
          <h1 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
            {profile.name}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Estudante da <strong className="text-slate-800">{profile.selectedClass}</strong> • {profile.points} pontos acumulados
          </p>
          <div className="mt-2 flex flex-wrap justify-center sm:justify-start gap-1.5">
            <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
              TANmz Oficial
            </span>
            <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
              Modo Offline Pronto
            </span>
          </div>
        </div>
      </div>

      {/* 2. Form: Profile and Preferences */}
      <form onSubmit={handleSave} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-black text-slate-900 flex items-center gap-2">
            <User size={18} className="text-slate-600" />
            <span>Configurações do Estudante</span>
          </h2>
          {saveMessage && (
            <span className="text-xs font-bold text-emerald-700 flex items-center gap-1">
              <Check size={14} /> Salvo com sucesso!
            </span>
          )}
        </div>

        {/* Student Name */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Nome do Estudante
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-hidden"
            placeholder="Seu nome"
          />
        </div>

        {/* Default Class */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Classe Escolar Padrão
          </label>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
            {ALL_CLASSES.map((cls) => (
              <button
                key={cls}
                type="button"
                onClick={() => setSelectedClass(cls)}
                className={`py-2 px-1 text-xs font-bold rounded-xl border transition-all ${
                  selectedClass === cls
                    ? 'bg-slate-900 text-white border-slate-900 shadow-2xs'
                    : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200'
                }`}
              >
                {cls}
              </button>
            ))}
          </div>
        </div>

        {/* Preferred Subject */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Foco de Estudo Principal
          </label>
          <div className="grid grid-cols-3 gap-2">
            {(['Biologia', 'Química', 'Ambas'] as const).map((sub) => (
              <button
                key={sub}
                type="button"
                onClick={() => setPreferredSubject(sub)}
                className={`py-2 px-2 text-xs font-bold rounded-xl border transition-all ${
                  preferredSubject === sub
                    ? 'bg-emerald-700 text-white border-emerald-700 shadow-2xs'
                    : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200'
                }`}
              >
                {sub}
              </button>
            ))}
          </div>
        </div>

        {/* Accessibility: Font Size (Seção 22) */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Acessibilidade: Tamanho da Letra
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: 'normal', label: 'Normal (100%)' },
              { id: 'large', label: 'Grande (115%)' },
              { id: 'xlarge', label: 'Muito Grande (130%)' },
            ].map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFontSize(f.id as any)}
                className={`py-2 px-2 text-xs font-bold rounded-xl border transition-all ${
                  fontSize === f.id
                    ? 'bg-teal-700 text-white border-teal-700 shadow-2xs'
                    : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-xs transition-colors"
        >
          Salvar Alterações
        </button>
      </form>

      {/* 3. SEÇÃO 25: BIBLIOTECA / REFERÊNCIAS OFICIAIS */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4">
        <div>
          <h2 className="text-sm font-black text-slate-900 flex items-center gap-2">
            <BookOpen size={18} className="text-emerald-700" />
            <span>Biblioteca / Referências Oficiais</span>
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Fontes curriculares e científicas que fundamentam o conteúdo pedagógico do TANmz.
          </p>
        </div>

        {/* Reference Category Tabs */}
        <div className="bg-slate-100 p-1 rounded-xl grid grid-cols-2 gap-1">
          <button
            onClick={() => setReferenceTab('curricular')}
            className={`py-2 px-3 rounded-lg text-xs font-bold transition-all ${
              referenceTab === 'curricular'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Fontes Curriculares (MINEDH/INDE)
          </button>
          <button
            onClick={() => setReferenceTab('cientifica')}
            className={`py-2 px-3 rounded-lg text-xs font-bold transition-all ${
              referenceTab === 'cientifica'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Fontes Científicas Internacionais
          </button>
        </div>

        {/* References List */}
        <div className="space-y-3">
          {filteredRefs.map((ref) => (
            <div
              key={ref.id}
              className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1"
            >
              <div className="flex items-start justify-between gap-2">
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                  {ref.title}
                </h4>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 shrink-0">
                  {ref.category === 'curricular' ? 'Oficial MZ' : 'Científico'}
                </span>
              </div>
              <p className="text-xs font-semibold text-emerald-700">
                {ref.institutionOrAuthor}
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                {ref.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Android App Status & Installation */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-3">
        <div className="flex items-center gap-2">
          <Smartphone size={18} className="text-emerald-600" />
          <h3 className="text-sm font-black text-slate-900">
            Aplicação Android
          </h3>
          <span className="ml-auto text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
            Pronto para Instalação
          </span>
        </div>

        <p className="text-xs text-slate-600 leading-relaxed">
          O <strong>TANmz</strong> está configurado como aplicação Android real (código nativo em <code className="bg-slate-100 px-1 py-0.5 rounded text-[11px] font-mono text-slate-700">/android</code> com Gradle, Capacitor e PWA instalável).
        </p>

        <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-3.5 space-y-2 text-xs">
          <div className="flex items-start gap-2 text-emerald-900">
            <Check size={16} className="text-emerald-600 shrink-0 mt-0.5" />
            <span>
              <strong>Instalação direta no smartphone:</strong> Abra no Chrome do Android e toque no menu <strong>⋮</strong> &gt; <strong>Instalar aplicativo</strong> ou <strong>Adicionar ao ecrã principal</strong>.
            </span>
          </div>
          <div className="flex items-start gap-2 text-emerald-900">
            <Check size={16} className="text-emerald-600 shrink-0 mt-0.5" />
            <span>
              <strong>Geração de APK / AAB nativo:</strong> Abra a pasta <code className="font-mono text-[11px]">/android</code> no <strong>Android Studio</strong> ou execute <code className="font-mono text-[11px]">./gradlew assembleDebug</code> para compilar o ficheiro <code className="font-mono text-[11px]">.apk</code>.
            </span>
          </div>
        </div>
      </div>

      {/* 5. App Info & Offline Local Storage Management */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-3">
        <div className="flex items-center gap-2">
          <ShieldCheck size={18} className="text-emerald-600" />
          <h3 className="text-sm font-black text-slate-900">
            Sobre o TANmz
          </h3>
        </div>

        <div className="text-xs text-slate-600 space-y-1.5 leading-relaxed">
          <p>
            <strong>TANmz</strong> — <em>Biologia e Química ao alcance de todos</em>.
          </p>
          <p>
            Aplicativo educativo desenvolvido especialmente para estudantes do Ensino Secundário Geral de Moçambique (7ª a 12ª classes). Todo o currículo, aulas, exercícios e simulados funcionam sem necessidade de conexão constante à internet.
          </p>
        </div>

        <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
          <button
            type="button"
            onClick={() => setShowPrivacyModal(true)}
            className="text-xs font-bold text-emerald-700 hover:text-emerald-800 underline flex items-center gap-1"
          >
            <ShieldCheck size={13} />
            <span>Política de Privacidade (Google Play)</span>
          </button>
          <button
            onClick={() => {
              if (window.confirm('Deseja realmente redefinir o seu histórico e pontuação local?')) {
                onResetProgress();
              }
            }}
            className="text-xs font-bold text-rose-600 hover:text-rose-700 flex items-center gap-1"
          >
            <RotateCcw size={12} />
            <span>Redefinir Dados Locais</span>
          </button>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      {showPrivacyModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-emerald-800 text-white">
              <div className="flex items-center gap-2">
                <ShieldCheck size={20} className="text-emerald-300" />
                <h3 className="text-base font-bold">Política de Privacidade</h3>
              </div>
              <button
                type="button"
                onClick={() => setShowPrivacyModal(false)}
                className="w-8 h-8 rounded-full bg-emerald-900/40 hover:bg-emerald-900/60 flex items-center justify-center text-emerald-100 text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <div className="p-5 overflow-y-auto space-y-4 text-xs text-slate-700 leading-relaxed">
              <div>
                <span className="font-bold text-slate-900 block text-sm">Compromisso TANmz</span>
                <p className="mt-1">
                  O <strong>TANmz</strong> foi desenvolvido com privacidade total para estudantes de Moçambique. <strong>NÃO recolhemos, NÃO armazenamos em servidores externos e NÃO partilhamos nenhum dado pessoal.</strong>
                </p>
              </div>

              <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200 space-y-1.5">
                <span className="font-bold text-slate-800 block">Armazenamento 100% Local</span>
                <p>
                  O seu histórico de aulas lidas, acertos em simulados e configurações de fonte ficam salvos unicamente na memória local do seu dispositivo (Android sandbox).
                </p>
              </div>

              <div className="bg-emerald-50/70 p-3 rounded-2xl border border-emerald-200/80 space-y-1.5 text-emerald-900">
                <span className="font-bold block">Sem Anúncios e Sem Rastreadores</span>
                <p>
                  O aplicativo é estritamente educacional, sem fins comerciais invasivos, em total conformidade com as diretrizes de Família e Proteção de Menores da Google Play Store.
                </p>
              </div>

              <div>
                <span className="font-bold text-slate-900 block">Contacto do Desenvolvedor</span>
                <p className="mt-1">
                  E-mail: <a href="mailto:tavaresnamalope@gmail.com" className="text-emerald-700 underline font-medium">tavaresnamalope@gmail.com</a>
                </p>
              </div>
            </div>

            <div className="p-4 border-t border-slate-100 bg-slate-50 flex justify-end">
              <button
                type="button"
                onClick={() => setShowPrivacyModal(false)}
                className="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl shadow-xs"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
