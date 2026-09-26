# Data-analy — real-data bind — web-rmms-ops

| Field | Value |
|-------|-------|
| feature | `web-rmms-ops` |
| title | Thông báo inbox |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_f2f7b48c` |
| prefix API | Notification |
| prefix BFF web (cite) | `web-bff/api/v1/notification/*` · **không** base client |
| prefix BFF mobile (HARD) | `mobile-bff/api/v1` · host `http://localhost:5202` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-ops` |
| domain | **Notification** · inbox + overview |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| analyzedAt | `2026-09-25T12:28:40.379Z` |
| demo | **N/A** · **cấm** demo-json / in-app mock SSOT · **≠** `Linm.RMMS.Demo/.../ops.html` |

## § Scope ops

| In | Out |
|----|-----|
| OP-00…06 · inbox list · mark-read · empty · chrome · overview cite | `me*` · Field 2-door deep · journal-lines · findings · session close · frequency (b–e) · desktop Kind B compose/KPI · petitions |
| API **Live** inbox GET · mark-read POST · overview GET | API **Mới** invent · mobile P1 compose POST/PUT/DELETE |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/web-rmms-ops.md` | — | — |
| `plan` | `docs/plan/web-rmms-mobile/PLAN.md` · `/ops` | — | bỏ tab me |
| `screens` | `docs/plan/web-rmms-mobile/SCREENS.md` · `/ops` | empty list | BFF + no GPS |
| `tasks` | `TASKS.md` · T-W2-01 | — | — |
| `peer` | `web-rmms-home` · `web-rmms-shell` | n/a | badge owner |
| `legacy` | `ops.md` desktop Kind B | n/a | **cite only · out** |
| `api` | inbox · mark-read · overview | [] / badge=0 | toast · **cấm** `window.alert` |
| `bff` | Mobile.Bff `:5202` · proxy notification | 503 | retry |
| `domain-map` | Notification · slug `ops` | — | **GAP** `web-rmms-ops` · **cấm ERP.*** |
| `catalog` | — (không master form) | — | labels via `useFormOptions` |
| `auth` | JWT staff · guest → login | guest | shell login |
| `geo` | không trên `/ops` | — | peer deep only |
| `demo` | — | N/A | **cấm** demo SSOT |

## §B — Bind field (HARD) — ops

| uiField | Label (key) | controlHint | catalogKind | GET | write field | sameMfe | sameMobile |
|---------|-------------|-------------|-------------|-----|-------------|---------|------------|
| phone.frame | — | Layout | — | — | — | SCREENS | Android OpsView |
| inbox.items | ops.inbox.list | List | — | `GET notification/inbox` | — | SCREENS | n/a |
| item.title | ops.inbox.row.title | Text RO | — | inbox item | — | SCREENS | n/a |
| item.sentAt | ops.inbox.row.sentAt | Text RO | — | inbox item | — | SCREENS | n/a |
| item.unread | ops.inbox.row.unread | Badge/State | — | inbox item | — | SCREENS | n/a |
| item.priority | ops.inbox.row.priority | Text RO | LOOKUP_STATIC opt | inbox item | — | SCREENS | n/a |
| item.type | ops.inbox.row.type | Text RO | LOOKUP_STATIC opt | inbox item | — | SCREENS | n/a |
| action.markRead | ops.inbox.markRead | Button/Action | — | — | `POST notification/inbox/{id}/mark-read` | SCREENS | n/a |
| empty.state | ops.inbox.empty | Static | LOOKUP_STATIC copy | — | — | SCREENS | n/a |
| chrome.back | ops.inbox.back | Button/Nav | — | — | nav Home | shell | n/a |
| chrome.title | ops.inbox.title | Static | LOOKUP_STATIC | — | — | SCREENS | n/a |
| chrome.refresh | ops.inbox.refresh | Button | — | reload inbox | — | SCREENS | n/a |
| notify.unread | ops.notify.badge | Number RO | — | `GET notification/overview` | peer Home | peer | n/a |

**Cấm** invent compose domain trên mobile P1 · **cấm** ERP.* · **cấm** fake GPS · **cấm** hardcode VN labels trên form · **cấm** demo `ops.html` SSOT.

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| LOOKUP_STATIC | FE `useFormOptions` / LinmCopy `ops.*` · `tab.*` | SCREENS `/ops` · CTX | hardcode label VN |
| inbox list | `GET notification/inbox` | Notification DOMAIN-MAP | invent list DTO |
| mark-read | `POST …/mark-read` | SCREENS | invent mark API |
| overview | `GET notification/overview` | peer Home/shell | invent badge CRUD |
| desktop compose | legacy `ops.md` | Out P1 mobile | POST/PUT/DELETE compose |

## §D — Map / vẽ

| Mục | Ghi |
|-----|-----|
| map | **none** trên `/ops` |
| GPS | không capture · không xin quyền trên inbox |
| Map nav | out — peer Patrol/Gis |

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| AuthJWT | shell/session | login peer | auth/* | guest block |
| InboxItems | notification | first load / refresh | `GET inbox` | OP-01 list |
| ItemRead | notification | tap unread | `POST mark-read` | OP-02/03 |
| UnreadBadge | notification | mark-read / overview | overview | peer Home |

`progress: notification read-state` — không WO/incident lifecycle trên ops.

## §F — Handoff

| Role | Need |
|------|------|
| PO | DoD: inbox · mark-read · Live BFF · no me · ≠ desktop compose |
| Design | OP zones · Android parity · reviewUrl |
| SA | Add DOMAIN-MAP `web-rmms-ops` · confirm Mobile.Bff paths |
| TL | Tasks `/ops` page + mark-read |
| Dev | Implement Mobile MFE ops only |
| QA | List · mark-read · empty · phone 430 · no me · no GPS gate |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=2` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `rulesVersion=2026.09.25.2` · `analyzedAt=2026-09-25T12:28:40.379Z`
