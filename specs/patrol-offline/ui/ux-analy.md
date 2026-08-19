# UX analy — patrol-offline

**Sources:** `ui/prototype/ios` · `ui/prototype/android` · `ui/design.md` · mobile-p1 `#sc-patrol-offline` (iOS copy SSOT)  
**Brand tokens:** primary `#0C84C0` · warn `#FCB43C` · surface iOS `#F2F2F7` · surface Android `#FFFBFE` · card `#FFFFFF`

## 1. IA

```
Tab 5 shell (IA 5 — không đổi)
  Home (#sc-home) tile «Lưu trữ» (#i-sync)
  Me (#sc-me) row «Hàng đợi mất sóng»
  Patrol-home nav «Đồng bộ» (reuse route)
    → push #sc-patrol-offline DES-MOB-PAT-OFFLINE (cùng slug)
#sc-patrol-offline
  → Back «Trang Chủ» = pop parent (Home / Me / patrol)
  → «Đồng bộ» = POST integration/sync/offline-batch
  → Segment 0 = điểm tuần pending · 1 = sự cố pending
  → không child form / sheet / xóa từng bản ghi / conflict UI
```

- Màn **push** trên tab shell — **không** thay tab selected.
- **Cấm** invent tab · GET queue API · check-in live trên pack này.
- Badge Me `offlineCount` local — **cấm** badge số trên Home tile.

## 2. Màn

| DES / sc-* | Tên VN | iOS chrome | Android chrome | CTA |
|------------|--------|------------|----------------|-----|
| DES-MOB-PAT-OFFLINE `#sc-patrol-offline` | Dữ liệu lưu trữ | Nav text back + sync · segment · scroll cards | Top bar text back + sync · segment · scroll cards | Đồng bộ |
| DES-MOB-PAT-OFFLINE-SEG | Segment 2 | `LinmSegment` | `LinmSegment` | filter |
| DES-MOB-PAT-OFFLINE-BANNER | Banner | `LinmBanner` warning | same | — |
| DES-MOB-PAT-OFFLINE-CARD | Rich card ×N | thumb 56 + status strip | same | display |

## 3. Zone

### DES-MOB-PAT-OFFLINE / `#sc-patrol-offline`

| Zone | Demo (user thấy) | Map row (`docs/html-to-native-map.md`) | SwiftUI | Compose |
|------|------------------|----------------------------------------|---------|---------|
| Nav back | «Trang Chủ» + chevron | A `.nav-bar` / `.nav-btn` | `LinmTopBar` text leading (implement_kit) | same |
| Nav title | Dữ liệu lưu trữ | A `.nav-title` | TopBar title | TopAppBar title |
| Nav sync | «Đồng bộ» text | A `.nav-btn` trailing | TopBar text trailing | same |
| Segment | 2 tab | A `.seg` | `LinmSegment` | `LinmSegment` |
| Banner | wifi-off + copy yếu sóng | A `.offline-banner` | `LinmBanner` warning | same |
| Card thumb | gradient 56 | A `.rc-thumb` | RoundedRect 56 / kit slot | same |
| Card title | Điểm tuần · Km … | A `.rc-title` | Text semibold | same |
| Card location | mappin + QL.1 · … | A `.rc-line` + `#i-mappin` | HStack mappin | same |
| Card content | Nội dung: … | A `.rc-line` | Text caption | card 1 only |
| Card time | timestamp | A `.rc-line` / `.rc-time` | Text caption2 | same |
| Card status | «Chờ gửi» strip | A `.rc-status.warn` | status strip warn | same |
| Toast | sync / empty / error | A toast | `LinmToast` | `LinmToast` |
| Busy | POST in-flight | A loading | `LinmBusyOverlay` | same |

**Không** zone: tab 5 thay đổi · «Có mạng» · tín hiệu tap-cycle · watermark Gói · device label · form input.

**States:**

| State | Hành vi |
|-------|---------|
| default | segment 0 · 2 card SSOT · banner visible |
| segment 1 empty | list rỗng · banner ẩn · toast incidentEmpty |
| first launch | seed 2 card một lần (`GAP-F-OFFLINE-01`) |
| post-sync | persist [] · **không** re-seed |
| loading/sync | busy overlay · **cấm** block full-screen |
| sync OK | toast N bản ghi · clear pending |
| sync fail/offline | toast lỗi · **giữ** queue · **cấm** alert |
| permission | GPS/camera **N/A** |
| leave dirty | **N/A** (không form) |

