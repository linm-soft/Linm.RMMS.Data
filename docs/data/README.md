# RMMS.Data — SSOT tài liệu khách (đã / chưa phân tích)

> **Tracking duy nhất:** [`SOURCE-TRACKING.md`](SOURCE-TRACKING.md)  
> **Feature pipeline:** [`../context/FEATURE-TRACKING.md`](../context/FEATURE-TRACKING.md)  
> **Cấm** đọc lại file gốc (xlsx/docx/pdf/doc) khi dòng tracking = `analyzed` — dùng extract UTF-8.  
> **Cập nhật:** 2026-08-29 · `/hey-linm` + `/set-up-ignore-cursorrules`

## Quy tắc

| | |
|--|--|
| Gốc khách | Giữ nguyên path (`docs/Hồ sơ…` · `docs/tinh-nang/` · `docs/tai-lieu/`). **Không** move. |
| Extract | `docs/data/analyzed/{slug}.md` — UTF-8, đủ để implement / báo cáo. |
| Agent | Mở **SOURCE-TRACKING** trước. Chỉ `Read` binary khi `pending` hoặc `--force`. |
| Dump gov | `data-import/Sau-sat-nhap/gov` = set `gov-vn` — SSOT [`import-gov-ssot.md`](../context/features/import-gov-ssot.md). **Không** catalog từng xlsx dump. |
| Demo archive | `docs/Mẫu import/` · `data-import/_archive/` — không phải nguồn khách mới. |

## Thư mục

```
docs/data/
├── README.md                 ← file này
├── SOURCE-TRACKING.md        ← index đã / chưa
└── analyzed/                 ← extract + phân tích
    └── kcht-giai-ngan-03-sheet.md
```

## Next khi khách gửi file mới

1. Copy vào đúng folder gốc (`Hồ sơ…` / `tinh-nang` / `tai-lieu`).  
2. Thêm 1 dòng `pending` vào SOURCE-TRACKING.  
3. Phân tích → extract `analyzed/` → đổi status `analyzed` · ghi `{slug}` feature.  
4. Upsert [`FEATURE-TRACKING.md`](../context/FEATURE-TRACKING.md).
