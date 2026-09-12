# Align UX — asset-detail (live vs demo)

| Field | Value |
|-------|-------|
| feature | `asset-detail` |
| slash | `/review-align-ux-ios-android` |
| status | **Not Aligned** · Android Must open · iOS Aligned |
| demo | `ui/prototype/{ios,android}/index.html` `#sc-asset-detail` |
| live | `qa/screens/A3-CORE.png` · `P6-CORE.png` |
| updatedAt | `2026-09-01T16:41:26.000Z` |

## Visual compare (Read CORE)

| Zone | Demo | Live iOS A3 | Live Android P6 | Gap |
|------|------|-------------|-----------------|-----|
| Hero Mã TS + Code | demo seed | **KM-QL1-NA-461** live | empty list **Chưa có tài sản** | **GAP-QA-REAL-01** Android |
| Title | Chi tiết / Chi tiết tài sản | **Chi tiết** | Danh sách (not detail) | Android blocked |
| Rows Loại / Tuyến / GPS | text rows | Cột Km · QL.1 · Km 461+000 · GPS | — | iOS OK |
| CTA Ghim trên bản đồ | primary | visible | — | iOS OK |

## Verdict

**Not Aligned** (dual) — iOS Aligned · Android Not Aligned · **cấm** `align_confirm` · **cấm** `phase=review`.

CLI P6 PASS ≠ visual detail · **GAP-MOB-E2E-VIS-01**.
