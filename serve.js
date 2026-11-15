// Local viewer for the JHU Materials Science Design System.
// Usage: node serve.js   (then open http://localhost:5178)
//
// index.html is written as an artifact page body, so this server wraps it in a document.
// Asset links use the artifact form /_blob/<id>; the server resolves each id through
// project/design-system.json to the file in project/assets/<Group>/<name>.
const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const PORT = Number(process.env.PORT) || 5178;
const TYPES = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json',
  '.md': 'text/markdown; charset=utf-8', '.ts': 'text/plain', '.svg': 'image/svg+xml', '.png': 'image/png',
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.pdf': 'application/pdf'
};

function blobIndex() {
  const ds = JSON.parse(fs.readFileSync(path.join(ROOT, 'project', 'design-system.json'), 'utf8'));
  const map = {};
  for (const g of ds.groups) {
    const group = ds.assetGroups[g];
    for (const name of group.order) map[group.files[name].blob] = path.join(ROOT, 'project', 'assets', g, name);
  }
  return map;
}

function sendFile(res, file) {
  res.writeHead(200, { 'content-type': TYPES[path.extname(file).toLowerCase()] || 'application/octet-stream' });
  fs.createReadStream(file).pipe(res);
}

http.createServer((req, res) => {
  const urlPath = decodeURIComponent(req.url.split('?')[0].split('#')[0]);

  if (urlPath === '/' || urlPath === '/index.html') {
    const body = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
    res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
    return res.end('<!doctype html><html lang="en"><head><meta charset="utf-8">' +
      '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">' +
      '<style>:root{color-scheme:light}body{margin:0}img{max-width:100%}[hidden]{display:none!important}</style>' +
      '</head><body>' + body + '</body></html>');
  }

  const blob = /^\/_blob\/([0-9a-f]{32})$/.exec(urlPath);
  if (blob) {
    const file = blobIndex()[blob[1]];
    if (file && fs.existsSync(file)) return sendFile(res, file);
    res.writeHead(404); return res.end('Unknown asset id');
  }

  const file = path.normalize(path.join(ROOT, urlPath));
  if (!file.startsWith(ROOT + path.sep) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
    res.writeHead(404); return res.end('Not found');
  }
  sendFile(res, file);
}).listen(PORT, () => console.log('JHU MSE Design System: http://localhost:' + PORT));
