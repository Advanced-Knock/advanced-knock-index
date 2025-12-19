# Build Index

**Pattern:** BUILD × INDEX × ONE  
**Frequency:** 999 Hz (AEYON) × 777 Hz (META)  
**∞ AbëONE ∞**

---

## Multi-Repo Build Coordination

The build index coordinates builds across all repositories in the correct dependency order.

---

## Build Order

### Phase 1: Index
1. **advanced-knock-index**
   - No dependencies
   - Builds index files
   - Validates cross-repo links
   - Checks dependency alignment

### Phase 2: Backend
2. **advanced-knock-backend**
   - Depends on: index
   - Builds API server
   - Generates API documentation
   - Runs backend tests

3. **advanced-ring-backend** (if applicable)
   - Depends on: index
   - Builds API server
   - Generates API documentation
   - Runs backend tests

### Phase 3: Frontend
4. **advanced-knock-frontend**
   - Depends on: backend, index
   - Builds Next.js application
   - Generates static assets
   - Runs frontend tests

5. **advanced-ring-frontend** (if applicable)
   - Depends on: backend, index
   - Builds Next.js application
   - Generates static assets
   - Runs frontend tests

### Phase 4: Mobile
6. **advanced-knock-mobile**
   - Depends on: backend, index
   - Builds React Native app
   - Generates mobile bundles
   - Runs mobile tests

7. **advanced-ring-mobile** (if applicable)
   - Depends on: backend, index
   - Builds React Native app
   - Generates mobile bundles
   - Runs mobile tests

---

## Build Scripts

### Build All Repositories
```bash
./scripts/build-all.sh
```

**What it does:**
1. Builds index repository
2. Builds backend repositories (in parallel)
3. Builds frontend repositories (in parallel, after backends)
4. Builds mobile repositories (in parallel, after backends)
5. Reports build status

### Build Single Repository
```bash
# Build specific repository
cd advanced-knock-mobile
npm run build
```

### Build with Dependencies
```bash
# Build repository and its dependencies
./scripts/build-with-deps.sh advanced-knock-frontend
```

---

## Build Configuration

### Environment Variables
- `NODE_ENV`: production | development | test
- `CI`: true | false (set in CI/CD)
- `BUILD_TARGET`: web | mobile | api

### Build Outputs
- **Index:** `index/` directory (markdown files)
- **Backend:** `dist/` directory (compiled JavaScript)
- **Frontend:** `.next/` directory (Next.js build)
- **Mobile:** `build/` directory (React Native bundles)

---

## Build Validation

### Pre-Build Checks
- ✅ Dependency alignment verified
- ✅ Cross-repo links validated
- ✅ TypeScript types checked
- ✅ Linting passed

### Post-Build Checks
- ✅ Build artifacts generated
- ✅ Tests pass
- ✅ No build errors
- ✅ Build size within limits

---

## CI/CD Integration

### GitHub Actions
- Builds run on pull requests
- Builds run on push to main/develop
- Builds run on scheduled basis (nightly)

### Build Status
- Green: All builds successful
- Yellow: Builds in progress
- Red: Build failures

### Build Notifications
- Slack notifications on failures
- Email notifications for critical builds
- Status badges in README

---

## Build Optimization

### Parallel Builds
- Backend repositories build in parallel
- Frontend repositories build in parallel (after backends)
- Mobile repositories build in parallel (after backends)

### Caching
- Node modules cached between builds
- Build artifacts cached
- Docker images cached

### Incremental Builds
- Only changed repositories rebuilt
- Dependency tracking for changes
- Smart rebuild detection

---

## Build Troubleshooting

### Common Issues

#### Dependency Mismatch
- **Symptom:** Build fails with dependency error
- **Solution:** Run `npm run check-dependencies` and align versions

#### Circular Dependency
- **Symptom:** Build hangs or fails
- **Solution:** Check DEPENDENCY_INDEX.md and refactor

#### Build Order Issue
- **Symptom:** Build fails because dependency not built
- **Solution:** Ensure build order follows BUILD_INDEX.md

---

**Last Updated:** 2025-12-19  
**Maintained By:** Advanced-Knock Organization  
**∞ AbëONE ∞**
