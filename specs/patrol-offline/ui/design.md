# Design — patrol-offline (mobile list · edit_page delta)

| Field | Value |
|-------|-------|
| feature | `patrol-offline` |
| title | [Design] [Mobile] Hàng đợi mất sóng |
| this role | `design` · `/agent-design-mobile` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_1f9f2ea2`) |
| changeScope | `edit_page` · gap=`offline_sync_apply_checkins` |
| packKind | **`list`** (PO confirm · keep) |
| stack | `native_dual` |
| kit_missing_confirm | prior implement_kit TopBar text · **unchanged UI** |
| reviewUrlIos | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-offline/ui/prototype/ios/index.html#sc-patrol-offline` |
| reviewUrlAndroid | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-offline/ui/prototype/android/index.html#sc-patrol-offline` |
| ux-analy | `ui/ux-analy.md` §1–§9 |
| prior | PO `confirmed` · `po-compact.md` · data_analy contentHash `sha256:patrol-offline-delta-apply-checkins-20260912` · bffContentHash `sha256:patrol-offline-bff-apply-checkins-20260912` |
| autoApprove | **ON** |
| e2eQa | ON queued QA · **cấm** `yarn start:std` / `mfeStdUrl` / e2e ở role này |
| hashSkip | **yes** · **cấm** re-scan demo |
| updatedAt | `2026-09-12T14:31:03.000Z` |
| taskId | `task_1f9f2ea2` |

## 0. Context & Demo

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/patrol-offline.md` | list · local queue · **replay** check-ins |
| DEM | `specs/patrol-offline/ui/prototype/{ios,android}/index.html` `#sc-patrol-offline` | **keep** zones · annotate replay |
| MAP | `ui/html-to-native-map.md` | Segment · Banner · Toast · rich-card |
| STR | `docs/mobile-strings.json` keys `offline.*` | VN SSOT |
| DA | `_data-analy/patrol-offline-control-hint.md` · `patrol-offline-real-data.md` | § Delta |
| PO | `po/requirement.md` · `handoff/po-compact.md` | confirmed |

**Cấm** `mfeStdUrl` / `yarn start:std` / WebView HTML-as-app · **cấm** re-scan demo (hash skip).

## § Delta Design (edit_page · UI keep)

| Aspect | Prior design | New (DoD) |
|--------|--------------|-----------|
| Layout zones | `#sc-patrol-offline` | **unchanged** — no redesign |
| Tap **Đồng bộ** | POST `offline-batch` → clear all | **Replay** mỗi `kind=checkIn` → `POST patrol/sessions/{sessionId}/check-ins` · remove **chỉ** 2xx · toast N = apply OK |
| offline-batch | primary sync | Optional receipt **sau** OK · RecordCount = synced · **không** apply DB |
| Queue payload | display fields | **+** hidden `sessionId` + CreatePatrolCheckInRequest fields (enqueue sibling) |
| Incident tab | filter · sync cleared | Filter only · sync **không** xóa incident (P2) · **cấm** clear-all |
| Partial fail | n/a | Giữ item lỗi · toast N OK · **cấm** alert |

## 1. Pattern

| | |
|--|--|
| Surface | Push list · nav + segment 2 + banner + rich cards · **không** Modal/Sheet |
| FormMode | none |
| Action this slug | Appear local · segment filter · **replay sync** · toast N |
| `devSlash` | `/agent-dev-ios` + `/agent-dev-android` |
| Frame | iOS 390×844 · Android 412×915 · safe area |

## 2. Screens / DES-MOB-* (keep)

| DES / sc-* | Tên VN | Zones | CTA |
|------------|--------|-------|-----|
| `DES-MOB-PAT-OFFLINE` `#sc-patrol-offline` | Dữ liệu lưu trữ | Nav · segment · banner · cards | Đồng bộ = **replay** |
| `DES-MOB-PAT-OFFLINE-NAV` | Nav | back text · title · sync text | pop / replay |
| `DES-MOB-PAT-OFFLINE-SEG` | Segment 2 | check-in idx **0** · incident idx **1** | filter local |
| `DES-MOB-PAT-OFFLINE-BANNER` | Banner yếu sóng | wifi-off + copy | ẩn khi empty tab |
| `DES-MOB-PAT-OFFLINE-CARD` | Rich card | thumb 56 · title · mappin · content · time · status | display only |

### IA lock

```
Tab 5 shell (không đổi)
  Home tile «Lưu trữ» · Me row · Patrol-home «Đồng bộ» → push #sc-patrol-offline
#sc-patrol-offline
  → Back «Trang Chủ» = pop
  → «Đồng bộ» = replay checkIn → POST …/check-ins (optional offline-batch receipt)
  → Segment 0 = check-in pending · 1 = incident pending (P2 no clear)
  → không child form / sheet / conflict UI
```

**Cấm** invent tab · GET queue API · «Có mạng» · watermark · native alert · clear-all.

## 3. Field inventory (kit dual · keep + hidden payload)

