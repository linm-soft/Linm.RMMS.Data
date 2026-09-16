# Design — ai-vision-service

| Field | Value |
|-------|-------|
| feature | `ai-vision-service` |
| title | Vision stack Wave 2–4 — BFF retarget · cutover · HITL upload |
| Feature Kind | **stack host** (`ai`) · consumer = peer **Full page** lists/forms |
| changeScope | `edit_page` |
| packKind | `ai` |
| featureClass | `ai` · stack (`/implement-ai-vision-stack`) |
| status | `confirmed` (autopilot · autoApprove=ON · `design_confirm=approve`) |
| lane | **web only** · mobile BFF defer |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.AiVision` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` + host `D:/AI-QLBD/Linm.RMMS.Vision` `:5311` · **cấm ERP.*** |
| controlHint | `specs/_data-analy/features/ai-vision-service-control-hint.md` |
| real-data | `specs/_data-analy/features/ai-vision-service-real-data.md` (§A+§B **yes** · map **none**) |
| contentHash | `sha256:90961d05e9d8c5fb4be3e151dc476d18c4c65e093aa0d9151d2a86ba6962702f` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.12.2` |
| versionGate | `ok` |
| formPattern (stack) | **N/A** (không CRUD page mới trên slug) |
| formPattern (consumer) | **Full page** (`/new` · `:id`) · peer AAD may Slideout (peer design) |
| data-form-cols (Full) | `5` |
| grid_standard | `yes` (peer S-LIST-*) |
| report_standard | `n/a` |
| leave | `LeaveConfirmModal` |
| chrome | **skip** P1/P2/AI/score header (`GAP-AI-DETECT-CHROME`) |
| shared_grid_example | `v1` (peer) |
| real_view_parity | `v1` |
| peerStdUrl | `http://localhost:9301/ai-vision-service` |
| mfeStdUrl | `http://localhost:9301/ai-vision-service` |
| design_confirm | `approve` |
| updatedAt | `2026-09-12T14:20:00.000Z` |
| taskId | `task_8d8de4b9` |

> **Hash skip:** analy `done` + contentHash khớp → **cấm** re-scan demo (**GAP-DES-DEMO-RESCAN-01**). Inventory từ PO + control-hint + real-data. Q-AVS-03: peer prototypes · **không** gen DemoRoot HTML mới.

## 0. Context & Demo (from PO · no crawl)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/ai-vision-service.md` | stack CTX |
| CTX-02 | `docs/plan/ai-vision-service/README.md` | waves |
| DEM-01 | **N/A** | packet · hash skip |
| controlHint | `specs/_data-analy/features/ai-vision-service-control-hint.md` | Design **chốt** §5 |
| real-data | `specs/_data-analy/features/ai-vision-service-real-data.md` | §A+§B |
| PO | `specs/ai-vision-service/po/requirement.md` | Screens · Grid AC · Leave |

## 1. Kind + UI pattern

| | |
|--|--|
| Feature Kind | Stack host · Wave 2–4 ops + peer consumer pages |
| List (peer) | `LinPageLayout kind="catalog"` · A–D · `LinErpListFilterBar` |
| Form (peer AIV) | **Full page** · `data-form-cols=5` · header chrome Quay lại/Hủy/Lưu · **cấm** footer Lưu |
| HITL / Upload | Full embedded · Modal confirm/dismiss · FileUpload |
| Leave | **`LeaveConfirmModal`** · **cấm** native `alert`/`confirm` |
| Map | **none** trên slug |
| Tabs | **none** |
| Toolbar icons | `erp-control-icon-map` · config = **`fas fa-cog`** |
| Chrome | Title + toolbar only · **0** badge AI/P1/P2/score |

## 2. Screens (expand PO)

