# Data-analy — real-data bind — web-rmms-mobile-a

| Field | Value |
|-------|-------|
| feature | `web-rmms-mobile-a` |
| title | Tuần đường / Tuần kiểm đợt A — hub, mở ca, check-in, lịch sử |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_7e2d0556` |
| prefix API | `api/v1/patrol` |
| prefix BFF web (cite) | `web-bff/api/v1/patrol` |
| prefix BFF mobile (plan) | `mobile-bff/api/v1` · cùng `{resource}` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-mobile-a` |
| domain | **Patrol** (+ Integration · Auth · Files) |
| contentHash | `sha256:c5b21efdd411635233b56b13ee0b1a318c182c0a488f10d8290481a3dbbd3c2e` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| analyzedAt | `2026-09-25T06:34:00.000Z` |
| demo | **N/A** · **cấm** demo-json / in-app mock SSOT |

## § Scope đợt A

| In | Out |
|----|-----|
| TD-00 · TD-01 · TD-02 · TD-03 · TD-07 · TK-00 · TK-01 | TD-04/05/06 · TK-02…07 |
| API **Live** sessions · check-ins · plan-points GET · road-routes · profile · files | API **Mới** journal-lines · findings · pause/handover columns |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/web-rmms-mobile-a.md` | — | — |
| `plan` | `docs/plan/web-rmms-mobile/IMPLEMENT-SCREENS.md` | — | SSOT màn A |
| `gap` | `docs/plan/web-rmms-mobile/GAP-TUAN-DUONG-TUAN-KIEM.md` | — | Note-encode / sổ VIII |
| `api` | `api/src/.../Patrol/Controllers/PatrolSessionsController.cs` · routes sessions + check-ins + plan-points | empty list / empty hub | toast · **cấm** `window.alert` |
| `bff` | `bff/domains/patrol/.../PatrolSessionsBffController.cs` · `web-bff/api/v1/patrol/sessions` | proxy 503 | retry |
| `entity` | `PatrolSessionEntity` · `PatrolCheckInEntity` · `rmms_patrol_sessions` · `rmms_patrol_check_ins` | — | tenant / soft-delete |
| `dto` | `PatrolSessionDtos.cs` · `PatrolCheckInDtos.cs` | — | validate MatchOk |
| `domain-map` | `docs/DOMAIN-MAP.md` · Patrol | — | **cấm ERP.*** |
| `catalog` | Integration `road-routes/search` | empty SearchInput | — |
| `auth` | `auth/profile` | — | redirect login |
| `files` | `files/init` · `files/{id}/object` · `files/commit` | — | resign fail toast |
| `geo` | `navigator.geolocation` | deny → block save | **cấm** fake lat/lng |
| `peer` | `docs/context/features/patrol.md` · MFE Field desktop | n/a mobile | **cấm** copy desktop chrome |
| `demo` | — | N/A | **cấm** demo SSOT |

## §B — Bind field (HARD) — đợt A

| uiField | Label (key) | controlHint | catalogKind | GET | write field | sameMfe | sameMobile |
|---------|-------------|-------------|-------------|-----|-------------|---------|------------|
| sessions.active | ca đang tuần | derived list | — | `GET …/patrol/sessions?status=Đang tuần&page=1&pageSize=50` · filter `PatrolType` client | — | gap | n/a (new) |
| session.byId | chi tiết ca | detail | — | `GET …/patrol/sessions/{id}` | — | gap | n/a |
| route | tuyến | SearchInput | road-route | `GET integration/road-routes/search` | `Route` / `RouteCode` | peer Field | n/a |
| userName | người | Text RO | — | `GET auth/profile` | `UserName` · `AssigneeCode` | peer | n/a |
| patrolType | loại tuần | hidden/enum | LOOKUP_STATIC | — | `PatrolType` = `Tuần đường` \| `Tuần kiểm` | peer | n/a |
| plannedDate | ngày KH | Date | — | — | `PlannedDate` | peer | n/a |
| startedAt | giờ bắt đầu | DateTime | — | — | `StartedAt` UTC | peer | n/a |
| status | trạng thái | hidden | — | — | `Status=Đang tuần` (open) | peer | n/a |
| checkInCount | số CI | Number RO | — | detail/list | `0` on create | peer | n/a |
| coveragePercent | coverage | Number RO | — | detail | `0` on create | peer | n/a |
| offlineQueued | offline | bool | — | detail | `OfflineQueued` | peer | n/a |
| note | ghi chú / encode | Text | — | detail | `Note` (`chieu=` · `kmFrom` · `kmTo` · `dinh-ky`/`dot-xuat` · optional `startLat,startLng`) | peer | n/a |
| mediaIds | ảnh ca | FileMulti | files | detail | `MediaIds[]` guid | peer Field | n/a |
| direction | chiều | Dropdown | LOOKUP_STATIC | — | encode `Note` | gap | n/a |
| kmFrom / kmTo | từ/đến km | Number | — | — | encode `Note` (TK-01) | gap | n/a |
| inspectMode | hình thức | Dropdown | LOOKUP_STATIC | — | encode `Note` | gap | n/a |
| inspectReason | lý do đột xuất | Text | — | — | encode `Note` | gap | n/a |
| planPointLabel | điểm KH | Text | — | `GET …/sessions/{id}/plan-points` | `PlanPointLabel` | gap | n/a |
| checkIn.route | tuyến CI | Text RO | — | từ ca | `Route` | gap | n/a |
| lat | GPS lat | GPS | geo | device | `Lat` | gap | n/a |
| lng | GPS lng | GPS | geo | device | `Lng` | gap | n/a |
| accuracyM | GPS accuracy | GPS | geo | device | `AccuracyM` | gap | n/a |
| distanceToPlanM | khoảng cách | Number | — | derived / 0 | `DistanceToPlanM` | gap | n/a |
| matchOk | khớp điểm | bool | — | — | `MatchOk` · **cấm** ép `true` khi không plan | gap | n/a |
| content | nội dung CI | Text | — | — | `Content` | gap | n/a |
| photoLocalIds | ảnh CI | FileMulti | files | — | `PhotoLocalIds` / `AttachmentIds` | gap | n/a |
| history.list | lịch sử TD | cards | — | `GET …/sessions?route&page&pageSize` · filter `Tuần đường` | — | gap | n/a |
| history.checkIns | CI của ca | list | — | `GET …/sessions/{id}/check-ins` | — | gap | n/a |

**Create session Live body** (`CreatePatrolSessionRequest`): `UserName` · `Route` · `PatrolType` · `Status` · `PlannedDate` · `StartedAt` · `CheckInCount` · `CoveragePercent` · `OfflineQueued` · `Note` · `MediaIds`.

**Create check-in Live body** (`CreatePatrolCheckInRequest`): `PlanPointLabel` · `Route` · `Lat` · `Lng` · `AccuracyM` · `DistanceToPlanM` · `MatchOk` · `Content` · `PhotoLocalIds`/`AttachmentIds`.

**Cấm** invent `journal-lines` / `findings` trong đợt A · **cấm** ERP.* · **cấm** fake GPS.

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| road-route | `GET integration/road-routes/search` | shared-catalogs road-route · DOMAIN-MAP Integration | free-text tuyến khi master có |
| LOOKUP_STATIC | FE `useFormOptions` keys (`chieu-*` · `dinh-ky`/`dot-xuat` · PatrolType/Status VN allow-list) | CTX + IMPLEMENT | hardcode label VN trên form |
| files | `POST files/init` → `PUT files/{id}/object` → `POST files/commit` · GET object + JWT | FileService BFF | persist full URL |
| profile | `GET auth/profile` | Auth domain | invent user API trong Patrol |

## §D — Map / vẽ

| Mục | Ghi |
|-----|-----|
| map | **none** trên đợt A (hub/form/sheet) |
| GPS | point capture only · không draw layer |
| Map nav | TD-01 link `/field/map` = peer app · **không** scope A implement |

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| Status | `rmms_patrol_sessions` | user mở ca | `POST sessions` → `Đang tuần` | chip hub / TD-01 |
| Status complete | entity | user (đợt D) | `PUT sessions` → `Hoàn thành` | **out of A** |
| CheckInCount | entity / service | check-in create | `POST …/check-ins` | badge TD-01 / TD-07 |
| OfflineQueued | entity | offline replay | create flags | sync TD-00 |
| MatchOk | check-in | client+server | POST body | error server nếu policy |

`progress: session lifecycle minimal A` (open + check-in count). Kết ca / bàn giao / tạm dừng = đợt D.

## §F — Handoff

| Role | Packet |
|------|--------|
| PO | DoD «mở hub = data thật sessions» · GPS deny · Live-only A |
| Design | control-map khớp §B · phone 430 · zone TD/TK |
| SA | giữ path §B · Note-encode · **cấm** đổi Live path không gap |
| Dev web mobile | `Linm.Web.RMMS.Mobile` · `mobile-bff` prefix · cùng resource |
| QA | empty/deny GPS / no duplicate session |

## Gaps (cite)

| id | Note |
|----|------|
| GAP-DA-MOB-A-CTX-01 | CTX feature thiếu lúc start → đã tạo `web-rmms-mobile-a.md` từ IMPLEMENT + BE |
| GAP-DA-MOB-A-NOTE-01 | Chiều/km/hình thức nhồi `Note` đến Schema đợt D |
| GAP-DA-MOB-A-PLAN-01 | Plan-points có thể empty · không fake match |
| GAP-DA-MOB-A-JOURNAL-01 | Journal / findings = đợt B/C · **cấm** stub fake list |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=2` · `contentHash=sha256:c5b21efdd411635233b56b13ee0b1a318c182c0a488f10d8290481a3dbbd3c2e` · `rulesVersion=2026.09.25.2` · `analyzedAt=2026-09-25T06:34:00.000Z`
