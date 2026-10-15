// This file owns the game rules. Shared UI lives in public/shared/app.js.
window.KidsGames['fruit-match']={create(c,level){const big=level==='big';const a=c.pick(c.fruit);return c.quiz('Find the '+a.name+'.',big?[]:[c.text(a.icon,a.name)],a.name,c.choices(a.name,c.fruit.map(x=>x.name)).map(name=>({id:name,...c.text(c.fruit.find(x=>x.name===name).icon,name)})));}};
