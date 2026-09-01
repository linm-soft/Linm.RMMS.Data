# Real-data bind — mnt-chat (mobile)

| | |
|---|---|
| feature | `mnt-chat` |
| prefix | `mobile-bff/api/v1` |
| sameMobile | yes · proxy Maintenance domain WorkOrder messages |
| taskId | `task_e0e94a4c` |
| status | **confirmed** |

Skill: `example/real-data-bind.md` · **GAP-MOB-REAL-01**

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `api` | CTX `mnt-chat.md` · `WorkOrdersController` messages · BFF catch-all | empty thread OK | toast loadFail / sendFail · **cấm** fake |
| `derived` | parent card `id` · `title` · `code` → `MntChatSeed` | missing id → toast missing | **cấm** invent id |
| `local` | copy keys `mnt.chat.*` | — | — |
| `catalog` | n/a | — | — |

## §B — Bind field (HARD · khớp BFF table)

| uiField | Label | controlHint | catalogKind | GET / write | write field | sameMfe | sameMobile |
|---------|-------|-------------|-------------|-------------|-------------|---------|------------|
| actChat | Trao đổi | IconButton `#i-chat` | — | nav open chat | — | n/a | yes |
| workOrderId | — | Hidden | — | path `{id}` | — | gap | yes |
| subtitle | WO | Text | — | seed code/title | — | n/a | yes |
| threadList | Thread | ChatThread | — | `GET maintenance/work-orders/{id}/messages?type=message` | — | gap | yes |
| messageBody | Nội dung | Composer | — | — | `content` | gap | yes |
| btnSend | Gửi | Composer send | — | `POST …/messages` | `{ content, type:"message" }` | gap | yes |
| isMine | — | Bubble side | — | DTO `isMine` | — | gap | yes |

§B path **khớp** `mnt-chat-bff-endpoints.md` — **cấm** invent `api/v1/mnt-chat`.

### Display rules

| Line | Rule |
|------|------|
| header | title «Trao đổi công việc» · subtitle seed code/title |
| thread | live DTO only · empty «Chưa có trao đổi» |
| send | POST 200 → append · fail → toast · **cấm** fake 200 |
| entry | **navigate** screen · **0** `mnt.list.toast.chat` |

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| — | n/a | — | Invent message catalog |

## §D — Map / vẽ

`map: none`.

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| Thread loaded | GET messages | appear | GET | thread |
| Draft | local | user type | — | composer |
| Sent | POST | user send | POST | append bubble |
| WO status | OUT | — | — | **không** đổi từ chat |

## §F — Handoff

| Role | Dùng packet |
|------|-------------|
| Dev iOS + Android | `#sc-mnt-chat` · kit · GET/POST · **cấm** toast entry |
| QA | e2e dual · A3/P6 PNG · Maestro |
| SA/BE | Message entity live · Step 4b N/A (already Signed) |

## Demo rows SSOT (fallback UI only)

| Field | Value |
|-------|-------|
| Title | Trao đổi công việc |
| Empty | Chưa có trao đổi |
| Placeholder | Nhập tin nhắn… |
| Icon | `#i-chat` |

## § Cấm

- Watermark / «bản Gói N»
- Fake thread / fake POST
- Invent mobile-only path `mnt-chat`
- Bind `mfeStdUrl`
- Skip §B ≠ BFF → **GAP-MOB-REAL-01**
- Revert toast-only entry → **GAP-MOB-EDIT-01**

## Gaps

| ID | Note |
|----|------|
| GAP-SA-ANALY-EMPTY-01 | **CLOSED** this backfill |
| GAP-MSG-HUB-01 | SignalR DEFER · Notification |

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
| contentHash | sha256:mnt-chat-mobile-real-data-20260901 |
| taskId | `task_e0e94a4c` |

---
<!-- Version meta: skillId=agent-data-analy-mobile · qaFix backfill task_e0e94a4c -->
