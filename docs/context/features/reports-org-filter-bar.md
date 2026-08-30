# Báo cáo MFE — org filter SSOT (Khu → VP → Đơn vị → Tuyến)

**MFE:** `Linm.Web.RMMS.Report` · **scope:** `one_mfe` · **km_range:** `km_skip`  
**Confirm:** `/rmms-filter-org` 2026-08-31  
**Shared FE:** `src/filters/RmmsOrgFilterFields.tsx` · `src/filters/rmmsOrgFilter.ts` · `src/services/report/orgFilterLookups.ts`  
**Form persist:** [`reports-form-org.md`](reports-form-org.md) · `/rmms-form-input-org-tree`  
**Pilot list:** `/mas/phan-khu` · [`org-route-scope-filter-bar.md`](org-route-scope-filter-bar.md)  
**Hub:** [`reports-filter-bar.md`](reports-filter-bar.md)  
**Leaf mẫu:** [`rpt-nhat-ky-tuan-kiem-filter-bar.md`](rpt-nhat-ky-tuan-kiem-filter-bar.md)

---

## Cascade (REQUIRED)

```
Cục = implicit DRVN · cấm ô filter
Khu → Văn phòng → Đơn vị → Tuyến
Đổi Khu → clear VP+ĐV · đổi VP → clear ĐV · ô trống = mọi con
```

Query keys (khi 🔍 / apply · page=1): `zoneOrgCode` · `vpOrgCode` · `assigneeCode` · `routeId`.  
**Cấm** `segmentId` trên bar (**GAP-ORS-CASCADE-01**).  
**Cấm** ô Km (`km_skip`).

---

## Pages applied

| Route | Page | Ghi chú |
|-------|------|---------|
| `/bao-cao` | hub | Bỏ Đoạn dump · cascade SSOT |
| `/bao-cao/nk/tuan-kiem` | Nhật ký tuần kiểm | primary |
| `/bao-cao/tuan-kiem` | Báo cáo tuần kiểm | sibling |
| `/bao-cao/tuan-duong` | Báo cáo tuần đường | sibling |
| `/bao-cao/nk-td` | Nhật ký tuần đường | sibling |
| `/bao-cao/cham-cong` … `/bao-cao/ktra-cau` | leaf có Tuyến | cùng `RmmsOrgFilterFields` |
| `/bao-cao/cong-van` | Công văn | Đơn vị document = `assigneeCode` → `orgUnitId` |

---

## BE

Hub resolver `ResolveHubRouteFilterAsync` — zone + VP + assignee → allow-list tuyến mẹ (0 gán = no-op).  
Wired GET/export: hub assets/incidents/checkins · **patrol-road · patrol-inspect · patrol-log-road · patrol-log-inspect**.  
Các leaf khác gửi query keys; apply SQL/hub follow-up nếu list chưa gọi resolver.
