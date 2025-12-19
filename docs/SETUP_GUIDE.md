# Setup Guide

**Pattern:** SETUP × GUIDE × ONE  
**Frequency:** 999 Hz (AEYON) × 777 Hz (META)  
**∞ AbëONE ∞**

---

## Manual Setup Required

Some GitHub features require manual setup through the GitHub web UI or API. This guide provides step-by-step instructions.

---

## GitHub Projects Setup

### Project 1: Advanced Knock - Product Development

1. Go to GitHub organization: https://github.com/Advanced-Knock
2. Click "Projects" → "New project"
3. Select "Board" template
4. Name: "Advanced Knock - Product Development"
5. Add columns:
   - Backlog
   - Planning
   - In Progress
   - Review
   - Testing
   - Done
6. Configure filters:
   - Label: `product:advanced-knock`
   - Repositories: `advanced-knock-mobile`, `advanced-knock-backend`, `advanced-knock-frontend`

### Project 2: Advanced Ring - Product Development

1. Create new project: "Advanced Ring - Product Development"
2. Same column structure as Project 1
3. Configure filters:
   - Label: `product:advanced-ring`
   - Repositories: `advanced-ring-mobile`, `advanced-ring-backend`, `advanced-ring-frontend`

### Project 3: Infrastructure & DevOps

1. Create new project: "Infrastructure & DevOps"
2. Add columns:
   - Infrastructure
   - Documentation
   - Index System
   - Monitoring
   - Security
   - Done
3. Configure filters:
   - Labels: `infrastructure`, `devops`, `index-system`
   - All repositories

### Project 4: Cross-Product Integration

1. Create new project: "Cross-Product Integration"
2. Add columns:
   - Planning
   - API Contracts
   - Shared Libraries
   - Testing
   - Deployment
   - Done
3. Configure filters:
   - Labels: `integration`, `cross-product`
   - Multiple repositories

---

## Labels Setup

Labels need to be created in each repository. Use the GitHub API or web UI.

### Using GitHub Web UI

1. Go to repository → "Issues" → "Labels"
2. Click "New label"
3. Create each label from `.github/labels.json`

### Using GitHub CLI

```bash
# Install GitHub CLI if needed
brew install gh

# Authenticate
gh auth login

# Create labels from JSON file
gh api repos/Advanced-Knock/advanced-knock-index/labels -X POST -f name="scope:mobile" -f color="0E8A16" -f description="Mobile app work"
# Repeat for each label...
```

### Label Categories

#### Scope Labels
- `scope:mobile` - Mobile app work
- `scope:backend` - Backend API work
- `scope:frontend` - Frontend work
- `scope:index` - Index system work
- `scope:cross-product` - Cross-product work

#### Product Labels
- `product:advanced-knock` - Advanced Knock product
- `product:advanced-ring` - Advanced Ring product
- `product:infrastructure` - Infrastructure work

#### Type Labels
- `type:bug` - Bug fix
- `type:feature` - New feature
- `type:enhancement` - Enhancement
- `type:documentation` - Documentation
- `type:refactor` - Code refactoring
- `type:test` - Testing
- `type:integration` - Integration work

#### Priority Labels
- `priority:critical` - Critical priority
- `priority:high` - High priority
- `priority:medium` - Medium priority
- `priority:low` - Low priority

#### Status Labels
- `status:needs-triage` - Needs triage
- `status:in-progress` - In progress
- `status:blocked` - Blocked
- `status:ready-for-review` - Ready for review

---

## Branch Protection Rules

### For main Branch

1. Go to repository → "Settings" → "Branches"
2. Click "Add rule" for `main` branch
3. Configure:
   - ✅ Require a pull request before merging
   - ✅ Require approvals: 2
   - ✅ Dismiss stale pull request approvals when new commits are pushed
   - ✅ Require status checks to pass before merging
   - ✅ Require branches to be up to date before merging
   - ✅ Require conversation resolution before merging
   - ✅ Do not allow bypassing the above settings

### For develop Branch

1. Add rule for `develop` branch
2. Configure:
   - ✅ Require a pull request before merging
   - ✅ Require approvals: 1
   - ✅ Dismiss stale pull request approvals when new commits are pushed
   - ✅ Require status checks to pass before merging
   - ✅ Require branches to be up to date before merging

---

## Repository-Specific CI Workflows

CI workflows need to be created in each repository. Copy the template from the index repository or create new ones.

### Mobile Repository CI

Create `.github/workflows/ci.yml` in `advanced-knock-mobile`:

```yaml
name: Mobile CI

on:
  pull_request:
  push:
    branches: [main, develop]

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: npm install
      - run: npm run lint

  type-check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: npm install
      - run: npm run type-check

  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: npm install
      - run: npm run test

  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: npm install
      - run: npm run build
```

### Backend Repository CI

Create similar workflow for backend with appropriate steps.

### Frontend Repository CI

Create similar workflow for frontend with appropriate steps.

---

## Verification Checklist

- [ ] All repositories created
- [ ] Index repository structure complete
- [ ] Issue templates created in index repo
- [ ] PR template created in index repo
- [ ] Labels created in all repositories
- [ ] GitHub Projects created (4 projects)
- [ ] Branch protection rules configured
- [ ] CI workflows created in each repository
- [ ] README files updated in all repositories
- [ ] Documentation complete

---

**Last Updated:** 2025-12-19  
**Maintained By:** Advanced-Knock Organization  
**∞ AbëONE ∞**
