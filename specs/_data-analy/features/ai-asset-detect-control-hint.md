# Data-analy — controlHint — ai-asset-detect (Kind B catalog + Kind F map)

| Field | Value |
|-------|-------|
| feature | `ai-asset-detect` |
| packKind | `list` (packet) · featureClass `ai` |
| mode | `scan_workflow` feature-scoped (no Excel · demo + context) |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.08.20` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.10.3` |
| rulesVersion | `2026.08.10.4` |
| versionGate | `ok` |
| contentHash | `sha256:97450ff90d8d4576a8de82e118d463e705b49b21f212a76fd178527a8b38793e` |
| analyzedAt | `2026-08-11T17:15:27.657Z` |
| updatedAt | `2026-08-11T17:15:27.657Z` |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** lookup API.  
> **Khác `ai-vision`:** taxonomy **thiết bị TS** → bản ghi Asset · **cấm** class ổ gà / Incident.

## Sources

| Source | Path | sha256 |
|--------|------|--------|
| Context | `docs/context/features/ai-asset-detect.md` | `114bc593491cad5efb7ec3da512680167a3f90a3bda9f568070bbbb3375c2eba` |
| Control map | `docs/context/_raw/legacy-govone/demo-maps/ai-asset-detect-control-map.md` | `b69f4be715d7296fb8adcbcea107247caffb89ceb7f46e8dc61fb50c168752d1` |
| Actions | `docs/context/_raw/legacy-govone/demo-maps/ai-asset-detect-actions.md` | `fa5ac60349d342e54aca53d1c145e0740479b0e8c32f62c1b91c088056473068` |
| Demo data | `Linm.RMMS.Demo/src/demo/ai-vision/js/ai-asset-detect-data.js` | `fde97abec28b04bdb6e349b798175234e8e2413d53810d20b468038ef822006b` |
| Demo page | `Linm.RMMS.Demo/src/demo/ai-vision/ai-asset-detect.html` | `799bbc500fb4df7d1b1408ee2174cb64eb45b07d8f408159ace3095d254b7522` |
| SSOT AI map | `docs/context/15-SCREEN-AI-MAP.md` §3b | — |
| Shared catalog | `specs/_data-analy/shared-catalogs/asset-type-seed.json` · `road-route-seed.json` | — |

## Kind / zones (handoff Design)

| Zone | Pattern | DoD |
|------|---------|-----|
| A | Toolbar | Tạo candidate · Giả lập frame · Nearby · Refresh · Export stub · Reset seed · badge **AI** P1/P2 |
| B | Filter | Search + Dropdown/SearchInput + Date · **search must work** |
| C | `LinCatalogDataGrid` | cột kéo default ON · row menu Xem/Sửa/Copy/Confirm/Dismiss |
| D | Footer | `LinCatalogListPagination` — **cấm** footerPagination / raw table footer |
| Form | Kind D slideout | C/E/V/Copy · actions **footer only** · leave-confirm dirty |
| Map | Kind F overlay | pin «AI new» vs TS đã có · OSM/Esri · Fit · pin → View |

## Control hint cluster — list filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchInput` | text | id · loại · tuyến · trip · section · assetCode · note · model |
| routeId | Tuyến | `SearchInput` | **road-route** | Master đã có · **cấm** free-text khi seed sẵn · demo hiện QL.1 + ALL |
| assetClass | Loại TS | `Dropdown` | enum (8) | Taxonomy **AI riêng** — không class ổ gà · xem map asset-type bên dưới |
| status | Trạng thái | `Dropdown` | enum | Draft / Confirmed / Dismissed |
| fromDate | Từ ngày | `Date` | — | `detectedAt` |
| toDate | Đến ngày | `Date` | — | `detectedAt` end-of-day |

## Control hint cluster — form fields

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| id | Mã candidate | `Text` | auto | `AC-*` readonly sau create |
| assetClass | Loại TS/thiết bị | `Dropdown` | * | 8 class AI (filter/form candidate) |
| assetTypeCode | Loại Asset (Confirm) | `SearchInput` | * on confirm | `catalogKind=asset-type` · map từ assetClass |
| score | Confidence | `Text` (number) | * | 0–1 · UI % |
| status | Trạng thái | `Dropdown` | * | Draft → Confirmed / Dismissed |
| engine | Engine | `Dropdown` | * | P1 GPT-4o Vision / P2 ONNX |
| lat / lng | Tọa độ | `Text` (number) | * | Point · pair · không SearchInput |
| routeId | Tuyến | `SearchInput` | * | `catalogKind=road-route` |
| routeLabel | Nhãn tuyến / lý trình | `Text` | | display / chainage (Km287…) |
| sectionId | Đoạn | `Text` | | optional P1 · master pavement-section later |
| patrolTripId | Chuyến tuần đường | `Text` | | P1 free · Patrol lookup DEFER |
| bboxJson | BBox | `Text` | | `[x1,y1,x2,y2]` |
| modelVersion | Model | `Text` | | readonly · `gpt-4o-vision` / `onnx-asset` |
| nearbyRisk | Trùng nearby | `Checkbox` | | cùng class &lt;25 m demo · prod ITS 10 m |
| nearbyOf | Candidate gần | `Text` | | readonly id |
| note | Ghi chú | `Text` | | multiline · dirty leave-confirm |
| assetCode | Mã Asset | `Text` | | readonly sau Confirm (`TS-AI-YYYYMMDD-NNNN`) |
| imageUrl | Frame | `Text` | | readonly / preview |
| detectedAt | Phát hiện | `Date` | | |
| updatedAt | Cập nhật | `Date` | | readonly |

