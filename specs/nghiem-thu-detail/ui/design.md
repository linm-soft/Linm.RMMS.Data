# Design — nghiem-thu-detail (mobile sheet→screen)

| Field | Value |
|-------|-------|
| feature | `nghiem-thu-detail` |
| title | [Mobile] [Công tác nghiệm thu] -> Chi tiết nghiệm thu |
| role | `/agent-design-mobile` |
| status | **confirmed** (autoApprove=ON · `design_confirm=approve`) |
| packKind | **`sheet`** · Pattern **sheet→screen** `#sc-nghiem-thu-detail` |
| changeScope | `edit_page` |
| formPattern | sheet→screen · FormMode View + Edit **cùng slug** · **cấm** Full list/create trên slug |
| taskId | `task_69705146` |
| priorPo | `po/requirement.md` **confirmed** · `handoff/po-compact.md` |
| priorDa | `_data-analy/nghiem-thu-detail-control-hint.md` + `nghiem-thu-detail-real-data.md` **confirmed** · hash skip · **cấm** re-scan (`GAP-DES-DEMO-RESCAN-01`) |
| contentHash | `sha256:250aebcbfb9a445c517a0c40f399fee82a5a00d524499e7310fd7feac0fb5380` |
| real_view_parity | `v1` |
| updatedAt | `2026-09-19T19:45:00.000Z` |

## § Delta Current vs New (`edit_page`)

| ID | Current | New (Design DoD) | Surface |
|----|---------|------------------|---------|
| GAP-MOB-NT-DETAIL-01 | List row `toast('NT-*')` · chưa screen | Dual `#sc-nghiem-thu-detail` · entry row list · **cấm** Dev theo toast | sheet→screen |
| GAP-MOB-NT-LABEL-01 | Demo «Mẫu 03» | Display `TemplateLabel` MAU-10 · value `mau-01`…`10` giữ · **cấm** «Mẫu nghiệm thu NN» | ListRow |
| GAP-MOB-NT-SCORE-01 | Không Kết quả / tiêu chí | `ResultCode` + `ResultNote` + `scores[]` catalog init-data | Select + checklist |
| GAP-MOB-NT-BIND-01 | Không GET | `GET patrol/nghiem-thu/{id}` · id từ list | form |
| GAP-MOB-NT-SAVE-01 | Không PUT | Edit **Lưu** = `PUT` cùng slug · **cấm** enqueue | TextButton |
| GAP-MOB-NT-MEDIA-01 | Không gallery | PhotoRow · `files/*` · `MediaIds` guid max 10 | PhotoRow |
| GAP-MOB-NT-MODE-01 | — | View **Đóng/Sửa** · Edit **Hủy/Lưu** | nav |
| GAP-MOB-NT-DEL-01 | DELETE live web | P1 mobile **OUT** | — |

**OUT:** list `#sc-nghiem-thu` owner · `#sc-nghiem-thu-create` · hub · web Full · Step 4b/MIG · invent `nghiem-thu-detail` / `files-nt`.

## reviewUrl (dual — REQUIRED)

| Platform | Path | reviewUrl |
|----------|------|-----------|
| iOS | `ui/prototype/ios/index.html` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu-detail/ui/prototype/ios/index.html` |
| iOS edit | same + `?edit=1` | `…/ios/index.html?edit=1` |
| iOS GPS deny | same + `?deny=1` | `…/ios/index.html?deny=1` |
| iOS fail | same + `?fail=1` | `…/ios/index.html?fail=1` |
| iOS leave | same + `?dirty=1` | `…/ios/index.html?dirty=1` |
| iOS 404 | same + `?missing=1` | `…/ios/index.html?missing=1` |
| Android | `ui/prototype/android/index.html` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu-detail/ui/prototype/android/index.html` |
| Android edit / deny / fail / leave / 404 | same query | `…/android/index.html?edit=1` · `?deny=1` · `?fail=1` · `?dirty=1` · `?missing=1` |

**peerStdUrl:** `http://localhost:9304/nghiem-thu/:id` (web ref only · **cấm** `mfeStdUrl` native) · **cấm** `yarn start:std` / e2e ở role này.

## Frame / chrome

| | iOS | Android |
|--|-----|---------|
| Frame | 390×844 | 412×915 |
| View leading | TextButton **Đóng** | `icon-btn` `#i-chevron-left` only · aria **Đóng** |
| Edit leading | TextButton **Hủy** | chevron · aria **Hủy** |
| Title | **NT-20260906-0001** 17 | TopAppBar ~20 |
| View trailing | TextButton **Sửa** | same |
| Edit trailing | TextButton **Lưu** | same |
| Shell | Tab 5 · tab **`field`** active | Nav 5 · cùng index |
| pack tabs | **none** · **cấm** invent (`GAP-TAB-01`) | same |
| Surface | full screen sheet→screen · **cấm** bottom-sheet chrome | same |

