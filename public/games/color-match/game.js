// This file owns the game rules. Shared UI lives in public/shared/app.js.
window.KidsGames['color-match']={create(c,level){const big=level==='big';const a=c.pick(c.colors);return c.quiz('Find '+a.name+'.',[c.swatch(a)],a.name,c.choices(a.name,c.colors.map(x=>x.name)).map(name=>({...c.swatch(c.colors.find(x=>x.name===name)),id:name})));}};