| Field | VN | controlHint | Required | Kit dual | Notes |
|-------|----|-------------|----------|----------|-------|
| navBack | Trang Chủ | BackButton text | * | `LinmTopBar` text leading | pop |
| title | Dữ liệu lưu trữ | Text | * | TopBar title | `offline.title` |
| syncBtn | Đồng bộ | TextButton | * | TopBar text trailing | **replay** · `btn-sync` |
| segCheckIn | Điểm tuần mất sóng | Segment | * | `LinmSegment` idx **0** | filter `checkIn` |
| segIncident | Sự cố mất sóng | Segment | * | `LinmSegment` idx **1** | filter `incident` · P2 |
| offlineBanner | Tín hiệu yếu — … | Banner warn | * | `LinmBanner` | ẩn empty |
| cardThumb | (visual) | Image slot | | gradient 56 | demo |
| cardTitle | Điểm tuần · Km … | Text | * | rich card | local |
| cardLocation | QL.1 · … | Text | * | + `#i-mappin` | |
| cardContent | Nội dung: … | Text | | caption | optional |
| cardTime | timestamp | Text | * | caption2 | |
| cardStatus | Chờ gửi | Badge warn | * | status strip | ngắn |
| sessionId | — | Hidden | * checkIn | local store | **NEW** replay key |
| planPointLabel / route / lat / lng / accuracyM / distanceToPlanM / matchOk / content / photoLocalIds | — | Hidden | * body | local | CreatePatrolCheckInRequest |
| toastSync | Đã đồng bộ N bản ghi | Toast | * | `LinmToast` | N = **apply OK** count |
| toastIncidentEmpty | Sự cố mất sóng · chưa có bản ghi | Toast | * | `LinmToast` | tab 1 empty |
| toastError | (Auth/network) | Toast error | * | `LinmToast` | fail · **giữ** queue |

### Demo rows SSOT (segment 0 · display keep)

| # | title | location | extra | time | status |
|---|-------|----------|-------|------|--------|
| 1 | Điểm tuần · Km 1556+000 | QL.1 · Xuân Hải | Nội dung: mặt đường khô | 2026-08-10 08:40:12 | **Chờ gửi** |
| 2 | Điểm tuần · Km 1561+134 | QL.1 · Phước Dinh | — | 2026-08-10 09:12:44 | **Chờ gửi** |

Segment 1 demo = **empty** → toast `offline.toast.incidentEmpty`.

## 4. SF ↔ Material (chrome lệch OK · nghĩa khớp)

| Demo `#i-*` | Ý nghĩa | iOS | Android |
|-------------|---------|-----|---------|
| `#i-chevron-left` | Back | SF `chevron.left` | Material `arrow_back` |
| `#i-wifi-off` | Banner | SF `wifi.slash` | `WifiOff` |
| `#i-mappin` | Location | SF `mappin` | `Place` |
| `#i-sync` | Entry Home | SF `arrow.triangle.2.circlepath` | `Sync` |

## 5. Brand tokens

| Token | Hex | Dùng |
|-------|-----|------|
| primary | `#0C84C0` | nav · thumb |
| warn | `#FCB43C` | status · banner |
| surface iOS | `#F2F2F7` | nền |
| surface Android | `#FFFBFE` | nền |
| card | `#FFFFFF` | rich card |
| muted | `#8E8E93` | secondary |

**Cấm** Ministry skin · M3 tím nav.

## 6. Behaviors (delta sync)

| Case | UI |
|------|-----|
| Entry Home / Me / patrol nav | push cùng `#sc-patrol-offline` |
| Appear | load local pending · EmptyChrome khi 0 · **không** GET queue |
| Segment 0 | pending checkIn cards + banner |
| Segment 1 empty | toast incidentEmpty · **không** fake count |
| Tap Đồng bộ · online | for each checkIn: POST check-ins · remove 2xx · keep fail · toast N OK · optional offline-batch receipt |
| Tap Đồng bộ · offline | toast lỗi · **giữ** queue · **cấm** clear |
| Partial fail | giữ item lỗi · **cấm** clear-all |
| Sync incident | **không** xóa incident (P2) |
| Back | pop |
| Post-sync | **cấm** re-seed demo (`GAP-F-OFFLINE-01`) |

## 7. BFF (Design lock — cấm invent)

App `{BffBase}/mobile-bff/api/v1`:

| Method | Path | Role |
|--------|------|------|
| POST | `patrol/sessions/{sessionId}/check-ins` | **primary apply** (replay) |
| POST | `integration/sync/offline-batch` | **optional receipt** after OK · RecordCount = synced |

**Cấm** `GET …/queue` · `PatrolOfflineController` · Step 4b endpoint mới · ERP.*.

## 8. Cấm

- WebView HTML · `mfeStdUrl` · `yarn start:std` · e2e ở Design
- Clear queue sau offline-batch không verify 2xx check-in
- Gộp `#sc-patrol-home` / `#sc-inc-form` / conflict UI
- `UIAlert` / `AlertDialog` / `window.alert`
- Icon-only back khi SSOT có «Trang Chủ»
- Status pill dài · badge số Home tile · «Có mạng» · watermark
- Re-scan demo HTML / crawl DemoRoot (hash skip)

## 9. Handoff → SA

| Field | Value |
|-------|-------|
| Next slash | `/agent-sa-mobile` |
| BFF | replay `POST …/check-ins` + optional offline-batch · Step 4b **N/A** |
| Open Q | Incident replay P2 · GAP-MOB-ACT-PAT-OFFLINE-01 Defer |
| kit_missing_confirm | TopBar text · unchanged |
| Chain | roleOnly=design · **không** chain SA turn này |
| e2eQa | ON khi `/agent-qa*` |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design-mobile |
| skillVersion | 2026.08.19.29 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.29 |
| rulesVersion | 2026.08.19.34 |
| generatedAt | 2026-09-12T14:31:03.000Z |
| versionGate | rechecked |
| contentHash | sha256:patrol-offline-delta-apply-checkins-20260912 |
| bffContentHash | sha256:patrol-offline-bff-apply-checkins-20260912 |

---
<!-- Version meta: skillId=agent-design-mobile skillVersion=2026.08.19.29 schemaVersion=1 workflowVersion=2026.08.19.29 rulesVersion=2026.08.19.34 versionGate=rechecked -->
