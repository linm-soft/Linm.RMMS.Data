# UX analy — mobile-bff-map

**Sources:** prototype/ios · prototype/android · `ui/design.md` · DA controlHint + real-data · PO compact  
**Gate:** `/mobile-ui-ux-analy` §1–§9 · **REQUIRED** trước `design_confirm` / Dev  
**Slash:** `/mobile-ui-ux-analy` · task `task_d741af34` · `2026-09-12T07:00:00.000Z`  
**Brand tokens:** primary `#0C84C0` · deep `#0A6A9A` · success `#34C759` · warn `#FF9500` · danger `#FF3B30`

## 1. IA

Login → Tab 5 · **không** surface/tab mới (`tabs: none` · `GAP-TAB-01`).  
Slug = **edit_page** TileUrl + BFF tile — consumers peer `gis-map` / `patrol-map` **giữ** push IA sẵn có.

```
Tab 5 → peer gis-map / patrol-map (reuse)
  TileUrl → {Bff}/mobile-bff/api/v1/gis/tiles/{layer}/{z}/{x}/{y}.pbf   ← THIS pack
  basemap guest · overlay JWT · geojson/clusters RMMS keep
  **không** #sc-* mới · **không** invent tab
```

## 2. Màn

| DES / zone | Tên VN | iOS chrome | Android chrome | CTA |
|------------|--------|------------|----------------|-----|
| DES-MOB-TILEURL-NOTE `#zone-tileurl-note` | Nguồn lớp nền | Inline nav title | Small top bar | none |
| DES-MOB-PEER-GIS | Bản đồ tài sản | **reuse** gis-map | **reuse** | — |
| DES-MOB-PEER-PATROL | Bản đồ ca | **reuse** patrol-map | **reuse** | — |

## 3. Zone

### DES-MOB-TILEURL-NOTE / `#zone-tileurl-note`

| Zone | Demo (user thấy) | Map row | SwiftUI | Compose |
|------|------------------|---------|---------|---------|
| Header | Nguồn lớp nền | A `.note-title` | `LinmTopBar` title | same |
| TileUrl | Đường dẫn lớp nền + path BFF | B `#zone-tile-url` | `InfoRow` / caption | Material list row |
| Basemap | Lớp nền clip · khách | B `#zone-tile-basemap` | status chip | same label |
| Overlay | Lớp overlay · cần đăng nhập | B `#zone-tile-overlay` | status chip | same |
| Peer cite | Bản đồ tài sản · Bản đồ ca | B `#zone-peer-cite` | text links cite | same |

**States:** default (BFF path) · empty overlay 401 · MapService lỗi toast peer · offline blank tile · permission n/a · leave n/a.

## 4. Copy SSOT

Nguồn lớp nền · Đường dẫn lớp nền · Lớp nền clip · Lớp overlay · Khách · Cần đăng nhập · Bản đồ tài sản · Bản đồ ca · Không dùng CDN bên ngoài.

**Cấm trên máy:** OSM.org · Esri · Google · GPS · Offline · Có mạng · P1/P2 · Gói N · device label · stub · Kind · English badges.

## 5. Brand

Primary `#0C84C0` · deep `#0A6A9A` · success `#34C759` · warn `#FF9500` · danger `#FF3B30`. **Cấm** skin đỏ CCCD / Ministry.

## 6. Signal

**N/A** — note board không Home signal pill. Peer map giữ signal SSOT riêng · **cấm** tap cycle proto.

## 7. Pictogram

**Không** invent `#i-*` · reuse peer map chevron/pin khi Dev Wave 3. Note board = text + status chips only.

## 8. Motion

**none** — không `/wf-anim` trên slug.

## 9. GAP

| ID | Demo vs native | Quyết định |
|----|----------------|------------|
| GAP-MAP-OSM-CDN-01 | TileUrl CDN → BFF | Wave 3 dual · **HARD** |
| GAP-MOB-BFF-MAP-01/02 | BFF config/route | Wave 2 Dev · không UI mới |
| GAP-DES-DEMO-RESCAN-01 | hash skip | **PASS** · dùng DA |
| GAP-TAB-01 / GAP-MOB-ACT-02 | no new screen/tab/draw | **PASS** |
| GAP-MOB-UX-07 | design ↔ HTML | khớp zone ids dual |

## Version meta

| Field | Value |
|-------|-------|
| skillId | mobile-ui-ux-analy |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 1 |
| rulesVersion | 2026.09.12.1 |
| contentHash | sha256:b04a50005f77e99fc2c564e39ac3a438cce8742996899ef2aaa47b698f7e0131 |
| generatedAt | 2026-09-12T07:00:00.000Z |
| taskId | `task_d741af34` |
