# Design — patrol-pin

| Field | Value |
|-------|-------|
| feature | `patrol-pin` |
| title | [Mobile] [Tuần đường] -> Ghim vị trí hiện tại |
| role | `/agent-design-mobile` |
| status | **confirmed** (autoApprove=ON) |
| packKind | `sheet` |
| changeScope | `edit_page` |
| gap | `GAP-MOB-PIN-PERSIST-01` |
| taskId | `task_4e8a5d46` |
| priorPo | `po/requirement.md` **confirmed** · compact `handoff/po-compact.md` |
| priorDa | `_data-analy/patrol-pin-control-hint.md` + `real-data` **confirmed** |
| updatedAt | `2026-09-12T12:10:00.000Z` |

## § Delta (edit_page · persist)

| | Prior (toast-only) | New (DoD) |
|--|--------------------|-----------|
| GPS + toast pin | giữ | **giữ** |
| Handoff | stub toast «Handoff · Ghi điểm tuần» | **real** sheet `#sheet-handoff-checkin` · `DES-MOB-HANDOFF-CHECKIN` · payload `sessionId`+`LocationFix` |
| Persist | không | sibling POST `patrol/sessions/{id}/check-ins` · **cấm** auto-POST / invent `/pins` |
| Offline | toast only | toast pin · queue handoff · `?offline=1` demo |
| Form check-in | out of pack | **vẫn** out of pack |

## reviewUrl (dual — REQUIRED)

| Platform | Path | reviewUrl |
|----------|------|-----------|
| iOS hub | `ui/prototype/ios/index.html` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-pin/ui/prototype/ios/index.html` |
| iOS map | same + `?surface=map` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-pin/ui/prototype/ios/index.html?surface=map` |
| Android hub | `ui/prototype/android/index.html` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-pin/ui/prototype/android/index.html` |
| Android map | same + `?surface=map` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-pin/ui/prototype/android/index.html?surface=map` |

Demo states: `?deny=1` · `?timeout=1` · `?offline=1` (cùng dual). **peerStdUrl:** — (native · **cấm** `mfeStdUrl`). **real_view_parity:** `v1` keep hub+map.

## Frame / chrome

| | iOS | Android |
|--|-----|---------|
| Frame | 390×844 | 412×915 |
| Title | Large title **Tuần đường** / **Bản đồ ca** | TopAppBar 22 |
| Shell | Tab 5 giữ · index Tuần đường | NavigationBar 5 · cùng index |
| pack tabs | **none** — **cấm** invent segment (`GAP-TAB-01`) | same |
| formPattern | **Sheet handoff** (payload only) · FormMode none trên pack | same |

## DES table

| DES | Zone | iOS | Android | Notes |
|-----|------|-----|---------|-------|
| `DES-MOB-CI-PIN-HERE` | CTA Ghim hub `#sc-patrol-home` + map `#sc-patrol-map` | `LinmPrimaryButton` + `#i-mappin` | same | `pinHereCheckin()` · size ≥16 |
| `DES-MOB-GPS-DENY` | Modal deny `#modal-gps` | in-app card | Material dialog card | **cấm** `UIAlert` / `AlertDialog` · **không** handoff |
| `DES-MOB-HANDOFF-CHECKIN` | Sheet `#sheet-handoff-checkin` | bottom sheet | Material bottom sheet | title **Ghi điểm tuần** · meta route±m · **Tiếp tục** / **Để sau** · **cấm** form fields |
| Toast success | Banner | `LinmToast` | same | `Đã ghim vị trí hiện tại · {route} · ±N m` · **trước** handoff |
| Toast timeout | Banner | `LinmToast` | same | `Chưa lấy được vị trí. Thử lại.` · **không** handoff |
| Toast offline queue | Banner | `LinmToast` | same | `Đã lưu ghim · sẽ mở Ghi điểm tuần khi có mạng` |
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
| Hint | **Sau khi ghim, mở Ghi điểm tuần với vị trí vừa lấy.** |
| Toast OK | **Đã ghim vị trí hiện tại · {live Route} · ±N m** |
| Modal title | **Định vị bị tắt** |
| Modal body | **Cần vị trí để chấm công / chấm điểm tuần. Mở Cài đặt → Quyền vị trí cho RMMS.** |
| Modal primary | **Sao chép hướng dẫn** |
| Modal secondary | **Để sau** |
| Toast timeout | **Chưa lấy được vị trí. Thử lại.** |
| Copy toast | **Đã sao chép: Cài đặt → Quyền vị trí** |
| Handoff title | **Ghi điểm tuần** |
| Handoff meta | **Lý trình · {route}** · **Vị trí · ±N m** |
| Handoff primary | **Tiếp tục** |
| Handoff secondary | **Để sau** |
| Toast continue | **Đã mở Ghi điểm tuần** |
| Toast offline | **Đã lưu ghim · sẽ mở Ghi điểm tuần khi có mạng** |

**Cấm ship:** watermark Gói · device label · «Có mạng» · form Ghi điểm tuần · stub «Handoff · …».

## Kit map (đã có — không kit_missing)

| Demo | Kit iOS+Android |
|------|-----------------|
| `.btn-primary.pin-here` / `.map-pin-here` + `#i-mappin` | `LinmPrimaryButton` + `LinmMapPinGlyph` |
| toast | `LinmToast` |
| modal `#modal-gps` | in-app modal · `LinmPrimaryButton` / `LinmSecondaryButton` |
| sheet `#sheet-handoff-checkin` | bottom sheet chrome · primary/secondary buttons · **không** form kit |
| secondary Để sau | `LinmSecondaryButton` |

## controlHint ↔ DES

Khớp DA controlHint + PO § Delta persist — UNCLEAR=none · hash skip · **cấm** re-scan demo.

## Out of pack

| Item | Owner |
|------|-------|
| Form fields **Ghi điểm tuần** / MatchOk / PlanPointLabel | sibling `patrol-checkin` |
| `POST …/check-ins` | sibling · pin = handoff payload only |
| invent `patrol-pin` / `/pins` API | **cấm** |
| Fake lat/lng · auto-POST từ pin | **cấm** |

## Gates

| Gate | Artifact | Result |
|------|----------|--------|
| `/mobile-ui-ux-analy` | `ui/ux-analy.md` §1–§9 | PASS |
| `/review-demo-design-mobile` | `ui/review/demo-parity.md` | Must=0 |
| `design_confirm` | autoApprove=ON | **approve** |

## design_confirm

**approve** · autoApprove=ON · dual `ios/`+`android/` · real handoff sheet · GPS+toast giữ · form check-in out of pack · ux-analy · demo-parity Must=0.

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-design-mobile |
| skillVersion | 2026.08.20 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.20.04 |
| generatedAt | 2026-09-12T12:10:00.000Z |
| contentHash | sha256:patrol-pin-control-hint-20260912-persist |
| bffContentHash | sha256:patrol-pin-mobile-bff-20260912-persist |
| changeScope | edit_page |
| gapId | GAP-MOB-PIN-PERSIST-01 |

---
<!-- Version meta: skillId=agent-design-mobile schemaVersion=1 -->
