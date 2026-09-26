# Data-analy — real-data bind — web-rmms-supervise

| Field | Value |
|-------|-------|
| feature | `web-rmms-supervise` |
| title | Giám sát và chi tiết — list check-in + RO detail |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_b6e497f4` |
| prefix API | Patrol `attendance-logs` |
| prefix BFF web (cite) | `web-bff/api/v1/*` · **không** base client |
| prefix BFF mobile (HARD) | `mobile-bff/api/v1` · host `http://localhost:5202` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-supervise` |
| domain | **Patrol** · `attendance-logs` (cite Integration road-route filter) |
| contentHash | `sha256:bd4aedbcdb3686ca817a32c3f563270adc1d35b1f7bca526be023528a1840d2b` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| analyzedAt | `2026-09-26T02:27:00.000Z` |
| demo | **N/A** · **cấm** demo-json / in-app mock SSOT / demoDays |

## § Scope Supervise

| In | Out |
|----|-----|
| SUP-00…08 · list filter · segment map nav · RO detail | attendance hub POST · Face/NFC · invent `supervise*` API · zone config |
| API **Live** GET list + GET/{id} `patrol/attendance-logs` | API **Mới** `/supervise/*` P1 · invent entity · POST/PUT/DELETE logs |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/web-rmms-supervise.md` | — | — |
| `peer` | `docs/context/features/supervise.md` · `supervise-detail.md` | — | — |
| `screens` | `docs/plan/web-rmms-mobile/SCREENS.md` · `/supervise*` | — | BFF |
| `plan` | `docs/plan/web-rmms-mobile/PLAN.md` · Supervise*View | — | — |
| `api` | `GET patrol/attendance-logs` · `GET …/{id}` | `[]` | toast · **cấm** `window.alert` |
| `bff` | Mobile.Bff `:5202` · proxy RMMS | 503 | retry |
| `domain-map` | Patrol · `supervise` | — | **GAP** slug web-rmms-supervise · **cấm ERP.*** |
| `geo` | stored Lat/Lng RO | — | **cấm** fake / capture |
| `demo` | — | N/A | **cấm** demo SSOT |

## §B — Bind field (HARD)

| uiField | Label (key) | controlHint | catalogKind | GET | write field | sameMfe | sameMobile |
|---------|-------------|-------------|-------------|-----|-------------|---------|------------|
| filter.route | supervise.filter.route | Select/Text | road-route cite | query `route` | — | SCREENS | filter sheet |
| filter.day | supervise.filter.day | Date | — | client `CheckInAt` | — | SCREENS | client day |
| card.userName | supervise.card.user | Text | — | UserName | — | SCREENS | #sc-supervise |
| card.route | supervise.card.route | Text | — | Route | — | SCREENS | n/a |
| card.kmPoint | supervise.card.km | Number | — | KmPoint | — | SCREENS | n/a |
| card.checkInAt | supervise.card.time | DateTime | — | CheckInAt | — | SCREENS | n/a |
| card.status | supervise.card.status | Badge | LOOKUP_STATIC | Status | — | SCREENS | badge |
| card.inZone | supervise.card.inZone | Badge | — | InZone | — | SCREENS | n/a |
| card.noteOrg | supervise.card.org | Text | — | Note fallback | — | SCREENS | GAP-ORG |
| card.tap | — | Nav | — | Id | nav detail | SCREENS | push detail |
| detail.userName | supervise.detail.user | Text RO | — | GET/{id} | — | SCREENS | DES-MOB-SUP-DETAIL |
| detail.code | supervise.detail.code | Text RO | — | Code | — | SCREENS | n/a |
| detail.route | supervise.detail.route | Text RO | — | Route | — | SCREENS | n/a |
| detail.checkInAt | supervise.detail.time | DateTime RO | — | CheckInAt | — | SCREENS | n/a |
| detail.status | supervise.detail.status | Badge RO | LOOKUP_STATIC | Status | — | SCREENS | n/a |
| detail.latLng | supervise.detail.geo | Text RO | — | Lat · Lng | — | SCREENS | n/a |
| detail.inZone | supervise.detail.inZone | Badge RO | — | InZone | — | SCREENS | n/a |
| detail.note | supervise.detail.note | Text RO | — | Note | — | SCREENS | n/a |
| btn.map | supervise.action.map | Button/Nav | — | Id/Lat/Lng | nav map | SCREENS | gis/patrol-map |
| segment.map | supervise.segment.map | Segment/Nav | — | — | nav `/patrol-map` | SCREENS | sibling |

**Cấm** invent `/supervise*` · **cấm** invent fromDate API P1 · **cấm** ERP.* · **cấm** POST trên Giám sát · **cấm** hardcode VN labels · **cấm** demoDays fallback.

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| LOOKUP_STATIC | FE `useFormOptions` / LinmCopy `supervise.*` | SCREENS · CTX | hardcode label VN |
| road-route | cite Integration / peer | DOMAIN-MAP | invent route master trên màn này |
| attendance-logs | `GET patrol/attendance-logs` · `GET …/{id}` | Patrol DOMAIN-MAP | invent path |

## §D — Map / vẽ

| Mục | Ghi |
|-----|-----|
| map | **none** embed · segment/CTA → sibling `/patrol-map` (hoặc gis-map peer) |
| GPS | RO stored only · no capture · no POST |
| draw | **none** |

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| AuthJWT | shell | login | auth/* | guest → login |
| ListRows | GET list | filter apply / refresh | GET logs | cards |
| FilterRoute | sheet | user | query | re-GET |
| FilterDay | sheet | user | client | filter rows |
| Detail | GET/{id} | tap card | GET by id | RO rows |
| Loading | appear GET | FE | — | spinner |
| Empty | GET `[]` | — | — | empty state |

`progress: supervise monitor RO` — không WO/incident/check-in write lifecycle.

## §F — Handoff

| Role | Need |
|------|------|
| PO | DoD: live filter · list cards · RO detail · map sibling · Live BFF · no POST · no demo SSOT |
| Design | SUP zones · DES-MOB-SUPERVISE / SUP-DETAIL parity · reviewUrl |
| SA | Add DOMAIN-MAP `web-rmms-supervise` · confirm Mobile.Bff `patrol/attendance-logs` |
| TL | Tasks Supervise list + detail |
| Dev | Implement Mobile MFE only · reuse GET list + GET/{id} |
| QA | filter live · empty · detail bind · map nav · phone 430 · no ERP · no POST |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=2` · `contentHash=sha256:bd4aedbcdb3686ca817a32c3f563270adc1d35b1f7bca526be023528a1840d2b` · `rulesVersion=2026.09.25.2` · `analyzedAt=2026-09-26T02:27:00.000Z`
