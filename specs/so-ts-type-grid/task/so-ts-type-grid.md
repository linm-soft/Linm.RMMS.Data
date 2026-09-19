# Team lead — Task — so-ts-type-grid

| Field | Value |
|-------|-------|
| feature | `so-ts-type-grid` |
| title | Sổ TS — grid/form theo loại (shell + section) |
| this role | `team_lead` · `/agent-team-lead` |
| status | `confirmed` |
| packKind | `list` (Kind **B** A–D+F + full-page form Kind **D**) |
| changeScope | `edit_page` |
| contentHash | `sha256:48428b7d526c6b127c4d82d0ac8f2cf8a10326f939e5f15da2daf69b9bbc2c5c` |
| solution_confirm | **approve** (autoApprove ON · `task_38fc194c`) |
| design_confirm | **approve** (autoApprove ON · `task_1123e84d`) |
| be_repo_confirm | **approved** (`Linm.RMMS.WebService` · Asset) |
| ui_repo_confirm | **approved** (`Linm.Web.RMMS.Asset`) |
| route_confirm | **route_a** — alias `/so-ts-type-grid` → live `/so-ts` · query `?type=` |
| autoApprove | **ON** |
| e2eQa | **ON** (queued `/agent-qa*` · **cấm** TL e2e / `start:std`) |
| taskId | `task_809d8bd7` |
| updatedAt | `2026-09-19T01:20:00.000Z` |
| prior · data_analy | **confirmed** · `handoff/data_analy-compact.md` · control-hint + real-data |
| prior · po | **confirmed** · `handoff/po-compact.md` · `po/requirement.md` |
| prior · design | **confirmed** · `handoff/design-compact.md` · `ui/design.md` |
| prior · sa | **confirmed** · `handoff/sa-compact.md` · `be/solution-discovery.md` |
| TL SSOT | `form-type-task-pack` · `agent-dev-assign` · `handoff-compact` · `po-design-grid-standard` · `filter-bar-layout-hard` · `list-form-quality-gates` · `tl-retry-ssot-rereview` |
| Recheck | edit_page · **`tl-retry-ssot-rereview`** trước Dev Write |

**Cấm:** ERP.* · invent `api/v1/so-ts/*` · seed CULVERT_X · tab legacy DRVN · fork S-* · nút Tìm riêng · native `window.confirm` · Step 4b / migration P1 · TL implement code / e2e / `yarn build` / `yarn start:std`.

---

## from design / solution (scope gate)

| Source | Path | Task dùng |
|--------|------|-----------|
| Design | `specs/so-ts-type-grid/ui/design.md` + reviewUrl | T-UI-LIST · T-FILTER · T-FORM · T-PROF · T-LEAVE · T-CHILD |
| Solution | `be/solution-discovery.md` | T-BE-VERIFY · T-DOC · gates TZ/XCO/SHARE |
| Prototype | `ui/prototype/so-ts-type-grid-list-prototype.html` | UI DoD parity |
| controlHint | `specs/_data-analy/features/so-ts-type-grid-control-hint.md` | T-FILTER · T-FORM fields |
| real-data | `specs/_data-analy/features/so-ts-type-grid-real-data.md` | hide-empty · gap-no-source |
| PO | `po/requirement.md` | AC đo được |
| Context | `docs/context/features/so-ts-type-grid.md` | clusters §3 · S-* SSOT |

**SA P1:** giữ `api/v1/asset/road-assets` · BFF proxy only · dumpSpecs JSON · Schema_* flatten **DEFER P2** · no migration.

---

## Platform SSOT

| Layer | Package / repo | Consume |
|-------|----------------|---------|
| **UI** | `MFE-COMMON/Linm.Web.Common.Components` | npm `@linm-soft-org/linm-web-common-components` |
| **BE** | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** | `RoadAssetCatalogHandler` · `rmms_road_assets` · **cấm ERP.*** |
| **Auth** | existing Asset road-assets perms | FE gate · BE `[RequirePermission]` verify |

### ssot.reuse (REQUIRED)

| Concern | Reuse | Cấm |
|---------|-------|-----|
| UI | `LinPageLayout` · `LinErpListFilterBar` · `LinCatalogDataGrid` · `CatalogFormShell` · LeaveConfirmModal | local Button/Input/Modal/Table · nút Tìm |
| Form sections | mount **S-META / S-ROUTE / S-LOC-POINT\|RANGE / S-NAME / S-ATTR / S-GPS** by cluster | fork / copy-paste 32 forms · tab Chi tiết/Bảo trì/… |
| HTTP | existing Asset `apiClient` → BFF → `api/v1/asset/road-assets` | invent `api/v1/so-ts/*` |
| Columns | shared `typeColumnProfiles` + children override | ad-hoc HIDE map per page forever |
| BFF | proxy only | business logic in BFF |
| Persist | DumpSpecs text JSON P1 | Schema_* flatten P1 · seed fake rows |

