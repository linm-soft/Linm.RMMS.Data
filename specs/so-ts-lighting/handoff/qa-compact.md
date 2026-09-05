# handoff-compact — qa → review
schemaVersion: 1
feature: so-ts-lighting
role: qa
status: confirmed
verdict: PASS
packKind: list
changeScope: new_page
taskId: task_9519199c
generatedAt: 2026-09-02T08:45:00.000Z
route_confirm: route_a
mfeStdRoute: /so-ts?type=LIGHTING
mfeStdUrl: http://localhost:9301/so-ts?type=LIGHTING
alias: /so-ts-lighting → /so-ts?type=LIGHTING
typeCode: LIGHTING
dump: tbl_street_lighting
prefix: CS-
API: api/v1/asset/road-assets
domain: Asset
gates: tz_na · xco_get_only · share_tenant
e2eQa: ON · PASS
autoApprove: ON
contentHashPrior: sha256:d5601a5c6b83c29e68bbac0fe8ef8a880616a4fc5b053a6480fb82501e90a2aa
skillVersion: 2026.08.19.04
workflowVersion: 2026.09.01.02
rulesVersion: 2026.09.01.1

## Artifact
write: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-lighting/qa/scenarios.md
screens: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-lighting/qa/screens/
manifest: ok=true · S0/S1/QA-20 PASS · sha S0=b48f26bcdfb3d8d4 · S1=b48f26bcdfb3d8d4 · QA-20=166b623f27e0dbcd
liveAssert: DTM 1280/768/375 · 0 overflowX · S-LOC-POINT kmFrom only · S-ATTR lighting · cols ĐV QL/số cột/đèn/MBA/vitri

## E2E
- docker compose up -d · api:5111 · bff:5201 healthy
- init-data lightingManagementUnits/bulbTypes/transformingStationTypes/controlMethods/vitriOptions
- yarn start:std :9301 · no kill worker (GAP-QA-E2E-KILL-01)
- yarn e2e-qa headed hang (:9100) → GAP-QA-E2E-02 · standalone headless capture PASS
- typecheck + yarn build PASS

## T-QA-*
- T-QA-CRUD-01 PASS · T-QA-FORM-01 PASS · T-QA-FILTER-01/02 PASS
- T-QA-TYP-01 / T-QA-TAB-01 PASS
- S-LOC-POINT kmFrom only · S-ATTR editable · LeaveConfirm · 0 native dialog Asset
- Grid: hide type/kmTo/SL/ĐVT · show management/số cột/đèn/MBA/tủ/vitri · alias Navigate
- prefix CS- · name optional · LOOKUP lighting*

## QA fixes (minimal)
- none (dev build PASS · runtime assert PASS)

## Debt
GAP-QA-E2E-02 · GAP-LT-ROUTE-01 alias only · GAP-LT-FLAT-01 flatten DEFER · GAP-AK32-07 solar out · hide-empty runtime DEFER · Auth DEFER · P0 none

## Cấm
ERP.* · invent api/v1/so-ts/* · phase=done · GAP-PKT-ROLE-01 · kill :9301

## Next
role: review · /agent-review
write: specs/so-ts-lighting/review/findings.md
