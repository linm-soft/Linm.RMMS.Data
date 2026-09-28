# Data-analy — real-data bind — web-rmms-nghiem-thu

| Field | Value |
|-------|-------|
| feature | `web-rmms-nghiem-thu` |
| title | Nghiệm thu — submit Pattern B + SearchInput (edit_page) |
| packKind | `list` |
| changeScope | `edit_page` |
| status | `done` |
| taskId | `task_f5d994e7` |
| prefix API | Patrol · `nghiem-thu` |
| prefix BFF web (cite) | `web-bff/api/v1/patrol/nghiem-thu*` · **không** base client |
| prefix BFF mobile (HARD) | `mobile-bff/api/v1` · host `http://localhost:5202` · `mobileApiBase()` / `VITE_MOBILE_API_URL` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/nghiem-thu/moi` |
| mfeStdRoute | `/nghiem-thu/moi` |
| domain | **Patrol** · NghiemThu / `rmms_nghiem_thu` · **cấm** reuse `rmms_patrol_sessions` |
| contentHash | `sha256:b8f3ce70ff3e80073c39d2dac6a01d2fed2e98232877ef6979881eef8e37acb4` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| analyzedAt | `2026-09-27T14:55:00.000Z` |
| demo | **N/A** · **cấm** demo-json / in-app mock SSOT · cite `#sc-nghiem-thu*` only |
| citeDelta | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` |

## § Scope NT

| In | Out |
|----|-----|
| NT-00…11 shell **keep** · Delta form: Pattern B submit · SearchInput route/users · capture · BFF users forward | tuần đường · tuần kiểm · mnt · desktop Field · invent entity/path · DELETE P1 · «Mẫu nghiệm thu NN» · ERP.* · Excel · `new_page` · web-bff base · iOS/Android |
| API **Live** GET/POST/PUT `patrol/nghiem-thu` · init-data · files/* · road-routes/search · integration/users (forward) | API **Mới** invent · mobile-only path · WS new controller |

## § Delta Current vs New

| Surface | Current | New |
|---------|---------|-----|
| Submit UX | `canSave` gates `disabled` + `alert.warning` | Pattern B (`erp-form-context` 3-validation) · always-on CTA · banner+inline |
| route | free `<input>` | SearchInput → `GET …/integration/road-routes/search` · no seed · miss=`--` |
| assignee | RO profile string | SearchInput → `GET …/integration/users?search=` · miss=`--` |
| media | upload path | `capture="environment"` |
| BFF | patrol NT only | + users forward · **cấm** web-bff |
| mfeStdUrl | `/web-rmms-nghiem-thu` (stale analy) | `/nghiem-thu/moi` live `paths.ts` |
| Keep artifacts | PO/Design/… exist | **keep** · analy Delta only · NEW task `task_f5d994e7` |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/web-rmms-nghiem-thu.md` | — | — |
| `submit-validate` | `SUBMIT-VALIDATE.md` · slug web-rmms-nghiem-thu | — | Delta HARD |
| `plan` | `PLAN.md` · NghiemThu*View | — | — |
| `screens` | `SCREENS.md` · `/field/nghiem-thu*` | empty list | BFF + GPS deny |
| `tasks` | `TASKS.md` · T-W3-08 | — | — |
| `mau` | `docs/plan/nghiem-thu-mau/MAU-10.md` | — | label HARD |
| `code` | `NghiemThuFormPage.tsx` · `paths.ts` | — | Current baseline |
| `api` | list/create/detail/init-data | [] | toast · **cấm** `window.alert` · **cấm** alert.warning thay banner |
| `bff` | Mobile.Bff `:5202` · patrol + road-routes · **users gap** | 503/404 | SA/Dev forward |
| `users` | `GET api/v1/integration/users` (WS live) · BFF forward TBD | [] | `--` display |
| `routes` | `GET …/integration/road-routes/search` (BFF live) | [] · **no seed** | `--` |
| `domain-map` | Patrol · web-rmms-nghiem-thu | — | keep prior SA · **cấm ERP.*** |
| `catalog` | init-data TemplateTypes/criteria · MAU-10 | — | useFormOptions |
| `auth` | JWT staff · guest → login | guest | shell login |
| `geo` | create/detail geolocation | deny | **cấm** fake · submit-time report |
| `files` | `files/*` MediaIds ≤10 · capture | [] | FileService resign |
| `demo` | — | N/A | **cấm** demo SSOT |

## §B — Bind field (HARD) — NT (+ Delta *)

