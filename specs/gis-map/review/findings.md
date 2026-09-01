# Review — Findings — gis-map

| Field | Value |
|-------|-------|
| feature | `gis-map` |
| Title | [Mobile] [Tài sản] -> Xem trên bản đồ |
| Role | `review` · `/agent-review-mobile` |
| status | **confirmed** |
| Mode | `review_only` |
| review_confirm | **done** (autoApprove=ON · `task_b400b95d`) |
| packKind | **`map`** |
| changeScope | `new_page` |
| prior · qa | **confirmed** · `qa/scenarios.md` · store · `ui/review/align-ux.md` · `task_9d4480e2` |
| e2e crawl | **skipped** — roleOnly packet **cấm** yarn e2e / start:std · đọc PNG + action-tree · `qa/e2e/CLICKABLES.md` |
| updatedAt | `2026-08-31T01:40:50.000Z` |

## Scope

| Surface | Repo / path |
|---------|-------------|
| iOS | `Linm.RMMS.Mobile.iOS` · `Presentation/Features/GisMap/*` · `GisRepositoryImpl` · `LoadGisOverlayUseCase` |
| Android | `Linm.RMMS.Mobile.Android` · `presentation/feature/gismap/*` · `GisRepositoryImpl` · `LoadGisOverlayUseCase` |
| BFF | `Linm.RMMS.Mobile.Bff` · proxy `gis/geojson/{layer}` · `asset/road-assets/{id}` |
| BE | `Linm.RMMS.WebService` · DOMAIN Gis + Asset · **cấm ERP.*** |
| Specs | `specs/gis-map/` · `_data-analy/gis-map-*` |

## Verdict

**PASS** — P0 security **0** · Must align / demo-parity / icon / bugs OPEN **0** · `GAP-MOB-REAL-02` / `GAP-QA-REAL-01` **không mở** · `GAP-MOB-ACT-03` **không mở** (siblings đã owner · không FAIL chưa enqueue). `review_confirm` = **done**.

## Findings

| ID | Class | Sev | Where | Repro | Fix hint |
|----|-------|-----|-------|-------|----------|
| — | — | — | — | Must/P0 none | — |

### Should (non-blocking · không `fix_gaps`)

| ID | Sev | Summary | Evidence |
|----|-----|---------|----------|
| GAP-QA-GIS-EMPTY | Should | BFF `gis/geojson/*` 200 · `features:[]` → demo OMS + toast (PO fail-open) · seed GIS nếu cần pin live | QA · Android P6 toast |
| GAP-QA-A11Y-CHIP | Should · DEFER | iOS `LinmChip` / TopBar a11y id không expose Maestro — assert text OK | QA scenarios |
| REV-S-FOCUS-DEMO | Info | Focus `GET asset/road-assets/{id}` non-404 → OfflineDemo + id caller · phụ thuộc BFF ACL · **không** P0 client IDOR | dual `FetchRoadAssetByIdUseCase` |

## Security

| Check | Result |
|-------|--------|
| JWT store | **PASS** — iOS Keychain · Android EncryptedSharedPreferences · **cấm** plaintext JWT |
| `X-Company-Id` | **PASS** — `ApiClient` / `AuthInterceptor` trên mọi GIS + Asset GET |
| Bearer GIS | **PASS** — `gis/geojson/{layer}` qua shared client |
| IDOR `{id}` | **PASS client** — percent-encode + tenant header · server ACL required · focus fail-open = Info only |
| Forked API | **PASS** — không fork GIS · tiles OSM/Esri CDN only |
| `alert` / `UIAlert` / `AlertDialog` | **PASS** — toast/banner only trên map |
| Plaintext token log | **PASS** — không |
| Info.plist / Manifest location·camera | **PASS** — copy app-wide · GisMap **không** request GPS/camera P1 (SA GPS n/a) |
| `PrivacyInfo.xcprivacy` | **PASS** — tracking false · PreciseLocation / Photos linked · AppFunctionality |
| Landing HTTPS / signup delete / family A4 | **N/A** map pack · A4-IPAD DEFER Phase 1 |
| ERP.* | **none** |

