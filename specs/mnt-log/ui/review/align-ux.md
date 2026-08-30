# Align UX — mnt-log (live vs demo)

| Field | Value |
|-------|-------|
| feature | `mnt-log` |
| slash | `/review-align-ux-ios-android` |
| status | **Aligned** |
| Must open | **0** |
| updatedAt | `2026-08-29T08:20:00.000Z` |

## Vision CORE (Read PNG)

| Shot | Zone | vs demo `#sc-mnt-log` |
|------|------|------------------------|
| A3-CORE (iOS) | TopBar **Nhật ký xử lý** · WO card Nạo cống / WO-DEMO-2 / Đã hoàn thành · section **Nhật ký** · empty **Chưa có nhật ký** · toast fail · tab `work` | **match** empty/fail path |
| P6-CORE (Android) | same zones · Material back chevron · overflow chrome OK | **match** |
| P6-CORE-2 | same fold (empty fits 1 viewport) | **match** |

## `#i-*` / `.row-icon` checklist

| Demo | Live iOS | Live Android | Gap |
|------|----------|--------------|-----|
| WO header `.row.no-icon` | no leading tile | no leading tile | — |
| Timeline CSS dots (not invent `#i-*`) | empty path (GET fail) | empty path | — |
| Tab `#i-home` / mappin / warning / wrench / person | glyphs visible | glyphs visible | — |
| `#i-chevron-left` back | text+chevron **Công việc** | icon-btn ArrowBack | chrome OK |

**Không** GAP-MOB-UX-COMP-03 · **không** GAP-MOB-E2E-VIS-01 (đã Read PNG).

## Form

Readonly · **không** submit CTA → form-field e2e **N/A**.

## Must / Should

| Sev | ID | Note |
|-----|-----|------|
| Should | GAP-MOB-A11Y-01 | iOS log glyph id · Maestro point-tap |
| — | Must | **none** |

autoApprove=ON → `align_confirm=approve` · handoff Review.
