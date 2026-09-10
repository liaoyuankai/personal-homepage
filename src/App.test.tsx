import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { interests } from './data/profile';

it('renders the opening identity and primary navigation', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /a little chaotic/i })).toBeInTheDocument();
  expect(screen.getByText('计算机研二 / 实习中 / 歌房麦霸 / 剧本杀玩家')).toBeInTheDocument();
  expect(screen.getByRole('navigation', { name: '主页导航' })).toBeInTheDocument();
});

it('exposes every interest as a pressable archive tag', () => {
  render(<App />);
  for (const interest of interests) {
    expect(screen.getByRole('button', { name: interest.label })).toBeInTheDocument();
  }
});

it('switches the visible interest archive description', async () => {
  const user = userEvent.setup();
  render(<App />);
  await user.click(screen.getByRole('button', { name: '剧本杀' }));
  expect(screen.getByText(/剧本杀说明：最爱把自己塞进陌生角色/)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: '剧本杀' })).toHaveAttribute('aria-pressed', 'true');
});

it('shows three or more recent activities', () => {
  render(<App />);
  expect(screen.getAllByTestId('activity-card').length).toBeGreaterThanOrEqual(3);
});

it('shows the murder-mystery role cards', () => {
  render(<App />);
  expect(screen.getAllByTestId('role-card').length).toBeGreaterThanOrEqual(2);
});
