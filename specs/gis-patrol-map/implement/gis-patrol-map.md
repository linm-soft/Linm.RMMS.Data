# Implement — gis-patrol-map

| Field | Value |
|-------|-------|
| feature | `gis-patrol-map` |
| role | `dev` · `/agent-dev-oms-map` |
| status | `done` |
| skillVersion | `2026.09.05.03` |
| contentHash | `sha256:ca2b1f0e2bf0bd97e92b99936fde30e4e92f1db00023191cf55297415b8d8247` |
| taskId | `task_3b6b95df` |
| changeScope | `edit_page` |
| packKind | `map` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Gis` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` |
| liveRoute | `/gis/tuan-duong` |
| mfeStdUrl | `http://localhost:9301/gis-patrol-map` |
| writtenAt | `2026-09-30T15:40:00.000Z` |
| prior | TL `task_31f40050` · Delta REAL…KM-EMPTY · keep PHOTO · autoApprove |

## Tasks done

| Task | Result |
|------|--------|
| T-BE-GIS-01 | Reuse PatrolSessions/CheckIns · SCOPE via `PatrolDataScope` · sessions enrich `AssignedSegments` + `JobTitle` + `UserDisplayName` · chainageKm/Label cite peer · migration=`none` · files FileService.Bff |
| T-PERM-01 | Codes KEEP: `patrol.sessions.read|create|update|delete` + `files.read` · View map = read + files.read · RequirePermission stub Auth |
| T-UI-MAP-01 | OMS R1–R11 · **BASE** `attachVnClipBasemap` · **LAYER-ASSIGNED** bake OSRM + **LAYER-KMPOST** clamp · **FIT-01** fitBounds nét giao · OSRM track · pin · **PIN-02** HARD · **KM-EMPTY** · **REAL-01** không seed Vinh kể cả API trống · keep GALLERY-PATROL |
| T-UI-MAP-FORM-01 | Read-only · no dirty Leave · toast `useAppToast` · **cấm** `window.alert` |
| T-UI-UX-01 / T-UI-RESP-01 | FILTER-BAR office/route · list employeeCode+km · shell dock/full · no demo chrome when live data |

## Wire

1. `GET web-bff/api/v1/patrol/sessions` (scoped) → LIST-PERSON · FILTER-BAR · `assignedSegments` · kmFromTo empty-ok
2. Select person → LAYER-ASSIGNED (segments+bake) · LAYER-KMPOST clamp · FIT-01
3. `GET …/sessions/{id}/check-ins` → pins + timeline + OSRM · chainageLabel
4. Pin/history → `GisPatrolInspectPanel` PIN-02 (tên · mã · lý trình · GPS6dp · giờ) · photoIds → FileService resign · GALLERY-PATROL
5. `GET gis/chainage` cite peer (endpoint wired FE) · bake via OSRM index + `cot-km` geojson

## Build

| Gate | Result |
|------|--------|
| MFE `yarn build` | **PASS** |
| BE `dotnet build` RMMS.Service.Api | **PASS** |
| Migration | none |
| E2E | queued `/agent-qa*` only — **not** run |

## Debt / notes

- LAYER-ASSIGNED empty when bake/OSRM index miss for route — track/pins still paint.
- RequirePermission attributes remain TODO until CommonLib Auth ≥1.4.0.
- FileService seed guids may 404 until real blobs — gallery empty/toast.

## Files touched (slim)

- FE: `GisPatrolMapPage.tsx` · `assignedLayers.ts` · `vinhPatrolSeed.ts` · `GisPatrolInspectPanel.tsx` · `responseModel.ts` · `gis/endpoint.ts` · `gisService.ts` · CSS
- BE: `PatrolSessionDtos.cs` · `PatrolSessionService.cs` (AssignedSegments + JobTitle map)

<!-- implement schemaVersion=1 role=dev feature=gis-patrol-map taskId=task_3b6b95df packKind=map -->
