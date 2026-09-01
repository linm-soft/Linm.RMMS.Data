# Context — mobile-cleanup-mock (epic)

| Field | Value |
|-------|-------|
| feature | `mobile-cleanup-mock` |
| title | [Mobile] Clean-up mock data + seed CRUD per screen |
| kind | epic · edit_page · native_dual |
| STATUS | `specs/mobile-cleanup-mock/STATUS.md` |
| peers | mọi slug P0/P1 trong STATUS child matrix |
| createdAt | `2026-09-01T00:56:00.000Z` |

## 1. Mục tiêu

Gỡ mock/demo fallback trên app iOS + Android; **review từng màn**; **seed CRUD data** tương ứng qua Mobile BFF để UI bind live.

## 2. Pattern (SSOT = attendance-day)

| Case | UI |
|------|-----|
| GET OK + items | bind live |
| GET OK + empty | EmptyChrome · **cấm** `*Copy.demo*` |
| GET fail | empty + toast lỗi · **cấm** OfflineDemo payload |

Slash per child: `/edit-mobile-feature` · dual + context lock.

## 3. API host

App: `{BffBase}/mobile-bff/api/v1`. **Cấm** invent path · ERP.* · app `:5101`.

## 4. Seed / CRUD

Mỗi slug: xác định resource BFF (list/detail/POST) → tạo ≥1 record tenant test (`linm-soft`) **hoặc** ghi rõ BE empty chấp nhận được + EmptyChrome.

## 5. Cấm

- Reset STATUS child → po / full_pipeline  
- Chỉ sửa 1 OS  
- Giữ toast «Đang dùng dữ liệu mẫu» khi đã hết demo payload  
- Seed hardcode trong app thay BE
