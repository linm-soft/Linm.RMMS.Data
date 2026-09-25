# Design — nghiem-thu-create (mobile sheet→screen)

| Field | Value |
|-------|-------|
| feature | `nghiem-thu-create` |
| title | [Mobile] [Công tác nghiệm thu] -> Tạo nghiệm thu |
| role | `/agent-design-mobile` |
| status | **confirmed** (autoApprove=ON · `design_confirm=approve`) |
| packKind | **`sheet`** · Pattern **sheet→screen** `#sc-nghiem-thu-create` |
| changeScope | `new_page` |
| formPattern | sheet→screen · FormMode Create draft P1 · **cấm** Full list/detail trên slug |
| taskId | `task_b6b0bafc` |
| priorPo | `po/requirement.md` **confirmed** · `handoff/po-compact.md` |
| priorDa | `_data-analy/nghiem-thu-create-control-hint.md` + `nghiem-thu-create-real-data.md` **confirmed** · hash skip · **cấm** re-scan (`GAP-DES-DEMO-RESCAN-01`) |
| contentHash | `sha256:c2b17a793325c8eb40cc64a98b7775db138841107cd178cd6a6aa12ba8cfa66f` |
| real_view_parity | `v1` |
| updatedAt | `2026-09-19T17:10:00.000Z` |

## § Delta Current vs New (`new_page`)

| ID | Current | New (Design DoD) | Surface |
|----|---------|------------------|---------|
| GAP-MOB-NTC-ENTRY-01 | List **Tạo** → create | Owner `#sc-nghiem-thu-create` · entry từ `nghiem-thu` | entry |
| GAP-MOB-NTC-SCR-01 | Stub | Dual full screen `DES-MOB-NGHIEM-THU-CREATE` | sheet→screen |
| GAP-MOB-NTC-MAU-01 | hardcode | `LOOKUP_STATIC` `mau-01`…`10` · init-data · Select picker | ListRow |
| GAP-MOB-NTC-LOC-01 | demo GPS text | Zone + device GPS · `ZoneOrgCode`·`Route`·`FieldInfo` | ListRow+GPS |
| GAP-MOB-NTC-MEDIA-01 | toast only | PhotoRow · `files/*` · `MediaIds` guid max 10 | PhotoRow |
| GAP-MOB-NTC-SAVE-01 | toast | Trailing **Lưu** = `POST` draft · cùng slug · **cấm** enqueue | TextButton |
| GAP-MOB-NTC-CANCEL-01 | back | **Hủy** → list · leave-dirty Must | BackButton |
| GAP-MOB-NTC-REQ-01 | 3 rows | Hidden bind: `AssigneeCode` (auth) · `InspectedAt` (device now) · `Status=draft` | derived |
| GAP-MOB-NTC-COPY-01 | «03 — Mặt đường» | Display = init Label **`Mẫu nghiệm thu 03`** · **cấm** invent mau name | meta |

**OUT:** list `#sc-nghiem-thu` · detail · hub · web Full · Step 4b/MIG · invent create path.

## reviewUrl (dual — REQUIRED)

| Platform | Path | reviewUrl |
|----------|------|-----------|
| iOS | `ui/prototype/ios/index.html` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu-create/ui/prototype/ios/index.html` |
| iOS GPS deny | same + `?deny=1` | `…/ios/index.html?deny=1` |
| iOS fail | same + `?fail=1` | `…/ios/index.html?fail=1` |
| iOS leave | same + `?dirty=1` | `…/ios/index.html?dirty=1` (Hủy → leave modal) |
| Android | `ui/prototype/android/index.html` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu-create/ui/prototype/android/index.html` |
| Android GPS deny | same + `?deny=1` | `…/android/index.html?deny=1` |
| Android fail | same + `?fail=1` | `…/android/index.html?fail=1` |
| Android leave | same + `?dirty=1` | `…/android/index.html?dirty=1` |

**peerStdUrl:** `http://localhost:9304/patrol` (web clone ref only · **cấm** `mfeStdUrl` native) · **cấm** `yarn start:std` / e2e ở role này.

## Frame / chrome

