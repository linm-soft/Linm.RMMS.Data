# Design — patrol-checkin

| Field | Value |
|-------|-------|
| feature | `patrol-checkin` |
| title | [Mobile] [Tuần đường] -> Ghi điểm tuần |
| role | `/agent-design-mobile` |
| status | **confirmed** (autoApprove=ON) |
| packKind | `sheet` |
| changeScope | `new_page` |
| taskId | `task_34eb58bb` |
| priorPo | `po/requirement.md` **confirmed** |
| priorDa | `_data-analy/patrol-checkin-control-hint.md` + `patrol-checkin-real-data.md` **confirmed** · contentHash `sha256:patrol-checkin-control-hint-20260828` |
| hashSkip | **yes** · **cấm** re-scan demo (`GAP-DES-DEMO-RESCAN-01`) · inventory từ controlHint + real-data §A+§B |
| updatedAt | `2026-08-28T20:05:00.000Z` |

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
| `DES-MOB-LOC-MISMATCH` | match banner | Banner ok/warn | same colors platform | gate primary |
| `DES-MOB-LEAVE` | `#modal-leave` | in-app modal | Material dialog card | **cấm** system alert |
| `DES-MOB-GPS-DENY` | `#modal-gps` | reuse pin | same | **cấm** `UIAlert` / `AlertDialog` |
| `DES-MOB-CI-DETAIL` | `#sc-checkin-detail` | `LinmTopBar` + rows | same | back **Ca** · title **Ghi điểm tuần** |

## SF ↔ Material icon

| `#i-*` | Motif (SSOT mobile-p1) | SF Symbol | Material |
|--------|------------------------|-----------|----------|
| `#i-camera` | path `M4 8h3l2-2…` + circle r=3.5 | `camera` / kit glyph | `PhotoCamera` / kit glyph |
| `#i-chevron-left` | chevron | `chevron.left` | `ArrowBack` |
| Shell tabs | home / walk / camera / box / user | SF set | Material set |

**Cấm** invent `#i-*` · **cấm** lệch `d=` dual (`GAP-MOB-ICON-*`).

## Copy VN (SSOT — parity dual)

| Key | Copy |
|-----|------|
| sheetTitle / detailTitle | **Ghi điểm tuần** |
| navCancel / btnCancelFooter | **Hủy** |
| navSave | **Lưu** |
| matchOk | **Đúng điểm · {d} m · định vị ±{a} m · ghim tự động** |
| matchBad | **Sai điểm · 86 m · gần Km 1556+000 — chặn Lưu** |
| planPoint | **Km 1561+134 · Phước Dinh** (demo SSOT) |
| routeChainage | **QL.1 · Km 1561+134** |
| gpsPinned | **11.6030, 109.0160 · ±4 m** (demo · native = live GPS) |
| distOk | **18 m · Đúng điểm** |
| distBad | **86 m · Sai điểm** |
| content | **Mặt đường khô, lan can đạt** |
| photos label | **Ảnh** (Android parity thêm section-label) |
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

**Cấm ship:** watermark Gói · device label «iPhone»/«· Android» · «Có mạng» · pin CTA / map host · fake lat/lng.

## Kit map (đã có — không kit_missing)

| Demo | Kit iOS+Android |
|------|-----------------|
| `#sheet-checkin` | `LinmBottomSheet` |
| readonly fields | `LinmTextField` |
| Nội dung | `LinmTextArea` |
| PhotoRow + `#i-camera` | PhotoRow / `LinmIconButton` |
| Ghi nhận điểm tuần | `LinmPrimaryButton` |
| Hủy footer | `LinmSecondaryButton` |
| toast | `LinmToast` |
| leave / GPS deny | in-app modal · Primary / Secondary |
| detail top bar | `LinmTopBar` |

## controlHint ↔ DES

Khớp PO §5 / DA controlHint — UNCLEAR=none. Android **Ảnh** section-label = iOS SSOT parity (PO §7).

## Out of pack

| Item | Owner |
|------|-------|
| CTA / form **Ghim vị trí hiện tại** | sibling `patrol-pin` · handoff only |
| Map host / tracks | `patrol-map` |
| Invent `api/v1/patrol-checkin` | **cấm** |
| POST check-ins controller | **GAP-MOB-BFF-01** · SA/TL T-BE · P1 local + `patrol-offline` |

## Gates

| Gate | Artifact | Result |
|------|----------|--------|
| `/mobile-ui-ux-analy` | `ui/ux-analy.md` §1–§9 | PASS |
| `/review-demo-design-mobile` | `ui/review/demo-parity.md` | Must=0 |
| `design_confirm` | autoApprove=ON | **approve** |

## design_confirm

**approve** · autoApprove=ON · dual `ios/`+`android/` · ux-analy · demo-parity Must=0 · `#i-camera` SSOT · match gate + leave in-app · Android label Ảnh · hash skip (không re-scan DemoRoot).

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-design-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.29.4 |
| generatedAt | 2026-08-28T20:05:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:patrol-checkin-control-hint-20260828 |
| bffContentHash | sha256:patrol-checkin-mobile-bff-20260828 |

---
<!-- Version meta: skillId=agent-design-mobile skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.29.4 versionGate=rechecked -->
