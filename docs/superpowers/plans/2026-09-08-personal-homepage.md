# Personal Homepage Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a mobile-first, single-page social personal homepage styled as a playful personal archive.

**Architecture:** Use a Vite React TypeScript application with all editable page content in one typed data module. Compose the page from small section components and use CSS media queries for the desktop magazine layout while keeping the phone layout single-column and touch-friendly.

**Tech Stack:** Vite, React, TypeScript, CSS, Vitest, React Testing Library, Playwright.

## Global Constraints

- The first impression is social and personal, not a conventional résumé.
- Keep the exact first-screen line: `A little chaotic. Very alive.`
- Include the identity line: `计算机研二 / 实习中 / 歌房麦霸 / 剧本杀玩家`.
- Use `#D8D7FF`, `#FF477E`, `#FFF9F0`, `#CAFF1B`, and `#171717` as the core palette.
- The initial release is a static single page with no login, database, publishing backend, comments, or job-search résumé section.
- Mobile is the primary viewport: one column, readable text, and interactive targets at least 44 by 44 CSS pixels.
- Links that are unavailable must not render as empty buttons.

---

## File Structure

- `package.json`: scripts and runtime/test dependencies.
- `src/main.tsx`: React entry point.
- `src/App.tsx`: page composition and document-level navigation.
- `src/data/profile.ts`: typed editable content for interests, updates, playlist and role cards.
- `src/components/Hero.tsx`: navigation and opening visual card.
- `src/components/InterestArchive.tsx`: keyboard-accessible interactive interest tags.
- `src/components/NowSection.tsx`: recent activity cards.
- `src/components/UniverseSection.tsx`: external playlist and role-card archive.
- `src/components/ContactSection.tsx`: only provided social contact links.
- `src/styles.css`: mobile-first tokens, layout, interactions and desktop breakpoint.
- `src/test/setup.ts`, `src/App.test.tsx`: component-level behavior coverage.
- `playwright.config.ts`, `e2e/homepage.spec.ts`: mobile and desktop browser acceptance coverage.

### Task 1: Scaffold the accessible application shell

**Files:**
- Create: `package.json`
- Create: `index.html`
- Create: `src/main.tsx`
- Create: `src/App.tsx`
- Create: `src/styles.css`
- Create: `src/test/setup.ts`
- Create: `src/App.test.tsx`

**Interfaces:**
- Produces: `App(): JSX.Element`, imported by `src/main.tsx`.
- Produces: CSS custom properties `--lavender`, `--pink`, `--cream`, `--lime`, `--ink` consumed by all later components.

- [ ] **Step 1: Write the failing shell test**

```tsx
import { render, screen } from '@testing-library/react';
import App from './App';

it('renders the opening identity and primary navigation', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /a little chaotic/i })).toBeInTheDocument();
  expect(screen.getByText('计算机研二 / 实习中 / 歌房麦霸 / 剧本杀玩家')).toBeInTheDocument();
  expect(screen.getByRole('navigation', { name: '主页导航' })).toBeInTheDocument();
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm run test -- --run src/App.test.tsx`

Expected: FAIL because the application files and test script do not exist.

- [ ] **Step 3: Add the Vite scripts and minimal application**

Create `package.json` with scripts `dev`, `build`, `test`, and `test:e2e`; install React, Vite, TypeScript, Vitest, Testing Library, Playwright and their required type packages. Implement `App` with a labelled `<nav>`, an `<h1>A little chaotic. Very alive.</h1>`, and the required identity sentence. In `src/styles.css`, declare:

```css
:root {
  --lavender: #d8d7ff;
  --pink: #ff477e;
  --cream: #fff9f0;
  --lime: #caff1b;
  --ink: #171717;
}
button, a { min-height: 44px; min-width: 44px; }
```

- [ ] **Step 4: Run unit tests and production build**

Run: `npm run test -- --run src/App.test.tsx && npm run build`

Expected: PASS and Vite emits a production `dist/` directory.

- [ ] **Step 5: Commit the shell**

```powershell
git add package.json index.html src/main.tsx src/App.tsx src/styles.css src/test/setup.ts src/App.test.tsx
git commit -m "feat: scaffold personal homepage shell"
```

### Task 2: Add typed social content and interactive archive sections

**Files:**
- Create: `src/data/profile.ts`
- Create: `src/components/Hero.tsx`
- Create: `src/components/InterestArchive.tsx`
- Create: `src/components/NowSection.tsx`
- Create: `src/components/UniverseSection.tsx`
- Modify: `src/App.tsx`
- Modify: `src/App.test.tsx`

