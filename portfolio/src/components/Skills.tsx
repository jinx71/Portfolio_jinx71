import { motion } from 'framer-motion';
import { fadeUp, stagger, viewportOnce } from '../lib/motion';
import { skillGroups } from '../data/skills';

export default function Skills() {
  return (
    <section id='skills' className='py-20 sm:py-28'>
      <motion.div
        variants={stagger}
        initial='hidden'
        whileInView='visible'
        viewport={viewportOnce}
        className='section-shell'
      >
        <motion.p variants={fadeUp} className='eyebrow mb-4'>
          Capabilities
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className='font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl'
        >
          The stack, layer by layer.
        </motion.h2>

        <motion.div
          variants={stagger}
          className='mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3'
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.code}
              variants={fadeUp}
              className='rounded border border-line bg-white p-5'
            >
              <div className='flex items-baseline justify-between border-b border-line pb-3'>
                <h3 className='font-display text-base font-bold text-ink'>{group.name}</h3>
                <span className='font-mono text-[0.62rem] font-semibold tracking-[0.2em] text-brand'>
                  {group.code}
                </span>
              </div>
              <ul className='mt-3.5 flex flex-wrap gap-1.5'>
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className='rounded bg-paper px-2.5 py-1 font-mono text-xs text-body'
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
