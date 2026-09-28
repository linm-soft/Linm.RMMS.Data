# PO — requirement — web-rmms-nghiem-thu

| Field | Value |
|-------|-------|
| feature | `web-rmms-nghiem-thu` |
| title | Nghiệm thu — submit Pattern B + SearchInput (edit_page) |
| packKind | `list` |
| changeScope | `edit_page` |
| lane | `web` |
| status | `confirmed` |
| skillId | `agent-po` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| contentHash | `sha256:b8f3ce70ff3e80073c39d2dac6a01d2fed2e98232877ef6979881eef8e37acb4` |
| writtenAt | `2026-09-27T21:58:52.540Z` |
| taskId | `task_8f5b3f9f` |
| demo | **N/A** · master · cite `#sc-nghiem-thu*` only · **cấm** demo SSOT · **cấm** re-scan |
| formPattern | Mobile list + full create/detail · phone `max-width: 430px` · **không** ERP Modal/Slideout · master no demo · `/erp-form-context` labels · **Pattern B** validate |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/nghiem-thu/moi` |
| mfeStdUrl | `http://localhost:9301/nghiem-thu/moi` |
| nativeRoutes | SCREENS `/field/nghiem-thu` · `/new` · `/:id` · alias → `/nghiem-thu*` · Android NghiemThu* 1-1 · **cấm** sửa iOS/Android |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` `mobile-bff/api/v1` · Patrol `nghiem-thu` · **cấm ERP.*** · **cấm** web-bff client base |
| prior | data_analy `confirmed` · compact `handoff/data_analy-compact.md` · hash-skip · keep prior PO/Design/SA/… |
| citeDelta | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` · `NghiemThuFormPage.tsx` |
| autoApprove | ON |
| cite | T-W3-08 · MAU-10.md · SCREENS `/field/nghiem-thu*` · SUBMIT-VALIDATE |

## 1. Goal

**Keep** ba màn Nghiệm thu phone 1-1 Android (list + tạo + chi tiết). **Delta** `edit_page`: Pattern B submit (nút luôn bật · banner `string[]`) · SearchInput tuyến/users · `capture="environment"` · BFF forward `integration/users`. **Không** typed CRUD `new_page` · **không** gộp tuần đường / tuần kiểm / maintenance · **không** Excel.

## 2. Persona / auth

| Who | Access |
|-----|--------|
| Cán bộ nghiệm thu (staff JWT) | NT-01…10 sau login |
| Guest | Redirect login (shell) · **cấm** guest CRUD |

## 3. Screens / zones (shell keep)