## DES table

| DES | Zone | iOS | Android | Notes |
|-----|------|-----|---------|-------|
| `DES-MOB-NGHIEM-THU-DETAIL` | `#sc-nghiem-thu-detail` | push từ row list | same | `data-tab="field"` · View default |
| navClose | Leading View | **Đóng** | chevron | `go('nghiem-thu')` |
| navEdit | Trailing View | **Sửa** | same | vào Edit · cùng slug |
| navCancel | Leading Edit | **Hủy** | chevron | discard → View · leave-dirty |
| navSave | Trailing Edit | **Lưu** | same | PUT · **cấm** enqueue |
| templateRow | Mẫu | `LinmListRow` → Select | same | MAU-10 Label · value `mau-*` |
| resultRow | Kết quả | Select | same | Đạt / Không đạt / Khấu trừ · null «Chưa đánh giá» |
| resultNote | Ghi chú kết quả | Text | same | `ResultNote` |
| scoreList | Tiêu chí | Checklist | same | catalog init-data · verdict `pass`/`fail`/`n_a` |
| routeRow / kmRow | Tuyến · Km | ListRow | same | `Route` · `KmFrom`/`KmTo` |
| fieldRow | Hiện trường | ListRow + GPS | same | `FieldInfo` · `ZoneOrgCode` |
| statusRow | Trạng thái | Select | same | Nháp / Đang NT / Hoàn thành / Hủy · `done` ⇒ ResultCode |
| workTime / note | Thời gian · Ghi chú | DateTime / Text | same | optional |
| attachRow | Đính kèm | PhotoRow | same | max 10 · mediaIds |
| assignee / inspectedAt | (ẩn) | derived | same | PUT required · **không** vẽ |
| toastOk | Đã lưu · NT-* | `LinmToast` | Snackbar | PUT 200 |
| toastFail | fail/offline/404 | `LinmToast` | same | **cấm** alert · **cấm** fake NT-* |
| `DES-MOB-GPS-DENY` | `#modal-gps` | in-app modal | Material dialog | reuse · chặn Lưu |
| `DES-MOB-LEAVE` | `#modal-leave` | leave-dirty Must | same | Hủy khi dirty |
| pickerTemplate | `#sheet-mau` | options MAU-10 | same | LOOKUP_STATIC |
| pickerResult | `#sheet-result` | ResultCodes | same | |
| pickerStatus | `#sheet-status` | Statuses | same | |

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
| Title | **NT-20260906-0001** (GET `Code` · proto preview) |
| View leading (iOS) | **Đóng** |
| View trailing | **Sửa** |
| Edit leading (iOS) | **Hủy** |
| Edit trailing | **Lưu** |
| templateRow | **Mẫu** / **Vệ sinh / vá ổ gà mặt đường** (`mau-02` · MAU-10) |
| resultRow | **Kết quả** / **Đạt** |
| resultNote | **Ghi chú kết quả** / **Đạt yêu cầu mặt đường sau vá** |
| score 2.1.1 | **Vá ổ gà — cao độ ±5 mm, không khe >3 mm** / **Đạt** |
| score 2.1.2 | **Không vết nứt rộng >5 mm** / **Đạt** |
| score 2.1.vs | **Vệ sinh mặt — không rác/chướng ngại** / **Không áp dụng** |
| routeRow | **Tuyến** / **QL.1** |
| kmRow | **Km** / **Km 12+200 – 12+450** |
| fieldRow | **Hiện trường** / **Khu I · GPS hiện trường** |
| statusRow | **Trạng thái** / **Đang NT** |
| workTime | **Thời gian việc** / **06/09/2026 07:30 – 11:00** |
| note | **Ghi chú** / **Vá ổ gà mặt đường** |
| attachRow | **Đính kèm** / **2 ảnh** |
| toastOk | **Đã lưu · NT-20260906-0001** |
| toastFail | **Không lưu được phiếu nghiệm thu** |
| toast404 | **Phiếu không tồn tại** |
| toastDoneNeedResult | **Cần kết quả khi hoàn thành** |
| gpsDeny title / body | **Định vị bị tắt** / **Cần vị trí để chấm công / chấm điểm tuần. Mở Cài đặt → Quyền vị trí cho RMMS.** |
| gpsDeny CTA | **Mở Cài đặt** · **Để sau** |
| leave title / body | **Huỷ thay đổi?** / **Bạn có thay đổi chưa lưu. Thoát sẽ mất dữ liệu.** |
| leave CTA | **Ở lại** · **Thoát** (Thoát → View, không pop list) |
| picker mẫu / kết quả / trạng thái | **Chọn mẫu nghiệm thu** · **Chọn kết quả** · **Chọn trạng thái** |
| n_a | **Không áp dụng** (verdict · không nằm ResultCodes) |
| Tabs | Trang Chủ · Tuần đường · Vấn đề · Công việc · Tôi |

