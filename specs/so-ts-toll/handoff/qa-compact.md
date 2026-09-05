# handoff-compact — qa → review
schemaVersion: 1
feature: so-ts-toll
role: qa
status: confirmed
verdict: PASS
packKind: list
changeScope: new_page
taskId: task_4803c95a
generatedAt: 2026-09-01T05:16:00.000Z
route_confirm: route_a
mfeStdRoute: /so-ts?type=TOLL
mfeStdUrl: http://localhost:9301/so-ts?type=TOLL
alias: /so-ts-toll → /so-ts?type=TOLL
API: api/v1/asset/road-assets
domain: Asset
gates: tz_na · xco_get_only · share_tenant
e2eQa: ON · PASS
autoApprove: ON
skillVersion: 2026.08.19.04
workflowVersion: 2026.08.30.01
rulesVersion: 2026.08.31.2

## Artifact
write: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-toll/qa/scenarios.md
screens: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-toll/qa/screens/
manifest: ok=true · S0/S1/QA-20 PASS
liveAssert: DTM 1280/768/375 · 0 overflowX

## E2E
- docker compose · api:5111 · bff:5201 healthy
- yarn start:std :9301 PASS (port pre-existing)
- yarn e2e-qa hung login → GAP-QA-E2E-PW-01 · channel=chrome contract
- yarn e2e-qa Docker gate :5101 vs :5111 → GAP-QA-E2E-DOCKER-01
- init-data toll* arrays=0 (empty seed OK P1)
- typecheck + yarn build PASS

## T-QA-*
- T-QA-CRUD-01 PASS · T-QA-FORM-01 PASS · T-QA-FILTER-01/02 PASS
- T-QA-TYP-01 / T-QA-TAB-01 PASS
- kmTo ẩn · name←station_name · LeaveConfirm · 0 native dialog · prefix TFP-
- grid ON: phương pháp cân · làn cân/ETC/thủ công · cấp nhà · DT cổng

## Debt
GAP-TOLL-FLAT-01 · GAP-TOLL-LOOKUP-01 · GAP-QA-E2E-DOCKER-01(info) · GAP-QA-E2E-PW-01(info) · P0 none

## Cấm
ERP.* · invent api/v1/so-ts/* · phase=done · GAP-PKT-ROLE-01

## Next
role: review · /agent-review
write: specs/so-ts-toll/review/findings.md
