# Handoff compact — po

schemaVersion: 1
feature: web-rmms-field-reflect
packKind: list
role: po
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T03:05:00.000Z
contentHash: sha256:e678be9152069e48f353f88e9f4d377e20e4fd4ad5c8d4aa2c86bd995bc1e667
autoApprove: ON
e2eQa: ON (queued /agent-qa*)

## Decisions
- changeScope: new_page
- formPattern: Mobile full (phone ≤430) · Android 1-1 · N/A ERP Modal/Slideout
- packKind: list (Field form — DES-GRID / LinErpListFilterBar N/A)
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-field-reflect · productRoute /field/reflect
- be: D:/AI-QLBD/Linm.RMMS.WebService · Incident+Patrol+Integration+AiVision(+files) · Mobile.Bff :5202 · cấm ERP.* · cấm web-bff
- demo: N/A
- DoD: FR-00 pick · FR-01 form · FR-02 capture · GPS deny block · sessions live-only · Create POST incidents · draft offline peer · useFormOptions
- UNCLEAR-ENTRY: chốt 1 route · stamp PatrolType từ ca
- UNCLEAR-CHK-01: chốt checklist local → Description · no API
- UNCLEAR-SESS-01: chốt live-only · cấm itemsOrDemo
- UNCLEAR-PGC / MEDIA-01 / DOMAIN-MAP-REFLECT: handoff Design/SA (không block PO)
- autoApprove: ON → Design

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| assetPick | loại TS | LookupGrid | GET integration/asset-types |
| kind | Hư/Mất/Hỏng | Segment | → IncidentType |
| checklist | checklist | CheckboxGroup | local · → Description |
| photos | ảnh | PhotoRow | uploads/files · FR-02 |
| detect | nhận diện | Button | POST ai-vision/detect · GPS≤30 |
| sessionStamp | ca/tuyến | Text RO | GET patrol/sessions |
| gpsLock | GPS | GPS | deny→block |
| severity | mức | Select | LOOKUP_STATIC |
| description | mô tả | Textarea | copy key |
| create | tạo vấn đề | Button | POST incident/incidents HasGps |
| draftOffline | nháp | Button | peer offline |

## Screens / zones (ids only)
- FR-00 · FR-01 · FR-02
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9301/web-rmms-field-reflect
- DES-GRID / LinErpListFilterBar: N/A phone

## API / tasks (ids only)
- FormMode↔API: GET patrol/sessions · GET integration/asset-types · POST ai-vision/uploads · files/init|object|commit · POST ai-vision/detect · POST incident/incidents
- real-data §A+§B: PASS
- T-*: T-W3-10 (cite TASKS)

## UNCLEAR
- UNCLEAR-DOMAIN-MAP-REFLECT: SA add DOMAIN-MAP row (open)
- UNCLEAR-MEDIA-01: SA cite MediaIds bind (open)
- UNCLEAR-PGC: Design FR-02 photo-geo vs PhotoRow (open)
- UNCLEAR-ENTRY / CHK-01 / SESS-01: resolved PO

## Full paths (Read only if needed)
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field-reflect/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-field-reflect-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-field-reflect-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-field-reflect.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field-reflect/STATUS.md
