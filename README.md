# 🎉 Soc Ops — Social Bingo

> **Turn any mixer, team event, or party into an unforgettable icebreaker.**

Soc Ops is a web-based **Social Bingo** game built for real-life social events. Each player gets a unique 5×5 bingo card filled with prompts like *"has lived in another country"* or *"can juggle"*. Walk the room, find people who match, and race to get **5 in a row**!

---

## ✨ Features

- 🃏 **Unique boards** — questions are shuffled so every player gets a different card
- 🎯 **FREE SPACE** — center square is always pre-marked to get you started
- 🏆 **Win detection** — rows, columns, and diagonals all count
- 💾 **Auto-save** — your progress is preserved if you refresh or close the tab
- 📱 **Mobile-first** — designed for phones so you can play on the go
- ⚡ **Instant deploy** — ships to GitHub Pages automatically on every push to `main`

---

## 🎮 How to Play

1. Hit **Start Game** to get your unique bingo card
2. Mingle! Find people in the room who match each square's prompt
3. Tap the square when you find a match to mark it off
4. Get **5 in a row** — horizontal, vertical, or diagonal — to win! 🎉

---

## 🚀 Quick Start

**Prerequisites:** [Node.js 22+](https://nodejs.org/)

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🛠️ Development

```bash
npm run dev      # Start local dev server (hot-reload)
npm run build    # Type-check + production build
npm run lint     # Run ESLint
npm run test     # Run Vitest test suite
```

Commits to `main` trigger an automatic deploy to **GitHub Pages** via GitHub Actions.

---

## 🎨 Customization

Want to tailor the game for your event? Edit the prompts in [`src/data/questions.ts`](src/data/questions.ts):

```ts
export const questions: string[] = [
  "bikes to work",
  "has lived in another country",
  // Add your own prompts here!
];
```

---

## 🧰 Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Styling | Tailwind CSS v4 |
| Build | Vite |
| Testing | Vitest |
| Deploy | GitHub Pages |

---

## 🤝 Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) and our [Code of Conduct](CODE_OF_CONDUCT.md) before opening a pull request.

## 📄 License

[MIT](LICENSE)
