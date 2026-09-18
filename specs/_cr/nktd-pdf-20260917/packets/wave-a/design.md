# RUN packet — `design` · Wave A · `csdl-so-02`

| Field | Value |
|-------|-------|
| roleOnly | `design` |
| slash | `/agent-design` |
| packKind | `list` |
| formPattern | **Slideout** 2 cột · footer only |
| changeScope | `edit_page` |
| chainNext | `sa` |
| peerStdUrl | `http://localhost:9301/csdl-so-02` |
| compactIn | `specs/csdl-so-02/handoff/po-compact.md` |
| compactOut | `specs/csdl-so-02/handoff/design-compact.md` |

## DoR
Read compactIn. Load live peerStdUrl.

## Write
- `specs/csdl-so-02/ui/design.md` + prototype HTML + **reviewUrl** (file://)
- compactOut

## MUST
- DES-GRID A–D + F + H **giữ**.
- Entries: field `locationText` cạnh `locationKm` · `weatherEvent` Textarea.
- Label bìa: Số quyển · Nhà thầu · NV tuần · Từ/Đến Km · Kỳ.
- `design_confirm` **thiếu prototype** = **cấm**.

## Cấm (packet này)
Full-page 5-cột · e2e · start:std · implement · SA API dump · QA scenarios.
