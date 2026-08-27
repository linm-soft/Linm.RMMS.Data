# Tasks — platform-message

> Team lead · `/agent-team-lead` · `task_8b762097` · autoApprove ON  
> Status: **done** · `route_confirm` = Design A (autopilot) · `2026-08-26T00:24:00.000Z`  
> Serial by page+layer · **cấm** parallel same parcel/common file  
> **Cấm** implement product code ở role TL · **cấm** e2e / `yarn start:std` / build

| Field | Value |
|-------|-------|
| feature | `platform-message` |
| title | [TL] Platform.Message parcel / Chat section |
| this role | `team_lead` · `/agent-team-lead` |
| packKind | **`platform`** — **cấm** Kind B DES-GRID / T-UI-LIST / report pack |
| formType | **`platform`** (parcel hub · SA FormType pack) |
| changeScope | `edit_page` |
| msg_kind | **`parcel_only`** |
| design_confirm | **approve** |
| solution_confirm | **approve** |
| route_confirm | **`route_a`** (autopilot) — peer `/platform-message` · RMMS `task→/cv/:id` · `incident→/su-co/:id` |
| autoApprove | **ON** |
| e2eQa | ON · queued `/agent-qa*` only |
| Dev slash | **`/implement-message-service`** (`msg_kind=parcel_only`) |
| MFE | `D:\MFE-CORE\Linm.Web.Message` (`@linm/message`) |
| Common | `D:\MFE-COMMON\Linm.Web.Common.Components` |
| BE cite | Medical `MessagesController` + entity `…/messages` — **cấm** RMMS chat delta |
| Step 4b / migration | **N/A** |

**Cấm ERP.*** · **cấm** T-BE-API / T-BE-MIG trên `Linm.RMMS.WebService` · **cấm** scaffold Message.Api P1 · **cấm** `signalRService.start()` trong Message MFE · **cấm** fork ChatTab markup · **cấm** `window.alert` / `window.confirm`.

---

## System design checklist

| ID | Chuẩn | Status | Notes |
|----|-------|--------|-------|
| SD-JOB | `/review-event-job` | **n/a** | no platform-job |
| SD-BFF | `/create-bff-api-feature` | **n/a** | cite Medical BFF only · no RMMS proxy |
| SD-AUTH | `/review-ui-authentication` | **reuse** | Medical / host entity perms · **cấm** invent `rmms.messages.*` P1 |
| SD-TOKEN | `bff-service-token.md` | **n/a** | no new BFF |
| SD-HEADER | X-Company-Id / axios | **reuse** | host apiClient |
| SD-SPLIT | ownership | **pass** | Message MFE parcels · common Chat* · Medical cite · TaskService later |
| SD-STATE | redux | **slice** | `messagesInboxSlice` (common + Message shell) · **cấm** local auth/toast fork |

---

## route_confirm (LOCKED · autopilot)

AskQuestion `route_confirm` **skipped wait** (`autoApprove=ON`) · chốt **route_a** = Design proposed.

| Key | Path | Notes |
|-----|------|-------|
| **mfeStdRoute** (peer pack) | `/platform-message` | Inbox peer / std · STATUS `mfeStdUrl` Dev điền runtime |
| Inbox mount (live) | `/messages` | `MessagesInboxParcel` — **giữ** |
| `routeMap.task` | `/cv/:id` | RMMS · GAP-MSG-ROUTE-01 |
| `routeMap.incident` | `/su-co/:id` | RMMS · GAP-MSG-ROUTE-01 |
| `routeMap.ticket` | `/tickets/:id` | host Medical default · host có thể override inject |
| Medical cite (fallback) | `/tasks/:id` · `/tickets/:id` · `/medical-incidents/:id` | chỉ khi host **không** inject routeMap |

**source.routes (confirmed):**

```text
peer:      /platform-message
inbox:     /messages
routeMap:  task=/cv/:id · incident=/su-co/:id · ticket=/tickets/:id
```

---

