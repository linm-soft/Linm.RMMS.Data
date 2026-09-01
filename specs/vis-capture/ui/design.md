# Design — vis-capture

| Field | Value |
|-------|-------|
| feature | `vis-capture` |
| title | [Mobile] [Vấn đề] -> Nhận diện mặt đường |
| role | `/agent-design-mobile` |
| status | **confirmed** (autoApprove=ON) |
| packKind | **`screen`** (PO chốt · đóng GAP-MOB-VIS-PACK-01 · **cấm** sheet chrome / `#sheet-*`) |
| changeScope | `new_page` |
| taskId | `task_27b1bf39` |
| priorPo | `po/requirement.md` **confirmed** |
| priorDa | `_data-analy/vis-capture-control-hint.md` + `vis-capture-real-data.md` **confirmed** · hash skip · **cấm** re-scan (`GAP-DES-DEMO-RESCAN-01`) |
| contentHash | `sha256:vis-capture-control-hint-20260829` |
| realDataHash | `sha256:vis-capture-real-data-20260829` |
| updatedAt | `2026-08-29T09:00:00.000Z` |

## reviewUrl (dual — REQUIRED)

| Platform | Path | reviewUrl |
|----------|------|-----------|
| iOS | `ui/prototype/ios/index.html` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/vis-capture/ui/prototype/ios/index.html` |
| iOS GPS deny | same + `?deny=1` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/vis-capture/ui/prototype/ios/index.html?deny=1` |
| iOS GPS gate | same + `?acc=35` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/vis-capture/ui/prototype/ios/index.html?acc=35` |
| Android | `ui/prototype/android/index.html` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/vis-capture/ui/prototype/android/index.html` |
| Android GPS deny | same + `?deny=1` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/vis-capture/ui/prototype/android/index.html?deny=1` |
| Android GPS gate | same + `?acc=35` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/vis-capture/ui/prototype/android/index.html?acc=35` |

**Cấm** `mfeStdUrl` / `yarn start:std` / port 9301.

## Frame / chrome

| | iOS | Android |
|--|-----|---------|
| Frame | 390×844 | 412×915 |
| Back | `#i-chevron-left` + label **Vấn đề** | icon-btn chevron only (parity OK) |
| Title | inline **Nhận diện mặt đường** 17 | TopAppBar **Nhận diện mặt đường** ~20 |
| Shell | Tab 5 · tab **`incident`** (Vấn đề) active | NavigationBar 5 · cùng index |
| pack tabs | **none** — **cấm** invent segment (`GAP-TAB-01`) | same |
| Surface | **full screen** `#sc-vis-capture` — **cấm** bottom-sheet | same · **có** section «Ảnh hiện trường» + «Bỏ qua» (đóng **GAP-MOB-VIS-DUAL-01**) |

## DES table

| DES | Zone | iOS | Android | Notes |
|-----|------|-----|---------|-------|
| `DES-MOB-VIS-CAPTURE` | Screen owner `#sc-vis-capture` | push từ `incident-list` banner | same | `data-tab="incident"` |
| SectionLabel | **Ảnh hiện trường** | 13 uppercase | same · **bắt buộc** | dual parity |
| PhotoRow | slots + `#i-camera` | still capture | same | `openCapture('vision')` · **không** continuous finder |
| `LinmListRow` Loc | Vị trí đã chốt / live session (HTML demo: QL.1 · Km 1556+050) | label 13 / value ≥16 | same | live `GET patrol/sessions` active · empty=`patrol.empty.active.route` · **cấm** demoLoc seed |
| `LinmListRow` Acc | Sai số định vị / ±{n} m | same | same | device `AccuracyM` · gate ≤ 30 |
| `LinmListRow` Class | Phân loại / {DefectClass} | same | same | bind detect |
| `LinmListRow` + Badge Sev | Mức / {Severity} | badge orange = Cao | same | severity map |
| Attach | Gắn sự cố | `LinmPrimaryButton` | same | POST incident · toast |
| Skip | Bỏ qua | `LinmSecondaryButton` | same · **bắt buộc** | local dismiss |
| Toast OK | Đã gắn sự cố | `LinmToast` | same | **cấm** system alert |
| Toast GPS block | Sai số… ≤ 30 m | `LinmToast` | same | chặn detect |
| `DES-MOB-GPS-DENY` | `#modal-gps` | in-app modal | Material dialog card | deny · **chặn** detect + Gắn |

## SF ↔ Material icon

| `#i-*` | Motif (SSOT mobile-p1) | SF Symbol | Material |
|--------|------------------------|-----------|----------|
| `#i-chevron-left` | `M15 5l-7 7 7 7` | `chevron.left` | `ArrowBack` |
| `#i-camera` | body + lens r=3.5 | `camera` | `PhotoCamera` |
| `#i-warning` | triangle | `exclamationmark.triangle` | `Warning` |
| `#i-home` | house path | `house` | `Home` |
| `#i-mappin` | pin + circle r=2.2 | kit / `mappin` | `Place` |
| `#i-wrench` | wrench path | `wrench` | `Build` |
| `#i-person` | person | `person` | `Person` |

**Cấm** invent `#i-*` · **cấm** lệch `d=` dual (`GAP-MOB-ICON-*`).

## Copy VN (SSOT — parity dual)

