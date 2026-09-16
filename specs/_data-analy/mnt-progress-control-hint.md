# Data-analy — mnt-progress (controlHint · mobile Cập nhật trạng thái)

| | |
|---|---|
| feature | `mnt-progress` |
| title | [Mobile] [Công việc] -> Cập nhật trạng thái |
| role | `data_analy` · `/agent-data-analy-mobile` · mode `feature_context` |
| packKind | **`sheet`** (packet · `_form-type-mobile` · mnt-list tree) · surface = **screen** `#sc-mnt-progress` (Design tạo · demo P1 = toast) |
| changeScope | `new_page` |
| status | **confirmed** |
| taskId | `task_1867f892` |
| autoApprove | `ON` |
| demo | `specs/mobile-p1/ui/prototype/{ios,android}/index.html` · entry `#sc-mnt-list` `#i-sync` toast «Cập nhật trạng thái · ảnh + định vị» · **chưa** `#sc-mnt-progress` |
| ctx | `docs/context/features/mnt-progress.md` · `mnt-list.md` · `maintenance.md` |
| generatedAt | `2026-08-29T06:00:18.000Z` |

**Cấm:** watermark Gói · invent `api/v1/mnt-progress` · gộp `mnt-chat` / `mnt-log` / `estimate` · ERP.* · mfeStdUrl · fake toast success khi POST fail · fake lat/lng · system alert.

## Skill packet (`/agent-data-analy-mobile`) — 4 file

| File | Skill step |
|------|------------|
| **file này** | 4–5 controlHint + tech factors |
| [`mnt-progress-bff-endpoints.md`](mnt-progress-bff-endpoints.md) | 6 BFF · **cấm invent** |
| [`mnt-progress-action-tree.md`](mnt-progress-action-tree.md) | 7 tree + share/reuse |
| [`mnt-progress-real-data.md`](mnt-progress-real-data.md) | 6b real-data bind |

## § Delta Current vs New (`new_page`)

| ID | Current (native / demo) | New (SSOT mobile + CTX) | Surface |
|----|-------------------------|-------------------------|---------|
| GAP-MOB-MNT-PROG-NAV-01 | mnt-list `#i-sync` → **toast only** | Nav push `#sc-mnt-progress` «Cập nhật trạng thái» · back → `mnt-list` | mnt-list · mnt-progress |
| GAP-MOB-MNT-PROG-SCR-01 | Không màn progress | Full screen/sheet · `DES-MOB-MNT-PROGRESS` (Design) | screen |
| GAP-MOB-MNT-PROG-HDR-01 | — | Header WO title · code · status hiện tại (readonly) | card rows |
| GAP-MOB-MNT-PROG-PCT-01 | — | Field «Tiến độ (%)» 0–100 · Number / Slider | number * |
| GAP-MOB-MNT-PROG-NOTE-01 | — | «Ghi chú» MultilineText | textarea |
| GAP-MOB-MNT-PROG-PHOTO-01 | toast «ảnh» | PhotoRow + `#i-camera` capture | camera |
| GAP-MOB-MNT-PROG-GPS-01 | toast «định vị» | ListRow «Vị trí đã chốt» · device GPS · **cấm** fake | GPS |
| GAP-MOB-MNT-PROG-CTA-01 | — | Primary «Cập nhật» → POST progress · toast ok | CTA |
| GAP-MOB-MNT-PROG-DONE-01 | — | % = 100 / hoàn thành → POST `complete` cùng slug | CTA path |
| GAP-MOB-MNT-PROG-DATA-01 | — | Mobile.Bff `maintenance/work-orders/{id}/progress` (+ opt GET detail · complete) | BFF |
| GAP-MOB-MNT-PROG-PACK-01 | scan `sheet` · demo toast | packKind=`sheet` · surface screen — Design/PO chốt | meta |

**Không** đổi (OUT pack): `mnt-list` cards · `estimate` · `mnt-chat` · `mnt-log` · web Kind B/form WO · comments DEFER · Kind E summary.

**Reuse web:** domain Maintenance · `POST …/progress` · `POST …/complete` · status enum `new` / `in_progress` / `done` / `cancelled`.

## Tech factors

| Factor | P1 | Notes |
|--------|----|-------|
| GPS | **yes** | Toast «định vị» · chốt device · deny → reuse `DES-MOB-GPS-DENY` · **cấm** fake · embed tóm tắt → `Note` (**GAP-MOB-MNT-PROG-GPS-01**) |
| Camera | **yes** | Toast «ảnh» · PhotoRow · optional `ai-vision/uploads` (**GAP-MOB-MNT-PROG-MEDIA-01**) |
| Offline | optional | POST fail → toast lỗi · **cấm** fake 200 · queue offline **DEFER** |
| Map | n/a | Không embed map trên sheet này |
| Biometric | n/a | |
| Push | n/a | |

## § Tab index

`tabs: none` — màn full trong tab shell `work` · **không** segment trên surface (`GAP-TAB-01`). Shell Tab 5 **giữ**. Entry từ `mnt-list` card `#i-sync`.

## § Demo dual

Entry dual: cùng toast «Cập nhật trạng thái · ảnh + định vị» · cùng `#i-sync` trên card «Vá mặt đường» (status Chờ xử lý). **Chưa** có `#sc-mnt-progress` — Design tạo dual parity cùng copy VN · cùng `#i-camera` / GPS row · cùng CTA «Cập nhật». **Cấm** invent icon ngoài kit map.

## controlHint — `#sc-mnt-progress` (proposed · Design chốt)

