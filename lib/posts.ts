export type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'callout'; title: string; text: string };

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: 'Cybersecurity' | 'Compliance' | 'ERP' | 'Company';
  date: string; // ISO
  author: string; // team slug
  readMinutes: number;
  body: Block[];
}

export const posts: Post[] = [
  {
    slug: 'cybersecurity-basics-for-ugandan-smes',
    title: 'Five cybersecurity basics every Ugandan business should have in place',
    excerpt:
      'Most attacks on small and medium businesses exploit simple gaps. These five controls remove a large share of the risk, and most cost little or nothing.',
    category: 'Cybersecurity',
    date: '2026-11-17',
    author: 'joseph-mukiibi',
    readMinutes: 6,
    body: [
      { type: 'p', text: 'When people picture a cyber attack, they often imagine a sophisticated hacker targeting a bank. In reality, most incidents affecting small and medium businesses start with something ordinary: a reused password, a phishing email, an unpatched computer or a backup that was never tested.' },
      { type: 'p', text: 'The good news is that a handful of basic controls removes a large share of that risk. Here are the five I recommend every business in Uganda puts in place first.' },
      { type: 'h2', text: '1. Turn on multi-factor authentication everywhere' },
      { type: 'p', text: 'Multi-factor authentication (MFA) means that a stolen password alone is not enough to get into an account. Turn it on for email, accounting systems, cloud storage, social media and banking. Prefer an authenticator app over SMS codes where you can.' },
      { type: 'h2', text: '2. Keep systems and software up to date' },
      { type: 'p', text: 'Attackers actively scan for computers, routers and websites running old software with known weaknesses. Switch on automatic updates for operating systems and browsers, replace devices that no longer receive security updates, and keep website plugins and servers patched.' },
      { type: 'h2', text: '3. Back up, and test that you can restore' },
      { type: 'p', text: 'Ransomware, theft, fire or a failed hard disk can all wipe out your data. A simple rule to follow is 3-2-1:' },
      { type: 'ul', items: ['Keep 3 copies of important data', 'On 2 different types of storage', 'With 1 copy kept offline or off-site'] },
      { type: 'p', text: 'Most importantly, test a restore every few months. A backup you have never restored is only a hope.' },
      { type: 'h2', text: '4. Train your team to spot phishing' },
      { type: 'p', text: 'Your staff are your first line of defence. Short, regular training helps people recognise fake invoices, urgent payment requests, “mobile money reversal” scams and login pages that are not what they seem. Make it easy and blame-free to report a suspicious message.' },
      { type: 'h2', text: '5. Give people only the access they need' },
      { type: 'p', text: 'Not everyone needs to be an administrator. Give each person their own account, with only the permissions their role requires, and remove access promptly when someone leaves. Shared logins make it impossible to know who did what.' },
      { type: 'callout', title: 'Do not forget the law', text: 'The Data Protection and Privacy Act, 2019 places obligations on organisations that collect or process personal data, overseen by the Personal Data Protection Office (PDPO). Good security practice is a large part of meeting those obligations. Check with the PDPO or a legal adviser for what applies to your organisation.' },
      { type: 'h2', text: 'Where to start' },
      { type: 'p', text: 'If you do only one thing this week, turn on MFA for your email. If you would like a clear picture of where your business stands, our team can run a security assessment and give you a prioritised, plain-language plan.' },
    ],
  },
  {
    slug: 'efris-explained-for-ugandan-businesses',
    title: 'EFRIS explained: what Ugandan businesses need to know',
    excerpt:
      'A plain-language overview of URA’s Electronic Fiscal Receipting and Invoicing Solution, the ways to connect to it, and how to choose the right option for your business.',
    category: 'Compliance',
    date: '2026-11-10',
    author: 'joseph-mukiibi',
    readMinutes: 5,
    body: [
      { type: 'p', text: 'EFRIS, the Electronic Fiscal Receipting and Invoicing Solution, is the Uganda Revenue Authority’s system for issuing and recording receipts and invoices electronically. Each fiscal document is registered with URA and carries a unique fiscal document number and a QR code that customers can use to verify it.' },
      { type: 'p', text: 'For businesses that fall under the requirement, EFRIS is no longer optional. Here is a practical overview of what it means for day-to-day operations.' },
      { type: 'h2', text: 'Who needs to use EFRIS?' },
      { type: 'p', text: 'URA has rolled EFRIS out in phases, starting with VAT-registered taxpayers and extending to other designated taxpayers. Requirements change over time, so always confirm with URA whether, and from when, your business is covered.' },
      { type: 'h2', text: 'Ways to connect to EFRIS' },
      { type: 'p', text: 'There are several ways to issue EFRIS-compliant documents. The right one depends on your size and how you sell:' },
      { type: 'ul', items: [
        'URA’s own web portal and apps: suitable for businesses issuing a small number of invoices.',
        'Electronic Fiscal Devices (EFDs): dedicated devices, often used at the point of sale.',
        'System-to-system integration: your POS, ERP or accounting software connects directly to EFRIS, so every sale is fiscalised automatically.',
      ] },
      { type: 'h2', text: 'Why system-to-system integration pays off' },
      { type: 'p', text: 'Entering every sale twice, once in your system and once in EFRIS, is slow and leads to mismatches between your books and URA’s records. With integration, the receipt is fiscalised the moment the sale is made, and your stock, sales and tax records stay in step.' },
      { type: 'callout', title: 'Plan for the internet going down', text: 'Connectivity is not always reliable. Choose a solution that can keep trading during an outage and sync with EFRIS once the connection returns, so customers are never turned away.' },
      { type: 'h2', text: 'Checklist before you go live' },
      { type: 'ol', items: [
        'Confirm your obligations and registration details with URA.',
        'Make sure your item list and tax categories are set up correctly.',
        'Decide how you will issue documents at each point of sale.',
        'Train staff on issuing, cancelling and crediting receipts correctly.',
        'Reconcile your sales records against EFRIS regularly.',
      ] },
      { type: 'p', text: 'ZentroApp, our point-of-sale platform, issues EFRIS-compliant receipts directly from the till and keeps working offline. If you use other software, our integrations team can connect it to EFRIS for you.' },
    ],
  },
  {
    slug: 'spreadsheets-to-erp-signs-its-time',
    title: 'From spreadsheets to ERP: six signs your business is ready',
    excerpt:
      'Spreadsheets are a great start, but they do not scale forever. Here are the warning signs that it is time for a proper ERP system, and how to make the move without disruption.',
    category: 'ERP',
    date: '2026-11-03',
    author: 'joseph-mukiibi',
    readMinutes: 5,
    body: [
      { type: 'p', text: 'Almost every business starts on spreadsheets and a basic accounting package. That is sensible: they are cheap, flexible and familiar. But as the business grows, the cracks start to show.' },
      { type: 'h2', text: 'Six signs you have outgrown spreadsheets' },
      { type: 'ol', items: [
        'Month-end takes days of manual reconciliation.',
        'Stock counts rarely match what the system says.',
        'Different people keep different versions of the “same” numbers.',
        'Opening a new branch means copying files and hoping for the best.',
        'Tax and compliance reporting is a stressful, manual exercise.',
        'You cannot answer simple questions, like today’s margin by product, without a long wait.',
      ] },
      { type: 'h2', text: 'What an ERP actually changes' },
      { type: 'p', text: 'An Enterprise Resource Planning (ERP) system such as Microsoft Dynamics 365 Business Central brings finance, inventory, sales and purchasing into one system that shares the same live data. A sale updates stock, the customer’s account and the general ledger at the same moment.' },
      { type: 'ul', items: ['One source of truth for the whole business', 'Real-time reports instead of end-of-month surprises', 'Controls and approvals that reduce errors and fraud', 'A platform that supports new branches and new lines of business'] },
      { type: 'h2', text: 'How to make the move without disruption' },
      { type: 'p', text: 'The most successful ERP projects are not the biggest; they are the best prepared. Start by mapping how work really flows today, clean up your master data (customers, suppliers and items), and go live with the core modules first. Training matters as much as configuration: a system people do not trust will be bypassed.' },
      { type: 'callout', title: 'Not every business needs an ERP', text: 'If you have a single location, a small product range and a simple process, a good accounting package and a POS may be all you need. An honest partner will tell you so.' },
      { type: 'p', text: 'If you recognise three or more of the signs above, it is worth a conversation. We are happy to review your current setup and give you an honest recommendation.' },
    ],
  },
];

export const sortedPosts = [...posts].sort((a, b) => b.date.localeCompare(a.date));
export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

export const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
