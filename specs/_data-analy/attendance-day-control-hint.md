# Data-analy — attendance-day (controlHint · mobile Chi tiết ngày công)

| | |
|---|---|
| feature | `attendance-day` |
| title | [Mobile] [Chấm công] -> Chi tiết ngày công |
| role | `data_analy` · `/agent-data-analy-mobile` · mode `feature_context` |
| packKind | **`sheet`** (STATUS / queue · ACTION-TREE) · surface target = full screen `#sc-attendance-day` |
| changeScope | `new_page` |
| status | **confirmed** |
| taskId | `task_3fdb1cea` |
| autoApprove | `ON` |
| demo | `specs/mobile-p1/ui/prototype/{ios,android}/index.html` · entry `#sc-attendance` day rows · **target** `#sc-attendance-day` · `DES-MOB-ATT-DAY` |
| ctx | `docs/context/features/attendance-day.md` · peer `attendance.md` · DOMAIN-MAP Patrol |
| generatedAt | `2026-08-31T02:55:00.000Z` |

**Cấm:** watermark Gói · invent `api/v1/attendance-day` · gộp `#sc-attendance` hero/segment/POST · gộp `#sc-supervise-detail` GetById · gộp `attendance-report` · ERP.* · mfeStdUrl · system alert · fake toast · POST/PUT/DELETE trên slug này.

## Skill packet (`/agent-data-analy-mobile`) — 4 file

| File | Skill step |
|------|------------|
| **file này** | 4–5 controlHint + tech factors |
| [`attendance-day-bff-endpoints.md`](attendance-day-bff-endpoints.md) | 6 BFF · **cấm invent** |
| [`attendance-day-action-tree.md`](attendance-day-action-tree.md) | 7 tree + share/reuse |
| [`attendance-day-real-data.md`](attendance-day-real-data.md) | 6b real-data bind |

## § Delta Current vs New (`new_page`)

| ID | Current (native) | New (CTX + demo target + GET list filter) | Surface |
|----|------------------|-------------------------------------------|---------|
| GAP-MOB-ATT-DAY-NAV-01 | Day row → toast `attendance.toast.dayDetail` · **không** push | Push `#sc-attendance-day` · back → `#sc-attendance` | attendance · attendance-day |
| GAP-MOB-ATT-DAY-SCR-01 | Không màn chi tiết ngày | Full `#sc-attendance-day` · `DES-MOB-ATT-DAY` · header + summary + log rows | screen |
| GAP-MOB-ATT-DAY-DEMO-01 | Demo rows không `onclick` | Rewire `go('attendance-day')` + `dayKey` | demo |
| GAP-MOB-ATT-DAY-DATA-01 | — | GET `patrol/attendance-logs` · filter `dayKey` · fail → demo SSOT · **cấm** ship mock-only | BFF |
| GAP-MOB-ATT-DAY-PACK-01 | STATUS `sheet` | Demo target full screen — PO/Design chốt label | meta |
| GAP-MOB-ATT-DAY-TITLE-01 | — | Title «Chi tiết ngày công» dual · Android chrome icon-only back | chrome |

**Không** đổi (OUT): hub hero Chấm vào POST · segment · báo cáo toast · supervise GetById · web Kind E report grid.

## Tech factors

| Factor | P1 | Notes |
|--------|----|-------|
| GPS | display | Readonly trên log rows (`Lat`/`Lng`) · **không** request location trên detail |
| Camera | n/a | |
| Offline | yes | GET fail → demo SSOT fallback · toast lỗi · **cấm** fake 200 |
| Map | n/a | **không** embed map P1 · **không** CTA map (khác supervise-detail) |
| Biometric | n/a | |
| token | Keychain / Encrypted | Bearer trên GET |

## § Tab index

`tabs: none` trên surface — shell Tab **Tuần đường** giữ parent. **Không** segment trên detail (`GAP-TAB-01`). Entry từ hub list — không đổi IA Tab 5.

## § Demo dual

