# Component Index

**Pattern:** COMPONENT × INDEX × ONE  
**Frequency:** 999 Hz (AEYON) × 777 Hz (META)  
**∞ AbëONE ∞**

---

## Shared Components

### Error Handling

#### ErrorBoundary (React Native)
- **Location:** `advanced-knock-mobile#src/components/ErrorBoundary.tsx`
- **Type:** React Native Error Boundary
- **Usage:** Mobile app error handling
- **Status:** ✅ Implemented

#### ErrorBoundary (Next.js)
- **Location:** `advanced-knock-frontend#src/components/ErrorBoundary.tsx`
- **Type:** Next.js/React Error Boundary
- **Usage:** Frontend error handling
- **Status:** ✅ Implemented

### Authentication

#### AuthContext (React Native)
- **Location:** `advanced-knock-mobile#src/contexts/AuthContext.tsx`
- **Type:** React Native Context
- **Usage:** Mobile app authentication
- **Status:** ✅ Implemented

### API Services

#### API Service (React Native)
- **Location:** `advanced-knock-mobile#src/services/api.ts`
- **Type:** React Native API Client
- **Usage:** Mobile app API calls
- **Status:** ✅ Implemented

#### API Client (Next.js)
- **Location:** `advanced-knock-frontend#src/lib/api-client.ts`
- **Type:** Next.js API Client
- **Usage:** Frontend API calls with retry logic
- **Status:** ✅ Implemented

---

## Cross-Repo Components

### Backend API Routes

#### Advanced Knock Mobile Routes
- **Location:** `advanced-knock-backend#src/api/routes/advanced-knock-mobile.ts`
- **Endpoints:**
  - POST `/api/advanced-knock-mobile/knocks`
  - GET `/api/advanced-knock-mobile/knocks`
  - GET `/api/advanced-knock-mobile/leads`
  - POST `/api/advanced-knock-mobile/leads`
  - GET `/api/advanced-knock-mobile/territory`
  - GET `/api/advanced-knock-mobile/map`
  - POST `/api/advanced-knock-mobile/coaching`
  - POST `/api/advanced-knock-mobile/sync`
- **Status:** ✅ Implemented

### Frontend Product Pages

#### Advanced Knock Product Page
- **Location:** `advanced-knock-frontend#src/app/products/advanced-knock/page.tsx`
- **Type:** Next.js Page Component
- **Usage:** Product landing page
- **Status:** ✅ Implemented

#### Advanced Knock Education Page
- **Location:** `advanced-knock-frontend#src/app/products/advanced-knock-education/page.tsx`
- **Type:** Next.js Page Component
- **Usage:** Education content page
- **Status:** ✅ Implemented

### Mobile Modules

#### Advanced Knock Module
- **Location:** `advanced-knock-mobile#src/modules/advancedknock/`
- **Structure:**
  - `components/` - UI components
  - `hooks/` - Custom hooks
  - `screens/` - Screen components
  - `stores/` - Zustand stores
  - `types/` - TypeScript types
- **Status:** ✅ Implemented

---

## Component Patterns

### Error Boundary Pattern
- **Platform:** React Native, Next.js
- **Pattern:** Error × Boundary × Resilience × ONE
- **Implementation:** Platform-specific adapters, shared pattern

### API Service Pattern
- **Platform:** React Native, Next.js
- **Pattern:** API × Service × Error × Handling × ONE
- **Implementation:** Unified error handling, retry logic

### Authentication Pattern
- **Platform:** React Native
- **Pattern:** Context × Auth × ONE
- **Implementation:** React Context API

---

## Cross-Repo Component Relationships

### Mobile → Backend
- Mobile components consume backend API routes
- API contracts defined in backend, consumed by mobile

### Frontend → Backend
- Frontend components consume backend API routes
- API contracts defined in backend, consumed by frontend

### Shared Patterns
- Error handling patterns shared across platforms
- API service patterns adapted for each platform
- Authentication patterns platform-specific

---

**Last Updated:** 2025-12-19  
**Maintained By:** Advanced-Knock Organization  
**∞ AbëONE ∞**
