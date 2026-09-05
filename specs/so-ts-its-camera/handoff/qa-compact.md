# handoff-compact — qa → review
schemaVersion: 1
feature: so-ts-its-camera
role: qa
status: confirmed
verdict: PASS
packKind: list
changeScope: new_page
taskId: task_875ded25
generatedAt: 2026-09-02T09:10:00.000Z
route_confirm: route_a
mfeStdRoute: /so-ts?type=ITS_CAMERA
mfeStdUrl: http://localhost:9301/so-ts?type=ITS_CAMERA
alias: /so-ts-its-camera → /so-ts?type=ITS_CAMERA
typeCode: ITS_CAMERA
dump: tbl_its
prefix: IT-
API: api/v1/asset/road-assets
domain: Asset
gates: tz_na · xco_get_only · share_tenant
e2eQa: ON · PASS
autoApprove: ON
contentHashPrior: sha256:f84fdaca28c60fcf81fcd282b87f9a7d6d9ba3129b26cf9e3a12f6e85f201946
skillVersion: 2026.08.19.04
workflowVersion: 2026.09.01.02
rulesVersion: 2026.09.01.1

## Artifact
write: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-its-camera/qa/scenarios.md
screens: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-its-camera/qa/screens/
manifest: ok=true · S0/S1/QA-20 PASS · sha S0=2fc5a6e7d564000d · S1=2fc5a6e7d564000d · QA-20=27bedfc9b3f544a9
liveAssert: DTM 1280/768/375 · 0 overflowX · S-LOC-POINT kmFrom only · S-ATTR ITS · cols TTĐH/VMS/trụ đỡ

## E2E
- docker compose up -d · api:5111 · bff:5201 healthy
- init-data itsManagementCenterTypes/itsCentralControlLocations
- yarn start:std :9301 · no kill worker (GAP-QA-E2E-KILL-01)
- yarn e2e-qa headed hang (:9100) → GAP-QA-E2E-02 · standalone headless capture PASS
- typecheck + yarn build PASS

## T-QA-*
- T-QA-CRUD-01 PASS · T-QA-FORM-01 PASS · T-QA-FILTER-01/02 PASS
- T-QA-TYP-01 / T-QA-TAB-01 PASS
- S-LOC-POINT kmFrom only · S-ATTR editable · LeaveConfirm · 0 native dialog Asset
- Grid: hide type/kmTo/SL/ĐVT · show TTĐH/vị trí/VMS/ĐK màn hình/MCS/WIM/cống/cáp/trụ · alias Navigate
- prefix IT- · name optional · LOOKUP its*

## QA fixes (minimal)
- none (dev build PASS · runtime assert PASS)

## Debt
GAP-QA-E2E-02 · GAP-ITS-ROUTE-01 alias only · GAP-ITS-FLAT-01 flatten DEFER · GAP-ITS-CAM-01 camera-connect out · hide-empty runtime DEFER · Auth DEFER · P0 none

## Cấm
ERP.* · invent api/v1/so-ts/* · phase=done · GAP-PKT-ROLE-01 · kill :9301

## Next
role: review · /agent-review
write: specs/so-ts-its-camera/review/findings.md
