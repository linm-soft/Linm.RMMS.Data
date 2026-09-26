# Data-analy — real-data bind — web-rmms-home

| Field | Value |
|-------|-------|
| feature | `web-rmms-home` |
| title | Home — guest, quick, lưới 6 ô, wallet |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_1a53bb82` |
| prefix API | Auth · Notification · nav-only peers |
| prefix BFF web (cite) | `web-bff/api/v1/*` · **không** base client |
| prefix BFF mobile (HARD) | `mobile-bff/api/v1` · host `http://localhost:5202` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-home` |
| domain | **Home chrome** · Auth + Notification (+ cite peer domains) |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| analyzedAt | `2026-09-25T12:00:00.000Z` |
| demo | **N/A** · **cấm** demo-json / in-app mock SSOT |

## § Scope Home

| In | Out |
|----|-----|
| HM-00…06 · guest FAQ/privacy/login CTA · staff quick · grid 6 · wallet · badge · profile name | `me*` · Field 2-door deep · journal-lines · findings · session close · frequency (b–e) · TabBar chrome (shell) |
| API **Live** profile · notification/overview | API **Mới** / invent Home CRUD |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/web-rmms-home.md` | — | — |
| `plan` | `docs/plan/web-rmms-mobile/PLAN.md` · Tab home | — | bỏ tab me |
| `screens` | `docs/plan/web-rmms-mobile/SCREENS.md` · `/` Home | — | BFF + GPS rules |
| `peer` | `web-rmms-shell` · `web-rmms-mobile-a`…`e` | n/a | deep owners |
| `api` | Auth profile · Notification overview | badge=0 | toast · **cấm** `window.alert` |
| `bff` | Mobile.Bff `:5202` · rewrite auth/files · proxy RMMS | 503 | retry |
| `domain-map` | Auth/Notification + cite peers | — | **GAP** slug home · **cấm ERP.*** |
| `catalog` | — (Home không master form) | — | labels via `useFormOptions` |
| `auth` | `GET auth/profile` · guest vs staff | guest Home | login CTA |
| `geo` | không trên Home | — | peer deep only |
| `demo` | — | N/A | **cấm** demo SSOT |

## §B — Bind field (HARD) — Home

| uiField | Label (key) | controlHint | catalogKind | GET | write field | sameMfe | sameMobile |
|---------|-------------|-------------|-------------|-----|-------------|---------|------------|
| guest.faq | home.guest.faq | Static | LOOKUP_STATIC copy | — | — | SCREENS | Android guest |
| guest.privacy | home.guest.privacy | Static | LOOKUP_STATIC | — | — | SCREENS | n/a |
| guest.loginCta | home.guest.login | Button | — | — | nav `/login` | shell | n/a |
| quick.patrolPoint | home.quick.patrol | Button/Nav | — | — | tab Field | SCREENS | n/a |
| quick.incidentNew | home.quick.incident | Button/Nav | — | — | nav `/incident/new` | peer | n/a |
| grid.supervise | home.grid.supervise | Button/Nav | — | — | `/supervise` | peer | n/a |
| grid.patrolMap | home.grid.patrol | Button/Nav | — | — | `/patrol-map` | peer | n/a |
| grid.work | home.grid.work | Button/Nav | — | — | tab Work | peer | n/a |
| grid.incident | home.grid.incident | Button/Nav | — | — | tab Incident | peer | n/a |
| grid.asset | home.grid.asset | Button/Nav | — | — | `/asset` | peer | n/a |
| grid.offline | home.grid.offline | Button/Nav | — | — | `/offline` | peer | n/a |
| wallet.asset | home.wallet.asset | Button/Nav | — | — | `/asset` | peer | n/a |
| notify.unread | home.notify.badge | Number RO | — | `GET notification/overview` | tap `/ops` | peer ops | n/a |
| profile.displayName | home.profile.name | Text RO | — | `GET auth/profile` | — | peer | n/a |

**Cấm** invent Home domain CRUD · **cấm** ERP.* · **cấm** fake GPS · **cấm** hardcode VN labels trên form.

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| LOOKUP_STATIC | FE `useFormOptions` / LinmCopy `home.*` · `tab.*` | PLAN Tab home · CTX | hardcode label VN |
| road-route / asset-types / … | peer features | DOMAIN-MAP Integration | Home không bind master form |
| profile | `GET auth/profile` | Auth | invent user API trên Home |
| notify | `GET notification/overview` | Notification | invent inbox CRUD trên Home |

## §D — Map / vẽ

| Mục | Ghi |
|-----|-----|
| map | **none** trên Home surface |
| GPS | không capture trên Home · deep = peer |
| Map nav | grid → `/patrol-map` · `/gis` (via asset hub) = peer |

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| AuthJWT | shell/session | login peer | auth/* | guest vs staff Home |
| ProfileName | auth | first load staff | `GET auth/profile` | header text |
| UnreadBadge | notification | mark-read peer | overview | badge Home→ops |

`progress: Home session chrome` — không WO/incident lifecycle trên Home.

## §F — Handoff

| Role | Need |
|------|------|
| PO | DoD: guest/staff · grid 6 · wallet · badge · Live BFF · no me |
| Design | HM zones · Android parity · reviewUrl |
| SA | Add DOMAIN-MAP `web-rmms-home` · confirm Mobile.Bff paths |
| TL | Tasks Home page + nav stubs |
| Dev | Implement Mobile MFE Home only |
| QA | Guest/staff · grid routes · badge · phone 430 · no me |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=2` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `rulesVersion=2026.09.25.2` · `analyzedAt=2026-09-25T12:00:00.000Z`
