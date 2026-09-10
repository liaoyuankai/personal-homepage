import { render, screen } from '@testing-library/react';
import ContactSection from './ContactSection';

it('renders only contact links that have a destination', () => {
  render(
    <ContactSection
      headline="来找我。"
      links={[
        { label: '发封邮件', href: 'mailto:me@example.com' },
        { label: '微信', href: '' },
        { label: '空白', href: '   ' },
      ]}
    />,
  );

  expect(screen.getByRole('link', { name: /发封邮件/ })).toBeInTheDocument();
  expect(screen.queryByRole('link', { name: /微信/ })).not.toBeInTheDocument();
  expect(screen.queryByRole('link', { name: /空白/ })).not.toBeInTheDocument();
  expect(screen.getAllByRole('link')).toHaveLength(1);
});
