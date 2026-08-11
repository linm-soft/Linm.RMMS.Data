# STATUS — mobile-p1

| Field | Value |
|-------|-------|
| feature | `mobile-p1` |
| phase | `design` |
| status | `await_confirm` |
| changeScope | `new_mobile_design` |
| packKind | `mobile` |
| runMode | `design_only` |
| brief | `D:/AI-QLBD/Linm.RMMS.Data/map-feature/mobile-design-brief.md` |
| context | patrol + incident (+ attendance thin) |
| mfe / app | **TBD** — `ui_repo_confirm` |
| backend | same BFF Web · `api/v1/patrol` · `api/v1/incident` |
| updatedAt | `2026-08-10T16:35:00.000Z` |
| reviseNote | Login + SF Symbol icons |

## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| agent-design | mobile-p1 ui | design_mobile_p1 | 2026-08-10T16:20:00.000Z |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | brief | map-feature/mobile-design-brief.md | **done** |
| 2.1 | design | ui/design.md + prototype + reviewUrl | **await_confirm** |
| 2.2+ | sa… | — | blocked until design_confirm |

## Prototype

| | |
|--|--|
| artifact | `specs/mobile-p1/ui/prototype/index.html` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/mobile-p1/ui/prototype/index.html` |
| serve | `http://localhost:5198` (optional) |

## Confirms

| Gate | Value |
|------|-------|
| design_confirm | pending |
| ui_repo_confirm | pending (Swift / KMP / Flutter) |
