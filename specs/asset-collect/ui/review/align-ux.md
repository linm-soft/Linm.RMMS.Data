# Align UX — asset-collect (live vs demo)

| Field | Value |
|-------|-------|
| feature | `asset-collect` |
| role | `/review-align-ux-ios-android` · `/agent-qa-mobile` |
| verdict | **Aligned** |
| Must open | **0** |
| Should | **2** |
| autoApprove | ON · `align_confirm=approve` |
| demo | `ui/prototype/{ios,android}/index.html` `#sc-asset-collect` · `DES-MOB-ASSET-COLLECT` |
| live | `qa/screens/A3-CORE.png` (iOS) · `P6-CORE.png` · `P6-CORE-2.png` (Android) |
| updatedAt | `2026-08-30T23:20:00.000Z` |

## Vision (REQUIRED — CLI ≠ visual)

| Zone | Demo | Live iOS A3 | Live Android P6 / P6-2 | Gap |
|------|------|-------------|------------------------|-----|
| Title | **Thu thập thủ công** | **Thu thập thủ công** | **Thu thập thủ công** | — |
| Back | iOS chevron+**Tài sản** · Android icon-only | **Tài sản** + chevron | icon-only ArrowBack | — (HIG/Material OK) |
| Type Select | Loại tài sản * | Select live catalog | same | — (TYPE-01 live SSOT) |
| Name | Text * filled | **E2E cột km QA** | **E2E cột km QA** | — |
| RouteKm | readonly display | empty placeholder (no invent) | same | — (ROUTE-01) |
| GPS | Lat,Lng · ±m | acquiring / pin | **20.285, 105.8048 · ±5 m** | — (GPS live) |
| Status | Tốt default | **Tốt** | **Tốt** | — |
| Photo `#i-camera` | camera glyph slot | asserted Maestro (keyboard fold) | blue camera slot | — **không** GAP-MOB-UX-COMP-03 |
| CTA | **Thêm tài sản** | asserted · keyboard covers | visible P6-2 | — |
| Tabs | 5 · **home** active | home on | home on | — |
| Watermark | — | none | none | — |
| `.row-icon` list tiles | none (form) | n/a | n/a | — |

**Cấm** GAP-MOB-E2E-VIS-01 — CORE PNG **Read** done.  
IME chrome (iOS keyboard / Android Gboard floating bar) = OS · **không** Must.

## Must — PASS

| Zone | Demo | iOS live | Android live | Kit | Verdict |
|------|------|----------|--------------|-----|---------|
| `#sc-asset-collect` | proto full | A3-CORE | P6 + P6-2 | TopBar · Select · TextField · PhotoRow · Primary · Toast | **PASS** |
| Camera pict | `#i-camera` | glyph (assert) | glyph | MapFile Camera | **PASS** |
| Scroll fold | content | form+keyboard | form + CTA fold | scroll-capture | **PASS** |
| Dual chrome | SSOT | back text iOS | icon-only AND | design OK | **PASS** |

## Should — non-block

| ID | Note | Owner |
|----|------|-------|
| GAP-QA-ASSET-COLLECT-COPY-01 | Live labels rút gọn (`Loại *` / `Tên *` / `Định vị *`) vs design SSOT (`Loại tài sản *` / `Tên / mô tả *` / `Định vị ghim tự động *`) · title+CTA khớp | Dev observe · **non-block** P1 |
| GAP-QA-ASSET-COLLECT-FORM-SUBMIT-01 | Route empty → CTA gated · **cấm** invent Route · fill→submit→body **DEFER** đến seed session/route · **không** FORM-01 Must | QA/Dev seed · **non-block** |

## Observe

| Item | Note |
|------|------|
| A3 keyboard open | name focused khi shot · CORE form vẫn đọc được |
| Android TopBar `…` | kit default · not in HTML demo · **không** block |
| Android floating IME bar | emulator Gboard overlay · **không** app chrome |
| Type live ≠ demo preview | «Bảo vệ mái dốc» · PO TYPE-01 live catalog SSOT |

## Result

| Gate | Value |
|------|-------|
| align_confirm | **approve** (autoApprove) |
| Must open | **0** |
| handoff | `/agent-review-mobile` |
