# Data-analy — controlHint — its-anpr-overload (Kind B list + Kind D HITL)

| Field | Value |
|-------|-------|
| feature | `its-anpr-overload` |
| packKind | `ai` |
| featureClass | `ai` |
| mode | `feature_context` (new_page · no Excel DI) |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.15.19` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.16.02` |
| rulesVersion | `2026.08.16.05` |
| versionGate | `ok` |
| contentHash | `sha256:1f4dd23743c5d0f6817c81618c062bb6a82efc9f7a665f73150e101a200b1865` |
| analyzedAt | `2026-08-17T09:20:00.000Z` |
| updatedAt | `2026-08-17T09:20:00.000Z` |
| taskId | `task_7cd54ec8` |
| changeScope | `new_page` |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** lookup API.  
> **≠** `its-traffic-detect` (biển báo/cọc) · `ai-vision` (ổ gà) · `ai-asset-detect` (Asset).  
> **Cấm** badge/tag `AI` trên header/`beforeToolbar` (ai-chrome-skip).

## Sources

| Source | Path | sha256 |
|--------|------|--------|
| Context | `docs/context/features/its-anpr-overload.md` | `1f4dd23743c5d0f6817c81618c062bb6a82efc9f7a665f73150e101a200b1865` |
| P2 Spec | `docs/context/18-ITS-ANPR-OVERLOAD-SPEC.md` | — |
| Demo page | `Linm.RMMS.Demo/src/demo/ai-vision/its-anpr-overload.html` | `59fb917306bb96e8e487821e04ed8fb07e70d4c4c8c78e3a573ca664cec424c1` |
| Demo data | `…/js/its-anpr-overload-data.js` | `8ef91d24f0613f3ab80a215604e08893be55f9186714fa2947150aa54956a06a` |
| Demo app | `…/js/its-anpr-overload-app.js` | `70ad8bbda08cd1f60e3d0b9ad6d54723c31e432366c8f9eb5fabdea59a96af22` |

## Kind / zones (handoff Design)

| Zone | Pattern | DoD |
|------|---------|-----|
| A | Header + toolbar | title «ITS ANPR · Quá tải / tốc độ» — **cấm** badge `AI` · Mô phỏng bắt mới · Tra cứu · Xác nhận · Refresh · Config · +Tạo |
| B | Filter | Camera Dropdown · Status Dropdown · SearchInput biển số — **search must work** |
| C | `LinCatalogDataGrid` | kéo cột default ON · row menu Xem/Sửa/Copy/Confirm/Dismiss/Lịch sử/Xóa |
| D | Footer | `LinCatalogListPagination` — **cấm** footerPagination / raw table footer |
| Detail | Panel / S-DETECT | ① Camera · ② Đăng kiểm · ③ Violations (sau select + lookup) |
| Form | Kind D slideout | Confirm/Dismiss HITL · actions **footer only** · leave-confirm dirty |
| KPI | Optional strip | Total · Pending · Critical · Confirmed |

**Screens:** S-LIST · S-DETECT (detail+lookup+rule) · S-MAP **DEFER** (không pin map trên demo ANPR).

## Control hint — list filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm biển số | `SearchInput` | text | plate · id (`ANPR-*`) |
| cameraId | Camera | `Dropdown` | enum | `all` + CAM-* seed |
| status | Trạng thái | `Dropdown` | enum | Tất cả · Pending · Confirmed · Dismissed |

## Control hint — list columns (schema seed)

| Field key | Label | controlHint | list default |
|-----------|-------|-------------|--------------|
| code | Mã | `Text` | visible · sort · `ANPR-*` |
| plate | Biển số | `Text` | visible · sort |
| speedKmh | Tốc độ | `Text` (number) | visible · show vs limit |
| wimKg | WIM | `Text` (number) | visible · kg |
| cameraLabel | Camera | `Text` | visible · km |
| capturedAt | Lúc | `Date` | visible · sort |
| status | TT | `Dropdown` | visible · sort |
| severity | Mức lỗi | `Dropdown` | visible · ok/warn/critical |

