# PO — ai-asset-detect (AI phát hiện TS mới + mất TS)

| Field | Value |
|-------|-------|
| feature | `ai-asset-detect` |
| changeScope | `edit_page` (packet · STATUS · analy · Autopilot — **không** AskQuestion) |
| packKind | `list` (**confirm**) |
| featureClass | `ai` — Kind **B** catalog list + Kind **D** slideout + Kind **F** map · **không** trộn `ai-vision` ổ gà |
| requestSource | run packet `task_d1c291af` · `/agent-qldb-workflow` · `/agent-po` · roleOnly=`po` |
| status | `done` |
| controlHint | `specs/_data-analy/features/ai-asset-detect-control-hint.md` |
| real-data | `specs/_data-analy/features/ai-asset-detect-real-data.md` (§A+§B **yes**) |
| contentHash (data-analy) | `sha256:48ebba7d1ea4319eeaa330252a90d875a2a1dca1ff750846b50ff9c18897c20f` |
| demo baseline | `Linm.RMMS.Demo/src/demo/ai-vision/ai-asset-detect.html` (packet `ai-kd/phat-hien-ts.html` **MISSING** · GAP-DA-DEMO-01 **CLOSED**) |
| mfeStdUrl | `http://localhost:9303/ai-vision/ai-asset-detect` |
| reviewUrl (prior) | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/ai-asset-detect/ui/prototype/ai-asset-detect-list-prototype.html` |
| beRepo | `Linm.RMMS.WebService` · `api/v1/ai-vision` · **cấm ERP.*** |
| uiRepo | `Linm.Web.RMMS.AiVision` |
| hostInfer | `Linm.RMMS.Vision` |
| grid_standard | `po-design-grid-standard` · `filter-bar-layout-hard` |
| leave_standard | `LeaveConfirmModal` · **GAP-PO-LEAVE-01** |
| slideout_layout | `footer_actions_only` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.06.1` |
| versionGate | `ok` |
| updatedAt | `2026-09-06T16:28:00.000Z` |
| taskId | `task_d1c291af` |

> **Hash skip:** analy done + contentHash khớp STATUS → **cấm** re-scan demo (**GAP-PO-DEMO-RESCAN-01**). Inventory/controlHint copy từ analy.

## 1. Goal

Enhance list **AI phát hiện tài sản / thiết bị** (candidate → Confirm Asset) + **AI mất tài sản** = GPS có TS kỳ vọng · frame trống / 0 detect (**GAP-ITS-MISS-01** · **cấm** YOLO class «mất»).

MFE `Linm.Web.RMMS.AiVision` · `mfeStdRoute=/ai-vision/ai-asset-detect` · BE `Linm.RMMS.WebService` domain AiVision · FileService BFF `web-bff/api/v1/files/*` (persist **file id** · resign) · miss → `POST /api/v1/incident/incidents` (peer ITS · **cấm** invent `missing-detect`).

## 2. Current → New (`edit_page` · copy analy § Delta)

| ID | Current (shipped / prior PO) | New (this run · `task_d1c291af`) |
|----|------------------------------|----------------------------------|
| Scope | Detect **TS mới** → candidate → Confirm Asset | + **Miss reconcile** GPS có Asset · 0 detect/N phút → Draft Incident |
| Miss semantics | Chỉ candidate «mới» | Reconcile Asset nearby vs frame trống · **cấm** class YOLO «mất» |
| Host infer | Adapter / AiService wait | Host **`Linm.RMMS.Vision`** |
| Frame | `imageUrl` text / stub | **FileUpload** → FileService guid · resign mỗi xem · **GAP-AAD-FILE-01** → SA |
| Filter | search · route · class · status · date | + **`missOnly`** Checkbox |
| Toolbar | Tạo · Giả lập frame · Nearby · Refresh · Export stub · AI badge | + **Reconcile mất** |
| Form | candidate fields | + `expectedAssetId` · `missWindowMin` · `incidentDraftId` · `imageFileId` |
| Demo packet | `ai-kd/phat-hien-ts.html` | **MISSING** → baseline `ai-vision/ai-asset-detect.html` |
| Filter bar | Search trong card (legacy AC) | **`LinErpListFilterBar`** · lấp hàng rồi wrap · 🔍 mép phải |
| Artifacts prior | design/sa/dev/qa/review **kept** | Chỉ PO delta · Design reopen prototype miss UI |

## 3. Personas / DoD (đo được)

