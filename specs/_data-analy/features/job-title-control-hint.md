# Data-analy — controlHint — job-title (Danh mục chức vụ)

| Field | Value |
|-------|-------|
| feature | `job-title` |
| packKind | `master` |
| mode | `feature_context` (queue `roleOnly=data_analy` · **DEM N/A** · CTX P0) |
| changeScope | `new_page` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.01` |
| rulesVersion | `2026.09.19.2` |
| versionGate | `ok` |
| contentHash | `sha256:fdd8fabdbf6bf58d33835fa5d4d1da37922f18062175288d9316f9ced76071ab` |
| headerFingerprint | `sha256:fields:code,name,titleGroup,packageHint,legacyAliases,isActive` |
| analyzedAt | `2026-09-18T18:45:00.000Z` |
| cluster | — (master catalog · seed JSON cuc-01 · **không** Excel raw scan lại) |
| taskId | `task_fe86d194` |
| priorTask | `task_6ff91e27` |
| autoApprove | `ON` |
| realData | `specs/_data-analy/features/job-title-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Integration** · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Master` · Master host |
| mfeStdUrl | `http://localhost:9318/mas/chuc-vu` |
| mfeStdRoute | `/mas/chuc-vu` |
| runMode | `full_pipeline` · Autopilot ON · e2eQa queued |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map + prototype/reviewUrl. SA **chốt** schema/DOMAIN-MAP.  
> **DEM N/A** (`master-catalog-no-demo.md`) — **cấm** đòi DEM-* · **cấm** demo HTML SSOT.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> **Cấm** `api/v1/rmms/*` · **cấm** `open-api` · **cấm** ERP.* · **cấm** invent package Cục/VP.

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context | `docs/context/features/job-title.md` | CTX part of contentHash · §5b consumer 18/09 |
| Seed | `docs/context/seed/job-title-seed.json` | ~19 canonical · Excel aliases |
| Excel import | `data-import/cuc-01/ds-nhan-su-rmms/Danh sách nhân sự số hóa 10.9.2026.xlsx` | cột «Chức danh/nhiệm vụ» · ~80 chuỗi thô |
| Peer CTX | `master.md` · `users.md` § jobTitle · `20-ORG-STRUCTURE-DRVN.md` | consumer staff + Auth Position |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Integration · **thiếu** slug `job-title` → GAP-JOB-DM-01 |
| BE / MFE | **chưa** JobTitle* controller/page | greenfield Kind B |

Normalized header:

`code|name|titleGroup|packageHint|legacyAliases|isActive|search`

## § Delta Current vs New (`new_page` · `task_fe86d194`)

| ID | Current | New (this pack) | Surface |
|----|---------|-----------------|---------|
| GAP-JOB-HINT-01 | prior analy · hash cũ | Refresh CTX+seed hash · §5b consumer surfaces | data-analy |
| GAP-JOB-REAL-01 | prior real-data | §A+§B bind Integration + seed + consumer | data-analy |
| GAP-JOB-DM-01 | DOMAIN-MAP **0** row slug `job-title` | SA thêm → Integration `job-titles` | SA |
| GAP-JOB-BE-01 | **0** controller/entity | SA/Dev: `JobTitlesController` + entity + Schema_* · `IIdCodeService.GenerateAsync` | SA/Dev |
| GAP-JOB-MFE-01 | **0** `/mas/chuc-vu` page | Dev Master Kind B list+form | Dev |
| GAP-JOB-01 | ~80 Excel thô | seed + `legacyAliases` (Tuần kiềm→Tuần kiểm) | import |
| GAP-JOB-02 | AppUser.JobTitle free text | migrate → `jobTitleCode` SearchInput | PO/SA · peer users |
| GAP-JOB-03 | `RMMS-INTERNAL` / `RMMS-CONTRACTOR` chưa seed Auth | **không** gắn seed này | Auth (out) |
| GAP-JOB-04 | Menu `RMMS-TDTK` không có `/mas/chuc-vu` | chỉ MANAGER-RMMS / ADMIN-RMMS | PO/Auth |
| GAP-JOB-05 | Seed JSON có · **chưa** DB/API live | entity + `job_titles` seed/CSV + CatalogHandler | SA/Dev |
| GAP-JOB-06 | Home ProfileTab + Auth Position free text | SearchInput catalog / readonly resolve | Auth/Home · peer users |

**Không** đổi: packKind master · Kind B · DEM skip · Integration prefix · titleGroup→packageHint map LEAD→MANAGER-RMMS · TECH/PATROL→RMMS-TDTK.

## Kind / zones (handoff Design)

Pack **master** = Kind **B** catalog trên MFE Master `:9318`. **Không** demo HTML.

