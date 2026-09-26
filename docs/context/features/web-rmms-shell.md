# Feature context — web-rmms-shell

> **Slug:** `web-rmms-shell` · **Wave:** W0–W1 shell (Tab bar + login gate + Home/Field hub chrome)  
> **Status:** draft → data_analy · **packKind:** `list` · **changeScope:** `new_page`  
> **Demo:** N/A (shell chrome · **cấm** demo HTML / mock SSOT)  
> **MFE:** `Linm.Web.RMMS.Mobile` · khung phone `max-width` 430px · **cấm** nhét vào MFE desktop Asset/Gis/Camera  
> **BE:** `Linm.RMMS.WebService` + Mobile.Bff `:5202` · **cấm ERP.*** / Domains/Master  
> **mfeStdRoute:** `/web-rmms-shell` · **mfeStdUrl:** `http://localhost:9301/web-rmms-shell`  
> **Queue:** `/agent-qldb-workflow` · alias `web-rmms-shell` · **cấm** sửa iOS/Android

## 1. Mục tiêu

Phone shell 1-1 Android chrome: **bottom Tab bar 4 mục** Home · Field · Incident · Work (+ login overlay, stack back). **Bỏ** tab Cá nhân và mọi route `me*` / feedback / cam-view. Field hub giữ **hai lối**: Tuần đường (BDTX) · Tuần kiểm (Khu/VP). Nội dung sâu (nhật ký / kết ca / tồn tại / tần suất) = task `web-rmms-mobile-b`…`e` — shell chỉ nav/stub.

## 2. Màn shell (ids)

| Id | Route | Việc |
|----|-------|------|
| SH-00 | shell root | `MobileShell` · phone frame ≤430 · stack |
| SH-01 | TabBar | 4 tab: `tab.home` · `tab.field` · `tab.incident` · `tab.work` |
| SH-02 | `/login` | Login overlay · `POST auth/login` |
| SH-03 | `/` Home | Guest FAQ+login · Staff quick actions + grid nav |
| SH-04 | `/field` | Hub 2 cửa → `/field/tuan-duong` · `/field/tuan-kiem` (owner nội dung: `web-rmms-mobile-a`) |
| SH-05 | `/incident` | Tab root stub → list (owner: Incident peer) |
| SH-06 | `/work` | Tab root stub → WO list (owner: Maintenance peer) |

**Out of shell:** `/me` · `/me/profile` · `/me/settings` · `/me/feedback` · `/me/cam` · journal/findings/close/frequency (b–e).

## 3. Nguồn SSOT (cite)

| Source | Path |
|--------|------|
| Screens / GPS / BFF | `docs/plan/web-rmms-mobile/SCREENS.md` |
| Plan shell / map | `docs/plan/web-rmms-mobile/PLAN.md` · Shell · HARD · Map (bỏ tab me) |
| Peer Field A | `docs/context/features/web-rmms-mobile-a.md` |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` · Auth/Notification/Patrol/Incident/Maintenance cite |
| BFF | Mobile.Bff `mobile-bff/api/v1` `:5202` |

## 4. API Live (prefix) — chrome only

| Surface | Prefix / path |
|---------|----------------|
| Mobile BFF | `http://localhost:5202` · `mobile-bff/api/v1` |
| Auth | `auth/login` · `auth/refresh-token` · `auth/profile` |
| Session window | `contract-accounts/session-window?authUserId=` |
| Notify badge | `GET notification/overview` · inbox optional |
| Field deep | cite peer `web-rmms-mobile-a` · `patrol/sessions` |
| Web BFF | **cite only** — **cấm** base client MFE này |

## 5. HARD rules (product)

| Rule | |
|------|--|
| Tab | 4 tab · **cấm** tab Cá nhân / `me*` |
| Layout | Copy Android icon+tab+layout 1-1 · phone `max-width` 430 |
| Nhãn | `useFormOptions()` / copy key · **cấm** hardcode tiếng Việt trên form |
| GPS | `navigator.geolocation` · deny → chặn nút cần tọa độ (deep screens) · shell chrome không bắt GPS |
| Field doors | Tuần đường (BDTX) · Tuần kiểm (Khu/VP) |
| BE | ONLY `Linm.RMMS.WebService` + DOMAIN-MAP · Mobile.Bff |
| Native | **cấm** sửa iOS/Android |

## 6. Persona

| Zone | Ai |
|------|-----|
| Home / Incident / Work | Nhân viên hiện trường + cán bộ QLĐB (sau login) |
| Field · Tuần đường | BDTX |
| Field · Tuần kiểm | Cán bộ QLĐB (VP / Khu) |

## Version meta

| Field | Value |
|-------|-------|
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| contentHashSource | `SCREENS.md` + `PLAN.md` + this file |
| screensHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| planHash | `sha256:60d75d5b1739142fa6d4250ea2ef65ff427a11e4657661d843a860955493ca1b` |
| writtenAt | `2026-09-25T11:17:19.162Z` |
| taskId | `task_6cee6055` |

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-25T11:49:49.432Z` |
| mobile | — | — | — |
