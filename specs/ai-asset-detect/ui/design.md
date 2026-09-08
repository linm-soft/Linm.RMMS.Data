# Design — ai-asset-detect (AI phát hiện TS mới + mất TS)

| Field | Value |
|-------|-------|
| feature | `ai-asset-detect` |
| Feature Kind | **B** catalog list + **D** slideout + **F** map overlay |
| changeScope | `edit_page` |
| packKind | `list` |
| featureClass | `ai` (Kind B+D+F · **không** trộn `ai-vision` ổ gà) |
| status | `confirmed` (autopilot · autoApprove=ON · `design_confirm=approve`) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.AiVision` · `/ai-vision/ai-asset-detect` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/ai-vision` · **cấm ERP.*** |
| hostInfer | `Linm.RMMS.Vision` |
| controlHint | `specs/_data-analy/features/ai-asset-detect-control-hint.md` |
| real-data | `specs/_data-analy/features/ai-asset-detect-real-data.md` (§A+§B **yes**) |
| contentHash | `sha256:48ebba7d1ea4319eeaa330252a90d875a2a1dca1ff750846b50ff9c18897c20f` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.06.1` |
| versionGate | `ok` (bump prior 2026.08.10.* → SSOT · autopilot) |
| shared_grid_example | `v1` |
| slideout_layout | `footer_actions_only` |
| data-form-cols (slideout) | `2` |
| real_view_parity | `v1` |
| peerStdUrl | `http://localhost:9303/ai-vision` |
| mfeStdUrl | `http://localhost:9303/ai-vision/ai-asset-detect` |
| design_confirm | `approve` |
| updatedAt | `2026-09-06T16:40:00.000Z` |
| taskId | `task_a5f2efac` |

> **Hash skip:** analy done + contentHash khớp → **cấm** re-scan demo (**GAP-DES-DEMO-RESCAN-01**). Inventory/control từ PO + control-hint + real-data.

## 0. Context & Demo (from PO · no crawl)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/ai-asset-detect.md` | feature P0 |
| CTX-02 | `docs/context/features/its-traffic-detect.md` §8 | miss peer GAP-ITS-MISS-01 |
| CTX-03 | `docs/context/features/ai-vision-service.md` | Vision host |
| DEM-01 | `Linm.RMMS.Demo/.../ai-vision/ai-asset-detect.html` | baseline · GAP-DA-DEMO-01 CLOSED |
| DEM-packet | `…/ai-kd/phat-hien-ts.html` | **MISSING** — không crawl |
| controlHint | `specs/_data-analy/features/ai-asset-detect-control-hint.md` | Design **chốt** §5 |
| PO | `specs/ai-asset-detect/po/requirement.md` | § Delta miss · FileService · filter bar |

## 1. Kind + UI pattern

| | |
|--|--|
| Feature Kind | **B** + **D** + **F** |
| List | `LinPageLayout kind="catalog"` · **1×** · `data-lin-list-layout="erp-filter-bar"` |
| Filter | **`LinErpListFilterBar`** · 1 hàng wrap · **lấp hàng rồi wrap** · 🔍 mép phải |
| Form | Kind **D Slideout** · **2 cột** · footer actions only |
| Confirm / Dismiss / Miss | **Modal** |
| Leave | **`LeaveConfirmModal`** · **cấm** native `alert`/`confirm` |
| Map | Kind **F** overlay · pin AI new / TS đã có / **miss reconcile** |
| Tree | **Không** |
| Toolbar icons | `erp-control-icon-map` · config = **`fas fa-cog`** |

## 2. Screens (expand PO)

| id | Surface | Pattern | Open | Actions | `devSlash` |
|----|---------|---------|------|---------|------------|
| S-LIST | Danh sách candidate | Kind B A–D | `/ai-vision/ai-asset-detect` | filter · toolbar FULL · grid · pagination | `/agent-dev` |
| S-FORM | Form candidate | Kind D Slideout | toolbar / row / pin | C/E/V/Copy · footer · leave | `/agent-dev` + `/agent-dev-ai-detect` |
| S-MOD-CONFIRM | Confirm → Asset | Modal | row / form | Hủy · Confirm · asset-type * | `/agent-dev-ai-detect` |
| S-MOD-DISMISS | Dismiss FP | Modal | row / form | Hủy · Dismiss | `/agent-dev-ai-detect` |
| S-MISS | Reconcile mất | Modal | toolbar · row **Mất?** | expectedAsset · window · gim Incident | `/agent-dev-ai-detect` |
| S-MAP | Bản đồ pin | Kind F | cùng S-LIST | Fit · pin→View · layers | `/agent-dev-oms-map` |
| S-FEED | Frame tuần đường | Zone form / toolbar | FileUpload · detect · bbox | `/agent-dev-ai-detect` |
| S-LEAVE | Dirty leave | LeaveConfirmModal | close slideout dirty | Ở lại · Rời khỏi | `/agent-dev` |

