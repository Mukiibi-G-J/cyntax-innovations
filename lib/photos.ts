/**
 * Site photography. All images are free to use under the Unsplash License
 * (https://unsplash.com/license) and are served from Unsplash's CDN via next/image.
 *
 * These are stock scenes, not Cyntax staff or clients: alt text describes the scene only.
 * Replace them with your own photography over time by swapping `src` for a local file in /public.
 */
export interface Photo {
  src: string;
  alt: string;
}

const u = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1920&q=75`;

export const photos = {
  devTeam: { src: u('1531482615713-2afd69097998'), alt: 'Two software developers working together at a computer screen' },
  developer: { src: u('1604145559206-e3bce0040e2d'), alt: 'Developer wearing headphones writing code at a desk' },
  padlock: { src: u('1614064641938-3bbee52942c7'), alt: 'Padlock resting on a backlit computer keyboard' },
  circuit: { src: u('1550751827-4bd374c3f58b'), alt: 'Glowing circuit board pattern on a dark screen' },
  shopCounter: { src: u('1687422808311-a776f467a468'), alt: 'Shopkeeper smiling at the counter of a well-stocked retail shop' },
  shopkeeperPhone: { src: u('1687422808248-f807f4ea2a2e'), alt: 'Shopkeeper in an apron checking his phone' },
  marketPhone: { src: u('1687422809654-579d81c29d32'), alt: 'Woman at a market stall smiling while using her phone' },
  doctorPhone: { src: u('1576091160399-112ba8d25d1d'), alt: 'Doctor with a stethoscope using a smartphone' },
  boardroom: { src: u('1653566031535-bcf33e1c2893'), alt: 'Business team in a meeting around a table with laptops' },
  officeTeam: { src: u('1573164574511-73c773193279'), alt: 'Team working together around a table in a bright office' },
  workshop: { src: u('1739298061707-cefee19941b7'), alt: 'Group discussing plans around a white meeting table' },
  networkCables: { src: u('1558494949-ef010cbdcc31'), alt: 'Network cables connected to a server rack' },
  serverCorridor: { src: u('1573164713988-8665fc963095'), alt: 'Engineer walking through a server room with a laptop' },
  code: { src: u('1555949963-ff9fe0c870eb'), alt: 'Close-up of code on a computer screen' },
  kampalaSunset: { src: u('1763220207281-c4d0febb61a8'), alt: 'Kampala city skyline at sunset, seen from Nsambya' },
  kampalaSkyline: { src: u('1777887544354-74a7248c8a74'), alt: 'Kampala skyline with modern buildings among trees' },
  analystScreens: { src: u('1510915228340-29c85a43dcfe'), alt: 'Security analyst reviewing code on several monitors in a dark room' },
  fiberSwitch: { src: u('1594915440248-1e419eba6611'), alt: 'Fibre optic cables connected to a network switch in a server rack' },
  laptopLock: { src: u('1614064548237-096f735f344f'), alt: 'Padlock on a laptop keyboard surrounded by light trails' },
  hardDrive: { src: u('1601737487795-dab272f52420'), alt: 'Open hard disk drive showing its platter and read arm' },
  dataCenter: { src: u('1639066648921-82d4500abf1a'), alt: 'Rows of server cabinets in a dimly lit data centre' },
  responder: { src: u('1620825937374-87fc7d6bddc2'), alt: 'Engineer working at a computer with green-lit screens' },
  patchPanel: { src: u('1544197150-b99a580bb7a8'), alt: 'Network cables plugged into a patch panel' },
  phoneLock: { src: u('1584433144859-1fc3ab64a957'), alt: 'Smartphone showing a security lock icon on a desk' },
  codeScreen: { src: u('1607799279861-4dd421887fb3'), alt: 'Laptop screen displaying colourful source code' },
  openPadlock: { src: u('1618060932014-4deda4932554'), alt: 'Open padlock surrounded by scattered keyboard keys' },
  kampalaCity: { src: u('1675756261486-09bd1e0f6c8a'), alt: 'View over central Kampala on a sunny day' },
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof photos;

export const servicePhoto: Record<string, PhotoKey> = {
  'custom-software': 'developer',
  cybersecurity: 'padlock',
  erp: 'officeTeam',
  integrations: 'networkCables',
  strategy: 'workshop',
  automation: 'serverCorridor',
};

export const productPhoto: Record<string, PhotoKey> = {
  zentroapp: 'shopCounter',
  saccolla: 'marketPhone',
  medilink: 'doctorPhone',
};

export const postPhoto: Record<string, PhotoKey> = {
  'cybersecurity-basics-for-ugandan-smes': 'circuit',
  'efris-explained-for-ugandan-businesses': 'shopkeeperPhone',
  'spreadsheets-to-erp-signs-its-time': 'boardroom',
};

export const securityPhoto: Record<string, PhotoKey> = {
  'security-assessments': 'analystScreens',
  'network-security': 'fiberSwitch',
  'endpoint-protection': 'laptopLock',
  'digital-forensics': 'hardDrive',
  'backup-recovery': 'dataCenter',
  'incident-response': 'responder',
  'managed-security': 'patchPanel',
  'awareness-compliance': 'workshop',
  'secure-development-testing': 'codeScreen',
};
