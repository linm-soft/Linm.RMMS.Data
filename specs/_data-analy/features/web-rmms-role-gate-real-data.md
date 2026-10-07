# Data-analy — real-data bind — web-rmms-role-gate

| Field | Value |
|-------|-------|
| feature | `web-rmms-role-gate` |
| title | Quyền QL_HAT và vai theo chức danh |
| packKind | `list` |
| changeScope | `edit_page` |
| status | `done` |
| taskId | `task_e58600c5` |
| prefix API | `api/v1` · resources Auth profile + Integration `job-titles` · cite Incident/Patrol/Maintenance consumers |
| prefix BFF web (cite) | `web-bff/api/v1/{resource}` · **không** base client Mobile |
| prefix BFF mobile (HARD) | `mobile-bff/api/v1` · `:5202` · cùng `{resource}` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| bffRepo | `Linm.RMMS.Mobile.Bff` · **cấm** Route mobile trên web-bff |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-role-gate` |
| mfeStdRoute | `/web-rmms-role-gate` |
| domain | **Integration** (`job-titles`) + **Auth profile cite** · consumers Patrol / Incident / Maintenance |
| contentHash | `sha256:cc33bfbc2361d40d732e6b018e209ccce2e8778cce33f39c7766119237ba4216` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.19.7` |
| analyzedAt | `2026-09-30T16:08:25.000Z` |
| demo | **N/A** · **cấm** demo-json / fake caps |
| deltaCite | `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` |

## § Scope

| In | Out |
|----|-----|
| edit Profile gate + seed packageHint HAT-* → `QL_HAT` | `new_page` · route mới · Excel |
| roleCaps → visibility Home/hub/shell/CTA peers | suy giao việc từ `MANAGER-RMMS` |
| hạn gợi ý Phụ lục IV trên form giao (cite) | SLA 24h mặc định · tiền Mục IV · chấm 100 điểm |
| Mobile.Bff only · 430px | web-bff · ERP.* · iOS/Android |

## § Delta Current vs New

