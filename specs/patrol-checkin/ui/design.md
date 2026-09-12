# Design — patrol-checkin

| Field | Value |
|-------|-------|
| feature | `patrol-checkin` |
| title | [Mobile] [Tuần đường] -> Ghi điểm tuần |
| role | `/agent-design-mobile` |
| status | **confirmed** (autoApprove=ON) |
| packKind | `sheet` |
| changeScope | `edit_page` |
| taskId | `task_e4a48d29` |
| priorPo | `po/requirement.md` + `handoff/po-compact.md` **confirmed** · `task_07ab9a33` |
| priorDa | `_data-analy/patrol-checkin-control-hint.md` + `patrol-checkin-real-data.md` **confirmed** · contentHash `sha256:patrol-checkin-control-hint-20260912-edit` |
| hashSkip | **yes** · **cấm** re-scan demo (`GAP-DES-DEMO-RESCAN-01`) · inventory từ controlHint + real-data §A+§B |
| updatedAt | `2026-09-12T12:55:00.000Z` |

## § Delta Current vs New (`edit_page`)

| ID | Current (prior design / native) | New (DoD) | Surface |
|----|--------------------------------|-----------|---------|
| GAP-MOB-CI-PHOTO-UP-01 | PhotoRow `photoLocalIds` local | capture → FileService `files/*` → `attachmentId[]` · preview `GET files/{id}/object` | PhotoRow · detail |
| GAP-MOB-CI-PLAN-BE-01 | plan≈GPS → always match | match vs **BE plan-points** khi live · haversine · **cấm** plan=GPS SSOT | banner · Điểm KH · dist |
| GAP-MOB-CI-FAKE-GPS-01 | live GPS OK | giữ live · **cấm** fake | Định vị ghim |
| GAP-MOB-BFF-01 | POST check-ins GAP | **closed/live** · body `attachmentId[]` | save |
| GAP-MOB-BFF-FILE-01 | — | nếu NuGet thiếu → offline queue · **cấm** fake 200 | PhotoRow |
| UI zones/kit | dual mock | **giữ** · không redesign zone id / kit / copy VN | dual prototype |

## reviewUrl (dual — REQUIRED)

| Platform | Path | reviewUrl |
|----------|------|-----------|
| iOS sheet | `ui/prototype/ios/index.html` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-checkin/ui/prototype/ios/index.html` |
| iOS mismatch | same + `?mismatch=1` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-checkin/ui/prototype/ios/index.html?mismatch=1` |
| iOS GPS deny | same + `?deny=1` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-checkin/ui/prototype/ios/index.html?deny=1` |
| iOS detail | same + `?surface=detail` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-checkin/ui/prototype/ios/index.html?surface=detail` |
| Android sheet | `ui/prototype/android/index.html` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-checkin/ui/prototype/android/index.html` |
| Android mismatch | same + `?mismatch=1` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-checkin/ui/prototype/android/index.html?mismatch=1` |
| Android GPS deny | same + `?deny=1` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-checkin/ui/prototype/android/index.html?deny=1` |
| Android detail | same + `?surface=detail` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-checkin/ui/prototype/android/index.html?surface=detail` |

**Cấm** `mfeStdUrl` / `yarn start:std`.

## Frame / chrome

| | iOS | Android |
|--|-----|---------|
| Frame | 390×844 | 412×915 |
| Sheet title | **Ghi điểm tuần** 17 | same |
| Shell | Tab 5 giữ · index Tuần đường | NavigationBar 5 · cùng index |
| pack tabs | **none** — **cấm** invent segment (`GAP-TAB-01`) | same |

## DES table

| DES | Zone | iOS | Android | Notes |
|-----|------|-----|---------|-------|
| `DES-MOB-PAT-CHECKIN-SHEET` | `#sheet-checkin` | `LinmBottomSheet` | same | Hủy / Lưu · fields · PhotoRow · primary |
| `DES-MOB-LOC-MISMATCH` | `#ci-match-banner` | Banner ok/warn | same | gate primary · vs **BE plan** khi có |
| `DES-MOB-LEAVE` | `#modal-leave` | in-sheet overlay | `Dialog` trên sheet | **cấm** system · **cấm** under-sheet |
| `DES-MOB-GPS-DENY` | `#modal-gps` | reuse in-sheet | `Dialog` wrap | **cấm** `UIAlert` / `AlertDialog` |
| `DES-MOB-CI-DETAIL` | `#sc-checkin-detail` | `LinmTopBar` + rows | same | photo preview JWT object |

## SF ↔ Material icon

