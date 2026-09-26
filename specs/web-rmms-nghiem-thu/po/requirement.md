# PO — requirement — web-rmms-nghiem-thu

| Field | Value |
|-------|-------|
| feature | `web-rmms-nghiem-thu` |
| title | Nghiệm thu — list, tạo, chi tiết |
| packKind | `list` |
| changeScope | `new_page` |
| lane | `web` |
| status | `confirmed` |
| skillId | `agent-po` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| writtenAt | `2026-09-25T15:45:00.000Z` |
| demo | **N/A** · master · cite `#sc-nghiem-thu*` only · **cấm** demo SSOT |
| formPattern | Mobile list + full create/detail · phone `max-width: 430px` · **không** ERP Modal/Slideout · master no demo · `/erp-form-context` labels |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-nghiem-thu` |
| mfeStdUrl | `http://localhost:9301/web-rmms-nghiem-thu` |
| nativeRoutes | SCREENS `/field/nghiem-thu` · `/new` · `/:id` · Android NghiemThuScreen/Create/Detail 1-1 |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` `mobile-bff/api/v1` · Patrol `nghiem-thu` · **cấm ERP.*** |
| prior | data_analy `confirmed` · compact `handoff/data_analy-compact.md` · hash-skip |
| autoApprove | ON |
| cite | T-W3-08 · MAU-10.md · SCREENS `/field/nghiem-thu*` |

## 1. Goal

Ba màn **Nghiệm thu** phone 1-1 Android: **list** + **tạo** + **chi tiết/sửa**. Entry từ Field hub quick action (**không** tab mới). Persona = cán bộ nghiệm thu. Live API Patrol `nghiem-thu` qua Mobile.Bff only. **Không** gộp tuần đường / tuần kiểm / maintenance.

## 2. Persona / auth

| Who | Access |
|-----|--------|
| Cán bộ nghiệm thu (staff JWT) | NT-01…10 sau login |
| Guest | Redirect login (shell) · **cấm** guest CRUD |

## 3. Screens / zones

| id | zone | AC |
|----|------|-----|
| NT-00 | phone frame ≤430 · center desktop review | Android layout 1-1 · **cấm** nhét MFE desktop Field |
| NT-01 | `/field/nghiem-thu` list | Paged Live `GET patrol/nghiem-thu` page=1 pageSize=50 |
| NT-02 | list chrome | Back → Field hub · title `nghiemThu.list.title` · **Tạo** → `/field/nghiem-thu/new` |
| NT-03 | search | Query param `search` (server) · **P1 only** — xem §5 FILTER |
| NT-04 | empty | 0 items → copy `nghiemThu.list.empty` · ẩn list |
| NT-05 | row | Icon `LinmStrokeKind.Check` bg success · badge Status + ResultCode · tap → `/:id` |
| NT-06 | `/field/nghiem-thu/new` | Create · POST Status=`draft` on Lưu nháp · init-data mau + criteria |
| NT-07 | `/field/nghiem-thu/:id` | Detail/edit · GET + PUT · **cấm** DELETE P1 |
| NT-08 | GPS | `navigator.geolocation` → FieldInfo / ZoneOrgCode · deny → **cấm** fake / skip fill |
| NT-09 | media | MediaIds guid[] max 10 · `files/*` FileService |
| NT-10 | result / scores | ResultCode pass/fail/deduct · Scores[] from init-data · replace-all on write · ResultCode required when Status=done |
| NT-11 | Field hub entry | Quick action only · **không** tab mới |

**Leave / Out:** tuần đường · tuần kiểm · maintenance WO · desktop Field MFE · invent entity/path · label «Mẫu nghiệm thu NN» · DELETE P1 · iOS/Android edit · ERP.* · Web BFF base client · demo/mock SSOT · DES-GRID / LinErpListFilterBar · filter UI status/route/date/templateType P1 · gộp peer Field surfaces · invent `nghiem-thu-files`.

## 4. Grid AC (packKind=list · phone list — DES-GRID N/A)

| AC-ID | Rule | Pass |
|-------|------|------|
| AC-G-01 | Load Live `GET patrol/nghiem-thu` via Mobile.Bff `:5202` | List từ response · **cấm** demo/mock |
| AC-G-02 | Search P1 = query `search` only | Gọi lại list với `search` · **không** bắt buộc filter khác |
| AC-G-03 | Empty → empty state · ẩn rows | copy `nghiemThu.list.empty` |
| AC-G-04 | Error → toast + retry | **cấm** `window.alert` |
| AC-G-05 | Row: Check success icon + Status badge + ResultCode badge | Android 1-1 |
| AC-G-06 | Tap row → detail `/:id` | GET detail |
| AC-G-07 | Chrome **Tạo** → `/new` | POST create draft |
| AC-G-08 | Back → Field hub | NT-02 / NT-11 |
| AC-G-09 | Phone ≤430 · no LinErpListFilterBar / DES-GRID-* | N/A Kind B desktop |
| AC-G-10 | Labels `useFormOptions()` / `nghiemThu.*` · mau = MAU-10 / init-data | **cấm** hardcode VN · **cấm** «Mẫu nghiệm thu NN» |
| AC-G-11 | Create: POST Status=draft · GPS deny = no fake · MediaIds ≤10 | NT-06/08/09 |
| AC-G-12 | Detail: GET + PUT · ResultCode when Status=done · Scores replace-all · no DELETE | NT-07/10 |

**Report AC:** N/A (không phải report pack).

## 5. Form / field AC (create · detail)

| AC-ID | Rule |
|-------|------|
| AC-F-01 | `GET …/init-data` trước form · TemplateTypes + criteria |
| AC-F-02 | templateType Select · labels MAU-10 / init-data |
| AC-F-03 | route · fieldInfo · zoneOrgCode (RO/opt GPS) · kmFrom/kmTo optional |
| AC-F-04 | resultCode Select pass/fail/deduct · resultNote optional |
| AC-F-05 | scores Checklist from init-data · replace-all on write |
| AC-F-06 | media PhotoRow · files/* · max 10 |
| AC-F-07 | status draft on Lưu nháp · assignee RO profile · inspectedAt create now UTC · note optional |
| AC-F-08 | cancel → list |
| AC-F-09 | List NT-01 **không** bắt GPS |

## 6. Decisions (UNCLEAR chốt)

| id | Decision | Owner next |
|----|----------|------------|
| UNCLEAR-FILTER-UI | **Chốt P1:** chỉ **search** bar (server `search`). status / route / templateType / fromDate / toDate = **OUT P1** (API sẵn — Design **không** bắt buộc stub; nếu stub thì disabled / ẩn, không block DoD). | Design · Dev |
| UNCLEAR-DELETE | **Chốt:** DELETE **OUT P1** mobile (live web cite only). Không wire DELETE trên NT. | Design · Dev · QA |
| UNCLEAR-STD-ROUTE | **Chốt:** shell/std = `/web-rmms-nghiem-thu` (STATUS / mfeStdUrl). In-app native cite `/field/nghiem-thu*` = SCREENS routes trong MFE. **Không** đổi STATUS URL. | Design · Dev |
| UNCLEAR-DOMAIN-MAP-NT | **Open → SA:** thêm DOMAIN-MAP row `web-rmms-nghiem-thu` · Patrol · Mobile MFE · cite slug `nghiem-thu`. | SA |
| UNCLEAR-BFF-PROXY | **Open → SA:** confirm Mobile.Bff catch-all proxy `patrol/nghiem-thu` · **cấm** invent path. | SA |

## 7. DoD (PO)

- [x] packKind=`list` · changeScope=`new_page` confirmed
- [x] Screens NT-00…11 + Leave documented
- [x] Grid AC AC-G-01…12 · Form AC AC-F-01…09 · Report AC N/A
- [x] Inventory + controlHint + real-data §A+§B reused (hash skip · **không** re-scan demo)
- [x] FILTER / DELETE / STD-ROUTE chốt · DOMAIN-MAP + BFF-PROXY → SA
- [x] MAU-10 · GPS deny · Live Mobile.Bff only · no gộp · no ERP.*
- [x] Handoff Design: zones + reviewUrl pending · phone 430 · Android Check row

## 8. Handoff Design

| Need | Value |
|------|-------|
| zones | NT-00…11 |
| reviewUrl | (Design tạo prototype) |
| peerStdUrl | `http://localhost:9301/web-rmms-nghiem-thu` |
| DES-GRID / LinErpListFilterBar | **N/A** phone list |
| copy keys | `nghiemThu.*` |
| row icon | `LinmStrokeKind.Check` success |
| mau labels | MAU-10 / init-data |
| filter P1 | search only |
| DELETE | OUT P1 |
| constraint | Android 1-1 · max-width 430 · Field hub entry · no tab |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `rulesVersion=2026.09.25.2` · `writtenAt=2026-09-25T15:45:00.000Z`
