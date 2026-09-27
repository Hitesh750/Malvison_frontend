const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Backgrounds
  content = content.replace(/bg-\[\#F9F9F9\]/g, 'bg-background');
  content = content.replace(/bg-\[\#111111\]/g, 'bg-primary-deep');
  
  // Text Colors
  content = content.replace(/text-\[\#111111\]/g, 'text-primary');
  content = content.replace(/text-slate-400/g, 'text-secondary/70');
  content = content.replace(/text-slate-500/g, 'text-secondary');
  content = content.replace(/text-slate-600/g, 'text-secondary/90');
  content = content.replace(/text-slate-300/g, 'text-white/60');
  
  // Borders
  content = content.replace(/border-slate-200/g, 'border-border');
  content = content.replace(/border-slate-300/g, 'border-border/80');
  content = content.replace(/border-slate-800/g, 'border-white/10');
  content = content.replace(/border-slate-900/g, 'border-white/5');
  
  // Backgrounds (Hover/Cards)
  content = content.replace(/bg-slate-100/g, 'bg-white/50');
  content = content.replace(/bg-slate-50/g, 'bg-white/30');
  content = content.replace(/bg-slate-200/g, 'bg-border');
  content = content.replace(/hover:bg-slate-200/g, 'hover:bg-white/90');
  content = content.replace(/hover:bg-slate-500/g, 'hover:text-accent');
  content = content.replace(/hover:text-slate-500/g, 'hover:text-accent');
  
  fs.writeFileSync(filePath, content, 'utf8');
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      replaceInFile(fullPath);
    }
  }
}

walkDir(path.join(__dirname, 'src', 'components'));
console.log("Colors replaced successfully!");
