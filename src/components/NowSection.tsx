import type { Activity } from '../data/profile';

export default function NowSection({ activities }: { activities: Activity[] }) {
  return (
    <section id="now">
      <p className="eyebrow">02 / 最近在活</p>
      <h2>最近的小宇宙</h2>
      <div className="cards">
        {activities.map((activity) => (
          <article data-testid="activity-card" key={`${activity.date}-${activity.title}`}>
            <small>
              {activity.date} · {activity.category}
            </small>
            <h3>{activity.title}</h3>
            <p>{activity.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
