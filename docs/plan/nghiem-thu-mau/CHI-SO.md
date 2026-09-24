# Chỉ số đánh giá — P1 field vs NT tháng

## P1 (mobile phiếu) — MUST

Mỗi phiếu NT:

| Field | API | Control | Note |
|-------|-----|---------|------|
| Kết luận | `ResultCode` | Select LOOKUP_STATIC | `pass` Đạt · `fail` Không đạt · `deduct` Khấu trừ |
| Ghi chú kết quả | `ResultNote` | Text multiline | TT 41 §1.1 đ–e: kết quả + nhận xét hiện trạng |
| Thời gian việc | `WorkStartedAt` / `WorkEndedAt` | DateTime optional | §1.1 c; Create ẩn = now nếu trống |
| Tiêu chí mẫu | `scores[]` | Checklist | 3–8 dòng / mẫu · `pass`/`fail`/`n_a` + note |

Kèm sẵn: `TemplateType` · `Route` · `KmFrom`/`KmTo` · `FieldInfo` · `mediaIds`.

## OUT P1 (office / kỳ NT)

TT 41 PL IV Mục II–III: NT **tháng/quý**, hội đồng chấm **100 điểm**, khấu trừ thanh toán, 2/3 thành viên Bên A. **Không** nhét vào sheet Tạo NT.

Peer: `csdl-so-08` (Mẫu 02 sổ). Web Field có thể hiện điểm kỳ **sau**.

## Catalog tiêu chí P1 (rút từ Mẫu 01)

Init-data `TemplateTypes[].criteria[]`: `{ code, label, slaHint }`.

Ví dụ `mau-02`:

| code | label | slaHint |
|------|-------|---------|
| `2.1.1` | Vá ổ gà — cao độ ±5 mm, không khe >3 mm | 3 ngày (cấp I–II) / 5 ngày (III–VI) |
| `2.1.2` | Không vết nứt rộng >5 mm | 7 ngày mưa / 14 khô |
| `2.1.vs` | Vệ sinh mặt — không rác/chướng ngại | 1h nếu ATGT |

SA **cấm** hardcode 100+ dòng Phụ lục trên FE — catalog từ init-data.

## Map ResultCode → badge

| API | VN | List badge |
|-----|-----|------------|
| `pass` | Đạt | green |
| `fail` | Không đạt | red |
| `deduct` | Khấu trừ | orange |
| (null draft) | — | ẩn / «Chưa đánh giá» |
