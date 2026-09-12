# Design — patrol-home (mobile hub · Tuần đường)

| Field | Value |
|-------|-------|
| feature | `patrol-home` |
| title | [Design] [Mobile] Tuần đường |
| this role | `design` · `/agent-design-mobile` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_77ea403c`) |
| changeScope | `edit_page` |
| packKind | **`hub`** (PO re-confirm) |
| stack | `native_dual` |
| kit_missing_confirm | **N/A** — reuse map hub kit dual |
| reviewUrlIos | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-home/ui/prototype/ios/index.html#sc-patrol-home` |
| reviewUrlAndroid | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-home/ui/prototype/android/index.html#sc-patrol-home` |
| peerStdUrl | **cấm** `mfeStdUrl` |
| real_view_parity | `v1` · native_dual |
| ux-analy | `ui/ux-analy.md` §1–§9 |
| demo-parity | `ui/review/demo-parity.md` |
| prior | PO `confirmed` · contentHash `sha256:b5efb555e6c8195ccd93f60d983b57d6b0aa476a919b7f11700157c58241ae0a` · bffContentHash `sha256:128461fdf9135cf8c168a1b05e92586465d1ef34c117b39bea7d2464a06f55c0` |
| autoApprove | **ON** |
| e2eQa | ON queued QA · **cấm** e2e / `yarn start:std` ở Design |
| updatedAt | `2026-09-12T15:15:00.000Z` |
| taskId | `task_77ea403c` |

## § Delta (edit_page — keep layout)

| Zone / behavior | Design DoD |
|-----------------|------------|
| OPEN | `emptyActive` + CTA **`btn-open-session`** **Mở ca** → POST `patrol/sessions` · reload · ẩn khi có active |
| END | Detail CTA **`btnEndSession`** → PUT `patrol/sessions/{id}` · **không** toast-only · (không vẽ lại detail layout) |
| HERO | Live fields only · trống → `—` · **cấm** fallback `QL.1·Km468+200` / `Nguyễn Văn A` / `07:20` / row `QL.1` |
| KEEP | segment · pin · kpi · quick · nav · sibling toast · offline badge |

**Cấm** redesign layout · **cấm** re-scan demo HTML (hash skip).

## Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/ios/index.html` · `ui/prototype/android/index.html` |
| Form zones | N/A (hub · FormMode=none) |
| Hub zones | nav · title · seg · **heroActive / emptyActive** · pin · kpi · today · quick · tab |
| SSOT | `artifact-prefix.md` · `design-prototype-review.md` · control-hint |
| **reviewUrl** | iOS + Android file:// … `#sc-patrol-home` |
| **peerStdUrl** | cấm mfeStdUrl |
| **real_view_parity** | `v1` |

### Wire (hub)

```
[Nav] sync · bell(badge 0 ẩn)
[Title] Tuần đường
[Seg] idx0 Tuần đường · idx1 Chấm công
[Hero active] eyebrow+signal · route · meta · progress · map/check-in
[Hero empty] «Chưa có ca» · — · CTA Mở ca (#btn-open-session)
[Pin] Ghim vị trí hiện tại
[KPI] Đã ghi · Còn lại · Độ phủ (empty → —)
[Today] rows GET · empty route=—
[Quick] 6 rows · Lưu trữ → offline
```

## 1. Pattern

| | |
|--|--|
| Surface | Tab field hub · **không** Modal/Sheet |
| FormMode | none · formPattern **N/A** |
| Action this slug | GET sessions · POST mở ca · display · toast siblings · push offline · END trên detail |
| Frame | iOS 390×844 · Android 412×915 |

## 2. Screens / DES-MOB-*

| DES / sc-* | Tên VN | Zones | CTA |
|------------|--------|-------|-----|
| `DES-MOB-PAT-HOME` `#sc-patrol-home` | Tuần đường | Nav · title · seg · heroActive/emptyActive · pin · KPI · hôm nay · quick · tab | POST mở ca / toast / push offline |
| `DES-MOB-PAT-ACTIVE` | Hero ca | live bind | sibling toast |
| `DES-MOB-PAT-EMPTY` | Hero empty | CTA Mở ca | POST |
| `DES-MOB-CI-PIN-HERE` | Pin | Primary | toast P1 |
| `DES-MOB-PAT-KPI` | KPI 3 | session / — | bind |
| `DES-MOB-PAT-TODAY` | Hôm nay | rows + badge | tap → detail (END PUT) |
| `DES-MOB-PAT-QUICK` | Thao tác nhanh | 6 rows | toast · Lưu trữ push |
| `DES-MOB-TABBAR` | Tab 5 | shell | — |