| Key | Copy |
|-----|------|
| Title | **Nhận diện mặt đường** |
| Back (iOS) | **Vấn đề** |
| Section | **Ảnh hiện trường** |
| Photo filled | **Ảnh** |
| Row Loc | **Vị trí đã chốt** / **QL.1 · Km 1556+050** |
| Row Acc | **Sai số định vị** / **±4 m** (demo) |
| Row Class | **Phân loại** / **Nứt dọc** |
| Row Sev | **Mức** / **Cao** + badge **Cao** |
| Primary | **Gắn sự cố** |
| Secondary | **Bỏ qua** |
| Toast OK | **Đã gắn sự cố** |
| Toast GPS block | **Sai số định vị quá lớn · cần ≤ 30 m trước khi nhận diện** |
| Modal title | **Định vị bị tắt** |
| Modal body | **Cần vị trí để chấm công / chấm điểm tuần. Mở Cài đặt → Quyền vị trí cho RMMS.** |
| Modal primary | **Sao chép hướng dẫn** |
| Modal secondary | **Để sau** |
| Tabs | Trang Chủ · Tuần đường · Vấn đề · Công việc · Tôi |

**Cấm ship:** watermark Gói · device label «iPhone»/«· Android» · «Có mạng» · tên thuật toán nhận diện · fake lat/lng · sheet pack chrome · continuous finder.

### Severity display map

| Severity | Badge |
|----------|-------|
| Cao | orange |
| Nghiêm trọng | red (reuse incident) |
| Trung bình / Thấp | muted / green |

## Kit map

| Demo | Kit iOS+Android | Notes |
|------|-----------------|-------|
| `.nav-bar` / `.top-bar` | `LinmTopBar` | leading chevron |
| `.section-label` | SectionLabel | 13 · dual Android **bắt buộc** |
| `.photo-row` / `.photo-slot` | PhotoRow | still · `#i-camera` · **không** invent kit name |
| `.row` card-group | `LinmListRow` | Loc · Acc · Class · Sev |
| `.badge` | Badge | Severity color map |
| `.btn-primary` | `LinmPrimaryButton` | Gắn sự cố |
| `.btn-secondary` | `LinmSecondaryButton` | Bỏ qua · dual Android **bắt buộc** |
| toast | `LinmToast` | OK / GPS block / camera deny |
| `#modal-gps` | feature modal reuse `DES-MOB-GPS-DENY` | **cấm** `UIAlert` / `AlertDialog` |
| Tab 5 | `LinmTabBar` / NavigationBar | giữ shell · incident active |

### kit_missing_confirm

**none** — TopBar / ListRow / Primary / Secondary / Toast / PhotoRow / Badge / GPS deny modal **đã có** trên map + kit (cam-patrol / field-reflect reuse). PhotoRow = app surface đã map · **không** tạo package mới P1.

## controlHint ↔ DES

Khớp PO §5 / DA controlHint — UNCLEAR=**none**. Attach = POST create + DetectionId · Skip = dismiss local · detect chỉ khi GPS chốt + AccuracyM ≤ 30 · **không** auto-POST trước Gắn · **cấm** tên thuật toán trên UI.

## BFF (Design note · SA chi tiết)

| Zone | Method · Path |
|------|----------------|
| Optional upload | `POST ai-vision/uploads/init` · PUT object · complete |
| Detect | `POST ai-vision/detect` · gate AccuracyM ≤ 30 |
| Prefill Loc | optional `GET patrol/sessions` |
| Attach | `POST incident/incidents` + `DetectionId` |
| GPS / camera / Skip | device · local |

**Cấm** invent `api/v1/vis-capture` · ERP.* · `mfeStdUrl`.

## Out of pack

| Item | Owner |
|------|-------|
| `cam-patrol` continuous finder · `det-hitl` · `incident-create` form · `cam-view` | sibling · **cấm** gộp |
| Score % row | **cấm** P1 (khác cam-patrol demo) |
| Detect engine harden | SA · GAP-MOB-VIS-DETECT-01 · Step 4b |
| Bottom-sheet chrome | **cấm** (pack = screen) |

## Gates

| Gate | Artifact | Result |
|------|----------|--------|
| `/mobile-ui-ux-analy` | `ui/ux-analy.md` §1–§9 | **PASS** |
| html-to-native-map | `ui/html-to-native-map.md` | **PASS** |
| `/review-demo-design-mobile` | `ui/review/demo-parity.md` | Must=**0** |
| `kit_missing_confirm` | — | **none** |
| Dual parity Android | section + Bỏ qua | **PASS** · đóng GAP-MOB-VIS-DUAL-01 |
| `design_confirm` | autoApprove=ON | **approve** |

## design_confirm

**approve** · autoApprove=ON · dual `ios/`+`android/` · ux-analy §1–§9 · demo-parity Must=0 · packKind=`screen` · GPS gate 30 m · Android section+Skip · hash skip (no re-scan).

## Handoff → SA

| Field | Value |
|-------|-------|
| next | `/agent-sa-mobile` · `be/solution-discovery.md` |
| note | GAP-MOB-VIS-DETECT-01 detect engine · giữ path AiVision + Incident · **cấm** invent vis-capture |
| e2eQa | queued `/agent-qa*` — **cấm** e2e ở design |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-design-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-08-29T09:00:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:vis-capture-design-20260829 |
| priorControlHintHash | sha256:vis-capture-control-hint-20260829 |
| priorRealDataHash | sha256:vis-capture-real-data-20260829 |
| priorPoHash | sha256:vis-capture-po-requirement-20260829 |
| taskId | `task_27b1bf39` |

---
<!-- Version meta: skillId=agent-design-mobile skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
