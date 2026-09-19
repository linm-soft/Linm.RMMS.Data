# handoff-compact — review · dashboard

| Field | Value |
|-------|-------|
| schemaVersion | `1` |
| role | `review` |
| feature | `dashboard` |
| title | Dashboard điều hành — KPI BDTX |
| packKind | `dashboard` |
| changeScope | `new_page` |
| status | `done` |
| verdict | **PASS** |
| review_confirm | **done** |
| findingsCount | P0=`0` · P1=`0` · P2=`1` (Auth stub) · info=`2` |
| taskId | `task_78482116` |
| contentHash | `sha256:0c1488357ccf88e8934c3fcb9a7925cc21aa9ae46624263ad2355a7597468b7f` |
| reviewHash | `sha256:3a6dd1662d815a8cfc317e25046519267134909041b3668adc5d766aa8f4220f` |
| hashSkip | **no** (prior META draft) |
| skillVersion | `2026.09.05.03` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.17.3` |
| autoApprove | `ON` |
| e2eQa | prior QA **PASS** · S0/S1/QA-20 |
| design_confirm | `approve` |
| solution_confirm | `approve` |
| route_confirm | `route_a` `/bao-cao/dashboard` |
| mfeStdUrl | `http://localhost:9311/bao-cao/dashboard` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` |
| domain | **Report** + Incident read · **cấm** `api/v1/dashboard/*` |
| formPattern | Full Kind E · LeaveConfirmModal · chart_none |
| writtenAt | `2026-09-17T17:34:20.000Z` |

## Decisions

- review_confirm **done** (autoApprove) · QUERY/SEC/UI-FN/BE-FN **PASS**
- COUNT live totalCount · GAP COV/ROADLEN lock 0 · countOrToast no silent 5xx
- DES-RPT-A/C/F + toolbar export/config · filter LinErpListFilterBar
- Live start:std **skipped** (roleOnly=review) · QA manifest + code spot-check
- open Q: **none** P0/P1 · fix_gaps **none**

## Gates

| Gate | Result |
|------|--------|
| QUERY | PASS |
| SEC | PASS · Auth stub P2 debt |
| UI-FN | PASS · Kind E + RPT + Leave · QA PNG |
| BE-FN | PASS · cite only · 0 dashboard API |
| Hash | rescan → written |

## Artifacts

| Kind | Path |
|------|------|
| findings | `specs/dashboard/review/findings.md` |
| REVIEW-META | `specs/dashboard/review/REVIEW-META.json` |
| prior qa | `handoff/qa-compact.md` |
| STATUS | `specs/dashboard/STATUS.md` |

## Debt (carry)

- REV-S-01 Auth DEFER P2 · GAP-DASH-COV/ROADLEN · patrol soft-degrade · chart_none P1

## Next

| Role | Need |
|------|------|
| pilot/docs | optional · queue review **completed** |
| — | **cấm** e2e/start:std ở review |

## UNCLEAR

- none

## Cấm (compact)

- ERP.* · api/v1/dashboard/* · invent count mock · fix_gaps không P0 · e2e ở review

<!-- compact schemaVersion=1 role=review feature=dashboard taskId=task_78482116 verdict=PASS review_confirm=done -->
