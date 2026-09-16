# Design — field-reflect

| Field | Value |
|-------|-------|
| feature | `field-reflect` |
| title | [Mobile] [Tuần đường] -> Ghi nhận hư hỏng |
| role | `/agent-design-mobile` |
| status | **confirmed** (autoApprove=ON) |
| packKind | **`screen`** (PO chốt · đóng GAP-MOB-FIELD-PACK-01 · **cấm** sheet chrome) |
| changeScope | `edit_page` · gap=`field_reflect_sessions_live_only` · **GAP-MOB-FIELD-SESS-01** |
| taskId | `task_91131e02` |
| priorPo | `po/requirement.md` **confirmed** · `handoff/po-compact.md` |
| priorDa | `_data-analy/field-reflect-control-hint.md` + `field-reflect-real-data.md` **confirmed** · hash skip · **cấm** re-scan (`GAP-DES-DEMO-RESCAN-01`) |
| contentHash | `sha256:43744be6c3dc+field-reflect-sess-live-20260912` |
| realDataHash | `sha256:43744be6c3dc+field-reflect-real-sess-20260912` |
| updatedAt | `2026-09-12T10:50:00.000Z` |

## § Delta Current vs New (`edit_page`)

| ID | Current | New (Design DoD) | Surface |
|----|---------|------------------|---------|
| **GAP-MOB-FIELD-SESS-01** | Proto/default loc luôn QL.1 demo; native `itemsOrDemo` | **Live-only** · `.loaded` bind loc · empty/no-active → empty `row-loc` + banner + toast «Không có ca đang tuần» · `.loadFailed` → empty loc + **toastSessionsFail** «Không tải được ca tuần» · query `?empty=1` / `?fail=1` · **cấm** demo tuyến fallback | locationRow · toastSessionsFail |
| Keep | Kind / Photo / Detect / Severity / CHK / Create / Draft / GPS deny | **không** đổi inventory | — |

## reviewUrl (dual — REQUIRED)

| Platform | Path | reviewUrl |
|----------|------|-----------|
| iOS | `ui/prototype/ios/index.html` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/field-reflect/ui/prototype/ios/index.html` |
| iOS GPS deny | same + `?deny=1` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/field-reflect/ui/prototype/ios/index.html?deny=1` |
| iOS empty session | same + `?empty=1` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/field-reflect/ui/prototype/ios/index.html?empty=1` |
| iOS sessions fail | same + `?fail=1` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/field-reflect/ui/prototype/ios/index.html?fail=1` |
| Android | `ui/prototype/android/index.html` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/field-reflect/ui/prototype/android/index.html` |
| Android GPS deny | same + `?deny=1` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/field-reflect/ui/prototype/android/index.html?deny=1` |
| Android empty session | same + `?empty=1` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/field-reflect/ui/prototype/android/index.html?empty=1` |
| Android sessions fail | same + `?fail=1` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/field-reflect/ui/prototype/android/index.html?fail=1` |

**Cấm** `mfeStdUrl` / `yarn start:std` / port 9301. · **peerStdUrl:** N/A · **real_view_parity:** `v1`

## Frame / chrome

| | iOS | Android |
|--|-----|---------|
| Frame | 390×844 | 412×915 |
| Back | `#i-chevron-left` + label **Tuần đường** | icon-btn chevron only (parity OK) |
| Title | inline **Ghi nhận hư hỏng** 17 | TopAppBar **Ghi nhận hư hỏng** ~20 |
| Shell | Tab 5 · tab **`field`** (Tuần đường) active | NavigationBar 5 · cùng index |
| pack tabs | **none** — **cấm** invent segment (`GAP-TAB-01`) | same |
| Surface | **full screen** `#sc-field-reflect` — **cấm** bottom-sheet | same |

## DES table

