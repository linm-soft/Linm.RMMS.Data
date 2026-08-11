# STATUS — camera-connect

| Field | Value |
|-------|-------|
| feature | `camera-connect` |
| phase | `dev` |
| status | `pending` |
| changeScope | `edit_page` |
| packKind | `list` |
| gap | `crud_formtype` |
| mode | `fix_gaps` |
| taskId | `task_6baf42c3` |
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
| updatedAt | `2026-08-10T16:20:47.943Z` |
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
| 3 | team_lead | task/camera-connect.md formType pack | **done** (ACT+CRUD) |
| 4 | dev | implement/camera-connect.md | **done** (T-UI-ACT-01 · T-BE-CRUD-01) |
| 5 | qa | qa/scenarios.md | **done** (CRUD smoke) |
| 6 | next | P2-G0 live video gateway | **pending confirm** |

## Tasks

| id | page | role | status | notes |
|----|------|------|--------|-------|
| T-BE-01 | cameras connect ISAPI | dev | **done** | test · ingest · events · Digest |
| T-BE-02 | model + SDK connect | dev | **done** | Catalog · Login_V40 · `/models` |
| T-BE-03 | SDK CaptureJPEG | dev | **done** | `CaptureJPEGPicture_NEW` · snapshot `source=sdk` |
| T-BFF-01 | cameras proxy | dev | **done** | forward raw JSON (no envelope) |
| T-UI-FORM | /camera/new | dev | **done** | Kind C · footer Save · View mode |
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
| T-P2-G0 | MediaMTX POC | — | **next** | plan 21 · continuous live |
| T-P2-G1 | live/start + player | — | pending | sau G0 + confirm §12 |

## Verify (task_6baf42c3)

| Check | Result |
|-------|--------|
| yarn typecheck (Camera) | **PASS** |
| yarn build (Camera) | **PASS** (size warnings only) |
| dotnet build Release | **PASS** 0 Error(s) |

## Next step — xem live (video liên tục)

Hiện tại Z3 = **poll JPEG** (SDK CaptureJPEG) — đủ “thấy ảnh”, **không** đủ FPS live.

| # | Việc | Artifact |
|---|------|----------|
| **1** | Confirm gate plan 21 §12 (engine · WebRTC/HLS · deploy) | AskQuestion |
| **2** | **P2-G0 POC** MediaMTX + RTSP TCM403 | Docker gateway |
| **3** | Browser play HLS + WebRTC | đo latency/CPU |
| **4** | **P2-G1** `live/start|stop` + playToken + MFE player | API + Z3 |

SSOT: [`docs/context/21-CAMERA-HLS-WEBRTC-GATEWAY.md`](../../docs/context/21-CAMERA-HLS-WEBRTC-GATEWAY.md)
