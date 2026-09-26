# Data-analy — controlHint — web-rmms-ops

| Field | Value |
|-------|-------|
| feature | `web-rmms-ops` |
| title | Thông báo inbox |
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
| analyzedAt | `2026-09-25T12:28:40.379Z` |
| demo | **N/A** |
| realData | `specs/_data-analy/features/web-rmms-ops-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Notification** · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-ops` |
| mfeStdRoute | `/web-rmms-ops` |
| taskId | `task_f2f7b48c` |
| phoneFrame | `max-width: 430px` |
| formPattern | Mobile inbox list / full · **không** ERP Modal/Slideout Kind B · **không** form master compose |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** DOMAIN-MAP row.  
> Nhãn UI: `useFormOptions()` / copy key — **cấm** hardcode tiếng Việt trên form.  
> **Cấm** nhét phone inbox vào MFE desktop · **cấm** iOS/Android native · **≠** legacy desktop `ops` Kind B.

## Sources

| Source | Path | note |
|--------|------|------|
| CTX | `docs/context/features/web-rmms-ops.md` | new · written this run |
| Screens | `docs/plan/web-rmms-mobile/SCREENS.md` | `6f74282b…` · `/ops` · GPS: không |
| Plan | `docs/plan/web-rmms-mobile/PLAN.md` | `/ops` · `OpsView` · slug `ops` |
| Tasks | `docs/plan/web-rmms-mobile/TASKS.md` | T-W2-01 |
| Peer | `web-rmms-home` · `web-rmms-shell` | badge → `/ops` |
| Legacy cite | `docs/context/features/ops.md` | desktop Kind B — **out** P1 mobile |
| DOMAIN-MAP | Notification · slug `ops` | **GAP** slug `web-rmms-ops` chưa có row |
| BFF | Mobile.Bff `:5202` · `mobile-bff/api/v1` | **cấm** Web BFF base |

## Screens ops (ids)

| id | route / zone | surface |
|----|--------------|---------|
| OP-00 | phone | frame ≤430 · Android 1-1 |
| OP-01 | `/ops` list | inbox paged |
| OP-02 | row | title · time · unread · priority/type RO |
| OP-03 | mark-read | tap unread → POST |
| OP-04 | empty | 0 items copy |
| OP-05 | chrome | back · title · refresh |
| OP-06 | badge peer | overview — Home/shell |

**Out:** `/me*` · feedback · cam-view · Field 2 cửa deep · journal / kết ca / tồn tại / tần suất (`web-rmms-mobile-b`…`e`) · desktop compose CRUD · petitions · DES-GRID.

## ControlHint inventory (ops)

| uiField | screen | controlHint | catalogKind / notes |
|---------|--------|-------------|---------------------|
| phoneFrame | OP-00 | Layout | `max-width: 430px` · center desktop review |
| inboxList | OP-01 | List | `GET notification/inbox` · page=1 · pageSize=50 |
| rowTitle | OP-02 | Text RO | copy key · item.title |
| rowSentAt | OP-02 | Text RO | item.sentAt |
| rowUnread | OP-02 | Badge/State | unread vs read |
| rowPriority | OP-02 | Text RO | optional · item.priority |
| rowType | OP-02 | Text RO | optional · item.type |
| markRead | OP-03 | Button/Action | `POST …/mark-read` · tap unread row |
| emptyState | OP-04 | Static | copy `ops.inbox.empty` |
| navBack | OP-05 | Button/Nav | stack back → Home |
| titleBar | OP-05 | Static | copy `ops.inbox.title` |
| refresh | OP-05 | Button | reload inbox |
| notifyOverview | OP-06 | Number RO | peer `GET notification/overview` |

## Filter / grid (desktop HARD)

| | |
|--|--|
| LinErpListFilterBar / DES-GRID-* | **N/A** — phone inbox · **không** Kind B desktop grid |
| Query filter UI | P1 **không** bắt · API query sẵn (`search`/`status`/`priority`/`type`/`unreadOnly`) |

## GPS

| Màn | Rule |
|-----|------|
| OP-00…05 `/ops` | **không** bắt GPS · **không** capture |
| Chấm công / HasGps | chỉ xem / điều hướng peer (SCREENS GPS table) |
| Deep (collect/check-in…) | peer · `navigator.geolocation` · deny → disable nút cần tọa độ · **cấm** fake |

## UNCLEAR

| id | Issue | Action |
|----|-------|--------|
| UNCLEAR-DOMAIN-MAP-OPS | DOMAIN-MAP có slug `ops` · chưa có `web-rmms-ops` | SA thêm row · Notification · Mobile MFE `/web-rmms-ops` |
| UNCLEAR-STD-PORT | PLAN peer `:9330` vs packet `mfeStdUrl` `:9301/web-rmms-ops` | Design/Dev follow STATUS packet URL |
| UNCLEAR-OPS-DESKTOP-SCOPE | Legacy `ops.md` Kind B compose/KPI | PO: mobile P1 = inbox+mark-read only · desktop out |
| UNCLEAR-OPS-DETAIL | SCREENS không bắt GET `inbox/{id}` detail page | PO/Design: row tap = mark-read (+ optional detail stub P2) |

## Handoff

| Role | Dùng |
|------|------|
| PO | Inbox list · mark-read · DoD · no me · ≠ desktop compose |
| Design | Phone 430 · zones OP-* · Android 1-1 · prototype+reviewUrl |
| SA | DOMAIN-MAP `web-rmms-ops` · Mobile.Bff only · **cấm** invent compose API trên mobile |
| TL/Dev | Wire Mobile MFE `/ops` only · badge = peer Home |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `rulesVersion=2026.09.25.2` · `analyzedAt=2026-09-25T12:28:40.379Z`
