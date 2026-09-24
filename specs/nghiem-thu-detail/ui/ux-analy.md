# UX analy — nghiem-thu-detail

**Sources:** `ui/prototype/ios/index.html` · `ui/prototype/android/index.html` · `ui/design.md` · PO · DA controlHint + real-data  
**Gate:** `/mobile-ui-ux-analy` §1–§9 · **REQUIRED** trước Dev  
**Slash:** `/mobile-ui-ux-analy` · `task_69705146` · `2026-09-19T19:45:00.000Z`  
**Brand tokens:** Primary `#0C84C0` · deep `#086A9A` · success `#34C759` · orange `#FF9500` · surface `#F2F2F7` · label `#1C1C1E` · muted `#8E8E93`  
**Hash skip:** DA contentHash `sha256:250aebcbfb9a445c517a0c40f399fee82a5a00d524499e7310fd7feac0fb5380` · **cấm** re-scan DemoRoot (`GAP-DES-DEMO-RESCAN-01`)  
**changeScope:** `edit_page` · packKind **sheet** · sheet→screen · View+Edit cùng slug

## 1. IA

```
Login → Tab Tuần đường (shell Tab 5 · index field)
  → Hub #sc-patrol-home → #row-nghiem-thu
       → #sc-nghiem-thu list (sibling)
            → row tap → push #sc-nghiem-thu-detail (id từ list · cấm Code toast làm id)
  → #sc-nghiem-thu-detail DES-MOB-NGHIEM-THU-DETAIL
       → appear GET patrol/nghiem-thu/{id} + init-data
       → View: Đóng → nghiem-thu · Sửa → Edit cùng slug
       → Edit: Mẫu/Kết quả/Trạng thái Select · checklist scores · GPS field · PhotoRow
       → Lưu → PUT · 200 toast «Đã lưu · NT-*» → về View
            · 4xx/offline → toastFail · cấm fake NT-*
            · 404 → toast «Phiếu không tồn tại» → list
            · Status=done thiếu ResultCode → toast «Cần kết quả khi hoàn thành»
       → Hủy dirty → DES-MOB-LEAVE · Thoát → View (discard) · Ở lại → Edit
       → GPS deny → DES-MOB-GPS-DENY · chặn Lưu
  → hidden: AssigneeCode · InspectedAt
```

`tabs: none` trên surface · **cấm** invent segment (`GAP-TAB-01`). Tab shell **`field`** active. DELETE **OUT**.

## 2. Màn

| DES / sc-* | Tên VN | iOS chrome | Android chrome | CTA |
|------------|--------|------------|----------------|-----|
| DES-MOB-NGHIEM-THU-DETAIL / `#sc-nghiem-thu-detail` | Chi tiết nghiệm thu | View Đóng · NT-* 17 · Sửa · Edit Hủy · Lưu | chevron · title ~20 · Sửa/Lưu | cùng slug |
| DES-MOB-GPS-DENY / `#modal-gps` | Định vị bị tắt | in-app modal | Material dialog | Mở Cài đặt / Để sau |
| DES-MOB-LEAVE / `#modal-leave` | Huỷ thay đổi? | leave-dirty | same | Ở lại / Thoát |
| `#sheet-mau` | Chọn mẫu nghiệm thu | MAU-10 | same | mau-01…10 |
| `#sheet-result` | Chọn kết quả | pass/fail/deduct | same | |
| `#sheet-status` | Chọn trạng thái | catalog Statuses | same | |

## 3. Zone

### DES-MOB-NGHIEM-THU-DETAIL

| Zone | Demo (user thấy) | Map row | SwiftUI | Compose |
|------|------------------|---------|---------|---------|
| Header | Đóng/Hủy · NT-* · Sửa/Lưu | A `.nav-bar` / `.top-bar` | `LinmTopBar` | same |
| templateRow | Mẫu / Vệ sinh / vá ổ gà mặt đường | A `.list-row` | `LinmListRow`+Select | same |
| resultRow | Kết quả / Đạt | A Select | same | same |
| resultNote | Ghi chú kết quả | A Text | TextField | same |
| scoreList | 3 tiêu chí mau-02 | A checklist | Checklist | same |
| routeRow / kmRow | QL.1 · Km | A ListRow | `LinmListRow` | same |
| fieldRow | Khu I · GPS | A + `#i-mappin` | ListRow+GPS | same |
| statusRow | Đang NT | A Select | same | same |
| workTime / note | thời gian · ghi chú | A | DateTime / Text | same |
| attachRow | 2 ảnh | A PhotoRow `#i-camera` | PhotoRow | same |
| Toast | Đã lưu · NT-* | D `#toast` | `LinmToast` | Snackbar |
| Tab | field active | A `.tabbar` / `.nav` | `LinmTabBar` | NavigationBar |

