# Handoff compact — sa

schemaVersion: 1
feature: web-rmms-field-reflect
packKind: list
role: sa
status: done
changeScope: edit_page
taskId: task_804469f6
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T12:00:00.000Z
contentHash: sha256:d8f13df3772c0f27b367c5e01a5ce2cf942b1a27640c1390e76e34c3a8c267f2
solution_confirm: approve
autoApprove: ON

## Decisions
- changeScope: edit_page · Pattern B SUBMIT-VALIDATE · giữ prior Live FR-00/01/02 · cấm typed new_page
- Domain: Incident · DOMAIN-MAP row keep · cấm invent FieldReflectController / field-reflect/*
- FormMode↔API: GET sessions · GET asset-types · uploads/files · detect · POST incidents — Live · API mới=none · migration=none
- Pattern B: Detect/Create disabled chỉ detecting|creating · banner string[] on click · Acc>30 chặn POST detect handler
- GPS deny: không khóa CTA · báo on click · HasGps when fix · GAP-PGC-BE-01 HasGps only
- DEC-MEDIA-01 keep: MediaIds List<string> FileService guids max 10 · cấm full URL
- BFF: Mobile.Bff :5202 mobile-bff/api/v1 · cấm web-bff · cấm ERP.*
- mfeStdRoute: /phan-anh · mfeStdUrl http://localhost:9301/phan-anh · product /field/reflect · SSOT FieldReflectPage
- Align cuối: /align-mobile-to-mfe · cấm tab/route/icon mới · cấm android/ios proto
- open: UNCLEAR-VALIDATE-B · UNCLEAR-ALIGN-01 → Dev/QA · prior UNCLEAR closed
- next: /agent-team-lead · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| assetPick | loại TS | LookupGrid | GET asset-types · banner on Create |
| kind | Hư/Mất/Hỏng | Segment | → IncidentType |
| checklist | checklist | CheckboxGroup | local → Description |
| photos | ảnh | PhotoRow | uploads/files · banner on Detect |
| detect | nhận diện | Button | Pattern B · Acc handler |
| sessionStamp | ca/tuyến | Text RO | sessions · banner on Create |
| gpsLock | GPS | GPS | deny→banner on click |
| severity | mức | Select | LOOKUP_STATIC |
| description | mô tả | Textarea | copy key |
| validationBanner | lỗi client | Banner | Pattern B string[] |
| create | tạo vấn đề | Button | Pattern B · POST incidents |
| draftOffline | nháp | Button | peer offline |

## Screens / zones (ids only)
- FR-00 · FR-01 · FR-02
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field-reflect/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/phan-anh
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks (ids only)
- FormMode↔API: GET patrol/sessions · GET integration/asset-types · POST ai-vision/uploads · files/* · POST ai-vision/detect · POST incident/incidents
- peer: GET integration/users (forward) · road-routes/search · reflect không picker
- T-*: edit FieldReflectPage Pattern B gates+banner · Acc handler · align cuối · T-BE=N/A invent
- entity/migration/Step4b: skip

## UNCLEAR
- UNCLEAR-VALIDATE-B: Dev bỏ canDetect/canCreate · Pattern B banner
- UNCLEAR-ALIGN-01: end align-mobile-to-mfe · SSOT MFE · 430px
- prior DOMAIN-MAP/MEDIA/PGC/ENTRY/SESS/CHK: closed · GAP-PGC-BE-01 deferred

## Full paths (Read only if needed)
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field-reflect/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field-reflect/ui/design.md
- po: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field-reflect/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-field-reflect-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-field-reflect-real-data.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field-reflect/STATUS.md
