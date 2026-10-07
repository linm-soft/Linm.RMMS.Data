# Implement — web-rmms-cam-nghiem-thu

> Status: **done** · skillVersion `2026.09.05.03` · task `task_aaa3a7da` · writtenAt `2026-10-01T03:45:00.000Z`  
> contentHash: `sha256:c4e8a1b9d2f57306e8a0c1d4b7f9e2a5c8d0f3b6a9e1c4d7f0b2e5a8c1d4f7b0`  
> PackKind: **list** · changeScope: **edit_page** · autoApprove: **ON** · e2eQa: **queued QA**  
> MFE build: **PASS** (`yarn build`) · BE: **PASS** (no code · Step 4b skip)

| | |
|--|--|
| Feature | `web-rmms-cam-nghiem-thu` |
| Role | `dev` · `/agent-dev` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol · **cấm ERP.*** |
| BFF | Mobile.Bff · `mobile-bff/api/v1/patrol/nghiem-thu` · Live KEEP |
| productRoute | `/nghiem-thu` · `/moi` · `/:id` |
| mfeStdUrl | `http://localhost:9301/web-rmms-cam-nghiem-thu` → alias → `/nghiem-thu` |
| Step 4b | **skip** — entity/migration/API none · DOMAIN-MAP bind peer |

## Decisions

- Role matrix `camNghiemThuAccess(roleCaps)`: `nghiemThu` → write+capture+Tạo; TK/QL_HAT → view; tuần đường only → **ẩn list**. **Cấm** suy từ MANAGER-RMMS.
- Hide `btnCreate` non-NT · roleGateBanner RO · Pattern B GPS `disabled={saving\|\|photoBusy}` · **cấm** fake GPS.
- LeaveConfirm dirty chỉ khi `canWrite` · LeaveConfirmModal (cấm alert/confirm).
- NT-RO-LINK: `/tuan-duong` + `/phat-hien?status=xong` (forward query Entry→List).
- Std alias `/web-rmms-cam-nghiem-thu` → product `/nghiem-thu`.
- BE: Live nghiem-thu KEEP · no new controller/DTO/migration · T-PERM server = FE gate + profile caps (RequirePermission TODO peer).

## Files touched

| File | Change |
|------|--------|
| `src/pages/WebRmmsNghiemThu/camNghiemThuAccess.ts` | **new** role matrix write/view/hidden |
| `src/pages/WebRmmsNghiemThu/NghiemThuListPage.tsx` | LIST-VIS · hide Tạo · banner · NT-RO-LINK |
| `src/pages/WebRmmsNghiemThu/NghiemThuFormPage.tsx` | role-gate · Pattern B · leave · capture view · RO links |
| `src/pages/WebRmmsNghiemThu/lookupStatic.ts` | role/hidden/RO labels |
| `src/pages/WebRmmsNghiemThu/paths.ts` | roSessions · roFindingsDat |
| `src/pages/WebRmmsNghiemThu/aliasRedirects.tsx` | CamNghiemThuAliasRedirect |
| `src/pages/WebRmmsNghiemThu/index.ts` | export alias + access |
| `src/pages/WebRmmsMobileC/FindingEntryPage.tsx` | forward `?status=` |
| `src/pages/WebRmmsMobileC/FindingListPage.tsx` | init statusFilter from query |
| `src/index.tsx` | route alias |
| `src/dev/devRoutes.ts` | alias link |

## FormMode ↔ API (Live KEEP)

| API | Path | Used |
|-----|------|------|
| API-01 | GET patrol/nghiem-thu | NT-L |
| API-02 | GET …/init-data | NT-F |
| API-03 | GET …/{id} | NT-F edit |
| API-04 | POST … | NT-F create · NT only |
| API-05 | PUT …/{id} | NT-F edit · NT only |
| API-06 | files (cite) | RouteCapture |
| API-07 | GET auth/profile | roleCaps.nghiemThu |
| API-08 | GET patrol/sessions | RO → /tuan-duong |
| API-09 | GET patrol/findings | RO → /phat-hien?status=xong |

## Build

| Gate | Result |
|------|--------|
| MFE `yarn build` | **PASS** (webpack 5 · size warnings only) |
| BE `dotnet build Linm.RMMS.WebService.sln` | **PASS** (exit 0 · no code change) |

## AC checklist

- [x] T-BE-PROF/CRUD · T-PERM FE · T-UI-LKP/FIELD/VIS/FORM/RO/LEAVE/PROD/UX/RESP/ALIGN
- [x] LIST-VIS NT full · tuần đường ẩn · TK/QL_HAT RO · hide Tạo
- [x] Pattern B · LeaveConfirm · NT-RO-LINK · alias queue
- [ ] T-QA-* → `/agent-qa*` only

## Debt / handoff QA

- E2E chỉ `/agent-qa*` (queued) — **cấm** start:std ở Dev.
- Server `[RequirePermission]` on NghiemThuController still TODO (peer Auth stub) — FE gate enforced.
- VERIFY role-gate seed `NGHIEM-THU` live before E2E write path.

## next

`/agent-qa` · roleOnly stop (GAP-PKT-ROLE-01)