| id | Surface | Pattern | Open | Actions | `devSlash` |
|----|---------|---------|------|---------|------------|
| S-HOST | Vision.Api health | N/A | `:5311` | health | Wave 0p+1 **done** |
| S-BFF-WEB | BFF proxy | N/A | `web-bff/api/v1/ai-vision/**` | retarget → Vision | `/create-bff-api-feature` |
| S-CUTOVER | Cutover runtime | N/A | ops | 0 `:5301` · migrate-out | SA/Dev Wave 3 |
| S-LIST-AIV | AiVisionListPage | Full · A–D | `/ai-vision/*` detections | filter · toolbar FULL · grid | `/agent-dev` |
| S-LIST-AAD | AiAssetDetectListPage | Full · A–D | peer | list + HITL | `/agent-dev` + `/agent-dev-ai-detect` |
| S-LIST-ITS | ItsTrafficDetectListPage | Full · A–D | peer | list | `/agent-dev` |
| S-LIST-ANPR | ItsAnprOverloadListPage | Full · A–D | peer | list | `/agent-dev` |
| S-LIST-PRED | PredictListPage | Full · A–D | peer | list | `/agent-dev` |
| S-LIST-EST | EstimateListPage | Full · A–D | peer | list | `/agent-dev` |
| S-FORM-AIV | AiVisionFormPage | Full 5 cols | `/new` · `:id` | C/E/V · detect | `/agent-dev-ai-detect` |
| S-DETECT | detect / detect-assets | action | form/list | POST detect* | `/agent-dev-ai-detect` |
| S-UPLOAD | Uploads session | Full embed | form/toolbar | init→PUT→complete/abort | `/agent-dev-ai-detect` |
| S-HITL | confirm / dismiss | Modal | row/form | confirm \| dismiss | `/agent-dev-ai-detect` |
| S-LEAVE | Dirty leave | LeaveConfirmModal | dirty form/upload | Ở lại · Rời | `/implement-show-leave-confirm` |
| INTERNAL | `POST /api/v1/vision/detect` | — | Vision only | **cấm** MFE | — |

## 3. Prototype + reviewUrl (REQUIRED)

| | |
|--|--|
| Artifact | [`ui/prototype/ai-vision-service-stack-hub.html`](./prototype/ai-vision-service-stack-hub.html) |
| Scope | Stack hub · **content-only** · peer links · **cấm** DemoRoot crawl |
| Zones | DES-HOST-A · DES-WAVE · DES-CHROME · DES-PEER · DES-LIST-WIRE · DES-LIST-AIV/AAD/ITS · DES-FORM-AIV · DES-UPLOAD-HITL · DES-API · DES-LEAVE |
| Peer protos | `specs/ai-vision/ui/prototype/ai-vision-list-prototype.html` · `ai-asset-detect-…` · `its-traffic-detect-…` |
| SSOT | `list-shell-prototype` · `po-design-grid-standard` · `design-real-view-parity` · `ai-chrome-skip` · `form-surface-prototype` |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/ai-vision-service/ui/prototype/ai-vision-service-stack-hub.html` |
| **peerStdUrl** | `http://localhost:9301/ai-vision-service` |
| **real_view_parity** | `v1` |

### Wire (peer list — REQUIRED)

```
[A] icon + title nghiệp vụ (**no** Thêm trên title · **no** badge AI/P1/P2/score)
[B] Làm mới · Lịch sử · fa-cog · View/Edit · Export | [+ Thêm mới] (nếu CRUD)
[FILTER] LinErpListFilterBar · 1 hàng wrap · lấp rồi wrap · 🔍 mép phải
[C] title · row-menu help · grid sort/filter · Ctrl+RMB
[D] LinCatalogListPagination — Tổng · pageSize · FA pager
```

### Wire (form Full — S-FORM-AIV)

```
Full page: [Quay lại | Hủy Lưu] Title · data-form-cols=5 · cấm footer Lưu
FileUpload · classCode · status · score(form) · routeId · sectionId · note · engine=hidden
```

### Wire (HITL / Upload)

```
upload: init → PUT → complete | abort
HITL: Modal confirm | dismiss
LeaveConfirmModal khi dirty / upload in-flight
```

