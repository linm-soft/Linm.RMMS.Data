# Data-analy — mnt-log (controlHint · mobile Nhật ký xử lý)

| | |
|---|---|
| feature | `mnt-log` |
| title | [Mobile] [Công việc] -> Nhật ký xử lý |
| role | `data_analy` · `/agent-data-analy-mobile` · mode `feature_context` |
| packKind | **`sheet`** (packet · `_form-type-mobile` · mnt-list tree) · surface = **screen** `#sc-mnt-log` (Design tạo · demo P1 = toast) |
| changeScope | `new_page` |
| status | **confirmed** |
| taskId | `task_60cc0721` |
| autoApprove | `ON` |
| demo | `specs/mobile-p1/ui/prototype/{ios,android}/index.html` · entry `#sc-mnt-list` `#i-list` toast «Nhật ký xử lý» · **chưa** `#sc-mnt-log` |
| ctx | `docs/context/features/mnt-log.md` · `mnt-list.md` · `maintenance.md` |
| generatedAt | `2026-08-29T07:13:00.000Z` |

**Cấm:** watermark Gói · invent `api/v1/mnt-log` / `…/logs` · gộp `mnt-chat` composer · gộp `mnt-progress` write · ERP.* · mfeStdUrl · fake timeline khi GET fail · system alert.

## Skill packet (`/agent-data-analy-mobile`) — 4 file

| File | Skill step |
|------|------------|
| **file này** | 4–5 controlHint + tech factors |
| [`mnt-log-bff-endpoints.md`](mnt-log-bff-endpoints.md) | 6 BFF · **cấm invent** |
| [`mnt-log-action-tree.md`](mnt-log-action-tree.md) | 7 tree + share/reuse |
| [`mnt-log-real-data.md`](mnt-log-real-data.md) | 6b real-data bind |

## § Delta Current vs New (`new_page`)

| ID | Current (native / demo) | New (SSOT mobile + CTX) | Surface |
|----|-------------------------|-------------------------|---------|
| GAP-MOB-MNT-LOG-NAV-01 | mnt-list `#i-list` → **toast only** (done card) | Nav push `#sc-mnt-log` «Nhật ký xử lý» · back → `mnt-list` | mnt-list · mnt-log |
| GAP-MOB-MNT-LOG-SCR-01 | Không màn log | Full screen/sheet · `DES-MOB-MNT-LOG` (Design) | screen |
| GAP-MOB-MNT-LOG-HDR-01 | — | Header WO title · code · status (readonly) | card rows |
| GAP-MOB-MNT-LOG-TL-01 | — | Timeline dọc mốc xử lý (tạo · hạn · tiến độ · note · hoàn thành) | timeline list |
| GAP-MOB-MNT-LOG-EMPTY-01 | — | Empty «Chưa có nhật ký» khi thiếu data | empty |
| GAP-MOB-MNT-LOG-DATA-01 | — | Mobile.Bff `GET maintenance/work-orders/{id}` + **client derive** | BFF |
| GAP-MOB-MNT-LOG-HIST-01 | — | Không GET history live · P1 derive · SA nếu Signed | GAP |
| GAP-MOB-MNT-LOG-PACK-01 | scan `sheet` · demo toast | packKind=`sheet` · surface screen — Design/PO chốt | meta |
| GAP-MOB-MNT-LOG-ENTRY-01 | Demo `#i-list` chỉ card `done` | PO chốt entry mọi status hay chỉ done | entry |
| GAP-MOB-MNT-LOG-CMT-01 | — | Comments = `mnt-chat` · **cấm** composer trên slug này | scope |

**Không** đổi (OUT pack): `mnt-list` cards · `estimate` · `mnt-chat` · `mnt-progress` write · web Kind B/form WO · Kind E summary.

**Reuse web:** domain Maintenance · `GET …/work-orders/{id}` · status enum `new` / `in_progress` / `done` / `cancelled` · demo web `progressTimeline` derive pattern.

## Tech factors

| Factor | P1 | Notes |
|--------|----|-------|
| GPS | n/a | Readonly nhật ký — **không** capture |
| Camera | n/a | |
| Offline | optional | GET fail → empty/toast lỗi · demo fallback chỉ khi Design gate · **cấm** fake rows |
| Map | n/a | |
| Biometric | n/a | |
| Push | n/a | |

## § Tab index

`tabs: none` — màn full trong tab shell `work` · **không** segment trên surface (`GAP-TAB-01`). Shell Tab 5 **giữ**. Entry từ `mnt-list` card `#i-list` (done).

## § Demo dual

Entry dual: cùng toast «Nhật ký xử lý» · cùng `#i-list` trên card «Nạo cống» (status Đã hoàn thành). **Chưa** có `#sc-mnt-log` — Design tạo dual parity cùng copy VN · cùng timeline rows · **không** CTA write. **Cấm** invent icon ngoài kit map.

## controlHint — `#sc-mnt-log` (proposed · Design chốt)