## FormType pack (`platform` · SA §4 — **không** §2a list)

| Task id | Role | Nội dung |
|---------|------|----------|
| T-CTX-01 | Dev | Context / hub 26 / parcel-contract · controlHint · real-data cite |
| T-PARCEL-CHAT-SECTION-01 | Dev `/implement-message-service` | Export `ChatSectionParcel` · wrap ChatTab+CommentsTab · mode both\|chat\|comments |
| T-COMMON-CAST-01 | Dev | ChatPanel + ChatTab: bỏ cast `ticket\|task` · pass `incident` |
| T-COMMON-COMMENTS-INCIDENT-01 | Dev | CommentsTab `entityType` + `'incident'` |
| T-ROUTEMAP-01 | Dev | Host inject `routeMap`/`detailRoute` · ChatPanel **không** hard-code Medical-only |
| T-LEAVE-01 | Dev | Dirty composer → `LeaveConfirmModal` · **cấm** native dialog |
| T-TYP-01 | Dev | label 13 · input D14/M16 · **GAP-TYP-01** |
| T-UI-UX-01 | Dev | `dev-ui-ux-constitution` · modern chat surfaces · **cấm** DES-GRID |
| T-UI-RESP-01 | Dev `/dev-web-responsive` | 1280/768/375 · inbox split + section tabs |
| T-PERM-01 | Dev | **reuse** Medical participant · **cấm** invent RMMS message perm P1 |
| T-QA-PARCEL-01 | QA | AC-P-01…08 · tabs · send · routeMap · incident · leave · typo · **0** Message.Api |

**OUT / N/A:** T-UI-LIST-* · T-UI-FILTER-* · T-BE-CRUD · T-BE-UISCHEMA · T-BE-API RMMS · Message.Api · GAP-PT-INBOX-01 (DEFER).

---

## Summary

| id | page | layer | role | domain/MFE | deps | APIs | status |
|----|------|-------|------|------------|------|------|--------|
| T-CTX-01 | platform-message | docs | dev | — | — | cite | pending |
| T-COMMON-CAST-01 | ChatPanel/ChatTab | ui | dev | Common.Components | T-CTX-01 | API-04/05 | pending |
| T-COMMON-COMMENTS-INCIDENT-01 | CommentsTab | ui | dev | Common.Components | T-CTX-01 | API-04/05 | pending |
| T-ROUTEMAP-01 | ChatPanel + parcel | ui | dev | Common + Message | T-COMMON-CAST-01 | — (client) | pending |
| T-PARCEL-CHAT-SECTION-01 | ChatSectionParcel | ui | dev | `@linm/message` | T-COMMON-* · T-ROUTEMAP-01 | API-04/05/06 | pending |
| T-LEAVE-01 | composer leave | ui | dev | Common + Message | T-PARCEL-CHAT-SECTION-01 | — | pending |
| T-TYP-01 | typography | ui | dev | Common + Message | T-PARCEL-CHAT-SECTION-01 | — | pending |
| T-UI-UX-01 | UX constitution | ui | dev | Common + Message | T-PARCEL-CHAT-SECTION-01 | — | pending |
| T-UI-RESP-01 | responsive | ui | dev | Message | T-UI-UX-01 | — | pending |
| T-PERM-01 | perms | ui | dev | host / Medical | T-CTX-01 | cite | pending |
| T-QA-PARCEL-01 | qa | qa | qa | — | all UI | — | pending |

**deps order:** T-CTX-01 → (T-COMMON-CAST-01 ∥ T-COMMON-COMMENTS-INCIDENT-01) → T-ROUTEMAP-01 → T-PARCEL-CHAT-SECTION-01 → (T-LEAVE-01 ∥ T-TYP-01 ∥ T-UI-UX-01) → T-UI-RESP-01 → T-PERM-01 → T-QA-PARCEL-01

---

## T-CTX-01 — Context + SSOT cite

