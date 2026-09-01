# Align UX — supervise-detail (live vs demo)

| Field | Value |
|-------|-------|
| feature | `supervise-detail` |
| role | `qa` · `/review-align-ux-ios-android` |
| status | **Aligned** |
| Must open | **0** |
| taskId | `task_63f14363` |
| updatedAt | `2026-08-31T02:50:00.000Z` |

## Sources

| Layer | Path |
|-------|------|
| Demo iOS | `ui/prototype/ios/index.html#sc-supervise-detail` |
| Demo Android | `ui/prototype/android/index.html#sc-supervise-detail` |
| Live iOS | `qa/screens/A3-CORE.png` |
| Live Android | `qa/screens/P6-CORE.png` |

## CORE compare (Read PNG)

| Check | Result |
|-------|--------|
| Title **Chi tiết check-in** dual | **PASS** |
| Back chrome (iOS text · Android icon) | **platform-OK** |
| Hero **Nguyễn Văn A** · caption **Mã** · **CC-20260810-001** | **PASS** |
| Row copy 6 lines SSOT | **PASS** |
| CTA **Xem trên bản đồ** | **PASS** |
| Tab **Trang Chủ** selected | **PASS** |
| Demo row pictogram (detail = text rows · no `#i-*` on rows) | **N/A** · live matches |
| Watermark / device label | **PASS** (none) |

## Verdict

**Aligned** — QA Read A3-CORE + P6-CORE vs dual HTML · Must **0** · handoff `/agent-review-mobile`.
