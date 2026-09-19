# Công tác nghiệm thu

> **Slug:** `nghiem-thu` · **Module:** Field · **Phase:** P1  
> **Status:** Web **done** · Mobile **pending_confirm** (scan 19/09/2026 `run_selected`)  
> **Kind web:** B list + D form (clone tuần kiểm)  
> **Kind mobile:** `list` · pack `nghiem-thu`  
> **MFE:** `Linm.Web.RMMS.Field` · route `/nghiem-thu`  
> **Mobile:** `Linm.RMMS.Mobile.iOS` + Android · parent `patrol-home` · `#row-nghiem-thu` · `#sc-nghiem-thu`  
> **BE:** `Linm.RMMS.WebService` · `api/v1/patrol/nghiem-thu` · **cấm ERP.***  
> **Persona:** cán bộ nghiệm thu (≠ tuần đường / tuần kiểm)  
> **Peer:** [`patrol.md`](patrol.md) · [`nghiem-thu-create.md`](nghiem-thu-create.md) · [`nghiem-thu-detail.md`](nghiem-thu-detail.md)  
> **Scan mobile:** `/scan-mobile-feature` `run_selected` · queue `qlbd-mobile` · slash `/agent-qldb-workflow-mobile`

## 1. Mục tiêu

Module riêng giống tuần kiểm: list + Create/Edit + **10 mẫu nghiệm thu** + upload ảnh/video + thông tin hiện trường. **Cấm** gộp `maintenance` WO / P2 stub.

## 2. Upload (HARD)

Reuse FileService đang có — **không** API file mới.

| Lane | BFF | UI |
|------|-----|-----|
| Web | `/init-bff-file` trên `RMMS.Service.Bff` · `web-bff/api/v1/files/*` | `/integrate-file-upload-web` · persist file **id** |
| Mobile | `/init-bff-file` trên `Linm.RMMS.Mobile.Bff` · `mobile-bff/api/v1/files/*` | `/integrate-file-upload-mobile` · dual OS · GET `/object` + JWT |

**Cấm:** Copy `FilesController` · invent `api/v1/files-nt` · persist / log presigned URL · `/implement-file-service`.

## 3. Cấm

- Fork Linm · ERP.*
- Gộp NT vào queue web khi đang chạy native (và ngược lại)
- Invent mobile-only endpoint khi Web đã có `api/v1/patrol/nghiem-thu`
- Reuse entity `rmms_patrol_sessions`

## 4. Native (scan)

| Slug | Kind | Demo | Queue |
|------|------|------|-------|
| `nghiem-thu` | list | `#sc-nghiem-thu` · `#row-nghiem-thu` | `qlbd-mobile` · `pending_confirm` |
| `nghiem-thu-create` | sheet | `#sc-nghiem-thu-create` · nav Tạo | `qlbd-mobile` · `pending_confirm` |
| `nghiem-thu-detail` | sheet | row tap list (HTML hiện toast) · web GET/PUT `/{id}` | `qlbd-mobile` · `pending_confirm` |

API web **live**. Mobile.Bff **chưa** proxy NT — SA thêm proxy cùng resource, **cấm** invent path.

## 5. API (reuse — cấm invent)

| Method | Path |
|--------|------|
| GET/POST | `api/v1/patrol/nghiem-thu` |
| GET/PUT/DELETE | `api/v1/patrol/nghiem-thu/{id}` |
| GET | `api/v1/patrol/nghiem-thu/init-data` |
| Web BFF | `web-bff/api/v1/patrol/nghiem-thu` |
| Mobile BFF | `mobile-bff/api/v1/patrol/nghiem-thu` (SA proxy) |

Lookup: `mau-01`…`mau-10` · status `draft`/`in_progress`/`done`/`cancelled`.

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-12T10:10:11.580Z` |
| mobile | `qa` | `pending` | `2026-09-19T16:06:10.110Z` |
