# QA bugs — mnt-progress

| Field | Value |
|-------|-------|
| feature | `mnt-progress` |
| status | **CLOSED** (Must **0** · Should open 1) |
| updatedAt | `2026-08-29T07:02:00.000Z` |

## Must

| ID | Severity | Status | Note |
|----|----------|--------|------|
| — | — | — | none |

## Should

| ID | Severity | Status | Note |
|----|----------|--------|------|
| GAP-MOB-A11Y-01 | Should | open | iOS mnt-list action `LinmStrokeGlyph` (sync/log/sum) **không** expose `accessibilityIdentifier` / label trong XCUITest tree — chỉ chat SF Symbol «Comment Left». Maestro e2e dùng `point: 50%,48%` fallback. Dev → `/edit-mobile-feature` gắn a11y id `btn-mnt-sync-{id}` visible. **Không** block QA Aligned / store CORE. |

## Closed this run

| ID | Note |
|----|------|
| GAP-QA-STORE-01/03 | prior auto-gen e2e → patrol · **fixed** hand-written `qa/e2e/{ios,android}.yaml` · CLI **ok:true** |
