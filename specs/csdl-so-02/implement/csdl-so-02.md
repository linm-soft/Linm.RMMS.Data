# Dev implement — csdl-so-02 (CR PDF Wave A)

| Field | Value |
|-------|-------|
| feature | `csdl-so-02` |
| title | CSDL Sổ 02 — Nhật ký tuần đường (LocationText) |
| this role | `dev` · `/agent-dev` |
| status | **confirmed** |
| changeScope | `edit_page` |
| packKind | `list` |
| cr | `nktd-pdf-20260917` · Wave A |
| resource | `patrol-logs` |
| formNo | `02` |
| IdCode | `SO-` |
| route_confirm | `route_a` · `/csdl-so-02` + hub |
| mfeStdUrl | `http://localhost:9301/csdl-so-02` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=patrol-logs` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` |
| domain | **Asset** · `api/v1/asset/csdl-records?resource=patrol-logs` |
| taskId | `task_00facaea` |
| yarnBuild | **PASS** |
| dotnetBuild | **PASS** |
| e2eQa | ON (queued `/agent-qa*` only · **cấm** e2e ở Dev) |
| contentHashPrior | `sha256:3ddc42d7c4404f439925322953f28ffc9d3b263726ac6cf5216065751c19b4d6` |
| updatedAt | `2026-09-18T04:15:00.000Z` |

## Summary

Wave A `edit_page`: thêm `LocationText` (nvarchar 512) trên entry · OR-rule Km\|text · weather Textarea · list cột «Vị trí» · migration `Schema_CsdlSo02LocationText` · **giữ** API path · **cấm** reuse Sổ01 `Location`.

## FE (MFE Asset)

| Item | Note |
|------|------|
| Form | `CsdlSo02FormSlideout` — `locationText` Text cạnh Km · weather Textarea rows=3 maxLength=2000 · OR soft |
| List | `CsdlSo02Page` — cột `locationText` «Vị trí» luôn · empty «—» · `buildDynamicGridColumns` |
| DTO | `responseModel` / `requestModel` — `entries[].locationText` + record list projection |
| Filter-bar | Wrote `docs/context/features/csdl-so-02-filter-bar.md` từ live |
| File | sketchRef/mediaIds text-id · **GAP-SO02-FILE-01** |

## BE (Linm.RMMS.WebService)

| Item | Note |
|------|------|
| Entity | `CsdlBookEntryEntity.LocationText` · **không** map → `Location` |
| DTO | entry + request `LocationText` · record list `LocationText` projection |
| Validation | `ValidatePatrolLogEntries` — eventAt + (Km **OR** text) + weather |
| Map / list | prefer text else formatted Km · first entry |
| Migration | `20260918035504_Schema_CsdlSo02LocationText` (+ Designer) · AddColumn |
| UiSchema | seed field `locationText` «Vị trí» trên list `patrol-logs` |
| BFF | proxy only · path giữ |

## Gates

| Gate | Result |
|------|--------|
| T-BE-LOC-01 / T-FE-LOC-* | PASS |
| List config FULL · no leftover `const columns` | PASS |
| Kind D Slideout · OR · Textarea | PASS |
| yarn build | PASS |
| dotnet build | PASS |
| ERP.* / invent API | none |

## Debt

- **GAP-SO02-FILE-01** text-id · Wave B report park · Auth/org/XLS DEFER|OUT
- UiSchema DB đã save có thể cần Config reset để thấy seed `locationText` cột mới

## Verify

```
MFE: yarn build → PASS
BE:  dotnet build Linm.RMMS.WebService.sln → PASS (0 errors)
Migration: Schema_CsdlSo02LocationText pair present
```