**Page:** platform-message  
**Layer:** `docs`  
**Role:** dev  
**devSlash:** `/implement-message-service`

### Source

| | |
|--|--|
| mfe | `D:\MFE-CORE\Linm.Web.Message` |
| common | `D:\MFE-COMMON\Linm.Web.Common.Components` |
| domain | — (parcel_only · **no** RMMS domain API) |
| api | **cite** Medical only |
| bff | Medical `web-bff/api/v1` (relative FE paths) |
| layout | micro_src Message MFE |

**from_design:** zones DES-MSG-TOP · INBOX-L/R · SEC-TAB/CHAT/CMT · LEAVE · reviewUrl prototype  
**from_solution:** API-01…06 cite · msg_kind=parcel_only · Step 4b N/A  
**ssot.reuse:** platform-message-service · parcel-contract · hub 26 · controlHint · real-data §A–§B  
**Skills:** `/implement-message-service` · `platform-pack-live-mfe`  
**system_design:** SD-BFF=n/a · SD-JOB=n/a · SD-AUTH=reuse  
**DoD:**
- [ ] Đọc CTX + design + solution + DA control-hint/real-data trước Write
- [ ] **Cấm** re-scan demo `task.html` làm SSOT
- [ ] **Cấm** invent RMMS chat path

### Links

| | Path |
|--|------|
| Design | `../ui/design.md` |
| Solution | `../be/solution-discovery.md` |
| Context | `docs/context/features/platform-message.md` · hub `26-MESSAGE-PARCEL.md` |
| Analy | `specs/_data-analy/features/platform-message-control-hint.md` · `platform-message-real-data.md` |
| Parcel contract | `{RulesRoot}/common/skill/implement-message-service/example/parcel-contract.md` |

**Deps:** —  
**Notes:** Hash skip · contentHash analy `sha256:d0cbce57a4131006ffab87e075dc05160c8734389e1d9968e6aeadfe484b6cea`

---

## T-COMMON-CAST-01 — ChatPanel / ChatTab accept `incident`

**Page:** Messages ChatPanel  
**Layer:** `ui`  
**Role:** dev  
**devSlash:** `/implement-message-service`

### Source

| | |
|--|--|
| mfe | — |
| common | `Linm.Web.Common.Components` |
| files | `src/pages/MessagesPage/components/ChatPanel/ChatPanel.tsx` · `src/components/shared/ChatTab/ChatTab.tsx` |

**from_design:** GAP-MSG-CAST-01 · DES-MSG-INBOX-R  
**from_solution:** entityType `ticket|task|incident` · prefix map  
**ssot.platform_ui:** `@linm-soft-org/linm-web-common-components`  
**ssot.reuse:**
  ui: ChatTab · ChatPanel · useMessages  
  http: endpoint.ts `routePrefix` (giữ Medical)  
**implement.wire:** ChatPanel → ChatTab `entityType` full union → `useMessages` → `GET/POST /{prefix}/{id}/messages`  
**implement.state:** common hooks only · **cấm** local messages slice fork  
**Skills:** `/implement-message-service` · `ssot-no-duplicate`  
**APIs:** API-04 · API-05  
**DoD:**
- [ ] Xóa `as 'ticket' | 'task'` trên ChatPanel → ChatTab
- [ ] `incident` render + send không drop
- [ ] **Cấm** fork ChatTab vào Field/Task page
- [ ] Common package bump consumable bởi Message MFE

**Deps:** T-CTX-01  
**Notes:** Live gap confirmed `ChatPanel.tsx` L84 cast

---

## T-COMMON-COMMENTS-INCIDENT-01 — CommentsTab + `incident`

**Page:** CommentsTab  
**Layer:** `ui`  
**Role:** dev  
**devSlash:** `/implement-message-service`

### Source

| | |
|--|--|
| common | `src/components/shared/CommentsTab/CommentsTab.tsx` |

