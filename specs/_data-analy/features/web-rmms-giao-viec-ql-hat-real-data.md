# Data-analy — real-data bind — web-rmms-giao-viec-ql-hat

| Field | Value |
|-------|-------|
| feature | `web-rmms-giao-viec-ql-hat` |
| title | Giao việc chỉ QL_HAT |
| packKind | `list` |
| changeScope | `edit_page` |
| status | `done` |
| taskId | `task_46b5e132` |
| prefix API | `api/v1` · resources Incident + Maintenance `work-orders` · Patrol cite · Integration users · Auth profile |
| prefix BFF web (cite) | `web-bff/api/v1/{resource}` · **không** base client Mobile |
| prefix BFF mobile (HARD) | `mobile-bff/api/v1` · `:5202` · cùng `{resource}` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| bffRepo | `Linm.RMMS.Mobile.Bff` · **cấm** Route mobile trên web-bff |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-giao-viec-ql-hat` |
| mfeStdRoute | queue alias · product routes đã ship |
| domain | **Incident** + **Maintenance** · Patrol cite · Integration · Auth |
| contentHash | `sha256:96af983c06df39ae72f23cd8bca1d51b7851c175d5d43f1a62d1fea87673ecb7` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.27.1` |
| analyzedAt | `2026-10-01T03:25:00.000Z` |
| demo | **N/A** · **cấm** demo-json / fake WO |
| deltaCite | `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` § enqueue #8 |

## § Scope

| In | Out |
|----|-----|
| edit CTA + form giao trên detail sự cố / báo cáo ca | `new_page` · route mới · Excel |
| list unscoped QL_HAT · **cấm** filter creator | suy giao từ `MANAGER-RMMS` |
| hạn gợi ý Phụ lục IV · editable | SLA 24h mặc định · tiền Mục IV · chấm 100 |
| Mobile.Bff only · 430px | web-bff · ERP.* · iOS/Android |
| POST Live WO (+ assign cite) | invent `giao-viec/*` controller |

## § Delta Current vs New