---

## Source assignment

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| `source.routes` | live `/so-ts` · alias `/so-ts-type-grid` → `/so-ts` · `?type=` · form full-page |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` |
| `source.domain` | **Asset** |
| `source.api` | `api/v1/asset/road-assets` (+ `/{id}` · POST · PUT · soft DELETE · init-data) |
| `source.bff` | proxy Asset road-assets · **cấm** new so-ts BFF controller |
| `source.layout` | `micro-src` |
| Demo | `Linm.RMMS.Demo/src/demo/features/asset-demo.html` (chrome only) |
| Context | `Linm.RMMS.Data/docs/context/features/so-ts-type-grid.md` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-type-grid/ui/prototype/so-ts-type-grid-list-prototype.html` |
| `mfeStdRoute` | `/so-ts-type-grid` |
| `mfeStdUrl` | `http://localhost:9301/so-ts-type-grid` |
| `peerStdUrl` | `http://localhost:9301/so-ts` |

### route_confirm (autoApprove=ON · locked)

| Option | Path | Note |
|--------|------|------|
| **A (locked)** | `/so-ts-type-grid` → `/so-ts` | Alias feature slug · list+form shell `?type=` · out `route_master` / `pavement` |
| B | standalone new page path | **không chọn** — reuse live `/so-ts` |
| C | custom | n/a |

AskQuestion (autoApprove=ON): `route_confirm=route_a` · `be_repo_confirm` · `ui_repo_confirm` · `2026-09-19T01:20:00.000Z`.

---

## API contract (from solution — reuse)

Base: `api/v1/asset/road-assets` · BFF proxy · FE qua Asset client.

| id | Method | Path | FormMode |
|----|--------|------|----------|
| API-LIST | GET | `/api/v1/asset/road-assets` | list · `?type=` · `?search=` · `?orgUnit=` · page |
| API-GET | GET | `/api/v1/asset/road-assets/{id}` | view/edit/copy load · XCO get_only |
| API-POST | POST | `/api/v1/asset/road-assets` | create |
| API-PUT | PUT | `/api/v1/asset/road-assets/{id}` | edit |
| API-DEL | DELETE | `/api/v1/asset/road-assets/{id}` | soft delete |
| API-INIT | GET | `/api/v1/asset/road-assets/init-data` | dropdowns |
| L-ROUTE | GET | integration `road-routes` search | S-ROUTE ×3 |
| L-TYPE | GET | integration `asset-types` search | type filter / S-META |

**Cấm** invent endpoint. Lookups = existing Integration only.

---

## Implement gates (from SA)

| Gate | Decision | Apply |
|------|----------|-------|
| TZ | **tz_na** | no new date TZ surface P1 |
| XCO | **xco_get_only** | GET/{id} |
| SHARE | **share_tenant** | `rmms_road_assets` · RoadAssetEntity |
| Step 4b | **N/A** | no new API · no migration P1 |
| dumpSpecs | JSON P1 | Schema_* flatten **DEFER P2** |

---

## DES-GRID / DES-FORM → Lin\*

| Zone | Component | DoD |
|------|-----------|-----|
| DES-GRID-A | `LinPageLayout` header | title Sổ tài sản · **cấm** Thêm trên A |
| DES-GRID-B | catalog toolbar | refresh · history stub · config · +Tạo · delete |
| DES-GRID-B-FILTER | `LinErpListFilterBar` | search · type · route* · km · orgUnit · **cấm** nút Tìm · apply → page=1 |
| DES-GRID-C0/C2/C3 | `LinCatalogDataGrid` | profile cột theo `?type=` · 3 tầng tuyến tách cột · hide-empty |
| DES-GRID-D | `LinCatalogListPagination` | 50/100/200/500 |
| DES-GRID-F | schema/config modal | optional · kind road-assets if live |
| DES-GRID-H | empty/toast | gap-no-source · CULVERT_X empty+toast |
| DES-FORM-Z1/Z2 | `CatalogFormShell` `data-form-cols=5` | Thông tin chung only · mount S-* by cluster |
| DES-LEAVE | LeaveConfirmModal | dirty leave · **cấm** native confirm |

---

## Live gap (TL audit · edit_page)

