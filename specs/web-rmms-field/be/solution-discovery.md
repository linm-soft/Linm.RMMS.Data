# SA — Solution — web-rmms-field

> Status: **confirmed** · autoApprove ON · task `task_e96a2d83` · 2026-09-26T02:20:00.000Z  
> **Cấm** ERP.* · **cấm** invent FieldController / hub POST-PUT · **cấm** Step 4b / migration ở role SA · **cấm** Write MFE/native · **cấm** web-bff client base · **cấm** e2e / start:std.

| | |
|--|--|
| Feature | `web-rmms-field` |
| Title | Hub Field — chrome native và hai lối |
| Role | `sa` |
| packKind | `list` |
| changeScope | `new_page` |
| formPattern | Mobile Field hub / full · phone max-width 430 · N/A ERP Modal/Slideout · no master form |
| domain | **Patrol** (`patrol`) · hub chrome · cite peers (A…E · attendance · NT · cam · reflect · offline · supervise · map) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` · route `/web-rmms-field` · productRoute `/field*` |
| mfeStdUrl | `http://localhost:9301/web-rmms-field` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` |
| BFF | `Linm.RMMS.Mobile.Bff` `:5202` · prefix `mobile-bff/api/v1` · `VITE_MOBILE_API_URL` |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| skillVersion | `2026.09.05.03` |
| solution_confirm | **approve** (autoApprove) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field/ui/prototype/index.html` |

## 1. Domain / ownership

| Item | Decision |
|------|----------|
| DOMAIN-MAP slug | `web-rmms-field` → **Patrol** / `patrol` |
| Rationale | Field hub = Patrol chrome · Live badge only via existing `PatrolSessionsController` GET list · deep CRUD owned by peers |
| Cite peers | `web-rmms-mobile-a` (doors deep) · `web-rmms-offline` (sync) · `web-rmms-attendance` · `web-rmms-nghiem-thu` · `web-rmms-cam-patrol` · field-reflect · supervise · patrol-map · mobile-b…e |
| API folder | **reuse** `PatrolSessionsController` GET · Mobile.Bff proxy `patrol/*` — **no new** Field domain/controller |
| **Cấm** | invent `api/v1/field/*` · FieldController · hub POST/PUT sessions · ERP.* · GPS on hub · hardcode VN labels · web-bff as Mobile client |

**DOMAIN-MAP row (applied):**

| Feature slug | Domain Pascal | kebab |
|--------------|---------------|-------|
| `web-rmms-field` | Patrol | `patrol` · Live `GET sessions` badge only · hub mount doors; deep=A · MFE `Linm.Web.RMMS.Mobile` `/web-rmms-field` · **cấm** invent FieldController / hub write |

→ resolves **UNCLEAR-DOMAIN-MAP-FIELD**.

## 2. FormMode ↔ API

Field hub **không** master form / Modal / Slideout. Modes = chrome + nav + optional Live badge.

| Mode / zone | UI | API | Write | Notes |
|-------------|----|-----|-------|-------|
| FL-00 chrome | page shell | — | — | phone 430 · Android/iOS Field home 1-1 |
| FL-01 doors | doorPatrol / doorInspect Button/Nav | optional `GET patrol/sessions` filter type+active | nav peer A (`tuan-duong` / `tuan-kiem`) | hub mount doors · deep=A · **cấm** duplicate CRUD |
| FL-02 sync | syncBtn + badge Number RO | — (local queue count) | nav `/field/offline` → peer offline | badge 0=ẩn |
| FL-03 tiles×7 | peer nav Buttons | — | attendance / history / NT / cam / reflect / supervise / map | peer owners |
| sessionHint | Text RO ca active | `GET patrol/sessions?pageSize=50` | — | Live · empty→no hint · error toast **cấm** `alert` |
| GPS | — | — | — | **none** on hub · deep peer only |
| Auth | staff | JWT shell | guest → login | cite shell |

### Live endpoints (HARD — from real-data §B)

| Method | BFF path (client) | Downstream | Response bind | Status |
|--------|-------------------|------------|----------------|--------|
| GET | `mobile-bff/api/v1/patrol/sessions?pageSize=50` | PatrolSessionsController list | door badges (optional filter) · sessionHint | **Live** |

- Client base: `http://localhost:5202` + `mobile-bff/api/v1` — **không** gọi `web-bff` từ Mobile MFE.
- **API Mới:** none · **migration:** none · **entity mới:** none · **Step 4b:** skip at SA.
- Writes: **nav-only** · POST/PUT sessions = peer A owner · sync replay = peer offline.
- Labels: `useFormOptions()` / LinmCopy `tab.field` · **cấm** hardcode VN.
- Fail: empty doors no badge · toast + retry · **cấm** mock SSOT / demo-json.

## 3. BFF vs API

| Layer | Role for Field hub |
|-------|-------------------|
| Mobile.Bff `:5202` | sole FE entry · proxy `patrol/sessions` |
| RMMS.Service.Api | existing Patrol sessions GET — **no Field controller** |
| web-bff | cite only · **not** Mobile client base |

## 4. Entity / migration

| Item | Decision |
|------|----------|
| Tables | none (reuse PatrolSessions) |
| EF migration | **skip** |
| Step 4b | **skip** at SA · Dev only if Live gap (not expected) |

## 5. FE surface (SA contract — Dev implements)

| Zone | Contract |
|------|----------|
| FL-00…03 | Field owns · phone 430 · Android/iOS Field home parity |
| Doors | hub mount · deep CRUD = `web-rmms-mobile-a` |
| Sync + tiles | nav peers only · local queue badge |
| REMOVED | hub CRUD · GPS capture · Me tabs · invent Field API |
| DES-GRID / LinErpListFilterBar | **N/A** phone Field hub |
| Route | `mfeStdRoute=/web-rmms-field` · `:9301` |

## 6. Risks / open

| ID | Status |
|----|--------|
| UNCLEAR-DOMAIN-MAP-FIELD | **resolved** — DOMAIN-MAP row added |
| UNCLEAR-HUB-VS-A | **resolved PO** — hub mount doors; deep=A |
| UNCLEAR-STD-PORT | **resolved PO** — `:9301` |

## 7. Handoff

| Next | Need |
|------|------|
| team_lead | Tasks: FL hub scaffold · 2 doors nav A · sync+badge · tiles×7 · Live GET sessions badge · no hub write · no GPS |
| devSlash | `/agent-dev` |
| qa | doors · tiles · badge empty/error · phone 430 · no GPS · E2E queued `/agent-qa*` |

## Version meta

`skillVersion=2026.09.05.03` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `solution_confirm=approve` · `writtenAt=2026-09-26T02:20:00.000Z`
