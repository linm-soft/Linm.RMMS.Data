# Handoff compact — data_analy

schemaVersion: 1
feature: web-rmms-field-reflect
packKind: list
role: data_analy
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T02:54:00.000Z
contentHash: sha256:e678be9152069e48f353f88e9f4d377e20e4fd4ad5c8d4aa2c86bd995bc1e667

## Decisions
- changeScope: new_page
- formPattern: Mobile full (phone max-width 430) · Android 1-1 · N/A ERP Modal/Slideout
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-field-reflect · productRoute /field/reflect
- be: D:/AI-QLBD/Linm.RMMS.WebService · Incident+Patrol+Integration+AiVision(+files) · cấm ERP.*
- bff: Linm.RMMS.Mobile.Bff · VITE_MOBILE_API_URL http://localhost:5202/mobile-bff/api/v1 · cấm web-bff client
- demo: N/A
- FR-00 pick asset-types · FR-01 form kind/checklist/photo/GPS/create · FR-02 capture overlay
- HARD: GPS deny → block Create/Detect/geo · sessions live-only · cấm fake coords/ca · useFormOptions
- OUT: Me*/feedback/cam-view · journal/kết ca/tồn tại/tần suất (B–E) · invent field-reflect path
- open: UNCLEAR-DOMAIN-MAP-REFLECT · SESS-01 · CHK-01 · MEDIA-01 · PGC · ENTRY

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
- UNCLEAR-DOMAIN-MAP-REFLECT: SA add DOMAIN-MAP row
- UNCLEAR-SESS-01: GAP-MOB-FIELD-SESS-01 live-only
- UNCLEAR-CHK-01: checklist local no API
- UNCLEAR-MEDIA-01: MediaIds bind CreateIncidentRequest
- UNCLEAR-PGC: photo-geo FR-02 vs PhotoRow
- UNCLEAR-ENTRY: hub TD/TK → 1 route + PatrolType stamp

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-field-reflect-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-field-reflect-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-field-reflect.md
- screens: D:/AI-QLBD/Linm.RMMS.Data/docs/plan/web-rmms-mobile/SCREENS.md
- peer: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/field-reflect.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field-reflect/STATUS.md
