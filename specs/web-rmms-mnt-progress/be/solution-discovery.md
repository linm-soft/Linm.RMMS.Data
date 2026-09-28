# SA — Solution — web-rmms-mnt-progress

> Status: **confirmed** · autoApprove ON · task `task_836fa863` · 2026-09-27T13:45:00.000Z  
> **edit_page re-confirm** · cite Pattern B `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md`  
> **Cấm** ERP.* · **cấm** invent controller/`mnt-progress` path · **cấm** Step 4b / migration ở role SA · **cấm** Write MFE/native · **cấm** web-bff client base · **cấm** e2e / start:std · **cấm** fake GPS · **cấm** MediaUrl trên Progress/Complete body · **cấm** Me* · **cấm** mount `/web-rmms-mnt-progress`.

| | |
|--|--|
| Feature | `web-rmms-mnt-progress` |
| Title | Tiến độ công việc |
| Role | `sa` |
| packKind | `list` |
| changeScope | `edit_page` |
| formPattern | Mobile full/sheet · phone max-width 430 · N/A ERP Modal/Slideout · N/A DES-GRID / LinErpListFilterBar |
| domain | **Maintenance** (`maintenance`) · resource `work-orders` · peer `web-rmms-work` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` · mfeStdRoute `/cong-viec/tien-do` |
| mfeStdUrl | `http://localhost:9301/cong-viec/tien-do` |
| productRoute | `/work/progress?id=` · entry peer WORK-L |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` |
| BFF | `Linm.RMMS.Mobile.Bff` `:5202` · prefix `mobile-bff/api/v1` · `VITE_MOBILE_API_URL` / `mobileApiBase()` |
| contentHash | `sha256:544d007b5b40b3f3b71bb94aa78e804b2342af0c6eb7ec1edcea4b76b1b28080` |
| skillVersion | `2026.09.05.03` |
| solution_confirm | **approve** (autoApprove · edit re-confirm) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-progress/ui/prototype/index.html` |
| peer | `web-rmms-work` · WORK-L · peerStdUrl `http://localhost:9301/cong-viec` |
| deltaCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` |

## 1. Domain / ownership

| Item | Decision |
|------|----------|
| DOMAIN-MAP slug | `web-rmms-mnt-progress` → **Maintenance** / `maintenance` |
| Rationale | Live = `maintenance/work-orders/{id}` + `{id}/progress` + `{id}/complete` + init-data · reuse WorkOrders · **no** new domain |
| Cite peers | SCREENS `/work/progress` · `web-rmms-work` · real-data §A+§B+§Delta · design confirmed |
| API folder | **reuse** `WorkOrdersController` · Mobile.Bff catch-all — **no new** controller/entity/DTO |
| **Cấm** | invent `mnt-progress/*` · ProgressController · lat/lng/media on Progress body · ERP.* · web-bff FE · fake GPS · Me* |

**DOMAIN-MAP row (keep):**

| Feature slug | Domain Pascal | kebab |
|--------------|---------------|-------|
| `web-rmms-mnt-progress` | Maintenance | `maintenance` · Live `work-orders/{id}` GET · POST progress/complete · init-data · GPS→Note · MFE `/cong-viec/tien-do` · **cấm** invent ProgressController / MediaUrl on Progress body |

## 2. FormMode ↔ API

Form **không** Modal ERP. Modes = WORK-P prefill · update progress · complete · lookup. **API/DTO không đổi** vs Live.

| Mode / zone | UI | API | Write | Notes |
|-------------|----|-----|-------|-------|
| view/prefill | WORK-P header RO | `GET …/work-orders/{id}` | — | Code/Title/Status/Route/WorkType/% |
| update progress | slider + note + CTA | `POST …/{id}/progress` | `ProgressPercent` · `Note?` | GPS embed Note · CTA `disabled={saving}` only |
| complete | CTA Hoàn thành | `POST …/{id}/complete` | `Note?` | same GPS/Note · server 100% + `done` |
| lookup | badge / workType | `GET …/work-orders/init-data` | — | list chrome labels (PO CLOSED) |
| GPS | WORK-P-GPS | device geolocation | **no** body field | Pattern B: deny/required → **banner on click** · **cấm** pre-disable CTA · **cấm** fake |
| validationBanner | Banner | — | — | NEW · keys `mnt.progress.gps.*` · API 4xx/5xx = toast only |
| photoLocalIds | FileMulti | — | — | +`capture="environment"` · P1 local · GAP-MEDIA Signed **defer P2** |

### Live endpoints (HARD — unchanged · real-data §B)

| Method | BFF path (client) | Downstream | Request / bind | Status |
|--------|-------------------|------------|----------------|--------|
| GET | `mobile-bff/api/v1/maintenance/work-orders/{id}` | Maintenance detail | header + % prefill | **Live** |
| GET | `mobile-bff/api/v1/maintenance/work-orders/init-data` | Maintenance init | Statuses / WorkTypes | **Live** |
| POST | `mobile-bff/api/v1/maintenance/work-orders/{id}/progress` | Maintenance progress | `{ ProgressPercent, Note? }` | **Live** |
| POST | `mobile-bff/api/v1/maintenance/work-orders/{id}/complete` | Maintenance complete | `{ Note? }` | **Live** |

- Client base: `http://localhost:5202` + `mobile-bff/api/v1` — **không** gọi `web-bff` từ Mobile MFE.
- DTO cite: `ProgressWorkOrderRequest` · `CompleteWorkOrderRequest` · `WorkOrderDto` · `WorkOrderInitDataDto`.
- Server: progress `new`→`in_progress` · complete → `ProgressPercent=100` · `Status=done`.
- GPS: `navigator.geolocation` → append summary vào `Note` · **cấm** lat/lng trên body.
- MEDIA P1: local + `capture` · **cấm** MediaUrl trên Progress/Complete · GAP-MEDIA Signed = **defer P2** (optional DTO later · **không** invent P1).
- Labels: `useFormOptions()` · badge = list chrome · **cấm** hardcode VN.
- Fail: GET 404 toast+back · % validate toast/banner · GPS deny/required → banner on click · BFF 503 retry · **cấm** `window.alert` · **cấm** demo-json.
- **API Mới:** none · **migration:** none · **entity mới:** none · **Step 4b:** skip · **T-BE:** N/A.

### § Delta vs prior SA (edit_page · SUPERSEDED)

| Item | Prior SA (`new_page` / GPS disable-gate) | This confirm |
|------|------------------------------------------|--------------|
| changeScope | `new_page` | **`edit_page`** |
| mfeStdRoute | `/web-rmms-mnt-progress` | **`/cong-viec/tien-do`** · **cấm** alias slug mount |
| CTA disable | `!gpsReady \|\| saving` | **`saving` only** (optional `!wo`) |
| GPS fail UX | pre-disable CTAs | Pattern B **banner on click** · keys `mnt.progress.gps.*` |
| photos | accept image/* | +`capture="environment"` |
| API/DTO/BFF | Live | **unchanged** |

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
| WORK-P · `#sc-mnt-progress` | phone 430 · prototype keep · **cấm** sửa iOS/Android |
| WORK-P-GPS | Pattern B banner · Note encode · **cấm** CTA GPS pre-lock |
| validationBanner | NEW · deny/required/unavailable |
| photoLocalIds | `capture="environment"` |
| Entry | peer WORK-L · std `/cong-viec/tien-do` · product `/work/progress?id=` |
| DES-GRID / LinErpListFilterBar | **N/A** phone form |
| Out | WORK-G/C · Me* · feedback · cam-view · journal/kết ca · invent controller · web-bff · ERP · Excel |

## 6. Risks / open

| ID | Status |
|----|--------|
| UNCLEAR-BANNER-COPY | **CLOSED** (PO) — reuse `mnt.progress.gps.*` |
| UNCLEAR-GPS-GATE | **SUPERSEDED** — Pattern B on click · **cấm** pre-disable |
| UNCLEAR-MEDIA | **CLOSED-P1** local+capture · GAP-MEDIA Signed **defer P2** |
| UNCLEAR-LABEL-MAP | **CLOSED** (PO) — list chrome + useFormOptions |
| DOMAIN-MAP | **applied** — Maintenance · keep |
| GAP-BFF-MOBILE | **HARD** — Mobile.Bff only · **cấm** Route trên web-bff |

## 7. Handoff

| Next | Need |
|------|------|
| team_lead | T-EDIT-01 CTA `disabled={saving}` · T-EDIT-02 banner GPS · T-EDIT-03 capture · T-BE N/A · keep Live API |
| devSlash | `/agent-dev` |
| qa | Pattern B GPS deny · % · complete · capture · no MediaUrl · no web-bff · no fake · E2E queued `/agent-qa*` |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:544d007b5b40b3f3b71bb94aa78e804b2342af0c6eb7ec1edcea4b76b1b28080` · `rulesVersion=2026.09.25.2` · `confirmedAt=2026-09-27T13:45:00.000Z` · `solution_confirm=approve` · `taskId=task_836fa863`