| id | zone | AC |
|----|------|-----|
| NT-00 | phone frame ≤430 | Android 1-1 · **cấm** nhét MFE desktop Field |
| NT-01 | `/nghiem-thu` · alias `/field/nghiem-thu` | Paged Live `GET patrol/nghiem-thu` page=1 pageSize=50 |
| NT-02 | list chrome | Back → Field hub · title `nghiemThu.list.title` · **Tạo** → `/nghiem-thu/moi` |
| NT-03 | search | Query `search` · **P1 only** — §5 FILTER keep |
| NT-04 | empty | 0 items → `nghiemThu.list.empty` |
| NT-05 | row | Check success · badge Status + ResultCode · tap → `/:id` |
| NT-06 | `/nghiem-thu/moi` | Create · POST draft · **Delta form** Pattern B + SearchInput |
| NT-07 | `/nghiem-thu/:id` | Detail/edit · GET + PUT · **cấm** DELETE P1 · **Delta form** |
| NT-08 | GPS | geolocation → FieldInfo/ZoneOrgCode · deny → **cấm** fake · **cấm** pre-lock CTA |
| NT-09 | media | MediaIds ≤10 · files/* · **`capture="environment"`** |
| NT-10 | result / scores | pass/fail/deduct · Scores[] init-data · ResultCode required when Status=done |
| NT-11 | Field hub entry | Quick action only · **không** tab mới |

**Leave / Out:** tuần đường · tuần kiểm · mnt · desktop Field · invent entity/path · «Mẫu nghiệm thu NN» · DELETE P1 · iOS/Android edit · ERP.* · web-bff base · demo SSOT · DES-GRID · Excel · `new_page` · `disabled={!canSave}` · alert.warning thay banner · ROAD_ROUTE_SEED / filterSeed.

## 4. Grid AC (packKind=list · phone — DES-GRID N/A)

| AC-ID | Rule | Pass |
|-------|------|------|
| AC-G-01 | Load Live `GET patrol/nghiem-thu` via Mobile.Bff `:5202` | **cấm** demo/mock |
| AC-G-02 | Search P1 = query `search` only | keep prior |
| AC-G-03 | Empty → empty state | `nghiemThu.list.empty` |
| AC-G-04 | Error → toast + retry | **cấm** `window.alert` |
| AC-G-05 | Row: Check success + Status + ResultCode | Android 1-1 |
| AC-G-06 | Tap row → detail `/:id` | GET detail |
| AC-G-07 | Chrome **Tạo** → `/nghiem-thu/moi` | POST create draft |
| AC-G-08 | Back → Field hub | NT-02 / NT-11 |
| AC-G-09 | Phone ≤430 · no LinErpListFilterBar / DES-GRID-* | N/A Kind B |
| AC-G-10 | Labels `useFormOptions()` / `nghiemThu.*` · mau = MAU-10 / init-data | **cấm** hardcode VN |
| AC-G-11 | Create: POST draft · GPS deny = no fake · MediaIds ≤10 · capture | NT-06/08/09 |
| AC-G-12 | Detail: GET + PUT · ResultCode when done · Scores replace-all · no DELETE | NT-07/10 |

**Report AC:** N/A.

## 5. Form / field AC (+ Delta *)

| AC-ID | Rule |
|-------|------|
| AC-F-01 | `GET …/init-data` trước form · TemplateTypes + criteria |
| AC-F-02 | templateType Select · labels MAU-10 / init-data |
| AC-F-03 * | **route** = SearchInput · `GET …/integration/road-routes/search` · **no seed** · miss=`--` |
| AC-F-04 | fieldInfo · zoneOrgCode (RO/opt GPS) · kmFrom/kmTo optional |
| AC-F-05 | resultCode Select pass/fail/deduct · resultNote optional |
| AC-F-06 | scores Checklist from init-data · replace-all on write |
| AC-F-07 * | media PhotoRow · files/* · max 10 · **`capture="environment"`** |
| AC-F-08 * | **assignee** = SearchInput · `GET …/integration/users?search=` · miss=`--` · **không** RO profile-only |
| AC-F-09 | status draft on Lưu nháp · inspectedAt create now UTC · note optional |
| AC-F-10 * | **Pattern B:** CTA always enabled trừ `saving` · **cấm** `disabled={!canSave}` |
| AC-F-11 * | First submit → `validationAttempted` · banner `string[]` (mẫu/tuyến/hiện trường/người thực hiện) + inline · **cấm** `alert.warning` thay banner |
| AC-F-12 | GPS deny = no fake · report on submit via banner · **cấm** pre-lock CTA |
| AC-F-13 | cancel → list · List NT-01 **không** bắt GPS |

## 6. § Delta Current vs New (edit_page HARD)

| Surface | Current (shipped) | New (this PO) |
|---------|-------------------|---------------|
| changeScope | `new_page` full NT | `edit_page` · **cấm** typed CRUD new_page · keep artifacts |
| Submit | `disabled={!canSave}` + `alert.warning` | Pattern B · always-on CTA · banner+inline |
| route | free `<input>` | SearchInput road-routes/search · no seed |
| assignee | RO profile | SearchInput users via Mobile.Bff |
| media | upload | + `capture="environment"` |
| BFF | patrol NT | + forward `integration/users` · **cấm** web-bff |
| mfeStdUrl | legacy `/web-rmms-nghiem-thu` | **real** `/nghiem-thu/moi` (`paths.ts`) |
| Align cuối | — | `/align-mobile-to-mfe` · 430px · no new tab/route/icon · no android/ios prototype |
| Keep | mau-01…10 · ResultCode · Scores · draft · Field hub · no gộp · GPS no fake · FILTER search · DELETE OUT | **keep** |

## 7. Decisions (UNCLEAR)

| id | Decision | Owner next |
|----|----------|------------|
| UNCLEAR-FILTER-UI | **RESOLVED keep:** search only P1 | Design · Dev |
| UNCLEAR-DELETE | **RESOLVED keep:** DELETE OUT P1 | Design · Dev · QA |
| UNCLEAR-STD-ROUTE | **RESOLVED update:** mfeStdRoute=`/nghiem-thu/moi` · alias `/field/nghiem-thu*` · STATUS URL sync | Design · Dev |
| UNCLEAR-DOMAIN-MAP-NT | **RESOLVED prior SA** — keep | — |
| UNCLEAR-BFF-PROXY | **RESOLVED prior SA** — keep patrol proxy | — |
| UNCLEAR-USERS-BFF | **Open → SA/Dev:** forward `GET integration/users` on Mobile.Bff (như RoadRoutes) · **cấm** invent WS | SA · Dev |
| UNCLEAR-ROUTE-SEED | **Open → Dev:** remove ROAD_ROUTE_SEED / filterSeed / QL.22 trên shared lookups (peer impact) | Dev |
| UNCLEAR-SEARCHINPUT-PKG | **Open → Design/Dev:** reuse MFE SearchInput pattern · **cấm** ERP UserSearchInput nguyên | Design · Dev |

## 8. DoD (PO)

- [x] packKind=`list` · changeScope=`edit_page` confirmed · **cấm** new_page typed CRUD
- [x] Screens NT-00…11 keep + Leave · Grid AC AC-G-01…12 · Form AC AC-F-01…13 · Report N/A
- [x] § Delta cite SUBMIT-VALIDATE · Pattern B · SearchInput users/routes · capture
- [x] Inventory + controlHint + real-data §A+§B reused (hash skip · **không** re-scan demo)
- [x] FILTER/DELETE keep · STD-ROUTE → `/nghiem-thu/moi` · USERS-BFF / ROUTE-SEED / SEARCHINPUT → next
- [x] MAU-10 · GPS deny · Mobile.Bff only · no gộp · no ERP.* · no Excel
- [x] Handoff Design: keep prototype shell · update control-map Delta · reviewUrl keep

## 9. Handoff Design

| Need | Value |
|------|-------|
| zones | NT-00…11 (shell keep) |
| Delta control-map | route SearchInput · assignee SearchInput · validationBanner · capture · CTA always-on |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-nghiem-thu/ui/prototype/index.html` (keep) |
| peerStdUrl | `http://localhost:9301/nghiem-thu/moi` |
| DES-GRID / LinErpListFilterBar | **N/A** phone list |
| copy keys | `nghiemThu.*` |
| row icon | `LinmStrokeKind.Check` success |
| mau labels | MAU-10 / init-data |
| filter P1 | search only |
| DELETE | OUT P1 |
| constraint | Android 1-1 · max-width 430 · Field hub · no tab · no new route/icon · align-mobile-to-mfe |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:b8f3ce70ff3e80073c39d2dac6a01d2fed2e98232877ef6979881eef8e37acb4` · `rulesVersion=2026.09.25.2` · `writtenAt=2026-09-27T21:58:52.540Z` · `taskId=task_8f5b3f9f` · `changeScope=edit_page`
