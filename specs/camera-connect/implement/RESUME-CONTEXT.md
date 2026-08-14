# RESUME-CONTEXT — camera-connect

> Compressed at stop · 2026-08-14T14:47:32.586Z

## Meta

| Field | Value |
|---|---|
| taskId | `task_4878d58c` |
| alias | `camera-connect` |
| title | [QA] Kết nối camera ITS (Hikvision ANPR) |
| source | `qldb_implement` |
| cursorAgentId | `—` |
| mfeRoot | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Camera` |
| beRoot | `—` |
| reason | user_stop_all |
| notes | slash=/agent-qldb-workflow · roleOnly=qa · chainRole=1 · startFrom=qa · startSlash=/agent-qa · autoApprove=0 · productRoot=D:/AI-QLBD/Linm.RMMS.Data · mfeSource=D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Camera · status=D:/AI-QLBD/Linm.RMMS.Data/specs/camera-connect/STATUS.md · demo=D:/AI-QLBD/Linm.RMMS.Demo/src/demo/features/camera-connect-demo.html · mfeStdUrl=http://localhost:9316/camera |

## Done / next (heuristic from worker stream)

- (no live events — dùng STATUS + implement MD)

## STATUS excerpt

```markdown
# STATUS — camera-connect

| Field | Value |
|-------|-------|
| feature | `camera-connect` |
| phase | `qa` |
| status | `pending` |
| changeScope | `edit_page` |
| packKind | `list` |
| gap | `crud_formtype` |
| mode | `fix_gaps` |
| taskId | `task_e98137ab` (prior `task_ba57a61f`) |
| demo | `D:/AI-QLBD/Linm.RMMS.Demo/src/demo/features/camera-connect-demo.html` |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/camera-connect.md` |
| planLive | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/21-CAMERA-HLS-WEBRTC-GATEWAY.md` |
| researchSdk | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/22-CAMERA-TCM403-SDK-RESEARCH.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Camera` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/cameras` · BFF `web-bff/api/v1/cameras` |
| skillVersion | `2026.08.10.2` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.10.2` |
| versionGate | `rechecked` |
| mfeStdRoute | `/camera` |
| mfeStdUrl | `http://localhost:9316/camera` |
| updatedAt | `2026-08-14T14:09:59.353Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | — |

## Confirms (chat)

| Key | Value | Notes |
|-----|-------|-------|
| design_confirm | **approve** | user 2026-08-09 · move implement real |
| be_repo_confirm | **approved** | `Linm.RMMS.WebService` |
| ui_repo_confirm | **approved** | `Linm.Web.RMMS.Camera` |
| solution_confirm | **approve** | model-standard: TCM403 **SDK-first** · ISAPI when HTTP · CRUD CameraDevice |
| live_gateway_confirm | **pending** | AskQuestion plan 21 §12 trước code MediaMTX |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 2.1 | design | demo = prototype | **confirmed** |
| 2.2 | sa | model + SDK/ISAPI | **done** |
| 3 | team_lead | task/camera-connect.md formType pack | **done** (task_ba57a61f re-audit · no new ACT/CRUD ids) |
| 4 | dev | implement/camera-connect.md | **done** (`task_e98137ab`) |
| 5 | qa | qa/scenarios.md | pending |
| 6 | next | P2-G0 live video gateway | **pending confirm** |

## Tasks

| id | page | role | status | notes |
|----|------|------|--------|-------|
| T-BE-01 | cameras connect ISAPI | dev | **done** | test · ingest · events · Digest |
| T-BE-EVENT-01 | CameraEvent persist | dev | **done** | EF `rmms_camera_events` · ingest SaveChanges · GET /events from DB |
| T-BE-02 | model + SDK connect | dev | **done** | Catalog · Login_V40 · `/models` |
| T-BE-03 | SDK CaptureJPEG | dev | **done** | `CaptureJPEGPicture_NEW` · snapshot `source=sdk` |
| T-BFF-01 | cameras proxy | dev | **done** | forward raw JSON (no envelope) |
| T-UI-FORM | /camera/new | dev | **done** | Kind C · models API · RTSP · notify URL · footer Save · View mode |
| T-UI-PARSE | cameraService unwrap | dev | **done** | BFF raw DTO · không dùng `unwrap` envelope |
| T-UI-LIVE-JPEG | Z3 snapshot | dev | **done** | data-URI JPEG sau Test / Bật live |
| T-UI-LIST-01 | /camera Kind B | dev | **done** | LinPageLayout · grid · pager (SSOT) |
| T-UI-ACT-01 | list actions | dev | **done** | toolbar + row menu → form/API |
| T-BE-CRUD-01 | CameraDevice CRUD | dev | **done** | list/get/create/update/soft-delete |
| T-BE-EF | CameraDevice | dev | **done** | was deferred · closed this turn |
| T-BFF-CRUD | cameras CRUD proxy | dev | **done** | GET/POST/PUT/DELETE |
| T-PERM-01 | camera.devices.* | dev | **done** | FE permissions stub |
| T-QA-CRUD-01 | CRUD smoke | qa | **done** | Create→Edit→View→Delete |
| T-BE-SDK-LISTEN | ITS plate callback | — | **deferred** | `COMM_ITS_PLATE_RESULT` |
| T-BE-SDK-OS | Docker Linux vs Win64 DLL | dev | **done** | GAP-CAM-SDK-OS · `REQUIRE_HIKVISION_SDK` default false · Linux `.so` DEFERRED |
| T-P2-G0 | MediaMTX POC | — | **next** | plan 21 · continuous live |
| T-P2-G1 | live/start + player | — | pending | sau G0 + confirm §12 |

## Verify (task_e98137ab · /agent-dev)

| Check | Result |
|-------|--------|
| retry.ssot_rereview live list | **PASS** — 1× LinPageLayout · LinCatalogDataGrid resize ON · LinCatalogListPagination · catalogToolbar · no CatalogListShell |
| Form Kind C | **PASS** — GET `/cameras/models` · RTSP port · ISAPI notify URL · footer Save/Cancel · View mode |
| yarn typecheck (Camera) | **PASS** |
| LINM_RUN_DEV_LOCAL_BUNDLE=1 yarn build | **PASS** (size warnings only) |
| dotnet build Release | **PASS** 0 Error(s) |
| BE Write | none — models/CRUD already `api/v1/cameras` · BFF `/models` |

## Verify (GAP-CAM-SDK-OS · 2026-08-14)

| Check | Result |
|-------|--------|
| Docker `compose` camera-host-sdk | **PASS** — Linux API `:5111` · BFF `ApiBase=host.docker.internal:5101` |
| Win64 API `:5101` health | **PASS** `sdkDllLoaded=true` `sdkOs=windows` |
| BFF `/cameras/health` | **PASS** proxies Win64 (`sdkDllLoaded=true`) |
| POST `/connect/snapshot` via BFF | **PASS** `source=sdk` CaptureJPEG JPEG bytes |
| Runtime Linux | `sdkDllLoaded=false` · `sdkOs=linux` · hint Win64 API `:5101` |
| CaptureJPEG lab | Win64 host API + BFF `RMMS_API_BASE=http://host.docker.internal:5101` |

