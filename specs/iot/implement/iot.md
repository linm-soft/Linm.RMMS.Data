# Implement — iot (Dev)

| Field | Value |
|-------|-------|
| feature | `iot` |
| role | `dev` · `/agent-dev` |
| status | `done` |
| changeScope | `new_page` |
| packKind | `list` |
| formPattern | List Kind B · Form Full page `data-form-cols="5"` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Iot` |
| mfeStdRoute | `/iot` |
| mfeStdUrl | `http://localhost:9309/iot` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · Iot · **cấm ERP.*** |
| catalogKind | `iot-devices` |
| IdCode | `IOT-` |
| taskId | `task_9e4e0bb1` |
| updatedAt | `2026-09-05T04:45:00.000Z` |
| skillVersion | `2026.08.19.04` |
| be_repo_confirm | autoApprove |
| ui_repo_confirm | autoApprove |

## Build

| Layer | Command | Result |
|-------|---------|--------|
| MFE | `yarn build` @ `Linm.Web.RMMS.Iot` | **PASS** (size warnings only) |
| API | `dotnet build` @ `RMMS.Service.Api` | **PASS** 0 error |
| Migration | `dotnet ef migrations add Schema_RmmsIotDevices` | **PASS** + Designer pair |
| Overlay | n/a (no start:std this role) | — |

## T-* shipped

| id | Result |
|----|--------|
| T-BE-SCHEMA-01 | `IotDeviceEntity` · `rmms_iot_devices` · `Schema_RmmsIotDevices` |
| T-BE-CRUD-01 | `IotDevicesController` API-01…06 · soft delete · filters 1:1 |
| T-BE-INIT-01 | `GET …/devices/init-data` types+statuses |
| T-BE-UISCHEMA-01 | CatalogUiSchemaRegistry/Seed `iot-devices` |
| T-BFF-01 | `IotBffController` devices proxy + health |
| T-PERM-01 | BE `iot.devices.*` (doc/TODO) · FE `rmms-iot:devices:read\|write` |
| T-MENU-01 | ctx `rmms-iot-iot` ADMIN only (kept) |
| T-UI-LIST-01 | LinPageLayout + LinCatalogDataGrid + toolbar FULL |
| T-UI-FILTER-01 | LinErpListFilterBar V1–V5 · search/status/type/routeCode |
| T-UI-CFG-01 | LinCatalogUiSchemaEditorModal |
| T-UI-FORM-01 | Full page 5col · create/edit/view |
| T-UI-LEAVE-01 | LeaveConfirmModal + useFormLeaveGuard |
| T-UI-ACT-01 | toolbar/row → FormMode/API |
| T-UI-LKP-01 | SearchInput road-routes · Dropdown init-data |
| T-UI-FIELD-01 | field map 1:1 |
| T-UI-PROD-01 | end-user chrome (no Kind/GAP notes) |
| T-UI-UX-01 | 5col · spacing |
| T-UI-RESP-01 | CSS D/T/M grid collapse |
| T-UI-HIST-01 | LinCatalogHistoryModal · useAlert · no window.alert |

## APIs

| ID | Method | Path |
|----|--------|------|
| API-00 | GET | `/api/v1/iot/health` (kept) |
| API-01 | GET | `/api/v1/iot/devices` |
| API-02 | GET | `/api/v1/iot/devices/init-data` |
| API-03 | GET | `/api/v1/iot/devices/{id}` |
| API-04 | POST | `/api/v1/iot/devices` |
| API-05 | PUT | `/api/v1/iot/devices/{id}` |
| API-06 | DELETE | `/api/v1/iot/devices/{id}` soft |

FE BASE: `/iot/devices` · BFF `web-bff/api/v1/iot/devices/**`

## Debt / notes

- Auth `[RequirePermission]` still TODO stub (parity Camera/Partner).
- Apply migration on deploy: `Schema_RmmsIotDevices` — applied via docker rebuild @ QA.
- **QA verdict:** **PASS** · task `task_b2f79652` · S0/S1/QA-20 PNG · handoff Review pending · **cấm** phase=done.
- Document-history BE may be stub until shared history wired.
- Debt QA: GAP-QA-E2E-02 (yarn e2e-qa install) · GAP-QA-IOT-TSC-01 (typecheck).

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev |
| skillVersion | 2026.08.19.04 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.01.02 |
| generatedAt | 2026-09-05T04:45:00.000Z |
| versionGate | ok |
