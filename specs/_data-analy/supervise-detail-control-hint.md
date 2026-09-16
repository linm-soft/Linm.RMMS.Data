# Data-analy — supervise-detail (controlHint · mobile Chi tiết check-in)

| | |
|---|---|
| feature | `supervise-detail` |
| title | [Mobile] [Giám sát] -> Chi tiết check-in |
| role | `data_analy` · `/agent-data-analy-mobile` · mode `feature_context` |
| packKind | **`sheet`** (STATUS / queue · ACTION-TREE) · surface target = full screen `#sc-supervise-detail` |
| changeScope | `new_page` |
| status | **confirmed** |
| taskId | `task_950d67b1` |
| autoApprove | `ON` |
| demo | `specs/mobile-p1/ui/prototype/{ios,android}/index.html` · entry `#sc-supervise` rich-card · **target** `#sc-supervise-detail` · `DES-MOB-SUP-DETAIL` · (hiện demo sai → `#sc-checkin-detail`) |
| ctx | `docs/context/features/supervise-detail.md` · peer `supervise.md` · `attendance.md` · DOMAIN-MAP Patrol |
| generatedAt | `2026-08-31T01:47:46.000Z` |

**Cấm:** watermark Gói · invent `api/v1/supervise-detail` · gộp `#sc-supervise` list/filter/segment · gộp `#sc-checkin-detail` / `#sheet-checkin` (`patrol-checkin`) · ERP.* · mfeStdUrl · system alert · fake toast · POST/PUT/DELETE trên slug này.

## Skill packet (`/agent-data-analy-mobile`) — 4 file

| File | Skill step |
|------|------------|
| **file này** | 4–5 controlHint + tech factors |
| [`supervise-detail-bff-endpoints.md`](supervise-detail-bff-endpoints.md) | 6 BFF · **cấm invent** |
| [`supervise-detail-action-tree.md`](supervise-detail-action-tree.md) | 7 tree + share/reuse |
| [`supervise-detail-real-data.md`](supervise-detail-real-data.md) | 6b real-data bind |

## § Delta Current vs New (`new_page`)

| ID | Current (native) | New (CTX + demo target + GET by id) | Surface |
|----|------------------|-------------------------------------|---------|
| GAP-MOB-SUP-DET-NAV-01 | List card → toast `supervise.toast.detail` · **không** push | Push `#sc-supervise-detail` · back → `#sc-supervise` | supervise · supervise-detail |
| GAP-MOB-SUP-DET-SCR-01 | Không màn chi tiết giám sát | Full `#sc-supervise-detail` · `DES-MOB-SUP-DETAIL` · hero + rows + CTA | screen |
| GAP-MOB-SUP-DET-DEMO-01 | Demo `go('checkin-detail')` → `#sc-checkin-detail` (owner `patrol-checkin`) | Rewire `go('supervise-detail')` · **cấm** reuse CI-DETAIL | demo |
| GAP-MOB-SUP-DET-DATA-01 | — | GET `patrol/attendance-logs/{id}` · fail → demo SSOT · **cấm** ship mock-only | BFF |
| GAP-MOB-SUP-DET-ORG-01 | List `Note` / demo org | Same bind trên detail | row |
| GAP-MOB-SUP-DET-MAP-01 | — | «Xem trên bản đồ» → `gis-map` (nav) · **không** API slug này | CTA |
| GAP-MOB-SUP-DET-PACK-01 | STATUS `sheet` | Demo target full screen — PO/Design chốt label | meta |
| GAP-MOB-SUP-DET-TITLE-01 | — | Title «Chi tiết check-in» dual · Android chrome icon-only back | chrome |

**Không** đổi (OUT): list filter/segment · patrol-checkin sheet/save · attendance CRUD · web Kind B · soft delete UI.

## Tech factors

| Factor | P1 | Notes |
|--------|----|-------|
| GPS | display | Readonly `Lat`/`Lng` · `InZone` · **không** request location trên detail |
| Camera | n/a | thumb list P2 · **không** capture trên detail |
| Offline | yes | GET fail → demo SSOT fallback · toast lỗi · **cấm** fake 200 |
| Map | nav | CTA → `gis-map` · **không** embed map P1 |
| Biometric | n/a | |
| Push | n/a | |
| token | Keychain / Encrypted | Bearer trên GET |

## § Tab index

`tabs: none` trên surface — demo shell Tab **Trang chủ** giữ (`data-tab="home"` parent). **Không** segment trên detail (`GAP-TAB-01`). Entry từ list — không đổi IA Tab 5.

## § Demo dual

