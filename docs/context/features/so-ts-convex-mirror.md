# Sổ TS — Gương cầu / long môn

> **Slug:** `so-ts-convex-mirror` · **type:** `CONVEX_MIRROR` · **cluster:** `atgt_point` · ô `t31`  
> **Parent SSOT:** [`so-ts-type-grid.md`](so-ts-type-grid.md) · fields [`import-gov-asset-fields.md`](import-gov-asset-fields.md)  
> **Filter bar:** [`so-ts-convex-mirror-filter-bar.md`](so-ts-convex-mirror-filter-bar.md)  
> **Mẫu:** `docs/img/gov-mau-tai-san/28-moc_dbvn.road_sphere_mirror-list.png` · `28-moc_dbvn.road_sphere_mirror-detail.png`  
> **Route:** `/so-ts?type=CONVEX_MIRROR` · alias `/so-ts-convex-mirror` → Navigate live · form `/so-ts/tao-moi?type=CONVEX_MIRROR` · `/so-ts/sua?id=`  
> **API:** `api/v1/asset/road-assets` · **cấm** ERP.* · **cấm** invent `api/v1/so-ts/*`  
> **Cấm** tab legacy · **cấm** fork form — reuse section S-META / S-ROUTE / S-LOC-POINT / S-NAME / S-ATTR(9) / S-GPS

## DoD

1. Grid profile CONVEX_MIRROR · hide `type`/`kmTo` · ensure dump cols (GAP-SOTS-COL-01)
2. Form S-ATTR 9 attr editable LOOKUP/Number · ẩn kmTo · qty←total_number_post
3. init-data LOOKUP: assetTypeMsts · shapeCutPosts · materialPosts · locationPosts
4. LeaveConfirmModal + useAlert · History Modal · cấm native dialog

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-01T16:07:56.917Z` |
| mobile | — | — | — |
