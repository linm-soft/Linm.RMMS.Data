# Implement — web-rmms-shell

| Field | Value |
|-------|-------|
| feature | `web-rmms-shell` |
| role | `dev` · `/agent-dev` |
| status | `done` |
| packKind | `list` (phone shell · Kind B **WAIVE**) |
| changeScope | `new_page` |
| formPattern | Mobile shell / full / sheet · login overlay · phone 430 · LeaveConfirmModal |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-shell` |
| mfeStdUrl | `http://localhost:9301/web-rmms-shell` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Auth+Notification+Contract · **cấm ERP.*** |
| BFF | Mobile.Bff `:5202` `mobile-bff/api/v1` · MFE `VITE_MOBILE_API_URL` · **cấm** web-bff base |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| updatedAt | `2026-09-25T18:50:00.000Z` |
| taskId | `task_e89dfe96` |
| demo | **N/A** · Live-only shell chrome |
| e2eQa | queued `/agent-qa*` — **cấm** e2e ở Dev |

## Build

| Gate | Result |
|------|--------|
| MFE `yarn build` | **PASS** (size-limit WARN only · chunk `web-rmms-shell` emitted) |
| MFE `yarn typecheck` | **PASS** |
| BE `dotnet build` RMMS.Service.Bff Release | **PASS** (0 warning / 0 error) |
| migration | **none** |
| Kind B / ui-schema / filter-bar | **WAIVE** (phone shell) |

## Screens wired

| id | Route | Notes |
|----|-------|-------|
| SH-00 | `/web-rmms-shell/*` | phone 430 · stackBack · notify badge |
| SH-01 | tab bar | Home · Field · Incident · Work (**4 only** · no me*) |
| SH-02 | login sheet | POST auth/login · LeaveConfirm dirty |
| SH-03 | `/web-rmms-shell` | guest / staff Home CTAs |
| SH-04 | `/web-rmms-shell/field` | doorPatrol / doorInspect → peer A |
| SH-05 | `/web-rmms-shell/incident` | cite peer C · no CRUD |
| SH-06 | `/web-rmms-shell/work` | cite peer D · no CRUD |
| DES-LEAVE | login cancel dirty | LeaveConfirmModal · no `alert`/`confirm` |

## APIs wired (Live)

| Method · Path | UI |
|---------------|-----|
| `POST …/auth/login` | SH-02 |
| `POST …/auth/refresh-token` | authService SSOT |
| `GET …/auth/profile` | profileName (soft via loadProfileLite) |
| `GET …/contract-accounts/session-window` | T-PERM gate · 403 → guest + login |
| `GET …/notification/overview` | notifyBadge UnreadCount |
| `GET …/patrol/sessions` (opt) | Field door badge |

## Files (FE)

- `src/pages/WebRmmsShell/**` — layout · Home · Field · Incident · Work · LoginSheet · styles
- `src/services/shell/chrome.ts` · `lookupStatic.ts`
- `src/index.tsx` · `src/dev/devRoutes.ts` · LoginPage → shell

## BE Step 4b

- DOMAIN-MAP `web-rmms-shell` → Notification/`notification` (CLOSED)
- Live API Auth / Notification overview / session-window — **no new entity**
- Web `NotificationOverviewBffController` stays `[Route("web-bff/…")]` only
- Mobile overview: `Linm.RMMS.Mobile.Bff` `NotificationOverviewMobileController` · **cấm** `[Route("mobile-bff/…")]` trên Web BFF

## Tasks

| id | status |
|----|--------|
| T-BE-CRUD-01 · T-BE-INIT-01 · T-PERM-01 | **done** |
| T-UI-SHELL-01 · FORM · ACT · LEAVE · FIELD · PROD · UX · RESP · HIST | **done** |
| T-QA-* | pending · queued `/agent-qa*` |

## Debt

- Incident/Work peer deep list still cite-only (no shell invent CRUD) — QA verify nav
- OMS `useFormOptions('web-rmms-shell')` + LOOKUP_STATIC fallback — catalog may empty until OMS seed
- Token storage key multi-probe (linm.auth.*) — align when authService SSOT documents single key

## Next

`/agent-qa*` · roleOnly stop (**GAP-PKT-ROLE-01**) · e2eQa=ON
