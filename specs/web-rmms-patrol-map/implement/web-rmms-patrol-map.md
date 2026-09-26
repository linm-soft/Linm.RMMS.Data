# Dev — Implement — web-rmms-patrol-map

> Status: **done** · writtenAt `2026-09-26T03:45:00.000Z` · task `task_94c320c9`  
> skillVersion: `2026.09.05.03` · packKind: `list` · autoApprove: ON  
> **Cấm** xóa file này.

| | |
|--|--|
| Feature | `web-rmms-patrol-map` |
| Title | Bản đồ tuần (Patrol Map) |
| Role | `dev` |
| changeScope | `new_page` |
| formPattern | Mobile Map / full · phone ≤430 · Android 1-1 · N/A ERP Modal · no POST check-in/tracks P1 |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-patrol-map` |
| mfeStdUrl | `http://localhost:9301/web-rmms-patrol-map` |
| productRoute | `/patrol-map` · alias `/field/map` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff Live APIs only · **cấm ERP.*** |
| Step 4b | **skip** · API Mới / entity / migration: **none** (SA + T-BE N/A) |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| nextSlash | `/agent-qa*` · e2eQa queued · **cấm** e2e ở Dev |

## Decisions

- New page module `src/pages/WebRmmsPatrolMap/` — PM-00…08 chrome + MapLibre clip MVT (reuse `WebRmmsGis/clipBasemapStyle` + `loadMapLibreCdn`).
- Live: `GET patrol/sessions` (Đang tuần → next-card Route text) · `GET gis/tiles` via MapLibre transformRequest.
- Overlay P1: **empty tracks** · **no next-pin** · legend chips isolate only · **cấm** invent geom/OMS.
- Check-in: `dispatchAppToast` only P1 · **không** POST.
- GPS: `navigator.geolocation` · deny → hide me / disable locate · map vẫn mở · **cấm** fake.
- Labels: `useFormOptions('web-rmms-patrol-map')` + `patrolMap.*` LOOKUP_STATIC · **cấm** Fit/Đường/Phố.
- Entry: Home / Field / Supervise → `/web-rmms-patrol-map` · aliases `/patrol-map` · `/field/map`.
- BE: DOMAIN-MAP row already present · no new controller · Patrol.Bff + Gis.Bff build verify only.

## Tasks done

| id | status | notes |
|----|--------|-------|
| T-01 | **done** | Route + layout + chrome nav/title/checkin · mfe.routes · aliases |
| T-02 | **done** | mapHost + MVT basemap Tiêu chuẩn\|Vệ tinh · no OSM.org · no Fit |
| T-03 | **done** | Locate + GPS me-dot + locate popup · deny hide |
| T-04 | **done** | Legend×4 + next-card Route · empty overlay |
| T-05 | **done** | Toast check-in · Mobile.Bff wire · labels · parity |
| T-BE | **N/A** | Step 4b skip |
| T-QA | pending | queued `/agent-qa*` only |

## Files (FE)

- `src/pages/WebRmmsPatrolMap/*` (page, layout, paths, lookup, styles, alias)
- `src/index.tsx` · `mfe.routes.json` · `src/dev/devRoutes.ts`
- `src/pages/WebRmmsHome/paths.ts` · `WebRmmsField/paths.ts` · `WebRmmsSupervise/paths.ts`

## Build gate

| Gate | Result |
|------|--------|
| MFE `yarn build` | **PASS** (webpack warnings size only) |
| BE Patrol.Bff `dotnet build` | **PASS** (verify, no code change) |
| BE Gis.Bff `dotnet build` | **PASS** (verify, no code change) |
| E2E / `yarn start:std` | **skipped** (Dev role · queued QA) |

## Debt / notes

- `yarn typecheck` repo has pre-existing errors in `fieldReflect/endpoint.ts` (out of scope).
- P2: tracks geom / next-pin coords / check-in POST sheet = peer OUT.
- DES-GRID / LinCatalogUiSchemaEditorModal: **N/A** phone Map.

## Compact

- `handoff/dev-compact.md`
