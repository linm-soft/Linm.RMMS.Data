# UX analy — nghiem-thu-create

**Sources:** `ui/prototype/ios/index.html` · `ui/prototype/android/index.html` · `ui/design.md` · PO · DA controlHint + real-data  
**Gate:** `/mobile-ui-ux-analy` §1–§9 · **REQUIRED** trước Dev  
**Slash:** `/mobile-ui-ux-analy` · `task_b6b0bafc` · `2026-09-19T17:10:00.000Z`  
**Brand tokens:** Primary `#0C84C0` · deep `#086A9A` · success `#34C759` · orange `#FF9500` · surface `#F2F2F7` · label `#1C1C1E` · muted `#8E8E93`  
**Hash skip:** DA contentHash `sha256:c2b17a793325c8eb40cc64a98b7775db138841107cd178cd6a6aa12ba8cfa66f` · **cấm** re-scan DemoRoot (`GAP-DES-DEMO-RESCAN-01`)  
**changeScope:** `new_page` · packKind **sheet** · sheet→screen

## 1. IA

```
Login → Tab Tuần đường (shell Tab 5 · index field)
  → Hub #sc-patrol-home → #row-nghiem-thu
       → #sc-nghiem-thu list (sibling)
            → trailing Tạo → push #sc-nghiem-thu-create
  → #sc-nghiem-thu-create DES-MOB-NGHIEM-THU-CREATE
       → appear GET init-data (TemplateTypes)
       → ListRow Mẫu → picker mau-01…10
       → ListRow Vị trí → device GPS (deny → DES-MOB-GPS-DENY)
       → PhotoRow Đính kèm → files/* → MediaIds max 10
       → Trailing Lưu → POST patrol/nghiem-thu Status=draft
            · 200 → toast «Đã lưu nháp · NT-*» · optional detail / back list
            · 4xx/offline → toastFail · cấm fake NT-*
       → Hủy / back → leave-dirty Must nếu dirty → nghiem-thu
  → hidden: AssigneeCode (auth) · InspectedAt (now) · Status=draft
```

`tabs: none` trên surface · **cấm** invent segment (`GAP-TAB-01`). Tab shell **`field`** active.

## 2. Màn

| DES / sc-* | Tên VN | iOS chrome | Android chrome | CTA |
|------------|--------|------------|----------------|-----|
| DES-MOB-NGHIEM-THU-CREATE / `#sc-nghiem-thu-create` | Tạo nghiệm thu | Hủy text · title 17 · Lưu · Tab 5 field | icon-btn chevron · TopAppBar ~20 · Lưu · Nav 5 field | Lưu · rows · picker |
| DES-MOB-GPS-DENY / `#modal-gps` | Định vị bị tắt | in-app modal | Material dialog | Mở Cài đặt / Để sau |
| DES-MOB-LEAVE / `#modal-leave` | Huỷ thay đổi? | leave-dirty | same | Ở lại / Thoát |
| picker `#sheet-mau` | Chọn mẫu nghiệm thu | options list | same | select mau-* |

## 3. Zone

### DES-MOB-NGHIEM-THU-CREATE

| Zone | Demo (user thấy) | Map row (html-to-native-map) | SwiftUI | Compose |
|------|------------------|------------------------------|---------|---------|
| Header | Hủy · Tạo nghiệm thu · Lưu | A `.nav-bar` / `.top-bar` | `LinmTopBar` | same |
| templateRow | Mẫu / Mẫu nghiệm thu 03 | A `.list-row` | `LinmListRow`+Select | same |
| locationRow | Vị trí / Khu I · GPS… | A `.list-row` + `#i-mappin` | `LinmListRow`+GPS | same |
| attachRow | Đính kèm / Ảnh + video | A PhotoRow / `.list-row` | PhotoRow pattern | same |
| Toast | Đã lưu nháp · NT-* | D `#toast` | `LinmToast` | Snackbar |
| Tab | field active | A `.tabbar` / `.nav` | `LinmTabBar` | NavigationBar |

**States:** default (mau-03 + GPS preview + attach empty) · GPS deny (`?deny=1`) · save fail (`?fail=1`) · leave dirty (`?dirty=1`) · loading Lưu (Dev) · picker open · attach count · **cấm** fake 200

### DES-MOB-GPS-DENY

| Zone | Demo | Map row | SwiftUI | Compose |
|------|------|---------|---------|---------|
| Title | Định vị bị tắt | `h3` 17 | Text 17 | same |
| Body | Cần vị trí… RMMS. | `p` 13 | Text 13 | same |
| Primary / Secondary | Mở Cài đặt / Để sau | `.btn` | Primary/Secondary | same |

### DES-MOB-LEAVE

| Zone | Demo | Map row | SwiftUI | Compose |
|------|------|---------|---------|---------|
| Title / Body | Huỷ thay đổi? / … | modal | LeaveConfirm | same |
| CTA | Ở lại · Thoát | buttons | same | same |

## 4. Copy SSOT

Nhãn dual parity — **cấm** invent / lệch iOS↔Android (trừ leading: iOS **Hủy** text · Android chevron-only).

**Cấm trên máy:** watermark «bản Gói N» · device label · «Có mạng» · invent «Mặt đường» · loanword Offline như title · sheet bottom-chrome pack.

**COPY-01 chốt:** value Mẫu = init Label **`Mẫu nghiệm thu NN`** · không ship demo «03 — Mặt đường» làm API/display SSOT.

## 5. Brand

| Token | Hex | Dùng |
|-------|-----|------|
| Primary | `#0C84C0` | tint · tab · Lưu · trail |
| Deep | `#086A9A` | accent |
| Orange | `#FF9500` | deny warn |
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
| `#i-mappin` | pin + r=2.2 | shell + location |
| Tab 5 icons | home/mappin/warning/wrench/person | reuse shell |

**Cấm** invent `#i-*` / lệch `d=` dual.

## 8. Motion

Toast fade ~2.4s · modal backdrop · picker slide · PhotoRow append · Lưu busy (Dev) · **không** bắt buộc `/wf-anim` ship.

## 9. GAP / Device

| ID | Demo vs native | Quyết định |
|----|----------------|------------|
| GAP-MOB-NTC-REQ-01 | ẩn Assignee/InspectedAt | Design surface · bind auth+device · **không** vẽ field |
| GAP-MOB-NTC-COPY-01 | Label init-data | Chốt **Mẫu nghiệm thu NN** |
| GAP-MOB-NTC-MEDIA-01 | PhotoRow | kit_missing **approve** · compose |
| GAP-MOB-ACT-07 | Lưu/files | cùng slug · **cấm** enqueue |
| GAP-DES-DEMO-RESCAN-01 | hash skip | **cấm** re-scan |
| AC-D-04 | GPS/Leave | in-app modal · **cấm** system alert |
| Leave Must | dirty Hủy | `DES-MOB-LEAVE` |
| Offline | fail toast | **cấm** fake NT-* |

## Version meta

| Field | Value |
|-------|-------|
| skillId | mobile-ui-ux-analy |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| generatedAt | 2026-09-19T17:10:00.000Z |
| contentHash | sha256:c2b17a793325c8eb40cc64a98b7775db138841107cd178cd6a6aa12ba8cfa66f |
| taskId | `task_b6b0bafc` |

---
<!-- Version meta: skillId=mobile-ui-ux-analy schemaVersion=1 -->
