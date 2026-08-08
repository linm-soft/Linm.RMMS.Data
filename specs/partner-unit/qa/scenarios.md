# QA scenarios — partner-unit

| Field | Value |
|-------|-------|
| feature | `partner-unit` |
| status | **done** (scenarios written · manual run pending) |
| packKind | `master` |
| updatedAt | 2026-08-08T12:40:00.000Z |

## Smoke

| # | Scenario | Expect |
|---|----------|--------|
| S1 | Mở `/master/partner-unit` | List Kind B · zones A–D · seed 13 |
| S2 | Search CI «so» / «HATINH» / «BOT» | Trùng mã/tên/folder không dấu |
| S3 | Tạo mới Modal | code · name · partnerKind · province · legacy · isActive |
| S4 | View mode | `readOnly` — không disabled xám |
| S5 | Sửa / Sao chép | Update OK · copy blank code |
| S6 | Soft-delete | IsActive=false · khỏi list active |
| S7 | SearchInput API `/search` | Consumer lookup partnerUnitCode |
| S8 | `GET /init-data` | 3 partnerKind options |

## Negative

| # | Scenario | Expect |
|---|----------|--------|
| N1 | Trùng code | 422 |
| N2 | Thiếu name/partnerKind | 422 |
| N3 | API path `api/v1/rmms/*` | **không** tồn tại |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-qa |
| skillVersion | 2026.08.08.21 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.08.21 |
| rulesVersion | 2026.08.08.19 |
| generatedAt | 2026-08-08T12:40:00.000Z |
| versionGate | ok |