| # | iOS target `#sc-attendance-day` | Android target `#sc-attendance-day` | `#i-*` |
|---|--------------------------------|-------------------------------------|--------|
| Back | text «Chấm công» + chevron | icon-only chevron | `#i-chevron-left` |
| Title | Chi tiết ngày công | Chi tiết ngày công | — · Design parity |
| dayHero | T7 09/08 · badge **Đủ công** | same | — |
| rowRange | 07:05 – 16:40 | **same** | — |
| rowRoute | QL.1 · Ca sáng | **same** | — |
| rowCount | 2 lần chấm | **same** | — |
| sectionLogs | Các lần chấm | **same** | `LinmSectionLabel` |
| logRow1 | 07:05 · QL.1 · Đúng tuyến · Trong vùng | **same** | `LinmListRow` |
| logRow2 | 16:40 · QL.1 · Đúng tuyến · Trong vùng | **same** | same |
| emptyDay | CN 10/08 · Nghỉ · empty copy | **same** | `LinmEmptyChrome` |
| Entry | toast → **wire push** | **same** | `#sc-attendance` row |

**Hiện mobile-p1:** day rows không wire — native toast only · GAP-MOB-ATT-DAY-DEMO-01.

## controlHint — `#sc-attendance-day` (`DES-MOB-ATT-DAY`)

| Field | VN | controlHint | Size | Kit | Notes |
|-------|----|-------------|------|-----|-------|
| navBack | Chấm công | BackButton | 16 | `LinmTopBar` leading `#i-chevron-left` | `go('attendance')` / pop hub |
| title | Chi tiết ngày công | TopBar title | 17 | `LinmTopBar` | fixed SSOT |
| dayHero | (T7 09/08) | Text display | **≥24 / 28** bold | | nav `dayTitle` |
| dayBadge | Đủ công / Nghỉ / Đã chấm | Badge | 13 | `LinmBadge` | derived aggregate |
| rowRange | Khoảng giờ | ListRow | label **13** / value **≥16** | `LinmListRow` | first–last `CheckInAt` day |
| rowRoute | Tuyến · ca | ListRow | 13 / ≥16 | `LinmListRow` | `Route` · shift demo |
| rowCount | Số lần chấm | ListRow | 13 / ≥16 | `LinmListRow` | count logs day |
| sectionLogs | Các lần chấm | SectionLabel | 13 | `LinmSectionLabel` | hidden khi empty |
| logTime | (HH:mm) | ListRow title | ≥16 | `LinmListRow` | `CheckInAt` local |
| logSub | QL.1 · Đúng tuyến · Trong vùng | ListRow subtitle | 13 | same | Route · Status · InZone |
| logBadge | Trong vùng / Ngoài vùng | Badge optional | 13 | `LinmBadge` | `InZone` |
| emptyDay | Không có lần chấm trong ngày | EmptyChrome | 13–16 | `LinmEmptyChrome` | badge Nghỉ |
| toastErr | (lỗi mạng) | Toast | 13–16 | `LinmToast` | GET fail · **cấm** fake ok |
| toastLogTap | Chi tiết lần chấm | Toast | 13–16 | `LinmToast` | tap log row P1 · **cấm** push supervise-detail |

### Entry (parent — không control riêng slug)

| Field | VN | controlHint | Kit | Notes |
|-------|----|-------------|-----|-------|
| dayRow | CN/T7… · time · badge | ListRow nav | `LinmListRow` | `attendance` · toast → **wire** push + `dayKey` |

### Badge map (demo SSOT · khớp hub aggregate)

| Condition | badge |
|-----------|-------|
| 0 logs day | Nghỉ · idle |
| 1 log | Đã chấm · ok |
| ≥2 logs | Đủ công · ok |
| any `InZone=false` | Lệch zone · warn (optional P1) |

## UNCLEAR

**none** trên path GET live `patrol/attendance-logs` + client filter. Open Q = packKind sheet vs screen label · demo rewire — PO/Design · **không** bịa path BE.

## Handoff → PO

| Field | Value |
|-------|-------|
| DoD | Row hub → push detail · GET list filter `dayKey` · summary + log rows · demo `#sc-attendance-day` · **cấm** gộp report/supervise-detail |
| Gaps | NAV-01 · SCR-01 · DEMO-01 · DATA-01 · PACK-01 · TITLE-01 |
| OUT | invent path · ERP.* · mfeStdUrl · GetById primary · POST check-in |
| Next | PO `po/requirement.md` · **cấm** start Design/Dev trong task data_analy |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.31.2 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | `2026-08-31T02:55:00.000Z` |
| versionGate | rechecked |
| contentHash | sha256:attendance-day-control-hint-20260831 |
| ctxContentHash | sha256:attendance-day-ctx-20260831 |
| demoContentHash | sha256:mobile-p1-sc-attendance-entry-20260831 |
| peerCtxHash | sha256:attendance-mobile-hub-20260819 |
| taskId | `task_3fdb1cea` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.31.2 schemaVersion=2 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
