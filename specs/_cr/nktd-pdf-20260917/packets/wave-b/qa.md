# RUN packet — `qa` · Wave B · `rpt-nhat-ky-tuan-duong`

| Field | Value |
|-------|-------|
| roleOnly | `qa` |
| slash | `/agent-qa` |
| packKind | `report` |
| changeScope | `edit_page` |
| chainNext | `review` |
| mfeStdUrl | `http://localhost:9311/bao-cao/nk-td` |
| compactIn | `specs/rpt-nhat-ky-tuan-duong/handoff/dev-compact.md` |
| compactOut | `specs/rpt-nhat-ky-tuan-duong/handoff/qa-compact.md` |

## Write
`specs/rpt-nhat-ky-tuan-duong/qa/scenarios.md`

## T-QA-RPT-01
| Case | Pass |
|------|------|
| Kỳ có sổ Wave A | lưới khớp bookNo / locationText / weatherEvent / remarkSign |
| Kỳ trống | empty · **fail** nếu 12 dòng CUC2 |
| Drill | mở `/csdl-so-02` hoặc hub `?resource=` · **fail** `?kind=` |
| Filter | V1+V5+V10 · 🔍 mép phải · **0** action trên bar |
| Toolbar | Excel / In / Chart trên toolbar · **fail** nếu trong filter |
| Form | **OUT** — không có Thêm mới |

## Cấm (packet này)
implement · CRUD sổ · e2e form `/csdl-so-02` (đã Wave A).
