# SA — Solution — web-rmms-mnt-log

> Status: **confirmed** · autoApprove ON · task `task_591b3de1` · 2026-09-26T06:10:00.000Z  
> **Cấm** ERP.* · **cấm** invent controller/`mnt-log`/`…/logs` · **cấm** Step 4b / migration ở role SA · **cấm** Write MFE/native · **cấm** web-bff client base · **cấm** e2e / start:std · **cấm** fake GPS · **cấm** POST trên slug · **cấm** Me*.

| | |
|--|--|
| Feature | `web-rmms-mnt-log` |
| Title | Nhật ký công việc |
| Role | `sa` |
| packKind | `list` |
| changeScope | `new_page` |
| formPattern | Mobile full/sheet · phone max-width 430 · N/A ERP Modal/Slideout · N/A DES-GRID / LinErpListFilterBar |
| domain | **Maintenance** (`maintenance`) · resource `work-orders` · peer `web-rmms-work` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` · mfeStdRoute `/web-rmms-mnt-log` |
| mfeStdUrl | `http://localhost:9301/web-rmms-mnt-log` |
| productRoute | `/work/log?id=` · entry peer WORK-L |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` |
| BFF | `Linm.RMMS.Mobile.Bff` `:5202` · prefix `mobile-bff/api/v1` · `VITE_MOBILE_API_URL` |
| contentHash | `sha256:c1d8e4f2a90b6c3d5e7f8192a3b4c5d6e7f8091a2b3c4d5e6f708192a3b4c5d6` |
| skillVersion | `2026.09.05.03` |
| solution_confirm | **approve** (autoApprove) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-log/ui/prototype/index.html` |
| peer | `web-rmms-work` · WORK-L entry · cite progress/chat Live (write peers) |

## 1. Domain / ownership

| Item | Decision |
|------|----------|
| DOMAIN-MAP slug | `web-rmms-mnt-log` → **Maintenance** / `maintenance` |
| Rationale | Live surface = `maintenance/work-orders/{id}` + init-data · timeline = **client-derive** Signed `WorkOrderDto` · no new domain / history API |
| Cite peers | SCREENS WORK-G `/work/log` · TASKS T-W5-03 · `web-rmms-work` · `web-rmms-mnt-progress` · real-data §A+§B |
| API folder | **reuse** `WorkOrdersController` · Mobile.Bff catch-all — **no new** controller/entity/DTO fork |
| **Cấm** | invent `mnt-log/*` · `…/logs` · `WorkOrderProgress` history controller · ERP.* · web-bff client · fake GPS · Me* · POST on this slug |

**DOMAIN-MAP row (applied):**

| Feature slug | Domain Pascal | kebab |
|--------------|---------------|-------|
| `web-rmms-mnt-log` | Maintenance | `maintenance` · Live `work-orders/{id}` GET · init-data · client-derive timeline · MFE `Linm.Web.RMMS.Mobile` `/web-rmms-mnt-log` · **cấm** invent `/logs` · LogController · POST on nhật ký |

## 2. FormMode ↔ API

Form **không** Modal ERP. Modes = WORK-G prefill · client-derive timeline · lookup. **Write = N/A.**

| Mode / zone | UI | API | Write | Notes |
|-------------|----|-----|-------|-------|
| view/prefill | WORK-G header RO | `GET …/work-orders/{id}` | — | Code/Title/Status/Route/WorkType |
| derive | timeline rows | **none** (after GET OK) | — | P1 client-derive Signed DTO · newest-first |
| lookup | badge / workType map | `GET …/work-orders/init-data` | — | Statuses / WorkTypes · useFormOptions |
| write | — | **N/A** | — | progress/complete/messages = peers only |
| GPS | — | — | — | **không** capture trên WORK-G · **cấm** fake |

### Live endpoints (HARD — from real-data §B + WorkOrdersController)

| Method | BFF path (client) | Downstream | Request / bind | Status |
|--------|-------------------|------------|----------------|--------|
| GET | `mobile-bff/api/v1/maintenance/work-orders/{id}` | Maintenance detail | header + derive source | **Live** |
| GET | `mobile-bff/api/v1/maintenance/work-orders/init-data` | Maintenance init | Statuses / WorkTypes | **Live** |

