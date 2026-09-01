# handoff-compact — data_analy · so-ts-interchange

| | |
|--|--|
| schemaVersion | `1` |
| role | `data_analy` |
| feature | `so-ts-interchange` |
| title | Sổ TS — Nút giao |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_d2903309` |
| typeCode | `INTERCHANGE` |
| dump | `tbl_intersection` |
| clusterUi | `crossing` · tile `t23` |
| prefix | `NG-` |
| contentHash | `sha256:65b62eed838d6077ebf0ff519ea67e2479d50d3ec49f754f056942ade05b112a` |
| headerFingerprint | `sha256:f4c1a09d45e43219aaa1c7b1c713846500e77b074fb3920f6b55afdf3d494fbe` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |
| analyzedAt | `2026-09-01T05:40:00.000Z` |

## Artifacts

| Kind | Path |
|------|------|
| control-hint | `specs/_data-analy/features/so-ts-interchange-control-hint.md` |
| real-data | `specs/_data-analy/features/so-ts-interchange-real-data.md` |
| CTX | `docs/context/features/so-ts-interchange.md` |
| parent | `docs/context/features/so-ts-type-grid.md` |
| fields | `docs/context/features/import-gov-asset-fields.md` |
| demo | `Linm.RMMS.Demo/src/demo/features/asset-demo.html` |

## Live bind (1-liner)

- API: `api/v1/asset/road-assets` (+ BFF) · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*`
- List live: `/so-ts?type=INTERCHANGE` · STATUS alias `/so-ts-interchange` (DEFER Navigate)
- Form: reuse S-META · S-ROUTE · S-LOC-POINT · S-NAME · S-ATTR · S-GPS · **cấm** fork · **cấm** tab legacy
- Name: `name` ← `name_intersection` · point: ẩn `kmTo` · ẩn SL/ĐVT/`type`
- Count cite: gov-vn ~6989 · sample `NG-intersection_526282` / `QL 1B`

## GAP (PO must see)

| ID | One-liner |
|----|-----------|
| GAP-SOTS-COL-01 | Profile cột INTERCHANGE + hide kmTo/SL/type |
| GAP-SOTS-FORM-01 | S-ATTR editable đủ dump §4 |
| GAP-SOTS-REUSE-01 | Section reuse · cấm fork form |
| GAP-IX-NAME-01 | name ← name_intersection · cấm IsWeak→đoạn |
| GAP-IX-SPEC-01 | dumpSpecLabels thiếu attr keys |
| GAP-IX-POINT-01 | ẩn kmTo · cấm ép lytrinh `"0"` |
| GAP-IX-ROUTE-01 | alias `/so-ts-interchange` DEFER Design |
| GAP-IX-LOOKUP-01 | Dropdown/seed type·giao với·hình dạng |
| GAP-IX-LEAVE-01 | LeaveConfirmModal · cấm native confirm |

## Attr keys (dump §4)

`name_intersection` · `intersection_type_id` · `intersect_with_id` · `intersection_shape_id` · `ketcau` · `traffic_signal_lights` · `median_strip` · `khoangcachvoinuttruoc` · `phuongthucdieukhien` · `differential_island_height`

## Zones

List A/B/C/D Kind B · Form CatalogFormShell 5 cols · map: none

## Next

| Role | Need |
|------|------|
| **PO** | requirement từ Delta + open Q lookup/alias/hide-low-fill |
| Design | control-map · prototype · reviewUrl |
| SA | path giữ · dumpSpecs vs flatten · lookup |

## Cấm (compact)

Demo/localStorage SSOT · ERP.* · seed giả · fork AssetFormPage · tab Chi tiết/Bảo trì/Tệp · invent map canvas
