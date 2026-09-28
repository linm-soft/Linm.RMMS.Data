# Data-analy — controlHint — web-rmms-nghiem-thu

| Field | Value |
|-------|-------|
| feature | `web-rmms-nghiem-thu` |
| title | Nghiệm thu — submit Pattern B + SearchInput (edit_page) |
| packKind | `list` |
| changeScope | `edit_page` |
| mode | `feature_context` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:b8f3ce70ff3e80073c39d2dac6a01d2fed2e98232877ef6979881eef8e37acb4` |
| analyzedAt | `2026-09-27T14:55:00.000Z` |
| demo | **N/A** · master · cite `#sc-nghiem-thu*` only · **cấm** demo SSOT |
| realData | `specs/_data-analy/features/web-rmms-nghiem-thu-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Patrol** · resource `nghiem-thu` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/nghiem-thu/moi` |
| mfeStdRoute | `/nghiem-thu/moi` |
| nativeRoutes | `/field/nghiem-thu` · `/new` · `/:id` · alias → `/nghiem-thu*` |
| taskId | `task_f5d994e7` |
| phoneFrame | `max-width: 430px` |
| formPattern | Mobile list + full create/detail · **không** ERP Modal/Slideout · master = no demo · `/erp-form-context` labels · Pattern B validate |
| delta | § Delta HARD · cite `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` · keep PO/Design · NEW AutocodeTask |
| citeDelta | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` · slug `web-rmms-nghiem-thu` · `NghiemThuFormPage.tsx` |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** DOMAIN-MAP / BFF forward.  
> Nhãn UI: `useFormOptions()` / copy key — **cấm** hardcode tiếng Việt trên form.  
> Label mau: MAU-10 / init-data — **cấm** «Mẫu nghiệm thu NN».  
> Toolbar/export theo pack: **N/A** — Override SUBMIT-VALIDATE · **không** Excel · **không** `new_page`.  
> **Cấm** nhét phone NT vào MFE desktop Field · **cấm** iOS/Android native · **≠** tuần đường / tuần kiểm / maintenance.

## Sources

| Source | Path | note |
|--------|------|------|
| CTX | `docs/context/features/web-rmms-nghiem-thu.md` | hash `b8f3ce70…` · edit_page Delta |
| Submit-validate | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` | **Delta SSOT** · Pattern B + SearchInput |
| Screens | `docs/plan/web-rmms-mobile/SCREENS.md` | `/field/nghiem-thu*` |
| Plan | `docs/plan/web-rmms-mobile/PLAN.md` | NghiemThu*View |
| Tasks | `docs/plan/web-rmms-mobile/TASKS.md` | **T-W3-08** |
| MAU-10 | `docs/plan/nghiem-thu-mau/MAU-10.md` | mau-01…10 |
| Code current | `Linm.Web.RMMS.Mobile/src/pages/WebRmmsNghiemThu/NghiemThuFormPage.tsx` | canSave · alert.warning · input route/assignee RO |
| Peer artifacts | `specs/web-rmms-nghiem-thu/po|ui|be|…` | **keep** · Delta only |
| DOMAIN-MAP | Patrol · `web-rmms-nghiem-thu` / `nghiem-thu` | prior SA resolved |
| BFF | Mobile.Bff `:5202` · `mobile-bff/api/v1` | + forward `integration/users` (gap) |

## Screens NT (ids) — unchanged shell

| id | route / zone | surface |
|----|--------------|---------|
| NT-00 | phone | frame ≤430 · Android 1-1 |
| NT-01 | `/nghiem-thu` · alias `/field/nghiem-thu` | list paged |
| NT-02 | list chrome | back · title · **Tạo** |
| NT-03 | search | `search` query |
| NT-04 | empty | 0 items copy |
| NT-05 | row | Check icon success · badge status + ResultCode |
| NT-06 | `/nghiem-thu/moi` | create · POST draft · **Delta form** |
| NT-07 | `/nghiem-thu/:id` | detail · GET+PUT · **Delta form** |
| NT-08 | GPS | geolocation → FieldInfo/ZoneOrgCode · deny → submit banner (Pattern B) |
| NT-09 | media | MediaIds max 10 · `capture="environment"` |
| NT-10 | result/scores | pass/fail/deduct · Scores[] |
| NT-11 | Field hub | quick action · no tab |

