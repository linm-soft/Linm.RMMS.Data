# Design — its-traffic-detect (ITS phát hiện biển báo / cọc tiêu)

| Field | Value |
|-------|-------|
| feature | `its-traffic-detect` |
| Feature Kind | **B** catalog list + **D** slideout HITL + **F** map overlay |
| changeScope | `edit_page` |
| packKind | `ai` |
| featureClass | `ai` (Kind B+D+F · **≠** `ai-vision` ổ gà · **≠** `ai-asset-detect` taxonomy rộng 25 m) |
| status | `confirmed` |
| design_confirm | **approve** (Autopilot · autoApprove=**ON** · task_6dd0470a · 2026-08-21) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.AiVision` · route `/its-traffic-detect` · alias `/ai-vision/its-traffic-detect` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/ai-vision/its` · **cấm ERP.*** |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| slideout_layout | `footer_actions_only` |
| leave_standard | `LeaveConfirmModal` · **cấm** native `alert`/`confirm` trên MFE |
| list_config | **FULL** · `LinCatalogUiSchemaEditorModal` · title «Cấu hình hiển thị danh mục» |
| skillVersion | `2026.08.15.16` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.16.02` |
| rulesVersion | `2026.08.16.05` |
| versionGate | `ok` |
| contentHash (data-analy) | `sha256:E91426CE28303135A824CCDD5012AE64466FE2DB50A6C05FBC5F2A0E8F458526` |
| taskId | `task_e74a8045` |
| updatedAt | `2026-08-17T10:17:15.000Z` |

> **DOMAIN-MAP:** slug `its-traffic-detect` → **AiVision** · API **`api/v1/ai-vision/its/*`**. **Cấm ERP.***  
> **Cấm** badge/tag `AI` / P1/P2 trên header / `beforeToolbar` (`ai-chrome-skip` · **GAP-AI-DETECT-CHROME**).  
> **Cấm** text «Kind D» / «stub» / checklist khách trên UI end-user.  
> Dedupe SSOT **10 m** · taxonomy chỉ `bien_bao` / `coc_tieu`.

## 0. Context & Demo (from PO)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/its-traffic-detect.md` | Kind B+D+F · GAP-ITS-* |
| CTX-02 | `docs/context/16-ITS-TRAFFIC-OBJECT-DETECTION-DESIGN.md` | PostGIS 10 m · SignalR · GPU |
| CTX-03 | `demo-maps/its-traffic-detect-control-map.md` | Zones |
| CTX-04 | `docs/context/17-GPU-VNSO-COST-STANDARD.md` · `10-YOLO-SERVER-REQUIREMENTS.md` | GPU P2 — OUT hardcode MFE |
| DEM-01 | `Linm.RMMS.Demo/.../ai-vision/its-traffic-detect.html` | Signed zones — **không** clone chrome |
| DEM-02 | `…/js/its-traffic-detect-data.js` | `DEDUPE_RADIUS_M=10` · ITS-* · EXISTING_ASSETS |
| DEM-03 | `…/js/its-traffic-detect-app.js` | filter · Confirm/Dismiss · sim · Leaflet |
| controlHint | `specs/_data-analy/features/its-traffic-detect-control-hint.md` | Design **chốt** §5 |
| PO | `specs/its-traffic-detect/po/requirement.md` | status=`done` · Grid AC + Leave §6b |

## 1. Kind + UI pattern

| | |
|--|--|
| Feature Kind | **B** + **D** + **F** |
| List | `LinPageLayout kind="catalog"` · **1×** — **cấm** nested CatalogListShell |
| Form | Kind **D Slideout** · **footer actions only** (`slideout-form-layout`) |
| Map | Kind **F** overlay cùng page · pins existing / Draft / nearby / Confirmed |
| Tree | **Không** |
| Toolbar icons | `erp-control-icon-map` · config = **`fas fa-cog`** |
| AI chrome | **Cấm** badge/tag `AI` / P1/P2 header |

## 2. Screens (expand PO)

| id | Surface | Pattern | Open | FormMode | Actions |
|----|---------|---------|------|----------|---------|
| S-LIST | Danh sách candidate | Kind B A–D · KPI | `/its-traffic-detect` | — | search · clear-filter · create · sim Mobile/Dashcam/CCTV · Nearby 10m · refresh · export-stub · reset-seed · history · **config FULL** · View/Edit |
| S-DETECT | Form quan sát + frame | Kind D Slideout | `?form=` / row / pin | C/E/V/Copy | **footer only**: Hủy/Lưu · View: Đóng/Sửa/Sao chép · Confirm/Dismiss |
| S-MOD-CONFIRM | Confirm → Asset | Modal | row / form footer | — | Hủy · Confirm · SearchInput `asset-type` * |
| S-MOD-DISMISS | Dismiss FP | Modal | row / form footer | — | Hủy · Dismiss |
| S-MAP | Bản đồ pin | Kind F overlay | cùng S-LIST | — | OSM / Esri Streets / Esri sat · Fit · pin → View · legend |

**devSlash:**

| Surface | Slash | Notes |
|---------|-------|-------|
| S-LIST / CRUD | `/agent-dev` | Kind B list + form parity · Config FULL |
| S-DETECT / HITL Confirm·Dismiss | `/agent-dev-ai-detect` | `rmms-form-agent-map` · **cấm** badge AI header |
| S-MAP | `/agent-dev-oms-map` | Leaflet parity · pins + basemap |
| Camera nguồn (live CCTV) | `/agent-dev-camera-connect` | P1 = sim OK · live RTSP **DEFER P2** |

## 3. Prototype + reviewUrl (REQUIRED)

| | |
|--|--|
| Base | `agent-design/example/shared-grid-example.html` |
| Artifact | [`ui/prototype/its-traffic-detect-list-prototype.html`](./prototype/its-traffic-detect-list-prototype.html) (+ `.js`) |
| Scope | **content-only** — skip note/sidebar/menu/chrome demo · **cấm** checklist Signed |
| Zones | DES-GRID-A · B · FILTER · KPI · C0–C3 · C2a · D · F (config FULL) · H · Z · DES-MAP-F · DES-MOD-CONFIRM · DES-MOD-DISMISS · DES-LEAVE |
| Peer (real view) | `http://localhost:9303/ai-vision/ai-asset-detect` · cùng formType `ai` Kind B+D+F |
| TL map | `tl-design-grid-component-map.md` |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/its-traffic-detect/ui/prototype/its-traffic-detect-list-prototype.html` |
| mfeStdRoute | `/its-traffic-detect` · alias `/ai-vision/its-traffic-detect` |
| mfeStdUrl | `http://localhost:9303/its-traffic-detect` |

### Wire (list)

```
[A] fa-road + «ITS phát hiện biển báo / cọc tiêu»  (**không** badge AI · **không** Thêm ở header)
[B] Làm mới · Lịch sử · fa-cog · Xem/Sửa · Sim Mobile · Sim Dashcam · Sim CCTV · Nearby 10m · Export · Reset seed | [+ Tạo]
[KPI] Draft · Confirmed · Nearby risk · Total
[FILTER] SearchInput route · Dropdown objectClass · source · status · engine · Date from/to · Xóa lọc | Search cụm phải (id/class/…)
[C] title · row-menu help · SearchTextInput · grid STT·□·ID·Loại·Score·Tọa độ·Tuyến·Nguồn·TT·Engine·Nearby·Quan sát·Asset·⋮
[D] LinCatalogListPagination — Tổng · Trang · Hiển thị [50|100|200|500] · FA pager
[MAP] pin existing / Draft / nearby / Confirmed · OSM/Esri/Fit · tracks optional
```

### Wire (slideout DES-GRID-Z · footer only)

```
[Z1] title · mode badge · dirty · ✕ (close → LeaveConfirm nếu dirty)
[Z1h] hint
[Z2a] nearby banner (<10 m) · low-score banner (P2)
[Z2b] frame mock + bbox
[Z2c] fields (control-map §5.3)
[Z3 footer] View: Đóng / Sửa / Sao chép / Confirm / Dismiss
            C/E/Copy: Hủy / Lưu
```

**Cấm** top Quay lại / Hủy / Lưu trên Z1 toolbar (chỉ ✕ đóng).  
**Leave:** dirty → **LeaveConfirmModal** (`DES-LEAVE`) — MFE **cấm** native dialog.

### Wire (config DES-GRID-F · FULL)

```
Modal title «Cấu hình hiển thị danh mục»
Bảng cột: List / width / filter / sort · Thêm cột
→ Dev: LinCatalogUiSchemaEditorModal + useCatalogUiSchema + buildDynamicGridColumns
→ BE: CatalogUiSchemaRegistry + Seed catalogKind=its-traffic-detect
**Cấm** Zone F-only LinListTableConfigModal · **cấm** configHint
```

## 4. DES-GRID → Lin* map

| Zone | Design | Component |
|------|--------|-----------|
| A | DES-GRID-A | `LinPageLayout` / `LinPageHeader` · **cấm** AI badge |
| B | DES-GRID-B | `catalogToolbar` · refresh · history · cog · View/Edit · sim×3 · Nearby · Export · Reset · +Tạo |
| FILTER | DES-GRID-FILTER | route SearchInput · Dropdowns · Date · search phải |
| KPI | DES-KPI | Draft / Confirmed / Nearby risk / Total |
| C1 | DES-GRID-C1 | `SearchTextInput` (search **must work**) |
| C2 | DES-GRID-C2 | `LinCatalogDataGrid` · kéo cột default ON · `buildDynamicGridColumns` |
| C2a | DES-GRID-C2a | column filter panel |
| C3 | DES-GRID-C3 | `LinCatalogRowActionMenu` |
| D | DES-GRID-D | **`LinCatalogListPagination`** — **cấm** footerPagination / pageSizeBar / raw table footer |
| F | DES-GRID-F | **`LinCatalogUiSchemaEditorModal`** FULL |
| H | DES-GRID-H | `LinCatalogHistoryModal` |
| Z | DES-GRID-Z | Kind D slideout · footer only |
| MAP | DES-MAP-F | Kind F overlay · Leaflet |
| CONFIRM | DES-MOD-CONFIRM | Modal HITL · SearchInput `asset-type` |
| DISMISS | DES-MOD-DISMISS | Modal FP |
| LEAVE | DES-LEAVE | `LeaveConfirmModal` |
| — | shell | **1×** `LinPageLayout` |

## 5. Control-map (chốt từ controlHint + PO)

### 5.1 List filters (Zone B / FILTER)

| Field key | Label | Control (chốt) | catalogKind | Notes |
|-----------|-------|----------------|-------------|-------|
| search | Tìm kiếm | `SearchInput` | text | id · class · tuyến · device · note · model · assetCode · **cụm phải** |
| routeId | Tuyến | `SearchInput` | **road-route** | Master · **cấm** free-text khi seed sẵn |
| objectClass | Loại | `Dropdown` | enum | `bien_bao` / `coc_tieu` **only** |
| source | Nguồn | `Dropdown` | enum | mobile / dashcam / cctv |
| status | Trạng thái | `Dropdown` | enum | Draft / Confirmed / Dismissed |
| engine | Engine | `Dropdown` | enum | filter only · P1 / P2 |
| fromDate / toDate | Từ / Đến ngày | `Date` | — | `observedAt` |

### 5.2 List columns (schema seed)

| Field key | Label | Control | list default |
|-----------|-------|---------|--------------|
| code | Mã | `Text` | visible · sort · `ITS-*` |
| objectClass | Loại | `Dropdown` | visible · sort |
| score | Score | `Text` (number) | visible · UI % |
| latLng | Tọa độ | `Text` | visible |
| routeLabel | Tuyến | `Text` | visible |
| source | Nguồn | `Dropdown` | visible |
| status | TT | `Dropdown` | visible · sort |
| engine | Engine | `Dropdown` | visible |
| nearbyRisk | Nearby | `Checkbox` | visible · badge |
| observedAt | Quan sát | `Date` | visible · sort |
| assetCode | Mã Asset | `Text` | visible · sau Confirm |

### 5.3 Form fields (S-DETECT)

| Field key | Label | Control | Required | Notes |
|-----------|-------|---------|----------|-------|
| code | Mã | `Text` | auto | `ITS-*` readonly sau create |
| objectClass | Loại | `Dropdown` | * | bien_bao / coc_tieu |
| score | Confidence | `Text` (number) | * | 0–1 · UI % |
| status | Trạng thái | `Dropdown` | * | form thường readonly (HITL đổi) |
| engine | Engine | `Dropdown` | * | P1 / P2 |
| lat / lng | Tọa độ | `Text` (number) | * | Point pair |
| routeId | Tuyến | `SearchInput` | * | `catalogKind=road-route` |
| routeLabel | Nhãn tuyến / lý trình | `Text` | | |
| source | Nguồn | `Dropdown` | * | mobile / dashcam / cctv |
| deviceId | Thiết bị | `Text` | | |
| headingDeg / alphaDeg | Heading / Alpha | `Text` (number) | | |
| bboxJson | BBox | `Text` | | `[x1,y1,x2,y2]` |
| modelVersion | Model | `Text` | | readonly |
| nearbyRisk / nearbyOf | Nearby | `Checkbox` / `Text` | | cùng class &lt;10 m |
| note | Ghi chú | `Text` | | multiline · dirty leave-confirm |
| assetCode | Mã Asset | `Text` | | readonly sau Confirm |
| imageUrl | Frame | `Text` / preview | | |
| observedAt | Quan sát | `Date` | | |

### 5.4 Confirm modal — asset-type map (PO chốt)

| objectClass (AI) | `asset-type.code` | Control | Notes |
|------------------|-------------------|---------|-------|
| bien_bao | `GANTRY_SIGN` | SearchInput | default Confirm |
| coc_tieu | `DELINEATOR` | SearchInput | default Confirm |

User được đổi SearchInput trên Confirm. **Cấm** trộn class mặt đường (`ai-vision`) hay 8 class `ai-asset-detect`.

### Row menu

Xem · Sửa · Sao chép · Confirm · Dismiss · Lịch sử · Xóa

### View mode

View = `readOnly` (không disabled xám).

## 6. Seed / DoD (prototype mock)

| Item | Value |
|------|-------|
| Draft | `ITS-*-0001` biển báo · `…-0002` cọc tiêu · `…-0003` nearby &lt;10 m vs 0001 · `…-0004` P2 score 0.61 low |
| Existing Asset pins | `TS-QL1-BB-001` · `TS-QL1-CT-001` · `TS-QL1-CT-002` (broken mock) |
| Tracks | `PATROL-II1-01` · `DASHCAM-QL1-12` (legend) |
| IdCode | `ITS-YYYYMMDD-NNNN` · Confirm Asset `TS-AI-YYYYMMDD-NNNN` |
| Dedupe | **10 m** Haversine (demo) / PostGIS (prod) · **không** auto-create |
| HITL | Confirm bắt buộc · **không** hứa mAP P1 |

## 7. Leave / alert (Design AC)

| Case | Control | Cấm |
|------|---------|-----|
| Dirty form / Đóng / Hủy / route leave | **`LeaveConfirmModal`** | native `window.confirm` / `beforeunload` only (MFE) |
| Xóa / chặn Confirm | **`useAlert` / `Modal`** | `window.alert` / `prompt` |
| Confirm / Dismiss trên Slideout | **Modal stacked** | native confirm |
| History | `LinCatalogHistoryModal` | custom history dialog ad-hoc |

## 8. Open questions (không block Design)

| ID | Owner | Notes |
|----|-------|-------|
| `beRepo` / `uiRepo` | User board | STATUS stamp approved packet · Dev gate nếu board reset |
| GAP-ITS-03 | SA | verify entity/migration/perm AiVision |
| Real YOLO / SignalR / live CCTV | SA/Dev | **DEFER P2** |
| DOMAIN-MAP slug | SA | verify `its-traffic-detect` → AiVision |

## Confirm

`design_confirm` = **approve** · autoApprove=**ON** · task_6dd0470a · 2026-08-21.  
Prototype + **reviewUrl** sẵn · Autopilot tự confirm → STATUS `confirmed` · SA done cùng chain roleOnly.

## Handoff → SA

| Field | Value |
|-------|-------|
| Kind / pattern | B list A–D + D slideout footer-only + F map |
| Field inventory / control-map | §5 |
| Prototype · reviewUrl | §3 |
| Screens · zone ids | §2 · §4 · DES-GRID-* |
| APIs (đề xuất PO) | `api/v1/ai-vision/its/objects` CRUD · nearby · detect · confirm · dismiss · init-data |
| Domain | **AiVision** · BE `Linm.RMMS.WebService` · **cấm ERP.*** |
| Entity | `rmms_ai_vision_its_traffic_objects` · Confirm → Asset `source=its-traffic-detect` |
| Config FULL | CatalogUiSchemaRegistry + Seed `{catalogKind=its-traffic-detect}` |
| Dedupe | **10 m** |
| Confirm map | `bien_bao`→`GANTRY_SIGN` · `coc_tieu`→`DELINEATOR` |
| Next | `/agent-sa` · **confirmed** → TL pending |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.08.15.16 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.16.02 |
| rulesVersion | 2026.08.16.05 |
| generatedAt | 2026-08-17T10:17:15.000Z |
| versionGate | ok |
| contentHash | sha256:E91426CE28303135A824CCDD5012AE64466FE2DB50A6C05FBC5F2A0E8F458526 |

---
<!-- Version meta: skillVersion=2026.08.15.16 · schemaVersion=1 · workflowVersion=2026.08.16.02 · versionGate=ok -->
