# PO — requirement — web-rmms-work

| Field | Value |
|-------|-------|
| feature | `web-rmms-work` |
| title | Danh sách công việc |
| packKind | `list` |
| changeScope | `new_page` |
| lane | `web` |
| status | `confirmed` |
| skillId | `agent-po` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| contentHash | `sha256:56146b96759461d425413e7e27e31fc1a5a4ed0a5f376f6a526959f62eb62770` |
| writtenAt | `2026-09-26T04:56:00.000Z` |
| taskId | `task_c0ec1125` |
| demo | **N/A** |
| prior | data_analy `confirmed` · compact `handoff/data_analy-compact.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-work` |
| mfeStdUrl | `http://localhost:9301/web-rmms-work` |
| productRoute | `/work` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Maintenance · **cấm ERP.*** |
| bff | `Linm.RMMS.Mobile.Bff` · `VITE_MOBILE_API_URL=http://localhost:5202/mobile-bff/api/v1` · **cấm** web-bff client |
| phoneFrame | `max-width: 430px` · Android 1-1 · **không** ERP Modal/Slideout Kind B |
| formPattern | Mobile full |
| labels | `useFormOptions()` / copy key — **cấm** hardcode tiếng Việt trên form |

> Analy reuse (hash skip): inventory + controlHint + real-data §A+§B từ `_data-analy/features/` — **cấm** re-scan demo / crawl CTX.

## 1. Goal / Persona / Entry

| | |
|--|--|
| Goal | Tab Work — list live WO: search + status/workType chips + rich cards + hub estimate + peer nav icons |
| Persona | Tuần đường (BDTX) · Tuần kiểm (Khu/VP) — list dùng chung |
| Entry | Tab Work · Home tile «Công việc» · std `/web-rmms-work` |
| Out P1 | Me* · feedback · cam-view · journal/kết ca/tồn tại/tần suất (B–E) · create WO form/FAB trên list · invent Work*Controller · Kind E `maintenance/summary` · web-bff client · ERP.* · fake GPS |

## 2. Screens

| id | productRoute | std | Surface | In DoD? |
|----|--------------|-----|---------|---------|
| WORK-L | `/work` | `/web-rmms-work` | Search · chips status/workType · CardList · hub estimate · peer action icons | **YES — primary** |
| WORK-P | `/work/progress` | peer `web-rmms-mnt-progress` | Cập nhật tiến độ | Nav only · peer |
| WORK-G | `/work/log` | peer `web-rmms-mnt-log` | Nhật ký RO | Nav only · peer |
| WORK-C | `/work/chat` | peer `web-rmms-mnt-chat` | Chat | Nav only · peer |
| WORK-E | `/work/estimate/:id` | peer estimate | Ước lượng / tạo WO | Nav only · peer |

Prototype zone (Design 1-1): `#sc-mnt-list` · `specs/mobile-p1/ui/prototype/android/index.html` — **không** demo SSOT ship.

## 3. Grid / List AC (packKind=list)

| AC id | Criterion | Pass |
|-------|-----------|------|
| AC-L-01 | Load live `GET maintenance/work-orders?page=1&pageSize=50` qua Mobile.Bff — **cấm** demo-json / itemsOrDemo | empty → EmptyState · fail → Toast (**cấm** `window.alert`) |
| AC-L-02 | SearchInput → query `search` · debounce · live reload | placeholder copy key |
| AC-L-03 | Chips/Select `status` · `workType` từ `GET …/init-data` (LOOKUP) — **live filter** (PO chốt UNCLEAR-FILTER-P1) | không toast-only P1 |
| AC-L-04 | Card fields: Title · Code · AssigneeName/TeamName · DueAt · RouteName · Status · ProgressPercent · WorkType | bind §B real-data |
| AC-L-05 | Hub «Giao việc xử lý» → nav peer estimate `#sc-estimate` | không invent create form trên list |
| AC-L-06 | Card actions: progress / log / chat / estimate → peer routes (query `?id=` hoặc nest — Design chốt UNCLEAR-STD-NEST) | **không** gộp CRUD peer vào slug DoD |
| AC-L-07 | **Cấm** FAB / form tạo WO trên WORK-L (UNCLEAR-CREATE-FROM → estimate peer tạo) | PASS nếu không có create control |
| AC-L-08 | Labels via `useFormOptions()` / copy key | **cấm** hardcode VN form |
| AC-L-09 | Phone ≤430 · Android 1-1 `#sc-mnt-list` · **không** LinErpListFilterBar / DES-GRID primary | N/A desktop grid |
| AC-L-10 | BFF chỉ `:5202` mobile-bff · **cấm** web-bff client base | QA verify network |
| AC-L-11 | **Cấm** fake GPS / lat-lng trên list · GPS không bắt buộc load list | peer progress owns GPS |
| AC-L-12 | **Cấm** tab Me* / feedback / cam-view trên surface này | OUT |

