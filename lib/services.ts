import type { IconName } from '@/components/ui/Icon';

export interface Service {
  slug: string;
  /** Optional custom page (e.g. Cybersecurity has its own section) */
  href?: string;
  icon: IconName;
  title: string;
  /** One line used on cards and menus */
  summary: string;
  /** Headline used on the service page */
  headline: string;
  /** Overview paragraphs on the service page */
  overview: string[];
  benefits: { title: string; text: string }[];
  deliverables: string[];
  tools: string[];
  faqs: { q: string; a: string }[];
  metaDescription: string;
}

export const services: Service[] = [
  {
    slug: 'custom-software',
    icon: 'code',
    title: 'Web & mobile software',
    summary: 'Web apps, mobile apps and back-end systems built around how your business works.',
    headline: 'Software built around how your business actually works',
    overview: [
      'Off-the-shelf tools force you to change the way you work. Custom software does the opposite: it fits your processes, your customers and your growth plans.',
      'We design and build web applications, customer portals, internal tools and cross-platform mobile apps. Every system is secure by default, documented, and built to keep working on real-world internet connections.',
    ],
    benefits: [
      { title: 'Fits your process', text: 'No workarounds or spreadsheets on the side. The system matches how your team works.' },
      { title: 'Grows with you', text: 'Clean architecture that is easy to extend as you add branches, users and features.' },
      { title: 'You own it', text: 'Your code, your data and full documentation, with no lock-in.' },
    ],
    deliverables: ['Web applications and customer portals', 'iOS and Android apps from one codebase', 'APIs and back-end services', 'Admin dashboards and reporting', 'Offline-first data sync', 'Ongoing support and maintenance'],
    tools: ['React', 'Next.js', 'React Native', 'Django', 'Node.js', 'PostgreSQL'],
    faqs: [
      { q: 'How long does a typical project take?', a: 'A focused first version usually takes 6 to 12 weeks. We agree the scope with you first and deliver in short stages, so you see working software early.' },
      { q: 'Can you take over an existing system?', a: 'Yes. We start with a review of the code and infrastructure, fix urgent security and stability issues, then improve it step by step.' },
      { q: 'Who owns the source code?', a: 'You do. On final payment, the code, documentation and accounts are handed over to your business.' },
    ],
    metaDescription: 'Custom web applications, mobile apps and back-end systems for businesses in Uganda, built secure by default by Cyntax Innovations.',
  },
  {
    slug: 'cybersecurity',
    href: '/cybersecurity',
    icon: 'shield',
    title: 'Cybersecurity',
    summary: 'Find and fix weaknesses before attackers do, and build security into everything you run.',
    headline: 'Protect your business, your data and your customers',
    overview: [
      'Cyber attacks on African businesses are growing every year, and most start with simple weaknesses: reused passwords, unpatched systems, misconfigured cloud accounts and staff who have never been trained to spot phishing.',
      'Our cybersecurity practice is led by our CTO, a software developer completing a Master’s in Cybersecurity. We assess where you are exposed, fix what matters most first, and help your team build habits that keep you safe, while preparing you for the Data Protection and Privacy Act, 2019.',
    ],
    benefits: [
      { title: 'Know your risks', text: 'A clear, prioritised picture of where you are exposed and what to fix first.' },
      { title: 'Reduce the impact', text: 'Hardened systems, tested backups and a plan for when something goes wrong.' },
      { title: 'Stay compliant', text: 'Practical steps towards the Data Protection and Privacy Act, 2019.' },
    ],
    deliverables: [
      'Security assessments and vulnerability testing (authorised)',
      'Secure code review and secure development',
      'Network, server and cloud hardening',
      'Staff security awareness and phishing training',
      'Data Protection and Privacy Act (2019) readiness',
      'Backup, recovery and incident response planning',
    ],
    tools: ['OWASP Top 10', 'CIS Benchmarks', 'Microsoft 365 security', 'Firewalls & VPN', 'Multi-factor authentication'],
    faqs: [
      { q: 'We are a small business. Do we really need this?', a: 'Yes. Smaller businesses are often targeted because they have fewer defences. A basic assessment and a few key fixes, like multi-factor authentication and tested backups, remove most of the common risk.' },
      { q: 'Will testing disrupt our systems?', a: 'No. We agree the scope and timing with you in writing first, and only test systems you have authorised. Higher-risk tests are scheduled outside working hours.' },
      { q: 'Do you help after the assessment?', a: 'Yes. You get a report in plain language with priorities, and we can fix the issues for you or support your IT team while they do.' },
    ],
    metaDescription: 'Cybersecurity assessments, secure code review, system hardening, staff training and Data Protection and Privacy Act readiness for businesses in Uganda.',
  },
  {
    slug: 'erp',
    icon: 'erp',
    title: 'ERP & Business Central',
    summary: 'Microsoft Dynamics 365 Business Central, implemented and tailored to you.',
    headline: 'Run finance, stock and sales from one reliable system',
    overview: [
      'When accounts live in one tool, stock in a spreadsheet and sales in another app, nobody has the full picture. An ERP brings it all together.',
      'We implement, configure and extend Microsoft Dynamics 365 Business Central for growing businesses, with local requirements such as URA EFRIS built in, and we train your team so the system is actually used.',
    ],
    benefits: [
      { title: 'One source of truth', text: 'Finance, inventory, sales and purchasing share the same live data.' },
      { title: 'Faster month-end', text: 'Automated postings and reports instead of manual reconciliation.' },
      { title: 'Local compliance', text: 'Tax setup and EFRIS integration designed for Uganda.' },
    ],
    deliverables: ['Business process review and system design', 'Implementation and data migration', 'Extensions (AL) and custom reports', 'EFRIS and local tax setup', 'Integrations with your other systems', 'User training and post-go-live support'],
    tools: ['Dynamics 365 Business Central', 'AL language', 'Power BI', 'Power Automate', 'Azure'],
    faqs: [
      { q: 'Is Business Central right for my business size?', a: 'It suits growing businesses, typically from around 5 to several hundred users. We will tell you honestly if a lighter tool would serve you better.' },
      { q: 'Can you move our data from our current system?', a: 'Yes. We migrate customers, suppliers, items, opening balances and history where needed, and reconcile it with you before go-live.' },
      { q: 'What happens after go-live?', a: 'We provide support, fixes and improvements on a monthly plan, and help you add new modules as you grow.' },
    ],
    metaDescription: 'Microsoft Dynamics 365 Business Central implementation, customisation, EFRIS integration and support for businesses in Uganda.',
  },
  {
    slug: 'integrations',
    icon: 'plug',
    title: 'APIs & integrations',
    summary: 'Connect your systems to EFRIS, URA, NSSF, mobile money and payment gateways.',
    headline: 'Make your systems talk to each other',
    overview: [
      'Re-typing data between systems wastes time and causes costly mistakes. Integrations move information automatically, accurately and securely.',
      'We connect your software to government platforms like URA EFRIS, to banks, mobile money and payment gateways, and to the business tools you already use.',
    ],
    benefits: [
      { title: 'No double entry', text: 'Data flows between systems automatically.' },
      { title: 'Fewer errors', text: 'Validation at every step keeps records consistent.' },
      { title: 'Secure by design', text: 'Encrypted connections, secrets management and full audit logs.' },
    ],
    deliverables: ['URA EFRIS integration', 'Mobile money and payment gateways', 'NSSF and payroll links', 'Bank and accounting integrations', 'Custom REST APIs', 'Monitoring and error alerts'],
    tools: ['REST & webhooks', 'URA EFRIS', 'Mobile money APIs', 'n8n', 'Azure Functions'],
    faqs: [
      { q: 'Can you integrate EFRIS with our existing software?', a: 'In most cases, yes. We review your current system and connect it to EFRIS directly or through a small middleware service.' },
      { q: 'What if an external system goes down?', a: 'We design integrations to queue and retry, and to alert your team, so no transaction is silently lost.' },
      { q: 'How do you keep integrations secure?', a: 'Credentials are stored as secrets, never in code; traffic is encrypted; and every call is logged for audit.' },
    ],
    metaDescription: 'URA EFRIS, mobile money, payment gateway, NSSF and system-to-system integrations for businesses in Uganda.',
  },
  {
    slug: 'strategy',
    icon: 'compass',
    title: 'ICT consulting & strategy',
    summary: 'Technology roadmaps, architecture and security advice before you invest.',
    headline: 'Make the right technology decisions, in the right order',
    overview: [
      'Technology projects fail most often before a line of code is written: the wrong tool is chosen, scope is unclear or the risks are not understood.',
      'We review your current systems, processes and security, map out the options and give you a practical roadmap with clear priorities, timelines and costs. We stay vendor-neutral and tell you when the answer is “don’t build it”.',
    ],
    benefits: [
      { title: 'Clarity', text: 'A roadmap everyone understands, from the board to the IT team.' },
      { title: 'Lower risk', text: 'Security, data and vendor risks identified before you commit.' },
      { title: 'Better value', text: 'Spend on what moves the business, not on what looks impressive.' },
    ],
    deliverables: ['Systems, process and security review', 'Technology roadmap', 'Architecture design', 'Vendor and tool selection', 'Project scoping and estimates', 'Tender and RFP support'],
    tools: ['Process mapping', 'Risk assessment', 'Cloud architecture', 'Cost modelling'],
    faqs: [
      { q: 'Do we have to use Cyntax to build what you recommend?', a: 'No. The roadmap is yours. Many clients choose us to deliver it, but you are free to use any provider.' },
      { q: 'How long does a strategy engagement take?', a: 'Usually two to four weeks, depending on the size of the organisation and number of systems.' },
      { q: 'Can you help us evaluate supplier proposals?', a: 'Yes. We help write requirements, score proposals and check technical claims.' },
    ],
    metaDescription: 'Independent ICT consulting, technology roadmaps, architecture and vendor selection for organisations in Uganda.',
  },
  {
    slug: 'automation',
    icon: 'automation',
    title: 'Automation & AI',
    summary: 'Automate repetitive work and put AI to practical use.',
    headline: 'Give your team back the hours lost to repetitive work',
    overview: [
      'Approvals chased by phone, reports rebuilt every week, documents re-typed by hand: these tasks quietly eat into every working day.',
      'We map your processes, automate the repetitive steps and apply AI where it saves real time, such as reading documents, drafting replies or answering common questions, with your data kept private and secure.',
    ],
    benefits: [
      { title: 'Time back', text: 'Routine tasks run on their own, on schedule.' },
      { title: 'Consistency', text: 'Every request follows the same steps, every time.' },
      { title: 'Responsible AI', text: 'Human review where it matters, and no sensitive data sent where it should not go.' },
    ],
    deliverables: ['Process mapping', 'Workflow automation (n8n)', 'Automated reports and alerts', 'AI document processing', 'AI assistants for staff or customers', 'Training and handover'],
    tools: ['n8n', 'Power Automate', 'Python', 'Large language models'],
    faqs: [
      { q: 'Where should we start with automation?', a: 'With a task that is frequent, rule-based and annoying. We usually find two or three quick wins in the first workshop.' },
      { q: 'Is it safe to use AI with our business data?', a: 'It can be, with the right setup. We choose tools and configurations that keep your data private, and add human review for important decisions.' },
      { q: 'Will automation replace our staff?', a: 'Our goal is to remove repetitive work so your people can focus on customers and decisions.' },
    ],
    metaDescription: 'Workflow automation with n8n and practical, secure AI solutions for businesses in Uganda.',
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

export const industries: { icon: IconName; title: string; text: string }[] = [
  { icon: 'store', title: 'Retail & wholesale', text: 'POS, stock control and EFRIS compliance across branches.' },
  { icon: 'receipt', title: 'Hospitality', text: 'Fast, compliant billing for restaurants, cafés and bars.' },
  { icon: 'bank', title: 'SACCOs & financial services', text: 'Member, savings and loan management with strong controls.' },
  { icon: 'heart', title: 'Healthcare', text: 'Secure systems that protect sensitive patient information.' },
  { icon: 'users', title: 'NGOs & membership bodies', text: 'Reporting, donor tracking and member portals.' },
  { icon: 'erp', title: 'Growing SMEs', text: 'ERP, integrations and automation to scale operations.' },
];

export const serviceHref = (s: Service) => s.href ?? `/services/${s.slug}`;
