import { motion } from 'framer-motion';
import { fadeUp } from '../lib/motion';
import { statusMeta, type Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const status = statusMeta[project.status];

  return (
    <motion.article
      variants={fadeUp}
      className={`group flex flex-col rounded border bg-white p-5 transition-shadow hover:shadow-[0_8px_30px_rgba(11,22,38,0.08)] ${
        project.flagship ? 'border-brand/40' : 'border-line'
      }`}
    >
      <header className='flex items-center justify-between gap-3'>
        <span className='font-mono text-xs font-semibold tracking-[0.12em] text-brand'>
          {project.id}
        </span>
        <span
          className={`rounded-full border px-2.5 py-0.5 font-mono text-[0.6rem] font-medium uppercase tracking-[0.15em] ${status.chip}`}
        >
          {status.label}
        </span>
      </header>

      <h3 className='mt-3 font-display text-lg font-bold leading-snug tracking-tight text-ink'>
        {project.title}
        {project.flagship && (
          <span className='ml-2 align-middle font-mono text-[0.58rem] font-medium uppercase tracking-[0.18em] text-amber'>
            Flagship
          </span>
        )}
      </h3>

      <p className='mt-2.5 flex-1 text-sm leading-relaxed text-muted'>{project.summary}</p>

      <ul className='mt-4 flex flex-wrap gap-1.5'>
        {project.stack.map((tech) => (
          <li
            key={tech}
            className='rounded bg-paper px-2 py-1 font-mono text-[0.62rem] text-muted'
          >
            {tech}
          </li>
        ))}
      </ul>

      <footer className='mt-4 flex items-center justify-between border-t border-line pt-3.5'>
        <span className='spec-label'>Month {String(project.month).padStart(2, '0')}</span>
        <span className='flex gap-4'>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target='_blank'
              rel='noreferrer'
              className='font-mono text-xs font-medium text-brand hover:text-brand-deep'
            >
              Live ↗
            </a>
          )}
          <a
            href={project.repoUrl}
            target='_blank'
            rel='noreferrer'
            className='font-mono text-xs font-medium text-brand hover:text-brand-deep'
          >
            Repo ↗
          </a>
        </span>
      </footer>
    </motion.article>
  );
}
