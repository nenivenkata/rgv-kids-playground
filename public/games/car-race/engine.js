(function(root){
function create(level='little'){return {phase:'ready',lane:1,items:[],lives:3,stars:0,distance:0,finishDistance:6000,speed:level==='big'?190:140,wave:0,clock:0,grace:0,nextId:0};}
function steer(s,direction){if(s.phase==='running')s.lane=Math.max(0,Math.min(2,s.lane+direction));}
function step(s,dt,random=Math.random){if(s.phase!=='running')return;dt=Math.min(Math.max(dt,0),.05);s.grace=Math.max(0,s.grace-dt);s.distance+=s.speed*dt;s.clock+=dt;
if(s.clock>=1.35){s.clock-=1.35;const lane=Math.min(2,Math.floor(random()*3));s.items.push({id:s.nextId++,lane,y:-45,type:s.wave++%2===0?'star':'car',color:Math.floor(random()*3),handled:false});}
for(const item of s.items){item.y+=s.speed*dt;if(!item.handled&&item.lane===s.lane&&Math.abs(item.y-440)<43){item.handled=true;if(item.type==='star')s.stars++;else if(s.grace===0){s.lives--;s.grace=1.8;if(s.lives===0)s.phase='retry';}}}
s.items=s.items.filter(item=>item.y<610&&!item.handled);
if(s.phase==='running'&&s.distance>=s.finishDistance){s.distance=s.finishDistance;s.phase='finished';}
}
const api={create,steer,step};if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.StarRacer=api;
})(typeof window!=='undefined'?window:globalThis);
