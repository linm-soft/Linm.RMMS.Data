# Handoff compact — sa

schemaVersion: 1
feature: web-rmms-field-reflect
packKind: list
role: sa
status: confirmed
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T03:30:00.000Z
taskId: task_2164c9fb
contentHash: sha256:e678be9152069e48f353f88e9f4d377e20e4fd4ad5c8d4aa2c86bd995bc1e667
solution_confirm: approve
autoApprove: ON
e2eQa: ON (queued /agent-qa*)

## Decisions
- changeScope: new_page · formPattern: Mobile full FR-00/01/02 · phone ≤430 · N/A ERP Modal · DES-GRID N/A
- domain: Incident (`incident`) · cite Patrol sessions · Integration asset-types · AiVision(+files) · DOMAIN-MAP row applied
- mfeStdRoute: /web-rmms-field-reflect · mfeStdUrl http://localhost:9301/web-rmms-field-reflect · product /field/reflect
- BFF: Mobile.Bff :5202 · mobile-bff/api/v1 · **cấm** web-bff · **cấm** ERP.* · **cấm** invent field-reflect path
- FormMode↔API: GET sessions · GET asset-types · uploads/files · detect · POST incidents
- DEC-MEDIA-01: CreateIncidentRequest.MediaIds=List FileService guids max10 · DetectionId opt · Description=checklist fold · HasGps=true · no Lat col (GAP-PGC-BE-01)
- HARD: GPS deny block · sessions live-only · checklist local · useFormOptions
- API Mới / entity / migration / Step 4b: **none** at SA
- Out: Me/feedback/cam-view · journal B–E · native edits
- next: /agent-team-lead · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| assetPick | loại TS | LookupGrid | GET integration/asset-types |
| kind | Hư/Mất/Hỏng | Segment | → IncidentType |
| checklist | checklist | CheckboxGroup | local → Description |
| photos | ảnh | PhotoRow | → FR-02 · MediaIds |
| detect | nhận diện | Button | POST ai-vision/detect · GPS≤30 |
| sessionStamp | ca/tuyến | Text RO | GET patrol/sessions |
| gpsLock | GPS | GPS | deny→block · HasGps |
| severity | mức | Select | LOOKUP_STATIC |
| description | mô tả | Textarea | + checklist |
| create | tạo vấn đề | Button | POST incident/incidents |
| draftOffline | nháp | Button | peer offline |

## Screens / zones (ids only)
- FR-00 · FR-01 · FR-02
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field-reflect/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-field-reflect
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks (ids only)
- FormMode↔API: sessions · asset-types · uploads/files · detect · incidents
- DEC-MEDIA-01: resolved · DOMAIN-MAP-REFLECT: resolved
- T-*: (team_lead) · devSlash=/agent-dev

## UNCLEAR
- (none SA) DOMAIN-MAP-REFLECT + MEDIA-01 resolved · PGC/ENTRY/CHK/SESS prior · GAP-PGC-BE-01 deferred (no MIG SA)

## Full paths (Read only if needed)
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field-reflect/be/solution-discovery.md
- design compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field-reflect/handoff/design-compact.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-field-reflect-real-data.md
- DOMAIN-MAP: D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field-reflect/STATUS.md
