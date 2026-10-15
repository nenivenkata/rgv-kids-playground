// This file owns the game rules. Shared UI lives in public/shared/app.js.
window.KidsGames['shape-match']={create(c,level){const big=level==='big';const a=c.pick(c.shapes);return c.quiz('Find the '+a.name+'.',[c.text(a.icon,a.name)],a.name,c.choices(a.name,c.shapes.map(x=>x.name)).map(name=>({id:name,...c.text(c.shapes.find(x=>x.name===name).icon,name)})));}};
