# SA — Solution — web-rmms-work

> Status: **confirmed** · autoApprove ON · task `task_f0f9668d` · 2026-09-26T05:05:00.000Z  
> **Cấm** ERP.* · **cấm** invent path/controller `web-rmms-work/*` · **cấm** Step 4b / migration ở role SA · **cấm** Write MFE/native · **cấm** web-bff client base · **cấm** e2e / start:std · **cấm** fake GPS · **cấm** FAB create trên list · **cấm** Me*.

| | |
|--|--|
| Feature | `web-rmms-work` |
| Title | Danh sách công việc |
| Role | `sa` |
| packKind | `list` |
| changeScope | `new_page` |
| formPattern | Mobile list/full · phone max-width 430 · Android 1-1 `#sc-mnt-list` · N/A ERP Modal/Slideout · N/A DES-GRID / LinErpListFilterBar |
| domain | **Maintenance** (`maintenance`) · resource `work-orders` · cite peers progress/log/chat/estimate |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` · mfeStdRoute `/web-rmms-work` |
| mfeStdUrl | `http://localhost:9301/web-rmms-work` |
| productRoute | `/work` · peers `/work/progress?id=` · `/work/log?id=` · `/work/chat?id=` · `/work/estimate/:id` |
| nativeRouteCite | Android `#sc-mnt-list` · SCREENS Tab Work |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` |
| BFF | `Linm.RMMS.Mobile.Bff` `:5202` · prefix `mobile-bff/api/v1` · `VITE_MOBILE_API_URL` |
| contentHash | `sha256:56146b96759461d425413e7e27e31fc1a5a4ed0a5f376f6a526959f62eb62770` |
| skillVersion | `2026.09.05.03` |
| solution_confirm | **approve** (autoApprove) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-work/ui/prototype/index.html#sc-mnt-list` |
| peer | `web-rmms-mnt-progress` · `web-rmms-mnt-log` · `web-rmms-mnt-chat` · estimate · `mnt-list` · `maintenance` |

## 1. Domain / ownership

| Item | Decision |
|------|----------|
| DOMAIN-MAP slug | `web-rmms-work` → **Maintenance** / `maintenance` |
| Rationale | Live surface = `maintenance/work-orders` list + init-data · peer detail/progress/log/messages · no new domain |
| Cite peers | SCREENS Tab Work · TASKS T-W5-01 · mnt-list · progress/log/chat |
| API folder | **reuse** `WorkOrdersController` · Mobile.Bff catch-all — **no new** controller/entity |
| **Cấm** | invent `web-rmms-work/*` · WorkListController · FAB create · Me* · ERP.* · web-bff client · fake GPS · iOS/Android edits |

**DOMAIN-MAP row (applied):**

| Feature slug | Domain Pascal | kebab |
|--------------|---------------|-------|
| `web-rmms-work` | Maintenance | `maintenance` · Live `work-orders` GET/init-data/GET{id} · MFE `Linm.Web.RMMS.Mobile` `/web-rmms-work` · **cấm** invent WorkListController |

## 2. FormMode ↔ API

List **không** master Modal. Modes = WORK-L browse/filter · empty · peer nav (cite).

| Mode / zone | UI | API | Write | Notes |
|-------------|----|-----|-------|-------|
| WORK-L chrome | page shell | — | — | phone 430 · `#sc-mnt-list` |
| search | SearchInput | GET list `?search` | — | live debounce |
| filter.status | Chip | GET list `?status` + init-data | — | FILTER-P1 chips live |
| filter.workType | Chip | GET list `?workType` + init-data | — | FILTER-P1 chips live |
| hub.estimate | HubRow | — | nav estimate | CREATE-FROM peer · no FAB |
| list.card | CardList | GET list items | — | Title/Code/Assignee/Due/Route/Status/% |
| action.progress | IconButton | — | nav `/work/progress?id=` | peer cite GET{id} |
| action.log | IconButton | — | nav `/work/log?id=` | peer |
| action.chat | IconButton | — | nav `/work/chat?id=` | peer · **messages** Live |
| action.estimate | IconButton | — | nav `/work/estimate/:id` | peer |
| empty | EmptyState | `[]` | — | live empty · cấm demo |
| Auth | staff | cite shell profile | — | guest → login |

### Live endpoints (HARD — from real-data §B + WorkOrdersController)

