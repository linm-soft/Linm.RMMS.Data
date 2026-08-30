# Control hint — mnt-list (mobile list · Công việc)

| | |
|---|---|
| feature | `mnt-list` |
| title | [Mobile] [Trang Chủ] -> Công việc |
| kind | `list` |
| packKind | `list` |
| changeScope | `new_page` |
| mode | `feature_context` |
| demo | `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-mnt-list` · `DES-MOB-MNT-LIST` |
| ctx | `docs/context/features/mnt-list.md` · domain `maintenance.md` |
| map | `docs/html-to-native-map.md` |
| agent | `agent-data-analy-mobile` |
| at | `2026-08-28T18:45:00.000Z` |
| thisAction | **List Công việc** only · entry home tile + tab `work` · **cấm** gộp form WO / estimate form |
| taskId | `task_659bf5c2` |
| autoApprove | `ON` |
| status | **confirmed** |

## Skill packet (`/agent-data-analy-mobile`) — 4 file

| File | Skill step |
|------|------------|
| **file này** | 4–5 controlHint + tech factors |
| [`mnt-list-bff-endpoints.md`](mnt-list-bff-endpoints.md) | 6 BFF · **cấm invent** |
| [`mnt-list-action-tree.md`](mnt-list-action-tree.md) | 7 tree + share/reuse |
| [`mnt-list-real-data.md`](mnt-list-real-data.md) | 6b real-data bind |

## § Delta Current vs New (`new_page`)

| ID | Current (native) | New (SSOT mobile demo + CTX) | Surface |
|----|------------------|------------------------------|---------|
| GAP-MOB-MNT-NAV-01 | Home tile / tab work → stub / toast | Nav push `#sc-mnt-list` «Danh sách công việc» · back → Home | home · mnt-list |
| GAP-MOB-MNT-LIST-01 | Không màn list WO | Rich cards title · assign · range · incident/route · status | mnt-list |
| GAP-MOB-MNT-HUB-01 | — | Row **Giao việc xử lý** → `#sc-estimate` | mnt-list · estimate |
| GAP-MOB-MNT-DATA-01 | — | GET `maintenance/work-orders` via Mobile.Bff · fail → demo SSOT | mnt-list · BFF |
| GAP-MOB-MNT-DEMO-01 | Android 1 card · iOS 2 cards · copy lệch nhẹ | Dual parity **2** cards + same VN copy (iOS SSOT) | prototype android |

**Không** đổi (OUT pack mobile P1): web Kind B catalog full · Kind E KPI · form WO create/edit · SignalR.

**Reuse web:** domain Maintenance · paths `api/v1/maintenance/work-orders*` · status enum `new` / `in_progress` / `done` / `cancelled`.

## UI control — `#sc-mnt-list`

| Field / zone | controlHint | Kit (iOS + Android) | Native |
|--------------|-------------|---------------------|--------|
| navBack | Back chevron | `LinmTopBar` leading | `go('home')` |
| title | Danh sách công việc | TopBar title | fixed |
| navFilter | Lọc | TextButton / IconButton `#i-list` | toast «Bộ lọc · tuyến đường» P1 |
| search | Tìm kiếm công việc… | `LinmSearchField` `#i-search` | client filter title/route/code |
| hubEstimate | Giao việc xử lý | `LinmListRow` leading `#i-sum` green | `go('estimate')` |
| cardTitle | (tên CV) | Rich card title / `LinmListRow` | DTO `title` |
| cardAssign | giao việc cho… | Text subtitle | TeamName · AssigneeName |
| cardRange | from — to | Text subtitle | CreatedAt — DueAt |
| cardMeta | sự cố · tuyến | Text subtitle | IncidentId · RouteName |
| cardStatus | Tình trạng xử lý: … | Status bar warn/ok | status → VN label |
| actChat | Trao đổi | IconButton `#i-chat` | toast P1 · sibling |
| actProgress | Cập nhật trạng thái | IconButton `#i-sync` | toast P1 · sibling |
| actEstimate | Ước lượng / giao | IconButton `#i-sum` | `go('estimate')` |
| actLog | Nhật ký xử lý | IconButton `#i-list` (done card) | toast P1 · sibling |

## Fields

