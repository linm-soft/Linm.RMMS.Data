# Data-analy — real-data bind — web-rmms-incident-chat

| Field | Value |
|-------|-------|
| feature | `web-rmms-incident-chat` |
| title | Chat sự cố — thread + composer |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_2307d3a0` |
| prefix API | Incident `incidents/{id}/messages` |
| prefix BFF web (cite) | `web-bff/api/v1/*` · **không** base client |
| prefix BFF mobile (HARD) | `mobile-bff/api/v1` · host `http://localhost:5202` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-incident-chat` |
| domain | **Incident** · incident messages |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| analyzedAt | `2026-09-26T02:32:45.000Z` |
| demo | **N/A** · **cấm** demo-json / in-app mock SSOT |

## § Scope Chat

| In | Out |
|----|-----|
| CH-00…04 · TopBar incident · thread GET · composer POST · entry từ incident list | `me*` · create/detail deep · vis · estimate · journal-lines · session close · frequency (b–e) · SignalR kit · invent `api/v1/incident-chat` · mnt-chat gộp |
| API **Live** messages GET/POST · incident GET header | toast-only thay screen · ERP.* |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/web-rmms-incident-chat.md` | — | — |
| `peer-context` | `incident-chat.md` · `web-rmms-incident.md` | n/a | entry `#i-chat` |
| `screens` | `SCREENS.md` · `/incident/:id/chat` | empty thread | toast · **cấm** `window.alert` |
| `api` | GET/POST `…/incidents/{id}/messages` · GET `{id}` | [] | retry · back list |
| `bff` | Mobile.Bff `:5202` · rewrite incident | 503 | retry |
| `domain-map` | Incident · peer `web-rmms-incident` | — | **GAP** slug chat · **cấm ERP.*** |
| `catalog` | — (chat không master form) | — | labels via `useFormOptions` |
| `auth` | session JWT · `isMine` from server | unauth → login | shell |
| `geo` | không trên chat | — | peer deep only |
| `demo` | — | N/A | **cấm** demo SSOT |

## §B — Bind field (HARD) — Chat

| uiField | Label (key) | controlHint | catalogKind | GET | write field | sameMfe | sameMobile |
|---------|-------------|-------------|-------------|-----|-------------|---------|------------|
| topBar.title | incident.chat.title | Static | LOOKUP_STATIC copy | — | — | SCREENS | `#sc-incident-chat` |
| topBar.subtitle | incident.chat.subtitle | Text RO | — | `GET incident/incidents/{id}` | — | peer incident | n/a |
| topBar.back | incident.chat.back | Button/Nav | — | — | nav `/incident` | peer | n/a |
| thread.items | incident.chat.thread | ChatThread | — | `GET …/messages?type=message` | — | SCREENS | Live BFF |
| bubble.content | incident.chat.bubble | ChatBubble | — | `content` · `isMine` · `createdAt` | — | peer | n/a |
| thread.empty | incident.chat.empty | EmptyState | LOOKUP_STATIC | — | — | SCREENS | n/a |
| composer.content | incident.chat.composer | TextArea | — | — | `content` | SCREENS | POST body |
| composer.send | incident.chat.send | Button | — | — | POST `{ content, type:"message" }` | SCREENS | paper-plane |
| entry.chatIcon | incident.list.chat | Button/Nav | — | — | nav chat + `id` | peer list | `#i-chat` |

**Cấm** invent `api/v1/incident-chat` · **cấm** ERP.* · **cấm** fake GPS · **cấm** hardcode VN labels trên form · **cấm** toast-only.

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| LOOKUP_STATIC | FE `useFormOptions` / LinmCopy `incident.chat.*` | SCREENS · CTX | hardcode label VN |
| incident header | `GET incident/incidents/{id}` | Incident | invent header DTO |
| messages | GET/POST `…/messages` | Incident · `rmms_incident_messages` | invent ChatController / path slug |
| init-data | `GET …/init-data` (opt labels) | Mobile.Bff forms | web-bff client |

## §D — Map / vẽ

| Mục | Ghi |
|-----|-----|
| map | **none** trên chat surface |
| GPS | không capture trên chat · peer create/photo-geo/vis only |
| realtime | P1 HTTP · re-GET sau POST · **cấm** kit SignalR |

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| IncidentId | route/query từ list | nav peer | — | required · missing → empty+back |
| ThreadItems | messages GET | load / after send | GET messages | bubbles |
| ComposerDraft | local | user | — | clear after OK POST |
| IncidentStatusChrome | incident GET | first load | GET `{id}` | subtitle / badge cite |

`progress: chat thread` — không đổi incident status trên slug này (close/assign peer).

## §F — Handoff

| Role | Need |
|------|------|
| PO | DoD: Live GET/POST · kit chat · no me · no toast-only |
| Design | CH zones · Android parity · reviewUrl `#sc-incident-chat` |
| SA | Add DOMAIN-MAP `web-rmms-incident-chat` · confirm Mobile.Bff paths |
| TL | Tasks chat page + entry wire |
| Dev | Implement Mobile MFE chat only |
| QA | Thread load/send · empty/error · phone 430 · no me · no GPS |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=2` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `rulesVersion=2026.09.25.2` · `analyzedAt=2026-09-26T02:32:45.000Z`
