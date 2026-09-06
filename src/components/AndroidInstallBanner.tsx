import React, { useState, useEffect } from 'react';
import { Download, X, Smartphone, CheckCircle } from 'lucide-react';

export const AndroidInstallBanner: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Check if already in standalone mode (already installed as PWA or native app)
    const isStandalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as any).standalone === true;

    if (isStandalone) {
      setIsInstalled(true);
      return;
    }

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      // Check if user dismissed it recently
      const dismissed = localStorage.getItem('tanmz_install_dismissed');
      if (!dismissed) {
        setIsVisible(true);
      }
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    window.addEventListener('appinstalled', () => {
      setIsInstalled(true);
      setIsVisible(false);
      setDeferredPrompt(null);
    });

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setIsVisible(false);
      setIsInstalled(true);
    }
    setDeferredPrompt(null);
  };

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('tanmz_install_dismissed', 'true');
  };

  if (isInstalled || !isVisible || !deferredPrompt) {
    return null;
  }

  return (
    <div className="bg-gradient-to-r from-emerald-800 to-teal-900 text-white px-4 py-3 shadow-lg flex items-center justify-between gap-3 text-xs sm:text-sm border-b border-emerald-700/60 sticky top-0 z-40 animate-in slide-in-from-top-4">
      <div className="flex items-center gap-2.5 min-w-0">
        <div className="w-8 h-8 rounded-xl bg-emerald-500/30 border border-emerald-400/40 flex items-center justify-center shrink-0 text-emerald-300">
          <Smartphone size={18} />
        </div>
        <div className="min-w-0">
          <p className="font-bold leading-tight truncate">
            Instalar TANmz no Android
          </p>
          <p className="text-[11px] text-emerald-200/90 leading-tight truncate hidden sm:block">
            Estude offline, sem consumir dados móveis.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <button
          onClick={handleInstallClick}
          className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold px-3 py-1.5 rounded-xl text-xs flex items-center gap-1.5 shadow-sm transition-all active:scale-95"
        >
          <Download size={13} />
          <span>Instalar</span>
        </button>
        <button
          onClick={handleDismiss}
          aria-label="Fechar aviso"
          className="p-1 rounded-lg text-emerald-300 hover:text-white hover:bg-white/10 transition-all"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};
