# Implement — csdl-bieu-09 (Dev)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-09` |
| title | CSDL Biểu 09 — Mốc lộ giới / GPMB |
| role | `dev` · `/agent-dev` |
| status | **done** |
| changeScope | `new_page` |
| packKind | `list` |
| resource | `boundary-markers` |
| formNo | `09` |
| columns | `17` · **2 section kind** |
| IdCode | `MK-yyyyMMdd-nnnn` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-09` |
| hub | `/so-ts/csdl-so-sach?resource=boundary-markers` → alias `/csdl-bieu-09` |
| peerSoTs | **none** · **cấm** merge Sổ TS |
| taskId | `task_b449f5f6` |
| contentHashPrior | `sha256:863490daf95d2c19ddad660fc05f901eaeb0248fb65961f9e96747ebcf5b04e4` |
| writtenAt | `2026-09-05T18:25:00.000Z` |
| autoApprove | ON |
| e2eQa | ON (queued `/agent-qa*` only — **cấm** e2e @ Dev) |

## Done (T-*)

| id | Result |
|----|--------|
| T-DM-01 | DOMAIN-MAP `csdl-bieu-09` → Asset |
| T-REN-01 | hub formNo **09** · title Mốc lộ giới / GPMB |
| T-CTX-01 | alias page + hub typed redirect |
| T-BE-01 | `CsdlBieu9Entity` + EF 1:1 |
| T-BE-02 | Migration `Schema_CsdlBieu9` (`20260905180000`) |
| T-BE-03 | typed DTO + join shell↔typed · stop detail* SSOT |
| T-BE-04 | IdCode `MK-` via ResourceMap |
| T-BE-05 | list filter `markerKind` + road/km/side |
| T-BFF-01 | proxy QS as-is (no orch) |
| T-PERM-01 | reuse `asset.csdl-records.*` |
| T-BE-UISCHEMA-01 | catalogKind `boundary-markers` registry + seed |
| T-UI-LIST/FILTER/CFG/FORM/LEAVE/ACT/LKP/FIELD/PROD/UX/RESP | `CsdlBieu09Page` + Slideout 17 · 2 section kind · LeaveConfirm · road-route · **cấm** peer Sổ TS |
| T-OUT-01/02 | XLS OUT · org P2 DEFER |

## FE

- Route `/csdl-bieu-09` · Kind B list · Kind D Slideout `data-form-cols=2` · section title RoadLimit↔GPMB
- Filters: search · province · status · side · markerKind · road-route · km — **cấm** nút Tìm riêng
- Hub `?resource=boundary-markers` → navigate alias
- `LinCatalogUiSchemaEditorModal` + `buildDynamicGridColumns` · **cấm** leftover `const columns`

## BE

- API giữ `api/v1/asset/csdl-records?resource=boundary-markers`
- Persist: shell + `rmms_csdl_bieu9` · **cấm** parent `*Json` · **cấm** 2 entity
- Create/Update: require MarkerKind · MarkerStructure · Side · MarkerQty≥1 · CompletedYear

## Build gate

| Gate | Result |
|------|--------|
| MFE `yarn build` | **PASS** (webpack size warnings only) |
| BE `dotnet build` RMMS.Service.Api | **PASS** 0 err |
| e2e / start:std | **skipped** (QA queue) |

## Debt

- Migration apply DB (`ef database update`) — deploy ops
- Auth perm wire DEFER
- org SearchInput / province master P2 · XLS OUT
- Designer.cs parity optional for `Schema_CsdlBieu9`

## Cấm kept

ERP.* · invent API · detail* SSOT · Guid IdCode · merge Sổ TS · e2e @ Dev
