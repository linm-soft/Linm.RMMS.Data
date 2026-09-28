# Handoff compact — design

schemaVersion: 1
feature: web-rmms-incident
packKind: list
role: design
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T12:26:00.000Z
taskId: task_7da17034
contentHash: sha256:d753df685c7334cda81339c1c6daccaa3463c4e8c6350eaff5562a6e41584015
design_confirm: approve
autoApprove: ON
real_view_parity: v1
shared_grid_example: N/A

## Decisions
- changeScope: edit_page · Pattern B INC-N · keep L/D + reviewUrl
- formPattern: Mobile full phone 430 · Pattern B · N/A ERP Modal/Slideout
- Grid AC Kind B / DES-GRID / LinErpListFilterBar: N/A phone Search+Chip
- Report AC / DES-RPT: N/A
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/van-de/moi · std /van-de|/van-de/moi|/van-de/:id
- be: D:/AI-QLBD/Linm.RMMS.WebService · Incident+Patrol+Integration+AiVision · cấm ERP.*
- bff: Linm.RMMS.Mobile.Bff :5202 mobile-bff/api/v1 · cấm web-bff
- demo: N/A · hash skip · cấm rescan (GAP-DES-DEMO-RESCAN-01)
- Delta: create always-on (disabled chỉ creating) · validate.banner string[] · GPS deny on-submit · photos capture giữ
- Banner keys AC-PB-04: asset→incident.pick.title · session→incident.session.empty · GPS→incident.gps.deny · offline→incident.offline
- UNCLEAR-PB-BANNER-01: resolved PO
- kit_missing_confirm: N/A
- next: /agent-sa · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| create | Tạo vấn đề | Button | always-on · disabled chỉ creating · AC-PB-01 |
| validate.banner | lỗi client | Banner | string[] Pattern B · AC-PB-03/04 |
| gpsLock | GPS | GPS | deny on-submit · cấm khóa nút |
| gps.deny.modal | modal GPS | Modal | deny.title/body keys |
| photos | ảnh | PhotoRow | capture=environment giữ |
| assetPick | loại TS | LookupGrid | GET asset-types |
| sessionStamp | ca/tuyến | Text RO | GET patrol/sessions |
| list/filters/fab | list | Search+Chip+Card+FAB | giữ INC-L |
| detail.close | đóng | Button | giữ INC-D · disabled closing |

## Screens / zones (ids only)
- INC-L · INC-N (Delta Pattern B) · INC-D · peer INC-V/C/E
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident/ui/prototype/index.html
- reviewUrl modes=?screen=create|detail · ?empty=1 · ?gps=deny · ?acc=45 · ?nosession=1 · ?error=1
- peerStdUrl= http://localhost:9301/van-de/moi
- real_view_parity= v1
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks (ids only)
- FormMode↔API: GET/POST incident/incidents · GET{id} · POST close · sessions · asset-types · ai-vision/files
- real-data §A+§B+Delta: PASS · AC-PB-01…04 · AC-CREATE-05 edit · keep GRID/DETAIL
- T-*: edit IncidentCreatePage Pattern B · align-mobile-to-mfe no_demo · devSlash=/agent-dev

## UNCLEAR
- UNCLEAR-PB-BANNER-01: **resolved** (AC-PB-04)
- Prior UNCLEAR-*: resolved prior pipeline

## Full paths (Read only if needed)
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident/ui/design.md
- prototype: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident/ui/prototype/index.html
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-incident-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-incident-real-data.md
- po: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident/po/requirement.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident/STATUS.md
