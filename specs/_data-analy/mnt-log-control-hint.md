# Data-analy — mnt-log (controlHint · mobile Nhật ký xử lý)

| | |
|---|---|
| feature | `mnt-log` |
| title | [Mobile] [Công việc] -> Nhật ký xử lý |
| role | `data_analy` · `/agent-data-analy-mobile` · mode `feature_context` |
| packKind | **`sheet`** (PO **confirmed** · surface screen `#sc-mnt-log`) |
| changeScope | `new_page` (shipped · this turn = hash refresh · Must **0**) |
| status | **confirmed** |
| taskId | `task_6e7aa15d` |
| autoApprove | `ON` |
| demo | `specs/mnt-log/ui/prototype/{ios,android}/index.html` `#sc-mnt-log` · `DES-MOB-MNT-LOG` |
| ctx | `docs/context/features/mnt-log.md` · `mnt-list.md` · `maintenance.md` |
| generatedAt | `2026-09-19T13:38:11.000Z` |
| versionGate | `recheck_new` (Autopilot · CTX+demo+skillVersion lệch artifact cũ) |

**Cấm:** watermark Gói · invent `api/v1/mnt-log` / `…/logs` · gộp `mnt-chat` composer · gộp `mnt-progress` write · ERP.* · mfeStdUrl · fake timeline khi GET fail · system alert.

## Skill packet (`/agent-data-analy-mobile`) — 4 file

| File | Skill step |
|------|------------|
| **file này** | 4–5 controlHint + tech factors |
| [`mnt-log-bff-endpoints.md`](mnt-log-bff-endpoints.md) | 6 BFF · **cấm invent** |
| [`mnt-log-action-tree.md`](mnt-log-action-tree.md) | 7 tree + share/reuse |
| [`mnt-log-real-data.md`](mnt-log-real-data.md) | 6b real-data bind |

## § Delta Current vs New

| ID | Current | New / status | Surface |
|----|---------|--------------|---------|
| GAP-MOB-MNT-LOG-NAV-01 | Entry `#i-list` → `#sc-mnt-log` | **shipped** | mnt-list · mnt-log |
| GAP-MOB-MNT-LOG-SCR-01 | `#sc-mnt-log` · `DES-MOB-MNT-LOG` dual demo | **CLOSED** (demo live) | screen |
| GAP-MOB-MNT-LOG-HDR-01 | Header WO title · code · status | shipped readonly | `#wo-header` |
| GAP-MOB-MNT-LOG-TL-01 | Timeline dọc | shipped · client derive | `#timeline` |
| GAP-MOB-MNT-LOG-EMPTY-01 | Empty «Chưa có nhật ký» | shipped | `#empty` |
| GAP-MOB-MNT-LOG-DATA-01 | BFF `GET maintenance/work-orders/{id}` | **confirmed** | BFF |
| GAP-MOB-MNT-LOG-HIST-01 | History API | **CLOSED P1** · derive GetById · DEFER history | GAP |
| GAP-MOB-MNT-LOG-PACK-01 | packKind=`sheet` · surface screen | **PO confirmed** | meta |
| GAP-MOB-MNT-LOG-ENTRY-01 | Entry done card `#i-list` | **confirmed** demo = done | entry |
| GAP-MOB-MNT-LOG-CMT-01 | Comments = `mnt-chat` | **cấm** composer | scope |
| GAP-MOB-A11Y-01 | iOS log glyph a11y | **Should OPEN** · Must **0** · `/edit-mobile-feature` optional | iOS |

**Không** đổi (OUT pack): `mnt-list` cards · `estimate` · `mnt-chat` · `mnt-progress` write · web Kind B/form WO · Kind E summary.

## Tech factors

| Factor | P1 | Notes |
|--------|----|-------|
| GPS | n/a | Readonly — **không** capture |
| Camera | n/a | |
| Offline | optional | GET fail → empty/toast · **cấm** fake rows |
| Map | n/a | |
| Biometric | n/a | |
| Push | n/a | |

## § Tab index

`tabs: none` — màn full trong tab shell `work` · **không** segment trên surface (`GAP-TAB-01`). Shell Tab 5 **giữ**. Entry từ `mnt-list` card `#i-list` (done).

## § Demo dual

Dual `#sc-mnt-log` · `DES-MOB-MNT-LOG` · cùng copy VN · cùng zone ids (`#wo-header` · `#wo-title` · `#wo-code` · `#wo-status-text` · `#wo-status-badge` · `#section-log` · `#timeline` · `#empty` · `#banner-missing`). **Không** CTA write. **Cấm** invent icon ngoài kit.

## controlHint — `#sc-mnt-log` (Design chốt · ship)

