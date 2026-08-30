# Design — incident-create

| Field | Value |
|-------|-------|
| feature | `incident-create` |
| title | [Mobile] Ghi sự cố |
| role | `/agent-design-mobile` |
| status | **confirmed** (autoApprove=ON) |
| packKind | **`screen`** (PO chốt · đóng GAP-MOB-INC-CREATE-PACK-01 · **cấm** sheet chrome / `#sheet-incident`) |
| changeScope | `new_page` |
| taskId | `task_706e535d` |
| priorPo | `po/requirement.md` **confirmed** · contentHash `sha256:incident-create-po-requirement-20260829` |
| priorDa | `_data-analy/incident-create-control-hint.md` + `incident-create-real-data.md` **confirmed** · hash skip · **cấm** re-scan (`GAP-DES-DEMO-RESCAN-01`) |
| contentHash | `sha256:incident-create-control-hint-20260829` |
| realDataHash | `sha256:incident-create-real-data-20260829` |
| updatedAt | `2026-08-29T00:45:00.000Z` |

## reviewUrl (dual — REQUIRED)

| Platform | Path | reviewUrl |
|----------|------|-----------|
| iOS | `ui/prototype/ios/index.html` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/incident-create/ui/prototype/ios/index.html` |
| iOS GPS deny | same + `?deny=1` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/incident-create/ui/prototype/ios/index.html?deny=1` |
| iOS pick toast | same + `?pick=1` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/incident-create/ui/prototype/ios/index.html?pick=1` |
| Android | `ui/prototype/android/index.html` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/incident-create/ui/prototype/android/index.html` |
| Android GPS deny | same + `?deny=1` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/incident-create/ui/prototype/android/index.html?deny=1` |
| Android pick toast | same + `?pick=1` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/incident-create/ui/prototype/android/index.html?pick=1` |
| Workflow (ref) | mobile-p1 `#sc-inc-form` | optional · hash skip cite only |

**Cấm** `mfeStdUrl` / `yarn start:std` / port 9301.

## Frame / chrome

| | iOS | Android |
|--|-----|---------|
| Frame | 390×844 | 412×915 |
| Back | `#i-chevron-left` + label **Thông tin tài sản** | icon-btn chevron only (parity OK) |
| Title | inline **Ghi sự cố** 17 | TopAppBar **Ghi sự cố** ~20 |
| Shell | Tab 5 · tab **`home`** (Trang Chủ) active | NavigationBar 5 · cùng index |
| pack tabs | **none** — **cấm** invent segment (`GAP-TAB-01`) | same |
| Surface | **full screen** `#sc-inc-form` — **cấm** bottom-sheet | same |

## DES table

| DES | Zone | iOS | Android | Notes |
|-----|------|-----|---------|-------|
| `DES-MOB-INC-FORM` | Screen owner `#sc-inc-form` | push sau pick / asset-type | same | `data-tab="home"` |
| WalletCard | TÀI SẢN ĐÃ CHỌN | `LinmWalletCard` | same | Cầu · BRIDGE · Kết cấu |
| `DES-MOB-INC-KIND` | Pill Hư / Mất / Hỏng | `LinmSegment` / pills | same | single · default **Hư** |
| CheckboxList | BRIDGE CHK | `chk-row` | same | `asset-kcht-32` · GAP-MOB-INC-CREATE-CHK-01 |
| PhotoRow | Ảnh hiện trường | slots + camera | same | attach |
| Camera slot | `#i-camera` | `LinmIconButton` | same | `openCapture('inc-form')` |
| `LinmListRow` AI | Nhận diện từ ảnh | label 13 / value ≥16 | same | empty SSOT · detect bind |
| Loc field | Vị trí đã chốt * | TextField readonly | same | GPS · **cấm** fake |
| Severity | Mức độ | `LinmSelect` | same | 4 options · default **Cao** |
| Description | Mô tả | `LinmTextArea` | same | placeholder SSOT |
| Create | Tạo vấn đề | `LinmPrimaryButton` | same | POST incident · toast SC-* |
| Cam | Thu thập bằng camera | `LinmSecondaryButton` | same | `go('cam-patrol')` · shared |
| Assign | Giao việc xử lý | `LinmSecondaryButton` | same | `go('estimate')` · sibling |
| Draft | Lưu nháp mất sóng | `LinmSecondaryButton` | same | offline · reuse `patrol-offline` |
| Toast OK / Draft / Pick | banner | `LinmToast` | same | **cấm** system alert |
| `DES-MOB-GPS-DENY` | `#modal-gps` | in-app modal | Material dialog card | deny · **chặn** Create |
| Entry pick | banner + asset grid | reuse asset-types | same | `startIncidentPick()` · **không** slug riêng · 3 cột **stretch cùng height** · pict 36 `LinmAssetKchtPict` (`asset-kcht-icons.js`) · **cấm** GridView / `square.grid.2x2` mọi ô |

