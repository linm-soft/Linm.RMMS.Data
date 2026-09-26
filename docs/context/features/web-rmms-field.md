# Feature context — web-rmms-field

> **Slug:** `web-rmms-field` · **Wave:** W3 Field hub  
> **Status:** draft → data_analy · **packKind:** `list` · **changeScope:** `new_page`  
> **Demo:** N/A · **cấm** demo HTML / in-app mock SSOT  
> **MFE:** `Linm.Web.RMMS.Mobile` · phone `max-width` 430px · **cấm** nhét vào MFE desktop  
> **BE:** `Linm.RMMS.WebService` · domain **Patrol** (+ cite Integration/AiVision/Incident/FileService qua peer) · **cấm ERP.***  
> **mfeStdRoute:** `/web-rmms-field` · **mfeStdUrl:** `http://localhost:9301/web-rmms-field`  
> **Queue:** `/agent-qldb-workflow` · alias `web-rmms-field` · **cấm** iOS/Android native

## 1. Mục tiêu

Hub tab **Field** (`PatrolHomeView` / `/field`): chrome 2 cửa Tuần đường · Tuần kiểm + nav tới peer Field (attendance · history · nghiệm thu · cam · reflect · offline · supervise · map). **Chỉ** Live `GET patrol/sessions` cho badge ca; **không** CRUD sâu trên hub.

## 2. Màn hub (SSOT)

| Id | Route (native cite) | Việc |
|----|---------------------|------|
| FL-00 | `/field` · MFE `/web-rmms-field` | Hub Field phone ≤430 |
| FL-01 | doors | Tuần đường → peer A `/field/tuan-duong` · Tuần kiểm → `/field/tuan-kiem` |
| FL-02 | sync | → `/field/offline` / peer `web-rmms-offline` · badge queue local |
| FL-03 | tiles | Nav peer: attendance · history · nghiem-thu · cam · reflect · supervise · map |

**Out (peer owners):** mở ca / check-in sheet / journal / findings / kết ca / frequency · attendance CRUD · nghiệm thu CRUD · cam detect · reflect create · offline replay · supervise detail · patrol-map.

## 3. Nguồn SSOT (cite)

| Source | Path |
|--------|------|
| Screens Tab Field | `docs/plan/web-rmms-mobile/SCREENS.md` · `6f74282b…` |
| Plan tab field | `docs/plan/web-rmms-mobile/PLAN.md` · `60d75d5b…` |
| Peer hub A | `docs/context/features/web-rmms-mobile-a.md` · TD-00 |
| Peer shell | `docs/context/features/web-rmms-shell.md` · SH-04 |
| DOMAIN-MAP | Patrol · **GAP** slug `web-rmms-field` chưa có row |
| API Live | `PatrolSessionsController` · BFF `patrol/sessions` |

## 4. API Live (hub only)

| Surface | Prefix / resource |
|---------|-------------------|
| API | `api/v1/patrol/sessions` · GET list (badge `Đang tuần` + `PatrolType`) |
| Web BFF (cite) | `web-bff/api/v1/patrol/sessions` |
| Mobile BFF (HARD) | `mobile-bff/api/v1` · host `http://localhost:5202` |
| Deep APIs | peer features (attendance-logs · nghiem-thu · ai-vision · …) |

## 5. HARD rules

| Rule | |
|------|--|
| Nhãn | `useFormOptions()` / copy key · **cấm** hardcode VN form |
| GPS | **không** bắt GPS trên hub · deep = peer · deny → block coords · **cấm** fake |
| BE | ONLY `Linm.RMMS.WebService` + DOMAIN-MAP · **cấm ERP.*** |
| Scope | hub nav + badge · **cấm** invent FieldController / hub CRUD |

## 6. Persona

| Ai | Việc trên hub |
|----|---------------|
| NV tuần đường (BDTX) | cửa Tuần đường + tiles peer |
| Cán bộ QLĐB (VP/Khu) | cửa Tuần kiểm + tiles peer |

## Version meta

| Field | Value |
|-------|-------|
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| contentHashSource | SCREENS.md + this file |
| writtenAt | `2026-09-26T02:00:48.000Z` |
| taskId | `task_32822b41` |

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-25T19:26:06.763Z` |
| mobile | — | — | — |
