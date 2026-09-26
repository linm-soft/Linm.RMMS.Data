# Data-analy — controlHint — web-rmms-field

| Field | Value |
|-------|-------|
| feature | `web-rmms-field` |
| title | Hub Field — chrome native và hai lối |
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
| analyzedAt | `2026-09-26T02:00:48.000Z` |
| demo | **N/A** |
| realData | `specs/_data-analy/features/web-rmms-field-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Patrol** · deep cite Integration/AiVision/Incident/FileService · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-field` |
| mfeStdRoute | `/web-rmms-field` |
| taskId | `task_32822b41` |
| phoneFrame | `max-width: 430px` |
| formPattern | Mobile Field hub / full · **không** ERP Modal/Slideout Kind B desktop |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** DOMAIN-MAP row.  
> Nhãn UI: `useFormOptions()` / copy key — **cấm** hardcode tiếng Việt trên form.  
> **Cấm** nhét phone Field hub vào MFE desktop · **cấm** iOS/Android native.

## Sources

| Source | Path | note |
|--------|------|------|
| CTX | `docs/context/features/web-rmms-field.md` | new · written this run |
| Screens | `docs/plan/web-rmms-mobile/SCREENS.md` | `6f74282b…` · Tab Field |
| Plan | `docs/plan/web-rmms-mobile/PLAN.md` | `60d75d5b…` · `/field` PatrolHomeView · W3 |
| Peer A | `docs/context/features/web-rmms-mobile-a.md` | TD-00 2 cửa · deep owner |
| Peer shell | `docs/context/features/web-rmms-shell.md` | SH-04 Field tab mount |
| DOMAIN-MAP | Patrol | **GAP** slug `web-rmms-field` chưa có row |
| BFF | Mobile.Bff `:5202` · `mobile-bff/api/v1` | **cấm** Web BFF base client |

## Screens hub (ids)

| id | route | surface |
|----|-------|---------|
| FL-00 | `/web-rmms-field` · cite `/field` | Field hub · phone ≤430 · stack under shell tab |
| FL-01 | doors | 2 cửa Tuần đường · Tuần kiểm |
| FL-02 | sync | offline sync CTA + local badge |
| FL-03 | tiles | nav peer Field children |

**Out:** mở ca · check-in sheet · journal · findings · kết ca · frequency · attendance CRUD · nghiệm thu CRUD · cam detect · reflect create · offline replay · supervise detail · patrol-map (peer features).

## ControlHint inventory (hub)

| uiField | screen | controlHint | catalogKind / notes |
|---------|--------|-------------|---------------------|
| phoneFrame | FL-00 | Layout | `max-width: 430px` · center desktop review |
| doorPatrol | FL-01 | Button/Nav | copy key · → `/field/tuan-duong` · peer A · badge `Đang tuần`+`Tuần đường` |
| doorInspect | FL-01 | Button/Nav | → `/field/tuan-kiem` · peer A · badge `Tuần kiểm` |
| syncBtn | FL-02 | Button/Nav | → `/field/offline` · peer `web-rmms-offline` |
| syncBadge | FL-02 | Number RO | đếm queue local · 0 = ẩn |
| tileAttendance | FL-03 | Button/Nav | → `/field/attendance` · peer `web-rmms-attendance` |
| tileHistory | FL-03 | Button/Nav | → `/field/history` · peer history/sessions |
| tileNghiemThu | FL-03 | Button/Nav | → `/field/nghiem-thu` · peer `web-rmms-nghiem-thu` |
| tileCam | FL-03 | Button/Nav | → `/field/cam` · peer `web-rmms-cam-patrol` |
| tileReflect | FL-03 | Button/Nav | → `/field/reflect` · peer `web-rmms-field-reflect` |
| tileSupervise | FL-03 | Button/Nav | → `/field/supervise` · peer `web-rmms-supervise` |
| tileMap | FL-03 | Button/Nav | → `/field/map` · peer `web-rmms-patrol-map` |
| activeSessionHint | FL-00 | Text RO optional | từ `GET patrol/sessions` · không form master |

## Filter / grid (desktop HARD)

| | |
|--|--|
| LinErpListFilterBar / DES-GRID-* | **N/A** — phone Field hub · **không** Kind B desktop grid |
| Hub tiles | icon/nav tiles · **cấm** ERP list filter bar |

## GPS

| Màn | Rule |
|-----|------|
| FL-00…03 hub | **không** bắt GPS |
| Deep peer (check-in / attendance / cam / reflect / NT) | `navigator.geolocation` · deny → disable nút cần tọa độ · **cấm** fake · owner = peer |

## UNCLEAR

| id | Issue | Action |
|----|-------|--------|
| UNCLEAR-DOMAIN-MAP-FIELD | DOMAIN-MAP chưa có row `web-rmms-field` | SA thêm row · Patrol · MFE `/web-rmms-field` · cite peer deep |
| UNCLEAR-HUB-VS-A | FL-01 doors trùng TD-00 peer A | PO/Design: hub Field page mount doors; deep = A · **cấm** duplicate CRUD |
| UNCLEAR-STD-PORT | PLAN `:9330` · STATUS/packet `:9301/web-rmms-field` | Design/Dev follow STATUS `mfeStdUrl` |

## Handoff

| Role | Dùng |
|------|------|
| PO | Hub 2 cửa + tiles peer · Live sessions badge · DoD Field hub · no deep CRUD |
| Design | Phone 430 · zones FL-* · Android/iOS Field home parity · prototype+reviewUrl |
| SA | DOMAIN-MAP row · Mobile.Bff `patrol/sessions` GET · **cấm** invent FieldController |
| TL/Dev | Wire Mobile MFE hub only · deep = peer tasks |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `rulesVersion=2026.09.25.2` · `analyzedAt=2026-09-26T02:00:48.000Z`
