# SA — Solution — web-rmms-home

> Status: **confirmed** · autoApprove ON · task `task_9771aabb` · 2026-09-25T12:20:00.000Z  
> **Cấm** ERP.* · **cấm** invent Home CRUD · **cấm** Step 4b / migration ở role SA.

| | |
|--|--|
| Feature | `web-rmms-home` |
| Title | Home — guest, quick, lưới 6 ô, wallet |
| Role | `sa` |
| packKind | `list` |
| changeScope | `new_page` |
| formPattern | Mobile Home / full · phone max-width 430 · N/A ERP Modal/Slideout · no master form |
| domain | **Notification** (`notification`) · Home chrome Auth + Notification · cite peers |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` · route `/web-rmms-home` |
| mfeStdUrl | `http://localhost:9301/web-rmms-home` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` |
| BFF | Mobile.Bff `http://localhost:5202` · prefix `mobile-bff/api/v1` |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| skillVersion | `2026.09.05.03` |
| solution_confirm | **approve** (autoApprove) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-home/ui/prototype/index.html` |

## 1. Domain / ownership

| Item | Decision |
|------|----------|
| DOMAIN-MAP slug | `web-rmms-home` → **Notification** / `notification` |
| Rationale | Same pattern as `web-rmms-shell`: chrome surface · Live Auth + Notification · no Home domain CRUD |
| Cite peers | Patrol (`/supervise`, `/patrol-map`, Field tab) · Incident (`/incident/new`, Incident tab) · Asset (`/asset`) · Ops Notification (`/ops`) · shell (`/login`, TabBar) · offline peer |
| API folder | **no new** `Domains/Home` · reuse Auth rewrite + Notification domain |
| **Cấm** | invent `api/v1/home/*` · invent shell CRUD · ERP.* |

**DOMAIN-MAP row (applied):**

| Feature slug | Domain Pascal | kebab |
|--------------|---------------|-------|
| `web-rmms-home` | Notification | `notification` · Home chrome Auth+Notification · cite Patrol/Incident/Asset/Ops · MFE `Linm.Web.RMMS.Mobile` `/web-rmms-home` · **cấm** invent Home CRUD |

→ resolves **UNCLEAR-DOMAIN-MAP-HOME**.

## 2. FormMode ↔ API

Home **không** master form / Modal / Slideout. Modes = guest vs staff surface.

| Mode / zone | UI | API | Write | Notes |
|-------------|----|-----|-------|-------|
| Guest HM-01 | FAQ / privacy Static · login CTA | — | nav `/login` (shell) | no Live call |
| Staff HM-02 quick | Patrol point · Incident new | — | Field tab · `/incident/new` | nav-only |
| Staff HM-03 grid×6 | 6 tiles | — | `/supervise` · `/patrol-map` · Work tab · Incident tab · `/asset` · `/offline` | nav-only |
| Staff HM-04 wallet | Asset wallet tile | — | `/asset` | nav-only |
| Staff HM-05 badge | Number RO unread | `GET notification/overview` | tap → `/ops` | Live · empty→0 · error toast **cấm** `alert` |
| Staff HM-06 profile | Text RO displayName | `GET auth/profile` | — | Live · first staff load |
| Auth gate | guest vs staff | session / JWT (shell) | — | Home reads session; login owned by shell |

### Live endpoints (HARD — from real-data §B)

| Method | BFF path (client) | Downstream | Response bind | Status |
|--------|-------------------|------------|----------------|--------|
| GET | `mobile-bff/api/v1/auth/profile` | Auth rewrite Mobile.Bff | `profile.displayName` → HM-06 | **Live** |
| GET | `mobile-bff/api/v1/notification/overview` | Notification | unread count → HM-05 badge | **Live** |

- Client base: `http://localhost:5202` + `mobile-bff/api/v1` — **không** gọi `web-bff` từ Mobile MFE.
- **API Mới:** none · **migration:** none · **entity mới:** none.
- Labels: `useFormOptions()` / LinmCopy `home.*` · **cấm** hardcode VN.

## 3. BFF vs API

| Layer | Role for Home |
|-------|----------------|
| Mobile.Bff `:5202` | sole FE entry · rewrite `auth/*` · proxy `notification/*` |
| RMMS.Service.Api | Notification domain for overview · Auth service for profile — **no Home controller** |
| web-bff | cite only · **not** Mobile client base |

Fail: 503/network → toast + retry optional · badge fallback 0 · profile hide/empty string — **cấm** mock SSOT.

## 4. Entity / migration

| Item | Decision |
|------|----------|
| Tables | none |
| EF migration | **skip** (no schema) |
| Step 4b | **skip** at SA · Dev only if peer gap (not expected) |

## 5. FE surface (SA contract — Dev implements)

| Zone | Contract |
|------|----------|
| HM-00 shell chrome | out — TabBar + login overlay = `web-rmms-shell` |
| HM-01…06 | Home owns · phone 430 · Android icon/layout 1-1 |
| REMOVED | `me*` · feedback · cam-view · Field deep / journal… → a…e |
| GPS | **none** on Home |
| DES-GRID / LinErpListFilterBar | **N/A** phone Home tiles |

## 6. Risks / open

| ID | Status |
|----|--------|
| UNCLEAR-DOMAIN-MAP-HOME | **resolved** — DOMAIN-MAP row added |
| UNCLEAR-STD-PORT | **resolved PO** — `:9301` |
| UNCLEAR-HOME-VS-SHELL | **resolved** — Home HM-* · shell TabBar+login |

## 7. Handoff

| Next | Need |
|------|------|
| team_lead | Tasks: Home page · guest/staff · grid6 nav · wallet · badge+profile Live · no me |
| devSlash | `/agent-dev` |
| qa | Guest/staff · routes · badge · phone 430 · E2E queued `/agent-qa*` |

## Version meta

`skillVersion=2026.09.05.03` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `solution_confirm=approve` · `writtenAt=2026-09-25T12:20:00.000Z`
