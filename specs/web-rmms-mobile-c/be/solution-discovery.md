# SA — solution-discovery — web-rmms-mobile-c

| Field | Value |
|-------|-------|
| feature | `web-rmms-mobile-c` |
| this role | `sa` · `/agent-sa` |
| status | `confirmed` (autoApprove=ON · agent self-confirm) |
| changeScope | `edit_page` |
| packKind | `list` (phone Field list/form ≠ desktop Kind B grid) |
| domain | **Patrol** (+ Auth · Files · journal peer B · parent session Live) · DOMAIN-MAP slug `web-rmms-mobile-c` → Patrol |
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| be_repo_confirm | `approve` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` · `mfeStdRoute=/web-rmms-mobile-c` · `mfeStdUrl=http://localhost:9301/web-rmms-mobile-c` |
| ui_repo_confirm | `approve` |
| solution_confirm | `approve` (autoApprove=ON · `task_0327ea87`) |
| prior · design | `confirmed` · compact + `ui/design.md` · reviewUrl prototype |
| prior · po | `confirmed` · compact + `po/requirement.md` |
| prior · data_analy | `confirmed` · hash `sha256:0654e7b6359dfa34767872c7ea3a74f94605bd1b73fd125e241d6c95592133a4` |
| contentHash | `sha256:0654e7b6359dfa34767872c7ea3a74f94605bd1b73fd125e241d6c95592133a4` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| updatedAt | `2026-09-25T09:00:00.000Z` |
| demo | **N/A** · **cấm** rescan / demo-json / fake GPS SSOT |
| wave | **C** · TK-02 list · TK-03 phiếu · TK-04 đối chiếu · TK-05 recheck · API **Mới** findings/recheck/review · out: TK-06/07 · WO · feedback (D) |

> SA **chốt** FormMode↔API · code gen · entity+Schema pair · review migration C · BFF vs API · gates TZ/XCO/SHARE.  
> **Cấm** invent API · **cấm** ERP.* · **cấm** fake GPS · **cấm** mock findings · **cấm** HOW (TL) · **cấm** Write MFE ở role này.

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| Domain | Patrol / `patrol` · cite Auth · Files · peer B journal · parent `PatrolSession` Live |
| API host | `api/src/RMMS.Service.Api/Domains/Patrol/` · Models `api/domains/patrol/…/DTOs/` |
| Entity / table **Mới** | `PatrolFindingEntity` → `rmms_patrol_findings` · pair `Schema_PatrolFinding` **trước** form |
| Entity peer extend | `PatrolJournalLineEntity` → add review cols (migration C) · pair Schema_B extend |
| Entity parent Live | `PatrolSessionEntity` → `rmms_patrol_sessions` (FK `sessionId`) |
| BFF web (cite peer) | `web-bff/api/v1/patrol/**` · proxy |
| BFF mobile (UI bind) | `mobile-bff/api/v1/patrol/**` · cùng `{resource}` |
| MFE | `Linm.Web.RMMS.Mobile` · phone max-width 430 |
| Response | Linm.Platform.CommonLib `ApiResponse` / paged |
| Auth perm | Linm.Platform.Authentication · peer Patrol + new finding/recheck/review codes |
| Persist | scalar columns · `MediaIds` CSV guid · **cấm** parent `*Json` blob · **cấm** full URL |
| Out of C | TK-06/07 · `POST maintenance/work-orders` · `POST …/feedback` · assign WO |

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| UI | `@linm-soft-org/linm-web-common-components` + mobile kit | no local Lin* clones · labels `useFormOptions()` |
| HTTP | apiClient SSOT | re-export only · prefix mobile-bff |
| BE | Linm.Platform.CommonLib | ApiResponse |
| Auth | Linm.Platform.Authentication + RequirePermission | peer Patrol · new finding perms |
| Files | FileService BFF `files/*` | guid only · **cấm** full URL persist |
| Catalog | LOOKUP_STATIC FE keys | status · source · findingKind · side · scope · review · recheck · hangMuc · violation — **không** invent `patrol/init-data` |
| Persist | no-parent-json-field | MediaIds CSV · scalar finding + review cols |
| Finding ≠ journal ≠ check-in | separate entity/table/API | **cấm** reuse journal DTO cho findings |

