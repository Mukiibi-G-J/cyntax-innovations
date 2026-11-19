export const site = {
  name: 'Cyntax Innovations',
  legalName: 'Cyntax Innovations',
  url: 'https://cyntaxinnovations.com',
  email: 'hello@cyntaxinnovations.com',
  location: 'Kampala, Uganda',
  founded: '2025',
  // WhatsApp / phone in international format, digits only, e.g. '2567XXXXXXXX'.
  // Leave empty to hide the WhatsApp button and phone number across the site.
  whatsapp: '' as string,
  tagline: 'Secure software, systems and strategy for growing businesses in Uganda and across Africa.',
  description:
    'Cyntax Innovations designs, builds and secures custom software, cybersecurity services, Microsoft Dynamics 365 Business Central ERP, integrations and automation for businesses in Uganda and across Africa. Makers of ZentroApp, the EFRIS-compliant POS.',
} as const;

/** "256712345678" -> "+256 712 345 678" */
export const formatPhone = (digits: string) =>
  `+${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6, 9)} ${digits.slice(9)}`.trim();

export const whatsappLink = (text = 'Hello Cyntax Innovations, I would like to talk about a project.') =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
