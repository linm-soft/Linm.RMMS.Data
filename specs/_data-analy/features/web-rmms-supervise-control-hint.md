# Data-analy — controlHint — web-rmms-supervise

| Field | Value |
|-------|-------|
| feature | `web-rmms-supervise` |
| title | Giám sát và chi tiết — list check-in + RO detail |
| packKind | `list` |
| changeScope | `new_page` |
| mode | `feature_context` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:bd4aedbcdb3686ca817a32c3f563270adc1d35b1f7bca526be023528a1840d2b` |
| analyzedAt | `2026-09-26T02:27:00.000Z` |
| demo | **N/A** |
| realData | `specs/_data-analy/features/web-rmms-supervise-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol `attendance-logs` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-supervise` |
| mfeStdRoute | `/web-rmms-supervise` |
| taskId | `task_b6e497f4` |
| phoneFrame | `max-width: 430px` |
| formPattern | Mobile list + RO detail · **không** ERP Modal/Slideout Kind B · **không** POST trên Giám sát |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** DOMAIN-MAP row.  
> Nhãn UI: `useFormOptions()` / copy key — **cấm** hardcode tiếng Việt trên form.  
> **Cấm** nhét phone Supervise vào MFE desktop · **cấm** sửa iOS/Android native.

## Sources

| Source | Path | note |
|--------|------|------|
| CTX | `docs/context/features/web-rmms-supervise.md` | new · written this run |
| Peer | `docs/context/features/supervise.md` · `supervise-detail.md` | list + detail DoD |
| Screens | `docs/plan/web-rmms-mobile/SCREENS.md` | `/supervise` + `/:id` |
| Plan | `docs/plan/web-rmms-mobile/PLAN.md` | SuperviseView · SuperviseDetailView |
| DOMAIN-MAP | Patrol · slug `supervise` | **GAP** slug `web-rmms-supervise` chưa có row |
| BFF | Mobile.Bff `:5202` · `mobile-bff/api/v1` | **cấm** Web BFF base |

## Screens Supervise (ids)

| id | route / zone | surface |
|----|--------------|---------|
| SUP-00 | phone | frame ≤430 · DES-MOB-SUPERVISE / DES-MOB-SUP-DETAIL |
| SUP-01 | `/supervise` | list title + chrome |
| SUP-02 | filter | sheet tuyến + ngày · live |
| SUP-03 | segment | Danh sách / Bản đồ → `/patrol-map` |
| SUP-04 | cards | rich-card rows từ GET list |
| SUP-05 | `/supervise/:id` | RO detail · CTA map |
| SUP-06 | GPS | Lat/Lng RO only |
| SUP-07 | empty/error | `[]` / toast · **cấm** demo SSOT |
| SUP-08 | entry | Home / Field · **cấm** gộp attendance |

**Out:** POST attendance · Face/NFC · invent `supervise*` API · desktop Field · ERP.*.

## ControlHint inventory

| uiField | screen | controlHint | catalogKind / notes |
|---------|--------|-------------|---------------------|
| phoneFrame | SUP-00 | Layout | `max-width: 430px` |
| pageTitle | SUP-01 | Text | copy `supervise.title` |
| btnBack | SUP-01 | Button/Nav | back Home/Field |
| btnFilter | SUP-01 | Button | open SUP-02 sheet |
| filterRoute | SUP-02 | Select/Text | query `route` → GET |
| filterDay | SUP-02 | Date | client filter `CheckInAt` |
| btnApplyFilter | SUP-02 | Button | re-fetch / re-filter · **cấm** toast giả |
| segmentList | SUP-03 | Segment | stay list |
| segmentMap | SUP-03 | Segment/Nav | → `/patrol-map` · **cấm** toast |
| cardUserName | SUP-04 | Text | `UserName` |
| cardRouteKm | SUP-04 | Text | `Route` · `KmPoint` |
| cardTime | SUP-04 | DateTime | `CheckInAt` |
| cardStatus | SUP-04 | Badge | `Status` / `InZone` |
| cardOrgNote | SUP-04 | Text | `Note` org fallback |
| cardTap | SUP-04 | Nav | → `/supervise/:id` |
| detailHero | SUP-05 | Text | `UserName` · `Code` |
| detailRows | SUP-05 | ListRow RO | Tổ · Tuyến · Thời điểm · Trạng thái · Tọa độ · Trong vùng |
| btnMap | SUP-05 | Button/Nav | → map peer · pass Id/Lat/Lng |
| emptyState | SUP-07 | Empty | GET empty → `[]` |

## Filter / grid (desktop HARD)

| | |
|--|--|
| LinErpListFilterBar / DES-GRID-* | **N/A** — phone list · **không** Kind B desktop grid |
| Filter sheet | SUP-02 · route query + client day · live |

## GPS

| Màn | Rule |
|-----|------|
| SUP-04…05 | chỉ **đọc** tọa độ đã lưu · **không** capture · **không** POST |
| Attendance / check-in | **OUT** — owner khác |

## UNCLEAR

| id | Issue | Action |
|----|-------|--------|
| UNCLEAR-DOMAIN-MAP-SUP | DOMAIN-MAP chưa có row `web-rmms-supervise` | SA thêm · cite Patrol `supervise` |
| UNCLEAR-STD-ROUTE | SCREENS `/supervise*` vs packet `/web-rmms-supervise` | Design/Dev follow STATUS mfeStdUrl |
| UNCLEAR-FROMDATE | BE fromDate/toDate MISSING | P1 client day · **cấm** invent |
| UNCLEAR-ORG | DTO thiếu OrgUnit | bind `Note` / copy fallback |
| UNCLEAR-EMPTY-COPY | Peer mobile từng demo | Web-rmms: live only · empty/`[]` · **cấm** demo SSOT |

## Handoff

| Role | Dùng |
|------|------|
| PO | List + filter live · segment map sibling · RO detail · DoD · no POST · no attendance gộp |
| Design | Phone 430 · zones SUP-* · DES-MOB-SUPERVISE / SUP-DETAIL · prototype+reviewUrl |
| SA | DOMAIN-MAP row · Mobile.Bff `patrol/attendance-logs` · **cấm** invent path |
| TL/Dev | Wire Mobile MFE Supervise only · reuse GET list + GET/{id} |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:bd4aedbcdb3686ca817a32c3f563270adc1d35b1f7bca526be023528a1840d2b` · `rulesVersion=2026.09.25.2` · `analyzedAt=2026-09-26T02:27:00.000Z`
