# Góp ý phần mềm — Feature Context

> **Slug:** `feedback` · **Module:** `Integration` (nhẹ) · **Phase:** P1  
> **Status:** Context  
> **Sources:** guide Mobile **Góp ý** · `15-SCREEN-AI-MAP.md`

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Tuần đường / quản lý / tuần kiểm gửi góp ý tính năng |
| Persona | Mọi role hiện trường |
| App hiện có | Mobile **Góp ý** — giữ UX |
| DoD | POST feedback · list admin (optional) |

## 2. Design / UI

| Screen | Pattern | Zones |
|--------|---------|-------|
| Gửi góp ý | Full / Modal (giữ) | Nội dung · Gửi |
| Inbox admin | Full | Optional P1 |

## 3. API

| Method | Path |
|--------|------|
| POST | `/api/v1/feedback` |
| GET | `/api/v1/feedback` | Admin |

## 4. Database

| Entity | Key columns |
|--------|-------------|
| AppFeedback | Id, UserId, Body, At, Status |

## 5. Events / tích hợp

Optional email/notify đội kỹ thuật.

## 6. Gaps / quyết định

| ID | Default |
|----|---------|
| GAP-F-FB-01 Admin UI | DEFER nếu ngoài scope AI HĐ |

## 7. Demo checklist (chốt khách)

- [ ] Form gửi 1 field mock
- [ ] Không nhầm với Báo sự cố người dân (`citizen`)
