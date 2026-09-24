# Mẫu nghiệm thu BDTX (catalog + chỉ số)

> **Slug:** `nghiem-thu-mau` · **Module:** Field · **Phase:** P1  
> **Status:** Context · implement = **edit_page** trên `nghiem-thu*` (không màn catalog riêng)  
> **Kind:** catalog LOOKUP + scores trên phiếu  
> **Lane P1:** Mobile + BFF + `Linm.RMMS.WebService`  
> **Lane sau:** Web `/nghiem-thu`  
> **BE:** `api/v1/patrol/nghiem-thu` · **cấm ERP.*** · **cấm** invent path  
> **Plan:** [`../../plan/nghiem-thu-mau/README.md`](../../plan/nghiem-thu-mau/README.md)  
> **Peer:** [`nghiem-thu.md`](nghiem-thu.md) · [`nghiem-thu-create.md`](nghiem-thu-create.md) · [`nghiem-thu-detail.md`](nghiem-thu-detail.md) · [`csdl-so-08.md`](csdl-so-08.md) · [`kcht-cong-trinh.md`](kcht-cong-trinh.md)

## 1. Mục tiêu

Đổi 10 placeholder «Mẫu nghiệm thu NN» → **10 công việc BDTX** (TT 41 PL IV Mẫu 01 §1.2.1) + **chỉ số Đạt / Không đạt / Khấu trừ** + đính kèm FileService. **Cấm** chọn tên dự án/công trình.

## 2. Map mẫu

SSOT [`MAU-10.md`](../../plan/nghiem-thu-mau/MAU-10.md). Value `mau-01`…`10` **giữ**. Label ship pháp lý.

## 3. Chỉ số

SSOT [`CHI-SO.md`](../../plan/nghiem-thu-mau/CHI-SO.md). Schema [`SCHEMA.md`](../../plan/nghiem-thu-mau/SCHEMA.md).

## 4. Cấm

- Fork Linm · ERP.* · `api/v1/nghiem-thu` root
- Gộp `csdl-so-08` / `kcht-cong-trinh` / `rmms_patrol_sessions` / WO maintenance
- Persist presigned URL · invent `files-nt`
- Enqueue `qlbd` web cùng pack mobile
- Invent label ngoài MAU-10

## 5. API (reuse)

| Method | Path | Delta |
|--------|------|--------|
| GET | `patrol/nghiem-thu/init-data` | Label + criteria + ResultCodes |
| GET/POST | `patrol/nghiem-thu` | Result* · Scores |
| GET/PUT | `patrol/nghiem-thu/{id}` | bind scores |
| files | `files/*` | giữ |

Mobile.Bff catch-all · Web BFF **sau**.

## 6. Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | — | later | — |
| mobile | `data_analy` | `pending_confirm` | `2026-09-20` |