### IA lock

```
#sc-patrol-home
  → no active: emptyActive + btn-open-session → POST → reload
  → has active: heroActive live · ẩn mở ca
  → today/detail: btnEndSession → PUT Hoàn thành
  → nav sync / Lưu trữ = push #sc-patrol-offline
  → keep segment/pin/kpi/quick · sibling toast · cấm sheet
```

## 3. Field inventory (kit dual)

| Field | VN | controlHint | Required | Kit dual | Notes |
|-------|----|-------------|----------|----------|-------|
| navSync | Đồng bộ | IconButton | * | `LinmTopBar` | push offline |
| navNotify | Thông báo | IconButton | * | `LinmTopBar` | toast · badge 0 ẩn |
| title | Tuần đường | LargeTitle | * | `LinmLargeTitle` | fixed |
| segPatrol | Tuần đường | Segment | * | `LinmSegment` idx **0** | owner |
| segAttendance | Chấm công | Segment | * | `LinmSegment` idx **1** | toast |
| heroActive | Ca đang chạy | LinmHeroCard | * | live fields only | empty → `—` |
| emptyActive / btn-open-session | Mở ca | LinmPrimaryButton | * | POST | id `btn-open-session` |
| heroMap / heroCheckin | sibling | HeroAction | * | toast P1 | ẩn khi empty |
| pinHere | Ghim vị trí hiện tại | PrimaryButton | * | keep | |
| kpiStrip | KPI 3 | LinmKpiStrip | * | session / — | |
| todayRows | Hôm nay | LinmListRow | * | GET · route trống=`—` | |
| btnEndSession | Kết ca | detail CTA | * | PUT | not hub chrome |
| quickRows | 6 rows | LinmListRow | * | keep | |
| offlineBadge | N | Badge | | ẩn 0 | |

Toast → `LinmToast`. **Cấm** alert · **cấm** demo bind khi API fail.

## 4. SF ↔ Material (giữ prior)

| Demo `#i-*` | iOS / Android kit |
|-------------|-------------------|
| `#i-sync` · `#i-bell` · `#i-map` · `#i-plus` · `#i-mappin` · `#i-walk` · `#i-check` · `#i-camera` · `#i-video` · `#i-list` | cùng `d=` dual prior |

## 5. Brand tokens

primary `#0C84C0` · success `#34C759`/`#3CB448` · warn `#FF9500`/`#FCB43C` · surface iOS `#F2F2F7` · Android `#FFFBFE` · card `#FFFFFF`.

## 6. Behaviors

| Case | UI |
|------|-----|
| Appear | GET sessions · map «Đang tuần» · **cấm** demo fallback |
| No active | emptyActive + **Mở ca** → POST → reload |
| Has active | hero live · ẩn CTA mở ca |
| Kết ca (detail) | PUT → toast success · pop/reload hub |
| API fail | toast + empty/`—` · **cấm** alert · **cấm** demo bind |
| GPS | N/A mở/kết ca · pin toast P1 |
| Keep | segment · pin · kpi · quick · nav · sibling toast |

## 7. BFF (Design lock)

| Method | Path | Wire |
|--------|------|------|
| GET | `patrol/sessions` | live hub |
| GET | `patrol/sessions/{id}` | detail |
| POST | `patrol/sessions` | **mở ca** |
| PUT | `patrol/sessions/{id}` | **kết ca** |

Step 4b **N/A**. **Cấm** invent `patrol-home` · ERP.*.

## 8. Cấm

- Redesign layout · re-scan demo (GAP-DES-DEMO-RESCAN-01)
- WebView / mfeStdUrl / yarn start:std / e2e ở Design
- Native alert · «Có mạng» · watermark · badge hardcode `3`
- Board thiếu prefix `ios/` · `android/`

## 9. Handoff → SA

| Field | Value |
|-------|-------|
| Next | `/agent-sa-mobile` |
| BFF | GET/POST/PUT `patrol/sessions` · Step 4b N/A |
| Gaps → Dev | GAP-PAT-HOME-SESSION-01/02 · HERO-01 |
| Chain | roleOnly=`design` · không start SA cùng task |
| design_confirm | **approve** (autoApprove) |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | 2026-09-12T15:15:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:b5efb555e6c8195ccd93f60d983b57d6b0aa476a919b7f11700157c58241ae0a |
| bffContentHash | sha256:128461fdf9135cf8c168a1b05e92586465d1ef34c117b39bea7d2464a06f55c0 |

---
<!-- Version meta: skillId=agent-design-mobile skillVersion=2026.08.25.01 schemaVersion=1 -->
