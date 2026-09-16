# Real-data bind — mnt-log (mobile)

| | |
|---|---|
| feature | `mnt-log` |
| prefix | `mobile-bff/api/v1` |
| sameMobile | yes · proxy Maintenance domain |
| changeScope | `new_page` |
| taskId | `task_60cc0721` |

Skill: `example/real-data-bind.md` · **GAP-MOB-REAL-01**

## § Delta Current vs New (`new_page`)

| ID | Current | New |
|----|---------|-----|
| GAP-MOB-MNT-LOG-DATA-01 | Native/demo toast · no bind | §B paths khớp `mnt-log-bff-endpoints.md` |
| GAP-MOB-MNT-LOG-REAL-01 | — | Prefill WO · derive timeline từ GetById |
| GAP-MOB-MNT-LOG-HIST-01 | — | Không history API — client derive · cấm invent |
| GAP-MOB-MNT-LOG-CMT-01 | — | Comments OUT · `mnt-chat` |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `api` | `WorkOrdersController.GetById` · `WorkOrderDto` | Empty «Chưa có nhật ký» nếu thiếu field derive tối thiểu | Toast lỗi · **cấm** fake rows |
| `nav` | mnt-list card args (`id` · title · status) | Banner thiếu WO · chặn load | Keep empty |
| `derived` | CTX derive table từ DTO fields | 1+ row tối thiểu nếu `CreatedAt` có | — |
| `demo` | Card «Nạo cống» SSOT dưới § Demo | fallback **chỉ** khi API fail + Design gate | empty state |

## §B — Bind field (HARD · khớp BFF table)

| uiField | Label | controlHint | catalogKind | GET / write | write field | sameMfe | sameMobile |
|---------|-------|-------------|-------------|-------------|-------------|---------|------------|
| woTitle | (tên CV) | Text readonly | — | nav / `GET …/{id}` | display `title` | gap | yes |
| woCode | WO-* | Text readonly | — | same | display `code` | gap | yes |
| woStatus | Tình trạng hiện tại | Badge readonly | — | same | display `status` → VN | gap | yes |
| timeline[].at | (thời điểm) | Text caption | — | derived | `CreatedAt`/`DueAt`/`UpdatedAt` | gap | yes |
| timeline[].body | (nội dung) | Text | — | derived | see CTX templates | gap | yes |
| empty | Chưa có nhật ký | EmptyChrome | — | local | — | gap | yes |

§B path **khớp** `mnt-log-bff-endpoints.md` — **không** invent `api/v1/mnt-log` / `…/logs`.

### Derive map (P1 · signed fields only)

| row.kind | when | body VN | at |
|----------|------|---------|-----|
| `created` | always | Tạo công việc | `CreatedAt` |
| `due` | `DueAt` set | Hạn: {fmt} | `DueAt` |
| `description` | `Description` non-empty | Mô tả: {Description} | `CreatedAt` |
| `progress` | `%`>0 hoặc status in_progress/done | Tiến độ hiện tại {n}% | `UpdatedAt` |
| `note` | `Note` non-empty | {Note} | `UpdatedAt` |
| `done` | status=`done` | Hoàn thành | `UpdatedAt` |

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| Status labels | `GET maintenance/work-orders/init-data` | live Statuses | Hardcode lệch mnt-list map không cite GAP |
| History catalog | — | **không live** | Invent `…/logs` trước SA |

## §D — Map / vẽ

`map: none` — không embed map trên `#sc-mnt-log`.

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| Timeline view | GetById derive | **readonly** trên slug này | GET `{id}` | TimelineList |
| `Status` / `%` / `Note` | `rmms_work_orders` | **không** đổi từ mnt-log | — | display only |
| Write progress | — | user trên `mnt-progress` | POST progress | sibling |
| Comments | — | user trên `mnt-chat` | DEFER | sibling |

## §F — Handoff

| Role | Dùng packet |
|------|-------------|
| PO | DoD «màn mở = data thật» · § Delta · GAP SCR/HIST/PACK/ENTRY/CMT/SORT |
| Design | control-map khớp §B · dual `#sc-mnt-log` · replace toast · timeline kit |
| SA | giữ GetById · quyết định history API (**không** Step 4b ở analy) |
| Dev iOS + Android | cùng §B · prefix mobile-bff · derive shared · replace toast stub |

## Demo rows SSOT (fallback · từ mnt-list card 2 «Nạo cống»)

| Field | Value |
|-------|-------|
| Title | Nạo cống |
| Assign | Hạt trưởng giao việc cho Trần Khánh · Chi cục II.2 |
| Meta | Tuyến HCM |
| Range | 2026-08-09 07:00 — 2026-08-09 16:00 |
| Status | Đã hoàn thành (`done`) |
| Sample timeline | Tạo công việc · Hạn 2026-08-09 16:00 · Tiến độ hiện tại 100% · Hoàn thành |
| Empty | Chưa có nhật ký |

## § Cấm

- Watermark / «bản Gói N» / process text  
- Fake timeline khi GET fail  
- Invent mobile-only path `mnt-log` / `…/logs`  
- Skip §B path ≠ BFF table → **GAP-MOB-REAL-01**  
- Bind web `mfeStdUrl`  
- Composer chat / POST progress trên slug này  

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-08-29T07:13:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:mnt-log-mobile-real-data-20260829 |
| taskId | `task_60cc0721` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
