# Review — Findings — mobile-bff-map

| Field | Value |
|-------|-------|
| feature | `mobile-bff-map` |
| title | [Mobile] Mobile.Bff MapService |
| this role | `review` · `/agent-review-mobile` |
| status | **done** |
| review_confirm | **approve** (autopilot · `task_35db1343` · autoApprove=ON) |
| packKind | **`map`** |
| lane | `mobile` · **cấm** mfeStdUrl / yarn start:std / yarn build / e2e ở role này |
| changeScope | `edit_page` · TileUrl BFF + peer `#sc-gis-map` reuse · **none** `#sc-*` mới |
| prior · qa | `task_00f2df80` · verdict **pass** · e2e `ok:true` · Must align **0** · compact exists |
| prior · dev | `task_21def1bf` · T-BE/T-IOS/T-AND **PASS** · compact exists |
| prior · sa | `task_825b8a3d` · `solution_confirm=approve` · Step 4b **N/A** |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · `GisTilesController` |
| backend | MapService `:5021` + RMMS Gis · **cấm ERP.*** |
| autoApprove | **ON** |
| e2eQa | **ON** · prior QA runtime PASS · Review **không** re-run Maestro / crawl |
| updatedAt | `2026-09-12T09:43:20.000Z` |

## REVIEW-META

| Hash input | Notes |
|------------|-------|
| iOS | `MapTileUrl.swift` · `GisMap*` / `PatrolMap*` `tileUrlTemplate` · Keychain |
| Android | `MapTileUrl.kt` · `GisMapScreen` / `PatrolMapScreen` `BffClipBasemap` · EncryptedPrefs |
| BFF | `GisTilesController` · `AddLinmMapServiceBff` only · **cấm** `AddLinmMapServiceBffControllers` · proxy excludes `gis/tiles` |
| API | API-01 `GET gis/tiles/{layer}/{z}/{x}/{y}.pbf` → MapService · API-02..04 RMMS keep |
| skillVersion | agent-review-mobile **2026.08.31.2** |
| rulesVersion | **2026.09.12.1** |
| contentHash | `sha256:b04a50005f77e99fc2c564e39ac3a438cce8742996899ef2aaa47b698f7e0131` |
| live re-audit | 2026-09-12 after QA `task_00f2df80` · Read A3/P6 CORE |

## Security + permission

| Check | Result |
|-------|--------|
| Token store iOS Keychain (`KeychainTokenStore`) · **cấm** UserDefaults JWT | **PASS** |
| Token store Android `EncryptedSharedPreferences` | **PASS** |
| Interceptor Bearer + `X-Company-Id` (ApiClient / peer) | **PASS** (app-wide) |
| Tile proxy IDOR `{id}` | **N/A** — z/x/y tile coords · guest `basemap` · overlay JWT at MapService |
| `GisTilesController` `[AllowAnonymous]` + forward Auth header | **PASS** — guest basemap by design · overlay 401 without inspector |
| Catch-all **không** forward `gis/tiles` → RMMS | **PASS** (`MobileApiProxyController` 404) |
| Location / camera Info.plist + Manifest | **PASS** — peer map reuse (copy already present) · slug không invent permission |
| `alert` / `UIAlert` / `AlertDialog` trên GisMap/PatrolMap | **PASS** — none |
| Plaintext token / fork API / invent `api/v1/map-service/*` | **PASS** |
| **cấm** ERP.* | **PASS** |

## Real data

| Check | Result |
|-------|--------|
| **GAP-MOB-REAL-02** demoItems / hardcode làm nguồn màn map | **PASS** — TileUrl config SSOT · peer geo live · **không** mock tile list |
| **GAP-QA-REAL-01** QA chứng BFF | **PASS** — A10-BFF `:5202` · API `:5101` · tile live MapService **DEBT** `:5021` DOWN (không = mock) |

## DTO / TileUrl parity (iOS = Android = BFF)

| Field | iOS | Android | BFF | Disposition |
|-------|-----|---------|-----|-------------|
| path | `gis/tiles/{layer}/{z}/{x}/{y}.pbf` | same | `GisTilesController` | **OK** |
| basemap layer | `basemap` | `BASEMAP_LAYER` | guest | **OK** |
| absolute template | `MapTileUrl.absoluteTemplate()` | same | `{Bff}/mobile-bff/api/v1/…` | **OK** |
| OMS R2 · 0 OSM/Esri/Google CDN | **PASS** | **PASS** | MapService clip | **OK** · GAP-MAP-OSM-CDN-01 closed |

## UI align (Read CORE 2 OS vs peer + proto note)

