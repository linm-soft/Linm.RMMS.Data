# Data-analy — estimate (controlHint · mobile Giao việc xử lý)

| | |
|---|---|
| feature | `estimate` |
| title | [Mobile] [Công việc] -> Giao việc xử lý |
| role | `data_analy` · `/agent-data-analy-mobile` · mode `feature_context` |
| packKind | **`sheet`** (packet · `_form-type-mobile` · mnt-list tree) · surface = **screen** `#sc-estimate` |
| changeScope | `edit_page` |
| status | **confirmed** |
| taskId | `task_210a31d6` |
| autoApprove | `ON` |
| demo | `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-estimate` · `DES-MOB-EST` · entry mnt-list hub/card · incident-create/detail CTA |
| ctx | `docs/context/features/estimate.md` · `maintenance.md` · `incident.md` · mobile-p1 `mobile/context.md` §estimate |
| generatedAt | `2026-09-01T14:28:40.000Z` |

**Cấm:** watermark Gói · invent `api/v1/estimate` / `api/v1/ai-estimate` · gộp web Kind B list + Kind D slideout multi-line vào slug này · ERP.* · mfeStdUrl · fake toast success khi POST fail · gộp `mnt-chat` / `mnt-progress` / `mnt-log`.

## Skill packet (`/agent-data-analy-mobile`) — 4 file

| File | Skill step |
|------|------------|
| **file này** | 4–5 controlHint + tech factors |
| [`estimate-bff-endpoints.md`](estimate-bff-endpoints.md) | 6 BFF · **cấm invent** |
| [`estimate-action-tree.md`](estimate-action-tree.md) | 7 tree + share/reuse |
| [`estimate-real-data.md`](estimate-real-data.md) | 6b real-data bind |

## § Delta Current vs New (`edit_page`)

Giữ PO/Design/SA/QA/Review **mobile + web** artifacts đã confirmed. Delta **này** `task_210a31d6` (user edit HARD):

| ID | Current (native Review-approved) | New (SSOT demo + user delta) | Surface |
|----|----------------------------------|------------------------------|---------|
| **GAP-MOB-EDIT-01** | `LinmTextField(title)` · title = **placeholder only** · mất khi có value | **Label header** 13pt **phía trên** mọi input (không chỉ placeholder) · dual iOS+Android · lock design/ux/task/implement cùng turn | form fields |
| GAP-MOB-EDIT-01 · assignee | placeholder «Giao cho *» | `<label>Giao cho *</label>` + input | TextField * |
| GAP-MOB-EDIT-01 · qty | placeholder «Khối lượng» | label «Khối lượng» above | NumberField |
| GAP-MOB-EDIT-01 · unitPrice | placeholder «Đơn giá» | label «Đơn giá» above | MoneyField |
| GAP-MOB-EDIT-01 · total (field 0) | placeholder «Thành tiền» | label «Thành tiền» above · readonly | derived |
| GAP-MOB-EDIT-01 · sla (field 24) | placeholder «Thời hạn xử lý (giờ)» | label «Thời hạn xử lý (giờ)» above · readonly | TextField |
| GAP-MOB-EDIT-01 · due | placeholder «Hạn xử lý» | label «Hạn xử lý» above · datetime VN · readonly | datetime |

**Demo SSOT** (mobile-p1 + `specs/estimate/ui/prototype`) **đã** có `.field > label` trên 6 field — **không** đổi copy/zones/API. Native kit hiện `TextField(title)` / Compose title-as-placeholder → **Dev** phải render header ngoài placeholder (kit patch hoặc local `VStack{ Text(label); field }` · Design chốt).

**Giữ closed** (cấm reopen): GAP-MOB-EST-NAV/SCR/HDR/ASSIGN/QTY/PRICE/TOTAL/SLA/CTA/DRAFT/DATA/PACK/SIMP/ASSIGNEE/WO · R-QA-* · Review APPROVE prior.

**Không** đổi: BFF paths · action tree · packKind `sheet` · WorkType=`repair` · tabs none · web Kind B+D artifacts.

## Tech factors

| Factor | P1 | Notes |
|--------|----|-------|
| GPS | n/a | Không pin trên `#sc-estimate` |
| Camera | n/a | |
| Offline | **optional** | Lưu nháp online P1 · offline queue **DEFER** |
| Map | n/a | |
| Biometric | n/a | |
| Push | n/a | |

## § Tab index

`tabs: none` — màn full · demo `data-tab="work"` · **không** segment trên surface (`GAP-TAB-01`). Shell Tab 5 **giữ**.

## § Demo dual

Cùng copy VN · title «Giao việc xử lý» · SC-2401 · Ổ gà · QL.1 Km 1556+040 · Mặt đường · assignee «Nguyễn Văn A · Tổ tuần đường» · qty `12.5` · đơn giá `850.000` · thành tiền `10.625.000` · SLA `24` · hạn `19/08/2026 08:00` · CTA «Giao việc» / «Lưu nháp». **HARD:** mỗi field có `<label>` visible phía trên input (iOS + Android prototype).

