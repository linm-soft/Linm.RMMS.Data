# Công tác nghiệm thu

> **Slug:** `nghiem-thu` · **Module:** Field · **Phase:** P1  
> **Status:** Draft · họp 04/09/2026 hạng 1  
> **Kind:** B list + D form (clone tuần kiểm)  
> **MFE:** `Linm.Web.RMMS.Field`  
> **Mobile:** `Linm.RMMS.Mobile.iOS` + Android · pack `nghiem-thu` · `nghiem-thu-create`  
> **BE:** `Linm.RMMS.WebService` · **cấm ERP.***  
> **Persona:** cán bộ nghiệm thu (≠ tuần đường / tuần kiểm)  
> **Peer:** [`patrol.md`](patrol.md) · [`csdl-so-01.md`](csdl-so-01.md)  
> **Scan mobile:** `/scan-mobile-feature` · seed `MEETING-1-5.md` · **enqueue_later**

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
- Enqueue mobile trước `/scan-mobile-feature` `run_selected`

## 4. Native (scan)

| Slug | Kind | Demo |
|------|------|------|
| `nghiem-thu` | list | `#sc-nghiem-thu` · `#row-nghiem-thu` |
| `nghiem-thu-create` | sheet | `#sc-nghiem-thu-create` |

Chờ API web `nghiem-thu`. Queue `qlbd-mobile` · slash `/agent-qldb-workflow-mobile`.
