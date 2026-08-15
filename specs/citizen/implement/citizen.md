# Implement — citizen

| Field | Value |
|-------|-------|
| feature | `citizen` |
| this role | `dev` · `/agent-dev` |
| status | `done` |
| changeScope | `edit_page` |
| packKind | `list` |
| gap | `crud_formtype` |
| mode | `fix_gaps` |
| taskId | `task_49b91f68` |
| prior · team_lead | `confirmed` · `task/citizen.md` · `task_02c1095b` |
| updatedAt | `2026-08-15T00:40:00.000Z` |
| autoApprove | **ON** |
| versionGate | rechecked |

> Scope P1: GAP-SA-CIT-Q01 + VAL + LKP road-route · **không** rewrite Kind B shell. **Cấm** Slideout/Resource. **Cấm** `ERP.*`.

## retry.ssot_rereview: **pass**

Live trước Write (`CitizenListPage` + `CitizenFormPage` + `citizenEndpoint` + `CitizenIncidentService` + BFF `BuildListPath`):

| Check | Live | Verdict |
|-------|------|---------|
| 1× `LinPageLayout` kind=catalog · cấm nested CatalogListShell | Có | **PASS** — giữ |
| `LinCatalogDataGrid` + kéo cột default ON | `resizable: true` | **PASS** — giữ |
| Footer `LinCatalogListPagination` | Có | **PASS** — giữ |
| Flex + skeleton | `showTableLoading` · `skeletonRows={8}` | **PASS** — giữ |
| Toolbar config | refresh · history · fa-cog · create · edit/view/delete | **PASS** — giữ |
| list_parity Kind B A–D | Header + filters + grid + pager | **PASS** shell |
| tree_master | n/a | **n/a** |
| Form full-page · 5 cột `data-form-cols="5"` · header chrome | `CitizenFormPage` | **PASS** · GAP-P2-FORM-GRID-05 closed 2026-08-15 |
| Zone B filter `road` SearchInput | Chỉ search + status | **GAP → fixed** |
| Form `road` SearchInput LKP | `Input` Text | **GAP → fixed** |
| FE/BE `?road=` exact | Missing | **GAP-SA-CIT-Q01 → fixed** |
| BE Road ∈ catalog · enum 5/6 · Source=`citizen` | ValidateRequired only | **GAP-SA-CIT-VAL → fixed** |
| BFF QueryString passthrough | as-is | **PASS** verify — không controller mới |
| Perm FE | `integration.citizen-incidents.*` | **PASS** — giữ |

Cùng surface P1 đã đóng hết (list filter + form LKP + BE query + VAL + FE param) — **không** chỉ patch 1 chỗ.

## Done this turn (`task_49b91f68`)

| Task | Result |
|------|--------|
| T-BE-01 / Q01 | `GET` + `GetListAsync(..., road?)` exact trim AND search |
| T-BE-VAL-01 | Road ∈ `rmms_road_routes.Code` IsActive · Status 5 · Type 6 · create/update Source=`citizen` · 422 VN |
| T-BE-CRUD-01 | CRUD giữ + Q01 + VAL · XCO GetById · **không** migration |
| T-BFF-01 | Proxy-only · `Request.QueryString` đã passthrough `road` |
| T-FE-API-01 | `getList` + localStorage fallback nhận `road` exact |
| T-UI-LIST-01 | Zone B SearchInput tuyến · filter → `page=1` · **không** rewrite A/C/D |
| T-UI-FORM-01 | Giữ full-page · **cấm** Input Text `road` · **2026-08-15** GAP-P2-FORM-GRID-05: 5 cột `data-form-cols="5"` + header chrome |
| T-UI-LKP-01 | `GET …/road-routes/search` · display `code — name` · persist **code** · fallback seed 38 |
| T-UI-FIELD-01 | Date UTC · GPS number · enum 5/6 · Road code |
| T-UI-PROD-01 | Seed `QL.1` · badge ≠ feedback |
| T-UI-UX-01 | Full page **5 cột** · header Quay lại/Hủy/Lưu · View = cùng form locked · **cấm** 2-cột Slideout |
| T-UI-ACT-01 | Filter road · Delete **giữ** |
| T-BE-02 | **n/a** |

## Build (REQUIRED)

```
yarn typecheck → PASS (2026-08-15 form 5-col)
yarn build → PASS (webpack 5.109.2, 3 size warnings)
dotnet build — không đụng BE this turn
```

BFF: không file mới — `CitizenIncidentsBffController.BuildListPath` forwards query as-is.

## Files (key)

| Layer | Path |
|-------|------|
| API | `CitizenIncidentsController` · `CitizenIncidentService` · `ICitizenIncidentService` |
| Public default status | `PublicIncidentsController` / alias → `received` (enum 5) |
| BFF | `CitizenIncidentsBffController` (verify) |
| MFE list | `pages/CitizenListPage/CitizenListPage.tsx` |
| MFE form | `pages/CitizenFormPage/CitizenFormPage.tsx` |
| Lookup | `services/citizen/lookups.ts` `ROAD_ROUTE_LOOKUP_CONFIG` |
| Endpoint/service | `services/citizen/endpoint.ts` · `citizenService.ts` · `demo/citizenStore.ts` |

## 2026-08-15 — GAP-P2-FORM-GRID-05 (type full)

Live `/integration/citizen/new` đã 2-cột Slideout (`1fr 1fr` · Email `span2` leftover). Adapt theo `form-field-grid-full-page.md` / AssetFormPage:

- `.fields` `repeat(5, minmax(0,1fr))` · `data-form-cols="5"` · medium 3 · small 2
- Header chrome: Quay lại trái · Hủy / Tạo mới|Lưu phải · **cấm** footer Lưu
- View = cùng fields locked (`.viewDisabled`) · **cấm** `<dl>`
- Mô tả / địa chỉ `spanFull` · hàng người báo 5 field 1 hàng

## Debt (OUT P1)

Kind G public / Leaflet / OTP / media presign / Incident adapter · `[RequirePermission]` TODO · History stub · `window.confirm` leave (GAP-DEV-ALERT-01).

## Handoff → QA

| Field | Value |
|-------|-------|
| Next | `/agent-qa` · `qa/scenarios.md` |
| mfeStdUrl | `http://localhost:9314/integration/citizen` |
| Smoke | filter `?road=QL.1` · form SearchInput tuyến · CRUD · 422 unknown road |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-dev |
| skillVersion | 2026.08.15.2 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.15.2 |
| rulesVersion | 2026.08.15.4 |
| generatedAt | 2026-08-15T08:40:00.000Z |
| versionGate | rechecked |
| taskId | `task_49b91f68` |
