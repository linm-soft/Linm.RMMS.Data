# Crawl all 2026-08-31 (UTC folder crawl-20260830)

PASS=5 FAIL=19 TOTAL=24

**Verdict:** `GAP-E2E-RUN-01` — crawl chưa PASS hết. **Cấm** submit.

| Slug | Result | First fail |
|------|--------|------------|
| `home` | FAIL | Assert that id: sc-privacy is visible... FAILED |
| `login-forgot` | FAIL | Tap on id: btn-forgot... FAILED |
| `me` | FAIL | Assert that id: sc-me-profile is visible... FAILED |
| `ops` | FAIL | Assert that id: home-who is visible... FAILED |
| `feedback` | PASS |  |
| `cam-view` | PASS |  |
| `asset-hub` | FAIL | Assert that id: sc-asset-types is visible... FAILED |
| `asset` | FAIL | Assert that id: sc-asset-detail is visible... FAILED |
| `supervise` | FAIL | Assert that id: sc-supervise is visible... FAILED |
| `mnt-list` | PASS |  |
| `mnt-progress` | FAIL | Tap on id: btn-mnt-sync-demo-wo-1... FAILED |
| `mnt-log` | FAIL | Tap on id: btn-mnt-log-demo-wo-2... FAILED |
| `incident-list` | FAIL | Tap on id: fab-inc-create... FAILED |
| `incident-create` | FAIL | Assert that id: sc-inc-pick is visible... FAILED |
| `incident-detail` | FAIL | Tap on id: card-inc-demo-inc-1... FAILED |
| `vis-capture` | PASS |  |
| `field-reflect` | FAIL | Assert that id: sc-field-reflect is visible... FAILED |
| `cam-patrol` | FAIL | Tap on id: row-quick-cam-patrol... FAILED |
| `patrol-home` | FAIL | Assert that id: sheet-checkin is visible... FAILED |
| `patrol-history` | FAIL | Tap on id: row-quick-patrol-history... FAILED |
| `patrol-offline` | PASS |  |
| `patrol-pin` | FAIL | .. COMPLETED Tap on id: f-pass... COMPLETED Erase text... COMPLETED Input text Linm@2026... ==== Debug output (logs & screenshots) ====  /Users/mac/.maestro/tes |
| `patrol-checkin` | FAIL | Assert that id: sheet-checkin is visible... FAILED |
| `attendance` | FAIL | Tap on "Báo cáo công"... FAILED |

## Notes
- Login seed + `JAVA_HOME` Homebrew JDK 17 OK (không còn Java Runtime miss).
- iOS 26: tab-bar id thường không có trong Maestro hierarchy — fallback text + point.
- FAIL = tap control không tới `expectId` (`GAP-MOB-ACT-03`) hoặc nav/back gãy.
- PASS crawl: `feedback` · `cam-view` · `mnt-list` · `vis-capture` · `patrol-offline`.
