# UX analy — cam-patrol

**Sources:** `ui/prototype/ios/index.html` · `ui/prototype/android/index.html` · `ui/design.md` · PO · DA controlHint + real-data  
**Gate:** `/mobile-ui-ux-analy` §1–§9 · **REQUIRED** trước Dev  
**Slash:** `/mobile-ui-ux-analy` · `task_0f0d1974` · `2026-08-28T21:08:48.000Z`  
**Brand tokens:** Primary `#0C84C0` · deep `#086A9A` · FOV `#5AC8FA` · success `#34C759` · surface `#F2F2F7` · label `#1C1C1E` · muted `#8E8E93`  
**Hash skip:** DA contentHash `sha256:cam-patrol-control-hint-20260828` · **cấm** re-scan DemoRoot (`GAP-DES-DEMO-RESCAN-01`)

**Context lock (cleanup_mock):** finder stamp = live active session route · empty = «Chưa có ca đang chạy» · **cấm** demo SSOT `QL.1 · Km 1556+040` on native (`GAP-MOB-EDIT-DEMO-01`).

## 1. IA

```
Login → Tab Tuần đường (shell Tab 5 · index field)
  → Hub #sc-patrol-home
       → row «Thu thập bằng camera» #i-video → push #sc-cam-patrol (owner)
  → (reuse) #sc-inc-form secondary «Thu thập bằng camera» → cùng route
  → #sc-cam-patrol DES-MOB-CAM-PATROL
       → finder DES-MOB-CAM-FINDER + stamp
       → detect card → Confirm POST incident | Skip local
       → GPS deny → DES-MOB-GPS-DENY (chặn Confirm)
  → back → patrol-home
```

`tabs: none` trên surface · **cấm** invent segment (`GAP-TAB-01`). Tab shell **`field`** active.

## 2. Màn

| DES / sc-* | Tên VN | iOS chrome | Android chrome | CTA |
|------------|--------|------------|----------------|-----|
| DES-MOB-CAM-PATROL / `#sc-cam-patrol` | Thu thập bằng camera | nav back «Tuần đường» + chevron · title 17 · Tab 5 field | icon-btn chevron · TopAppBar title · Nav 5 field | Xác nhận · tạo vấn đề / Bỏ qua |
| DES-MOB-CAM-FINDER | (viewfinder) | AVCapture + FOV + stamp | CameraX + FOV + stamp | — |
| DES-MOB-GPS-DENY / `#modal-gps` | Định vị bị tắt | in-app modal | Material dialog card | Sao chép hướng dẫn / Để sau |

## 3. Zone

### DES-MOB-CAM-PATROL

| Zone | Demo (user thấy) | Map row (html-to-native-map) | SwiftUI | Compose |
|------|------------------|------------------------------|---------|---------|
| Header | Tuần đường · Thu thập bằng camera | A `.nav-bar` / `.top-bar` | `LinmTopBar` | same |
| Finder | FOV box + stamp | A `.finder` | native camera overlay | CameraX overlay |
| Stamp route | QL.1 · Km 1556+040 | A `.stamp` line1 | Text 13 overlay | same |
| Stamp GPS | 11.5308… · đã chốt | A `.stamp` line2 | Text 13 · CoreLocation | Fused |
| Row detect | Phát hiện / Ổ gà · Mặt đường | A `.row` | `LinmListRow` | same |
| Row score | Độ tin cậy / 91% | A `.row` `#row-score` | **không ship** | **không ship** |
| Row action | Hành động / Tạo… | A `.row` | `LinmListRow` | same |
| Primary | Xác nhận · tạo vấn đề | A `.btn-primary` | `LinmPrimaryButton` | same |
| Secondary | Bỏ qua | A `.btn-secondary` | `LinmSecondaryButton` | same |
| Toast | SC-2409 / Đã bỏ | D toast | `LinmToast` | same |
| Tab | field active | A `.tabbar` / `.nav` | `LinmTabBar` | NavigationBar |

**States:** default (card + GPS chốt) · loading detect · detect error toast · offline queue · GPS deny modal · camera deny toast · empty card sau Skip · leave N/A (không form dirty)

### DES-MOB-CAM-FINDER

| Zone | Demo | Map row | SwiftUI | Compose |
|------|------|---------|---------|---------|
| Preview | gradient placeholder demo | `.finder` | live `AVCaptureSession` | CameraX Preview |
| FOV | `.box` cyan | `.finder .box` | overlay rect | same |
| Stamp | route + GPS | `.stamp` | ZStack Text | Box Text |

