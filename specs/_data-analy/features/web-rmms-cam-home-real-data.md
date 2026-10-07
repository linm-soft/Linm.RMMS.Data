# Data-analy — real-data bind — web-rmms-cam-home

| Field | Value |
|-------|-------|
| feature | `web-rmms-cam-home` |
| title | Trang chủ và tab theo vai |
| packKind | `list` |
| changeScope | `edit_page` |
| status | `done` |
| taskId | `task_2f8d86d0` |
| prefix API | `api/v1` · Auth profile + Notification overview · cite role-gate caps · **không** invent Home CRUD |
| prefix BFF web (cite) | `web-bff/api/v1/{resource}` · **không** base client Mobile |
| prefix BFF mobile (HARD) | `mobile-bff/api/v1` · `:5202` · cùng `{resource}` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| bffRepo | `Linm.RMMS.Mobile.Bff` · **cấm** Route mobile trên web-bff |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-cam-home` |
| mfeStdRoute | `/web-rmms-cam-home` |
| productRoute | `/trang-chu` · `/tuan-duong` · shell |
| domain | **Notification** (chrome) + **Auth profile cite** · caps Integration job-titles (peer role-gate) · cite Patrol hub sessions |
| contentHash | `sha256:4bca94712257e93fa88e3cec4f6bb851b3aa00d7a28508932d46aef12b73441a` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.19.7` |
| analyzedAt | `2026-10-01T02:50:00.000Z` |
| demo | **N/A** · **cấm** demo-json / fake caps |
| deltaCite | `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` |

## § Scope

| In | Out |
|----|-----|
| edit Home tiles/hero theo `roleCaps` | `new_page` · route mới · Excel |
| xóa NT khỏi PatrolHub QUICK | suy giao việc từ `MANAGER-RMMS` |
| Shell tab highlight theo vai (Plan #8) | SLA 24h · tiền Mục IV · chấm 100 điểm |
| Mobile.Bff only · 430px | web-bff · ERP.* · iOS/Android · invent CamHome* API |

## § Delta Current vs New

| Bind / UX | Current | New |
|-----------|---------|-----|
| Home tiles | partial caps | full matrix PLAN View · ẩn NT với tuần đường |
| Hero quick | luôn staff | gate `tuanDuong` |
| Hub QUICK NT | có | **xóa** |
| Shell FIELD_ROOTS | gộp tuan-kiem/phat-hien/NT | tách highlight theo vai |
| APIs | auth/profile · notification/overview · patrol sessions hub | **không invent** path mới |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/web-rmms-cam-home.md` | — | edit_page HARD |
| `plan` | `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` | — | enqueue #7 · #2 #3 #8 |
| `peer-role` | `web-rmms-role-gate` · `useRoleGateProfile` | thiếu caps → guest/empty tiles | toast · **cấm** fake caps |
| `auth` | `GET auth/profile` (peer home/shell) | guest → GuestHome | toast · **cấm** window.alert |
| `notification` | `GET notification/overview` | badge 0 | toast 4xx |
| `patrol-hub` | cite `patrolSessionsEndpoint` (peer mobile-a) | empty today card | toast |
| `asset-wallet` | cite assetHub peer home | placeholder | toast |
| `domain-map` | cite `web-rmms-home` · `web-rmms-shell` | — | **GAP-CH-DM-01** · **cấm ERP.*** |
| `demo` | — | N/A | **cấm** demo SSOT |

## §B — Bind field (HARD)

| uiField | Label (key) | controlHint | catalogKind | GET | write field | sameMfe | editNote |
|---------|-------------|-------------|-------------|-----|-------------|---------|----------|
| profileName | tên | Text RO | — | `GET …/auth/profile` | — | peer home | giữ |
| notifyBadge | thông báo | Number RO | — | `GET …/notification/overview` | — | peer | giữ |
| roleCaps.tuanDuong | cap | Flag RO | derived | profile/role-gate | — | peer role-gate | gate hero + ô tuần đường |
| roleCaps.tuanKiem | cap | Flag RO | derived | như trên | — | peer | gate `gridTuanKiem` |
| roleCaps.nghiemThu | cap | Flag RO | derived | như trên | — | peer | gate `gridNghiemThu` |
| roleCaps.qlHat | cap | Flag RO | — | `packageCode==QL_HAT` | — | peer | gate `gridAssign` · **cấm** MANAGER |
| qaPatrolPoint | Điểm tuần | Nav gated | — | — | — | peer | **new gate** tuanDuong |
| qaIncidentNew | Ghi sự cố | Nav gated | — | — | — | peer | **new gate** tuanDuong |
| gridPatrolMap | Tuần đường | Nav gated | — | caps | — | peer | giữ gate |
| gridTuanKiem | Tuần kiểm | Nav gated | — | caps | — | `/tuan-kiem` | giữ |
| gridNghiemThu | Công tác nghiệm thu | Nav gated | — | caps | — | peer | **chỉ** nghiemThu |
| gridAssign | Giao việc | Nav gated | — | qlHat | — | UNCLEAR target | **chỉ** QL_HAT |
| hub.quick.nghiemThu | — | — | — | — | — | — | **remove bind** |
| hub.quick.* | thao tác nhanh | Nav | — | — | — | peer patrol | giữ trừ NT |
| hub.todaySession | ca hôm nay | Card RO | patrol | GET sessions cite | — | peer | giữ |
| shell.tab.* | tab | Tab | — | caps + pathname | — | peer shell | **edit** active roots |
| walletAsset | hồ sơ TS | Nav | asset | peer counts | — | peer | giữ |

**Cấm** invent `cam-home/*` controller · ERP.* · fake roleCaps · demo-json · web-bff base trên Mobile.

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| roleCaps / packages | Auth profile + Integration job-titles (peer) | job-title-seed · role-gate | fake caps client |
| LOOKUP_STATIC home/patrol/shell | FE copy keys | peer lookupStatic | hardcode VN mới nếu key có |
| notification | overview GET | — | mock badge |
| patrol sessions | Mobile.Bff patrol | peer | invent list API |

## §D — Map / vẽ

| Mục | Ghi |
|-----|-----|
| map | **none** trên Home/Shell · hub link `patrol-map` giữ peer |
| GPS | none trên Home · hub ca giữ peer GPS |

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| roleCaps | profile / job-title | Admin seed (peer role-gate) | auth/profile · job-titles | ẩn/hiện ô & tab |
| notifyUnread | Notification | system | overview | badge |
| hub.sessionState | Patrol | tuần đường | sessions cite | today card |
| progress money Mục IV | — | — | — | **none** (cấm) |

`progress` tiền / chấm kỳ = **none** đợt này.

## §F — Handoff

| Role | Dùng packet |
|------|-------------|
| PO | DoD ô/tab theo vai · Ask UNCLEAR-CH-ASSIGN-TARGET · UNCLEAR-CH-SUPERVISE-VIS |
| Design | control-map CH-* · prototype phone 430 · reviewUrl · deep-link Giao việc |
| SA | DOMAIN-MAP cite/row · **không** invent API · deps role-gate DTO |
| Dev | edit HomePage · PatrolHub QUICK · Shell FIELD_ROOTS · **cấm** native · **cấm** web-bff |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=2` · `workflowVersion=2026.09.19.02` · `rulesVersion=2026.09.19.7` · `contentHash=sha256:4bca94712257e93fa88e3cec4f6bb851b3aa00d7a28508932d46aef12b73441a` · `analyzedAt=2026-10-01T02:50:00.000Z`
