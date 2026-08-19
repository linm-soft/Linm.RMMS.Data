# Design — patrol-offline (mobile list)

| Field | Value |
|-------|-------|
| feature | `patrol-offline` |
| title | [Design] [Mobile] Hàng đợi mất sóng |
| this role | `design` · `/agent-design-mobile` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_bb1e90a6`) |
| changeScope | `new_page` |
| packKind | **`list`** (PO confirm) |
| stack | `native_dual` |
| kit_missing_confirm | **implement_kit** · `LinmTopBar` **text** leading «Trang Chủ» + trailing «Đồng bộ» dual · rich card thumb 56 + status strip verify → reuse `LinmListRow` pattern nếu đủ |
| reviewUrlIos | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-offline/ui/prototype/ios/index.html#sc-patrol-offline` |
| reviewUrlAndroid | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-offline/ui/prototype/android/index.html#sc-patrol-offline` |
| ux-analy | `ui/ux-analy.md` §1–§9 |
| prior | PO `confirmed` · `po/requirement.md` · data-analy contentHash `sha256:2f2cf6976914278da294ed00a6d1eeecb50364201812335d6852c0f4e46ccaad` · bffContentHash `sha256:10d525fc95cdd32c9e4ede818499041f44341c7481d1d44e0fde6bec5738f403` |
| autoApprove | **ON** |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** `yarn start:std` / `mfeStdUrl` |
| updatedAt | `2026-08-19T14:30:00.000Z` |
| taskId | `task_bb1e90a6` |

## 0. Context & Demo

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/patrol-offline.md` | list · local queue · POST batch |
| CTX-02 | `docs/context/features/integration.md` | `POST /api/v1/integration/sync/offline-batch` |
| DEM-P1 | `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-patrol-offline` | iOS = copy SSOT · Android P1 thiếu card 2 — **không** dùng làm board |
| DEM | `specs/patrol-offline/ui/prototype/{ios,android}/index.html` `#sc-patrol-offline` | board dual aligned |
| MAP | `docs/html-to-native-map.md` + `ui/html-to-native-map.md` | Segment · Banner · Toast · rich-card |
| STR | `docs/mobile-strings.json` keys `offline.*` · `home.tile.offline` · `me.row.offline*` | VN SSOT |
| DA | `_data-analy/patrol-offline-control-hint.md` · `patrol-offline-bff-endpoints.md` · `patrol-offline-action-tree.md` | |
| PO | `po/requirement.md` | |

**Cấm** `mfeStdUrl` / `yarn start:std` / WebView HTML-as-app.

## 1. Pattern

| | |
|--|--|
| Surface | Push list · nav + segment 2 + banner + rich cards · **không** Modal/Sheet route |
| FormMode | none (không form) |
| Action this slug | Appear local · filter segment · POST sync · toast |
| `devSlash` | `/agent-dev-ios` + `/agent-dev-android` |
| Frame | iOS 390×844 · Android 412×915 · safe area |

## 2. Screens / DES-MOB-*

| DES / sc-* | Tên VN | Zones | CTA |
|------------|--------|-------|-----|
| `DES-MOB-PAT-OFFLINE` `#sc-patrol-offline` | Dữ liệu lưu trữ | Nav · segment · banner · cards | Đồng bộ |
| `DES-MOB-PAT-OFFLINE-NAV` | Nav | back text · title · sync text | pop / POST |
| `DES-MOB-PAT-OFFLINE-SEG` | Segment 2 | check-in idx **0** · incident idx **1** | filter local |
| `DES-MOB-PAT-OFFLINE-BANNER` | Banner yếu sóng | wifi-off + copy | ẩn khi empty tab |
| `DES-MOB-PAT-OFFLINE-CARD` | Rich card | thumb 56 · title · mappin · content · time · status strip | display only |

### IA lock

```
Tab 5 shell (không đổi)
  Home tile «Lưu trữ» (#i-sync) ──┐
  Me row «Hàng đợi mất sóng» ────┼→ push #sc-patrol-offline (cùng slug)
  Patrol-home nav «Đồng bộ» ──────┘
#sc-patrol-offline
  → Back «Trang Chủ» = pop parent
  → «Đồng bộ» = POST integration/sync/offline-batch
  → Segment 0 = check-in pending · 1 = incident pending
  → không child form / sheet / conflict UI
```

**Cấm** invent tab · GET queue API · «Có mạng» · watermark Gói · device label · native alert.

## 3. Field inventory (kit dual)

