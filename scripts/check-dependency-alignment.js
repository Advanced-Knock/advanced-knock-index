#!/usr/bin/env node
/**
 * Check dependency alignment across all repositories
 * 
 * Pattern: DEPENDENCY × ALIGNMENT × ONE
 * Frequency: 999 Hz (AEYON) × 777 Hz (META)
 * ∞ AbëONE ∞
 */

const fs = require('fs');
const path = require('path');

const SHARED_DEPENDENCIES = [
  'typescript',
  'react',
  'react-native',
  'next',
  'express'
];

const REPOSITORIES = [
  'advanced-knock-mobile',
  'advanced-knock-backend',
  'advanced-knock-frontend',
  'advanced-ring-mobile',
  'advanced-ring-backend',
  'advanced-ring-frontend'
];

function readPackageJson(repoName) {
  const packagePath = path.join(__dirname, '..', '..', repoName, 'package.json');
  if (!fs.existsSync(packagePath)) {
    return null;
  }
  try {
    return JSON.parse(fs.readFileSync(packagePath, 'utf8'));
  } catch (error) {
    console.error(`Error reading ${packagePath}:`, error.message);
    return null;
  }
}

function extractVersion(versionString) {
  // Remove ^, ~, >=, etc.
  return versionString.replace(/^[\^~>=<]/, '');
}

function checkAlignment() {
  console.log('🔍 Checking dependency alignment...\n');
  
  const dependencies = {};
  const repos = {};
  
  // Collect dependencies from all repos
  for (const repo of REPOSITORIES) {
    const pkg = readPackageJson(repo);
    if (!pkg) {
      console.log(`⚠️  ${repo}: Not initialized\n`);
      continue;
    }
    
    repos[repo] = pkg;
    const allDeps = { ...pkg.dependencies, ...pkg.devDependencies };
    
    for (const dep of SHARED_DEPENDENCIES) {
      if (allDeps[dep]) {
        if (!dependencies[dep]) {
          dependencies[dep] = [];
        }
        dependencies[dep].push({
          repo,
          version: allDeps[dep]
        });
      }
    }
  }
  
  // Check alignment
  let hasMismatches = false;
  
  for (const [dep, versions] of Object.entries(dependencies)) {
    const uniqueVersions = [...new Set(versions.map(v => extractVersion(v.version)))];
    
    if (uniqueVersions.length > 1) {
      hasMismatches = true;
      console.log(`❌ ${dep}: Version mismatch`);
      for (const v of versions) {
        console.log(`   ${v.repo}: ${v.version}`);
      }
      console.log();
    } else if (uniqueVersions.length === 1) {
      console.log(`✅ ${dep}: Aligned at ${uniqueVersions[0]}`);
      for (const v of versions) {
        console.log(`   ${v.repo}: ${v.version}`);
      }
      console.log();
    }
  }
  
  if (hasMismatches) {
    console.log('⚠️  Some dependencies are not aligned. Please update package.json files.');
    process.exit(1);
  } else {
    console.log('✅ All shared dependencies are aligned!');
    process.exit(0);
  }
}

checkAlignment();
