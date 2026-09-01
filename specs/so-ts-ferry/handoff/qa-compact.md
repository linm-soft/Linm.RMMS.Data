# handoff-compact — qa → review
schemaVersion: 1
feature: so-ts-ferry
role: qa
status: confirmed
verdict: PASS
packKind: list
changeScope: new_page
taskId: task_532d8083
generatedAt: 2026-09-01T00:41:00.000Z
route_confirm: route_a
mfeStdRoute: /so-ts?type=FERRY
mfeStdUrl: http://localhost:9301/so-ts?type=FERRY
alias: /so-ts-ferry → /so-ts?type=FERRY
API: api/v1/asset/road-assets
domain: Asset
gates: tz_na · xco_get_only · share_tenant
e2eQa: ON · PASS
autoApprove: ON
skillVersion: 2026.08.19.04
workflowVersion: 2026.08.30.01
rulesVersion: 2026.08.31.2

## Artifact
write: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-ferry/qa/scenarios.md
screens: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-ferry/qa/screens/
manifest: ok=true · S0/S1/QA-20 PASS
liveAssert: DTM 1280/768/375 · 0 overflowX

## E2E
- docker compose --build · api:5111 · bff:5201 healthy
- yarn start:std :9301 PASS
- yarn e2e-qa hung login → GAP-QA-E2E-PW-01 · channel=chrome contract
- init-data ferryTypes=3 · ferryWorkLevels=5 · riverChannelNames=4
- typecheck + yarn build PASS

## T-QA-*
- T-QA-CRUD-01 PASS · T-QA-FORM-01 PASS · T-QA-FILTER-01/02 PASS
- T-QA-TYP-01 / T-QA-TAB-01 PASS
- kmTo ẩn · name←name_ferry_terminal · LeaveConfirm · 0 native dialog · prefix PH-

## Debt
GAP-FY-FLAT-01 · GAP-FY-AUTH-01 · GAP-QA-E2E-PW-01(info) · P0 none

## Cấm
ERP.* · invent api/v1/so-ts/* · phase=done · GAP-PKT-ROLE-01

## Next
role: review · /agent-review
write: specs/so-ts-ferry/review/findings.md
