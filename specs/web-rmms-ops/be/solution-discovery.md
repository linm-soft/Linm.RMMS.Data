# SA — Solution — web-rmms-ops

> Status: **confirmed** · autoApprove ON · task `task_320abfbb` · 2026-09-25T12:45:00.000Z  
> **Cấm** ERP.* · **cấm** invent compose CRUD · **cấm** Step 4b / migration ở role SA · **cấm** Write MFE.

| | |
|--|--|
| Feature | `web-rmms-ops` |
| Title | Thông báo inbox |
| Role | `sa` |
| packKind | `list` |
| changeScope | `new_page` |
| formPattern | Mobile inbox list/full · phone max-width 430 · N/A ERP Modal/Slideout · no master compose |
| domain | **Notification** (`notification`) · inbox + mark-read · overview cite Home |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` · route `/web-rmms-ops` |
| mfeStdUrl | `http://localhost:9301/web-rmms-ops` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` |
| BFF | Mobile.Bff `http://localhost:5202` · prefix `mobile-bff/api/v1` |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| skillVersion | `2026.09.05.03` |
| solution_confirm | **approve** (autoApprove) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-ops/ui/prototype/index.html` |

## 1. Domain / ownership

| Item | Decision |
|------|----------|
| DOMAIN-MAP slug | `web-rmms-ops` → **Notification** / `notification` |
| Alias | slug `ops` already maps Notification — keep; add explicit `web-rmms-ops` for MFE feature id |
| Rationale | Same Notification domain as shell/home · Live inbox + mark-read · no Ops compose domain on mobile P1 |
| Cite peers | Home (`GET notification/overview` badge) · shell (TabBar / auth) · desktop Kind B compose **out** |
| API folder | **no new** `Domains/Ops` · reuse Notification domain |
| **Cấm** | invent `api/v1/ops/*` · invent compose POST/PUT/DELETE · ERP.* |

**DOMAIN-MAP row (applied):**

| Feature slug | Domain Pascal | kebab |
|--------------|---------------|-------|
| `web-rmms-ops` | Notification | `notification` · inbox list + mark-read · cite Home overview · MFE `Linm.Web.RMMS.Mobile` `/web-rmms-ops` · **cấm** invent compose CRUD |

→ resolves **UNCLEAR-DOMAIN-MAP-OPS**.

## 2. FormMode ↔ API

Ops **không** master form / Modal / Slideout. Modes = list surface + mark-read action.

| Mode / zone | UI | API | Write | Notes |
|-------------|----|-----|-------|-------|
| OP-00 phone frame | Layout ≤430 | — | — | Android OpsView 1-1 |
| OP-01 inboxList | List | `GET notification/inbox` | — | page=1 pageSize=50 · empty=[] |
| OP-02 rowTitle | Text RO | inbox item | — | |
| OP-02 rowSentAt | Text RO | inbox item | — | |
| OP-03 rowUnread | Badge/State | inbox item | — | unread visual |
| OP-03 opt priority/type | Text RO | inbox item | — | LOOKUP_STATIC opt |
| OP-04 markRead | Button/Action | — | `POST notification/inbox/{id}/mark-read` | row tap unread = mark-read only · **no** detail P1 |
| OP-05 empty | Static | — | — | copy keys · empty list |
| OP-05 chrome | title/back/refresh | — | nav Home · reload GET | |
| OP-06 notifyBadge | Number RO peer | `GET notification/overview` | peer Home | **not** owned by ops page |

### Live endpoints (HARD — from real-data §B)

| Method | BFF path (client) | Downstream | Response bind | Status |
|--------|-------------------|------------|----------------|--------|
| GET | `mobile-bff/api/v1/notification/inbox` | Notification | items → OP-01…03 | **Live** · query search/status/priority/type/unreadOnly sẵn · **no** filter UI P1 |
| POST | `mobile-bff/api/v1/notification/inbox/{id}/mark-read` | Notification | read-state → OP-03/04 | **Live** |
| GET | `mobile-bff/api/v1/notification/overview` | Notification | unread → peer Home OP-06 | **Live** · cite only |

- Client base: `http://localhost:5202` + `mobile-bff/api/v1` — **không** gọi `web-bff` từ Mobile MFE.
- **API Mới:** none · **migration:** none · **entity mới:** none.
- Labels: `useFormOptions()` / LinmCopy `ops.*` · **cấm** hardcode VN.
- Fail: 503/network → toast + retry · empty→[] · **cấm** `window.alert` · **cấm** demo/mock SSOT.

## 3. BFF vs API

| Layer | Role for Ops |
|-------|----------------|
| Mobile.Bff `:5202` | sole FE entry · proxy `notification/*` |
| RMMS.Service.Api | Notification domain — inbox + mark-read + overview · **no Ops controller** |
| web-bff | cite only (`web-bff/api/v1/notification/*`) · **not** Mobile client base |

## 4. Entity / migration

| Item | Decision |
|------|----------|
| Tables | none (reuse Notification) |
| EF migration | **skip** (no schema) |
| Step 4b | **skip** at SA · Dev only if peer gap (not expected) |

## 5. FE surface (SA contract — Dev implements)

| Zone | Contract |
|------|----------|
| OP-00…05 | Ops owns · phone 430 · Android icon/layout 1-1 |
| OP-06 badge | peer Home · cite overview |
| REMOVED | `me*` · feedback · cam-view · Field deep / journal… → a…e · desktop Kind B compose/KPI |
| GPS | **none** on `/ops` |
| DES-GRID / LinErpListFilterBar | **N/A** phone inbox · no filter UI P1 |
| Detail page | **no** P1 (P2 stub optional) |

## 6. Risks / open

| ID | Status |
|----|--------|
| UNCLEAR-DOMAIN-MAP-OPS | **resolved** — DOMAIN-MAP row `web-rmms-ops` added |
| UNCLEAR-STD-PORT | **resolved PO** — `:9301` |
| UNCLEAR-OPS-DESKTOP-SCOPE | **resolved PO** — Kind B out |
| UNCLEAR-OPS-DETAIL | **resolved PO/Design** — mark-read only · no detail |

## 7. Handoff

| Next | Need |
|------|------|
| team_lead | Tasks: `/ops` inbox page · GET inbox · POST mark-read · empty/chrome · no me · no GPS · cite T-W2-01 |
| devSlash | `/agent-dev` |
| qa | List · mark-read · empty · phone 430 · E2E queued `/agent-qa*` |

## Version meta

`skillVersion=2026.09.05.03` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `solution_confirm=approve` · `writtenAt=2026-09-25T12:45:00.000Z`
