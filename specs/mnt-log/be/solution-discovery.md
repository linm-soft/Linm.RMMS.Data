# SA — Solution — mnt-log (mobile sheet → screen · Nhật ký xử lý)

| Field | Value |
|-------|-------|
| feature | `mnt-log` |
| title | [Mobile] [Công việc] -> Nhật ký xử lý |
| this role | `sa` · `/agent-sa-mobile` |
| status | `confirmed` |
| solution_confirm | **approve** (`autoApprove=ON` · `task_217b18b0`) |
| changeScope | `new_page` |
| packKind | **`sheet`** (PO + Design confirm · surface = **full screen** `#sc-mnt-log` · **cấm** bottom-sheet chrome) |
| stack | `native_dual` |
| Feature Kind | **screen** · `DES-MOB-MNT-LOG` · packKind meta `sheet` · **cấm** Kind A–G web / Grid / Report / invent tab / `mfeStdUrl` |
| thisAction | **Nhật ký xử lý** `#sc-mnt-log` only · entry mnt-list `#i-list` (status=`done`) · **cấm** gộp `mnt-chat` / `mnt-progress` write / `estimate` (`GAP-MOB-ACT-01/02`) |
| domain | **Maintenance** · `WorkOrdersController.GetById` · **client derive** timeline · **cấm** invent `api/v1/mnt-log` / `…/logs` / `…/progress-history` |
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` |
| prior · design | **confirmed** · `handoff/design-compact.md` · `ui/design.md` · dual `#sc-mnt-log` · `task_7451543a` |
| prior · po | **confirmed** · `handoff/po-compact.md` · `task_5751a874` |
| prior · data_analy | **confirmed** · compact + `_data-analy/mnt-log-*` · contentHash `sha256:5c74f801620d6dabea7e29b3591c3298a358205a64070a14c4d371d3098a3dd3` · bffContentHash `sha256:maintenance-work-orders-getbyid-proxy-passthrough` · demoContentHash `sha256:d3ecd6203f20b49c25a282887298b7cf657385f1d610b3304da5a5bb393323d0` · `task_6e7aa15d` |
| autoApprove | **ON** |
| e2eQa | ON — queued QA · **cấm** role SA chạy e2e / `yarn start:std` / `mfeStdUrl` |
| versionGate | `recheck_new` |
| requestSource | run packet `task_217b18b0` · roleOnly=`sa` · `/agent-sa-mobile` |
| taskId | `task_217b18b0` |
| confirmedBy | agent autoApprove · `task_217b18b0` |
| updatedAt | `2026-09-19T13:50:00.000Z` |

**Cấm:** invent logs/history path · fork DTO · LogController trên BFF · app `:5101` · parent JSON · ERP.* · `mfeStdUrl` · `localhost`/LAN store (`GAP-SA-STORE-01`) · fake timeline khi GET fail · system alert · Primary write · gộp sibling · Step 4b / migration / e2e ở role SA · Write MFE/native.

