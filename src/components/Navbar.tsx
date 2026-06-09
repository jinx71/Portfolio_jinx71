import { useState } from 'react';
import { motion } from 'framer-motion';

const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className='fixed inset-x-0 top-0 z-50 border-b border-line bg-paper/90 backdrop-blur'
    >
      <nav className='section-shell flex h-16 items-center justify-between'>
        <a href='#top' className='flex items-baseline gap-2 font-display text-lg font-bold tracking-tight text-ink'>
          Sazed Ul Karim
          <span className='hidden font-mono text-[0.6rem] font-medium uppercase tracking-[0.2em] text-muted sm:inline'>
            Full-Stack · AI
          </span>
        </a>

        <ul className='hidden items-center gap-7 md:flex'>
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className='font-mono text-xs uppercase tracking-[0.15em] text-muted transition-colors hover:text-brand'
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href='https://github.com/jinx71'
              target='_blank'
              rel='noreferrer'
              className='rounded border border-ink px-3 py-1.5 font-mono text-xs uppercase tracking-[0.15em] text-ink transition-colors hover:bg-ink hover:text-paper'
            >
              GitHub
            </a>
          </li>
        </ul>

        <button
          type='button'
          aria-expanded={open}
          aria-label='Toggle navigation'
          onClick={() => setOpen((v) => !v)}
          className='flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden'
        >
          <span className={`h-0.5 w-5 bg-ink transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`h-0.5 w-5 bg-ink transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-5 bg-ink transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </nav>

      {open && (
        <ul className='border-t border-line bg-paper px-5 py-4 md:hidden'>
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className='block py-2.5 font-mono text-sm uppercase tracking-[0.15em] text-body'
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href='https://github.com/jinx71'
              target='_blank'
              rel='noreferrer'
              className='block py-2.5 font-mono text-sm uppercase tracking-[0.15em] text-brand'
            >
              GitHub ↗
            </a>
          </li>
        </ul>
      )}
    </motion.header>
  );
}
