# Handoff compact — qa

schemaVersion: 1
feature: web-rmms-field-reflect
packKind: list
role: qa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T12:10:30.000Z
taskId: task_7a49c440
contentHash: sha256:d8f13df3772c0f27b367c5e01a5ce2cf942b1a27640c1390e76e34c3a8c267f2
qa_confirm: approve
autoApprove: ON
changeScope: edit_page
e2eQa: ON · PASS
build: N/A (reuse start:std · prior yarn build PASS)

## Decisions
- changeScope: edit_page · Pattern B SUBMIT-VALIDATE · T-QA-VAL-B-01 PASS
- mfeStdRoute: /phan-anh · mfeStdUrl http://localhost:9301/phan-anh · product /field/reflect
- e2e: docker reuse :5111/:5202 · start:std :9301 reuse · **cấm** kill worker
- Smoke S0/S1/QA-20 PASS · LoginPage /dang-nhap (#f-user/#f-pass/#btn-login)
- Pattern B: VAL-B-miss/deny/acc PASS · Detect/Create idle ON · banner string[] · Acc>30 0 POST detect · GPS deny không khóa CTA
- stock yarn e2e-qa: S0/S1 PASS · QA-20 soft BLANK (ERP login) · authority `_capture_reflect.mjs`
- next: /agent-review · phase=review · **cấm** phase=done · roleOnly stop

## Inventory (slim)
| id | controlHint | AC |
|----|-------------|-----|
| guestGate | Gate | S0 PASS |
| assetPick | LookupGrid | S1 Live PASS |
| login | LoginPage LG-00 | QA-20 PASS |
| validationBanner | Banner string[] | VAL-B-* PASS |
| detect/create | Button Pattern B | idle enabled · busy-only disabled |
| gpsLock | GPS deny/Acc | deny CTA ON · Acc block POST |

## Screens / zones
- FR-00 · FR-01 · FR-02 · validationBanner · LG-00
- PNG: qa/screens/S0.png · S1.png · QA-20.png · VAL-B-miss.png · VAL-B-deny.png · VAL-B-acc.png
- peerStdUrl= http://localhost:9301/phan-anh
- DES-GRID / LinErpListFilterBar: N/A WAIVE

## API / tasks
- Live: asset-types · sessions · detect blocked Acc/deny/miss
- T-QA-VAL-B-01 = PASS · T-QA-CRUD-01/FR-01 = PASS
- debt: GAP-QA-E2E-STOCK-LOGIN soft · GAP-PGC-BE-01 deferred

## UNCLEAR
- VALIDATE-B / ALIGN-01 closed Dev+QA
- prior DOMAIN-MAP/MEDIA/PGC/ENTRY/SESS/CHK closed

## Full paths
- scenarios: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field-reflect/qa/scenarios.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field-reflect/STATUS.md
- capture: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field-reflect/qa/screens/_capture_reflect.result.json
