# Implement — csdl-bieu-08 (Dev)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-08` |
| title | CSDL Biểu 08 — Hệ thống ATGT |
| role | `dev` · `/agent-dev` |
| status | **done** |
| changeScope | `new_page` |
| packKind | `list` |
| resource | `traffic-safety` |
| formNo | `08` |
| IdCode | `AT-yyyyMMdd-nnnn` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-08` |
| hub | `/so-ts/csdl-so-sach?resource=traffic-safety` → alias `/csdl-bieu-08` |
| taskId | `task_96940f90` |
| contentHashPrior | `sha256:f972c82727726d256754d076435f9ef97c993b4f9844dc79e50b6415fcaf54be` |
| writtenAt | `2026-09-05T10:30:00.000Z` |
| autoApprove | ON |
| e2eQa | ON (queued `/agent-qa*` only — **cấm** e2e @ Dev) |

## Done (T-*)

| id | Result |
|----|--------|
| T-DM-01 | DOMAIN-MAP `csdl-bieu-08` → Asset |
| T-REN-01 | hub formNo ATGT=**08** · mốc→09 · kè→10 |
| T-CTX-01 | context sync · hub typed redirect |
| T-BE-01 | `CsdlBieu8Entity` + **11** child entities |
| T-BE-02 | Migration `Schema_CsdlBieu8` (`20260905102400`) |
| T-BE-03 | typed DTO flatten + join · type-change clear children |
| T-BE-04 | IdCode `AT-` via ResourceMap |
| T-BE-05 | list filter side + `assetType`/`type` + road/km |
| T-BFF-01 | proxy QS as-is (no orch) |
| T-PERM-01 | reuse `asset.csdl-records.*` |
| T-BE-UISCHEMA-01 | catalogKind `traffic-safety` registry |
| T-UI-LIST/FILTER/CFG/FORM/LEAVE/ACT/LKP/FIELD/PROD/UX | `CsdlBieu08Page` + Slideout shared+1 child · subset_by_type · LeaveConfirm · Q-TYPE-UX |
| T-OUT-01/02 | OUT/DEFER as pack |

## FE

- Route `/csdl-bieu-08` · Kind B list · Kind D Slideout 2col · **shared + 1 child** by `assetType`
- Filters: search · province · status · side · assetType · road-route · km — **cấm** nút Tìm riêng
- Hub card / `?resource=traffic-safety` → navigate alias (cấm generic `CsdlFormSlideout`)
- Peer deep-link `/so-ts?type=` theo filter assetType
- `LinCatalogUiSchemaEditorModal` + `buildDynamicGridColumns`

## BE

- API giữ `api/v1/asset/csdl-records?resource=traffic-safety`
- Persist: shell + `rmms_csdl_bieu8` + 11 children · **cấm** parent `*Json` · **cấm** wide 45
- Create/Update: require `assetType` + `side` (L/R/C/Both) · 1 matching child only

## Build gate

| Gate | Result |
|------|--------|
| MFE `yarn build` | **PASS** (webpack size warnings only) |
| BE `dotnet build` RMMS.Service.Api | **PASS** 0 err |
| e2e / start:std | **skipped** (QA queue) |

## Debt

- Migration apply DB (`ef database update`) — deploy ops
- CatalogUiSchema seed typed default — optional
- Auth perm wire DEFER
- org SearchInput / province master P2 · XLS OUT

## Cấm kept

ERP.* · invent API · detail* SSOT · wide 45 · Guid IdCode · merge Sổ TS · e2e @ Dev
