# RUN packet — `data_analy` · Wave A · `csdl-so-02`

| Field | Value |
|-------|-------|
| roleOnly | `data_analy` |
| slash | `/agent-data-analy` |
| mode | `feature_context` |
| packKind | `list` |
| changeScope | `edit_page` |
| chainNext | `po` |
| compactOut | `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-02/handoff/data_analy-compact.md` |
| T-* | **T-CTX-CR-01** |

## DoR
- Live: `CsdlSo02Page` · `CsdlSo02FormSlideout` · `api/v1/asset/csdl-records?resource=patrol-logs`
- Extract: `D:/AI-QLBD/Linm.RMMS.Data/docs/data/analyzed/nhat-ky-tuan-duong-pdf.md`
- Review: `specs/_cr/nktd-pdf-20260917/review.md`
- **Cấm** greenfield / wipe pack `new_page`

## Write
- `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-so-02-control-hint.md`
- `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-so-02-real-data.md`
- compactOut

## MUST
1. Append § Current vs New CR PDF.
2. Inventory `entries.locationText` controlHint=`Text` · GAP-NKTD-LOC-01.
3. `weatherEvent` → đề xuất Textarea.
4. FileRef debt GAP-SO02-FILE-01 — **không** invent file API.
5. Header `changeScope=edit_page` · **đổi** contentHash.
6. Cite SRC-NKTD-PDF.

## Cấm (packet này)
re-scan demo HTML · PO Grid dump · e2e · yarn build · start:std · enqueue report · start role `po`.