**from_design:** GAP-PT-COMMON-01 · DES-MSG-SEC-CMT  
**from_solution:** comment `type=comment` · `parent_id` · prefix `medical-incidents`  
**ssot.reuse:** CommentsTab · useMessages  
**implement.wire:** CommentsTab → POST/GET `…/messages?type=comment`  
**implement.state:** props-driven · no page-local comment store  
**Skills:** `/implement-message-service`  
**APIs:** API-04 · API-05  
**DoD:**
- [ ] Prop `entityType: 'ticket' | 'task' | 'incident'`
- [ ] Mount sẵn sàng cho parcel `mode=both|comments` (GAP-PT-COMMENT-UI-01)
- [ ] **Cấm** invent comment API path

**Deps:** T-CTX-01

---

## T-ROUTEMAP-01 — routeMap / detailRoute (GAP-MSG-ROUTE-01)

**Page:** ChatPanel ↗ + ChatSectionParcel  
**Layer:** `ui`  
**Role:** dev  
**devSlash:** `/implement-message-service`

### Source

| | |
|--|--|
| common | ChatPanel (remove hard-code-only detail) |
| mfe | ChatSectionParcel props |

**source.routes (confirmed route_a):**

| entityType | path |
|------------|------|
| task | `/cv/:id` |
| incident | `/su-co/:id` |
| ticket | `/tickets/:id` (host default) |

**from_design:** §5 prop shape · detailLink  
**from_solution:** ChatSectionParcelProps · **cấm** if-domain trong common  
**ssot.reuse:** host inject only  
**implement.wire:**
  ui: `routeMap?.[entityType](id)` \|\| `detailRoute` → `onNavigate(path)`  
  **cấm** hard-code Medical paths as sole SSOT when routeMap provided  
**implement.state:** n/a (navigate callback)  
**Skills:** `/implement-message-service`  
**DoD:**
- [ ] ChatPanel accepts optional `routeMap` / `detailRoute` / `onNavigate` (hoặc host wrapper) — **không** chỉ `getDetailRoute` Medical hard-code
- [ ] Parcel props match SA §3 TypeScript shape
- [ ] RMMS host example uses `/cv/:id` · `/su-co/:id`
- [ ] **Cấm** `if (product === 'rmms')` trong common

**Deps:** T-COMMON-CAST-01

---

## T-PARCEL-CHAT-SECTION-01 — Export ChatSectionParcel

**Page:** ChatSectionParcel  
**Layer:** `ui`  
**Role:** dev  
**devSlash:** `/implement-message-service`

### Source

| | |
|--|--|
| mfe | `D:\MFE-CORE\Linm.Web.Message` |
| files | `src/parcels/ChatSectionParcel.tsx` (new) · `src/message.tsx` export · MessageParcelShell reuse |
| domain | — |
| api | cite FE `endpoint.ts` / common hooks |

**from_design:** DES-MSG-SEC-TAB · SEC-CHAT · SEC-CMT · AC-P-01…04  
**from_solution:** GAP-MSG-PARCEL-01 CLOSE · prop shape  
**ssot.platform_ui:** common ChatTab · CommentsTab · TabSlideout · useMessages · useEntitySubscription  
**ssot.reuse:**
  ui: ChatTab · CommentsTab · TabSlideout · LeaveConfirmModal (via T-LEAVE)  
  http: apiClient + message endpoint (common)  
  state: useMessages · subscription hook · MessageParcelShell unread reconnect only  
**implement.wire:**
  ChatSectionParcel → ChatTab/CommentsTab → useMessages → GET/POST `/{prefix}/{id}/messages`  
  mute → API-06 subscriptions  
  expand → TabSlideout local  
  ↗ → routeMap (T-ROUTEMAP-01)  
**implement.state:**
  form: n/a (composer local dirty → Leave)  
  list: n/a  
  redux_common: auth/toast from common · inbox slice only for Center/Inbox  
  parcel: props `entityType` · `entityId` · `onNavigate` · `mode?` · `routeMap?` · `detailRoute?`  
