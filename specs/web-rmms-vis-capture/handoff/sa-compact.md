# Handoff compact — sa

schemaVersion: 1
feature: web-rmms-vis-capture
packKind: list
role: sa
status: confirmed
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T04:35:00.000Z
taskId: task_75570f6c
contentHash: sha256:96ffc2878a4c6ad0367088c699203864c2e711b055ca68da8a59d696c8d4de97
solution_confirm: approve
autoApprove: ON

## Decisions
- changeScope: new_page · formPattern: Mobile full VIS · phone ≤430 · N/A ERP Modal · DES-GRID N/A
- domain: Incident (`incident`) · cite AiVision uploads+detect · Patrol sessions opt · DOMAIN-MAP row `web-rmms-vis-capture` applied
- mfeStdRoute: /web-rmms-vis-capture · mfeStdUrl http://localhost:9301/web-rmms-vis-capture · product /incident/vis
- nativeCite: SCREENS /incident/vis · Android #sc-vis-capture · DES-MOB-VIS-CAPTURE
- BFF: Mobile.Bff :5202 · mobile-bff/api/v1 · **cấm** web-bff · **cấm** ERP.* · **cấm** invent VisCapture path
- FormMode↔API: uploads* · GET patrol/sessions · POST ai-vision/detect · GET detections/{id} · POST incident/incidents
- DEC-DETECT-HOST: Vision `:5311` via BFF/API ServiceEndpoints · **cấm** on-device · **cấm** MFE `:5311` · **cấm** `:5301`
- DEC-DETECT-DTO: DetectAiVisionRequest ImageFileId|Url·Lat*·Lng*·AccuracyM*·Engine=P1 · resp Id→DetectionId
- DEC-PGC-BE-01: CreateIncidentRequest DetectionId·HasGps=true·Title*·RouteName*·IncidentType*·Status·RequestedAt · **no Lat**
- HARD: GPS deny|Acc>30 block · Skip=dismiss · live only · useFormOptions
- API Mới / entity / migration / Step 4b: **none** at SA
- Out: Me/feedback/cam-view · cam-patrol/det-hitl · journal B–E · native edits
- next: /agent-team-lead · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| photos | ảnh | PhotoRow | uploads init/PUT/complete |
| rowLoc | vị trí | ListRow RO | GPS + optional sessions |
| rowAcc | sai số | ListRow RO | AccuracyM ≤30 detect |
| detect | nhận diện | Button/auto | POST ai-vision/detect Engine=P1 |
| rowClass | phân loại | ListRow RO | DefectClass · cấm fake |
| rowSev | mức | ListRow+Badge | Severity |
| btnAttach | gắn sự cố | Button | CreateIncidentRequest · HasGps |
| btnSkip | bỏ qua | Button | dismiss only |
| gpsLock | GPS | GPS | deny→block |

## Screens / zones (ids only)
- VIS · DES-MOB-VIS-CAPTURE · #sc-vis-capture · peer INC-L · CAP
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-vis-capture/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-vis-capture
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks (ids only)
- FormMode↔API: uploads* · sessions · detect · detections/{id} · incidents
- DOMAIN-MAP-VIS · DETECT-HOST · PGC-BE-01: resolved
- T-*: (team_lead) · devSlash=/agent-dev · SESS→Dev/QA

## UNCLEAR
- UNCLEAR-SESS → Dev/QA empty toast · GPS-only · cấm itemsOrDemo
- (SA closed: DOMAIN-MAP-VIS · DETECT-HOST · PGC-BE-01)

## Full paths (Read only if needed)
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-vis-capture/be/solution-discovery.md
- design compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-vis-capture/handoff/design-compact.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-vis-capture-real-data.md
- DOMAIN-MAP: D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-vis-capture/STATUS.md
