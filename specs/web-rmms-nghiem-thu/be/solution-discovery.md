# SA — Solution — web-rmms-nghiem-thu

> Status: **confirmed** · autoApprove ON · task `task_f677df1b` · 2026-09-25T16:45:00.000Z  
> **Cấm** ERP.* · **cấm** invent path/entity/controller · **cấm** Step 4b / migration ở role SA · **cấm** Write MFE/native · **cấm** fake GPS · **cấm** demo SSOT · **cấm** Web BFF base từ Mobile MFE.

| | |
|--|--|
| Feature | `web-rmms-nghiem-thu` |
| Title | Nghiệm thu — list, tạo, chi tiết |
| Role | `sa` |
| packKind | `list` |
| changeScope | `new_page` |
| formPattern | Mobile list + full create/detail ≤430 · N/A ERP Modal/Slideout · Android NghiemThu* 1-1 · useFormOptions / `nghiemThu.*` |
| domain | **Patrol** (`patrol`) · resource `nghiem-thu` · entity `rmms_nghiem_thu` · **cấm** reuse `rmms_patrol_sessions` · **cấm** Maintenance WO |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` · route `/web-rmms-nghiem-thu` |
| mfeStdUrl | `http://localhost:9301/web-rmms-nghiem-thu` |
| nativeRouteCite | SCREENS `/field/nghiem-thu` · `/new` · `/:id` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` |
| BFF | Mobile.Bff `http://localhost:5202` · prefix `mobile-bff/api/v1` · catch-all proxy |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| skillVersion | `2026.09.05.03` |
| solution_confirm | **approve** (autoApprove) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-nghiem-thu/ui/prototype/index.html` |

## 1. Domain / ownership

| Item | Decision |
|------|----------|
| DOMAIN-MAP slug | `web-rmms-nghiem-thu` → **Patrol** / `patrol` |
| Alias kept | `nghiem-thu` → Patrol (desktop Field + native) — **same** API resource |
| Rationale | Live `api/v1/patrol/nghiem-thu*` · `NghiemThuController` · Mobile MFE Field hub entry — **không** domain NT mới |
| Cite peers | native `nghiem-thu` / create / detail · MAU-10 · FileService `files/*` · Field hub (shell/home) |
| API folder | **reuse** Patrol `NghiemThuController` · **no new** controller |
| **Cấm** | invent `nghiem-thu-mobile/*` · invent media path · ERP.* · Web BFF base · gộp tuần đường/tuần kiểm/mnt · DELETE P1 |

**DOMAIN-MAP row (applied):**

| Feature slug | Domain Pascal | kebab |
|--------------|---------------|-------|
| `web-rmms-nghiem-thu` | Patrol | `patrol` · Live `nghiem-thu` list+create+detail · cite FileService · MFE `Linm.Web.RMMS.Mobile` `/web-rmms-nghiem-thu` · **cấm** invent NT controller/path |

→ resolves **UNCLEAR-DOMAIN-MAP-NT**.

## 2. FormMode ↔ API

FormMode = **List** + **Create** + **Detail/Edit** (full-page phone · N/A Modal/Slideout). Session JWT staff required.

| Mode / zone | UI | API | Write | Notes |
|-------------|----|-----|-------|-------|
| NT-00 chrome | page shell | — | — | phone ≤430 |
| NT-01 list | List | `GET patrol/nghiem-thu` | — | page/pageSize · empty state |
| NT-02 search | Text/Search | query `search` | — | P1 only · status/route/date/template OUT |
| NT-03 row | Icon/Badge | item | — | Check success · Status · ResultCode |
| NT-04 create btn | Button/Nav | — | nav `/new` | Field hub entry peer |
| NT-05 template | Select | `GET …/init-data` | `TemplateType*` | MAU-10 labels · **cấm** «Mẫu nghiệm thu NN» |
| NT-06 route/km | Text/Number | item | Route* · KmFrom · KmTo | create* |
| NT-07 result | Select/Text | item | ResultCode · ResultNote | pass/fail/deduct |
| NT-08 scores | Checklist | init-data criteria | Scores[] replace-all | |
| NT-09 media | PhotoRow | `files/*` | MediaIds ≤10 | FileService · **cấm** invent files-nt |
| NT-10 GPS | Action | geolocation | FieldInfo / ZoneOrgCode | deny = no fake · list **không** bắt GPS |
| NT-11 save | Button | POST / PUT | Status draft on Lưu nháp | create=POST · edit=PUT |
| Auth gate | staff | JWT + X-Company-Id | guest → login | shell owns login |

### Live endpoints (HARD — from real-data §B)

| Method | BFF path (client) | Downstream | Response bind | Status |
|--------|-------------------|------------|----------------|--------|
| GET | `mobile-bff/api/v1/patrol/nghiem-thu` | Patrol | list items → NT-01/02/03 | **Live** |
| GET | `mobile-bff/api/v1/patrol/nghiem-thu/init-data` | Patrol | TemplateTypes+criteria+ResultCodes+statuses | **Live** |
| GET | `mobile-bff/api/v1/patrol/nghiem-thu/{id}` | Patrol | detail → NT-05…11 | **Live** |
| POST | `mobile-bff/api/v1/patrol/nghiem-thu` | Patrol | create draft → list/detail | **Live** |
| PUT | `mobile-bff/api/v1/patrol/nghiem-thu/{id}` | Patrol | update → detail | **Live** |
| * | `mobile-bff/api/v1/files/*` | FileService | MediaIds ≤10 | **Live** |
| DELETE | `…/nghiem-thu/{id}` | Patrol | — | **OUT P1** (API exists · FE không gọi) |

- Client base: `http://localhost:5202` + `mobile-bff/api/v1` — **không** gọi `web-bff` từ Mobile MFE.
- Permissions: `patrol.nghiem-thu.read` · `patrol.nghiem-thu.write`.
- **API Mới:** none · **migration:** none (reuse entity) · **entity mới:** none.
- Labels: `useFormOptions()` / LinmCopy `nghiemThu.*` · **cấm** hardcode VN.
- GPS: device only on create/detail · deny = leave FieldInfo/Zone empty · **cấm** fake.

## 3. BFF vs API

| Layer | Role for NT |
|-------|-------------|
| Mobile.Bff `:5202` | sole FE entry · `MobileApiProxyController` catch-all `{**path}` → `api/v1/{path}` · auth/files rewrite · **cấm** dedicated NT BFF controller |
| RMMS.Service.Api | Patrol `NghiemThuController` `api/v1/patrol/nghiem-thu` — **reuse** |
| Patrol web-bff | `NghiemThuBffController` cite peer desktop Field · **not** Mobile client base |
| FileService | `files/*` via Mobile.Bff rewrite |

→ resolves **UNCLEAR-BFF-PROXY** (proxy Live · no invent).

Fail: 503/network → toast + retry · validation → field errors — **cấm** mock SSOT · **cấm** `window.alert`.

## 4. Entity / migration

| Item | Decision |
|------|----------|
| Tables | **reuse** `rmms_nghiem_thu` (+ scores child per peer Schema_NghiemThuMau) |
| EF migration | **skip** at SA · no new schema this feature |
| Step 4b | **skip** at SA · Dev only if Live gap (not expected) |
| DELETE | OUT P1 FE · API keep |

## 5. FE surface (SA contract — Dev implements)

| Zone | Contract |
|------|----------|
| NT-00…11 | list + create + detail · phone 430 · Android Check row 1-1 |
| FILTER P1 | search only |
| DELETE | OUT P1 |
| DES-GRID / LinErpListFilterBar | **N/A** phone list |
| DES-LEAVE | in-app discard · **cấm** native `confirm` |
| Entry | Field hub quick action · no new tab · no gộp tuần đường/tuần kiểm/mnt |
| Route | `mfeStdRoute=/web-rmms-nghiem-thu` · native cite `/field/nghiem-thu*` |
| REMOVED | desktop Field edit · invent path · iOS/Android code edit · demo SSOT |

## 6. Risks / open

| ID | Status |
|----|--------|
| UNCLEAR-DOMAIN-MAP-NT | **resolved** — DOMAIN-MAP row added |
| UNCLEAR-BFF-PROXY | **resolved** — Mobile.Bff catch-all Live |
| UNCLEAR-FILTER-UI | **resolved PO** — search only P1 |
| UNCLEAR-DELETE | **resolved PO** — OUT P1 |
| UNCLEAR-STD-ROUTE | **resolved Design** — `/web-rmms-nghiem-thu` + SCREENS `/field/nghiem-thu*` |

## 7. Handoff

| Next | Need |
|------|------|
| team_lead | Tasks: list+search · create draft POST · detail PUT · init-data MAU-10 · files≤10 · GPS deny · Field hub entry · cite T-W3-08 · no DELETE · no invent |
| devSlash | `/agent-dev` |
| qa | List/search/empty · create draft · detail PUT · GPS deny · mau labels · phone 430 · E2E queued `/agent-qa*` |

## Version meta

`skillVersion=2026.09.05.03` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `solution_confirm=approve` · `writtenAt=2026-09-25T16:45:00.000Z`