| # | iOS target `#sc-supervise-detail` | Android target `#sc-supervise-detail` | `#i-*` |
|---|-----------------------------------|----------------------------------------|--------|
| Back | text «Giám sát» + chevron | icon-only chevron | `#i-chevron-left` |
| Title | Chi tiết check-in | Chi tiết check-in | — · Design parity |
| Hero | Nguyễn Văn A · **≥24 / 28** bold | same · **≥24** bold | — |
| Code | CC-20260810-001 caption+value | **same** | — |
| Tổ | Tổ tuần đường · VP-IV.1 | **same** | `#i-building` optional |
| Tuyến | QL.1 Km 1556+000 · Xuân Hải | **same** | `#i-mappin` optional |
| Thời điểm | 2026-08-10 08:40:12 | **same** | — |
| Trạng thái | Đã ghi điểm tuần | **same** | status ok |
| Tọa độ | 11.5300, 109.0040 | **same** | — |
| Trong vùng | Trong vùng | **same** | InZone |
| CTA | Xem trên bản đồ | **same** | PrimaryButton |
| Entry list | toast → **wire push** | **same** | rich-card |

**Hiện mobile-p1:** card → `#sc-checkin-detail` (title iOS «Ghi điểm tuần» / Android «Điểm tuần đã lưu») — **OUT** slug · GAP-MOB-SUP-DET-DEMO-01.

**Cấm** invent icon. Chrome top-bar text vs icon-btn = Design parity — không đổi field bind.

## controlHint — `#sc-supervise-detail` (`DES-MOB-SUP-DETAIL`)

| Field | VN | controlHint | Size | Kit | Notes |
|-------|----|-------------|------|-----|-------|
| navBack | Giám sát | BackButton | 16 | `LinmTopBar` leading `#i-chevron-left` | `go('supervise')` / pop list |
| title | Chi tiết check-in | TopBar title | 17 | `LinmTopBar` | fixed SSOT |
| userHero | (tên NV) | Text display | **≥24 / 28** bold | | GET `UserName` |
| codeLabel | Mã | Text caption | **13** | | fixed |
| codeValue | CC-* | Text | ≥16 | | GET `Code` |
| rowOrg | Tổ / đơn vị | ListRow | label **13** / value **≥16** | `LinmListRow` | `Note` · demo fallback · GAP ORG |
| rowLoc | Tuyến · lý trình | ListRow | 13 / ≥16 | `LinmListRow` | `Route` · `KmPoint` · địa danh từ Note/demo |
| rowTime | Thời điểm | ListRow | 13 / ≥16 | `LinmListRow` | `CheckInAt` local |
| rowStatus | Trạng thái | ListRow / status strip | 13 / ≥16 | | `Status` mapped VN |
| rowGps | Tọa độ | ListRow | 13 / ≥16 | `LinmListRow` | `Lat`,`Lng` |
| rowInZone | Trong vùng | ListRow | 13 / ≥16 | `LinmListRow` | `InZone` → Trong vùng / Ngoài vùng |
| btnMap | Xem trên bản đồ | PrimaryButton | 16 | `LinmPrimaryButton` | `go('gis-map')` · pass id/coords |
| empty404 | (không tìm thấy) | EmptyChrome | 13–16 | | NotFound · back list |
| toastErr | (lỗi mạng) | Toast | 13–16 | `LinmToast` | GET fail · **cấm** fake ok |

### Entry (parent chrome — không control riêng slug)

| Field | VN | controlHint | Kit | Notes |
|-------|----|-------------|-----|-------|
| cardCheckin | (live UserName · loc · time) | RichCard nav | `LinmRichCheckinCard` | `supervise` · toast → **wire** `go('supervise-detail')` + `Id` |

### Status VN map (demo SSOT)

| API `Status` (raw) | UI |
|--------------------|-----|
| `checked_in` / `ok` / chứa «ghi điểm» / empty+InZone | Đã ghi điểm tuần |
| `out_zone` / `warn` / InZone=false | Ngoài vùng · cần kiểm |
| other | `{Status raw}` |

## UNCLEAR

**none** trên path GET live `attendance-logs/{id}`. Open Q = packKind sheet vs screen · demo rewire · org Note — PO/Design · **không** bịa path.

## Handoff → PO

| Field | Value |
|-------|-------|
| DoD | Card list → push detail · GET by id thật · CTA map nav · demo `#sc-supervise-detail` · **cấm** reuse CI-DETAIL |
| Gaps | NAV-01 · SCR-01 · DEMO-01 · ORG-01 · PACK-01 · TITLE-01 · MAP-01 |
| OUT | invent path · ERP.* · mfeStdUrl · patrol-checkin · CRUD attendance |
| Next | PO `po/requirement.md` · **cấm** start Design/Dev trong task data_analy |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.31.2 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | `2026-08-31T01:47:46.000Z` |
| versionGate | rechecked |
| contentHash | sha256:supervise-detail-control-hint-20260831 |
| ctxContentHash | sha256:supervise-detail-ctx-20260831 |
| demoContentHash | sha256:mobile-p1-sc-supervise-entry-20260831 |
| peerCtxHash | sha256:77d43c4ff7bfa7d6fccd2bfeb4efabbb69c3ad16 |
| taskId | `task_950d67b1` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.31.2 schemaVersion=2 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
