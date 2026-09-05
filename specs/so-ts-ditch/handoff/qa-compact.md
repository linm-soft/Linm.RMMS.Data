# handoff-compact — qa → review
schemaVersion: 1
feature: so-ts-ditch
role: qa
status: confirmed
verdict: PASS
packKind: list
changeScope: new_page
taskId: task_10b1c919
generatedAt: 2026-09-01T11:00:00.000Z
route_confirm: route_a
mfeStdRoute: /so-ts?type=DITCH
mfeStdUrl: http://localhost:9301/so-ts?type=DITCH
alias: /so-ts-ditch → /so-ts?type=DITCH
typeCode: DITCH
prefix: CD-
API: api/v1/asset/road-assets
domain: Asset
gates: tz_na · xco_get_only · share_tenant
e2eQa: ON · PASS
autoApprove: ON
contentHashPrior: sha256:8f37e4455aded2ca3a045f47a50916be0563e859af9b18bdcc59000ce4305854
skillVersion: 2026.08.19.04
workflowVersion: 2026.09.01.02
rulesVersion: 2026.09.01.1

## Artifact
write: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-ditch/qa/scenarios.md
screens: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-ditch/qa/screens/
manifest: ok=true · S0/S1/QA-20 PASS
liveAssert: DTM 1280/768/375 · 0 overflowX

## E2E
- docker compose up -d --build · api:5111 · bff:5201 healthy
- yarn start:std :9301 already up · no kill worker
- yarn e2e-qa headed hang → GAP-QA-E2E-PW-01 · channel=chrome contract
- init-data ditchTypes=4 · culvertShapes=4 · ditchStructuralTypes=4 · ditchWorkTypes=4 · ditchMaterialsWork=5 · ditchLocations=3
- typecheck + yarn build PASS

## T-QA-*
- T-QA-CRUD-01 PASS · T-QA-FORM-01 PASS · T-QA-FILTER-01/02 PASS
- T-QA-TYP-01 / T-QA-TAB-01 PASS
- kmTo ON (RANGE) · Loại rãnh* · LeaveConfirm · 0 native dialog · CD-

## Debt
GAP-QA-E2E-PW-01 · GAP-QA-E2E-DOCKER-01 · GAP-DITCH-FLAT-01 · P0 none

## Cấm
ERP.* · invent api/v1/so-ts/* · phase=done · GAP-PKT-ROLE-01 · kill :9301

## Next
role: review · /agent-review
write: specs/so-ts-ditch/review/findings.md
