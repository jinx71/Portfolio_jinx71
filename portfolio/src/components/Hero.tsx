import { motion } from 'framer-motion';

const specs = [
  { label: 'Role', value: 'Full-Stack Developer · AI Integration' },
  { label: 'Domain', value: 'Pharma · GMP · FDA / TGA / MHRA' },
  { label: 'Research', value: 'MSc — Explainable AI, Medical Imaging' },
  { label: 'Target', value: 'Ireland · Remote (EU)' },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.65, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section id='top' className='bg-ink pb-16 pt-32 text-paper sm:pb-24 sm:pt-40'>
      <motion.div
        variants={container}
        initial='hidden'
        animate='visible'
        className='section-shell'
      >
        <motion.p variants={item} className='eyebrow mb-6'>
          Portfolio · Build log · 2026
        </motion.p>

        <motion.h1
          variants={item}
          className='max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl'
        >
          Engineering precision, from the{' '}
          <span className='text-brand'>lab bench</span> to the{' '}
          <span className='text-brand'>codebase</span>.
        </motion.h1>

        <motion.p
          variants={item}
          className='mt-7 max-w-2xl text-base leading-relaxed text-muted-dark sm:text-lg'
        >
          I'm Md. Sazed Ul Karim. After eight years keeping pharmaceutical plants
          audit-ready for the FDA, TGA and MHRA, I now build AI-powered web
          applications — and I'm documenting the entire transition as a
          twelve-project, six-month public build.
        </motion.p>

        <motion.div variants={item} className='mt-9 flex flex-wrap gap-3'>
          <a
            href='#projects'
            className='rounded bg-brand px-5 py-3 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-brand-deep'
          >
            View the build log
          </a>
          <a
            href='#contact'
            className='rounded border border-line-dark px-5 py-3 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-paper transition-colors hover:border-brand hover:text-brand'
          >
            Get in touch
          </a>
        </motion.div>

        {/* Signature: a batch-record style spec strip */}
        <motion.dl
          variants={item}
          className='mt-16 grid grid-cols-1 gap-px overflow-hidden rounded border border-line-dark bg-line-dark sm:grid-cols-2 lg:grid-cols-4'
        >
          {specs.map((spec) => (
            <div key={spec.label} className='bg-ink-soft px-5 py-4'>
              <dt className='font-mono text-[0.62rem] font-medium uppercase tracking-[0.2em] text-muted-dark'>
                {spec.label}
              </dt>
              <dd className='mt-1.5 text-sm font-medium text-paper'>{spec.value}</dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>
    </section>
  );
}