| Zone | Pattern | DoD |
|------|---------|-----|
| A | Header | title «Danh mục chức vụ» — **cấm** Thêm mới trên A |
| B | Toolbar + filter | `SearchTextInput` mã/tên/alias · `Dropdown` titleGroup · Tạo mới · Refresh · prefer `LinErpListFilterBar` |
| C | Grid | Mã · Tên · Nhóm · Package gợi ý · Active · row menu Xem/Sửa |
| D | Pagination | flat list · `LinCatalogListPagination` |
| Form | Slideout (&lt;10 fields) | C/E/V · footer Lưu/Hủy · leave-confirm · View readonly |

Route: `/mas/chuc-vu` · `/mas/chuc-vu/tao-moi` · `/mas/chuc-vu/:id` · `/mas/chuc-vu/sua?id=`

**Skip chrome:** GOVOne · Signed demo · invent package Cục/VP.

## Control hint — list filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · tên · alias CI |
| titleGroup | Nhóm chức vụ | `Dropdown` | LOOKUP_STATIC / init-data | `LEAD` · `TECH` · `PATROL` |

## Control hint — form fields (P0)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã chức vụ | `Text` code | * | `HAT-TRUONG` · `TUAN-DUONG` — **cấm** Guid · create: `IIdCodeService.GenerateAsync` hoặc nhập chuẩn · lock khi edit |
| name | Tên chức vụ | `Text` | * | tên chuẩn (gộp alias Excel) |
| titleGroup | Nhóm | `Dropdown` | * | LEAD · TECH · PATROL · init-data |
| packageHint | Package gợi ý | `Dropdown` / derived | * | LEAD→`MANAGER-RMMS` · TECH/PATROL→`RMMS-TDTK` — **gợi ý**, Auth package vẫn SSOT · **cấm** invent Cục/VP |
| legacyAliases | Alias Excel | `Text` / tags | | chuỗi lệch chính tả (Tuần kiềm, PGĐ, …) |
| isActive | Hiệu lực | `Switch` | | |

## Control hint — consumer (CTX §5b · peer users / Auth)

**Cấm** free-text chức vụ sau catalog live. Persist **`jobTitleCode`** · hiển thị **`name`**.

| Surface | Field key | controlHint | Notes |
|---------|-----------|-------------|-------|
| Staff list `/admin/user` | jobTitleCode (col) | lookup label | cột **Chức vụ** ≠ `roleCode` |
| Staff form `/admin/user/tao-moi` · `/:id` | jobTitleCode | `SearchInput` | peer orgCode · View `<dl>` |
| Switch user / Home ProfileTab | jobTitleCode / Position | `SearchInput` hoặc readonly resolve | **cấm** placeholder «Chuyên viên IT» |
| Import cuc-01 | job_title Excel | map `legacyAliases` → code | denormalize JobTitle/Position = `name` |

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| jobTitleCode | Chức vụ | `SearchInput` | **job-title** | `GET …/job-titles/search` · GAP-JOB-02 / GAP-JOB-06 |

## Map quyền (cite CTX — không invent)

| titleGroup | packageHint | AppUser `role_code` |
|------------|-------------|---------------------|
| LEAD | `MANAGER-RMMS` | VanPhong |
| TECH | `RMMS-TDTK` | KyThuat |
| PATROL | `RMMS-TDTK` | Ban.TK |

Menu **không** theo node Cục/VP. Org scope = `OrgCode` trên `/mas/co-cau-tc`.

## Gaps / open Q (handoff PO)

| ID | Severity | Note |
|----|----------|------|
| GAP-JOB-DM-01 | P0 | DOMAIN-MAP thiếu slug `job-title` |
| GAP-JOB-BE-01 | P0 | Chưa entity/controller — SA Schema_* + GenerateAsync |
| GAP-JOB-MFE-01 | P0 | Chưa page Master `/mas/chuc-vu` |
| GAP-JOB-05 | P0 | Seed JSON có · chưa import DB / CatalogHandler / API live |
| GAP-JOB-01 | P0 | Excel ~80 → alias trong seed |
| GAP-JOB-02 | P1 | AppUser.JobTitle free text → `jobTitleCode` (peer users) |
| GAP-JOB-06 | P1 | ProfileTab / Auth Position free text → catalog |
| GAP-JOB-04 | P1 | Menu chỉ MANAGER-RMMS / ADMIN-RMMS |
| GAP-JOB-03 | P2 | Auth INTERNAL/CONTRACTOR ngoài seed |

## Version meta

| | |
|--|--|
| skillId | `agent-data-analy` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.01` |
| rulesVersion | `2026.09.19.2` |
| contentHash | `sha256:fdd8fabdbf6bf58d33835fa5d4d1da37922f18062175288d9316f9ced76071ab` |
| analyzedAt | `2026-09-18T18:45:00.000Z` |
| taskId | `task_fe86d194` |
| status | `done` |
