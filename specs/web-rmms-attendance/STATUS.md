# STATUS — web-rmms-attendance

| Field | Value |
|-------|-------|
| feature | `web-rmms-attendance` |
| phase | `done` |
| status | `done` |
| packKind | `list` |
| changeScope | `edit_page` |
| demo | **N/A** |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-attendance.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/cham-cong` |
| mfeStdUrl | `http://localhost:9301/cham-cong` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP — **cấm ERP.*** |
| updatedAt | `2026-09-27T17:08:51.865Z` |
| contentHash | `sha256:0275fe24159e04a2d1a70682880e26b3456de61e7cf74b9c3d9ac707cae30d7a` |
| contentHashPrev | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| handoffCompact | `specs/web-rmms-attendance/handoff/review-compact.md` |
| taskId | `task_5255729d` |
| deltaCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` |

## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | — |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/features/web-rmms-attendance-control-hint.md · web-rmms-attendance-real-data.md | **confirmed** |
| 1 | po | po/requirement.md | **confirmed** |
| 2.1 | design | ui/design.md + prototype + reviewUrl | **confirmed** |
| 2.2 | sa | be/solution-discovery.md | **confirmed** |
| 3 | team-lead | task/web-rmms-attendance.md | **confirmed** |
| 4 | dev | implement/web-rmms-attendance.md | **confirmed** |
| 5 | qa | qa/scenarios.md · handoff/qa-compact.md | **confirmed** |
| 6 | review | review/findings.md · handoff/review-compact.md | **done** |
## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| T-BE-CRUD-01 | Live attendance-logs + profile | Dev | — | **done** | Mobile.Bff · prior |
| T-BE-INIT-01 | LOOKUP_STATIC attendance.* | Dev | — | **done** | useFormOptions · prior |
| T-PERM-01 | Auth gate | Dev | T-BE-CRUD-01 | **done** | prior · Pattern B guest login CTA |
| T-UI-ATT-01 | Hub ATT-00…05 · empty | Dev | T-BE-* | **done** | phone 430 · `/cham-cong` |
| T-UI-ATT-02 | GPS + Chấm vào | Dev | T-UI-ATT-01 · T-PERM-01 | **done** | prior · Pattern B on-submit |
| T-UI-ATT-03 | report/day/log RO | Dev | T-UI-ATT-01 | **done** | client aggregate · prior |
| T-DELTA-PB-01 | Pattern B CTA | Dev | T-UI-ATT-02 | **done** | `disabled={saving}` · banner client · GPS on-submit |
| T-BE | API Mới / migration | — | — | **N/A** | SA none · Live reuse |
| T-QA-CRUD-01 | Live API scenarios | QA | T-DELTA-PB-01 | **done** | S1 live history · Pattern B |
| T-QA-ATT-01 | Hub+chain e2e | QA | T-QA-CRUD-01 | **done** | S0→QA-20→S1 · `/cham-cong` |
| T-QA-DELTA-PB-01 | Pattern B CTA | QA | T-DELTA-PB-01 | **done** | btn disabled=false · capture |
| T-REV-01 | QUERY/SEC/UI-FN/BE-FN | Review | T-QA-* | **done** | edit_page Pattern B · Must 0 |

## Blockers / open questions

- UNCLEAR-GUEST-SURFACE **CLOSED** (PO · Pattern B CTA/login)
- UNCLEAR-BANNER-VS-TOAST **CLOSED** (Dev · client banner · API toast · GPS modal)
- UNCLEAR-STD-ROUTE **CLOSED** `/cham-cong`
- none P0

## Links

- data-analy → po → ui → be → task → implement → qa → review
- mfeStdUrl: `http://localhost:9301/cham-cong`
- mfeStdRoute: `/cham-cong`
- control-hint: `specs/_data-analy/features/web-rmms-attendance-control-hint.md`
- real-data: `specs/_data-analy/features/web-rmms-attendance-real-data.md`
- compact: `specs/web-rmms-attendance/handoff/review-compact.md`
- deltaCite: `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md`
- findings: `specs/web-rmms-attendance/review/findings.md`
- qa: `specs/web-rmms-attendance/qa/scenarios.md`
- implement: `specs/web-rmms-attendance/implement/web-rmms-attendance.md`
- task: `specs/web-rmms-attendance/task/web-rmms-attendance.md`
- design: `specs/web-rmms-attendance/ui/design.md`
- reviewUrl: `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-attendance/ui/prototype/index.html`
- requirement: `specs/web-rmms-attendance/po/requirement.md`
- solution: `specs/web-rmms-attendance/be/solution-discovery.md`
- DOMAIN-MAP: `D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md`
- next: **done** · review_confirm=approve · phase=done · no next role

## Retry

- from: `data_analy` · at: `2026-09-25T17:54:50.719Z` · board user Retry step
- data_analy DoR PASS · at: `2026-09-26T01:30:00.000Z` · task `task_1b2783bf` · changeScope=new_page
- po DoR PASS · at: `2026-09-26T01:33:29.847Z` · task `task_3a1749b8`
- design DoR PASS · at: `2026-09-26T01:36:00.000Z` · task `task_4768c43c`
- sa DoR PASS · at: `2026-09-26T01:40:00.000Z` · task `task_5dd47158`
- team_lead DoR PASS · at: `2026-09-26T01:42:00.000Z` · task `task_ac1434fc`
- dev DoR PASS · at: `2026-09-26T02:00:00.000Z` · task `task_8abebdd3`
- qa DoR PASS · at: `2026-09-26T02:00:00.000Z` · task `task_5eed79c4`
- review DoR PASS · at: `2026-09-26T02:10:00.000Z` · task `task_12c30c40` · phase=done
- data_analy DoR PASS · at: `2026-09-27T16:35:00.000Z` · task `task_0da20514` · changeScope=edit_page · Pattern B delta · → po
- po DoR PASS · at: `2026-09-27T16:40:00.000Z` · task `task_37d1cb94` · changeScope=edit_page · Pattern B · → design
- design DoR PASS · at: `2026-09-27T17:05:00.000Z` · task `task_61e25304` · changeScope=edit_page · Pattern B · design_confirm=approve · → sa
- sa DoR PASS · at: `2026-09-27T17:15:00.000Z` · task `task_8c3ee347` · changeScope=edit_page · Pattern B · solution_confirm=approve · → team_lead
- team_lead DoR PASS · at: `2026-09-27T17:20:00.000Z` · task `task_e63e7622` · changeScope=edit_page · Pattern B · team_lead_confirm=approve · → dev
- dev DoR PASS · at: `2026-09-27T16:50:00.000Z` · task `task_714f7885` · changeScope=edit_page · Pattern B · T-DELTA-PB-01 · → qa
- qa DoR PASS · at: `2026-09-27T17:05:00.000Z` · task `task_230b5f05` · changeScope=edit_page · Pattern B · e2e S0/S1/QA-20 · → review
- review DoR PASS · at: `2026-09-27T17:10:00.000Z` · task `task_5255729d` · changeScope=edit_page · Pattern B · review_confirm=approve · phase=done
