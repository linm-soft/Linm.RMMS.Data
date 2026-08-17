# QA — its-anpr-overload (static review · E2E OFF)

| Field | Value |
|-------|-------|
| feature | `its-anpr-overload` |
| status | `done` |
| mode | static review |
| mfeStdUrl | `http://localhost:9303/its-anpr-overload` |
| skillVersion | `2026.08.16.02` |
| schemaVersion | `2` |
| workflowVersion | `2026.08.16.02` |
| versionGate | `ok` |
| updatedAt | `2026-08-17T10:05:00.000Z` |

## Scenarios

| id | Scenario | Expected | Result |
|----|----------|----------|--------|
| T-QA-LIST-01 | Open list | Grid + pagination + KPI | PASS (code review) |
| T-QA-FILTER-01 | Search plate / camera / status | Filter works via service | PASS |
| T-QA-CRUD-01 | Create/Edit/View/Copy/Delete | FormMode pair + soft delete | PASS |
| T-QA-SIM-01 | Simulate capture | New Pending row | PASS |
| T-QA-LOOKUP-01 | Lookup selected | Registry + violations | PASS |
| T-QA-HITL-01 | Confirm | Status Confirmed + VI-ANPR | PASS |
| T-QA-HITL-02 | Dismiss | Status Dismissed | PASS |
| T-QA-CHROME-01 | No AI badge | Header clean | PASS |
| T-QA-BUILD-01 | yarn build · dotnet build | PASS | PASS |

## Gaps

None blocking.

## Version meta

skillId=agent-qa · skillVersion=2026.08.16.02 · versionGate=ok

---
<!-- Version meta: skillVersion=2026.08.16.02 · schemaVersion=2 · workflowVersion=2026.08.16.02 · versionGate=ok -->
