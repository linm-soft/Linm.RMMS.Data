# handoff-compact — qa → review
schemaVersion: 1
feature: so-ts-convex-mirror
role: qa
status: confirmed
verdict: PASS
packKind: list
changeScope: new_page
taskId: task_f6d43964
generatedAt: 2026-09-01T16:05:00.000Z
route_confirm: route_a
mfeStdRoute: /so-ts?type=CONVEX_MIRROR
mfeStdUrl: http://localhost:9301/so-ts?type=CONVEX_MIRROR
alias: /so-ts-convex-mirror → /so-ts?type=CONVEX_MIRROR
typeCode: CONVEX_MIRROR
dump: road_sphere_mirror
API: api/v1/asset/road-assets
domain: Asset
gates: tz_na · xco_get_only · share_tenant
e2eQa: ON · PASS
autoApprove: ON
contentHashPrior: sha256:36242a5e7648360ecaa70554a44a6f2b782712d0d924a0f7121ab77e14ad558f
skillVersion: 2026.08.19.04
workflowVersion: 2026.09.01.02
rulesVersion: 2026.09.01.1

## Artifact
write: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-convex-mirror/qa/scenarios.md
screens: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-convex-mirror/qa/screens/
manifest: ok=true · S0/S1/QA-20 PASS · sha S0=c7e74c666206a7f4 · S1=9d72029960f7728c · QA-20=29a4d1b73fcb3764
liveAssert: DTM 1280/768/375 · 0 overflowX · kmTo form ẩn · S-ATTR loc+9

## E2E
- docker compose up -d --build · api:5111 · bff:5201 healthy
- init-data assetTypeMsts=4 · shapeCutPosts=5 · materialPosts=5 · locationPosts=6
- yarn start:std :9301 · no kill worker
- yarn e2e-qa headed hang → GAP-QA-E2E-PW-01 · channel=chrome contract
- typecheck + yarn build PASS

## T-QA-*
- T-QA-CRUD-01 PASS · T-QA-FORM-01 PASS · T-QA-FILTER-01/02 PASS
- T-QA-TYP-01 / T-QA-TAB-01 PASS
- S-LOC-POINT kmTo ẩn · S-ATTR 9 · LeaveConfirm · 0 native dialog Asset
- Grid: hide type/kmTo/unit · show loc/MST/shape/mat/ĐK/cao/nhịp/biển/trụ

## Debt
GAP-QA-E2E-PW-01 · GAP-QA-E2E-DOCKER-01 · flatten DEFER · Auth DEFER · P0 none

## Cấm
ERP.* · invent api/v1/so-ts/* · phase=done · GAP-PKT-ROLE-01 · kill :9301

## Next
role: review · /agent-review
write: specs/so-ts-convex-mirror/review/findings.md
