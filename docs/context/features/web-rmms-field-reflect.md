# Feature context — web-rmms-field-reflect

> **Slug:** `web-rmms-field-reflect` · **Wave:** W3 Field · T-W3-10  
> **Status:** dev PASS · next qa (delta Pattern B · T-QA-VAL-B-01) · **packKind:** `list` · **changeScope:** `edit_page` · task `task_a905fb59`  
> **Demo:** N/A · **cấm** demo HTML / in-app mock SSOT / fake GPS  
> **MFE:** `Linm.Web.RMMS.Mobile` · phone `max-width` 430px · copy 1-1 Android · **cấm** nhét MFE desktop · **cấm** iOS/Android native  
> **BE:** `Linm.RMMS.WebService` · **Incident** (+ Patrol · Integration · AiVision · FileService cite) · **cấm ERP.***  
> **BFF:** `Linm.RMMS.Mobile.Bff` · `VITE_MOBILE_API_URL=http://localhost:5202/mobile-bff/api/v1` · **cấm** web-bff client · **cấm** Route mobile-bff trên web-bff controllers  
> **mfeStdRoute:** `/phan-anh` · **mfeStdUrl:** `http://localhost:9301/phan-anh` · product `/field/reflect`  
> **Edit cite:** `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` · Pattern B · `FieldReflectPage`  
> **Queue:** `/agent-qldb-workflow` · alias `web-rmms-field-reflect` · task `task_a905fb59` (dev PASS) · prior tl `task_2ead05fa` · sa `task_804469f6` · design `task_809a7227` · po `task_8da9efa7` · analy `task_73173396`

## 1. Mục tiêu

Màn **Phản ánh hiện trường** trong ca tuần (Field): chọn loại TS · loại Hư/Mất/Hỏng · checklist local · ảnh (+ optional photo-geo) · GPS chốt · (tuỳ) nhận diện AI · **Tạo vấn đề** `POST incident/incidents` (map body Ghi sự cố) · nháp mất sóng → peer offline. Entry từ hub Field (2 cửa Tuần đường BDTX / Tuần kiểm Khu·VP) — **không** deep journal / kết ca / tồn tại / tần suất (owner B–E).

## 2. Màn (SSOT)

| Id | Route | Việc |
|----|-------|------|
| FR-00 | pick (optional) | Grid loại TS · `GET integration/asset-types` · cite peer field-reflect / incident-create |
| FR-01 | `/field/reflect` · MFE `/phan-anh` | Form phản ánh · phone ≤430 · Android 1-1 · Pattern B CTA |
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
| GPS | `navigator.geolocation` · deny → **báo khi bấm** (Pattern B) · **cấm** khóa nút trước · **cấm** fake |
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
| contentHash | `sha256:d8f13df3772c0f27b367c5e01a5ce2cf942b1a27640c1390e76e34c3a8c267f2` |
| writtenAt | `2026-09-27T12:10:00.000Z` |
| taskId | `task_2ead05fa` |
| priorTask | sa `task_804469f6` · design `task_809a7227` · po `task_8da9efa7` · analy `task_73173396` |

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-27T12:16:12.930Z` |
| mobile | — | — | — |