| Bind / UX | Current | New |
|-----------|---------|-----|
| assign CTA | rộng / estimate | visible iff `packageCode=QL_HAT` |
| dueAt / SlaHours | tay · P1 `SlaHours=24` | TT41 hint theo hạng mục · editable · **bỏ** 24 default |
| list scope | có thể theo creator | QL_HAT **mọi** · no creator filter |
| source | incident / estimate | incident **+** báo cáo ca |
| WO body | CreateWorkOrderRequest Live | + hangMuc cite · DueAt bắt buộc gợi ý |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/web-rmms-giao-viec-ql-hat.md` | — | edit_page HARD |
| `plan` | `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` | — | enqueue #8 · TT41 table |
| `screens` | `docs/plan/web-rmms-mobile/SCREENS.md` | — | CreateWorkOrderRequest |
| `catalog` | Integration users · partners/org cite | empty → toast · **cấm** fake | toast |
| `auth` | `GET auth/profile` · role-gate caps | guest → login | toast · **cấm** alert |
| `api-list` | `GET incident/incidents` · patrol history cite | empty list OK | toast 4xx |
| `api-assign` | `POST maintenance/work-orders` · optional `POST incident/.../assign` | — | toast 4xx · **cấm** fake success |
| `domain-map` | Incident · Maintenance · Patrol · Integration | — | **GAP-GV-DM-01** · **cấm ERP.*** |
| `geo` | detail RO stamp | N/A GV-F require | peer |
| `demo` | — | N/A | **cấm** demo SSOT |

## §B — Bind field (HARD)

| uiField | Label (key) | controlHint | catalogKind | GET | write field | sameMfe | editNote |
|---------|-------------|-------------|-------------|-----|-------------|---------|----------|
| list.incidents | danh sách sự cố | CardList | — | `GET …/incident/incidents` | — | peer cam-incident | QL_HAT unscoped · **no** creator filter |
| list.reports | báo cáo ca | CardList | — | patrol history cite | — | peer patrol | QL_HAT unscoped |
| filter.route/type/status/severity | lọc | Select | LOOKUP / Live | query params peer | — | peer | **cấm** creator |
| detail.* | chi tiết RO | Text/Badge | — | `GET …/incidents/{id}` / report | — | peer | không sửa GPS |
| assignCta | Giao việc xử lý | Button gated | — | roleCaps.qlHat | mở GV-F | peer | **chỉ** QL_HAT |
| sourceStamp | nguồn | Text RO | — | incidentId / reportId | IncidentId / source cite | — | RO |
| assignee | người nhận | SearchInput | users | Integration users (Mobile.Bff) | `AssigneeName` (+ id nếu Live) | peer | **required** |
| team | đơn vị | SearchInput | partner/org | Live peer | `TeamName` | peer | |
| hangMuc | hạng mục | Search/Dropdown | LOOKUP / TT41 table | client catalog PLAN | hangMuc cite | gap→SA | trigger due hint |
| dueAt | hạn | DateTime | — | gợi ý TT41 | `DueAt` | peer finding/WO | **editable** · **cấm** SlaHours=24 default |
| slaHours | — | — | — | — | `SlaHours` | SCREENS P1 | **remove default 24** · SA map từ DueAt |
| note | ghi chú | Text | — | — | `Description` / Note | peer | |
| routeName / title / workType | stamp | Text/Select | LOOKUP | từ nguồn | `RouteName` · `Title` · `WorkType` · `Status=new` | peer WO | từ phiếu |
| submit | Giao | Button | — | — | POST WO (+ assign) | peer estimate | busy lock |
| roleCaps.qlHat | cap | Hidden | — | profile | — | role-gate | **cấm** MANAGER-RMMS |
| afterList | công việc | Nav | — | — | — | peer work | `/cong-viec` track only |

**Cấm** invent `giao-viec/*` · ERP.* · fake assignee list · demo-json · web-bff base trên Mobile · tiền trừ Mục IV.

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| users | Integration users (Mobile.Bff) | users peer | free text bắt buộc không search |
| partner/org team | Live cite | — | fake team |
| LOOKUP workType/status/severity | init-data / FE keys | peer incident/work | hardcode VN mới nếu key có |
| hạng mục → hạn TT41 | static table PLAN-3-VAI (client) hoặc BE | Phụ lục IV | SLA 24h · tiền Mục IV |

## §D — Map / vẽ

| Mục | Ghi |
|-----|-----|
| map | link xem (GV-D) · không vẽ mới trên GV-F |
| GPS | RO từ nguồn · không bắt GPS mới khi giao |

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| incident.assignState | sau giao | QL_HAT | WO + optional assign | CTA ẩn / trạng thái rời Đợi phân công |
| wo.status | Maintenance | đơn vị được giao (peer progress) | progress/complete peer | GV-W theo dõi · **cấm** complete từ GV-F |
| dueAt / sla eval | DueAt chốt | QL_HAT lúc giao | WO body | tuần kiểm sau dùng hạn (peer finding) |
| progress money Mục IV | — | — | — | **none** (cấm) |

`progress` tiền / chấm kỳ = **none** đợt này.

## §F — Handoff

| Role | Dùng packet |
|------|-------------|
| PO | DoD QL_HAT-only · TT41 due · unscoped list · Ask UNCLEAR-GV-* |
| Design | GV-F zones · reviewUrl · 430 · DES-MOB-INC-DETAIL |
| SA | GAP-GV-DM-01 · SLA map · report route · hangMuc catalog |
| TL/Dev | edit gate + bind Live WO · **cấm** new route |
| QA | matrix vai · due editable · no creator filter · no 24h |

## §G — Verify

| Check | Result |
|-------|--------|
| §A+§B đủ field form giao | PASS |
| changeScope=edit_page · cấm new_page | PASS |
| demo N/A | PASS |
| contentHash = CTX | PASS |
| Mobile.Bff only · cấm ERP/web-bff | PASS |