| uiField | Label (key) | controlHint | catalogKind | GET | write field | sameMfe | sameMobile |
|---------|-------------|-------------|-------------|-----|-------------|---------|------------|
| phone.frame | — | Layout | — | — | — | SCREENS | Android NghiemThu* |
| list.items | nghiemThu.list | List | — | `GET patrol/nghiem-thu` | — | SCREENS | list |
| list.search | nghiemThu.search | Text/Search | — | query `search` | — | SCREENS | n/a |
| row.icon | — | Icon | — | — | Check success | SCREENS | Android |
| row.status | nghiemThu.status | Badge | LOOKUP_STATIC | item.Status | — | SCREENS | n/a |
| row.result | nghiemThu.result | Badge | LOOKUP_STATIC | item.ResultCode | — | SCREENS | n/a |
| chrome.create | nghiemThu.create | Button/Nav | — | — | nav `/moi` | SCREENS | Tạo |
| empty.state | nghiemThu.empty | Static | LOOKUP_STATIC | — | — | SCREENS | n/a |
| form.templateType | nghiemThu.mau | Select | LOOKUP init-data | init-data | TemplateType* | MAU-10 | create/detail |
| form.route * | nghiemThu.route | SearchInput | LOOKUP road-routes | `integration/road-routes/search` | Route* | lookups.ts | no seed |
| form.fieldInfo | nghiemThu.fieldInfo | Text | — | item | FieldInfo* | SCREENS | n/a |
| form.zoneOrgCode | nghiemThu.zone | Text RO | — | GPS | ZoneOrgCode | SCREENS | n/a |
| form.kmFrom | nghiemThu.kmFrom | Number | — | item | KmFrom | SCREENS | n/a |
| form.kmTo | nghiemThu.kmTo | Number | — | item | KmTo | SCREENS | n/a |
| form.resultCode | nghiemThu.resultCode | Select | LOOKUP_STATIC | item | ResultCode | SCREENS | pass/fail/deduct |
| form.resultNote | nghiemThu.resultNote | Text | — | item | ResultNote | SCREENS | n/a |
| form.scores | nghiemThu.scores | Checklist | LOOKUP init-data | init-data criteria | Scores[] replace-all | SCREENS | n/a |
| form.mediaIds * | nghiemThu.media | PhotoRow | — | item | MediaIds ≤10 · capture | files/* | n/a |
| form.status | nghiemThu.status | Select | LOOKUP_STATIC | item | Status (draft save) | SCREENS | n/a |
| form.assignee * | nghiemThu.assignee | SearchInput | LOOKUP users | `integration/users?search=` | AssigneeCode* | BFF forward | miss=`--` |
| form.inspectedAt | nghiemThu.inspectedAt | DateTime | — | now | InspectedAt* | SCREENS | n/a |
| form.note | nghiemThu.note | Text | — | item | Note | SCREENS | n/a |
| form.validationBanner * | — | Banner | LOOKUP_STATIC msgs | — | validationAttempted | Pattern B | n/a |
| action.saveCreate * | nghiemThu.save | Button | — | — | `POST` · enable trừ saving | Pattern B | n/a |
| action.saveEdit * | nghiemThu.save | Button | — | — | `PUT …/{id}` · enable trừ saving | Pattern B | n/a |
| action.gps | nghiemThu.gps | Action | — | geolocation | FieldInfo/ZoneOrgCode | SCREENS | deny=no fake |
| action.cancel | nghiemThu.cancel | Button/Nav | — | — | → list | SCREENS | n/a |
| init.data | — | Lookup | — | `GET …/init-data` | labels+criteria | SCREENS | n/a |
| detail.load | — | — | — | `GET …/{id}` | — | SCREENS | n/a |

**Cấm** invent path/entity · **cấm** ERP.* · **cấm** fake GPS · **cấm** hardcode VN / «Mẫu nghiệm thu NN» · **cấm** demo SSOT · **cấm** gộp tuần đường/tuần kiểm/mnt · **cấm** `disabled={!canSave}` · **cấm** web-bff client base.

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
| files | `files/*` · capture | FileService | invent `nghiem-thu-files` |
| road-routes * | `GET …/integration/road-routes/search` | lookups.ts · SUBMIT-VALIDATE | ROAD_ROUTE_SEED · filterSeed · invent |
| users * | `GET …/integration/users?search=` | AppUsersController WS · BFF forward | ERP UserSearchInput nguyên · invent WS |

## §D — Map / vẽ

| Mục | Ghi |
|-----|-----|
| map | **none** trên NT (không map canvas) |
| GPS | create/detail · geolocation → FieldInfo/ZoneOrgCode · deny = no fake · submit-time report |
| Map nav | out — peer Gis |
| Align | `/align-mobile-to-mfe` · SSOT = existing MFE page · 430px · no new tab/route/icon |

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| AuthJWT | shell/session | login peer | auth/* | guest block |
| ListItems | patrol NT | load/search/refresh | `GET list` | NT-01 |
| DraftCreate | patrol NT | Lưu nháp | `POST` Status=draft | NT-06 |
| DetailEdit | patrol NT | Lưu | `PUT /{id}` | NT-07 |
| ResultDone | patrol NT | Status=done + ResultCode | PUT | NT-07/10 |
| Media | FileService | upload/remove | files/* · MediaIds · capture | NT-09 |
| GpsFill | browser | allow/deny | geolocation | NT-08 |
| ValidationAttempted * | FE local | first submit click | — | banner+inline |
| Saving * | FE local | request in-flight | POST/PUT | only disable CTA |
| RoutePick * | road-routes search | SearchInput select | BFF search | NT-06/07 |
| UserPick * | users search | SearchInput select | BFF users | NT-06/07 |

`progress: nghiem-thu Status + ResultCode` — **≠** WO/incident lifecycle · **≠** patrol sessions entity.

## §F — Handoff

| Role | Need |
|------|------|
| PO | Delta DoD: Pattern B · SearchInput users/routes · capture · keep 3 màn / MAU-10 / no gộp |
| Design | Update control-map Delta · keep phone 430 prototype · reviewUrl |
| SA | Confirm BFF users forward · road-routes keep · **cấm** invent |
| TL | Tasks Delta form only · cite T-W3-08 + SUBMIT-VALIDATE |
| Dev | `NghiemThuFormPage` + lookups seed removal + BFF users · align-mobile-to-mfe |
| QA | Submit always-on · banner required · users/routes 200 · capture · GPS deny no lock · phone 430 |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=2` · `contentHash=sha256:b8f3ce70ff3e80073c39d2dac6a01d2fed2e98232877ef6979881eef8e37acb4` · `rulesVersion=2026.09.25.2` · `analyzedAt=2026-09-27T14:55:00.000Z` · `taskId=task_f5d994e7` · `changeScope=edit_page`
