import type { IconName } from '@/components/ui/Icon';

export interface Product {
  slug: string;
  name: string;
  icon: IconName;
  category: string;
  tagline: string;
  summary: string;
  overview: string[];
  audience: { title: string; text: string }[];
  features: { icon: IconName; title: string; text: string }[];
  tags: string[];
  website?: string;
  metaDescription: string;
}

// TODO(Joseph): Saccolla and MediLink content was written from the product names.
// Please confirm features, audience and add website links before launch.
export const products: Product[] = [
  {
    slug: 'zentroapp',
    name: 'ZentroApp',
    icon: 'store',
    category: 'Retail & hospitality',
    tagline: 'EFRIS-compliant point of sale and inventory for Uganda',
    summary:
      'Point of sale and stock control for Ugandan retailers, restaurants and multi-branch businesses, with URA EFRIS compliance and offline-first selling.',
    overview: [
      'ZentroApp is a multi-tenant point-of-sale and inventory platform purpose-built for Ugandan businesses. It issues EFRIS-compliant receipts, tracks stock in real time across branches and keeps working when the internet drops.',
      'Owners get one view of sales and stock across every location, while staff get a fast, simple till that needs very little training.',
    ],
    audience: [
      { title: 'Retail shops', text: 'Supermarkets, hardware, pharmacies and boutiques.' },
      { title: 'Restaurants & cafés', text: 'Fast, compliant receipts at busy times.' },
      { title: 'Multi-branch businesses', text: 'One view of sales and stock everywhere.' },
    ],
    features: [
      { icon: 'receipt', title: 'URA EFRIS compliance', text: 'Fiscal receipts and invoices that sync with URA EFRIS, without extra steps at the till.' },
      { icon: 'store', title: 'Multi-branch control', text: 'Prices, stock and reports per branch, managed from one account.' },
      { icon: 'wifiOff', title: 'Offline-first', text: 'Keep selling when the internet drops; sales sync automatically later.' },
      { icon: 'chart', title: 'Real-time stock', text: 'See what is selling and what is running low as it happens.' },
      { icon: 'users', title: 'Staff accounts', text: 'Roles and permissions for cashiers, managers and owners.' },
      { icon: 'shield', title: 'Secure & multi-tenant', text: 'Each business’s data is isolated and protected.' },
    ],
    tags: ['URA EFRIS', 'Multi-branch', 'Offline-first'],
    website: 'https://zentroapp.app',
    metaDescription:
      'ZentroApp is an EFRIS-compliant, offline-first POS and inventory system for Ugandan retailers, restaurants and multi-branch businesses.',
  },
  {
    slug: 'saccolla',
    name: 'Saccolla',
    icon: 'bank',
    category: 'SACCOs & financial services',
    tagline: 'Modern management for savings and credit cooperatives',
    summary: 'A SACCO management system covering members, savings, loans and reporting, with strong controls and a clear audit trail.',
    overview: [
      'Saccolla helps savings and credit cooperatives move from paper ledgers and spreadsheets to a secure, modern system.',
      'Members, savings, loans and repayments are managed in one place, with the reports boards and regulators expect, and with access controls that protect members’ money and data.',
    ],
    audience: [
      { title: 'SACCOs', text: 'Community, workplace and farmer savings groups.' },
      { title: 'Microfinance', text: 'Small lenders that need reliable loan tracking.' },
      { title: 'Investment clubs', text: 'Groups that pool savings and need transparency.' },
    ],
    features: [
      { icon: 'users', title: 'Member management', text: 'Member records, shares and contributions in one place.' },
      { icon: 'bank', title: 'Savings & loans', text: 'Track deposits, loan applications, approvals and repayments.' },
      { icon: 'chart', title: 'Reports', text: 'Financial statements and portfolio reports for boards and members.' },
      { icon: 'shield', title: 'Controls & audit trail', text: 'Role-based access and a record of every transaction.' },
    ],
    tags: ['SACCO management', 'Loans & savings', 'Audit trail'],
    metaDescription: 'Saccolla is a secure SACCO management system for members, savings, loans and reporting, built in Uganda by Cyntax Innovations.',
  },
  {
    slug: 'medilink',
    name: 'MediLink',
    icon: 'heart',
    category: 'Healthcare',
    tagline: 'Connected, secure records for health facilities',
    summary: 'A healthcare platform that connects patients, clinicians and facility records, with privacy and security designed in.',
    overview: [
      'MediLink brings patient records, appointments and clinical information together so health workers spend less time on paperwork and more time with patients.',
      'Health data is among the most sensitive information there is. MediLink is designed security-first, with access controls and audit logs that support patient confidentiality.',
    ],
    audience: [
      { title: 'Clinics', text: 'Private clinics and medical centres.' },
      { title: 'Hospitals', text: 'Departments that need shared, up-to-date records.' },
      { title: 'Health networks', text: 'Organisations linking several facilities.' },
    ],
    features: [
      { icon: 'heart', title: 'Patient records', text: 'Up-to-date patient information available to authorised staff.' },
      { icon: 'users', title: 'Connected care', text: 'Patients, clinicians and facilities linked in one platform.' },
      { icon: 'shield', title: 'Privacy by design', text: 'Role-based access and audit logs to protect confidentiality.' },
      { icon: 'chart', title: 'Facility insights', text: 'Reports that help managers plan staff and resources.' },
    ],
    tags: ['Health records', 'Privacy by design', 'Web platform'],
    metaDescription: 'MediLink is a secure healthcare platform connecting patients, clinicians and facility records, built in Uganda by Cyntax Innovations.',
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
