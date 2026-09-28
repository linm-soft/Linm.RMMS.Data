# Data-analy — controlHint — web-rmms-mnt-progress

| Field | Value |
|-------|-------|
| feature | `web-rmms-mnt-progress` |
| title | Tiến độ công việc — edit Pattern B (submit luôn bật + capture) |
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
| contentHash | `sha256:544d007b5b40b3f3b71bb94aa78e804b2342af0c6eb7ec1edcea4b76b1b28080` |
| analyzedAt | `2026-09-27T13:30:10.000Z` |
| demo | **N/A** |
| realData | `specs/_data-analy/features/web-rmms-mnt-progress-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Maintenance** · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/cong-viec/tien-do` |
| mfeStdRoute | `/cong-viec/tien-do` |
| productRoute | `/work/progress` |
| taskId | `task_f99adc72` |
| phoneFrame | `max-width: 430px` |
| formPattern | Mobile full / sheet · **không** ERP Modal/Slideout Kind B desktop |
| deltaCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** schema.  
> Nhãn UI: `useFormOptions()` / copy key — **cấm** hardcode tiếng Việt trên form.  
> **Cấm** nhét màn vào MFE desktop · **cấm** iOS/Android native · **cấm** `new_page` typed CRUD.  
> Keep existing PO/Design artifacts · analy chỉ § Delta.

## Sources

| Source | Path | note |
|--------|------|------|
| CTX | `docs/context/features/web-rmms-mnt-progress.md` | edit_page · § Delta |
| Delta HARD | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` | Pattern B · row `MntProgressPage.tsx` |
| Code SSOT | `src/pages/WebRmmsMntProgress/MntProgressPage.tsx` | Current: `ctasDisabled` + no `capture` |
| Peer CTX | `docs/context/features/mnt-progress.md` · `web-rmms-work.md` | Work list peer |
| Screens | `docs/plan/web-rmms-mobile/SCREENS.md` · `/work/progress` | SSOT |
| BE | `WorkOrdersController` · progress/complete | Live · **không** invent |
| DTO | `ProgressWorkOrderRequest` · `CompleteWorkOrderRequest` · `WorkOrderDto` | Live |
| DOMAIN-MAP | Maintenance · `api/v1/maintenance` | cite · **cấm ERP.*** |
| Prior PO/Design | `specs/web-rmms-mnt-progress/po/` · `ui/` | **keep** |

## Screens (ids)

| id | route | surface |
|----|-------|---------|
| WORK-P | `/work/progress` · std `/cong-viec/tien-do` | form/sheet tiến độ |
| WORK-L | `/work` · peer `web-rmms-work` | entry card — **không** implement trong slug này |

**Out:** WORK-G log · WORK-C chat · Me* · feedback · cam-view · journal/kết ca · Excel/toolbar export.

## ControlHint inventory

| uiField | screen | controlHint | catalogKind / notes |
|---------|--------|-------------|---------------------|
| topBarTitle | WORK-P | Text | copy key «Cập nhật trạng thái» / tiến độ |
| backNav | WORK-P | Button/Nav | → `web-rmms-work` list |
| woCode | WORK-P | Text readonly | từ GET `{id}` · `Code` |
| woTitle | WORK-P | Text readonly | `Title` |
| woStatus | WORK-P | Text/Badge RO | `Status` · list chrome (PO CLOSED) |
| woRouteName | WORK-P | Text readonly | `RouteName` |
| woWorkType | WORK-P | Text readonly | `WorkType` · init-data |
| progressPercent | WORK-P | **Number**/Slider | 0–100 · bind `ProgressPercent` · required mark |
| note | WORK-P | **Text** | optional · nhúng GPS summary lúc submit |
| lat / lng / accuracyM | WORK-P | GPS read | device · **không** field API · embed `Note` |
| validationBanner | WORK-P | Banner `string[]` | Pattern B · hiện sau `validationAttempted` |
| photoLocalIds | WORK-P | FileMulti optional | `accept=image/*` + **`capture="environment"`** · GAP-MEDIA · **cấm** MediaUrl body |
| submitProgress | WORK-P | Button primary | POST `…/progress` · **luôn bật** khi form sẵn · chỉ `disabled` khi `saving` |
| submitComplete | WORK-P | Button | POST `…/complete` · cùng rule Pattern B |

## § Delta control (Current → New)

| Control | Current | New |
|---------|---------|-----|
| CTA disable | `!gpsReady \|\| saving \|\| !wo` | `saving` (hoặc chưa có `wo`) only |
| GPS deny UX | pre-disable + silent `return` | click → banner GPS · **cấm** fake |
| file input | no `capture` | `capture="environment"` |
| client errors | toast / silent | banner `string[]` + inline · API = toast |

## Filter / grid (desktop HARD)

| | |
|--|--|
| LinErpListFilterBar / DES-GRID-* | **N/A** — phone Work peer form · **không** Kind B desktop grid |
| Toolbar / Excel export | **N/A** — SUBMIT-VALIDATE override |

## GPS

| Màn | Rule |
|-----|------|
| WORK-P | Geolocation → `Note` (GAP-GPS-01) · deny → **báo lúc bấm** (Pattern B) · **cấm** pre-disable CTA · **cấm** fake |
| WORK-L peer | không bắt GPS trên list |

## UNCLEAR

| id | Issue | Action |
|----|-------|--------|
| — | Prior UNCLEAR-GPS-GATE / MEDIA / LABEL closed by PO | Keep PO CLOSED · edit chỉ Pattern B + capture |
| UNCLEAR-BANNER-COPY | Message GPS deny / required trên banner | PO copy key · reuse `mnt.progress.gps.*` |

## Handoff

| Role | Dùng |
|------|------|
| PO | Keep prior CLOSED · Delta Pattern B · banner copy · capture |
| Design | Keep prototype · zone WORK-P · không desktop grid · reviewUrl sẵn |
| SA | Giữ Live API · **không** invent DTO · Mobile.Bff |
| Team-lead / Dev | Bind Delta · `MntProgressPage.tsx` only · **cấm** web-bff |

## DoR

- [x] changeScope=`edit_page` · packKind=`list` · **cấm** `new_page`
- [x] § Delta Current vs New cite SUBMIT-VALIDATE
- [x] controlHint inventory + Pattern B CTA/banner/capture
- [x] real-data song song
- [x] demo N/A · mfeStdUrl `/cong-viec/tien-do`
- [x] BE Maintenance Live cite · **cấm ERP.***
