# UX analy — asset-adjust

**Sources:** prototype/ios · prototype/android · ui/design.md · control-hint + real-data (hash skip) · PO  
**Brand tokens:** primary `#0C84C0` · deep `#086A9A` · danger `#FF3B30`/`#B3261E` · success `#3CB448` · warn `#FCB43C` · surface iOS `#F2F2F7` · Android `#FFFBFE`

## 1. IA

```
Login (ngoài tab) → Tab 5
- Trang Chủ: asset-hub tile Cập nhật / bớt → push #sc-asset-adjust DES-MOB-ASSET-ADJUST   ← this pack
- Tuần đường / Vấn đề / Công việc / Tôi: reuse sibling
#sc-asset-adjust
  → Back = go('asset-hub')
  → Search debounce = GET asset/road-assets?search=
  → Sửa = go('asset-detail') + Id · **cấm** PUT UI P1
  → Bớt = open #md-asset-remove DES-MOB-ASSET-REMOVE
       → Bớt khỏi sổ = DELETE soft · toast Code · remove row
       → Giữ lại = close modal
  → GET fail = demo SSOT + toast · **cấm** fake 200
  → Empty = EmptyState
  → không child sheet / segment / collect/AI/list form
```

**Cấm** invent tab. Số tab = 5 · thứ tự: Trang Chủ · Tuần đường · Vấn đề · Công việc · Tôi.  
Surface: `tabs: none` · shell tab `home` giữ (`GAP-TAB-01`).

## 2. Màn

| DES / sc-* | Tên VN | iOS chrome | Android chrome | CTA |
|------------|--------|------------|----------------|-----|
| DES-MOB-ASSET-ADJUST `#sc-asset-adjust` | Cập nhật / bớt | nav-bar · back text «Tài sản» | top-bar · icon-only back | Sửa · Bớt |
| DES-MOB-ASSET-REMOVE `#md-asset-remove` | Bớt tài sản khỏi sổ? | modal card | dialog card | Bớt khỏi sổ · Giữ lại |
| DES-MOB-TABBAR | Tab 5 | tab Trang Chủ on | same | shell |

## 3. Zone

### DES-MOB-ASSET-ADJUST

| Zone | Demo (user thấy) | Map row (`docs/html-to-native-map.md` + `ui/html-to-native-map.md`) | SwiftUI | Compose |
|------|------------------|---------------------------------------------------------------------|---------|---------|
| Header | Back · title Cập nhật / bớt | A `.nav-bar` / `.top-bar` | `LinmTopBar` | `LinmTopBar` |
| Search | Tìm mã TS cần sửa hoặc bớt… · `#i-search` | A `.search` / `#i-search` | `LinmSearchField` | same |
| List | Row Code·Type / Route·Km · Sửa · Bớt | A `.card-group` `.row` | `LinmListRow` + Secondary/Danger | same + Text |
| Tab | 5 · Trang Chủ selected · label **13** | A `.tab` | `LinmTabBar` | same |
| Feedback | toast ok/err | toast | `LinmToast` | `LinmToast` |
| Empty | không có TS | empty | EmptyState | same |

### DES-MOB-ASSET-REMOVE

| Zone | Demo | Map | SwiftUI | Compose |
|------|------|-----|---------|---------|
| Title | Bớt tài sản khỏi sổ? | modal title | ModalTitle | Dialog title |
| Body | Ẩn khỏi danh sách hiện trường… | modal body | ModalBody | Dialog text |
| Confirm | Bớt khỏi sổ (danger) | primary danger | Primary danger | Filled error |
| Cancel | Giữ lại | secondary | Secondary | Outline / text |

**States:**

| State | Hành vi |
|-------|---------|
| default | GET list · bind rows |
| empty | EmptyState · **cấm** alert |
| loading | nhẹ · **cấm** full-screen block tab |
| error / offline | demo SSOT rows · toast lỗi · screen **vẫn mở** · **cấm** fake 200 |
| permission | GPS/camera **N/A** P1 |
| leave dirty | **N/A** — không form dirty · modal open → Cancel/back đóng |
| search | debounce GET `?search=` · keyboard không đè list |
| delete fail | toast · giữ row · **cấm** fake 200 |

## 4. Copy SSOT

