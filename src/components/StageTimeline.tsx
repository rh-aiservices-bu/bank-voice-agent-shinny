import { motion } from 'framer-motion';
import { stages } from '../data/stages';

interface PageDef {
  id: number;
  label: string;
  group: 'intro' | 'challenge' | 'platform' | 'operations' | 'outro';
}

const pages: PageDef[] = [
  { id: 0, label: 'Overview', group: 'intro' },
  ...stages.map(s => ({
    id: s.id,
    label: s.title.length > 16 ? s.title.slice(0, 16) + '\u2026' : s.title,
    group: s.category,
  })),
  { id: 9, label: 'Summary', group: 'outro' },
];

const groupColor = (group: string, d: boolean) => {
  switch (group) {
    case 'intro': return d ? '#94a3b8' : '#64748b';
    case 'challenge': return '#fbbf24';
    case 'platform': return '#22d3ee';
    case 'operations': return '#34d399';
    case 'outro': return d ? '#94a3b8' : '#64748b';
    default: return '#94a3b8';
  }
};

interface Props {
  currentPage: number;
  goToPage: (n: number) => void;
  darkMode: boolean;
}

export function StageTimeline({ currentPage, goToPage, darkMode: d }: Props) {
  return (
    <div className="w-full px-4 py-3">
      <div className="flex items-center justify-between max-w-7xl mx-auto mb-2">
        <span className={`text-xs font-medium tracking-wider uppercase ${d ? 'text-slate-500' : 'text-slate-400'}`}>Overview</span>
        <span className={`text-xs font-medium tracking-wider uppercase ${d ? 'text-amber-400' : 'text-amber-500'}`}>Challenge</span>
        <span className={`text-xs font-medium tracking-wider uppercase ${d ? 'text-cyan-400' : 'text-cyan-500'}`}>Platform</span>
        <span className={`text-xs font-medium tracking-wider uppercase ${d ? 'text-emerald-400' : 'text-emerald-500'}`}>Operations</span>
      </div>
      <div className="relative max-w-7xl mx-auto" style={{ height: 32 }}>
        {/* Background line */}
        <div className={`absolute top-1/2 left-4 right-4 h-0.5 -translate-y-1/2 ${d ? 'bg-slate-700' : 'bg-slate-300'}`} />

        {/* Active line overlay */}
        {currentPage > 0 && (
          <div
            className="absolute top-1/2 left-4 h-0.5 -translate-y-1/2 transition-all duration-500"
            style={{
              width: `${(currentPage / (pages.length - 1)) * 100}%`,
              background: `linear-gradient(to right, #94a3b8, #fbbf24 10%, #fbbf24 22%, #22d3ee 30%, #22d3ee 66%, #34d399 72%, #34d399 88%, #94a3b8)`,
            }}
          />
        )}

        {/* Nodes */}
        <div className="relative flex justify-between items-center h-full px-0">
          {pages.map((page) => {
            const isActive = page.id === currentPage;
            const isPast = page.id < currentPage;
            const color = groupColor(page.group, d);

            const nodeActive = `border-2 text-slate-950`;
            const nodePast = d
              ? 'border-2 opacity-80'
              : 'border-2 opacity-90';
            const nodeInactive = d
              ? 'bg-slate-800 border-slate-600 text-slate-400 border-2'
              : 'bg-white border-slate-300 text-slate-500 border-2';

            const labelActive = d ? 'text-slate-200' : 'text-slate-700';
            const labelPast = d ? 'text-slate-400' : 'text-slate-500';
            const labelInactive = d ? 'text-slate-600' : 'text-slate-400';

            return (
              <button
                key={page.id}
                onClick={() => goToPage(page.id)}
                className="relative flex flex-col items-center cursor-pointer z-10"
              >
                <motion.div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-semibold transition-colors duration-300 ${
                    isActive ? nodeActive : isPast ? nodePast : nodeInactive
                  }`}
                  style={
                    isActive
                      ? { backgroundColor: color, borderColor: color }
                      : isPast
                        ? { backgroundColor: `${color}30`, borderColor: color, color }
                        : undefined
                  }
                  animate={isActive ? { scale: [1, 1.15, 1] } : { scale: 1 }}
                  transition={isActive ? { repeat: Infinity, duration: 2 } : {}}
                >
                  {page.id === 0 ? '\u2B1F' : page.id <= 8 ? page.id : '\u25C8'}
                </motion.div>
                <span
                  className={`absolute top-9 text-[9px] whitespace-nowrap font-medium transition-colors ${
                    isActive ? labelActive : isPast ? labelPast : labelInactive
                  }`}
                >
                  {page.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