## Control hint — form / HITL fields (Kind D)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã sự kiện | `Text` | auto | `ANPR-*` readonly |
| plate | Biển số | `Text` | * | |
| cameraId | Camera | `Dropdown` | * | |
| speedKmh | Tốc độ (km/h) | `Text` (number) | * | |
| wimKg | WIM (kg) | `Text` (number) | | optional |
| confidence | Confidence | `Text` (number) | | 0–1 · UI % |
| capturedAt | Thời điểm | `Date` | * | |
| status | Trạng thái | `Dropdown` | * | Pending/Confirmed/Dismissed |
| owner | Chủ xe | `Text` | | registry · readonly |
| vehicleType | Loại xe | `Text` | | registry |
| axleCount | Số trục | `Text` (number) | | registry |
| axleConfig | Cấu hình trục | `Text` | | registry |
| gvwMaxKg | GVW max | `Text` (number) | | registry |
| payloadMaxKg | Payload max | `Text` (number) | | registry |
| curbWeightKg | Tự trọng | `Text` (number) | | registry |
| inspectExpire | Hạn kiểm | `Date` | | registry |
| violationCodes | Mã lỗi | `Text` | | SPEED · OVERLOAD_* · NO_REGISTRY · readonly |
| note | Ghi chú HITL | `Text` | | multiline · dirty leave-confirm |
| incidentId | Mã Vấn đề | `Text` | | readonly sau Confirm |

## Lookup APIs (đề xuất SA — **chưa chốt**)

Domain **AiVision** · prefix `api/v1/ai-vision` · BFF `web-bff/api/v1/ai-vision` · repo `Linm.RMMS.WebService` · **cấm ERP.***  
Spec P2 `/its/anpr/*` → **normalize** dưới AiVision: `api/v1/ai-vision/anpr/events`.

| Lookup | API | controlHint consumer |
|--------|-----|----------------------|
| events list | `GET /api/v1/ai-vision/anpr/events?cameraId=&status=&q=` | Zone B + grid |
| event by id | `GET …/anpr/events/{id}` | form View/Edit · detail |
| create / ingest | `POST …/anpr/events` | Create · sim-capture |
| update | `PUT …/anpr/events/{id}` | Edit |
| soft-delete | `DELETE …/anpr/events/{id}` | Xóa |
| simulate | `POST …/anpr/events/simulate` | toolbar «Mô phỏng» |
| lookup registry | `POST …/anpr/events/{id}/lookup` | Tra cứu đăng kiểm |
| confirm → Incident | `POST …/anpr/events/{id}/confirm` | HITL Confirm |
| dismiss | `POST …/anpr/events/{id}/dismiss` | HITL Dismiss |
| init-data | `GET …/anpr/events/init-data` | cameras · statuses · rules |
| registry proxy | `GET …/anpr/registry/vehicles/{plate}` | internal cache |

Entity đề xuất: `rmms_ai_vision_anpr_events` · status Pending/Confirmed/Dismissed · registry snapshot JSON · violations JSON · `incident_id` sau Confirm.

## Seed / mock (DoD demo → real)

- 5 Pending: ANPR-2401…2405 (SPEED / OVERLOAD_GVW / ok / SPEED+GVW / NO_REGISTRY)
- Cameras: CAM-QL1-286 · 312 · 340
- Registry mock 4 plates + 1 unknown `29C-888.00`
- P1 Confirm **bắt buộc** HITL · Confirm → Incident stub/link
- **Cấm** chrome demo checklist / badge AI trên MFE

## Handoff

→ **PO:** Kind B list+form DoD · S-LIST/S-DETECT · inventory từ bảng trên · CRUD full + HITL  
→ **Design:** zones A–D + detail panel · prototype content-only + reviewUrl · **cấm** AI badge  
→ **SA:** AiVision APIs · migration anpr_events · Confirm → Incident · DOMAIN-MAP slug  
→ **TL:** T-CTX · T-PERM · T-UI-LIST · T-UI-FORM · T-UI-ACT · T-BE-CRUD · T-MIG · T-BFF · `route_confirm`  
→ **Dev:** sau `confirms.beRepo && uiRepo` · MFE `Linm.Web.RMMS.AiVision` · `/agent-dev` (+ detect HITL patterns)

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.08.15.19 |
| schemaVersion | qldb-workflow-skill-v1 |
| workflowVersion | 2026.08.16.02 |
| rulesVersion | 2026.08.16.05 |
| generatedAt | 2026-08-17T09:20:00.000Z |
| versionGate | ok |

---
<!-- Version meta: skillVersion=2026.08.15.19 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.16.02 · versionGate=ok -->
