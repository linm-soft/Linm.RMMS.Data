# Data-analy — patrol-history-detail (controlHint · mobile Chi tiết ca)

| | |
|---|---|
| feature | `patrol-history-detail` |
| title | [Mobile] [Lịch sử phiên] -> Chi tiết ca |
| role | `data_analy` · `/agent-data-analy-mobile` · mode `feature_context` |
| packKind | **`sheet`** (STATUS / queue · ACTION-TREE) · surface target = full screen `#sc-patrol-detail` |
| changeScope | `new_page` |
| status | **confirmed** |
| taskId | `task_b2fb1a98` |
| autoApprove | `ON` |
| demo | `specs/mobile-p1/ui/prototype/{ios,android}/index.html` · entry `#sc-patrol-history` row · **target** `#sc-patrol-detail` · `DES-MOB-PAT-DETAIL` |
| ctx | `docs/context/features/patrol-history-detail.md` · peer `patrol-history.md` · `patrol.md` · DOMAIN-MAP Patrol |
| generatedAt | `2026-08-31T03:25:00.000Z` |

**Cấm:** watermark Gói · invent `api/v1/patrol-history-detail` · gộp `#sc-patrol-history` list/filter · gộp `#sc-checkin-detail` save/sheet (`patrol-checkin`) · ERP.* · mfeStdUrl · system alert · fake toast · PUT/DELETE session P1.

## Skill packet (`/agent-data-analy-mobile`) — 4 file

| File | Skill step |
|------|------------|
| **file này** | 4–5 controlHint + tech factors |
| [`patrol-history-detail-bff-endpoints.md`](patrol-history-detail-bff-endpoints.md) | 6 BFF · **cấm invent** |
| [`patrol-history-detail-action-tree.md`](patrol-history-detail-action-tree.md) | 7 tree + share/reuse |
| [`patrol-history-detail-real-data.md`](patrol-history-detail-real-data.md) | 6b real-data bind |

## § Delta Current vs New (`new_page`)

| ID | Current (native) | New (CTX + demo target + GET by id) | Surface |
|----|------------------|-------------------------------------|---------|
| GAP-MOB-PAT-HIST-DET-NAV-01 | List row → toast `patrol.toast.detail` · **không** push | Push `#sc-patrol-detail` · back → `#sc-patrol-history` | patrol-history · patrol-history-detail |
| GAP-MOB-PAT-HIST-DET-SCR-01 | Không màn chi tiết ca | Full `#sc-patrol-detail` · `DES-MOB-PAT-DETAIL` · hero + info rows + timeline + CTA | screen |
| GAP-MOB-PAT-HIST-DET-DEMO-01 | Demo/native row toast only | Rewire `go('patrol-detail')` + pass `Id` | demo |
| GAP-MOB-PAT-HIST-DET-DATA-01 | — | GET `patrol/sessions/{id}` · fail → demo SSOT · **cấm** ship mock-only | BFF |
| GAP-MOB-PAT-HIST-DET-TIMELINE-01 | — | Timeline demo SSOT P1 · **không** GET check-ins list | timeline |
| GAP-MOB-PAT-HIST-DET-MAP-01 | — | «Mở bản đồ ca» → `patrol-map` (nav) · **không** API slug này | CTA |
| GAP-MOB-PAT-HIST-DET-END-01 | — | «Kết thúc ca» → toast P1 · **cấm** PUT P1 | CTA |
| GAP-MOB-PAT-HIST-DET-PACK-01 | STATUS `sheet` | Demo target full screen — PO/Design chốt label | meta |
| GAP-MOB-PAT-HIST-DET-TITLE-01 | — | Title «Chi tiết ca» dual · iOS back text «Lịch sử» · Android icon-only | chrome |

**Không** đổi (OUT): list search/filter · patrol-checkin sheet/save · POST check-ins · session PUT/DELETE · web Kind B grid.

## Tech factors

