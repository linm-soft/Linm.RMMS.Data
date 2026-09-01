# handoff-compact — review
schemaVersion: 1
feature: so-ts-station-house
role: review
status: confirmed
verdict: PASS
review_confirm: done
packKind: list
changeScope: new_page
taskId: task_45093d3f
generatedAt: 2026-09-01T02:00:00.000Z
typeCode: STATION_HOUSE
dump: tbl_road_admin_office
prefix: NH-
clusterUi: station · t22
mfeStdRoute: /so-ts?type=STATION_HOUSE
mfeStdUrl: http://localhost:9301/so-ts?type=STATION_HOUSE
alias: /so-ts-station-house → redirect
API: api/v1/asset/road-assets
domain: Asset
gates: tz_na · xco_get_only · share_tenant
migration: none
route_confirm: route_a
contentHash: sha256:3d78ed6a2ee20b192926ba4ab625d1af20e67dcb78d7035e543c976b364e7a45
hashSkip: true
autoApprove: ON
e2eQa: PASS (prior QA)
yarnBuild: PASS
dotnetBuild: PASS
skillVersion: 2026.08.19.04
workflowVersion: 2026.08.30.01
rulesVersion: 2026.08.31.2

## Artifact
write: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-station-house/review/findings.md
reviewUrl: file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-station-house/ui/prototype/so-ts-station-house-list-prototype.html

## Gates
- QUERY: PASS · path giữ · cấm ERP.* · cấm invent so-ts API · LOOKUP delta OK
- SEC: PASS · tz_na · xco_get_only · share_tenant · Auth DEFER P2
- UI-FN: PASS · Kind B profile · S-ATTR dump §4 · kmTo ẩn · name←name_building · LeaveConfirm · alias Navigate · S0/S1/QA-20
- BE-FN: PASS · STATION_HOUSE validate · NH- · init-data ×4 · no flatten P1

## P0
none

## Debt
GAP-SH-FLAT-01 P2 · GAP-SH-AUTH-01 P2 · GAP-QA-E2E-PW-01 info

## Cấm
ERP.* · invent api/v1/so-ts/* · implement tại Review · e2e/start:std · GAP-PKT-ROLE-01

## Next
pipeline role review **done** · no further role in this task
