import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useStageNavigation } from './hooks/useStageNavigation';
import { stages } from './data/stages';
import { StageTimeline } from './components/StageTimeline';
import { ImageSlide } from './components/ImageSlide';
import { ExplanationPanel } from './components/ExplanationPanel';

const BASE = import.meta.env.BASE_URL;

const imageSlides = [
  { page: 0, src: `${BASE}agentops-arch-front.png`, title: 'Enterprise AgentOps', subtitle: 'Operationalizing AI Agents on Red Hat AI' },
  { page: 9, src: `${BASE}agentops-arch.png`, title: 'Enterprise AgentOps', subtitle: 'Bring Your Own Agent \u2014 We Make It Production-Ready' },
];

function App() {
  const { currentPage, currentStage, direction, goToPage, nextPage, prevPage, totalPages, autoplay, toggleAutoplay, intervalSec, setIntervalSec } =
    useStageNavigation();

  const stage = useMemo(
    () => (currentStage ? stages.find((s) => s.id === currentStage)! : null),
    [currentStage]
  );
  const [darkMode, setDarkMode] = useState(false);
  const d = darkMode;

  const imageSlide = imageSlides.find(s => s.page === currentPage);
  const isImagePage = !!imageSlide;
  const isStagePage = !!stage;

  const categoryColor = (cat?: string) => {
    switch (cat) {
      case 'challenge': return d ? 'text-amber-400' : 'text-amber-600';
      case 'platform': return d ? 'text-cyan-400' : 'text-cyan-700';
      case 'operations': return d ? 'text-emerald-400' : 'text-emerald-600';
      default: return d ? 'text-slate-400' : 'text-slate-500';
    }
  };

  const categoryBadge = (cat?: string) => {
    switch (cat) {
      case 'challenge': return d ? 'bg-amber-500/15 text-amber-400' : 'bg-amber-500/10 text-amber-600';
      case 'platform': return d ? 'bg-cyan-500/15 text-cyan-400' : 'bg-cyan-600/10 text-cyan-700';
      case 'operations': return d ? 'bg-emerald-500/15 text-emerald-400' : 'bg-emerald-500/10 text-emerald-600';
      default: return '';
    }
  };

  const buttonColor = (cat?: string) => {
    switch (cat) {
      case 'challenge': return 'text-white bg-amber-500 hover:bg-amber-400 cursor-pointer';
      case 'platform': return 'text-white bg-cyan-600 hover:bg-cyan-500 cursor-pointer';
      case 'operations': return 'text-white bg-emerald-600 hover:bg-emerald-500 cursor-pointer';
      default: return 'text-white bg-cyan-600 hover:bg-cyan-500 cursor-pointer';
    }
  };

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${d ? 'bg-slate-950' : 'bg-white'}`}>
      {/* Header */}
      <header className={`border-b px-6 py-4 ${d ? 'border-slate-800' : 'border-slate-200'}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className={`text-xl font-bold ${d ? 'text-slate-100' : 'text-slate-900'}`}>
              Enterprise AgentOps
              <span className={`text-sm font-normal ml-3 ${d ? 'text-slate-400' : 'text-slate-500'}`}>
                Operationalizing AI Agents on Red Hat AI
              </span>
            </h1>
          </div>
          <div className={`flex items-center gap-4 text-xs ${d ? 'text-slate-500' : 'text-slate-400'}`}>
            <div className="flex items-center gap-2">
              <button
                onClick={toggleAutoplay}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  autoplay
                    ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                    : d
                      ? 'bg-slate-800 text-slate-400 border border-slate-700 hover:border-slate-500'
                      : 'bg-slate-100 text-slate-500 border border-slate-300 hover:border-slate-400'
                }`}
              >
                {autoplay ? (
                  <>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor"><rect x="1" y="1" width="3" height="8" rx="0.5" /><rect x="6" y="1" width="3" height="8" rx="0.5" /></svg>
                    Autoplay
                  </>
                ) : (
                  <>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor"><polygon points="2,1 9,5 2,9" /></svg>
                    Autoplay
                  </>
                )}
              </button>
              {autoplay && (
                <select
                  value={intervalSec}
                  onChange={(e) => setIntervalSec(Number(e.target.value))}
                  className={`text-xs rounded-lg px-2 py-1.5 cursor-pointer focus:outline-none ${
                    d
                      ? 'bg-slate-800 text-slate-300 border border-slate-700 focus:border-emerald-500/50'
                      : 'bg-slate-100 text-slate-600 border border-slate-300 focus:border-emerald-500/50'
                  }`}
                >
                  {[10, 15, 20, 30, 45, 60].map((s) => (
                    <option key={s} value={s}>{s}s</option>
                  ))}
                </select>
              )}
            </div>
            <button
              onClick={() => setDarkMode(v => !v)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                d
                  ? 'bg-slate-800 text-slate-400 border border-slate-700 hover:border-slate-500'
                  : 'bg-slate-100 text-slate-600 border border-slate-300 hover:border-slate-400'
              }`}
            >
              {d ? (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
              ) : (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
              )}
              {d ? 'Light' : 'Dark'}
            </button>
          </div>
        </div>
      </header>

      {/* Timeline */}
      <div className={`border-b pt-2 pb-8 ${d ? 'border-slate-800' : 'border-slate-200'}`}>
        <StageTimeline currentPage={currentPage} goToPage={goToPage} darkMode={d} />
      </div>

      {/* Main content */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-6">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentPage}
            custom={direction}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {/* Image slides (intro + outro) */}
            {isImagePage && (
              <ImageSlide
                src={imageSlide.src}
                title={imageSlide.title}
                subtitle={imageSlide.subtitle}
                darkMode={d}
              />
            )}

            {/* Stage pages (1-7) */}
            {isStagePage && stage && (
              <>
                {/* Stage title */}
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-1">
                    <span
                      className={`text-xs font-semibold uppercase tracking-wider px-2 py-0.5 rounded ${categoryBadge(stage.category)}`}
                    >
                      {stage.category}
                    </span>
                    <span className={`text-sm ${d ? 'text-slate-500' : 'text-slate-400'}`}>
                      Step {stage.id} of {stages.length}
                    </span>
                  </div>
                  <h2 className={`text-2xl font-bold ${d ? 'text-slate-100' : 'text-slate-900'}`}>{stage.title}</h2>
                  <p className={`text-sm ${categoryColor(stage.category)}`}>
                    {stage.subtitle}
                  </p>
                  <p className={`text-sm mt-1 italic ${d ? 'text-slate-400' : 'text-slate-500'}`}>
                    {stage.story}
                  </p>
                </div>

                {/* Screenshot + Description layout */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                  {/* Screenshot area */}
                  <div className="lg:col-span-3">
                    <motion.div
                      className="glass-card overflow-hidden"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <img
                        src={`${BASE}${stage.image}`}
                        alt={stage.title}
                        className="w-full object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.parentElement!.innerHTML = `
                            <div class="flex items-center justify-center h-80 ${d ? 'text-slate-500' : 'text-slate-400'}">
                              <div class="text-center">
                                <div class="text-4xl mb-3">&#127916;</div>
                                <div class="text-sm font-medium">Screenshot coming soon</div>
                                <div class="text-xs mt-1 opacity-60">${stage.image}</div>
                              </div>
                            </div>
                          `;
                        }}
                      />
                    </motion.div>
                  </div>

                  {/* Description panel */}
                  <div className="lg:col-span-2">
                    <ExplanationPanel stage={stage} darkMode={d} />
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Navigation buttons */}
      <footer className={`border-t px-6 py-4 ${d ? 'border-slate-800' : 'border-slate-200'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              currentPage === 0
                ? d ? 'text-slate-600 bg-slate-800/50 cursor-not-allowed' : 'text-slate-400 bg-slate-100 cursor-not-allowed'
                : d ? 'text-slate-200 bg-slate-800 hover:bg-slate-700 cursor-pointer' : 'text-slate-700 bg-slate-100 hover:bg-slate-200 cursor-pointer'
            }`}
          >
            &larr; Previous
          </button>
          <div className={`text-xs ${d ? 'text-slate-500' : 'text-slate-400'}`}>
            {currentPage === 0
              ? 'Overview'
              : currentPage <= 2
                ? 'The Challenge'
                : currentPage <= 6
                  ? 'Platform'
                  : currentPage <= 8
                    ? 'Operations'
                    : 'Summary'}
          </div>
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages - 1}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              currentPage === totalPages - 1
                ? d ? 'text-slate-600 bg-slate-800/50 cursor-not-allowed' : 'text-slate-400 bg-slate-100 cursor-not-allowed'
                : buttonColor(stage?.category)
            }`}
          >
            Next &rarr;
          </button>
        </div>
      </footer>
    </div>
  );
}

export default App;
