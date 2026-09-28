# SA — Solution — web-rmms-attendance

> Status: **confirmed** · autoApprove ON · task `task_8c3ee347` · 2026-09-27T17:15:00.000Z  
> changeScope=`edit_page` · Pattern B CTA delta · keep Live API · **cấm** ERP.* · **cấm** invent `/attendance/*` · **cấm** Step 4b / migration · **cấm** Write MFE/native · **cấm** web-bff client · **cấm** e2e / start:std · **cấm** fake GPS · **cấm** demoDays · **cấm** Excel.

| | |
|--|--|
| Feature | `web-rmms-attendance` |
| Title | Chấm công |
| Role | `sa` |
| packKind | `list` |
| changeScope | `edit_page` |
| formPattern | Mobile hub Pattern B validate · phone max-width 430 · N/A ERP Modal/Slideout · N/A DES-GRID / LinErpListFilterBar / Excel |
| domain | **Patrol** (`patrol`) · resource `attendance-logs` · cite Auth profile · Integration road-route (cite only) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` · mfeStdRoute `/cham-cong` |
| mfeStdUrl | `http://localhost:9301/cham-cong` |
| productRoute | SCREENS `/field/attendance` · `/report` · `/day/:key` · `/log/:id` |
| nativeRouteCite | Android `#sc-attendance*` · DES-MOB-ATT · DES-MOB-GPS-DENY |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` |
| BFF | `Linm.RMMS.Mobile.Bff` `:5202` · prefix `mobile-bff/api/v1` · `VITE_MOBILE_API_URL` / `mobileApiBase` only |
| contentHash | `sha256:0275fe24159e04a2d1a70682880e26b3456de61e7cf74b9c3d9ac707cae30d7a` |
| skillVersion | `2026.09.05.03` |
| solution_confirm | **approve** (autoApprove) |
| deltaCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-attendance/ui/prototype/index.html` |
| peer | `attendance` · native DoD GPS check-in · Face/NFC **DEFER** |

## 0. Delta scope (edit_page)

| Item | Decision |
|------|----------|
| Keep | Live GET/POST/GET{id} · Mobile.Bff catch-all · hub ATT-00…09 · client report/day · no new entity/migration |
| FE delta HARD | Pattern B CTA — bỏ `disabled={!canCheckIn}` · CTA luôn bật · chỉ `disabled` khi `saving` · thiếu auth/GPS/mạng/route → **bấm mới** báo (banner `string[]`) · GPS modal on-submit · **cấm** fake · **cấm** Excel |
| Guest | CLOSED Pattern B — CTA visible hoặc login CTA · **cấm** khóa CTA trước click |
| API Mới | **none** · migration **none** · Step 4b **skip** |
| Route | CLOSED `/cham-cong` (paths.ts) · **cấm** invent `/web-rmms-attendance` as std |

## 1. Domain / ownership

| Item | Decision |
|------|----------|
| DOMAIN-MAP slug | `web-rmms-attendance` → **Patrol** / `patrol` |
| Rationale | Live CRUD = `patrol/attendance-logs` only · report/day = **client aggregate** · no new domain · delta = FE validate UX only |
| Cite peers | slug `attendance` · SCREENS Field attendance · DES-MOB-ATT |
| API folder | **reuse** Patrol attendance-logs · Mobile.Bff catch-all — **no new** controller/entity |
| **Cấm** | invent `/attendance/*` · report/summary/zones/validate API · Face/NFC · supervise/zone · ERP.* · web-bff client · fake GPS · demoDays · Excel · iOS/Android edits · desktop Field |

**DOMAIN-MAP row (applied):**

| Feature slug | Domain Pascal | kebab |
|--------------|---------------|-------|
| `web-rmms-attendance` | Patrol | `patrol` · Live `attendance-logs` GET/POST/GET{id} · report/day=client aggregate · MFE `/cham-cong` · **cấm** invent `/attendance/*` |

## 2. FormMode ↔ API

Hub **không** master Modal. Modes = hub browse · check-in write · RO report/day/log chain.

| Mode / zone | UI | API | Write | Notes |
|-------------|----|-----|-------|-------|
| ATT-00 chrome | page shell | — | — | phone 430 · DES-MOB-ATT |
| ATT-01 heroStatus | Text RO | GET list → today | — | empty «—» |
| ATT-02 gpsMeta | Text RO | geolocation | — | deny → DES-MOB-GPS-DENY **on submit** (Pattern B) |
| ATT-03 btnCheckIn * | Button | POST logs | body below | Pattern B · **disabled=saving only** · validate on click |
| ATT-04 btnReport | Button/Nav | — | nav report | no API |
| ATT-05 dayRows | ListRow+Badge | GET list aggregate 7d | — | client group by day |
| ATT-06 report | List RO | GET list group day | — | **cấm** invent report API |
| ATT-07 day | List RO | filter dayKey | — | same GET |
| ATT-08 log | Detail RO | GET `…/{id}` | — | fields §B |
| ATT-09 empty | Empty | `[]` | — | live empty · **cấm** demoDays |
| validationBanner * | Banner | — | — | client `string[]` on submit (auth/GPS/mạng/route) |
| Auth | staff | `GET auth/profile` | `userName` → POST | guest → click login/banner (Pattern B) |
| GPS | Action | navigator.geolocation | `lat`/`lng` | deny on submit · **cấm** fake · **cấm** khóa CTA trước |

