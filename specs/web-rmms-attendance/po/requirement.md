# PO — requirement — web-rmms-attendance

| Field | Value |
|-------|-------|
| feature | `web-rmms-attendance` |
| title | Chấm công — hub GPS + lịch sử + báo cáo ngày/log |
| packKind | `list` |
| changeScope | `edit_page` |
| lane | `web` |
| status | `done` |
| skillId | `agent-po` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:0275fe24159e04a2d1a70682880e26b3456de61e7cf74b9c3d9ac707cae30d7a` |
| contentHashPrev | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| writtenAt | `2026-09-27T16:40:00.000Z` |
| demo | **N/A** |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/cham-cong` |
| mfeStdUrl | `http://localhost:9301/cham-cong` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` · **cấm ERP.*** |
| prior | data_analy `confirmed` · compact `handoff/data_analy-compact.md` |
| deltaCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` |
| taskId | `task_37d1cb94` |
| keepArtifacts | Design/SA/TL/implement/qa/review **giữ** · **cấm** typed CRUD `new_page` |

> Labels: `useFormOptions()` / LinmCopy keys — **cấm** hardcode VN trên form.  
> Analy reuse: control-hint + real-data §A+§B · **cấm** re-scan demo · hash skip.  
> Align cuối: `/align-mobile-to-mfe` · demo_ref=no_demo · khung 430 · **không** tab/route/icon mới · mọi call `mobileApiBase()`.

## 1. Goal / persona

| | |
|--|--|
| Goal | Giữ hub Chấm công phone 1-1 DES-MOB-ATT + chain report/day/log · **delta** Pattern B CTA trên `AttendanceHubPage` |
| Persona | Tuần đường / hạt trưởng sau login · guest → CTA visible hoặc login CTA rõ (Pattern B) |
| Entry | Field hub / segment · **không** tab mới · **cấm** gộp supervise / zone / Face-NFC |
| Out | Face/NFC · invent report/zones API · desktop Field · ERP.* · sửa iOS/Android · demoDays · Excel export · typed CRUD `new_page` |

## 2. packKind confirm

| | |
|--|--|
| packKind | **`list`** — phone hub + RO list/detail chain |
| formPattern | Mobile hub + RO report/day/log · phone `max-width: 430` · Pattern B validate · **N/A** ERP Modal/Slideout Kind B |
| DES-GRID / LinErpListFilterBar | **N/A** — không Kind B desktop grid |
| Report pack | **không** — report/day = client aggregate cùng GET list |
| Excel / toolbar export | **N/A** · **cấm** (SUBMIT-VALIDATE override) |

## 3. § Current vs New (edit_page HARD)

| Area | Current (shipped) | New (this task) |
|------|-------------------|-----------------|
| changeScope | `new_page` pipeline done · Review PASS | `edit_page` · NEW `task_37d1cb94` · **cấm** typed CRUD new_page |
| mfeStdRoute | paths.ts `/cham-cong` | **`/cham-cong`** · `http://localhost:9301/cham-cong` · **không** `/web-rmms-attendance` |
| Submit CTA | `disabled={!canCheckIn}` · canCheckIn=authed∧gpsOk∧online∧!saving∧!loading | Pattern B: **Chấm vào luôn bật** khi form sẵn sàng · chỉ `disabled` khi `saving` |
| Validate | toast sớm offline/GPS/route · GPS modal khi deny trong click | Lần bấm đầu → báo thiếu auth/GPS/mạng/route (banner `string[]` và/hoặc modal GPS) · **cấm** khóa nút trước · API 4xx/5xx = toast |
| GPS | deny góp `!gpsOk` → disable CTA | deny → **bấm mới báo** · **cấm** fake · giữ `navigator.geolocation` |
| Auth / offline | guest early-return không CTA; offline góp disable | thiếu đăng nhập / mạng → **bấm Chấm vào mới báo** · **cấm** `disabled={!canCheckIn}` |
| Route field | RO từ ca Field (`routeHint`) | **giữ** · thiếu tuyến → báo khi bấm · **không** bắt buộc SearchInput hub P1 |
| PO/Design/SA | artifacts done | **giữ** prototype+reviewUrl · Design không gen demo mới |
| Align | — | `/align-mobile-to-mfe` · 430px · no new tab/route/icon · `mobileApiBase()` only |

