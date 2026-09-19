# Data-analy — controlHint — users (Kind B catalog list + form)

| Field | Value |
|-------|-------|
| feature | `users` |
| packKind | `list` |
| changeScope | `edit_page` |
| mode | `feature_context` · NEW AutocodeTask `task_8c25b03b` · **edit_page** (không `new_page` typed CRUD) |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.08.20` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.1` |
| rulesVersion | `2026.08.15.2` |
| versionGate | `rechecked` |
| contentHash | `sha256:8bd9897e1ab2483fdb96e9a37492d87c38c7e709c2e3df118c7b884f5d4bb257` |
| headerFingerprint | `sha256:0c7e8b38d9c4733e737ebf7892a96270805cec43729025986dff0b8502b88329` |
| analyzedAt | `2026-09-18T15:52:39.759Z` |
| cluster | — (không Excel header · context + job-title §5b + live MFE) |
| taskId | `task_8c25b03b` |
| title | Users — chức vụ lookup (job-title) |
| autoApprove | `ON` |
| priorArtifacts | **KEEP** `specs/users/po/requirement.md` · `ui/design.md` · SA/TL/Dev/QA — delta only |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** lookup API.  
> **Cấm** Dev đoán Text vs SearchInput khi đã có bảng này.  
> **Cấm ERP.*** · domain **Integration** · BE `D:/AI-QLBD/Linm.RMMS.WebService` · prefix `api/v1/integration`.  
> Cite: [`job-title.md`](../../../docs/context/features/job-title.md) **§5b** · [`users.md`](../../../docs/context/features/users.md) **GAP-F-USR-05**.

## § Delta Current vs New (HARD · edit_page)

| Surface | Current (live / prior pack) | New (this task) |
|---------|----------------------------|-----------------|
| Staff list `/admin/user` · `/integration/users` | Không cột JobTitle · cột «Vai trò / Cấp» = `roleCode` | Thêm cột **Chức vụ** = `lookupLabel(job-titles, jobTitleCode)` — **≠** roleCode |
| Staff form C/E/V | Org/role/status SearchInput · **không** field chức vụ · MFE không match `jobTitle*` | SearchInput **Chức vụ** peer `orgCode` · persist `jobTitleCode` · View `<dl>` cùng nhãn · **cấm** Input text chức vụ |
| Zone B filter | search · role · status · route · org tree | **+** SearchInput filter `job-title` (optional P1 cùng GAP-F-USR-05 list) |
| Switch user / Home ProfileTab | Auth `Position` free text · placeholder «Chuyên viên IT» risk | SearchInput cùng catalog (readonly khi view) · **cấm** placeholder «Chuyên viên IT» |
| Persist | Không / free `JobTitle` text (GAP-JOB-02) | `jobTitleCode` · denormalize `JobTitle`/`Position` = catalog `name` |
| Lookup API | — | `GET api/v1/integration/job-titles` (+ `/search`) · BFF `web-bff/api/v1/integration/job-titles` · **cấm** open-api · **cấm** `api/v1/rmms/*` |
| Scope boundary | Prior route/org SearchInput DONE | **Không** invent package Cục/VP · `roleCode` ≠ chức vụ · **không** new_page CRUD staff |

**Out of this edit:** master CRUD `job-title` (`/mas/chuc-vu`) — pack riêng · consumer-only trên `users`.

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context | `docs/context/features/users.md` | `8bd9897e…` (GAP-F-USR-05) |
| Consumer SSOT | `docs/context/features/job-title.md` §5b | chốt 18/09/2026 |
| Seed | `docs/context/seed/job-title-seed.json` | 19 mã chuẩn |
| Demo entry | `Linm.RMMS.Demo/src/demo/features/users-demo.html` | `0c7e8b38…` unchanged |
| MFE live | `UsersListPage` + `UsersFormPage` | **no** `jobTitle*` — GAP confirm |
| Prior control-hint | same path · task_67e5319a | baseline org/route — **superseded** delta job-title |
| Prior PO/Design | `specs/users/po` · `ui` | **KEEP** · PO/Design patch delta |

Normalized header (+ jobTitle):

`code|username|fullName|email|phone|orgCode|jobTitleCode|roleCode|status|routesCsv|managedUserIdsCsv|password|currentPassword|newPassword|confirmPassword|search`

## Kind / zones (handoff Design — delta)

Pack **list** = Kind **B**. Form = **full-page** · View `<dl>` · **cấm** Slideout · **cấm** View=`readOnly` Input.