| Field | VN | controlHint | Required | Kit dual | Notes |
|-------|----|-------------|----------|----------|-------|
| navBack | Trang Chủ | BackButton text | * | `LinmTopBar` **text leading** (implement_kit) | `#i-chevron-left` + label · pop |
| title | Dữ liệu lưu trữ | Text | * | TopBar title | `offline.title` |
| syncBtn | Đồng bộ | TextButton | * | TopBar **text trailing** (implement_kit) | POST batch · `btn-sync` |
| segCheckIn | Điểm tuần mất sóng | Segment tab | * | `LinmSegment` index **0** | filter `checkIn` · **cấm** đổi thứ tự |
| segIncident | Sự cố mất sóng | Segment tab | * | `LinmSegment` index **1** | filter `incident` |
| offlineBanner | Tín hiệu yếu — ghi cục bộ, đồng bộ khi tín hiệu tốt | Banner warn | * | `LinmBanner` warning · `#i-wifi-off` | ẩn khi list rỗng tab hiện tại |
| cardThumb | (visual) | Image slot | | gradient 56×56 | demo · **cấm** watermark |
| cardTitle | Điểm tuần · Km … | Text | * | rich card body | local |
| cardLocation | QL.1 · … | Text | * | rich card + `#i-mappin` | dual parity |
| cardContent | Nội dung: … | Text | | rich card | card 1 only |
| cardTime | 2026-08-10 … | Text | * | rich card | local timestamp |
| cardStatus | Chờ gửi | Badge warn | * | status strip | **ngắn** cả 2 OS · helper = banner |
| toastSync | Đã đồng bộ N bản ghi | Toast success | * | `LinmToast` | sau POST OK |
| toastIncidentEmpty | Sự cố mất sóng · chưa có bản ghi | Toast info | * | `LinmToast` | tab 1 empty |
| toastError | (Auth/network) | Toast error | * | `LinmToast` | sync fail · **cấm** alert |

### Demo rows SSOT (segment 0 · first-run seed)

| # | title | location | extra | time | status |
|---|-------|----------|-------|------|--------|
| 1 | Điểm tuần · Km 1556+000 | QL.1 · Xuân Hải | Nội dung: mặt đường khô | 2026-08-10 08:40:12 | **Chờ gửi** |
| 2 | Điểm tuần · Km 1561+134 | QL.1 · Phước Dinh | — | 2026-08-10 09:12:44 | **Chờ gửi** |

Segment 1 demo = **empty** → toast `offline.toast.incidentEmpty`.

Toast / banner → `LinmToast` / `LinmBanner`. **Cấm** raw `TabView` / M3 segment ngoài kit.

## 4. SF ↔ Material (chrome lệch OK · nghĩa khớp)

| Demo `#i-*` | Ý nghĩa | iOS (SF / kit glyph) | Android (Material / kit glyph) |
|-------------|---------|----------------------|--------------------------------|
| `#i-chevron-left` | Back Trang Chủ | SF `chevron.left` + text | Material `arrow_back` + text |
| `#i-wifi-off` | Banner yếu sóng | SF `wifi.slash` | Material `WifiOff` |
| `#i-mappin` | Vị trí card | SF `mappin` | Material `Place` |
| `#i-sync` | Entry Home tile | SF `arrow.triangle.2.circlepath` | Material `Sync` |

## 5. Brand tokens

| Token | Hex | Dùng |
|-------|-----|------|
| primary | `#0C84C0` | nav text · thumb gradient |
| warn | `#FCB43C` | status strip · banner accent |
| surface iOS | `#F2F2F7` | nền |
| surface Android | `#FFFBFE` | nền |
| card | `#FFFFFF` | rich card |
| muted | `#8E8E93` | secondary lines |

**Cấm** skin Ministry / CCCD · **cấm** M3 tím nav.

## 6. Behaviors (parity demo)

| Case | UI |
|------|-----|
| Entry Home / Me / patrol nav | push cùng `#sc-patrol-offline` |
| Appear | load local · first-run seed 2 card SSOT · **không** GET |
| Segment 0 | 2 card + banner |
| Segment 1 empty | toast incidentEmpty · **không** fake count |
| Tap Đồng bộ OK | toast «Đã đồng bộ N bản ghi» · clear pending |
| Tap Đồng bộ fail/offline | toast lỗi · **giữ** queue · **cấm** alert |
| Back | pop parent |
| Post-sync appear | **cấm** re-seed demo (`GAP-F-OFFLINE-01`) |

## 7. BFF (Design lock — cấm invent)

App `{BffBase}/mobile-bff/api/v1`. Chỉ **một** action:

| Method | Path | Slug? |
|--------|------|-------|
| POST | `integration/sync/offline-batch` | **yes** |

**Cấm** `GET patrol-offline/queue` · `PatrolOfflineController` · Step 4b endpoint mới.

## 8. Cấm

- WebView HTML · `mfeStdUrl` · `yarn start:std`
- Gộp `#sc-patrol-home` check-in · `#sc-inc-form` · conflict UI
- `UIAlert` / `AlertDialog` / `window.alert`
- Icon-only back khi SSOT có chữ «Trang Chủ»
- Status pill dài trên card production
- Numeric badge Home tile
- «Có mạng» · tap-cycle tín hiệu · watermark Gói

## 9. Handoff → SA

| Field | Value |
|-------|-------|
| Next slash | `/agent-sa-mobile` |
| BFF | reuse `POST integration/sync/offline-batch` · Step 4b **N/A** |
| Open Q | GAP-F-OFFLINE-01…04 chốt PO · Android HTML aligned pack |
| kit_missing_confirm | TopBar text slots · rich card verify |
| Chain | roleOnly=design · **không** chain SA turn này |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design-mobile |
| skillVersion | 2026.08.19.23 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.29 |
| rulesVersion | 2026.08.19.34 |
| generatedAt | 2026-08-19T14:30:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:2f2cf6976914278da294ed00a6d1eeecb50364201812335d6852c0f4e46ccaad |
| bffContentHash | sha256:10d525fc95cdd32c9e4ede818499041f44341c7481d1d44e0fde6bec5738f403 |

---
<!-- Version meta: skillId=agent-design-mobile skillVersion=2026.08.19.23 schemaVersion=1 workflowVersion=2026.08.19.29 rulesVersion=2026.08.19.34 versionGate=rechecked -->