| | iOS | Android |
|--|-----|---------|
| Frame | 390×844 | 412×915 |
| Leading | TextButton **Hủy** (no chevron required) | `icon-btn` `#i-chevron-left` only |
| Title | **Tạo nghiệm thu** 17 | TopAppBar ~20 |
| Trailing | TextButton **Lưu** | same |
| Shell | Tab 5 · tab **`field`** active | Nav 5 · cùng index |
| pack tabs | **none** · **cấm** invent (`GAP-TAB-01`) | same |
| Surface | full screen sheet→screen · **cấm** bottom-sheet chrome | same |

## DES table

| DES | Zone | iOS | Android | Notes |
|-----|------|-----|---------|-------|
| `DES-MOB-NGHIEM-THU-CREATE` | `#sc-nghiem-thu-create` | push từ list **Tạo** | same | `data-tab="field"` |
| navCancel | Leading Hủy | TextButton | icon-btn chevron | `go('nghiem-thu')` · leave-dirty |
| navSave | Trailing Lưu | TextButton | same | POST draft · **cấm** enqueue |
| templateRow | Mẫu | `LinmListRow` → Select | same | `mau-01`…`10` · Label init-data |
| locationRow | Vị trí | `LinmListRow` + GPS | same | Zone · Route · FieldInfo · opt Km |
| attachRow | Đính kèm | PhotoRow / ListRow | same | camera/picker · max 10 · mediaIds |
| assignee / inspectedAt / status | (ẩn) | derived | same | auth · UTC now · `draft` |
| toastOk | Đã lưu nháp · NT-* | `LinmToast` | Snackbar | POST 200 · optional detail |
| toastFail | fail/offline | `LinmToast` | same | **cấm** alert · **cấm** fake NT-* |
| `DES-MOB-GPS-DENY` | `#modal-gps` | in-app modal | Material dialog | deny · chặn Lưu nếu chưa chốt P1 |
| `DES-MOB-LEAVE` | `#modal-leave` | leave-dirty Must | same | Hủy khi dirty · **cấm** system confirm |
| pickerTemplate | `#sheet-mau` | options list | same | LOOKUP_STATIC · **không** invent ngoài catalog |

## SF ↔ Material icon

| `#i-*` | Motif | SF Symbol | Material |
|--------|-------|-----------|----------|
| `#i-chevron-left` | `M15 5l-7 7 7 7` | `chevron.left` | `ArrowBack` |
| `#i-chevron-right` | `M9 5l7 7-7 7` | `chevron.right` | `ChevronRight` |
| `#i-camera` | body + circle r=3.5 | `camera` | `PhotoCamera` |
| `#i-mappin` | pin + circle r=2.2 | `mappin` | `Place` |
| `#i-home` / `#i-warning` / `#i-wrench` / `#i-person` | shell Tab 5 | same motif dual | same |

**Cấm** invent `#i-*` · **cấm** lệch `d=` dual.

## Copy VN (SSOT — parity dual)

| Key | Copy |
|-----|------|
| Title | **Tạo nghiệm thu** |
| Leading (iOS) | **Hủy** |
| Trailing | **Lưu** |
| templateRow label / value | **Mẫu** / **Mẫu nghiệm thu 03** (default proto · `mau-03`) |
| locationRow label / value | **Vị trí** / **Khu I · GPS hiện trường** (preview · ship live GPS) |
| attachRow label / value | **Đính kèm** / **Ảnh + video** (empty) · sau attach «n ảnh» |
| toastOk | **Đã lưu nháp · NT-20260919-0001** |
| toastFail | **Không lưu được phiếu nghiệm thu** |
| gpsDeny title / body | **Định vị bị tắt** / **Cần vị trí để chấm công / chấm điểm tuần. Mở Cài đặt → Quyền vị trí cho RMMS.** |
| gpsDeny CTA | **Mở Cài đặt** · **Để sau** |
| leave title / body | **Huỷ thay đổi?** / **Bạn có thay đổi chưa lưu. Thoát sẽ mất dữ liệu.** |
| leave CTA | **Ở lại** · **Thoát** |
| picker title | **Chọn mẫu nghiệm thu** |
| Tabs | Trang Chủ · Tuần đường · Vấn đề · Công việc · Tôi |

