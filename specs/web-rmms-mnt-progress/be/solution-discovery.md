# SA — Solution — web-rmms-mnt-progress

> Status: **confirmed** · autoApprove ON · task `task_401f070c` · 2026-09-26T05:35:00.000Z  
> **Cấm** ERP.* · **cấm** invent controller/`mnt-progress` path · **cấm** Step 4b / migration ở role SA · **cấm** Write MFE/native · **cấm** web-bff client base · **cấm** e2e / start:std · **cấm** fake GPS · **cấm** MediaUrl trên Progress/Complete body · **cấm** Me*.

| | |
|--|--|
| Feature | `web-rmms-mnt-progress` |
| Title | Tiến độ công việc |
| Role | `sa` |
| packKind | `list` |
| changeScope | `new_page` |
| formPattern | Mobile full/sheet · phone max-width 430 · N/A ERP Modal/Slideout · N/A DES-GRID / LinErpListFilterBar |
| domain | **Maintenance** (`maintenance`) · resource `work-orders` · peer `web-rmms-work` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` · mfeStdRoute `/web-rmms-mnt-progress` |
| mfeStdUrl | `http://localhost:9301/web-rmms-mnt-progress` |
| productRoute | `/work/progress?id=` · entry peer WORK-L |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` |
| BFF | `Linm.RMMS.Mobile.Bff` `:5202` · prefix `mobile-bff/api/v1` · `VITE_MOBILE_API_URL` |
| contentHash | `sha256:a7e3c91b4d2f6801e5a9b0c3d8f1472e6b5a0d9c4e1f2837a6b5c4d3e2f1098a` |
| skillVersion | `2026.09.05.03` |
| solution_confirm | **approve** (autoApprove) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-progress/ui/prototype/index.html` |
| peer | `web-rmms-work` · WORK-L entry · cite progress Live |

## 1. Domain / ownership

| Item | Decision |
|------|----------|
| DOMAIN-MAP slug | `web-rmms-mnt-progress` → **Maintenance** / `maintenance` |
| Rationale | Live surface = `maintenance/work-orders/{id}` + `{id}/progress` + `{id}/complete` + init-data · reuse WorkOrders · no new domain |
| Cite peers | SCREENS `/work/progress` · TASKS T-W5-02 · `web-rmms-work` · real-data §A+§B |
| API folder | **reuse** `WorkOrdersController` · Mobile.Bff catch-all — **no new** controller/entity/DTO fork |
| **Cấm** | invent `mnt-progress/*` · ProgressController · lat/lng/media on Progress body · ERP.* · web-bff client · fake GPS · Me* |

**DOMAIN-MAP row (applied):**

| Feature slug | Domain Pascal | kebab |
|--------------|---------------|-------|
| `web-rmms-mnt-progress` | Maintenance | `maintenance` · Live `work-orders/{id}` GET · POST progress/complete · init-data · GPS→Note · MFE `Linm.Web.RMMS.Mobile` `/web-rmms-mnt-progress` · **cấm** invent ProgressController / MediaUrl on Progress body |

## 2. FormMode ↔ API

Form **không** Modal ERP. Modes = WORK-P prefill · update progress · complete · lookup.

| Mode / zone | UI | API | Write | Notes |
|-------------|----|-----|-------|-------|
| view/prefill | WORK-P header RO | `GET …/work-orders/{id}` | — | Code/Title/Status/Route/WorkType/% |
| update progress | slider + note + CTA | `POST …/{id}/progress` | `ProgressPercent` · `Note?` | GPS **required** · encode Note |
| complete | CTA Hoàn thành | `POST …/{id}/complete` | `Note?` | GPS **required** · server 100% + `done` |
| lookup | badge / workType map | `GET …/work-orders/init-data` | — | list chrome labels |
| GPS | WORK-P-GPS | device geolocation | **no** body field | deny → disable both CTAs · **cấm** fake |
| photoLocalIds | FileMulti local | — | — | P1 local preview only · GAP-MEDIA |

### Live endpoints (HARD — from real-data §B + WorkOrdersController)

