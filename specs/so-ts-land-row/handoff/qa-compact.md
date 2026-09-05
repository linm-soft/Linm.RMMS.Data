# handoff-compact — qa → review
schemaVersion: 1
feature: so-ts-land-row
role: qa
status: confirmed
verdict: PASS
packKind: list
changeScope: new_page
taskId: task_0d749c2e
generatedAt: 2026-09-01T09:00:00.000Z
route_confirm: route_a
mfeStdRoute: /so-ts?type=LAND_ROW
mfeStdUrl: http://localhost:9301/so-ts?type=LAND_ROW
alias: /so-ts-land-row → /so-ts?type=LAND_ROW
API: api/v1/asset/road-assets
domain: Asset
typeCode: LAND_ROW
dump: tbl_land_btra
prefix: DT- (GIS HT giữ)
gates: tz_na · xco_get_only · share_tenant
e2eQa: ON · PASS
autoApprove: ON
skillVersion: 2026.08.19.04
workflowVersion: 2026.09.01.02
rulesVersion: 2026.09.01.1
contentHashPrior: sha256:bc698a4aaec65f07d252d2ba4a3997574faa3c51c53e84e26990734b423a7849

## Artifact
write: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-land-row/qa/scenarios.md
screens: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-land-row/qa/screens/
manifest: ok=true · S0/S1/QA-20 PASS
liveAssert: DTM 1280/768/375 · 0 overflowX

## E2E
- docker compose · api:5111 · bff:5201 healthy
- yarn start:std :9301 PASS (port pre-existing · no kill)
- yarn e2e-qa hung login → GAP-QA-E2E-PW-01 · channel=chrome contract
- deep-link HTTP 404 → GAP-QA-E2E-HAF-01 · index.html+popstate
- yarn e2e-qa Docker gate :5101 vs :5111 → GAP-QA-E2E-DOCKER-01
- live rows DT-land_btra_* · ENSURE TT thửa/CQ/L/W/DT/tỉnh/xã ON

## T-QA-*
- T-QA-CRUD-01 PASS · T-QA-FORM-01 PASS · T-QA-FILTER-01/02 PASS
- T-QA-TYP-01 / T-QA-TAB-01 PASS
- kmTo ẩn · name←construction «Công trình trên đất» · LeaveConfirm · 0 native dialog · prefix DT-
- grid ON: TT thửa · CQ chủ quản · CQ KT · L · W · Tổng DT · tỉnh · xã

## Debt
GAP-QA-E2E-HAF-01(info) · GAP-QA-E2E-DOCKER-01(info) · GAP-QA-E2E-PW-01(info) · Auth DEFER · P0 none

## Cấm
ERP.* · invent api/v1/so-ts/* · phase=done · GAP-PKT-ROLE-01

## Next
role: review · /agent-review
write: specs/so-ts-land-row/review/findings.md
