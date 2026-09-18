# RUN packet — `design` · Wave B · `rpt-nhat-ky-tuan-duong`

| Field | Value |
|-------|-------|
| roleOnly | `design` |
| slash | `/agent-design` |
| packKind | `report` Kind E |
| changeScope | `edit_page` |
| chainNext | `sa` |
| peerStdUrl | `http://localhost:9311/bao-cao/nk-td` |
| compactIn | `specs/rpt-nhat-ky-tuan-duong/handoff/po-compact.md` |
| compactOut | `specs/rpt-nhat-ky-tuan-duong/handoff/design-compact.md` |

## DoR
Read compactIn. Live peerStdUrl.

## Write
- `specs/rpt-nhat-ky-tuan-duong/ui/design.md` + prototype + **reviewUrl**
- compactOut

## MUST
- DES-RPT A–D giữ · filter `LinErpListFilterBar` V10 🔍 mép phải · **0** nút action trên bar.
- Toolbar: Làm mới · Chart · In · Config · Xuất Excel (`reportToolbar`).
- Cột Vị trí = `locationText` fallback Km.
- Chart SoCai từ `items` live.
- **Cấm** Thêm mới Zone A · **cấm** Kind B schema editor · **cấm** Full-page form.
- `design_confirm` thiếu prototype = **cấm**.

## Cấm (packet này)
e2e · start:std · implement · SA path mới · CRUD screens.
