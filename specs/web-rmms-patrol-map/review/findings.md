# Review — Findings — web-rmms-patrol-map

> Status: **done** · writtenAt `2026-09-30T15:20:00.000Z` · task `task_94dfd264`  
> skillVersion: `2026.09.05.03` · packKind: `map` · autoApprove: ON · `review_confirm`: **approve**  
> contentHash: `sha256:52bd4a74401781b03b20ace930fd7d47d9e5ca2c5714b39fc6927f0d4fd6bcaf`  
> **changeScope=`edit_page`** · **cấm** xóa baseline notes · **cấm** implement · **cấm** e2e / start:std ở Review.

| | |
|--|--|
| Feature | `web-rmms-patrol-map` |
| Title | Bản đồ tuần — chainage · bake track · check-in sheet |
| Role | `review` · `/agent-review` |
| changeScope | `edit_page` |
| formPattern | Mobile Map / full · phone ≤430 · peer sheet PM-10 · LeaveConfirmModal · N/A ERP Modal · DES-GRID N/A |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/ban-do-tuan` · product `/patrol-map` · alias `/field/map` |
| mfeStdUrl | `http://localhost:9301/m/ban-do-tuan` (live SSOT · QA) |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff · Patrol + Gis · **cấm ERP.*** · **cấm** Map.Api |
| prior QA | **confirmed** · verdict PASS · S0/S1/QA-20 Aligned · handoff `handoff/qa-compact.md` |
| prior Dev | **confirmed** · build PASS · handoff `handoff/dev-compact.md` |
| hash gate | **RUN** — contentHash `52bd4a74…` ≠ baseline REVIEW-META `6f74282b…` (edit_page delta) |

## Verdict

| Gate | Result |
|------|--------|
| QUERY | **PASS** |
| SEC | **PASS** |
| UI-FN | **PASS** |
| BE-FN | **PASS** |
| Map R1–R11 | **PASS** (cite Dev mapGate + QA Aligned · packKind=map) |
| Overall | **PASS** · `review_confirm=approve` · **không** fix_gaps |
| Must / P0 | **0** |

## QUERY

| Check | Evidence | Result |
|-------|----------|--------|
| Live sessions | GET patrol sessions · next-card Route (QA Live `QL.1`) | **PASS** |
| Tiles | MapLibre → `GET gis/tiles/…` · clip basemap (QA S0 canvas) | **PASS** |
| Chainage | `GET gis/chainage?lat&lng&route` · `gis/endpoint.ts` · GisService · gap>2km null | **PASS** |
| Check-in write | `createCheckIn` + `chainageKm`/`chainageLabel` · GPS raw · planPointLabel≠km | **PASS** |
| Track | bake cite · color token `#0A84FF` · **cấm** màu tên | **PASS** |
| No invent | **cấm** PatrolMapController · **cấm** invent geom · overlay bake/read | **PASS** |
| No ERP / OMS SSOT | Mobile.Bff relative · DOMAIN-MAP row · **cấm ERP.*** | **PASS** |

## SEC

| Check | Evidence | Result |
|-------|----------|--------|
| Auth gate | `hasAccessToken()` · guest → login · map boot when authed (PatrolMapPage) | **PASS** |
| Tile / API auth | Bearer via existing shell · BFF JWT scope (T-PERM-01) | **PASS** |
| GPS | real `geolocation` · deny hide me · **cấm** fake (QA T-QA-GPS-01) | **PASS** |
| Chainage clip | staff UserRouteSegments · Admin/MANAGER unrestricted (Dev/SA) | **PASS** |
| No secrets in FE | labels LOOKUP · no hard-coded credentials | **PASS** |
| Scope | **cấm ERP.*** · **cấm** Map.Api · migration Schema_* only | **PASS** |

## UI-FN

| Zone / AC | Evidence | Result |
|-----------|----------|--------|
| PM-00…08 keep | QA S0 Aligned · chrome + mapHost + basemap×2 + locate + legend + next + me | **PASS** |
| PM-09 Ghim | `btn-pin-here` → chainage fill editable (code + QA soft) | **PASS** |
| PM-10 sheet | CheckInSheet · chainage* · LeaveConfirmModal · POST body | **PASS** |
| Track `#0A84FF` | `TRACK_COLOR` PatrolMapPage · QA soft code cite | **PASS** |
| Labels | `useFormOptions` · `patrolMap.*` / `checkin.field.chainage*` · VI-ENC PASS | **PASS** |
| Entry | `/m/ban-do-tuan` · Home `#gridPatrolMap` → hub → map (QA-20) | **PASS** |
| DES-GRID / filter | N/A phone Map · QA **WAIVE** | **PASS** (N/A) |
| Kind B shell / form grid / filter-right | **N/A** packKind=map · **cấm** apply list Kind B gates | **PASS** (N/A) |

## BE-FN

| Check | Evidence | Result |
|-------|----------|--------|
| DOMAIN-MAP | row `web-rmms-patrol-map` · sessions + check-in(+chainage*) · gis/chainage · bake cite | **PASS** |
| API mới | GET `gis/chainage` · GisChainageDto · gap null | **PASS** |
| Schema | `Schema_PatrolCheckInChainage` · ChainageKm/Label scalar · **cấm** *Json | **PASS** |
| POST check-in | PatrolSessionService persists chainage* | **PASS** |
| Migration deploy | file present · **soft** apply on deploy (Dev debt) | **PASS** (soft note) |
| No invent controller | **cấm** PatrolMapController · **cấm** Map.Api | **PASS** |

## Soft / carry (không block)

| ID | Sev | Note |
|----|-----|------|
| GAP-QA-E2E-STOCK-DUP | soft | stock `yarn e2e-qa` legacy URL DUP · capture script = evidence |
| GAP-STATUS-URL-LEGACY | soft | packet old `/web-rmms-patrol-map` 404 · live SSOT `/m/ban-do-tuan` |
| GAP-QA-ZONE-PM-THIN | soft | zone PM thin · chainage/track check soft (code+DoR) |
| GAP-MIG-DEPLOY | soft | apply `Schema_PatrolCheckInChainage` on deploy |
| GAP-TRACK-BAKE-TIGHTEN | soft | bake-only overlay by routeCode can tighten (Dev debt) |

## Baseline (keep · new_page `task_2a03f319`)

Prior review **PASS** · contentHash `6f74282b…` · QUERY/SEC/UI-FN/BE-FN PASS · Must 0 — **không** xóa.

## Review confirm

- `review_confirm` = **approve** (autoApprove=ON)
- Must/P0 = **0** · **không** assign `fix_gaps`
- next: pipeline complete · **cấm** start role khác trong task này (GAP-PKT-ROLE-01)
