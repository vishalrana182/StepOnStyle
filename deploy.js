import { execSync } from 'child_process';
import { readFileSync, readdirSync, statSync, copyFileSync, mkdirSync, existsSync, writeFileSync, rmSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { platform } from 'os';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuration
const DIST_DIR = join(__dirname, 'dist');
const BRANCH = 'gh-pages';
const REPO_URL = 'https://github.com/vishalrana182/StepOnStyle.git';

console.log('Starting deployment to GitHub Pages...');
console.log('Dist directory:', DIST_DIR);

// Function to copy directory recursively
function copyDir(src, dest) {
  if (!existsSync(dest)) {
    mkdirSync(dest, { recursive: true });
  }
  
  const entries = readdirSync(src, { withFileTypes: true });
  
  for (const entry of entries) {
    const srcPath = join(src, entry.name);
    const destPath = join(dest, entry.name);
    
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      copyFileSync(srcPath, destPath);
    }
  }
}

// Function to remove directory recursively (cross-platform)
function removeDir(dir) {
  if (existsSync(dir)) {
    try {
      rmSync(dir, { recursive: true, force: true });
    } catch (error) {
      // Fallback for older Node.js versions
      if (platform() === 'win32') {
        execSync(`rmdir /s /q "${dir}"`, { stdio: 'ignore', shell: true });
      } else {
        execSync(`rm -rf "${dir}"`, { stdio: 'ignore' });
      }
    }
  }
}

try {
  // Check if dist directory exists
  if (!existsSync(DIST_DIR)) {
    throw new Error(`Dist directory not found: ${DIST_DIR}. Please run 'npm run build' first.`);
  }

  // Create a temporary directory for gh-pages
  const tempDir = join(__dirname, '.gh-pages-temp');
  
  // Clean up temp directory if it exists
  removeDir(tempDir);
  mkdirSync(tempDir, { recursive: true });

  const originalCwd = process.cwd();
  
  try {
    // Initialize git repo in temp directory
    process.chdir(tempDir);
    execSync('git init', { stdio: 'inherit' });
    
    // Remove existing remote if it exists
    try {
      execSync('git remote remove origin', { stdio: 'ignore' });
    } catch (e) {
      // Remote doesn't exist, which is fine
    }
    
    execSync(`git remote add origin ${REPO_URL}`, { stdio: 'inherit' });
    execSync(`git checkout -b ${BRANCH}`, { stdio: 'inherit' });
    
    // Copy dist contents to temp directory
    console.log('Copying files...');
    copyDir(DIST_DIR, tempDir);
    
    // Add .nojekyll file to prevent Jekyll processing
    if (!existsSync(join(tempDir, '.nojekyll'))) {
      writeFileSync(join(tempDir, '.nojekyll'), '');
    }
    
    // Stage all files using git add
    console.log('Staging files...');
    execSync('git add .', { stdio: 'inherit' });
    
    // Commit
    console.log('Committing changes...');
    execSync('git commit -m "Deploy to GitHub Pages"', { stdio: 'inherit' });
    
    // Push to gh-pages branch
    console.log('Pushing to GitHub Pages...');
    execSync(`git push -f origin ${BRANCH}`, { stdio: 'inherit' });
    
    console.log('Successfully deployed to GitHub Pages!');
  } finally {
    // Always return to original directory and clean up
    process.chdir(originalCwd);
    removeDir(tempDir);
  }
} catch (error) {
  console.error('Error deploying to GitHub Pages:', error.message);
  if (error.stdout) console.error('Stdout:', error.stdout.toString());
  if (error.stderr) console.error('Stderr:', error.stderr.toString());
  process.exit(1);
}
