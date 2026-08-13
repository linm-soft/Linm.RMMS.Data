# Design — ai-asset-detect (AI phát hiện tài sản)

| Field | Value |
|-------|-------|
| feature | `ai-asset-detect` |
| Feature Kind | **B** catalog list + **D** slideout form + **F** map overlay |
| changeScope | `edit_page` |
| packKind | `list` |
| featureClass | `ai` (Kind B+D+F · **không** trộn `ai-vision` ổ gà) |
| status | `confirmed` (autopilot · autoApprove=ON · design_confirm=approve) |
| mfe (đề xuất) | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.AiVision` · route `/ai-vision/ai-asset-detect` |
| backend (đề xuất) | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/ai-vision` · **cấm ERP.*** |
| skillVersion | `2026.08.10.2` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.10.3` |
| rulesVersion | `2026.08.11.1` |
| versionGate | `ok` |
| shared_grid_example | `v1` |
| slideout_layout | `footer_actions_only` |
| design_confirm | `approve` |
| updatedAt | `2026-08-12T14:20:00.000Z` |

## 0. Context & Demo (from PO)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/ai-asset-detect.md` | API · entity · GAP-F-AAD-01/02/03 |
| CTX-02 | `docs/context/15-SCREEN-AI-MAP.md` §3b | Camera tuần đường → Asset |
| CTX-03 | `demo-maps/ai-asset-detect-control-map.md` | Kind B+D+F |
| CTX-04 | `demo-maps/ai-asset-detect-actions.md` | ACTION WORK GATE |
| DEM-01 | `Linm.RMMS.Demo/.../ai-vision/ai-asset-detect.html` | Signed zones — **không** clone chrome |
| controlHint | `specs/_data-analy/features/ai-asset-detect-control-hint.md` | Design **chốt** dưới đây |
| PO | `specs/ai-asset-detect/po/requirement.md` | Camera ITS → **`ITS_CAMERA`** |

## 1. Kind + UI pattern

| | |
|--|--|
| Feature Kind | **B** + **D** + **F** |
| List | `LinPageLayout kind="catalog"` · **1×** — **cấm** nested CatalogListShell |
| Form | Kind **D Slideout** · **footer actions only** (`slideout-form-layout`) |
| Map | Kind **F** overlay cùng page · pin «AI new» vs TS đã có |
| Tree | **Không** |
| Toolbar icons | `erp-control-icon-map` · config = **`fas fa-cog`** |

## 2. Screens (expand PO)

| id | Surface | Pattern | Open | Actions |
|----|---------|---------|------|---------|
| S-LIST | Danh sách candidate | Kind B A–D | `/ai-vision/ai-asset-detect` | search · clear-filter · create · sim-frame · nearby · refresh · export-stub · reset-seed · config |
| S-FORM | Form candidate | Kind D Slideout | toolbar / row / pin | C/E/V/Copy · footer only |
| S-MOD-CONFIRM | Confirm → Asset | Modal | row / form footer | Hủy · Confirm · SearchInput `asset-type` * |
| S-MOD-DISMISS | Dismiss FP | Modal | row / form footer | Hủy · Dismiss |
| S-MAP | Bản đồ pin | Kind F | cùng S-LIST | OSM / Esri Streets / Esri sat · Fit · pin → View |
| S-FEED | Frame tuần đường | Zone trong form | form / toolbar sim | Giả lập frame · bbox preview |

## 3. Prototype + reviewUrl (REQUIRED)

| | |
|--|--|
| Base | `agent-design/example/shared-grid-example.html` |
| Artifact | [`ui/prototype/ai-asset-detect-list-prototype.html`](./prototype/ai-asset-detect-list-prototype.html) (+ `.js`) |
| Scope | **content-only** — skip note/sidebar/menu/chrome demo |
| Zones | DES-GRID-A · B · FILTER · C0–C3 · C2a · D · F · H · Z · DES-MAP-F · DES-MOD-CONFIRM · DES-MOD-DISMISS |
| TL map | `tl-design-grid-component-map.md` |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/ai-asset-detect/ui/prototype/ai-asset-detect-list-prototype.html` |

### Wire (list)

```
[A] fa-camera + «AI phát hiện tài sản» + badge AI / P1  (no Thêm)
[B] Làm mới · Lịch sử · fa-cog · Xem/Sửa · Giả lập frame · Nearby · Export · Reset seed | [+ Tạo candidate]
[FILTER] SearchInput route · Dropdown assetClass · Dropdown status · Date from/to · Xóa lọc
[C] title · row-menu help · SearchTextInput · grid STT·□·ID·Loại·Score·Tọa độ·Tuyến·TT·Engine·Nearby·Phát hiện·Asset·⋮
[D] LinCatalogListPagination — Tổng · Trang · Hiển thị [50|100|200|500] · FA pager
[MAP] pin AI new / existing / confirmed · basemap · Fit
```

### Wire (slideout DES-GRID-Z · footer only)

```
[Z1] title · mode badge · dirty
[Z1h] hint
[Z2] frame mock · fields (control-map)
[Z3] View: Đóng / Sửa / Sao chép / Confirm / Dismiss
     C/E/Copy: Hủy / Lưu
