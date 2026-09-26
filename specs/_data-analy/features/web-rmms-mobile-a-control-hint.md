# Data-analy — controlHint — web-rmms-mobile-a

| Field | Value |
|-------|-------|
| feature | `web-rmms-mobile-a` |
| title | Tuần đường / Tuần kiểm đợt A — hub, mở ca, check-in, lịch sử |
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
| contentHash | `sha256:c5b21efdd411635233b56b13ee0b1a318c182c0a488f10d8290481a3dbbd3c2e` |
| analyzedAt | `2026-09-25T06:34:00.000Z` |
| demo | **N/A** |
| realData | `specs/_data-analy/features/web-rmms-mobile-a-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Patrol** · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-mobile-a` |
| mfeStdRoute | `/web-rmms-mobile-a` |
| taskId | `task_7e2d0556` |
| phoneFrame | `max-width: 430px` |
| formPattern | Mobile full / sheet · **không** ERP Modal/Slideout Kind B desktop |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** schema.  
> Nhãn UI: `useFormOptions()` / copy key — **cấm** hardcode tiếng Việt trên form.  
> **Cấm** nhét màn vào MFE desktop · **cấm** iOS/Android native.

## Sources

| Source | Path | note |
|--------|------|------|
| CTX | `docs/context/features/web-rmms-mobile-a.md` | `9441c923…` |
| Screens A | `docs/plan/web-rmms-mobile/IMPLEMENT-SCREENS.md` | `58793b8f…` |
| Gap | `docs/plan/web-rmms-mobile/GAP-TUAN-DUONG-TUAN-KIEM.md` | peer |
| Peer CTX | `docs/context/features/patrol.md` | desktop list · không clone shell |
| BE | `PatrolSessionsController` · `PatrolSessionsBffController` | Live |
| DTO | `PatrolSessionDtos` · `PatrolCheckInDtos` | Live |
| DOMAIN-MAP | Patrol · `api/v1/patrol` | cite |

## Screens đợt A (ids)

| id | route | surface |
|----|-------|---------|
| TD-00 | `/field` | hub 2 cửa |
| TD-01 | `/field/tuan-duong` | ca / empty |
| TD-02 | `/field/tuan-duong/mo-ca` | form mở ca |
| TD-03 | `/field/tuan-duong/check-in` | sheet check-in |
| TD-07 | `/field/tuan-duong/lich-su` | list lịch sử |
| TK-00 | `/field/tuan-kiem` | hub tuần kiểm |
| TK-01 | `/field/tuan-kiem/mo-dot` | form mở đợt |

**Out of A:** TD-04/05/06 · TK-02…07.

## ControlHint inventory (đợt A)

| uiField | screen | controlHint | catalogKind / notes |
|---------|--------|-------------|---------------------|
| doorPatrol | TD-00 | Button/Nav | → `/field/tuan-duong` · badge ca `Đang tuần`+`Tuần đường` |
| doorInspect | TD-00 | Button/Nav | → `/field/tuan-kiem` · badge ca `Tuần kiểm` |
| syncBtn | TD-00 | Button | → `/field/offline` |
| notifyBtn | TD-00 | Button | → `/ops` |
| openSession | TD-01 | Button | → TD-02 khi empty |
| historyNav | TD-01 | Button | → TD-07 |
| checkInNav | TD-01 | Button | → TD-03 · chỉ khi có ca |
| journalNav | TD-01 | Button | → TD-05 · **đợt B** · disable/hide A |
| bookNav | TD-01 | Button | → TD-04 · **đợt B** |
| endSessionNav | TD-01 | Button | → TD-06 · **đợt D** |
| route | TD-02 · TK-01 · TD-07 filter | **SearchInput** | `road-route` · `GET integration/road-routes/search` |
| direction | TD-02 | **Dropdown** | LOOKUP_STATIC `chieu-di` \| `chieu-ve` \| `hai-chieu` · bind `Note` prefix `chieu=` |
| userName | TD-02 · TK-01 | Text readonly | `GET auth/profile` |
| patrolType | TD-02 · TK-01 | Text/hidden | khóa `Tuần đường` / `Tuần kiểm` |
| plannedDate | TD-02 · TK-01 | **Date** | hôm nay default |
| startedAt | TD-02 | DateTime readonly | now UTC on submit |
| status | TD-02 · TK-01 | Text/hidden | khóa `Đang tuần` |
| kmFrom / kmTo | TK-01 | **Number**/Text | bind `Note` đến khi có cột |
| inspectMode | TK-01 | **Dropdown** | `dinh-ky` \| `dot-xuat` · `Note` |
| inspectReason | TK-01 | **Text** | bắt buộc nếu `dot-xuat` |
| planPointLabel | TD-03 | Text / SearchInput | `GET …/plan-points` · empty OK · **cấm** tọa độ giả |
| checkInRoute | TD-03 | Text readonly | từ ca |
| lat / lng / accuracyM | TD-03 | GPS read | `navigator.geolocation` · deny → disable Lưu |
| content | TD-03 | **Text** | optional note |
| mediaIds / photoLocalIds | TD-03 | FileMulti | FileService guid · `files/*` |
| historyCards | TD-07 | List cards | `Code` · `Route` · `PlannedDate` · `Status` · `CheckInCount` |
| activeInspect | TK-00 | List | sessions `Tuần kiểm`+`Đang tuần` |
| openInspect | TK-00 | Button | → TK-01 |

## Filter / grid (desktop HARD)

| | |
|--|--|
| LinErpListFilterBar / DES-GRID-* | **N/A** — phone Field hub · **không** Kind B desktop grid |
| TD-07 filter | SearchInput `route` optional · card list · **cấm** clone ERP filter bar |

## GPS

| Màn | Rule |
|-----|------|
| TD-00/01/07/TK-00 | không bắt GPS |
| TD-02 / TK-01 | không chặn mở ca; có fix → ghi `Note` `startLat,startLng` · deny = không bịa |
| TD-03 | **HARD** deny → chặn Lưu · **cấm** tọa độ mẫu |

## UNCLEAR

| id | Issue | Action |
|----|-------|--------|
| UNCLEAR-PLAN-POINT | Plan-points Live GET có BFF; seed có thể rỗng | Empty label + không auto `MatchOk=true` · Design giữ optional |
| UNCLEAR-NOTE-ENCODE | Chiều / km / hình thức nhồi `Note` đến Schema đợt D | SA chốt format một lần · Dev follow §B |

## Handoff

| Role | Dùng |
|------|------|
| PO | Screens A · DoD Live-only · GPS · useFormOptions |
| Design | Phone 430 · zones TD/TK ids · no desktop grid |
| SA | Giữ path Live · Note-encode · **cấm** invent journal/findings trong A |
| TL/Dev | Wire Mobile MFE only |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:c5b21efdd411635233b56b13ee0b1a318c182c0a488f10d8290481a3dbbd3c2e` · `rulesVersion=2026.09.25.2` · `analyzedAt=2026-09-25T06:34:00.000Z`
