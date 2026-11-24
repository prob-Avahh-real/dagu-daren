const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const www = path.join(root, 'www');
const src = path.join(root, 'index.html');
const dest = path.join(www, 'index.html');

if (!fs.existsSync(src)) {
  console.error('❌ index.html not found');
  process.exit(1);
}

fs.mkdirSync(www, { recursive: true });
fs.copyFileSync(src, dest);
console.log('✅ Web assets ready → www/index.html');
