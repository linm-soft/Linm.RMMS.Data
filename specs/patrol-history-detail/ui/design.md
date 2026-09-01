# Design — patrol-history-detail (mobile · Chi tiết ca)

| Field | Value |
|-------|-------|
| feature | `patrol-history-detail` |
| title | [Design] [Mobile] [Lịch sử phiên] -> Chi tiết ca |
| this role | `design` · `/agent-design-mobile` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_5777786c`) |
| changeScope | `new_page` |
| packKind | **`sheet`** (meta) · surface **Full** `#sc-patrol-detail` (PO PACK-01) |
| formPattern | Full |
| real_view_parity | `v1` · native dual · peerStdUrl **N/A** · **cấm** mfeStdUrl |
| stack | `native_dual` |
| kit_missing_confirm | **N/A** — reuse TopBar / SectionLabel / ListRow / Badge / TimelineRow / Primary+Secondary / Toast |
| reviewUrlIos | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-history-detail/ui/prototype/ios/index.html#sc-patrol-detail` |
| reviewUrlAndroid | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-history-detail/ui/prototype/android/index.html#sc-patrol-detail` |
| ux-analy | `ui/ux-analy.md` §1–§9 |
| demo-parity | `ui/review/demo-parity.md` |
| html-map | `ui/html-to-native-map.md` |
| prior | PO `confirmed` · analy hash skip `sha256:patrol-history-detail-control-hint-20260831` · real-data `sha256:patrol-history-detail-real-data-20260831` |
| autoApprove | **ON** |
| e2eQa | ON queued `/agent-qa*` · **cấm** e2e / start:std ở role này |
| updatedAt | `2026-09-01T00:56:01.000Z` |
| taskId | `task_5777786c` |

## 0. Context & Demo (hash skip — **cấm** re-scan)

| ID | Path | Notes |
|----|------|-------|
| DA | `_data-analy/patrol-history-detail-control-hint.md` · `…-real-data.md` · `…-action-tree.md` · `…-bff-endpoints.md` | inventory + bind §B |
| PO | `po/requirement.md` · `handoff/po-compact.md` | TIMELINE/END/PACK chốt |
| DEM-P1 | mobile-p1 `#sc-patrol-detail` · `DES-MOB-PAT-DETAIL` | copy SSOT via analy — **GAP-DES-DEMO-RESCAN-01** |
| DEM | `ui/prototype/{ios,android}/index.html` `#sc-patrol-detail` | board dual |
| PARENT | `patrol-history` list row | toast → **wire push + Id** |

**Cấm** `mfeStdUrl` / `yarn start:std` / WebView HTML-as-app / ERP.*.

## 1. Pattern

| | |
|--|--|
| Surface | Push Full `#sc-patrol-detail` · nav back + title + trailing · hero + info + timeline + CTA · tab 5 shell giữ |
| FormMode | none (readonly detail) |
| Action this slug | Appear GET `sessions/{id}` · display · timeline demo P1 · CTA map nav · share/end toast |
| `devSlash` | `/agent-dev-ios` + `/agent-dev-android` |
| Frame | iOS 390×844 · Android 412×915 · safe area |

## 2. Screens / DES-MOB-*

| DES / sc-* | Tên VN | Zones | CTA |
|------------|--------|-------|-----|
| `DES-MOB-PAT-DETAIL` `#sc-patrol-detail` | Chi tiết ca | Nav · Hero · Info · Timeline · CTA · Tab | map / toast / pop |
| `DES-MOB-PAT-DETAIL-NAV` | Nav | iOS text **Lịch sử** · Android icon-only · title · `#i-ellipsis` | pop / toast Share |
| `DES-MOB-PAT-DETAIL-HERO` | Hero | codeLabel · codeHero ≥26/28 · badgeStatus | — |
| `DES-MOB-PAT-DETAIL-INFO` | Thông tin | 6 ListRow GET bind | — |
| `DES-MOB-PAT-DETAIL-TL` | Điểm tuần | 3 TimelineRow demo SSOT | tap → checkin-detail |
| `DES-MOB-PAT-DETAIL-CTA` | CTA | Primary map · Secondary end | nav / toast |
| `DES-MOB-TABBAR` | Tab 5 | Tuần đường selected | shell |

### IA lock

```
(auth) Login → Tab 5
  Tuần đường → … → #sc-patrol-history
    → row + Id → push #sc-patrol-detail   ← this pack
#sc-patrol-detail  DES-MOB-PAT-DETAIL
  → nav back = pop #sc-patrol-history
  → trailing = toast «Chia sẻ» · cấm share sheet P1
  → appear = GET sessions/{id} · fail → demo SSOT + toast · cấm fake 200
  → timeline = demo 3 rows P1 · cấm GET check-ins
  → tl tap done = go('checkin-detail') · owner patrol-checkin · ≠ save
  → btnMap = go('patrol-map') + Id
  → btnEnd = toast «Kết thúc ca — xác nhận sau» · cấm PUT
  → tab Tuần đường selected · in-screen tabs none
```

## 3. Field inventory (kit dual · khớp §B)

