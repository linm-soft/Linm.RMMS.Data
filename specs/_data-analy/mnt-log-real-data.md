# Real-data bind — mnt-log (mobile)

| | |
|---|---|
| feature | `mnt-log` |
| prefix | `mobile-bff/api/v1` |
| sameMobile | yes · proxy Maintenance domain |
| changeScope | `new_page` (shipped · hash refresh) |
| taskId | `task_6e7aa15d` |
| packKind | `sheet` |
| generatedAt | `2026-09-19T13:38:11.000Z` |

Skill: `data-analy-real-data.md` · **GAP-MOB-REAL-01** · **GAP-MOB-REAL-02**

## § Delta Current vs New

| ID | Current | New / status |
|----|---------|--------------|
| GAP-MOB-MNT-LOG-DATA-01 | §B khớp BFF table | **confirmed** |
| GAP-MOB-MNT-LOG-REAL-01 | Prefill WO · derive timeline | **shipped** |
| GAP-MOB-MNT-LOG-HIST-01 | Không history API | **CLOSED P1** · client derive · DEFER |
| GAP-MOB-MNT-LOG-CMT-01 | Comments OUT | `mnt-chat` |
| GAP-MOB-A11Y-01 | a11y Should | Must **0** · optional edit |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `api` | `WorkOrdersController.GetById` · `WorkOrderDto` · `Linm.RMMS.WebService/.../WorkOrdersController.cs` | Empty «Chưa có nhật ký» nếu thiếu field derive tối thiểu | Toast lỗi · **cấm** fake rows |
| `nav` | mnt-list card args (`id` · title · status) · `#i-list` | Banner `#banner-missing` · chặn load | Keep empty |
| `derived` | CTX derive table từ DTO fields | 1+ row nếu `CreatedAt` có | — |
| `demo` | `#sc-mnt-log` pack proto (fallback Design gate only) | `#empty` | empty state |

## §B — Bind field (HARD · khớp BFF table)

| uiField | Label | controlHint | catalogKind | GET / write | write field | sameMfe | sameMobile |
|---------|-------|-------------|-------------|-------------|-------------|---------|------------|
| woTitle | (tên CV) | Text readonly | — | nav / `GET maintenance/work-orders/{id}` | display `title` | gap | yes |
| woCode | WO-* | Text readonly | — | same | display `code` | gap | yes |
| woStatus | Tình trạng hiện tại | Badge readonly | — | same | display `status` → VN | gap | yes |
| timeline[].at | (thời điểm) | Text caption | — | derived | `CreatedAt`/`DueAt`/`UpdatedAt` | gap | yes |
| timeline[].body | (nội dung) | Text | — | derived | CTX templates | gap | yes |
| empty | Chưa có nhật ký | EmptyChrome | — | local | — | gap | yes |
| bannerMissing | Thiếu công việc | Banner | — | local | — | gap | yes |

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

Sort default **newest-first**.

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| Status labels | `GET maintenance/work-orders/init-data` | live Statuses | Hardcode lệch mnt-list map |
| History catalog | — | **không live** | Invent `…/logs` |

## §D — Map / vẽ

`map: none` — không embed map trên `#sc-mnt-log`.

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|----|
| Timeline view | GetById derive | **readonly** | GET `{id}` | `#timeline` |
| `Status` / `%` / `Note` | `rmms_work_orders` | **không** đổi từ mnt-log | — | display only |
| Write progress | — | `mnt-progress` | POST progress | sibling |
| Comments | — | `mnt-chat` | DEFER | sibling |

## §F — Handoff

| Role | Dùng packet |
|------|-------------|
| PO | DoD «màn mở = data thật» · Must 0 · A11Y optional |
| Design | control-map khớp §B · dual `#sc-mnt-log` |
| SA | giữ GetById · history DEFER |
| Dev iOS + Android | cùng §B · optional A11Y edit |

## Demo rows SSOT (fallback · card «Nạo cống»)

| Field | Value |
|-------|-------|
| Title | Nạo cống |
| Code | CV-20260809-0002 |
| Status | Đã hoàn thành (`done`) |
| Sample timeline | Tạo · Hạn · Tiến độ 100% · Hoàn thành |
| Empty | Chưa có nhật ký |

## § Cấm

- Watermark / fake timeline khi GET fail  
- Invent `mnt-log` / `…/logs` path  
- In-app `demoItems` SSOT → **GAP-MOB-REAL-02**  
- Composer / POST progress trên slug này  

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.31.2 |
| schemaVersion | 2 |
| workflowVersion | 2026.09.19.2 |
| rulesVersion | 2026.09.19.5 |
| generatedAt | 2026-09-19T13:38:11.000Z |
| versionGate | recheck_new |
| contentHash | sha256:5c74f801620d6dabea7e29b3591c3298a358205a64070a14c4d371d3098a3dd3 |
| demoContentHash | sha256:d3ecd6203f20b49c25a282887298b7cf657385f1d610b3304da5a5bb393323d0 |
| taskId | `task_6e7aa15d` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.31.2 schemaVersion=2 workflowVersion=2026.09.19.2 rulesVersion=2026.09.19.5 versionGate=recheck_new -->
