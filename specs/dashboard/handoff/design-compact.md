# Handoff compact — design

schemaVersion: 1
feature: dashboard
packKind: dashboard
role: design
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-17T17:00:00.000Z
contentHashPriorDataAnaly: sha256:0c1488357ccf88e8934c3fcb9a7925cc21aa9ae46624263ad2355a7597468b7f

## Decisions
- changeScope: new_page
- formPattern: Full page (Kind E KPI hub)
- report_standard: v1 · real_view_parity: v1 · chart_none P1
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report · /bao-cao/dashboard
- be: D:/AI-QLBD/Linm.RMMS.WebService · DOMAIN-MAP Report · cấm ERP · cấm api/v1/dashboard/*
- design_confirm: approve (autoApprove ON)
- open questions: OQ-01/02 GAP lock · patrol soft-degrade

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| asOf | Ngày tổng hợp | Date | DES-RPT-C · Xem=🔍 |
| tuan-duong.count | Tuần đường | KPI | soft-degrade patrol |
| tuan-kiem.count | Tuần kiểm | KPI | soft-degrade |
| bao-lu.count | Bão lũ | KPI | live disasters |
| tai-nan.count | TNGT | KPI | live |
| vi-pham.count | Vi phạm HL | KPI | live |
| cong-viec.count | Công việc | KPI | live |
| inc-open.count | Sự cố mở | KPI | drill incident |
| coverage.count | Coverage | KPI | GAP → 0 |
| road-len.count | Chiều dài QL | KPI | GAP → 0 |
| pci.count | PCI TB | KPI | pavement-condition |
| topIncidents | Top sự cố | grid RO | pageSize=5 |
| map.markers | Mini map | Map | Leaflet |

## Screens / zones (ids only)
- DES-DSH-HDR · FILTER · TB · KPI6 · KPI4 · TABS · PANEL · MAP · TOP · NAV · P2
- DES-RPT-A · DES-RPT-C · DES-RPT-F (chart_none)
- formPattern=Full · LeaveConfirmModal
- reviewUrl=file:///D:/AI-QLBD/Linm.RMMS.Data/specs/dashboard/ui/prototype/dashboard-prototype.html
- peerStdUrl=http://localhost:9311/bao-cao/nhat-ky-tuan-duong
- real_view_parity=v1

## API / tasks (ids only)
- Reuse ReportQueryController + IncidentsController
- export check-in toolbar · config FULL
- next=/agent-sa

## UNCLEAR
- Coverage % formula (SA · GAP lock)
- Road-len nguồn asset (GAP lock)

## Full paths (Read only if needed)
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/dashboard/ui/design.md
- prototype: D:/AI-QLBD/Linm.RMMS.Data/specs/dashboard/ui/prototype/dashboard-prototype.html
- po: D:/AI-QLBD/Linm.RMMS.Data/specs/dashboard/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/dashboard-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/dashboard-real-data.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/dashboard/STATUS.md
