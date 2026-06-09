import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeUp, stagger, viewportOnce } from '../lib/motion';
import { projects, type ProjectStatus } from '../data/projects';
import ProjectCard from './ProjectCard';

type Filter = 'all' | ProjectStatus;

const filters: { value: Filter; label: string }[] = [
  { value: 'all', label: 'All 12' },
  { value: 'in-progress', label: 'In progress' },
  { value: 'planned', label: 'Planned' },
];

export default function Projects() {
  const [filter, setFilter] = useState<Filter>('all');

  const visible =
    filter === 'all' ? projects : projects.filter((p) => p.status === filter);

  return (
    <section id='projects' className='border-y border-line bg-white py-20 sm:py-28'>
      <div className='section-shell'>
        <motion.div
          variants={stagger}
          initial='hidden'
          whileInView='visible'
          viewport={viewportOnce}
        >
          <motion.p variants={fadeUp} className='eyebrow mb-4'>
            Build log
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className='max-w-3xl font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl'
          >
            Twelve projects, six months, built in public.
          </motion.h2>
          <motion.p variants={fadeUp} className='mt-4 max-w-2xl leading-relaxed text-muted'>
            Each record below is a deployable, documented repository — from
            fundamentals through real-time systems and CI/CD to an AI-powered
            pharma compliance capstone.
          </motion.p>

          <motion.div variants={fadeUp} className='mt-8 flex flex-wrap gap-2' role='group' aria-label='Filter projects by status'>
            {filters.map((f) => (
              <button
                key={f.value}
                type='button'
                onClick={() => setFilter(f.value)}
                aria-pressed={filter === f.value}
                className={`rounded-full border px-4 py-1.5 font-mono text-xs uppercase tracking-[0.12em] transition-colors ${
                  filter === f.value
                    ? 'border-ink bg-ink text-paper'
                    : 'border-line bg-paper text-muted hover:border-ink hover:text-ink'
                }`}
              >
                {f.label}
              </button>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          key={filter}
          variants={stagger}
          initial='hidden'
          animate='visible'
          className='mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3'
        >
          {visible.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
