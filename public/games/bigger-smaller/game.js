// This file owns the game rules. Shared UI lives in public/shared/app.js.
window.KidsGames['bigger-smaller']={create(c,level){const big=level==='big';const sizes=c.shuffle([1,2]),want=c.pick(['bigger','smaller']),a=c.pick(c.animals);return c.quiz('Which animal is '+want+'?',[],want==='bigger'?2:1,sizes.map(n=>({id:n,kind:'size',value:a.icon,label:'Animal '+(sizes.indexOf(n)+1),size:n})));}};
