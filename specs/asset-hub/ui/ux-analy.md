# UX analy — asset-hub

**Sources:** prototype/ios · prototype/android · ui/design.md · mobile-p1 `#sc-asset-hub`  
**Brand tokens:** primary `#0C84C0` · deep `#086A9A` · teal `#1B8A4A` · indigo iOS `#5856D6` · indigo Android `#6750A4` · orange `#FF9500` / warn `#E8A317` · surface `#F2F2F7`

## 1. IA

```
Login → Tab 5 (Trang Chủ selected)
  home #sc-home
    → Tài sản tile / wallet → push #sc-asset-hub DES-MOB-ASSET-HUB   ← this pack
#sc-asset-hub
  → back «Trang Chủ» = pop home
  → wallet = display only (không re-nav self)
  → hub tiles / map row / AI CTA (sibling chưa ship) = LinmToast nhãn PO §3.7
  → không child form / sheet
```

**Cấm** invent tab. Hub **không** thêm tab — stack push dưới tab Trang Chủ.

## 2. Màn

| DES / sc-* | Tên VN | iOS chrome | Android chrome | CTA |
|------------|--------|------------|----------------|-----|
| DES-MOB-ASSET-HUB `#sc-asset-hub` | Tài sản | nav solid · back text | top-bar · icon back | wallet + grids + AI |
| DES-MOB-ASSET-WALLET | Ví hồ sơ | gradient card | same | display |
| DES-MOB-ASSET-GRID | Hub tiles | 2×2 ×3 section | same | toast sibling |
| DES-MOB-ASSET-MAP-ROW | Bản đồ tài sản | list row + chevron | list row | toast **Bản đồ tài sản** |
| DES-MOB-ASSET-AI | Chờ xác nhận AI | section + row + btn | same | toast **Xác nhận AI** · ẩn empty |

## 3. Zone

### DES-MOB-ASSET-HUB

| Zone | Demo (user thấy) | Map row (`docs/html-to-native-map.md`) | SwiftUI | Compose |
|------|------------------|----------------------------------------|---------|---------|
| Nav | Back Trang Chủ · title **Tài sản** | top bar / `.nav-bar` · `.top-bar` | `LinmTopBar` | `LinmTopBar` |
| Wallet | HỒ SƠ TÀI SẢN · QL.1 · Khu IV · 32 loại… (+ iOS patrol) | A `.wallet-card` · DES-MOB-ASSET-WALLET | `LinmWalletCard` | same |
| Grid primary | 32 loại · Xem trên bản đồ | A `.hub-grid` / `.hub-tile` | `LinmHubTile` ×2 | same |
| Sec Thu thập | Thu thập | A `.section-label` | `LinmSectionLabel` | same |
| Grid collect | Thủ công · Camera AI | A `.hub-tile` | `LinmHubTile` ×2 | same |
| Sec Quản lý | Quản lý | A `.section-label` | `LinmSectionLabel` | same |
| Grid manage | Danh sách · Cập nhật / bớt | A `.hub-tile` | `LinmHubTile` ×2 | same |
| Map row | Bản đồ tài sản | A `.card-group` / `.row` | `LinmListRow` | same |
| AI section | Chờ xác nhận AI | A `.section-label` | `LinmSectionLabel` | same · **ẩn** empty |
| AI row | Ứng viên + Xác nhận | A `.row` + `.btn-primary` | `LinmListRow` + `LinmPrimaryButton` | same |
| Feedback | toast nhãn | toast | `LinmToast` | `LinmToast` |

**States:**

| State | Hành vi |
|-------|---------|
| default | Parallel optional: route search · asset-types count · AI Draft · hub mở |
| empty AI | Section «Chờ xác nhận AI» **ẩn** |
| loading | refresh nhẹ wallet/AI · **cấm** full-screen block |
| error / offline | wallet demo copy · AI ẩn nếu fail · toast optional · **cấm** block hub |
| permission | GPS/camera **N/A** trên hub |
| leave dirty | **N/A** (không form) |

## 4. Copy SSOT

