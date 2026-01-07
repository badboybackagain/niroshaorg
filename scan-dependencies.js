import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Node.js built-in modules (don't need to be installed)
const builtInModules = new Set([
  'fs', 'path', 'url', 'http', 'https', 'util', 'stream', 'events', 'buffer',
  'crypto', 'os', 'zlib', 'querystring', 'net', 'dns', 'child_process',
  'cluster', 'dgram', 'readline', 'repl', 'tls', 'tty', 'vm', 'worker_threads',
  'assert', 'console', 'module', 'process', 'punycode', 'string_decoder',
  'timers', 'v8', 'perf_hooks', 'async_hooks', 'inspector', 'trace_events'
]);

// Read package.json
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const dependencies = new Set([
  ...Object.keys(packageJson.dependencies || {}),
  ...Object.keys(packageJson.devDependencies || {})
]);

// Files/directories to ignore
const ignoreDirs = ['node_modules', '.next', 'dist', 'build', '.git', 'assets_2025-12-16_04_40_18', 'functions', 'server'];
const ignoreFiles = ['scan-dependencies.js'];

function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      const dirName = path.basename(filePath);
      if (!ignoreDirs.includes(dirName)) {
        getAllFiles(filePath, fileList);
      }
    } else if (/\.(js|jsx|ts|tsx|mjs)$/.test(file) && !ignoreFiles.includes(file)) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

function extractImports(content, filePath) {
  const imports = [];
  
  const importRegex = /import\s+(?:(?:\{[^}]*\}|\*\s+as\s+\w+|\w+)(?:\s*,\s*(?:\{[^}]*\}|\*\s+as\s+\w+|\w+))*\s+from\s+)?['"]([^'"]+)['"]/g;
  const requireRegex = /require\(['"]([^'"]+)['"]\)/g;
  const dynamicImportRegex = /import\(['"]([^'"]+)['"]\)/g;
  
  let match;
  while ((match = importRegex.exec(content)) !== null) {
    imports.push(match[1]);
  }
  while ((match = requireRegex.exec(content)) !== null) {
    imports.push(match[1]);
  }
  while ((match = dynamicImportRegex.exec(content)) !== null) {
    imports.push(match[1]);
  }
  
  return imports;
}

function resolveImport(importPath, fromFile) {
  // Skip non-JS imports
  if (/\.(css|scss|sass|less|json|svg|png|jpg|jpeg|webp|gif|ico|woff|woff2|ttf|eot)$/i.test(importPath) ||
      importPath.startsWith('data:') || importPath.startsWith('http://') || importPath.startsWith('https://')) {
    return null;
  }
  
  // Check if it's a built-in module
  const moduleName = importPath.split('/')[0];
  if (builtInModules.has(moduleName)) {
    return { type: 'builtin', name: moduleName };
  }
  
  // Check if it's an npm package
  if (!importPath.startsWith('.') && !importPath.startsWith('/') && !importPath.startsWith('@/')) {
    const packageName = moduleName.startsWith('@') 
      ? `${moduleName}/${importPath.split('/')[1]}`
      : moduleName;
    return { type: 'package', name: packageName };
  }
  
  // It's a local file
  const fromDir = path.dirname(fromFile);
  let resolvedPath;
  
  if (importPath.startsWith('@/')) {
    const aliasPath = importPath.replace('@/', '');
    const srcPath = path.join(__dirname, 'src', aliasPath);
    const rootPath = path.join(__dirname, aliasPath);
    
    const extensions = ['', '.js', '.jsx', '.ts', '.tsx', '.mjs'];
    for (const ext of extensions) {
      if (fs.existsSync(srcPath + ext)) {
        return { type: 'file', path: srcPath + ext, exists: true };
      }
      if (fs.existsSync(rootPath + ext)) {
        return { type: 'file', path: rootPath + ext, exists: true };
      }
    }
    
    if (fs.existsSync(srcPath) && fs.statSync(srcPath).isDirectory()) {
      for (const ext of extensions) {
        if (fs.existsSync(path.join(srcPath, 'index' + ext))) {
          return { type: 'file', path: path.join(srcPath, 'index' + ext), exists: true };
        }
      }
    }
    
    return { type: 'file', path: srcPath, exists: false };
  }
  
  resolvedPath = path.resolve(fromDir, importPath);
  const extensions = ['', '.js', '.jsx', '.ts', '.tsx', '.mjs'];
  
  for (const ext of extensions) {
    if (fs.existsSync(resolvedPath + ext)) {
      return { type: 'file', path: resolvedPath + ext, exists: true };
    }
  }
  
  if (fs.existsSync(resolvedPath) && fs.statSync(resolvedPath).isDirectory()) {
    for (const ext of extensions) {
      if (fs.existsSync(path.join(resolvedPath, 'index' + ext))) {
        return { type: 'file', path: path.join(resolvedPath, 'index' + ext), exists: true };
      }
    }
  }
  
  return { type: 'file', path: resolvedPath, exists: false };
}