**Skills:** `/implement-message-service` · parcel-contract · `ssot-no-duplicate`  
**APIs:** API-04 · API-05 · API-06  
**source.routes:** confirmed table above  
**DoD:**
- [ ] Export **3** parcels: MessageCenterParcel · MessagesInboxParcel · **ChatSectionParcel**
- [ ] Tabs index **0** `chat` Trao đổi · **1** `comments` Bình luận — **cấm** reorder (**GAP-TAB-01**)
- [ ] `mode=chat|comments|both` (default `both`)
- [ ] Send `fa-paper-plane` · expand `fa-expand`/`fa-compress`
- [ ] Wrap **only** common components — **cấm** copy markup
- [ ] **Cấm** `signalRService.start()` trong Message MFE (**MSG-SVC-01**)
- [ ] Center + Inbox **giữ** visual · unread reconnect only
- [ ] FE `yarn build` PASS (**role Dev only**)

**Deps:** T-COMMON-CAST-01 · T-COMMON-COMMENTS-INCIDENT-01 · T-ROUTEMAP-01  
**Notes:** Live `message.tsx` hiện chỉ export Center + Inbox

---

## T-LEAVE-01 — LeaveConfirmModal dirty composer

**Page:** ChatSection / ChatPanel composer  
**Layer:** `ui`  
**Role:** dev  
**devSlash:** `/implement-message-service`

**from_design:** DES-MSG-LEAVE · GAP-DES-LEAVE-01  
**ssot.reuse:** `LeaveConfirmModal` · `useLeaveConfirm` / `useFormLeaveGuard` từ common  
**Skills:** `/implement-show-leave-confirm`  
**DoD:**
- [ ] Dirty `messageBody` / `commentBody` → Modal khi đóng slideout / đổi tab / navigate
- [ ] **Cấm** `window.confirm` / `window.alert` / `prompt`
- [ ] API fail → toast / `useAlert` only

**Deps:** T-PARCEL-CHAT-SECTION-01

---

## T-TYP-01 — Typography GAP-TYP-01

**Page:** composer + labels  
**Layer:** `ui`  
**Role:** dev

**from_design:** AC-P-07 · control-map label 13 · input D14/M16  
**Skills:** `typography-analy-qa`  
**DoD:**
- [ ] Label **13px** · input Desktop **14** / Mobile **16**
- [ ] **Cấm** label 12 trên message/comment fields
- [ ] Parity prototype + live peer

**Deps:** T-PARCEL-CHAT-SECTION-01

---

## T-UI-UX-01 — UI/UX constitution (platform chat)

**Page:** Topbar + Inbox + ChatSection  
**Layer:** `ui`  
**Role:** dev

**from_design:** modern chat visual · soft surface · **cấm** purple AI default · **cấm** DES-GRID  
**ssot.reuse:** common MessageCenter · ChatPanel · existing CSS tokens  
**Skills:** `dev-ui-ux-constitution` · `/dev-ui-review`  
**DoD:**
- [ ] Zones DES-MSG-* parity prototype reviewUrl
- [ ] Empty list thật · **cấm** fake demo row
- [ ] **Cấm** Kind B grid/toolbar/config patterns

**Deps:** T-PARCEL-CHAT-SECTION-01

---

## T-UI-RESP-01 — Responsive web

**Page:** Inbox split + ChatSection  
**Layer:** `ui`  
**Role:** dev  
**devSlash:** `/dev-web-responsive`

**Skills:** `/dev-web-responsive` · `/dev-ui-review`  
**DoD:**
- [ ] Verify **1280 / 768 / 375**
- [ ] Inbox: mobile back từ chat pane (live pattern)
- [ ] Desktop+Tablet **1 layout** · Mobile Web **không** chỉ shrink broken

**Deps:** T-UI-UX-01

---

## T-PERM-01 — Permissions (reuse · no invent)

**Page:** message surfaces  
**Layer:** `ui`  
**Role:** dev

