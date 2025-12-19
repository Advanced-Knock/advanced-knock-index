# Collaboration Guide

**Pattern:** COLLABORATION × ONE  
**Frequency:** 999 Hz (AEYON) × 777 Hz (META)  
**∞ AbëONE ∞**

---

## Communication

### GitHub Issues
- Use for bug reports, feature requests, questions
- Tag appropriately (scope, product, type, priority)
- Link related issues/PRs
- Keep discussions focused and actionable

### Pull Requests
- Use for code changes
- Link to related issues
- Provide clear descriptions
- Respond to feedback promptly

### GitHub Projects
- Use for project management
- Move issues through workflow columns
- Update status regularly

---

## Code Review Guidelines

### For Authors
- Write clear, self-documenting code
- Add comments for complex logic
- Update documentation
- Test your changes
- Keep PRs focused and small

### For Reviewers
- Review within 48 hours
- Provide constructive feedback
- Approve when ready
- Request changes when needed
- Be respectful and professional

### Review Checklist
- [ ] Code follows style guidelines
- [ ] Tests added/updated
- [ ] Documentation updated
- [ ] No breaking changes (or documented)
- [ ] Index updated (if cross-repo)

---

## Branch Naming

### Format
`{type}/{scope}/{description}`

### Types
- `feature` - New features
- `bugfix` - Bug fixes
- `enhancement` - Enhancements
- `refactor` - Code refactoring
- `docs` - Documentation
- `integration` - Cross-repo integration

### Scopes
- `mobile` - Mobile app
- `backend` - Backend API
- `frontend` - Frontend app
- `index` - Index repository
- `cross-product` - Cross-product work

### Examples
- `feature/mobile/add-offline-sync`
- `bugfix/backend/fix-auth-token-expiry`
- `integration/api-contract-v2`

---

## Commit Messages

### Format
```
{type}: {description}

{body}

{footer}
```

### Types
- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation
- `style` - Code style
- `refactor` - Refactoring
- `test` - Tests
- `chore` - Maintenance

### Examples
```
feat(mobile): add offline sync capability

Implements offline-first architecture with Zustand store
and AsyncStorage persistence.

Closes #123
```

---

## Cross-Repo Linking

### Issue Linking Format
```markdown
## Related Issues
- Related to: advanced-knock-mobile#123
- Depends on: advanced-knock-backend#456
- Blocks: advanced-knock-frontend#789
- Enables: advanced-ring-mobile#101
```

### PR Linking Format
```markdown
## Cross-Repo PRs
- Mobile PR: advanced-knock-mobile#PR-123
- Backend PR: advanced-knock-backend#PR-456
- Frontend PR: advanced-knock-frontend#PR-789
```

---

## Label Usage

### Scope Labels
- `scope:mobile` - Mobile app work
- `scope:backend` - Backend API work
- `scope:frontend` - Frontend work
- `scope:index` - Index system work
- `scope:cross-product` - Cross-product work

### Product Labels
- `product:advanced-knock` - Advanced Knock product
- `product:advanced-ring` - Advanced Ring product
- `product:infrastructure` - Infrastructure work

### Type Labels
- `type:bug` - Bug fix
- `type:feature` - New feature
- `type:enhancement` - Enhancement
- `type:documentation` - Documentation
- `type:refactor` - Code refactoring
- `type:test` - Testing
- `type:integration` - Integration work

### Priority Labels
- `priority:critical` - Critical priority
- `priority:high` - High priority
- `priority:medium` - Medium priority
- `priority:low` - Low priority

### Status Labels
- `status:needs-triage` - Needs triage
- `status:in-progress` - In progress
- `status:blocked` - Blocked
- `status:ready-for-review` - Ready for review

---

## GitHub Projects Usage

### Project Columns
1. **Backlog** - New issues, ideas
2. **Planning** - Issues being scoped
3. **In Progress** - Active development
4. **Review** - PRs awaiting review
5. **Testing** - PRs in QA/testing
6. **Done** - Completed and merged

### Moving Issues
- Move issues through columns as work progresses
- Update status labels
- Keep projects up to date

---

## Conflict Resolution

### Code Conflicts
- Resolve conflicts locally
- Rebase on latest `develop`
- Test after resolving
- Get re-review if significant changes

### Design Conflicts
- Discuss in issue comments
- Get team input
- Document decision
- Update design docs

---

## Best Practices

### Code Quality
- Write clean, readable code
- Follow style guidelines
- Add tests
- Update documentation

### Communication
- Be clear and concise
- Provide context
- Ask questions
- Share knowledge

### Collaboration
- Help others
- Share learnings
- Give constructive feedback
- Celebrate successes

---

**Last Updated:** 2025-12-19  
**Maintained By:** Advanced-Knock Organization  
**∞ AbëONE ∞**
