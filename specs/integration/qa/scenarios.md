# QA — integration

| Field | Value |
|-------|-------|
| feature | `integration` |
| status | `done` |
| mfeStdUrl | `http://localhost:9314/integration` |
| updatedAt | 2026-08-09T16:46:00.000Z |

## Smoke (mfeStdUrl)

| # | Scenario | Expect | Result |
|---|----------|--------|--------|
| S01 | Open hub | Title Open API · tabs Endpoints/Sync/Partners/Guide | PASS (code) |
| S02 | Sync tab load | Grid seed/API · pagination 50 | PASS |
| S03 | Search job | Filter → page=1 · rows match | PASS |
| S04 | Row menu Xem log | Modal log lines | PASS |
| S05 | Retry job | Status → done (mock) | PASS |
| S06 | Partners toggle | Enabled flips | PASS |
| S07 | Import slideout | Validate * · leave-confirm dirty · tạo SYNC-* | PASS |
| S08 | Offline-batch modal | Contract JSON | PASS |
| S09 | Swagger stub | Panel toggle | PASS |
| S10 | No nested CatalogListShell | 1× LinPageLayout | PASS |

## Build gates

| Gate | Result |
|------|--------|
| yarn typecheck | PASS |
| yarn build | PASS |
| BE Release | PASS |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-qa |
| skillVersion | 2026.08.09.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.02 |
| generatedAt | 2026-08-09T16:46:00.000Z |
| versionGate | rechecked |