## controlHint — `#sc-estimate`

| Field | VN | controlHint | Size | Kit | Notes |
|-------|----|-------------|------|-----|-------|
| screenTitle | Giao việc xử lý | TopBar title | 17 | `LinmTopBar` | `DES-MOB-EST` |
| navBack | Công việc | BackButton | 16 | chevron / icon-btn | `go('mnt-list')` |
| fromIncident | Từ sự cố | ListRow readonly | 13 / ≥16 | `LinmListRow` | subtitle = label · OK |
| assetType | Loại tài sản | ListRow readonly | 13 / ≥16 | | subtitle = label · OK |
| assignee | Giao cho * | TextField + **labelHeader** | **13** / ≥16 | `LinmTextField`+header | **GAP-MOB-EDIT-01** · required |
| qty | Khối lượng | NumberField + **labelHeader** | 13 / ≥16 | +header | **GAP-MOB-EDIT-01** |
| unitPrice | Đơn giá | MoneyField + **labelHeader** | 13 / ≥16 | +header | **GAP-MOB-EDIT-01** |
| totalAmount | Thành tiền | TextField readonly + **labelHeader** | 13 / ≥16 | +header | **GAP-MOB-EDIT-01** · derived |
| slaHours | Thời hạn xử lý (giờ) | TextField readonly + **labelHeader** | 13 / ≥16 | +header | **GAP-MOB-EDIT-01** · default 24 |
| dueAt | Hạn xử lý | TextField readonly + **labelHeader** | 13 / ≥16 | +header | **GAP-MOB-EDIT-01** · datetime VN |
| btnAssign | Giao việc | PrimaryButton | 17 | `LinmPrimaryButton` | submit |
| btnDraft | Lưu nháp | SecondaryButton | 17 | `LinmSecondaryButton` | draft |

**labelHeader (HARD):** `Text`/`label` 13pt muted **above** control · luôn visible khi có value · **cấm** chỉ dựa placeholder/floating mất sau focus.

## Typography (HARD)

Label header **13** · field value **≥16** · tab shell **13** — `typography-web-mobile.md`.

## Kit map (iOS + Android)

| Control | Kit |
|---------|-----|
| TopBar / Back | `LinmTopBar` |
| Card rows | `LinmListRow` / card-group |
| Text / Number / Money + header | `LinmTextField` **+** external label **hoặc** kit API `labelAbove` (Design/Dev) |
| Primary / Secondary | Linm buttons |
| Toast | session toast |

## Gaps (handoff PO → Design/SA)

| ID | Note | Default |
|----|------|---------|
| **GAP-MOB-EDIT-01** | Label header trên mọi form field `#sc-estimate` | **must** · dual · lock design/ux/task/implement |
| GAP-MOB-EST-ASSIGNEE-01 | Không staff lookup API P1 | free text → `AssigneeName` · **giữ** |
| GAP-MOB-EST-SLA-01 | Không SLA policy API | local 24h + DueAt · **giữ** |
| GAP-F-EST-01 | Auto WO event | **DEFER** web P2 |

## Sources / hash

| Source | Path | sha256 |
|--------|------|--------|
| CTX | `docs/context/features/estimate.md` | `sha256:b67ee5a9cc9b69577496bf04aef9446d483410141ca6c27b98f792841ddb5ece` |
| Demo iOS | `specs/mobile-p1/ui/prototype/ios/index.html` `#sc-estimate` | `sha256:394ab44597648f04b25e6d58476378c16141feb53d3b58d39923b3defcff8328` |
| Demo Android | `specs/mobile-p1/ui/prototype/android/index.html` `#sc-estimate` | `sha256:cbb3af57cc4c8feebf8d80472f926933345acb478c280e55e83214ec125fdb91` |
| Scan | `_form-type-mobile/ACTION-TREE.md` · `estimate` sheet | confirmed prior · **giữ** |
| Web analy (giữ) | `_data-analy/features/estimate-control-hint.md` | web Kind B+D — **không** overwrite |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.29.1 |
| rulesVersion | 2026.08.29.5 |
| generatedAt | 2026-09-01T14:28:40.000Z |
| versionGate | rechecked |
| contentHash | sha256:estimate-mobile-control-hint-20260901-edit01 |
| ctxContentHash | sha256:b67ee5a9cc9b69577496bf04aef9446d483410141ca6c27b98f792841ddb5ece |
| demoContentHash | sha256:394ab44597648f04b25e6d58476378c16141feb53d3b58d39923b3defcff8328 |
| taskId | `task_210a31d6` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.29.1 rulesVersion=2026.08.29.5 versionGate=rechecked taskId=task_210a31d6 -->
