import { motion } from 'framer-motion';
import { fadeUp, stagger, viewportOnce } from '../lib/motion';

interface Entry {
  period: string;
  title: string;
  org: string;
  points: string[];
}

const entries: Entry[] = [
  {
    period: '2017 — Present',
    title: 'Sr. Executive — Engineering',
    org: 'Square Pharmaceuticals Ltd., Dhaka',
    points: [
      'Directed maintenance engineering across cGMP-regulated manufacturing plants to ISO and ICH-aligned standards.',
      'Participated in FDA, TGA and MHRA regulatory audits; authored SOPs, NCRs, CAPA plans and validation protocols.',
      'Assessed WFI system compliance to ASME BPE and ISPE standards; led data-driven CAPA cycles that cut unplanned downtime.',
    ],
  },
  {
    period: '2024 — 2025',
    title: 'MSc, Computer Science & Engineering',
    org: 'Bangladesh University of Professionals',
    points: [
      'Thesis: Explainable AI for cervical cell classification — stacked CNN ensemble (VGG16 + EfficientNetV2L), GradCAM, SHAP and LLM-generated clinical reports on the SIPaKMeD dataset.',
    ],
  },
  {
    period: '2010 — 2014',
    title: 'BSc, Electrical & Electronic Engineering',
    org: 'Chittagong University of Engineering and Technology',
    points: [],
  },
];

export default function Experience() {
  return (
    <section id='experience' className='border-y border-line bg-white py-20 sm:py-28'>
      <motion.div
        variants={stagger}
        initial='hidden'
        whileInView='visible'
        viewport={viewportOnce}
        className='section-shell'
      >
        <motion.p variants={fadeUp} className='eyebrow mb-4'>
          Track record
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className='font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl'
        >
          Experience & education.
        </motion.h2>

        <motion.ol variants={stagger} className='mt-10 space-y-0 border-l-2 border-line'>
          {entries.map((entry) => (
            <motion.li key={entry.title} variants={fadeUp} className='relative pb-10 pl-7 last:pb-0'>
              <span className='absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 border-brand bg-white' />
              <p className='spec-label'>{entry.period}</p>
              <h3 className='mt-1.5 font-display text-lg font-bold text-ink'>{entry.title}</h3>
              <p className='mt-0.5 text-sm font-medium text-brand'>{entry.org}</p>
              {entry.points.length > 0 && (
                <ul className='mt-3 space-y-2'>
                  {entry.points.map((point) => (
                    <li key={point} className='text-sm leading-relaxed text-muted'>
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </motion.li>
          ))}
        </motion.ol>
      </motion.div>
    </section>
  );
}