1. List load + search work (code · loại · tuyến · trip · section · assetCode · note)
2. Zone B filter: `LinErpListFilterBar` · fields §7.1 · **không** nút Tìm riêng · 🔍 mép phải
3. Toolbar FULL: Làm mới · Lịch sử · Config · View/Edit · **+ Tạo** · Giả lập frame · Nearby · **Reconcile mất** · Export stub · badge AI P1/P2
4. Row menu: Xem · Sửa · Sao chép · Confirm · Dismiss · Lịch sử · **Mất?** (miss flow)
5. View = `readOnly` (không disabled xám)
6. Create/Edit/Copy validate + save Draft · dirty → **LeaveConfirmModal**
7. Confirm modal: SearchInput `asset-type` * · Asset `source=ai-asset-detect`
8. Nearby cùng class: demo **25 m** · prod **10 m** · **không** auto-create
9. Miss: chọn `expectedAssetId` · cửa sổ N phút · 0 detect → Draft Incident (HITL)
10. Map Kind F: pin AI new · TS đã có · miss reconcile · Fit · pin→View
11. Frame: upload FileService · persist `imageFileId` · **cấm** full presigned URL
12. **Cấm ERP.*** · **cấm** class ổ gà · **cấm** YOLO «mất»

## 4. CTX / DEM inventory (hash skip — copy analy · **không** crawl)

| ID | Path | Loại | Notes |
|----|------|------|-------|
| CTX-01 | `docs/context/features/ai-asset-detect.md` | feature P0 | |
| CTX-02 | `docs/context/features/its-traffic-detect.md` §8 | peer miss | GAP-ITS-MISS-01 |
| CTX-03 | `docs/context/features/ai-vision-service.md` | Vision host | |
| CTX-04 | `docs/context/_raw/legacy-govone/demo-maps/ai-asset-detect-control-map.md` | control-map | |
| DEM-01 | `Linm.RMMS.Demo/src/demo/ai-vision/ai-asset-detect.html` | baseline Signed | **GAP-DA-DEMO-01 CLOSED** |
| DEM-packet | `…/ai-kd/phat-hien-ts.html` | **MISSING** | không crawl |
| controlHint | `specs/_data-analy/features/ai-asset-detect-control-hint.md` | P0 | §7 |
| real-data | `specs/_data-analy/features/ai-asset-detect-real-data.md` | P0 | §A+§B |
| filter-bar | `specs/_data-analy/features/ai-asset-detect-filter-bar.md` | P0 | |
| MFE | `pages/AiAssetDetectListPage/*` | sameMfe=yes | |
| BE | `AiVisionAssetCandidatesController` · `AiVisionDetectAssetsController` | cite | |

### List columns (required)

STT · ID (`AC-*`) · Loại TS · Score (%) · Tọa độ · Tuyến / lý trình · TT · Engine/Model · Nearby · Miss? · Phát hiện · Mã Asset · Frame · actions

## 5. Screens (REQUIRED · Pattern + `devSlash`)

| id | Surface | Pattern | Route / open | FormMode | Actions | `devSlash` |
|----|---------|---------|--------------|----------|---------|------------|
| S-LIST | Danh sách candidate | Kind B **Full page** A–D | `/ai-vision/ai-asset-detect` | — | filter · toolbar · grid · pagination | `/agent-dev` |
| S-FORM | Form candidate | Kind D **Slideout** | `?form=` / row | C/E/V/Copy | footer only · Confirm/Dismiss · leave | `/agent-dev` + `/agent-dev-ai-detect` |
| S-MOD-CONFIRM | Confirm → Asset | **Modal** | row / form | — | Hủy · Confirm · asset-type * | `/agent-dev-ai-detect` |
| S-MOD-DISMISS | Dismiss FP | **Modal** | row / form | — | Hủy · Dismiss | `/agent-dev-ai-detect` |
| S-MISS | Reconcile mất | **Modal** / slideout panel | toolbar Reconcile · row Mất? | — | expectedAsset · window · gim Incident | `/agent-dev-ai-detect` |
| S-MAP | Bản đồ pin | Kind F overlay | cùng S-LIST | — | Fit · pin→View · layers new/existing/miss | `/agent-dev-oms-map` |
| S-FEED | Frame tuần đường | Zone A / panel | S-LIST | — | FileUpload · detect · preview bbox | `/agent-dev-ai-detect` |

**Cấm GAP-PO-SCREEN-01.** Prototype content-only (giữ prior reviewUrl · Design cập nhật miss + FileUpload).

## 6. Grid list AC (REQUIRED · Kind B / list)

