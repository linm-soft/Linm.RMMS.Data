# Data-analy — controlHint — estimate (AI ước lượng sửa chữa)

| Field | Value |
|-------|-------|
| feature | `estimate` |
| packKind | `ai` (packet) · Kind **B** list + Kind **D** slideout |
| changeScope | `new_page` |
| mode | `scan_workflow` feature-scoped (no Excel · demo + context + control-map) |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.15.19` |
| schemaVersion | `1` (data-analy-cluster) |
| workflowVersion | `2026.08.16.02` |
| rulesVersion | `2026.08.15.25` |
| versionGate | `ok` |
| contentHash | `sha256:f49800a01d06c3df4ab4058c5b2b6ecde131fe8362a040481a88daa4897e8983` |
| analyzedAt | `2026-08-17T08:44:00.000Z` |
| updatedAt | `2026-08-17T08:44:00.000Z` |
| taskId | `task_674bb928` |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** lookup API.  
> **DOMAIN-MAP reconcile:** legacy context `/api/v1/ai-estimate/*` → **canonical** `api/v1/ai-vision/estimates` (AiVision). **Cấm ERP.***

## Sources

| Source | Path | sha256 |
|--------|------|--------|
| Context | `docs/context/features/estimate.md` | `sha256:f49800a01d06c3df4ab4058c5b2b6ecde131fe8362a040481a88daa4897e8983` |
| Demo page | `Linm.RMMS.Demo/src/demo/ai-vision/estimate.html` (+ `estimate-data.js` / `estimate-app.js`) | `sha256:4887e097b9778b6e21fdd1333156838cf693fae43d3bd9ecb2d868261cde7b6f` |
| Control map | `docs/context/_raw/legacy-govone/demo-maps/estimate-control-map.md` | `sha256:0c21c19bcf4ed144fd5941c889a9e7526fd1f49f6eddf1bf1c9a7c81c06c0a61` |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | slug `estimate` → **AiVision** / `ai-vision` |
| Mirror | `specs/ai-asset-detect/` | structure/tone |

## Kind / zones (handoff Design)

| Surface | Pattern | DoD |
|---------|---------|-----|
| **S-LIST** | Kind **B** catalog list of estimates | Zones **A–D** · host/list CRUD · search **must work** · `LinCatalogListPagination` |
| **S-FORM** | Kind **D** slideout | Z1 title/hint · Z2 header+lines · **Z3 footer-only actions** · leave-confirm dirty |
| AI chrome | Header | **NO AI badge** on page header (skip AI chrome) — P1 online hint text OK in form hint only |

### Shell wire (list)

```
[A] title «AI ước lượng sửa chữa» · fa-calculator · (NO AI badge)
[B] Làm mới · Lịch sử · fa-cog · Xem/Sửa · Xuất Excel stub · [+ Tạo ước lượng] · from-incident / from-defects
[FILTER] search · status · sourceType · fromDate/toDate · Xóa lọc
[C] grid estimates · row menu
[D] LinCatalogListPagination
```

### Slideout wire (form)

```
[Z1] title · mode · dirty · hint (P1 online · không auto WO)
[Z2a] validation banner
[Z2b] header fields
[Z2d] lines grid pattern_inline_grid
[Z3] tổng · footer: Xác nhận / Lưu nháp / Gắn CV / Hủy — cấm top Quay lại/Hủy/Lưu trên Z1
```

## Control hint cluster — list filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchInput` | text | mã EST · sự cố · tuyến · model · detectionIds |
| status | Trạng thái | `Dropdown` | enum | draft / confirmed |
| sourceType | Nguồn | `Dropdown` | enum | from-incident / from-defects |
| fromDate | Từ ngày | `Date` | — | `createdAt` |
| toDate | Đến ngày | `Date` | — | `createdAt` end-of-day |

## Control hint cluster — form fields (S-FORM header)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã ước lượng | `Text` | auto | `EST-YYYYMMDD-NNNN` · form-code-field · readonly sau create |
| incidentId | Sự cố / Vấn đề | `SearchInput` | * | Lookup incident · form-catalog-lookup-input |
| sourceType | Nguồn | `Dropdown` | * | from-incident / from-defects · init-data |
| detectionIds | Detection IDs | `Text` | | CSV · from-defects |
| routeSection | Tuyến / đoạn | `Text` | | free P1 · road-route SearchInput **DEFER** optional |
| defectType | Loại hư hỏng | `Dropdown` | * | init-data (ổ gà / nứt…) |
| defectArea | Diện tích (m²) | `Text` (number) | * | INT_IN / form-field-format |
| severity | Mức độ | `Dropdown` | * | Critical / High / Medium / Low |
| model | Model AI | `Text` | | readonly · `gpt-4o` |
| laborHours | Giờ nhân công | `Text` (number) | | INT_IN |
| equipment | Thiết bị | `Text` | | CSV / free |
| durationDays | Thời gian thi công (ngày) | `Text` (number) | | INT_IN |
| totalAmount | Tổng chi phí (VND) | `LabelMoney` | | readonly computed · footer |
| status | Trạng thái | `Dropdown` | * | draft / confirmed · form locked sau confirm (chỉ action Confirm đổi) |
| createdAt / updatedAt | Ngày | `Date` | | readonly · TZ |

## Control hint cluster — inline lines grid (`pattern_inline_grid`)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| lineItem | Hạng mục | `Text` | * | code BTN/BOC/… · P2 UnitPriceCatalog lookup DEFER |
| lineName | Tên hạng mục | `Text` | | display |
| lineQty | Khối lượng | `Text` (number) | * | INT_IN |
| lineUnit | Đơn vị | `Text` | * | m2 / m3 / công |
| lineUnitPrice | Đơn giá | `LabelMoney` | * | INT_IN · P1 manual |
| lineAmount | Thành tiền | `LabelMoney` | | readonly = qty × unitPrice |
| lineNote | Ghi chú dòng | `Text` | | |

**Lines toolbar:** Thêm dòng · Sửa dòng (inline) · Xóa dòng · STT · sort · **không** header cột `TT`.

## Actions inventory (13 — demo parity)

| Legacy label | kind | zone | controlHint / SSOT |
|--------------|------|------|---------------------|
| AI ước lượng từ sự cố | create | toolbar | Button primary · POST `…/estimates/from-incident/{id}` |
| AI ước lượng từ detections | create | toolbar | Button · POST `…/estimates/from-defects` |
| Chạy lại ước lượng | action | toolbar | Button · re-run from source |
| Thêm dòng | create | lines | linesActions · pattern_inline_grid |
| Xóa dòng | destructive | lines | row action · leave-confirm nếu dirty |
| Sửa dòng | action | lines | inline edit |
| Xác nhận số liệu | action | footer | FormActions · confirm modal |
| Lưu nháp | action | footer | FormActions · draft/save |
| Gắn Công việc | nav | footer | stub P1 · toast · **không** auto WO |
| Xuất Excel | export | toolbar | export-excel stub |
| Đóng | close | header/footer | leave-confirm dirty |
| Quay lại | nav | — | **DEFER to footer Đóng** (footer_actions_only · cấm Z1 nav) |
| Hủy thay đổi | close | footer | Cancel · snapshot restore |

## Lookup APIs (đề xuất SA — **chốt path AiVision**)

Domain **AiVision** · prefix **`api/v1/ai-vision/estimates`** · BFF `web-bff/api/v1/ai-vision/estimates` · repo `Linm.RMMS.WebService` · **cấm ERP.***  
**Reconcile:** context/demo mock `/api/v1/ai-estimate/*` = **legacy** — **không** implement path đó.

| Lookup / op | API | controlHint consumer |
|-------------|-----|----------------------|
| list | `GET /api/v1/ai-vision/estimates?search=&status=&sourceType=&fromDate=&toDate=&page=&pageSize=` | Zone B + grid |
| init-data | `GET /api/v1/ai-vision/estimates/init-data` | Dropdowns status/sourceType/defectType/severity |
| get | `GET /api/v1/ai-vision/estimates/{id}` | form V/E |
| from-incident | `POST /api/v1/ai-vision/estimates/from-incident/{incidentId}` | toolbar AI từ sự cố |
| from-defects | `POST /api/v1/ai-vision/estimates/from-defects` | toolbar AI từ detections |
| update | `PUT /api/v1/ai-vision/estimates/{id}` | form Edit + lines |
| draft/save | `POST /api/v1/ai-vision/estimates/{id}/draft` (hoặc PUT draft status) | Lưu nháp |
| confirm | `POST /api/v1/ai-vision/estimates/{id}/confirm` | Xác nhận số liệu |
| delete | `DELETE /api/v1/ai-vision/estimates/{id}` | soft-delete draft |
| incident lookup | Integration / Incident search (reuse) | SearchInput `incidentId` |

### Persist (đề xuất)

| Entity | Notes |
|--------|-------|
| `EstimateAuditEntity` | header audit · **không** `*LinesJson` parent blob |
| `EstimateLineEntity` | child lines table · FK EstimateId |
| `UnitPriceCatalog` | **DEFER P2** |

## Seed / mock (DoD demo → real)

- 1 estimate mock: ổ gà · 3 dòng (BOC · BTN · NC) · tổng VND · code `EST-YYYYMMDD-NNNN`
- Confirm **thủ công** · **không** auto tạo WorkOrder P1
- Header: **không** badge AI

## Handoff

→ **PO:** Kind B list + Kind D form · inventory filters/fields/lines · DoD CRUD · leave-confirm · GAP no-auto-WO · path AiVision  
→ **Design:** zones A–D + slideout Z1–Z3 footer-only · **no AI badge** · prototype content-only + reviewUrl · `design_confirm=approve` (autopilot)  
→ **SA:** APIs `estimates` · EstimateAudit + EstimateLine · BFF proxy · gates TZ/XCO/SHARE · DOMAIN-MAP slug keep  
→ **TL:** T-CTX · T-PERM · T-BE-CRUD · T-MIG · T-BFF · T-UI-* · T-QA-* · `route_confirm=route_a` `/ai-vision/estimate`  
→ **Dev:** MFE `Linm.Web.RMMS.AiVision` · BE `Linm.RMMS.WebService` · **cấm ERP.***

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.08.15.19 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.16.02 |
| rulesVersion | 2026.08.15.25 |
| generatedAt | 2026-08-17T08:44:00.000Z |
| versionGate | ok |
| contentHash | sha256:f49800a01d06c3df4ab4058c5b2b6ecde131fe8362a040481a88daa4897e8983 |

---
<!-- Version meta: skillVersion=2026.08.15.19 · schemaVersion=1 · workflowVersion=2026.08.16.02 · versionGate=ok -->
