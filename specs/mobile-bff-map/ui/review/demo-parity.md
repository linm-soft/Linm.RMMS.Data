# Demo parity — mobile-bff-map

Nguồn: `ui/prototype/{ios,android}/index.html` `#zone-tileurl-note` · DA controlHint (hash skip) · PO compact  
Slash: `/review-demo-design-mobile`  
Ngày: 2026-09-12 · `task_d741af34` · autoApprove=ON

## Verdict

**Must đóng** — dual copy / zone ids khớp · không màn `#sc-*` mới · không invent `#i-*`. `design_confirm` **approve**.

## Must

| Id | Check | Result |
|----|-------|--------|
| GAP-MOB-DEMO-COPY-01 | Title **Nguồn lớp nền** dual | **PASS** |
| GAP-MOB-DEMO-COPY-02 | Label **Đường dẫn lớp nền** · **Lớp nền clip** · **Lớp overlay** dual | **PASS** |
| GAP-MOB-DEMO-COPY-03 | Peer cite **Bản đồ tài sản** · **Bản đồ ca** dual | **PASS** |
| GAP-MOB-DEMO-COPY-04 | Chip **Khách** · **Cần đăng nhập** · **Không dùng CDN bên ngoài** | **PASS** |
| GAP-MOB-ALIGN-01 | Shared zones copy dual · chrome HIG vs Material DEFER OK | **PASS** |
| GAP-MOB-ACT-02 | Không draw/heatmap/sheet · không `#sc-*` mới | **PASS** |
| GAP-TAB-01 | `tabs: none` | **PASS** |
| GAP-DES-DEMO-RESCAN-01 | Design dùng DA inventory · không re-scan | **PASS** |
| GAP-MAP-OSM-CDN-01 | Prototype ghi 0 CDN · TileUrl BFF | **PASS** (note) |
| GAP-MOB-DES-PFX-01 | Board `ios/index.html` · `android/index.html` tách path | **PASS** |
| GAP-MOB-UX-07 | design.md zone ids ↔ HTML | **PASS** |

## DEFER platform-OK

| Token | iOS | Android |
|-------|-----|---------|
| Frame | 390×844 | 412×915 |
| Nav | inline 17 HIG | Material top 20 + primary bar |
| Cards | grouped inset | elevated cards |
| Engine cite | MapKit + BFF MVT | OSM-style + BFF MVT |

## Should (non-blocking)

| Id | Note |
|----|------|
| A11y | zone ids `zone-tile-*` · OK |
| Icon | không invent `#i-*` · OK |

## Gate

Must mở = **0** → `design_confirm` **approve** (autoApprove=ON).

## Version meta

| Field | Value |
|-------|-------|
| skillId | review-demo-design-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| rulesVersion | 2026.09.12.1 |
| generatedAt | 2026-09-12T07:00:00.000Z |
| contentHash | sha256:b04a50005f77e99fc2c564e39ac3a438cce8742996899ef2aaa47b698f7e0131 |
| taskId | `task_d741af34` |
