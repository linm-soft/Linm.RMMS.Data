# Control hint — ops (mobile list · Thông báo)

| | |
|---|---|
| feature | `ops` |
| kind | `list` |
| packKind | `list` (inbox notify · **≠** web Kind B catalog full) |
| changeScope | `edit_page` |
| mode | `feature_context` · enhance native stub → real list |
| demo | `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-ops` · `DES-MOB-OPS` |
| ctx | `docs/context/features/ops.md` |
| map | `docs/html-to-native-map.md` |
| agent | `agent-data-analy-mobile` |
| at | `2026-08-19T11:50:00.000Z` |
| thisAction | **List Thông báo** only · entry Me `row-ops` + Home bell · **cấm** gộp form/create |
| taskId | `task_f2c9a5de` |
| autoApprove | `ON` |

## Skill packet (`/agent-data-analy-mobile`) — 4 file

| File | Skill step |
|------|------------|
| **file này** | 4–5 controlHint + tech factors |
| [`ops-bff-endpoints.md`](ops-bff-endpoints.md) | 6 BFF · **cấm invent** |
| [`ops-action-tree.md`](ops-action-tree.md) | 7 tree + share/reuse |
| [`ops-real-data.md`](ops-real-data.md) | 6b real-data bind |

## § Delta Current vs New (`edit_page`)

Giữ PO/Design/SA **web** artifacts đã confirmed. Delta **mobile** task_f2c9a5de:

| ID | Current (native 2026-08-19) | New (SSOT mobile demo + CTX) | Surface |
|----|-----------------------------|------------------------------|---------|
| GAP-MOB-OPS-NAV-01 | Me `row-ops` / Home bell → **toast only** | Nav push `#sc-ops` «Thông báo» · back → Me / Home | me · home · ops |
| GAP-MOB-OPS-LIST-01 | Không màn inbox | List rows title · sub (sender · time) · badge `Mới` / `Đã đọc` | ops list |
| GAP-MOB-OPS-READ-01 | — | Tap unread → `POST …/mark-read` · toast «Đã đọc chỉ đạo» · badge → Đã đọc | ops list |
| GAP-MOB-OPS-DATA-01 | — | GET `notification/inbox` via Mobile.Bff · fail → demo copy (2 rows iOS SSOT) | ops · BFF |
| GAP-MOB-OPS-DEMO-01 | Android `#sc-ops` 1 row · iOS 2 rows | Dual parity 2 rows + same VN copy | prototype android |

**Không** đổi (OUT pack mobile P1): web Kind B schema editor · full-page form create · SignalR · Command center · map embed · org-unit filter bar.

**Reuse web:** domain Notification · paths `api/v1/notification/inbox*` · OfficialDocument scalars trên DTO (list row **không** bắt buộc hiện số CV).

## UI control — `#sc-ops`

| Field / zone | controlHint | Kit (iOS + Android) | Native |
|--------------|-------------|---------------------|--------|
| navBack | Back «Tôi» / chevron | `LinmTopBar` | `go('me')` · từ Home = pop home |
| title | Thông báo | TopBar title | fixed |
| rowTitle | Text display | `LinmListRow` title | DTO `title` |
| rowSub | Text display | `LinmListRow` subtitle | `sender · HH:mm` |
| badgeUnread | Badge | `LinmBadge` info | `Mới` khi `isUnread` |
| badgeRead | Badge | `LinmBadge` neutral/gray | `Đã đọc` |
| rowTap | ListRow action | `LinmListRow` onTap | mark-read nếu unread |

## Fields

| Field | VN | controlHint | Required | Source | Notes |
|-------|----|-------------|----------|--------|-------|
| navBack | Tôi | BackButton | * | `go('me')` | parent `me` |
| title | Thông báo | Text | * | demo | DES-MOB-OPS |
| items[].title | (nội dung tiêu đề) | Text | * | GET inbox | demo «Ưu tiên SC-2401» |
| items[].subtitle | sender · time | Text | * | sender + sentAt | |
| items[].badge | Mới / Đã đọc | Badge | * | isUnread | |
| empty | (trống) | EmptyChrome | | 0 items live + no demo | optional |

## § Tab index

`tabs: none` — 1 surface list · shell tab vẫn `me` (entry) · **cấm** invent segment trên ops.

## § Demo dual

| # | iOS `#sc-ops` | Android `#sc-ops` | `#i-*` |
|---|---------------|-------------------|--------|
| 1 | Ưu tiên SC-2401 · Hạt trưởng · 08:12 · Mới | **same** | — (no-icon row) |
| 2 | Ca PAT-…0014 độ phủ 67% · Hệ thống · 07:50 · Đã đọc | **same** (fix GAP-MOB-OPS-DEMO-01) | — |
| Back | chevron-left · Tôi | chevron-left | `#i-chevron-left` |

## Kit map

| Demo chrome | Map | Kit dual |
|-------------|-----|----------|
| `.nav-bar` / `.top-bar` | top bar | `LinmTopBar` |
| `.card-group` / `.row` | list row | `LinmListRow` |
| `.badge blue` / `.badge gray` | badge | `LinmBadge` |
| toast | toast | `LinmToast` |

## Tech factors

| Factor | List `ops` | Note |
|--------|------------|------|
| GPS | no | — |
| camera | no | — |
| offline | list vẫn mở | GET fail → demo rows · **cấm** block Me |
| map | no | — |
| biometric | no | — |
| push | display only | OS local notify = app toast path · **không** OpsHub P2 |
| token | Keychain / Encrypted | Bearer BFF proxy |

## Hành vi (không `alert`)

| Case | UI |
|------|-----|
| Mở từ Me / Home bell | Nav push `#sc-ops` |
| Load OK | Rows từ BFF |
| Load fail | Demo 2 rows · toast info optional |
| Tap unread | mark-read · toast «Đã đọc chỉ đạo» · UI badge Đã đọc |
| Tap already read | no-op / không toast bắt buộc |
| Back | pop → Me hoặc Home |

## UNCLEAR

| ID | Note |
|----|------|
| GAP-F-OPS-MOB-01 | Home bell vs Me entry — cùng slug `ops` (OK) |
| GAP-F-OPS-01 | Command UI — **OUT** P2 |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.19.17 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.20 |
| rulesVersion | 2026.08.19.23 |
| generatedAt | 2026-08-19T11:50:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:ops-mobile-edit-list-20260819 |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.19.17 schemaVersion=1 workflowVersion=2026.08.19.20 rulesVersion=2026.08.19.23 versionGate=rechecked -->
