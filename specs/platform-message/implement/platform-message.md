# Dev — Implement — platform-message

> Status: **done** · `/agent-dev` · `/implement-message-service` · `task_992a4353` · autoApprove ON  
> `msg_kind=parcel_only` · Step 4b **N/A** · **cấm** e2e / `yarn start:std` ở role Dev

| Field | Value |
|-------|-------|
| feature | `platform-message` |
| title | [Dev] Platform.Message parcel / Chat section |
| this role | `dev` · `/agent-dev` |
| packKind | **`platform`** |
| changeScope | `edit_page` |
| msg_kind | **`parcel_only`** |
| route_confirm | **`route_a`** · task=/cv/:id · incident=/su-co/:id · ticket=/tickets/:id |
| MFE | `D:\MFE-CORE\Linm.Web.Message` (`@linm/message`) |
| Common | `D:\MFE-COMMON\Linm.Web.Common.Components` (local pack `1.22.0` + stamp) |
| BE | **N/A** — cite Medical only · **0** delta `Linm.RMMS.WebService` · **0** ERP.* |
| verify | FE `yarn build` **PASS** · BE Step 4b **N/A** (parcel_only) |
| mfeStdUrl | `http://localhost:9301/platform-message` (runtime peer — QA) |
| updatedAt | `2026-08-25T17:38:00.000Z` |

**Cấm:** Message.Api P1 · RMMS MessagesController · `signalRService.start()` trong Message MFE · fork ChatTab markup · DES-GRID · `window.alert`/`confirm` · invent `rmms.messages.*` perm.

---

## Done checklist (TL tasks)

| id | Result | Notes |
|----|--------|-------|
| T-CTX-01 | **done** | hub 26 · design · SA · DA cite · **cấm** demo task.html SSOT |
| T-COMMON-CAST-01 | **done** | ChatPanel bỏ cast `ticket\|task` · pass `incident` |
| T-COMMON-COMMENTS-INCIDENT-01 | **done** | CommentsTab `entityType` + `'incident'` |
| T-ROUTEMAP-01 | **done** | `routeMap` / `detailRoute` / `onNavigate` · `resolveDetailRoute` · MessageCenter + ChatPanel + Inbox |
| T-PARCEL-CHAT-SECTION-01 | **done** | Export `ChatSectionParcel` · mode both\|chat\|comments · tabs 0/1 · wrap common only |
| T-LEAVE-01 | **done** | `LeaveConfirmModal` + `useLeaveConfirm` · TabSlideout `onBeforeCollapse` · **0** native dialog |
| T-TYP-01 | **done** | label 13px (`--ds-font-size-field-label`) · input D14/M16 |
| T-UI-UX-01 | **done** | modern chat surfaces · empty thật · **cấm** DES-GRID |
| T-UI-RESP-01 | **done** | ChatSection + Inbox CSS 1280/768/375 patterns |
| T-PERM-01 | **done** | reuse Medical/host · **0** invent RMMS message perm |
| T-QA-PARCEL-01 | **failed** | QA `task_abf2c4eb` · GAP-QA-E2E-02/01 · qa_fail_rollback |

---

## Key paths

| Layer | Path |
|-------|------|
| Export | `Linm.Web.Message/src/message.tsx` — Center · Inbox · **ChatSectionParcel** |
| Parcel | `src/parcels/ChatSectionParcel.tsx` (+ `.module.css`) |
| Inbox wire | `src/pages/MessagesInboxPage/MessagesInboxPage.tsx` — routeMap → ChatPanel |
| Shell | `src/components/MessageParcelShell.tsx` — unread reconnect only (**MSG-SVC-01**) |
| Common ChatPanel | `…/ChatPanel/ChatPanel.tsx` — incident + routeMap |
| Common ChatTab | `…/ChatTab/ChatTab.tsx` — dirty · leave · label Nhắn tin · incident label |
| Common CommentsTab | `…/CommentsTab/CommentsTab.tsx` — incident · dirty · leave · label Bình luận |
| Common TabSlideout | `…/TabSlideout/TabSlideout.tsx` — `onBeforeCollapse` |
| Common MessageCenter | `…/MessageCenter/MessageCenter.tsx` — routeMap + LeaveConfirmModal |
| Route types | `…/services/message/messageRouteTypes.ts` |

### Host inject example (RMMS · route_a)

```ts
routeMap={{
  task: (id) => `/cv/${id}`,
  incident: (id) => `/su-co/${id}`,
  ticket: (id) => `/tickets/${id}`,
}}
```

Medical fallback (no routeMap): `/tasks/:id` · `/medical-incidents/:id` · `/tickets/:id`.

---

## Build / verify

| Check | Result |
|-------|--------|
| Common `npm run build:clean` | **PASS** |
| Message MFE `yarn build` | **PASS** (webpack warnings size only) |
| `signalRService.start()` in Message MFE | **0** hits |
| Step 4b / `dotnet build` RMMS chat | **N/A** (SA `parcel_only`) |
| e2e / `yarn start:std` | **skipped** — queued `/agent-qa*` |

Common consume: `@linm-soft-org/linm-web-common-components` → local tgz  
`local-packages/linm-soft-org-linm-web-common-components-local.20260826003457.tgz`

---

## Gaps

| ID | Decision |
|----|----------|
| GAP-MSG-PARCEL-01 | **CLOSED** |
| GAP-MSG-CAST-01 | **CLOSED** |
| GAP-MSG-ROUTE-01 | **CLOSED** |
| GAP-PT-COMMON-01 | **CLOSED** |
| GAP-PT-COMMENT-UI-01 | **CLOSED** |
| GAP-DES-LEAVE-01 | **CLOSED** |
| GAP-TYP-01 | **CLOSED** |
| MSG-SVC-01 | **KEEP** |
| GAP-PT-INBOX-01 | **DEFER** |

---

## QA verdict (task_abf2c4eb · 2026-08-25T17:56:00.000Z)

| Field | Value |
|-------|-------|
| verdict | **FAIL** |
| scenarios | `specs/platform-message/qa/scenarios.md` |
| static AC-P-01…08 | PASS (code) |
| e2e | **FAIL** · missing `start:std` + standalone · API `:5101` not listen |
| gaps | GAP-QA-E2E-02 · GAP-QA-E2E-01 |
| next | `qa_fail_rollback` → Dev plan only |

## Handoff → QA

| Field | Value |
|-------|-------|
| Next slash | `/agent-qa*` (e2eQa ON) — **ran** · FAIL |
| Artifact | `specs/platform-message/qa/scenarios.md` |
| AC | AC-P-01…08 · T-QA-PARCEL-01 |
| mfeStdUrl | `http://localhost:9301/platform-message` |
| reviewUrl | prototype file://…/platform-message-prototype.html |
| **cấm** Dev | invent BE · start platform-task · fix trước `qa_fix_plan` Approve |

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-dev · implement-message-service |
| skillVersion | 2026.08.25.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.02 |
| rulesVersion | 2026.08.25.7 |
| generatedAt | 2026-08-25T17:38:00.000Z |
| versionGate | ok |
| contentHashPriorDataAnaly | sha256:d0cbce57a4131006ffab87e075dc05160c8734389e1d9968e6aeadfe484b6cea |
| real_view_parity | v1 |
| taskId | `task_992a4353` |
| route_confirm | route_a |
| backup | `specs/platform-message/_backup/20260825T152000Z` |

---
<!-- Version meta: skillId=agent-dev skillVersion=2026.08.25.02 schemaVersion=1 workflowVersion=2026.08.25.02 rulesVersion=2026.08.25.7 versionGate=ok -->
