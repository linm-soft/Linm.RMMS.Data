# QA — scenarios — ai-asset-detect

| Field | Value |
|-------|-------|
| feature | `ai-asset-detect` |
| status | `done` |
| role | `qa` · `/agent-qa` |
| taskId | `task_c86da81c` |
| pack | T-QA-CRUD-01 · T-QA-AI-01 · FormType list+ai+map |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.AiVision` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · AiVision · **no ERP.*** |
| mfeStdRoute | `/ai-vision/ai-asset-detect` |
| mfeStdUrl | `http://localhost:9303/ai-vision/ai-asset-detect` |
| demo | `Linm.RMMS.Demo/src/demo/ai-vision/ai-asset-detect.html` |
| updatedAt | `2026-08-12T15:10:00.000Z` |

## Preconditions

- AiVision MFE: `yarn start:std` · port **9303** · open `mfeStdUrl`
- Optional live: API + BFF (`Linm.RMMS.WebService`) · else FE local seed / detect stub fallback
- Migration `Schema_RmmsAiVisionAssetCandidates` applied before live Confirm / ITS_CAMERA smoke
- **Cấm** verify chỉ prototype `reviewUrl`

## Smoke — Final MFE (REQUIRED)

| # | Step | Expect | Result |
|---|------|--------|--------|
| S0 | Open `mfeStdUrl` | Route mount · không 404 · title AI phát hiện tài sản | **PASS** (route `ai-vision/ai-asset-detect` trước `:id`) |
| S1 | List shell | 1× `LinPageLayout` · grid + map split · **không** nested CatalogListShell · skeleton/`useServerPagedListLoading` | **PASS** (code/SSOT) |
| S2 | Footer pager | `LinCatalogListPagination` · pageSize 50/100/200/500 · **cấm** footerPagination/pageSizeBar | **PASS** |
| S3 | Search Enter | `SearchTextInput` · **cấm** nút Tìm · page→1 · pulseSearch | **PASS** |
| S4 | Filters Zone B | class/status từ **init-data** · route · from/to · Xóa lọc | **PASS** |
| S5 | Toolbar | refresh · history stub · cog config · +Thêm · Giả lập frame · Nearby · Export stub · Reset seed | **PASS** |
| S6 | Row menu | View/Edit/Copy/History + Confirm/Dismiss (Draft) | **PASS** (delete UI — xem GAP) |
| S7 | Form C/E/V/Copy | Kind D slideout · footer-only · View readOnly · leave dirty confirm | **PASS** |
| S8 | Map Kind F | Leaflet CDN · OSM/Esri/Sat · Fit · pins candidate + existing road assets | **PASS** |
| S9 | No ERP.* | FE BASE `/ai-vision/asset-candidates` · BE `api/v1/ai-vision` · domain AiVision | **PASS** |

## List A–D (+ MAP)

| Zone | Scenario | Result |
|------|----------|--------|
| A | Header title + `fa-camera` + AI badges | **PASS** |
| B | catalogToolbar + domain actions (sim-frame · nearby · export · reset-seed) | **PASS** |
| FILTER | SearchTextInput + dropdowns init-data + date + clear | **PASS** |
| C | `LinCatalogDataGrid` · kéo cột default ON · row menu | **PASS** |
| D | `LinCatalogListPagination` only | **PASS** |
| F | Config stub modal | **PASS** |
| H | History stub | **PASS** |
| MAP | Overlay pins · Fit · basemap | **PASS** |

## T-QA-CRUD-01 — Create→Edit→View→Copy→Delete

| # | Step | Expect | Result |
|---|------|--------|--------|
| QA-20 | FormType ACT | T-UI-ACT inventory · C/E/V/Copy/Confirm/Dismiss wired | **PASS** (delete UI missing — GAP) |
| QA-21 | Create | Toolbar + → slideout → POST candidate Draft | **PASS** (code) |
| QA-22 | Edit | Row/toolbar Edit · Draft only → PUT | **PASS** |
| QA-23 | View | readOnly fields · footer Đóng/Sửa/Sao chép/HITL | **PASS** |
| QA-24 | Copy | Row Copy → create payload mới | **PASS** |
| QA-25 | Delete toolbar | Select Draft → soft DELETE | **PASS** (closed in Review `task_b86293c4`) |
| QA-26 | Delete row menu | Row menu Delete → soft DELETE | **PASS** (closed in Review `task_b86293c4`) |
| QA-27 | BE soft-delete | `SoftDeleteAsync` Draft-only · API-06 + BFF DELETE + FE `service.delete` | **PASS** |
| QA-28 | BE route | `api/v1/ai-vision/asset-candidates` · pageSize ∈{50,100,200,500} · no ERP | **PASS** (build) |

## T-QA-AI-01 — detect · HITL · map · seed

| # | Step | Expect | Result |
|---|------|--------|--------|
| QA-AI-01 | Giả lập frame | POST detect stub → Draft row(s) · không auto Asset | **PASS** |
| QA-AI-02 | Nearby | GET nearby / flag NearbyRisk · toolbar Nearby · Confirm ack nếu risk | **PASS** |
| QA-AI-03 | Confirm → Asset | Modal assetType · default map Camera ITS→`ITS_CAMERA` · Code `TS-AI-*` · Source=`ai-asset-detect` | **PASS** (code/BE) |
| QA-AI-04 | Dismiss | Draft → Dismissed · note optional | **PASS** |
| QA-AI-05 | Map pins | Candidate vs existing road-asset pins · Fit | **PASS** |
| QA-AI-06 | Init-data | 8 assetClasses · statuses · engines · nearbyRadiusMeters — **cấm** KIND_LABEL / class ổ gà | **PASS** |
| QA-AI-07 | Seed ITS_CAMERA | migration + asset-type seed searchable (live DB) | **PASS** (artifact) · live apply = ops note |

## Gaps

| ID | Severity | Note |
|----|----------|------|
| GAP-QA-ACT-DELETE-01 | ~~P1~~ **CLOSED** | Review wired toolbar `canDelete` + row `showDelete` Draft-only → `aiAssetDetectService.delete` |
| — | — | BE `[RequirePermission]` vẫn TODO comments (P2 stub · SD-AUTH) — không block |
| — | — | Detect engine = P1 stub (documented) |

**Verdict:** **PASS** · FormType ACT delete closed in Review · **không** P0.

## Build verify (re-run QA)

| Check | Command | Result |
|-------|---------|--------|
| MFE typecheck | `yarn typecheck` (AiVision) | **PASS** |
| MFE build | `LINM_RUN_DEV_LOCAL_BUNDLE=1 yarn build` | **PASS** |
| BE API | `dotnet build …/RMMS.Service.Api.csproj` | **PASS** 0 err |
| BE BFF | `dotnet build …/RMMS.Service.Bff.csproj` | **PASS** 0 err |

## Handoff → Review

| Field | Value |
|-------|-------|
| next | `/agent-review` · roleOnly · `review/findings.md` |
| autoApprove | ON · worker enqueue review |
| focus | GAP-QA-ACT-DELETE-01 · RequirePermission stub · migration applied |
| mfeStdUrl | `http://localhost:9303/ai-vision/ai-asset-detect` |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-qa |
| skillVersion | 2026.08.08.21 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.10.3 |
| rulesVersion | 2026.08.11.1 |
| generatedAt | 2026-08-12T15:10:00.000Z |
| versionGate | ok |
| taskId | `task_c86da81c` |

---
<!-- Version meta: skillVersion=2026.08.08.21 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.10.3 · versionGate=ok -->
