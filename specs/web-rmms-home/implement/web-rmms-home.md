# Implement — web-rmms-home

| Field | Value |
|-------|-------|
| feature | `web-rmms-home` |
| role | `dev` · `/agent-dev` |
| status | `done` |
| packKind | `list` (phone Home · Kind B **WAIVE**) |
| changeScope | `new_page` |
| formPattern | Mobile Home / full · phone 430 · no master form · DES-LEAVE N/A |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-home` |
| mfeStdUrl | `http://localhost:9301/web-rmms-home` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Auth + Notification · **cấm ERP.*** |
| BFF | `mobile-bff/api/v1/**` :5202 · Live profile + overview |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| updatedAt | `2026-09-25T19:20:00.000Z` |
| taskId | `task_14fa52d5` |
| demo | **N/A** · Live-only · **REMOVED** me* |
| e2eQa | queued `/agent-qa*` — **cấm** e2e ở Dev |

## Build

| Gate | Result |
|------|--------|
| MFE `yarn typecheck` | **PASS** |
| MFE `yarn build` | **PASS** (size-limit WARN only · chunk `web-rmms-home` emitted) |
| BE `dotnet build` RMMS.Service.Bff Release | **PASS** (0 warning / 0 error) |
| migration / Step 4b | **none** (SA — no Home entity/CRUD) |
| Kind B / ui-schema / filter-bar | **WAIVE** (phone Home tiles) |

## Screens wired

| id | Route / zone | Notes |
|----|--------------|-------|
| HM-00 | `/web-rmms-home` | phone content under shell chrome |
| HM-01 | guest FAQ / privacy | Static LOOKUP_STATIC |
| HM-02 | guest login CTA | → shell LoginSheet (`setLoginOpen`) |
| HM-03 | staff quick | Điểm tuần → Field · Ghi sự cố → incident |
| HM-04 | staff grid×6 | supervise · patrol-map · work · incident · asset · offline |
| HM-05 | wallet + notify badge | → `/asset` · → `/ops` · Live overview |
| HM-06 | profileName | Live GET auth/profile · Text RO |
| SH-* | peer shell | TabBar + login overlay · **not** owned by Home |

## APIs wired (Live)

| Method · Path | UI |
|---------------|-----|
| `GET …/auth/profile` | HM-06 · `fetchAuthProfile` |
| `GET …/notification/overview` | HM-05 badge · `fetchNotificationOverviewLive` |
| Login CTA | nav overlay shell · **no** POST on Home |

## Files (FE)

- `src/pages/WebRmmsHome/**` — HomePage · paths · lookupStatic · styles
- `src/pages/WebRmmsShell/OpsTabPage.tsx` · paths.home → `/web-rmms-home` · layout wrap
- `src/services/auth/profile.ts` · `fetchAuthProfile`
- `src/services/shell/chrome.ts` · `fetchNotificationOverviewLive`
- `src/index.tsx` · route `/web-rmms-home` + SCREENS aliases · `src/dev/devRoutes.ts`

## BE Step 4b

- DOMAIN-MAP `web-rmms-home` → Notification/`notification` (CLOSED · no change)
- **no** new controller / entity / migration
- Live Auth profile + Notification overview reused

## Tasks

| id | status |
|----|--------|
| T-BE-CRUD-01 · T-BE-INIT-01 · T-PERM-01 | **done** |
| T-UI-HOME-01 · ACT · FIELD · PROD · UX · RESP · HIST | **done** |
| T-QA-* | pending · queued `/agent-qa*` |
| WAIVE | LIST · FILTER · CFG · UISCHEMA · LKP · FORM · LEAVE |

## Debt

- SCREENS `/asset` `/offline` `/supervise` `/incident/new` alias → peer Field/A until dedicated MFEs
- Ops page thin (overview count only · no invent inbox CRUD)
- OMS `useFormOptions('web-rmms-home')` + LOOKUP_STATIC fallback until catalog seeded
- GET auth/profile 401 may still hit shared interceptor (GAP-QA-PROFILE-401 · soft fallback)

## Next

`/agent-qa*` · roleOnly stop (**GAP-PKT-ROLE-01**) · e2eQa=ON