**Out:** tuần đường · tuần kiểm · maintenance · desktop Field · invent path/entity · DELETE P1 · «Mẫu nghiệm thu NN» · Excel export · `new_page` typed CRUD · iOS/Android edit.

## ControlHint inventory (NT) — delta fields marked *

| uiField | screen | controlHint | catalogKind / notes |
|---------|--------|-------------|---------------------|
| phoneFrame | NT-00 | Layout | `max-width: 430px` |
| listItems | NT-01 | List | `GET patrol/nghiem-thu` page=1 pageSize=50 |
| navBack | NT-02 | Button/Nav | stack → Field hub |
| titleBar | NT-02 | Static | copy `nghiemThu.list.title` |
| btnCreate | NT-02 | Button/Nav | → `/nghiem-thu/moi` |
| search | NT-03 | Text/Search | query `search` |
| emptyState | NT-04 | Static | copy `nghiemThu.list.empty` |
| rowIcon | NT-05 | Icon | `LinmStrokeKind.Check` · bg success |
| rowStatus | NT-05 | Badge | draft/in_progress/done/cancelled |
| rowResult | NT-05 | Badge | pass/fail/deduct |
| rowTap | NT-05 | Nav | → `/:id` |
| templateType | NT-06/07 | Select | LOOKUP init-data mau-01…10 · **MAU-10 label** |
| route * | NT-06/07 | SearchInput | `ROAD_ROUTE_LOOKUP_CONFIG` · `GET …/integration/road-routes/search` · **no seed** · miss → `--` |
| fieldInfo | NT-06/07 | Text | FieldInfo* |
| zoneOrgCode | NT-06/07 | Text RO/opt | GPS fill |
| kmFrom/kmTo | NT-06/07 | Number | optional |
| resultCode | NT-06/07 | Select | pass/fail/deduct · required when Status=done |
| resultNote | NT-06/07 | Text | optional |
| scores | NT-10 | Checklist | Scores[] · init-data criteria · replace-all on write |
| mediaIds * | NT-09 | PhotoRow | guid[] max 10 · files/* · **capture=environment** |
| status | NT-06/07 | Select/State | draft on Lưu nháp |
| assigneeCode * | NT-06/07 | SearchInput | `GET …/integration/users?search=` · username/code + fullName · miss → `--` · **không** RO profile-only |
| inspectedAt | NT-06/07 | DateTime | now UTC create |
| note | NT-06/07 | Text | optional |
| gpsCapture | NT-08 | Action | navigator.geolocation · deny → **cấm** fake · **cấm** lock submit |
| validationBanner * | NT-06/07 | Banner | Pattern B · `string[]` · mẫu/tuyến/hiện trường/người thực hiện · first-click `validationAttempted` |
| saveDraft * | NT-06 | Button | POST Status=draft · **always enabled** trừ `saving` · **cấm** `disabled={!canSave}` |
| saveEdit * | NT-07 | Button | PUT · same Pattern B |
| cancel | NT-06/07 | Button/Nav | → list |

## Filter / grid (desktop HARD)

| | |
|--|--|
| LinErpListFilterBar / DES-GRID-* | **N/A** — phone list · **không** Kind B desktop grid |
| Query filter UI | P1 = search bar (prior PO chốt) · API sẵn status/route/templateType/fromDate/toDate — keep |
| Toolbar/export | **N/A** · SUBMIT-VALIDATE override · **không** Excel |

## GPS

| Màn | Rule |
|-----|------|
| NT-06 create · NT-07 detail edit | `navigator.geolocation` → FieldInfo / ZoneOrgCode · **cấm** field Lat riêng trên DTO |
| Deny | **không** bịa tọa độ · **cấm** khóa nút trước · báo khi bấm submit (banner/modal) |
| List NT-01 | không bắt GPS |

## § Delta Current vs New (edit-feature HARD)

| | Current (shipped `new_page`) | New (`edit_page` · `task_f5d994e7`) |
|--|------------------------------|-------------------------------------|
| changeScope | `new_page` · full NT shell | `edit_page` · **cấm** typed CRUD new_page |
| File | `NghiemThuFormPage.tsx` live | same file · Delta only |
| Submit | `disabled={!canSave}` · `alert.warning` required/GPS | Pattern B: nút luôn bật (chỉ khóa `saving`) · banner `string[]` + inline · **cấm** alert.warning thay banner |
| Required gate | canSave = template+route+fieldInfo+assignee+… | validationAttempted on first click · banner: mẫu, tuyến, hiện trường, người thực hiện |
| route control | `<input>` free text | `SearchInput` + road-routes/search · no ROAD_ROUTE_SEED · miss=`--` |
| assignee | `<input readOnly>` từ profile | `SearchInput` users via Mobile.Bff `integration/users` · miss=`--` |
| media | RouteCapture / upload | thêm `capture="environment"` trên image input / LinImageUpload path |
| mfeStdUrl | legacy `/web-rmms-nghiem-thu` in old analy | **real** `http://localhost:9301/nghiem-thu/moi` (`paths.ts`) |
| BFF | patrol/nghiem-thu via Mobile.Bff | + forward `GET api/v1/integration/users` · **cấm** web-bff base · `mobileApiBase()` |
| Keep | PO/Design/SA/TL/Dev/QA/Review artifacts | **keep files** · pipeline re-run từ analy · Delta handoff |
| Align cuối | — | `/align-mobile-to-mfe` · no android/ios prototype · 430px · no new tab/route/icon |
| Export/toolbar | N/A pack list phone | Override: **không** Excel |

## UNCLEAR

| id | Issue | Action |
|----|-------|--------|
| UNCLEAR-USERS-BFF | Mobile.Bff chưa forward `integration/users` | SA/Dev: forward như RoadRoutesMobileController · **cấm** invent WS API |
| UNCLEAR-ROUTE-SEED | shared `ROAD_ROUTE_SEED` / filterSeed / QL.22 | Dev: xóa seed trên config dùng chung (cite SUBMIT-VALIDATE) · scope ảnh hưởng peer forms |
| UNCLEAR-SEARCHINPUT-PKG | SearchInput mobile component path | Design/Dev: reuse MFE SearchInput pattern · **cấm** ERP UserSearchInput nguyên khối |
| RESOLVED-STD-ROUTE | — | mfeStdRoute=`/nghiem-thu/moi` · alias `/field/nghiem-thu*` |
| RESOLVED-FILTER-DELETE | — | prior PO: FILTER search P1 · DELETE OUT P1 — **keep** |
| RESOLVED-DOMAIN-MAP | — | prior SA PASS — **keep** |

## Handoff

| Role | Dùng |
|------|------|
| PO | Delta Pattern B + SearchInput users/routes · keep prior DoD 3 màn · update requirement Delta section |
| Design | Keep prototype shell · update control-map route/assignee/banner/capture · reviewUrl |
| SA | Confirm users BFF forward · road-routes already · **cấm** invent · **cấm** ERP.* |
| TL/Dev | Wire NghiemThuFormPage Delta · shared lookups no seed · align-mobile-to-mfe |
| QA | Pattern B submit · SearchInput users/routes 200 · capture · GPS deny no lock |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:b8f3ce70ff3e80073c39d2dac6a01d2fed2e98232877ef6979881eef8e37acb4` · `rulesVersion=2026.09.25.2` · `analyzedAt=2026-09-27T14:55:00.000Z` · `taskId=task_f5d994e7` · `changeScope=edit_page`
