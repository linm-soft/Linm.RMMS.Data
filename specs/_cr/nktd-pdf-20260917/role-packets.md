# Packet index — CR `nktd-pdf-20260917`

**1 queue task = 1 `roleOnly`.** Chain: data_analy → po → design → sa → team_lead → dev → qa → review.  
**Cấm** enqueue 8 task song song (1 lock / feature). **Cấm GAP-PKT-ROLE-01.**

| Wave | Feature | packKind | Packets |
|------|---------|----------|---------|
| A | `csdl-so-02` | `list` | [packets/wave-a/](./packets/wave-a/) |
| B | `rpt-nhat-ky-tuan-duong` | `report` | [packets/wave-b/](./packets/wave-b/) · **park** đến Review A `done` |

TL matrices: [task-csdl-so-02.md](./task-csdl-so-02.md) · [task-rpt-nhat-ky-tuan-duong.md](./task-rpt-nhat-ky-tuan-duong.md).

Agent: **Read đúng 1 file** `packets/wave-*/{role}.md` + compact role trước. **Cấm** load file role khác.
