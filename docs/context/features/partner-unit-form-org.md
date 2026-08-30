# Đơn vị đối tác — form org-tree

**Page:** `PartnerUnitFormModal` · **route:** `/mas/doi-tac` · **testIdPrefix:** `rmms-partner-unit-form`  
**Skill:** `/rmms-form-input-org-tree` · **km_fields:** `km_skip`  
**Confirm:** 2026-08-31 — gắn Khu → VP → Tuyến · **bỏ ô Đơn vị** (chính bản ghi)  
**MFE:** `Linm.Web.RMMS.Master`  
**Parent:** [`partner-unit.md`](partner-unit.md)

Create + Edit: `RmmsOrgFormFields` `hideAssignee`. Cục ẩn. Đổi Khu → clear VP+Tuyến.

## Persist

| Key | Cột | Ghi chú |
|-----|-----|---------|
| `zoneOrgCode` · `zoneOrgName` | `ZoneOrgCode` · `ZoneOrgName` | nullable backfill |
| `vpOrgCode` · `vpOrgName` | `VpOrgCode` · `VpOrgName` | ⊆ Khu |
| Đơn vị | `Code` · `Name` | **không** ô SearchInput · `assigneeKind=PARTNER` |
| `routeCode` · `routeName` | `RouteCode` · `RouteName` | |

**Cấm** invent km / `segmentId`. Schema `Schema_PartnerUnitOrgTree` pair CLI.

## Schema

`Schema_PartnerUnitOrgTree` — `rmms_partner_units` AddColumn mã+tên Khu/VP/Tuyến · index Zone/VP/Route + IsActive.
