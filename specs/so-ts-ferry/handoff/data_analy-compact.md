# handoff-compact — data_analy · so-ts-ferry

| | |
|--|--|
| schemaVersion | `1` |
| role | `data_analy` |
| feature | `so-ts-ferry` |
| title | Sổ TS — Bến phà |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_137dda50` |
| typeCode | `FERRY` |
| dump | `tbl_ferry_terminal` |
| clusterUi | `crossing` · tile `t03` |
| prefix | `PH-` |
| contentHash | `sha256:0737298d3ce0a14ae36a4c9dfb37563e315723a476c59d953737019260a5a2f4` |
| headerFingerprint | `sha256:58c00e1f58997b1effb970a6aaf3a1626625dd2f8783c11f260100336bf39291` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |
| analyzedAt | `2026-08-31T23:51:30.740Z` |

## Artifacts

| Kind | Path |
|------|------|
| control-hint | `specs/_data-analy/features/so-ts-ferry-control-hint.md` |
| real-data | `specs/_data-analy/features/so-ts-ferry-real-data.md` |
| CTX | `docs/context/features/so-ts-ferry.md` |
| parent | `docs/context/features/so-ts-type-grid.md` |
| fields | `docs/context/features/import-gov-asset-fields.md` |
| demo | `Linm.RMMS.Demo/src/demo/features/asset-demo.html` |

## Live bind (1-liner)

- API: `api/v1/asset/road-assets` (+ BFF) · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*`
- List live: `/so-ts?type=FERRY` · STATUS alias `/so-ts-ferry` (DEFER Navigate)
- Form: reuse S-META · S-ROUTE · S-LOC-POINT · S-NAME · S-ATTR · S-GPS · **cấm** fork · **cấm** tab legacy
- Name: `name` ← `name_ferry_terminal` · point: ẩn `kmTo` · ẩn SL/ĐVT/`type`
- Count cite: gov-vn **16** · sample `PH-782061` / `Phà Đại Nội`

## GAP (PO must see)

| ID | One-liner |
|----|-----------|
| GAP-SOTS-COL-01 | Profile cột FERRY + hide kmTo/SL/type |
| GAP-SOTS-FORM-01 | S-ATTR editable đủ dump §4 |
| GAP-SOTS-REUSE-01 | Section reuse · cấm fork form |
| GAP-FY-NAME-01 | name ← name_ferry_terminal · cấm IsWeak→đoạn |
| GAP-FY-SPEC-01 | dumpSpecLabels thiếu attr keys |
| GAP-FY-POINT-01 | ẩn kmTo · cấm ép lytrinh `"0"` |
| GAP-FY-ROUTE-01 | alias `/so-ts-ferry` DEFER Design |
| GAP-FY-LOOKUP-01 | Dropdown/seed loaibenpha·cấp·sông |
| GAP-FY-LEAVE-01 | LeaveConfirmModal · cấm native confirm |

## Attr keys (dump §4)

`name_ferry_terminal` · `loaibenpha` · `level_worlk_id` · `river_channel_name_id` · `number_of_ferries_at_terminal` · `operation_time` · `is_project_replacement` · `chieurongben` · `chieudailuoiben`

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