| `#i-*` | Motif (SSOT mobile-p1) | SF Symbol | Material |
|--------|------------------------|-----------|----------|
| `#i-camera` | path `M4 8h3l2-2…` + circle r=3.5 | `camera` / kit glyph | `PhotoCamera` / kit glyph |
| `#i-chevron-left` | chevron | `chevron.left` | `ArrowBack` |
| Shell tabs | home / walk / camera / box / user | SF set | Material set |

**Cấm** invent `#i-*` · **cấm** lệch `d=` dual (`GAP-MOB-ICON-*`).

## Copy VN (SSOT — parity dual · giữ)

| Key | Copy |
|-----|------|
| sheetTitle / detailTitle | **Ghi điểm tuần** |
| navCancel / btnCancelFooter | **Hủy** |
| navSave | **Lưu** |
| matchOk | **Đúng điểm · {d} m · định vị ±{a} m · ghim tự động** |
| matchBad | **Sai điểm · 86 m · gần Km 1556+000 — chặn Lưu** |
| planPoint | **Km 1561+134 · Phước Dinh** (demo SSOT · native = BE plan / session label) |
| routeChainage | **QL.1 · Km 1561+134** |
| gpsPinned | **11.6030, 109.0160 · ±4 m** (demo · native = **live GPS only**) |
| distOk | **18 m · Đúng điểm** |
| distBad | **86 m · Sai điểm** |
| content | **Mặt đường khô, lan can đạt** |
| photos label | **Ảnh** (Android parity section-label) |
| btnSave | **Ghi nhận điểm tuần** |
| leaveTitle | **Bỏ thay đổi?** |
| leaveBody | **Nội dung chưa lưu sẽ mất.** |
| leaveConfirm | **Bỏ thay đổi** |
| leaveKeep | **Tiếp tục sửa** |
| toastOk | **Đã ghi điểm tuần · không đổi vị trí** / **· điểm tuần thứ N** |
| toastBlock | **Chặn — không đúng điểm kế hoạch** |
| gpsDeny title | **Định vị bị tắt** |
| gpsDeny body | **Cần vị trí để chấm công / chấm điểm tuần. Mở Cài đặt → Quyền vị trí cho RMMS.** |
| detail saved | **Đã lưu · {time}** |
| back | **Ca** |

**Cấm ship:** watermark Gói · device label · «Có mạng» · pin CTA / map host · fake lat/lng · plan=GPS SSOT.

## Kit map (đã có — không kit_missing)

| Demo | Kit iOS+Android |
|------|-----------------|
| `#sheet-checkin` | `LinmBottomSheet` |
| readonly fields | `LinmTextField` |
| Nội dung | `LinmTextArea` |
| PhotoRow + `#i-camera` | PhotoRow / `LinmIconButton` · bind `attachmentId[]` |
| Ghi nhận điểm tuần | `LinmPrimaryButton` |
| Hủy footer | `LinmSecondaryButton` |
| toast | `LinmToast` |
| leave / GPS deny | in-sheet (iOS) / `Dialog` (Android) |
| detail top bar | `LinmTopBar` |

## controlHint ↔ DES

Khớp DA controlHint + PO delta — UNCLEAR=none. Zones/kit/copy **không** đổi. Bind delta = FileService + plan-points BE.

## Out of pack

| Item | Owner |
|------|-------|
| CTA / form **Ghim vị trí hiện tại** | sibling `patrol-pin` |
| Map host / tracks | `patrol-map` |
| Invent `api/v1/patrol-checkin` | **cấm** |
| plan-points path Kind E | **GAP-MOB-CI-PLAN-BE-01** · SA chốt |
| File NuGet thiếu | **GAP-MOB-BFF-FILE-01** · offline queue |

## Gates

| Gate | Artifact | Result |
|------|----------|--------|
| `/mobile-ui-ux-analy` | `ui/ux-analy.md` §1–§9 | PASS |
| dual prototype | `ui/prototype/ios|android` | **giữ** · delta bind note |
| `design_confirm` | autoApprove=ON | **approve** |

## design_confirm

**approve** · autoApprove=ON · dual giữ · edit_page delta FileService + plan BE · hash skip · **cấm** re-scan DemoRoot · phase_to sa.

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-design-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.29.4 |
| generatedAt | `2026-09-12T12:55:00.000Z` |
| versionGate | rechecked |
| contentHash | sha256:patrol-checkin-control-hint-20260912-edit |
| realDataHash | sha256:patrol-checkin-real-data-20260912-edit |

---
<!-- Version meta: skillId=agent-design-mobile skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.29.4 versionGate=rechecked contentHash=sha256:patrol-checkin-control-hint-20260912-edit -->
