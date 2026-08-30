# Align UX — vis-capture (live vs demo)

| Field | Value |
|-------|-------|
| feature | `vis-capture` |
| role | `/review-align-ux-ios-android` · `/agent-qa-mobile` |
| verdict | **Aligned** |
| Must open | **0** |
| autoApprove | ON · `align_confirm=approve` |
| demo | `ui/prototype/{ios,android}/index.html` `#sc-vis-capture` · `DES-MOB-VIS-CAPTURE` |
| live | `qa/screens/A3-CORE.png` (iOS) · `P6-CORE.png` · `P6-CORE-2.png` (Android) |
| updatedAt | `2026-08-29T10:25:00.000Z` |

## Vision (REQUIRED — CLI ≠ visual)

| Zone | Demo | Live iOS A3 | Live Android P6 | Gap |
|------|------|-------------|-----------------|-----|
| Title | **Nhận diện mặt đường** | **Nhận diện mặt đường** | **Nhận diện mặt đường** | — |
| Back | iOS `#i-chevron-left`+**Vấn đề** · Android icon-only | **Vấn đề** + chevron | icon-only ArrowBack | — (Design chrome OK) |
| Section | **Ảnh hiện trường** | present | present | — |
| `#i-camera` | photo-slot glyph | dashed slot + camera | camera glyph | — (không GAP-MOB-UX-COMP-03) |
| Rows | `.row.no-icon` Loc/Acc/Class/Sev | 4 rows · Loc+Acc live · Class/Sev `—` pre-detect | same dual | — |
| CTA | **Gắn sự cố** · **Bỏ qua** | both | both (GAP-MOB-VIS-DUAL-01) | — |
| Tabs | 5 · **incident** active | incident active | incident active | — |
| WO `.row-icon` | **none** (`no-icon`) | n/a | n/a | — |
| Watermark | — | none | none | — |

**Cấm** GAP-MOB-E2E-VIS-01 — CORE PNG **Read** done.  
Demo post-detect (Nứt dọc / Cao) vs live pre-detect (`—`) = state · **không** Must.

## Observe (non-Must)

| Item | Note |
|------|------|
| Android TopBar overflow `…` | kit default · not in HTML demo · **không** block P1 |
| Loc stamp `Km 468+200` vs demo `1556+050` | live session/GPS · **không** pictogram Must |
| Maestro text «±»/«đã chốt» NFC·NFD | **Should** · `qa/bugs/vis-capture.md` |

## Result

| Gate | Value |
|------|-------|
| align_confirm | **approve** (autoApprove) |
| handoff | `/agent-review-mobile` |
