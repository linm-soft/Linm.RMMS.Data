# Handoff compact — po

schemaVersion: 1
feature: web-rmms-field-reflect
packKind: list
role: po
status: done
changeScope: edit_page
taskId: task_8da9efa7
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T11:50:00.000Z
contentHash: sha256:d8f13df3772c0f27b367c5e01a5ce2cf942b1a27640c1390e76e34c3a8c267f2
autoApprove: ON

## Decisions
- changeScope: edit_page · Pattern B SUBMIT-VALIDATE · FieldReflectPage · cấm typed new_page
- DoD: giữ FR-00/01/02 Live · Detect/Create chỉ disabled busy · banner string[] on click · Acc>30 chặn POST detect handler
- GPS deny: không khóa CTA · báo khi bấm · cấm fake
- formPattern: Mobile full 430 · N/A ERP Modal · N/A Excel · N/A DES-GRID
- mfeStdRoute: /phan-anh · mfeStdUrl http://localhost:9301/phan-anh · product /field/reflect
- be: Incident+Patrol+Integration+AiVision · Mobile.Bff :5202 · cấm ERP.* · cấm web-bff
- Align cuối: /align-mobile-to-mfe · SSOT FieldReflectPage · cấm tab/route/icon mới · cấm mở android/ios proto
- OUT: Me*/feedback/cam-view · invent field-reflect · Excel · B–E journal/kết ca
- open: UNCLEAR-VALIDATE-B · UNCLEAR-ALIGN-01 · prior UNCLEAR closed
- handoff: Design · giữ reviewUrl · delta CTA/banner

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| assetPick | loại TS | LookupGrid | GET asset-types · banner on Create nếu thiếu |
| kind | Hư/Mất/Hỏng | Segment | → IncidentType |
| checklist | checklist | CheckboxGroup | local · → Description |
| photos | ảnh | PhotoRow | FR-02 · banner on Detect nếu thiếu |
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
- peerStdUrl= http://localhost:9301/phan-anh
- DES-GRID / LinErpListFilterBar: N/A phone

## API / tasks (ids only)
- FormMode↔API: GET patrol/sessions · GET integration/asset-types · POST ai-vision/uploads · files/* · POST ai-vision/detect · POST incident/incidents
- peer: GET integration/users (forward) · road-routes/search (có) · reflect không picker
- T-*: edit FieldReflectPage gates + banner · T-BE=N/A invent · align cuối

## UNCLEAR
- UNCLEAR-VALIDATE-B: Dev bỏ canDetect/canCreate · Pattern B banner
- UNCLEAR-ALIGN-01: end align-mobile-to-mfe · SSOT MFE · 430px

## Full paths (Read only if needed)
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field-reflect/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-field-reflect-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-field-reflect-real-data.md
- submit-validate: D:/AI-QLBD/Linm.RMMS.Data/docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field-reflect/STATUS.md
