# Little Wonder — RGV Kids Playground

Twenty modular learning games, designed for children and parents to play together. Local only: no AWS, accounts, ads, analytics, payments, or application database. JavaScript, HTML, CSS, and Node.js; no third-party packages or build step.

## Start on Windows

1. Extract the ZIP completely. Keep this folder separate from your CloudPoker folder.
2. Open Command Prompt in this folder (the one containing package.json).
3. Run `npm start`.
4. Open http://localhost:3001 in your browser.

You already have Node.js installed. You do **not** need `npm install`, Docker, Terraform, Kubernetes, or AWS. Alternatively double-click START-GAMES.bat, then open the printed address. Keep the command window open; Ctrl+C stops the server. Double-clicking public/index.html is **not** supported in this modular edition because the menu loads games.json over HTTP.

The server listens on 127.0.0.1, so only this computer can access it. Other devices cannot connect. The games work without internet once downloaded. Sound is optional; some browser voices may require internet. Emoji appearance varies between computers. No progress or personal information is saved.

## Twenty games

- Numbers: Count the Animals, Number Match, Missing Number, Simple Addition.
- Letters: Alphabet Match, Find the Letter, Beginning Sounds, Complete the Word.
- Colors and shapes: Color Match, Shape Match, Color Sorting, Shape Patterns.
- Thinking: Animal Pairs, Find the Odd One, What Comes Next?, Picture Puzzle.
- Everyday learning: Animal Sounds, Fruit Match, Bigger or Smaller?, Follow the Sequence.

Quiz games run for five questions. Memory, the picture puzzle, and sequence games each run until completed. Children can retry without losing points. There is no timer. Spoken questions read text using browser speech synthesis, not recordings of real animal sounds. Beginning Sounds uses first-letter prompts; a parent can model the actual sounds. Visual examples help children who are learning to read.

Little explorers uses smaller numbers, shorter patterns, and three memory pairs. Bigger explorers uses larger numbers, longer patterns, fewer hints in some games, and six pairs. Some games use the same rules at both levels. Levels are flexible play settings, not assessments of reading age.

## Add your own game

```cmd
npm run add-game -- animal-homes "Animal Homes" "Everyday learning"
```

This adds a working example game and updates the menu automatically. It does not generate custom Animal Homes rules: edit `public/games/animal-homes/game.js` to replace the example. Refresh the browser to see it. Read [docs/ADDING-GAMES.md](docs/ADDING-GAMES.md) for the full guide.

## GitHub repository

Target: https://github.com/nenivenkata/rgv-kids-playground.git

For the first upload, from this folder:

```cmd
git init -b main
git add .
git commit -m "Add 20 modular kids learning games"
git remote add origin https://github.com/nenivenkata/rgv-kids-playground.git
git push -u origin main
```

Git may open browser sign-in. Use your GitHub account; do not put passwords or tokens in source files. If Git reports that the remote has existing commits, stop and inspect before continuing; do not force-push.

For future changes:

```cmd
npm test
git add .
git commit -m "Add Animal Homes game"
git push
```

On another computer with Node.js and Git installed:

```cmd
git clone https://github.com/nenivenkata/rgv-kids-playground.git
cd rgv-kids-playground
npm start
```

Open http://localhost:3001. GitHub Actions runs `npm test` on pushes and pull requests. This workflow does not deploy anything or create cloud resources. GitHub Actions usage is subject to your account's included allowance and settings; local play uses no hosting service. Read [docs/PROJECT-PLAN.md](docs/PROJECT-PLAN.md) for the structure and next steps.

## Checks

```cmd
npm test
```

Tests cover every registered game's question contract, correct-choice uniqueness, memory pair integrity, puzzle assets, template creation, JavaScript parsing, and the local HTTP server. Browser visual QA must also be done on your Windows browser; run each game, try a wrong answer, restart, complete it, and return home.
