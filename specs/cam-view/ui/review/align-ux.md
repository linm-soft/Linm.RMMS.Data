# Align UX — cam-view (live vs demo)

| Field | Value |
|-------|-------|
| feature | `cam-view` |
| slash | `/review-align-ux-ios-android` |
| verdict | **Aligned** |
| Must | **0** |
| Should | 1 (Android empty glyph) |
| DEFER | JPEG+events filled (API cameras=0) |
| align_confirm | **approve** · autoApprove ON |
| updatedAt | `2026-08-29T18:20:00.000Z` |

## Vision CORE (required)

| Shot | Read | Zone |
|------|------|------|
| `qa/screens/A3-CORE.png` | **yes** | `#sc-cam-view` EmptyState · iOS 1320×2868 |
| `qa/screens/P6-CORE.png` | **yes** | `#sc-cam-view` EmptyState · Android 1080×1920 |
| `qa/screens/P6-CORE-2.png` | **yes** | same empty fold (scroll no-op) |
| Demo | `ui/prototype/{ios,android}/index.html` · `?empty=1` / `#content-empty` | DES-MOB-CAM-VIEW-EMPTY |

CLI e2e **PASS** ≠ Aligned — vision done (cấm GAP-MOB-E2E-VIS-01).

## Checklist

| Gate | Result | Notes |
|------|--------|-------|
| TopBar title **Camera xem** | **PASS** | both OS |
| Trailing **Làm mới** | **PASS** | both OS |
| Back → Tôi (iOS text · Android chevron) | **PASS** | dual chrome OK PO |
| Empty copy Online | **PASS** | «Chưa có camera Online» + hint · **cấm** fake TCM403 |
| Tab **me** active | **PASS** | both |
| Watermark / device label | **PASS** | none |
| `.row-icon` / `#i-*` event rows | **N/A env** | no Online cam · filled demo DEFER |
| JPEG card `#i-video` | **N/A env** | EmptyState path · MapFile emptyCam=EmptyState |
| Android empty leading glyph | **Should** | demo `#i-video` · Android text-only EmptyState |
| Dual empty parity | **PASS** | same zone · Android no-icon = Should only |

## Must / Should / DEFER

| Sev | ID | Note |
|-----|----|------|
| Must | — | **0** |
| Should | GAP-MOB-UX-COMP-03 (empty) | Android empty thiếu glyph `#i-video` vs demo/iOS — kit EmptyState map OK · polish |
| DEFER | JPEG+events | `GET cameras` totalCount=0 · seed Online → re-run CORE |

## 3-up (empty zone)

| Demo (`?empty=1`) | iOS A3-CORE | Android P6-CORE |
|-------------------|-------------|-----------------|
| Empty + `#i-video` | Empty + dashed placeholder | Empty title+hint (no glyph) |

---
<!-- Version meta: skillId=review-align-ux-ios-android schemaVersion=1 -->
