// This file owns the game rules. Shared UI lives in public/shared/app.js.
window.KidsGames['missing-number']={create(c,level){const big=level==='big';const n=c.int(1,big?8:3);return c.quiz('Which number is missing?',[c.text(n+' → ? → '+(n+2))],n+1,c.numbers(n+1,big?10:5));}};
