# Báo cáo — form nguồn persist org-tree

**Skill:** `/rmms-form-input-org-tree` · **scope:** `report_source_mfe` · **km_fields:** `km_skip`  
**Confirm:** 2026-08-31  
**MFE form:** `Linm.Web.RMMS.Field`  
**Peer filter:** [`reports-org-filter-bar.md`](reports-org-filter-bar.md)

## Persist keys

`zoneOrgCode` · `zoneOrgName` · `vpOrgCode` · `vpOrgName` · `assigneeCode` · `assigneeOrgName` · `routeCode`  
Tuyến legacy: incident `routeName` · attendance/patrol `route` = `routeCode`.  
**Cấm** ô Cục · **cấm** `segmentId` · **cấm** invent cột km (`km_skip`).

## Forms

| Form | Entity | Báo cáo đọc |
|------|--------|-------------|
| `/su-co` Create/Edit | `IncidentEntity` | `/bao-cao` incidents |
| Chấm công slideout | `AttendanceLogEntity` | `/bao-cao/cham-cong` |
| `/td-tk` phiên tuần | `PatrolSessionEntity` | nk/tuan-kiem · tuan-duong · nk-td |

`assigneeName` trên sự cố = **người xử lý** (giữ). Đơn vị = `assigneeCode` + `assigneeOrgName`.

## Schema

`Schema_ReportSourceOrgTree` — 3 bảng · cặp Designer · nullable backfill.
