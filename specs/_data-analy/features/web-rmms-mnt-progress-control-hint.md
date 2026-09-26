# Data-analy — controlHint — web-rmms-mnt-progress

| Field | Value |
|-------|-------|
| feature | `web-rmms-mnt-progress` |
| title | Tiến độ công việc — cập nhật % / Note / hoàn thành |
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
| contentHash | `sha256:a7e3c91b4d2f6801e5a9b0c3d8f1472e6b5a0d9c4e1f2837a6b5c4d3e2f1098a` |
| analyzedAt | `2026-09-25T22:23:32.489Z` |
| demo | **N/A** |
| realData | `specs/_data-analy/features/web-rmms-mnt-progress-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Maintenance** · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-mnt-progress` |
| mfeStdRoute | `/web-rmms-mnt-progress` |
| productRoute | `/work/progress` |
| taskId | `task_d447ee27` |
| phoneFrame | `max-width: 430px` |
| formPattern | Mobile full / sheet · **không** ERP Modal/Slideout Kind B desktop |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** schema.  
> Nhãn UI: `useFormOptions()` / copy key — **cấm** hardcode tiếng Việt trên form.  
> **Cấm** nhét màn vào MFE desktop · **cấm** iOS/Android native.

## Sources

| Source | Path | note |
|--------|------|------|
| CTX | `docs/context/features/web-rmms-mnt-progress.md` | greenfield · this run |
| Peer CTX | `docs/context/features/mnt-progress.md` · `web-rmms-work.md` | native toast · Work list peer |
| Screens | `docs/plan/web-rmms-mobile/SCREENS.md` · `/work/progress` | SSOT |
| Plan / Tasks | `PLAN.md` · `TASKS.md` T-W5-02 | `MntProgressView` |
| BE | `WorkOrdersController` · `WorkOrdersBffController` | Live progress/complete |
| DTO | `ProgressWorkOrderRequest` · `CompleteWorkOrderRequest` · `WorkOrderDto` | Live |
| DOMAIN-MAP | Maintenance · `api/v1/maintenance` | cite · **cấm ERP.*** |

## Screens (ids)

| id | route | surface |
|----|-------|---------|
| WORK-P | `/work/progress` · std `/web-rmms-mnt-progress` | form/sheet tiến độ |
| WORK-L | `/work` · peer `web-rmms-work` | entry card — **không** implement trong slug này |

**Out:** WORK-G log · WORK-C chat · Me* · feedback · cam-view · journal/kết ca (`web-rmms-mobile-b…e`).

## ControlHint inventory

| uiField | screen | controlHint | catalogKind / notes |
|---------|--------|-------------|---------------------|
| topBarTitle | WORK-P | Text | copy key «Cập nhật trạng thái» / tiến độ |
| backNav | WORK-P | Button/Nav | → `web-rmms-work` list |
| woCode | WORK-P | Text readonly | từ GET `{id}` · `Code` |
| woTitle | WORK-P | Text readonly | `Title` |
| woStatus | WORK-P | Text/Badge RO | `Status` · map init-data / list chrome (GAP-LABEL) |
| woRouteName | WORK-P | Text readonly | `RouteName` |
| woWorkType | WORK-P | Text readonly | `WorkType` · init-data |
| progressPercent | WORK-P | **Number**/Slider | 0–100 · bind `ProgressPercent` · required |
| note | WORK-P | **Text** | optional · có thể nhúng GPS summary |
| lat / lng / accuracyM | WORK-P | GPS read | `navigator.geolocation` · **không** field API · embed `Note` |
| photoLocalIds | WORK-P | FileMulti optional | camera UX · GAP-MEDIA · **cấm** invent MediaUrl trên Progress body |
| submitProgress | WORK-P | Button primary | POST `…/progress` · deny GPS → disable nếu Design bắt tọa độ |
| submitComplete | WORK-P | Button | POST `…/complete` khi %≥100 hoặc chọn hoàn thành |

## Filter / grid (desktop HARD)

| | |
|--|--|
| LinErpListFilterBar / DES-GRID-* | **N/A** — phone Work peer form · **không** Kind B desktop grid |

## GPS

| Màn | Rule |
|-----|------|
| WORK-P | Geolocation để ghi tóm tắt vào `Note` (GAP-MOB-MNT-PROG-GPS-01) · deny → **chặn** nút cần tọa độ · **cấm** fake coords |
| WORK-L peer | không bắt GPS trên list |

## UNCLEAR

| id | Issue | Action |
|----|-------|--------|
| UNCLEAR-GPS-GATE | Design chốt nút nào bắt buộc GPS (Cập nhật vs chỉ Hoàn thành) | Design zone + PO copy · default: chặn khi UX đòi định vị |
| UNCLEAR-MEDIA | Progress body không MediaUrl | P1 camera optional · SA Signed mới mở DTO |
| UNCLEAR-LABEL-MAP | init-data ≠ list chrome status VN | PO/Design 1 map · FE `useFormOptions` |

## Handoff

| Role | Dùng |
|------|------|
| PO | Screens WORK-P · DoD Live · GPS Note · useFormOptions · out peers |
| Design | Phone 430 · Android 1-1 · zone WORK-P · prototype reviewUrl · no desktop grid |
| SA | Giữ Live progress/complete · Mobile.Bff proxy · GAP GPS/media · **cấm** invent |
| Team-lead / Dev | Bind §B real-data · **cấm** web-bff client |

## DoR

- [x] changeScope=`new_page` · packKind=`list`
- [x] controlHint inventory đủ field WORK-P
- [x] real-data song song
- [x] demo N/A · **cấm** demo SSOT
- [x] BE Maintenance Live cite · **cấm ERP.***