| Area | Acceptance (Design phải prototype) |
|------|-------------------------------------|
| **Shell A–D** | Header · Toolbar · Grid card · Pagination footer |
| **Toolbar FULL** | Làm mới · Lịch sử · Sửa config (`fa-cog`) · View/Edit/Delete theo chọn · **+ Tạo candidate** · Giả lập frame · Nearby · **Reconcile mất** · Export stub · badge **AI** P1/P2 |
| **Grid menu** | Row: Xem/Sửa/Sao chép/Confirm/Dismiss/Lịch sử/**Mất?** · help «nhấn đúp / Ctrl+chuột phải» |
| **Config** | Sửa cấu hình lưới · kéo cột default ON |
| **Grid flow** | Sort · filter cột panel · chọn dòng |
| **Filter Zone B** | **`LinErpListFilterBar`** · 1 hàng wrap · field **lấp hàng rồi wrap** · 🔍 **mép phải** (`filter-bar-layout-hard` · **GAP-FILTER-WRAP-02**) — **không** nút Tìm · **cấm** `ErpListHeaderFilters` / stack · `data-lin-list-layout="erp-filter-bar"` |
| **Form pair** | C/E/V/Copy → **Slideout** · Confirm/Dismiss/Miss → **Modal** |
| **Tree?** | Không |
| **Pagination** | `LinCatalogListPagination` |
| **SSOT Design** | `shared-grid-example` · `list-shell-prototype` · `po-design-grid-standard` · `slideout-form-layout` |
| **SSOT TL/Dev** | `tl-design-grid-component-map` · `tl-grid-full-flow` · `tl-filter-bar-task` · `agent-dev-assign` |

**Handoff → Design:** clone `shared-grid-example.html` · giữ `data-des-id` — **cấm** list chỉ table giữa trang.

## 6b. Leave / alert (REQUIRED)

| Event | UI | Cấm |
|-------|-----|-----|
| Dirty form / leave slideout | **`LeaveConfirmModal`** (`/implement-show-leave-confirm`) | `window.confirm` / native |
| Chặn / xóa / dismiss hard | **`useAlert` / `Modal`** | `alert` / `prompt` |
| Miss gim Incident | Modal confirm copy | native dialog |

Thiếu → **GAP-PO-LEAVE-01**.

## 7. Control hints (copy data-analy — Design chốt control-map)

### 7.1 List filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchInput` | text | code · loại · tuyến · trip · section · assetCode · note |
| routeId | Tuyến | `SearchInput` | **road-route** | **cấm** free-text |
| assetClass | Loại TS | `Dropdown` | LOOKUP_STATIC | 8 class · **không** «mất» |
| status | Trạng thái | `Dropdown` | LOOKUP_STATIC | Draft / Confirmed / Dismissed |
| fromDate / toDate | Từ/Đến ngày | `Date` | — | `detectedAt` |
| missOnly | Chỉ mất TS | `Checkbox` | — | **NEW** · PO chốt P1 (GAP-AAD-MISS-UI-01) |

### 7.2 Form fields (S-FORM + miss)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| id / code | Id / Mã | `Text` | auto | Guid · `AC-*` readonly |
| assetClass | Loại TS | `Dropdown` | * | 8 class AI · **cấm** «mất» |
| assetTypeCode | Loại Asset (Confirm) | `SearchInput` | * on confirm | `asset-type` |
| score | Confidence | `Text` (number) | * | 0–1 |
| status | Trạng thái | `Dropdown` | * | |
| engine | Engine | `Dropdown` | * | P1 / P2 |
| lat / lng | Tọa độ | `Text` (number) | * | Point pair |
| routeId | Tuyến | `SearchInput` | * | road-route |
| routeLabel | Nhãn / lý trình | `Text` | | |
| sectionId | Đoạn | `Text` | | |
| patrolTripId | Chuyến tuần đường | `Text` | | |
| bboxJson | BBox | `Text` | | empty khi miss=0 detect |
| modelVersion | Model | `Text` | | readonly |
| nearbyRisk / nearbyOf | Nearby | `Checkbox` / `Text` | | 25 m demo · 10 m prod |
| note | Ghi chú | `Text` | | multiline · dirty |
| assetCode / assetId | Asset sau Confirm | `Text` | | readonly |
| imageFileId | Frame file | `FileUpload` | | **FileService guid** · **cấm** persist URL |
| imageUrl | Preview resign | derived | | resign mỗi xem |
| detectedAt | Phát hiện | `Date` | | |
| expectedAssetId | TS kỳ vọng (miss) | `SearchInput` | miss | **NEW** |
| missWindowMin | Cửa sổ N phút | `Number` | miss | **NEW** |
| incidentDraftId | Incident nháp | `Text` | | **NEW** sau gim |

### 7.3 AI taxonomy ↔ asset-type (Confirm) — giữ chốt prior

Closed set 8. **Không** thêm «mất» / `MISSING`.

| assetClass (AI) | `asset-type.code` | controlHint |
|-----------------|-------------------|-------------|
| Biển báo | `GANTRY_SIGN` | SearchInput |
| Hộ lan | `GUARDRAIL` | SearchInput |
| Cột Km | `KM_POST` | SearchInput |
| Cột H | `DELINEATOR` | SearchInput |
| Đèn chiếu sáng | `LIGHTING` | SearchInput |
| Cống | `CULVERT_X` / `CULVERT_L` | SearchInput |
| Taluy | `SLOPE_PROTECT` | SearchInput |
| Camera ITS | `ITS_CAMERA` | SearchInput |

**Cấm** trộn 10 class mặt đường (`ai-vision`) — GAP-F-AAD-01.

## 8. PO chốt — open analy (Autopilot)

| ID | Quyết định |
|----|------------|
| GAP-DA-DEMO-01 | **CLOSED** — baseline DEM-01 `ai-vision/ai-asset-detect.html` · giữ prototype prior |
| GAP-AAD-MISS-UI-01 | **CLOSED P1** — `missOnly` filter + toolbar **Reconcile mất** + row **Mất?** · **không** tab riêng P1 · Design layout Zone B |
| GAP-AAD-FILE-01 | **→ SA** — Prefer cột `ImageFileId` · UI bind `imageFileId` FileUpload · legacy `imageUrl` = resign derived |
| Camera ITS | **CLOSED** prior — `ITS_CAMERA` |
| Upload HARD | FileService `web-bff/api/v1/files/*` · **cấm** scaffold API mới / invent `nghiem-thu-files` |
| Miss API | `POST /api/v1/incident/incidents` · **cấm** invent `missing-detect` |

## 9. APIs (cite analy / SA chốt schema)

| Lookup | API | Consumer |
|--------|-----|----------|
| list | `GET /api/v1/ai-vision/asset-candidates` | Zone B+C |
| init | `GET …/asset-candidates/init-data` | Dropdowns |
| by id | `GET …/asset-candidates/{id}` | form |
| CRUD | `POST` / `PUT` / soft `DELETE` | form |
| nearby | `GET …/asset-candidates/nearby` | toolbar · miss |
| detect | `POST /api/v1/ai-vision/detect-assets` (+ `/batch`) | toolbar |
| confirm / dismiss | `POST …/{id}/confirm` · `/dismiss` | modal |
| road-route / asset-type | Integration search | SearchInput |
| files | `web-bff/api/v1/files/*` | upload/resign |
| miss → Incident | `POST /api/v1/incident/incidents` | S-MISS |

BFF: `web-bff/api/v1/ai-vision/*` → cùng resource. Entity: `AiVisionAssetCandidateEntity`. **Cấm ERP.***

## 10. Out of scope

- Real GPT-4o / ONNX runtime full (P1 HITL + Vision host wire)
- Auto-create Asset theo ngưỡng (P2)
- Tab «Mất» riêng (P2 nếu Design đề xuất sau)
- Sibling `ai-vision` detections ổ gà · `camera-connect` RTSP
- ERP.* · invent `api/v1/ai-kd/*`

## 11. Open questions (sau PO)

| ID | Status | Owner |
|----|--------|-------|
| GAP-AAD-FILE-01 migration ImageFileId | open | **SA** |
| Dedupe 25 m vs 10 m | Demo 25 · prod 10 | SA |
| Design miss panel layout Zone B | closed intent · layout | **Design** |
| `review_confirm` reopen | autopilot approve sau Design | Review |

## 12. Handoff → Design

| Field | Value |
|-------|-------|
| feature | `ai-asset-detect` |
| phase_from / phase_to | `po` → `design` |
| STATUS | PO **done** · Design **pending** · autoApprove=**ON** → Design xong tự `design_confirm` |
| packKind | `list` **confirm** |
| changeScope | `edit_page` · §2 Delta |
| controlHint | `_data-analy/…-control-hint.md` · §7 |
| real-data | `_data-analy/…-real-data.md` §A+§B+§D+§E |
| grid_standard | §6 · `LinErpListFilterBar` · GAP-FILTER-WRAP-02 |
| Leave | §6b LeaveConfirmModal |
| Screens | §5 · Pattern + `devSlash` |
| miss UI | GAP-AAD-MISS-UI-01 CLOSED P1 |
| FileUpload | `imageFileId` · FileService |
| peerStdUrl | `http://localhost:9303/ai-vision` (sibling detect) |
| reviewUrl | prior prototype · Design cập nhật miss + filter bar |
| Next | `/agent-design` · **không** `/erp-feature` · **không** e2e ở PO |

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.06.1 |
| generatedAt | 2026-09-06T16:28:00.000Z |
| versionGate | ok |

---
<!-- Version meta: skillVersion=2026.09.05.03 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.09.05.03 · versionGate=ok -->
