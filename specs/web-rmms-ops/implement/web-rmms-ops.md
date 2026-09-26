# Implement — web-rmms-ops

| Field | Value |
|-------|-------|
| feature | `web-rmms-ops` |
| role | `dev` · `/agent-dev` |
| status | `done` |
| packKind | `list` (phone inbox · Kind B **WAIVE**) |
| changeScope | `new_page` |
| formPattern | Mobile inbox list/full · phone 430 · no master compose · DES-LEAVE N/A |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-ops` |
| mfeStdUrl | `http://localhost:9301/web-rmms-ops` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Notification · **cấm ERP.*** |
| BFF | `mobile-bff/api/v1/notification/inbox` :5202 · Live inbox + mark-read |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| updatedAt | `2026-09-25T12:55:00.000Z` |
| taskId | `task_0390e4a3` |
| demo | **N/A** · Live-only · **REMOVED** me* / feedback / cam-view / Kind B |
| e2eQa | queued `/agent-qa*` — **cấm** e2e ở Dev |
| cite | T-W2-01 |

## Build

| Gate | Result |
|------|--------|
| MFE `yarn build` | **PASS** (size-limit WARN only · chunk `web-rmms-ops` emitted) |
| MFE `yarn typecheck` | **PASS** |
| BE `dotnet build` Notification.Bff + RMMS.Service.Bff | **PASS** (0 warning / 0 error) |
| migration / entity / Ops controller | **none** (SA) |
| Step 4b | BFF route align only — add `mobile-bff` alias on Live inbox proxy |
| Kind B / ui-schema / filter-bar | **WAIVE** (phone inbox) |

## Screens wired

| id | Zone | Notes |
|----|------|-------|
| OP-00 | `/web-rmms-ops` frame | phone max-width 430 |
| OP-01 | chrome | back → Home · title · refresh |
| OP-02 | inbox list | GET inbox page=1 pageSize=50 |
| OP-03 | row | title · sentAt · opt priority/type |
| OP-04 | unread badge | Badge on unread rows |
| OP-05 | mark-read | unread tap → POST mark-read · **no** detail |
| OP-06 | empty / guest gate | LOOKUP_STATIC · guest no Live call |
| peer | notifyBadge | Home/shell overview — **not** re-owned |

## APIs wired (Live)

| Method · Path | UI |
|---------------|-----|
| `GET …/notification/inbox?page=1&pageSize=50` | OP-02 list |
| `POST …/notification/inbox/{id}/mark-read` | OP-05 unread tap |
| overview badge | peer Home/shell only |

## Files (FE)

- `src/pages/WebRmmsOps/**` — layout · OpsInboxPage · paths · lookupStatic · styles
- `src/services/notification/{types,endpoint}.ts`
- `src/index.tsx` · route `/web-rmms-ops` · aliases `/ops` · `/web-rmms-shell/ops` → `/web-rmms-ops`
- `src/pages/WebRmmsHome/paths.ts` · `src/pages/WebRmmsShell/paths.ts` · ops → `/web-rmms-ops`
- `src/dev/devRoutes.ts` · `mfe.routes.json`

## BE Step 4b

- DOMAIN-MAP `web-rmms-ops` → Notification/`notification` (CLOSED · no change)
- **no** new API controller / entity / migration
- Web `NotificationInboxBffController` stays `web-bff` only
- Mobile inbox + mark-read: `Linm.RMMS.Mobile.Bff` `NotificationInboxMobileController` · **cấm** alias `mobile-bff` trên Web BFF

## Tasks

| id | status |
|----|--------|
| T-BE-CRUD-01 · T-BE-INIT-01 · T-PERM-01 | **done** |
| T-UI-OPS-01 · ACT · FIELD · PROD · UX · RESP · HIST | **done** |
| T-QA-* | pending · queued `/agent-qa*` |
| WAIVE | LIST→OPS · FILTER · CFG · UISCHEMA · LKP · FORM · LEAVE |

## Debt

- LOOKUP_STATIC until OMS seed `web-rmms-ops`
- Shell `OpsTabPage.tsx` leftover (route Navigate; file unused)
- Detail page / filter UI = P2 out of scope

## Next

`/agent-qa*` · roleOnly stop (**GAP-PKT-ROLE-01**) · e2eQa=ON
