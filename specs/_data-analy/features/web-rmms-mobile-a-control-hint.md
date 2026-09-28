# Data-analy — controlHint — web-rmms-mobile-a

| Field | Value |
|-------|-------|
| feature | `web-rmms-mobile-a` |
| title | Tuần đường / Tuần kiểm đợt A — hub, mở ca, check-in, lịch sử |
| packKind | `list` |
| changeScope | `edit_page` |
| editTask | `1` |
| mode | `feature_context` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.27.1` |
| versionGate | `ok` |
| contentHash | `sha256:110e845481b0f27091c0f5ca856fef74524bc1634ab8e3785a5d7755730eea45` |
| analyzedAt | `2026-09-27T06:39:33.767Z` |
| demo | **N/A** |
| realData | `specs/_data-analy/features/web-rmms-mobile-a-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Patrol** · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-mobile-a` |
| mfeStdRoute | `/web-rmms-mobile-a` |
| taskId | `task_0a76198d` |
| phoneFrame | `max-width: 430px` |
| formPattern | Mobile full / sheet · **không** ERP Modal/Slideout Kind B desktop |
| deltaCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` · slug `web-rmms-mobile-a` |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** schema.  
> Nhãn UI: `useFormOptions()` / copy key — **cấm** hardcode tiếng Việt trên form.  
> **Cấm** nhét màn vào MFE desktop · **cấm** iOS/Android native · **cấm** typed CRUD `new_page`.  
> **Keep** PO/Design/implement artifacts — chỉ bổ sung **§ Delta**.

## § Delta Current vs New (edit_page HARD)

Cite: `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` (Pattern B + Search control + Mobile.Bff).  
Override body: **không** toolbar/export Excel · **không** `new_page`.

| Area | Current (shipped) | New (task_0a76198d) |
|------|-------------------|---------------------|
| changeScope | `new_page` wave A Live hub | `edit_page` · NEW AutocodeTask · keep PO/Design |
| CheckInSheet Lưu | `disabled={!canSave}` · `canSave = gps.ok && !saving` | Pattern B: nút **luôn bật** trừ `saving` · GPS deny → báo **khi bấm** (banner) · **cấm** khóa nút trước |
| OpenPatrol / OpenInspect submit | `disabled={saving}` only | **KEEP** |
| Tuyến SearchInput | `ROAD_ROUTE_LOOKUP_CONFIG` + **`ROAD_ROUTE_SEED`** / `filterSeed` / lọc `QL.22` | Xóa seed · API rỗng/lỗi → list rỗng · mã không có catalog → hiển thị `--` · **cấm** hiện mã lạ |
| «Người» (TD-02/TK-01) | readonly `auth/profile` string | Đối chiếu `GET integration/users?search=` · không thấy → `--` · **cấm** invent tên |
| User SearchInput (shared) | chưa có trên Mobile A | Config SearchInput → Mobile.Bff `integration/users` (forward) · **cấm** ERP `UserSearchInput` |
| API base | mixed / web-bff risk | **chỉ** `mobileApiBase()` / `VITE_MOBILE_API_URL` · **cấm** web-bff trực tiếp |
| Mobile.Bff users | thiếu forward | Forward `GET api/v1/integration/users` (pattern RoadRoutes) · **cấm** API mới WebService |
| Grid / filter Kind B | N/A phone · WAIVE | **KEEP N/A** · **cấm** LinErpListFilterBar / DES-GRID |
| Align mobile | — | `/align-mobile-to-mfe` · SSOT = page MFE · khung 430 · **cấm** tab/route/icon mới · **cấm** prototype android/ios |
| Out of scope A | journal/findings | **KEEP** out · waves B–E |

## Sources

