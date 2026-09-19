# RUN packet — `review` · Wave A · `csdl-so-02`

| Field | Value |
|-------|-------|
| roleOnly | `review` |
| slash | `/agent-review` |
| packKind | `list` |
| changeScope | `edit_page` |
| chainNext | **STOP Wave A** · user enqueue Wave B |
| compactIn | `specs/csdl-so-02/handoff/qa-compact.md` |
| compactOut | `specs/csdl-so-02/handoff/review-compact.md` |

## Write
`specs/csdl-so-02/review/findings.md`

## MUST
- `/review-query`
- REV-UI-FILTER-RIGHT-01 **live** 🔍 mép phải (`mfeStdUrl` `/csdl-so-02`)
- LocationText persist round-trip (POST/PUT → GET)
- Schema pair nếu cột mới (`.cs` + `.Designer.cs`)

## PASS
STATUS phase `done` lần CR. **Không** tự chạy `enqueue-nktd-pdf-wave-b.ts`.

## Cấm (packet này)
implement · e2e crawl · enqueue report · sửa Wave B code.