**Report AC:** N/A — packKind=`list`.

## 4. Control inventory (cite analy — Design chốt map)

| uiField | controlHint | notes |
|---------|-------------|-------|
| screenTitle | Text | copy key «Danh sách công việc» |
| back | IconButton | nav Home / shell |
| search | SearchInput | `search` |
| filter.open | IconButton | optional sheet — chips live vẫn primary |
| filter.status | Chip/Select | init-data / LOOKUP |
| filter.workType | Chip/Select | init-data / LOOKUP |
| hub.estimate | HubRow | nav peer estimate |
| list.card | CardList | live WO |
| action.progress / log / chat / estimate | IconButton | peer nav |
| empty / toast.fail | EmptyState / Toast | load states |

## 5. API (cite Live — SA confirm DTO)

| Method | Path | Note |
|--------|------|------|
| GET | `maintenance/work-orders` | list · search/status/workType · pageSize=50 |
| GET | `maintenance/work-orders/init-data` | status / workType lookup |
| GET | `maintenance/work-orders/{id}` | cite peer header only |

**Cấm** invent path/controller theo slug `web-rmms-work`. App base `{BffBase}/mobile-bff/api/v1`.

Enum cite (peer maintenance): status `new` / `in_progress` / `done` / `cancelled` · workType `repair` / `inspect` / `emergency`.

## 6. Leave / Out of scope (HARD)

- Me* · feedback · cam-view
- journal / kết ca / tồn tại / tần suất (B–E)
- Create WO form / FAB trên WORK-L
- Invent `Work*Controller` / flat `/work-orders` ngoài Live Maintenance
- Kind E KPI `maintenance/summary`
- web-bff client · ERP.* · iOS/Android native edit
- demo-json / fake coords trên list
- Gộp CRUD progress/log/chat/estimate vào DoD primary slug

## 7. PO decisions (autoApprove)

| id | Decision | Owner next |
|----|----------|------------|
| UNCLEAR-FILTER-P1 | **Chips live** status/workType (init-data) — không toast-only P1 | Design map chips |
| UNCLEAR-PEER-SPLIT | P1 core = **WORK-L only** · peer nav OK · không gộp CRUD peer | Design/SA/Dev |
| UNCLEAR-CREATE-FROM | **No FAB/create** trên list · tạo từ estimate peer | Design/Dev |
| UNCLEAR-STD-NEST | Design chốt mount list + peer routes (nest vs `?id=`) | Design → Dev |
| UNCLEAR-DOMAIN-MAP-WORK | **Defer SA** — add DOMAIN-MAP row `web-rmms-work` → Maintenance · MFE `/web-rmms-work` | SA |
| UNCLEAR-MSG-VS-COMMENT | **Defer SA** — cite Live messages vs comments · **cấm** invent | SA |

## 8. DoD P1 (role gate)

- [x] packKind=`list` · changeScope=`new_page` · contentHash match analy
- [x] Screens WORK-L primary · peers nav-only
- [x] Grid/List AC AC-L-01…12
- [x] Leave §6
- [x] Live Mobile.Bff only · cấm ERP.* / web-bff / invent path
- [x] Handoff Design: phone 430 · Android 1-1 `#sc-mnt-list` · control-map · reviewUrl
- [x] Compact `handoff/po-compact.md` ≤5KB

## 9. Handoff next

| Role | Packet |
|------|--------|
| Design | control-map §4 · zones WORK-* · phone 430 · `#sc-mnt-list` · prototype + reviewUrl · chips live |
| SA | Cite Live work-orders DTO · DOMAIN-MAP row · Mobile.Bff · MSG path · **cấm** ERP.* |
| TL/Dev | Wire Mobile MFE · live list · no create FAB · peer nav |
| QA | empty · search/filter · peer nav · no fake · no web-bff · no create FAB · no Me |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:56146b96759461d425413e7e27e31fc1a5a4ed0a5f376f6a526959f62eb62770` · `rulesVersion=2026.09.25.2` · `writtenAt=2026-09-26T04:56:00.000Z`
