# Dev — Implement — web-rmms-patrol-map

> Status: **done** · writtenAt `2026-09-30T14:50:00.000Z` · task `task_32f76ead`  
> skillVersion: `2026.09.05.03` · packKind: `map` · autoApprove: ON  
> **changeScope=`edit_page`** · **cấm** xóa baseline notes · **cấm** e2e / start:std ở Dev · **cấm** ERP.* · **cấm** Map.Api.

| | |
|--|--|
| Feature | `web-rmms-patrol-map` |
| Title | Bản đồ tuần — chainage · bake track · check-in sheet |
| Role | `dev` |
| changeScope | `edit_page` |
| formPattern | Mobile Map / full · phone ≤430 · check-in peer sheet PM-10 · LeaveConfirmModal |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-patrol-map` |
| mfeStdUrl | `http://localhost:9301/web-rmms-patrol-map` |
| productRoute | `/patrol-map` · alias `/field/map` · cite `/ban-do-tuan` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` · domain Patrol + Gis · **cấm ERP.*** · **cấm Map.Api** · **cấm** PatrolMapController |
| Step 4b | **done** · `Schema_PatrolCheckInChainage` · ChainageKm/Label on `rmms_patrol_check_ins` |
| contentHash | `sha256:52bd4a74401781b03b20ace930fd7d47d9e5ca2c5714b39fc6927f0d4fd6bcaf` |
| mapGate | `/agent-dev-oms-map` R1–R11 |
| nextSlash | `/agent-review*` · **QA verdict=PASS** (`task_c35139c7` · S0/S1/QA-20 · live `/m/ban-do-tuan`) |

## Decisions (delta)

- Keep PM-00…08 chrome · tiles · sessions next-card · me-dot · basemap/legend
- PM-09: Ghim → `GET gis/chainage?lat&lng&route` → fill `chainageKm`/`chainageLabel` · gap>2km null · GPS raw persist · snap≠overwrite pin · `planPointLabel`≠km
- PM-10: CheckInSheet peer · editable chainage* · POST + GPS raw · dirty → LeaveConfirmModal
- Track color **`#0A84FF`** · removed name-based Thị B/Tuấn colors
- BFF: tiles/streets MapService · **gis/chainage → RMMS ApiBase** (proxy already OK · no BFF code change)
- Schema: `Schema_PatrolCheckInChainage` · scalar only · **cấm** `*Json`
- `fetchLatestKm` ← `chainageLabel` (fallback planPointLabel)
- Labels: `useFormOptions` / `patrolMap.*` · check-in `checkin.field.chainage*`
- **Cấm** demo Nghi Lộc · **cấm** OSM.org · **cấm** invent PatrolMapController · **cấm** public OSRM

## Tasks done

| id | status | notes |
|----|--------|-------|
| T-BE-GIS-01 | **done** | GET `gis/chainage` · Schema_* · POST check-in + chainage* · DOMAIN-MAP cite |
| T-PERM-01 | **done** | JWT via existing scope · Admin/MANAGER Unrestricted no segment clip · staff UserRouteSegments |
| T-UI-MAP-01 | **done** | Ghim→chainage · track `#0A84FF` · clip basemap · no name color |
| T-UI-MAP-FORM-01 | **done** | CheckInSheet chainage editable · GPS RO · LeaveConfirmModal · POST body |
| T-UI-UX-01 | **done** | labels lookup · no hardcode VN outside fallback |
| T-UI-RESP-01 | **done** | keep phone map layout ≤430 |
| T-QA-MAP-01 | pending | queued `/agent-qa*` only |

## Files

### FE (MFE Mobile)
- `src/pages/WebRmmsPatrolMap/PatrolMapPage.tsx` · `lookupStatic.ts`
- `src/pages/WebRmmsMobileA/CheckInSheet.tsx` · `lookupStatic.ts`
- `src/services/gis/endpoint.ts` · `types.ts`
- `src/services/patrol/types.ts`
- `src/services/camPatrol/endpoint.ts` (fetchLatestKm)

### BE (Linm.RMMS.WebService)
- `PatrolCheckInEntity` · `PatrolCheckInDtos` · `PatrolSessionService`
- `GisMapController` · `IGisService` / `GisService.GetChainageAsync` · `GisChainageDto`
- Migration `20260930143500_Schema_PatrolCheckInChainage` + snapshot

### BFF
- Mobile.Bff verify only — `gis/chainage` already forwards ApiBase

## Build gate

| Gate | Result |
|------|--------|
| MFE `yarn build` | **PASS** (webpack size warnings only) |
| BE `RMMS.Service.Api` `dotnet build` | **PASS** |
| Mobile.Bff `dotnet build` | **PASS** |
| E2E / `yarn start:std` | **skipped** (Dev · queued QA) |

## Debt / notes

- Track polyline still uses map-components `routeAlongRoads` for pin-order path; color forced `#0A84FF`. Full bake-only overlay by routeCode can tighten in QA/follow-up.
- Apply DB migration on deploy (`Schema_PatrolCheckInChainage`).
- DES-GRID / LinErpListFilterBar: **N/A** phone Map.

## Notes — ghim mở ca

`PatrolMapPage` Tiếp tục dùng `ensureRoadPatrolSession` khi `sessionId` trống. Tuyến bắt buộc trên dialog. Không toast thiếu ca. Không có tuyến gần vị trí: tuyến ca đang mở chỉ là mặc định, vẫn đổi được. «Ca đang tuần» liệt kê mọi ca đang chạy; bấm một ca điền tuyến và ghi điểm trên ca đó. Đổi sang tuyến chưa có ca thì confirm thêm ca. Verify: `yarn typecheck`.

## Compact

- `handoff/dev-compact.md`

## QA verdict

- **PASS** · `task_c35139c7` · e2e S0/S1/QA-20 · PNG + vision Aligned · live `http://localhost:9301/m/ban-do-tuan`
- compact: `handoff/qa-compact.md` · scenarios: `qa/scenarios.md`
- next: `/agent-review*` · **cấm** phase=done
