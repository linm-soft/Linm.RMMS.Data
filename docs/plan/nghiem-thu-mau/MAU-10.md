# 10 mẫu — map `mau-01`…`mau-10`

> Nguồn: TT 41/2024 Phụ lục IV Mẫu 01 **§1.2.1** (1)–(10). Value API **giữ** `mau-0N` (không đổi key). Chỉ đổi **Label**.

| Value | Label VN (ship) | Ghi chép bắt buộc (TT 41) | Peer TCVN 14182 |
|-------|-----------------|---------------------------|-----------------|
| `mau-01` | Cắt cỏ lề / cắt cây | thời gian · đoạn đường · kết quả chủ yếu | 4.1.4 · 4.1.22 |
| `mau-02` | Vệ sinh / vá ổ gà mặt đường | thời gian · đoạn · kết quả | 4.1.2 · 4.1.3 · 4.1.4 · PL IV 2.1 |
| `mau-03` | Nạo vét rãnh | đoạn rãnh · thời gian · kết quả | 4.1.8–4.1.10 |
| `mau-04` | Sơn bổ sung báo hiệu | vị trí sơn · kết quả | 4.1.21 |
| `mau-05` | Khơi thông cống / rãnh | thời gian · kết quả | 4.1.8 · 4.1.11 |
| `mau-06` | Sửa chữa lề đường | thời gian · đoạn tuyến · kết quả | 4.1.5 · 4.1.6 |
| `mau-07` | Hót sụt | thời gian · đoạn · vị trí · khối lượng · kết quả | 4.1.6 |
| `mau-08` | Bảo dưỡng báo hiệu đường bộ | (cùng nhóm biển/cọc) | 4.1.18 · 4.1.19 |
| `mau-09` | Hạng mục công trình khác | ghi tương tự (1)–(8) | 4.1.12–4.1.17 |
| `mau-10` | Bảo dưỡng thiết bị | thời gian + việc (bôi mỡ gối cầu, điện…) | 4.1.20 |

**COPY HARD:** display = bảng này. **Cấm** «Mẫu nghiệm thu 03». Demo «03 — Mặt đường» ≈ `mau-02` (vá/vệ sinh mặt) — không invent value mới.

Init-data:

```json
{ "value": "mau-02", "label": "Vệ sinh / vá ổ gà mặt đường" }
```