| Surface | Live (`/so-ts`) | TL task |
|---------|-----------------|---------|
| Grid columns | fixed ~12 cols · không profile theo loại | **T-PROF-01** |
| Filter bar | may thiếu LinErpListFilterBar HARD | **T-FILTER-01** |
| Form sections | dumpSpecs `<dl>` readonly · không S-* mount | **T-SEC-01** · **T-FORM-01** |
| Leave confirm | verify LeaveConfirmModal | **T-LEAVE-01** |
| Alias route | `/so-ts-type-grid` | **T-ROUTE-01** |
| DOMAIN-MAP slug | thiếu `so-ts-type-grid` → Asset | **T-DOC-01** |
| CULVERT_X child | CSV 0 | **T-CHILD-01** UI empty+toast |
| BE CRUD | live road-assets | **T-BE-VERIFY** no-op |
| Migration / Schema_* | — | **n/a** P1 |

---

## Task pack (canonical)

| id | layer | deps | status | skills | DoD (slim) |
|----|-------|------|--------|--------|------------|
| **T-ROUTE-01** | ui | route_a | pending | `/agent-dev` | Wire alias `/so-ts-type-grid` → `/so-ts` · `mfeStdUrl` works |
| **T-PROF-01** | ui | SA · Design | pending | `/agent-dev` | Shared `typeColumnProfiles` · children override · hide-empty fill% · ẩn type khi `?type=` · 3 cột route |
| **T-FILTER-01** | ui | T-PROF | pending | `/agent-dev` · filter-bar-layout-hard | `LinErpListFilterBar` · search must work · **cấm** nút Tìm · type/route/km/orgUnit |
| **T-SEC-01** | ui | CTX §2 | pending | `/agent-dev` | Extract/reuse S-META/ROUTE/LOC-POINT\|RANGE/NAME/ATTR/GPS · **cấm** fork |
| **T-FORM-01** | ui | T-SEC | pending | `/agent-dev` · list-form-quality-gates | Full-page CatalogFormShell 5col · C/E/V/Copy · dumpSpecs→S-ATTR fields · **cấm** tab legacy · cluster mount |
| **T-LEAVE-01** | ui | T-FORM | pending | `/agent-dev` | LeaveConfirmModal dirty · **cấm** `window.confirm` |
| **T-CHILD-01** | ui | T-PROF | pending | `/agent-dev` | gap-no-source / CULVERT_X: empty grid + toast · **cấm** seed |
| **T-DOC-01** | docs | SA | pending | — | DOMAIN-MAP add `so-ts-type-grid` → Asset · CTX cite `asset/road-assets` |
| **T-BE-VERIFY** | api | — | **n/a** | — | CRUD live · **không** `/new-endpoint` · **không** migration |
| **T-BE-MIG** | api | — | **n/a** | — | Schema_* flatten **P2** |
| **T-QA-01** | qa | UI done | pending | `/agent-qa*` | scenarios + e2e queued · **cấm** TL chạy |

**devSlash:** `/agent-dev` · assign FE `Linm.Web.RMMS.Asset` · BE verify-only Asset.

---

## T-ROUTE-01 — detail

| | |
|--|--|
| `source.repo` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| `ssot.zones` | route table · `mfeStdRoute` |
| DoD | |
| - [ ] | Register `/so-ts-type-grid` alias → same list/form as `/so-ts` |
| - [ ] | Preserve `?type=` · out clusters `route_master` / `pavement` (redirect/toast per Design) |
| - [ ] | **cấm** duplicate page tree |

---

## T-PROF-01 — typeColumnProfiles

| | |
|--|--|
| `source.repo` | MFE Asset · module shared profiles |
| GAP | GAP-SOTS-COL-01 |
| DoD | |
| - [ ] | Module `typeColumnProfiles` (shared) + per-type children override |
| - [ ] | hide-empty: cột dump fill 0% → ẩn |
| - [ ] | `?type=` → ẩn cột Loại TS |
| - [ ] | POINT cluster → ẩn kmTo nếu dump không có |
| - [ ] | route / routeNamed / routeSegment **tách 3 cột** · **cấm** gộp 1 ô DRVN |
| - [ ] | **cấm** invent cột ngoài dump / mẫu |

---

## T-FILTER-01 — LinErpListFilterBar

| | |
|--|--|
| Zones | DES-GRID-B-FILTER |
| Fields | search (SearchTextInput) · type (SearchInput asset-type · ẩn nếu `?type=`) · route×3 · kmFrom/kmTo · orgUnit tree |
| DoD | |
| - [ ] | `LinErpListFilterBar` only · **cấm** nút «Tìm» riêng |
| - [ ] | Search apply → page=1 · server `?search=` |
| - [ ] | filter-bar-layout-hard PASS |
| - [ ] | **cấm** invent filter API |

---

## T-SEC-01 — section reuse

