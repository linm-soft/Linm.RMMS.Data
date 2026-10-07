# SA — Solution — web-rmms-role-gate

> Status: **confirmed** · autoApprove ON · task `task_99b2984a` · 2026-09-30T16:30:00.000Z  
> **changeScope=`edit_page`** · packKind=`list` · **cấm** ERP.* · **cấm** invent `RoleGateController` / `role-gate/*` · **cấm** Step 4b / migration run tại SA · **cấm** Write MFE/native · **cấm** web-bff client Mobile · **cấm** demo-json / fake caps.

| | |
|--|--|
| Feature | `web-rmms-role-gate` |
| Title | Quyền QL_HAT và vai theo chức danh |
| Role | `sa` |
| packKind | `list` (phone gate · ≠ desktop Kind B) |
| changeScope | `edit_page` |
| formPattern | Mobile full ≤430 · profile RO + visibility · assign peer sheet · N/A ERP Modal |
| domain | **Integration** (`job-titles`) + **Auth profile cite** · consumers Patrol / Incident / Maintenance / Notification |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` · mfeStdRoute `/web-rmms-role-gate` |
| mfeStdUrl | `http://localhost:9301/web-rmms-role-gate` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` |
| BFF | Mobile.Bff `http://localhost:5202` · prefix `mobile-bff/api/v1` |
| contentHash | `sha256:cc33bfbc2361d40d732e6b018e209ccce2e8778cce33f39c7766119237ba4216` |
| skillVersion | `2026.09.05.03` |
| solution_confirm | **approve** (autoApprove) |
| design_confirm | **approve** |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-role-gate/ui/prototype/index.html` |
| peerStdUrl | `http://localhost:9301/web-rmms-role-gate` |
| real_view_parity | `v1` |
| demo | **N/A** · **cấm** fake roleCaps / demo SSOT |

## 0. Delta vs baseline (edit_page)

| Keep | New / change |
|------|----------------|
| Live `GET auth/profile` · `JobTitlesController` CRUD · `rmms_users.JobTitleCode`/`PackageCode` · peer assign/findings/home/shell | Profile DTO + `jobTitleCode` · `packageCode` · `roleCaps.*` |
| Seed job-titles (HAT-* = `MANAGER-RMMS`) | **HAT-TRUONG/HAT-PHO → `QL_HAT`** · seed **`NGHIEM-THU`** · init-data + `QL_HAT` option |
| CTA/nav không khóa QL_HAT | Visibility iff `roleCaps` / `packageCode=QL_HAT` · **cấm** MANAGER→Giao việc |
| dueAt / SlaHours=24 | Gợi ý TT41 Phụ lục IV · editable · **cấm** default 24h · **cấm** tiền Mục IV |
| DOMAIN-MAP thiếu slug | **Add** `web-rmms-role-gate` → Integration |

## 1. Domain / ownership

| Item | Decision |
|------|----------|
| DOMAIN-MAP slug | `web-rmms-role-gate` → **Integration** / `integration` · Auth profile cite |
| Rationale | Catalog chức danh + packageHint = Integration `job-titles` · gate clients = Auth profile projection · consumers cite peers |
| API folder | Reuse `JobTitlesController` + Auth `GET/PUT auth/profile` · **enhance** profile DTO · Mobile.Bff forward/enrich |
| **Cấm** | invent `RoleGateController` · `api/v1/role-gate` · ERP.* · web-bff base từ Mobile MFE · fake caps |

**DOMAIN-MAP row (apply):**

| Feature slug | Domain | kebab · note |
|--------------|--------|--------------|
| `web-rmms-role-gate` | Integration | `integration` · Auth profile cite + Live `job-titles` · seed HAT-*→`QL_HAT` + `NGHIEM-THU` · profile DTO `packageCode`/`roleCaps` · cite Patrol/Incident/Maintenance/Notification · MFE Mobile `/web-rmms-role-gate` · **cấm** invent RoleGateController |

→ resolves **GAP-RG-DM-01**.

## 2. FormMode ↔ API

