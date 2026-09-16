# PO — Requirement — ai-vision-service

| Field | Value |
|-------|-------|
| feature | `ai-vision-service` |
| title | Vision stack Wave 2–4 — BFF retarget · cutover · HITL upload |
| packKind | **`ai`** (PO confirm) |
| changeScope | **`edit_page`** |
| lane | **web only** · mobile BFF / native **defer** |
| stackSkill | `/implement-ai-vision-stack` |
| formPattern (stack host) | N/A (không CRUD page mới trên slug) · consumer = peer Full page |
| status | `done` |
| taskId | `task_73b158a9` |
| skillId | `agent-po` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.12.2` |
| versionGate | `ok` |
| contentHash | `sha256:90961d05e9d8c5fb4be3e151dc476d18c4c65e093aa0d9151d2a86ba6962702f` |
| writtenAt | `2026-09-12T07:10:00.000Z` |
| sourceRequest | qldb_implement · roleOnly=`po` · prior data_analy `confirmed` · hash skip |

## Goal

Hoàn tất Wave **2–4** trên host Vision đã ship (Wave 0p+1): BFF web proxy → `:5311`, cutover MFE khỏi `:5301` / WebService vision SSOT, HITL upload thật trên AiVision MFE — **0** chrome P1/P2/AI/score header (`GAP-AI-DETECT-CHROME`).

## DoD (đo được)

| ID | Criterion | Wave |
|----|-----------|------|
| D1 | `{WebBff}/api/v1/ai-vision/**` downstream → Vision `:5311` · JWT `company_id` · **cấm** lộ `:5311` ra MFE | 2 |
| D2 | MFE AiVision **0** call `Linm.AI.WebService` `:5301` · **0** invent `api/v1/ai-vision-service/*` | 3 |
| D3 | Persist vision SSOT trên Vision DB · WebService migrate-out bảng vision (DOMAIN-MAP) | 3 |
| D4 | Upload init→PUT→complete + HITL confirm/dismiss trên peer pages · score **form/detail only** | 4 |
| D5 | Header/toolbar: **0** badge `AI` / `P1` / `P2` / score (`ai-chrome-skip.md`) | 4 |
| D6 | Lane web only · **cấm** `yarn run-implement-mobile` / queue qlbd-mobile | all |
| D7 | `dotnet`/BFF smoke PASS · QA e2e queued `/agent-qa*` (không chạy ở PO) | QA |

## § Delta Current vs New (`edit_page` · copy analy)

| ID | Current | New (this PO run) |
|----|---------|-------------------|
| Host | Wave 0p+1 done · `Linm.RMMS.Vision` `:5311` · `api/v1/ai-vision/**` | Giữ · **không** scaffold TrafficAI · **không** `:5301` SSOT |
| Runtime | WebService AiVision + `:5301` vẫn phục vụ MFE | Wave 3 cutover → BFF → Vision |
| BFF | Path có · downstream chưa retarget | Wave 2 `/create-bff-api-feature` → `:5311` · mobile defer |
| UI HITL | Peer list/form đã ship | Wave 4 `/agent-dev-ai-detect` upload + HITL · chrome skip |
| Taxonomy | `TRAFFIC_SIGN` ≠ `GANTRY_SIGN` | Giữ · cấm nhãn VN làm id |
| Demo | N/A | **Không** crawl · UI ref = peer prototypes / live MFE |

## Context / Demo / DI inventory

| ID | Path | Loại | Bắt buộc |
|----|------|------|----------|
| CTX-01 | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/ai-vision-service.md` | feature CTX | P0 · hash skip |
| CTX-02 | `D:/AI-QLBD/Linm.RMMS.Data/docs/plan/ai-vision-service/README.md` | plan waves | P0 |
| CTX-peer | `ai-vision` · `ai-asset-detect` · `its-traffic-detect` · `its-anpr-overload` · `predict` · `estimate` | peer CTX | consumer |
| DEM-01 | **N/A** (packet · packKind `ai` stack · hash skip) | — | skip crawl |
| DI-01 | N/A (không Excel cluster) | — | — |
| CH | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/ai-vision-service-control-hint.md` | controlHint | P0 |
| RD | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/ai-vision-service-real-data.md` | §A+§B | P0 |
| DOMAIN | `D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Signed paths | P0 |

**Hash skip:** analy `done` · contentHash `90961d05…` · **cấm** re-scan demo / crawl DemoRoot (**GAP-PO-DEMO-RESCAN-01**).

## Repos / URLs

| Role | Path |
|------|------|
| Product | `D:/AI-QLBD/Linm.RMMS.Data` |
| Vision host | `D:/AI-QLBD/Linm.RMMS.Vision` · `:5311` |
| BE (DOMAIN-MAP / cutover) | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| MFE consumer | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.AiVision` |
| mfeStdUrl (packet alias) | `http://localhost:9301/ai-vision-service` |
| peerStdUrl gợi ý | live peer under AiVision `:9301` /ai-vision/* · Design chốt reviewUrl |
| BFF prefix | `web-bff/api/v1/ai-vision/**` |
| API prefix | `api/v1/ai-vision/**` (Vision) · internal `POST /api/v1/vision/detect` **cấm** MFE |

## § Control hints (copy analy)

| Field key | Label | controlHint | Notes |
|-----------|-------|-------------|-------|
| detectImageUrl / fileId / uploadId | Frame | `FileUpload` | uploads / FileService · **cấm** persist full presigned URL |
| taxonomy | Taxonomy | `Dropdown` | pavement \| asset \| ITS/ANPR |
| classCode | Mã catalog | `Dropdown` / `SearchInput` | mã · `TRAFFIC_SIGN` ≠ `GANTRY_SIGN` |
| status | HITL TT | `Dropdown` | Draft / Confirmed / Dismissed |
| score | Confidence | Number **form/detail only** | **cấm** toolbar chrome |
| engine | Engine | hidden | persist OK · **cấm** badge |
| lat / lng | Tọa độ | Number | Point |
| routeId | Tuyến | `SearchInput` | road-route |
| sectionId | Đoạn | Text / SearchInput | PCI key |
| note | Ghi chú | Text | multiline |

Peer list filters: **delegate** peer analy (`ai-vision` · `ai-asset-detect` · …) — stack **không** duplicate full Kind B inventory.

## § Screens (REQUIRED)

| id | Surface | Pattern | FormMode | Actions | devSlash |
|----|---------|---------|----------|---------|----------|
| S-HOST | Vision.Api health `:5311` | N/A (service) | — | health | Wave 0p+1 **done** |
| S-BFF-WEB | BFF proxy ai-vision | N/A (BFF) | — | retarget | `/create-bff-api-feature` (Wave 2) |
| S-CUTOVER | Cutover runtime | N/A (ops) | — | 0 `:5301` · migrate-out | SA/Dev Wave 3 |
| S-LIST-AIV | AiVisionListPage detections | **Full page** | View | list/filter/CRUD peer | `/agent-dev` + Grid AC |
| S-LIST-AAD | AiAssetDetectListPage | **Full page** | View | list + HITL | `/agent-dev` + `/agent-dev-ai-detect` |
| S-LIST-ITS | ItsTrafficDetectListPage | **Full page** | View | list peer | `/agent-dev` |
| S-LIST-ANPR | ItsAnprOverloadListPage | **Full page** | View | list peer | `/agent-dev` |
| S-LIST-PRED | PredictListPage | **Full page** | View | list peer | `/agent-dev` |
| S-LIST-EST | EstimateListPage | **Full page** | View | list peer | `/agent-dev` |
| S-FORM-AIV | AiVisionFormPage | **Full page** (`/new` · `:id`) | Create/Edit/View | save · detect | `/agent-dev-ai-detect` |
| S-DETECT | Detect / detect-assets | Full (action on form/list) | Edit | POST detect* | `/agent-dev-ai-detect` · `/implement-ai-detect-run` (infer) |
| S-UPLOAD | Uploads session | Full (embedded) | Edit | init→PUT→complete/abort | `/agent-dev-ai-detect` (Wave 4) |
| S-HITL | confirm / dismiss | Full (row/form) | Edit | confirm \| dismiss | `/agent-dev-ai-detect` |
| INTERNAL | `POST /api/v1/vision/detect` | — | — | **cấm** MFE | Vision only |

**tabs:** `none` (stack multi-route peer pages, không tab shell trên slug).  
**map:** `none` trên slug stack.

## Grid list AC (REQUIRED — consumer S-LIST-* / Kind B peer)

| Area | Acceptance |
|------|------------|
| **Shell A–D** | Header · Toolbar · Grid card · Pagination footer |
| **Toolbar FULL** | Làm mới · Lịch sử · Sửa config (`fa-cog`) · View/Edit/Delete theo chọn · **+ Thêm mới** (nếu CRUD peer) |
| **Grid menu** | Row: Xem/Sửa/Sao chép/Lịch sử/Xóa · help ảnh · Ctrl+chuột phải |
| **Config** | Sửa cấu hình lưới · kéo cột default ON |
| **Grid flow** | Sort · filter cột · chọn dòng |
| **Filter Zone C** | **`LinErpListFilterBar`** · 1 hàng wrap · **lấp hàng rồi wrap** · 🔍 mép phải · **cấm** `ErpListHeaderFilters` / stack (**GAP-FILTER-WRAP-02**) |
| **Form pair** | Create/Edit/View → Pattern **Full page** (URL `/new`·`:id`) |
| **Chrome** | **0** P1/P2/AI/score trên header/toolbar (**GAP-AI-DETECT-CHROME**) |
| **SSOT** | peer filter-bar / `shared-grid-example` · Design clone zones `DES-LIST-*` / `DES-GRID-*` |
| **grid_standard** | `yes` (peer lists) · stack host page **không** gen list stub mới |

**Report AC:** N/A (`packKind=ai` · không report/dashboard).

## § Leave / alert (REQUIRED)

| Trigger | UI | Cấm |
|---------|-----|-----|
| Dirty form (S-FORM-AIV · HITL edit · upload in-flight) | **`LeaveConfirmModal`** (`/implement-show-leave-confirm`) | native `beforeunload` only / `confirm()` |
| Chặn / xóa / abort upload / dismiss | **`useAlert` / `Modal`** | `window.alert` / `confirm` / `prompt` |
| API 422 (`mock://`) / toast | toast / Modal | native alert |

Fail → **GAP-PO-LEAVE-01**.

## § Tab index

`tabs: none` — multi Full-page peer routes, không tab container trên feature slug.

## Open questions (autoApprove=ON · chốt default)

| ID | Decision |
|----|----------|
| Q-AVS-01 | Mobile BFF **defer** (lane web HARD) |
| Q-AVS-02 | Wave 3 **hard cutover** sau BFF smoke · STATUS confirm |
| Q-AVS-03 | Design = **peer list prototypes** · không gen demo HTML mới · reviewUrl Design chốt |

**UNCLEAR:** none.

## Cấm

| ❌ | ✅ |
|----|-----|
| Invent `api/v1/ai-vision-service/*` | `api/v1/ai-vision/**` + BFF cùng path |
| TrafficAI / Medical `:5301` SSOT | Host `Linm.RMMS.Vision` |
| ERP.* | `Linm.RMMS.WebService` + Vision |
| MFE → `:5311` | Chỉ BFF |
| Chrome P1/P2/AI/score header | `ai-chrome-skip.md` |
| Re-scan demo (hash skip) | Copy control-hint + real-data |
| e2e / `yarn start:std` / build ở role PO | Queue QA |

## Handoff → Design

| Field | Value |
|-------|-------|
| feature / packKind | `ai-vision-service` / **`ai`** (confirmed) |
| phase_from / phase_to | `po` → `design` |
| STATUS | po **done** · design **pending** |
| changeScope | `edit_page` |
| Context / Demo / DI | CTX-01+plan · DEM **N/A** · DI N/A |
| controlHint / real-data | abs paths § trên · §A+§B yes · map none |
| Screens / Pattern / devSlash | § Screens · Full page peer · `/agent-dev` + `/agent-dev-ai-detect` |
| Grid AC / Report AC / Leave | Grid **yes** (peer) · Report **N/A** · Leave **yes** |
| peerStdUrl | `http://localhost:9301/ai-vision-service` · peer `/ai-vision/*` |
| reviewUrl | Design chốt (peer prototype · **cấm** chrome) |
| chrome | `GAP-AI-DETECT-CHROME` skip |
| Open questions | none (auto-resolved) |
| Next AskQuestion | `design_confirm` (autoApprove ON) |
| Next | `/agent-design` · prototype peer · **cấm** re-scan demo |

## Version meta

| skillVersion | schemaVersion | contentHash | rulesVersion | status |
|--------------|---------------|-------------|--------------|--------|
| `2026.09.05.03` | `1` | `sha256:90961d05e9d8c5fb4be3e151dc476d18c4c65e093aa0d9151d2a86ba6962702f` | `2026.09.12.2` | `done` |
