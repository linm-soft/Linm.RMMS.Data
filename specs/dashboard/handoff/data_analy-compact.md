# Handoff compact — data_analy

schemaVersion: 1
feature: dashboard
packKind: dashboard
role: data_analy
status: blocked
skillVersion: 2026.09.05.03
writtenAt: 2026-09-17T16:45:00.000Z
contentHash: sha256:0c1488357ccf88e8934c3fcb9a7925cc21aa9ae46624263ad2355a7597468b7f

## Decisions
- changeScope: new_page
- formPattern: N/A (Kind E KPI hub · Full page)
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report · mfeStdRoute=/bao-cao/dashboard
- be: D:/AI-QLBD/Linm.RMMS.WebService · DOMAIN-MAP Report (cấm ERP)
- sourceFormReady: no — blocker patrol STATUS await_confirm
- open questions: GAP-DA-RPT-SRC-01 · GAP-DASH-COV-01 · GAP-DASH-ROADLEN-01 · GAP-F-DSH-01/02

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| asOf | Ngày tổng hợp | Date | filter bar |
| tuan-duong.count | Tuần đường | KPI | report/patrol-road totalCount · blocked nguồn |
| tuan-kiem.count | Tuần kiểm | KPI | report/patrol-inspect |
| bao-lu.count | Bão lũ | KPI | report/disasters |
| tai-nan.count | TNGT | KPI | report/traffic-accidents |
| vi-pham.count | Vi phạm HL | KPI | report/row-violations |
| cong-viec.count | Công việc | KPI | report/maintenance-summary |
| inc-open.count | Sự cố mở | KPI | incident/incidents?status=open |
| coverage.count | Coverage | KPI | GAP derived |
| road-len.count | Chiều dài QL | KPI | GAP asset |
| pci.count | PCI TB | KPI | report/pavement-condition |
| topIncidents | Top sự cố | grid RO | incidents open |
| map.markers | Mini map | Map | Leaflet |

## Screens / zones (ids only)
- DES-DSH-HDR · FILTER · TB · KPI6 · KPI4 · TABS · PANEL · MAP · TOP · NAV · P2
- reviewUrl= (Design sau unblock)
- peerStdUrl= http://localhost:9311/bao-cao/dashboard

## API / tasks (ids only)
- Reuse ReportQueryController + IncidentsController — cấm api/v1/dashboard/* ad-hoc
- real-data §A+§B: yes (written) · handoff PO: **no** (sourceFormReady=no)

## UNCLEAR
- Coverage % công thức (SA/PO)
- Chiều dài QL nguồn khi asset chưa done

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/dashboard-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/dashboard-real-data.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/dashboard/STATUS.md
