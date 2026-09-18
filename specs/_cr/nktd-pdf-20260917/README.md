# CR — Nhật ký tuần đường PDF → form web + báo cáo live

| Field | Value |
|-------|-------|
| id | `nktd-pdf-20260917` |
| source | `SRC-NKTD-PDF` · [extract](../../../docs/data/analyzed/nhat-ky-tuan-duong-pdf.md) |
| date | 2026-09-17 |
| changeScope | `edit_page` |
| slash | `/agent-qldb-workflow` · `roleOnly=data_analy` · queue `qlbd` |
| order HARD | **1** `csdl-so-02` (tạo data) → **2** `rpt-nhat-ky-tuan-duong` (Kind E) |
| **cấm** | CRUD trên slug report · `ERP.*` · invent `api/v1/patrol-logs` · `api/v1/reports` |

PDF 4 trang scan (bìa + 3 trang bảng tay). Pipeline cũ **done** nhưng lệch nguồn: form typed P1 còn nợ vị trí chữ + file picker; report đọc **check-in phiên** / seed — **không** đọc sổ `csdl-so-02`.

## Artifacts

| File | Vai trò |
|------|---------|
| [review.md](./review.md) | GAP PDF vs live |
| [workflow-run.md](./workflow-run.md) | Orchestrator queue · Wave A→B |
| [role-packets.md](./role-packets.md) | Index 16 packet (8 role × 2 wave) |
| [packets/wave-a/](./packets/wave-a/) | Wave A `csdl-so-02` · 1 file / roleOnly |
| [packets/wave-b/](./packets/wave-b/) | Wave B report · park đến Review A |
| [task-csdl-so-02.md](./task-csdl-so-02.md) | Wave A TL §2a · copy `specs/csdl-so-02/task/csdl-so-02-cr-pdf.md` |
| [task-rpt-nhat-ky-tuan-duong.md](./task-rpt-nhat-ky-tuan-duong.md) | Wave B TL §2d · copy `specs/rpt-nhat-ky-tuan-duong/task/rpt-nhat-ky-tuan-duong-cr-pdf.md` |

## Enqueue

Queue `workspaces/qlbd` · worker `yarn run-implement` (đã chạy thì **chỉ enqueue**).

```
# Wave A (NOW)
npx tsx local-script/enqueue-nktd-pdf-wave-a.ts

# Wave B — chỉ khi STATUS csdl-so-02 phase+status = done lần CR
npx tsx local-script/enqueue-nktd-pdf-wave-b.ts
```

**Cấm** `yarn run-implement --features csdl-so-02` (MAIN3 known-set). **Cấm** Start Wave B khi Wave A chưa merge `LocationText`.
