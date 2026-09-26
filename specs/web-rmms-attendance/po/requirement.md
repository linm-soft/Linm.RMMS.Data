# PO — requirement — web-rmms-attendance

| Field | Value |
|-------|-------|
| feature | `web-rmms-attendance` |
| title | Chấm công — hub GPS + lịch sử + báo cáo ngày/log |
| packKind | `list` |
| changeScope | `new_page` |
| lane | `web` |
| status | `done` |
| skillId | `agent-po` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| writtenAt | `2026-09-26T01:33:29.847Z` |
| demo | **N/A** |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-attendance` |
| mfeStdUrl | `http://localhost:9301/web-rmms-attendance` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` · **cấm ERP.*** |
| prior | data_analy `confirmed` · compact `handoff/data_analy-compact.md` |
| taskId | `task_3a1749b8` |

> Labels: `useFormOptions()` / LinmCopy keys — **cấm** hardcode VN trên form.  
> Analy reuse: control-hint + real-data §A+§B · **cấm** re-scan demo · hash skip.

## 1. Goal / persona

| | |
|--|--|
| Goal | Màn Chấm công phone 1-1 DES-MOB-ATT: hero Chấm vào (GPS+POST) · lịch sử · chain report → day → log RO |
| Persona | Tuần đường / hạt trưởng sau login · guest → shell login |
| Entry | Field hub / segment · **không** tab mới · **cấm** gộp supervise / zone / Face-NFC |
| Out | Face/NFC · invent report/zones API · desktop Field · ERP.* · sửa iOS/Android · demoDays |

## 2. packKind confirm

| | |
|--|--|
| packKind | **`list`** — phone hub + RO list/detail chain |
| formPattern | Mobile hub + RO report/day/log · phone `max-width: 430` · **N/A** ERP Modal/Slideout Kind B |
| DES-GRID / LinErpListFilterBar | **N/A** — không Kind B desktop grid |
| Report pack | **không** — report/day = client aggregate cùng GET list |

## 3. Screens (ATT)

| Id | Route / zone | AC |
|----|--------------|----|
| ATT-00 | phone frame | ≤430px · Android / DES-MOB-ATT 1-1 |
| ATT-01 | `/field/attendance` hub | Title + chrome · copy `attendance.title` |
| ATT-02 | hero | Status · GPS meta · **Chấm vào** POST+GPS · **Báo cáo** → report |
| ATT-03 | history | Day rows từ GET aggregate · badge status · tap → day/log |
| ATT-04 | `/field/attendance/report` | Group-by-day client · **cấm** invent report API |
| ATT-05 | `/field/attendance/day/:key` | Filter CheckInAt dayKey · list lần chấm |
| ATT-06 | `/field/attendance/log/:id` | RO detail: UserName · Route · KmPoint · CheckInAt · Lat · Lng · InZone · Status · Note · **không** edit |
| ATT-07 | GPS | `navigator.geolocation` bắt buộc Chấm vào · deny → disable + modal · **cấm** fake |
| ATT-08 | empty/error | GET `[]` / hero «—» · fail toast · **cấm** `window.alert` · **cấm** demoDays |
| ATT-09 | entry | Field hub · no new tab |

**mfeStdUrl:** `http://localhost:9301/web-rmms-attendance` (STATUS) · native routes `/field/attendance*` (SCREENS) — Design/Dev follow STATUS shell + DES-MOB-ATT 1-1.

## 4. List / hub AC (phone — thay DES-GRID)

| AC id | Given | When | Then |
|-------|-------|------|------|
| AC-HUB-01 | Auth + GPS grant | Tap Chấm vào | POST `patrol/attendance-logs` với lat/lng live · hero → Đã chấm · history refresh |
| AC-HUB-02 | GPS deny | Tap Chấm vào | CTA disable / modal · **không** POST · **cấm** fake lat |
| AC-HUB-03 | GET list có data | Open hub | History day rows · badge Status/InZone |
| AC-HUB-04 | GET list empty | Open hub | `[]` / hero «—» · **cấm** demo SSOT |
| AC-HUB-05 | Hub | Tap Báo cáo | Nav `/field/attendance/report` · group by day từ cùng GET |
| AC-HUB-06 | Report | Tap day | Nav day/:key · filter client |
| AC-HUB-07 | Day | Tap log | Nav log/:id · GET/{id} RO · không form sửa |
| AC-HUB-08 | Guest | Open route | Redirect login (shell) |
| AC-HUB-09 | Phone | View any ATT | Frame ≤430 · **cấm** desktop Field layout |
| AC-HUB-10 | Labels | Render form/copy | `useFormOptions` / copy keys · **cấm** hardcode VN |

