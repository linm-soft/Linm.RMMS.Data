# Handoff compact — qa

schemaVersion: 1
feature: gis-patrol-map
packKind: map
role: qa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-30T15:58:45.000Z
taskId: task_e337c304
contentHash: sha256:ca2b1f0e2bf0bd97e92b99936fde30e4e92f1db00023191cf55297415b8d8247
changeScope: edit_page
formPattern: Full page + MapPopup Modal
formType: map
autoApprove: ON
e2eQa: ON

## Decisions
- changeScope: edit_page
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Gis · live `/gis/tuan-duong` · alias `/gis-patrol-map`
- runtimeUrl: `http://localhost:9302/gis-patrol-map` (package start:std) · packet :9301 occupied by Mobile — **cấm** kill worker
- be docker: D:/AI-QLBD/Linm.RMMS.WebService · up healthy
- T-QA-MAP-01 PASS · S0/S1/QA-20 PNG distinct · yarn build PASS
- compile fix: KM_POST tooltip + track click · declarations Layer.on/bindTooltip
- AutoCode: playwright abs import (Node 24) · map S1=tab · QA-20=person
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| filter.* | VP/Tuyến | Select | FILTER-BAR |
| list.personName | Họ tên | Text | REAL API |
| map.assignedSeg | Nét giao | MapPolyline | |
| map.kmPost | KM_POST | MapLayer | tooltip fix |
| map.pin | Pin | MapPin | after select |
| inspect.* | PIN-02 | Text | |
| inspect.photoIds | Ảnh | ImageGallery | FileService debt |

## Screens / zones (ids only)
- SCR-MAP / SCR-INSPECT / SCR-DETAIL
- NAV-GIS · FILTER-BAR · TAB-* · LIST-PERSON · MAP-HOST · LAYER-ASSIGNED · LAYER-KMPOST · MAP-POPUP-INSPECT · GALLERY-PATROL
- screens: specs/gis-patrol-map/qa/screens/{S0,S1,QA-20}.png · manifest ok=true
- runtimeUrl=`http://localhost:9302/gis-patrol-map` · live=`/gis/tuan-duong`

## API / tasks (ids only)
- T-QA-MAP-01 PASS · e2e runtime not static-only
- debt: FileService 404 seed · Auth stub · port SSOT :9301 vs start:std :9302

## UNCLEAR
- none

## Full paths (Read only if needed)
- scenarios: D:/AI-QLBD/Linm.RMMS.Data/specs/gis-patrol-map/qa/scenarios.md
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/gis-patrol-map/implement/gis-patrol-map.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/gis-patrol-map/STATUS.md
- prior compact: D:/AI-QLBD/Linm.RMMS.Data/specs/gis-patrol-map/handoff/dev-compact.md

## Handoff next
| Role | Do |
|------|----|
| review | findings · REVIEW-META · compact · **cấm** start từ task QA |

## Cấm
- ERP.* · phase=done · taskkill node/yarn rộng · start role khác · static-only PASS

<!-- compact schemaVersion=1 role=qa feature=gis-patrol-map taskId=task_e337c304 -->
