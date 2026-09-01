# Giám sát tuần đường — Feature Context

> **Slug:** `supervise` · **Module:** `Patrol` · **Phase:** P1  
> **Status:** Mobile list pack (native dual)  
> **sourceKind:** legacy + mobile-p1 demo  
> **Sources:** guide Check-in/Giám sát · `patrol.md` §2 · mobile-p1 `#sc-supervise`  
> **Demo HTML:** `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-supervise` · `DES-MOB-SUPERVISE`  
> **Kind:** list (check-in history) · **cấm** hub / Kind A–G web  
> **BE:** `Linm.RMMS.WebService` · domain **Patrol** · `api/v1/td-tk/cham-cong-logs`  
> **BFF:** `Linm.RMMS.Mobile.Bff` · `mobile-bff/api/v1/patrol/attendance-logs`

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Hạt trưởng / giám sát xem **danh sách check-in** tuần đường · lọc tuyến/ngày · chuyển bản đồ (P2) |
| Persona | Hạt trưởng giám sát · quản lý ca |
| App hiện có | Mobile **Giám sát** (list) · Web **Giám sát hoạt động** — giữ UX legacy |
| DoD | List check-in card · segment Danh sách/Bản đồ · filter toast P1 · GET attendance-logs + demo fallback |

## 2. Design / UI

| Screen | Pattern | Zones |
|--------|---------|-------|
| Giám sát list | Full List push from home | Nav back · filter · segment · rich-card rows |
| Giám sát bản đồ | sibling `patrol-map` | toast P1 |

**Shell:** `#sc-supervise` · tab Trang Chủ context · **không** tab bar on push screen.

## 3. API

| Method | Path | Status |
|--------|------|--------|
| GET | `/api/v1/patrol/attendance-logs` | **Live** — paged list |
| GET | `/api/v1/patrol/attendance-logs/{id}` | **Live** · P2 drill |
| POST | `/api/v1/patrol/sessions/{id}/check-ins` | **P2** — out of pack |

BFF: `mobile-bff/api/v1/patrol/attendance-logs` proxy catch-all.

## 4. Gaps

| ID | Default | Status |
|----|---------|--------|
| GAP-MOB-SUP-01 | Filter sheet / route picker | P1 toast only |
| GAP-MOB-SUP-02 | Map segment live | P1 toast · sibling `patrol-map` |
| GAP-MOB-SUP-03 | Org unit on card | demo fallback when BE lacks field |

## 5. Demo checklist

- [x] `#sc-supervise` rich-card list mock
- [x] Segment Danh sách / Bản đồ
- [x] Nav Trang Chủ + filter toast
- [ ] Native dual ship (task `task_e8ad42d2`)

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | — | — | — |
| mobile | `done` | `done` | `2026-09-01T02:58:18.605Z` |
