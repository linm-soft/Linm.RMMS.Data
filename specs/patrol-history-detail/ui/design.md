# Design — patrol-history-detail (mobile · Chi tiết ca)

| Field | Value |
|-------|-------|
| feature | `patrol-history-detail` |
| title | [Design] [Mobile] [Lịch sử phiên] -> Chi tiết ca |
| this role | `design` · `/agent-design-mobile` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_2b169a90`) |
| changeScope | `edit_page` · GAP timeline GET check-ins live |
| packKind | **`sheet`** (meta) · surface **Full** `#sc-patrol-detail` (PO PACK-01) |
| formPattern | Full |
| real_view_parity | `v1` · native dual · peerStdUrl **N/A** · **cấm** mfeStdUrl |
| stack | `native_dual` |
| kit_missing_confirm | **N/A** — reuse TopBar / SectionLabel / ListRow / Badge / TimelineRow / Primary+Secondary / Toast / Empty |
| reviewUrlIos | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-history-detail/ui/prototype/ios/index.html#sc-patrol-detail` |
| reviewUrlAndroid | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-history-detail/ui/prototype/android/index.html#sc-patrol-detail` |
| ux-analy | `ui/ux-analy.md` §1–§9 |
| demo-parity | `ui/review/demo-parity.md` |
| html-map | `ui/html-to-native-map.md` |
| prior | PO `confirmed` · analy hash skip `sha256:patrol-history-detail-control-hint-20260912-timeline-live` · real-data `sha256:patrol-history-detail-real-data-20260912-timeline-live` |
| autoApprove | **ON** |
| e2eQa | ON queued `/agent-qa*` · **cấm** e2e / start:std ở role này |
| updatedAt | `2026-09-12T13:40:00.000Z` |
| taskId | `task_2b169a90` |

## 0. Context & Demo (hash skip — **cấm** re-scan)

| ID | Path | Notes |
|----|------|-------|
| DA | `_data-analy/patrol-history-detail-control-hint.md` · `…-real-data.md` · `…-action-tree.md` · `…-bff-endpoints.md` | inventory + bind §B · **GAP-DES-DEMO-RESCAN-01** |
| PO | `po/requirement.md` · `handoff/po-compact.md` | § Delta TIMELINE/TAP/MAP/END chốt |
| DEM | `ui/prototype/{ios,android}/index.html` `#sc-patrol-detail` | **UI ref** 3-row · runtime ≠ demo |
| PARENT | `patrol-history` / today | push + session Id |

**Cấm** `mfeStdUrl` / `yarn start:std` / WebView HTML-as-app / ERP.* / re-crawl demo.

## § Delta Current vs New (`edit_page` · 2026-09-12)

| ID | Prior Design | New (DoD) | Surface |
|----|--------------|-----------|---------|
| GAP-MOB-PAT-HIST-DET-TIMELINE-01 | demo SSOT 3 · **cấm** GET check-ins | GET `…/check-ins` live · empty `[]` OK · **cấm** `timelineDemo` | TL |
| GAP-MOB-PAT-HIST-DET-TAP-01 | tap done → checkin-detail (board) | keep nav `#sc-checkin-detail` + check-in `Id` · **≠** toast | TL |
| GAP-MOB-PAT-HIST-DET-MAP-01 | btnMap → patrol-map + Id | keep · **cấm** toast khi có Id | CTA |
| GAP-MOB-PAT-HIST-DET-END-01 | end toast P1 | **giữ** toast · **cấm** PUT | CTA |
| DATA / fail | fail → demo SSOT fallback | session fail → EmptyChrome+toast · CI fail → tl empty+toast · **cấm** timelineDemo | — |

**Giữ UI:** dual proto layout / chrome / copy hero+info / CTA / Tab 5 · prototype 3-row = **design ref only**.

## 1. Pattern

| | |
|--|--|
| Surface | Push Full `#sc-patrol-detail` · nav + hero + info + timeline + CTA · tab 5 shell giữ |
| FormMode | none (readonly detail) |
| Action this slug | Appear GET session + GET check-ins · display · CTA map nav · share/end toast |
| `devSlash` | `/agent-dev-ios` + `/agent-dev-android` |
| Frame | iOS 390×844 · Android 412×915 · safe area |

## 2. Screens / DES-MOB-*

| DES / sc-* | Tên VN | Zones | CTA |
|------------|--------|-------|-----|
| `DES-MOB-PAT-DETAIL` `#sc-patrol-detail` | Chi tiết ca | Nav · Hero · Info · Timeline · CTA · Tab | map / toast / pop |
| `DES-MOB-PAT-DETAIL-NAV` | Nav | iOS text **Lịch sử** · Android icon-only · title · `#i-ellipsis` | pop / toast Share |
| `DES-MOB-PAT-DETAIL-HERO` | Hero | codeLabel · codeHero ≥26/28 · badgeStatus | — |
| `DES-MOB-PAT-DETAIL-INFO` | Thông tin | 6 ListRow GET session | — |
| `DES-MOB-PAT-DETAIL-TL` | Điểm tuần | TimelineRow **live** / `tlEmpty` | tap done → checkin-detail |
| `DES-MOB-PAT-DETAIL-CTA` | CTA | Primary map · Secondary end | nav / toast |
| `DES-MOB-TABBAR` | Tab 5 | Tuần đường selected | shell |

