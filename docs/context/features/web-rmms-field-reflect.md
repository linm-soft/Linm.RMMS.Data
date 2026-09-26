# Feature context — web-rmms-field-reflect

> **Slug:** `web-rmms-field-reflect` · **Wave:** W3 Field · T-W3-10  
> **Status:** po confirmed · next design · **packKind:** `list` · **changeScope:** `new_page`  
> **Demo:** N/A · **cấm** demo HTML / in-app mock SSOT / fake GPS  
> **MFE:** `Linm.Web.RMMS.Mobile` · phone `max-width` 430px · copy 1-1 Android · **cấm** nhét MFE desktop · **cấm** iOS/Android native  
> **BE:** `Linm.RMMS.WebService` · **Incident** (+ Patrol · Integration · AiVision · FileService cite) · **cấm ERP.***  
> **BFF:** `Linm.RMMS.Mobile.Bff` · `VITE_MOBILE_API_URL=http://localhost:5202/mobile-bff/api/v1` · **cấm** web-bff client · **cấm** Route mobile-bff trên web-bff controllers  
> **mfeStdRoute:** `/web-rmms-field-reflect` · **mfeStdUrl:** `http://localhost:9301/web-rmms-field-reflect` · product `/field/reflect`  
> **Queue:** `/agent-qldb-workflow` · alias `web-rmms-field-reflect` · task `task_9730d99f` (PO PASS)

## 1. Mục tiêu

Màn **Phản ánh hiện trường** trong ca tuần (Field): chọn loại TS · loại Hư/Mất/Hỏng · checklist local · ảnh (+ optional photo-geo) · GPS chốt · (tuỳ) nhận diện AI · **Tạo vấn đề** `POST incident/incidents` (map body Ghi sự cố) · nháp mất sóng → peer offline. Entry từ hub Field (2 cửa Tuần đường BDTX / Tuần kiểm Khu·VP) — **không** deep journal / kết ca / tồn tại / tần suất (owner B–E).

## 2. Màn (SSOT)

| Id | Route | Việc |
|----|-------|------|
| FR-00 | pick (optional) | Grid loại TS · `GET integration/asset-types` · cite peer field-reflect / incident-create |
| FR-01 | `/field/reflect` · MFE `/web-rmms-field-reflect` | Form phản ánh · phone ≤430 · Android 1-1 |
| FR-02 | capture overlay | PhotoRow / peer `photo-geo-capture` · GPS gate |

**Out:** `/me*` · me-profile · me-settings · feedback · cam-view · journal / kết ca / tồn tại / tần suất (web-rmms-mobile-b…e) · invent `field-reflect/*` API · ERP.* · iOS/Android.

## 3. Nguồn SSOT (cite)

| Source | Path |
|--------|------|
| Screens | `docs/plan/web-rmms-mobile/SCREENS.md` · `/field/reflect` + overlay photo-geo |
| Plan / Tasks | `PLAN.md` · `TASKS.md` **T-W3-10** `FieldReflectView` |
| Peer CTX | `docs/context/features/field-reflect.md` · `photo-geo-capture.md` · `incident-create.md` |
| Peer hub | `docs/context/features/web-rmms-field.md` · tile reflect |
| DOMAIN-MAP | Incident (+ Patrol · Integration · AiVision) · **GAP** slug `web-rmms-field-reflect` chưa có row |

## 4. API Live (cấm invent path riêng)

| Method | Path | Note |
|--------|------|------|
| GET | `patrol/sessions` | Ca Đang tuần · Route·Km · rỗng → toast · **cấm** bịa ca / itemsOrDemo |
| GET | `integration/asset-types` | Catalog loại TS / pick |
| POST | `ai-vision/uploads` (+ PUT object) | Ảnh (optional trước detect) |
| POST | `files/init` · PUT `files/{id}/object` · POST `files/commit` | Overlay photo-geo · purpose=`photo-geo-capture` · cite FileService |
| POST | `ai-vision/detect` | Optional · Lat/Lng (+ AccuracyM) · gate ≤ 30 m khi detect |
| POST | `incident/incidents` | Tạo vấn đề · cùng map body Ghi sự cố · `HasGps=true` khi có fix |

App base: `{BffBase}/mobile-bff/api/v1`. Required create (cite Live): `Title` · `RouteName` · `IncidentType` · `Status` · `RequestedAt` (+ Severity · Description · MediaIds / DetectionId optional).

## 5. HARD rules

| Rule | |
|------|--|
| Nhãn | `useFormOptions()` / copy key · **cấm** hardcode VN trên form |
| GPS | `navigator.geolocation` · deny → **chặn** nút cần tọa độ (Tạo / Detect / capture geo) · **cấm** fake |
| Sessions | live-only · GAP-MOB-FIELD-SESS-01 · fail/empty = empty + toast |
| Checklist | local by asset · **cấm** invent checklist API (GAP-MOB-FIELD-CHK-01) |
| BE | ONLY `Linm.RMMS.WebService` + DOMAIN-MAP · **cấm ERP.*** · **cấm** Domains/Master |
| BFF | Mobile.Bff only · forms/init-data + domain routes trên Mobile.Bff |

## 6. Persona

| Ai | Việc |
|----|------|
| NV tuần đường (BDTX) | Entry cửa Tuần đường → reflect trong ca |
| Cán bộ QLĐB (VP/Khu) | Entry cửa Tuần kiểm → cùng form · stamp `PatrolType` |

## Version meta

| Field | Value |
|-------|-------|
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| contentHash | `sha256:e678be9152069e48f353f88e9f4d377e20e4fd4ad5c8d4aa2c86bd995bc1e667` |
| writtenAt | `2026-09-26T02:54:00.000Z` |
| taskId | `task_f225c747` |

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-25T20:27:36.050Z` |
| mobile | — | — | — |
