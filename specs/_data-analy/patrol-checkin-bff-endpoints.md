# BFF endpoints — patrol-checkin (mobile · Ghi điểm tuần)

| | |
|---|---|
| feature | `patrol-checkin` |
| bff | `Linm.RMMS.Mobile.Bff` · `MobileApiProxyController` catch-all |
| prefix | `mobile-bff/api/v1` |
| downstream | `ApiBase` → `RMMS.Service.Api` · Patrol |
| source | CTX `patrol-checkin.md` · `patrol.md` §3 · `PatrolSessionsController` |
| **cấm** | invent `api/v1/patrol-checkin` · ERP.* · app `:5101` · DbContext trên BFF |

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`.

## Như thế nào (skill step 6)

| Tầng | Repo / package | App có biết? |
|------|----------------|--------------|
| UI | iOS + Android | Có — `{BffPrefix}` |
| BFF host | `Linm.RMMS.Mobile.Bff` | Có — một host |
| Domain API | `RMMS.Service.Api` · Patrol | **Không** — proxy rewrite |
| Dedicated CheckInController | **chưa** | Kind E path CTX — **GAP-MOB-BFF-01** |

## Table — `#sheet-checkin` · `DES-MOB-PAT-CHECKIN-SHEET`

| Action / zone | Method | `{BffPrefix}` path | BFF | Downstream | Source | Gap |
|---------------|--------|--------------------|-----|------------|--------|-----|
| Prefill Route / active / CheckInCount | GET | `patrol/sessions` | proxy | `PatrolSessionsController.GetList` | CTX live | filter «Đang tuần» client |
| Prefill detail session | GET | `patrol/sessions/{id}` | proxy | `GetById` | CTX live | |
| Submit Ghi nhận / Lưu | POST | `patrol/sessions/{id}/check-ins` | proxy | **không** action trên controller | CTX Kind E `patrol.md` §3 | **GAP-MOB-BFF-01** · T-BE SA/TL |
| GPS fix / distance | — | — | — | Device CL / Fused | demo banner | **không** API pin |
| Camera attach | — | — | — | Device camera · local URI | photo-row | upload P2 nếu BE có media |
| Offline queue | — | — | — | local → sibling `patrol-offline` | | **không** invent path |
| Leave / cancel | — | — | — | local UI | `DES-MOB-LEAVE` | **không** API |

## Query (list) — passthrough

`search` · `status` · `route` · `page` · `pageSize`  
Mobile P1: lấy session `Status=Đang tuần` · `page=1` · `pageSize=50`.

## DTO (session — bind prefill)

`PatrolSessionDto`: `Id` · `Code` · `Route` · `Status` · `CheckInCount` · `CoveragePercent` · `StartedAt` · `Note` · …

## Body (POST check-ins — CTX Kind E · **chưa** schema live)

Khi SA/TL tạo controller — đề xuất field khớp sheet (**không** ship invent DTO app-only):

| Field | UI |
|-------|-----|
| `planPointLabel` | Điểm kế hoạch |
| `route` / chainage | Tuyến / lý trình |
| `lat` · `lng` · `accuracyM` | Định vị ghim |
| `distanceToPlanM` · `matchOk` | Cách điểm KH / banner |
| `content` | Nội dung |
| `photoLocalIds[]` | Ảnh (P1 local · sync offline) |

**Cấm** app fork DTO khác BFF table.

## Có trên domain — **không** thuộc slug này

| Method | Path | Ghi |
|--------|------|-----|
| POST/PUT/DELETE | `patrol/sessions` | web / list pack CRUD — **OUT** sheet |
| POST | `patrol/sessions/{id}/tracks` | Kind E map — sibling |
| GET | `…/coverage` · `…/kpi` | Kind E — **OUT** |
| POST | `patrol/attendance-logs` | sibling `attendance` |

## Verify live

| Check | Result |
|-------|--------|
| `GET api/v1/patrol/sessions` | **Live** |
| `GET api/v1/patrol/sessions/{id}` | **Live** |
| `POST …/check-ins` | **MISSING** trên `PatrolSessionsController` → **GAP-MOB-BFF-01** |
| `PatrolCheckInController` / `api/v1/patrol-checkin` | **không** — **cấm invent** |

## Step 4b

**Pending SA/TL** — thiếu schema/controller check-ins · **cấm** data-analy chạy migration / Step 4b (roleOnly). Ghi GAP · handoff PO → SA.

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-08-28T19:52:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:patrol-checkin-mobile-bff-20260828 |
| bffContentHash | sha256:patrol-checkin-mobile-bff-20260828 |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