**Cấm ship:** watermark Gói · device label · «Có mạng» · `demoItems` SSOT · ERP.* · invent «Mặt đường» API value · invent `nghiem-thu-create` / `nghiem-thu-files` path · gộp list/detail.

## Kit map

| Demo | Kit | Notes |
|------|-----|-------|
| `.nav-bar` / `.top-bar` | `LinmTopBar` | Hủy / chevron · title · Lưu |
| `.list` / `.list-row` | `LinmListRow` | label 13 · value ≥16 · chevron |
| PhotoRow slots | PhotoRow pattern | `kit_missing_confirm` **approve** · compose Image + `#i-camera` |
| `#sheet-mau` | Select / bottom list | LOOKUP_STATIC |
| toast | `LinmToast` | OK / Fail |
| `#modal-gps` | `DES-MOB-GPS-DENY` reuse | **cấm** UIAlert / AlertDialog hệ thống |
| `#modal-leave` | LeaveConfirm pattern | Must dirty |
| Tab 5 | `LinmTabBar` / NavigationBar | **field** active |

### kit_missing_confirm (PhotoRow)

**approve** · autoApprove=ON · PhotoRow = horizontal slots + camera `#i-camera` · Dev compose từ kit · **cấm** invent package name ngoài map.

## controlHint ↔ DES

Khớp DA controlHint + PO inventory — UNCLEAR=**none**. Lưu / files / picker / GPS / leave = cùng slug (`GAP-MOB-ACT-07`) · **cấm** enqueue Lưu/files.

## BFF (Design note · SA chi tiết)

| Zone | Method · Path |
|------|----------------|
| Templates | `GET mobile-bff/api/v1/patrol/nghiem-thu/init-data` |
| Create draft | `POST mobile-bff/api/v1/patrol/nghiem-thu` · `CreateNghiemThuRequest` `Status=draft` |
| Media | `POST/PUT mobile-bff/api/v1/files/*` → `MediaIds` guid[] |
| GPS / assignee / inspectedAt | device · auth · UTC now |

**Cấm** invent `api/v1/nghiem-thu-create` · `nghiem-thu-files` · ERP.* · `mfeStdUrl`.

## Out of pack

- `#sc-nghiem-thu` list · `nghiem-thu-detail` · `patrol-home` hub chrome
- Web Full form Kind B
- Step 4b / migration
- Map embed (`map: none`)

## Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/ios/index.html` · `ui/prototype/android/index.html` |
| Form zones | TopBar + 3 ListRows · PhotoRow · picker · GPS deny · leave-dirty · toast |
| SSOT | DA control-hint + real-data §A+§B · hash skip |
| **reviewUrl** | dual file:// (bảng trên) |
| **peerStdUrl** | `http://localhost:9304/patrol` |
| **real_view_parity** | `v1` |
| **demo-parity** | `ui/review/demo-parity.md` **PASS** |

### Wire (sheet→screen)

```
[Leading Hủy | Title Tạo nghiệm thu | Trailing Lưu]
[ListRow Mẫu → picker LOOKUP_STATIC]
[ListRow Vị trí → GPS bind]
[ListRow/PhotoRow Đính kèm → files max 10]
[hidden AssigneeCode · InspectedAt · Status=draft]
[Toast / GPS-DENY / Leave-dirty]
[Shell Tab 5 · field]
```

## design_confirm

| Field | Value |
|-------|-------|
| gate | `design_confirm` |
| result | **approve** (autoApprove=ON) |
| reviewUrlIos | opened (file:// ios) |
| reviewUrlAndroid | opened (file:// android) |
| ux-analy | PASS §1–§9 |
| demo-parity | Must open = 0 |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-design-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.19.5 |
| rulesVersion | 2026.09.19.7 |
| generatedAt | 2026-09-19T17:10:00.000Z |
| versionGate | ok |
| contentHash | sha256:c2b17a793325c8eb40cc64a98b7775db138841107cd178cd6a6aa12ba8cfa66f |
| taskId | `task_b6b0bafc` |

---
<!-- Version meta: skillId=agent-design-mobile skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.09.19.5 rulesVersion=2026.09.19.7 versionGate=ok -->
