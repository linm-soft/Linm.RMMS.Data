# handoff-compact — review
schemaVersion: 1
feature: so-ts-weigh-station
role: review
status: confirmed
review_confirm: done
verdict: PASS
packKind: list
changeScope: new_page
taskId: task_96836e39
typeCode: WEIGH_STATION
dump: weight_station
prefix: TFP-
formPattern: Full page · CatalogFormShell 5 cols
mfeStdRoute: /so-ts?type=WEIGH_STATION
mfeStdUrl: http://localhost:9301/so-ts?type=WEIGH_STATION
alias: /so-ts-weigh-station → /so-ts?type=WEIGH_STATION
API: api/v1/asset/road-assets
domain: Asset
gates: tz_na · xco_get_only · share_tenant
autoApprove: ON
e2eQa: ON (QA confirmed · not re-run)
skillVersion: 2026.08.19.04
workflowVersion: 2026.08.30.01
rulesVersion: 2026.08.31.2
contentHashPrior: sha256:ce3b6142d8e9debae05124121bcf3856a8c4a06d186a2728a6d59eb55d58233a
writtenAt: 2026-09-01T13:36:12.000Z

## Gates
| Gate | Result |
|------|--------|
| QUERY | PASS |
| SEC | PASS |
| UI-FN | PASS |
| BE-FN | PASS |
| review_confirm | done |

## Decisions
- keep road-assets · cấm ERP.* · cấm invent so-ts API
- WEIGH profile OK · dumpSpecs P1 · flatten P2
- name←station_name · kmTo ẩn · kmFrom optional · TFP-
- LOOKUP_STATIC weigh* · LeaveConfirmModal reuse
- P0 none · fix_gaps=no · hash skip (unchanged)

## Debt
GAP-WEIGH-FLAT-01 P2 · Auth DEFER · GAP-QA-E2E-* info · LOOKUP seed empty OK P1

## Full paths
- findings: specs/so-ts-weigh-station/review/findings.md
- prior qa: specs/so-ts-weigh-station/handoff/qa-compact.md

## Next
pipeline role review PASS · no further role in this task
cấm: ERP.* · invent api/v1/so-ts/* · phase=done board · GAP-PKT-ROLE-01
