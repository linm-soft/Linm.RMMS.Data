# Handoff compact — qa

schemaVersion: 1
feature: web-rmms-vis-capture
packKind: list
role: qa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T11:35:34.921Z
taskId: task_d083b2c0
contentHash: sha256:f749bc65f84b7bde51beeebaa85e5db22dacc8e8a040a53de30af834fa55c8cd
autoApprove: ON
e2eQa: ON · runtime PASS
changeScope: edit_page

## Decisions
- formPattern: Mobile full VIS · phone 430 · N/A Modal · DES-GRID N/A
- Grid/DES-GRID/LinErpListFilterBar: N/A · T-QA-FILTER WAIVE
- ROUTE-01: mfeStdRoute=/chup-hien-truong · live /m/chup-hien-truong · **cấm** /web-rmms-vis-capture
- Pattern B PASS: Detect/Attach idle-on · #validationBanner via ?banner=1 · Acc>30 handler
- Login smoke: LG-00 /m/dang-nhap #f-user/#f-pass/#btn-login (SH-02 sheet superseded)
- be: Mobile.Bff :5202 · API :5111 · cấm ERP.*
- e2e: S0 guest · S1 #sc-vis-capture Live · QA-20 LG-00 · PNG screens/*.png
- stock yarn e2e-qa: FAIL soft port 5101/5201 → `_capture_vis.mjs` PASS corePass
- UNCLEAR-SESS closed: GPS · chưa có ca
- next: /agent-review · roleOnly stop (GAP-PKT-ROLE-01)
- **cấm** phase=done

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| visGuestGate | Static/Button | S0 PASS |
| photos/detect | PhotoRow/Button | S1 PASS · idle-on |
| rowLoc/rowAcc | ListRow RO | GPS-only + Acc±12 |
| btnAttach/btnSkip | Button | DUAL-01 PASS · idle-on |
| validationBanner | Banner | MODE-banner PASS |
| gpsLock/modalGps | GPS | MODE-gps-deny/acc PASS |

## Screens / zones (ids only)
- VIS · #sc-vis-capture · DES-MOB-VIS-CAPTURE · DES-MOB-VIS-VALIDATION · DES-MOB-GPS-DENY · LG-00
- mfeStdUrl= http://localhost:9301/chup-hien-truong
- screens= specs/web-rmms-vis-capture/qa/screens/{S0,S1,QA-20,MODE-*}.png

## API / tasks (ids only)
- Live staff VIS · guest gate no Live
- T-QA-CRUD-01 · T-QA-VIS-01/PATTERN-B/GPS/SESS = PASS · T-QA-FILTER = WAIVE
- entity/migration: none

## Debt
- stock e2e port gate · WDS deep-link fulfill · LG-00 vs SH-02 · home alias /web-rmms-home 404
- UNCLEAR: none · SESS closed QA

## Full paths
- scenarios: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-vis-capture/qa/scenarios.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-vis-capture/STATUS.md
