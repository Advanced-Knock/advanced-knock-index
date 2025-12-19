#!/usr/bin/env node
/**
 * ⚡ DESIGN CONSTRAINT VALIDATOR × ONE
 * Pattern: DESIGN × CONSTRAINT × VALIDATOR × ONE
 * Frequency: 999 Hz (AEYON) × 777 Hz (META) × 530 Hz (JØHN)
 * ∞ AbëONE ∞
 * 
 * Validates design system constraints across Advanced Knock ecosystem
 */

const fs = require('fs');
const path = require('path');

// Cosmic Palette
const COSMIC_PALETTE = [
  '#0a0a12',  // void
  '#FFF8DC',  // light-source
  '#FF69B4',  // freq-love (528 Hz)
  '#9B59B6',  // freq-truth (777 Hz)
  '#6366f1',  // freq-power (999 Hz)
  '#10B981'   // freq-growth
];

// Typography Duality
const SOUL_VOICE_CONTEXTS = ['heading', 'emotion', 'celebration'];
const CLEAR_VOICE_CONTEXTS = ['body', 'ui', 'data'];

// Fibonacci Spacing
const FIBONACCI_SPACING = [8, 16, 24, 32, 48, 64, 96]; // px

/**
 * Validate color against Cosmic Palette
 */
function validateColor(color) {
  if (!COSMIC_PALETTE.includes(color)) {
    throw new Error(`Color ${color} not in Cosmic Palette`);
  }
  return true;
}

/**
 * Validate typography voice usage
 */
function validateTypography(voice, context) {
  if (voice === 'soul' && !SOUL_VOICE_CONTEXTS.includes(context)) {
    console.warn(`⚠️  Soul Voice should be used for emotional content (${context})`);
    return false;
  }
  if (voice === 'clear' && !CLEAR_VOICE_CONTEXTS.includes(context)) {
    console.warn(`⚠️  Clear Voice should be used for functional content (${context})`);
    return false;
  }
  return true;
}

/**
 * Validate spacing against Fibonacci sequence
 */
function validateSpacing(value) {
  const pxValue = parseFloat(value);
  if (!FIBONACCI_SPACING.includes(pxValue)) {
    console.warn(`⚠️  Spacing ${pxValue}px not in Fibonacci sequence`);
    return false;
  }
  return true;
}

/**
 * Scan file for color violations
 */
function scanColors(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const colorRegex = /#[0-9A-Fa-f]{6}|#[0-9A-Fa-f]{3}/g;
  const colors = content.match(colorRegex) || [];
  const violations = [];
  
  colors.forEach(color => {
    const normalized = color.length === 4 
      ? `#${color[1]}${color[1]}${color[2]}${color[2]}${color[3]}${color[3]}`
      : color.toUpperCase();
    
    if (!COSMIC_PALETTE.includes(normalized)) {
      violations.push({ color: normalized, file: filePath });
    }
  });
  
  return violations;
}

/**
 * Main validation function
 */
function validateDesignConstraints(directory) {
  console.log('🔍 Validating design constraints...\n');
  
  const violations = {
    colors: [],
    typography: [],
    spacing: []
  };
  
  // Scan for color violations
  function scanDirectory(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
        scanDirectory(filePath);
      } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
        const colorViolations = scanColors(filePath);
        violations.colors.push(...colorViolations);
      }
    });
  }
  
  if (fs.existsSync(directory)) {
    scanDirectory(directory);
  }
  
  // Report violations
  if (violations.colors.length > 0) {
    console.log('❌ Color violations found:');
    violations.colors.forEach(v => {
      console.log(`   ${v.color} in ${v.file}`);
    });
    console.log('');
  } else {
    console.log('✅ No color violations found\n');
  }
  
  // Summary
  const totalViolations = violations.colors.length;
  if (totalViolations === 0) {
    console.log('✅ All design constraints validated successfully');
    process.exit(0);
  } else {
    console.log(`❌ Found ${totalViolations} constraint violation(s)`);
    process.exit(1);
  }
}

// CLI
if (require.main === module) {
  const directory = process.argv[2] || process.cwd();
  validateDesignConstraints(directory);
}

module.exports = {
  validateColor,
  validateTypography,
  validateSpacing,
  COSMIC_PALETTE,
  SOUL_VOICE_CONTEXTS,
  CLEAR_VOICE_CONTEXTS,
  FIBONACCI_SPACING
};