**Cấm ship:** watermark Gói · device label · «Có mạng» · `demoItems` SSOT · ERP.* · «Mẫu nghiệm thu NN» · «Mẫu 03» / «03 — Mặt đường» làm label · invent path · DELETE P1 · enqueue Lưu/files/scores.

## Kit map

| Demo | Kit | Notes |
|------|-----|-------|
| `.nav-bar` / `.top-bar` | `LinmTopBar` | View Đóng/Sửa · Edit Hủy/Lưu |
| `.list` / `.list-row` | `LinmListRow` | label 13 · value ≥16 |
| `#score-list` | Checklist | catalog · **cấm** hardcode 100+ |
| PhotoRow | PhotoRow pattern | `kit_missing_confirm` **approve** |
| `#sheet-*` | Select | LOOKUP_STATIC init-data |
| toast | `LinmToast` | OK / Fail / 404 |
| `#modal-gps` | `DES-MOB-GPS-DENY` reuse | **cấm** UIAlert · **cấm** clipboard |
| `#modal-leave` | LeaveConfirm | Must dirty · Thoát về View |
| Tab 5 | `LinmTabBar` / NavigationBar | **field** active |

### kit_missing_confirm (PhotoRow)

**approve** · autoApprove=ON · PhotoRow = slots + `#i-camera` (Edit) · Dev compose từ kit.

## controlHint ↔ DES

Khớp DA controlHint + PO inventory + real-data §B — UNCLEAR=**none**. Lưu / files / scores / GPS / leave = cùng slug (`GAP-MOB-ACT-07`).

## BFF (Design note · SA chi tiết)

| Zone | Method · Path |
|------|----------------|
| Open | `GET mobile-bff/api/v1/patrol/nghiem-thu/{id}` |
| Catalog | `GET mobile-bff/api/v1/patrol/nghiem-thu/init-data` |
| Save | `PUT mobile-bff/api/v1/patrol/nghiem-thu/{id}` · `UpdateNghiemThuRequest` |
| Media | `mobile-bff/api/v1/files/*` → `MediaIds` guid[] max 10 |
| Assignee / InspectedAt | auth · GET giữ hoặc device · **ẩn** |

**Cấm** invent `api/v1/nghiem-thu-detail` · `files-nt` · ERP.* · `mfeStdUrl` · Step 4b.

## Out of pack

- `#sc-nghiem-thu` list chrome · `#sc-nghiem-thu-create` · `patrol-home` hub
- Web `/nghiem-thu/:id` Full · DELETE
- Step 4b / migration
- Map embed (`map: none`)

## Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/ios/index.html` · `ui/prototype/android/index.html` |
| Form zones | TopBar View/Edit · ListRows · checklist · PhotoRow · 3 pickers · GPS deny · leave-dirty · toast |
| SSOT | DA control-hint + real-data §A+§B · hash skip |
| **reviewUrl** | dual file:// |
| **peerStdUrl** | `http://localhost:9304/nghiem-thu/:id` |
| **real_view_parity** | `v1` |
| **demo-parity** | `ui/review/demo-parity.md` **PASS** |

### Wire (sheet→screen)

```
View: [Đóng | NT-* | Sửa]  → GET
Edit: [Hủy | NT-* | Lưu]   → PUT cùng slug
[Mẫu · Kết quả · Ghi chú kết quả · Trạng thái]
[Tiêu chí scores[] catalog]
[Tuyến · Km · Hiện trường+GPS · Thời gian · Ghi chú]
[Đính kèm max 10]
[hidden AssigneeCode · InspectedAt]
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
| generatedAt | 2026-09-19T19:45:00.000Z |
| versionGate | ok |
| contentHash | sha256:250aebcbfb9a445c517a0c40f399fee82a5a00d524499e7310fd7feac0fb5380 |
| taskId | `task_69705146` |

---
<!-- Version meta: skillId=agent-design-mobile skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.09.19.5 rulesVersion=2026.09.19.7 versionGate=ok -->