| Mode / zone | UI | API | Write | Notes |
|-------------|----|-----|-------|-------|
| RG-00 shell | phone ≤430 | Mobile.Bff only | — | **cấm** web-bff |
| RG-01 profile | Chip/Text RO | **GET auth/profile** (enhance) | — | displayName · jobTitleCode · packageCode · roleCaps |
| RG-01 resolve title | Chip RO | GET `integration/job-titles` (list/search) | — | name/group from catalog · **cấm** hardcode VN |
| RG-02 seed / Master cite | Dropdown packageHint | GET `job-titles/init-data` · PUT `{id}` | packageHint | HAT-* → `QL_HAT` · **cấm** FE-only enum omit BE |
| RG-03a home tiles | Nav gated | roleCaps from profile | — | peer home |
| RG-03b hub/shell | Nav/Tab gated | roleCaps | — | peer patrol hub · shell |
| RG-03c assign CTA | Button gated | `roleCaps.qlHat` | mở form giao | **cấm** MANAGER-RMMS |
| RG-03c assign form | SearchInput/DateTime | peer Incident/Maintenance WO | Assignee* · DueAt · Note | dueAt TT41 hint · editable |
| RG-03d finding Pass/Fail | Button gated | `roleCaps.tuanKiem` | POST peer finding | |
| Nghiệm thu | RO link | `roleCaps.nghiemThu` | — | **cấm** assign / tạo NT từ gate này |

### Live / delta endpoints

| Id | Method | BFF path (client) | Downstream | Status |
|----|--------|-------------------|------------|--------|
| API-01 | GET | `mobile-bff/api/v1/auth/profile` | Auth + **enrich** từ `rmms_users` + job-title resolve | **Enhance** |
| API-02 | GET | `mobile-bff/api/v1/integration/job-titles` | JobTitlesController | **Live** reuse |
| API-03 | GET | `…/integration/job-titles/init-data` | PackageHints + groups | **Enhance** + `QL_HAT` |
| API-04 | GET | `…/integration/job-titles/search` | SearchItemDto | **Live** |
| API-05 | PUT | `…/integration/job-titles/{id}` | UpdateJobTitleRequest.packageHint | **Live** · Master cite |
| API-06 | POST/GET | peer Incident assign / Maintenance WO / findings | existing peers | **Cite** · visibility only |
| API-07 | GET | peer users SearchInput assignee | Integration users | **Live** cite |

### API-01 enhance: GET auth/profile

| | |
|--|--|
| Purpose | Profile sau login mang chức danh + package + roleCaps cho visibility |
| Permission | JWT staff (self) |
| Tenant | X-Company-Id / company JWT hiện có |
| Request | — |
| Response add | `jobTitleCode:string` · `packageCode:string` · `roleCaps:{ tuanDuong:bool, tuanKiem:bool, nghiemThu:bool, qlHat:bool }` · giữ fullName/userName |
| Source | `rmms_users.JobTitleCode` · `PackageCode` (fallback `job-titles.packageHint` theo code) · **derive** roleCaps (bảng dưới) |
| Errors | 401 → login · empty user → toast · **cấm** `window.alert` · **cấm** fake caps |
| Form surfaces | RG-01 · all RG-03 gates |
| Field map | UI `profile.*` / `roleCaps.*` → DTO cùng tên |
| Context | `docs/context/features/web-rmms-role-gate.md` |
| Demo | **N/A** |
| data-import | none (seed job-titles) |
| Migration | none on profile columns (đã có) · seed riêng API-SEED |
| BFF | Mobile.Bff `:5202` — enrich OpenAPI `MobileAuthUser` + payload thực · **không** invent path mới |
| Persist gate | scalar only · **cấm** `roleCapsJson` / parent blob |

**roleCaps derive (SSOT — FE không hardcode map vượt seed):**

| Cap | Rule |
|-----|------|
| `qlHat` | `packageCode == QL_HAT` · **cấm** suy từ `MANAGER-RMMS` |
| `tuanDuong` | `jobTitleCode` ∈ {`TUAN-DUONG`, … PATROL tuần đường SSOT seed} **hoặc** dual-cap khi HAT-* vẫn tuần đường theo PLAN |
| `tuanKiem` | `jobTitleCode` ∈ {`TUAN-KIEM`} (+ legacy alias resolve) |
| `nghiemThu` | `jobTitleCode == NGHIEM-THU` (seed mới · **UNCLEAR-RG-NT-CODE resolved**) |

### API-03 enhance: init-data PackageHints

| | |
|--|--|
| Purpose | Dropdown `seed.packageHint` gồm `QL_HAT` |
| Response | PackageHints += `{ value: QL_HAT, label: QL_HAT }` · giữ MANAGER-RMMS · RMMS-TDTK |
| AllowedPackages | include `QL_HAT` trong `JobTitleService` |
| Migration | code allowlist + Seed update rows |

### API-SEED: Seed_JobTitleQlHatNghiemThu

| | |
|--|--|
| Purpose | HAT-* → QL_HAT · thêm mã NGHIEM-THU |
| Files | `docs/context/seed/job-title-seed.json` + EF `Seed_JobTitleQlHatNghiemThu` |
| Rows | UPDATE `HAT-TRUONG`,`HAT-PHO` PackageHint=`QL_HAT` · INSERT `NGHIEM-THU` / name «Nghiệm thu» / titleGroup=`TECH` / packageHint=`RMMS-TDTK` |
| Users sync | UPDATE `rmms_users` PackageCode=`QL_HAT` where JobTitleCode in (HAT-TRUONG,HAT-PHO) |
| EF run | **Dev Step 4b only** · SA skip |

