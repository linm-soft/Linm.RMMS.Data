# Data-analy — real-data — users (chức vụ / job-title consumer)

| Field | Value |
|-------|-------|
| feature | `users` |
| packKind | `list` |
| changeScope | `edit_page` |
| mode | `feature_context` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.08.20` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.1` |
| rulesVersion | `2026.08.15.2` |
| versionGate | `rechecked` |
| contentHash | `sha256:8bd9897e1ab2483fdb96e9a37492d87c38c7e709c2e3df118c7b884f5d4bb257` |
| analyzedAt | `2026-09-18T15:52:39.759Z` |
| taskId | `task_8c25b03b` |
| title | Users — chức vụ lookup (job-title) |
| cite | `job-title.md` §5b · `users.md` GAP-F-USR-05 |

> Real-data cho **consumer** staff `/admin/user` · **không** seed CRUD master `job-title` trong pack này.  
> BE: `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP **Integration** · **cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** open-api.

## § Delta Current vs New

| Data surface | Current | New |
|--------------|---------|-----|
| Staff row display | Không JobTitle col · role = `roleCode` | Cột Chức vụ = catalog `name` via `jobTitleCode` |
| Staff persist | free `JobTitle` / missing code (GAP-JOB-02) | persist **`jobTitleCode`** · denormalize `JobTitle`/`Position` = `name` |
| Profile / switch | Auth `Position` free text | sync từ code · SearchInput catalog · **cấm** «Chuyên viên IT» placeholder |
| Import cuc-01 | `job_title` chuỗi Excel | map `legacyAliases` → `jobTitleCode` (master seed) |
| role vs title | mixed UX risk | `roleCode` ≠ chức vụ · packageHint chỉ gợi ý §5 job-title |

## Catalog source (shared)

| Item | Value |
|------|-------|
| catalogKind | `job-title` |
| seed | `docs/context/seed/job-title-seed.json` |
| count | **19** mã chuẩn |
| titleGroup | `LEAD` · `TECH` · `PATROL` |
| packageHint | `MANAGER-RMMS` (LEAD) · `RMMS-TDTK` (TECH/PATROL) — **gợi ý** · **cấm** invent Cục/VP |
| aliases | `legacyAliases[]` trên seed (Tuần kiềm→TUAN-KIEM, …) |

### Canonical codes (SSOT seed)

`TRUONG-VP` · `PHO-TRUONG-VP` · `DOI-TRUONG` · `DOI-PHO` · `PHU-TRACH-DOI` · `HAT-TRUONG` · `HAT-PHO` · `GIAM-DOC` · `PHO-GIAM-DOC` · `TRUONG-PHONG` · `PHO-PHONG` · `TO-TRUONG` · `TRUONG-CA` · `CHUYEN-VIEN` · `KY-SU` · `CAN-BO-KT` · `TUAN-DUONG` · `TUAN-KIEM` · `NHAN-VIEN`

## Entity / fields (delta)

| Field | Type | Source | Notes |
|-------|------|--------|-------|
| `jobTitleCode` | string code | AppUser | FK logical → job-titles.code · **cấm** Guid |
| `JobTitle` / `Position` | string name | denormalized | = catalog `name` at write · display fallback |
| `roleCode` | enum | AppUser | VanPhong/KyThuat/Ban.TK — **không** thay chức vụ |
| `orgCode` | string | AppUser | peer SearchInput · org-unit |

## APIs (real paths)

| Op | Path | Notes |
|----|------|-------|
| LKP list | `GET /api/v1/integration/job-titles?search=&titleGroup=` | consumer SearchInput |
| LKP search | `GET /api/v1/integration/job-titles/search` | typeahead |
| BFF | `web-bff/api/v1/integration/job-titles` | same contract |
| Users CRUD | `…/integration/users` | body + list DTO include `jobTitleCode` (+ optional resolved name) |
| List filter | `…/users?jobTitleCode=` | optional Zone B |

**Cấm:** open-api · `api/v1/rmms/*` · ERP.WebService Domains/Master.

## Sample resolve (accept criteria)

| jobTitleCode | name (grid/View) | titleGroup |
|--------------|------------------|------------|
| `HAT-TRUONG` | Hạt trưởng | LEAD |
| `CHUYEN-VIEN` | Chuyên viên | TECH |
| `TUAN-DUONG` | Tuần đường | PATROL |
| `TUAN-KIEM` | Tuần kiểm | PATROL (alias «Tuần kiềm») |

## Shared catalogs reuse

| catalog | path / note |
|---------|-------------|
| org-unit | prior APPROVED · tree + SearchInput |
| road-route | prior APPROVED · routesCsv |
| job-title | seed 19 · API master GAP-JOB-05 — **block soft** until LKP live; UI wire mock/search stub OK per SA |

## Mock / demo

| Surface | Rule |
|---------|------|
| Demo HTML users | unchanged hash · **không** bắt buộc demo job-title control trong HTML nếu MFE là SoT |
| MFE store | add `jobTitleCode` on user rows · resolve label from LKP/cache |
| Import | map Excel aliases → code when cuc-01 import runs (peer job-title pack) |

## GAP / blockers

| ID | Note |
|----|------|
| GAP-F-USR-05 | **this task** — UI+persist consumer |
| GAP-JOB-05 | catalog API/entity chưa live — SA/master |
| GAP-JOB-02 | migrate free JobTitle → code |
| GAP-JOB-06 | ProfileTab / Auth Position |
| GAP-F-USR-01 | Auth host — P2 không block list delta |

## Handoff

→ PO/Design/SA dùng bảng resolve + seed path.  
→ Dev: MFE Integration `UsersListPage`/`UsersFormPage` + lookups `job-titles`.  
→ Home ProfileTab nếu repo khác — ghi boundary trong SA (không block staff list/form P1).

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.08.08.20 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.15.1 |
| rulesVersion | 2026.08.15.2 |
| generatedAt | 2026-09-18T15:52:39.759Z |
| versionGate | rechecked |

---
<!-- Version meta: skillVersion=2026.08.08.20 · schemaVersion=1 · workflowVersion=2026.08.15.1 · rulesVersion=2026.08.15.2 · versionGate=rechecked -->
