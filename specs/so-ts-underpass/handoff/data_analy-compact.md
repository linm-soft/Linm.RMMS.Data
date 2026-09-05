# handoff-compact — data_analy · so-ts-underpass

| | |
|--|--|
| schemaVersion | `1` |
| role | `data_analy` |
| feature | `so-ts-underpass` |
| title | Sổ TS — Hầm chui dân sinh |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_3deb2a56` |
| typeCode | `UNDERPASS` |
| dump | `tbl_underpass_box` |
| clusterUi | `crossing` · tile `t06` |
| prefix | `CC-` |
| contentHash | `sha256:e0d055aba3a52b289144ba966e1c00448c1f54daf105b50bef00004d8355e2bd` |
| headerFingerprint | `sha256:c267ab7ecbe32162d2ea8be9518521aec8ef1bd031d6a751e30ab72c44c3c1fa` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |
| analyzedAt | `2026-09-01T11:10:00.000Z` |

## Artifacts

| Kind | Path |
|------|------|
| control-hint | `specs/_data-analy/features/so-ts-underpass-control-hint.md` |
| real-data | `specs/_data-analy/features/so-ts-underpass-real-data.md` |
| CTX | `docs/context/features/so-ts-underpass.md` |
| parent | `docs/context/features/so-ts-type-grid.md` |
| fields | `docs/context/features/import-gov-asset-fields.md` |
| demo | `Linm.RMMS.Demo/src/demo/features/asset-demo.html` |

## Live bind (1-liner)

- API: `api/v1/asset/road-assets` (+ BFF) · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*`
- List live: `/so-ts?type=UNDERPASS` · STATUS alias `/so-ts-underpass` (DEFER Navigate)
- Form: reuse S-META · S-ROUTE · S-LOC-POINT · S-NAME · S-ATTR · S-GPS · **cấm** fork · **cấm** tab legacy
- Name: `name` ← `tencongchui` / `name_underpass` · point: ẩn `kmTo` · ẩn SL/ĐVT/`type`
- Count cite: gov-vn ~490 · sample `CC-underpass_box_523453` · culvert «Cống chui dân sinh» · weight 625 · span 36m

## GAP (PO must see)

| ID | One-liner |
|----|-----------|
| GAP-SOTS-COL-01 | Profile cột UNDERPASS + hide kmTo/SL/type |
| GAP-SOTS-FORM-01 | S-ATTR editable đủ dump §4 |
| GAP-SOTS-REUSE-01 | Section reuse · cấm fork form |
| GAP-UP-NAME-01 | name ← tencongchui/name_underpass · cấm IsWeak→đoạn |
| GAP-UP-SPEC-01 | dumpSpecLabels thiếu attr keys |
| GAP-UP-POINT-01 | ẩn kmTo · cấm ép lytrinh `"0"` |
| GAP-UP-ROUTE-01 | alias `/so-ts-underpass` DEFER Design |
| GAP-UP-LOOKUP-01 | Dropdown/seed loại cống·thi công·kết cấu |
| GAP-UP-PREFIX-01 | Create IdCode align `CC-` (import/GIS) |
| GAP-UP-LEAVE-01 | LeaveConfirmModal · cấm native confirm |

## Attr keys (dump §4)

`tencongchui` · `culvert_type_id` · `name_underpass` · `construction_id` · `weight` · `number` · `width` · `height` · `crossing_length_culvert` · `structure_type_id` · `number_wingwall` · `material_wingwall_id` · `pavement_type_inside_underpass_id` · `area_pavement_inside_underpass` · `number_lighting` · `number_signboard` · `number_barrier`

## Zones

List A/B/C/D Kind B · Form CatalogFormShell 5 cols · map: none

## Next

| Role | Need |
|------|------|
| **PO** | requirement từ Delta + open Q lookup/alias/hide-low-fill/prefix |
| Design | control-map · prototype · reviewUrl |
| SA | path giữ · dumpSpecs vs flatten · lookup · `CC-` |

## Cấm (compact)

Demo/localStorage SSOT · ERP.* · seed giả · fork AssetFormPage · tab Chi tiết/Bảo trì/Tệp · invent map canvas
