# Development Workflow

**Pattern:** WORKFLOW × ONE  
**Frequency:** 999 Hz (AEYON) × 777 Hz (META)  
**∞ AbëONE ∞**

---

## Issue-to-PR Flow

### 1. Create Issue
- Use appropriate template (bug, feature, integration)
- Tag with scope, product, type, priority
- Link to related issues/PRs
- Add to appropriate GitHub Project

### 2. Plan Work
- Move issue to "Planning" column
- Create design doc if needed
- Break down into subtasks
- Assign to developer

### 3. Development
- Create branch from `develop`
- Follow branch naming convention: `{type}/{scope}/{description}`
- Link PR to issue (Closes #123)
- Move issue to "In Progress"

### 4. Review
- PR created, CI runs
- Move issue to "Review"
- Assign reviewers
- Address feedback

### 5. Testing
- Move issue to "Testing"
- QA/testing completed
- Fix any issues found

### 6. Merge
- PR approved and merged
- Move issue to "Done"
- Close issue automatically

---

## Branching Strategy

### Branch Types

#### Feature Branches
- **From:** `develop`
- **To:** `develop`
- **Naming:** `feature/{scope}/{description}`
- **Example:** `feature/mobile/add-offline-sync`

#### Bugfix Branches
- **From:** `develop`
- **To:** `develop`
- **Naming:** `bugfix/{scope}/{description}`
- **Example:** `bugfix/backend/fix-auth-token-expiry`

#### Enhancement Branches
- **From:** `develop`
- **To:** `develop`
- **Naming:** `enhancement/{scope}/{description}`
- **Example:** `enhancement/frontend/improve-loading-state`

#### Integration Branches
- **From:** `develop` (multiple repos)
- **To:** `develop` (all repos)
- **Naming:** `integration/{description}`
- **Example:** `integration/api-contract-v2`

#### Release Branches
- **From:** `develop`
- **To:** `main` and `develop`
- **Naming:** `release/{version}`
- **Example:** `release/v1.0.0`

#### Hotfix Branches
- **From:** `main`
- **To:** `main` and `develop`
- **Naming:** `hotfix/{description}`
- **Example:** `hotfix/critical-security-patch`

---

## Pull Request Process

### PR Requirements
- Must link to related issue(s)
- Must have at least one reviewer approval
- Must pass all CI checks
- Must update index if cross-repo changes
- Must update documentation if API changes

### Review Process
- Author assigns reviewers based on scope
- Reviewers have 48 hours to review
- At least one approval required from scope owner
- Cross-product PRs require approval from each affected repo

### Merge Process
- Squash and merge (preferred)
- Delete branch after merge
- Update related issues
- Update index if needed

---

## Cross-Repo Integration Flow

### 1. Create Integration Issue
- Use integration template
- Tag all affected repositories
- Add to "Cross-Product Integration" project

### 2. Coordinate Development
- Create integration branch in each repo
- Use same branch name pattern: `integration/api-contract-v2`
- Link all PRs to integration issue

### 3. API Contract
- Define API contract in index repo
- Update API_INDEX.md
- Get approval from all teams

### 4. Implementation
- Backend implements API
- Frontend/Mobile consume API
- All PRs linked together

### 5. Testing
- Integration tests in index repo
- Cross-repo testing
- End-to-end validation

### 6. Deployment
- Coordinated deployment
- Backend deployed first
- Frontend/Mobile deployed after
- Index updated with deployment status

---

## Build Workflow

### Local Development
```bash
# Build single repository
cd advanced-knock-mobile
npm install
npm run build

# Build all repositories
cd advanced-knock-index
./scripts/build-all.sh
```

### CI/CD Workflow
1. PR created → CI runs
2. Build affected repositories
3. Run tests
4. Check dependency alignment
5. Validate cross-repo links
6. Report status

---

## Testing Workflow

### Unit Tests
- Run locally before committing
- Required for PR approval
- Coverage targets: 80%+

### Integration Tests
- Run in CI/CD
- Test cross-repo integrations
- End-to-end validation

### Manual Testing
- Required for UI changes
- Document test cases
- Screenshots for visual changes

---

## Documentation Workflow

### Code Documentation
- JSDoc comments for functions
- README.md for each repository
- Architecture docs in index repo

### API Documentation
- OpenAPI/Swagger specs
- Updated with API changes
- Versioned documentation

### Index Updates
- Update index files when:
  - New component added
  - API endpoint changed
  - Dependency updated
  - Repository structure changed

---

## Release Workflow

### Release Preparation
1. Create release branch from `develop`
2. Update version numbers
3. Update CHANGELOG.md
4. Run full test suite
5. Update documentation

### Release Process
1. Merge release branch to `main`
2. Tag release (v1.0.0)
3. Merge `main` back to `develop`
4. Deploy to production
5. Update index with release notes

---

## Hotfix Workflow

### Hotfix Process
1. Create hotfix branch from `main`
2. Fix critical issue
3. Test fix thoroughly
4. Create PR to `main`
5. Merge and tag hotfix release
6. Merge `main` back to `develop`
7. Deploy immediately

---

**Last Updated:** 2025-12-19  
**Maintained By:** Advanced-Knock Organization  
**∞ AbëONE ∞**