## 3. Prototype + reviewUrl (REQUIRED)

| | |
|--|--|
| Base | `agent-design/example/shared-grid-example.html` |
| Artifact | [`ui/prototype/ai-asset-detect-list-prototype.html`](./prototype/ai-asset-detect-list-prototype.html) (+ `.js`) |
| Scope | **content-only** — skip chrome demo |
| Zones | DES-GRID-A · B · FILTER · C0–C3 · C2a · D · F · H · Z · DES-MAP-F · DES-MOD-CONFIRM · DES-MOD-DISMISS · **DES-MOD-MISS** · **DES-LEAVE** |
| SSOT | `list-shell-prototype` · `po-design-grid-standard` · `filter-bar-layout-hard` · `design-real-view-parity` |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/ai-asset-detect/ui/prototype/ai-asset-detect-list-prototype.html` |
| **peerStdUrl** | `http://localhost:9303/ai-vision` |
| **real_view_parity** | `v1` |

### Wire (list)

```
[A] fa-camera + «AI phát hiện tài sản» + badge AI / P1  (no Thêm trên title)
[B] Làm mới · Lịch sử · fa-cog · Xem/Sửa · Giả lập frame · Nearby · Reconcile mất · Export · Reset seed | [+ Tạo candidate]
[FILTER] LinErpListFilterBar · search · routeId · assetClass · status · from/to · missOnly Checkbox · 🔍 mép phải · Xóa lọc
[C] title · row-menu help · grid STT·□·ID·Loại·Score·XY·Tuyến·TT·Engine·Nearby·Miss?·Phát hiện·Asset·Frame·⋮
[D] LinCatalogListPagination — Tổng · Trang · Hiển thị [50|100|200|500] · FA pager
[MAP] pin AI new / existing / confirmed / miss · basemap · Fit
```

### Wire (slideout DES-GRID-Z · footer only · 2 cột)

```
[Z1] title · mode badge · dirty
[Z1h] hint
[Z2] FileUpload frame (imageFileId) · fields control-map · miss fields when miss flow
[Z3] View: Đóng / Sửa / Sao chép / Confirm / Dismiss / Mất?
     C/E/Copy: Hủy / Lưu
```

**Cấm** top Quay lại / Hủy / Lưu trên Z1 · **cấm** native leave dialog.

## 4. DES-GRID → Lin* map

| Zone | Design | Component |
|------|--------|-----------|
| A | DES-GRID-A | `LinPageLayout` / `LinPageHeader` |
| B | DES-GRID-B | `catalogToolbar` |
| FILTER | DES-GRID-FILTER | **`LinErpListFilterBar`** |
| C1 | DES-GRID-C1 | search trong bar (🔍) — **không** nút Tìm riêng trong card |
| C2 | DES-GRID-C2 | `LinCatalogDataGrid` · kéo cột default ON |
| C2a | DES-GRID-C2a | column filter panel |
| C3 | DES-GRID-C3 | `LinCatalogRowActionMenu` |
| D | DES-GRID-D | `LinCatalogListPagination` |
| F | DES-GRID-F | config / ui-schema |
| H | DES-GRID-H | history stub |
| Z | DES-GRID-Z | Kind D slideout · 2 cols |
| MAP | DES-MAP-F | Kind F overlay |
| MISS | DES-MOD-MISS | Miss reconcile Modal |
| LEAVE | DES-LEAVE | LeaveConfirmModal |
| — | shell | **1×** `LinPageLayout` |

## 5. Control-map (chốt từ controlHint + PO)

### 5.1 List filters (Zone B · LinErpListFilterBar)

| Field key | Label | Control (chốt) | catalogKind |
|-----------|-------|----------------|-------------|
| search | Tìm kiếm | `SearchInput` | text |
| routeId | Tuyến | `SearchInput` | **road-route** |
| assetClass | Loại TS | `Dropdown` | LOOKUP_STATIC · 8 · **không** «mất» |
| status | Trạng thái | `Dropdown` | Draft / Confirmed / Dismissed |
| fromDate / toDate | Từ / Đến ngày | `Date` | `detectedAt` |
| missOnly | Chỉ mất TS | `Checkbox` | **NEW** · GAP-AAD-MISS-UI-01 CLOSED |

### 5.2 Form fields

