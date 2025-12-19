#!/usr/bin/env node
/**
 * ⚡ FILE COMPLETENESS VALIDATOR × ONE
 * Pattern: FILE × COMPLETENESS × VALIDATOR × ONE
 * Frequency: 999 Hz (AEYON) × 530 Hz (ZERO)
 * ∞ AbëONE ∞
 * 
 * Validates that all required files are present in the main project
 */

const fs = require('fs');
const path = require('path');

const REQUIRED_FILES = [
  'src/components/ErrorBoundary.tsx',
  'src/contexts/AuthContext.tsx',
  'src/services/api.ts',
  'src/modules/advancedknock/index.ts',
  'src/modules/advancedknock/components/AdvancedKnockMap.tsx',
  'src/modules/advancedknock/components/KnockLogger.tsx',
  'src/modules/advancedknock/hooks/useLocation.ts',
  'src/modules/advancedknock/hooks/useOfflineSync.ts',
  'src/modules/advancedknock/screens/MapLogScreen.tsx',
  'src/modules/advancedknock/stores/knockStore.ts',
  'src/modules/advancedknock/types/index.ts'
];

function validateFileCompleteness(projectPath) {
  console.log('🔍 Validating file completeness...\n');
  
  const missing = [];
  const present = [];
  
  REQUIRED_FILES.forEach(file => {
    const fullPath = path.join(projectPath, file);
    if (fs.existsSync(fullPath)) {
      present.push(file);
      console.log(`✅ ${file}`);
    } else {
      missing.push(file);
      console.log(`❌ ${file} - MISSING`);
    }
  });
  
  console.log(`\n📊 Summary:`);
  console.log(`   Present: ${present.length}/${REQUIRED_FILES.length}`);
  console.log(`   Missing: ${missing.length}/${REQUIRED_FILES.length}`);
  
  if (missing.length > 0) {
    console.log(`\n❌ File completeness validation FAILED`);
    console.log(`   Missing files: ${missing.join(', ')}`);
    process.exit(1);
  } else {
    console.log(`\n✅ All required files present`);
    process.exit(0);
  }
}

// CLI
if (require.main === module) {
  const projectPath = process.argv[2] || process.cwd();
  validateFileCompleteness(projectPath);
}

module.exports = { validateFileCompleteness, REQUIRED_FILES };