## 5. API / bind (from real-data §B)

| Surface | Path | Rule |
|---------|------|------|
| BFF | Mobile.Bff `:5202` · `mobile-bff/api/v1` | **ONLY** · **cấm** Web BFF base client |
| List | `GET patrol/attendance-logs` | query route/search/status/page/pageSize |
| Create | `POST patrol/attendance-logs` | userName · route · checkInAt · lat · lng · inZone · status · note? · kmPoint? |
| Detail | `GET patrol/attendance-logs/{id}` | RO log |
| Report/Day | client aggregate | **cấm** invent `/attendance/report|summary|zones|validate` P1 |
| Auth | `GET auth/profile` | userName → POST |
| BE | `Linm.RMMS.WebService` DOMAIN-MAP Patrol | **cấm ERP.*** · **cấm** entity/path mới P1 |

## 6. Leave / DEFER / Out

| Id | Item | Decision |
|----|------|----------|
| LEAVE-FACE | Face/NFC | **DEFER** · GAP-ATT-FACE |
| LEAVE-REPORT-API | BE report/summary/zones | **DEFER** · client aggregate P1 · GAP-ATT-REPORT-API |
| LEAVE-SUPERVISE | supervise / zone config | **Out** · không gộp |
| LEAVE-DESKTOP | MFE desktop Field | **Out** |
| LEAVE-NATIVE | iOS/Android patch | **Out** · cite parity only |
| LEAVE-DEMO | demoDays / demoHero | **Out** · live only |
| LEAVE-ERP | ERP.* / Domains/Master | **Out** |

## 7. Open questions → owner

| Id | Issue | Owner | Default |
|----|-------|-------|---------|
| UNCLEAR-DOMAIN-MAP-ATT | DOMAIN-MAP thiếu row `web-rmms-attendance` | SA | Add row · cite Patrol `attendance` |
| UNCLEAR-STD-ROUTE | SCREENS `/field/attendance*` vs mfeStdRoute | Design/Dev | Follow STATUS mfeStdUrl |
| UNCLEAR-REPORT-API | BE report MISSING | SA/Dev | Client aggregate · cấm invent |
| UNCLEAR-EMPTY-COPY | Peer từng demoDays | Design/Dev | live empty/`[]` only |

## 8. DoD (PO → Design)

- [x] packKind=`list` · changeScope=`new_page`
- [x] Screens ATT-00…09 + hub AC
- [x] GPS gate + Live BFF bind + Leave table
- [x] Analy inventory copied · hash skip · **cấm** re-scan
- [ ] Design: phone 430 · ATT zones · Android/DES-MOB-ATT 1-1 · prototype + reviewUrl
- [ ] SA: DOMAIN-MAP row · confirm Mobile.Bff paths
- [ ] Dev: Mobile MFE only · reuse GET/POST
- [ ] QA: GPS deny · empty · POST ok · report chain · phone 430 · no ERP · E2E queued

## 9. Handoff Design

| Need | Value |
|------|-------|
| Zones | ATT-00…09 (ids only) |
| Parity | Android / DES-MOB-ATT 1-1 · cite `#sc-attendance*` |
| Frame | `max-width: 430px` |
| reviewUrl | required (Design) |
| peerStdUrl | `http://localhost:9301/web-rmms-attendance` |
| DES-GRID | N/A |
| autoApprove | **ON** → chain design không chờ board |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `rulesVersion=2026.09.25.2` · `writtenAt=2026-09-26T01:33:29.847Z`
