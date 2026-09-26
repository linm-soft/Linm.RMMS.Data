# Data-analy — real-data bind — web-rmms-field

| Field | Value |
|-------|-------|
| feature | `web-rmms-field` |
| title | Hub Field — chrome native và hai lối |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_32822b41` |
| prefix API | `api/v1/patrol` · hub resource **`sessions`** (GET) · deep cite peer |
| prefix BFF web (cite) | `web-bff/api/v1/patrol/sessions` · **không** base client |
| prefix BFF mobile (HARD) | `mobile-bff/api/v1` · host `http://localhost:5202` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-field` |
| domain | **Patrol** · hub chrome (+ cite Integration/AiVision/Incident/FileService via peer) |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| analyzedAt | `2026-09-26T02:00:48.000Z` |
| demo | **N/A** · **cấm** demo-json / in-app mock SSOT |

## § Scope hub

| In | Out |
|----|-----|
| FL-00…03 · 2 cửa · sync · tiles nav peer · optional sessions badge | mở ca · check-in · journal · findings · kết ca · frequency · attendance/NT/cam/reflect/offline/supervise/map CRUD |
| API **Live** `GET patrol/sessions` | API **Mới** FieldController · invent hub write |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/web-rmms-field.md` | — | — |
| `plan` | `docs/plan/web-rmms-mobile/PLAN.md` · Tab field · W3 | — | bỏ tab me |
| `screens` | `docs/plan/web-rmms-mobile/SCREENS.md` · Tab Field | — | BFF + GPS rules |
| `peer` | `web-rmms-mobile-a` · shell · attendance · nghiem-thu · cam-patrol · field-reflect · offline · supervise · patrol-map | n/a | deep owners |
| `api` | `PatrolSessionsController` · GET list | empty doors no badge | toast · **cấm** `window.alert` |
| `bff` | Mobile.Bff `:5202` · rewrite/proxy patrol | 503 | retry |
| `domain-map` | Patrol | — | **GAP** slug field · **cấm ERP.*** |
| `catalog` | — (hub không master form) | — | labels via `useFormOptions` |
| `auth` | `GET auth/profile` (cite shell/peer) | guest → shell login | — |
| `geo` | device Geolocation (deep only) | deny → peer block | **cấm** fake lat/lng on hub |
| `demo` | — | N/A | **cấm** demo SSOT |

## §B — Bind field (HARD) — Field hub

| uiField | Label (key) | controlHint | catalogKind | GET | write field | sameMfe | sameMobile |
|---------|-------------|-------------|-------------|-----|-------------|---------|------------|
| door.patrol | tuần đường | Button/Nav | LOOKUP_STATIC copy | optional `GET patrol/sessions` filter `Tuần đường`+`Đang tuần` | nav only | peer A | PatrolHome doors |
| door.inspect | tuần kiểm | Button/Nav | LOOKUP_STATIC copy | optional sessions `Tuần kiểm` | nav only | peer A | n/a |
| sync.btn | đồng bộ | Button/Nav | — | — | nav `/field/offline` | peer offline | n/a |
| sync.badge | queue | Number RO | — | local queue count | — | peer offline | n/a |
| tile.attendance | chấm công | Button/Nav | — | — | nav peer | attendance | n/a |
| tile.history | lịch sử ca | Button/Nav | — | — | nav peer | sessions history | n/a |
| tile.nghiemThu | nghiệm thu | Button/Nav | — | — | nav peer | nghiem-thu | n/a |
| tile.cam | camera tuần | Button/Nav | — | — | nav peer | cam-patrol | n/a |
| tile.reflect | phản ánh | Button/Nav | — | — | nav peer | field-reflect | n/a |
| tile.supervise | giám sát | Button/Nav | — | — | nav peer | supervise | n/a |
| tile.map | bản đồ tuần | Button/Nav | — | — | nav peer | patrol-map | n/a |
| session.hint | ca active | Text RO | — | `GET patrol/sessions?pageSize=50` | — | SCREENS `/field` | n/a |

**Cấm** invent Field hub CRUD · **cấm** ERP.* · **cấm** fake GPS · **cấm** hardcode VN labels trên form · **cấm** POST/PUT sessions từ hub (owner peer A).

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| LOOKUP_STATIC | FE `useFormOptions` / LinmCopy `tab.field` · door/tile keys | PLAN tabItems · SCREENS Field | hardcode label VN |
| road-route / asset-types / … | peer deep | DOMAIN-MAP Integration | hub không bind master form |
| files | peer deep | FileService via Mobile.Bff | persist full URL trên hub |
| sessions | `GET patrol/sessions` | Patrol | invent write từ hub |

## §D — Map / vẽ

| Mục | Ghi |
|-----|-----|
| map | **none** trên hub · tile → peer `/field/map` |
| GPS | không capture trên FL-* · deep = peer |
| Draw | **cấm** draw/CRUD GIS trên Field hub |

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| DoorBadges | patrol sessions | peer A open/close | GET sessions | badge 2 cửa |
| SyncQueueCount | local offline queue | peer offline | — | badge sync |
| ActiveTile | hub state | user tap | — | nav peer |

`progress: hub chrome` — không session lifecycle / WO / incident trên feature này.

## §F — Handoff

| Role | Need |
|------|------|
| PO | DoD: hub 2 cửa + tiles + sync · Live sessions badge · no deep CRUD |
| Design | FL zones · Android/iOS Field home parity · reviewUrl |
| SA | Add DOMAIN-MAP `web-rmms-field` · confirm Mobile.Bff GET sessions |
| TL | Tasks hub scaffold + door/tile routes |
| Dev | Implement Mobile MFE hub only |
| QA | Door nav · tile nav · badge empty/error · phone 430 · no GPS on hub |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=2` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `rulesVersion=2026.09.25.2` · `analyzedAt=2026-09-26T02:00:48.000Z`
