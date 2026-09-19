# Align UX — nghiem-thu (mobile QA)

| Field | Value |
|-------|-------|
| feature | `nghiem-thu` |
| method | Read CORE PNG vs demo `#sc-nghiem-thu` |
| align_confirm | **approve** (autoApprove ON) |
| Must open | **0** |
| updatedAt | `2026-09-19T16:30:00.000Z` |

## CORE vs demo

| Shot | Live | Demo zone | Match |
|------|------|-----------|-------|
| A3-CORE | Title Công tác nghiệm thu · Back Tuần đường · Tạo · search · EmptyChrome | `#sc-nghiem-thu` empty | Aligned |
| P6-CORE | Title · Tạo · search · EmptyChrome · Material back | `#sc-nghiem-thu` android | Aligned |
| P6-CORE-2 | Search fill `NT` | search zone | Aligned (fold) |

## Notes
- Empty live = EmptyChrome OK (tenant 0) · demo `?empty=1` parity
- create/detail OUT pending_confirm — không assert form sibling
