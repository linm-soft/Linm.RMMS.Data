# RUN packet — `qa` · Wave A · `csdl-so-02`

| Field | Value |
|-------|-------|
| roleOnly | `qa` |
| slash | `/agent-qa` |
| packKind | `list` |
| changeScope | `edit_page` |
| chainNext | `review` |
| mfeStdUrl | `http://localhost:9301/csdl-so-02` |
| e2eQa | theo board (`e2eQa=1` → e2e) |
| compactIn | `specs/csdl-so-02/handoff/dev-compact.md` |
| compactOut | `specs/csdl-so-02/handoff/qa-compact.md` |

## Write
`specs/csdl-so-02/qa/scenarios.md` (+ store PNG nếu e2e ON)

## T-*
| id | Case |
|----|------|
| T-QA-CRUD-01 | Tạo sổ + 2 dòng (1 Km-only · 1 `locationText`) → list · Edit/View/Copy/Delete |
| T-QA-FORM-01 | required `eventAt` + (km **hoặc** text) + `weatherEvent` · body = UI |
| T-QA-FILTER-01 | V1–V5+V10 live · 🔍 mép phải · 1:1 filter-bar.md |
| T-QA-FILTER-02 | 1280+768+375 · fail lệch D / leak M |

## Fail
grep-only filter · native `alert`/`confirm` · mở `/bao-cao/nk-td`

## Cấm (packet này)
implement · enqueue Wave B · test report Kind E.
