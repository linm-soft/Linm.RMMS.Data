# Dev — Implement — web-rmms-ui-align

| Field | Value |
|-------|-------|
| feature | `web-rmms-ui-align` |
| role | `dev` · `/agent-dev` |
| status | `done` |
| packKind | `list` (phone chrome · Kind B **N/A**) |
| changeScope | `edit_page` |
| formPattern | Full / Overlay / Tab · phone ≤430 · LeaveConfirmModal · **N/A** ERP Modal |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-ui-align` |
| mfeStdUrl | `http://localhost:9301/web-rmms-ui-align` |
| peerStdUrl | `http://localhost:9301/web-rmms-shell` · `/web-rmms-home` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Auth · Notification · Patrol · Gis cite · **cấm ERP.*** |
| BFF | Mobile.Bff `:5202` `mobile-bff/api/v1` · **cấm** web-bff · **cấm** MapService browser |
| contentHash | `sha256:554b56d529a010b6225fe92fc369904fd070a80f12503c35e914643f82bcfe4b` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| updatedAt | `2026-09-26T07:45:00.000Z` |
| taskId | `task_8054742d` |
| demo | **N/A** |
| e2eQa | queued `/agent-qa*` — **cấm** e2e ở Dev |
| API / migration / Step 4b | **none** — Live cite only |

## Build

| Gate | Result |
|------|--------|
| MFE `yarn typecheck` | **PASS** |
| MFE `yarn build` | **PASS** (size-limit WARN only · chunk `web-rmms-shell` emitted) |
| BE `dotnet build` RMMS.Service.Bff Release | **PASS** (0 warning / 0 error) |
| Mobile.Bff Release | **SKIP env** — NU1101 `Linm.Platform.FileService.Bff` feed (no code change) |
| migration / Step 4b | **none** |
| Kind B / ui-schema / filter-bar | **N/A-chrome** |

## Screens wired

| id | Route | Notes |
|----|-------|-------|
| UA-00 | shell phone ≤430 | stackBack · notify badge |
| DES-MOB-TABBAR | TabBar **5** | Trang Chủ · Tuần đường `#i-mappin` · Vấn đề · Công việc · Tôi |
| DES-MOB-LOGIN | `/login` | POST auth/login · LeaveConfirm dirty |
| DES-MOB-HOME | `/web-rmms-home` | guest+staff · grid stroke icons · profile · notify |
| DES-MOB-PAT-HOME | `/web-rmms-shell/field` | doors · sessions badge |
| DES-MOB-INC-LIST | `/web-rmms-shell/incident` | peer list embed |
| DES-MOB-MNT-LIST | `/web-rmms-shell/work` | peer list embed |
| DES-MOB-ME | `/web-rmms-shell/me` | profile·offline·signal·feedback·cam·ops·settings toast·logout |
| DES-LEAVE | login dirty | LeaveConfirmModal · logout `useAlert.confirm` |
| mfeStd alias | `/web-rmms-ui-align` | Navigate → `/web-rmms-home` |

## APIs wired (Live cite)

| Method · Path (Mobile.Bff) | UI |
|----------------------------|-----|
| `POST …/auth/login` | LOGIN |
| `POST …/auth/refresh-token` | authService SSOT |
| `GET …/auth/profile` | Me / Home profile |
| `GET …/notification/overview` | notify badge |
| `GET …/patrol/sessions` (opt) | Field door badge |
| `GET …/gis/tiles/{layer}/{z}/{x}/{y}.pbf` | peer maps (PatrolMap) · BFF only |

## Files (FE)

- `src/pages/WebRmmsShell/WebRmmsShellLayout.tsx` — TabBar 5 · zones UA-00 / DES-MOB-TABBAR
- `src/pages/WebRmmsShell/MeTabPage.tsx` — DES-MOB-ME
- `src/pages/WebRmmsShell/DemoIcon.tsx` — prototype stroke `#i-*`
- `src/pages/WebRmmsShell/paths.ts` · `styles.module.css` · `index.ts`
- `src/services/shell/lookupStatic.ts` — tab.* · me.*
- `src/pages/LoginPage/LoginPage.tsx` — LeaveConfirm dirty
- `src/pages/WebRmmsHome/HomePage.tsx` · `lookupStatic.ts` — grid/labels · logout useAlert
- `src/index.tsx` · `src/dev/devRoutes.ts` · `src/router/appBack.ts`

## BE Step 4b

- **none** — DOMAIN-MAP cite row `web-rmms-ui-align` → Notification Live
- Mobile.Bff proxies Auth / Notification / Patrol / GisTiles — **no new controller**

## Tasks

| id | status |
|----|--------|
| T-FE-01…10 | **done** |
| T-BE-01 | **done** (cite) |
| T-QA-01 | pending · queued `/agent-qa*` |

## Debt

- `/web-rmms-feedback` · `/web-rmms-cam-view` not mounted → Me toast `me.peerPending`
- Mobile.Bff local build needs private nuget feed (FileService.Bff)
- OMS `useFormOptions('web-rmms-shell')` until catalog seed

## Next

`/agent-qa*` · roleOnly stop (**GAP-PKT-ROLE-01**) · e2eQa=ON

## QA verdict

| Field | Value |
|-------|-------|
| role | qa · task_0ff03f63 |
| result | **PASS** · e2e S0/S1/QA-20 Aligned |
| screens | specs/web-rmms-ui-align/qa/screens/{S0,S1,QA-20}.png |
| next | /agent-review · cấm phase=done |