## 4. DES zones → Lin* map

| Zone | Design | Component / note |
|------|--------|------------------|
| A | DES-LIST-* / DES-GRID-A | `LinPageLayout` / header · **no chrome badges** |
| B | DES-GRID-B | `catalogToolbar` · FULL · `fa-cog` |
| FILTER | DES-GRID-FILTER | `LinErpListFilterBar` (peer filter SSOT) |
| C | DES-GRID-C* | `LinCatalogDataGrid` · row menu · column filter |
| D | DES-GRID-D | `LinCatalogListPagination` |
| FORM | DES-FORM-AIV | Full page · 5 cols |
| UPLOAD | DES-UPLOAD | FileUpload / uploads session |
| HITL | DES-HITL | Modal confirm/dismiss |
| LEAVE | DES-LEAVE | LeaveConfirmModal |
| BFF | DES-BFF-WEB | Wave 2 proxy (no UI page) |
| CUTOVER | DES-CUTOVER | Wave 3 ops (no UI page) |

## 5. Control-map (chốt từ controlHint + PO)

| Field key | Label | Control (chốt) | catalogKind | Notes |
|-----------|-------|----------------|-------------|-------|
| uploadId / fileId | Frame | **`FileUpload`** | uploads / files | init→PUT→complete · **cấm** persist full URL |
| taxonomy | Taxonomy | `Dropdown` | LOOKUP_STATIC | pavement \| asset \| ITS/ANPR |
| classCode | Mã catalog | `Dropdown` / `SearchInput` | catalog | mã · `TRAFFIC_SIGN` ≠ `GANTRY_SIGN` |
| status | TT HITL | `Dropdown` | LOOKUP_STATIC | Draft / Confirmed / Dismissed |
| score | Confidence | `Number` | — | **form/detail only** · **cấm** toolbar |
| engine | Engine | **hidden** | — | persist OK · **cấm** badge |
| lat / lng | Tọa độ | `Number` | — | Point |
| routeId | Tuyến | `SearchInput` | **road-route** | shared catalog |
| sectionId | Đoạn | `Text` / SearchInput | — | PCI key |
| note | Ghi chú | `Text` | — | multiline · dirty |

Peer list filters: **delegate** peer analy / peer design — stack **không** duplicate full Kind B inventory.

## 6. Chrome / Leave / API HARD

| Rule | Pass |
|------|------|
| `GAP-AI-DETECT-CHROME` | 0 AI/P1/P2/score on header/toolbar |
| `GAP-DES-LEAVE-01` | LeaveConfirmModal only |
| Prefix | Client `web-bff/api/v1/ai-vision/**` · **cấm** invent `ai-vision-service/*` |
| Host | Vision `:5311` · **cấm** MFE direct · **cấm** `:5301` SSOT after Wave 3 |
| BE | `Linm.RMMS.WebService` DOMAIN-MAP · **cấm ERP.*** |
| Lane | web only · **cấm** yarn run-implement-mobile |

## 7. Handoff → SA

| Field | Value |
|-------|-------|
| reviewUrl | stack hub path §3 |
| zone ids | §2–§4 |
| control-map | §5 |
| Wave 2 | BFF retarget `{WebBff}` → Vision `:5311` · JWT `company_id` |
| Wave 3 | hard cutover · 0 `:5301` · migrate-out vision tables WebService |
| Wave 4 | HITL upload + chrome strip · `/agent-dev-ai-detect` |
| Next | `/agent-sa` · **cấm** Dev trước SA confirm |

## Version meta

| skillVersion | schemaVersion | contentHash | rulesVersion | status |
|--------------|---------------|-------------|--------------|--------|
| `2026.09.05.03` | `1` | `sha256:90961d05e9d8c5fb4be3e151dc476d18c4c65e093aa0d9151d2a86ba6962702f` | `2026.09.12.2` | `confirmed` |