| Method | BFF path (client) | Downstream | Request / bind | Status |
|--------|-------------------|------------|----------------|--------|
| GET | `mobile-bff/api/v1/maintenance/work-orders/{id}` | Maintenance detail | header + % prefill | **Live** |
| GET | `mobile-bff/api/v1/maintenance/work-orders/init-data` | Maintenance init | Statuses / WorkTypes | **Live** |
| POST | `mobile-bff/api/v1/maintenance/work-orders/{id}/progress` | Maintenance progress | `{ ProgressPercent, Note? }` | **Live** |
| POST | `mobile-bff/api/v1/maintenance/work-orders/{id}/complete` | Maintenance complete | `{ Note? }` | **Live** |

- Client base: `http://localhost:5202` + `mobile-bff/api/v1` — **không** gọi `web-bff` từ Mobile MFE.
- DTO cite: `ProgressWorkOrderRequest` · `CompleteWorkOrderRequest` · `WorkOrderDto` · `WorkOrderInitDataDto`.
- Server: progress `new`→`in_progress` · complete → `ProgressPercent=100` · `Status=done`.
- GPS: `navigator.geolocation` → append summary vào `Note` · **cấm** lat/lng fields trên body.
- MEDIA P1: `photoLocalIds` local only · **cấm** MediaUrl trên Progress/Complete · GAP-MEDIA Signed = **defer P2** (optional DTO later · **không** invent P1).
- Labels: `useFormOptions()` · badge = list chrome (Chờ xử lý / Đang xử lý / Đã hoàn thành / Đã hủy) · **cấm** hardcode VN.
- Fail: GET 404 toast+back · validate % toast · GPS deny disable CTAs · BFF 503 retry · **cấm** `window.alert` · **cấm** demo-json.
- **API Mới:** none · **migration:** none · **entity mới:** none · **Step 4b:** skip at SA.

## 3. BFF vs API

| Layer | Role |
|-------|------|
| Mobile.Bff `:5202` | sole FE entry · proxy `maintenance/work-orders*` · auth rewrite |
| RMMS.Service.Api | existing Maintenance WorkOrders — **no new** Progress controller |
| web-bff | cite only · **not** Mobile client base |

## 4. Entity / migration

| Item | Decision |
|------|----------|
| Tables | none (reuse WorkOrderEntity) |
| EF migration | **skip** |
| Step 4b | **skip** at SA · Dev only if Live gap (not expected) |
| Local | photoLocalIds preview only · no offline queue P1 |

## 5. FE surface (SA contract — Dev implements)

| Zone | Contract |
|------|----------|
| WORK-P · `#sc-mnt-progress` | phone 430 · prototype 1-1 · **cấm** sửa iOS/Android |
| WORK-P-GPS | gate both CTAs · Note encode |
| Entry | peer WORK-L · std `/web-rmms-mnt-progress` · product `/work/progress?id=` |
| DES-GRID / LinErpListFilterBar | **N/A** phone form |
| Out | WORK-G/C · Me* · feedback · cam-view · journal/kết ca · invent controller · web-bff · ERP |

## 6. Risks / open

| ID | Status |
|----|--------|
| UNCLEAR-GPS-GATE | **CLOSED** (PO) — both CTAs require GPS |
| UNCLEAR-MEDIA | **CLOSED-P1** local · GAP-MEDIA Signed **defer P2** |
| UNCLEAR-LABEL-MAP | **CLOSED** (PO) — list chrome + useFormOptions |
| DOMAIN-MAP | **applied** — row `web-rmms-mnt-progress` → Maintenance |
| GAP-BFF-MOBILE | **HARD** — Mobile.Bff only · **cấm** Route trên web-bff |

## 7. Handoff

| Next | Need |
|------|------|
| team_lead | Tasks: WORK-P Live GET/progress/complete/init-data · GPS→Note both CTAs · local photos · no invent · phone 430 |
| devSlash | `/agent-dev` |
| qa | GPS deny · % validate · complete · no MediaUrl · no web-bff · no fake · E2E queued `/agent-qa*` |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:a7e3c91b4d2f6801e5a9b0c3d8f1472e6b5a0d9c4e1f2837a6b5c4d3e2f1098a` · `rulesVersion=2026.09.25.2` · `confirmedAt=2026-09-26T05:35:00.000Z` · `solution_confirm=approve`
