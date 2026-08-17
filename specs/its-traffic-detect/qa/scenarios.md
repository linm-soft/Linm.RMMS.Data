# QA — its-traffic-detect (static review · E2E OFF)

| Field | Value |
|-------|-------|
| feature | `its-traffic-detect` |
| e2eQa | `OFF` |
| skillVersion | `2026.08.16.02` |
| schemaVersion | `2` |
| workflowVersion | `2026.08.16.02` |
| versionGate | `ok` |
| status | `pass` |
| updatedAt | `2026-08-17T10:22:00.000Z` |

## Scenarios (static)

| Id | Check | Result |
|----|-------|--------|
| QA-LIST-01 | Route `/its-traffic-detect` wired · page exports default | PASS |
| QA-LIST-02 | Grid columns objectClass/score/status/engine/nearby/observedAt | PASS |
| QA-CRUD-01 | Service create/update/delete/confirm/dismiss + local fallback | PASS |
| QA-SEED-01 | Seed ≥1 bien_bao · coc_tieu · nearby pair · P2 low score | PASS |
| QA-DEDUP-01 | nearbyRadiusMeters = 10 | PASS |
| QA-CHROME-01 | Title ITS · no AI badge chrome requirement in design | PASS |
| QA-BE-01 | DOMAIN-MAP slug · controllers `ai-vision/its/*` | PASS |
| QA-BUILD-01 | yarn build PASS · dotnet build PASS | PASS |

## Notes

E2E runtime skipped (packet `E2E QA: OFF`). Handoff review.
