# Quản lý người dùng / tổ chức — Feature Context

> **Slug:** `users` · **Module:** Auth / Admin · **Phase:** P1 (giữ)  
> **Status:** Context  
> **Sources:** guide Web **Quản lý người dùng** · Mobile cập nhật profile · `15-SCREEN-AI-MAP.md`

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Cơ quan · user · cấp · phân tuyến · phân cán bộ quản lý · profile Mobile |
| Persona | Admin hạt/công ty |
| App hiện có | Web QL Cơ quan/Người dùng/Cấp · Mobile cập nhật TT |
| DoD | Giữ UX · API consumer khi migrate Auth |

## 2. Design / UI

| Screen | Pattern | Zones |
|--------|---------|-------|
| QL Cơ quan (tree) | Full (giữ) | Context menu thêm TC/user · phân tuyến |
| QL Người dùng / Cấp | Full | List |
| Profile Mobile | Full | SĐT · email · ảnh · MK |

## 3. API

| Method | Path |
|--------|------|
| CRUD | `/api/v1/orgs` · `/api/v1/users` · `/api/v1/roles` |
| POST | `/api/v1/orgs/{id}/assign-routes` |
| POST | `/api/v1/users/{id}/assign-routes` |
| POST | `/api/v1/users/{id}/managed-users` |
| PUT | `/api/v1/users/me` |

Auth: JWT admin scopes.

## 4. Database

Org · User · Role · UserRoute · ManagerUser — schema Auth (có thể host riêng).

## 5. Events / tích hợp

`user.updated` → Patrol zone cache (optional).

## 6. Gaps / quyết định

| ID | Default |
|----|---------|
| GAP-F-USR-01 Auth service tách | Theo HĐ — có thể ngoài gói AI |
| GAP-F-USR-02 Deep demo | Thấp ưu tiên vs AI modules |

## 7. Demo checklist (chốt khách)

- [ ] Sơ đồ phân tuyến 1 trang
- [ ] Không mở rộng scope AI
