# RUN packet — `data_analy` · Wave B · `rpt-nhat-ky-tuan-duong`

| Field | Value |
|-------|-------|
| roleOnly | `data_analy` |
| slash | `/agent-data-analy` |
| mode | `feature_context` |
| packKind | **`report`** Kind E |
| changeScope | `edit_page` |
| chainNext | `po` |
| sourceFeature | **`csdl-so-02`** |
| sourceTables | `rmms_csdl_catalog_records` · `rmms_csdl_so02` · `rmms_csdl_book_entries` |
| sourceFormReady | **MUST yes** — STATUS A `phase=done` **lần CR** |
| compactOut | `specs/rpt-nhat-ky-tuan-duong/handoff/data_analy-compact.md` |
| T-* | **T-CTX-CR-02** |

## Gate
Nếu `csdl-so-02` STATUS chưa `done` CR → **STOP** `report_source_form_confirm`. **Cấm** tiếp PO.

## Write
- `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/rpt-nhat-ky-tuan-duong-control-hint.md`
- `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/rpt-nhat-ky-tuan-duong-real-data.md`
- compactOut

## MUST
1. Ghi `sourceFeature=csdl-so-02` · `sourceFormReady=yes` · `sourceTables` đủ 3 bảng.
2. Map cột report ← entry (cite `task-rpt-nhat-ky-tuan-duong.md` bảng Map).
3. **Cấm** Col1–3 · **cấm** coi check-in / seed 12 là SSOT.
4. Inventory filter: kỳ from/to · tuyến SearchInput · **0** action trên bar.
5. Đổi contentHash · `changeScope=edit_page`.
6. Note: thiếu `{feature}-filter-bar.md` → Dev T-UI-RPT-01 Write.

## Cấm (packet này)
re-scan demo · PO Grid dump CRUD · e2e · yarn build · enqueue form Wave A lại.