| Field | VN | controlHint | Required | Kit dual | Notes |
|-------|----|-------------|----------|----------|-------|
| navBack | Lịch sử | BackButton | * | `LinmTopBar` leading `#i-chevron-left` | iOS text · Android icon-only |
| title | Chi tiết ca | TopBar title | * | `LinmTopBar` | fixed dual |
| navShare | Chia sẻ | IconButton | * | trailing `#i-ellipsis` | toast P1 |
| codeLabel | Mã phiên | Text caption 13 | * | | fixed |
| codeHero | PAT-* | Text display ≥26/28 | * | | GET `Code` |
| badgeStatus | Đang tuần… | Badge | * | `LinmBadge` | Status VN map |
| sectionInfo | Thông tin | SectionLabel 13 | * | `LinmSectionLabel` | |
| rowUser…Coverage | … | ListRow 13/≥16 | * | `LinmListRow` | GET §B |
| sectionTimeline | Điểm tuần | SectionLabel | * | | |
| tlItem ×3 | Km… | TimelineRow ≥16/13 | * | `LinmTimelineRow` | demo SSOT |
| btnMap | Mở bản đồ ca | PrimaryButton | * | `LinmPrimaryButton` | nav map |
| btnEnd | Kết thúc ca | SecondaryButton | * | `LinmSecondaryButton` | toast · no PUT |
| empty404 | — | EmptyChrome | | | 404 |
| toast* | — | Toast | * | `LinmToast` | share / end / err |

### Demo SSOT (fallback UI · khớp real-data)

| Field | Value |
|-------|-------|
| Code | PAT-20260810-0014 |
| Badge | Đang tuần |
| User / Route / Type | Nguyễn Văn A · QL.1 · Km 1551+200–1561+134 · Tuần đường |
| Plan / Start / Coverage | 10/08/2026 · 07:20 (UTC+7) · 67% |
| TL1–3 | Xuân Hải · Cống ngang · Phước Dinh (pending) |

## 4. SF ↔ Material

| Demo `#i-*` | Ý nghĩa | iOS | Android |
|-------------|---------|-----|---------|
| `#i-chevron-left` | Back | `chevron.left` + text | `ArrowBack` icon-only |
| `#i-ellipsis` | Share | ellipsis | same `d=` |
| Tab glyphs | house/mappin/warning/wrench/person | kit | same `d=` |

Dual HTML **cùng `d=`** cho `#i-chevron-left` · `#i-ellipsis`. **Cấm** invent `#i-*`.

## 5. Brand tokens

| Token | Hex | Dùng |
|-------|------|------|
| primary | `#0C84C0` | nav · CTA · badge info · tab on |
| success / danger / warning | `#34C759`/`#FF3B30`/`#FF9500` | badge map (khi status đổi) |
| surface iOS / Android | `#F2F2F7` / `#FFFBFE` | nền |
| card | `#FFFFFF` | hero · rows · timeline |

**Cấm** skin CCCD · M3 tím tab.

## 6. Behaviors

| Case | UI |
|------|-----|
| Appear | GET `patrol/sessions/{id}` · bind hero+info · fail → demo + toastErr |
| Missing Id / 404 | empty · back list |
| Share / End | toast P1 · **cấm** sheet / PUT |
| Map | push `patrol-map` + Id · **cấm** embed map |
| Timeline | demo 3 · tap done → checkin-detail |
| Tab | Tab 5 giữ · Tuần đường on · **cấm** invent tabs |
| Signal | **N/A** · **cấm** «Có mạng» / tap-cycle |

## 7. BFF (Design lock)

`{BffBase}/mobile-bff/api/v1`:

| Method | Path | P1 |
|--------|------|----|
| GET | `patrol/sessions/{id}` | **yes** |
| GET check-ins / PUT session | — | **OUT** |

## 8. Cấm

- Re-scan demo HTML (`GAP-DES-DEMO-RESCAN-01`) · invent API · ERP.* · mfeStdUrl
- Gộp list / CI-DETAIL save · share sheet · end PUT · embed map
- Board không prefix `ios/`·`android/` · watermark Gói · device label · system alert

## 9. Handoff → SA

| Field | Value |
|-------|-------|
| Next | `/agent-sa-mobile` |
| BFF | GetById + XCO · Step 4b **N/A** |
| Open Q | none (PO chốt TIMELINE/PACK) |
| reviewUrl | dual file:// paths § meta |
| peerStdUrl | N/A |
| Chain | roleOnly=design · **không** start SA turn này |

## Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/ios/index.html` · `ui/prototype/android/index.html` |
| Form zones | Full push · header chrome · body hero/info/timeline · CTA · tab shell |
| **reviewUrl** | reviewUrlIos + reviewUrlAndroid |
| **peerStdUrl** | N/A · **cấm** mfeStdUrl |
| **real_view_parity** | `v1` |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design-mobile |
| skillVersion | 2026.08.31.2 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | 2026-09-01T00:56:01.000Z |
| versionGate | rechecked |
| contentHash | sha256:patrol-history-detail-control-hint-20260831 |
| realDataHash | sha256:patrol-history-detail-real-data-20260831 |

---
<!-- Version meta: skillId=agent-design-mobile skillVersion=2026.08.31.2 schemaVersion=2 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
