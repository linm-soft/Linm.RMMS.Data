# handoff-compact — review
schemaVersion: 1
feature: so-ts-count-station
role: review
status: confirmed
verdict: PASS
review_confirm: approve
packKind: list
changeScope: new_page
taskId: task_e7ecd4d6
generatedAt: 2026-09-01T07:28:00.000Z
typeCode: COUNT_STATION
dump: mst_counting_station
prefix: THC-
formPattern: Full page · CatalogFormShell 5 cols
mfeStdRoute: /so-ts?type=COUNT_STATION
mfeStdUrl: http://localhost:9301/so-ts?type=COUNT_STATION
alias: /so-ts-count-station → /so-ts?type=COUNT_STATION
API: api/v1/asset/road-assets
domain: Asset
gates: tz_na · xco_get_only · share_tenant
contentHash: sha256:dbbe8d52c360d78919c4a7bb313973ee20cd193b6b5c1cee4a0da0e7559be87a
hashSkip: true
P0: none
autoApprove: ON
skillVersion: 2026.08.19.04
workflowVersion: 2026.09.01.02
rulesVersion: 2026.09.01.1

## Checks
- QUERY: road-assets · countAgencies · no ERP.*/so-ts invent · PASS
- SEC: Asset domain · LeaveConfirmModal · share_tenant · PASS
- UI-FN: COUNT profile · S-ATTR · name←name_vi · kmTo hide · alias · THC- · PASS
- BE-FN: ValidateRequired optional name/kmFrom · DefaultCodePrefix THC- · CountAgencies · PASS
- QA prior: e2e S0/S1/QA-20 PASS · DTM 0 overflow

## Debt (accepted)
GAP-COUNT-FLAT-01 · GAP-COUNT-LOOKUP-01 · GAP-COUNT-TX-PREFIX · GAP-COUNT-GIS-01 · GAP-QA-E2E-* (info)

## Artifact
write: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-count-station/review/findings.md

## Cấm
ERP.* · invent api/v1/so-ts/* · implement · e2e/build/start:std · Step4b · GAP-PKT-ROLE-01

## Next
pipeline: complete · no fix_gaps