| Bind / UX | Current | New |
|-----------|---------|-----|
| seed HAT-TRUONG/HAT-PHO | `packageHint=MANAGER-RMMS` | `QL_HAT` |
| profile | thiếu package/role trên client | `jobTitleCode` · `packageCode` · roleCaps |
| assign CTA | không khóa QL_HAT | visible iff `packageCode=QL_HAT` |
| dueAt / SlaHours | 24h / tay | gợi ý TT41 · editable · bỏ 24h |
| APIs resource path | auth/profile · job-titles · incidents/WO peers | **không invent** path mới trừ GAP SA DTO |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/web-rmms-role-gate.md` | — | edit_page HARD |
| `plan` | `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` | — | delta 3 vai + QL_HAT |
| `seed` | `docs/context/seed/job-title-seed.json` | — | HAT-* packageHint |
| `catalog` | Integration `job-titles` · DOMAIN-MAP | empty catalog → GAP seed | toast · **cấm** fake list |
| `auth` | `GET auth/profile` (peer home/shell Live) | guest → login | toast · **cấm** window.alert |
| `api-assign` | cite Incident assign / Maintenance work-orders (peer incident/work) | — | toast 4xx |
| `domain-map` | Integration · Auth cite · Patrol/Incident/Maintenance | — | **GAP-RG-DM-01** · **cấm ERP.*** |
| `geo` | — | N/A RG-01 | peer cam forms |
| `demo` | — | N/A | **cấm** demo SSOT |

## §B — Bind field (HARD)

| uiField | Label (key) | controlHint | catalogKind | GET | write field | sameMfe | editNote |
|---------|-------------|-------------|-------------|-----|-------------|---------|----------|
| profile.displayName | tên | Text RO | — | `GET …/auth/profile` | — | peer home | giữ |
| profile.jobTitleCode | chức danh | Text/Chip RO | job-titles | profile · resolve `GET …/integration/job-titles` | — | peer users/job-title | **new bind** |
| profile.packageCode | package | Chip RO | LOOKUP_STATIC packages | profile / job-title.packageHint | — | gap→SA | **QL_HAT** only HAT-* |
| roleCaps.tuanDuong | cap tuần đường | Flag RO | derived | profile + titleGroup/code | — | gap→SA | FE **không** hardcode map vượt seed |
| roleCaps.tuanKiem | cap tuần kiểm | Flag RO | derived | như trên | — | gap→SA | |
| roleCaps.nghiemThu | cap nghiệm thu | Flag RO | derived | như trên | — | UNCLEAR-RG-NT-CODE | |
| roleCaps.qlHat | cap giao việc | Flag RO | — | `packageCode==QL_HAT` | — | — | **cấm** MANAGER-RMMS |
| seed.packageHint | packageHint | Dropdown | LOOKUP_STATIC | job-titles GET | PUT/PATCH job-title (Master cite) | peer job-title | HAT-* → QL_HAT |
| home.tiles | ô Home | Nav gated | — | roleCaps | — | peer home | edit visibility |
| hub.quick | thao tác nhanh | Nav gated | — | roleCaps | — | peer patrol hub | bỏ NT khỏi hub TD |
| shell.tabs | tab | Tab gated | — | roleCaps | — | peer shell | |
| incident.btnAssign | Giao việc xử lý | Button gated | — | qlHat | mở form giao | peer incident | |
| assign.assignee | người nhận | SearchInput | users | Integration users (Mobile.Bff) | Assignee* | peer | bắt buộc |
| assign.team | đơn vị | SearchInput | partner/org cite | Live peer | Team* | peer | |
| assign.hangMuc | hạng mục | SearchInput/Dropdown | LOOKUP / catalog cite | peer | hangMuc | peer | trigger due hint |
| assign.dueAt | hạn | DateTime | — | gợi ý TT41 client/catalog | DueAt | peer finding/assign | **editable** · **cấm** SlaHours=24 default |
| assign.note | ghi chú | Text | — | — | Note | peer | |
| finding.btnPass/Fail | xác nhận | Button gated | — | tuanKiem | POST peer finding | peer mobile-c | |
| finding.slaLabel | Trong/Quá hạn | Chip RO | derived | dueAt vs now | — | peer | **không** trừ tiền |
| nghiemThu.writePrior | — | — | — | — | — | — | RO link only · **cấm** assign |

**Cấm** invent `role-gate/*` controller · ERP.* · fake profile caps · demo-json SSOT · web-bff base trên Mobile.

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| job-titles | `GET …/integration/job-titles` | `job-title-seed.json` · peer job-title | Dropdown cứng từ demo |
| users | Integration users (Mobile.Bff forward) | users peer | free text người nhận |
| LOOKUP_STATIC packages / copy | FE keys + package codes | CTX · PLAN | hardcode VN mới nếu key có |
| hạng mục → hạn TT41 | static table từ PLAN-3-VAI (client catalog) | Phụ lục IV | SLA 24h · tiền Mục IV |

## §D — Map / vẽ

| Mục | Ghi |
|-----|-----|
| map | **none** trên RG-01 |
| GPS | none · peer camera |

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| packageCode | job-title.packageHint → profile | Admin Master / seed | job-titles write (Master) | Chip RO Mobile |
| incident.assignState | sau giao (peer) | QL_HAT | cite Incident/Maintenance WO | CTA ẩn sau khi không còn quyền |
| finding.confirmState | tuần kiểm | tuanKiem | cite findings | Pass/Fail gated |
| progress money Mục IV | — | — | — | **none** (cấm) |

`progress` tiền / chấm kỳ = **none** đợt này.

## §F — Handoff

| Role | Dùng packet |
|------|-------------|
| PO | DoD profile + QL_HAT + vai visibility · Ask UNCLEAR-RG-NT-CODE |
| Design | control-map RG-01…03 · prototype phone 430 · reviewUrl |
| SA | DOMAIN-MAP row · profile DTO packageCode/roleCaps · giữ path §B |
| Dev | edit Mobile pages · seed HAT-* · **cấm** native · **cấm** web-bff |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=2` · `workflowVersion=2026.09.19.02` · `rulesVersion=2026.09.19.7` · `contentHash=sha256:cc33bfbc2361d40d732e6b018e209ccce2e8778cce33f39c7766119237ba4216` · `analyzedAt=2026-09-30T16:08:25.000Z`
