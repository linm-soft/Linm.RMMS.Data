# Danh mục chức vụ — Feature Context (Master)

> **Slug:** `job-title` · **Module:** Master · **Phase:** P1  
> **Status:** Context · **data-analy** từ Excel nhân sự cuc-01  
> **Feature Kind:** **B** — Catalog list + form  
> **packKind:** `master` — **không demo** · UI confirm Design  
> **Nguồn:** `data-import/cuc-01/ds-nhan-su-rmms/Danh sách nhân sự số hóa 10.9.2026.xlsx` cột «Chức danh/nhiệm vụ» · seed [`../seed/job-title-seed.json`](../seed/job-title-seed.json)  
> **MFE:** `Linm.Web.RMMS.Master` · `/mas/chuc-vu`  
> **Hub:** [`master.md`](master.md) · consumer staff [`users.md`](users.md) · Auth/Home Position · **không** trộn [`org-unit.md`](org-unit.md)

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Danh mục **chức vụ** dùng chung — SearchInput trên user · map package menu |
| Count Excel | ~80 chuỗi thô · seed **chuẩn hóa** + `legacyAliases` (Tuần kiềm→Tuần kiểm) |
| DoD | CRUD Kind B · SearchInput · seed import **vào DB** · AppUser.`jobTitleCode` · staff `/admin/user` + Auth/Home «Chức vụ» lookup catalog |
| **Seed Design** | [`../seed/job-title-seed.json`](../seed/job-title-seed.json) — **19 mã chuẩn** · chưa = catalog table / CSV import |

## 2. Design / UI

| Screen | Pattern | Zones |
|--------|---------|-------|
| List | Kind B | Mã · Tên · Nhóm · Package gợi ý · Active |
| Form | Slideout (&lt;10 fields) | code · name · titleGroup · packageHint · aliases · isActive |

Route: `/mas/chuc-vu` · `/mas/chuc-vu/tao-moi` · `/mas/chuc-vu/:id` · `/mas/chuc-vu/sua?id=`

## 3. API

`api/v1/integration/job-titles` · BFF `web-bff/api/v1/integration/job-titles`  
DOMAIN-MAP **Integration** · **cấm** `open-api` · **cấm** `api/v1/rmms/*`

| Method | Path |
|--------|------|
| GET | `/integration/job-titles?search=&titleGroup=` |
| GET | `/integration/job-titles/search` |
| GET | `/integration/job-titles/init-data` |
| GET/POST/PUT/DELETE | `/integration/job-titles` · `/{id}` |

## 4. Fields

| Field | Control | Notes |
|-------|---------|-------|
| code | Text code | `HAT-TRUONG` · `TUAN-DUONG` — **cấm** Guid |
| name | Text | Tên chuẩn (gộp alias Excel) |
| titleGroup | LOOKUP | `LEAD` · `TECH` · `PATROL` |
| packageHint | LOOKUP | `MANAGER-RMMS` (LEAD) · `RMMS-TDTK` (TECH/PATROL) — **gợi ý**, Auth package vẫn SSOT |
| legacyAliases | Text/tags | Chuỗi Excel lệch chính tả |
| isActive | Switch | |

## 5. Map quyền (không invent package Cục/VP)

| titleGroup | Auth `packageHint` | AppUser `role_code` |
|------------|--------------------|---------------------|
| LEAD | `MANAGER-RMMS` | VanPhong |
| TECH | `RMMS-TDTK` | KyThuat |
| PATROL | `RMMS-TDTK` | Ban.TK |

Menu **không** theo node Cục/VP. Org scope = `OrgCode` trên `/mas/co-cau-tc`.

## 5b. Consumer — staff + switch user (chốt 18/09/2026)

**Cấm** free-text chức vụ trên UI sau catalog live. Control = **SearchInput** `api/v1/integration/job-titles` (peer org-unit trên form user). Hiển thị **tên catalog** (`name`), persist **`jobTitleCode`**.

| Surface | Hiện tại | Chốt |
|---------|----------|------|
| Staff list `/admin/user` | Không cột JobTitle · cột «Vai trò / Cấp» = `roleCode` (VanPhong/KyThuat/Ban.TK) | Thêm cột **Chức vụ** = `lookupLabel(job-titles, jobTitleCode)` |
| Staff form `/admin/user/tao-moi` · `/:id` | Org/role/status SearchInput · **không** field chức vụ | Thêm SearchInput **Chức vụ** (`jobTitleCode`) · View `<dl>` cùng nhãn |
| Switch user / hồ sơ | Auth `ApplicationUser.Position` + Home ProfileTab «Chức vụ» = `<input type=text>` | Cùng catalog: SearchInput (hoặc readonly tên resolve từ `jobTitleCode`) · **cấm** placeholder «Chuyên viên IT» |
| Import cuc-01 | `app_users.csv` / Auth `cuc01_staff.csv` cột `job_title` **chuỗi Excel** | Map `legacyAliases` → `jobTitleCode` khi import · denormalize `JobTitle`/`Position` = `name` |

`roleCode` / Auth `packageCode` **không** thay chức vụ. Map gói menu vẫn §5 (`titleGroup` → packageHint).

## 6. Gaps

| ID | |
|----|--|
| GAP-JOB-01 | ~80 chuỗi Excel → gom alias (Tuần kiềm, Hạt Trưởng, PGĐ, Giám đốc điều hành Unicode) |
| GAP-JOB-02 | AppUser.JobTitle đang **free text** — migrate sang `jobTitleCode` + staff SearchInput |
| GAP-JOB-03 | `RMMS-INTERNAL` / `RMMS-CONTRACTOR` (Permission.Job) **chưa** seed Auth — không gắn vào seed này |
| GAP-JOB-04 | Menu `RMMS-TDTK` không có `/mas/chuc-vu` — chỉ MANAGER-RMMS / ADMIN-RMMS (peer org-unit) |
| GAP-JOB-05 | Seed JSON **có** · **chưa** entity/`job_titles.csv`/CatalogHandler/API live — chưa import DB |
| GAP-JOB-06 | Home ProfileTab + Auth Position free text — switch user chưa lookup catalog |

## 7. Pipeline

`/agent-qldb-workflow` · `changeScope=new_page` · `packKind=master` · skip demo · `/add-task` `--features=job-title`.

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `qa` | `await_confirm` | `2026-09-18T20:13:17.140Z` |
| mobile | — | — | — |
