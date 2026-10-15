// This file owns the game rules. Shared UI lives in public/shared/app.js.
window.KidsGames['find-letter']={create(c,level){const big=level==='big';const pool=(big?'ABCDEFGHIJKLMNOPQRSTUVWXYZ':'ABCDEF').split(''),a=c.pick(pool);return c.quiz('Can you find the letter '+a+'?',[c.text(a)],a,c.choices(a,pool));}};