## 4. Screens (ATT) — giữ

| Id | Route / zone | AC |
|----|--------------|-----|
| ATT-00 | phone frame | ≤430px · Android / DES-MOB-ATT 1-1 |
| ATT-01 | `/cham-cong` hub | Title + chrome · copy `attendance.title` |
| ATT-02 | hero | Status · GPS meta · **Chấm vào*** Pattern B · **Báo cáo** → report · validationBanner* |
| ATT-03 | history | Day rows từ GET aggregate · badge · tap → day/log |
| ATT-04 | `/cham-cong/report` | Group-by-day client · **cấm** invent report API |
| ATT-05 | `/cham-cong/day/:key` | Filter CheckInAt dayKey |
| ATT-06 | `/cham-cong/log/:id` | RO detail · **không** edit |
| ATT-07 | GPS | geolocation · deny → on-submit báo · **cấm** fake · **cấm** khóa CTA trước |
| ATT-08 | empty/error | GET `[]` / hero «—» · fail toast · **cấm** demoDays |
| ATT-09 | entry | Field hub · no new tab |

**mfeStdUrl:** `http://localhost:9301/cham-cong` · native cite `/field/attendance*` (SCREENS) — Design giữ prototype · Dev follow paths.ts.

## 5. List / hub AC (phone — delta *)

| AC id | Given | When | Then |
|-------|-------|------|------|
| AC-HUB-01 | Auth + GPS grant + online + route | Tap Chấm vào | POST `patrol/attendance-logs` lat/lng live · hero → Đã chấm · history refresh |
| AC-HUB-02 * | GPS deny | Tap Chấm vào | Banner/modal báo · **không** POST · CTA **không** disabled sẵn · **cấm** fake lat |
| AC-HUB-03 | GET list có data | Open hub | History day rows · badge Status/InZone |
| AC-HUB-04 | GET list empty | Open hub | `[]` / hero «—» · **cấm** demo SSOT |
| AC-HUB-05 | Hub | Tap Báo cáo | Nav `/cham-cong/report` · group by day cùng GET |
| AC-HUB-06 | Report | Tap day | Nav day/:key · filter client |
| AC-HUB-07 | Day | Tap log | Nav log/:id · GET/{id} RO |
| AC-HUB-08 * | Guest / thiếu auth | Tap Chấm vào (CTA visible hoặc login CTA) | Báo / login CTA · **cấm** `disabled={!canCheckIn}` |
| AC-HUB-09 | Phone | View any ATT | Frame ≤430 · **cấm** desktop Field |
| AC-HUB-10 | Labels | Render | `useFormOptions` / copy keys · **cấm** hardcode VN |
| AC-HUB-11 * | Offline / thiếu route | Tap Chấm vào | Banner `string[]` · **không** POST · CTA chỉ `disabled` khi `saving` |
| AC-HUB-12 * | POST in-flight | Saving | CTA `disabled={saving}` only |
| AC-HUB-13 | API 4xx/5xx | After valid submit | Toast · **cấm** `window.alert` |
| AC-HUB-14 | Export | Any ATT | **Không** Excel / toolbar export |

## 6. API / bind (from real-data §B) — giữ

| Surface | Path | Rule |
|---------|------|------|
| BFF | Mobile.Bff `:5202` · `mobile-bff/api/v1` | **ONLY** · `mobileApiBase()` · **cấm** Web BFF base |
| List | `GET patrol/attendance-logs` | query route/search/status/page/pageSize |
| Create | `POST patrol/attendance-logs` | userName · route · checkInAt · lat · lng · inZone · status · note? · kmPoint? |
| Detail | `GET patrol/attendance-logs/{id}` | RO log |
| Report/Day | client aggregate | **cấm** invent `/attendance/report|summary|zones|validate` P1 |
| Auth | `GET auth/profile` | userName → POST · thiếu → bấm mới báo |
| Users | `GET integration/users` BFF forward nếu thiếu | hub **không** User SearchInput P1 |
| BE | `Linm.RMMS.WebService` DOMAIN-MAP Patrol | **cấm ERP.*** · **cấm** entity/path mới P1 |