Tài sản · Trang Chủ · HỒ SƠ TÀI SẢN · QL.1 · Khu IV · 32 loại KCHT · thông số + checklist sự cố · Cột Km 1556+000 · đang tuần · 32 loại tài sản · Thông số kỹ thuật · checklist sự cố · Xem trên bản đồ · Ghim lý trình · lớp TS · Thu thập · Thủ công · Thêm cột km, biển, cống… · Camera AI · Chụp → xác nhận vào sổ · Quản lý · Danh sách · Tra cứu mã · tuyến · loại · Cập nhật / bớt · Sửa hiện trường · bớt khỏi sổ · Bản đồ tài sản · Ghim cột km · lớp tuyến · Chờ xác nhận AI · Ứng viên TS-88 · Cống · Độ tin cậy 91% · QL.1 Km 1556+000 · Xác nhận · (toast sibling đúng bảng design §3)

**Cấm trên máy:** «Có mạng» · «Hiện trường · iPhone» · «· Android» title · «Phiên bản Gói N» · device label · «gen realapp» · invent org path.

## 5. Brand

Primary `#0C84C0` · deep `#086A9A` · teal `#1B8A4A` · indigo iOS `#5856D6` · indigo Android `#6750A4` · orange `#FF9500` / warn `#E8A317` · gray `#8E8E93`/`#79747E` · surface `#F2F2F7`.  
**Cấm** skin đỏ CCCD · **cấm** M3 tím tab (hub không tab).

## 6. Signal

**N/A** trên hub `asset-hub` — không capsule tín hiệu (owner `home`).

## 7. Pictogram

| Control | Motif demo | SF Symbol | Material |
|---------|------------|-----------|----------|
| Back | chevron | `chevron.left` | `ArrowBack` |
| 32 loại / Danh sách | cube | `cube` | `ViewInAr` |
| Bản đồ tile/row | scope | `scope` / binoculars | `TravelExplore` / `MyLocation` |
| Thủ công | plus | `plus` | `Add` |
| Camera AI | camera | `camera` | `PhotoCamera` |
| Cập nhật / bớt | minus | `minus` | `Remove` |
| Chevron row | chevron right | `chevron.right` | (optional trailing) |

Tile bg: 32 loại/Thủ công `#0C84C0` · bản đồ `#1B8A4A` · Camera AI indigo · Danh sách gray · Cập nhật orange/warn.

## 8. Motion

Không `/wf-anim` trên hub `asset-hub`.

## 9. GAP

| ID | Demo vs native | Quyết định |
|----|----------------|------------|
| GAP-F-AHUB-01 | Wallet title live | Optional `road-routes/search` · fail → demo · **cấm** invent org API |
| GAP-F-AHUB-02 | 32 vs 36 | Subtitle = live count · tile marketing «32 loại tài sản» · fail → «32» |
| GAP-F-AHUB-03 | AI pending | GET Draft on appear · empty **ẩn** · ≥1 row đầu + CTA |
| GAP-MOB-ACT-05 | Kit hub đã map | reuse · **cấm** raw grid |
| GAP-MOB-ACT-06 | Sibling 8 | toast nhãn · **không** start `pending_confirm` |
| GAP-MOB-ACT-07 | Submit trên hub | **cấm** |
| GAP-MOB-ALIGN-01 | Dual chrome | Cùng tiles/sections/wallet core · patrol iOS-only OK |
| GAP-MOB-UX-07 | design ↔ HTML | Pack proto khớp design.md · toast labels PO |
| GAP-MOB-DES-PFX-01 | Board prefix | `ios/index.html` · `android/index.html` |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | mobile-ui-ux-analy |
| skillVersion | 2026.08.19.07 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.20 |
| rulesVersion | 2026.08.19.23 |
| generatedAt | 2026-08-19T09:18:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:c4be71e3e31309204f5a43ff4fd1aed611bcc7ab643bcdb054e0170334628bf2 |

---
<!-- Version meta: skillId=mobile-ui-ux-analy skillVersion=2026.08.19.07 schemaVersion=1 workflowVersion=2026.08.19.20 rulesVersion=2026.08.19.23 versionGate=rechecked -->
