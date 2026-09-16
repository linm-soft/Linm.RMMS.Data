# Real-data bind — supervise-detail

| | |
|---|---|
| feature | `supervise-detail` |
| prefix | `mobile-bff/api/v1` |
| sameMobile | yes · proxy Patrol GetById attendance-logs |
| taskId | `task_950d67b1` |

Skill: `example/real-data-bind.md` · **GAP-MOB-REAL-01**

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `api` | CTX `supervise-detail.md` · `AttendanceLogsController.GetById` · `AttendanceLogDto` | 404 → empty chrome · back list | Toast lỗi · demo SSOT fallback · **cấm** fake 200 |
| `nav` | parent list pass `Id` | thiếu Id → back list · toast | — |
| `derived` | Status VN map · InZone label · loc join Route+KmPoint | unknown → raw | — |
| `demo` | mobile-p1 `#sc-supervise` card SSOT · target `#sc-supervise-detail` | UI-only khi GET fail | **không** SSOT ship khi live OK |

## §B — Bind field (HARD · khớp BFF table)

| uiField | Label | controlHint | catalogKind | GET / write | write field | sameMfe | sameMobile |
|---------|-------|-------------|-------------|-------------|-------------|---------|------------|
| userHero | (tên NV) | Text display | — | GET `patrol/attendance-logs/{id}` | `UserName` | yes (web View) | yes |
| codeValue | Mã | Text | — | GET | `Code` | yes | yes |
| rowOrg | Tổ / đơn vị | ListRow | — | GET optional | `Note` · demo fallback | gap | yes |
| rowLoc | Tuyến · lý trình | ListRow | — | GET | `Route` · `KmPoint` | yes | yes |
| rowTime | Thời điểm | ListRow | — | GET | `CheckInAt` | yes | yes |
| rowStatus | Trạng thái | ListRow | — | GET + map | `Status` | yes | yes |
| rowGps | Tọa độ | ListRow | — | GET | `Lat` · `Lng` | yes | yes |
| rowInZone | Trong vùng | ListRow | — | GET | `InZone` | yes | yes |
| btnMap | Xem trên bản đồ | PrimaryButton | — | nav `gis-map` | — (pass Id/Lat/Lng) | gap | yes |
| toastErr | (lỗi) | Toast | — | after GET fail | — | — | yes |

§B path **khớp** `supervise-detail-bff-endpoints.md` — **không** invent `supervise-detail` / `checkin-detail`.

### Display rules

| Line | Rule |
|------|------|
| hero | `UserName` raw |
| code | `Code` raw (CC-*) |
| org | `Note` nếu non-empty · else `Tổ tuần đường · VP-IV.1` (GAP-MOB-SUP-DET-ORG-01) |
| loc | `"{Route} Km {KmPoint}"` · thiếu Km → Route only · địa danh demo append OK khi offline |
| time | `CheckInAt` format `yyyy-MM-dd HH:mm:ss` local |
| status | map control-hint · default «Đã ghi điểm tuần» khi raw khớp demo |
| gps | `"{Lat}, {Lng}"` (DTO non-null decimal) |
| inZone | `true` → «Trong vùng» · `false` → «Ngoài vùng» |
| map CTA | pass Id + Lat/Lng · **không** fake coords |

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| status display | — (client map) | control-hint | Invent status catalog API |
| org unit | — | demo / Note | Invent OrgUnit field BE trên detail P1 |
| — | — | DB `rmms_attendance_logs` | In-app `demoItems` làm nguồn khi BFF OK |

## §D — Map / vẽ

`map: none` embed trên `#sc-supervise-detail`. CTA nav `gis-map` (sibling shared_action) · pass pin Lat/Lng.

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| Detail load | AttendanceLog | appear / nav Id | GET `…/{id}` | bind hero + rows |
| XCO deny | AllowedCompanyIds | server | GET 403 | toast · back |
| Not found | — | server | GET 404 | empty · back |
| Pin map | local nav | user CTA | — | `go('gis-map')` |
| Create/update/delete | — | — | POST/PUT/DELETE | **OUT** — attendance / web |

## §F — Handoff

| Role | Dùng packet |
|------|-------------|
| PO | DoD «card → push · GET thật · CTA map · screen riêng ≠ CI-DETAIL» · GAP pack/org/demo |
| Design | dual `#sc-supervise-detail` · rewire demo · control-map khớp §B |
| SA | giữ GetById + XCO · **cấm** ERP.* · Step 4b N/A |
| Dev iOS + Android | cùng §B · wire list toast → push · prefix mobile-bff |

## Demo rows SSOT (fallback UI only — **không** fake GET 200)

| Field | Value |
|-------|-------|
| Title | Chi tiết check-in |
| UserName | Nguyễn Văn A |
| Code | CC-20260810-001 |
| Tổ | Tổ tuần đường · VP-IV.1 |
| Tuyến | QL.1 Km 1556+000 · Xuân Hải |
| Thời điểm | 2026-08-10 08:40:12 |
| Trạng thái | Đã ghi điểm tuần |
| Tọa độ | 11.5300, 109.0040 |
| Trong vùng | Trong vùng |
| CTA | Xem trên bản đồ |
| Back | Giám sát |

## § Delta Current vs New (real-data)

| ID | Current | New |
|----|---------|-----|
| GAP-MOB-SUP-DET-NAV-01 | card toast only | Nav + GET by id |
| GAP-MOB-SUP-DET-DATA-01 | — | Bind UserName/Code/Route/Km/Time/Status/LatLng/InZone/Note |
| GAP-MOB-SUP-DET-ORG-01 | list Note fallback | same on detail |
| GAP-MOB-SUP-DET-DEMO-01 | wire CI-DETAIL | own `#sc-supervise-detail` |

## § Cấm

- Watermark / «bản Gói N» / process text  
- Fake success khi GET fail  
- Invent mobile-only path `supervise-detail` / `checkin-detail`  
- Bind `mfeStdUrl` / ERP.*  
- Skip §B ≠ BFF → **GAP-MOB-REAL-01**  
- Ship từ hardcode khi BFF live → **GAP-MOB-REAL-02**  
- Enqueue POST/PUT/DELETE từ detail → **GAP-MOB-ACT-07**  
- Gộp list / patrol-checkin / attendance CRUD  

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.31.2 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | `2026-08-31T01:47:46.000Z` |
| versionGate | rechecked |
| contentHash | sha256:supervise-detail-real-data-20260831 |
| taskId | `task_950d67b1` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.31.2 schemaVersion=2 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
