# Review — partner-unit

| Field | Value |
|-------|-------|
| feature | `partner-unit` |
| status | **done** |
| review_confirm | **approve** (Autopilot · retry TL SSOT) |
| updatedAt | `2026-08-08T18:45:00.000Z` |

## Findings

| ID | Severity | Note | Resolution |
|----|----------|------|------------|
| R1 | info | Domain Integration per DOMAIN-MAP | OK |
| R2 | info | Path `api/v1/integration/partner-units` — cấm rmms/ERP | OK |
| R3 | info | controlHint SearchInput consumer · Dropdown partnerKind | OK |
| R4 | info | Seed 13 canonical trong Schema migration | OK |
| R5 | medium | Retry: nested CatalogListShell + footerPagination + raw table | **Fixed** — AssetType parity |
| R6 | info | Perms hook `usePartnerUnitPermissions` | OK |
| R7 | info | mfeStdUrl `:9314/master/partner-unit` | OK |
| R8 | medium | Form partnerKind FE hardcode fallback | **Fixed** — options only from init-data |

## Verdict

**PASS** — SSOT list shell A–D + dropdown-from-backend + builds verified.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-review |
| skillVersion | 2026.08.08.17 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.08.31 |
| rulesVersion | 2026.08.08.25 |
| generatedAt | 2026-08-08T18:45:00.000Z |
| versionGate | rechecked |
