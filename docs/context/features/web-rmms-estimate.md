# web-rmms-estimate — Feature Context (MFE Mobile)

> **Slug:** `web-rmms-estimate` · **Domain:** **AiVision** (+ Incident · Maintenance cite)  
> **Phase:** P1 mobile web · **packKind:** `list` · **changeScope:** `new_page` · **demo:** **N/A**  
> **Status:** team_lead confirmed · task `task_3ca4ae28` · next `/agent-dev`  
> **Peer CTX:** `docs/context/features/estimate.md` (desktop/AI panel) · **cấm** reuse ERP Kind B/D làm primary mobile

> **MFE:** `Linm.Web.RMMS.Mobile` · std `/web-rmms-estimate` · phone `max-width: 430px`  
> **BFF HARD:** `Linm.RMMS.Mobile.Bff` · `VITE_MOBILE_API_URL=http://localhost:5202/mobile-bff/api/v1` · **cấm** web-bff client  
> **BE:** `Linm.RMMS.WebService` · Live `api/v1/ai-vision/estimates` · DOMAIN-MAP slug `estimate` → AiVision · row `web-rmms-estimate` (SA closed) · **cấm ERP.***

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Màn **Ước lượng sự cố**: mở từ Incident detail / Work hub → sinh dòng dự toán AI → sửa qty/đơn giá → nháp/xác nhận → **Giao việc** (WO) thủ công |
| Persona | Điều phối · nhà thầu · Ban QLDA · tuần đường |
| Entry | Incident detail «Ước lượng» · Work hub «Giao việc / Ước lượng» · std `/web-rmms-estimate` |
| DoD P1 | Header SC live · `from-incident` · edit lines · draft · confirm · create WO · Mobile.Bff only · **cấm** auto WO |
| Out P1 | Me* · fake GPS · invent Estimate*Controller theo slug · desktop Kind B list primary · UnitPriceCatalog UI P2 · SignalR |

## 2. Routes / screens

| id | productRoute | std mount | Surface |
|----|--------------|-----------|---------|
| EST-F | `/incident/estimate/:id` | `/web-rmms-estimate` (+ query/deep id) | Form ước lượng · lines · footer actions |
| EST-W* | `/work/estimate` · `/work/estimate/:id` | peer work nest | Cùng form · entry từ Work (peer) |

\* Peer work mount: Design/Dev deep-link; **không** invent WorkEstimateController.

## 3. API (Mobile.Bff cite Live)

| Method | Path | Dùng |
|--------|------|------|
| GET | `incident/incidents/{id}` | Header sự cố |
| GET | `ai-vision/estimates/init-data` | status/source/defect/severity lookups |
| POST | `ai-vision/estimates/from-incident/{incidentId}` | Mở / sinh dòng dự toán |
| GET | `ai-vision/estimates/{id}` | Reload detail |
| PUT | `ai-vision/estimates/{id}` | Sửa header + `Lines[]` (Qty · UnitPrice · Amount client/server) |
| POST | `ai-vision/estimates/{id}/draft` | Lưu nháp |
| POST | `ai-vision/estimates/{id}/confirm` | Xác nhận · `Note` optional |
| POST | `maintenance/work-orders` | Giao việc sau confirm · `CreateWorkOrderRequest` |
| POST | `incident/incidents/{id}/assign` | Gán người trên SC (optional) |
| GET | `ai-vision/estimates` | History optional · **không** primary DoD mobile |

GPS: **không** trên estimate (SCREENS).

## 4. Peers / sources

| Source | Note |
|--------|------|
| `SCREENS.md` `/incident/estimate/:id` | SSOT actions |
| `PLAN.md` · TASKS T-W4-06 · T-W5-05 | Estimate screen · work mount |
| `estimate.md` | Peer desktop/AI panel CTX |
| `web-rmms-incident` · `web-rmms-work` | Entry peers |
| DOMAIN-MAP | `estimate` → AiVision · row `web-rmms-estimate` (SA closed) |

## 5. Constraints HARD

- Phone frame 430 · Android 1-1 · **không** ERP Modal/Slideout Kind D desktop primary
- Confirm thủ công · **cấm** auto tạo WO
- Nhãn `useFormOptions()` / copy key — **cấm** hardcode tiếng Việt form
- **Cấm** demo-json / itemsOrDemo ship · **cấm** ERP.* · **cấm** iOS/Android edit
- Canonical path **`ai-vision/estimates`** — **cấm** invent `/api/v1/ai-estimate/*` · **cấm** invent `web-rmms-estimate/*`

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-26T03:38:29.329Z` |
| mobile | — | — | — |
