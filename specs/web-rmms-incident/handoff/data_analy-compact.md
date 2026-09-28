# Handoff compact — data_analy

schemaVersion: 1
feature: web-rmms-incident
packKind: list
role: data_analy
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T12:20:00.000Z
contentHash: sha256:d753df685c7334cda81339c1c6daccaa3463c4e8c6350eaff5562a6e41584015
taskId: task_43536f7d

## Decisions
- changeScope: edit_page · NEW AutocodeTask · keep prior PO/Design
- deltaCite: docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md · IncidentCreatePage
- formPattern: Mobile 430 · Pattern B · N/A ERP Modal · N/A Excel/export
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/van-de/moi · std /van-de|/van-de/moi|/van-de/:id
- be: D:/AI-QLBD/Linm.RMMS.WebService · Incident+Patrol+Integration+AiVision · cấm ERP.*
- bff: Linm.RMMS.Mobile.Bff · VITE_MOBILE_API_URL …/mobile-bff/api/v1 · cấm web-bff
- demo: N/A
- Delta: bỏ disabled={!canCreate} · banner asset/session/GPS · GPS deny on-submit · giữ capture
- OUT: new_page CRUD · Excel · Me* · journal B–E · tab/route/icon mới · invent slug API
- users/road SearchInput: N/A form này (tuyến RO session)

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| create | Button | disabled chỉ creating · Pattern B |
| validate.banner | Banner | asset · session · GPS |
| gpsLock | GPS | deny → on-submit · cấm khóa nút |
| photos | PhotoRow | giữ capture |
| assetPick | LookupGrid | GET asset-types |
| sessionStamp | Text RO | GET patrol/sessions |
| list/filters/fab | Search+Chip+Card+FAB | giữ INC-L |
| detail.close | Button | giữ INC-D |

## Screens / zones (ids only)
- INC-L · INC-N (Delta) · INC-D · peer INC-V/C/E
- reviewUrl= specs/web-rmms-incident/ui/prototype/index.html (keep Design)
- peerStdUrl= http://localhost:9301/van-de/moi
- DES-GRID / export: N/A

## API / tasks (ids only)
- FormMode↔API: GET/POST incident/incidents · GET{id} · POST close · sessions · asset-types · ai-vision/files
- real-data §A+§B+Delta: PASS
- T-*: edit IncidentCreatePage · align-mobile-to-mfe no_demo (Dev)

## UNCLEAR
- UNCLEAR-PB-BANNER-01: PO map banner keys asset/session/GPS (useFormOptions)

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-incident-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-incident-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-incident.md
- delta: D:/AI-QLBD/Linm.RMMS.Data/docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident/STATUS.md