| Field | VN | controlHint | Size | Kit | Notes |
|-------|----|-------------|------|-----|-------|
| screenTitle | Nhật ký xử lý | TopBar title | 17 | `LinmTopBar` | `DES-MOB-MNT-LOG` |
| navBack | Công việc | BackButton | 16 | chevron / icon-btn | `go('mnt-list')` |
| woTitle | (tên CV) | ListRow / Text readonly | 13 / ≥16 | | nav / GET detail `title` |
| woCode | WO-* / CV-* | Text readonly | 13 / ≥16 | | `code` |
| woStatus | Tình trạng hiện tại | Badge / Status readonly | 13 / ≥16 | | status → VN map mnt-list |
| sectionLog | Nhật ký | SectionLabel | **13** | | |
| timeline | (các mốc) | TimelineList / List | 13 / ≥16 | vertical | derive P1 · **GAP-MOB-MNT-LOG-TL-01** |
| logAt | (thời điểm) | Text caption | 13 | | `CreatedAt` / `DueAt` / `UpdatedAt` |
| logBody | (nội dung mốc) | Text | ≥16 | | title + body row |
| empty | Chưa có nhật ký | EmptyChrome | 13–16 | | thiếu id / 0 derive + no fallback |
| toastErr | (lỗi mạng / 404) | Toast | 13–16 | `LinmToast` | **cấm** fake timeline |

### Entry (parent chrome — không control riêng slug)

| Field | VN | controlHint | Kit | Notes |
|-------|----|-------------|-----|-------|
| actLog | Nhật ký xử lý | IconButton | `#i-list` | mnt-list done card · `go('mnt-log')` |

### Timeline row templates (derive · CTX)

| kind | VN body | Source |
|------|---------|--------|
| created | Tạo công việc | `CreatedAt` |
| due | Hạn: {fmt DueAt} | `DueAt` |
| description | Mô tả: {Description} | `Description` |
| progress | Tiến độ hiện tại {ProgressPercent}% | `ProgressPercent` · `UpdatedAt` |
| note | {Note} | `Note` · `UpdatedAt` |
| done | Hoàn thành | status=`done` · `UpdatedAt` |

### Status VN map (display)

| API | VN (mnt-list SSOT) |
|-----|-------------------|
| `new` | Chờ xử lý |
| `in_progress` | Đang xử lý |
| `done` | Đã hoàn thành |
| `cancelled` | Đã hủy |

## Typography (HARD)

Label **13** · field value **≥16** · tab shell **13** — `typography-web-mobile.md`.

## Kit map (iOS + Android)

| Demo / proposed | Kit dual |
|-----------------|----------|
| `.nav-bar` / top bar | `LinmTopBar` |
| Header WO | `LinmListRow` / card-group |
| Timeline | `LinmList` / timeline group (Design) |
| Empty | EmptyChrome kit |
| Entry `#i-list` | `LinmIconButton` |
| Toast | `LinmToast` |

## Gaps (handoff PO → Design/SA)

| ID | Note | Default |
|----|------|---------|
| GAP-MOB-MNT-LOG-SCR-01 | Toast → real `#sc-mnt-log` | **must** Design |
| GAP-MOB-MNT-LOG-HIST-01 | Không history API / Progress table | P1 derive GetById · SA nếu Signed |
| GAP-MOB-MNT-LOG-PACK-01 | sheet vs screen | PO/Design chốt |
| GAP-MOB-MNT-LOG-ENTRY-01 | chỉ done card vs mọi status | demo = done · PO chốt |
| GAP-MOB-MNT-LOG-CMT-01 | comments ≠ nhật ký | giữ `mnt-chat` |
| GAP-MOB-MNT-LOG-SORT-01 | newest-first vs oldest-first | default newest-first |

## Sources / hash

| Source | Path | sha256 |
|--------|------|--------|
| CTX (new) | `docs/context/features/mnt-log.md` | `sha256:87761a7752a493d6ad176d96d76ccaf6116ea407ec5ec5513b6e12372a58d701` |
| Parent CTX | `docs/context/features/mnt-list.md` | `sha256:1df1005f6c0810be8e03a28e3c5c0e5dcb216234db9101f1571348000d11ae1f` |
| Domain CTX | `docs/context/features/maintenance.md` | `sha256:05d3f91d52fd921af4a25798cd487c403563987e7b2689fec85f958b6357fa0f` |
| Demo iOS | `specs/mobile-p1/ui/prototype/ios/index.html` `#i-list` toast | `sha256:394ab44597648f04b25e6d58476378c16141feb53d3b58d39923b3defcff8328` |
| Demo Android | `specs/mobile-p1/ui/prototype/android/index.html` | `sha256:cbb3af57cc4c8feebf8d80472f926933345acb478c280e55e83214ec125fdb91` |
| Scan | `_form-type-mobile/ACTION-TREE.md` · `mnt-log` sheet | pending_confirm → **this turn** |
| Live API | `WorkOrdersController.GetById` · `WorkOrderDto` | Signed · **không** logs endpoint |

## UNCLEAR

**none** — toast entry + live GetById + maintenance CTX chốt · history API = GAP (không UNCLEAR UI).

## Handoff → PO

| Field | Value |
|-------|-------|
| feature / packKind | `mnt-log` / **sheet** (GAP-MOB-MNT-LOG-PACK-01) |
| phase_from / phase_to | `data_analy` **done** → `po` |
| BFF | `mnt-log-bff-endpoints.md` |
| Action tree | `mnt-log-action-tree.md` |
| Real-data | `mnt-log-real-data.md` |
| Next | `/agent-po-mobile` |
| autoApprove | ON → chain PO (không chờ board) · **cấm** start PO trong task data_analy này |

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
| contentHash | sha256:mnt-log-mobile-control-hint-20260829 |
| demoContentHash | sha256:394ab44597648f04b25e6d58476378c16141feb53d3b58d39923b3defcff8328 |
| parentCtxHash | sha256:1df1005f6c0810be8e03a28e3c5c0e5dcb216234db9101f1571348000d11ae1f |
| taskId | `task_60cc0721` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