## 7. Leave / DEFER / Out

| Id | Item | Decision |
|----|------|----------|
| LEAVE-FACE | Face/NFC | **DEFER** · GAP-ATT-FACE |
| LEAVE-REPORT-API | BE report/summary/zones | **DEFER** · client aggregate P1 · CLOSED-REPORT-API |
| LEAVE-SUPERVISE | supervise / zone config | **Out** |
| LEAVE-DESKTOP | MFE desktop Field | **Out** |
| LEAVE-NATIVE | iOS/Android patch | **Out** |
| LEAVE-DEMO | demoDays / demoHero | **Out** · live only |
| LEAVE-ERP | ERP.* / Domains/Master | **Out** |
| LEAVE-EXCEL | Excel / toolbar export | **Out** · SUBMIT-VALIDATE |
| LEAVE-NEW-PAGE | typed CRUD new_page | **Out** · changeScope=edit_page |

## 8. Open questions → owner

| Id | Issue | Owner | Default |
|----|-------|-------|---------|
| UNCLEAR-GUEST-SURFACE | guest early-return vs hub + click-to-login | PO → **CLOSED** | Pattern B: CTA visible hoặc login CTA rõ · **cấm** `disabled={!canCheckIn}` |
| UNCLEAR-BANNER-VS-TOAST | toast route/offline vs banner | Dev | Client errors → banner Pattern B `string[]` · API = toast · GPS modal giữ OK |
| CLOSED-STD-ROUTE | `/cham-cong` paths.ts | — | Follow STATUS · **không** `/web-rmms-attendance` |
| CLOSED-REPORT-API | BE report MISSING | — | Client aggregate P1 · **cấm** invent |

## 9. DoD (PO → Design)

- [x] packKind=`list` · changeScope=`edit_page`
- [x] § Current vs New Pattern B · Screens ATT-00…09 · hub AC delta *
- [x] GPS on-submit · Live BFF bind · Leave · no Excel · no Face
- [x] Analy inventory copied · hash skip · **cấm** re-scan
- [x] UNCLEAR-GUEST-SURFACE closed (Pattern B)
- [ ] Design: **giữ** phone 430 · ATT zones · prototype + reviewUrl · **không** gen demo mới · ghi § Current vs New UI nếu cần
- [ ] SA: **giữ** DOMAIN-MAP / Mobile.Bff `patrol/attendance-logs` · users forward nếu thiếu
- [ ] TL/Dev: Pattern B trên `AttendanceHubPage` · `disabled={saving}` only · `mobileApiBase()` · align-mobile
- [ ] QA: CTA always on · GPS deny click · guest click · empty · POST ok · report chain · phone 430 · no ERP · no Excel · E2E queued `/agent-qa*`

## 10. Handoff Design

| Need | Value |
|------|-------|
| Zones | ATT-00…09 (ids only) · * = btnCheckIn · gpsCapture · validationBanner |
| Parity | Android / DES-MOB-ATT 1-1 · cite `#sc-attendance*` |
| Frame | `max-width: 430px` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-attendance/ui/prototype/index.html` (**giữ**) |
| peerStdUrl | `http://localhost:9301/cham-cong` |
| DES-GRID / Excel | N/A · **cấm** |
| Delta UI | Pattern B CTA luôn bật · banner validate · **không** gen demo HTML mới |
| autoApprove | **ON** → chain design không chờ board |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:0275fe24159e04a2d1a70682880e26b3456de61e7cf74b9c3d9ac707cae30d7a` · `rulesVersion=2026.09.25.2` · `writtenAt=2026-09-27T16:40:00.000Z`