**Cấm** ảnh tĩnh thay camera khi permission granted (AC-D-11 / DoD).

### DES-MOB-GPS-DENY

| Zone | Demo | Map row | SwiftUI | Compose |
|------|------|---------|---------|---------|
| Title | Định vị bị tắt | `h3` 17 | Text 17 semibold | same |
| Body | Cần vị trí… RMMS. | `p` 13 | Text 13 | same |
| Primary | Sao chép hướng dẫn | `.btn-primary` | `LinmPrimaryButton` | same |
| Secondary | Để sau | `.btn-secondary` | `LinmSecondaryButton` | same |

**Cấm** `UIAlertController` / `AlertDialog` hệ thống (`AC-D-04`).

## 4. Copy SSOT

Nhãn lấy đúng HTML dual — **cấm** invent / lệch iOS↔Android (trừ back chrome: iOS có chữ «Tuần đường»).

**Cấm trên máy:** watermark «bản Gói N» · device label «iPhone»/«· Android» · «Có mạng» · score % ship · fake lat/lng · loanword Offline/GPS như title.

## 5. Brand

| Token | Hex | Dùng |
|-------|-----|------|
| Primary | `#0C84C0` | CTA · tab selected · tint |
| Deep | `#086A9A` | finder gradient accent |
| FOV | `#5AC8FA` | finder box |
| Surface | `#F2F2F7` | nền |
| Card | `#FFFFFF` | detect card · modal |
| Label / muted | `#1C1C1E` / `#8E8E93` | title / row-sub |

**Cấm** skin đỏ Ministry / CCCD (`GAP-MOB-BRAND-01`).

## 6. Signal

Không pill mạng trên pack này. Loc = OS permission path only · **cấm** tap-cycle proto · **cấm** «Có mạng» (`AC-D-08`).

## 7. Pictogram

| id | Motif | Native |
|----|-------|--------|
| `#i-chevron-left` | `M15 5l-7 7 7 7` | SF `chevron.left` / Material `ArrowBack` |
| `#i-mappin` | pin + r=2.2 (mobile-p1) | tab Tuần đường |
| `#i-home` `#i-warning` `#i-wrench` `#i-person` | shell Tab 5 | reuse shell |
| `#i-video` | entry hub only | **không** trên màn cam-patrol |

**Cấm** invent tab icon / segment icon mới.

## 8. Motion

Workflow ref: `specs/mobile-p1/ui/prototype/workflow-cam-patrol/` (optional review).  
Pack P1: toast fade ~2.4s · modal backdrop fade · Skip ẩn card · Confirm toast SC-* · **không** bắt buộc `/wf-anim` ship.

## 9. GAP / Device

| ID | Demo vs native | Quyết định |
|----|----------------|------------|
| GAP-MOB-CAM-PACK-01 | sheet meta vs full screen | **screen** · chốt |
| GAP-MOB-CAM-SCORE-01 | demo 91% | ship **ẩn** row · demo giữ |
| GAP-MOB-CAM-DETECT-01 | detect stub | SA · không Design |
| AC-D-01 | offline | queue + toast nháp · sibling offline |
| AC-D-02 | GPS deny | modal · chặn Confirm |
| AC-D-04 | alert | **cấm** system · Toast/modal only |
| AC-D-06 | safe area | TopBar + finder + CTA + tab |
| AC-D-11 | camera deny | toast · **cấm** fake detection |
| AC-F-03 | Confirm | POST create · cần GPS chốt |
| AC-F-04 | Skip | clear · toast bỏ |
| AC-F-06 | score | không % ship |
| GAP-TAB-01 | tabs none | shell Tab 5 giữ |
| kit_missing | CameraFinder | **approve** app native surface |
| DEFER | bezel HTML | chrome native HIG/Material |

## Gate

Must open = **0** · packet §1–§9 đủ · handoff SA (`be/solution-discovery.md` pending).

## Version meta

| Field | Value |
|-------|-------|
| skillId | mobile-ui-ux-analy |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| generatedAt | 2026-08-28T21:08:48.000Z |
| contentHash | sha256:cam-patrol-control-hint-20260828 |

---
<!-- Version meta: skillId=mobile-ui-ux-analy skillVersion=2026.08.25.01 schemaVersion=1 -->
