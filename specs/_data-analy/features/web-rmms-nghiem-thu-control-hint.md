# Data-analy — controlHint — web-rmms-nghiem-thu

| Field | Value |
|-------|-------|
| feature | `web-rmms-nghiem-thu` |
| title | Nghiệm thu — list, tạo, chi tiết |
| packKind | `list` |
| changeScope | `new_page` |
| mode | `feature_context` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| analyzedAt | `2026-09-25T15:25:00.000Z` |
| demo | **N/A** · master · cite `#sc-nghiem-thu*` only · **cấm** demo SSOT |
| realData | `specs/_data-analy/features/web-rmms-nghiem-thu-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Patrol** · resource `nghiem-thu` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-nghiem-thu` |
| mfeStdRoute | `/web-rmms-nghiem-thu` |
| nativeRoutes | `/field/nghiem-thu` · `/new` · `/:id` |
| taskId | `task_d20ca488` |
| phoneFrame | `max-width: 430px` |
| formPattern | Mobile list + full create/detail · **không** ERP Modal/Slideout Kind B · master = no demo · `/erp-form-context` labels |
| delta | § Delta HARD · T-W3-08 · keep existing PO/Design if any · NEW AutocodeTask |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** DOMAIN-MAP row.  
> Nhãn UI: `useFormOptions()` / copy key — **cấm** hardcode tiếng Việt trên form.  
> Label mau: MAU-10 / init-data — **cấm** «Mẫu nghiệm thu NN».  
> **Cấm** nhét phone NT vào MFE desktop Field · **cấm** iOS/Android native · **≠** tuần đường / tuần kiểm / maintenance.

## Sources

| Source | Path | note |
|--------|------|------|
| CTX | `docs/context/features/web-rmms-nghiem-thu.md` | new · this run |
| Screens | `docs/plan/web-rmms-mobile/SCREENS.md` | `6f74282b…` · `/field/nghiem-thu*` |
| Plan | `docs/plan/web-rmms-mobile/PLAN.md` | NghiemThu*View |
| Tasks | `docs/plan/web-rmms-mobile/TASKS.md` | **T-W3-08** |
| MAU-10 | `docs/plan/nghiem-thu-mau/MAU-10.md` | mau-01…10 labels |
| Peer | `nghiem-thu.md` · create · detail | cite · native done |
| DOMAIN-MAP | Patrol · slug `nghiem-thu` | **GAP** slug `web-rmms-nghiem-thu` chưa có row |
| BFF | Mobile.Bff `:5202` · `mobile-bff/api/v1` catch-all | **cấm** Web BFF base · proxy gap SA |

## Screens NT (ids)

