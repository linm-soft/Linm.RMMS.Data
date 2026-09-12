# RMMS — Security & Rate Limiting

> **Review ATTT VN cấp 1–2:** slash **`/review-data-security-l1-l2`** (alias `/review-attt-l1-l2`) — NĐ 85/2016 + TT 12/2022/TT-BTTTT Phụ lục I (cấp 1) / II (cấp 2) · TCVN 11930:2017.  
> **Cấp 3+ / CSDL CQNN / GPS / NĐ 13:** `/review-app-vn-map-law`.  
> Skill: `{RulesRoot}/common/skill/review-data-security-l1-l2/` · map L1 vs L2: `example/tt12-phuluc-map.md`.

## 0. Cấp độ ATTT VN ≠ Layer kỹ thuật trong file này

| Thang | Nghĩa | SSOT |
|-------|--------|------|
| **Cấp độ 1 / 2 ATTT** | Phân loại HTTT (NĐ 85). Yêu cầu cơ bản: Phụ lục I = cấp 1 · Phụ lục II = cấp 2 | `/review-data-security-l1-l2` |
| **Layer 1 / 2 / 3** dưới đây | Defense-in-depth: **mạng / ứng dụng / dữ liệu** — không phải cấp độ luật | File này §1 |
| **P1 / P2** camera live | Wave sản phẩm JPEG vs HLS/WebRTC | `21-CAMERA-HLS-WEBRTC-GATEWAY.md` |

**Dữ liệu theo phụ lục:** cấp 1 = sao lưu (TCVN 5.2.4.1). Cấp 2 = **bảo mật dữ liệu** (6.2.4.1) **+** sao lưu (6.2.4.2) — password thiết bị AEAD, PII cột, TLS, không trả secret GET.  
Thiếu hồ sơ phân loại → **không** ghi “đạt cấp 1/2”. Cấp 1–3 dùng chung lớp bảo vệ đã có (không tắt mã hóa vì “mới cấp 1”).

## 1. Three-Layer Security Model

```
┌─────────────────────────────────────────────────────────────────┐
│                     LAYER 1 — NETWORK                             │
│                                                                  │
│  ┌──────────────────┐    ┌──────────────────┐                   │
│  │  Cloudflare WAF   │    │  Azure DDoS       │                   │
│  │  - Bot detection  │    │  Protection       │                   │
│  │  - Geo-blocking   │    │  Standard/Premium │                   │
│  │  - IP reputation  │    │                    │                   │
│  └────────┬─────────┘    └────────┬───────────┘                   │
│           └───────────┬───────────┘                               │
│                       ▼                                           │
│  ┌──────────────────────────────────────────┐                    │
│  │  Kubernetes Network Policy                │                    │
│  │  - Namespace isolation                    │                    │
│  │  - East-west pod-level firewall           │                    │
│  │  - Only Gateway exposed externally        │                    │
│  └──────────────────────────────────────────┘                    │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                     LAYER 2 — APPLICATION                         │
│                                                                  │
│  ┌──────────────────┐    ┌──────────────────┐                   │
│  │  API Gateway      │    │  JWT Validation   │                   │
│  │  (YARP)           │    │  - access token   │                   │
│  │  - Route guard    │    │    (15 min TTL)   │                   │
│  │  - Rate limit     │    │  - refresh token  │                   │
│  │  - Request size   │    │    (7 day TTL)    │                   │
│  │    cap (50 MB)    │    │  - company_id     │                   │
│  │  - CORS whitelist │    │    claim required  │                   │
│  │  - API key for    │    │  - RSA-256 signing │                   │
│  │    partners       │    │                    │                   │
│  └──────────────────┘    └──────────────────┘                   │
│                                                                  │
│  ┌──────────────────────────────────────────┐                    │
│  │  RBAC (Role-Based Access Control)          │                    │
│  │                                            │                    │
│  │  Roles:                                    │                    │
│  │  ├── Director        (all modules, all area│                    │
│  │  ├── Area Manager    (assigned zones)      │                    │
│  │  ├── Patrol Crew     (own route, own data) │                    │
│  │  ├── Contractor      (assigned work orders)│                    │
│  │  ├── Finance         (contract + budget)   │                    │
│  │  ├── Citizen         (own incidents only)  │                    │
│  │  └── System Admin    (user mgmt, config)   │                    │
│  │                                            │                    │
│  │  Additional scope:                         │                    │
│  │  ├── zoneId          (geographic area)     │                    │
│  │  ├── routeId         (road section)        │                    │
│  │  └── departmentId    (organizational unit) │                    │
│  └──────────────────────────────────────────┘                    │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                     LAYER 3 — DATA                                │
│                                                                  │
│  ┌──────────────────┐    ┌──────────────────┐                   │
│  │  Encryption        │    │  Audit Trail      │                   │
│  │  - TLS 1.3 (transi│    │  - Every CRUD on   │                   │
│  │  - AES-256 at rest │    │    asset/incident  │                   │
│  │    (Postgres TDE)  │    │  - userId, action, │                   │
│  │  - Column-level    │    │    oldValue,       │                   │
│  │    encryption for  │    │    newValue,        │                   │
│  │    PII (citizen    │    │    timestamp, ip    │                   │
│  │    phone/email)    │    │  - Immutable append │                   │
│  └──────────────────┘    └──────────────────┘                   │
│                                                                  │
│  ┌──────────────────────────────────────────┐                    │
│  │  Data Access Logging                       │                    │
│  │  - Who viewed which asset/incident         │                    │
│  │  - Dashboard access frequency              │                    │
│  │  - Report generation logs                  │                    │
│  │  - Export events (Excel/PDF) logged        │                    │
│  └──────────────────────────────────────────┘                    │
└─────────────────────────────────────────────────────────────────┘
```

