export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  initials: string;
}

export const team: TeamMember[] = [
  {
    name: 'Joseph Mukiibi',
    role: 'Founder & CEO',
    bio: 'Full-stack developer and ERP consultant. Leads technology strategy and client delivery across Uganda and beyond.',
    initials: 'JM',
  },
  {
    name: 'Team Member',
    role: 'Lead Developer',
    bio: 'Specialises in backend systems and API integrations.',
    initials: 'TM',
  },
  {
    name: 'Team Member',
    role: 'UX & Design',
    bio: 'Crafts interfaces that are both beautiful and functional.',
    initials: 'TM',
  },
];
