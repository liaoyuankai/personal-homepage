import { render, screen } from '@testing-library/react';
import UniverseSection from './UniverseSection';

const roleCards = [{ name: '角色', faction: '好人阵营', quote: '一句话。' }];

it('opens playlist links in a new tab and skips empty ones', () => {
  render(
    <UniverseSection
      blurb="深夜歌单。"
      playlistLinks={[
        { label: '网易云歌单', href: 'https://music.163.com' },
        { label: 'Spotify', href: '' },
      ]}
      roleCards={roleCards}
    />,
  );

  const link = screen.getByRole('link', { name: /网易云歌单/ });
  expect(link).toHaveAttribute('target', '_blank');
  expect(link).toHaveAttribute('rel', 'noreferrer');
  expect(screen.queryByRole('link', { name: /Spotify/ })).not.toBeInTheDocument();
});

it('renders a role card with its faction and quote', () => {
  render(<UniverseSection blurb="深夜歌单。" playlistLinks={[]} roleCards={roleCards} />);
  expect(screen.getByText('好人阵营')).toBeInTheDocument();
  expect(screen.getByText(/一句话。/)).toBeInTheDocument();
});
