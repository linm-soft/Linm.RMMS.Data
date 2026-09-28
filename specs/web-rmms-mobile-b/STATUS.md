# STATUS — web-rmms-mobile-b

| Field | Value |
|-------|-------|
| feature | `web-rmms-mobile-b` |
| phase | `done` |
| status | `done` |
| packKind | `list` |
| changeScope | `edit_page` |
| editTask | `1` |
| demo | **N/A** |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-mobile-b.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-mobile-b` · **live code `/nhat-ky`** · STATUS URL **404** |
| mfeStdUrl | `http://localhost:9301/web-rmms-mobile-b` · **FAIL** · live `http://localhost:9301/nhat-ky` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP — **cấm ERP.*** |
| contentHash | `sha256:fe3ccad04e66ee08b65a65aead0fbef9f46328e5c2a3b828b3bee12969bbf72e` |
| updatedAt | `2026-09-27T07:56:13.551Z` |
| taskId | `task_9e45e6fd` |
| deltaCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-b/ui/prototype/index.html` |
| autoApprove | ON |
| e2eQa | ON · **FAIL** · review `fix_gaps` |
| review_confirm | `fix_gaps` · Must **2** · **cấm** phase=done |

## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | unlocked (review fix_gaps) |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/features/web-rmms-mobile-b-control-hint.md · web-rmms-mobile-b-real-data.md · handoff/data_analy-compact.md | **confirmed** |
| 1 | po | po/requirement.md · handoff/po-compact.md | **confirmed** |
| 2.1 | design | ui/design.md + prototype + reviewUrl · handoff/design-compact.md | **confirmed** |
| 2.2 | sa | be/solution-discovery.md · handoff/sa-compact.md | **confirmed** |
| 3 | team-lead | task/web-rmms-mobile-b.md · handoff/team_lead-compact.md | **confirmed** |
| 4 | dev | implement/web-rmms-mobile-b.md · handoff/dev-compact.md | **confirmed** |
| 5 | qa | qa/scenarios.md · handoff/qa-compact.md | **done** |
| 6 | review | review/findings.md · handoff/review-compact.md | **done** |
## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| T-BE-SCHEMA-01 | — | Dev | — | **done** | Schema_PatrolJournalLine + entity + migration · prior |
| T-BE-CRUD-01 | — | Dev | T-BE-SCHEMA-01 | **done** | journal-lines API · prior |
| T-BE-INIT-01 | — | Dev | — | **done** | LOOKUP_STATIC useFormOptions · prior |
| T-PERM-01 | — | Dev | T-BE-CRUD-01 | **done** | permission codes · prior |
| T-UI-LIST-01 | TD-04 | Dev | T-BE-CRUD-01 | **done** | phone list cards · prior |
| T-UI-FORM-01 | TD-05 | Dev | T-BE-SCHEMA·CRUD·INIT | **done** | create/edit · prior |
| T-UI-ACT-01 | TD-04/05 | Dev | LIST·FORM | **done** | action inventory · prior |
| T-UI-LEAVE-01 | TD-05 | Dev | FORM | **done** | LeaveConfirmModal · prior |
| T-UI-FIELD-01 | TD-05 | Dev | FORM | **done** | field↔DTO · prior |
| T-UI-PROD-01 | TD-04/05 | Dev | LIST·FORM | **done** | end-user chrome · prior |
| T-UI-UX-01 | TD-04/05 | Dev | LIST·FORM | **done** | ui-ux constitution · prior |
| T-UI-RESP-01 | TD-04/05 | Dev | UX | **done** | phone shell · prior |
| T-DELTA-PATTERN-B-01 | TD-05 | Dev | FORM | **done** | banner+inline · disable only saving |
| T-DELTA-CAPTURE-01 | TD-05 | Dev | FORM | **done** | capture=environment local input |
| T-DELTA-BFF-01 | — | Dev | — | **done** | mobileApiBase + UsersMobileController |
| T-DELTA-ALIGN-01 | TD-04/05 | Dev | PATTERN-B·CAPTURE | **done** | phone 430 · route→`/nhat-ky` (STATUS slug stale) |
| T-QA-CRUD-01 | TD-04/05 | QA | T-DELTA-* | **failed** | GAP-QA-STD-01 · GAP-QA-FEAT-01 |
| T-QA-FORM-01 | TD-05 | QA | T-QA-CRUD-01 | **pass** | live `/nhat-ky/.../moi` Pattern B UI |
| T-REV-STD-01 | — | Dev | review | **pending** | alias `/web-rmms-mobile-b`→`/nhat-ky` OR STATUS mfeStdRoute=`/nhat-ky` |
| T-REV-HUB-01 | TD-01 | Dev | review | **pending** | hub CTA «Ghi nhật ký» / «Sổ trong ca» |

## Blockers / open questions

- **GAP-QA-STD-01 / REV-UI-STD-01** Must: STATUS `mfeStdUrl=/web-rmms-mobile-b` → 404 · live `/nhat-ky`
- **GAP-QA-FEAT-01 / REV-UI-HUB-01** Must: hub peer A thiếu CTA «Ghi nhật ký» / «Sổ trong ca»
- review_confirm: **fix_gaps** (autoApprove) · **cấm** phase=done
- Soft: RequirePermission TODO · e2e DUP · datetime locale · Người ghi —
- UNCLEAR-CAPTURE-PROP → **resolved** · UNCLEAR-BANNER-KEYS → JOURNAL_LOOKUP_STATIC · UNCLEAR-LRS KEEP
- Closed: UNCLEAR-JL-PATH · UNCLEAR-JL-SCHEMA · UNCLEAR-WEATHER
- next: board **`qa_fail_rollback`** / Dev fix Must → re-QA · GAP-PKT-ROLE-01 stop

## Links

- data-analy **PASS** → … → **dev confirmed** → **qa FAILED** → **review fix_gaps**
- review: `specs/web-rmms-mobile-b/review/findings.md`
- compact: `specs/web-rmms-mobile-b/handoff/review-compact.md`
- mfeStdUrl: `http://localhost:9301/web-rmms-mobile-b` (**404**) · live: `http://localhost:9301/nhat-ky`
- next: Dev `fix_gaps` · then `/agent-qa*`
