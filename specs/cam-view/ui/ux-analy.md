# UX analy — cam-view

**Sources:** `ui/prototype/ios/index.html` · `ui/prototype/android/index.html` · `ui/design.md` · PO · DA controlHint + real-data  
**Gate:** `/mobile-ui-ux-analy` §1–§9 · **REQUIRED** trước Dev  
**Slash:** `/mobile-ui-ux-analy` · `task_a3c2af87` · `2026-08-29T17:50:00.000Z`  
**Brand tokens:** Primary `#0C84C0` · deep `#086A9A` · success `#3CB448` · warn `#FCB43C` · danger `#F03C30` · surface `#F2F2F7` · label `#1C1C1E` · muted `#8E8E93` · jpeg dark `#1C1C1E`  
**Hash skip:** DA contentHash `sha256:cam-view-control-hint-20260829` · real-data `sha256:cam-view-real-data-20260829` · **cấm** re-scan DemoRoot (`GAP-DES-DEMO-RESCAN-01`)

## 1. IA

```
Login → Tab Tôi (shell Tab 5 · index me)
  → Hub #sc-me
       → row «Camera xem» #i-video → push #sc-cam-view (owner)
  → (reuse) ops/home chip «Camera tuyến» → cùng route (shared_action · không enqueue)
  → #sc-cam-view DES-MOB-CAM-VIEW
       → GET cameras · pick first Online∧IsActive
       → POST snapshot → JPEG card · GET events → rows tốc độ + biển
       → Làm mới → re-snapshot + re-events · toast
       → empty / fail → EmptyState / toast · cấm fake
  → back → me
```

`tabs: none` trên surface · **cấm** invent segment (`GAP-TAB-01`). Tab shell **`me`** active.

## 2. Màn

| DES / sc-* | Tên VN | iOS chrome | Android chrome | CTA |
|------------|--------|------------|----------------|-----|
| DES-MOB-CAM-VIEW / `#sc-cam-view` | Camera xem | nav back «Tôi» + chevron · title 17 · trailing Làm mới · Tab 5 me | icon-btn chevron · TopAppBar ~20 · trailing Làm mới · Nav 5 me | Làm mới |
| Empty | Chưa có camera Online | same chrome · EmptyState | same | — |

**Cấm** sheet / `#sheet-*` · **cấm** gộp camera-connect / cam-patrol / vis-capture.

## 3. Zone

### DES-MOB-CAM-VIEW

| Zone | Demo (user thấy) | Map row (html-to-native-map) | SwiftUI | Compose |
|------|------------------|------------------------------|---------|---------|
| Header | Tôi · Camera xem · Làm mới | A `.nav-bar` / `.top-bar` | `LinmTopBar` | same |
| JPEG | dark card + `#i-video` · model · Cập nhật | A `.jpeg-card` | ImageCard / MediaPreview | same |
| Section | Sự kiện | A `.section-label` | SectionLabel 13 | same · **parity** |
| Row speed | Tốc độ 72 km/h · 08:41 · làn 2 | A `.row` | `LinmListRow` | same |
| Row plate | Phát hiện biển P.127 · 08:36 | A `.row` | `LinmListRow` | same · **bắt buộc** |
| Empty | Chưa có camera Online | A `.empty-state` | EmptyState | same |
| Toast | Đã làm mới ảnh / lỗi | D toast | `LinmToast` | same |
| Tab | me active | A `.tabbar` / `.nav` | `LinmTabBar` | NavigationBar |

**States:** default (demo JPEG + 2 events) · empty (`?empty=1`) · loading snapshot/events · fail toast (`?fail=1`) · offline toast · events empty list · leave dirty **N/A** (không form) · GPS/camera device **N/A**

## 4. Copy SSOT

Nhãn lấy đúng DA/PO dual — **cấm** invent / lệch iOS↔Android (trừ back chrome: iOS có chữ «Tôi»).

| Key | Copy |
|-----|------|
| Title | Camera xem |
| Trailing | Làm mới |
| JPEG | Ảnh JPEG · iDS-TCM403 · Cập nhật 08:41 |
| Section | Sự kiện |
| Events | Tốc độ 72 km/h · 08:41 · làn 2 · Phát hiện biển P.127 · 08:36 |
| Toast OK | Đã làm mới ảnh |
| Empty | Chưa có camera Online |

**Cấm trên máy:** watermark «bản Gói N» · device label «iPhone»/«· Android» · «Có mạng» · fake Base64/Speed/Plate · loanword Offline như title.

## 5. Brand

| Token | Hex | Dùng |
|-------|-----|------|
| Primary | `#0C84C0` | CTA tint · tab selected · trailing |
| Surface | `#F2F2F7` | nền |
| Card | `#FFFFFF` | event rows |
| JPEG dark | `#1C1C1E` | MediaPreview |
| Label / muted | `#1C1C1E` / `#8E8E93` | title / row-sub / section |

**Cấm** skin đỏ Ministry / CCCD (`GAP-MOB-BRAND-01`).

## 6. Signal

Không pill mạng trên pack này. **Cấm** tap-cycle proto · **cấm** «Có mạng» (`AC-D-08`). Offline = toast mất sóng · **cấm** fake 200 JPEG.

## 7. Pictogram

| id | Motif | Native |
|----|-------|--------|
| `#i-chevron-left` | `M15 5l-7 7 7 7` | SF `chevron.left` / Material `ArrowBack` |
| `#i-video` | rect 3,7 12×10 rx2 + `M15 10.5 21 7v10l-6-3.5` | SF `video` / Material `Videocam` |
| `#i-home` `#i-mappin` `#i-warning` `#i-wrench` `#i-person` | shell Tab 5 | reuse shell |

**Cấm** invent tab icon · entry reuse `#i-video` trên `me` (**không** reimplement hub).

## 8. Motion

Pack P1: toast fade ~2.4s · JPEG placeholder ↔ Base64 bind · refresh rebind events · **không** bắt buộc `/wf-anim` · **không** RTSP live motion.

## 9. GAP / Device

| ID | Demo vs native | Quyết định |
|----|----------------|------------|
| GAP-MOB-CAMVIEW-PACK-01 | sheet meta vs full screen | **screen** · chốt PO · **CLOSED** |
| GAP-MOB-CAMVIEW-DUAL-01 | Android thiếu row biển + lane | **CLOSED** · dual proto 2 rows + «làn 2» |
| GAP-MOB-CAMVIEW-PICK-01 | first Online∧IsActive | **CLOSED** · không picker UI P1 |
| GAP-MOB-CAMVIEW-LIVE-01 | RTSP/WebRTC | **OUT P2** |
| AC-D-01 | offline | toast · giữ placeholder · **cấm** fake |
| AC-D-04 | alert | **cấm** · chỉ `LinmToast` / EmptyState |
| AC-D-11 | device cam | **N/A** — JPEG domain only |
| GAP-MOB-REAL-01 | bind §B | cameras + snapshot + events |
| GAP-DES-DEMO-RESCAN-01 | hash skip | **không** re-scan |

## Version meta

| Field | Value |
|-------|-------|
| skillId | mobile-ui-ux-analy |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| generatedAt | 2026-08-29T17:50:00.000Z |
| contentHash | sha256:cam-view-control-hint-20260829 |
| realDataHash | sha256:cam-view-real-data-20260829 |
| taskId | `task_a3c2af87` |

---
<!-- Version meta: skillId=mobile-ui-ux-analy skillVersion=2026.08.25.01 schemaVersion=1 -->
