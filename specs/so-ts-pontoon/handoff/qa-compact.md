# handoff-compact — qa → review
schemaVersion: 1
feature: so-ts-pontoon
role: qa
status: confirmed
verdict: PASS
packKind: list
changeScope: new_page
taskId: task_cd283331
generatedAt: 2026-09-02T07:23:00.000Z
route_confirm: route_a
mfeStdRoute: /so-ts?type=PONTOON
mfeStdUrl: http://localhost:9301/so-ts?type=PONTOON
alias: /so-ts-pontoon → /so-ts?type=PONTOON
typeCode: PONTOON
dump: tbl_pontoon_bridge
prefix: CP-
API: api/v1/asset/road-assets
domain: Asset
gates: tz_na · xco_get_only · share_tenant
e2eQa: ON · PASS
autoApprove: ON
contentHashPrior: sha256:67f93e158eebae7ad4d0dd4818a73f93761b88c8bbbf339d6f1dc95c469e31c30
skillVersion: 2026.08.19.04
workflowVersion: 2026.08.30.01
rulesVersion: 2026.08.31.2

## Artifact
write: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-pontoon/qa/scenarios.md
screens: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-pontoon/qa/screens/
manifest: ok=true · S0/S1/QA-20 PASS · sha S0=849a00aee378349f · S1=849a00aee378349f · QA-20=70c3ece270994b0b
liveAssert: DTM 1280/768/375 · 0 overflowX · kmTo form ẩn · S-ATTR pontoon 7 keys

## E2E
- docker compose up -d · api:5111 · bff:5201 healthy
- init-data pontoonWorkLevels/pontoonBridgeTypes
- yarn start:std :9301 · no kill worker (GAP-QA-E2E-KILL-01)
- yarn e2e-qa headed hang → GAP-QA-E2E-PW-01 · channel=chrome contract fallback
- typecheck + yarn build PASS

## T-QA-*
- T-QA-CRUD-01 PASS · T-QA-FORM-01 PASS · T-QA-FILTER-01/02 PASS
- T-QA-TYP-01 / T-QA-TAB-01 PASS
- S-LOC-POINT kmTo ẩn · S-ATTR editable · LeaveConfirm · 0 native dialog Asset
- Grid: hide type/ảnh · show tên sông/cấp/rộng/dài/loại/tải trọng
- prefix CP- · name ← name_pontoon_bridge · alias Navigate

## Debt
GAP-QA-E2E-PW-01 · flatten DEFER · Auth DEFER · P0 none

## Cấm
ERP.* · invent api/v1/so-ts/* · phase=done · GAP-PKT-ROLE-01 · kill :9301

## Next
role: review · /agent-review
write: specs/so-ts-pontoon/review/findings.md