## 4. Copy SSOT

| ✅ HTML / strings | ❌ Cấm trên máy |
|-------------------|-----------------|
| Dữ liệu lưu trữ | Offline queue EN |
| Trang Chủ | Back only icon |
| Đồng bộ | Sync EN only |
| Điểm tuần mất sóng · Sự cố mất sóng | đổi thứ tự tab |
| Tín hiệu yếu — ghi cục bộ, đồng bộ khi tín hiệu tốt | «Có mạng» |
| Điểm tuần · Km 1556+000 / 1561+134 | invent km |
| QL.1 · Xuân Hải / Phước Dinh | |
| Nội dung: mặt đường khô | card 2 invent content |
| Chờ gửi (pill ngắn) | status dài trên card |
| Đã đồng bộ N bản ghi | alert native |
| Sự cố mất sóng · chưa có bản ghi | fake «1 bản ghi» toast |

## 5. Brand

Primary `#0C84C0` · warn `#FCB43C` · surface iOS `#F2F2F7` · surface Android `#FFFBFE` · card `#FFFFFF` · muted `#8E8E93`.  
Thumb gradient demo: primary → teal — **cấm** watermark «Gói N» / «gen realapp».

## 6. Signal

Banner = **yếu sóng copy SSOT** khi có pending trên tab hiện tại — **không** boolean «Có mạng» · **không** tap-cycle proto trên màn này. Me row signal = sibling (`me-signal`).

## 7. Pictogram

| Control | Motif demo | SF Symbol | Material |
|---------|------------|-----------|----------|
| Back | chevron + text | `chevron.left` | `ArrowBack` |
| Banner | wifi off | `wifi.slash` | `WifiOff` |
| Location | mappin | `mappin` | `Place` |
| Entry Home | sync | `arrow.triangle.2.circlepath` | `Sync` |
| Entry Me | sync row | same | same |

## 8. Motion

Không `/wf-anim` trên list `patrol-offline`. Segment switch = instant filter · toast fade in-app.

## 9. GAP

| ID | Demo vs native | Quyết định |
|----|----------------|------------|
| GAP-F-OFFLINE-01 | Seed vs post-sync empty | Seed **1 lần** first launch · sync OK → [] + initialized · **cấm** re-seed |
| GAP-F-OFFLINE-02 | Android P1 1 card / icon back | Pack proto **align iOS** 2 card · text back · mappin · content |
| GAP-F-OFFLINE-03 | Status dài card 1 iOS P1 | Production pill **Chờ gửi** · helper = banner |
| GAP-F-OFFLINE-04 | Proto toast «1 bản ghi» incident | Empty → `offline.toast.incidentEmpty` |
| GAP-MOB-DEMO-COPY-01 | Android thiếu card 2 | Design pack proto **fixed** |
| GAP-MOB-DEMO-COPY-02 | TopBar icon-only kit | **implement_kit** text slots dual |
| GAP-MOB-ACT-01/02 | sibling forms | **none** — không gộp |
| GAP-MOB-ACT-05 | kit map | reuse Segment/Banner/Toast · **cấm** raw TabView |
| GAP-MOB-ALIGN-01 | Dual parity | Cùng copy + 2 card + icons `#i-*` |
| GAP-TAB-01 | Segment order | idx 0 check-in · 1 incident — **locked** |
| GAP-TYP-01 | Label size | segment/label **13** |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | mobile-ui-ux-analy |
| skillVersion | 2026.08.19.23 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.29 |
| rulesVersion | 2026.08.19.34 |
| generatedAt | 2026-08-19T14:30:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:2f2cf6976914278da294ed00a6d1eeecb50364201812335d6852c0f4e46ccaad |

---
<!-- Version meta: skillId=mobile-ui-ux-analy skillVersion=2026.08.19.23 schemaVersion=1 workflowVersion=2026.08.19.29 rulesVersion=2026.08.19.34 versionGate=rechecked -->
