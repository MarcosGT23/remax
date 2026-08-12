import fs from 'node:fs';
import path from 'node:path';

const adapterPath = path.resolve('node_modules/@astrojs/vercel/dist/serverless/adapter.js');

if (fs.existsSync(adapterPath)) {
  let content = fs.readFileSync(adapterPath, 'utf8');
  if (content.includes('nodejs18.x')) {
    content = content.replaceAll('nodejs18.x', 'nodejs20.x');
    fs.writeFileSync(adapterPath, content, 'utf8');
    console.log('[patch-vercel-adapter] Successfully updated Vercel runtime from nodejs18.x to nodejs20.x');
  }
}
