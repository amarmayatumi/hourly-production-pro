import { mkdir, copyFile } from 'node:fs/promises';
import { dirname } from 'node:path';

const files = [
  'index.html',
  'manifest.webmanifest',
  'sw.js',
  'icons/icon-192.png',
  'icons/icon-512.png'
];

for (const file of files) {
  const target = `www/${file}`;
  await mkdir(dirname(target), { recursive: true });
  await copyFile(file, target);
}
console.log('Web assets prepared in www/');
