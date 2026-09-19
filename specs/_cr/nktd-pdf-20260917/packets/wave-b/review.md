# RUN packet — `review` · Wave B · `rpt-nhat-ky-tuan-duong`

| Field | Value |
|-------|-------|
| roleOnly | `review` |
| slash | `/agent-review` |
| packKind | `report` |
| changeScope | `edit_page` |
| chainNext | **STOP CR** |
| compactIn | `specs/rpt-nhat-ky-tuan-duong/handoff/qa-compact.md` |
| compactOut | `specs/rpt-nhat-ky-tuan-duong/handoff/review-compact.md` |
| T-* | **T-RV-01** |

## Write
`specs/rpt-nhat-ky-tuan-duong/review/findings.md`

## MUST
- `/review-query` join sổ · **cấm** N+1 per entry
- REV-UI-FILTER-RIGHT-01 live 🔍 mép phải
- Empty ≠ seed 12
- Drill không `?kind=`
- HDSD không bảo Tạo mới trên report
- DoD CR: tạo sổ A → Xem report cùng kỳ ra đúng dòng

## PASS
STATUS report `done` lần CR. CR `nktd-pdf-20260917` đóng.

## Cấm (packet này)
implement · e2e crawl · path API mới.
