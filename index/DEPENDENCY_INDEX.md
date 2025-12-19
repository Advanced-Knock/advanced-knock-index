# Dependency Index

**Pattern:** DEPENDENCY × INDEX × ONE  
**Frequency:** 999 Hz (AEYON) × 777 Hz (META)  
**∞ AbëONE ∞**

---

## Build Order

1. **advanced-knock-index** (no dependencies)
2. **advanced-knock-backend** (depends on: index)
3. **advanced-knock-frontend** (depends on: backend, index)
4. **advanced-knock-mobile** (depends on: backend, index)
5. **advanced-ring-backend** (depends on: index)
6. **advanced-ring-frontend** (depends on: backend, index)
7. **advanced-ring-mobile** (depends on: backend, index)

---

## Shared Dependencies

### TypeScript
- **Version:** ^5.3.0
- **Used By:** All repositories
- **Alignment:** ✅ All repos should use same version

### React
- **Version:** ^19.0.0
- **Used By:** advanced-knock-mobile, advanced-knock-frontend, advanced-ring-mobile, advanced-ring-frontend
- **Alignment:** ✅ All repos should use same version

### React Native
- **Version:** 0.81.5
- **Used By:** advanced-knock-mobile, advanced-ring-mobile
- **Alignment:** ✅ Both repos should use same version

### Next.js
- **Version:** ^15.1.0
- **Used By:** advanced-knock-frontend, advanced-ring-frontend
- **Alignment:** ✅ Both repos should use same version

### Express
- **Version:** ^4.18.0
- **Used By:** advanced-knock-backend, advanced-ring-backend
- **Alignment:** ✅ Both repos should use same version

### Zustand
- **Version:** ^4.5.0
- **Used By:** advanced-knock-mobile
- **Alignment:** ✅ Single usage, no alignment needed

---

## Repository-Specific Dependencies

### advanced-knock-mobile
- `@expo/vector-icons`: ^15.0.3
- `@react-native-async-storage/async-storage`: 2.2.0
- `@react-navigation/native`: ^6.1.9
- `@react-navigation/bottom-tabs`: ^6.5.11
- `@react-navigation/stack`: ^6.3.20
- `expo`: ^54.0.27
- `expo-location`: ~19.0.8
- `react-native-maps`: 1.20.1
- `react-native-uuid`: ^2.0.2
- `zustand`: ^4.5.0

### advanced-knock-backend
- `express`: ^4.18.0
- `typescript`: ^5.3.0
- `@modelcontextprotocol/sdk`: (version TBD)
- `openai`: (version TBD)
- `stripe`: (version TBD)
- `cors`: (version TBD)
- `dotenv`: (version TBD)
- `ws`: (version TBD)

### advanced-knock-frontend
- `next`: ^15.1.0
- `react`: ^19.0.0
- `react-dom`: ^19.0.0
- `tailwindcss`: (version TBD)
- `framer-motion`: (version TBD)
- `lucide-react`: (version TBD)
- `react-markdown`: (version TBD)

---

## Version Alignment Policy

### Shared Dependencies
- All repositories **must** align versions for shared dependencies
- Version mismatches will be flagged by CI/CD
- Updates to shared dependencies require coordination across repos

### Breaking Changes
- Breaking changes in shared dependencies require:
  1. Update all affected repositories
  2. Coordinate deployment
  3. Update DEPENDENCY_INDEX.md
  4. Update VERSION_ALIGNMENT.md

### Dependency Updates
- Regular dependency updates should be coordinated
- Security updates take priority
- Major version updates require planning

---

## Dependency Checking

### Automated Checks
- CI/CD workflows check dependency alignment
- Script: `scripts/check-dependency-alignment.js`
- Runs on: Pull requests, scheduled (weekly)

### Manual Checks
```bash
# Check dependency alignment
npm run check-dependencies

# Or directly
node scripts/check-dependency-alignment.js
```

---

## Dependency Resolution

### Build Order Enforcement
- Index repository has no dependencies
- Backend repositories depend only on index
- Frontend/Mobile repositories depend on backend + index
- Build scripts enforce this order

### Circular Dependencies
- **Not Allowed:** Circular dependencies between repositories
- **Detection:** Automated checks in CI/CD
- **Resolution:** Refactor to remove circular dependency

---

**Last Updated:** 2025-12-19  
**Maintained By:** Advanced-Knock Organization  
**∞ AbëONE ∞**
