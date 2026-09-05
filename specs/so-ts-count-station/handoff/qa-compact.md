# handoff-compact — qa → review
schemaVersion: 1
feature: so-ts-count-station
role: qa
status: confirmed
verdict: PASS
packKind: list
changeScope: new_page
taskId: task_c492a4b1
generatedAt: 2026-09-01T07:25:00.000Z
route_confirm: route_a
mfeStdRoute: /so-ts?type=COUNT_STATION
mfeStdUrl: http://localhost:9301/so-ts?type=COUNT_STATION
alias: /so-ts-count-station → /so-ts?type=COUNT_STATION
API: api/v1/asset/road-assets
domain: Asset
typeCode: COUNT_STATION
dump: mst_counting_station
prefix: THC- (live TX- debt)
gates: tz_na · xco_get_only · share_tenant
e2eQa: ON · PASS
autoApprove: ON
skillVersion: 2026.08.19.04
workflowVersion: 2026.09.01.02
rulesVersion: 2026.09.01.1

## Artifact
write: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-count-station/qa/scenarios.md
screens: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-count-station/qa/screens/
manifest: ok=true · S0/S1/QA-20 PASS
liveAssert: DTM 1280/768/375 · 0 overflowX

## E2E
- docker compose · api:5111 · bff:5201 healthy
- yarn start:std :9301 PASS (port pre-existing · no kill)
- yarn e2e-qa hung login → GAP-QA-E2E-PW-01 · channel=chrome contract
- deep-link HTTP 404 → GAP-QA-E2E-HAF-01 · index.html+popstate
- yarn e2e-qa Docker gate :5101 vs :5111 → GAP-QA-E2E-DOCKER-01
- init-data countAgencies=0 (empty seed OK P1)

## T-QA-*
- T-QA-CRUD-01 PASS · T-QA-FORM-01 PASS · T-QA-FILTER-01/02 PASS
- T-QA-TYP-01 / T-QA-TAB-01 PASS
- kmTo ẩn · name←name_vi «Tên (VI)» · LeaveConfirm · 0 native dialog · prefix THC-
- grid ON: ĐVQL · Tên (EN) · Số làn · Tốc độ

## Debt
GAP-COUNT-FLAT-01 · GAP-COUNT-LOOKUP-01 · GAP-COUNT-TX-PREFIX · GAP-QA-E2E-HAF-01(info) · GAP-QA-E2E-DOCKER-01(info) · GAP-QA-E2E-PW-01(info) · P0 none

## Cấm
ERP.* · invent api/v1/so-ts/* · phase=done · GAP-PKT-ROLE-01

## Next
role: review · /agent-review
write: specs/so-ts-count-station/review/findings.md
