# Handoff compact — design

schemaVersion: 1
feature: web-rmms-field-reflect
packKind: list
role: design
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T12:05:00.000Z
taskId: task_809a7227
contentHash: sha256:d8f13df3772c0f27b367c5e01a5ce2cf942b1a27640c1390e76e34c3a8c267f2
design_confirm: approve
autoApprove: ON
changeScope: edit_page
real_view_parity: v1
shared_grid_example: N/A

## Decisions
- changeScope: edit_page · Pattern B SUBMIT-VALIDATE · giữ FR-00/01/02 · cấm typed new_page
- formPattern: Mobile full · phone 430 · N/A Modal/Slideout · N/A DES-GRID/DES-RPT
- mfeStdRoute: /phan-anh · mfeStdUrl http://localhost:9301/phan-anh · product /field/reflect
- be: Incident+Patrol+Integration+AiVision · Mobile.Bff :5202 · cấm ERP.* · cấm web-bff
- demo: N/A · hash skip · cấm rescan (GAP-DES-DEMO-RESCAN-01)
- Detect/Create: idle ON · disabled chỉ detecting|creating · banner string[] on click
- GPS deny: không khóa CTA · báo on click · Acc>30 chặn POST detect handler
- validationBanner zone · reviewUrl giữ + modes ?miss=1
- Align cuối: /align-mobile-to-mfe · SSOT FieldReflectPage · cấm tab/route/icon mới · cấm android/ios proto
- kit_missing_confirm: prior approve PhotoRow+CheckboxGroup
- next: /agent-sa · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| assetPick | loại TS | LookupGrid | GET asset-types · banner on Create |
| kind | Hư/Mất/Hỏng | Segment | → IncidentType |
| checklist | checklist | CheckboxGroup | local → Description |
| photos | ảnh | PhotoRow | → FR-02 · banner on Detect |
| detect | nhận diện | Button | Pattern B · disabled chỉ detecting |
| sessionStamp | ca/tuyến | Text RO | sessions · banner on Create |
| gpsLock | GPS | GPS | deny→banner on click |
| severity | mức | Select | LOOKUP_STATIC |
| description | mô tả | Textarea | copy key |
| validationBanner | lỗi client | Banner | Pattern B string[] |
| create | tạo vấn đề | Button | Pattern B · disabled chỉ creating |
| draftOffline | nháp | Button | peer offline |

## Screens / zones (ids only)
- FR-00 · FR-01 · FR-02
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field-reflect/ui/prototype/index.html
- reviewUrl modes=?form=1 · ?capture=1 · ?deny=1 · ?empty=1 · ?acc=1 · ?miss=1
- peerStdUrl= http://localhost:9301/phan-anh
- real_view_parity= v1
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks (ids only)
- FormMode↔API: GET sessions · GET asset-types · uploads/files · detect · POST incidents
- peer: users forward · road-routes/search · reflect không picker
- real-data §A+§B: PASS · T-*: edit FieldReflectPage gates+banner · align cuối

## UNCLEAR
- UNCLEAR-VALIDATE-B: Dev bỏ canDetect/canCreate · Pattern B banner
- UNCLEAR-ALIGN-01: end align-mobile-to-mfe · SSOT MFE · 430px
- prior DOMAIN-MAP/MEDIA/PGC/ENTRY/SESS/CHK: closed

## Full paths (Read only if needed)
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field-reflect/ui/design.md
- prototype: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field-reflect/ui/prototype/index.html
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-field-reflect-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-field-reflect-real-data.md
- po: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field-reflect/po/requirement.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field-reflect/STATUS.md
