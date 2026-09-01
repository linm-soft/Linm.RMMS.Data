# Design — patrol-pin

| Field | Value |
|-------|-------|
| feature | `patrol-pin` |
| title | [Mobile] [Tuần đường] -> Ghim vị trí hiện tại |
| role | `/agent-design-mobile` |
| status | **confirmed** (autoApprove=ON) |
| packKind | `sheet` |
| changeScope | `new_page` |
| taskId | `task_463367a8` |
| priorPo | `po/requirement.md` **confirmed** |
| priorDa | `_data-analy/patrol-pin-control-hint.md` **confirmed** |
| updatedAt | `2026-08-21T03:23:01.000Z` |

## reviewUrl (dual — REQUIRED)

| Platform | Path | reviewUrl |
|----------|------|-----------|
| iOS hub | `ui/prototype/ios/index.html` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-pin/ui/prototype/ios/index.html` |
| iOS map | same + `?surface=map` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-pin/ui/prototype/ios/index.html?surface=map` |
| Android hub | `ui/prototype/android/index.html` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-pin/ui/prototype/android/index.html` |
| Android map | same + `?surface=map` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-pin/ui/prototype/android/index.html?surface=map` |

Demo states: `?deny=1` · `?timeout=1` (cùng dual). **Cấm** `mfeStdUrl` / `yarn start:std`.

## Frame / chrome

| | iOS | Android |
|--|-----|---------|
| Frame | 390×844 | 412×915 |
| Title | Large title **Tuần đường** / **Bản đồ ca** | TopAppBar 22 |
| Shell | Tab 5 giữ · index Tuần đường | NavigationBar 5 · cùng index |
| pack tabs | **none** — **cấm** invent segment (`GAP-TAB-01`) | same |

## DES table

| DES | Zone | iOS | Android | Notes |
|-----|------|-----|---------|-------|
| `DES-MOB-CI-PIN-HERE` | CTA Ghim hub `#sc-patrol-home` + map `#sc-patrol-map` | `LinmPrimaryButton` + `#i-mappin` | same | `pinHereCheckin()` · size ≥16 |
| `DES-MOB-GPS-DENY` | Modal deny `#modal-gps` | in-app card | Material dialog card | **cấm** `UIAlert` / `AlertDialog` |
| Toast success | Banner | `LinmToast` | same | `Đã ghim vị trí hiện tại · {route} · ±N m` |
| Toast timeout | Banner | `LinmToast` | same | `Chưa lấy được vị trí. Thử lại.` |
| Map pin `.here` | Map overlay | MapKit annotation | Maps Compose marker | chỉ khi allow · **cấm** fake lat/lng |

## SF ↔ Material icon

| `#i-*` | Motif (SSOT mobile-p1) | SF Symbol | Material |
|--------|------------------------|-----------|----------|
| `#i-mappin` | pin path + circle r=2.2 | `mappin.and.ellipse` / kit glyph | `Place` / kit glyph |
| Shell tabs | home / walk / camera / box / user | SF set | Material set |

**Cấm** invent `#i-*` · **cấm** lệch `d=` dual (`GAP-MOB-ICON-*`).

## Copy VN (SSOT — parity dual)

| Key | Copy |
|-----|------|
| CTA | **Ghim vị trí hiện tại** |
| Toast OK | **Đã ghim vị trí hiện tại · {live Route} · ±N m** (bind active session route + accuracy · empty = `Chưa có ca đang chạy` · **cấm** demoRoute) |
| Modal title | **Định vị bị tắt** |
| Modal body | **Cần vị trí để chấm công / chấm điểm tuần. Mở Cài đặt → Quyền vị trí cho RMMS.** |
| Modal primary | **Sao chép hướng dẫn** |
| Modal secondary | **Để sau** |
| Toast timeout | **Chưa lấy được vị trí. Thử lại.** |
| Copy toast | **Đã sao chép: Cài đặt → Quyền vị trí** |

**Cấm ship:** watermark Gói · device label «iPhone»/«· Android» · «Có mạng» · form Ghi điểm tuần.

## Kit map (đã có — không kit_missing)

| Demo | Kit iOS+Android |
|------|-----------------|
| `.btn-primary.pin-here` / `.map-pin-here` + `#i-mappin` | `LinmPrimaryButton` + `LinmMapPinGlyph` |
| toast | `LinmToast` |
| modal `#modal-gps` | in-app modal (feature) · `LinmPrimaryButton` / `LinmSecondaryButton` |
| secondary Để sau | `LinmSecondaryButton` |

## controlHint ↔ DES

Khớp PO §5 / DA controlHint — UNCLEAR=none.

## Out of pack

| Item | Owner |
|------|-------|
| `#sheet-checkin` / form **Ghi điểm tuần** | sibling `patrol-checkin` · handoff only |
| `POST …/check-ins` · invent `patrol-pin` API | **cấm** |
| Fake lat/lng | **cấm** |

## Gates

| Gate | Artifact | Result |
|------|----------|--------|
| `/mobile-ui-ux-analy` | `ui/ux-analy.md` §1–§9 | PASS |
| `/review-demo-design-mobile` | `ui/review/demo-parity.md` | Must=0 |
| `design_confirm` | autoApprove=ON | **approve** |

## design_confirm

**approve** · autoApprove=ON · dual `ios/`+`android/` · ux-analy · demo-parity Must=0 · `#i-mappin` SSOT mobile-p1 · không form check-in.

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-design-mobile |
| skillVersion | 2026.08.20 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.20.04 |
| generatedAt | 2026-08-21T03:23:01.000Z |
| contentHash | sha256:patrol-pin-control-hint-20260821 |
| bffContentHash | sha256:patrol-pin-mobile-bff-20260821 |

---
<!-- Version meta: skillId=agent-design-mobile schemaVersion=1 -->
