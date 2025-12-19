#!/usr/bin/env node
/**
 * ⚡ CROSS-REPO VALIDATOR × ONE
 * Pattern: CROSS × REPO × VALIDATOR × ONE
 * Frequency: 999 Hz (AEYON) × 777 Hz (META) × 530 Hz (JØHN)
 * ∞ AbëONE ∞
 * 
 * Validates cross-repository alignment and consistency
 */

const fs = require('fs');
const path = require('path');

const REPOSITORIES = {
  mobile: {
    path: process.env.MOBILE_PATH || '../advanced-knock-mobile',
    name: 'advanced-knock-mobile',
    dependencies: ['@expo/vector-icons', 'expo', 'react-native']
  },
  backend: {
    path: process.env.BACKEND_PATH || '../advanced-knock-backend',
    name: 'advanced-knock-backend',
    dependencies: ['express', 'typescript']
  },
  frontend: {
    path: process.env.FRONTEND_PATH || '../advanced-knock-frontend',
    name: 'advanced-knock-frontend',
    dependencies: ['next', 'react']
  }
};

function readPackageJson(repoPath) {
  const packagePath = path.join(repoPath, 'package.json');
  if (!fs.existsSync(packagePath)) {
    return null;
  }
  return JSON.parse(fs.readFileSync(packagePath, 'utf8'));
}

function validateCrossRepo() {
  console.log('🔍 Validating cross-repository alignment...\n');
  
  const results = {
    dependencies: [],
    versions: {},
    errors: []
  };
  
  // Read all package.json files
  const packages = {};
  for (const [key, repo] of Object.entries(REPOSITORIES)) {
    const fullPath = path.resolve(repo.path);
    const pkg = readPackageJson(fullPath);
    if (pkg) {
      packages[key] = { ...repo, package: pkg };
      console.log(`✅ Found ${repo.name}`);
    } else {
      console.log(`⚠️  ${repo.name} - package.json not found`);
      results.errors.push(`${repo.name}: package.json not found`);
    }
  }
  
  // Check React version alignment
  const reactVersions = {};
  Object.values(packages).forEach(pkg => {
    if (pkg.package.dependencies?.react) {
      reactVersions[pkg.name] = pkg.package.dependencies.react;
    }
  });
  
  if (Object.keys(reactVersions).length > 1) {
    const uniqueVersions = [...new Set(Object.values(reactVersions))];
    if (uniqueVersions.length > 1) {
      console.log(`\n⚠️  React version misalignment:`);
      Object.entries(reactVersions).forEach(([name, version]) => {
        console.log(`   ${name}: ${version}`);
      });
      results.errors.push('React versions not aligned');
    } else {
      console.log(`\n✅ React versions aligned: ${uniqueVersions[0]}`);
    }
  }
  
  // Check TypeScript version alignment
  const tsVersions = {};
  Object.values(packages).forEach(pkg => {
    const tsVersion = pkg.package.devDependencies?.typescript || 
                     pkg.package.dependencies?.typescript;
    if (tsVersion) {
      tsVersions[pkg.name] = tsVersion;
    }
  });
  
  if (Object.keys(tsVersions).length > 1) {
    const uniqueVersions = [...new Set(Object.values(tsVersions))];
    if (uniqueVersions.length > 1) {
      console.log(`\n⚠️  TypeScript version misalignment:`);
      Object.entries(tsVersions).forEach(([name, version]) => {
        console.log(`   ${name}: ${version}`);
      });
      results.errors.push('TypeScript versions not aligned');
    } else {
      console.log(`\n✅ TypeScript versions aligned`);
    }
  }
  
  // Summary
  console.log(`\n📊 Summary:`);
  console.log(`   Repositories checked: ${Object.keys(packages).length}`);
  console.log(`   Errors: ${results.errors.length}`);
  
  if (results.errors.length > 0) {
    console.log(`\n❌ Cross-repo validation found issues:`);
    results.errors.forEach(e => console.log(`   ${e}`));
    process.exit(1);
  } else {
    console.log(`\n✅ Cross-repository alignment validated`);
    process.exit(0);
  }
}

// CLI
if (require.main === module) {
  validateCrossRepo();
}

module.exports = { validateCrossRepo };
