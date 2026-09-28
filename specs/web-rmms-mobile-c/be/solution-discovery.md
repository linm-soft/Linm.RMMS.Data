# SA — solution-discovery — web-rmms-mobile-c

| Field | Value |
|-------|-------|
| feature | `web-rmms-mobile-c` |
| this role | `sa` · `/agent-sa` |
| status | `confirmed` (autoApprove=ON · agent self-confirm) |
| changeScope | `edit_page` |
| packKind | `list` (phone Field list/form ≠ desktop Kind B grid) |
| domain | **Patrol** (+ Auth · Files · Integration peer · journal peer B) · DOMAIN-MAP `web-rmms-mobile-c` → Patrol |
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| be_repo_confirm | `approve` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` · `mfeStdRoute=/phat-hien` · `mfeStdUrl=http://localhost:9301/phat-hien` |
| ui_repo_confirm | `approve` |
| solution_confirm | `approve` (autoApprove=ON · `task_8e6ea5bb`) |
| prior · design | `confirmed` · compact + `ui/design.md` · reviewUrl prototype |
| prior · po | `confirmed` · compact + `po/requirement.md` |
| prior · data_analy | `confirmed` · hash `sha256:4a38b53861c732cbbde7208c21d766f1b8b2c8decc007d2dc24ea34a4793339c` |
| contentHash | `sha256:4a38b53861c732cbbde7208c21d766f1b8b2c8decc007d2dc24ea34a4793339c` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| updatedAt | `2026-09-27T08:15:00.000Z` |
| demo | **N/A** · **cấm** rescan / demo-json / fake GPS SSOT |
| wave | **C delta** · Pattern B submit/validate + `capture=environment` · **no** new schema · keep Live findings/recheck/review |

> SA **chốt** FormMode↔API · BFF vs API · no-migration delta · gates.  
> **Cấm** invent API · **cấm** ERP.* · **cấm** fake GPS · **cấm** mock findings · **cấm** HOW (TL) · **cấm** Write MFE · **cấm** Step 4b ở role này.

## Architecture (repo SSOT) — KEEP Live

| Layer | Choice |
|-------|--------|
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| Domain | Patrol / `patrol` · cite Auth · Files · Integration · peer B journal |
| API host | `api/src/RMMS.Service.Api/Domains/Patrol/` · Models patrol DTOs Live |
| Entity / table | `PatrolFindingEntity` → `rmms_patrol_findings` · `Schema_PatrolFinding` **Live** — **không** reopen |
| Entity peer | `PatrolJournalLineEntity` review cols **Live** — **không** migration mới |
| Entity parent | `PatrolSessionEntity` → `rmms_patrol_sessions` (FK `sessionId`) Live |
| BFF web (cite) | `web-bff/api/v1/patrol/**` · **cấm** MFE bind |
| BFF mobile (UI bind) | `mobile-bff/api/v1/patrol/**` · `mobileApiBase()` only |
| BFF Integration | `mobile-bff/api/v1/integration/**` · `users` **forward nếu thiếu** (GAP-DA-MOB-C-BFF-USERS-01) |
| MFE | `Linm.Web.RMMS.Mobile` · phone max-width 430 · route `/phat-hien` |
| Response | Linm.Platform.CommonLib `ApiResponse` / paged |
| Persist | scalar · `MediaIds` CSV guid · **cấm** parent `*Json` · **cấm** full URL |
| Out of this task | schema/migration · invent feedback CRUD · WO · TK-06/07 |

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| UI | `@linm-soft-org/linm-web-common-components` + mobile kit | no fork LinImageUpload · capture prop vs local → Dev soft |
| HTTP | apiClient SSOT | prefix **mobile-bff only** |
| BE | Linm.Platform.CommonLib | ApiResponse — **no** new controller this wave |
| Auth | Linm.Platform.Authentication | KEEP finding/recheck/review perms Live |
| Files | FileService BFF `files/*` | guid only |
| Catalog | LOOKUP_STATIC FE keys | **không** invent `patrol/init-data` |
| Persist | no-parent-json-field | MediaIds CSV |