## 3. BFF vs API

| Layer | Role |
|-------|------|
| Mobile.Bff `:5202` | Sole FE entry · forward Auth + Integration · **enrich profile** từ RMMS user/job-title |
| RMMS Integration | Owner `job-titles` catalog share_a |
| Auth (Platform) | Owner login/profile shell · response extended via BFF and/or Auth contract |
| web-bff | cite only · **not** Mobile client base |
| Peers | Incident assign · findings · home/shell — **visibility only** this feature |

**Fail:** 401 → login · 4xx toast · missing package → caps false · **cấm** invent API · **cấm** demo SSOT.

## 4. Entity / migration

| Item | Decision |
|------|----------|
| Tables | `rmms_job_titles` (existing) · `rmms_users` (existing JobTitleCode/PackageCode) |
| New columns | **none** |
| New entity / controller | **none** |
| Migration name | **`Seed_JobTitleQlHatNghiemThu`** (data only) |
| DTO | Enhance Auth profile / `MobileAuthUser` · JobTitleInitData PackageHints |
| Persist gate | scalar · **cấm** `*RoleCapsJson` |
| EF run | **skip at SA** · Dev Step 4b |

→ resolves **GAP-RG-PROF-01** · **GAP-RG-SEED-01**.

## 5. Implement gates (confirm · autoApprove ON)

| Gate | Decision | Endpoints / surfaces | Skill | Note |
|------|----------|----------------------|-------|------|
| TZ | **required** | API-06 peer assign `dueAt` · UTC persist + local display | `/review-timezone-implement` | **cấm** SlaHours=24 default |
| XCO | **n/a** | Profile = self JWT only · không View-by-id cross-company trên RG | `/implement-view-cross-company` | Master job-titles GET/{id} giữ share_a sẵn có |
| SHARE | **share_a** | `JobTitleEntity` catalog · `ISharedMasterCatalogEntity` | `/implement-shared-table` | AppUser profile fields **tenant_keep** |

AskQuestion (autoApprove): `sa_tz_gate=tz_required` · `sa_xco_gate=xco_na` · `sa_shared_table=share_a` · 2026-09-30T16:30:00.000Z

## 6. FE surface (SA contract — Dev implements)

| Zone | Contract |
|------|----------|
| RG-00…03 | Phone 430 · Android 1-1 cite · **cấm** sửa iOS/Android native |
| Control = controlHint | Profile RO · Dropdown packageHint từ init-data · Buttons gated roleCaps |
| Labels | i18n keys · **cấm** hardcode VN mới |
| DES-GRID / LinErpListFilterBar | **N/A** phone gate |
| Leave | RG-02/RG-03c LeaveConfirmModal · **cấm** native alert/confirm |
| Out | Excel · RoleGateController · SLA 24h · tiền Mục IV · chấm 100 · MANAGER→Giao việc · web-bff |

## 7. FormType pack (list · phone)

| Surface | Pattern | Filter bar | Notes |
|---------|---------|------------|-------|
| S-LIST gate | Mobile full visibility | N/A | RG-01…03 · không Kind B desktop |
| S-SHEET assign | peer sheet | N/A | dueAt TT41 |
| Report/export/chart | N/A | — | — |

Query keys / LinErpListFilterBar: **N/A** (phone).

## 8. Risks / open

| ID | Status |
|----|--------|
| GAP-RG-DM-01 | **resolved** — DOMAIN-MAP row |
| GAP-RG-PROF-01 | **resolved** — profile DTO enhance |
| GAP-RG-SEED-01 | **resolved** — Seed_JobTitleQlHatNghiemThu + QL_HAT init-data |
| UNCLEAR-RG-NT-CODE | **resolved** (PO) — seed `NGHIEM-THU` |

## 9. Handoff → team_lead

| Item | Value |
|------|-------|
| solution_confirm | **approve** |
| APIs | API-01…07 · Seed_JobTitleQlHatNghiemThu |
| Dev slash | `/agent-dev` |
| E2E | queued `/agent-qa*` · **cấm** e2e tại SA |
| next | `/agent-team-lead` · roleOnly stop (GAP-PKT-ROLE-01) |

## Version meta

`skillVersion=2026.09.05.03` · `contentHash=sha256:cc33bfbc2361d40d732e6b018e209ccce2e8778cce33f39c7766119237ba4216` · `writtenAt=2026-09-30T16:30:00.000Z` · `taskId=task_99b2984a`