| Field | VN | controlHint | Required | Source | Notes |
|-------|----|-------------|----------|--------|-------|
| navBack | (chevron) | BackButton | * | `go('home')` | parent `home` |
| title | Danh sách công việc | Text | * | demo | DES-MOB-MNT-LIST |
| navFilter | Lọc | Button | | demo | toast P1 |
| search | Tìm kiếm công việc… | SearchField | | demo | client-side |
| hubTitle | Giao việc xử lý | Text | * | demo | row |
| hubSub | Khối lượng · thời hạn · giao việc | Text | * | demo | |
| items[].title | Vá mặt đường / … | Text | * | GET list | |
| items[].assignLine | … giao việc cho … | Text | * | team + assignee | |
| items[].range | yyyy-MM-dd HH:mm — … | Text | * | createdAt — dueAt | |
| items[].meta | Từ sự cố … · tuyến | Text | | incidentId · routeName | |
| items[].statusLabel | Tình trạng xử lý: … | Badge/Status | * | status map | warn=new · ok=done |
| empty | (trống) | EmptyChrome | | 0 live + no demo | optional |

### Status VN map (Design §3.3)

| API `status` | VN (demo) | chrome |
|--------------|-----------|--------|
| `new` | Chờ xử lý | warn |
| `in_progress` | Đang xử lý | info |
| `done` | Đã hoàn thành | ok |
| `cancelled` | Đã hủy | gray |

## § Tab index

`tabs: none` trên surface list — shell tab `work` = entry (`TAB_HOME.work = mnt-list`) · **cấm** invent segment trên mnt-list.

## § Demo dual

| # | iOS `#sc-mnt-list` | Android `#sc-mnt-list` | `#i-*` |
|---|--------------------|------------------------|-------|
| Back | chevron-left | chevron-left | `#i-chevron-left` |
| Filter | text «Lọc» | icon list | `#i-list` (Android) |
| Search | Tìm kiếm công việc… | **same** | `#i-search` |
| Hub | Giao việc xử lý · Khối lượng · thời hạn · giao việc | **same** | `#i-sum` |
| Card 1 | Vá mặt đường · Chờ xử lý · SC-2401 | **same** (fix GAP-MOB-MNT-DEMO-01) | chat/sync/sum |
| Card 2 | Nạo cống · Đã hoàn thành · Tuyến HCM | **same** (Android **thiếu** → gap) | chat/list/sum |

## Kit map

| Demo chrome | Map | Kit dual |
|-------------|-----|----------|
| `.nav-bar` / `.top-bar` | top bar | `LinmTopBar` |
| `.search` | search | `LinmSearchField` |
| `.card-group` / `.row` hub | list row | `LinmListRow` |
| `.rich-card` | list card | `LinmListRow` / rich card kit |
| `.rc-status.warn` / `.ok` | status | status bar / `LinmBadge` |
| `.rc-actions` buttons | icon actions | `LinmIconButton` |
| toast | toast | `LinmToast` |

## Tech factors

| Factor | List `mnt-list` | Note |
|--------|-----------------|------|
| GPS | no (list) | progress sibling may need GPS later |
| camera | no (list) | progress sibling toast «ảnh + định vị» |
| offline | list vẫn mở | GET fail → demo 2 cards SSOT |
| map | no | — |
| biometric | no | — |
| push | no | — |
| token | Keychain / Encrypted | Bearer BFF proxy |

## Hành vi (không `alert`)

| Case | UI |
|------|-----|
| Mở từ Home tile / tab Công việc | Nav push `#sc-mnt-list` |
| Load OK | Cards từ BFF |
| Load fail | Demo 2 cards · toast info optional |
| Tap hub / card `#i-sum` | `go('estimate')` |
| Tap Lọc | toast «Bộ lọc · tuyến đường» |
| Search | client filter |
| Tap chat / sync / list | toast P1 · **không** API trên slug này |
| Back | pop → Home |

## UNCLEAR

| ID | Note |
|----|------|
| GAP-F-MNT-MOB-01 | Assigner «Hạt trưởng VP-IV.1» — DTO **không** AssignerName · bind TeamName + AssigneeName · demo copy fallback |
| GAP-MOB-MNT-DEMO-01 | Android thiếu card 2 + copy parity — Design fix |

## Handoff → PO

| Field | Value |
|-------|-------|
| feature / packKind | `mnt-list` / **list** |
| phase_from / phase_to | `data_analy` **done** → `po` |
| BFF | `mnt-list-bff-endpoints.md` |
| Action tree | `mnt-list-action-tree.md` |
| Real-data | `mnt-list-real-data.md` |
| Next | `/agent-po-mobile` · **cấm** start trong task này |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-08-28T18:45:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:mnt-list-mobile-list-20260828 |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
