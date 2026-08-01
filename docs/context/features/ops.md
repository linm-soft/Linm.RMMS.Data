# Chỉ đạo điều hành — Feature Context

> **Slug:** `ops` · **Module:** `Notification` + Dashboard · **Phase:** P2 (list/notify nhẹ P1)  
> **Status:** Draft → Context  
> **Sources:** `RMMS` §9 · guide **Giám sát** · `07` §9 · `15-SCREEN-AI-MAP.md`

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Điều hành tuần tra · sự cố · sửa chữa · theo dõi nhân lực/thiết bị/PT · bản đồ + notify |
| Persona | Hạt trưởng · điều phối |
| App hiện có | Mobile/Web **Giám sát** · thông báo trong Vấn đề |
| DoD P1 | Notify + list giám sát (giữ) |
| DoD P2 | Command center · điều phối đa đội |

## 2. Design / UI

| Screen | Pattern | Zones |
|--------|---------|-------|
| Giám sát hoạt động | Full (giữ) | Map · list cán bộ |
| Inbox chỉ đạo | Full / Slideout | Thread · assign | P2 |
| Bản đồ ĐH | Full | Layers patrol/incident/WO | P2 |

## 3. API

| Method | Path |
|--------|------|
| GET | `/api/v1/ops/overview` |
| POST | `/api/v1/notifications/send` |
| GET | `/api/v1/notifications/inbox` |

SignalR hub P2: `OpsHub`.

## 4. Database

Notification · DispatchOrder (P2) · Device/Vehicle track (P2–P3).

## 5. Events / tích hợp

Consume incident/patrol/workorder · publish push/SignalR.

## 6. Gaps / quyết định

| ID | Default |
|----|---------|
| GAP-F-OPS-01 Command UI full | P2 |
| GAP-F-OPS-02 Theo dõi thiết bị/PT | P2–P3 Inventory |

## 7. Demo checklist (chốt khách)

- [ ] Map giám sát = điểm vào ops P1
- [ ] Badge P2 command center