| Method | BFF path (client) | Downstream | Response bind | Status |
|--------|-------------------|------------|----------------|--------|
| GET | `mobile-bff/api/v1/maintenance/work-orders` | Maintenance list | cards · empty | **Live** |
| GET | `mobile-bff/api/v1/maintenance/work-orders/init-data` | Maintenance init | status/workType chips | **Live** |
| GET | `mobile-bff/api/v1/maintenance/work-orders/{id}` | Maintenance detail | peer header prefill | **Live** cite |
| GET | `…/work-orders/{id}/messages` | Maintenance messages | peer WORK-C chat | **Live** cite peer |
| POST | `…/work-orders/{id}/messages` | Maintenance messages | peer chat write | **Live** cite peer |
| POST | `…/work-orders/{id}/progress` | Maintenance progress | peer WORK-P | **Live** cite peer |
| POST | `…/work-orders` | Maintenance create | peer estimate | **Live** cite peer · **không** list |

- Client base: `http://localhost:5202` + `mobile-bff/api/v1` — **không** gọi `web-bff` từ Mobile MFE.
- List query: `search` · `status` · `workType` · `page=1` · `pageSize=50` (optional `routeName`).
- Card bind §B: `Title` · `Code` · `AssigneeName`/`TeamName` · `DueAt` · `RouteName` · `Status` · `ProgressPercent` · `WorkType`.
- Enum cite: status `new`/`in_progress`/`done`/`cancelled` · workType `repair`/`inspect`/`emergency`.
- **API Mới:** none · **migration:** none · **entity mới:** none · **Step 4b:** skip at SA.
- Labels: `useFormOptions()` · **cấm** hardcode VN.
- Fail: toast · **cấm** `window.alert` · **cấm** mock SSOT / demo-json / fake GPS.

### UNCLEAR-MSG-VS-COMMENT (**resolved**)

| Decision | Cite |
|----------|------|
| Chat peer = **messages** | Live `GET/POST api/v1/maintenance/work-orders/{id}/messages` (`WorkOrdersController`) · BFF `work-orders/{id}/messages` |
| **comments** | **không tồn tại** trên Maintenance Live — **cấm** invent `/comments` |
| Scope P1 this slug | WORK-L **nav-only** tới chat · CRUD messages = peer `web-rmms-mnt-chat` |

## 3. BFF vs API

| Layer | Role |
|-------|------|
| Mobile.Bff `:5202` | sole FE entry · proxy `maintenance/work-orders*` · auth rewrite |
| RMMS.Service.Api | existing Maintenance WorkOrders — **no new** WorkList controller |
| web-bff | cite only · **not** Mobile client base |

## 4. Entity / migration

| Item | Decision |
|------|----------|
| Tables | none (reuse WorkOrder + messages entity) |
| EF migration | **skip** |
| Step 4b | **skip** at SA · Dev only if Live gap (not expected) |
| Local | none · no offline queue on list |

## 5. FE surface (SA contract — Dev implements)

| Zone | Contract |
|------|----------|
| WORK-L · `#sc-mnt-list` | phone 430 · Android 1-1 · **cấm** sửa iOS/Android |
| Entry | Tab Work · Home «Công việc» · std `/web-rmms-work` = WORK-L only |
| STD-NEST | product nest `/work/*` · progress/log/chat `?id=` · estimate `/:id` |
| DES-GRID / LinErpListFilterBar | **N/A** phone chips |
| Out | Me* · FAB create · journal B–E · invent controller · Kind E summary · web-bff · ERP |

## 6. Risks / open

| ID | Status |
|----|--------|
| UNCLEAR-DOMAIN-MAP-WORK | **resolved** — row `web-rmms-work` → Maintenance |
| UNCLEAR-MSG-VS-COMMENT | **resolved** — Live **messages** only · **cấm** invent comments |
| FILTER-P1 · PEER-SPLIT · CREATE-FROM · STD-NEST | **closed** prior (PO/Design) |
| GAP-MOB-MNT-PROG-GPS-01 | **carry peer** — progress GPS → Note embed |
| GAP-BFF-MOBILE | **HARD** — Mobile.Bff only · **cấm** Route trên web-bff |

## 7. Handoff

| Next | Need |
|------|------|
| team_lead | Tasks: WORK-L live list+chips · hub estimate · peer nav · reuse GET/init-data · no invent · no FAB · phone 430 |
| devSlash | `/agent-dev` |
| qa | empty · search/filter live · peer nav · no fake · no web-bff · no create FAB · E2E queued `/agent-qa*` |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:56146b96759461d425413e7e27e31fc1a5a4ed0a5f376f6a526959f62eb62770` · `rulesVersion=2026.09.25.2` · `confirmedAt=2026-09-26T05:05:00.000Z` · `solution_confirm=approve`
