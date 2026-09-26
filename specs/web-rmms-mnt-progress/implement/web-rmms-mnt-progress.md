# Implement — web-rmms-mnt-progress

> Status: **done** · writtenAt `2026-09-26T05:50:00.000Z` · task `task_b4b8ae89`  
> skillVersion: `2026.09.05.03` · packKind: `list` · autoApprove: ON  
> **roleOnly** `/agent-dev` · **cấm** e2e / `yarn start:std` (queued QA)

| | |
|--|--|
| Feature | `web-rmms-mnt-progress` |
| Title | Tiến độ công việc (WORK-P) |
| changeScope | `new_page` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-mnt-progress` |
| mfeStdUrl | `http://localhost:9301/web-rmms-mnt-progress` |
| productRoute | `/work/progress?id=` → alias STD |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` · **reuse** `maintenance/work-orders` · **cấm ERP.*** |
| Step 4b | **skip** (SA/TL · API Mới / entity / migration: none · DOMAIN-MAP applied) |
| demo | N/A |
| contentHash | `sha256:a7e3c91b4d2f6801e5a9b0c3d8f1472e6b5a0d9c4e1f2837a6b5c4d3e2f1098a` |

## Decisions

- WORK-P primary on STD `/web-rmms-mnt-progress?id=` · product `/work/progress?id=` redirects to STD
- Live `GET {id}` · `POST …/progress` · `POST …/complete` · `GET init-data` via Mobile.Bff · **cấm** web-bff / invent ProgressController
- GPS gate both CTAs · deny disable · **cấm** fake · GPS→Note only · **cấm** lat/media body
- MEDIA P1 local preview · GAP-MEDIA Signed defer P2
- Labels: `useFormOptions('web-rmms-mnt-progress')` + LOOKUP_STATIC · status chrome badge
- Entry from WORK-L peer · phone ≤430 · `#sc-mnt-progress`
- **cấm** Me* · **cấm** itemsOrDemo · DES-GRID N/A

## Files (FE)

| Path | Note |
|------|------|
| `src/pages/WebRmmsMntProgress/*` | Layout · MntProgressPage · alias · paths · lookup · styles |
| `src/index.tsx` | Route STD + `/work/progress` alias |
| `src/dev/devRoutes.ts` | Dev nav WORK-P |
| `mfe.routes.json` | `web-rmms-mnt-progress` · `web-rmms-work` |
| `src/services/patrol/endpoint.ts` | `postProgress` · `postComplete` |
| `src/services/patrol/types.ts` | `ProgressWorkOrderRequest` · `CompleteWorkOrderRequest` |

## Tasks

| id | status | note |
|----|--------|------|
| T-01 | **done** | Route+shell STD + product alias |
| T-02 | **done** | Header GET {id} · list chrome badge · empty/fail toast |
| T-03 | **done** | % slider · note · photoLocalIds local only |
| T-04 | **done** | GPS gate both CTAs · Note encode · `?deny=1` |
| T-05 | **done** | Mobile.Bff POST · useFormOptions · #sc-mnt-progress |
| T-BE | **N/A** | Step 4b skip · no BE code change |
| T-QA | pending | queued `/agent-qa*` |

## Verify

| Gate | Result |
|------|--------|
| `yarn build` (MFE) | **PASS** (webpack 5 · warnings size only) |
| `dotnet build` Linm.RMMS.WebService.sln | **PASS** (0 err · no BE code change) |
| e2e / start:std | **skipped** (role Dev · e2eQa queued) |

## Debt / carry

- GAP-MEDIA Signed upload on Progress/Complete — defer P2
- Peer WORK-G/C/E remain nav-only stubs (out of scope)

## Next

- `/agent-qa*` · e2eQa ON · roleOnly stop (GAP-PKT-ROLE-01)
