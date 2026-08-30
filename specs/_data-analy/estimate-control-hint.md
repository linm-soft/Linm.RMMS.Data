# Data-analy — estimate (controlHint · mobile Giao việc xử lý)

| | |
|---|---|
| feature | `estimate` |
| title | [Mobile] [Công việc] -> Giao việc xử lý |
| role | `data_analy` · `/agent-data-analy-mobile` · mode `feature_context` |
| packKind | **`sheet`** (packet · `_form-type-mobile` · mnt-list tree) · surface = **screen** `#sc-estimate` |
| changeScope | `edit_page` |
| status | **confirmed** |
| taskId | `task_b0b56370` |
| autoApprove | `ON` |
| demo | `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-estimate` · `DES-MOB-EST` · entry mnt-list hub/card · incident-create/detail CTA |
| ctx | `docs/context/features/estimate.md` · `maintenance.md` · `incident.md` · mobile-p1 `mobile/context.md` §estimate |
| generatedAt | `2026-08-29T04:20:00.000Z` |

**Cấm:** watermark Gói · invent `api/v1/estimate` / `api/v1/ai-estimate` · gộp web Kind B list + Kind D slideout multi-line vào slug này · ERP.* · mfeStdUrl · fake toast success khi POST fail · gộp `mnt-chat` / `mnt-progress` / `mnt-log`.

## Skill packet (`/agent-data-analy-mobile`) — 4 file

| File | Skill step |
|------|------------|
| **file này** | 4–5 controlHint + tech factors |
| [`estimate-bff-endpoints.md`](estimate-bff-endpoints.md) | 6 BFF · **cấm invent** |
| [`estimate-action-tree.md`](estimate-action-tree.md) | 7 tree + share/reuse |
| [`estimate-real-data.md`](estimate-real-data.md) | 6b real-data bind |

## § Delta Current vs New (`edit_page`)

Giữ PO/Design/SA/QA/Review **web** artifacts đã confirmed (`specs/estimate/*` · `_data-analy/features/estimate-control-hint.md`). Delta **mobile** `task_b0b56370`:

| ID | Current (native 2026-08-29) | New (SSOT mobile demo + CTX) | Surface |
|----|-----------------------------|------------------------------|---------|
| GAP-MOB-EST-NAV-01 | mnt-list hub/card · incident CTA → **toast only** (iOS/Android) | Nav push `#sc-estimate` «Giao việc xử lý» · back → `mnt-list` | mnt-list · estimate |
| GAP-MOB-EST-SCR-01 | Không màn Giao việc | Full `#sc-estimate` · `DES-MOB-EST` · header SC + fields + CTA | screen |
| GAP-MOB-EST-HDR-01 | — | Card «Từ sự cố» + «Loại tài sản» readonly | card rows |
| GAP-MOB-EST-ASSIGN-01 | — | Field «Giao cho *» Text | text * |
| GAP-MOB-EST-QTY-01 | — | «Khối lượng» · decimal | number |
| GAP-MOB-EST-PRICE-01 | — | «Đơn giá» · decimal | money |
| GAP-MOB-EST-TOTAL-01 | — | «Thành tiền» readonly = qty × unitPrice | derived |
| GAP-MOB-EST-SLA-01 | — | «Thời hạn xử lý (giờ)» + «Hạn xử lý» readonly | derived SLA |
| GAP-MOB-EST-CTA-01 | — | Primary «Giao việc» → POST WO (+ assign) · toast CV-* | CTA |
| GAP-MOB-EST-DRAFT-01 | — | Secondary «Lưu nháp» → draft estimate | CTA |
| GAP-MOB-EST-DATA-01 | — | Mobile.Bff `ai-vision/estimates` · `maintenance/work-orders` · `incident/…/assign` | BFF |
| GAP-MOB-EST-PACK-01 | Web STATUS `packKind=list` · Kind B+D | Mobile packKind=`sheet` (form giao việc) — Design/PO chốt | meta |
| GAP-MOB-EST-SIMP-01 | Web multi-line Kind D grid | Mobile **1** qty/price row (demo) — SA/PO chốt map line[0] | meta |

**Không** đổi (OUT pack mobile P1): web list Kind B · slideout multi-line toolbar · Excel · Config schema editor · auto WO event `estimate.created` (web DEFER — mobile dùng **explicit** POST WO).

**Reuse web:** domain AiVision estimates + Maintenance work-orders + Incident assign · paths live · **cấm** ERP.*.

## Tech factors

| Factor | P1 | Notes |
|--------|----|-------|
| GPS | n/a | Không pin trên `#sc-estimate` |
| Camera | n/a | |
| Offline | **optional** | Lưu nháp online P1 · offline queue **DEFER** (không invent path) |
| Map | n/a | |
| Biometric | n/a | |
| Push | n/a | |

## § Tab index

