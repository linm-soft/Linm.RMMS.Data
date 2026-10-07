# Data-analy — controlHint — web-rmms-patrol-map

| Field | Value |
|-------|-------|
| feature | `web-rmms-patrol-map` |
| title | Bản đồ tuần — chainage GPS · bake tim · nét ca |
| packKind | `map` |
| changeScope | `edit_page` |
| mode | `feature_context` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.28.3` |
| versionGate | `ok` |
| contentHash | `sha256:52bd4a74401781b03b20ace930fd7d47d9e5ca2c5714b39fc6927f0d4fd6bcaf` |
| analyzedAt | `2026-09-30T13:50:00.000Z` |
| demo | **N/A** |
| realData | `specs/_data-analy/features/web-rmms-patrol-map-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol + Gis · **cấm ERP.*** · **cấm** Map.Api |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` · `/ban-do-tuan` |
| mfeStdUrl | `http://localhost:9301/web-rmms-patrol-map` |
| mfeStdRoute | `/web-rmms-patrol-map` |
| mapGate | `/agent-dev-oms-map` R1–R11 · Fit · line levels · OSRM local |
| nativeRouteCite | SCREENS `/patrol-map` · `/field/map` |
| taskId | `task_a63fcbbb` |
| phoneFrame | `max-width: 430px` |
| formPattern | Mobile Map / full · check-in sheet peer · **không** ERP Modal Kind B |
| priorArtifacts | PO/Design/SA/TL/Dev/QA/Review **giữ** (new_page baseline) · analy ghi § Delta only |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map (delta). SA **chốt** Schema_* + DOMAIN-MAP chainage.  
> Nhãn UI: `useFormOptions()` — **cấm** hardcode VN.  
> **Cấm** nhét phone Map vào MFE desktop · **cấm** native.

## § Delta Current vs New (HARD · edit_page)

| Area | Current | New |
|------|---------|-----|
| Scope | new_page map RO + toast check-in | edit_page · packKind **map** · chainage + bake nét |
| Check-in DTO | `planPointLabel` = km/label | **`chainageKm`** Number + **`chainageLabel`** Text · `planPointLabel` ≠ km · Schema_* CLI pair |
| `fetchLatestKm` | đọc `planPointLabel` | đọc **`chainageLabel`** |
| Chainage | không API | `GET gis/chainage?lat&lng&route` · KM_POST box · user segment clip · Admin/MANAGER no clip |
| Label format | demo «Km 0+000 · Nghi Lộc» | `QL.1 - Km {nguyên} + {mét}m` · gap >2km → null + user nhập |
| Bake | — / public risk | OSRM **local** `127.0.0.1:5000/route` · bake 1 lần · cấm project-osrm · cấm Overpass browser |
| streets/search | có thể hiểu nhầm tính km | snap **tên** only · echo km client |
| UI Ghim | pinHere · trackColor theo tên | Ghim → chainage → ô editable · GPS thô + user confirm · snap không ghi đè pin · **bỏ** màu Thị B/Tuấn |
| Nét ca | polyline màu userName | tim bake `routeCode` cắt km user |
| Demo seed | NgheAnPatrolGpsCatalog labels | **cấm** nhãn demo trên ca thật |

## Sources

| Source | Path | note |
|--------|------|------|
| CTX | `docs/context/features/web-rmms-patrol-map.md` | edit_page § Delta · hash ebf12c… |
| Code MFE | `Linm.Web.RMMS.Mobile` · `PatrolMapPage` · `CheckInSheet` · `camPatrol/endpoint.fetchLatestKm` | Current |
| BE | `Linm.RMMS.WebService` · Patrol · Gis · `GisRouteBakeService` · `rmms_user_route_segments` | Current + GAP chainage |
| DOMAIN-MAP | row `web-rmms-patrol-map` | SA extend Gis chainage |
| Map gate | `/agent-dev-oms-map` | R1–R11 |

## Screens Map (ids)

| id | route / zone | surface |
|----|--------------|---------|
| PM-00 | phone | frame ≤430 |
| PM-01 | top bar | back · title · Ghi điểm tuần |
| PM-02 | map host | tiles + bake overlay |
| PM-03 | basemap | Tiêu chuẩn \| Vệ tinh · locate |
| PM-04 | legend | isolate |
| PM-05 | next card | Route |
| PM-06 | me-dot | Geolocation |
| PM-07 | locate popup | Vị trí của bạn |
| PM-08 | entry | Home / Field / Supervise |
| PM-09 | pin+chainage | Ghim → GET chainage → editable |
| PM-10 | check-in | chainageKm + chainageLabel + GPS raw |

**Out:** `/me*` · journal/kết ca/tồn tại/tần suất · ERP.* · Map.Api · public OSRM/Overpass · hardcode track color by name.

## ControlHint inventory (Map + chainage)

| uiField | screen | controlHint | catalogKind / notes |
|---------|--------|-------------|---------------------|
| phoneFrame | PM-00 | Layout | max-width 430 |
| navBack | PM-01 | Button/Nav | peer entry |
| title | PM-01 | Text RO | copy key |
| trailingCheckin | PM-01 | Button | open check-in peer |
| mapHost | PM-02 | Map | MVT + bake centerline overlay |
| basemapStd/Sat | PM-03 | Chip | Tiêu chuẩn / Vệ tinh |
| locateMe | PM-03 | Button | Geolocation · deny disable |
| legend.* | PM-04 | Chip | isolate |
| nextCard | PM-05 | Card RO | sessions Đang tuần |
| gpsMe | PM-06 | MapMarker | no fake |
| locatePopup | PM-07 | Popup | `/map-inspect-popup` |
| pinHere | PM-09 | Button | Geolocation → `GET gis/chainage` |
| chainageKm | PM-09/10 | Number | editable · null nếu gap>2km |
| chainageLabel | PM-09/10 | Text | editable · format `QL.n - Km X + Ym` |
| planPointLabel | PM-10 | Text | **không** km · điểm kế hoạch / khác |
| gpsRawLatLng | PM-10 | Number RO pair | lưu GPS thô · snap không overwrite pin |
| trackLine | PM-02 | MapLine | bake routeCode · cắt km user · **cấm** màu theo tên |

## Map gate checklist (cite)

R1–R11 `/agent-dev-oms-map` · Fit default · line levels · OSRM local bake · MFE clip basemap · **cấm** OSM.org world.

## Open questions (PO Ask)

| Id | Q |
|----|---|
| UNCLEAR-CHAINAGE-BFF | Mobile.Bff proxy path `gis/chainage` — SA confirm route + auth |
| UNCLEAR-SCHEMA-PAIR | Schema_* migration pair name cho `chainageKm`/`chainageLabel` — SA |
| UNCLEAR-TRACK-STYLE | Màu nét mặc định sau bỏ hard-code tên — Design |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:52bd4a74401781b03b20ace930fd7d47d9e5ca2c5714b39fc6927f0d4fd6bcaf` · `rulesVersion=2026.09.28.3` · `analyzedAt=2026-09-30T13:50:00.000Z` · `taskId=task_a63fcbbb`