| Zone | iOS `A3-CORE` | Android `P6-CORE` | Result |
|------|---------------|-------------------|--------|
| Title **Bản đồ tài sản** · peer `#sc-gis-map` | OK | OK | **PASS** |
| Chips **Đường·Phố·Vệ tinh·Toàn tuyến** · legend | OK | OK (platform chrome) | **PASS** |
| Back **Tài sản** / chevron+**Danh sách** · tab shell 5 | OK | OK | **PASS** |
| Proto `#zone-tileurl-note` = config note · **none** `#sc-*` mới | — | — | **PASS** (demo-parity Must 0) |
| Basemap MVT paint / blank grid Android | MapKit Apple tiles | osmdroid grid (no MVT decode) | **DEBT** Wave 4 · **không** Must fail slug |
| Overlay dense blue geo | peer RMMS polylines | peer RMMS | **OK** keep · Wave 4 clip UI debt |
| Must align mở | — | — | **0** |
| demo-parity Must | — | — | **0** (prior Design) |
| qa/bugs | — | — | **none** |

Evidence: `qa/screens/{A3-CORE,P6-CORE,P6-CORE-2}.png` · `qa/store/mobile-bff-map/` · CAPTURE · scenarios verdict=pass · `ui/review/demo-parity.md`.

## Store gate (Review note — **không** READY_TO_SUBMIT)

| Check | Result | Disposition |
|-------|--------|-------------|
| `PrivacyInfo.xcprivacy` | **present** (location + photos AppFunctionality) | **PASS** |
| Play Data safety form | deferred listing | **Accept** P2 |
| Landing HTTPS | deferred | **Accept** P2 |
| family `1` → **cấm** listing A4 | A4-IPAD **DEFER** Phase 1 | **OK** |
| Store capture A11/A9/A3/P6 | QA **PASS** | **OK** |

## E2E crawl / clickables (Step 5d)

| Check | Result |
|-------|--------|
| `/run-mobile-e2e --crawl` ở Review | **SKIP** — roleOnly HARD · VERIFY GATE cấm e2e |
| Prior QA Maestro dual peer map | **PASS** — layers/search/back asserts · no toast/no-op FAIL |
| `qa/e2e/CLICKABLES.md` | **N/A** slug edit_page TileUrl · không new interactive surface |
| **GAP-MOB-ACT-03** open / chưa enqueue | **none** |

AskQuestion (autoApprove=ON): `review_confirm=approve` · `align_confirm=approve` · `post_review=skip`.

## Findings

| ID | Area | Sev | Finding | Disposition |
|----|------|-----|---------|-------------|
| R-01 | Security | — | Keychain / EncryptedPrefs · headers · no alert | **OK** |
| R-02 | API | — | GisTiles → MapService · catch-all keep · cấm Controllers nuget invent | **OK** |
| R-03 | DTO/TileUrl | — | iOS=Android=BFF path + basemap · OMS R2 | **OK** |
| R-04 | Align | — | CORE dual chrome Aligned · Must = 0 | **OK** |
| R-05 | Demo-parity | — | prior Must 0 · `#zone-tileurl-note` | **OK** |
| R-06 | QA | — | e2e-qa-mobile PASS · store CAPTURE | **OK** |
| R-07 | Real data | — | GAP-MOB-REAL-02 / GAP-QA-REAL-01 closed | **OK** |
| R-08 | Debt | P3 | MapService `:5021` DOWN · MVT paint Wave 4 · overlay JWT hop w/ renderer | **Accept** · không block |
| R-09 | Step 4b | — | migration **N/A** | **OK** |
| R-10 | Crawl 5d | — | skip roleOnly · prior QA clickables PASS · no GAP-MOB-ACT-03 | **OK** |
| R-11 | Store | P2 | Play Data safety / landing listing | **Accept** |

## Task gate

| Task | Result |
|------|--------|
| T-BE-MAP-BFF | **PASS** |
| T-IOS-MAP-TILE | **PASS** |
| T-AND-MAP-TILE | **PASS** |
| T-QA-MAP-01 | **PASS** (`task_00f2df80`) |
| T-REVIEW-SEC | **PASS** |
| T-REVIEW-DTO | **PASS** |
| T-REVIEW-ALIGN | **PASS** · Must align = 0 |
| T-REVIEW-REAL | **PASS** |

## VERIFY GATE (`task_35db1343` · roleOnly=review)

| Gate | Result |
|------|--------|
| artifact `review/findings.md` | **PASS** |
| `handoff/review-compact.md` | **PASS** |
| STATUS review · `review_confirm=approve` | **PASS** |
| yarn build / e2e / start:std | **cấm** · **not run** |
| Step 4b / migration | **N/A** · **not run** |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-review-mobile |
| skillVersion | 2026.08.31.2 |
| schemaVersion | 1 |
| rulesVersion | 2026.09.12.1 |
| contentHash | sha256:b04a50005f77e99fc2c564e39ac3a438cce8742996899ef2aaa47b698f7e0131 |
| taskId | `task_35db1343` |
| generatedAt | 2026-09-12T09:43:20.000Z |

---
<!-- Version meta: skillId=agent-review-mobile skillVersion=2026.08.31.2 -->
