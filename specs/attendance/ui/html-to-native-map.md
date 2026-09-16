# HTML → native map — attendance (hub)

Cite SSOT `docs/html-to-native-map.md`. Feature deltas (`#sc-attendance`):

| Demo | Kit dual | Notes |
|------|----------|-------|
| `.large-title` Chấm công | `LinmLargeTitle` | fixed |
| `.seg` Tuần đường / Chấm công | `LinmSegment` | idx 0 pop · idx 1 owner |
| `.hero` | `LinmHeroCard` | eyebrow · title · meta |
| Chấm vào | `LinmHeroAction` | GPS + POST |
| Báo cáo | `LinmHeroAction` ghost | **push** `#sc-attendance-report` · **cấm** toast-only |
| `.section-label` 7 ngày gần đây | `LinmSectionLabel` | |
| `.row` day | `LinmListRow` + badge | tap → `#sc-attendance-day` |
| `.toast` | `LinmToast` | check-in / locDeny / fail · **không** report/day toast |

**Cấm:** raw List / M3 NavBar · invent `/attendance/report` · `mfeStdUrl` · native alert.

## Version meta

| Field | Value |
|-------|-------|
| skillId | edit-mobile-feature |
| generatedAt | `2026-09-16T12:51:00.000Z` |
