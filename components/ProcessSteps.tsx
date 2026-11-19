export const processSteps = [
  { step: '01', title: 'Discover', text: 'We learn how your business runs, where the friction and risks are, and what success looks like.' },
  { step: '02', title: 'Design', text: 'We map the solution, agree scope, timeline and cost, and show you before we build.' },
  { step: '03', title: 'Build & secure', text: 'We deliver in short stages, with security reviews built in, so you see progress early.' },
  { step: '04', title: 'Launch & support', text: 'We train your team, monitor the system and keep improving it after go-live.' },
];

export default function ProcessSteps() {
  return (
    <ol data-stagger="" className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {processSteps.map((p) => (
        <li key={p.step} className="border-t-2 border-navy pt-5">
          <span className="font-mono text-small text-steel">{p.step}</span>
          <h3 className="mt-2 text-h3 font-bold">{p.title}</h3>
          <p className="mt-2 text-steel">{p.text}</p>
        </li>
      ))}
    </ol>
  );
}
