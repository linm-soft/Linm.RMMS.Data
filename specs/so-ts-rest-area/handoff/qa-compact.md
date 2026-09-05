# handoff-compact — qa → review
schemaVersion: 1
feature: so-ts-rest-area
role: qa
status: confirmed
verdict: PASS
packKind: list
changeScope: new_page
taskId: task_f5bbbd0f
generatedAt: 2026-09-01T04:27:00.000Z
route_confirm: route_a
mfeStdRoute: /so-ts?type=REST_AREA
mfeStdUrl: http://localhost:9301/so-ts?type=REST_AREA
alias: /so-ts-rest-area → /so-ts?type=REST_AREA
API: api/v1/asset/road-assets
domain: Asset
gates: tz_na · xco_get_only · share_tenant
e2eQa: ON · PASS
autoApprove: ON
skillVersion: 2026.08.19.04
workflowVersion: 2026.08.30.01
rulesVersion: 2026.08.31.2

## Artifact
write: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-rest-area/qa/scenarios.md
screens: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-rest-area/qa/screens/
manifest: ok=true · S0/S1/QA-20 PASS
liveAssert: DTM 1280/768/375 · 0 overflowX

## E2E
- docker compose · api:5111 · bff:5201 healthy
- yarn start:std :9301 PASS (port pre-existing)
- yarn e2e-qa Docker gate :5101 vs :5111 → GAP-QA-E2E-DOCKER-01 · channel=chrome contract
- init-data restArea* arrays=0 (empty seed OK P1)
- typecheck + yarn build PASS

## T-QA-*
- T-QA-CRUD-01 PASS · T-QA-FORM-01 PASS · T-QA-FILTER-01/02 PASS
- T-QA-TYP-01 / T-QA-TAB-01 PASS
- kmTo ẩn · name←name_work · LeaveConfirm · 0 native dialog · prefix DN-

## Debt
GAP-RA-FLAT-01 · GAP-RA-LOOKUP-01 · GAP-RA-SPLIT-01 · GAP-QA-E2E-DOCKER-01(info) · GAP-QA-E2E-PW-01(info) · P0 none

## Cấm
ERP.* · invent api/v1/so-ts/* · phase=done · GAP-PKT-ROLE-01

## Next
role: review · /agent-review
write: specs/so-ts-rest-area/review/findings.md
