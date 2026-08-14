# Implement — camera-connect (CRUD formType · task_6baf42c3)

| Field | Value |
|-------|-------|
| feature | `camera-connect` |
| status | `done` |
| changeScope | `edit_page` |
| gap | `crud_formtype` |
| mode | `fix_gaps` |
| taskId | `task_e98137ab` (prior `task_ba57a61f` · `task_6baf42c3`) |
| updatedAt | 2026-08-14T21:15:00.000Z |
| versionGate | rechecked |

## retry.ssot_rereview: **pass** (re-audit live 2026-08-14 · task_e98137ab · **trước Write**)

Live files: `MFE-Source/Linm.Web.RMMS.Camera/src/pages/CameraListPage/CameraListPage.tsx` · `CameraFormPage.tsx` · `CamerasController.cs` · BFF `CamerasBffController.cs`.

| Check | Result |
|-------|--------|
| 1× `LinPageLayout` · cấm nested `CatalogListShell` | **PASS** |
| `LinCatalogDataGrid` + kéo cột default ON | **PASS** |
| Footer `LinCatalogListPagination` · cấm footerPagination / pageSizeBar / raw table | **PASS** |
| flex + skeleton | **PASS** |
| toolbar config | **PASS** |
| list_parity Kind B | **PASS** |
| tree_master? | n/a |
| form Kind C footer Save/Cancel · View readOnly | **PASS** |
| T-UI-ACT-01 inventory wired | **PASS** |
| T-BE-CRUD-01 list/get/create/update/soft-delete | **PASS** (no extra BE Write) |

**Write this turn:** Kind C field gaps (models API · RTSP · notify URL). List SSOT **không rewrite**.

checklist: `tl-grid-ssot` · `list_parity` · `tl-list-shell-height` · tree_master? n/a · form (Kind C footer Save)  
gaps fixed this turn: **GAP-P2-ACT-LIST-SHELL** · **GAP-P2-ACT-CRUD-API** · **GAP-P2-ACT-ROW-MENU** · **GAP-P2-ACT-TOOLBAR** · **GAP-P2-FORM-SAVE** · **GAP-P2-FORM-VIEW** · **GAP-P2-FORM-TOP-SAVE**  
then: **fix_all**

| Check | Result |
|-------|--------|
| 1× `LinPageLayout` (no nested `CatalogListShell`) | **PASS** |
| `LinCatalogDataGrid` + column resize default ON | **PASS** (`DEFAULT_CATALOG_LIST_TABLE_CONFIG` + `resizable: true`) |
| Footer `LinCatalogListPagination` | **PASS** · sizes 50/100/200/500 |
| flex + skeleton + **LAYOUT-06** | **PASS** |
| toolbar `catalogToolbar` | **PASS** · refresh · history · config · create · **delete** · view/edit |
| filter SearchTextInput — no Tìm btn | **PASS** |
| list_parity Kind B | **PASS** |
| tree_master? | n/a |
| form Kind C · footer Save/Cancel · View Đóng/Sửa/Sao chép | **PASS** |

## Done this turn (task_e98137ab · /agent-dev)

| Task | Result |
|------|--------|
| T-UI-FORM | Catalog `GET /cameras/models` · RTSP port · ISAPI notify URL trên Kind C |
| webpack DefinePlugin | `VITE_CAMERA_*` lab env |
| T-UI-LIST-01 | no rewrite (SSOT PASS) |
| BE | no write — DOMAIN Camera already at `api/v1/cameras` + BFF `/models` |
| Verify | typecheck + webpack build + BE Release **PASS** |

## Done this turn (task_6baf42c3 · crud_formtype)

| Task | Result |
|------|--------|
| T-UI-ACT-01 | Kind B list shell + toolbar/row menu → `/camera/new|:id` |
| T-BE-CRUD-01 | `CameraDevice` Entity · CRUD API · migration · BFF |
| T-PERM-01 | `camera.devices.*` FE stub |
| Form polish | API save · View mode · footer actions · bỏ Lưu local |
| Verify | typecheck + webpack build + BE Release **PASS** |

## Prior P1.5 (kept)

| Layer | What |
|-------|------|
| API connect | `GET /health` · `/models` · `POST /connect/test` · `/connect/snapshot` · ingest · events |
| SDK | `HikvisionSdkClient` — Login_V40 · CaptureJPEG |
| MFE connect | Test → auto snapshot · Bật live poll JPEG |

## Paths (confirmed)

| Layer | Path |
|-------|------|
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API | `api/src/RMMS.Service.Api/Domains/Camera/` |
| Entity | `api/shared/RMMS.Service.Persistence/Entities/CameraDeviceEntity.cs` |
| Migration | `20260810163000_Schema_RmmsCameraDevices` |
| BFF | `bff/domains/camera/LINM.RMMS.Camera.Bff/Controllers/CamerasBffController.cs` |
| MFE list | `pages/CameraListPage/CameraListPage.tsx` |
| MFE form | `pages/CameraFormPage/CameraFormPage.tsx` |
| Perm | `services/camera/permissions.ts` |
| Route prefix | `api/v1/cameras` |
| mfeStdRoute | `/camera` |
| mfeStdUrl | `http://localhost:9316/camera` |

**Cấm** ERP.* — void.

## Verify (task_e98137ab)

```
yarn typecheck → PASS
LINM_RUN_DEV_LOCAL_BUNDLE=1 yarn build → PASS (size warnings)
dotnet build Linm.RMMS.WebService.sln -c Release → PASS (0 Error(s))
```

## Verify (task_ba57a61f)

```
yarn typecheck → PASS
LINM_RUN_DEV_LOCAL_BUNDLE=1 yarn build → PASS (size warnings)
dotnet build Linm.RMMS.WebService.sln -c Release → PASS (0 Error(s))
```

## Verify (task_e98137ab)

```
yarn typecheck → PASS
LINM_RUN_DEV_LOCAL_BUNDLE=1 yarn build → PASS (size warnings)
dotnet build Linm.RMMS.WebService.sln -c Release → PASS (0 Error(s))
```

## Verify (task_6baf42c3)

```
yarn typecheck → PASS
LINM_RUN_DEV_LOCAL_BUNDLE=1 yarn build → PASS
dotnet build Linm.RMMS.WebService.sln -c Release → PASS (0 Error(s))
```

## Debt

| ID | Note |
|----|------|
| SD-AUTH | `[RequirePermission]` TODO BE |
| SD-PWD | PasswordEnc plain P1 · encrypt P2 |
| History API | window.alert stub |
| Schema editor | Config hint dialog P1 |
| P2-G0 | MediaMTX live gateway — plan 21 |
| OPS-SDK | Snapshot lab: **Win64 API :5101** + BFF `ApiBase=host.docker.internal:5101` — Docker Linux API → ISAPI `:80` Connection refused (stale msg “CaptureJPEG chưa wire” = old binary) |
| GAP-CAM-SDK-OS | Docker compose **must not** fail without `libhcnetsdk.so`. Default `REQUIRE_HIKVISION_SDK=false`. Linux load DEFERRED. |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-dev |
| skillVersion | 2026.08.10.2 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.10.2 |
| rulesVersion | 2026.08.10.3 |
| generatedAt | 2026-08-10T16:25:00.000Z |
| versionGate | rechecked |
| taskId | `task_e98137ab` |
