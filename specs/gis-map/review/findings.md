# Review — Findings — gis-map

| Field | Value |
|-------|-------|
| feature | `gis-map` |
| Title | [Mobile] [Tài sản] -> Xem trên bản đồ |
| Role | `review` · `/agent-review-mobile` |
| status | **confirmed** |
| Mode | `review_only` |
| review_confirm | **done** (autoApprove=ON · `task_0abfdaac`) |
| packKind | **`map`** |
| changeScope | `edit_page` · `cleanup_mock` |
| prior · qa | **confirmed** · `task_337999db` · e2eQa ON · visual **Aligned** · Must 0 |
| prior · dev | **confirmed** · `task_ad6cbe30` · live-only · builds PASS |
| e2e crawl | **skipped** — roleOnly=review · **cấm** yarn e2e / start:std · dùng `qa/e2e/CLICKABLES.md` + CORE PNG |
| updatedAt | `2026-09-01T08:01:14.000Z` |

## Scope

| Surface | Repo / path |
|---------|-------------|
| iOS | `Linm.RMMS.Mobile.iOS` · `Presentation/Features/GisMap/*` · `LoadGisOverlayUseCase` · `GisRepositoryImpl` |
| Android | `Linm.RMMS.Mobile.Android` · `presentation/feature/gismap/*` · dual use-cases |
| BFF | `Linm.RMMS.Mobile.Bff` · `gis/geojson/{layer}` · `asset/road-assets/{id}` |
| BE | `Linm.RMMS.WebService` · DOMAIN Gis + Asset · **cấm ERP.*** |
| Specs | `specs/gis-map/` · `_data-analy/gis-map-*` |

## Verdict

**PASS** — P0 security **0** · Must align / demo-parity / icon / bugs OPEN **0** · `GAP-MOB-REAL-02` **CLOSED** (cleanup_mock live-only) · `GAP-QA-REAL-01` **không mở** · `GAP-MOB-ACT-03` **không mở**. `review_confirm` = **done**. `fix_gaps` **không**.

## Findings

| ID | Class | Sev | Where | Repro | Fix hint |
|----|-------|-----|-------|-------|----------|
| — | — | — | — | Must/P0 none | — |

### Should (non-blocking · không `fix_gaps`)

| ID | Sev | Summary | Evidence |
|----|-----|---------|----------|
| GAP-QA-GIS-EMPTY | Should | BFF `features:[]` → map trống OK · seed GIS optional | QA scenarios |
| GAP-QA-AND-TILE-RACE | Should · DEFER | P6-CORE gray first frame · P6-2 live | align-ux |
| GAP-QA-A11Y-CHIP | Should · DEFER | Maestro chip a11y id | QA scenarios |

## Security

| Check | Result |
|-------|--------|
| JWT store | **PASS** — iOS `KeychainTokenStore` · Android `EncryptedSharedPreferences` |
| `X-Company-Id` | **PASS** — iOS `ApiClient` · Android `AuthInterceptor` trên GIS GET |
| Bearer GIS | **PASS** — `gis/geojson/{layer}` shared client |
| IDOR `{id}` | **PASS client** — percent-encode + tenant · focus `.loaded` only · OfflineDemo **không** pin |
| Forked API | **PASS** — không fork · tiles OSM/Esri CDN |
| `alert` / `UIAlert` / `AlertDialog` | **PASS** — toast/banner only |
| Plaintext token log | **PASS** — không |
| Info.plist / Manifest location·camera | **PASS** — app-wide · GisMap P1 không request GPS/camera |
| `PrivacyInfo.xcprivacy` | **PASS** — tracking false · PreciseLocation / Photos linked · AppFunctionality |
| Landing HTTPS / signup / family A4 | **N/A** map · A4 DEFER Phase 1 |
| ERP.* | **none** |

## DTO / type / tab