## FormType pack (list · phone)

| Item | Value |
|------|-------|
| packKind | `list` |
| formPattern | Full (TK-02 list · TK-03 create · TK-04 review · TK-05 detail+recheck) · LeaveConfirmModal · N/A ERP Modal/Slideout |
| Grid AC Kind B / DES-GRID / `LinErpListFilterBar` | **N/A** — phone cards · Chip/Select filter only |
| Report AC | **N/A** |
| List query keys | `sessionId` · `status?` · `route?` · `page?` · `pageSize?` |
| filterItems | **cấm** DES-GRID |
| Leave | dirty TK-03 → LeaveConfirmModal (Design DES-LEAVE) |
| Tabs | `none` |
| Map | none wave C · GPS point capture TK-03 + TK-05 recheck · TK-04 prefill từ journal |

## § UNCLEAR CLOSED (SA chốt)

### UNCLEAR-FIND-SCHEMA → CLOSED (gate)

| | |
|--|--|
| Decision | Pair **entity + `Schema_PatrolFinding` + table `rmms_patrol_findings` trước** wire form TK-03 |
| Entity | `PatrolFindingEntity` |
| Schema file | `Schema_PatrolFinding` (Domains/Patrol schema pack peer) |
| FK | `SessionId` → `rmms_patrol_sessions.Id` · optional `JournalLineId` → `rmms_patrol_journal_lines.Id` |
| Soft-delete | KEEP peer Patrol soft-delete (`IsActive`) |
| Dev | migration + controller **Mới** (Step 4b / team-lead T-*) — **không** mock list khi 404 |

### UNCLEAR-FIND-CODE → CLOSED

| | |
|--|--|
| Decision | Server-generated `Code` on `POST findings` · **cấm** client gửi code |
| Format | `TK-{yyyyMMdd}-{seq:D3}` · mirror peer `TD-` / `CC-` day seq |
| Scope | unique per `CompanyCode` · day prefix · seq 001… |
| Rationale | CTX «server sinh code» · peer `PatrolSessionService.NextCodeAsync` pattern |

### UNCLEAR-REVIEW-COL → CLOSED

| | |
|--|--|
| Decision | **Migration C** extend Live `PatrolJournalLineEntity` / `Schema_PatrolJournalLine` — **không** invent bảng review riêng |
| Columns | `Review` (max 32, nullable) · `ReviewNote` (max 2000) · `FindingId` (Guid?, FK findings) |
| API | `PUT …/patrol/journal-lines/{id}/review` **Mới** · body `{ review, reviewNote?, findingId? }` |
| Rules | `lech` → `reviewNote` required · `khop` → note optional · **cấm** sửa `Narrative` / GPS journal trên TK-04 |
| Wave B | Schema_B Live **không** có review cols — C owns add |

### UNCLEAR-DOMAIN-SLUG → CLOSED

| | |
|--|--|
| Decision | DOMAIN-MAP row `web-rmms-mobile-c` → **Patrol** · `patrol` · MFE `Linm.Web.RMMS.Mobile` `/web-rmms-mobile-c` |
| Cite | peer rows `web-rmms-mobile-a` / `web-rmms-mobile-b` |
| Action | row added in this SA pass |

### UNCLEAR-HANGMUC → CLOSED (prior PO)

Slug keys (LOOKUP_STATIC · labels via `useFormOptions`):  
`nen` · `mat` · `cau` · `cong` · `ham` · `thoat-nuoc` · `atgt` · `ho-lan` · `bien` · `dai-phan-cach` · `thiet-bi` · `thi-cong`

## FormMode ↔ API

| Screen / FormMode | Method · Path | Purpose |
|-------------------|---------------|---------|
| TK-02 List | `GET …/patrol/findings?sessionId&status&route` | danh mục tồn tại |
| TK-03 Create | `POST …/patrol/findings` | tạo phiếu · GPS HARD · status=`phat-hien` · server `code` |
| TK-05 Detail | `GET …/patrol/findings/{id}` | chi tiết RO |
| TK-05 Recheck | `POST …/patrol/findings/{id}/recheck` | kết luận · GPS HARD · status transition |
| TK-04 Journal list | `GET …/patrol/sessions/{id}/journal-lines` | peer B Live |
| TK-04 Review | `PUT …/patrol/journal-lines/{id}/review` | khớp/lệch · optional findingId |
| Parent / peer | `GET …/patrol/sessions` · `{id}` | đợt TK + ca TD |
| Auth / Files | `auth/profile` · `files/*` | Live |