## SF ↔ Material icon

| `#i-*` | Motif (SSOT mobile-p1) | SF Symbol | Material |
|--------|------------------------|-----------|----------|
| `#i-chevron-left` | `M15 5l-7 7 7 7` | `chevron.left` | `ArrowBack` |
| `#i-camera` | body + circle r=3.5 | `camera` | `PhotoCamera` |
| `#i-home` | house path | `house` | `Home` |
| `#i-mappin` | pin + circle r=2.2 | kit / `mappin` | `Place` |
| `#i-warning` | triangle | `exclamationmark.triangle` | `Warning` |
| `#i-wrench` | wrench path | `wrench` | `Build` |
| `#i-person` | person | `person` | `Person` |

**Cấm** invent `#i-*` · **cấm** lệch `d=` dual (`GAP-MOB-ICON-*`).

## Copy VN (SSOT — parity dual)

| Key | Copy |
|-----|------|
| Title | **Ghi sự cố** |
| Back (iOS) | **Thông tin tài sản** |
| Wallet k | **TÀI SẢN ĐÃ CHỌN** |
| Wallet title / sub | **Cầu** / **BRIDGE · Kết cấu** |
| Kind label | **Loại ghi nhận** |
| Kind pills | **Hư** / **Mất** / **Hỏng** |
| Chk label | **Checklist theo loại** |
| Chk BRIDGE | hư·Khe co giãn · hư·Lan can · hỏng·Gối / dầm · hỏng·Thoát nước mặt cầu |
| Photo label | **Ảnh hiện trường** |
| AI row | **Nhận diện từ ảnh** / **Chưa có ảnh — chụp để phân loại** |
| Loc label / value | **Vị trí đã chốt *** / **QL.1 · Km 1556+080 · định vị ±5 m** |
| Severity label | **Mức độ** |
| Severity options | Nghiêm trọng · **Cao** (default) · Trung bình · Thấp |
| Desc label / ph | **Mô tả** / **Mô tả hiện trường…** |
| Primary | **Tạo vấn đề** |
| Secondary | **Thu thập bằng camera** · **Giao việc xử lý** · **Lưu nháp mất sóng** |
| Toast OK | **Đã tạo vấn đề SC-2418 · gắn tài sản đã chọn** |
| Toast draft | **Nháp mất sóng** |
| Toast pick | **Chọn loại tài sản để ghi sự cố** |
| Modal title | **Định vị bị tắt** |
| Modal body | **Cần vị trí để chấm công / chấm điểm tuần. Mở Cài đặt → Quyền vị trí cho RMMS.** |
| Modal primary | **Sao chép hướng dẫn** |
| Modal secondary | **Để sau** |
| Tabs | Trang Chủ · Tuần đường · Vấn đề · Công việc · Tôi |

**Cấm ship:** watermark Gói · device label «iPhone»/«· Android» · «Có mạng» · fake lat/lng · sheet pack chrome · `#sheet-incident`.

## Kit map

