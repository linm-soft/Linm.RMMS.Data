# Handoff compact — po

schemaVersion: 1
feature: web-rmms-incident
packKind: list
role: po
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T12:22:30.000Z
contentHash: sha256:d753df685c7334cda81339c1c6daccaa3463c4e8c6350eaff5562a6e41584015
taskId: task_7772751e

## Decisions
- changeScope: edit_page · Pattern B INC-N · keep prior Design/L/D
- deltaCite: docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md · IncidentCreatePage
- formPattern: Mobile 430 · Pattern B · N/A ERP Modal · N/A Excel/DES-GRID
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/van-de/moi · std /van-de|/van-de/moi|/van-de/:id
- be: D:/AI-QLBD/Linm.RMMS.WebService · Incident+Patrol+Integration+AiVision · cấm ERP.*
- bff: Linm.RMMS.Mobile.Bff · VITE_MOBILE_API_URL …/mobile-bff/api/v1 · cấm web-bff
- demo: N/A · hash skip analy · cấm re-scan
- DoD: bỏ disabled={!canCreate} · banner asset/session/GPS · GPS deny on-submit · giữ capture
- Banner keys (PB-BANNER resolved): asset→incident.pick.title · session→incident.session.empty · GPS→incident.gps.deny (+ modal deny.title/body) · offline→incident.offline
- OUT: new_page CRUD · Excel · Me* · journal B–E · tab/route/icon mới · invent slug · SearchInput users/routes

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| create | Button | disabled chỉ creating · AC-PB-01 |
| validate.banner | Banner | string[] Pattern B · AC-PB-03/04 |
| gpsLock | GPS | deny on-submit · cấm khóa nút |
| photos | PhotoRow | giữ capture |
| assetPick | LookupGrid | GET asset-types |
| sessionStamp | Text RO | GET patrol/sessions |
| list/filters/fab | Search+Chip+Card+FAB | giữ INC-L Grid AC |
| detail.close | Button | giữ INC-D |

## Screens / zones (ids only)
- INC-L · INC-N (Delta) · INC-D · peer INC-V/C/E
- reviewUrl= specs/web-rmms-incident/ui/prototype/index.html (keep · Design patch)
- peerStdUrl= http://localhost:9301/van-de/moi
- DES-GRID / export: N/A

## AC (ids)
- Grid: AC-GRID-01…05 keep
- Create keep: AC-CREATE-01…07 (GPS AC-CREATE-05 = on-submit)
- Pattern B: AC-PB-01…04
- Detail: AC-DETAIL-01…03 keep

## API / tasks (ids only)
- FormMode↔API: GET/POST incident/incidents · GET{id} · POST close · sessions · asset-types · ai-vision/files
- no MIG · handoff Design → SA
- T-*: edit IncidentCreatePage Pattern B · align-mobile-to-mfe no_demo (Dev)

## UNCLEAR
- UNCLEAR-PB-BANNER-01: **resolved** (AC-PB-04)
- Prior UNCLEAR-*: resolved prior pipeline

## Full paths (Read only if needed)
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-incident-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-incident-real-data.md
- delta: D:/AI-QLBD/Linm.RMMS.Data/docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident/STATUS.md