| DES | Zone | iOS | Android | Notes |
|-----|------|-----|---------|-------|
| `DES-MOB-FIELD-REFLECT` | Screen owner `#sc-field-reflect` | push từ `patrol-home` | same | `data-tab="field"` |
| `DES-MOB-FIELD-KIND` | Pill Hư / Mất / Hỏng | `LinmKindPills` / Segment | same | single · default **Hư** |
| PhotoRow | Ảnh hiện trường | slots + filled | same | attach |
| Camera slot | `#i-camera` | `LinmIconButton` | same | `openCapture('reflect')` |
| `LinmListRow` detect | Nhận diện / Ổ gà · Mặt đường | label 13 / value ≥16 | same | bind `DefectClass` · empty OK |
| `LinmListRow` + badge | Mức / Cao | badge orange | same | bind `Severity` |
| `LinmListRow` location | Vị trí đã chốt | readonly | same | **live** GET sessions + GPS · empty `—` nếu fail/empty · **cấm** fake / itemsOrDemo |
| CheckboxList | PAVEMENT CHK | `chk-row` | same | `asset-kcht-32` · GAP-MOB-FIELD-CHK-01 |
| Create | Tạo vấn đề | `LinmPrimaryButton` | same | POST incident · toast SC-* |
| Draft | Lưu nháp mất sóng | `LinmSecondaryButton` | same | offline · reuse `patrol-offline` |
| Toast OK / Draft | banner | `LinmToast` | same | **cấm** system alert |
| **toastSessionsFail** | Toast | `LinmToast` | same | **NEW** · fail «Không tải được ca tuần» · empty «Không có ca đang tuần» |
| `DES-MOB-GPS-DENY` | `#modal-gps` | in-app modal | Material dialog card | deny · **chặn** Create |
| Empty session | banner `#banner-empty` | in-content | same | «Không có ca đang tuần» · draft OK · loc empty |

## SF ↔ Material icon

| `#i-*` | Motif (SSOT mobile-p1) | SF Symbol | Material |
|--------|------------------------|-----------|----------|
| `#i-chevron-left` | `M15 5l-7 7 7 7` | `chevron.left` | `ArrowBack` |
| `#i-camera` | body + circle r=3.5 | `camera` | `PhotoCamera` |
| `#i-mappin` | pin + circle r=2.2 | kit / `mappin` | `Place` |
| `#i-home` | house path | `house` | `Home` |
| `#i-warning` | triangle | `exclamationmark.triangle` | `Warning` |
| `#i-wrench` | wrench path | `wrench` | `Build` |
| `#i-person` | person | `person` | `Person` |

**Cấm** invent `#i-*` · **cấm** lệch `d=` dual (`GAP-MOB-ICON-*`).

## Copy VN (SSOT — parity dual)

| Key | Copy |
|-----|------|
| Title | **Ghi nhận hư hỏng** |
| Back (iOS) | **Tuần đường** |
| Kind label | **Loại phản ánh** |
| Kind pills | **Hư** / **Mất** / **Hỏng** |
| Photo label | **Ảnh hiện trường** |
| Photo filled | **Ảnh** |
| Row detect | **Nhận diện** / **Ổ gà · Mặt đường** |
| Row severity | **Mức** / **Cao** (+ badge **Cao**) |
| Row location (loaded) | **Vị trí đã chốt** / **QL.1 · Km 1556+040 · ±4 m** — **Design SSOT only** khi live bind |
| Row location (empty/fail) | **Vị trí đã chốt** / **—** |
| Chk label | **Checklist theo loại tài sản** |
| Chk PAVEMENT | hư·Ổ gà · hư·Nứt dọc / ngang · hư·Lún · sóng · hỏng·Bong tróc mặt · hỏng·Mờ vạch sơn |
| Primary | **Tạo vấn đề** |
| Secondary | **Lưu nháp mất sóng** |
| Toast OK | **Đã tạo vấn đề SC-2408 · gắn ca tuần** |
| Toast draft | **Đã lưu nháp · Lưu trữ** |
| Banner empty | **Không có ca đang tuần** |
| Toast sessions fail | **Không tải được ca tuần** |
| Toast no active | **Không có ca đang tuần** |
| Modal title | **Định vị bị tắt** |
| Modal body | **Cần vị trí để chấm công / chấm điểm tuần. Mở Cài đặt → Quyền vị trí cho RMMS.** |
| Modal primary | **Sao chép hướng dẫn** |
| Modal secondary | **Để sau** |
| Tabs | Trang Chủ · Tuần đường · Vấn đề · Công việc · Tôi |

**Cấm ship:** watermark Gói · device label «iPhone»/«· Android» · «Có mạng» · fake lat/lng · sheet pack chrome · `itemsOrDemo` / `demoToday`.

## Kit map

