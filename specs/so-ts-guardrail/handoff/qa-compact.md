# handoff-compact — qa → review
schemaVersion: 1
feature: so-ts-guardrail
role: qa
status: confirmed
verdict: PASS
packKind: list
changeScope: new_page
taskId: task_0d38492f
generatedAt: 2026-09-01T16:43:00.000Z
route_confirm: route_a
mfeStdRoute: /so-ts?type=GUARDRAIL
mfeStdUrl: http://localhost:9301/so-ts?type=GUARDRAIL
alias: /so-ts-guardrail → /so-ts?type=GUARDRAIL
typeCode: GUARDRAIL
dump: tbl_guardrail
prefix: HL-
API: api/v1/asset/road-assets
domain: Asset
gates: tz_na · xco_get_only · share_tenant
e2eQa: ON · PASS
autoApprove: ON
contentHashPrior: sha256:d0deaacc164574342c2d10d3b3e7f683ad5df9bbefa2fd3072d92c7af8533cc8
skillVersion: 2026.08.19.04
workflowVersion: 2026.09.01.02
rulesVersion: 2026.09.01.1

## Artifact
write: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-guardrail/qa/scenarios.md
screens: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-guardrail/qa/screens/
manifest: ok=true · S0/S1/QA-20 PASS · sha S0=861e846e5db56a6c · S1=861e846e5db56a6c · QA-20=7b43cd70b8de9c79
liveAssert: DTM 1280/768/375 · 0 overflowX · kmTo form hiện · S-ATTR guardrail 6+

## E2E
- docker compose up -d · api:5111 · bff:5201 healthy
- init-data guardrailTypes/Materials/installationPurposes + vitriOptions
- yarn start:std :9301 · no kill worker (GAP-QA-E2E-KILL-01)
- yarn e2e-qa headed hang → GAP-QA-E2E-PW-01 · channel=chrome contract fallback
- typecheck + yarn build PASS

## T-QA-*
- T-QA-CRUD-01 PASS · T-QA-FORM-01 PASS · T-QA-FILTER-01/02 PASS
- T-QA-TYP-01 / T-QA-TAB-01 PASS
- S-LOC-RANGE kmTo hiện · S-ATTR editable · LeaveConfirm · 0 native dialog Asset
- Grid: hide type/ảnh · show loại hộ lan/VL/phản quang/mục đích/dài · hide-empty vị trí/địa danh
- prefix HL- · reflective Number · name optional · alias Navigate

## Debt
GAP-QA-E2E-PW-01 · flatten DEFER · Auth DEFER · P0 none

## Cấm
ERP.* · invent api/v1/so-ts/* · phase=done · GAP-PKT-ROLE-01 · kill :9301

## Next
role: review · /agent-review
write: specs/so-ts-guardrail/review/findings.md
