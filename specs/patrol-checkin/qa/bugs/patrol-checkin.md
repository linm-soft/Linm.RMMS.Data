# Bugs — patrol-checkin

| Field | Value |
|-------|-------|
| feature | `patrol-checkin` |
| status | **CLOSED** · Must **0** |
| updatedAt | `2026-09-01T02:15:00.000Z` |
| taskId | `edit-mobile-feature` · leave under sheet |

## Must

| ID | Zone | Note | Status |
|----|------|------|--------|
| GAP-MOB-EDIT-LEAVE-01 | DES-MOB-LEAVE | Chặn lưu / dirty leave: confirm leave show **under** sheet → không close | **CLOSED** · iOS in-sheet + `interactiveDismissDisabled` · Android `Dialog` + `LinmSheet.dismissEnabled` · Cancel no-op khi GPS/leave open · toast chặn ≠ leave |

## Should

| ID | Zone | Note | Owner |
|----|------|------|-------|
| GAP-QA-A11Y-SHEET-TAG-01 | Android `#sheet-checkin` | ModalBottomSheet ngoài `testTagsAsResourceId` root · Maestro không thấy `resource-id=sheet-checkin` · e2e dùng assert text | Dev `/edit-mobile-feature` · non-block QA |
