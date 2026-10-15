const {test}=require('node:test'),assert=require('node:assert/strict'),http=require('node:http');
const handler=require('../server.js');
const originalFetch=globalThis.fetch;globalThis.fetch=(url,options={})=>originalFetch(url,{...options,signal:AbortSignal.timeout(3000)});
test('local server serves the menu and every game, and rejects unsafe requests',async t=>{const server=http.createServer(handler);await new Promise(r=>server.listen(0,'127.0.0.1',r));t.after(()=>new Promise(r=>server.close(r)));const base='http://127.0.0.1:'+server.address().port;
const page=await fetch(base);assert.equal(page.status,200);assert.match(await page.text(),/RGV Kids Playground/);assert.match(page.headers.get('content-security-policy'),/object-src 'none'/);
const catalogue=await (await fetch(base+'/games.json')).json();for(const g of catalogue)assert.equal((await fetch(base+'/games/'+g.id+'/game.js')).status,200);for(const asset of ['/shared/core.js','/shared/app.js','/shared/style.css','/games/picture-puzzle/picture.svg'])assert.equal((await fetch(base+asset)).status,200);
assert.equal((await fetch(base+'/missing.js')).status,404);assert.equal((await fetch(base+'/%2e%2e%2fpackage.json')).status,403);assert.equal((await fetch(base+'/%00')).status,400);assert.equal((await fetch(base+'/%zz')).status,400);assert.equal((await fetch(base,{method:'POST'})).status,405);const head=await fetch(base,{method:'HEAD'});assert.equal(head.status,200);assert.equal(await head.text(),'');
});
