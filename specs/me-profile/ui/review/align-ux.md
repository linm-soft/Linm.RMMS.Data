# Align UX — me-profile (live vs demo)

| Field | Value |
|-------|-------|
| feature | `me-profile` |
| role | `/review-align-ux-ios-android` · `/agent-qa-mobile` |
| verdict | **Aligned** |
| Must open | **0** |
| autoApprove | ON · `align_confirm=approve` |
| demo | `ui/prototype/{ios,android}/index.html` `#sc-me-profile` · `DES-MOB-ME-PROFILE` |
| live | `qa/screens/A3-CORE.png` (iOS) · `P6-CORE.png` · `P6-CORE-2.png` (Android) |
| updatedAt | `2026-08-30T19:56:00.000Z` |

## Vision (REQUIRED — CLI ≠ visual)

| Zone | Demo | Live iOS A3 | Live Android P6 | Gap |
|------|------|-------------|-----------------|-----|
| Title | **Hồ sơ** | **Hồ sơ** | **Hồ sơ** | — |
| Back | iOS chevron+**Tôi** · Android icon-only | **Tôi** + chevron | icon-only ArrowBack | — (Design GAP-MOB-ALIGN-01 OK) |
| Avatar | `#i-person` circle | person glyph circle | person glyph circle | — |
| fullName | TextField | **Linm Soft Admin** | **Linm Soft Admin** | — |
| phone | TextField | **0901234567** (filled) | filled | — |
| email | TextField | empty OK (EMAIL-01) | empty OK | — |
| userName | readonly | **linm-soft** muted | **linm-soft** muted | — |
| citizenId | display-only nếu GET | hidden (GET thiếu) | hidden | — (CITIZEN-01 OK) |
| CTA Lưu | primary | present | present | — |
| Section pwd | **Đổi mật khẩu** | below fold (keyboard) | visible + P6-2 | — |
| Secure ×3 + secondary | present | assert Maestro | present P6-2 | — |
| Tabs | 5 · **me** active | me active | me active | — |
| `.row-icon` list | none (form) | n/a | n/a | — |
| Watermark | — | none | none | — |

**Cấm** GAP-MOB-E2E-VIS-01 — CORE PNG **Read** done.  
IME chrome (iOS keyboard / Android Gboard floating bar) = OS · **không** Must.

## Observe (non-Must)

| Item | Note |
|------|------|
| A3 keyboard open | phone field focused khi shot · form CORE vẫn đọc được |
| Android TopBar overflow `…` | kit default · not in HTML demo · **không** block P1 |
| Android floating a11y bar | emulator Gboard overlay · **không** app chrome |
| Demo `entry-hint` | Design only · **không** trên live |
| Section label casing | Android may render uppercase via SectionLabel · copy SSOT OK |

## Result

| Gate | Value |
|------|-------|
| align_confirm | **approve** (autoApprove) |
| handoff | `/agent-review-mobile` |
