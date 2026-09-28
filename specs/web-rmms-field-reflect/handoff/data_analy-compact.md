# Handoff compact â€” data_analy

schemaVersion: 1
feature: web-rmms-field-reflect
packKind: list
role: data_analy
status: done
changeScope: edit_page
taskId: task_73173396
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T11:42:48.849Z
contentHash: sha256:d8f13df3772c0f27b367c5e01a5ce2cf942b1a27640c1390e76e34c3a8c267f2

## Decisions
- changeScope: edit_page Â· NEW task Â· cáº¥m typed new_page Â· giá»¯ PO/Design/SA artifacts
- cite: docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md Â· Pattern B Â· FieldReflectPage
- formPattern: Mobile full 430 Â· N/A ERP Modal Â· N/A Excel toolbar
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile Â· mfeStdUrl http://localhost:9301/phan-anh Â· productRoute /field/reflect
- be: D:/AI-QLBD/Linm.RMMS.WebService Â· Incident+Patrol+Integration+AiVision(+files) Â· cáº¥m ERP.*
- bff: Linm.RMMS.Mobile.Bff Â· VITE_MOBILE_API_URL â€¦/mobile-bff/api/v1 Â· cáº¥m web-bff
- demo: N/A
- Delta: bá» disabled={!canDetect}+{!canCreate} Â· chá»‰ disabled detecting/creating Â· banner phiÃªn/TS/GPS/áº£nh on click Â· Acc>30 cháº·n POST trong handler
- Align cuá»‘i: /align-mobile-to-mfe Â· SSOT=FieldReflectPage Â· cáº¥m tab/route/icon má»›i Â· cáº¥m má»Ÿ android/ios proto
- OUT: Me*/feedback/cam-view Â· invent field-reflect path Â· Excel Â· Bâ€“E journal/káº¿t ca
- open: UNCLEAR-VALIDATE-B Â· UNCLEAR-ALIGN-01 Â· prior UNCLEAR closed

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| assetPick | loáº¡i TS | LookupGrid | GET integration/asset-types |
| kind | HÆ°/Máº¥t/Há»ng | Segment | â†’ IncidentType |
| checklist | checklist | CheckboxGroup | local Â· â†’ Description |
| photos | áº£nh | PhotoRow | uploads/files Â· FR-02 |
| detect | nháº­n diá»‡n | Button | Pattern B Â· disabled chá»‰ detecting |
| sessionStamp | ca/tuyáº¿n | Text RO | GET patrol/sessions |
| gpsLock | GPS | GPS | denyâ†’banner on click |
| severity | má»©c | Select | LOOKUP_STATIC |
| description | mÃ´ táº£ | Textarea | copy key |
| validationBanner | lá»—i client | Banner | Pattern B string[] |
| create | táº¡o váº¥n Ä‘á» | Button | Pattern B Â· disabled chá»‰ creating |
| draftOffline | nhÃ¡p | Button | peer offline |

## Screens / zones (ids only)
- FR-00 Â· FR-01 Â· FR-02
- reviewUrl= (giá»¯ Design) file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field-reflect/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/phan-anh
- DES-GRID / LinErpListFilterBar: N/A phone

## API / tasks (ids only)
- FormModeâ†”API: GET patrol/sessions Â· GET integration/asset-types Â· POST ai-vision/uploads Â· files/* Â· POST ai-vision/detect Â· POST incident/incidents
- peer BFF: GET integration/users (forward if missing) Â· road-routes/search (cÃ³)
- real-data Â§A+Â§B: PASS Â· Delta PASS
- T-*: edit FieldReflectPage gates Â· T-BE=N/A invent

## UNCLEAR
- UNCLEAR-VALIDATE-B: Dev bá» canDetect/canCreate disable Â· Pattern B banner
- UNCLEAR-ALIGN-01: end align-mobile-to-mfe Â· SSOT MFE page

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-field-reflect-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-field-reflect-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-field-reflect.md
- submit-validate: D:/AI-QLBD/Linm.RMMS.Data/docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field-reflect/STATUS.md
