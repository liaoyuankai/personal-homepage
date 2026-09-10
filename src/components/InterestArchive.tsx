import { useState } from 'react';
import type { Interest } from '../data/profile';

export default function InterestArchive({ interests }: { interests: Interest[] }) {
  const [activeId, setActiveId] = useState(interests[0]?.id ?? '');
  const active = interests.find((interest) => interest.id === activeId) ?? interests[0];

  if (!active) return null;

  return (
    <section id="archive">
      <p className="eyebrow">01 / 我的档案</p>
      <h2>我不止一种打开方式。</h2>
      <div className="tags">
        {interests.map((interest) => (
          <button
            key={interest.id}
            type="button"
            aria-pressed={interest.id === active.id}
            onClick={() => setActiveId(interest.id)}
          >
            {interest.label}
          </button>
        ))}
      </div>
      <p className="description" aria-live="polite">
        {active.label}说明：{active.description}
      </p>
    </section>
  );
}
