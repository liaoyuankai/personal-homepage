import type { ContactLink } from '../data/profile';

export default function ContactSection({
  headline,
  links,
}: {
  headline: string;
  links: ContactLink[];
}) {
  const usableLinks = links.filter((link) => link.href.trim() !== '');

  return (
    <footer id="contact">
      <p className="eyebrow">04 / SAY HI</p>
      <h2>{headline}</h2>
      <div className="tags">
        {usableLinks.map((link) => (
          <a className="button" key={link.href} href={link.href}>
            {link.label} ↗
          </a>
        ))}
      </div>
    </footer>
  );
}
