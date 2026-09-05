# handoff-compact — qa → review
schemaVersion: 1
feature: so-ts-median
role: qa
status: confirmed
verdict: PASS
packKind: list
changeScope: new_page
taskId: task_3a7a52b1
generatedAt: 2026-09-02T00:40:00.000Z
route_confirm: route_a
mfeStdRoute: /so-ts?type=MEDIAN
mfeStdUrl: http://localhost:9301/so-ts?type=MEDIAN
alias: /so-ts-median → /so-ts?type=MEDIAN
typeCode: MEDIAN
dump: tbl_median_strip
prefix: PC-
API: api/v1/asset/road-assets
domain: Asset
gates: tz_na · xco_get_only · share_tenant
e2eQa: ON · PASS
autoApprove: ON
contentHashPrior: sha256:19145538a01ec132f8d5ebead0c9111d621746cb789c26bf1f6819c5c932c5e5
skillVersion: 2026.08.19.04
workflowVersion: 2026.09.01.02
rulesVersion: 2026.09.01.1

## Artifact
write: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-median/qa/scenarios.md
screens: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-median/qa/screens/
manifest: ok=true · S0/S1/QA-20 PASS · sha S0=9ed73220e2e6bbf1 · S1=9ed73220e2e6bbf1 · QA-20=d63c9ff608376dbc
liveAssert: DTM 1280/768/375 · 0 overflowX · kmTo form hiện · S-ATTR median · Select bool cỏ/cây

## E2E
- docker compose up -d · api:5111 · bff:5201 healthy
- init-data medianStripTypes/fenceMaterials/medianLocations
- yarn start:std :9301 · no kill worker (GAP-QA-E2E-KILL-01)
- yarn e2e-qa hang (:9100) → GAP-QA-E2E-PW-01 · channel=chrome contract fallback
- typecheck + yarn build PASS

## T-QA-*
- T-QA-CRUD-01 PASS · T-QA-FORM-01 PASS · T-QA-FILTER-01/02 PASS
- T-QA-TYP-01 / T-QA-TAB-01 PASS
- S-LOC-RANGE kmTo hiện · S-ATTR editable · LeaveConfirm · 0 native dialog Asset
- Grid: hide type/ảnh · show loại dải/dài/rộng/cỏ/cây/cao hàng rào/VL · hide-empty vị trí/địa danh
- prefix PC- · name optional · alias Navigate · planting Select bool

## Debt
GAP-QA-E2E-PW-01 · flatten DEFER · Auth DEFER · P0 none

## Cấm
ERP.* · invent api/v1/so-ts/* · phase=done · GAP-PKT-ROLE-01 · kill :9301

## Next
role: review · /agent-review
write: specs/so-ts-median/review/findings.md
