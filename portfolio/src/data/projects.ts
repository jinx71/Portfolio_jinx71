export type ProjectStatus = 'validated' | 'in-progress' | 'planned';

export interface Project {
  id: string;
  title: string;
  month: number;
  status: ProjectStatus;
  summary: string;
  stack: string[];
  repoUrl: string;
  liveUrl?: string;
  flagship?: boolean;
}

const GITHUB = 'https://github.com/jinx71';

export const projects: Project[] = [
  {
    id: 'PRJ-01',
    title: 'Personal Developer Portfolio',
    month: 1,
    status: 'in-progress',
    summary:
      'The site you are reading. React, Tailwind and Framer Motion, deployed on Vercel — a single-page record of the full six-month build.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    repoUrl: `${GITHUB}/portfolio`,
  },
  {
    id: 'PRJ-02',
    title: 'Full-Stack Task Manager',
    month: 1,
    status: 'planned',
    summary:
      'End-to-end CRUD done properly: JWT auth, hashed passwords, protected routes and a relational schema behind a typed API.',
    stack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'JWT'],
    repoUrl: `${GITHUB}/task-manager`,
  },
  {
    id: 'PRJ-03',
    title: 'Weather & Air Quality Dashboard',
    month: 2,
    status: 'planned',
    summary:
      'Live OpenWeatherMap and IQAir feeds rendered through Recharts — async data handling and visual presentation under real-world API limits.',
    stack: ['React', 'REST APIs', 'Recharts', 'Vercel'],
    repoUrl: `${GITHUB}/weather-aqi-dashboard`,
  },
  {
    id: 'PRJ-04',
    title: 'GMP Equipment Maintenance Logger',
    month: 2,
    status: 'planned',
    summary:
      'A domain app no bootcamp graduate ships: maintenance activities, calibration due dates and compliance status, modelled the way a pharma plant actually runs.',
    stack: ['React', 'Node.js', 'MongoDB', 'Mongoose'],
    repoUrl: `${GITHUB}/gmp-maintenance-logger`,
    flagship: true,
  },
  {
    id: 'PRJ-05',
    title: 'Documented REST API',
    month: 3,
    status: 'planned',
    summary:
      'A pharmaceutical asset-tracking API with full Swagger/OpenAPI documentation — built to be consumed by a team, not just a demo.',
    stack: ['Node.js', 'Express', 'Swagger / OpenAPI', 'TypeScript'],
    repoUrl: `${GITHUB}/instrument-api`,
  },
  {
    id: 'PRJ-06',
    title: 'Auth System with RBAC',
    month: 3,
    status: 'planned',
    summary:
      'Google OAuth2 plus JWT with admin / user / viewer roles — the permission model behind every regulated system I have worked in.',
    stack: ['React', 'Node.js', 'Google OAuth2', 'JWT', 'RBAC'],
    repoUrl: `${GITHUB}/auth-rbac-system`,
  },
  {
    id: 'PRJ-07',
    title: 'AI Document Summariser',
    month: 4,
    status: 'planned',
    summary:
      'Upload an SOP or validation protocol, get a structured summary with action items — PDF parsing, chunked prompts and streaming responses.',
    stack: ['React', 'FastAPI', 'Anthropic API', 'PyMuPDF'],
    repoUrl: `${GITHUB}/ai-doc-summariser`,
  },
  {
    id: 'PRJ-08',
    title: 'XAI Visualisation Dashboard',
    month: 4,
    status: 'in-progress',
    summary:
      'My MSc thesis as a product: a CNN ensemble classifying cervical cell images, with GradCAM heatmaps, SHAP plots and LLM-written clinical explanations.',
    stack: ['React', 'FastAPI', 'EfficientNetV2L', 'GradCAM', 'SHAP'],
    repoUrl: `${GITHUB}/xai-dashboard`,
    flagship: true,
  },
  {
    id: 'PRJ-09',
    title: 'Real-Time Notification App',
    month: 5,
    status: 'planned',
    summary:
      'WebSockets and Redis pub/sub for multi-room, event-driven delivery — async architecture beyond request/response.',
    stack: ['React', 'Node.js', 'Socket.io', 'Redis'],
    repoUrl: `${GITHUB}/realtime-notifications`,
  },
  {
    id: 'PRJ-10',
    title: 'Dockerised App + CI/CD Pipeline',
    month: 5,
    status: 'planned',
    summary:
      'An earlier project containerised with Docker Compose and shipped through GitHub Actions to AWS EC2 — automated tests gate every deploy.',
    stack: ['Docker', 'Docker Compose', 'GitHub Actions', 'AWS EC2'],
    repoUrl: `${GITHUB}/dockerised-cicd`,
  },
  {
    id: 'PRJ-11',
    title: 'Multi-Tenant SaaS Dashboard',
    month: 6,
    status: 'planned',
    summary:
      'Workspace isolation, Stripe subscriptions and webhook billing — the architecture patterns Dublin product companies run on.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Prisma', 'Stripe'],
    repoUrl: `${GITHUB}/saas-dashboard`,
  },
  {
    id: 'PRJ-12',
    title: 'AI Pharma Compliance Audit Tool',
    month: 6,
    status: 'planned',
    summary:
      'The capstone. Upload audit documents, AI flags non-conformances against GMP standards, a dashboard scores risk, and findings export as PDF reports.',
    stack: ['React', 'FastAPI', 'LLM APIs', 'PostgreSQL', 'Docker'],
    repoUrl: `${GITHUB}/pharma-audit-ai`,
    flagship: true,
  },
];

export const statusMeta: Record<ProjectStatus, { label: string; chip: string }> = {
  validated: {
    label: 'Shipped',
    chip: 'bg-validated/10 text-validated border-validated/30',
  },
  'in-progress': {
    label: 'In progress',
    chip: 'bg-amber/10 text-amber border-amber/30',
  },
  planned: {
    label: 'Planned',
    chip: 'bg-muted/10 text-muted border-line',
  },
};