| Factor | P1 | Notes |
|--------|----|-------|
| GPS | display | Readonly trên timeline subtitle · **không** request location trên detail |
| Camera | n/a | thumb timeline P2 · **không** capture trên detail |
| Offline | yes | GET fail → demo SSOT fallback · toast lỗi · **cấm** fake 200 |
| Map | nav | CTA → `patrol-map` · pass session id · **không** embed map P1 |
| Biometric | n/a | |
| Push | n/a | |
| token | Keychain / Encrypted | Bearer trên GET |

## § Tab index

`tabs: none` trên surface — demo shell Tab **Tuần đường** giữ (`data-tab="field"` parent). **Không** segment trên detail (`GAP-TAB-01`). Entry từ list — không đổi IA Tab 5.

## § Demo dual

| # | iOS target `#sc-patrol-detail` | Android target `#sc-patrol-detail` | `#i-*` |
|---|--------------------------------|-------------------------------------|--------|
| Back | text «Lịch sử» + chevron | icon-only chevron | `#i-chevron-left` |
| Title | Chi tiết ca | Chi tiết ca | — · Design parity |
| Trailing | ellipsis Chia sẻ | ellipsis Chia sẻ | `#i-ellipsis` |
| codeLabel | Mã phiên | Mã phiên | — |
| codeHero | PAT-20260810-0014 · **≥26 / 28** bold | same · **≥26** bold | — |
| badgeStatus | Đang tuần | **same** | status info |
| sectionInfo | Thông tin | **same** | `LinmSectionLabel` |
| rowUser | Nhân viên · Nguyễn Văn A | **same** | `LinmListRow` |
| rowRoute | Tuyến · QL.1 · Km 1551+200–1561+134 | **same** | |
| rowType | Loại tuần · Tuần đường | **same** | |
| rowPlanDate | Ngày KH · 10/08/2026 | **same** | |
| rowStarted | Bắt đầu · 07:20 (UTC+7) | **same** | |
| rowCoverage | Độ phủ · 67% | **same** | |
| sectionTimeline | Điểm tuần | **same** | |
| tlDone1 | Km 1551+200 · Xuân Hải · 07:28 · định vị đạt · Ảnh ×1 | **same** | tap → `checkin-detail` |
| tlDone2 | Km 1556+000 · Cống ngang · 08:05 | **same** | |
| tlPending | Km 1561+134 · Phước Dinh · Đang tới · ~180 m | **same** | |
| btnMap | Mở bản đồ ca | **same** | PrimaryButton |
| btnEnd | Kết thúc ca | **same** | SecondaryButton · toast |
| Entry list | toast → **wire push** | **same** | `#sc-patrol-history` row |

**Hiện mobile-p1 + native:** row → toast only · GAP-MOB-PAT-HIST-DET-DEMO-01.

**Cấm** invent icon. Chrome top-bar text vs icon-btn = Design parity — không đổi field bind.

## controlHint — `#sc-patrol-detail` (`DES-MOB-PAT-DETAIL`)

