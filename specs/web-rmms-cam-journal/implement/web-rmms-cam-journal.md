# Implement — web-rmms-cam-journal

> Status: **done** · skillVersion `2026.09.05.03` · task `task_ec6b0dd0` · writtenAt `2026-10-01T01:35:00.000Z`  
> contentHash: `sha256:76d6d3e1ec6437552d8e12b1c18c3aa8a0fd16abdcc3ef54b3ebc783d062050e`  
> PackKind: **list** · changeScope: **edit_page** · autoApprove: **ON** · e2eQa: **queued QA**

| | |
|--|--|
| Feature | `web-rmms-cam-journal` |
| Role | `dev` · `/agent-dev` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol · **cấm ERP.*** |
| BFF | Mobile.Bff · `mobile-bff/api/v1/patrol/**` · Live KEEP |
| productRoute | `/nhat-ky/:sessionId` · `/moi` · `/:lineId` |
| mfeStdUrl | `http://localhost:9301/web-rmms-cam-journal` → alias → `/nhat-ky` |
| Step 4b | **skip** — entity/migration none · DOMAIN-MAP CLOSED |

## Decisions

- Role matrix via `camJournalAccess(roleCaps)`: `tuanDuong` → write+capture; else view-only (QL_HAT/TK/NT). **Cấm** suy từ MANAGER-RMMS.
- Pattern B GPS: banner on Lưu; **cấm** fake GPS; save `disabled` chỉ `saving|photoBusy`.
- LeaveConfirm dirty chỉ khi `canWrite`.
- CTA create ẩn khi non-tuần-đường (JL-02).
- Std alias `/web-rmms-cam-journal` → product `/nhat-ky` (không invent product slug).
- BE: Live journal-lines KEEP · no new controller/DTO/migration.

## Files touched

| File | Change |
|------|--------|
| `src/pages/WebRmmsMobileB/camJournalAccess.ts` | **new** role matrix |
| `src/pages/WebRmmsMobileB/JournalFormPage.tsx` | T-01 role-gate · Pattern B · leave · view capture |
| `src/pages/WebRmmsMobileB/JournalListPage.tsx` | T-02 CTA gate · roleGateBanner |
| `src/pages/WebRmmsMobileB/lookupStatic.ts` | role.view + list labels |
| `src/pages/WebRmmsMobileB/aliasRedirects.tsx` | **new** std alias |
| `src/pages/WebRmmsMobileB/index.ts` | export alias |
| `src/index.tsx` | route alias |
| `src/dev/devRoutes.ts` | alias link |

## FormMode ↔ API (Live KEEP)

| API | Path | Used |
|-----|------|------|
| API-01 | GET sessions/{id} | JL-01/02 |
| API-02 | GET journal-lines (list) | JL-02 |
| API-03 | GET journal-lines/{id} | JL-01 edit |
| API-04 | POST journal-lines | JL-01 create |
| API-05 | PUT journal-lines/{id} | JL-01 update |
| API-06 | files (cite) | RouteCapture |
| API-07 | auth/profile caps | roleCaps |

## Build

| Gate | Result |
|------|--------|
| MFE `yarn build` | **PASS** (webpack 5 · warnings size only) |
| BE `dotnet build Linm.RMMS.WebService.sln` | **PASS** (exit 0 · no code change) |

## AC checklist

- [x] AC-JL-WRITE · AC-JL-CTA · AC-JL-NARR · AC-JL-GPS-B · AC-JL-PHOTO
- [x] AC-JL-LEAVE · AC-JL-LOOKUP · AC-JL-ROUTE · AC-JL-API
- [x] QL_HAT/TK/NT view · no save/capture CTA

## Debt / handoff QA

- E2E chỉ `/agent-qa*` (queued) — **cấm** start:std ở Dev.
- T-03 QA notes: role matrix tuanDuong write · others view · CTA hidden · Pattern B banner.

## next

`/agent-qa` · roleOnly stop (GAP-PKT-ROLE-01)