| Field key | Label | Control | Required | Notes |
|-----------|-------|---------|----------|-------|
| id / code | Mã | `Text` | auto | `AC-*` readonly |
| assetClass | Loại TS | `Dropdown` | * | 8 class · **cấm** «mất» / ổ gà |
| score | Confidence | `Text` (number) | * | 0–1 · UI % |
| status | Trạng thái | `Dropdown` | * | locked — Confirm/Dismiss/Miss đổi |
| engine | Engine | `Dropdown` | * | P1 / P2 |
| lat / lng | Tọa độ | `Text` (number) | * | Point |
| routeId | Tuyến | `SearchInput` | * | road-route |
| routeLabel | Nhãn / lý trình | `Text` | | |
| sectionId | Đoạn | `Text` | | |
| patrolTripId | Chuyến | `Text` | | |
| bboxJson | BBox | `Text` | | empty khi miss=0 detect |
| modelVersion | Model | `Text` | | readonly |
| nearbyRisk / nearbyOf | Nearby | `Checkbox` / `Text` | | demo 25 m · prod 10 m |
| note | Ghi chú | `Text` | | multiline · dirty |
| assetCode / assetId | Asset | `Text` | | readonly sau Confirm |
| **imageFileId** | Frame file | **`FileUpload`** | | FileService guid · **cấm** persist URL |
| imageUrl | Preview resign | derived | | resign mỗi xem |
| detectedAt | Phát hiện | `Date` | | |
| **expectedAssetId** | TS kỳ vọng | `SearchInput` | miss | **NEW** |
| **missWindowMin** | Cửa sổ N phút | `Number` | miss | **NEW** |
| **incidentDraftId** | Incident nháp | `Text` | | **NEW** sau gim |

### 5.3 Confirm modal — asset-type map

| assetClass (AI) | `asset-type.code` | Control |
|-----------------|-------------------|---------|
| Biển báo | `GANTRY_SIGN` | SearchInput |
| Hộ lan | `GUARDRAIL` | SearchInput |
| Cột Km | `KM_POST` | SearchInput |
| Cột H | `DELINEATOR` | SearchInput |
| Đèn chiếu sáng | `LIGHTING` | SearchInput |
| Cống | `CULVERT_X` / `CULVERT_L` | SearchInput |
| Taluy | `SLOPE_PROTECT` | SearchInput |
| Camera ITS | **`ITS_CAMERA`** | SearchInput |

### 5.4 Miss modal (S-MISS)

| Field | Control | Notes |
|-------|---------|-------|
| expectedAssetId | SearchInput (asset / road-assets) | GPS kỳ vọng |
| missWindowMin | Number | N phút · GAP-ITS-MISS-01 |
| note | Text | optional |
| Actions | Hủy · Gim Incident draft | → `POST /api/v1/incident/incidents` · **cấm** invent `missing-detect` |

### List columns

STT · □ · ID (`AC-*`) · Loại TS · Score (%) · Tọa độ · Tuyến / lý trình · TT · Engine/Model · Nearby · **Miss?** · Phát hiện · Mã Asset · **Frame** · ⋮

### Row menu

Xem · Sửa · Sao chép · Confirm · Dismiss · **Mất?** · Lịch sử

### Toolbar FULL

Làm mới · Lịch sử · `fa-cog` · Xem/Sửa · Giả lập frame · Nearby · **Reconcile mất** · Export stub · Reset seed · badge AI · **+ Tạo candidate**

## 6. Seed / DoD (prototype mock)

- 3 Draft: `AC-101` Hộ lan · `AC-102` Đèn · `AC-103` Cột Km + nearby `AC-104`
- **Miss seed:** `AC-MISS-01` · missFlag=true · expected nearby TS · bbox empty · imageFileId stub
- Existing TS pins + **miss pin** layer
- Confirm → `TS-AI-YYYYMMDD-NNNN` · `source=ai-asset-detect`
- FileUpload → mock guid · resign preview
- Leave dirty → LeaveConfirmModal (không native)
- Badge AI · engine P1 · **không** hứa mAP local P1 · **cấm** YOLO class «mất»

## 7. Open questions (không block Design)

| ID | Owner | Notes |
|----|-------|-------|
| GAP-AAD-FILE-01 | SA | ImageFileId migration · UI bind FileUpload |
| Dedupe 25 vs 10 m | SA | demo 25 · prod 10 |
| RequirePermission / GPT-4o | follow-up | `wait_aiservice` |

## Confirm

`design_confirm` = **approve** (autopilot · autoApprove=ON · `task_a5f2efac` · 2026-09-06) · prototype + reviewUrl + peerStdUrl + real_view_parity=v1 · miss Zone B/layout chốt.

## Handoff → SA

| Field | Value |
|-------|-------|
| Kind / pattern | B A–D + D slideout footer-only 2-col + F map + Miss Modal |
| Field inventory / control-map | §5 · missOnly · imageFileId FileUpload · expectedAssetId |
| Prototype · reviewUrl | §3 |
| APIs (đề xuất) | `asset-candidates` · `detect-assets` · confirm/dismiss · files BFF · miss→incidents |
| Domain | **AiVision** · BE `Linm.RMMS.WebService` · **cấm ERP.*** |
| Next | `/agent-sa` · reopen solution for ImageFileId / miss schema |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 2 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.06.1 |
| generatedAt | 2026-09-06T16:40:00.000Z |
| versionGate | ok |

---
<!-- Version meta: skillVersion=2026.09.05.03 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.09.05.03 · versionGate=ok -->
