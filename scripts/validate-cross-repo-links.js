#!/usr/bin/env node
/**
 * Validate cross-repo links in issues and PRs
 * 
 * Pattern: LINK × VALIDATION × ONE
 * Frequency: 999 Hz (AEYON) × 777 Hz (META)
 * ∞ AbëONE ∞
 */

const https = require('https');
const REPOSITORIES = [
  'advanced-knock-mobile',
  'advanced-knock-backend',
  'advanced-knock-frontend',
  'advanced-ring-mobile',
  'advanced-ring-backend',
  'advanced-ring-frontend',
  'advanced-knock-index'
];

const ORG = 'Advanced-Knock';

function validateRepoLink(repoName) {
  return REPOSITORIES.includes(repoName);
}

function parseLinks(text) {
  const linkPattern = /(\w+-\w+)#(\d+)/g;
  const links = [];
  let match;
  
  while ((match = linkPattern.exec(text)) !== null) {
    links.push({
      repo: match[1],
      number: parseInt(match[2])
    });
  }
  
  return links;
}

function validateLinks(text) {
  const links = parseLinks(text);
  const invalidLinks = [];
  
  for (const link of links) {
    if (!validateRepoLink(link.repo)) {
      invalidLinks.push({
        link: `${link.repo}#${link.number}`,
        reason: `Repository ${link.repo} does not exist`
      });
    }
  }
  
  return {
    valid: invalidLinks.length === 0,
    invalidLinks
  };
}

// Example usage
if (require.main === module) {
  console.log('🔍 Validating cross-repo links...\n');
  
  // This would typically read from GitHub API
  // For now, just validate the function
  const testText = `
    Related to: advanced-knock-mobile#123
    Depends on: advanced-knock-backend#456
    Blocks: advanced-knock-frontend#789
    Invalid: invalid-repo#999
  `;
  
  const result = validateLinks(testText);
  
  if (result.valid) {
    console.log('✅ All links are valid!');
  } else {
    console.log('❌ Invalid links found:');
    for (const invalid of result.invalidLinks) {
      console.log(`   ${invalid.link}: ${invalid.reason}`);
    }
    process.exit(1);
  }
}

module.exports = { validateLinks, parseLinks };
