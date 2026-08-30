# Real-data bind — incident-detail (mobile)

| | |
|---|---|
| feature | `incident-detail` |
| prefix | `mobile-bff/api/v1` |
| sameMobile | yes · proxy Incident domain |
| taskId | `task_42bb4141` |

Skill: `example/real-data-bind.md` · **GAP-MOB-REAL-01**

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `api` | CTX `incident-detail.md` · `incident.md` · `IncidentsController.GetById` · `Close` | EmptyChrome 404 · back list | Demo SC-2401 SSOT · toast optional |
| `derived` | Severity×Status → badge VN | raw strings | **cấm** fake SC-* khi API OK |
| `geo` | Demo lat/lng display | `HasGps=false` → «Chưa có định vị» | **cấm** fake coords · **GAP-MOB-INC-DETAIL-GPS-01** |
| `catalog` | n/a detail P1 | — | — |

## §B — Bind field (HARD · khớp BFF table)

| uiField | Label | controlHint | catalogKind | GET / write | write field | sameMfe | sameMobile |
|---------|-------|-------------|-------------|-------------|-------------|---------|------------|
| codeValue | Mã | Text hero | — | `GET incident/incidents/{id}` → `Code` | — | gap | yes |
| badge | severity · status | Badge | — | `Severity` · `Status` | — | gap | yes |
| rowType | Loại | Text | — | `Title` / `IncidentType` | — | gap | yes |
| rowLoc | Vị trí ghim tự động | Text | — | `RouteName` · `KmStart` | — | gap | yes |
| rowGps | Định vị | Text | — | `HasGps` (+ demo coords fallback) | — | gap | yes |
| rowSource | Nguồn | Text | — | `DetectionId` · reporter (Android) | — | gap | yes |
| btnAssign | Giao việc xử lý | PrimaryButton | — | nav `estimate` | — | n/a | yes |
| btnMap | Xem trên bản đồ | SecondaryButton | — | nav `gis-map` | — | n/a | yes |
| btnClose | Đóng sự cố | SecondaryButton | — | `POST incident/incidents/{id}/close` | `CloseIncidentRequest` | gap | yes |

§B path **khớp** `incident-detail-bff-endpoints.md` — **không** invent `incident-detail`.

### Display rules

| Line | Rule |
|------|------|
| code | `Code` raw (SC-*) |
| badge | `"{SeverityVN} · {StatusVN}"` · map control-hint |
| type | ưu tiên `Title` (demo «Nứt mặt đường») · thiếu → `IncidentType` |
| loc | `"{RouteName} · Km {KmStart}"` · thiếu Km → Route only · **cấm** fake |
| gps | nếu DTO có Lat/Lng (hiện **không**) → `"lat, lng · ±N m"` · else nếu `HasGps` → loc text + «đã chốt» · else «Chưa có định vị» · demo coords **chỉ** fallback offline |
| source | `DetectionId` prefix «AI DET-…» · hoặc «Tuần đường …» từ Description/AssetLabel nếu có · empty OK (iOS demo không có row) |
| close | 200 → toast «Đã đóng sự cố» · badge → Đã đóng · disable CTA |

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| severity/status display | derived from DTO | control-hint map | Invent status catalog API |
| assign people | — | nav estimate | Invent assign picker trên detail P1 |

## §D — Map / vẽ

`map: none` trên surface detail — CTA → sibling `gis-map` (pin incident). **Cấm** sửa định vị trên máy (feature-guide OUT).

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| Incident `Status` | `rmms_incidents` | user Close · (assign elsewhere) | GET / POST close | badge |
| Detail payload | GET by id | open / refresh | GET `{id}` | hero + rows |
| Offline | local demo fallback | network fail | — | demo SC-2401 |
| Closed | POST close | user | close | toast · disable |

## §F — Handoff

| Role | Dùng packet |
|------|-------------|
| PO | DoD «màn mở = data thật» · GAP pack/GPS/source dual |
| Design | control-map khớp §B · dual title/Nguồn parity |
| SA | giữ path đã cite · Lat/Lng Signed nếu cần · **cấm** invent path |
| Dev iOS + Android | cùng §B · prefix mobile-bff |

## Demo rows SSOT (fallback)

| Field | Value |
|-------|-------|
| Code | SC-2401 |
| Badge | Nghiêm trọng · Đang mở |
| Loại | Nứt mặt đường |
| Vị trí | QL.1 · Km 1556+080 |
| Định vị (demo only) | 10.9620, 106.8518 · ±5 m |
| Nguồn (Android) | Tuần đường PAT-…0014 |
| Toast close | Đã đóng sự cố |

## § Cấm

- Watermark / «bản Gói N» / process text  
- Fake lat/lng khi live GetById OK (không có coords trên DTO)  
- Invent mobile-only path `incident-detail`  
- Bind `mfeStdUrl`  
- Skip §B ≠ BFF → **GAP-MOB-REAL-01**  
- Gộp list/create/chat/sheet vào slug detail → **GAP-MOB-ACT-02**  
- Enqueue Close / GET → **GAP-MOB-ACT-07**  
- Sửa định vị / xóa hẳn  

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-08-29T02:38:26.000Z |
| versionGate | rechecked |
| contentHash | sha256:incident-detail-mobile-real-data-20260829 |
| taskId | `task_42bb4141` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