## 2. Token Types

| Token | Issuer | TTL | Scope | Storage |
|-------|--------|-----|-------|---------|
| Access Token | Auth Service (JWT) | 15 min | Full API access within RBAC | Memory only |
| Refresh Token | Auth Service | 7 days | Obtain new access token | HttpOnly cookie |
| API Key | **Auth Service** (`X-Api-Key` · hash at rest · introspect · **secret = Name**) | 365 days · **enable/disable** (no rotate) | Partner REST + **camera ingest** `camera:ingest` | Auth DB · GET list = metadata only |
| Embed Token | BFF Gateway | 15 min | iFrame dashboard embed | URL param only |
| Device Token | IoT Ingestion | 30 days | Edge device authentication | Device secure storage |
| Citizen Temp Token | Citizen Portal | 24 h | Anonymous incident tracking | LocalStorage |
| Presigned Upload URL | MinIO/Storage Service | 10 min | Single file upload | URL param only |

## 3. Rate Limiting Policy

| Endpoint Group | Limit | Window | Scope | Rationale |
|----------------|-------|--------|-------|-----------|
| `/api/v1/auth/*` | 10 req | 1 min | Per IP | Prevent brute force |
| `/api/v1/asset/*` (read) | 300 req | 1 min | Per user | Normal browsing |
| `/api/v1/asset/*` (write) | 30 req | 1 min | Per user | Batch import possible |
| `/api/v1/ingestion/offline-batch` | 60 req | 1 min | Per device | EOD sync burst |
| `/api/v1/ingestion/realtime` (MQTT) | 1,000 msg | 1 sec | Per device | Real-time streaming |
| `/api/v1/copilot/ask` | 10 req | 1 min | Per user | GPT-4o cost control |
| `/api/v1/report/export` | 5 req | 1 min | Per user | Heavy operation |
| `/api/v1/citizen/incident` (public) | 5 req | 1 min | Per IP | Public endpoint |
| **`POST /api/v1/camera-events/ingest`** (+ alias `/cameras/ingest/isapi`) | **120** req | 1 min | Per **API-key** | ANPR ~3 làn · task `camera-ingest-apikey` |
| same ingest | **60** req | 1 min | Per **IP** | Flood / thiếu key |
| same ingest **401** | **10** fail | 1 min | Per IP | Brute `X-Api-Key` |
| same ingest body | **2 MB** | /req | Per request | JPEG/XML |
| `/api/v1/embed/*` | 100 req | 1 h | Per partner | iFrame dashboard |
| `/api/v1/upload/presign` | 30 req | 1 min | Per user | Photo upload |
| Admin endpoints | 100 req | 1 min | Per user | Admin dashboard |

## 4. PII Protection

| Data | Classification | Protection |
|------|---------------|------------|
| Citizen name | PII | Column-level AES-256 encryption |
| Citizen phone | PII | Column-level AES-256 encryption, masked in UI |
| Citizen email | PII | Column-level AES-256 encryption |
| Citizen photo uploads | Sensitive | MinIO bucket with private ACL, presigned URLs |
| Patrol crew GPS tracks | Operational | Encrypted at rest, accessible only to own department |
| Contractor financial data | Confidential | Encrypted at rest, RBAC Finance only |
| AI model weights | IP | Encrypted at rest, access-controlled Kubernetes secret |
| Audit logs | Compliance | Immutable append, 7-year retention, WORM storage |

## 5. API Gateway Header Flow

```
Client Request
  │
  ├── X-Api-Key: {partner_key | camera ingest key}  ← Auth introspect (`camera:ingest`)
  │   OR
  ├── Authorization: Bearer {access_token} ← User session
  │
  ├── X-Company-Id: {company_code}        ← Multi-tenant routing
  ├── X-Timezone: Asia/Ho_Chi_Minh        ← Date display preference
  │
  ▼
YARP Gateway validates:
  1. Rate limit check
  2. Token/JWT validation
  3. RBAC scope enforcement
  4. Forward to target service with X-User-Id, X-User-Role headers
```

## 6. Incident Response

| Severity | Definition | Response SLA | Notification |
|----------|-----------|-------------|--------------|
| Critical | Data breach, system unavailable | 15 min | Phone call to CTO + Director |
| High | Core service degraded | 1 hour | Slack + SMS to DevOps |
| Medium | Non-core feature degraded | 4 hours | Slack to support team |
| Low | Cosmetic issue, non-blocking | Next business day | Ticket created |
