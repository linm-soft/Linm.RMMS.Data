# Review — Findings — patrol-map

| Field | Value |
|-------|-------|
| feature | `patrol-map` |
| status | **done** |
| review_confirm | **approve** (autoApprove=ON) |
| taskId | `task_b2f08c4b` |
| qaTaskId | `task_92c6486b` |
| packKind | `map` |
| changeScope | `edit_page` · gap=`ios_map_host_clip` |
| writtenAt | `2026-09-16T04:42:21.000Z` |
| skillVersion | session |

## Security

| Check | Result |
|-------|--------|
| Token Keychain / EncryptedSharedPreferences | **PASS** — iOS `KeychainTokenStore` · Android `EncryptedSharedPreferences` |
| `X-Company-Id` on BFF | **PASS** — `ApiClient` / `AuthInterceptor` |
| IDOR invent patrol-map API | **PASS** — reuse `GET patrol/sessions` · `gis/tiles/*` · **cấm** invent |
| App only BFF prefix | **PASS** |
| WebView HTML map / OSM.org CDN | **PASS** — `GisClipMapView` / BFF clip TileUrl |
| `alert` / plaintext token | **PASS** — toast / LinmBanner · no UIAlert on map |
| Location copy Info.plist / Manifest | **PASS** — `NSLocationWhenInUseUsageDescription` · `ACCESS_FINE/COARSE_LOCATION` |
| PrivacyInfo.xcprivacy | **PASS** (present) |
| Family listing A4 | **N/A** — map screen |

## DTO parity

| Check | Result |
|-------|--------|
| GET `patrol/sessions` dual | **PASS** — nextTitle bind live session Route |
| Overlay polyline/pins P1 | **PASS** — demo OMS coords SSOT (`real-data` §B) · **không** `GAP-MOB-REAL-02` |
| Zones / a11y ids | **PASS** — `sc-patrol-map` · `mb-clip`/`mb-sat` (iOS) · legend dual |
| GAP-TYP-01 / GAP-TAB-01 | **none** |

## UI align (5c)

| Source | Verdict |
|--------|---------|
| `ui/review/align-ux.md` | Must blocking **0** · `align_confirm=approve` |
| `ui/review/demo-parity.md` | Must **closed** |
| `qa/bugs/patrol-map.md` | Only DEFER `GAP-MOB-AND-CHIP-01` |
| Read `A3-CORE.png` (iOS) | `#sc-patrol-map` · **Tiêu chuẩn/Vệ tinh** · OSRM next · **Aligned** |
| Read `P6-CORE.png` (Android) | Core chrome **Aligned** · chips **Đường/Phố** ≠ demo Tiêu chuẩn |
| GAP-MOB-E2E-VIS-01 | **closed** |

## OMS map R1–R11 (native)

| # | Result | Note |
|---|--------|------|
| R1 live | **PASS** | GisClipMapView / MapLibre clip |
| R2 basemap | **PASS** iOS · **DEFER** Android labels | Tile BFF both · labels Wave 4 |
| R3 title/a11y | **PASS** | `mb-*` / `lg-*` |
| R4 / R4b full fill | **PASS** | map host flex |
| R4c chrome | **PASS** | host → bar → legend |
| R4e 3D placeholder | **PASS** | none |
| R5 / R5b zoom | **PASS** | clip tiles |
| R6 icon | **PASS** | pin kinds done/next/here |
| R7–R7c isolate | **PASS** | legend isolate · Fit CTA |
| R8 / R9 OSRM | **PASS** | EDIT LOCK · snap + routed path |
| R10 / R11 Fit | **PASS** | fitToken / Toàn tuyến |
| R-UX / R-LEAVE | **PASS** / **N/A** | no dirty form on map |

## E2E crawl (5d)

| Check | Result |
|-------|--------|
| New `yarn e2e` / `--crawl` this role | **SKIP** — packet HARD · QA already Maestro dual PASS |
| `GAP-MOB-ACT-03` | **none open** — sibling check-in sheet already `pending_confirm` (STATUS) |
| A10-BFF | **PASS** (QA store) |

## Real data (5e)

| Gap | Status |
|-----|--------|
| GAP-MOB-REAL-02 | **none** — live sessions; overlay demo SSOT P1 |
| GAP-QA-REAL-01 | **none** — A10-BFF PASS |

## Gaps

| ID | Note | Block? |
|----|------|--------|
| GAP-MOB-AND-CHIP-01 | Android chip labels Đường/Phố ≠ Tiêu chuẩn | **no** — DEFER Wave 4 |
| GAP-F-PAT-MAP-01 | Kind E tracks/coverage P2 | **no** |
| Sibling check-in sheet | pending_confirm | **no** — out of map scope · **cấm** auto start |

## VERIFY GATE (prior Dev/QA · this role no build)

| Check | Result |
|-------|--------|
| iOS xcodegen + xcodebuild | **PASS** (`task_1f6d86c4`) |
| Android assembleDebug | **PASS** |
| Mobile.Bff | **PASS** |
| Step 4b | **N/A** |
| QA e2e-qa-mobile | **PASS** (`task_92c6486b`) |

## Gate

`review_confirm` = **approve** (autoApprove=ON) · Must open = **0** · phase → **done**.
