# Data-analy — real-data bind — web-rmms-incident

| Field | Value |
|-------|-------|
| feature | `web-rmms-incident` |
| title | Sự cố list, tạo, chi tiết — edit Pattern B |
| packKind | `list` |
| changeScope | `edit_page` |
| status | `done` |
| taskId | `task_43536f7d` |
| priorTask | `task_5674f223` |
| prefix API | `api/v1` · `incident` · `patrol` · `integration` · `ai-vision` · `files` |
| prefix BFF mobile (HARD) | `mobile-bff/api/v1` · `:5202` |
| prefix BFF web | cite only · **không** base client |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| bffRepo | `Linm.RMMS.Mobile.Bff` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/van-de/moi` |
| mfeStdRoute | `/van-de/moi` |
| productRoute | `/incident` · `/incident/new` · `/incident/:id` |
| domain | **Incident** + Patrol + Integration + AiVision (+ files peer) |
| contentHash | `sha256:d753df685c7334cda81339c1c6daccaa3463c4e8c6350eaff5562a6e41584015` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| analyzedAt | `2026-09-27T12:20:00.000Z` |
| demo | **N/A** · **cấm** demo-json / fake GPS |
| deltaCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` |

## § Scope

| In | Out |
|----|-----|
| edit INC-N Pattern B (submit + banner + GPS on-click) | typed CRUD `new_page` |
| keep INC-L / INC-D live bind | Excel / toolbar export |
| Live incident GET/POST/GET{id}/close · asset-types · sessions | invent `web-rmms-incident/*` path |
| Mobile.Bff only · HasGps create | web-bff client · ERP.* · iOS/Android |
| photos capture giữ | SearchInput users/routes trên form này (tuyến = session RO) |
| peer nav vis/chat/estimate | thêm tab/route/icon |

## § Delta Current vs New

| bind | Current | New |
|------|---------|-----|
| create.enable | `canCreate` = asset∧session∧gps∧online | enable khi form sẵn · disable **chỉ** `creating` |
| create.validate | early return · toast / GPS modal | banner `string[]` + inline · `validationAttempted` |
| gps → create | deny disables button | deny → banner/modal **on submit** |
| API body | Title · RouteName · IncidentType · Status · RequestedAt · HasGps · … | **không đổi** DTO · **cấm** Lat cột Create |
| list/detail bind | shipped Live | **giữ** |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/web-rmms-incident.md` | — | § Delta |
| `delta-ssot` | `SUBMIT-VALIDATE.md` | — | Pattern B |
| `code-current` | `IncidentCreatePage.tsx` | — | `disabled={!canCreate}` |
| `peer-context` | incident-list · create · detail | — | DES + Live |
| `api-list` | `GET incident/incidents` | EmptyState | toast fail |
| `api-detail` | `GET incident/incidents/{id}` | 404 toast | toast |
| `api-create` | `POST incident/incidents` | — | 4xx toast · **cấm** silent ok · **cấm** banner cho API error |
| `api-close` | `POST …/{id}/close` | — | toast |
| `api-session` | `GET patrol/sessions` | no ca → banner on submit | **cấm** bịa |
| `api-asset-types` | `GET integration/asset-types` | empty → banner on submit | toast |
| `geo` | `navigator.geolocation` | deny → banner/modal on submit | **cấm** fake · **cấm** disable Create |
| `demo` | — | N/A | **cấm** demo SSOT |

## §B — Bind field (HARD)

### List INC-L (giữ)

| uiField | controlHint | GET | write | notes |
|---------|-------------|-----|-------|-------|
| search / filters | Search + Chip | query | — | Live |
| card.* | CardList | list DTO | — | HasGps cờ · **không** Lat/Lng |
| fab | FAB | — | nav `/van-de/moi` | |

### Create INC-N (Delta)

| uiField | controlHint | catalogKind | GET | write field | Delta |
|---------|-------------|-------------|-----|-------------|-------|
| asset.type | LookupGrid | asset-types | GET integration/asset-types | AssetLabel · Title | missing → banner |
| kind | Segment 3 | LOOKUP_STATIC | — | IncidentType | giữ |
| checklist.* | CheckboxGroup | local | — | → Description | giữ |
| photos | PhotoRow | files/ai-vision | uploads | MediaIds | **giữ** capture |
| detect | Button | — | — | POST detect | GPS≤30 · không khóa Create |
| session.route/km | Text RO | — | GET patrol/sessions | RouteName · KmStart | missing → banner · **không** SearchInput |
| gps | GPS | geo | device | HasGps=true | deny → banner on submit · **không** disable |
| severity | Select | LOOKUP_STATIC | — | Severity | giữ |
| description | Textarea | — | — | Description | giữ |
| validate.banner | Banner | — | — | client errors | **NEW** Pattern B |
| create | Button | — | — | POST | **disabled chỉ creating** |
| draftOffline | Button | — | — | local peer | giữ |

**Create body (giữ Live):** `Title` · `RouteName` · `IncidentType` · `Status` · `RequestedAt` · optional Severity/Description/AssetLabel/KmStart/MediaIds/DetectionId · `HasGps=true` khi fix · **không** Lat trên CreateIncidentRequest.

### Detail INC-D (giữ)

| uiField | controlHint | write | notes |
|---------|-------------|-------|-------|
| close.note | Textarea | Note optional | empty OK |
| close | Button | POST close | disabled chỉ `closing` |

**Cấm** ERP.* · fake GPS · itemsOrDemo · invent slug path · hardcode VN labels.

## §C — Catalog

| catalogKind | API / source | Cấm |
|-------------|--------------|-----|
| LOOKUP_STATIC | useFormOptions | hardcode VN mới nếu key có |
| asset-types | GET integration/asset-types | invent trong Incident |
| sessions | GET patrol/sessions | invent stub |
| checklist | local by asset | invent checklist endpoint |
| users / road-routes SearchInput | N/A form Incident create | không gắn UserSearchInput ERP |

## §D — Map / GPS

| Mục | Ghi |
|-----|-----|
| map | INC-L/D nav `/ban-do` · không GIS CRUD |
| GPS | create point · deny on-submit · accuracy ≤30 detect |

## §E — Progress

`list → create|detail → close` · peer vis/chat/estimate ngoài core Delta.

## §F — Handoff

| Role | Packet |
|------|--------|
| PO | Delta Pattern B AC · keep prior requirement · no Excel |
| Design | create button + banner zones · keep reviewUrl |
| SA | no MIG · Live cite · Mobile.Bff |
| Dev | IncidentCreatePage Pattern B · align no_demo · `:5202` |
| QA | always-on submit · banner · GPS deny click · no web-bff |

## Gaps

| id | Note |
|----|------|
| GAP-PB-INC-CREATE-01 | Current `disabled={!canCreate}` → Pattern B (SUBMIT-VALIDATE) |
| GAP-PB-BANNER-KEYS | PO map banner keys asset/session/GPS |
| prior GAP-* | resolved prior pipeline · cite only |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=2` · `contentHash=sha256:d753df685c7334cda81339c1c6daccaa3463c4e8c6350eaff5562a6e41584015` · `rulesVersion=2026.09.25.2` · `analyzedAt=2026-09-27T12:20:00.000Z`
