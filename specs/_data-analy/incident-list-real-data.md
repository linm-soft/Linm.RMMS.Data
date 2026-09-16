# Real-data bind — incident-list (mobile)

| | |
|---|---|
| feature | `incident-list` |
| prefix | `mobile-bff/api/v1` |
| sameMobile | yes · proxy Incident domain |
| taskId | `task_246a6ce0` |

Skill: `example/real-data-bind.md` · **GAP-MOB-REAL-01**

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `api` | CTX `incident-list.md` · `incident.md` · `IncidentsController.GetList` | EmptyChrome · giữ shell + FAB | Demo 2 cards SSOT · toast optional |
| `derived` | Status → VN chrome warn/ok | raw Status | **cấm** fake SC-* |
| `catalog` | n/a list P1 | — | filter sheet P2 |

## §B — Bind field (HARD · khớp BFF table)

| uiField | Label | controlHint | catalogKind | GET / write | write field | sameMfe | sameMobile |
|---------|-------|-------------|-------------|-------------|-------------|---------|------------|
| items | Danh sách vấn đề | RichCard list | — | `GET incident/incidents` | — | gap | yes |
| cardTitle | (title) | Text | — | `Title` | — | gap | yes |
| cardTypeCode | loại · mã | Text | — | `IncidentType` · `Code` | — | gap | yes |
| cardLoc | vị trí | Text | — | `RouteName` · `KmStart` | — | gap | yes |
| cardPerson | người ghi | Text | — | `ReporterName` · `AssigneeName` | — | gap | yes |
| cardTime | thời gian | Text | — | `RequestedAt` | — | gap | yes |
| cardStatus | Trạng thái | StatusBar | — | `Status` | — | gap | yes |
| cardThumb | ảnh | Image | — | media **DEFER** | — | n/a | yes |
| search | Tìm kiếm vấn đề… | SearchField | — | local filter / query `search` | — | n/a | yes |
| bannerVis | Nhận diện mặt đường | Banner | — | nav `vis-capture` | — | n/a | yes |
| segMap | Bản đồ | Segment | — | nav `gis-map` | — | n/a | yes |
| actAssign | Giao việc | IconButton | — | nav `mnt-list` | — | n/a | yes |
| actDetail | Chi tiết | IconButton | — | nav `incident-detail` · pass `Id` | — | n/a | yes |
| actChat | Trao đổi | IconButton | — | toast P1 | — | n/a | yes |
| fabCreate | Ghi sự cố | FAB | — | `startIncidentPick()` | — | n/a | yes |

§B path **khớp** `incident-list-bff-endpoints.md` — **không** invent `incident-list`.

### Card line rules

| Line | Rule |
|------|------|
| typeCode | `"{IncidentType} · {Code}"` · thiếu type → `Code` only |
| loc | `"{RouteName} Km {KmStart}"` · có place fallback từ AssetLabel/Description tail · **cấm** fake lat/lng |
| person | `ReporterName` · nếu có `AssigneeName` khác reporter → append ` · {AssigneeName}` |
| time | format `yyyy-MM-dd HH:mm:ss` local từ `RequestedAt` |
| status | map control-hint Status VN · prefix UI `Trạng thái: ` |

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| status filter | query `status` on GET list | demo toast P1 | Invent `api/v1/.../statuses` P1 |
| severity filter | query `severity` | demo toast P1 | Invent severity catalog API |

## §D — Map / vẽ

`map: none` trên surface list — segment/card nav → sibling `gis-map` (overlay pins).

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| Incident `Status` | `rmms_incidents` | detail assign/close · create | GET list refresh | status bar |
| List items | GET | pull / open | GET incidents | cards |
| Offline | local demo fallback | network fail | — | demo SSOT cards |

## §F — Handoff

| Role | Dùng packet |
|------|-------------|
| PO | DoD «màn mở = data thật» · GAP place/org/thumb |
| Design | control-map khớp §B · dual parity |
| SA | giữ path đã cite · media thumb nếu Signed |
| Dev iOS + Android | cùng §B · prefix mobile-bff |

## Demo rows SSOT (fallback)

| title | typeCode | loc | person | time | status |
|-------|----------|-----|--------|------|--------|
| Nứt mặt đường | Sự cố nhanh · SC-2401 | QL.1 Km 1556+080 · Xuân Hải | Nguyễn Văn A · Tổ tuần đường VP-IV.1 | 2026-08-10 08:12:40 | Đợi phân công giám sát (warn) |
| Cống tắc | Hệ thống an toàn · SC-2398 | HCM · Km 12+400 | Trần Khánh · Chi cục II.2 | 2026-08-09 14:40:13 | Đang được giám sát (ok) |

## § Cấm

- Watermark / «bản Gói N» / process text  
- Fake lat/lng / fake SC codes khi API OK  
- Invent mobile-only path `incident-list`  
- Bind `mfeStdUrl`  
- Skip §B ≠ BFF → **GAP-MOB-REAL-01**  
- Gộp create/detail/map vào slug list → **GAP-MOB-ACT-02**  

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-08-29T01:30:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:incident-list-mobile-real-data-20260829 |
| taskId | `task_246a6ce0` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
