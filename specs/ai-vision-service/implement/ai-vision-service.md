# Implement — ai-vision-service (Dev)

| Field | Value |
|-------|-------|
| feature | `ai-vision-service` |
| role | `dev` |
| status | **done** |
| packKind | `ai` |
| changeScope | `edit_page` |
| taskId | `task_61d43835` |
| skillVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.12.2` |
| contentHash | `sha256:90961d05e9d8c5fb4be3e151dc476d18c4c65e093aa0d9151d2a86ba6962702f` |
| writtenAt | `2026-09-12T07:36:00.000Z` |
| mfeStdUrl | `http://localhost:9301/ai-vision-service` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.AiVision` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` (BFF) + `D:/AI-QLBD/Linm.RMMS.Vision` |

## Waves completed

| Wave | Work | Result |
|------|------|--------|
| 2 BFF | `ServiceEndpoints:Vision` / `AiVisionBaseUrl` → `:5311` · HttpClient `VisionApi` · detections / detect / pci / asset-candidates / uploads / health proxy | **done** |
| 3 Cutover | WebService `CutoverDisabled=true` · empty `AiServiceBaseUrl` · `HttpAssetDetector` refuses `:5301` · DOMAIN-MAP note | **done** |
| 4 HITL/UI | Hub `/ai-vision-service` · uploads already via BFF→Vision · remove toolbar Giả lập P1/P2 · filter-bar context | **done** |

## APIs (via BFF)

| Surface | Path | Downstream |
|---------|------|------------|
| Health | `GET web-bff/api/v1/ai-vision/health` | Vision `/health` |
| Detections CRUD + detect + pci | `…/detections/**` · `…/detect` · `…/pci-history/**` | Vision `:5311` |
| Candidates + detect-assets + uploads | `…/asset-candidates/**` · `…/detect-assets` · `…/uploads/**` | Vision `:5311` |
| ITS / ANPR / predict / estimates | peer BFF controllers | **RmmsApi** (debt — Vision W1 chưa Signed peers) |

## UI

- Route locked: `/ai-vision-service` (hub S-HOST) · peers `/ai-kd*` `/ai-its*`
- Chrome: **0** badge AI/P1/P2/score header · removed list stub detect P1/P2
- LeaveConfirmModal already on form/slideouts
- Filter context: `docs/context/features/ai-vision-service-filter-bar.md`
- `start:std` port **9301** (align peerStdUrl)

## Build

| Target | Result |
|--------|--------|
| Vision.Api `dotnet build` | **PASS** 0 err |
| RMMS.Service.Bff `dotnet build` | **PASS** 0 err |
| RMMS.Service.Api `dotnet build` | **PASS** 0 err |
| AiVision MFE `yarn build` | **PASS** (asset size warnings only) |

## Debt / GAP

| ID | Note |
|----|------|
| Peer Vision migrate | ITS/ANPR/predict/estimate còn WebService API via RmmsApi |
| GAP-VIS-CUTOVER-01 | Core infer/persist cutover done; peer tables WebService còn |
| T-QA-* | Queued `/agent-qa*` — **cấm** e2e this role |

## QA verdict (`task_fe3ee27b`)

| Field | Value |
|-------|-------|
| verdict | **FAIL** |
| method | e2e runtime · AiVision `:9301` + docker + yarn e2e-qa |
| S0/S1/QA-20 | **PASS** · `qa/screens/{id}.png` |
| T-QA-AI / FILTER | **PASS** (shots) |
| T-QA-CRUD / FORM | **FAIL** · `GAP-QA-CRUD-EMPTY-01` · `GAP-QA-DEMO-NOTE-01` |
| next | `qa_fail_rollback` · Dev fix-plan trước Write |

## DoD checklist (Dev)

- [x] T-BFF-01 core retarget Vision
- [x] T-CUTOVER-01 0 `:5301` SSOT for RMMS AiVision detect
- [x] T-HITL-UPLOAD-01 uploads path BFF→Vision (init/complete)
- [x] T-CTX-FILTER-01 filter-bar context file
- [x] T-UI hub route + chrome skip list toolbar
- [x] Build HARD PASS
- [x] **cấm** e2e / start:std this role
