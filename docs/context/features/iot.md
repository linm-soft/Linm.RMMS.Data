# Danh sách IoT — Feature Context

> **Slug:** `iot` · **Module:** `Iot` · **Phase:** P2 extra (menu **platform ADMIN only**)  
> **Status:** Context · MFE scaffold (chưa real implement)  
> **Kind:** **B** (list) + **D** (form) — Confirmed by: user enqueue 2026-09-04  
> **packKind:** `list` · **không** gộp `csdl-so-sach` / `asset-kcht-dashboard`  
> **MFE:** `Linm.Web.RMMS.Iot` · route `/iot` · `mfeStdUrl` `http://localhost:9309/iot`  
> **BE hiện có:** `api/v1/iot/health` only — **cấm** coi health = CRUD devices  
> **Menu:** `rmms-iot-iot` · `package_menu_items` **ADMIN** only

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Danh sách thiết bị IoT (cảm biến / logger) · CRUD khi BE sẵn sàng |
| Persona | Kỹ thuật ATS · Admin platform (P2 extra) |
| App hiện có | MFE scaffold list + form placeholder · HDSD stub |
| DoD P2 | List Kind B + form Kind D + `api/v1/iot/devices` · BFF proxy · perm `rmms-iot:devices:read\|write` |
| Align MFE | Standalone `http://localhost:9309/iot` |

**Cấm** enqueue/implement nhầm slug `asset-kcht-dashboard` (`/so-ts/hang-muc`) hoặc `csdl-so-sach` (`/so-ts/csdl-so-sach`).

## 2. Design / UI

| Screen | Pattern | Kind |
|--------|---------|------|
| List `/iot` | CatalogListShell | **B** |
| Tạo `/iot/tao-moi` · chi tiết `/iot/:id` | Full page form | **D** |

MFE hiện tại: empty-state «scaffold» + form hint `/erp-form-context` — **chưa** field inventory.

## 3. API (P2 — chưa có)

| Method | Path | Mô tả | BE status |
|--------|------|-------|-----------|
| GET | `api/v1/iot/health` | Health | có |
| GET/POST | `api/v1/iot/devices` | List / create | **thiếu** |
| GET/PUT/DEL | `api/v1/iot/devices/{id}` | Detail | **thiếu** |

BFF `web-bff/api/v1/iot`. **Cấm** invent ERP.*.

## 4. Fields (draft — data-analy chốt)

| Field | Control | Notes |
|-------|---------|-------|
| code | Text code | IdCode |
| name | Text | Tên thiết bị |
| type | LOOKUP | Loại cảm biến |
| status | Select | Online / offline |
| routeCode | SearchInput | Gắn tuyến |
| km | Number | Lý trình |

## 5. Gaps

| ID | |
|----|--|
| GAP-IOT-01 | List/form scaffold — chưa CatalogListShell / field inventory |
| GAP-IOT-02 | BE chỉ health — thiếu devices CRUD + Schema pair |
| GAP-IOT-03 | Menu P2 extra — **cấm** gán STAFF / ADMIN-RMMS |

<!-- context: iot web P2 extra · enqueue 2026-09-04 -->

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-05T04:52:18.055Z` |
| mobile | — | — | — |
