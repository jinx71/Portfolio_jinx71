import { motion } from 'framer-motion';
import { fadeUp, stagger, viewportOnce } from '../lib/motion';

const facts = [
  {
    label: '8+ years',
    detail: 'GMP manufacturing engineering at Square Pharmaceuticals — SOPs, CAPA plans, validation protocols.',
  },
  {
    label: 'MSc CS',
    detail: 'Thesis on Explainable AI for cervical cell classification: stacked CNN ensemble, GradCAM, SHAP, LLM clinical reports.',
  },
  {
    label: '12 projects',
    detail: 'A six-month public roadmap from portfolio site to an AI-powered GMP compliance audit tool.',
  },
];

export default function About() {
  return (
    <section id='about' className='py-20 sm:py-28'>
      <motion.div
        variants={stagger}
        initial='hidden'
        whileInView='visible'
        viewport={viewportOnce}
        className='section-shell'
      >
        <motion.p variants={fadeUp} className='eyebrow mb-4'>
          About
        </motion.p>
        <div className='grid gap-12 lg:grid-cols-[1.2fr_1fr]'>
          <div>
            <motion.h2
              variants={fadeUp}
              className='font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl'
            >
              Most developers learn the domain after they join. I'm bringing the
              domain with me.
            </motion.h2>
            <motion.div variants={fadeUp} className='mt-6 space-y-4 leading-relaxed text-muted'>
              <p>
                In a pharmaceutical plant, nothing ships without evidence: every
                change is documented, every system validated, every failure
                traced to a root cause. I've spent eight years working that way
                through FDA, TGA and MHRA audits — and it turns out it's exactly
                how good software is built.
              </p>
              <p>
                My MSc research took that discipline into AI: building a model
                that doesn't just classify medical images, but explains itself
                with heatmaps and plain-language clinical reports. Now I'm
                combining both — regulated-industry judgement and modern
                AI-integrated web development — into software for the problems
                I know first-hand.
              </p>
            </motion.div>
          </div>

          <motion.ul variants={stagger} className='space-y-px self-start overflow-hidden rounded border border-line bg-line'>
            {facts.map((fact) => (
              <motion.li key={fact.label} variants={fadeUp} className='bg-white px-5 py-5'>
                <p className='font-display text-xl font-bold text-brand'>{fact.label}</p>
                <p className='mt-1.5 text-sm leading-relaxed text-muted'>{fact.detail}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.div>
    </section>
  );
}
