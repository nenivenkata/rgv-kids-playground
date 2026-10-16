const http=require('node:http'),fs=require('node:fs'),path=require('node:path');
const root=path.join(__dirname,'public');
function handler(req,res){
 if(!['GET','HEAD'].includes(req.method)){res.writeHead(405,{'Allow':'GET, HEAD'});return res.end();}
 let name;try{name=decodeURIComponent(new URL(req.url,'http://localhost').pathname);}catch{res.writeHead(400);return res.end('Invalid address');}
 if(name.includes('\0')){res.writeHead(400);return res.end('Invalid address');}
 const file=path.resolve(root,'.'+(name==='/'?'/index.html':name));
 if(!file.startsWith(root+path.sep)){res.writeHead(403);return res.end('Forbidden');}
 fs.readFile(file,(err,data)=>{if(err){res.writeHead(404);return res.end('Not found');}
 const type={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json; charset=utf-8','.svg':'image/svg+xml'}[path.extname(file)]||'application/octet-stream';
 res.writeHead(200,{'Content-Type':type,'X-Content-Type-Options':'nosniff','Referrer-Policy':'no-referrer','Content-Security-Policy':"default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'self'; object-src 'none'; base-uri 'self'; frame-ancestors 'self'",'Cache-Control':'no-cache'});res.end(req.method==='HEAD'?undefined:data);
 });
}
if(require.main===module){const server=http.createServer(handler);server.on('error',e=>{console.error('Cannot start: '+e.message+'\nIf port 3001 is busy, close the other playground window.');process.exitCode=1;});server.listen(3001,'127.0.0.1',()=>console.log('RGV Kids Playground: http://localhost:3001\nOpen that address in your browser. Keep this window open. Ctrl+C stops the server.'));}
module.exports=handler;