| | |
|--|--|
| GAP | GAP-SOTS-REUSE-01 |
| Sections | S-META · S-ROUTE · S-LOC-POINT \| S-LOC-RANGE · S-NAME · S-ATTR · S-GPS |
| DoD | |
| - [ ] | One shared section module set · mount by CTX cluster §3 |
| - [ ] | Point → S-LOC-POINT · Range → S-LOC-RANGE · **cấm** empty section mount |
| - [ ] | S-ATTR binds dumpSpecs.* controls (Select/SearchInput/Number/Text) — **không** chỉ `<dl>` |
| - [ ] | **cấm** copy-paste form per typeCode |

---

## T-FORM-01 — CatalogFormShell

| | |
|--|--|
| Zones | DES-FORM-Z1 · Z2 |
| Pattern | Full page · `data-form-cols=5` · Kind B/D |
| Modes | Create / Edit / View / Copy |
| DoD | |
| - [ ] | Chỉ body **Thông tin chung** · **cấm** tab Chi tiết / Dữ liệu TS / Bảo trì / Tệp / Ghi chú / Lịch sử |
| - [ ] | Wire API POST/PUT/GET · soft DELETE · init-data |
| - [ ] | View mode parity Design (không Input xám toàn form nếu Design = `<dl>`) |
| - [ ] | list-form-quality-gates PASS |
| - [ ] | **cấm** Modal/Slideout form P1 |

---

## T-LEAVE-01

| | |
|--|--|
| Zone | DES-LEAVE |
| GAP | GAP-SOTS-LEAVE-01 |
| DoD | |
| - [ ] | LeaveConfirmModal on dirty navigate/back |
| - [ ] | Delete confirm = Lin confirm · **cấm** `window.confirm` |

---

## T-CHILD-01 — gap-no-source / CULVERT_X

| | |
|--|--|
| GAP | GAP-CULVERT-X-01 |
| DoD | |
| - [ ] | Types `gap-no-source` / CSV 0 → empty grid + toast |
| - [ ] | **cấm** seed / invent rows · **cấm** enqueue fake form |

---

## T-DOC-01 — DOMAIN-MAP + CTX

| | |
|--|--|
| GAP | GAP-SOTS-DOMAIN-01 · GAP-SOTS-API-DOC |
| Paths | `D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md` · feature context |
| DoD | |
| - [ ] | Add slug `so-ts-type-grid` → domain **Asset** |
| - [ ] | Cite live `api/v1/asset/road-assets` · CTX `so-ts` = alias doc only |
| - [ ] | **cấm ERP.*** |

---

## T-BE-VERIFY / T-BE-MIG

| id | status | Note |
|----|--------|------|
| T-BE-VERIFY | **n/a** | RoadAssets live · Dev smoke GET/POST/PUT/DELETE only · **không** Step 4b |
| T-BE-MIG | **n/a** P1 | dumpSpecs JSON keep · Schema_* **P2** |

---

## AC (PO slim → Dev DoD)

1. Grid: profile cột theo loại · hide-empty · route 3 cột · gap-no-source empty+toast.
2. Form: Thông tin chung only · S-* by cluster · LeaveConfirmModal.
3. Filter: LinErpListFilterBar · search works · **cấm** nút Tìm.
4. API: chỉ `asset/road-assets` · **cấm ERP.*** · **cấm** invent.
5. Out: `route_master` / `pavement` không dùng shell `/so-ts` generic.

---

## retry.ssot_rereview (trước Dev Write)

| # | Check | Expect |
|---|-------|--------|
| 1 | 1× `LinPageLayout` | PASS |
| 2 | Footer pagination 50/100/200/500 | PASS |
| 3 | Flex + skeleton LAYOUT-06 | PASS |
| 4 | Toolbar catalog | PASS |
| 5 | Filter LinErpListFilterBar · **cấm** nút Tìm | PASS |
| 6 | `LinCatalogDataGrid` + profiles | PASS |
| 7 | Form CatalogFormShell 5col · S-* | PASS |
| 8 | LeaveConfirmModal | PASS |
| 9 | **cấm** tab legacy · **cấm** ERP.* | PASS |
| 10 | Alias `/so-ts-type-grid` | PASS |

Fail any → Dev fix same pack · **cấm** mark done.

---

## Handoff

| Next | Artifact |
|------|----------|
| Dev | `implement/so-ts-type-grid.md` · `/agent-dev` · tasks T-ROUTE…T-LEAVE · T-CHILD · T-DOC |
| QA | `qa/scenarios.md` · e2eQa ON · **chỉ** `/agent-qa*` |
| compact | `handoff/team_lead-compact.md` |

**STATUS:** team_lead → **confirmed** · dev → **pending**.
