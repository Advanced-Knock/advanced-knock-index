# Branching Strategy

**Pattern:** BRANCHING × STRATEGY × ONE  
**Frequency:** 999 Hz (AEYON) × 777 Hz (META)  
**∞ AbëONE ∞**

---

## Branch Structure

```
main                    # Production-ready code
├── develop             # Integration branch
│   ├── feature/*       # Feature branches
│   ├── bugfix/*        # Bug fix branches
│   ├── enhancement/*   # Enhancement branches
│   └── integration/*   # Integration branches
├── release/*           # Release preparation branches
└── hotfix/*            # Hotfix branches
```

---

## Branch Types

### main Branch
- **Purpose:** Production-ready code
- **Protection:** Yes
- **Requires PR:** Yes
- **Requires Reviews:** Yes (2 approvals)
- **Requires Status Checks:** Yes (all CI)
- **Direct Pushes:** No

### develop Branch
- **Purpose:** Integration branch for ongoing work
- **Protection:** Yes
- **Requires PR:** Yes
- **Requires Reviews:** Yes (1 approval)
- **Requires Status Checks:** Yes (all CI)
- **Direct Pushes:** No

### Feature Branches
- **From:** `develop`
- **To:** `develop`
- **Naming:** `feature/{scope}/{description}`
- **Lifecycle:** Created → Developed → PR → Merged → Deleted
- **Example:** `feature/mobile/add-offline-sync`

### Bugfix Branches
- **From:** `develop`
- **To:** `develop`
- **Naming:** `bugfix/{scope}/{description}`
- **Lifecycle:** Created → Fixed → PR → Merged → Deleted
- **Example:** `bugfix/backend/fix-auth-token-expiry`

### Enhancement Branches
- **From:** `develop`
- **To:** `develop`
- **Naming:** `enhancement/{scope}/{description}`
- **Lifecycle:** Created → Enhanced → PR → Merged → Deleted
- **Example:** `enhancement/frontend/improve-loading-state`

### Integration Branches
- **From:** `develop` (multiple repos)
- **To:** `develop` (all repos)
- **Naming:** `integration/{description}`
- **Lifecycle:** Created in all repos → Coordinated development → PRs → Merged → Deleted
- **Example:** `integration/api-contract-v2`
- **Special:** Requires index updates

### Release Branches
- **From:** `develop`
- **To:** `main` and `develop`
- **Naming:** `release/{version}`
- **Lifecycle:** Created → Version bump → Testing → Merge to main → Tag → Merge to develop → Deleted
- **Example:** `release/v1.0.0`
- **Special:** Version bumping happens here

### Hotfix Branches
- **From:** `main`
- **To:** `main` and `develop`
- **Naming:** `hotfix/{description}`
- **Lifecycle:** Created → Fixed → PR to main → Merged → Tag → Merge to develop → Deleted
- **Example:** `hotfix/critical-security-patch`
- **Special:** Used for critical production fixes

---

## Branch Protection Rules

### main Branch Protection
```yaml
required_status_checks:
  - ci/mobile (if mobile repo)
  - ci/backend (if backend repo)
  - ci/frontend (if frontend repo)
  - lint
  - type-check
required_reviewers: 2
dismiss_stale_reviews: true
require_code_owner_review: false
require_last_push_approval: false
required_approving_review_count: 2
require_branch_up_to_date: true
```

### develop Branch Protection
```yaml
required_status_checks:
  - ci/mobile (if mobile repo)
  - ci/backend (if backend repo)
  - ci/frontend (if frontend repo)
  - lint
  - type-check
required_reviewers: 1
dismiss_stale_reviews: true
require_code_owner_review: false
require_last_push_approval: false
required_approving_review_count: 1
require_branch_up_to_date: true
```

---

## Workflow Examples

### Feature Development
1. Create branch: `git checkout -b feature/mobile/add-offline-sync develop`
2. Develop feature
3. Commit changes
4. Push branch: `git push origin feature/mobile/add-offline-sync`
5. Create PR to `develop`
6. Get reviews and approval
7. Merge PR (squash and merge)
8. Delete branch

### Bug Fix
1. Create branch: `git checkout -b bugfix/backend/fix-auth-token-expiry develop`
2. Fix bug
3. Add tests
4. Commit changes
5. Push branch
6. Create PR to `develop`
7. Get reviews and approval
8. Merge PR
9. Delete branch

### Release
1. Create branch: `git checkout -b release/v1.0.0 develop`
2. Update version numbers
3. Update CHANGELOG.md
4. Run full test suite
5. Create PR to `main`
6. Get reviews and approval
7. Merge PR to `main`
8. Tag release: `git tag v1.0.0`
9. Merge `main` back to `develop`
10. Delete branch

### Hotfix
1. Create branch: `git checkout -b hotfix/critical-security-patch main`
2. Fix critical issue
3. Test thoroughly
4. Create PR to `main`
5. Get reviews and approval
6. Merge PR to `main`
7. Tag hotfix: `git tag v1.0.1`
8. Merge `main` back to `develop`
9. Delete branch

### Integration (Cross-Repo)
1. Create integration issue
2. Create branch in each repo: `integration/api-contract-v2`
3. Coordinate development
4. Create PRs in each repo, link to integration issue
5. Get approvals from each repo
6. Merge PRs in order (backend first, then frontend/mobile)
7. Update index
8. Delete branches

---

## Branch Naming Conventions

### Format
`{type}/{scope}/{description}`

### Type Options
- `feature` - New features
- `bugfix` - Bug fixes
- `enhancement` - Enhancements
- `refactor` - Code refactoring
- `docs` - Documentation
- `integration` - Cross-repo integration

### Scope Options
- `mobile` - Mobile app
- `backend` - Backend API
- `frontend` - Frontend app
- `index` - Index repository
- `cross-product` - Cross-product work

### Description
- Use kebab-case
- Be descriptive but concise
- Examples:
  - `add-offline-sync`
  - `fix-auth-token-expiry`
  - `improve-loading-state`
  - `api-contract-v2`

---

## Best Practices

### Branch Management
- Keep branches focused and small
- Delete branches after merge
- Keep branches up to date with base branch
- Use descriptive names

### Merging
- Prefer squash and merge
- Write clear merge commit messages
- Update related issues
- Update index if cross-repo

### Rebasing
- Rebase feature branches on `develop` before PR
- Don't rebase shared branches
- Test after rebasing

---

**Last Updated:** 2025-12-19  
**Maintained By:** Advanced-Knock Organization  
**∞ AbëONE ∞**
