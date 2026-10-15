# Project plan

## Included now

Twenty playable games, a searchable category menu, two play levels, optional spoken instructions, responsive buttons, shared rewards, separate game folders, an add-game command, a local server, tests, and GitHub Actions checks.

## Structure

| Path | Responsibility |
| --- | --- |
| public/index.html | Shared menu and game screen |
| public/games.json | Game catalogue; controls menu discovery |
| public/games/<id>/game.js | Rules for one game |
| public/games/<id>/ | Assets for that game |
| public/shared/core.js | Reusable content and question helpers |
| public/shared/app.js | Shared game modes and navigation |
| public/shared/style.css | Shared responsive design |
| templates/game/ | Starting point for a new game |
| scripts/add-game.js | Adds a game folder and catalogue entry |
| tests/ | Automated checks |
| .github/workflows/ci.yml | Runs tests in GitHub Actions |
| server.js | Loopback HTTP server |

## Suggested next steps

1. Run the existing games with your child and note the favorites and difficult parts.
2. Add content to those games before adding more interaction types.
3. Add a new game using the template and commit it separately.
4. If wanted later, add browser-local favorites or progress with a parent reset control.
5. Consider containers or local Kubernetes as a separate DevOps exercise after the games work. These are not required to play.

No internet hosting, cloud deployment, multiplayer, parent accounts, saved child profiles, or recorded audio library is included. Do not reuse the previous poker project's cloud deployment workflows for this project.
