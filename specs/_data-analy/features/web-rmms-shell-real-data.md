# Data-analy — real-data bind — web-rmms-shell

| Field | Value |
|-------|-------|
| feature | `web-rmms-shell` |
| title | Tab bar Home · Field · Incident · Work |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_6cee6055` |
| prefix API | multi — Auth · Notification · peer Patrol/Incident/Maintenance/Asset |
| prefix BFF web (cite) | `web-bff/api/v1/*` · **không** base client |
| prefix BFF mobile (HARD) | `mobile-bff/api/v1` · host `http://localhost:5202` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-shell` |
| domain | **Shell chrome** · Auth + Notification (+ cite peer domains) |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| analyzedAt | `2026-09-25T11:17:19.162Z` |
| demo | **N/A** · **cấm** demo-json / in-app mock SSOT |

## § Scope shell

| In | Out |
|----|-----|
| SH-00…06 · TabBar 4 · login · Home chrome · Field 2-door nav · tab roots | `me*` · feedback · cam-view · journal-lines · findings · session close/handover · frequency-plans (b–e) |
| API **Live** auth · session-window · notification/overview · profile | API **Mới** cho shell · invent me endpoints |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/web-rmms-shell.md` | — | — |
| `plan` | `docs/plan/web-rmms-mobile/PLAN.md` · Shell · Map | — | bỏ tab me |
| `screens` | `docs/plan/web-rmms-mobile/SCREENS.md` | — | BFF + GPS rules |
| `peer` | `web-rmms-mobile-a` … `e` CTX | n/a | deep Field owners |
| `api` | Auth · Notification controllers · contract-accounts session-window | empty badge=0 | toast · **cấm** `window.alert` |
| `bff` | Mobile.Bff `:5202` · rewrite auth/files · proxy RMMS | 503 | retry |
| `domain-map` | Auth/Notification/Patrol/Incident/Maintenance/Asset | — | **GAP** slug shell · **cấm ERP.*** |
| `catalog` | — (shell không master form) | — | labels via `useFormOptions` |
| `auth` | `auth/login` · `auth/refresh-token` · `auth/profile` | guest Home | redirect login staff actions |
| `geo` | device Geolocation (deep only) | deny → block coords actions | **cấm** fake lat/lng |
| `demo` | — | N/A | **cấm** demo SSOT |

## §B — Bind field (HARD) — shell chrome

| uiField | Label (key) | controlHint | catalogKind | GET | write field | sameMfe | sameMobile |
|---------|-------------|-------------|-------------|-----|-------------|---------|------------|
| tab.items | tab.* | TabBar | LOOKUP_STATIC copy | — | route switch | n/a | Android 4-tab (no me) |
| login.user | tài khoản | Text | — | — | login body | peer login | n/a |
| login.pass | mật khẩu | Password | — | — | login body | peer | n/a |
| session | phiên | derived | — | `POST auth/login` · `POST auth/refresh-token` | JWT store | peer | n/a |
| sessionWindow | cửa sổ HĐ | gate | — | `GET contract-accounts/session-window?authUserId=` | — | peer | n/a |
| profile.displayName | tên | Text RO | — | `GET auth/profile` | — | peer | n/a |
| notify.unread | badge | Number RO | — | `GET notification/overview` | — | peer ops | n/a |
| home.quickActions | quick | Button/Nav | — | — | nav only | SCREENS Home | n/a |
| home.grid | grid 6 | Button/Nav | — | — | nav only | SCREENS Home | n/a |
| field.doorPatrol | tuần đường | Button/Nav | — | optional `GET patrol/sessions` badge `Đang tuần`+`Tuần đường` | nav `/field/tuan-duong` | peer A | n/a |
| field.doorInspect | tuần kiểm | Button/Nav | — | optional sessions badge `Tuần kiểm` | nav `/field/tuan-kiem` | peer A | n/a |
| incident.root | list SC | List stub | — | peer `GET incident/incidents` (owner peer) | — | cite | n/a |
| work.root | list CV | List stub | — | peer `GET maintenance/work-orders` | — | cite | n/a |

**Cấm** invent shell domain CRUD · **cấm** ERP.* · **cấm** fake GPS · **cấm** hardcode VN labels trên form.

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| LOOKUP_STATIC | FE `useFormOptions` / LinmCopy `tab.*` · Home keys | PLAN tabItems · CTX | hardcode label VN |
| road-route / asset-types / … | peer features | DOMAIN-MAP Integration | shell không bind master form |
| files | peer deep screens | FileService via Mobile.Bff | persist full URL trong shell |
| profile | `GET auth/profile` | Auth | invent user API trong shell |

## §D — Map / vẽ

| Mục | Ghi |
|-----|-----|
| map | **none** trên shell chrome |
| GPS | không capture trên TabBar/Home guest · deep = peer |
| Map nav | Home → `/gis` · `/patrol-map` = peer routes |

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| AuthJWT | local/session | login/refresh/logout | auth/* | gate staff Home |
| SessionAllowed | contract-accounts | server | session-window | 403 → thoát |
| ActiveTab | shell state | user tap | — | TabBar highlight |
| UnreadBadge | notification | mark-read peer | overview | Home/ops badge |
| ActivePatrolDoor | patrol sessions (optional) | peer A | GET sessions | badge 2 cửa |

`progress: shell session + tab` — không WO/incident lifecycle trên shell.

## §F — Handoff

| Role | Need |
|------|------|
| PO | DoD: 4 tab · no me · login · Home guest/staff · Field 2 doors · Live BFF |
| Design | SH zones · Android parity · reviewUrl |
| SA | Add DOMAIN-MAP `web-rmms-shell` · confirm Mobile.Bff paths |
| TL | Tasks shell scaffold + tab routes + login gate |
| Dev | Implement Mobile MFE only |
| QA | Tab switch · login gate · no me routes · phone 430 |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=2` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `rulesVersion=2026.09.25.2` · `analyzedAt=2026-09-25T11:17:19.162Z`
