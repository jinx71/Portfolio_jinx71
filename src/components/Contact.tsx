import { useState, type ChangeEvent } from 'react';
import { motion } from 'framer-motion';
import { fadeUp, stagger, viewportOnce } from '../lib/motion';

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined;
const EMAIL = 'your.email@gmail.com'; // TODO: replace with your real address

type SendState = 'idle' | 'sending' | 'sent' | 'error';

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const initialValues: FormValues = { name: '', email: '', message: '' };

export default function Contact() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [state, setState] = useState<SendState>('idle');

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    // Without a configured endpoint, hand off to the visitor's mail client.
    if (!FORMSPREE_ENDPOINT) {
      const subject = encodeURIComponent(`Portfolio contact from ${values.name}`);
      const body = encodeURIComponent(`${values.message}\n\n— ${values.name} (${values.email})`);
      window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
      return;
    }

    setState('sending');
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error(`Formspree responded with ${res.status}`);
      setState('sent');
      setValues(initialValues);
    } catch (err) {
      console.error('Contact form failed:', err);
      setState('error');
    }
  };

  const disabled =
    state === 'sending' || !values.name || !values.email || !values.message;

  return (
    <section id='contact' className='bg-ink py-20 text-paper sm:py-28'>
      <motion.div
        variants={stagger}
        initial='hidden'
        whileInView='visible'
        viewport={viewportOnce}
        className='section-shell grid gap-12 lg:grid-cols-2'
      >
        <div>
          <motion.p variants={fadeUp} className='eyebrow mb-4'>
            Contact
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className='font-display text-3xl font-bold tracking-tight sm:text-4xl'
          >
            Hiring for a full-stack or AI role in Ireland?
          </motion.h2>
          <motion.p variants={fadeUp} className='mt-5 max-w-md leading-relaxed text-muted-dark'>
            I'm open to full-stack and AI engineering positions, on-site in
            Ireland or remote across the EU. If a developer who already speaks
            regulated-industry sounds useful, let's talk.
          </motion.p>
          <motion.ul variants={fadeUp} className='mt-8 space-y-3 font-mono text-sm'>
            <li>
              <a href={`mailto:${EMAIL}`} className='text-paper transition-colors hover:text-brand'>
                {EMAIL}
              </a>
            </li>
            <li>
              <a
                href='https://github.com/jinx71'
                target='_blank'
                rel='noreferrer'
                className='text-paper transition-colors hover:text-brand'
              >
                github.com/jinx71
              </a>
            </li>
            <li>
              <a
                href='https://linkedin.com/in/sazed-ul-karim'
                target='_blank'
                rel='noreferrer'
                className='text-paper transition-colors hover:text-brand'
              >
                linkedin.com/in/sazed-ul-karim
              </a>
            </li>
          </motion.ul>
        </div>

        <motion.div variants={fadeUp} className='rounded border border-line-dark bg-ink-soft p-6 sm:p-8'>
          <div className='space-y-5'>
            <div>
              <label htmlFor='name' className='spec-label !text-muted-dark'>
                Name
              </label>
              <input
                id='name'
                name='name'
                type='text'
                autoComplete='name'
                value={values.name}
                onChange={handleChange}
                className='mt-2 w-full rounded border border-line-dark bg-ink px-4 py-3 text-sm text-paper placeholder:text-muted focus:border-brand'
                placeholder='Your name'
              />
            </div>
            <div>
              <label htmlFor='email' className='spec-label !text-muted-dark'>
                Email
              </label>
              <input
                id='email'
                name='email'
                type='email'
                autoComplete='email'
                value={values.email}
                onChange={handleChange}
                className='mt-2 w-full rounded border border-line-dark bg-ink px-4 py-3 text-sm text-paper placeholder:text-muted focus:border-brand'
                placeholder='you@company.com'
              />
            </div>
            <div>
              <label htmlFor='message' className='spec-label !text-muted-dark'>
                Message
              </label>
              <textarea
                id='message'
                name='message'
                rows={4}
                value={values.message}
                onChange={handleChange}
                className='mt-2 w-full resize-y rounded border border-line-dark bg-ink px-4 py-3 text-sm text-paper placeholder:text-muted focus:border-brand'
                placeholder='Tell me about the role or project'
              />
            </div>
            <button
              type='button'
              onClick={handleSubmit}
              disabled={disabled}
              className='w-full rounded bg-brand px-5 py-3 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-brand-deep disabled:cursor-not-allowed disabled:opacity-40'
            >
              {state === 'sending' ? 'Sending…' : 'Send message'}
            </button>
            {state === 'sent' && (
              <p className='font-mono text-xs text-validated' role='status'>
                Message sent. I'll reply within one working day.
              </p>
            )}
            {state === 'error' && (
              <p className='font-mono text-xs text-amber' role='status'>
                Sending failed. Email me directly at {EMAIL}.
              </p>
            )}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