**Cấm** invent alternate finding paths · **cấm** nested `sessions/{id}/findings` create (list filter by query `sessionId` only).

## Persist / entity / migration

| Entity | Table | Wave C migration |
|--------|-------|------------------|
| `PatrolFindingEntity` | `rmms_patrol_findings` | **required** · pair Schema trước form |
| `Schema_PatrolFinding` | schema pack | **required** |
| `PatrolJournalLineEntity` | `rmms_patrol_journal_lines` | **required** add `Review` · `ReviewNote` · `FindingId` |
| `PatrolSessionEntity` | `rmms_patrol_sessions` | **none** — Live parent FK only |

**Finding columns (chốt):** `Code` · `SessionId` · `Source` · `JournalLineId?` · `LinkSessionId?` · `FindingKind` · `KmFrom` · `KmTo` · `Side` · `HangMuc` · `Description` · `QtyEstimate?` · `Scope` · `MediaIds` · `Lat` · `Lng` · `AccuracyM` · `DueAt?` · `ViolationAction?` · `ThiCongFlags?` · `Status` · recheck last: `RecheckResult?` · `RecheckNote?` · `RecheckMediaIds?` · `RecheckLat/Lng/AccuracyM?` · `RecheckAt?` · `WorkOrderId?` (RO wave D write) · tenant · soft-delete · timestamps.

**parent_json:** **PASS** — không `*LinesJson` · findings = bảng riêng · MediaIds = CSV guid.

**HARD GPS:** FE deny → block TK-03 save + TK-05 confirm · BE 422 nếu thiếu lat/lng trên create/recheck · **cấm** fake coords.

**Recheck status:** `dat` → `xong` · `chua-dat` → `da-giao` (+ optional `newDueAt`).

## ControlHint ↔ write (slim)

| id | controlHint | GET | write |
|----|-------------|-----|-------|
| findingList | List cards | `GET findings?sessionId&status&route` | — |
| filter.status/route | Chip/Select | query | — |
| source | Dropdown | — | `source` required |
| journalLineId | Lookup | peer B list | if `tuan-duong` |
| findingKind | Dropdown | — | `findingKind` |
| kmFrom/kmTo | Text | — | required |
| side | Dropdown | — | `side` |
| hangMuc | Dropdown | — | PO slug keys |
| description | TextArea | — | required |
| scope | Radio | — | `bdtx`/`vuot-bdtx` |
| lat/lng/accuracyM | GPS | device | create + recheck |
| dueAt | Date | — | if bdtx |
| mediaIds | FileMulti | files | guid[] |
| review/reviewNote | Radio+Text | — | PUT review |
| createFromLech | Button | — | → TK-03 prefill |
| recheckResult | Radio | — | `result` |
| confirmDone | Button | — | only if `dat` |

**Create body:** `sessionId` · `source` · `journalLineId?` · `linkSessionId?` · `findingKind` · `kmFrom` · `kmTo` · `side` · `hangMuc` · `description` · `qtyEstimate?` · `scope` · `mediaIds` · `lat` · `lng` · `accuracyM` · `dueAt?` · `violationAction?` · `thiCongFlags?` · status set server=`phat-hien`.

**Recheck body:** `result` · `note?` · `mediaIds?` · `lat` · `lng` · `accuracyM` · `newDueAt?`.

**Review body:** `review` · `reviewNote?` · `findingId?`.

## API catalog

### API-01: GET /api/v1/patrol/findings

| | |
|--|--|
| Purpose | TK-02 list |
| Permission | finding list |
| Tenant | X-Company-Id |
| Request | query `sessionId` required · `status?` · `route?` · page |
| Response | list/paged `PatrolFindingDto` |
| Errors | empty OK · 404 until schema → empty + gap (**cấm** mock) |
| Form surfaces | TK-02 |
| Migration | entity+schema **Mới** |

### API-02: POST /api/v1/patrol/findings

