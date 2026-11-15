// Local viewer for the JHU Materials Science Design System.
// Usage: node serve.js   (then open http://localhost:5178)
//
// The page loads its data with fetch(), which browsers block for pages opened as files,
// so it needs to be served. Off claude.ai the page loads assets from project/assets/;
// this server also answers the artifact-style /_blob/<id> links, resolved through
// project/design-system.json, in case anything still uses them.
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

  if (urlPath === '/') return sendFile(res, path.join(ROOT, 'index.html'));

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