`tabs: none` — màn full · demo `data-tab="work"` · **không** segment trên surface (`GAP-TAB-01`). Shell Tab 5 **giữ** (Công việc). Entry từ `mnt-list` / incident CTA (không đổi IA tab).

## § Demo dual

Cùng copy VN · cùng title «Giao việc xử lý» · cùng SC-2401 · Ổ gà · QL.1 Km 1556+040 · Mặt đường · assignee «Nguyễn Văn A · Tổ tuần đường» · qty `12.5` · đơn giá `850.000` · thành tiền `10.625.000` · SLA `24` · hạn `19/08/2026 08:00` · CTA «Giao việc» / «Lưu nháp» · toast giao việc CV-* · toast nháp. **Cấm** invent icon. Android top-bar icon-btn vs iOS nav-btn text «Công việc» — Design parity chrome (không đổi field).

## controlHint — `#sc-estimate`

| Field | VN | controlHint | Size | Kit | Notes |
|-------|----|-------------|------|-----|-------|
| screenTitle | Giao việc xử lý | TopBar title | 17 | `LinmTopBar` | `DES-MOB-EST` |
| navBack | Công việc | BackButton | 16 | chevron / icon-btn | `go('mnt-list')` · Android icon-only OK |
| fromIncident | Từ sự cố | ListRow readonly | 13 / ≥16 | `LinmListRow` | code · defect · route/Km |
| assetType | Loại tài sản | ListRow readonly | 13 / ≥16 | | e.g. Mặt đường |
| assignee | Giao cho * | TextField | **13** / ≥16 | `LinmTextField` | required · free text P1 |
| qty | Khối lượng | NumberField | 13 / ≥16 | decimal `inputmode` | editable |
| unitPrice | Đơn giá | MoneyField | 13 / ≥16 | decimal | editable · VND display |
| totalAmount | Thành tiền | TextField readonly | 13 / ≥16 | derived | qty × unitPrice |
| slaHours | Thời hạn xử lý (giờ) | TextField readonly | 13 / ≥16 | | default **24** P1 |
| dueAt | Hạn xử lý | TextField readonly | 13 / ≥16 | datetime VN | now + slaHours |
| btnAssign | Giao việc | PrimaryButton | 17 | `LinmPrimaryButton` | submit flow |
| btnDraft | Lưu nháp | SecondaryButton | 17 | `LinmSecondaryButton` | draft estimate |

## Typography (HARD)

Label **13** · field value **≥16** · tab shell **13** — `typography-web-mobile.md`.

## Kit map (iOS + Android)

| Control | Kit |
|---------|-----|
| TopBar / Back | `LinmTopBar` |
| Card rows | `LinmListRow` / card-group |
| Text / Number / Money | `LinmTextField` |
| Primary / Secondary | Linm buttons |
| Toast | session toast |

## Gaps (handoff PO → Design/SA)

| ID | Note | Default |
|----|------|---------|
| GAP-MOB-EST-NAV-01 | Toast → real screen | **must** |
| GAP-MOB-EST-SIMP-01 | 1 line mobile vs web grid | map line[0] / single synthetic line |
| GAP-MOB-EST-ASSIGNEE-01 | Không staff lookup API P1 | free text → `AssigneeName` |
| GAP-MOB-EST-WO-01 | Web DEFER auto WO · mobile demo tạo CV | explicit `POST maintenance/work-orders` |
| GAP-MOB-EST-SLA-01 | Không SLA policy API | local default 24h + DueAt |
| GAP-MOB-EST-PACK-01 | list web vs sheet mobile | PO/Design chốt sheet |
| GAP-F-EST-01 | Auto WO event | **DEFER** web P2 — không block mobile CTA |

## Sources / hash

| Source | Path | sha256 |
|--------|------|--------|
| CTX | `docs/context/features/estimate.md` | `sha256:58cb5c3279c3df7360e1f3f29adccc79fada11ce219853dfce035217e25b7f3d` |
| Demo iOS | `specs/mobile-p1/ui/prototype/ios/index.html` `#sc-estimate` | `sha256:394ab44597648f04b25e6d58476378c16141feb53d3b58d39923b3defcff8328` |
| Demo Android | `specs/mobile-p1/ui/prototype/android/index.html` `#sc-estimate` | `sha256:cbb3af57cc4c8feebf8d80472f926933345acb478c280e55e83214ec125fdb91` |
| Scan | `_form-type-mobile/ACTION-TREE.md` · `estimate` sheet | pending_confirm → **this turn** |
| Web analy (giữ) | `_data-analy/features/estimate-control-hint.md` | web Kind B+D — **không** overwrite |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-08-29T04:20:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:estimate-mobile-control-hint-20260829 |
| ctxContentHash | sha256:58cb5c3279c3df7360e1f3f29adccc79fada11ce219853dfce035217e25b7f3d |
| demoContentHash | sha256:394ab44597648f04b25e6d58476378c16141feb53d3b58d39923b3defcff8328 |
| taskId | `task_b0b56370` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
