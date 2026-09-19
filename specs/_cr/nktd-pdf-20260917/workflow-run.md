# Workflow run — CR Nhật ký tuần đường (QLBD web)

| Field | Value |
|-------|-------|
| orch | `/agent-qldb-workflow` · alias `/agent-qlbd-workflow` |
| queue | `qlbd` · board `/qldb-workflow` |
| changeScope | **`edit_page`** · `editTask=1` · `startFrom=data_analy` |
| runMode | `full_pipeline` · `chainRole=1` |
| skillVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.17.2` |
| CR | `nktd-pdf-20260917` · SRC-NKTD-PDF |
| packets | [role-packets.md](./role-packets.md) · [wave-a](./packets/wave-a/) · [wave-b](./packets/wave-b/) |
| **cấm** | dump Dev/QA vào PO/Design (**GAP-PKT-ROLE-01**) · `ERP.*` · invent `api/v1/patrol-logs` · CRUD trên report · 8 task song song |

**1 queue task = 1 `roleOnly`.** Agent Read **đúng 1 file** `packets/wave-*/{role}.md`.

## Wave order (HARD)

| Wave | alias | packKind | MFE | `mfeStdUrl` | Enqueue |
|------|-------|----------|-----|-------------|---------|
| **A** | `csdl-so-02` | `list` | Asset | `http://localhost:9301/csdl-so-02` | `task_2a2fd5c4` |
| **B** | `rpt-nhat-ky-tuan-duong` | `report` | Report | `http://localhost:9311/bao-cao/nk-td` | sau Review A `done` |

BE: `D:/AI-QLBD/Linm.RMMS.WebService`  
source B = `csdl-so-02` + `rmms_csdl_catalog_records` · `rmms_csdl_so02` · `rmms_csdl_book_entries`.

## Chain (mỗi bước = 1 packet)

| # | roleOnly | Wave A | Wave B |
|---|----------|--------|--------|
| 0 | data_analy | [wave-a/data_analy.md](./packets/wave-a/data_analy.md) | [wave-b/data_analy.md](./packets/wave-b/data_analy.md) |
| 1 | po | [po.md](./packets/wave-a/po.md) | [po.md](./packets/wave-b/po.md) |
| 2 | design | [design.md](./packets/wave-a/design.md) | [design.md](./packets/wave-b/design.md) |
| 3 | sa | [sa.md](./packets/wave-a/sa.md) | [sa.md](./packets/wave-b/sa.md) |
| 4 | team_lead | [team_lead.md](./packets/wave-a/team_lead.md) | [team_lead.md](./packets/wave-b/team_lead.md) |
| 5 | dev | [dev.md](./packets/wave-a/dev.md) | [dev.md](./packets/wave-b/dev.md) |
| 6 | qa | [qa.md](./packets/wave-a/qa.md) | [qa.md](./packets/wave-b/qa.md) |
| 7 | review | [review.md](./packets/wave-a/review.md) → STOP A | [review.md](./packets/wave-b/review.md) → đóng CR |

TL matrices: [task-csdl-so-02.md](./task-csdl-so-02.md) · [task-rpt-nhat-ky-tuan-duong.md](./task-rpt-nhat-ky-tuan-duong.md).

## Queue

```
# A (đã enqueue)
npx tsx local-script/enqueue-nktd-pdf-wave-a.ts
cite packets/wave-a/data_analy.md

# B — chỉ STATUS A done lần CR
npx tsx local-script/enqueue-nktd-pdf-wave-b.ts
cite packets/wave-b/data_analy.md
```
