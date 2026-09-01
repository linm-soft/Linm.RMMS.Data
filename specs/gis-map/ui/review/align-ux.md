# Align UX — gis-map (live vs demo)

Slash: `/review-align-ux-ios-android` · visual-compare-core  
Ngày: 2026-08-31 · `task_9d4480e2` · autoApprove=ON · e2eQa=ON

## Verdict

**Aligned** — Must **0**. CLI `ok:true` ≠ vision; QA **Read** `A3-CORE.png` + `P6-CORE.png` + `P6-CORE-2.png` vs `ui/prototype/{ios,android}/index.html` `#sc-gis-map`.

## CORE Read

| Shot | Content |
|------|---------|
| A3-CORE (iOS) | Title **Bản đồ tài sản** · back **Tài sản** · trailing **Lớp** · search **Tìm tài sản, sự cố…** · basemap Đường/Phố/Vệ tinh/Toàn tuyến · legend + **Hành lang** · MapKit Phan Rang · pin TS/SC · corridor · Tab 5 · **không** watermark |
| P6-CORE (And) | Title · icon back · **Danh sách** · basemap · toast demo OMS (BFF empty) · pin TS/SC · **không** search / **không** Hành lang (dual) |
| P6-CORE-2 (And) | Esri **Phố** + isolate **Tài sản** · pin TS · legend 3 chip · Tab 5 |

## Checklist

| Id | Check | Result |
|----|-------|--------|
| GAP-MOB-E2E-VIS-01 | Read CORE PNG (không CLI-only) | **PASS** |
| GAP-MOB-UX-COMP-03 | Demo `.row-icon`/`#i-*` trên map CORE | **N/A** — map pins · không row tile |
| GAP-MOB-ALIGN-01 | Shared zones copy dual | **PASS** |
| GAP-MOB-UX-COLOR-* | Token dual chrome | **PASS** · DEFER platform-OK |
| GAP-TAB-01 | Shell tab 5 · không invent tab map | **PASS** |
| GAP-DEV-MOB-PLACEHOLDER-01 | Watermark / Gói | **PASS** · none |
| GAP-QA-REAL-01 | BFF có data mà UI mock | **N/A** — BFF geojson `features:[]` · demo OMS PO fail-open |

## DEFER (PO §7 · non-Must)

| Token | Note |
|-------|------|
| Search / Hành lang / Lớp vs Danh sách | Dual chrome · live khớp demo |
| Android first-paint toast | Covers legend briefly · dismiss/P6-2 OK |

## Gate

Must mở = **0** → `align_confirm` **approve** (autoApprove=ON) · QA phase **confirmed**.

## Version meta

| Field | Value |
|-------|-------|
| skillId | review-align-ux-ios-android |
| skillVersion | 2026.08.29.1 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.31.2 |
| generatedAt | 2026-08-31T01:25:06.000Z |
| taskId | `task_9d4480e2` |

---
<!-- Version meta: skillId=review-align-ux-ios-android · workflowVersion=2026.08.31.2 · versionGate=rechecked -->