| Demo | Kit iOS+Android | Notes |
|------|-----------------|-------|
| `.nav-bar` / `.top-bar` | `LinmTopBar` | leading chevron · iOS back text |
| `.wallet-card` | `LinmWalletCard` | asset bind |
| `.kind-pills` | `LinmSegment` / pills | `DES-MOB-INC-KIND` |
| `.photo-row` / `.photo-slot` | **PhotoRow** pattern | `kit_missing_confirm` **approve** |
| `.chk-row` | **CheckboxList** pattern | `kit_missing_confirm` **approve** · **cấm** invent API |
| `.row` card-group | `LinmListRow` | AI empty / detect |
| `.field` input/select/textarea | TextField readonly · `LinmSelect` · `LinmTextArea` | label 13 · value ≥16 |
| `.section-label` | SectionLabel Text 13 | |
| `.btn-primary` | `LinmPrimaryButton` | Create · `isBusy` |
| `.btn-secondary` | `LinmSecondaryButton` | Cam / Assign / Draft |
| toast | `LinmToast` | OK / Draft / Pick |
| `#modal-gps` | feature modal reuse | **cấm** `UIAlert` / `AlertDialog` |
| Tab 5 | `LinmTabBar` / NavigationBar | giữ shell · **home** active |
| Home quick / FAB | `LinmQuickItem` / FAB | entry · **không** reimplement trên pack |

### kit_missing_confirm (PhotoRow · CheckboxList)

**approve** · autoApprove=ON · PhotoRow = horizontal media slots + camera `#i-camera` · CheckboxList = `chk-row` BRIDGE local · **không** tạo package `LinmPhotoRow` / `LinmCheckboxList` bắt buộc P1 nếu kit chưa ship — Dev compose từ kit Image / IconButton / Toggle theo map · **cấm** invent tên kit lạ ngoài map.

## controlHint ↔ DES

Khớp PO §5 / DA controlHint — UNCLEAR=**none**. Create = POST incident · Draft = local offline · Kind/Photo/Detect/Checklist/Pick = cùng slug (`GAP-MOB-ACT-07`). Entry pick **không** enqueue.

## BFF (Design note · SA chi tiết)

| Zone | Method · Path |
|------|----------------|
| Catalog loại TS (pick + checklist host) | `GET integration/asset-types` |
| Prefill ca / tuyến (loc Route-Km) | `GET patrol/sessions` (optional) |
| Optional media | `POST ai-vision/uploads` (+ PUT object) |
| Detect | `POST ai-vision/detect` |
| Create | `POST incident/incidents` |
| GPS / camera / Kind / Checklist / Draft | device · local · `patrol-offline` |

**Cấm** invent `api/v1/incident-create` · ERP.* · `mfeStdUrl`.

## Out of pack

| Item | Owner |
|------|-------|
| `#sheet-incident` · `field-reflect` · `incident-list` CRUD · web Kind F | sibling · **cấm** gộp |
| media[] trên CreateIncidentRequest | SA · GAP-MOB-INC-CREATE-MEDIA-01 |
| Checklist API dedicated | **cấm** · GAP-MOB-INC-CREATE-CHK-01 local |
| Bottom-sheet chrome | **cấm** (pack = screen) |
| Step 4b / migration | SA — **cấm** Design |

## Gates

| Gate | Artifact | Result |
|------|----------|--------|
| `/mobile-ui-ux-analy` | `ui/ux-analy.md` §1–§9 | **PASS** |
| html-to-native-map | `ui/html-to-native-map.md` | **PASS** |
| `/review-demo-design-mobile` | `ui/review/demo-parity.md` | Must=**0** |
| `kit_missing_confirm` | PhotoRow · CheckboxList | **approve** |
| `design_confirm` | autoApprove=ON | **approve** |

## design_confirm

**approve** · autoApprove=ON · dual `ios/`+`android/` · ux-analy §1–§9 · demo-parity Must=0 · packKind=`screen` · Create=POST incident · Draft=offline · hash skip (no re-scan) · GAP-MOB-INC-CREATE-PACK-01 closed · **cấm** `#sheet-incident`.

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-design-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-08-29T00:45:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:incident-create-control-hint-20260829 |
| realDataHash | sha256:incident-create-real-data-20260829 |
| demoHash | sha256:mobile-p1-sc-inc-form-20260829 |
| ctxHash | sha256:incident-create-ctx-20260829 |
| poHash | sha256:incident-create-po-requirement-20260829 |

---
<!-- Version meta: skillId=agent-design-mobile skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