```

**Cấm** top Quay lại / Hủy / Lưu trên Z1.

## 4. DES-GRID → Lin* map

| Zone | Design | Component |
|------|--------|-----------|
| A | DES-GRID-A | `LinPageLayout` / `LinPageHeader` |
| B | DES-GRID-B | `catalogToolbar` |
| FILTER | DES-GRID-FILTER | Zone B filters (SearchInput / Dropdown / Date) |
| C1 | DES-GRID-C1 | `SearchTextInput` (search **must work**) |
| C2 | DES-GRID-C2 | `LinCatalogDataGrid` · kéo cột default ON |
| C2a | DES-GRID-C2a | column filter panel |
| C3 | DES-GRID-C3 | `LinCatalogRowActionMenu` |
| D | DES-GRID-D | **`LinCatalogListPagination`** — **cấm** footerPagination / pageSizeBar / raw table footer |
| F | DES-GRID-F | config / ui-schema |
| H | DES-GRID-H | history stub |
| Z | DES-GRID-Z | Kind D slideout |
| MAP | DES-MAP-F | Kind F overlay |
| — | shell | **1×** `LinPageLayout` |

## 5. Control-map (chốt từ controlHint + PO)

### 5.1 List filters

| Field key | Label | Control (chốt) | catalogKind |
|-----------|-------|----------------|-------------|
| search | Tìm kiếm | `SearchInput` | text |
| routeId | Tuyến | `SearchInput` | **road-route** |
| assetClass | Loại TS | `Dropdown` | enum 8 class AI |
| status | Trạng thái | `Dropdown` | Draft / Confirmed / Dismissed |
| fromDate / toDate | Từ / Đến ngày | `Date` | — |

### 5.2 Form fields

| Field key | Label | Control | Required | Notes |
|-----------|-------|---------|----------|-------|
| id | Mã candidate | `Text` | auto | `AC-*` readonly sau create |
| assetClass | Loại TS/thiết bị | `Dropdown` | * | 8 class — **cấm** class ổ gà |
| score | Confidence | `Text` (number) | * | 0–1 · UI % |
| status | Trạng thái | `Dropdown` | * | form locked — chỉ Confirm/Dismiss đổi |
| engine | Engine | `Dropdown` | * | P1 / P2 |
| lat / lng | Tọa độ | `Text` (number) | * | Point pair |
| routeId | Tuyến | `SearchInput` | * | road-route |
| routeLabel | Nhãn tuyến / lý trình | `Text` | | |
| sectionId | Đoạn | `Text` | | P1 free |
| patrolTripId | Chuyến tuần đường | `Text` | | Patrol lookup DEFER |
| bboxJson | BBox | `Text` | | |
| modelVersion | Model | `Text` | | readonly |
| nearbyRisk / nearbyOf | Nearby | `Checkbox` / `Text` | | demo 25 m |
| note | Ghi chú | `Text` | | multiline · dirty leave-confirm |
| assetCode | Mã Asset | `Text` | | readonly sau Confirm |
| imageUrl | Frame | `Text` | | preview |
| detectedAt / updatedAt | Ngày | `Date` | | updatedAt readonly |

### 5.3 Confirm modal — asset-type map (PO chốt)

| assetClass (AI) | `asset-type.code` | Control |
|-----------------|-------------------|---------|
| Biển báo | `GANTRY_SIGN` | SearchInput |
| Hộ lan | `GUARDRAIL` | SearchInput |
| Cột Km | `KM_POST` | SearchInput |
| Cột H | `DELINEATOR` | SearchInput |
| Đèn chiếu sáng | `LIGHTING` | SearchInput |
| Cống | `CULVERT_X` (default) / `CULVERT_L` | SearchInput |
| Taluy | `SLOPE_PROTECT` | SearchInput |
| Camera ITS | **`ITS_CAMERA`** | SearchInput · **default** |

### List columns

STT · □ · ID (`AC-*`) · Loại TS · Score (%) · Tọa độ · Tuyến / lý trình · TT · Engine/Model · Nearby · Phát hiện · Mã Asset · ⋮

### Row menu

Xem · Sửa · Sao chép · Confirm · Dismiss · Lịch sử (stub OK)

## 6. Seed / DoD (prototype mock)

- 3 Draft: `AC-101` Hộ lan · `AC-102` Đèn · `AC-103` Cột Km + nearby `AC-104`
- Existing TS pins: HL / CS / CN trên QL.1
- Confirm → `TS-AI-YYYYMMDD-NNNN` · `source=ai-asset-detect`
- Badge AI · engine P1 · **không** hứa mAP local P1

## 7. Open questions (không block Design)

| ID | Owner | Notes |
|----|-------|-------|
| `mfeStdRoute` | TL `route_confirm` | đề xuất `/ai-vision/ai-asset-detect` |
| DOMAIN-MAP slug | SA | thêm `ai-asset-detect` → AiVision |
| `beRepo` / `uiRepo` | User board | **không auto** — trước Dev |
| Dedupe 25 vs 10 m | SA | demo 25 · prod 10 |

## Confirm

`design_confirm` = **approve** (autopilot · autoApprove=ON · task_79fb7b32 · 2026-08-12) · prototype + reviewUrl sẵn.

## Handoff → SA

| Field | Value |
|-------|-------|
| Kind / pattern | B list A–D + D slideout footer-only + F map |
| Field inventory / control-map | §5 · Camera ITS → **`ITS_CAMERA`** |
| Prototype · reviewUrl | §3 |
| APIs (đề xuất) | `asset-candidates` CRUD · `detect-assets` · confirm/dismiss · lookups road-route / asset-type |
| Domain | **AiVision** · `api/v1/ai-vision` · BE `Linm.RMMS.WebService` · **cấm ERP.*** |
| Entity | `ai_vision.asset_candidates` · Confirm → Asset `source=ai-asset-detect` |
| Next | `/agent-sa` · `solution_confirm` (autoApprove=ON → agent tự confirm sau SA) |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.08.10.2 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.10.3 |
| rulesVersion | 2026.08.11.1 |
| generatedAt | 2026-08-12T14:20:00.000Z |
| versionGate | ok |

---
<!-- Version meta: skillVersion=2026.08.10.2 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.10.3 · versionGate=ok -->
