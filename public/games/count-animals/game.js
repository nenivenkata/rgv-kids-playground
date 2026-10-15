// This file owns the game rules. Shared UI lives in public/shared/app.js.
window.KidsGames['count-animals']={create(c,level){const big=level==='big';const n=c.int(1,big?10:5),a=c.pick(c.animals);return c.quiz('How many animals do you see?',Array.from({length:n},(_,i)=>c.text(a.icon,'Animal '+(i+1))),n,c.numbers(n,big?10:5));}};