| Field | VN | controlHint | Size | Kit / zone | Notes |
|-------|----|-------------|------|------------|-------|
| screenTitle | Nhật ký xử lý | TopBar title | 17 | `LinmTopBar` · `.nav-title` | `DES-MOB-MNT-LOG` |
| navBack | Công việc | BackButton | 16 | chevron / icon-btn | `go('mnt-list')` |
| woTitle | (tên CV) | ListRow / Text readonly | 13 / ≥16 | `#wo-title` | nav / GET `title` |
| woCode | WO-* / CV-* | Text readonly | 13 / ≥16 | `#wo-code` | `code` |
| woStatus | Tình trạng hiện tại | Badge / Status readonly | 13 / ≥16 | `#wo-status-badge` | status → VN |
| sectionLog | Nhật ký | SectionLabel | **13** | `#section-log` | |
| timeline | (các mốc) | TimelineList / List | 13 / ≥16 | `#timeline` | derive P1 |
| logAt | (thời điểm) | Text caption | 13 | timeline row | `CreatedAt` / `DueAt` / `UpdatedAt` |
| logBody | (nội dung mốc) | Text | ≥16 | timeline row | title + body |
| empty | Chưa có nhật ký | EmptyChrome | 13–16 | `#empty` | thiếu id / 0 derive |
| bannerMissing | Thiếu công việc… | Banner | 13–16 | `#banner-missing` | thiếu nav id |
| toastErr | (lỗi mạng / 404) | Toast | 13–16 | `LinmToast` | **cấm** fake timeline |

### Entry (parent chrome)

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
| `#wo-header` | `LinmListRow` / card-group |
| `#timeline` | `LinmList` / timeline group |
| `#empty` | EmptyChrome kit |
| Entry `#i-list` | `LinmIconButton` |
| Toast | `LinmToast` |

## Gaps (handoff)

| ID | Note | Default |
|----|------|---------|
| GAP-MOB-MNT-LOG-HIST-01 | History API | **CLOSED P1** · DEFER |
| GAP-MOB-A11Y-01 | iOS a11y id | Should · Must **0** · optional edit |
| GAP-MOB-MNT-LOG-CMT-01 | comments ≠ nhật ký | giữ `mnt-chat` |
| GAP-MOB-MNT-LOG-SORT-01 | newest-first | **confirmed** default |

## Sources / hash

| Source | Path | sha256 |
|--------|------|--------|
| CTX | `docs/context/features/mnt-log.md` | `sha256:5c74f801620d6dabea7e29b3591c3298a358205a64070a14c4d371d3098a3dd3` |
| Parent CTX | `docs/context/features/mnt-list.md` | `sha256:99b41731e67d7c0b661a0a053349f2975f22e7e2d67c417d640905e57006f0d2` |
| Domain CTX | `docs/context/features/maintenance.md` | `sha256:05d3f91d52fd921af4a25798cd487c403563987e7b2689fec85f958b6357fa0f` |
| Demo iOS | `specs/mnt-log/ui/prototype/ios/index.html` | `sha256:8cf282beb30f5a470dda3628b489b70a3afa2622f9d15074037de4761dae9292` |
| Demo Android | `specs/mnt-log/ui/prototype/android/index.html` | `sha256:fdff13262cfbb6fd2d0afd81dd66467335c8d461a3696c7d45dddbe453d7d409` |
| Demo concat | ios+android bytes | `sha256:d3ecd6203f20b49c25a282887298b7cf657385f1d610b3304da5a5bb393323d0` |
| Live API | `WorkOrdersController.GetById` · `WorkOrderDto` | Signed · **không** logs endpoint |
| Bugs | `specs/mnt-log/qa/bugs/mnt-log.md` | Must open **0** |

## UNCLEAR

**none** — `#sc-mnt-log` dual + live GetById + packKind sheet confirmed · history = CLOSED P1 · Must 0.

## Handoff → PO

| Field | Value |
|-------|-------|
| feature / packKind | `mnt-log` / **sheet** |
| phase_from / phase_to | `data_analy` **done** · pipeline prior roles **giữ confirmed** · **cấm** reset → po |
| BFF | `mnt-log-bff-endpoints.md` |
| Action tree | `mnt-log-action-tree.md` |
| Real-data | `mnt-log-real-data.md` |
| Next | **không** start PO trong task này · optional `/edit-mobile-feature` (A11Y Should) |
| autoApprove | ON · **GAP-PKT-ROLE-01** roleOnly |

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
| parentCtxHash | sha256:99b41731e67d7c0b661a0a053349f2975f22e7e2d67c417d640905e57006f0d2 |
| taskId | `task_6e7aa15d` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.31.2 schemaVersion=2 workflowVersion=2026.09.19.2 rulesVersion=2026.09.19.5 versionGate=recheck_new -->