## FormType pack (list · phone)

| Item | Value |
|------|-------|
| packKind | `list` |
| formPattern | Full phone 430 · LeaveConfirmModal · N/A ERP Modal/Slideout |
| Grid AC / DES-GRID / `LinErpListFilterBar` | **N/A** |
| Report AC | **N/A** |
| List query keys | `sessionId` · `status?` · `route?` · `page?` · `pageSize?` |
| Leave | dirty TK-03 → LeaveConfirmModal (DES-LEAVE) |
| Tabs | `none` |
| Map | none · GPS point TK-03 + TK-05 · Pattern B check **on click** |

## § Delta SA chốt (edit_page)

| Topic | Decision |
|-------|----------|
| Schema / migration | **none** — Schema_PatrolFinding + journal review cols **Live** (prior CRUD PASS) · **cấm** Step 4b |
| FormMode↔API | **KEEP** API-01…05 + peers — **cấm** invent path / body |
| Pattern B FE | CTA `disabled` chỉ `saving`/`hydrating` · `validationAttempted` · banner `string[]` · API toast riêng · GPS deny on submit click |
| Pattern B BE | **không** đổi contract · vẫn 422 thiếu GPS/requireds trên create/recheck · FE không pre-disable |
| capture | `capture="environment"` TK-03/05 · no package fork · UNCLEAR-CAPTURE-PROP → Dev |
| feedback | Pattern B CTA only nếu Live · **cấm** expand CRUD D · UNCLEAR-FEEDBACK-SCOPE soft |
| mfeStd | `/phat-hien` · `http://localhost:9301/phat-hien` — supersede old `/web-rmms-mobile-c` URL |
| BFF users | Mobile.Bff forward `GET …/integration/users?search=` **nếu thiếu** · không invent ERP User API |

## FormMode ↔ API (KEEP Live)

| Screen / FormMode | Method · Path | Purpose · Delta |
|-------------------|---------------|-----------------|
| TK-02 List | `GET …/patrol/findings?sessionId&status&route` | KEEP · no export |
| TK-03 Create | `POST …/patrol/findings` | KEEP body · FE Pattern B validate on click |
| TK-05 Detail | `GET …/patrol/findings/{id}` | KEEP RO |
| TK-05 Recheck | `POST …/patrol/findings/{id}/recheck` | KEEP · GPS on click · CTA not pre-disabled |
| TK-04 Journal list | `GET …/patrol/sessions/{id}/journal-lines` | peer B Live |
| TK-04 Review | `PUT …/patrol/journal-lines/{id}/review` | KEEP · `lech` note on submit click |
| Parent / peer | `GET …/patrol/sessions` · `{id}` | Live |
| Auth / Files | `auth/profile` · `files/*` | Live · capture FE only |
| Integration (peer) | `GET …/integration/road-routes/search` · `…/users?search=` | BFF forward users if missing |
| Feedback (soft Live) | `POST …/feedback` **only if Live** | Pattern B CTA · **cấm** invent |

**Cấm** invent alternate finding paths · **cấm** nested `sessions/{id}/findings` create · **cấm** web-bff từ MFE.

## Persist / entity / migration

| Entity | Table | This wave |
|--------|-------|-----------|
| `PatrolFindingEntity` | `rmms_patrol_findings` | **KEEP Live** · no migration |
| `Schema_PatrolFinding` | schema pack | **KEEP** · no reopen |
| `PatrolJournalLineEntity` | review cols Live | **KEEP** · no migration |
| `PatrolSessionEntity` | parent FK | **none** |

**parent_json:** PASS.  
**HARD GPS BE:** 422 thiếu lat/lng create/recheck — **không** nới BE vì Pattern B.  
**Recheck status:** KEEP `dat`→`xong` · `chua-dat`→`da-giao`.

## ControlHint ↔ write (slim · Delta CTA)

