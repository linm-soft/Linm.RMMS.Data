# handoff-compact — qa → review
schemaVersion: 1
feature: so-ts-parking
role: qa
status: confirmed
verdict: PASS
packKind: list
changeScope: new_page
taskId: task_b96e05eb
generatedAt: 2026-09-01T05:20:00.000Z
route_confirm: route_a
mfeStdRoute: /so-ts?type=PARKING
mfeStdUrl: http://localhost:9301/so-ts?type=PARKING
alias: /so-ts-parking → /so-ts?type=PARKING
API: api/v1/asset/road-assets
domain: Asset
gates: tz_na · xco_get_only · share_tenant
e2eQa: ON · PASS
autoApprove: ON
skillVersion: 2026.08.19.04
workflowVersion: 2026.08.30.01
rulesVersion: 2026.08.31.2

## Artifact
write: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-parking/qa/scenarios.md
screens: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-parking/qa/screens/
manifest: ok=true · S0/S1/QA-20 PASS
liveAssert: DTM 1280/768/375 · 0 overflowX

## E2E
- docker compose · api:5111 · bff:5201 healthy
- yarn start:std :9301 PASS (port pre-existing)
- yarn e2e-qa Docker gate :5101 vs :5111 → GAP-QA-E2E-DOCKER-01 · channel=chrome contract
- init-data parking* arrays=0 (empty seed OK P1)
- typecheck + yarn build PASS

## T-QA-*
- T-QA-CRUD-01 PASS · T-QA-FORM-01 PASS · T-QA-FILTER-01/02 PASS
- T-QA-TYP-01 / T-QA-TAB-01 PASS
- kmTo ẩn · name←name_work · LeaveConfirm · 0 native dialog · prefix BD-
- grid ON: chiều dài · DT khuôn viên · bãi đỗ · cứu hộ · cấp cứu

## Debt
GAP-PK-FLAT-01 · GAP-PK-LOOKUP-01 · GAP-PK-SPLIT-01 · GAP-QA-E2E-DOCKER-01(info) · GAP-QA-E2E-PW-01(info) · P0 none

## Cấm
ERP.* · invent api/v1/so-ts/* · phase=done · GAP-PKT-ROLE-01

## Next
role: review · /agent-review
write: specs/so-ts-parking/review/findings.md