**from_solution:** Auth reuse Medical participant · **cấm** `rmms.messages.*` P1  
**ssot.platform_auth:** Medical / host entity perms  
**ssot.reuse:** existing gates on conversations + entity messages  
**Skills:** cite only · **cấm** `/new-endpoint` perm registry RMMS  
**DoD:**
- [ ] Không invent RMMS message permission codes P1
- [ ] FE không bypass host auth trên send/list

**Deps:** T-CTX-01

---

## T-QA-PARCEL-01 — QA scenarios (queued e2e)

**Page:** platform-message  
**Layer:** `qa`  
**Role:** qa  
**devSlash:** `/agent-qa` (e2eQa ON)

**from_design:** AC-P-01…08  
**APIs:** cite API-01…06  
**mfeStdUrl:** `http://localhost:9301/platform-message` (Dev điền runtime)  
**DoD / scenarios seed (QA viết `qa/scenarios.md`):**
- [ ] 3 exports present
- [ ] Tabs 0 Trao đổi · 1 Bình luận
- [ ] Send chat + comment `fa-paper-plane`
- [ ] Expand TabSlideout · ↗ routeMap `/cv/:id` · `/su-co/:id`
- [ ] `incident` trên ChatPanel + CommentsTab
- [ ] LeaveConfirmModal dirty · **0** native dialog
- [ ] Typography label 13 / input D14
- [ ] **0** `signalRService.start()` trong Message MFE
- [ ] Empty/4xx toast · **0** fake demo row
- [ ] e2eQa ON → runtime + PNG (**chỉ** QA role)

**Deps:** all UI tasks  
**Notes:** TL **cấm** chạy e2e / start:std

---

## Rules

- Một lock / feature trong STATUS
- Dev **cấm** start nếu thiếu **source** + skills + API cite
- **Cấm** T-UI-LIST / DES-GRID / RMMS MessagesController / Message.Api P1
- Commit chỉ sau `commit_confirm`
- Deps: common bumps → parcel export → leave/typ/ux → qa
- GAP-PT-INBOX-01 **DEFER** · platform-task **không** start trong pack này

---

## Handoff → Dev / QA

| Task | Ready? | Missing source/SD |
|------|--------|-------------------|
| T-CTX-01 | ✅ | — |
| T-COMMON-CAST-01 | ✅ | common ChatPanel path |
| T-COMMON-COMMENTS-INCIDENT-01 | ✅ | CommentsTab path |
| T-ROUTEMAP-01 | ✅ | route_confirm locked |
| T-PARCEL-CHAT-SECTION-01 | ✅ | MFE + common |
| T-LEAVE-01 · T-TYP-01 · T-UI-UX-01 · T-UI-RESP-01 | ✅ | — |
| T-PERM-01 | ✅ | reuse only |
| T-QA-PARCEL-01 | ✅ after Dev | mfeStdUrl runtime |

| Field | Value |
|-------|-------|
| Next slash | `/implement-message-service` (Dev) → `/agent-qa*` |
| phase_from / phase_to | team-lead → **dev** |
| msg_kind | `parcel_only` |
| route_confirm | `route_a` locked |
| e2e | queued QA only |

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-team-lead |
| skillVersion | 2026.08.19.04 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.25.02 |
| rulesVersion | 2026.08.25.7 |
| generatedAt | 2026-08-26T00:24:00.000Z |
| versionGate | ok |
| version_mismatch_action | recheck_new (prior SA) |
| contentHashPriorDataAnaly | sha256:d0cbce57a4131006ffab87e075dc05160c8734389e1d9968e6aeadfe484b6cea |
| real_view_parity | v1 |
| taskId | `task_8b762097` |
| route_confirm | route_a · autopilot |
| backup | `specs/platform-message/_backup/20260825T152000Z` |

---
<!-- Version meta: skillId=agent-team-lead skillVersion=2026.08.19.04 schemaVersion=2 workflowVersion=2026.08.25.02 rulesVersion=2026.08.25.7 versionGate=ok -->
