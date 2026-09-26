# Implement — web-rmms-work

> Status: **done** · writtenAt `2026-09-26T05:20:00.000Z` · task `task_576843e7`  
> skillVersion: `2026.09.05.03` · packKind: `list` · autoApprove: ON  
> **roleOnly** `/agent-dev` · **cấm** e2e / `yarn start:std` (queued QA)

| | |
|--|--|
| Feature | `web-rmms-work` |
| Title | Danh sách công việc (WORK-L) |
| changeScope | `new_page` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-work` |
| mfeStdUrl | `http://localhost:9301/web-rmms-work` |
| productRoute | `/work` · peers `/work/progress\|log\|chat?id=` · `/work/estimate/:id` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` · **reuse** `maintenance/work-orders` · **cấm ERP.*** |
| Step 4b | **skip** (SA/TL · API Mới / entity / migration: none) |
| demo | N/A |
| contentHash | `sha256:56146b96759461d425413e7e27e31fc1a5a4ed0a5f376f6a526959f62eb62770` |

## Decisions

- WORK-L primary on STD `/web-rmms-work` · product nest peers on `/work/*`
- Live `GET maintenance/work-orders` + `init-data` via Mobile.Bff · **cấm** web-bff / invent WorkListController
- FILTER-P1 chips status/workType **live** từ init-data (fallback LOOKUP enum)
- CREATE-FROM: hub → `/work/estimate` · **no FAB** on list
- Peer pages = nav-only shells (WORK-P/G/C/E) · full CRUD ngoài DoD
- Labels: `useFormOptions('web-rmms-work')` + LOOKUP_STATIC fallback
- **cấm** fake GPS · **cấm** Me* · **cấm** itemsOrDemo

## Files (FE)

| Path | Note |
|------|------|
| `src/pages/WebRmmsWork/*` | Layout · WorkListPage · PeerPages · paths · lookup · styles · alias |
| `src/index.tsx` | Routes `/web-rmms-work` + product `/work/*` |
| `src/dev/devRoutes.ts` | Dev nav Work |
| `src/pages/WebRmmsShell/paths.ts` | `PEER_WORK=/web-rmms-work` |
| `src/pages/WebRmmsShell/WorkTabPage.tsx` | Shell CTA → WORK-L |
| `src/services/patrol/endpoint.ts` | `getList` · `getInitData` · `getById` + create |
| `src/services/patrol/types.ts` | Full `WorkOrderDto` · InitData · Paged |

## Tasks

| id | status | note |
|----|--------|------|
| T-01 | **done** | Route+shell STD + product nest |
| T-02 | **done** | Search debounce · chips live · empty/fail toast |
| T-03 | **done** | Card Title/Code/Assignee/Due/Route/Status/%/WorkType · phone≤430 |
| T-04 | **done** | Hub estimate · peer icons · no FAB · no Me* |
| T-05 | **done** | Mobile.Bff · useFormOptions · #sc-mnt-list · no fake GPS |
| T-BE | **N/A** | Step 4b skip |
| T-QA | pending | queued `/agent-qa*` |

## Verify

| Gate | Result |
|------|--------|
| `yarn build` (MFE) | **PASS** (webpack 5 · chunk `web-rmms-work`) |
| `dotnet build` RMMS.Service.Api | **PASS** (0 err · no BE code change) |
| e2e / start:std | **skipped** (role Dev · e2eQa queued) |

## Debt / carry

- GAP-MOB-MNT-PROG-GPS-01 — peer progress Note GPS (không block WORK-L)
- Peer WORK-P/G/C/E = nav-only stubs · full CRUD later peer packs

## Next

- `/agent-qa*` · e2eQa ON · roleOnly stop (GAP-PKT-ROLE-01)
