# Dev — Implement — traffic-sign-type

| Field | Value |
|-------|-------|
| feature | `traffic-sign-type` |
| title | Loại biển báo (mã QCVN 41) |
| role | `dev` · `/agent-dev` |
| status | **done** |
| changeScope | `new_page` (verify/align live scaffold) |
| packKind | `master` · Kind B · Slideout |
| taskId | `task_299e42ce` |
| contentHash | `sha256:e3aada6d5b40ee2b06635701491bbf3cca71444f95c42b42bbc1bc9d0f03ddbb` |
| route_confirm | `route_a` · `/mas/loai-bien-bao` |
| mfeStdUrl | `http://localhost:9318/mas/loai-bien-bao` |
| peerStdUrl | `http://localhost:9318/mas/loai-tai-san` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Master` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Integration · **cấm ERP.*** |
| autoApprove | ON |
| e2eQa | ON (queued `/agent-qa*` only — **cấm** e2e @ Dev) |
| updatedAt | `2026-09-06T02:45:00.000Z` |

## Delta vs TL task

| Area | Action |
|------|--------|
| List/grid/toolbar/config/history | Keep live Kind B · align filter labels + wrap CSS |
| Filter | `LinErpListFilterBar` · search + groupCode ← init-data · `flex: 1 1 180px` |
| Form | Slideout 2 cột · footer Lưu/Hủy · LeaveConfirmModal · code lock edit |
| BE/BFF | Verify API-01…08 + proxy · **no** new Schema (Step 4b N/A) |
| Seed/icon | Keep gov-vn · icon NULL ok · **cấm** invent |

## FE surfaces

| Path | Notes |
|------|-------|
| `src/pages/TrafficSignTypeListPage/TrafficSignTypeListPage.tsx` | LinPageLayout · LinCatalogDataGrid · filter · toolbar FULL · ui-schema · history stub · delete Modal `stacked` |
| `…/TrafficSignTypeFormModal.tsx` | Slideout · `data-form-cols=2` · LeaveConfirm · group Dropdown ← init |
| `…/TrafficSignTypeListPage.module.css` | GAP-P2-LAYOUT-06 flex · filter leadField wrap-safe |
| `src/services/trafficSignType/*` | BASE `/integration/traffic-sign-types` |
| `src/pages/TrafficSignTypeFormPage/*` | redirect → `?form=` deep-link only |

## BE / BFF (align only)

| Piece | Path |
|-------|------|
| API | `TrafficSignTypesController` · `api/v1/integration/traffic-sign-types` |
| Service | `TrafficSignTypeService` · code keep-case (`NormalizeCode` trim) · Update **không** đổi `Code` · soft delete |
| Entity | `TrafficSignTypeEntity` · `rmms_traffic_sign_types` |
| BFF | `TrafficSignTypesBffController` proxy-only |
| Migration | Schema already shipped · **Step 4b skipped** (SA/TL) |
| DOMAIN-MAP | `traffic-sign-type` → Integration |

## Permissions

`master.traffic-sign-types.read|create|update|delete` (+ write alias) · catalogKind live `traffic-sign-types`.

## T-* Dev checklist

| id | Result |
|----|--------|
| T-CTX-01 | PASS — context + DOMAIN-MAP + filter-bar.md |
| T-BE-CRUD/INIT/UISCHEMA | PASS verify |
| T-BFF-01 · T-PERM-01 · T-SEED-01 | PASS verify · no invent seed |
| T-UI-LIST/FILTER/CFG/FORM/LEAVE/ACT | PASS · filter wrap CSS fix |
| T-UI-LKP/FIELD/PROD/UX/RESP/HIST | PASS · History Modal stub DEFER |
| T-QA-* | pending QA role |

## Build

| Gate | Result |
|------|--------|
| MFE `yarn build` | **PASS** (webpack OK · chunk `traffic-sign-type-list-page`) |
| BE `dotnet build` API | **PASS** 0 warn/err |
| BE Integration BFF | **PASS** 0 warn/err |
| e2e / start:std | **skipped** (queued QA) |

## QA verdict

| Field | Value |
|-------|-------|
| role | `qa` · `/agent-qa` · `task_17e9330a` |
| verdict | **PASS** |
| e2e | S0/S1/QA-20 **PASS** · `manifest.json` ok · channel=chrome |
| screens | `specs/traffic-sign-type/qa/screens/{S0,S1,QA-20}.png` |
| handoff | `handoff/qa-compact.md` · next **review** · **cấm** phase=done |
| notedAt | `2026-09-06T02:55:00.000Z` |

## Debt

- `isActive` UI = checkbox (peer asset-type) — controlHint Switch; no Master Switch wire yet
- History = `LinCatalogHistoryModal` stub (DEFER — cấm invent history API)
- catalogKind wire = `traffic-sign-types` (live plural) · slug feature = `traffic-sign-type`

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev |
| skillVersion | 2026.08.25.01 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.05.8 |
| schemaVersion | 1 |
| generatedAt | 2026-09-06T02:45:00.000Z |
