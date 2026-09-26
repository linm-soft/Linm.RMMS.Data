# Handoff compact — design

schemaVersion: 1
feature: web-rmms-field-reflect
packKind: list
role: design
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T03:15:00.000Z
taskId: task_3cd98c18
contentHash: sha256:e678be9152069e48f353f88e9f4d377e20e4fd4ad5c8d4aa2c86bd995bc1e667
design_confirm: approve
autoApprove: ON
real_view_parity: v1
shared_grid_example: N/A

## Decisions
- changeScope: new_page
- formPattern: Mobile full · phone 430 · Android 1-1 · N/A Modal/Slideout
- Grid AC Kind B / DES-GRID / LinErpListFilterBar: N/A phone Field form
- Report AC / DES-RPT: N/A
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-field-reflect · productRoute /field/reflect
- be: D:/AI-QLBD/Linm.RMMS.WebService · Incident+Patrol+Integration+AiVision(+files) · cấm ERP.*
- bff: Linm.RMMS.Mobile.Bff :5202 mobile-bff/api/v1 · cấm web-bff
- demo: N/A · hash skip · cấm rescan (GAP-DES-DEMO-RESCAN-01)
- FR-00 pick · FR-01 form · FR-02 photo-geo overlay · GPS deny block · sessions live-only
- UNCLEAR-PGC: resolved Design — PhotoRow→FR-02 photo-geo
- UNCLEAR-ENTRY/CHK-01/SESS-01: resolved PO
- kit_missing_confirm: PhotoRow+CheckboxGroup approve (compose)
- next: /agent-sa · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| assetPick | loại TS | LookupGrid | GET integration/asset-types |
| kind | Hư/Mất/Hỏng | Segment | → IncidentType |
| checklist | checklist | CheckboxGroup | local → Description |
| photos | ảnh | PhotoRow | → FR-02 |
| detect | nhận diện | Button | POST ai-vision/detect · GPS≤30 |
| sessionStamp | ca/tuyến | Text RO | GET patrol/sessions |
| gpsLock | GPS | GPS | deny→block |
| severity | mức | Select | LOOKUP_STATIC |
| description | mô tả | Textarea | copy key |
| create | tạo vấn đề | Button | POST incident/incidents HasGps |
| draftOffline | nháp | Button | peer offline |

## Screens / zones (ids only)
- FR-00 · FR-01 · FR-02
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field-reflect/ui/prototype/index.html
- reviewUrl modes=?form=1 · ?capture=1 · ?deny=1 · ?empty=1 · ?acc=1
- peerStdUrl= http://localhost:9301/web-rmms-field-reflect
- real_view_parity= v1
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks (ids only)
- FormMode↔API: GET sessions · GET asset-types · uploads/files · detect · POST incidents
- real-data §A+§B: PASS · T-*: T-W3-10 · devSlash=/agent-dev

## UNCLEAR
- UNCLEAR-DOMAIN-MAP-REFLECT→SA add DOMAIN-MAP row
- UNCLEAR-MEDIA-01→SA cite MediaIds bind
- UNCLEAR-PGC: resolved Design — FR-02 photo-geo
- UNCLEAR-ENTRY/CHK-01/SESS-01: resolved PO

## Full paths (Read only if needed)
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field-reflect/ui/design.md
- prototype: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field-reflect/ui/prototype/index.html
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-field-reflect-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-field-reflect-real-data.md
- po: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field-reflect/po/requirement.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field-reflect/STATUS.md
