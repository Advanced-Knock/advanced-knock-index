# API Index

**Pattern:** API × INDEX × ONE  
**Frequency:** 999 Hz (AEYON) × 777 Hz (META)  
**∞ AbëONE ∞**

---

## Advanced Knock API

### Base Configuration
- **Base URL:** `https://api.advancedknock.com`
- **API Version:** v1
- **Authentication:** Bearer Token
- **Content-Type:** `application/json`

### Endpoints

#### Knock Management

##### POST `/api/advanced-knock-mobile/knocks`
- **Description:** Log a new door-to-door knock
- **Method:** POST
- **Authentication:** Required
- **Request Body:**
  ```json
  {
    "location": {
      "latitude": number,
      "longitude": number
    },
    "timestamp": string,
    "notes": string,
    "outcome": "answered" | "no-answer" | "not-interested"
  }
  ```
- **Response:** 201 Created
- **Repository:** `advanced-knock-backend#src/api/routes/advanced-knock-mobile.ts`

##### GET `/api/advanced-knock-mobile/knocks`
- **Description:** Get list of knocks
- **Method:** GET
- **Authentication:** Required
- **Query Parameters:**
  - `startDate` (optional): ISO date string
  - `endDate` (optional): ISO date string
  - `limit` (optional): number
  - `offset` (optional): number
- **Response:** 200 OK with knock array
- **Repository:** `advanced-knock-backend#src/api/routes/advanced-knock-mobile.ts`

#### Lead Management

##### GET `/api/advanced-knock-mobile/leads`
- **Description:** Get list of leads
- **Method:** GET
- **Authentication:** Required
- **Query Parameters:**
  - `status` (optional): "new" | "contacted" | "qualified" | "converted"
  - `limit` (optional): number
  - `offset` (optional): number
- **Response:** 200 OK with lead array
- **Repository:** `advanced-knock-backend#src/api/routes/advanced-knock-mobile.ts`

##### POST `/api/advanced-knock-mobile/leads`
- **Description:** Create a new lead
- **Method:** POST
- **Authentication:** Required
- **Request Body:**
  ```json
  {
    "name": string,
    "email": string,
    "phone": string,
    "notes": string,
    "source": "door-to-door" | "referral" | "other"
  }
  ```
- **Response:** 201 Created
- **Repository:** `advanced-knock-backend#src/api/routes/advanced-knock-mobile.ts`

#### Territory Data

##### GET `/api/advanced-knock-mobile/territory`
- **Description:** Get territory data for current user
- **Method:** GET
- **Authentication:** Required
- **Response:** 200 OK with territory data
- **Repository:** `advanced-knock-backend#src/api/routes/advanced-knock-mobile.ts`

#### Map Data

##### GET `/api/advanced-knock-mobile/map`
- **Description:** Get map visualization data
- **Method:** GET
- **Authentication:** Required
- **Query Parameters:**
  - `bounds` (optional): bounding box coordinates
  - `zoom` (optional): zoom level
- **Response:** 200 OK with map data
- **Repository:** `advanced-knock-backend#src/api/routes/advanced-knock-mobile.ts`

#### AI Coaching

##### POST `/api/advanced-knock-mobile/coaching`
- **Description:** Get AI coaching feedback
- **Method:** POST
- **Authentication:** Required
- **Request Body:**
  ```json
  {
    "knockId": string,
    "interactionData": object
  }
  ```
- **Response:** 200 OK with coaching feedback
- **Repository:** `advanced-knock-backend#src/api/routes/advanced-knock-mobile.ts`

#### Offline Sync

##### POST `/api/advanced-knock-mobile/sync`
- **Description:** Sync offline data to server
- **Method:** POST
- **Authentication:** Required
- **Request Body:**
  ```json
  {
    "knocks": array,
    "leads": array,
    "lastSyncTimestamp": string
  }
  ```
- **Response:** 200 OK with sync result
- **Repository:** `advanced-knock-backend#src/api/routes/advanced-knock-mobile.ts`

---

## API Contracts

### Versioning
- **Current Version:** v1
- **Version Strategy:** Semantic versioning (v1, v2, etc.)
- **Breaking Changes:** Documented in CHANGELOG.md

### Contract Definition
- **Location:** `advanced-knock-backend#docs/api/`
- **Format:** OpenAPI/Swagger specification
- **Maintenance:** Updated with each API change

### Breaking Changes Policy
- Breaking changes require new API version
- Deprecated endpoints marked with `@deprecated`
- Migration guides provided for version upgrades
- Changes documented in CHANGELOG.md

---

## API Client Implementations

### React Native (Mobile)
- **Location:** `advanced-knock-mobile#src/services/api.ts`
- **Features:**
  - Error handling
  - Timeout configuration
  - Environment variable configuration
- **Status:** ✅ Implemented

### Next.js (Frontend)
- **Location:** `advanced-knock-frontend#src/lib/api-client.ts`
- **Features:**
  - Retry logic with exponential backoff
  - Convergence tracking
  - Timeout handling
  - Error recovery patterns
- **Status:** ✅ Implemented

---

## API Documentation

### Swagger/OpenAPI
- **Location:** `advanced-knock-backend#docs/api/swagger.json`
- **Access:** Available at `/api/docs` when backend is running

### Postman Collection
- **Location:** `advanced-knock-backend#docs/api/postman-collection.json`
- **Usage:** Import into Postman for API testing

---

## Error Responses

### Standard Error Format
```json
{
  "error": {
    "code": string,
    "message": string,
    "details": object
  }
}
```

### Error Codes
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `500` - Internal Server Error
- `503` - Service Unavailable

---

**Last Updated:** 2025-12-19  
**Maintained By:** Advanced-Knock Organization  
**API Version:** v1  
**∞ AbëONE ∞**