| id | controlHint | GET | write | Delta |
|----|-------------|-----|-------|-------|
| findingList | List cards | `GET findings?…` | — | keep |
| saveFinding | Button | — | `POST findings` | always-on except pending |
| reviewSave | Button | — | `PUT …/review` | note if lech on click |
| confirmDone | Button | — | `POST …/recheck` | GPS on click |
| submitFeedback | Button | — | `POST feedback` if Live | Pattern B only |
| mediaIds | FileMulti | files | guid[] | + capture |
| lat/lng/accuracyM | GPS | device | create + recheck | deny→banner on submit |
| source…thiCongFlags | form fields | — | POST body KEEP | validate on submit |
| review/reviewNote | Radio+Text | — | PUT review | keep rules |
| recheckResult… | Radio+… | — | recheck body KEEP | Pattern B |

**Create / Recheck / Review bodies:** KEEP prior SA — **không** đổi field names.

## API catalog (ids · KEEP)

| id | Method · Path | Migration |
|----|---------------|-----------|
| API-01 | `GET /api/v1/patrol/findings` | none |
| API-02 | `POST /api/v1/patrol/findings` | none |
| API-03 | `GET /api/v1/patrol/findings/{id}` | none |
| API-04 | `POST /api/v1/patrol/findings/{id}/recheck` | none |
| API-05 | `PUT /api/v1/patrol/journal-lines/{id}/review` | none |
| API-06 peer | sessions · journal-lines · auth · files · road-routes · users | BFF users forward if missing |

## BFF vs API

| | |
|--|--|
| Ownership | API Patrol owns findings/recheck/review **Live** · BFF **proxy only** |
| Mobile bind | `mobile-bff/api/v1/patrol/findings` · `…/recheck` · `…/journal-lines/{id}/review` |
| Web BFF | cite only · **cấm** MFE |
| Integration | `mobile-bff/api/v1/integration/users` forward **nếu thiếu** (GAP-DA-MOB-C-BFF-USERS-01) |
| Cấm | MFE → API host trực tiếp · invent users/ERP endpoint |

## Gates

| Gate | Value | Note | Dev |
|------|-------|------|-----|
| TZ | **tz_required** | `dueAt` · `recheckAt` UTC | store UTC |
| XCO | **xco_required** | finding + journal review | X-Company-Id |
| SHARE | **share_none** | wave C | — |
| FILE | **file_guid** | MediaIds CSV · capture FE | guid only |
| GPS | **gps_hard_be** · **gps_soft_cta_fe** | BE 422 · FE check on click | Pattern B |
| ERP | **forbid** | DOMAIN-MAP Patrol | **cấm ERP.*** |
| SCHEMA | **no_migration** | this delta | **cấm** Step 4b |

## Gaps / UNCLEAR

| id | Status | Note |
|----|--------|------|
| GAP-DA-MOB-C-SUBMIT-01 | → Dev | Pattern B CTA/banner |
| GAP-DA-MOB-C-CAPTURE-01 | → Dev | capture=environment |
| GAP-DA-MOB-C-ALERT-01 | → Dev | banner string[] |
| GAP-DA-MOB-C-BFF-USERS-01 | **SA chốt** | Mobile.Bff forward users if missing · no invent |
| GAP-DA-MOB-C-URL-01 | **SA chốt** | mfeStd=`/phat-hien` |
| UNCLEAR-CAPTURE-PROP | soft → Dev | prop vs local input · no fork package |
| UNCLEAR-FEEDBACK-SCOPE | soft → Dev | Pattern B only · no CRUD D |
| Prior schema/code/review/domain | CLOSED KEEP | không reopen |

## DoR SA

| Check | Result |
|-------|--------|
| Design confirmed | PASS |
| FormMode↔API | API-01…05 + peers KEEP · no invent |
| entity / migration | **none** this wave · Live pair |
| BFF vs API | mobile-bff proxy · users forward if missing |
| UNCLEAR | CAPTURE/FEEDBACK soft Dev · BFF-USERS + URL chốt |
| solution_confirm | `approve` (autoApprove) |
| cấm Write MFE / e2e / Step 4b | PASS |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:4a38b53861c732cbbde7208c21d766f1b8b2c8decc007d2dc24ea34a4793339c` · `updatedAt=2026-09-27T08:15:00.000Z` · `taskId=task_8e6ea5bb`
