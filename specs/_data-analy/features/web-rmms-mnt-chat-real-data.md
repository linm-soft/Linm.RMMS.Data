# Data-analy — real-data bind — web-rmms-mnt-chat

| Field | Value |
|-------|-------|
| feature | `web-rmms-mnt-chat` |
| title | Chat công việc — thread + composer |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_a2f6c6c0` |
| prefix API | Maintenance `work-orders/{id}/messages` |
| prefix BFF web (cite) | `web-bff/api/v1/*` · **không** base client |
| prefix BFF mobile (HARD) | `mobile-bff/api/v1` · host `http://localhost:5202` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-mnt-chat` |
| domain | **Maintenance** · work-order messages |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| analyzedAt | `2026-09-26T06:23:32.000Z` |
| demo | **N/A** · **cấm** demo-json / in-app mock SSOT |

## § Scope Chat

| In | Out |
|----|-----|
| CH-00…04 · TopBar WO · thread GET · composer POST · entry từ work list | `me*` · progress write · nhật ký · estimate · Field 2-door deep · journal-lines · findings · session close · frequency (b–e) · SignalR kit · invent `api/v1/mnt-chat` |
| API **Live** messages GET/POST · WO GET header | toast-only thay screen · ERP.* |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/web-rmms-mnt-chat.md` | — | — |
| `peer-context` | `mnt-chat.md` · `web-rmms-work.md` | n/a | entry `#i-chat` |
| `screens` | `SCREENS.md` · `/work/chat` | empty thread | toast · **cấm** `window.alert` |
| `api` | GET/POST `…/work-orders/{id}/messages` · GET `{id}` | [] | retry · back list |
| `bff` | Mobile.Bff `:5202` · rewrite maintenance | 503 | retry |
| `domain-map` | Maintenance · peer `web-rmms-work` messages | — | **GAP** slug chat · **cấm ERP.*** |
| `catalog` | — (chat không master form) | — | labels via `useFormOptions` |
| `auth` | session JWT · `isMine` from server | unauth → login | shell |
| `geo` | không trên chat | — | peer deep only |
| `demo` | — | N/A | **cấm** demo SSOT |

## §B — Bind field (HARD) — Chat

| uiField | Label (key) | controlHint | catalogKind | GET | write field | sameMfe | sameMobile |
|---------|-------------|-------------|-------------|-----|-------------|---------|------------|
| topBar.title | work.chat.title | Static | LOOKUP_STATIC copy | — | — | SCREENS | `#sc-mnt-chat` |
| topBar.subtitle | work.chat.woSubtitle | Text RO | — | `GET maintenance/work-orders/{id}` | — | peer work | n/a |
| topBar.back | work.chat.back | Button/Nav | — | — | nav `/work` | peer | n/a |
| thread.items | work.chat.thread | ChatThread | — | `GET …/messages?type=message` | — | SCREENS | Live BFF |
| bubble.content | work.chat.bubble | ChatBubble | — | `content` · `isMine` · `createdAt` | — | peer | n/a |
| thread.empty | work.chat.empty | EmptyState | LOOKUP_STATIC | — | — | SCREENS | n/a |
| composer.content | work.chat.composer | TextArea | — | — | `content` | SCREENS | POST body |
| composer.send | work.chat.send | Button | — | — | POST `{ content, type:"message" }` | SCREENS | paper-plane |
| entry.chatIcon | work.list.chat | Button/Nav | — | — | nav chat + `id` | peer work | `#i-chat` |

**Cấm** invent `api/v1/mnt-chat` · **cấm** ERP.* · **cấm** fake GPS · **cấm** hardcode VN labels trên form · **cấm** toast-only.

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| LOOKUP_STATIC | FE `useFormOptions` / LinmCopy `work.chat.*` | SCREENS · CTX | hardcode label VN |
| work-order header | `GET maintenance/work-orders/{id}` | Maintenance | invent header DTO |
| messages | GET/POST `…/messages` | Maintenance · `rmms_work_order_messages` | invent ChatController / path slug |
| init-data | `GET …/init-data` (opt labels) | Mobile.Bff forms | web-bff client |

## §D — Map / vẽ

| Mục | Ghi |
|-----|-----|
| map | **none** trên chat surface |
| GPS | không capture trên chat · peer progress/photo-geo only |
| realtime | P1 HTTP · re-GET sau POST · **cấm** kit SignalR |

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| WorkOrderId | route/query từ list | nav peer | — | required · missing → empty+back |
| ThreadItems | messages GET | load / after send | GET messages | bubbles |
| ComposerDraft | local | user | — | clear after OK POST |
| WoStatusChrome | WO GET | first load | GET `{id}` | subtitle / badge cite |

`progress: chat thread` — không đổi WO status trên slug này (progress peer).

## §F — Handoff

| Role | Need |
|------|------|
| PO | DoD: Live GET/POST · kit chat · no me · no toast-only |
| Design | CH zones · Android parity · reviewUrl `#sc-mnt-chat` |
| SA | Add DOMAIN-MAP `web-rmms-mnt-chat` · confirm Mobile.Bff paths |
| TL | Tasks chat page + entry wire |
| Dev | Implement Mobile MFE chat only |
| QA | Thread load/send · empty/error · phone 430 · no me · no GPS |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=2` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `rulesVersion=2026.09.25.2` · `analyzedAt=2026-09-26T06:23:32.000Z`
