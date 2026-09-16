# Implement — nghiem-thu

| Field | Value |
|-------|-------|
| feature | `nghiem-thu` |
| this role | `dev` · `/agent-dev` |
| status | `done` |
| changeScope | `new_page` |
| packKind | `list` |
| featureKind | `B` |
| formPattern | **Full page** · `data-form-cols="5"` |
| taskId | `task_dda12f30` |
| skillVersion | `2026.09.05.03` |
| contentHash | `sha256:41b14359b00a0bacbd2f5e88ab9ed8f7604f962c4e4e58219bf9c1145b5ef4ea` |
| prior · team_lead | `confirmed` · `task/nghiem-thu.md` · `task_9bf1287f` |
| updatedAt | `2026-09-12T09:45:00.000Z` |
| autoApprove | **ON** |
| e2eQa | queued `/agent-qa*` only · **cấm** e2e Dev |
| mfeStdUrl | `http://localhost:9301/nghiem-thu` |
| mfeStdRoute | `/nghiem-thu` · `/nghiem-thu/new` · `/nghiem-thu/:id` |

> Kind B list + Full page form · Patrol domain · **cấm ERP.*** · **cấm** WO · **cấm** sessions reuse.

## Build (HARD)

| Gate | Result |
|------|--------|
| MFE `yarn build` (`Linm.Web.RMMS.Field`) | **PASS** · 0 errors · size WARN only (preexisting) |
| BE `dotnet build` Api | **PASS** · 0 errors |
| BE `dotnet build` Patrol.Bff | **PASS** · 0 errors |
| Overlay / webpack module exports | clean |

## Done this turn (`task_dda12f30`)

| Task | Result |
|------|--------|
| T-PERM-01 | FE `patrol.nghiem-thu.read\|write` + BE catalog · local mode OK |
| T-BE-MIG-01 | Migration `Schema_NghiemThu` · `NghiemThu` + `NghiemThuMedia` · mediaIds guid[] child |
| T-BE-CRUD-01 | API-00…05 · list/filter/page · get · create · update · soft-delete |
| T-BE-INIT-01 | `GET …/init-data` statuses 4 + templateTypes mau-01…10 |
| T-BE-UISCHEMA-01 | Registry+seed `catalogKind=nghiem-thu` |
| T-BFF-01 | `NghiemThuBffController` proxy + QueryString + init-data |
| T-FE-API-01 | `services/nghiemThu/*` · unwrap apiClient · BASE `/patrol/nghiem-thu` |
| T-UI-LIST-01 | Kind B shell · FULL toolbar · LinCatalogDataGrid · pagination · GAP-P2-LAYOUT-06 |
| T-UI-FILTER-01 | `LinErpListFilterBar` · search·status·route·templateType·from/to · 🔍 bar |
| T-UI-CFG-01 | `LinCatalogUiSchemaEditorModal` · `buildDynamicGridColumns` · **0** configHint |
| T-UI-FORM-01 | Full page C/E/V/Copy · 5 cột · FileService upload |
| T-UI-LEAVE-01 | `useFormLeaveGuard` + `LeaveConfirmModal` |
| T-UI-ACT-01 | Toolbar + row menu → form/API |
| T-UI-LKP-01 | road-route SearchInput · org RmmsOrgFormFields · enum init-data |
| T-UI-FIELD-01 | controlHint↔DTO (SA table) |
| T-UI-PROD-01 | End-user labels · badge Thêm/Sửa/Xem |
| T-UI-UX-01 | Spacing 4/8/16 · Full 5 cột |
| T-UI-RESP-01 | CSS D/T/M grid collapse · QA live review queued |
| T-UI-HIST-01 | `LinCatalogHistoryModal` · **0** window.alert |

## APIs

| Id | Method | Path |
|----|--------|------|
| API-00 | GET | `web-bff/api/v1/patrol/nghiem-thu/init-data` |
| API-01 | GET | `web-bff/api/v1/patrol/nghiem-thu` |
| API-02 | GET | `web-bff/api/v1/patrol/nghiem-thu/{id}` |
| API-03 | POST | `web-bff/api/v1/patrol/nghiem-thu` |
| API-04 | PUT | `web-bff/api/v1/patrol/nghiem-thu/{id}` |
| API-05 | DELETE | `web-bff/api/v1/patrol/nghiem-thu/{id}` |
| API-FILE | * | `web-bff/api/v1/files/*` (reuse) |

## Repos

| Layer | Path |
|-------|------|
| UI | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Field` |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol |

## QA verdict (`task_7d0037b7`)

| Field | Value |
|-------|-------|
| verdict | **PASS** |
| e2eQa | ON · docker + start:std :9304 · screens PASS |
| T-QA-* | CRUD/FORM/FILTER-01/02 **PASS** |
| mfeStdUrl | chốt `http://localhost:9304/nghiem-thu` |
| next | `/agent-review` · **cấm** phase=done |
| scenarios | `specs/nghiem-thu/qa/scenarios.md` · `handoff/qa-compact.md` |

## Debt / follow-ups (non-blocking Dev)

| Id | Note |
|----|------|
| Auth RequirePermission | Controllers still TODO stub (same Patrol debt) |
| Assignee live lookup | Required string; org SearchInput FE — BE no users API 422 yet |
| T-UI-RESP-01 live | **CLOSED QA** · PNG QA-FILTER-D/T/M |
| mfeLocalRoot | `/local-deploy-page` when board needs Pages switch |
| EF migrate apply | Migration added · apply on deploy env |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.05.8 |
| generatedAt | 2026-09-12T09:45:00.000Z |
| versionGate | ok |

---
<!-- Version meta: skillVersion=2026.09.05.03 · schemaVersion=1 · versionGate=ok -->
