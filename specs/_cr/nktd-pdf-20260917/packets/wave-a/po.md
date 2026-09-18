# RUN packet — `po` · Wave A · `csdl-so-02`

| Field | Value |
|-------|-------|
| roleOnly | `po` |
| slash | `/agent-po` |
| packKind | **`list`** (confirm) |
| changeScope | `edit_page` |
| chainNext | `design` |
| compactIn | `specs/csdl-so-02/handoff/data_analy-compact.md` |
| compactOut | `specs/csdl-so-02/handoff/po-compact.md` |

## DoR
Read compactIn **trước**. Hash skip → **cấm** re-scan demo.

## Write
- `specs/csdl-so-02/po/requirement.md` — § Current vs New CR + § Grid AC + Screens
- compactOut

## Screens
| id | Surface |
|----|---------|
| S-LIST | Kind B A–D+F+H `/csdl-so-02` |
| S-FORM | Slideout 2col footer C/E/V/Copy |
| S-HUB | `/so-ts/csdl-so-sach?resource=patrol-logs` |

## AC (đo được)
1. Tạo sổ + ≥1 dòng `locationText` → list thấy cột vị trí.
2. Search/filter work · LeaveConfirm dirty.
3. **Cấm** Thêm mới trên report slug.

## Cấm (packet này)
re-scan demo · e2e · start:std · implement · DES-GRID dump · T-QA-* · enqueue Wave B.
