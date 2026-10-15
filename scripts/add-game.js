const fs=require('node:fs'),path=require('node:path');
const [id,title,category='My games']=process.argv.slice(2);
if(!id||!title||!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id)){console.error('Usage: npm run add-game -- game-id "Game Title" "Category"\nUse lowercase letters, numbers, and single hyphens for the ID.');process.exit(1);}
const root=path.resolve(__dirname,'..'),registry=path.join(root,'public','games.json'),list=JSON.parse(fs.readFileSync(registry,'utf8')),folder=path.join(root,'public','games',id);
if(list.some(g=>g.id===id)||fs.existsSync(folder)){console.error('That game already exists. Choose a different ID.');process.exit(1);}
const template=fs.readFileSync(path.join(root,'templates','game','game.js'),'utf8').replaceAll('__GAME_ID__',id);
fs.mkdirSync(folder);fs.writeFileSync(path.join(folder,'game.js'),template);
list.push({id,title,category,icon:'🌟',description:'A new adventure to discover.'});
fs.writeFileSync(registry,JSON.stringify(list,null,2)+'\n');
console.log('Created public/games/'+id+'/game.js and added it to the menu.\nEdit that file to create your game, then refresh the browser.');
