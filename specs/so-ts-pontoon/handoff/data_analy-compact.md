# handoff-compact — data_analy · so-ts-pontoon

| | |
|--|--|
| schemaVersion | `1` |
| role | `data_analy` |
| feature | `so-ts-pontoon` |
| title | Sổ TS — Cầu phao |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_7016336c` |
| typeCode | `PONTOON` |
| dump | `tbl_pontoon_bridge` |
| clusterUi | `crossing` · tile `t05` |
| prefix | `CP-` |
| contentHash | `sha256:67f93e158eebae7ad4d0dd4818a73f93761b88c8bbbf339d6f1dc95c469e31c30` |
| headerFingerprint | `sha256:274740e703cdc983a9596c332d5b72193abd47333e9031e5b4c129d7dbca8e61` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |
| analyzedAt | `2026-09-01T20:00:00.000Z` |

## Artifacts

| Kind | Path |
|------|------|
| control-hint | `specs/_data-analy/features/so-ts-pontoon-control-hint.md` |
| real-data | `specs/_data-analy/features/so-ts-pontoon-real-data.md` |
| CTX | `docs/context/features/so-ts-pontoon.md` |
| parent | `docs/context/features/so-ts-type-grid.md` |
| fields | `docs/context/features/import-gov-asset-fields.md` |
| demo | `Linm.RMMS.Demo/src/demo/features/asset-demo.html` |

## Live bind (1-liner)

- API: `api/v1/asset/road-assets` (+ BFF) · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*`
- List live: `/so-ts?type=PONTOON` · STATUS alias `/so-ts-pontoon` (DEFER Navigate)
- Form: reuse S-META · S-ROUTE · S-LOC-POINT · S-NAME · S-ATTR · S-GPS · **cấm** fork · **cấm** tab legacy
- Name: `name` ← `name_pontoon_bridge` · point: ẩn `kmTo` · ẩn SL/ĐVT/`type`
- Count cite: gov-vn **2** · sample `CP-378806` / `Cầu phao Sông Hóa`

## GAP (PO must see)

| ID | One-liner |
|----|-----------|
| GAP-SOTS-COL-01 | Profile cột PONTOON + hide kmTo/SL/type |
| GAP-SOTS-FORM-01 | S-ATTR editable đủ dump §4 |
| GAP-SOTS-REUSE-01 | Section reuse · cấm fork form |
| GAP-PON-NAME-01 | name ← name_pontoon_bridge · cấm IsWeak→đoạn |
| GAP-PON-SPEC-01 | dumpSpecLabels thiếu width/length/type/level keys |
| GAP-PON-POINT-01 | ẩn kmTo · cấm ép lytrinh `"0"` |
| GAP-PON-ROUTE-01 | alias `/so-ts-pontoon` DEFER Design |
| GAP-PON-LOOKUP-01 | Dropdown/seed level_work_id · pontoon_bridge_type_id |
| GAP-PON-LEAVE-01 | LeaveConfirmModal · cấm native confirm |

## Attr keys (dump §4)

`name_pontoon_bridge` · `name_river` · `level_work_id` · `width_pontoon_bridge` · `length_pontoon_bridge` · `pontoon_bridge_type_id` · `operational_load`

## Zones

List A/B/C/D Kind B · Form CatalogFormShell 5 cols · map: none

## Next

| Role | Need |
|------|------|
| **PO** | requirement từ Delta + open Q lookup/alias/flatten |
| Design | control-map · prototype · reviewUrl |
| SA | path giữ · dumpSpecs vs flatten · lookup |

## Cấm (compact)

Demo/localStorage SSOT · ERP.* · seed giả · fork AssetFormPage · tab Chi tiết/Bảo trì/Tệp · invent map canvas
