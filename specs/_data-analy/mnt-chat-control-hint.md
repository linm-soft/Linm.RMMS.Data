# Control hint — mnt-chat (mobile · Trao đổi công việc)

| | |
|---|---|
| feature | `mnt-chat` |
| title | [Mobile] [Công việc] -> Trao đổi công việc |
| kind | `sheet` (STATUS packKind) · **demo surface** = **full screen** `#sc-mnt-chat` |
| packKind | **`sheet`** → screen chat |
| changeScope | `edit_page` · qaFailFix implement |
| mode | `feature_context` |
| demo | `specs/mnt-chat/ui/prototype/{ios,android}/index.html` · entry `mnt-list` `#i-chat` → `#sc-mnt-chat` |
| ctx | `docs/context/features/mnt-chat.md` · peers `mnt-list` · `incident-chat` |
| map | `specs/mnt-chat/ui/html-to-native-map.md` |
| agent | `agent-data-analy-mobile` · backfill Dev qaFix |
| at | `2026-09-01T09:35:00.000Z` |
| thisAction | **Trao đổi công việc** · entry list card `#i-chat` / `btn-mnt-chat-{id}` · **cấm** toast-only · **cấm** gộp list/estimate/progress/log |
| taskId | `task_e0e94a4c` |
| autoApprove | `ON` |
| status | **confirmed** |
| controlHint | `DES-MOB-MNT-CHAT` · TopBar + thread + composer paper-plane |

**Cấm:** watermark Gói · invent `api/v1/mnt-chat` · toast-only `#i-chat` · ERP.* · mfeStdUrl · kit VM/API · SignalR kit hub (Notification owns).

## Skill packet — 4 file

| File | Skill step |
|------|------------|
| **file này** | 4–5 controlHint + tech factors |
| [`mnt-chat-bff-endpoints.md`](mnt-chat-bff-endpoints.md) | 6 BFF · **cấm invent** |
| [`mnt-chat-action-tree.md`](mnt-chat-action-tree.md) | 7 tree + share/reuse |
| [`mnt-chat-real-data.md`](mnt-chat-real-data.md) | 6b real-data bind |

## § Delta Current vs New (`edit_page` · post lock)

| ID | Current (native) | New / SSOT | Surface |
|----|------------------|------------|---------|
| GAP-MOB-EDIT-01 | Full `#sc-mnt-chat` wired | **Giữ** · **cấm** revert toast | entry + screen |
| GAP-SA-ANALY-EMPTY-01 | stub draft | **CLOSED** this backfill | analy |
| GAP-SA-BFF-MISS-01 | missing packs | **CLOSED** bff + action-tree | analy |
| GAP-MSG-HUB-01 | HTTP only | DEFER SignalR · Notification | events |

**Reuse:** `LinmChatThread` · `LinmChatComposer` · Message contract peer `incident-chat` · parent `mnt-list` card `#i-chat`.

## UI control — `#sc-mnt-chat`

| Field / zone | controlHint | Kit (iOS + Android) | Native |
|--------------|-------------|---------------------|--------|
| actChat | Trao đổi | `LinmIconButton` `#i-chat` | card · `btn-mnt-chat-{id}` · `onOpenChat` |
| topBar | Trao đổi công việc | `LinmTopBar` | title + leading back «Công việc» |
| subtitle | WO code · title | Text | from seed |
| threadList | Bubbles mine/theirs | `LinmChatThread` | `isMine` |
| empty | Chưa có trao đổi | thread emptyTitle | `mnt.chat.empty` |
| composer | Nhập tin nhắn… | `LinmChatComposer` | paper-plane send |
| btnSend | Gửi | composer send | POST message |

### Copy SSOT

| Key | VN |
|-----|-----|
| `mnt.chat.title` | Trao đổi công việc |
| `mnt.chat.back` | Công việc |
| `mnt.chat.placeholder` | Nhập tin nhắn… |
| `mnt.chat.send` | Gửi |
| `mnt.chat.empty` | Chưa có trao đổi |
| `mnt.chat.a11y` | Trao đổi |
| icon | `#i-chat` **cấm** invent |

## § Tab index

`tabs: none` trên chat — entry từ `mnt-list` trong shell tab maintenance. **Không** segment trên chat.

## Kit map

| Demo chrome | Kit dual |
|-------------|----------|
| `#i-chat` | `LinmIconButton` |
| `#sc-mnt-chat` TopBar | `LinmTopBar` |
| thread | `LinmChatThread` |
| composer | `LinmChatComposer` |

## Tech factors

| Factor | Detail | Note |
|--------|--------|------|
| GPS | no | — |
| camera | no | media OUT P1 |
| offline | load/send fail toast | **cấm** fake OK |
| map | no | — |
| biometric | no | — |
| push | no | hub DEFER |
| token | Keychain / Encrypted | Bearer BFF |

## Hành vi (không `alert`)

| Case | UI |
|------|-----|
| Tap `#i-chat` | Navigate `#sc-mnt-chat` · **0** `mnt.list.toast.chat` |
| Appear | GET messages · empty OK |
| Send | POST `{ content, type:"message" }` · append · fail toast |
| Back | pop → list |

## UNCLEAR

**none** — CTX + live Message contract chốt.

## Handoff → Dev/QA

| Field | Value |
|-------|-------|
| feature / packKind | `mnt-chat` / sheet→screen |
| BFF | `mnt-chat-bff-endpoints.md` |
| Action tree | `mnt-chat-action-tree.md` |
| Real-data | `mnt-chat-real-data.md` |
| DoD | Dual OS `#sc-mnt-chat` · kit thread+composer · GET/POST messages · **cấm** toast entry |
| Out | invent path · ERP.* · SignalR kit · mfeStdUrl |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | `2026-09-01T09:35:00.000Z` |
| versionGate | ok |
| contentHash | sha256:mnt-chat-mobile-control-hint-20260901 |
| ctxHash | sha256:mnt-chat-ctx-20260901 |
| taskId | `task_e0e94a4c` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 versionGate=ok · qaFix backfill task_e0e94a4c -->
