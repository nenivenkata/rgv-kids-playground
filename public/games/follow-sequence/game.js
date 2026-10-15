// This file owns the game rules. Shared UI lives in public/shared/app.js.
window.KidsGames['follow-sequence']={create(c,level){const big=level==='big';const symbols=c.shuffle(c.animals).slice(0,big?5:3);return {mode:'sequence',prompt:'Remember the animal parade!',hint:'Look at the order. When you are ready, hide it and repeat it.',symbols};}};