| | |
|--|--|
| Purpose | TK-03 Create |
| Permission | finding create |
| Request body | Create DTO · GPS + description required · server `Code` |
| Response | created finding + `code` |
| Errors | 404 session · 422 GPS/requireds · 403 XCO |
| HARD | GPS deny FE block · **cấm** client `code` |
| Migration | same |

### API-03: GET /api/v1/patrol/findings/{id}

| | |
|--|--|
| Purpose | TK-05 Detail |
| Permission | finding get |
| Response | `PatrolFindingDto` |
| Errors | 404 · 403 |
| Migration | same |

### API-04: POST /api/v1/patrol/findings/{id}/recheck

| | |
|--|--|
| Purpose | TK-05 Recheck |
| Permission | finding recheck |
| Request body | Recheck DTO · GPS required · `note` if `chua-dat` · `mediaIds` if `dat` |
| Response | updated finding + status |
| Errors | 404 · 422 · 403 |
| HARD | GPS deny FE block confirm |
| Migration | same entity recheck cols |

### API-05: PUT /api/v1/patrol/journal-lines/{id}/review

| | |
|--|--|
| Purpose | TK-04 review |
| Permission | journal review |
| Request body | `{ review, reviewNote?, findingId? }` |
| Response | updated journal line (review fields) |
| Errors | 404 · 422 if `lech` thiếu note · 403 |
| HARD | **cấm** mutate narrative/GPS |
| Migration | journal review cols C |

### API-06… peer/parent Live

`GET …/sessions` · `{id}` · `GET …/sessions/{id}/journal-lines` · `auth/profile` · `files/*` — **KEEP** peer A/B · no invent.

## BFF vs API

| | |
|--|--|
| Ownership | API Patrol owns findings + review · BFF **proxy only** |
| Mobile bind | `mobile-bff/api/v1/patrol/findings` · `…/findings/{id}/recheck` · `…/journal-lines/{id}/review` |
| Web BFF cite | `web-bff/api/v1/patrol/**` same resource |
| Integration / Auth / Files | existing BFF prefixes · **cấm** nest under patrol |
| Cấm | MFE gọi API host trực tiếp bypass BFF (repo SSOT) |

## Gates

| Gate | Value | Note | Review slash | Dev |
|------|-------|------|--------------|-----|
| TZ | **tz_required** | `dueAt` · `recheckAt` UTC · FE local | `/review-timezone-implement` | store UTC · form date |
| XCO | **xco_required** | company on finding + journal review | peer Patrol | X-Company-Id |
| SHARE | **share_none** wave C | no cross-tenant share | — | — |
| FILE | **file_guid** | MediaIds CSV | peer FILE-01 | guid only |
| GPS | **gps_hard** | create + recheck | — | 422 missing |
| ERP | **forbid** | DOMAIN-MAP Patrol only | — | **cấm ERP.*** |

## Gaps closed / handoff

| id | Note |
|----|------|
| GAP-DA-MOB-C-SCHEMA-01 | CLOSED — Schema_PatrolFinding pair gate |
| GAP-DA-MOB-C-CODE-01 | CLOSED — `TK-{yyyyMMdd}-{seq:D3}` |
| GAP-DA-MOB-C-REVIEW-01 | CLOSED — migration C review cols on journal |
| GAP-DA-MOB-C-DOMAIN-01 | CLOSED — DOMAIN-MAP row C |
| GAP-DA-MOB-C-OUT-D | KEEP out — WO/feedback/TK-06/07 = D/E |
| GAP-TK-01…03 | KEEP product · APIs above cover |

## DoR SA

| Check | Result |
|-------|--------|
| Design confirmed | PASS |
| FormMode↔API | API-01…05 + peers |
| entity / migration | Finding **required** · journal review cols **required** |
| BFF vs API | mobile-bff proxy · API Patrol owns |
| UNCLEAR closed | FIND-SCHEMA · FIND-CODE · REVIEW-COL · DOMAIN-SLUG · HANGMUC |
| solution_confirm | `approve` (autoApprove) |
| cấm Write MFE / e2e / Step 4b | PASS |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:0654e7b6359dfa34767872c7ea3a74f94605bd1b73fd125e241d6c95592133a4` · `updatedAt=2026-09-25T09:00:00.000Z` · `taskId=task_0327ea87`
