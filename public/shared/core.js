(function(root){
const animals=[{name:'cat',icon:'🐱',sound:'meow'},{name:'dog',icon:'🐶',sound:'woof'},{name:'cow',icon:'🐮',sound:'moo'},{name:'duck',icon:'🦆',sound:'quack'},{name:'sheep',icon:'🐑',sound:'baa'},{name:'pig',icon:'🐷',sound:'oink'}];
const fruit=[{name:'apple',icon:'🍎'},{name:'banana',icon:'🍌'},{name:'grapes',icon:'🍇'},{name:'orange',icon:'🍊'},{name:'pear',icon:'🍐'},{name:'strawberry',icon:'🍓'}];
const colors=[{name:'red',color:'#cb4444'},{name:'blue',color:'#367bc4'},{name:'yellow',color:'#e3b622'},{name:'green',color:'#43854d'},{name:'purple',color:'#8655b1'},{name:'orange',color:'#d67b2e'}];
const shapes=[{name:'circle',icon:'●'},{name:'square',icon:'■'},{name:'triangle',icon:'▲'},{name:'star',icon:'★'},{name:'heart',icon:'♥'}];
const words=[{word:'CAT',icon:'🐱'},{word:'DOG',icon:'🐶'},{word:'SUN',icon:'☀️'},{word:'BUS',icon:'🚌'},{word:'HAT',icon:'🎩'},{word:'PIG',icon:'🐷'},{word:'FOX',icon:'🦊'},{word:'ANT',icon:'🐜'}];
function shuffle(a,r=Math.random){const c=[...a];for(let i=c.length-1;i>0;i--){let j=Math.floor(r()*(i+1));[c[i],c[j]]=[c[j],c[i]];}return c;}
function pick(a){return a[Math.floor(Math.random()*a.length)];}
function int(a,b){return a+Math.floor(Math.random()*(b-a+1));}
function choices(answer,pool){return shuffle([answer,...shuffle([...new Set(pool)].filter(x=>x!==answer)).slice(0,2)]);}
function numbers(answer,max){return choices(answer,Array.from({length:max+1},(_,i)=>i));}
function quiz(prompt,scene,answer,options,hint='Choose an answer. You can always try again.') {return {mode:'quiz',prompt,scene,answer,options,hint};}
function text(value,label){return {kind:'text',value:String(value),label:label||String(value)};}
function swatch(color){return {kind:'color',value:color.color,label:color.name};}
function memoryDeck(count){return shuffle(animals.slice(0,count).flatMap((a,pair)=>[{...a,pair},{...a,pair}])).map((c,id)=>({...c,id}));}
function isPair(deck,a,b){return a!==b&&deck[a].pair===deck[b].pair;}
const api={animals,fruit,colors,shapes,words,shuffle,pick,int,choices,numbers,quiz,text,swatch,memoryDeck,isPair};
if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.KidsCore=api;
})(typeof window!=='undefined'?window:globalThis);
