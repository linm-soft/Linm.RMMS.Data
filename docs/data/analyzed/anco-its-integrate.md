# Extract — Anco tài liệu tích hợp bên thứ 3 (đèn tín hiệu)

| Field | Value |
|-------|-------|
| ID | `SRC-ANCO-ITS` |
| File gốc | `docs/tai-lieu/Anco-6. Tài liệu tích hợp cho bên thứ 3.docx` |
| size | 31222 |
| scannedAt | `2026-09-18` |
| kind | customer (Anco / đối tác đèn) |
| status | `analyzed` |
| Feature | `its-anco-signal` |
| Title doc | HỆ THỐNG ĐIỀU KHIỂN ĐÈN GIAO THÔNG — TÀI LIỆU ĐẶC TẢ TÍCH HỢP · Version 1.0 |

**Cấm** đọc lại docx trừ `--force` / size đổi. **Cấm** paste HASH Key / UserName / Password vào chat.

## Phạm vi tài liệu

Tích hợp **2 chiều** với hệ thống đèn tín hiệu Anco. Envelope JSON: `Code` (1 thành công · 2 lỗi · 3 chưa đăng nhập) · `ErrMessage` · `Data`.

Bảo mật Anco cung cấp khi thực hiện: **HASH Key** · **UserName** · **Password** · **Code** (header `Authority`) · **Url** gốc.

## API đối tác (cite)

| Method | Path | Wave |
|--------|------|------|
| POST | `Account/Login` body `{ iUsername, iPassword }` → token | Wave 1 |
| GET | `Points/Get_List` header `Authority` = Code đối tác | Wave 1 |
| GET | `Points/Get_Cycle_Now?iIMEI={iIMEI}` | Wave 1 |
| POST | `Points/Config_Plan` HMAC SHA256 | **DEFER** |
| POST | `Points/Config_Now` HMAC SHA256 | **DEFER** |

**Không có** API camera / đếm xe trong tài liệu này.

## Get_List — nút đèn

| Field | Type | Ghi chú |
|-------|------|---------|
| IMEI | Uint64 | ID nút |
| Name | string | Tên nút |
| Address | string | Địa chỉ |
| Phase | Byte | Số pha |
| Directions | object | Hướng: `Id` · `Name` |
| Lng | Double | Doc ghi «vĩ độ» |
| Lat | Double | Doc ghi «kinh độ» |

**GAP-ANCO-COORD-01:** nhãn Lng/Lat trong doc **đảo** so với chuẩn GIS (Lng=kinh độ, Lat=vĩ độ). Data-analy/SA đối chiếu 1 nút thật trước khi plot.

## Get_Cycle_Now — chu kỳ hiện tại

`IMEI` · `Time_Chuky` · `Time_zone` (B/E Hour/Minute/Second) · `Directions` (`Id` · `Red` · `Green`) · `Yellow` · `Walk` · `Phase_change` · `Signature` HMAC.

## HMAC (chỉ Config_* — DEFER)

Canonical `GetHash` HMAC-SHA256 hex lowercase. Config_Plan: `Tz=…, dr=…, Yellow=…, Walk=…, Phase_change=…`. Config_Now / Get_Cycle_Now sample: `IMEI=…, dr=…, Yellow=…, Walk=…, Phase_change=…`.