## DTO / type / tab

| Check | Result |
|-------|--------|
| GeoJSON DTO dual | **PASS** — `type` · `features[]` · `id` · `geometry` · `properties` (iOS scalar / And `Map`) · Point `[lng,lat]` / LineString |
| Overlay layers | **PASS** — `all` · `incidents` · `tuyen-duong` khớp SA/BFF |
| Focus DTO | **PASS** — reuse `RoadAsset` GetById Lat/Lng |
| GAP-TYP-01 | **PASS** — chip/title scale khớp demo-parity |
| GAP-TAB-01 | **PASS** — shell tab 5 · **không** invent tab trên map |

## Real data

| Check | Result |
|-------|--------|
| GAP-MOB-REAL-02 | **CLOSED** — BFF-first · `GisMapDemoOverlay` **chỉ** khi anyFail \|\| emptyLive (PO/SA fail-open) · **không** hardcode primary khi live có feature |
| GAP-QA-REAL-01 | **N/A** — BFF empty `features:[]` · QA chứng proxy 200 + demo path · không «BFF có data mà UI mock» |
| Fake 200 / watermark Gói | **PASS** — toast khi demo · CORE không watermark |

## UI align (Step 5c)

| Source | Result |
|--------|--------|
| `ui/review/demo-parity.md` | Must **0** · dual chrome DEFER platform-OK |
| `ui/review/align-ux.md` | **Aligned** · Must **0** · `align_confirm` approve |
| `qa/bugs/gis-map.md` | Must mở **0** · Should only |
| Read CORE | **A3-CORE** 1320×2868 · title/back/Lớp/search/basemap/legend+Hành lang/TS+SC/corridor/MapKit/tab5 · **P6-CORE** 1080×1920 · title/icon back/Danh sách/basemap/demo toast/TS+SC/tab5 · **không** search/Hành lang (dual) |
| GAP-MOB-E2E-VIS-01 | **PASS** — Read PNG (không CLI-only) |
| GAP-MOB-UX-COMP-03 | **N/A** — map pins ≠ `.row-icon` tile |
| GAP-MOB-ALIGN-* / DEMO-* / ICON-* / UX-COLOR-* | **PASS** / platform-OK DEFER |

## E2E clickable (Step 5d)

| Gate | Result |
|------|--------|
| `/run-mobile-e2e --crawl` | **skipped** · VERIFY GATE roleOnly=review · **cấm** e2e |
| `qa/e2e/CLICKABLES.md` | **written** từ action-tree + QA Maestro (A11/A9/A3/P6) |
| GAP-MOB-ACT-03 | **không mở** — hub/detail/incident → owner `gis-map` · chrome same-slug không enqueue |
| Sibling enqueue | **không** — list/detail/incident đã pipeline · `GAP-MOB-ACT-06` |

## Confirm

| Gate | Value |
|------|-------|
| `review_confirm` | **done** |
| `align_confirm` | **approve** (prior QA · reaffirm) |
| `version_mismatch_action` | **recheck_new** — skill `agent-review-mobile` **2026.08.31.2** · workflow/rules `2026.08.31.2` |
| autoApprove | **ON** |

## Handoff

| Field | Value |
|-------|-------|
| next | pipeline **done** · **không** chain role khác trong task này (GAP-PKT-ROLE-01) |
| fix_gaps | **không** |
| Step 4b / migration / e2e | **skipped** · N/A / cấm role này |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-review-mobile |
| skillVersion | 2026.08.31.2 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| reviewHash | sha256:gis-map-review-20260831 |
| contentHash | sha256:gis-map-control-hint-20260831 |
| realDataHash | sha256:gis-map-real-data-20260831 |
| generatedAt | 2026-08-31T01:40:50.000Z |
| versionGate | rechecked |
| taskId | `task_b400b95d` |

---
<!-- Version meta: skillId=agent-review-mobile skillVersion=2026.08.31.2 schemaVersion=1 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
