# handoff-compact — qa → review
schemaVersion: 1
feature: so-ts-rail-cross
role: qa
status: confirmed
verdict: PASS
packKind: list
changeScope: new_page
taskId: task_87d3ccf8
generatedAt: 2026-09-02T07:48:00.000Z
route_confirm: route_a
mfeStdRoute: /so-ts?type=RAIL_CROSS
mfeStdUrl: http://localhost:9301/so-ts?type=RAIL_CROSS
alias: /so-ts-rail-cross → /so-ts?type=RAIL_CROSS
typeCode: RAIL_CROSS
dump: tbl_railway_crossing
prefix: DS-
API: api/v1/asset/road-assets
domain: Asset
gates: tz_na · xco_get_only · share_tenant
e2eQa: ON · PASS
autoApprove: ON
contentHashPrior: sha256:da352cefd55373525e18a8b132228f5a6f7c46713d7b6a742fecf5416e410d5c
skillVersion: 2026.08.19.04
workflowVersion: 2026.09.01.02
rulesVersion: 2026.09.01.1

## Artifact
write: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-rail-cross/qa/scenarios.md
screens: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-rail-cross/qa/screens/
manifest: ok=true · S0/S1/QA-20 PASS · sha S0=6069efc291bae8ef · S1=6069efc291bae8ef · QA-20=1dee9007ff9f4c79
liveAssert: DTM 1280/768/375 · 0 overflowX · kmTo form ẩn · S-ATTR rail-cross · Dropdown protection/traffic

## E2E
- docker compose up -d · api:5111 · bff:5201 healthy
- init-data railCrossProtectionTypes/railCrossTrafficControlMethods
- yarn start:std :9301 · no kill worker (GAP-QA-E2E-KILL-01)
- yarn e2e-qa hang (:9100) → GAP-QA-E2E-PW-01 · channel=chrome contract fallback
- typecheck + yarn build PASS

## T-QA-*
- T-QA-CRUD-01 PASS · T-QA-FORM-01 PASS · T-QA-FILTER-01/02 PASS
- T-QA-TYP-01 / T-QA-TAB-01 PASS
- S-LOC-POINT kmTo ẩn · S-ATTR editable · LeaveConfirm · 0 native dialog Asset
- Grid: hide type/kmTo/qty/unit · show protection/traffic/waiting · alias Navigate
- prefix DS- · name ← name_crossing · waiting unit phút

## Debt
GAP-QA-E2E-PW-01 · GAP-RC-ROUTE-01 alias only · flatten DEFER · Auth DEFER · P0 none

## Cấm
ERP.* · invent api/v1/so-ts/* · phase=done · GAP-PKT-ROLE-01 · kill :9301

## Next
role: review · /agent-review
write: specs/so-ts-rail-cross/review/findings.md