| Check | Result |
|-------|--------|
| GeoJSON DTO dual | **PASS** — `type` · `features[]` · geometry Point/LineString |
| Overlay layers | **PASS** — `all` · `incidents` · `tuyen-duong` |
| Focus DTO | **PASS** — `RoadAsset` GetById · fail → toast `gis.map.focusMissing` |
| GAP-TYP-01 | **PASS** |
| GAP-TAB-01 | **PASS** — shell tab5 · không invent tab trên map |

## Real data

| Check | Result |
|-------|--------|
| GAP-MOB-REAL-02 | **CLOSED** — `GisMapDemoOverlay` **removed** · live-only empty/partial + `gis.map.loadFallback` |
| GAP-QA-REAL-01 | **PASS** — QA e2e BFF :5202 · CORE live MapKit/Esri · no primary mock |
| Fake 200 / watermark | **PASS** — CORE no watermark |

## UI align (Step 5c)

| Source | Result |
|--------|--------|
| `ui/review/demo-parity.md` | Must **0** · dual chrome DEFER platform-OK |
| `ui/review/align-ux.md` | **Aligned** · Must **0** · `align_confirm` approve |
| `qa/bugs/gis-map.md` | Must mở **0** · Should only |
| Read CORE | **A3-CORE** 1320×2868 · title/back/Lớp/search/basemap/legend+Hành lang/MapKit Phan Rang/tab5 · **P6-CORE-2** live Esri · Phố+Tài sản · Danh sách · no search/Hành lang (dual OK) · no watermark |
| GAP-MOB-E2E-VIS-01 | **PASS** — Read PNG (không CLI-only) |
| GAP-MOB-UX-COMP-03 | **N/A** — map pins ≠ `.row-icon` |
| GAP-MOB-ALIGN-* / DEMO-* / ICON-* / UX-COLOR-* | **PASS** / platform-OK DEFER |

## OMS map R1–R11 (native · not Leaflet MFE)

| Rule | Result |
|------|--------|
| R1 live map | **PASS** — MapKit / OSM-Esri native |
| R2 basemap VN | **PASS** — Đường/Phố/Vệ tinh |
| R4/R4b full fill | **PASS** — full-page map host |
| R4c chrome | **PASS** — host → bar → legend (native overlays) |
| R4e no 3D placeholder | **PASS** |
| R7 isolate | **PASS** — TS/SC/(corridor iOS) chips |
| R11 Fit overview | **PASS** — Toàn tuyến / fitToken |
| R8/R9 OSRM web | **N/A** mobile native · DEFER web Leaflet |
| R-UX | **PASS** |

## E2E clickable (Step 5d)

| Gate | Result |
|------|--------|
| `/run-mobile-e2e --crawl` | **skipped** · VERIFY GATE roleOnly=review |
| `qa/e2e/CLICKABLES.md` | **ok** · action-tree + QA Maestro |
| GAP-MOB-ACT-03 | **không mở** |
| Sibling enqueue | **không** · `GAP-MOB-ACT-06` |

## Confirm

| Gate | Value |
|------|-------|
| `review_confirm` | **done** |
| `align_confirm` | **approve** |
| `version_mismatch_action` | **recheck_new** |
| autoApprove | **ON** |

## Handoff

| Field | Value |
|-------|-------|
| next | pipeline **done** · GAP-PKT-ROLE-01 — **không** chain role khác |
| fix_gaps | **không** |
| Step 4b / migration / e2e | **skipped** · N/A / cấm role này |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-review-mobile |
| skillVersion | 2026.08.29.1 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| reviewHash | sha256:gis-map-review-cleanup-20260901 |
| contentHash | sha256:gis-map-control-hint-20260831 |
| realDataHash | sha256:gis-map-real-data-20260831 |
| generatedAt | 2026-09-01T08:01:14.000Z |
| versionGate | rechecked |
| taskId | `task_0abfdaac` |

---
<!-- Version meta: skillId=agent-review-mobile skillVersion=2026.08.29.1 schemaVersion=1 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
