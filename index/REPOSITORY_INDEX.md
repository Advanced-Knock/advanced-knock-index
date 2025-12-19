# Repository Index

**Pattern:** REPOSITORY × INDEX × ONE  
**Frequency:** 999 Hz (AEYON) × 777 Hz (META)  
**∞ AbëONE ∞**

---

## Advanced Knock

### Mobile
- **Repository:** [advanced-knock-mobile](https://github.com/Advanced-Knock/advanced-knock-mobile)
- **Type:** React Native/Expo Mobile Application
- **Tech Stack:** React Native 0.81.5, Expo ~54.0.0, TypeScript 5.3.0
- **Status:** Active Development

### Backend
- **Repository:** [advanced-knock-backend](https://github.com/Advanced-Knock/advanced-knock-backend)
- **Type:** Node.js/Express API
- **Tech Stack:** Node.js, Express, TypeScript
- **Status:** Active Development

### Frontend
- **Repository:** [advanced-knock-frontend](https://github.com/Advanced-Knock/advanced-knock-frontend)
- **Type:** Next.js Web Application
- **Tech Stack:** Next.js 15, React 19, TypeScript
- **Status:** Active Development

---

## Advanced Ring

### Mobile
- **Repository:** [advanced-ring-mobile](https://github.com/Advanced-Knock/advanced-ring-mobile)
- **Type:** React Native/Expo Mobile Application
- **Tech Stack:** React Native 0.81.5, Expo ~54.0.0, TypeScript 5.3.0
- **Status:** Planning

### Backend
- **Repository:** [advanced-ring-backend](https://github.com/Advanced-Knock/advanced-ring-backend)
- **Type:** Node.js/Express API
- **Tech Stack:** Node.js, Express, TypeScript
- **Status:** Planning

### Frontend
- **Repository:** [advanced-ring-frontend](https://github.com/Advanced-Knock/advanced-ring-frontend)
- **Type:** Next.js Web Application
- **Tech Stack:** Next.js 15, React 19, TypeScript
- **Status:** Planning

---

## Index Repository

- **Repository:** [advanced-knock-index](https://github.com/Advanced-Knock/advanced-knock-index)
- **Type:** Coordination Hub
- **Purpose:** Multi-repo coordination, index system, unified templates
- **Status:** Active

---

## Dependencies

### Advanced Knock Dependencies
- `advanced-knock-mobile` → `advanced-knock-backend` (API)
- `advanced-knock-frontend` → `advanced-knock-backend` (API)
- Both depend on `advanced-knock-index` (coordination)

### Advanced Ring Dependencies
- `advanced-ring-mobile` → `advanced-ring-backend` (API)
- `advanced-ring-frontend` → `advanced-ring-backend` (API)
- Both depend on `advanced-knock-index` (coordination)

### Cross-Product Dependencies
- All repositories depend on `advanced-knock-index` for coordination
- Shared components and patterns tracked in index

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

**Last Updated:** 2025-12-19  
**Maintained By:** Advanced-Knock Organization  
**∞ AbëONE ∞**