## Verify (task_cam_event_persist_20260812)

| Check | Result |
|-------|--------|
| dotnet build Release | **PASS** 0 Error(s) |
| Migration `20260812160439_Schema_RmmsCameraEvents` | **applied** (docker API log → `__EFMigrationsHistory`) |
| POST ingest + GET events | **PASS** plate=`TEST-PERSIST-001` persisted |

## Verify (task_ba57a61f · crud_formtype)

| Check | Result |
|-------|--------|
| TL re-audit ACT/CRUD ids | **PASS** — no new ids (already on task MD) |
| retry.ssot_rereview live list/form | **PASS** |
| yarn typecheck (Camera) | **PASS** |
| LINM_RUN_DEV_LOCAL_BUNDLE=1 yarn build | **PASS** (size warnings only) |
| dotnet build Release | **PASS** 0 Error(s) |
| BE Write | none — DOMAIN Camera CRUD already at `api/v1/cameras` |
| QA-CRUD smoke (code) | **PASS** Create/Edit/View/Copy/Delete + row menu |

## Verify (task_6baf42c3)

| Check | Result |
|-------|--------|
| yarn typecheck (Camera) | **PASS** |
| yarn build (Camera) | **PA
```

## Resume instructions (for agent)

1. Đọc file này + STATUS.md + implement/{alias}.md.
2. **Không** làm lại bước đã confirmed/done trên STATUS.
3. Tiếp tục đúng phase hiện tại → hoàn tất tới Review / verify gate.
4. Cập nhật STATUS + implement MD khi xong từng phần.
5. Giữ cursorAgentId continuity nếu Agent.resume khả dụng.
