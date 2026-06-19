export interface Service {
  icon: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: '</>',
    title: 'Custom Software Dev',
    description: 'Web apps, APIs, and backend systems built for scale',
  },
  {
    icon: '◎',
    title: 'ERP & Systems Design',
    description: 'Microsoft Dynamics 365 Business Central implementations',
  },
  {
    icon: '⬡',
    title: 'Mobile Development',
    description: 'Cross-platform apps for iOS and Android',
  },
  {
    icon: '◈',
    title: 'API & Integrations',
    description: 'Connect your tools — EFRIS, URA, NSSF, payment gateways',
  },
  {
    icon: '▣',
    title: 'Digital Strategy',
    description: 'Technology roadmaps and architecture consulting',
  },
  {
    icon: '⚙',
    title: 'Automation & AI',
    description: 'Workflow automation, n8n, and AI-powered solutions',
  },
];