| Demo | Kit iOS+Android | Notes |
|------|-----------------|-------|
| `.nav-bar` / `.top-bar` | `LinmTopBar` | leading chevron |
| `.kind-pills` | `LinmKindPills` (map `LinmSegment`/pills) | `DES-MOB-FIELD-KIND` |
| `.photo-row` / `.photo-slot` | **PhotoRow** pattern | `kit_missing_confirm` **approve** · compose Image + `LinmIconButton` nếu chưa package |
| `.chk-row` | **CheckboxList** pattern | `kit_missing_confirm` **approve** · Toggle/Check row · **cấm** invent API |
| `.row` card-group | `LinmListRow` | label 13 · value ≥16 · badge severity |
| `.section-label` | SectionLabel Text 13 | |
| `.btn-primary` | `LinmPrimaryButton` | Create · `isBusy` |
| `.btn-secondary` | `LinmSecondaryButton` | Draft |
| toast | `LinmToast` | OK / Draft / deny / **toastSessionsFail** |
| `#modal-gps` | feature modal reuse | **cấm** `UIAlert` / `AlertDialog` |
| Tab 5 | `LinmTabBar` / NavigationBar | giữ shell |

### kit_missing_confirm (PhotoRow · CheckboxList)

**approve** · autoApprove=ON · PhotoRow = horizontal media slots + camera `#i-camera` · CheckboxList = `chk-row` PAVEMENT local · **không** tạo package `LinmPhotoRow` / `LinmCheckboxList` bắt buộc P1 nếu kit chưa ship — Dev compose từ kit Image / IconButton / Toggle theo map · **cấm** invent tên kit lạ ngoài map.

## controlHint ↔ DES

Khớp PO § Delta / DA controlHint — UNCLEAR=**none**. Create = POST incident · Draft = local offline · Kind/Photo/Detect/Checklist = cùng slug (`GAP-MOB-ACT-07`) · sessions = **live-only** (`GAP-MOB-FIELD-SESS-01`).

## BFF (Design note · SA chi tiết)

| Zone | Method · Path |
|------|----------------|
| Prefill ca / tuyến | `GET patrol/sessions` · **live-only** · fail/empty → empty+toast |
| Catalog loại TS (optional) | `GET integration/asset-types` |
| Optional media | `POST ai-vision/uploads` (+ PUT object) |
| Detect | `POST ai-vision/detect` |
| Create | `POST incident/incidents` |
| GPS / camera / Kind / Checklist / Draft | device · local · `patrol-offline` |

**Cấm** invent `api/v1/field-reflect` · ERP.* · `mfeStdUrl`.

## Out of pack

| Item | Owner |
|------|-------|
| `cam-patrol` / `inc-form` / `#sheet-incident` / `cam-view` / web `camera-connect` | sibling · **cấm** gộp |
| media[] trên CreateIncidentRequest | SA · GAP-MOB-FIELD-MEDIA-01 Accept |
| Checklist API dedicated | **cấm** · GAP-MOB-FIELD-CHK-01 local |
| Detect body expand | SA · GAP-MOB-CAM-DETECT-01 |
| Bottom-sheet chrome | **cấm** (pack = screen) |
| Native remove `itemsOrDemo` | Dev dual · GAP-MOB-FIELD-SESS-01 |

## Gates

| Gate | Artifact | Result |
|------|----------|--------|
| `/mobile-ui-ux-analy` | `ui/ux-analy.md` §1–§9 | **PASS** |
| html-to-native-map | `ui/html-to-native-map.md` | **PASS** |
| `/review-demo-design-mobile` | `ui/review/demo-parity.md` | Must=**0** |
| `kit_missing_confirm` | PhotoRow · CheckboxList | **approve** |
| `design_confirm` | autoApprove=ON | **approve** |

## design_confirm

**approve** · autoApprove=ON · dual `ios/`+`android/` · ux-analy §1–§9 · demo-parity Must=0 · packKind=`screen` · Create=POST incident · Draft=offline · hash skip (no re-scan) · **GAP-MOB-FIELD-SESS-01** toastSessionsFail + live-only loc · GAP-MOB-FIELD-PACK-01 closed.

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-design-mobile |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.05.8 |
| generatedAt | 2026-09-12T10:50:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:43744be6c3dc+field-reflect-sess-live-20260912 |
| realDataHash | sha256:43744be6c3dc+field-reflect-real-sess-20260912 |
| demoHash | sha256:field-reflect-proto-sess-live-20260912 |
| ctxHash | sha256:field-reflect-ctx-20260829 |

---
<!-- Version meta: skillId=agent-design-mobile skillVersion=2026.09.05.03 schemaVersion=1 workflowVersion=2026.09.05.03 rulesVersion=2026.09.05.8 versionGate=rechecked -->
