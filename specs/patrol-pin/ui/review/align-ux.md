# Align UX — patrol-pin (live vs demo)

| Field | Value |
|-------|-------|
| feature | `patrol-pin` |
| slash | `/review-align-ux-ios-android` |
| taskId | `task_9a00d2c5` |
| method | Read CORE PNG vs prototype `#i-*` / zones |
| verdict | **Aligned** |
| Must open | **0** |
| align_confirm | **approve** · autoApprove=ON |
| updatedAt | `2026-09-12T12:29:00.000Z` |

## Compare

| Shot | Live | Demo zones | Result |
|------|------|------------|--------|
| A3-CORE | iOS hub · `#btn-pin-here` · copy **Ghim vị trí hiện tại** · mappin glyph | `#sc-patrol-home` · DES-MOB-CI-PIN-HERE · `#i-mappin` | **PASS** |
| P6-CORE | Android hub · same CTA + copy | same | **PASS** · dual-OS |
| P6-CORE-2 | Android map · pin CTA dưới panel | `#sc-patrol-map` · DES-MOB-CI-PIN-HERE | **PASS** |

## Must / gaps

- none · **cấm** GAP-MOB-UX-COMP-03 / GAP-MOB-E2E-VIS-01
- watermark / placeholder: none
- handoff sheet post-pin: out of CORE store shots · covered Dev DoD

## Demo paths

- ios: `ui/prototype/ios/index.html`
- android: `ui/prototype/android/index.html`
