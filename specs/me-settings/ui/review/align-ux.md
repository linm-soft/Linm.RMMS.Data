# Align UX — me-settings (live vs demo)

| Field | Value |
|-------|-------|
| feature | `me-settings` |
| role | `/review-align-ux-ios-android` · `/agent-qa-mobile` |
| verdict | **Aligned** |
| Must open | **0** |
| autoApprove | ON · `align_confirm=approve` |
| demo | `ui/prototype/{ios,android}/index.html` `#sc-me-settings` · `DES-MOB-ME-SETTINGS` |
| live | `qa/screens/A3-CORE.png` (iOS) · `P6-CORE.png` · `P6-CORE-2.png` (Android) |
| updatedAt | `2026-08-30T21:00:34.000Z` |

## Vision (REQUIRED — CLI ≠ visual)

| Zone | Demo `.row-icon` / `#i-*` | Live iOS A3 | Live Android P6 / P6-2 | Gap |
|------|---------------------------|-------------|------------------------|-----|
| Title | **Cài đặt** | **Cài đặt** | **Cài đặt** | — |
| Back | iOS chevron+**Tôi** · Android icon-only | **Tôi** + chevron | icon-only ArrowBack | — (Design GAP-MOB-ALIGN-01 OK) |
| sectionPerm | **Quyền ứng dụng** | present | present | — |
| rowLocation | `#i-mappin` blue tile + status | pin glyph · **Đã cấp** | pin glyph · **Đã cấp** | — |
| rowCamera | `#i-camera` indigo/purple tile | camera glyph · **Đã cấp** | camera glyph · **Đã cấp** | — |
| rowNotifyOs | `#i-bell` tile | bell glyph | bell glyph | — |
| btnOpenOs | Secondary **Mở Cài đặt hệ thống** | present | present | — |
| sectionSync | **Đồng bộ** | present | present | — |
| rowOffline | `#i-sync` teal/orange tile | sync glyph | sync glyph | — |
| sectionAbout | **Thông tin** | present | present (P6 / P6-2) | — |
| appVersion | **Phiên bản** + Bundle | present (empty «—» OK) | **0.1.0 (1)** | — |
| rowPrivacy | `#i-info` tile | info glyph | info glyph (P6-2) | — |
| Tabs | 5 · **me** active | me active | me active | — |
| Watermark | — | none | none | — |

**Cấm** GAP-MOB-E2E-VIS-01 — CORE PNG **Read** done.  
**Cấm** GAP-MOB-UX-COMP-03 — mọi demo `.row-icon` / `#i-*` có ô glyph màu trên live cả 2 OS.

## Observe (non-Must)

| Item | Note |
|------|------|
| Android TopBar overflow `…` | kit default · not in HTML demo · **không** block P1 (peer me-profile) |
| Demo `entry-hint` | Design only · **không** trên live |
| Section label casing | Android may render uppercase via SectionLabel · copy SSOT OK |
| iOS version empty | Bundle empty → «—» per DoD · Android shows `0.1.0 (1)` |
| GAP-MOB-MESET-PRIVACY-01 | HTTPS URL chờ khách · static privacy copy · **không** Must block QA |

## Result

| Gate | Value |
|------|-------|
| align_confirm | **approve** (autoApprove) |
| handoff | `/agent-review-mobile` |

---
<!-- Version meta: skillId=review-align-ux-ios-android skillVersion=2026.08.20.03 schemaVersion=1 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
