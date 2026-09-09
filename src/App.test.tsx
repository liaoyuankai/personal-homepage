import { render, screen } from '@testing-library/react';
import App from './App';

it('renders the opening identity and primary navigation', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /a little chaotic/i })).toBeInTheDocument();
  expect(screen.getByText('计算机研二 / 实习中 / 歌房麦霸 / 剧本杀玩家')).toBeInTheDocument();
  expect(screen.getByRole('navigation', { name: '主页导航' })).toBeInTheDocument();
});