const missingFiles = [];
const missingPackages = new Map();
const issues = [];

console.log('🔍 Scanning project for missing files and dependencies...\n');
console.log('📅 Scan Date:', new Date().toLocaleString(), '\n');

// Only scan app/ and src/ directories (main application code)
const appFiles = getAllFiles(path.join(__dirname, 'app'));
const srcFiles = getAllFiles(path.join(__dirname, 'src'));
const libFiles = getAllFiles(path.join(__dirname, 'lib'));
const allFiles = [...appFiles, ...srcFiles, ...libFiles];

console.log(`📁 Found ${allFiles.length} files to scan\n`);

allFiles.forEach(file => {
  try {
    const content = fs.readFileSync(file, 'utf8');
    const imports = extractImports(content, file);
    
    imports.forEach(importPath => {
      const resolved = resolveImport(importPath, file);
      
      if (!resolved) return; // Skip non-JS imports
      
      if (resolved.type === 'package') {
        if (!dependencies.has(resolved.name)) {
          if (!missingPackages.has(resolved.name)) {
            missingPackages.set(resolved.name, []);
          }
          missingPackages.get(resolved.name).push({
            file: path.relative(__dirname, file),
            importPath: importPath
          });
        }
      } else if (resolved.type === 'file' && !resolved.exists) {
        // Check if it's a Next.js special file that might not exist yet
        const fileName = path.basename(resolved.path);
        if (!fileName.startsWith('_') && !fileName.includes('layout') && !fileName.includes('loading')) {
          missingFiles.push({
            file: path.relative(__dirname, resolved.path),
            importedIn: path.relative(__dirname, file),
            importPath: importPath
          });
        }
      }
    });
  } catch (error) {
    issues.push({
      file: path.relative(__dirname, file),
      error: error.message
    });
  }
});

// Print results
console.log('='.repeat(80));
console.log('📊 SCAN RESULTS');
console.log('='.repeat(80));

if (missingPackages.size > 0) {
  console.log(`\n❌ MISSING NPM PACKAGES (${missingPackages.size}):\n`);
  missingPackages.forEach((locations, packageName) => {
    console.log(`  📦 ${packageName}`);
    locations.forEach(loc => {
      console.log(`    → ${loc.file}`);
      console.log(`      Import: ${loc.importPath}`);
    });
    console.log();
  });
  
  console.log('\n📦 To install missing packages, run:');
  console.log(`npm install ${Array.from(missingPackages.keys()).join(' ')}\n`);
} else {
  console.log('\n✅ All npm packages are installed\n');
}

if (missingFiles.length > 0) {
  console.log(`\n❌ MISSING FILES (${missingFiles.length}):\n`);
  const uniqueMissing = new Map();
  missingFiles.forEach(item => {
    if (!uniqueMissing.has(item.file)) {
      uniqueMissing.set(item.file, []);
    }
    uniqueMissing.get(item.file).push(item);
  });
  
  uniqueMissing.forEach((locations, file) => {
    console.log(`  📄 ${file}`);
    locations.forEach(loc => {
      console.log(`    → Imported in: ${loc.importedIn}`);
      console.log(`      Import path: ${loc.importPath}`);
    });
    console.log();
  });
} else {
  console.log('\n✅ All imported files exist\n');
}

if (issues.length > 0) {
  console.log(`\n⚠️  FILES WITH ERRORS (${issues.length}):\n`);
  issues.forEach(item => {
    console.log(`  File: ${item.file}`);
    console.log(`    Error: ${item.error}\n`);
  });
} else {
  console.log('\n✅ No file reading errors\n');
}

console.log('='.repeat(80));
console.log('📈 SUMMARY');
console.log('='.repeat(80));
console.log(`Total files scanned: ${allFiles.length}`);
console.log(`Missing packages: ${missingPackages.size}`);
console.log(`Missing files: ${missingFiles.length}`);
console.log(`Errors: ${issues.length}`);
console.log(`Status: ${missingPackages.size === 0 && missingFiles.length === 0 ? '✅ ALL CLEAR' : '⚠️  ISSUES FOUND'}`);
console.log('='.repeat(80));
console.log('\n✨ Scan complete!\n');

