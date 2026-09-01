# handoff-compact — qa → review
schemaVersion: 1
feature: so-ts-station-house
role: qa
status: confirmed
verdict: PASS
packKind: list
changeScope: new_page
taskId: task_64a740cf
generatedAt: 2026-09-01T01:46:00.000Z
route_confirm: route_a
mfeStdRoute: /so-ts?type=STATION_HOUSE
mfeStdUrl: http://localhost:9301/so-ts?type=STATION_HOUSE
alias: /so-ts-station-house → /so-ts?type=STATION_HOUSE
API: api/v1/asset/road-assets
domain: Asset
gates: tz_na · xco_get_only · share_tenant
e2eQa: ON · PASS
autoApprove: ON
skillVersion: 2026.08.19.04
workflowVersion: 2026.08.30.01
rulesVersion: 2026.08.31.2

## Artifact
write: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-station-house/qa/scenarios.md
screens: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-station-house/qa/screens/
manifest: ok=true · S0/S1/QA-20 PASS
liveAssert: DTM 1280/768/375 · 0 overflowX

## E2E
- docker compose --build · api:5111 · bff:5201 healthy
- yarn start:std :9301 PASS
- yarn e2e-qa hung login → GAP-QA-E2E-PW-01 · channel=chrome contract
- init-data stationWorkTypes=2 · stationBuildLocations=3 · officeBuildingGrades=3 · auxiliaryWorksGrades=3
- typecheck PASS

## T-QA-*
- T-QA-CRUD-01 PASS · T-QA-FORM-01 PASS · T-QA-FILTER-01/02 PASS
- T-QA-TYP-01 / T-QA-TAB-01 PASS
- kmTo ẩn · name←name_building · LeaveConfirm · 0 native dialog · prefix NH-

## Debt
GAP-SH-FLAT-01 · GAP-SH-AUTH-01 · GAP-QA-E2E-PW-01(info) · P0 none

## Cấm
ERP.* · invent api/v1/so-ts/* · phase=done · GAP-PKT-ROLE-01

## Next
role: review · /agent-review
write: specs/so-ts-station-house/review/findings.md