| id | route / zone | surface |
|----|--------------|---------|
| NT-00 | phone | frame ≤430 · Android 1-1 |
| NT-01 | `/field/nghiem-thu` | list paged |
| NT-02 | list chrome | back · title · **Tạo** |
| NT-03 | search | `search` query |
| NT-04 | empty | 0 items copy |
| NT-05 | row | Check icon success · badge status + ResultCode |
| NT-06 | `/field/nghiem-thu/new` | create · POST draft |
| NT-07 | `/field/nghiem-thu/:id` | detail · GET+PUT |
| NT-08 | GPS | geolocation → FieldInfo/ZoneOrgCode |
| NT-09 | media | MediaIds max 10 · files/* |
| NT-10 | result/scores | pass/fail/deduct · Scores[] |
| NT-11 | Field hub | quick action entry · no tab |

**Out:** tuần đường · tuần kiểm · maintenance · desktop Field · invent path/entity · DELETE P1 · «Mẫu nghiệm thu NN».

## ControlHint inventory (NT)

| uiField | screen | controlHint | catalogKind / notes |
|---------|--------|-------------|---------------------|
| phoneFrame | NT-00 | Layout | `max-width: 430px` |
| listItems | NT-01 | List | `GET patrol/nghiem-thu` page=1 pageSize=50 |
| navBack | NT-02 | Button/Nav | stack → Field hub |
| titleBar | NT-02 | Static | copy `nghiemThu.list.title` |
| btnCreate | NT-02 | Button/Nav | → `/field/nghiem-thu/new` |
| search | NT-03 | Text/Search | query `search` |
| emptyState | NT-04 | Static | copy `nghiemThu.list.empty` |
| rowIcon | NT-05 | Icon | `LinmStrokeKind.Check` · bg success |
| rowStatus | NT-05 | Badge | draft/in_progress/done/cancelled |
| rowResult | NT-05 | Badge | pass/fail/deduct |
| rowTap | NT-05 | Nav | → `/:id` |
| templateType | NT-06/07 | Select | LOOKUP init-data mau-01…10 · **MAU-10 label** |
| route | NT-06/07 | Text/Select | Route* |
| fieldInfo | NT-06/07 | Text | FieldInfo* |
| zoneOrgCode | NT-06/07 | Text RO/opt | GPS fill |
| kmFrom/kmTo | NT-06/07 | Number | optional |
| resultCode | NT-06/07 | Select | pass/fail/deduct · required when Status=done |
| resultNote | NT-06/07 | Text | optional |
| scores | NT-10 | Checklist | Scores[] · init-data criteria · replace-all on write |
| mediaIds | NT-09 | PhotoRow | guid[] max 10 · files/* |
| status | NT-06/07 | Select/State | draft on Lưu nháp |
| assigneeCode | NT-06/07 | Text RO | profile |
| inspectedAt | NT-06/07 | DateTime | now UTC create |
| note | NT-06/07 | Text | optional |
| gpsCapture | NT-08 | Action | navigator.geolocation · deny → no fake |
| saveDraft | NT-06 | Button | POST Status=draft |
| saveEdit | NT-07 | Button | PUT |
| cancel | NT-06/07 | Button/Nav | → list |

## Filter / grid (desktop HARD)

| | |
|--|--|
| LinErpListFilterBar / DES-GRID-* | **N/A** — phone list · **không** Kind B desktop grid |
| Query filter UI | P1 = search bar; API sẵn status/route/templateType/fromDate/toDate — Design may stub |

## GPS

| Màn | Rule |
|-----|------|
| NT-06 create · NT-07 detail edit | `navigator.geolocation` → FieldInfo / ZoneOrgCode · **cấm** field Lat riêng trên DTO |
| Deny | **không** bịa tọa độ · disable / skip GPS fill |
| List NT-01 | không bắt GPS |

## § Delta (edit-feature)

| | |
|--|--|
| changeScope | `new_page` · MFE Mobile · phone 430 |
| Keep | existing PO/Design artifacts nếu có · analy ghi Delta only |
| NEW | AutocodeTask `task_d20ca488` · full pipeline from data_analy |
| Scope lock | list+new+detail NT only · **không** gộp peer Field |

## UNCLEAR

| id | Issue | Action |
|----|-------|--------|
| UNCLEAR-DOMAIN-MAP-NT | DOMAIN-MAP có slug `nghiem-thu` · chưa `web-rmms-nghiem-thu` | SA thêm row · Patrol · Mobile MFE |
| UNCLEAR-BFF-PROXY | Mobile.Bff catch-all / proxy gap `patrol/nghiem-thu` | SA confirm proxy · **cấm** invent path |
| UNCLEAR-STD-ROUTE | SCREENS `/field/nghiem-thu*` vs mfeStdRoute `/web-rmms-nghiem-thu` | Design/Dev follow STATUS URL + SCREENS native cite |
| UNCLEAR-FILTER-UI | API filter nhiều field · P1 chỉ search? | PO/Design chốt stub filters |
| UNCLEAR-DELETE | DELETE live web · OUT P1 mobile | PO: keep OUT unless Design chốt |

## Handoff

| Role | Dùng |
|------|------|
| PO | 3 màn · DoD · MAU-10 · no gộp · GPS deny |
| Design | Phone 430 · zones NT-* · Android 1-1 Check row · prototype+reviewUrl |
| SA | DOMAIN-MAP `web-rmms-nghiem-thu` · Mobile.Bff proxy · **cấm** invent |
| TL/Dev | Wire Mobile MFE NT routes · reuse API only |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `rulesVersion=2026.09.25.2` · `analyzedAt=2026-09-25T15:25:00.000Z`