- Client base: `http://localhost:5202` + `mobile-bff/api/v1` — **không** gọi `web-bff` từ Mobile MFE.
- DTO cite: `WorkOrderDto` · `WorkOrderInitDataDto` — **không** invent history DTO.
- **UNCLEAR-HIST-API CLOSED (P1):** timeline = client-derive only từ Signed fields: `CreatedAt` · `DueAt?` · `Description` · `ProgressPercent` · `Note` · `UpdatedAt` · `Status`. Sort **newest-first**. **Cấm** invent `GET …/logs` / progress-history table API.
- Derive row map (Dev contract):
  - `row.created` ← `CreatedAt`
  - `row.due` ← `DueAt` (omit if unset)
  - `row.description` ← `Description` (omit if empty)
  - `row.progress` ← `ProgressPercent` + `UpdatedAt` + status context
  - `row.note` ← `Note` + `UpdatedAt` (omit if empty)
  - `row.done` ← when `Status=done` · stamp `UpdatedAt`
- Labels: `useFormOptions()` · init-data SSOT · **cấm** hardcode VN · **cấm** Me*.
- Fail: thiếu `id` → empty «Chưa có nhật ký» + back · GET 404 empty+toast+back · BFF 503 retry · timeline 0 rows → empty copy · **cấm** `window.alert` · **cấm** demo-json.
- Entry: mọi status khi có `id` (PO CLOSED) · peer WORK-L.
- **API Mới:** none · **migration:** none · **entity mới:** none · **Step 4b:** skip at SA.

## 3. BFF vs API

| Layer | Role |
|-------|------|
| Mobile.Bff `:5202` | sole FE entry · proxy `maintenance/work-orders*` · auth rewrite |
| RMMS.Service.Api | existing Maintenance WorkOrders — **no new** Log/History controller |
| web-bff | cite only · **not** Mobile client base |

## 4. Entity / migration

| Item | Decision |
|------|----------|
| Tables | none (reuse WorkOrderEntity / `WorkOrderDto`) |
| EF migration | **skip** |
| Step 4b | **skip** at SA · Dev only if Live gap (not expected) |
| Local | no offline queue P1 · no GPS · no write |

## 5. FE surface (SA contract — Dev implements)

| Zone | Contract |
|------|----------|
| WORK-G · `#sc-mnt-log` · DES-MOB-MNT-LOG | phone 430 · prototype 1-1 · **cấm** sửa iOS/Android |
| timeline | client-derive · newest-first · RO only |
| emptyState | thiếu id / GET fail / 0 rows |
| Entry | peer WORK-L · std `/web-rmms-mnt-log` · product `/work/log?id=` |
| DES-GRID / LinErpListFilterBar | **N/A** phone timeline |
| Out | progress/chat/estimate · Me* · feedback · cam-view · journal/kết ca · invent `/logs` · web-bff · ERP · POST CTA |

## 6. Risks / open

| ID | Status |
|----|--------|
| UNCLEAR-HIST-API | **CLOSED** — P1 client-derive only · **cấm** invent `/logs` |
| GAP-MOB-MNT-LOG-HIST-01 | **CLOSED** — same as HIST-API |
| GAP-MOB-MNT-LOG-DMAP-01 | **CLOSED** — DOMAIN-MAP row applied |
| UNCLEAR-ENTRY / SORT / LABEL-MAP | **CLOSED** (PO/Design) |
| GAP-MOB-MNT-LOG-LABEL-01 | **Dev** — map init-data + useFormOptions (Design closed) |
| GAP-BFF-MOBILE | **HARD** — Mobile.Bff only · **cấm** Route trên web-bff |

## 7. Handoff

| Next | Need |
|------|------|
| team_lead | Tasks: WORK-G Live GET/{id}+init-data · client-derive timeline newest-first · empty/fail · no invent `/logs` · no POST · phone 430 |
| devSlash | `/agent-dev` |
| qa | missing id · GET 404 · derive sort · no web-bff · no fake GPS · no POST · E2E queued `/agent-qa*` |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:c1d8e4f2a90b6c3d5e7f8192a3b4c5d6e7f8091a2b3c4d5e6f708192a3b4c5d6` · `rulesVersion=2026.09.25.2` · `confirmedAt=2026-09-26T06:10:00.000Z` · `solution_confirm=approve`
