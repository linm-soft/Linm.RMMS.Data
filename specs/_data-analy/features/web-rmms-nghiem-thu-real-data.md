# Data-analy — real-data bind — web-rmms-nghiem-thu

| Field | Value |
|-------|-------|
| feature | `web-rmms-nghiem-thu` |
| title | Nghiệm thu — list, tạo, chi tiết |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_d20ca488` |
| prefix API | Patrol · `nghiem-thu` |
| prefix BFF web (cite) | `web-bff/api/v1/patrol/nghiem-thu*` · **không** base client |
| prefix BFF mobile (HARD) | `mobile-bff/api/v1` · host `http://localhost:5202` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-nghiem-thu` |
| domain | **Patrol** · NghiemThu / `rmms_nghiem_thu` · **cấm** reuse `rmms_patrol_sessions` |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| analyzedAt | `2026-09-25T15:25:00.000Z` |
| demo | **N/A** · **cấm** demo-json / in-app mock SSOT · cite `#sc-nghiem-thu*` only |

## § Scope NT

| In | Out |
|----|-----|
| NT-00…11 · list · create · detail · search · GPS · media · scores · Field hub entry | tuần đường · tuần kiểm · maintenance WO · desktop Field · invent entity/path · DELETE P1 · «Mẫu nghiệm thu NN» · ERP.* |
| API **Live** GET/POST/PUT `patrol/nghiem-thu` · init-data · files/* | API **Mới** invent · mobile-only path |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/web-rmms-nghiem-thu.md` | — | — |
| `plan` | `PLAN.md` · NghiemThu*View | — | — |
| `screens` | `SCREENS.md` · `/field/nghiem-thu*` | empty list | BFF + GPS deny |
| `tasks` | `TASKS.md` · T-W3-08 | — | — |
| `mau` | `docs/plan/nghiem-thu-mau/MAU-10.md` | — | label HARD |
| `peer` | `nghiem-thu.md` · create · detail | n/a | cite native |
| `api` | list/create/detail/init-data | [] | toast · **cấm** `window.alert` |
| `bff` | Mobile.Bff `:5202` · proxy NT | 503 | retry · SA gap |
| `domain-map` | Patrol · slug `nghiem-thu` | — | **GAP** `web-rmms-nghiem-thu` · **cấm ERP.*** |
| `catalog` | init-data TemplateTypes/criteria · MAU-10 | — | useFormOptions |
| `auth` | JWT staff · guest → login | guest | shell login |
| `geo` | create/detail geolocation | deny | **cấm** fake |
| `files` | `files/*` MediaIds ≤10 | [] | FileService resign |
| `demo` | — | N/A | **cấm** demo SSOT |

## §B — Bind field (HARD) — NT

| uiField | Label (key) | controlHint | catalogKind | GET | write field | sameMfe | sameMobile |
|---------|-------------|-------------|-------------|-----|-------------|---------|------------|
| phone.frame | — | Layout | — | — | — | SCREENS | Android NghiemThu* |
| list.items | nghiemThu.list | List | — | `GET patrol/nghiem-thu` | — | SCREENS | list |
| list.search | nghiemThu.search | Text/Search | — | query `search` | — | SCREENS | n/a |
| row.icon | — | Icon | — | — | Check success | SCREENS | Android |
| row.status | nghiemThu.status | Badge | LOOKUP_STATIC | item.Status | — | SCREENS | n/a |
| row.result | nghiemThu.result | Badge | LOOKUP_STATIC | item.ResultCode | — | SCREENS | n/a |
| chrome.create | nghiemThu.create | Button/Nav | — | — | nav new | SCREENS | Tạo |
| empty.state | nghiemThu.empty | Static | LOOKUP_STATIC | — | — | SCREENS | n/a |
| form.templateType | nghiemThu.mau | Select | LOOKUP init-data | init-data | TemplateType* | MAU-10 | create/detail |
| form.route | nghiemThu.route | Text/Select | — | item | Route* | SCREENS | n/a |
| form.fieldInfo | nghiemThu.fieldInfo | Text | — | item | FieldInfo* | SCREENS | n/a |
| form.zoneOrgCode | nghiemThu.zone | Text RO | — | GPS | ZoneOrgCode | SCREENS | n/a |
| form.kmFrom | nghiemThu.kmFrom | Number | — | item | KmFrom | SCREENS | n/a |
| form.kmTo | nghiemThu.kmTo | Number | — | item | KmTo | SCREENS | n/a |
| form.resultCode | nghiemThu.resultCode | Select | LOOKUP_STATIC | item | ResultCode | SCREENS | pass/fail/deduct |
| form.resultNote | nghiemThu.resultNote | Text | — | item | ResultNote | SCREENS | n/a |
| form.scores | nghiemThu.scores | Checklist | LOOKUP init-data | init-data criteria | Scores[] replace-all | SCREENS | n/a |
| form.mediaIds | nghiemThu.media | PhotoRow | — | item | MediaIds ≤10 | files/* | n/a |
| form.status | nghiemThu.status | Select | LOOKUP_STATIC | item | Status (draft save) | SCREENS | n/a |
| form.assignee | nghiemThu.assignee | Text RO | — | profile | AssigneeCode* | SCREENS | n/a |
| form.inspectedAt | nghiemThu.inspectedAt | DateTime | — | now | InspectedAt* | SCREENS | n/a |
| form.note | nghiemThu.note | Text | — | item | Note | SCREENS | n/a |
| action.saveCreate | nghiemThu.save | Button | — | — | `POST patrol/nghiem-thu` | SCREENS | n/a |
| action.saveEdit | nghiemThu.save | Button | — | — | `PUT …/{id}` | SCREENS | n/a |
| action.gps | nghiemThu.gps | Action | — | geolocation | FieldInfo/ZoneOrgCode | SCREENS | deny=no fake |
| action.cancel | nghiemThu.cancel | Button/Nav | — | — | → list | SCREENS | n/a |
| init.data | — | Lookup | — | `GET …/init-data` | labels+criteria | SCREENS | n/a |
| detail.load | — | — | — | `GET …/{id}` | — | SCREENS | n/a |

**Cấm** invent path/entity · **cấm** ERP.* · **cấm** fake GPS · **cấm** hardcode VN / «Mẫu nghiệm thu NN» · **cấm** demo SSOT · **cấm** gộp tuần đường/tuần kiểm/mnt.

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| LOOKUP_STATIC | FE `useFormOptions` / LinmCopy `nghiemThu.*` | SCREENS · CTX | hardcode label VN |
| TemplateTypes | `GET patrol/nghiem-thu/init-data` | MAU-10.md | «Mẫu nghiệm thu NN» |
| Scores criteria | init-data `TemplateTypes[].criteria` | SCREENS | invent criteria codes |
| ResultCode | pass/fail/deduct | SCREENS | invent codes |
| Status | draft/in_progress/done/cancelled | SCREENS | invent |
| list | `GET patrol/nghiem-thu` | DOMAIN-MAP nghiem-thu | invent list DTO |
| create/update | POST/PUT same resource | SCREENS | invent create path |
| files | `files/*` | FileService | invent `nghiem-thu-files` |

## §D — Map / vẽ

| Mục | Ghi |
|-----|-----|
| map | **none** trên NT (không map canvas) |
| GPS | create/detail · geolocation → FieldInfo/ZoneOrgCode · deny = no fake |
| Map nav | out — peer Gis |

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| AuthJWT | shell/session | login peer | auth/* | guest block |
| ListItems | patrol NT | load/search/refresh | `GET list` | NT-01 |
| DraftCreate | patrol NT | Lưu nháp | `POST` Status=draft | NT-06 |
| DetailEdit | patrol NT | Lưu | `PUT /{id}` | NT-07 |
| ResultDone | patrol NT | Status=done + ResultCode | PUT | NT-07/10 |
| Media | FileService | upload/remove | files/* · MediaIds | NT-09 |
| GpsFill | browser | allow/deny | geolocation | NT-08 |

`progress: nghiem-thu Status + ResultCode` — **≠** WO/incident lifecycle · **≠** patrol sessions entity.

## §F — Handoff

| Role | Need |
|------|------|
| PO | DoD: 3 màn · MAU-10 · Live BFF · GPS deny · no gộp |
| Design | NT zones · Android parity Check row · reviewUrl |
| SA | Add DOMAIN-MAP `web-rmms-nghiem-thu` · confirm Mobile.Bff proxy |
| TL | Tasks list/new/detail · T-W3-08 |
| Dev | Implement Mobile MFE NT only · reuse API |
| QA | List/search/empty · create draft · detail PUT · GPS deny · mau labels · phone 430 |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=2` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `rulesVersion=2026.09.25.2` · `analyzedAt=2026-09-25T15:25:00.000Z`
