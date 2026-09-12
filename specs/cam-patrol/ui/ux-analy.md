# UX analy — cam-patrol

**Sources:** `ui/prototype/ios|android/index.html` · `ui/design.md` · PO compact · DA controlHint + real-data  
**Gate:** `/mobile-ui-ux-analy` §1–§9 · **REQUIRED** trước Dev  
**Slash:** `/mobile-ui-ux-analy` · `task_0ab8d0f5` · `2026-09-12T11:30:00.000Z`  
**Brand tokens:** Primary `#0C84C0` · deep `#086A9A` · FOV `#5AC8FA` · success `#34C759` · surface `#F2F2F7` · label `#1C1C1E` · muted `#8E8E93`  
**Hash skip:** DA `sha256:cam-patrol-control-hint-20260912-frame` · **cấm** re-scan DemoRoot (`GAP-DES-DEMO-RESCAN-01`)  
**changeScope:** `edit_page` · § Delta FRAME · **cấm** full redesign

**Context lock:** finder stamp = live active session · empty = «Chưa có ca đang chạy» · **cấm** demo SSOT stamp on native.

## 1. IA

```
Login → Tab Tuần đường (shell Tab 5 · index field)
  → Hub #sc-patrol-home
       → row «Thu thập bằng camera» #i-video → push #sc-cam-patrol
  → #sc-cam-patrol DES-MOB-CAM-PATROL
       → finder DES-MOB-CAM-FINDER + stamp + **capture frame**
       → POST detect + ImageBase64 → card | fail → toast detectFail · card nil
       → Confirm POST incident | Skip local
       → GPS deny → DES-MOB-GPS-DENY (chặn Confirm)
  → back → patrol-home
```

`tabs: none` · shell Tab **`field`** active · **cấm** invent segment.

## 2. Màn

| DES / sc-* | Tên VN | iOS chrome | Android chrome | CTA |
|------------|--------|------------|----------------|-----|
| DES-MOB-CAM-PATROL / `#sc-cam-patrol` | Thu thập bằng camera | back «Tuần đường» · title 17 · Tab 5 field | icon-btn · TopAppBar · Nav 5 field | Xác nhận · tạo vấn đề / Bỏ qua |
| DES-MOB-CAM-FINDER | (viewfinder) | AVCapture + FOV + stamp + frame JPEG | CameraX + FOV + stamp + frame | — |
| DES-MOB-GPS-DENY / `#modal-gps` | Định vị bị tắt | in-app modal | Material dialog | Sao chép hướng dẫn / Để sau |

## 3. Zone

### DES-MOB-CAM-PATROL

| Zone | Demo (user thấy) | Map row | SwiftUI | Compose |
|------|------------------|---------|---------|---------|
| Header | Tuần đường · Thu thập bằng camera | A `.nav-bar` / `.top-bar` | `LinmTopBar` | same |
| Finder | FOV + stamp | A `.finder` | native + **capture** | CameraX + **capture** |
| Stamp route | QL.1 · Km… (demo) | A `.stamp` | live Text 13 | same |
| Stamp GPS | … · đã chốt | A `.stamp` | CoreLocation | Fused |
| Row detect | Phát hiện / class | A `.row` | `LinmListRow` | same · **chỉ** ok+frame |
| Row score | 91% | `#row-score` | **không ship** | **không ship** |
| Row action | Tạo vấn đề sau xác nhận | A `.row` | `LinmListRow` | same |
| Primary / Secondary | Confirm / Skip | `.btn-*` | Primary/Secondary | same |
| Toast | OK / Skip / **detectFail** | D toast | `LinmToast` | same |
| Tab | field active | A `.tabbar` | `LinmTabBar` | NavigationBar |

**States:** default (card + GPS) · capturing frame · loading detect · **frame/detect fail** (toast + card hidden · `?fail=1`) · offline queue · GPS deny · camera deny · empty card sau Skip

### DES-MOB-CAM-FINDER

| Zone | Demo | Map row | SwiftUI | Compose |
|------|------|---------|---------|---------|
| Preview | gradient placeholder | `.finder` | live AVCapture | CameraX Preview |
| FOV | `.box` cyan | `.finder .box` | overlay | same |
| Stamp | route + GPS | `.stamp` | ZStack Text | Box Text |
| Frame capture | (native DoD) | — | JPEG→base64 | same |

**Cấm** ảnh tĩnh thay camera khi granted · **cấm** POST detect null-image khi granted (AC-F-02).

### DES-MOB-GPS-DENY

| Zone | Demo | Map | Native |
|------|------|-----|--------|
| Title / body / CTAs | Định vị bị tắt · copy SSOT | `#modal-gps` | modal · **cấm** system alert |

## 4. Copy SSOT

Parity dual (trừ back iOS có chữ «Tuần đường»).  
detectFail ship: **Không nhận diện được. Thử lại.**  
**Cấm:** watermark · device label · score % ship · fake lat/lng · class giả khi fail.

## 5. Brand

| Token | Hex | Dùng |
|-------|-----|------|
| Primary | `#0C84C0` | CTA · tab |
| Deep | `#086A9A` | finder accent |
| FOV | `#5AC8FA` | finder box |
| Surface / Card | `#F2F2F7` / `#FFFFFF` | nền / card |
| Label / muted | `#1C1C1E` / `#8E8E93` | title / row-sub |

**Cấm** skin đỏ Ministry (`GAP-MOB-BRAND-01`).

## 6. Signal

Không pill mạng. Loc = OS permission only · **cấm** «Có mạng».

## 7. Pictogram

| id | Motif | Native |
|----|-------|--------|
| `#i-chevron-left` | `M15 5l-7 7 7 7` | chevron.left / ArrowBack |
| `#i-mappin` | pin + r=2.2 | tab Tuần đường |
| `#i-home` `#i-warning` `#i-wrench` `#i-person` | shell Tab 5 | reuse |
| `#i-video` | entry hub only | **không** trên màn này |

## 8. Motion

Toast fade ~2.4s · modal backdrop · Skip ẩn card · Confirm toast SC-* · fail toast detectFail · **không** bắt buộc `/wf-anim` ship.

## 9. GAP / Device

| ID | Demo vs native | Quyết định |
|----|----------------|------------|
| GAP-MOB-CAM-FRAME-01 | capture → base64 | **Must** Dev dual · Design DoD ghi |
| GAP-MOB-CAM-FRAME-02 | fail toast sạch | **Must** · `?fail=1` demo · **cấm** fake class |
| GAP-MOB-CAM-FRAME-03 | body parity | **Must** Dev · Design note |
| GAP-MOB-CAM-PACK-01 | screen | **closed** |
| GAP-MOB-CAM-SCORE-01 | demo 91% | ship **ẩn** |
| AC-D-02 | GPS deny | modal · chặn Confirm |
| AC-D-04 | alert | **cấm** system |
| AC-D-11 | camera deny | toast · **cấm** fake detection |
| AC-F-02 / AC-F-08 | frame+fail | Must |
| AC-F-06 | score | không % ship |
| kit_missing | CameraFinder | **approve** |

## Gate

Must open Design = **0** (FRAME open → **Dev**) · §1–§9 đủ · handoff SA.

## Version meta

| Field | Value |
|-------|-------|
| skillId | mobile-ui-ux-analy |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| generatedAt | 2026-09-12T11:30:00.000Z |
| contentHash | sha256:cam-patrol-control-hint-20260912-frame |

---
<!-- Version meta: skillId=mobile-ui-ux-analy skillVersion=2026.08.25.01 schemaVersion=1 -->
