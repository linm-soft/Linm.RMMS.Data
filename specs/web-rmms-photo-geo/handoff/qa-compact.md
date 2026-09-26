# Handoff compact — qa

schemaVersion: 1
feature: web-rmms-photo-geo
packKind: list
role: qa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T00:16:05.005Z
taskId: task_55b04a6b
contentHash: sha256:2282c3b64ab8701681f5edbc548b5cf1a2221159d9ffb779dfe03d186010f7a4
autoApprove: ON
e2eQa: ON · runtime PASS
changeScope: new_page

## Decisions
- formPattern: Mobile sheet `#sheet-pgc` DES-MOB-PGC · phone 430 · N/A Modal · DES-GRID N/A
- Grid/DES-GRID/LinErpListFilterBar: N/A · T-QA-FILTER WAIVE
- mfe: Linm.Web.RMMS.Mobile · mfeStdRoute=/web-rmms-photo-geo · :9301 reuse
- be: Mobile.Bff :5202 · API :5111 · cấm ERP.* · DEC-PGC-BE-01 sidecar · T-BE=N/A
- e2e: S0 guest · S1 #sheet-pgc Live · QA-20 SH-02 · PNG screens/*.png
- stock yarn e2e-qa: FAIL soft port 5101/5201 → `_capture_pgc.mjs`
- Live S1: session QL.1-LANGSON · Acc±12 · TITLE · zones capture/shutter/meta/use
- modes PASS: ?deny=1 · ?compass=1 · ?step=map · ?fail=1
- next: /agent-review · roleOnly stop (GAP-PKT-ROLE-01)
- **cấm** phase=done

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| guestGate | Static/Button | S0 PASS |
| sheet-pgc | Sheet | S1 PASS · DES-MOB-PGC |
| capturePreview/btnShutter | CameraStill/Button | S1 · shutterDisabled headless soft |
| rowPhotog/Distance/Object | ListRow RO | Live Acc±12 |
| mapConfirm | MapHitl | MODE-step-map PASS |
| btnUse | Button | useDisabled until still |
| gpsLock/modal-gps | GPS | MODE-deny PASS |

## Screens / zones (ids only)
- PGC · #sheet-pgc · DES-MOB-PGC · DES-MOB-GPS-DENY · MAP-HITL · SH-02
- mfeStdUrl= http://localhost:9301/web-rmms-photo-geo
- screens= specs/web-rmms-photo-geo/qa/screens/{S0,S1,QA-20}.png

## API / tasks (ids only)
- Live: GET patrol/sessions · guest no Live sheet
- T-QA-CRUD-01 · T-QA-PGC-01/GPS/HITL/COMPASS = PASS · T-QA-FILTER = WAIVE
- entity/migration: none · Step4b N/A

## Debt
- stock e2e port gate · WDS deep-link fulfill · playwright junction · cam headless shutter
- UNCLEAR: none

## Full paths
- scenarios: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-photo-geo/qa/scenarios.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-photo-geo/STATUS.md