Cập nhật / bớt · Tài sản · Tìm mã TS cần sửa hoặc bớt… · TS-20260810-014 · Cống ngang · QL.1 · Km 1556+000 · TS-20260809-088 · Biển P.127 · HCM · Biển báo · Sửa · Bớt · Bớt tài sản khỏi sổ? · Ẩn khỏi danh sách hiện trường (không xóa hẳn). Có thể khôi phục trên Web. · Bớt khỏi sổ · Giữ lại · Đã bớt tài sản · TS-20260810-014 · Trang Chủ · Tuần đường · Vấn đề · Công việc · Tôi

**Cấm trên máy:** «Có mạng» · device label «iPhone» / «· Android» · «Phiên bản Gói N» / foot Gói · «gen realapp» · collect/AI/list form copy · invent `api/v1/asset-adjust` · hard delete copy · system confirm.

## 5. Brand

Primary `#0C84C0` · deep `#086A9A` · danger `#FF3B30` / `#B3261E` · success `#3CB448` · warn `#FCB43C` · surface iOS `#F2F2F7` · Android `#FFFBFE`.  
**Cấm** skin đỏ CCCD · **cấm** M3 tím tab indicator.

## 6. Signal

**N/A** trên `#sc-asset-adjust` (signal trên hub `home` nếu có). **Cấm** «Có mạng» · **cấm** tap-cycle trên adjust.

## 7. Pictogram

| Control | Motif demo | SF Symbol | Material |
|---------|------------|-----------|----------|
| Back | chevron-left `#i-chevron-left` | `chevron.left` | `ArrowBack` |
| Search | search `#i-search` | `magnifyingglass` | `Search` |
| Hub entry | minus `#i-minus` | `minus` | `Remove` |
| Tab Trang Chủ | house motif | `house` | `Home` |

**Cấm** invent `#i-*` mới trên adjust P1. Row CTA = text/filled buttons · không icon row.

## 8. Motion

Không `/wf-anim` trên adjust `asset-adjust`. Modal open/close + toast auto-dismiss chỉ.

## 9. GAP

| ID | Demo vs native | Quyết định |
|----|----------------|------------|
| GAP-MOB-ASSET-ADJUST-PACK-01 | STATUS/scan sheet vs full screen | **screen** · **cấm** bottom-sheet chrome |
| GAP-MOB-ASSET-ADJUST-SEARCH-01 | iOS dài / Android ngắn p1 | **SSOT dài dual** pack proto |
| GAP-MOB-ASSET-ADJUST-ROW-01 | iOS 2 / Android 1 demo | live = GET · demo count = sample only |
| GAP-MOB-ASSET-ADJUST-EDIT-01 | Sửa vs PUT form | **nav detail** · PUT UI OUT P1 |
| GAP-MOB-ASSET-ADJUST-MEDIA-01 | Ảnh update | **OUT** P1 |
| GAP-MOB-ASSET-ADJUST-NAV-01 | Hub toast → push | wire push khi ship |
| GAP-MOB-ACT-01/02 | Gộp collect/AI/list/sheet | **Cấm** |
| GAP-MOB-ACT-05 | Kit đã map | reuse · **cấm** raw NavBar / TabView |
| GAP-MOB-ACT-06 | asset-detail | reuse nav · **cấm** start sibling |
| GAP-MOB-ACT-07 | GET/search/DELETE | **cùng slug** · **không** enqueue |
| GAP-MOB-ALIGN-01 | Dual chrome | Cùng zones + copy · back/btn HIG vs Material OK |
| GAP-TAB-01 | Tab index | shell `home` · `tabs: none` surface |
| GAP-TYP-01 | Type | tab/sub **13** · row ≥**16** · modal title **17** |
| GAP-DES-DEMO-RESCAN-01 | Hash skip | **Cấm** re-scan · dùng control-hint + real-data |
| GAP-MOB-UX-07 | design ↔ HTML | Pack proto khớp design.md · search dài dual · **không** foot Gói |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | mobile-ui-ux-analy |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | 2026-08-30T23:40:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:asset-adjust-control-hint-20260830 |
| taskId | `task_6476a9ab` |

---
<!-- Version meta: skillId=mobile-ui-ux-analy skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
