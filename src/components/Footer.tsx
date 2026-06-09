export default function Footer() {
  return (
    <footer className='border-t border-line-dark bg-ink py-8 text-paper'>
      <div className='section-shell flex flex-col items-center justify-between gap-3 sm:flex-row'>
        <p className='font-mono text-xs text-muted-dark'>
          © {new Date().getFullYear()} Md. Sazed Ul Karim
        </p>
        <p className='font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted-dark'>
          PRJ-01 · Built with React, Tailwind & Framer Motion
        </p>
      </div>
    </footer>
  );
}
