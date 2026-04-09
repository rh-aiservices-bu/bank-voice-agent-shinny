import { motion } from 'framer-motion';
import type { StageDefinition } from '../types';
import { fadeInUp, staggerContainer } from '../animations/variants';

interface Props {
  stage: StageDefinition;
  darkMode: boolean;
}

export function ExplanationPanel({ stage, darkMode: d }: Props) {
  const bulletColor =
    stage.category === 'challenge'
      ? 'bg-amber-400'
      : stage.category === 'platform'
        ? 'bg-cyan-400'
        : 'bg-emerald-400';

  return (
    <motion.div
      className={`glass-card p-5 ${d ? '' : 'bg-slate-50 border-slate-200'}`}
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      key={stage.id}
    >
      <motion.p className={`text-sm leading-relaxed mb-4 ${d ? 'text-slate-300' : 'text-slate-600'}`} variants={fadeInUp}>
        {stage.description}
      </motion.p>
      <motion.ul className="space-y-2.5" variants={staggerContainer} initial="hidden" animate="visible">
        {stage.bullets.map((bullet, i) => (
          <motion.li
            key={i}
            className="flex items-start gap-2.5"
            variants={fadeInUp}
          >
            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${bulletColor}`} />
            <span className={`text-sm ${d ? 'text-slate-300' : 'text-slate-600'}`}>{bullet}</span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}