## AI taxonomy ↔ asset-type (Confirm)

Closed set demo `ASSET_CLASSES` (8). Filter/form candidate = **Dropdown**. Khi Confirm tạo Asset = **SearchInput** `asset-type`.

| assetClass (AI) | Proposed `asset-type.code` | controlHint |
|-----------------|----------------------------|-------------|
| Biển báo | `GANTRY_SIGN` | SearchInput |
| Hộ lan | `GUARDRAIL` | SearchInput |
| Cột Km | `KM_POST` | SearchInput |
| Cột H | `DELINEATOR` | SearchInput |
| Đèn chiếu sáng | `LIGHTING` | SearchInput |
| Cống | `CULVERT_X` (default) / `CULVERT_L` | SearchInput · user chọn |
| Taluy | `SLOPE_PROTECT` | SearchInput |
| Camera ITS | — | **`UNCLEAR`** — không mã 1:1 trong seed 23 loại · PO/Design chốt (`ROW_UTIL`?) |

**Cấm** trộn 10 class mặt đường (`ai-vision` ổ gà…) vào Dropdown này (GAP-F-AAD-01).

## Lookup APIs (đề xuất SA — **chưa chốt**)

Domain **AiVision** · prefix `api/v1/ai-vision` · BFF `web-bff/api/v1/ai-vision` · repo `Linm.RMMS.WebService` · **cấm ERP.***

| Lookup | API | controlHint consumer |
|--------|-----|----------------------|
| candidates list | `GET /api/v1/ai-vision/asset-candidates?routeId=&assetClass=&status=&from=&to=&q=` | Zone B filters + grid |
| candidate by id | `GET /api/v1/ai-vision/asset-candidates/{id}` | form View/Edit |
| create / update | `POST` / `PUT …/asset-candidates` | form Create/Edit/Copy |
| detect frame | `POST /api/v1/ai-vision/detect-assets` | toolbar «Giả lập frame» |
| detect batch | `POST /api/v1/ai-vision/detect-assets/batch` | chuyến tuần đường |
| confirm → Asset | `POST …/asset-candidates/{id}/confirm` | modal Confirm · gọi Asset domain |
| dismiss FP | `POST …/asset-candidates/{id}/dismiss` | Dismiss |
| road-route | Master `GET /api/v1/…/road-routes` (Integration) | SearchInput routeId |
| asset-type | Master `GET /api/v1/…/asset-types` (Integration) | SearchInput confirm |

Entity đề xuất (context): `ai_vision.asset_candidates` · status Draft/Confirmed/Dismissed · geom Point · `modelVersion` · link Asset `source=ai-asset-detect`.

Dedupe: demo **25 m** Haversine · prod ITS SSOT **10 m** PostGIS — SA ghi solution.

## Seed / mock (DoD demo → real)

- 3 Draft: Hộ lan AC-101 · Đèn AC-102 · Cột Km AC-103 + 1 nearby AC-104 (cùng class &lt;25 m vs AC-101)
- Existing TS pins: HL / CS / CN trên QL.1
- P1 Confirm **bắt buộc** (GAP-F-AAD-02) · không auto-create
- Badge AI · engine P1 · không hứa mAP local P1

## Handoff

→ **PO:** Kind B list+form DoD · phân biệt `ai-vision` · inventory field từ bảng trên · Q Camera ITS  
→ **Design:** zones A–D + map overlay · Control từ controlHint · prototype content-only + reviewUrl · `autoApprove=OFF` → await_confirm  
→ **SA:** AiVision APIs trên · migration `asset_candidates` · Confirm → Asset · thêm slug DOMAIN-MAP · BFF proxy  
→ **TL:** T-CTX · T-PERM · T-UI-LIST (A–D) · T-UI-FORM · T-BE/BFF · T-UI-MAP overlay · `route_confirm`  
→ **Dev:** sau `confirms.beRepo && uiRepo` · MFE `Linm.Web.RMMS.AiVision` **không** Master

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.08.08.20 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.10.3 |
| rulesVersion | 2026.08.10.4 |
| generatedAt | 2026-08-11T17:15:27.657Z |
| versionGate | ok |

---
<!-- Version meta: skillVersion=2026.08.08.20 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.10.3 · versionGate=ok -->
