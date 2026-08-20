# Real data — patrol-history

| | |
|---|---|
| feature | `patrol-history` |
| bind | `GET patrol/sessions` → `PatrolSessionItem` |
| fallback | `PatrolHistoryCopy.demoItems` (4 rows SSOT) |

## Demo rows SSOT

| code | sub | badge |
|------|-----|-------|
| PAT-20260810-0014 | QL.1 · Tuần đường · 2/3 điểm | Đang tuần |
| PAT-20260810-0009 | HCM · Tuần kiểm · 100% | Hoàn thành |
| PAT-20260809-0021 | QL.1 · Thiếu điểm tuần | Bỏ sót |
| PAT-20260809-0015 | Chờ đồng bộ · 1 điểm tuần | Mất sóng |

## Bind rules

- Appear → GET page 1 size 50 · ≥3 live rows else demo
- Search → client filter code/route/type/status
- Tap row → toast **Chi tiết phiên** · **cấm** detail push P1
