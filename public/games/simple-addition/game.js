// This file owns the game rules. Shared UI lives in public/shared/app.js.
window.KidsGames['simple-addition']={create(c,level){const big=level==='big';const a=c.int(1,big?5:3),b=c.int(1,big?5:2);return c.quiz('How many altogether?',[c.text('🍎'.repeat(a)),c.text('+'),c.text('🍎'.repeat(b))],a+b,c.numbers(a+b,big?10:5),'Count the apples in both groups.');}};