### Live endpoints (HARD — from real-data §B · unchanged)

| Method | BFF path (client) | Downstream | Response bind | Status |
|--------|-------------------|------------|----------------|--------|
| GET | `mobile-bff/api/v1/patrol/attendance-logs` | Patrol list | hero · dayRows · report/day aggregate | **Live** |
| POST | `mobile-bff/api/v1/patrol/attendance-logs` | Patrol create | refresh GET · hero checked-in | **Live** |
| GET | `mobile-bff/api/v1/patrol/attendance-logs/{id}` | Patrol detail | log.* RO | **Live** |
| GET | `mobile-bff/api/v1/auth/profile` | Auth | `userName` for POST | **Live** cite |

- Client base: `http://localhost:5202` + `mobile-bff/api/v1` — **không** gọi `web-bff` từ Mobile MFE · `mobileApiBase` only.
- **API Mới:** none · **migration:** none · **entity mới:** none · **Step 4b:** skip at SA.
- POST body (write fields §B): `userName` · `route` · `checkInAt` (UTC now) · `kmPoint?` · `lat` · `lng` · `inZone` (P1 default true) · `status` (P1 key «Đúng tuyến») · `note?`.
- Report/day: **client aggregate** only from GET list — **cấm** invent `/attendance/report|summary|zones|validate`.
- Labels: `useFormOptions()` / `attendance.*` · **cấm** hardcode VN.
- Fail: client validation → banner `string[]` · API fail → toast · GPS modal OK · **cấm** `window.alert` · **cấm** mock SSOT / demoDays · OPEN→Dev UNCLEAR-BANNER-VS-TOAST (migrate client toasts → banner).

## 3. BFF vs API

| Layer | Role |
|-------|------|
| Mobile.Bff `:5202` | sole FE entry · proxy `patrol/attendance-logs*` · auth rewrite |
| RMMS.Service.Api | existing Patrol attendance-logs — **no new** Attendance controller |
| web-bff | cite only · **not** Mobile client base |

## 4. Entity / migration

| Item | Decision |
|------|----------|
| Tables | none (reuse Patrol attendance-logs entity) |
| EF migration | **skip** |
| Step 4b | **skip** at SA · Dev only if Live gap (not expected) |
| Local | none beyond geolocation session · no offline queue on this page |

## 5. FE surface (SA contract — Dev implements)

| Zone | Contract |
|------|----------|
| ATT-00…09 · DES-MOB-ATT · DES-MOB-GPS-DENY | phone 430 · Android 1-1 · **cấm** sửa iOS/Android |
| Entry | Field hub · no new tab/route/icon · no gộp supervise/zone/Face-NFC |
| Route | `mfeStdRoute=/cham-cong` · product `/field/attendance*` · CLOSED-STD-ROUTE |
| Pattern B CTA | T-DELTA-PB-01 · cite SUBMIT-VALIDATE · disabled=saving only |
| DES-GRID / LinErpListFilterBar / Excel | **N/A** phone · **cấm** |
| Out | Face/NFC DEFER · report API DEFER · desktop Field · native edits · ERP · new_page typed CRUD |

## 6. Risks / open

| ID | Status |
|----|--------|
| UNCLEAR-DOMAIN-MAP-ATT | **resolved** — row `web-rmms-attendance` → Patrol |
| UNCLEAR-REPORT-API | **resolved P1** — client aggregate · **cấm** invent |
| UNCLEAR-STD-ROUTE | **CLOSED** — `/cham-cong` |
| UNCLEAR-GUEST-SURFACE | **CLOSED** — Pattern B CTA/login |
| UNCLEAR-EMPTY-COPY | **carry Dev/QA** — live `[]` / hero «—» · **cấm** demoDays |
| UNCLEAR-BANNER-VS-TOAST | **OPEN→Dev** — client banner · API toast · GPS modal OK |
| GAP-BFF-MOBILE | **HARD** — Mobile.Bff only · **cấm** Route trên web-bff |

## 7. Handoff

| Next | Need |
|------|------|
| team_lead | Tasks: **T-DELTA-PB-01** Pattern B CTA · keep T-UI-ATT-* / T-BE-* done · re-run QA/Review after delta · no invent API · phone 430 |
| devSlash | `/agent-dev` |
| qa | Pattern B: CTA enabled · click→banner khi thiếu auth/GPS/mạng/route · saving disable · guest login CTA · GPS deny on submit · no Excel · E2E queued `/agent-qa*` |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:0275fe24159e04a2d1a70682880e26b3456de61e7cf74b9c3d9ac707cae30d7a` · `rulesVersion=2026.09.25.2` · `confirmedAt=2026-09-27T17:15:00.000Z` · `solution_confirm=approve` · `taskId=task_8c3ee347`
