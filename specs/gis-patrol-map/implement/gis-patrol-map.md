# Implement — gis-patrol-map

| Field | Value |
|-------|-------|
| feature | `gis-patrol-map` |
| role | `dev` · `/agent-dev-oms-map` |
| status | `done` |
| skillVersion | `2026.09.05.03` |
| contentHash | `sha256:e1d043dbf402977a2d0e888df1d32d0e542b2792b22076e2dc5fc482e8a7c287` |
| taskId | `task_a6435708` |
| changeScope | `edit_page` |
| packKind | `map` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Gis` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` |
| liveRoute | `/gis/tuan-duong` |
| mfeStdUrl | `http://localhost:9301/gis-patrol-map` |
| writtenAt | `2026-09-12T06:25:00.000Z` |

## Tasks done

| Task | Result |
|------|--------|
| T-BE-GIS-01 | Reuse PatrolSessions/CheckIns · BFF proxy sessions + check-ins · `PhotoLocalIds` = guid (seed + create validate) · migration=`none` · files via FileService.Bff |
| T-PERM-01 | Codes documented: `patrol.sessions.read|create|update|delete` + `files.read` · View map = read + files.read · RequirePermission stub DEFER Auth |
| T-UI-MAP-01 | OMS R1–R11 · clip basemap · host→bar · `fitVnClipMap` · OSRM track · pin teardrop · click → React MAP-POPUP-INSPECT · **GAP-MAP-PATROL-PHOTO-01** GALLERY-PATROL popup + Chi tiết |
| T-UI-MAP-FORM-01 | Read-only · no dirty Leave · toast `useAppToast` · **cấm** `window.alert` |
| T-UI-UX-01 / T-UI-RESP-01 | Shell keep · gallery usable dock/full · no demo chrome |

## Wire

1. `GET web-bff/api/v1/patrol/sessions` → LIST-PERSON
2. `GET …/sessions/{id}/check-ins` → pins + timeline + OSRM
3. Pin/history click → `GisPatrolInspectPanel` · `photoLocalIds` guid → `GisInspectImageGallery` → `GET web-bff/api/v1/files/{id}/object`
4. Chi tiết history: inline gallery parity (`data-zone=GALLERY-PATROL`)

## Build

| Gate | Result |
|------|--------|
| MFE `yarn build` | **PASS** (webpack size warnings only) |
| BE `dotnet build` RMMS.Service.Api | **PASS** (1 existing CS0105 warning) |
| Migration | none |
| E2E | queued `/agent-qa*` only — **not** run |

## Debt / notes

- Seed/demo FileService guids may 404 until real blobs uploaded — gallery shows «Lỗi ảnh» / toast; empty ids → «Chưa có ảnh».
- `RequirePermission` attributes remain TODO until CommonLib Auth ≥1.4.0 (same pattern other domains).
- Re-seed DB/SQL if legacy `p-na-*` still in DB: `local-script/seed-nghe-an-mock.sql` + demo seed catalog updated to `f11e0001-…` guids.

## Files touched (slim)

- FE: `GisPatrolMapPage.tsx` · `GisPatrolInspectPanel.tsx` · `mapCheckInPin.ts` · `inspectFileIds.ts` · `vinhPatrolSeed.ts` · CSS
- BE: `NgheAnPatrolGpsCatalog.cs` · `PatrolSessionService.cs` (guid validate) · `PatrolSessionsController.cs` (perm doc) · `seed-nghe-an-mock.sql`

<!-- implement schemaVersion=1 role=dev feature=gis-patrol-map taskId=task_a6435708 -->