**States:** View default · Edit (`?edit=1`) · GPS deny (`?deny=1`) · save fail (`?fail=1`) · leave (`?dirty=1`) · 404 (`?missing=1`) · **cấm** fake 200.

### DES-MOB-GPS-DENY

| Zone | Demo | Map row | SwiftUI | Compose |
|------|------|---------|---------|---------|
| Title | Định vị bị tắt | `h3` 17 | Text 17 | same |
| Body | Cần vị trí… RMMS. | `p` 13 | Text 13 | same |
| Primary / Secondary | Mở Cài đặt / Để sau | `.btn` | Primary/Secondary | same |

**Cấm** clipboard · **cấm** system alert (`AC-D-04`).

### DES-MOB-LEAVE

| Zone | Demo | Map row | SwiftUI | Compose |
|------|------|---------|---------|---------|
| Title / Body | Huỷ thay đổi? / … | modal | LeaveConfirm | same |
| CTA | Ở lại · Thoát | buttons | Thoát → View | same |

## 4. Copy SSOT

Nhãn dual parity — **cấm** invent / lệch iOS↔Android (trừ leading: iOS text · Android chevron-only).

**COPY chốt:** Mẫu = MAU-10 **Vệ sinh / vá ổ gà mặt đường** (`mau-02`). **Cấm** «Mẫu nghiệm thu NN» · «Mẫu 03». Verdict `n_a` = **Không áp dụng**.

**Cấm trên máy:** watermark «bản Gói N» · device label · «Có mạng» · loanword Offline như title · sheet bottom-chrome pack.

## 5. Brand

| Token | Hex | Dùng |
|-------|-----|------|
| Primary | `#0C84C0` | tint · tab · Lưu/Sửa |
| Deep | `#086A9A` | accent |
| Success | `#34C759` | verdict Đạt |
| Orange | `#FF9500` | Khấu trừ · deny warn |
| Danger | `#FF3B30` | Không đạt · Thoát |
| Surface | `#F2F2F7` | nền |
| Card | `#FFFFFF` | list · modal |
| Label / muted | `#1C1C1E` / `#8E8E93` | title / label 13 |

**Cấm** skin đỏ Ministry / CCCD (`GAP-MOB-BRAND-01`).

## 6. Signal

N/A pill mạng · GPS = OS permission only · **cấm** tap-cycle «Có mạng» (`AC-D-08`).

## 7. Pictogram

| id | Motif | Native |
|----|-------|--------|
| `#i-chevron-left` | `M15 5l-7 7 7 7` | SF / ArrowBack |
| `#i-chevron-right` | `M9 5l7 7-7 7` | SF / ChevronRight |
| `#i-camera` | body + r=3.5 | SF / PhotoCamera |
| `#i-mappin` | pin + r=2.2 | field GPS |
| Tab 5 icons | home/mappin/warning/wrench/person | reuse shell |

**Cấm** invent `#i-*` / lệch `d=` dual.

## 8. Motion

Toast fade ~2.4s · modal backdrop · picker slide · PhotoRow append · Lưu busy (Dev) · **không** bắt buộc `/wf-anim` ship.

## 9. GAP / Device

| ID | Demo vs native | Quyết định |
|----|----------------|------------|
| GAP-MOB-NT-DETAIL-01 | chưa HTML demo | Design gen dual · hash skip |
| GAP-MOB-NT-LABEL-01 | «Mẫu 03» | MAU-10 Label |
| GAP-MOB-NT-SCORE-01 | không checklist | catalog 3–8 dòng · **cấm** 100+ |
| GAP-MOB-NT-MODE-01 | — | View/Edit cùng slug |
| GAP-MOB-ACT-07 | Lưu/files/scores | cùng slug · **cấm** enqueue |
| GAP-DES-DEMO-RESCAN-01 | hash skip | **cấm** re-scan |
| AC-D-04 | GPS/Leave | in-app · **cấm** alert · **cấm** clipboard |
| Leave Must | dirty Hủy | Thoát về View |
| Offline / 404 | toast | **cấm** fake NT-* |
| DELETE | web live | **OUT** P1 |
| n_a label | catalog không có Label | Design **Không áp dụng** |

## Version meta

| Field | Value |
|-------|-------|
| skillId | mobile-ui-ux-analy |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| generatedAt | 2026-09-19T19:45:00.000Z |
| contentHash | sha256:250aebcbfb9a445c517a0c40f399fee82a5a00d524499e7310fd7feac0fb5380 |
| taskId | `task_69705146` |

---
<!-- Version meta: skillId=mobile-ui-ux-analy schemaVersion=1 -->