| Field | VN | controlHint | Size | Kit | Notes |
|-------|----|-------------|------|-----|-------|
| screenTitle | Cập nhật trạng thái | TopBar title | 17 | `LinmTopBar` | `DES-MOB-MNT-PROGRESS` |
| navBack | Công việc | BackButton | 16 | chevron / icon-btn | `go('mnt-list')` |
| woTitle | (tên CV) | ListRow / Text readonly | 13 / ≥16 | | nav / GET detail `title` |
| woCode | WO-* / CV-* | Text readonly | 13 / ≥16 | | `code` |
| woStatus | Tình trạng hiện tại | Badge / Status readonly | 13 / ≥16 | | status → VN map mnt-list |
| progressPct | Tiến độ (%) | NumberField / Slider | **13** / ≥16 | 0–100 * | → `ProgressPercent` |
| note | Ghi chú | MultilineText | **13** / ≥16 | `LinmTextArea` | → `Note` · opt GPS text |
| photoLabel | Ảnh hiện trường | SectionLabel | **13** | | toast «ảnh» |
| photos | Ảnh | PhotoRow | — | slots | attach |
| addPhoto | (camera) | CameraButton | — | `#i-camera` | device capture |
| locationRow | Vị trí đã chốt | ListRow readonly | 13 / ≥16 | | GPS · ±m · route if known |
| btnUpdate | Cập nhật | PrimaryButton | 16–17 | `LinmPrimaryButton` | POST progress · cùng slug |
| toastOk | Đã cập nhật tiến độ · {n}% | Toast | 13–16 | `LinmToast` | sau 200 |
| toastErr | (lỗi mạng / 422) | Toast | 13–16 | | **cấm** fake ok |
| gpsDeny | Định vị bị tắt | Modal | 17/13 | `DES-MOB-GPS-DENY` | reuse |

### Entry (parent chrome — không control riêng slug)

| Field | VN | controlHint | Kit | Notes |
|-------|----|-------------|-----|-------|
| actProgress | Cập nhật trạng thái | IconButton | `#i-sync` | mnt-list card · `go('mnt-progress')` |

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
| Tiến độ % | `LinmTextField` number / slider kit |
| Ghi chú | `LinmTextArea` |
| PhotoRow + camera | PhotoRow · `LinmIconButton` `#i-camera` |
| GPS row | `LinmListRow` |
| Primary CTA | `LinmPrimaryButton` |
| Entry `#i-sync` | `LinmIconButton` |
| Toast | `LinmToast` |

## Gaps (handoff PO → Design/SA)

| ID | Note | Default |
|----|------|---------|
| GAP-MOB-MNT-PROG-SCR-01 | Toast → real `#sc-mnt-progress` | **must** Design |
| GAP-MOB-MNT-PROG-MEDIA-01 | Progress body không MediaUrl | camera UX + optional uploads · SA nếu Signed |
| GAP-MOB-MNT-PROG-GPS-01 | Không lat/lng API | device + Note embed · cấm fake |
| GAP-MOB-MNT-PROG-LABEL-01 | init-data vs list VN labels | giữ mnt-list copy trên chrome |
| GAP-MOB-MNT-PROG-PACK-01 | sheet vs screen | PO/Design chốt sheet surface screen |
| GAP-MOB-MNT-PROG-DONE-01 | complete vs progress@100 | cùng slug · POST complete khi done |

## Sources / hash

| Source | Path | sha256 |
|--------|------|--------|
| CTX (new) | `docs/context/features/mnt-progress.md` | `sha256:7575cc93a9fc1e4c2ac0bdbdc219fdb28db7c6177f83457b747529646244ccec` |
| Parent CTX | `docs/context/features/mnt-list.md` | `sha256:1df1005f6c0810be8e03a28e3c5c0e5dcb216234db9101f1571348000d11ae1f` |
| Domain CTX | `docs/context/features/maintenance.md` | `sha256:05d3f91d52fd921af4a25798cd487c403563987e7b2689fec85f958b6357fa0f` |
| Demo iOS | `specs/mobile-p1/ui/prototype/ios/index.html` `#i-sync` toast | `sha256:394ab44597648f04b25e6d58476378c16141feb53d3b58d39923b3defcff8328` |
| Demo Android | `specs/mobile-p1/ui/prototype/android/index.html` | `sha256:cbb3af57cc4c8feebf8d80472f926933345acb478c280e55e83214ec125fdb91` |
| Scan | `_form-type-mobile/ACTION-TREE.md` · `mnt-progress` sheet | pending_confirm → **this turn** |
| Live API | `WorkOrdersController` · `ProgressWorkOrderRequest` | Signed |

## UNCLEAR

**none** — toast entry + live progress API + maintenance CTX chốt · media/GPS body = GAP (không UNCLEAR UI).

## Handoff → PO

| Field | Value |
|-------|-------|
| feature / packKind | `mnt-progress` / **sheet** (GAP-MOB-MNT-PROG-PACK-01) |
| phase_from / phase_to | `data_analy` **done** → `po` |
| BFF | `mnt-progress-bff-endpoints.md` |
| Action tree | `mnt-progress-action-tree.md` |
| Real-data | `mnt-progress-real-data.md` |
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
| generatedAt | 2026-08-29T06:00:18.000Z |
| versionGate | rechecked |
| contentHash | sha256:mnt-progress-mobile-control-hint-20260829 |
| demoContentHash | sha256:394ab44597648f04b25e6d58476378c16141feb53d3b58d39923b3defcff8328 |
| parentCtxHash | sha256:1df1005f6c0810be8e03a28e3c5c0e5dcb216234db9101f1571348000d11ae1f |
| taskId | `task_1867f892` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
