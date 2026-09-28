# Data-analy — real-data bind — web-rmms-mobile-a

| Field | Value |
|-------|-------|
| feature | `web-rmms-mobile-a` |
| title | Tuần đường / Tuần kiểm đợt A — hub, mở ca, check-in, lịch sử |
| packKind | `list` |
| changeScope | `edit_page` |
| editTask | `1` |
| status | `done` |
| taskId | `task_0a76198d` |
| prefix API | `api/v1/patrol` |
| prefix BFF mobile (HARD) | `mobile-bff/api/v1` · `mobileApiBase()` / `VITE_MOBILE_API_URL` |
| prefix BFF web (cite only) | `web-bff/api/v1/patrol` · **cấm** FE gọi trực tiếp |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-mobile-a` |
| domain | **Patrol** (+ Integration · Auth · Files) |
| contentHash | `sha256:110e845481b0f27091c0f5ca856fef74524bc1634ab8e3785a5d7755730eea45` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.27.1` |
| analyzedAt | `2026-09-27T06:39:33.767Z` |
| demo | **N/A** · **cấm** demo-json / in-app mock SSOT |
| deltaCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` |

## § Delta Current vs New (edit_page)

| Area | Current | New |
|------|---------|-----|
| Check-in save gate | FE `canSave` requires GPS ok → disable Lưu | Pattern B: enable · validate on click · GPS deny banner |
| Road-route catalog | `lookups.ts` seed `QL.1/7/8/15/HCM` + drop `QL.22` + echo unknown id | Live search only · empty on error · unknown → `--` |
| User display | profile `userName` as-is | Resolve vs `GET integration/users` · miss → `--` |
| Mobile.Bff users | missing | Forward WebService `GET api/v1/integration/users` |
| Transport | risk web-bff | **only** Mobile.Bff via `mobileApiBase()` |
| Toolbar/export | n/a phone | **no Excel** (SUBMIT override) |
| Screens/routes | TD/TK A set | **KEEP** · no new tab/route |

## § Scope đợt A

| In | Out |
|----|-----|
| TD-00 · TD-01 · TD-02 · TD-03 · TD-07 · TK-00 · TK-01 | TD-04/05/06 · TK-02…07 |
| API **Live** sessions · check-ins · plan-points GET · road-routes · **users** · profile · files | API **Mới** journal-lines · findings · pause/handover columns |
| Pattern B validate + no-seed search | invent WebService endpoint · ERP UserSearchInput |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/web-rmms-mobile-a.md` | — | — |
| `plan` | `docs/plan/web-rmms-mobile/IMPLEMENT-SCREENS.md` | — | SSOT màn A |
| `delta` | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` | — | Pattern B · users · no-seed |
| `gap` | `docs/plan/web-rmms-mobile/GAP-TUAN-DUONG-TUAN-KIEM.md` | — | Note-encode / sổ VIII |
| `api` | `api/src/.../Patrol/Controllers/PatrolSessionsController.cs` · routes sessions + check-ins + plan-points | empty list / empty hub | toast · **cấm** `window.alert` |
| `api-users` | Integration `AppUsersController` · `GET api/v1/integration/users?search=` | SearchInput empty / display `--` | toast |
| `bff-mobile` | Mobile.Bff · `mobile-bff/api/v1/...` · road-routes **có** · users **thêm forward** | proxy 503 | retry |
| `bff-web` | `bff/domains/patrol/.../PatrolSessionsBffController.cs` · cite only | — | **cấm** FE call |
| `entity` | `PatrolSessionEntity` · `PatrolCheckInEntity` · `rmms_patrol_sessions` · `rmms_patrol_check_ins` | — | tenant / soft-delete |
| `dto` | `PatrolSessionDtos.cs` · `PatrolCheckInDtos.cs` | — | validate MatchOk |
| `domain-map` | `docs/DOMAIN-MAP.md` · Patrol · Integration | — | **cấm ERP.*** |
| `catalog` | Integration `road-routes/search` · `users` | empty SearchInput | — |
| `auth` | `auth/profile` | — | redirect login |
| `files` | `files/init` · `files/{id}/object` · `files/commit` | — | resign fail toast |
| `geo` | `navigator.geolocation` | deny → banner **on submit** | **cấm** fake lat/lng · **cấm** disable Lưu |
| `peer` | `docs/context/features/patrol.md` · MFE Field desktop | n/a mobile | **cấm** copy desktop chrome |
| `mfe` | `src/pages/WebRmmsMobileA/CheckInSheet.tsx` · `OpenPatrolPage.tsx` · `OpenInspectPage.tsx` · `services/patrol/lookups.ts` | — | delta targets |
| `demo` | — | N/A | **cấm** demo SSOT |

## §B — Bind field (HARD) — đợt A + delta

| uiField | Label (key) | controlHint | catalogKind | GET | write field | sameMfe | sameMobile |
|---------|-------------|-------------|-------------|-----|-------------|---------|------------|
| sessions.active | ca đang tuần | derived list | — | `GET …/patrol/sessions?status=Đang tuần&page=1&pageSize=50` · filter `PatrolType` client | — | yes | yes |
| session.byId | chi tiết ca | detail | — | `GET …/patrol/sessions/{id}` | — | yes | yes |
| route | tuyến | SearchInput | road-route | `GET integration/road-routes/search` via **mobileApiBase** · **no seed** | `Route` / `RouteCode` | yes | yes |
| route.displayMiss | tuyến miss | Text `--` | road-route | same | — | gap→fix | gap→fix |
| userName | người | Text RO + resolve | users | `GET auth/profile` + resolve `GET integration/users` | `UserName` · `AssigneeCode` | yes | yes |
| userName.miss | người miss | Text `--` | users | same | — | gap→fix | gap→fix |
| userSearch | chọn người (shared) | SearchInput | users | `GET integration/users?search=&page=&pageSize=` Mobile.Bff | Username/Code/FullName | gap | gap→add Bff |
| patrolType | loại tuần | hidden/enum | LOOKUP_STATIC | — | `PatrolType` = `Tuần đường` \| `Tuần kiểm` | yes | yes |
| plannedDate | ngày KH | Date | — | — | `PlannedDate` | yes | yes |
| startedAt | giờ bắt đầu | DateTime | — | — | `StartedAt` UTC | yes | yes |
| status | trạng thái | hidden | — | — | `Status=Đang tuần` (open) | yes | yes |
| checkInCount | số CI | Number RO | — | detail/list | `0` on create | yes | yes |
| coveragePercent | coverage | Number RO | — | detail | `0` on create | yes | yes |
| offlineQueued | offline | bool | — | detail | `OfflineQueued` | yes | yes |
| note | ghi chú / encode | Text | — | detail | `Note` (`chieu=` · `kmFrom` · `kmTo` · `dinh-ky`/`dot-xuat` · optional `startLat,startLng`) | yes | yes |
| mediaIds | ảnh ca | FileMulti | files | detail | `MediaIds[]` guid | yes | yes |
| direction | chiều | Dropdown | LOOKUP_STATIC | — | encode `Note` | yes | yes |
| kmFrom / kmTo | từ/đến km | Number | — | — | encode `Note` (TK-01) | yes | yes |
| inspectMode | hình thức | Dropdown | LOOKUP_STATIC | — | encode `Note` | yes | yes |
| inspectReason | lý do đột xuất | Text | — | — | encode `Note` | yes | yes |
| planPointLabel | điểm KH | Text | — | `GET …/sessions/{id}/plan-points` | `PlanPointLabel` | yes | yes |
| checkIn.route | tuyến CI | Text RO | — | từ ca · miss → `--` | `Route` | yes | yes |
| lat | GPS lat | GPS | geo | device | `Lat` | yes | yes |
| lng | GPS lng | GPS | geo | device | `Lng` | yes | yes |
| accuracyM | GPS accuracy | GPS | geo | device | `AccuracyM` | yes | yes |
| distanceToPlanM | khoảng cách | Number | — | derived / 0 | `DistanceToPlanM` | yes | yes |
| matchOk | khớp điểm | bool | — | — | `MatchOk` · **cấm** ép `true` khi không plan | yes | yes |
| content | nội dung CI | Text | — | — | `Content` | yes | yes |
| photoLocalIds | ảnh CI | FileMulti | files | — | `PhotoLocalIds` / `AttachmentIds` | yes | yes |
| submitCheckIn | Lưu CI | Button | — | — | POST body · disable **chỉ** `saving` | gap→fix | gap→fix |
| history.list | lịch sử TD | cards | — | `GET …/sessions?route&page&pageSize` · filter `Tuần đường` | — | yes | yes |
| history.checkIns | CI của ca | list | — | `GET …/sessions/{id}/check-ins` | — | yes | yes |

**Create session Live body** (`CreatePatrolSessionRequest`): `UserName` · `Route` · `PatrolType` · `Status` · `PlannedDate` · `StartedAt` · `CheckInCount` · `CoveragePercent` · `OfflineQueued` · `Note` · `MediaIds`.

**Create check-in Live body** (`CreatePatrolCheckInRequest`): `PlanPointLabel` · `Route` · `Lat` · `Lng` · `AccuracyM` · `DistanceToPlanM` · `MatchOk` · `Content` · `PhotoLocalIds`/`AttachmentIds`.

**Cấm** invent `journal-lines` / `findings` trong đợt A · **cấm** ERP.* · **cấm** fake GPS · **cấm** `ROAD_ROUTE_SEED` · **cấm** web-bff FE.

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| road-route | `GET integration/road-routes/search` (Mobile.Bff đã có) | **none** · xóa `ROAD_ROUTE_SEED`/`filterSeed` | free-text · seed · echo unknown id |
| users | `GET integration/users?search=` (Mobile.Bff **forward mới**) | WebService `AppUsersController` · Username+FullName+Code | ERP `UserSearchInput` · invent employees API |
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
| validationAttempted | FE form state | user bấm submit | — | Pattern B banner + inline |

`progress: session lifecycle minimal A` (open + check-in count). Kết ca / bàn giao / tạm dừng = đợt D.

## §F — Handoff

| Role | Packet |
|------|--------|
| PO | § Delta → requirement · DoD Pattern B · no-seed · users resolve |
| Design | keep prototype · patch TD-03 CTA + `--` display |
| SA | Mobile.Bff users forward · giữ path §B · **cấm** đổi Live path không gap |
| Dev | `Linm.Web.RMMS.Mobile` · `mobileApiBase` · CheckInSheet · lookups.ts · align 430 |
| QA | GPS deny still clickable · seed gone · users `--` · no web-bff 404 |

## Gaps (cite)

| id | Note |
|----|------|
| GAP-DA-MOB-A-NOTE-01 | Chiều/km/hình thức nhồi `Note` đến Schema đợt D |
| GAP-DA-MOB-A-PLAN-01 | Plan-points có thể empty · không fake match |
| GAP-DA-MOB-A-JOURNAL-01 | Journal / findings = đợt B/C · **cấm** stub fake list |
| GAP-DA-MOB-A-SEED-01 | `ROAD_ROUTE_SEED` còn trong `lookups.ts` → Dev xóa (delta) |
| GAP-DA-MOB-A-PATTERN-B-01 | `CheckInSheet` `disabled={!canSave}` → Pattern B |
| GAP-DA-MOB-A-USERS-01 | Mobile.Bff thiếu `integration/users` forward |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=2` · `contentHash=sha256:110e845481b0f27091c0f5ca856fef74524bc1634ab8e3785a5d7755730eea45` · `rulesVersion=2026.09.27.1` · `analyzedAt=2026-09-27T06:39:33.767Z` · `taskId=task_0a76198d` · `changeScope=edit_page`