| Zone | Pattern | Delta DoD |
|------|---------|-----------|
| A | Header | unchanged |
| B | Toolbar + filter | **+** SearchInput `job-title` (filter) peer role/status/route |
| C | `LinCatalogDataGrid` | **+** cột **Chức vụ** (catalog name) · giữ cột Vai trò = `roleCode` |
| D | Pagination | unchanged |
| Form | full-page | **+** SearchInput `jobTitleCode` peer `orgCode` · View `<dl>` «Chức vụ» |
| Profile / switch | Home · Auth | SearchInput catalog · **cấm** free text / placeholder «Chuyên viên IT» |
| Chrome Ban.TK… | — | **SKIP** P1 |

## Control hint — list filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm… | `SearchTextInput` | text | giữ |
| role | Vai trò | `SearchInput` | enum | **≠** chức vụ |
| status | Trạng thái | `SearchInput` | enum | giữ |
| orgCode | Tổ chức | tree + filter | **org-unit** | giữ |
| route | Tuyến | `SearchInput` | **road-route** | giữ |
| jobTitleCode | Chức vụ | `SearchInput` | **job-title** | **NEW** · cite §5b |

## Control hint — form fields (delta)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| orgCode | Tổ chức | `SearchInput` | * | peer layout |
| **jobTitleCode** | **Chức vụ** | **`SearchInput`** | | **NEW** · `catalogKind=job-title` · **cấm** Text/Input · View `<dl>` resolve `name` |
| roleCode | Vai trò / Cấp | `SearchInput` | | enum · **≠** jobTitleCode |
| status | Trạng thái | `SearchInput` | | giữ |
| *(other fields)* | — | — | — | giữ prior control-hint (code·username·fullName·email·phone·routesCsv·password…) |

## Lookup APIs (đề xuất SA — delta)

| Lookup | API | consumer | Status |
|--------|-----|----------|--------|
| job-titles list/search | `GET /api/v1/integration/job-titles` · `/search` · `?search=&titleGroup=` | list col · form · ProfileTab | **MISSING** / master pack GAP-JOB-05 |
| BFF same | `web-bff/api/v1/integration/job-titles` | MFE | same |
| users CRUD | `…/integration/users` | + body/field `jobTitleCode` | **DELTA** persist |
| org / road-route / users | prior | — | DONE |

**Cấm:** `open-api` · `api/v1/rmms/*` · ERP.WebService · invent package Cục/VP.

Entity delta: `AppUser.jobTitleCode` → catalog · denormalize display `JobTitle`/`Position` = `name`. Auth `Position` sync từ code — không SSOT riêng.

## GAP (this task)

| ID | Gap | Severity | Hướng |
|----|-----|----------|-------|
| GAP-F-USR-05 | chức vụ SearchInput list+form+Profile · persist code | **P1** | PO delta · Design control-map · SA LKP · Dev |
| GAP-DA-USR-JOBTITLE-UI | MFE list/form **không** field/cột chức vụ | P0 UI | T-UI-LIST · T-UI-FORM |
| GAP-DA-USR-JOBTITLE-API | users DTO/API chưa `jobTitleCode` · job-titles LKP phụ thuộc master | P0 API | T-BE · master job-title |
| GAP-JOB-05 / 02 / 06 | catalog API + migrate free text + ProfileTab | P1 peer | job-title pack · cite §5b |
| GAP-F-USR-01 | Auth host tách | P2 | không block |

## Handoff

→ **PO:** edit_page delta only · cite GAP-F-USR-05 + job-title §5b · **KEEP** prior requirement · **không** new_page CRUD  
→ **Design:** + cột Chức vụ · + SearchInput form peer org · ProfileTab · prototype delta + reviewUrl  
→ **SA:** Integration `job-titles` lookup + users field `jobTitleCode` · BFF same · **cấm** open-api/rmms  
→ **TL/Dev:** T-UI-LIST col · T-UI-FORM SearchInput · T-UI-LKP job-title · T-BE persist · ProfileTab (Home host nếu ngoài MFE Integration — note boundary)  
→ **QA:** list col resolve name · form SearchInput · cấm free text · roleCode ≠ chức vụ

Chain: role này **done**. Roles sau = **pending**.

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
| orchestratorSkillVersion | 2026.08.08.21 |
| orchestratorWorkflowVersion | 2026.08.09.02 |
| orchestratorRulesVersion | 2026.08.09.3 |

---
<!-- Version meta: skillVersion=2026.08.08.20 · schemaVersion=1 · workflowVersion=2026.08.15.1 · rulesVersion=2026.08.15.2 · versionGate=rechecked -->