---

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` |
| Domain | Maintenance · `WorkOrdersController` · `rmms_work_orders` · `WorkOrderDto` |
| API downstream | **`GET api/v1/maintenance/work-orders/{id}`** (primary) · opt `GET …/init-data` |
| BFF mobile | `MobileApiProxyController` catch-all → `ApiBase` · `maintenance/*` |
| App | iOS `ApiClient` · Android Retrofit · base `{BffBase}/mobile-bff/api/v1` |
| Prefill | nav args (`id`·title·code·status) và/hoặc GetById · thiếu `id` → banner · **chặn** fake rows |
| Timeline | **Client derive** từ Signed `WorkOrderDto` · newest-first · **không** history API |
| GPS / Camera / Write | **n/a** · readonly · write = sibling `mnt-progress` / comments = `mnt-chat` |
| Offline | GET fail → toast + empty · demo fallback **chỉ** Design gate · **cấm** fake timeline |
| Persist BE mới | **không** · Step 4b **N/A** |
| Sibling | entry/back `mnt-list` · **cấm** re-own list / estimate / chat / progress |

### Route decision

| | Choice |
|--|--------|
| Slug | `mnt-log` → packKind **`sheet`** · surface **screen** `#sc-mnt-log` |
| App path P1 read | **`GET maintenance/work-orders/{id}`** · opt init-data |
| App path P1 write | **none** |
| Timeline | client derive · **GAP-MOB-MNT-LOG-HIST-01** CLOSED P1 |
| Step 4b | **N/A** · **cấm** `/new-endpoint` / `/database-migration` turn SA |

---

## SSOT / anti-duplicate

| Concern | Note |
|---------|------|
| BFF HTTP | catch-all proxy · **cấm** `LogController` local |
| BE HTTP | `WorkOrdersController` live GetById · **không** `logs` / `progress-history` |
| Response | `ApiResponse<WorkOrderDto>` · header + derive |
| Offline | toast + empty · **no write queue** · **cấm** full-screen block |
| Tabs | Shell Tab 5 **giữ** · pack `tabs: none` · tab **`work`** active |
| Status VN | mnt-list map · **không** dùng init-data lệch chrome |

---

## FormMode ↔ API (REQUIRED)

| FormMode / surface | Method | Path | Persist | Notes |
|--------------------|--------|------|---------|-------|
| Screen `#sc-mnt-log` · view | GET | `maintenance/work-orders/{id}` | none (readonly) | primary · derive timeline |
| Screen · status labels opt | GET | `maintenance/work-orders/init-data` | none | optional · chrome VN = mnt-list |
| Timeline UI | — | — | client derive | **cấm** invent logs API |
| Missing id / empty / toast | — | local UI | — | **cấm** fake rows |
| Write progress / comments | — | OUT | — | siblings `mnt-progress` / `mnt-chat` |

---

## API-01: GET /api/v1/maintenance/work-orders/{id}

| | |
|--|--|
| Purpose | Load WO detail → bind header + **client derive** timeline `#sc-mnt-log` |
| Permission | `maintenance.work-orders.read` (reuse) |
| Tenant | X-Company-Id · companyCode |
| Request | path `id:guid` |
| Response | `ApiResponse<WorkOrderDto>` · fields Signed bind dưới |
| Errors | 404 → toast «Không tải được nhật ký» + empty · network → toast + empty · **cấm** fake |
| Form surfaces | Screen `#sc-mnt-log` FormMode=view |
| Field map | `woTitle`→`Title` · `woCode`→`Code` · `woStatus`→`Status` · timeline derive từ `CreatedAt`/`DueAt`/`Description`/`ProgressPercent`/`Note`/`UpdatedAt` |
| Context | `docs/context/features/mnt-log.md` |
| Demo | `specs/mnt-log/ui/prototype/{ios,android}/index.html` `#sc-mnt-log` |
| data-import | **N/A** (readonly · no Excel) |
| Sample | live GetById · demo fallback Design gate only |
| Migration | **none** · Step 4b **N/A** |
| BFF | `mobile-bff/api/v1/maintenance/work-orders/{id}` proxy passthrough |
| Downstream | `WorkOrdersController.GetById` |

### API-02 (opt): GET /api/v1/maintenance/work-orders/init-data

| | |
|--|--|
| Purpose | Status label options (display only) |
| Form surfaces | optional · **không** thay chrome VN map mnt-list |
| Migration | none |

### WorkOrderDto bind + derive (P1 · newest-first)

| Field | Bind |
|-------|------|
| `Id`/`Code`/`Title` | header |
| `Status` | badge → VN map |
| `CreatedAt`/`DueAt`/`Description`/`ProgressPercent`/`Note`/`UpdatedAt` | timeline derive |
| `TeamName`/`AssigneeName`/`RouteName`/`IncidentId` | opt subtitle |

| row.kind | when | body VN | at |
|----------|------|---------|-----|
| `done` | status=`done` | Hoàn thành | `UpdatedAt` |
| `note` | `Note` non-empty | {Note} | `UpdatedAt` |
| `progress` | `%`>0 hoặc in_progress/done | Tiến độ hiện tại {n}% | `UpdatedAt` |
| `description` | `Description` non-empty | Mô tả: {Description} | `CreatedAt` |
| `due` | `DueAt` present | Hạn: {fmt} | `DueAt` |
| `created` | always | Tạo công việc | `CreatedAt` |

---

## Implement gates (confirm)

| Gate | Decision | Note |
|------|----------|------|
| TZ | **tz_na** | caption time local display từ DTO · không form date edit |
| XCO | **xco_na** | WO scoped current company |
| SHARE | **share_na** | reuse `rmms_work_orders` · **cấm** invent `mnt_log_*` / parent JSON |
| Offline | screen mở + toast err | **cấm** fake rows · **cấm** full-screen block |
| GPS / Camera / Push | **n/a** | readonly |
| Store | **no new** camera/location claim | **cấm** localhost/LAN · no iPad family `1` claim |
| Step 4b | **N/A** | history API **DEFER** nếu Signed sau |

AskQuestion (autoApprove=ON): `be_repo_confirm`=WebService · `sa_tz_gate=tz_na` · `sa_xco_gate=xco_na` · `sa_shared_table=share_na` · `kit_missing_confirm=n/a` · `solution_confirm=approve` · `2026-09-19T13:50:00.000Z`.

---

## Persist gate (no-parent-json-field)

| | |
|--|--|
| Parent JSON | **none** |
| Child tables | **reuse** `rmms_work_orders` — **không** invent history table |
| Client store | screen state · derived timeline · missingId · loadError |
| Migration / T-BE-API / T-BE-MIG | **n/a** P1 · history **DEFER** |

---

## Live vs delta

| Surface | Live | SA P1 |
|---------|------|-------|
| GET `…/work-orders/{id}` | BE + BFF proxy | **Giữ** primary + derive |
| GET init-data | live | optional |
| GET `…/logs` / history | **không** | **Cấm invent** · HIST-01 CLOSED P1 |
| POST progress/complete | live | **OUT** → `mnt-progress` |
| Screen `#sc-mnt-log` | Design dual confirmed | **Ship** dual native |
| Entry `#i-list` | done card | push `#sc-mnt-log` · **done only** |

---

## Form data analysis

| Screen / FormMode | Fields | Source | Entity |
|-------------------|--------|--------|--------|
| `#sc-mnt-log` view | header + TimelineList | nav / GET + derive | WorkOrder |
| Missing / empty / fail | banner / EmptyChrome / toast | local | — |

| uiField | dtoField | Wire |
|---------|----------|------|
| woTitle / woCode / woStatus | Title / Code / Status | nav / GET |
| timeline[].at / body | CreatedAt/DueAt/UpdatedAt + templates | derived |
| empty / bannerMissing / toastErr | — | local |
| actLog | — | mnt-list `#i-list` done → `go('mnt-log')` |

---

## Navigation / GAP

| Control | P1 |
|---------|-----|
| `#i-list` done | push `#sc-mnt-log` |
| Back | `go('mnt-list')` |
| Write / composer / siblings | **cấm** |

| GAP | Decision |
|-----|----------|
| HIST-01 | CLOSED P1 · client derive · DEFER history API |
| CMT-01 | OUT → `mnt-chat` |
| SORT-01 | newest-first |
| BFF-01 | proxy đủ · **không** dedicated controller |
| STORE-01 | no new camera/location |
| ACT-01/02/06/07 | 1 slug · không enqueue sibling |

---

## Client architecture (TL/Dev)

| Layer | Dual |
|-------|------|
| UI | iOS `Presentation/Features/MntLog/*` · Android `presentation/feature/mntlog/*` |
| Use case | `GetWorkOrderUseCase` · `DeriveWorkOrderTimelineUseCase` |
| Repo | peer `mnt-list` GetById |
| Tasks đề xuất | `T-IOS-MNT-LOG` · `T-AND-MNT-LOG` · `T-BE-MNT-LOG-HIST` (DEFER) · T-BFF/MIG **n/a** |

**Cấm** implement ở role SA.

---

## Handoff → TL

| Field | Value |
|-------|-------|
| feature / packKind | `mnt-log` / **`sheet`** (surface **screen**) |
| solution_confirm | **approve** |
| FormMode↔API | view → GET `{id}` · opt init-data · derive · write **none** |
| TZ/XCO/SHARE | tz_na · xco_na · share_na |
| entity/migration | reuse WO · **none** |
| BFF vs API | proxy passthrough · downstream GetById |
| Tasks | `T-IOS-MNT-LOG` · `T-AND-MNT-LOG` · HIST DEFER |
| Next slash | `/agent-tl-mobile` |
| Chain this turn | **không** (roleOnly=`sa` · GAP-PKT-ROLE-01) |
| e2eQa | ON khi QA · **cấm** e2e ở SA |

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.09.19.2 |
| rulesVersion | 2026.09.19.5 |
| generatedAt | `2026-09-19T13:50:00.000Z` |
| versionGate | recheck_new |
| contentHash | sha256:5c74f801620d6dabea7e29b3591c3298a358205a64070a14c4d371d3098a3dd3 |
| realDataHash | sha256:5c74f801620d6dabea7e29b3591c3298a358205a64070a14c4d371d3098a3dd3 |
| bffContentHash | sha256:maintenance-work-orders-getbyid-proxy-passthrough |
| actionTreeHash | sha256:5c74f801620d6dabea7e29b3591c3298a358205a64070a14c4d371d3098a3dd3 |
| ctxContentHash | sha256:5c74f801620d6dabea7e29b3591c3298a358205a64070a14c4d371d3098a3dd3 |
| demoContentHash | sha256:d3ecd6203f20b49c25a282887298b7cf657385f1d610b3304da5a5bb393323d0 |
| taskId | `task_217b18b0` |

---
<!-- Version meta: skillId=agent-sa-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.09.19.2 rulesVersion=2026.09.19.5 versionGate=recheck_new -->
