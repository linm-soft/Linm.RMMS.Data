# Demo parity — gis-map

Nguồn: `ui/prototype/{ios,android}/index.html` `#sc-gis-map` · DA controlHint (hash skip) · PO §7 dual chrome  
Slash: `/review-demo-design-mobile`  
Ngày: 2026-08-31 · `task_81ce36d6` · autoApprove=ON

## Verdict

**Must đóng** — dual copy / icon / type shared zones. Dual chrome SEARCH/LAYER/CORRIDOR = **DEFER platform-OK** (PO chốt). `design_confirm` **approve**.

## Must

| Id | Check | Result |
|----|-------|--------|
| GAP-MOB-DEMO-COPY-01 | Title **Bản đồ tài sản** dual | **PASS** |
| GAP-MOB-DEMO-COPY-02 | Basemap **Đường · Phố · Vệ tinh · Toàn tuyến** dual | **PASS** |
| GAP-MOB-DEMO-COPY-03 | Legend **Tất cả · Tài sản · Sự cố** dual | **PASS** |
| GAP-MOB-DEMO-COPY-04 | Entry **Xem trên bản đồ** / **Bản đồ tài sản** / **Ghim trên bản đồ** | **PASS** |
| GAP-MOB-DEMO-ICON-01 | `#i-chevron-left` back dual · `#i-scope` hub | **PASS** |
| GAP-MOB-DEMO-ICON-02 | `#i-search` trên iOS search overlay (Android N/A) | **PASS** |
| GAP-MOB-DEMO-TYPE-01 / GAP-TYP-01 | chip/legend **13** · title **17** | **PASS** |
| GAP-MOB-ALIGN-01 | Shared zones copy dual · DEFER chrome only | **PASS** |
| GAP-MOB-ACT-02 | Không draw/heatmap/sheet layers P1 trên map | **PASS** |
| GAP-TAB-01 | `tabs: none` trên map · shell home giữ | **PASS** |
| GAP-DES-DEMO-RESCAN-01 | Design dùng DA inventory · không re-scan | **PASS** |

## DEFER platform-OK (PO §7)

| Token | iOS | Android |
|-------|-----|---------|
| Back | text **Tài sản** + chevron | icon-only chevron |
| Trailing | **Lớp** → toast | **Danh sách** → `asset-list` |
| Search | overlay **Tìm tài sản, sự cố…** | **không** P1 |
| Legend Hành lang | chip isolate corridor | **không** chip P1 (polyline vẫn load khi Tất cả) |
| Map engine | MapKit (native) | OSM/Esri tiles (native) |
| TS/SC legend hex | `#5856D6` / `#FF3B30` | `#6750A4` / `#D32F2F` |
| Frame | 390×844 | 412×915 |

## Should (non-blocking)

| Id | Note |
|----|------|
| A11y | ids `map-gis-*` / `gis-layer-hint` · OK |
| Popup SSOT | TS-20260810-014 · SC-2401 fallback · OK |

## Gate

Must mở = **0** → `design_confirm` **approve** (autoApprove=ON).

## Version meta

| Field | Value |
|-------|-------|
| skillId | review-demo-design-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.31.2 |
| generatedAt | 2026-08-31T00:40:00.000Z |
| contentHash | sha256:gis-map-control-hint-20260831 |
| taskId | `task_81ce36d6` |

---
<!-- Version meta: skillId=review-demo-design-mobile skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.31.2 versionGate=rechecked -->
