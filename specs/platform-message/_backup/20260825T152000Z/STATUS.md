# STATUS — platform-message

| Field | Value |
|-------|-------|
| feature | `platform-message` |
| phase | `data_analy` |
| status | `pending` |
| changeScope | `new_page` |
| packKind | `platform` |
| runMode | `implement` |
| queue | **first** — trước `platform-task` |
| context | `docs/context/features/platform-message.md` · hub `docs/context/26-MESSAGE-PARCEL.md` |
| plan | `{RulesRoot}/docs/plan/linm-message-service/README.md` |
| mfe | `{MessageMfe}` `@linm/message` · common ChatTab/CommentsTab |
| backend | Task messages → TaskService (sau pha 2) · **cấm** invent RMMS chat path |
| skill | `/implement-message-service` · `/integrate-message-service` · `/review-message-service` |
| updatedAt | `2026-08-25T14:32:00.000Z` |

## Pipeline

| Step | Agent | Status |
|------|-------|--------|
| 0 | data_analy | **pending** (context đã có — verify + control-hint parcel) |
| 1–6 | po → review | **pending** |

## Confirms

| Gate | Value |
|------|-------|
| autoApprove | **ON** (autopilot ERP/QLBD trừ `--no-autopilot`) |

## Notes

Chat/comment **trước** TaskService. RMMS tuần đường **không** implement chat trên Field.