**Interfaces:**
- Consumes: `App(): JSX.Element` and the CSS tokens from Task 1.
- Produces: `InterestArchive({ interests }: { interests: Interest[] }): JSX.Element`.
- Produces: `Interest` with `id`, `label`, and `description` fields; `Activity` with `date`, `category`, `title`, and `summary` fields.

- [ ] **Step 1: Write failing behavior tests**

```tsx
it('reveals an interest description when its archive tag is selected', async () => {
  const user = userEvent.setup();
  render(<App />);
  await user.click(screen.getByRole('button', { name: '唱歌' }));
  expect(screen.getByText('唱歌说明：')).toBeInTheDocument();
});

it('shows three or more recent activities', () => {
  render(<App />);
  expect(screen.getAllByTestId('activity-card').length).toBeGreaterThanOrEqual(3);
});
```

- [ ] **Step 2: Run the tests to verify they fail**

Run: `npm run test -- --run src/App.test.tsx`

Expected: FAIL because archive buttons and activity cards are absent.

- [ ] **Step 3: Implement data-driven sections**

In `src/data/profile.ts`, export five interests with IDs `singing`, `drinks`, `murder-mystery`, `hair`, and `coding`; each uses a first-person, one-to-two-sentence Chinese description. Export at least three activities and two role cards. Implement `InterestArchive` with native `<button aria-pressed>` controls and an `aria-live="polite"` description region beginning with `${label}说明：`. Implement recent activities using `<article data-testid="activity-card">`. Render playlist links only when `href` is a non-empty URL and always include `target="_blank" rel="noreferrer"`.

- [ ] **Step 4: Run unit tests and build**

Run: `npm run test -- --run src/App.test.tsx && npm run build`

Expected: PASS; all five interest controls are keyboard reachable and no blank external-link control renders.

- [ ] **Step 5: Commit the content sections**

```powershell
git add src/data/profile.ts src/components src/App.tsx src/App.test.tsx
git commit -m "feat: add interactive personal archive"
```

### Task 3: Polish mobile-first layout and validate both viewports

**Files:**
- Create: `src/components/ContactSection.tsx`
- Create: `playwright.config.ts`
- Create: `e2e/homepage.spec.ts`
- Modify: `src/App.tsx`
- Modify: `src/styles.css`
- Modify: `src/App.test.tsx`

**Interfaces:**
- Consumes: sections from Task 2 and the application shell from Task 1.
- Produces: `ContactSection({ links }: { links: ContactLink[] }): JSX.Element`, where `ContactLink` has `label` and `href`.
- Produces: browser tests for `375x812` and `1440x900` viewports.

- [ ] **Step 1: Write failing browser acceptance tests**

```ts
import { test, expect } from '@playwright/test';

test('mobile home keeps the hero and archive usable', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/');
  await expect(page.getByRole('heading', { name: /a little chaotic/i })).toBeVisible();
  await expect(page.getByRole('button', { name: '剧本杀' })).toBeVisible();
  await expect(page.getByRole('button', { name: '剧本杀' })).toHaveCSS('min-height', '44px');
});
```

- [ ] **Step 2: Run browser test to verify it fails**

Run: `npx playwright test e2e/homepage.spec.ts --project=chromium`

Expected: FAIL because Playwright configuration and the final responsive layout are absent.

- [ ] **Step 3: Implement mobile-first styling and contact section**

Set base layouts to one column with 16–20px horizontal page padding, a 16px minimum gap, and readable body text. Make the hero image/archive card stack below its copy under 768px. At `min-width: 768px`, switch the hero to two columns and allow the archive cards to stagger with CSS transforms. Respect `@media (prefers-reduced-motion: reduce)` by disabling transitions and animation. Render the exact contact line `想约我唱歌、喝一杯，或者聊点好玩的？来找我。` and map only non-empty user-provided links.

- [ ] **Step 4: Run all checks**

Run: `npm run test -- --run && npm run build && npx playwright test --project=chromium`

Expected: all unit tests, build, and both desktop/mobile browser tests pass.

- [ ] **Step 5: Commit final responsive homepage**

```powershell
git add src/components/ContactSection.tsx src/App.tsx src/styles.css src/App.test.tsx playwright.config.ts e2e/homepage.spec.ts
git commit -m "feat: polish responsive personal homepage"
```

## Plan Self-Review

- Spec coverage: Tasks 1–3 cover the social-first hero, five interactive interests, three-plus activity cards, playlist and role-card universe, optional contact links, color system, animation reduction and mobile-first responsive behavior.
- Scope check: job-search content, authentication, database, publishing and comment systems are intentionally excluded.
- Interface check: `Interest`, `Activity`, and `ContactLink` are defined in the typed content module before their consuming components; all referenced component names are produced by a prior or current task.
- Placeholder scan: no implementation step leaves requirements unspecified.