| Source | Path | note |
|--------|------|------|
| CTX | `docs/context/features/web-rmms-mobile-a.md` | DF21BB94… |
| Delta SSOT | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` | BF61E367… |
| Screens A | `docs/plan/web-rmms-mobile/IMPLEMENT-SCREENS.md` | BC9070C4… |
| Gap | `docs/plan/web-rmms-mobile/GAP-TUAN-DUONG-TUAN-KIEM.md` | peer |
| Peer CTX | `docs/context/features/patrol.md` | desktop list · không clone shell |
| BE | `PatrolSessionsController` · `PatrolSessionsBffController` | Live |
| Integration users | `AppUsersController` · `GET api/v1/integration/users` | cite SUBMIT |
| DTO | `PatrolSessionDtos` · `PatrolCheckInDtos` | Live |
| DOMAIN-MAP | Patrol · `api/v1/patrol` | cite |
| MFE current | `src/pages/WebRmmsMobileA/*` · `src/services/patrol/lookups.ts` | delta probe |

## Screens đợt A (ids) — unchanged

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

## ControlHint inventory (đợt A + delta)

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
| route | TD-02 · TK-01 · TD-07 filter | **SearchInput** | `road-route` · Mobile.Bff `GET integration/road-routes/search` · **no seed** · missing → `--` |
| direction | TD-02 | **Dropdown** | LOOKUP_STATIC `chieu-di` \| `chieu-ve` \| `hai-chieu` · bind `Note` prefix `chieu=` |
| userName | TD-02 · TK-01 | Text readonly + catalog resolve | display từ profile · resolve `integration/users` · miss → `--` |
| userPicker | shared (d/e waves) | **SearchInput** | `users` · `GET integration/users?search=` · **cấm** ERP UserSearchInput · A: chỉ resolve display |
| patrolType | TD-02 · TK-01 | Text/hidden | khóa `Tuần đường` / `Tuần kiểm` |
| plannedDate | TD-02 · TK-01 | **Date** | hôm nay default |
| startedAt | TD-02 | DateTime readonly | now UTC on submit |
| status | TD-02 · TK-01 | Text/hidden | khóa `Đang tuần` |
| kmFrom / kmTo | TK-01 | **Number**/Text | bind `Note` đến khi có cột |
| inspectMode | TK-01 | **Dropdown** | `dinh-ky` \| `dot-xuat` · `Note` |
| inspectReason | TK-01 | **Text** | bắt buộc nếu `dot-xuat` · Pattern B: không khóa submit trước bấm |
| planPointLabel | TD-03 | Text / SearchInput | `GET …/plan-points` · empty OK · **cấm** tọa độ giả |
| checkInRoute | TD-03 | Text readonly | từ ca · miss catalog → `--` |
| lat / lng / accuracyM | TD-03 | GPS read | `navigator.geolocation` · deny → **banner on submit** · **cấm** `disabled={!gps}` |
| content | TD-03 | **Text** | optional note |
| mediaIds / photoLocalIds | TD-03 | FileMulti | FileService guid · `files/*` · capture=`environment` khi input file |
| submitCheckIn | TD-03 | Button | Pattern B · disable **chỉ** `saving` |
| historyCards | TD-07 | List cards | `Code` · `Route` · `PlannedDate` · `Status` · `CheckInCount` |
| activeInspect | TK-00 | List | sessions `Tuần kiểm`+`Đang tuần` |
| openInspect | TK-00 | Button | → TK-01 |

## Filter / grid (desktop HARD)

| | |
|--|--|
| LinErpListFilterBar / DES-GRID-* | **N/A** — phone Field hub · **không** Kind B · SUBMIT override no Excel toolbar |
| TD-07 filter | SearchInput `route` optional · card list · **cấm** clone ERP filter bar |
| `{feature}-filter-bar.md` | **skip** — no LinErpListFilterBar surface |

## GPS (delta Pattern B)

| Màn | Rule |
|-----|------|
| TD-00/01/07/TK-00 | không bắt GPS |
| TD-02 / TK-01 | không chặn mở ca; có fix → ghi `Note` `startLat,startLng` · deny = không bịa |
| TD-03 | GPS deny / thiếu → **bấm Lưu mới** banner · **cấm** `disabled={!canSave}` / khóa trước · **cấm** tọa độ mẫu |

## UNCLEAR

| id | Issue | Action |
|----|-------|--------|
| UNCLEAR-PLAN-POINT | Plan-points Live GET có BFF; seed có thể rỗng | Empty label + không auto `MatchOk=true` · Design giữ optional |
| UNCLEAR-NOTE-ENCODE | Chiều / km / hình thức nhồi `Note` đến Schema đợt D | SA chốt format một lần · Dev follow §B |
| UNCLEAR-USER-RESOLVE-A | A chỉ resolve display «Người» vs full SearchInput picker | PO: A = resolve `--` · picker gắn waves d/nghiệm thu per SUBMIT |

## Handoff

| Role | Dùng |
|------|------|
| PO | Copy § Delta → requirement § Current vs New · Pattern B · search no-seed · users |
| Design | Keep prototype · patch zones TD-03 submit + route `--` · phone 430 |
| SA | Mobile.Bff users forward · giữ Live path · **cấm** invent API |
| TL/Dev | Wire delta only · Mobile MFE · mobileApiBase |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:110e845481b0f27091c0f5ca856fef74524bc1634ab8e3785a5d7755730eea45` · `rulesVersion=2026.09.27.1` · `analyzedAt=2026-09-27T06:39:33.767Z` · `taskId=task_0a76198d` · `changeScope=edit_page`
