# Fun Bonk

Fun Bonk is a colorful single-page endless runner built as a self-contained browser game. You jump over goofy obstacles, survive as long as possible, and chase a higher score while the world speeds up around you.

The game lives in a single `index.html` file and includes:

- Increasing game speed over time
- Local high score tracking with `localStorage`
- Double-tap `Space` for a boosted jump
- Funny synthesized sound effects for jumping, scoring, and crashing
- Parallax cartoon backgrounds
- A looping day/night cycle
- Mobile-friendly touch controls with a large on-screen jump button

## Tech Stack

- Vite for local development and builds
- Plain HTML, CSS, and JavaScript
- No runtime dependencies

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## How To Play

- `Space`, `Arrow Up`, or `W`: jump
- Double-tap `Space`: higher jump boost
- Mouse click or screen tap: jump
- Mobile `JUMP` button: jump on smaller screens

Avoid the obstacles for as long as you can. The longer you survive, the faster the game gets.

## Mobile Support

The game is designed to work on modern iPhone and Android browsers.

- Touch input is supported
- A large mobile jump control appears on smaller screens
- Accidental page scroll and pinch-zoom are disabled while playing
- Audio starts after a user interaction to match mobile browser rules

## Project Structure

```text
.
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

`vite.config.js` uses `base: './'`, which helps the built game work when opened from a relative path.

## Preview 

<img width="496" height="341" alt="image" src="https://github.com/user-attachments/assets/bd6c6fa4-fede-4d71-a222-9254e5ee6170" />



## Notes

Source Prompt:

```
Create a single-page app in a single HTML file with the following requirements:
- Name: <type_your_project_name>
- Goal: Jump over obstacles to survive as long as possible.
- Features: Increasing speed, high score tracking, retry button, and funny sounds for actions and events.
- The UI should be colorful, with parallax scrolling backgrounds.
- The characters should look cartoonish and be fun to watch.
- The game should be enjoyable for everyone.

```

- High scores are saved in the browser, so they are per device/browser.
- The game is intentionally self-contained, so most gameplay changes can be made directly in `index.html`.
