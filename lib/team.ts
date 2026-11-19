export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  initials: string;
  /** Short bio for cards */
  bio: string;
  /** Longer profile for the team page */
  profile: string[];
  focus: string[];
  education?: string[];
  linkedin?: string;
}

// Only list real people, with their consent.
// TODO(Joseph): add your co-founder and team members here (name, role, short bio).
export const team: TeamMember[] = [
  {
    slug: 'joseph-mukiibi',
    name: 'Joseph Mukiibi',
    role: 'Co-Founder & CTO',
    initials: 'JM',
    bio: 'Software developer and ERP consultant who leads engineering and security at Cyntax, currently completing a Master’s in Cybersecurity.',
    profile: [
      'Joseph co-founded Cyntax Innovations to build software that fits how businesses in Uganda really work. As CTO he leads the engineering team, sets the technical direction and oversees delivery on every client project and product, including ZentroApp.',
      'He is a full-stack developer and Microsoft Dynamics 365 Business Central consultant, and is currently completing a Master’s degree in Cybersecurity. That training shapes how Cyntax works: every system is designed with security, privacy and resilience in mind from the very first line of code.',
    ],
    focus: ['Software engineering', 'Cybersecurity', 'ERP & Business Central', 'Systems architecture'],
    education: ['Master’s in Cybersecurity (in progress)'],
  },
];
