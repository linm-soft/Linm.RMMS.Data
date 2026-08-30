# Phân khu lý trình — form org-tree

**Page:** `OrgRouteScopeFormModal` · **route:** `/mas/phan-khu` · **testIdPrefix:** `rmms-org-route-scope-form`  
**Skill:** `/rmms-form-input-org-tree` · **scope:** `one_form` · **km_fields:** `km_skip`  
**Confirm:** 2026-08-31  
**MFE:** `Linm.Web.RMMS.Master`  
**Peer filter:** [`org-route-scope-filter-bar.md`](org-route-scope-filter-bar.md) · parent [`org-route-scope.md`](org-route-scope.md)

Create + Edit (cùng slideout): `RmmsOrgFormFields` thứ tự **Khu → VP → Đơn vị → Tuyến**.  
Km từ / Km đến **giữ** cột sẵn (`KmFrom`/`KmTo`) — không thêm / không đổi tên.

## Persist

| Cấp | Tab | Cột entity |
|-----|-----|------------|
| `zoneOrgCode` · `zoneOrgName` | Gán zone | parent `ZoneOrgCode` · tên JOIN GET |
| `vpOrgCode` · `vpOrgName` | Gán zone (cascade) + Đoạn * | segment `VpOrgCode` |
| `assigneeCode` · `assigneeName` | Gán zone (cascade) + Đoạn * | segment `AssigneeCode` |
| `routeCode` · `routeName` | Gán zone | parent `RouteCode` · tên JOIN GET |
| Km | Gán zone / Đoạn | `KmFrom`/`KmTo` sẵn có |

**Cấm** ô Cục · **cấm** invent `segmentId` trên list · **cấm** Schema cột km / cột org parent.  
Đổi Khu → clear VP+ĐV+Tuyến. Đổi VP → clear Đơn vị.

## Schema

Không thêm cột — parent + segment đã có mã. GET hydrate tên từ `org-units` / `road-routes` / `partner-units`.
