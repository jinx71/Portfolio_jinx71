export interface SkillGroup {
  code: string;
  name: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    code: 'FE',
    name: 'Frontend',
    skills: [
      'React',
      'TypeScript',
      'JavaScript (ES6+)',
      'Tailwind CSS',
      'Framer Motion',
      'Recharts',
      'HTML5 / CSS3',
    ],
  },
  {
    code: 'BE',
    name: 'Backend',
    skills: [
      'Node.js',
      'Express.js',
      'Python',
      'FastAPI',
      'REST API design',
      'Swagger / OpenAPI',
      'Socket.io',
    ],
  },
  {
    code: 'DB',
    name: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma', 'Mongoose'],
  },
  {
    code: 'AI',
    name: 'AI & ML',
    skills: [
      'Anthropic / OpenAI APIs',
      'Prompt engineering',
      'GradCAM & SHAP',
      'ML model serving',
      'PDF parsing & generation',
      'LangChain',
    ],
  },
  {
    code: 'OPS',
    name: 'Cloud & DevOps',
    skills: [
      'Docker & Compose',
      'GitHub Actions (CI/CD)',
      'AWS EC2',
      'Vercel',
      'Railway / Render',
      'Git & GitHub',
    ],
  },
  {
    code: 'SEC',
    name: 'Auth & Security',
    skills: ['JWT', 'bcrypt', 'Google OAuth2', 'RBAC', 'CORS', '.env secrets'],
  },
];