### IA lock

```
(auth) Login → Tab 5
  Tuần đường → … → #sc-patrol-history / today
    → row + Id → push #sc-patrol-detail   ← this pack
#sc-patrol-detail  DES-MOB-PAT-DETAIL
  → nav back = pop list
  → trailing = toast «Chia sẻ» · cấm share sheet P1
  → appear = GET sessions/{id} · fail → EmptyChrome+toast · cấm fake 200 / OfflineDemo
  → timeline = GET …/check-ins live · [] → tlEmpty · cấm timelineDemo
  → tl tap done = nav checkin-detail + Id · ≠ toast · ≠ save
  → btnMap = nav patrol-map + Id · cấm toast khi có Id
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
| rowUser…Coverage | … | ListRow 13/≥16 | * | `LinmListRow` | GET session §B |
| sectionTimeline | Điểm tuần | SectionLabel | * | | |
| tlItem | (điểm) | TimelineRow ≥16/13 | * | `LinmTimelineRow` | GET check-ins bind |
| tlEmpty | (chưa có điểm) | Empty inline | | | `[]` OK · **không** demo rows runtime |
| tlTapDone | Xem | tap | * | | → checkin-detail khi có Id |
| btnMap | Mở bản đồ ca | PrimaryButton | * | `LinmPrimaryButton` | nav map + Id |
| btnEnd | Kết thúc ca | SecondaryButton | * | `LinmSecondaryButton` | toast · no PUT |
| empty404 | — | EmptyChrome | | | session 404 |
| toast* | — | Toast | * | `LinmToast` | share / end / err |

### Prototype SSOT (UI ref only · **≠** runtime timeline)

| Field | Value |
|-------|-------|
| Code | PAT-20260810-0014 |
| Badge | Đang tuần |
| User / Route / Type | Nguyễn Văn A · QL.1 · Km 1551+200–1561+134 · Tuần đường |
| Plan / Start / Coverage | 10/08/2026 · 07:20 (UTC+7) · 67% |
| TL1–3 board | Xuân Hải · Cống ngang · Phước Dinh (pending) — **design ref** |
| Runtime TL | map `PatrolCheckInDto` · empty chrome khi `[]` |

### Timeline display rules (runtime)

| Line | Rule |
|------|------|
| title | `PlanPointLabel` |
| sub | `CreatedAt` HH:mm · MatchOk label · Ảnh ×N · optional `~{n} m` |
| canOpen | có `Id` → tap nav checkin-detail |
| empty | copy empty · **cấm** 3 demo rows / `timelineDemo` |

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
| success / danger / warning | `#34C759`/`#FF3B30`/`#FF9500` | badge / pending marker |
| surface iOS / Android | `#F2F2F7` / `#FFFBFE` | nền |
| card | `#FFFFFF` | hero · rows · timeline |

**Cấm** skin CCCD · M3 tím tab.

## 6. Behaviors

| Case | UI |
|------|-----|
| Appear | GET `patrol/sessions/{id}` · bind hero+info |
| Session fail / 404 | EmptyChrome + toast · back list · **cấm** fake 200 |
| Timeline | GET `…/check-ins` · rows / tlEmpty · fail → empty + toast · **cấm** timelineDemo |
| Share / End | toast P1 · **cấm** sheet / PUT |
| Map | push `patrol-map` + Id · **cấm** toast khi có Id · **cấm** embed |
| TL tap done | nav checkin-detail + Id · **≠** toast |
| Tab | Tab 5 giữ · Tuần đường on |
| Signal | **N/A** |

## 7. BFF (Design lock)

`{BffBase}/mobile-bff/api/v1`:

| Method | Path | P1 |
|--------|------|----|
| GET | `patrol/sessions/{id}` | **yes** |
| GET | `patrol/sessions/{id}/check-ins` | **yes** · Live |
| PUT session / POST check-ins | — | **OUT** |

## 8. Cấm

- Re-scan demo HTML (`GAP-DES-DEMO-RESCAN-01`) · invent API · ERP.* · mfeStdUrl
- Ship `timelineDemo` / hardcode 3 rows runtime · plan-points synth P1
- Gộp list / CI-DETAIL save · share sheet · end PUT · embed map
- Board không prefix `ios/`·`android/` · watermark Gói · device label · system alert

## 9. Handoff → SA

| Field | Value |
|-------|-------|
| Next | `/agent-sa-mobile` |
| BFF | GetById + GetCheckIns Live · Step 4b **N/A** · **cấm** ERP.* |
| Open Q | none (PO chốt TIMELINE/TAP/MAP/END) |
| reviewUrl | dual file:// paths § meta |
| peerStdUrl | N/A |
| Chain | roleOnly=design · **không** start SA turn này |

## Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/ios/index.html` · `ui/prototype/android/index.html` |
| Form zones | Full push · header · body hero/info/timeline · CTA · tab shell |
| Timeline board | 3-row **UI ref** · `data-runtime="GET check-ins"` · empty zone `#tlEmpty` hidden |
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
| generatedAt | 2026-09-12T13:40:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:patrol-history-detail-control-hint-20260912-timeline-live |
| realDataHash | sha256:patrol-history-detail-real-data-20260912-timeline-live |

---
<!-- Version meta: skillId=agent-design-mobile skillVersion=2026.08.31.2 schemaVersion=2 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
