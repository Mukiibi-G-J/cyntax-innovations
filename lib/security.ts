import type { IconName } from '@/components/ui/Icon';

export interface SecurityService {
  slug: string;
  icon: IconName;
  title: string;
  summary: string;
  headline: string;
  overview: string[];
  /** What the engagement covers */
  includes: { title: string; text: string }[];
  /** What the client receives */
  deliverables: string[];
  faqs: { q: string; a: string }[];
  metaDescription: string;
}

/**
 * Cyntax cybersecurity practice. Written in our own words; no vendor partnerships,
 * certifications or past projects are claimed. Add those here only when they are real.
 */
export const securityServices: SecurityService[] = [
  {
    slug: 'security-assessments',
    icon: 'search',
    title: 'Security assessments & penetration testing',
    summary: 'Find the weaknesses in your systems, networks and applications before attackers do.',
    headline: 'Know exactly where you are exposed',
    overview: [
      'Most breaches exploit weaknesses that could have been found and fixed in advance: an unpatched server, a misconfigured cloud account, a weak password policy or a vulnerable web application.',
      'We test your environment the way an attacker would, with your written authorisation and an agreed scope, then give you a clear, prioritised report your management and IT team can both act on.',
    ],
    includes: [
      { title: 'Vulnerability assessment', text: 'Scanning of servers, workstations and network devices for known weaknesses and missing patches.' },
      { title: 'Penetration testing', text: 'Controlled, authorised attempts to exploit weaknesses in networks, web and mobile applications.' },
      { title: 'Cloud & Microsoft 365 review', text: 'Configuration review of cloud tenants, email security and identity settings.' },
      { title: 'Wi-Fi & physical checks', text: 'Testing of wireless networks and how easily someone could plug into your office network.' },
    ],
    deliverables: ['Executive summary in plain language', 'Technical findings with risk ratings', 'Step-by-step remediation guidance', 'Re-test of fixed critical issues'],
    faqs: [
      { q: 'Is penetration testing legal?', a: 'Yes, when it is authorised. We only test systems you own or are permitted to test, under a signed scope and rules of engagement.' },
      { q: 'Will testing disrupt our operations?', a: 'We plan tests to avoid disruption, agree timing with you in advance and schedule higher-risk activities outside working hours.' },
      { q: 'How often should we test?', a: 'At least once a year, and after major changes such as a new system, website or office network.' },
    ],
    metaDescription: 'Vulnerability assessments and authorised penetration testing of networks, applications and cloud services for organisations in Uganda.',
  },
  {
    slug: 'network-security',
    icon: 'firewall',
    title: 'Network security & firewalls',
    summary: 'Next-generation firewalls, secure remote access and protected networks for every office.',
    headline: 'Keep attackers out of your network',
    overview: [
      'Your network connects every computer, server and device in your organisation, which makes it the first thing attackers look for a way into.',
      'We design, supply, install and manage network security for offices of every size: next-generation firewalls, secure VPN access for remote staff and branches, network segmentation and protection against malware and denial-of-service attacks. We are vendor-neutral and recommend the solution that fits your needs and budget.',
    ],
    includes: [
      { title: 'Next-generation firewalls', text: 'Hardware or virtual firewalls with intrusion prevention, web filtering and application control.' },
      { title: 'Secure remote access', text: 'Site-to-site and remote-user VPNs so branches and staff connect safely from anywhere.' },
      { title: 'Network segmentation', text: 'Separating guest Wi-Fi, staff, servers and payment systems so one breach cannot spread.' },
      { title: 'Threat protection', text: 'Defences against malware, ransomware, botnets and denial-of-service (DoS/DDoS) attacks.' },
    ],
    deliverables: ['Network security design', 'Firewall supply, installation and configuration', 'Documented rules and network diagrams', 'Ongoing monitoring and updates (optional)'],
    faqs: [
      { q: 'Is the firewall on our internet router enough?', a: 'Rarely. Basic router firewalls do not inspect traffic for threats, filter websites or give you visibility of what is happening on your network.' },
      { q: 'Which firewall brands do you work with?', a: 'We are vendor-neutral and work with leading enterprise and open-source firewall platforms, recommending what best fits your size, needs and budget.' },
      { q: 'Can you manage it for us after installation?', a: 'Yes. We can monitor, update and adjust your firewall under a managed security agreement.' },
    ],
    metaDescription: 'Next-generation firewalls, VPNs, network segmentation and DoS protection designed, installed and managed for businesses in Uganda.',
  },
  {
    slug: 'endpoint-protection',
    icon: 'laptop',
    title: 'Endpoint, server & email protection',
    summary: 'Protect every computer, server and inbox from malware, ransomware and phishing.',
    headline: 'Protect every device your team uses',
    overview: [
      'Laptops, desktops, servers and phones are where most attacks land, very often through a malicious email attachment or link.',
      'We deploy and centrally manage modern endpoint protection across all your devices, protect your file and email servers, and filter spam and phishing before it reaches your staff. Updates and scans are scheduled so they never slow your team down.',
    ],
    includes: [
      { title: 'Antivirus & EDR', text: 'Next-generation antivirus and endpoint detection and response on workstations and laptops.' },
      { title: 'Server protection', text: 'Security for file, application and email servers, compatible with current operating systems.' },
      { title: 'Email security & anti-spam', text: 'Filtering of spam, phishing and malicious attachments, plus email authentication (SPF, DKIM, DMARC).' },
      { title: 'Central management', text: 'One console to deploy, update and report on every device, remotely, without visiting each desk.' },
    ],
    deliverables: ['Protection on all endpoints and servers', 'Central management console', 'Patch and update schedule', 'Monthly protection report'],
    faqs: [
      { q: 'Is free antivirus good enough for a business?', a: 'Free tools lack central management, reporting and the advanced detection businesses need against ransomware and targeted attacks.' },
      { q: 'Can you protect staff working from home?', a: 'Yes. Cloud-managed endpoint protection keeps laptops protected and updated wherever they are.' },
      { q: 'Do you handle mobile phones?', a: 'Yes. We can include mobile device management and protection for company phones and tablets.' },
    ],
    metaDescription: 'Centrally managed antivirus, EDR, server protection and email security against ransomware and phishing for organisations in Uganda.',
  },
  {
    slug: 'digital-forensics',
    icon: 'fingerprint',
    title: 'Digital forensics',
    summary: 'Investigate incidents properly, and set up forensic labs with the right tools and training.',
    headline: 'Evidence you can rely on',
    overview: [
      'When fraud, data theft or a cyber attack happens, you need to know exactly what happened, and to preserve evidence so it stands up to scrutiny.',
      'We carry out digital forensic investigations on computers, phones and storage media, and we help institutions build their own forensic capability: from specifying a lab and sourcing hardware and software, to installation, licensing, training and ongoing support.',
    ],
    includes: [
      { title: 'Forensic investigations', text: 'Evidence acquisition and analysis from computers, mobile devices, storage and cloud accounts, with chain-of-custody records.' },
      { title: 'Forensic lab advisory', text: 'Technical specifications for a forensic lab or capability, matched to your mandate and caseload.' },
      { title: 'Supply, installation & licensing', text: 'Sourcing and on-site installation of forensic hardware and software, plus licence management and renewals.' },
      { title: 'Training & support', text: 'Hands-on training for investigators on forensic tools and methods, plus troubleshooting and upgrade support.' },
    ],
    deliverables: ['Forensic report with findings and timeline', 'Preserved evidence and chain-of-custody log', 'Lab specification and bill of materials', 'Trained in-house team'],
    faqs: [
      { q: 'Who uses digital forensics services?', a: 'Businesses investigating fraud or data leaks, legal teams, regulators, law enforcement and institutions building investigation units.' },
      { q: 'What should we do first after an incident?', a: 'Do not switch off, wipe or reinstall affected devices. Isolate them from the network if you can, and contact us so evidence is preserved.' },
      { q: 'Can you help us set up our own forensic lab?', a: 'Yes. We advise on the right specification, source and install the tools, and train your team to use them.' },
    ],
    metaDescription: 'Digital forensic investigations and forensic lab advisory, supply, installation, licensing and training for organisations in Uganda and East Africa.',
  },
  {
    slug: 'backup-recovery',
    icon: 'cloud',
    title: 'Secure backup & disaster recovery',
    summary: 'Encrypted cloud and on-site backups that you can actually restore when it matters.',
    headline: 'Never lose your business data',
    overview: [
      'Ransomware, theft, fire, power surges and simple hardware failure can wipe out years of records in a moment. A tested backup is the difference between a bad day and a business-ending event.',
      'We set up encrypted, automated backups that combine on-site copies for fast recovery with off-site cloud copies for safety, and we test restores regularly so you know they work.',
    ],
    includes: [
      { title: 'Automated cloud backup', text: 'Encrypted, scheduled backups of servers, computers and Microsoft 365 or Google Workspace data.' },
      { title: 'Versioning & ransomware protection', text: 'Multiple restore points and immutable copies that ransomware cannot encrypt or delete.' },
      { title: 'Access control & audit logs', text: 'Permissions by user and group, with a full record of who accessed, changed or deleted files.' },
      { title: 'Disaster recovery planning', text: 'A documented, tested plan for getting critical systems running again quickly.' },
    ],
    deliverables: ['Backup design following the 3-2-1 rule', 'Automated, monitored backup jobs', 'Quarterly restore tests', 'Disaster recovery plan'],
    faqs: [
      { q: 'We copy files to an external drive. Is that enough?', a: 'It helps, but drives fail, get stolen or are encrypted by ransomware when connected. You need automated, off-site and immutable copies too.' },
      { q: 'Where is our data stored?', a: 'We agree storage locations with you, including options that keep copies in Uganda, and encrypt data in transit and at rest.' },
      { q: 'How quickly can we recover?', a: 'That depends on the plan we agree. We set recovery targets with you for each critical system and test against them.' },
    ],
    metaDescription: 'Encrypted cloud and on-site backup, ransomware-resistant versioning and tested disaster recovery for businesses in Uganda.',
  },
  {
    slug: 'incident-response',
    icon: 'siren',
    title: 'Incident response',
    summary: 'Fast, calm help to contain an attack, recover systems and stop it happening again.',
    headline: 'When something goes wrong, we help you respond',
    overview: [
      'A ransomware infection, a hacked email account or a suspicious transfer request needs a fast, structured response. Panic and guesswork make the damage worse.',
      'We help you contain the incident, investigate the cause, recover systems from clean backups and close the gaps that let it happen. We can also prepare a response plan in advance so your team knows exactly what to do.',
    ],
    includes: [
      { title: 'Containment', text: 'Isolating affected systems and accounts to stop an attack from spreading.' },
      { title: 'Investigation', text: 'Finding the entry point and scope of the incident using forensic methods.' },
      { title: 'Recovery', text: 'Restoring systems and data safely, and confirming the attacker no longer has access.' },
      { title: 'Preparation', text: 'Incident response plans, playbooks and tabletop exercises before anything happens.' },
    ],
    deliverables: ['Incident timeline and root-cause report', 'Recovered, hardened systems', 'Incident response plan and playbooks', 'Lessons-learned briefing'],
    faqs: [
      { q: 'Should we pay a ransomware demand?', a: 'We advise strongly against it where possible: payment does not guarantee recovery and encourages further attacks. Seek advice before making any decision.' },
      { q: 'Do we need to report a breach?', a: 'Under the Data Protection and Privacy Act, 2019, incidents affecting personal data may need to be reported. We help you understand your obligations; confirm with your legal adviser.' },
      { q: 'Can we arrange support in advance?', a: 'Yes. A retainer gives you agreed response times and a team that already knows your systems.' },
    ],
    metaDescription: 'Cyber incident response in Uganda: containment, investigation, recovery and incident response planning for ransomware, email compromise and fraud.',
  },
  {
    slug: 'managed-security',
    icon: 'monitor',
    title: 'Managed security & IT support',
    summary: 'Ongoing monitoring, maintenance and support so your systems stay secure every day.',
    headline: 'Security is not a one-off project',
    overview: [
      'Systems drift out of date, new threats appear and staff come and go. Without ongoing care, even a well-secured environment becomes vulnerable.',
      'Our managed service keeps your security working: we monitor alerts, apply updates, maintain your network and equipment, and give you a clear monthly report. Contracted clients can reach us for urgent issues around the clock.',
    ],
    includes: [
      { title: 'Monitoring & alerting', text: 'Watching firewall, endpoint and backup alerts and acting on what matters.' },
      { title: 'Patch & update management', text: 'Keeping operating systems, software and devices up to date on a schedule.' },
      { title: 'Preventive maintenance', text: 'Scheduled health checks of computers, servers and network equipment, with a written report and recommendations.' },
      { title: 'Help desk & network support', text: 'Support for users, enterprise software, and LAN and WAN connectivity.' },
    ],
    deliverables: ['Monthly security and health report', 'Asset register of equipment', 'Agreed response times', 'Priority and out-of-hours support for contracted clients'],
    faqs: [
      { q: 'Do we still need our own IT staff?', a: 'We can act as your full IT and security team, or support your existing staff with specialist skills and extra capacity.' },
      { q: 'What does a maintenance report include?', a: 'Each asset checked, its condition, any faults found and recommendations for repair, upgrade or replacement.' },
      { q: 'How is pricing structured?', a: 'Usually a fixed monthly fee based on the number of users, devices and the level of support you need.' },
    ],
    metaDescription: 'Managed security, monitoring, patching, preventive maintenance and IT help desk support for businesses in Kampala and across Uganda.',
  },
  {
    slug: 'awareness-compliance',
    icon: 'users',
    title: 'Awareness training & compliance',
    summary: 'Turn your staff into a line of defence and get ready for the Data Protection and Privacy Act.',
    headline: 'Your people are your first line of defence',
    overview: [
      'Most successful attacks begin with a person: a clicked link, a reused password or a convincing call asking for a mobile money transfer.',
      'We train staff to recognise and report threats, run safe phishing simulations to measure progress, and help leadership put the policies and records in place that the Data Protection and Privacy Act, 2019 expects.',
    ],
    includes: [
      { title: 'Security awareness training', text: 'Practical, local sessions on phishing, fraud, passwords, devices and safe use of mobile money.' },
      { title: 'Phishing simulations', text: 'Safe, realistic test emails that show who needs more support, with no blame.' },
      { title: 'Policies & procedures', text: 'Acceptable use, access control, backup, incident response and data protection policies.' },
      { title: 'DPPA readiness', text: 'Data mapping, privacy notices, retention rules and support for registration with the Personal Data Protection Office.' },
    ],
    deliverables: ['Training sessions and materials', 'Phishing simulation results', 'Policy pack tailored to you', 'Data protection readiness report'],
    faqs: [
      { q: 'How long does training take?', a: 'A core session takes about two hours, followed by short refreshers and simulations through the year.' },
      { q: 'Does the Data Protection and Privacy Act apply to us?', a: 'If you collect or process personal data about people in Uganda, it very likely does. We help you understand what applies; confirm details with the PDPO or a legal adviser.' },
      { q: 'Can training be delivered on site?', a: 'Yes, on site in Kampala and beyond, or online for distributed teams.' },
    ],
    metaDescription: 'Cybersecurity awareness training, phishing simulations, security policies and Data Protection and Privacy Act readiness for organisations in Uganda.',
  },
  {
    slug: 'secure-development-testing',
    icon: 'testTube',
    title: 'Secure development & software testing',
    summary: 'Code review, security testing and quality assurance for the software you build or buy.',
    headline: 'Software that is secure and works as promised',
    overview: [
      'Bugs and security flaws are far cheaper to fix before software goes live. Many organisations also buy systems without ever checking how secure or reliable they are.',
      'We review code against recognised security standards and test applications thoroughly, covering functionality, performance under load and usability, whether we built the software or a third party did.',
    ],
    includes: [
      { title: 'Secure code review', text: 'Manual and automated review against OWASP Top 10 and other common vulnerability classes.' },
      { title: 'Validation & conformance testing', text: 'Checking the software rejects bad input and meets your requirements and standards.' },
      { title: 'Load & stress testing', text: 'Measuring how the system behaves under heavy use, before your customers find out.' },
      { title: 'Usability & data quality', text: 'Real-user testing of key journeys, and checks that the data the system captures stays accurate.' },
    ],
    deliverables: ['Security and quality test report', 'Prioritised list of defects', 'Retest after fixes', 'Recommendations for your development process'],
    faqs: [
      { q: 'Can you test software built by another company?', a: 'Yes. Independent testing is especially valuable before you accept and pay for a system from a supplier.' },
      { q: 'Do you need our source code?', a: 'Code review needs access to the code; other testing can be done on a running test environment.' },
      { q: 'When should testing happen?', a: 'Ideally throughout development, and always before go-live and after major changes.' },
    ],
    metaDescription: 'Secure code review, application security testing, load testing and software quality assurance for organisations in Uganda.',
  },
];

export const getSecurityService = (slug: string) => securityServices.find((s) => s.slug === slug);

/** Our approach, aligned with the NIST Cybersecurity Framework functions. */
export const securityFramework = [
  { step: 'Identify', text: 'Understand your systems, data and risks.' },
  { step: 'Protect', text: 'Put the right controls and training in place.' },
  { step: 'Detect', text: 'Spot suspicious activity early.' },
  { step: 'Respond', text: 'Contain incidents quickly and calmly.' },
  { step: 'Recover', text: 'Restore operations and learn from it.' },
];
