// This file owns the game rules. Shared UI lives in public/shared/app.js.
window.KidsGames['number-match']={create(c,level){const big=level==='big';const n=c.int(1,big?10:5);return c.quiz('Find the number '+n+'.',[c.text(n)],n,c.numbers(n,big?10:5));}};