| Field | VN | controlHint | Size | Kit | Notes |
|-------|----|-------------|------|-----|-------|
| navBack | Lịch sử | BackButton | 16 | `LinmTopBar` leading `#i-chevron-left` | `go('patrol-history')` / pop list |
| title | Chi tiết ca | TopBar title | 17 | `LinmTopBar` | fixed SSOT |
| navShare | (Chia sẻ) | IconButton | 16 | `LinmTopBar` trailing `#i-ellipsis` | toast P1 · **cấm** share sheet P1 |
| codeLabel | Mã phiên | Text caption | **13** | | fixed |
| codeHero | PAT-* | Text display | **≥26 / 28** bold | | GET `Code` |
| badgeStatus | (trạng thái) | Badge | 13 | `LinmBadge` | GET `Status` mapped VN |
| sectionInfo | Thông tin | SectionLabel | 13 | `LinmSectionLabel` | fixed |
| rowUser | Nhân viên | ListRow | label **13** / value **≥16** | `LinmListRow` | GET `UserName` |
| rowRoute | Tuyến | ListRow | 13 / ≥16 | `LinmListRow` | GET `Route` · demo Km append offline |
| rowType | Loại tuần | ListRow | 13 / ≥16 | `LinmListRow` | GET `PatrolType` |
| rowPlanDate | Ngày KH | ListRow | 13 / ≥16 | `LinmListRow` | GET `PlannedDate` dd/MM/yyyy |
| rowStarted | Bắt đầu | ListRow | 13 / ≥16 | `LinmListRow` | GET `StartedAt` HH:mm local + TZ label |
| rowCoverage | Độ phủ | ListRow | 13 / ≥16 | `LinmListRow` | GET `CoveragePercent` + `%` |
| sectionTimeline | Điểm tuần | SectionLabel | 13 | `LinmSectionLabel` | fixed |
| tlItem | (km · địa danh) | TimelineRow | title **≥16** / sub **13** | `LinmTimelineRow` | demo SSOT P1 · GAP timeline API |
| tlTapDone | Xem | TimelineRow tap | — | nav | `go('checkin-detail')` · owner `patrol-checkin` |
| btnMap | Mở bản đồ ca | PrimaryButton | 16 | `LinmPrimaryButton` | `go('patrol-map')` · pass session id |
| btnEnd | Kết thúc ca | SecondaryButton | 16 | `LinmSecondaryButton` | toast P1 · **cấm** PUT P1 |
| empty404 | (không tìm thấy) | EmptyChrome | 13–16 | | NotFound · back list |
| toastErr | (lỗi mạng) | Toast | 13–16 | `LinmToast` | GET fail · **cấm** fake ok |
| toastShare | Chia sẻ | Toast | 13–16 | `LinmToast` | trailing P1 |
| toastEnd | Kết thúc ca — xác nhận sau | Toast | 13–16 | `LinmToast` | secondary P1 |

### Entry (parent chrome — không control riêng slug)

| Field | VN | controlHint | Kit | Notes |
|-------|----|-------------|-----|-------|
| historyRow | (code · sub · badge) | ListRow nav | `LinmListRow` | `patrol-history` · toast → **wire** push + `Id` |

### Status VN map (demo SSOT · khớp list)

| API `Status` (raw) | UI badge |
|--------------------|----------|
| `active` / `in_progress` / «Đang tuần» / empty+isActive | Đang tuần |
| `done` / `completed` / «Hoàn thành» / «Xong» | Hoàn thành |
| `missed` / «Bỏ sót» / thiếu điểm | Bỏ sót |
| `offline` / `sync_pending` / OfflineQueued=true | Mất sóng |
| other | `{Status raw}` |

## UNCLEAR

**none** trên path GET live `patrol/sessions/{id}`. Open Q = packKind sheet vs screen · timeline GET check-ins P2 · PO/Design · **không** bịa path.

## Handoff → PO

| Field | Value |
|-------|-------|
| DoD | Row list → push detail · GET by id thật · timeline demo SSOT P1 · CTA map nav · demo `#sc-patrol-detail` · **cấm** gộp CI-DETAIL save |
| Gaps | NAV-01 · SCR-01 · DEMO-01 · DATA-01 · TIMELINE-01 · MAP-01 · END-01 · PACK-01 · TITLE-01 |
| OUT | invent path · ERP.* · mfeStdUrl · POST check-ins · PUT end session P1 |
| Next | PO `po/requirement.md` · **cấm** start Design/Dev trong task data_analy |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.31.2 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | `2026-08-31T03:25:00.000Z` |
| versionGate | rechecked |
| contentHash | sha256:patrol-history-detail-control-hint-20260831 |
| ctxContentHash | sha256:patrol-history-detail-ctx-20260831 |
| demoContentHash | sha256:mobile-p1-sc-patrol-detail-20260831 |
| peerCtxHash | sha256:patrol-history-control-hint-20260820 |
| taskId | `task_b2fb1a98` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.31.2 schemaVersion=2 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
