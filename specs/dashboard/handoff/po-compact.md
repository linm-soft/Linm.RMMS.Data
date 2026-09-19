# Handoff compact — po

schemaVersion: 1
feature: dashboard
packKind: dashboard
role: po
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-17T16:50:00.000Z
contentHashPriorDataAnaly: sha256:0c1488357ccf88e8934c3fcb9a7925cc21aa9ae46624263ad2355a7597468b7f

## Decisions
- changeScope: new_page
- formPattern: Full page (Kind E KPI hub)
- packKind: dashboard · report_standard: v1 · Leave: LeaveConfirmModal
- Report AC: YES · Grid AC: N/A
- sourceFormReady: yes (autoApprove report_source_form_confirm)
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report · /bao-cao/dashboard
- be: D:/AI-QLBD/Linm.RMMS.WebService · DOMAIN-MAP Report · cấm ERP · cấm api/v1/dashboard/*
- open questions: OQ-01/02 default GAP lock 0 · OQ-03 soft-degrade patrol

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| asOf | Ngày tổng hợp | Date | filter · Xem=🔍 |
| tuan-duong.count | Tuần đường | KPI | patrol-road · residual patrol |
| tuan-kiem.count | Tuần kiểm | KPI | patrol-inspect · residual |
| bao-lu.count | Bão lũ | KPI | disasters live |
| tai-nan.count | TNGT | KPI | traffic-accidents live |
| vi-pham.count | Vi phạm HL | KPI | row-violations live |
| cong-viec.count | Công việc | KPI | maintenance live |
| inc-open.count | Sự cố mở | KPI | incidents open live |
| coverage.count | Coverage | KPI | GAP-DASH-COV-01 → 0 |
| road-len.count | Chiều dài QL | KPI | GAP-DASH-ROADLEN-01 → 0 |
| pci.count | PCI TB | KPI | pavement-condition |
| topIncidents | Top sự cố | grid RO | open pageSize=5 |
| map.markers | Mini map | Map | Leaflet |

## Screens / zones (ids only)
- DES-DSH-HDR · FILTER · TB · KPI6 · KPI4 · TABS · PANEL · MAP · TOP · NAV · P2
- Pattern=Full page · devSlash=/agent-dev
- peerStdUrl=http://localhost:9311/bao-cao/nhat-ky-tuan-duong
- reviewUrl= (Design)

## API / tasks (ids only)
- Reuse ReportQueryController + IncidentsController
- chart_none P1 · export check-in toolbar
- LeaveConfirmModal on dirty filter

## UNCLEAR
- Coverage % formula (SA · GAP lock)
- Road-len nguồn asset (GAP lock)

## Full paths (Read only if needed)
- po: D:/AI-QLBD/Linm.RMMS.Data/specs/dashboard/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/dashboard-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/dashboard-real-data.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/dashboard/STATUS.md
