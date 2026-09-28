# PO — Requirement — web-rmms-mobile-b

| Field | Value |
|-------|-------|
| feature | `web-rmms-mobile-b` |
| title | Tuần đường đợt B — sổ và dòng nhật ký (**edit delta**) |
| this role | `po` · `/agent-po` |
| changeScope | **`edit_page`** · editTask=`1` · NEW AutocodeTask · **keep** prior PO/Design/implement |
| packKind | **`list`** (PO confirm · ≠ Kind B desktop catalog) |
| lane | `web` |
| stack | `web_mfe_phone` · `Linm.Web.RMMS.Mobile` · phone `max-width: 430px` |
| status | `confirmed` (autoApprove=ON) |
| requestSource | run packet `task_91e15981` · roleOnly=`po` · `/agent-po` · source `qldb_implement` |
| autoApprove | **ON** — Design/SA confirm **khi tới lượt** · turn này **không** chain role khác (**GAP-PKT-ROLE-01**) |
| e2eQa | ON — queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở role PO |
| prior | data-analy **confirmed** · compact `handoff/data_analy-compact.md` · `specs/_data-analy/features/web-rmms-mobile-b-{control-hint,real-data}.md` · contentHash `sha256:fe3ccad04e66ee08b65a65aead0fbef9f46328e5c2a3b828b3bee12969bbf72e` · skillVersion `2026.09.05.03` · rulesVersion `2026.09.27.1` · **hash skip** · demo **N/A** · **cấm** re-scan (**GAP-PO-DEMO-RESCAN-01**) |
| deltaCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` · slug `web-rmms-mobile-b` |
| `devSlash` | `/agent-dev` |
| demo | **N/A** |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-mobile-b` |
| mfeStdUrl | `http://localhost:9301/web-rmms-mobile-b` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Patrol** + Auth + Files · Integration peer · **cấm ERP.*** |
| context | `docs/context/features/web-rmms-mobile-b.md` |
| controlHint | `specs/_data-analy/features/web-rmms-mobile-b-control-hint.md` |
| realData | `specs/_data-analy/features/web-rmms-mobile-b-real-data.md` |
| screensPlan | `docs/plan/web-rmms-mobile/IMPLEMENT-SCREENS.md` |
| gapPlan | `docs/plan/web-rmms-mobile/GAP-TUAN-DUONG-TUAN-KIEM.md` |
| align | `/align-mobile-to-mfe` · SSOT = page MFE · **cấm** tab/route/icon mới · **cấm** android/ios proto |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-b/ui/prototype/index.html` |
| updatedAt | `2026-09-27T07:05:00.000Z` |
| taskId | `task_91e15981` |
| skillId | `agent-po` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.27.1` |
| versionGate | `ok` |
| contentHash | `sha256:fe3ccad04e66ee08b65a65aead0fbef9f46328e5c2a3b828b3bee12969bbf72e` |

**Cấm:** implement ở role PO · ERP.* · nhét màn vào MFE desktop · iOS/Android native · typed CRUD `new_page` · fake GPS · hardcode label VN · native `alert`/`confirm` · re-scan demo · clone Kind B grid · web-bff FE · Excel toolbar · `yarn start:std`/e2e ở PO · check-in trong list TD-04.

## 1. Goal

**edit_page** trên wave B đã Live (TD-04 sổ · TD-05 tạo/sửa dòng · journal-lines API): giữ list/form/schema; chỉ bổ sung **§ Delta** (Pattern B Lưu · capture env · `mobileApiBase` only · users Bff forward nếu thiếu · align 430). Persona tuần đường không đổi. **Cấm** gộp đợt C–E / TK / WO.

## 2. packKind confirm

| | |
|--|--|
| packKind | **`list`** (PO confirm) |
| Kind UI | Phone Field list cards + form — **≠** Kind B desktop |
| Grid AC Kind B | **N/A / WAIVE** — **cấm** `LinErpListFilterBar` / `DES-GRID-*` / Excel |
| Report AC | **N/A** |
| formPattern | Mobile **Full page** (TD-04 · TD-05) · **không** ERP Modal/Slideout |
| typography | label **13** · field ≥**16** · labels `useFormOptions()` / copy key |

## 3. changeScope `edit_page` — § Delta Current vs New

Cite: `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` · override: **không** toolbar/export Excel · **không** `new_page`.

| Area | Current (shipped) | New (task_91e15981) |
|------|-------------------|---------------------|
| changeScope | wave B Live journal list/form (prior PASS) | **`edit_page`** · keep PO/Design · § Delta only |
| JournalFormPage Lưu | `disabled={!canSave}` · `canSave = gps.ok && narrative.trim() && !saving && !hydrating` | **Pattern B:** nút **luôn bật** trừ `saving`/`hydrating` · GPS/narrative thiếu → **banner `string[]` + inline khi bấm** · scroll first error · **cấm** khóa nút trước · **cấm** `alert.warning` thay banner |
| validation UX | `alert.warning` GPS/narrative trước save | `validationAttempted` · banner + inline · API 4xx/5xx = toast only |
| mediaIds / LinImageUpload | upload Live · chưa `capture` | `capture="environment"` (prop forward hoặc input local) · **cấm** fork package nếu thiếu prop |
| TD-04 list / empty / cards | Live journal-lines · no check-in | **KEEP** |
| Schema / routes journal | Live `Schema_PatrolJournalLine` + CRUD | **KEEP** · **cấm** invent API |
| Tuyến / users picker | N/A trên TD-04/05 (parent ca · userName profile RO) | **KEEP** N/A picker · shared Mobile.Bff users forward (peer A) · **cấm** ERP UserSearchInput |
| API base | mixed / web-bff risk | **chỉ** `mobileApiBase()` / `VITE_MOBILE_API_URL` · **cấm** web-bff trực tiếp |
| Mobile.Bff users | peer có thể thiếu forward | Forward `GET api/v1/integration/users` nếu chưa · **cấm** API mới WebService · road-routes/search **KEEP** |
| Grid / filter Kind B | N/A phone · WAIVE | **KEEP N/A** |
| Align mobile | — | `/align-mobile-to-mfe` · 430px · **cấm** tab/route/icon mới · **cấm** android/ios proto |
| Out of scope B | TD-06 · TK · WO · findings | **KEEP** out |

## 4. DoD (đo được)

1. Routes TD-04/05 **KEEP** — **cấm** tab/route/icon mới.
2. TD-04/05 behavior prior **KEEP** trừ delta dưới.
3. **TD-05 Pattern B:** Lưu enable trừ `saving`/`hydrating` · GPS deny / thiếu narrative → banner + inline **on click** · **cấm** `disabled={!canSave}` · **cấm** fake lat/lng · **cấm** `alert.warning` thay banner.
4. **mediaIds:** `capture="environment"` trên LinImageUpload hoặc input local.
5. Transport **chỉ** `mobileApiBase()` · Mobile.Bff users forward nếu thiếu · **cấm** web-bff FE.
6. TD-04 card list · empty «Chưa ghi việc» (copy key) · **không** check-in · **cấm** `LinErpListFilterBar`.
7. Labels `useFormOptions()` · **cấm** hardcode VN.
8. LeaveConfirmModal khi TD-05 dirty cancel/back · **cấm** native alert/confirm.
9. Báo tuần kiểm → `reportedTo=tuan-kiem` + `reportedAt` · **không** tạo TK-03.
10. `kind=hanh-lang` → flag đề nghị BB · **không** mở sổ 07.
11. `scope` / `workOrderId` ẩn hoặc disabled (đợt D).
12. BE ONLY `Linm.RMMS.WebService` · **cấm ERP.***.
13. Align phone 430 · no android/ios proto.
14. Dev (sau): `yarn build` PASS · **cấm** PO build/e2e/start:std.
15. QA (sau): e2e queued · Pattern B · capture · no check-in · no web-bff.

## 5. Screens

| id | route | surface | DoD |
|----|-------|---------|-----|
| TD-04 | `/field/tuan-duong/nhat-ky` | List cards sổ theo ca | Cards GET journal-lines · empty copy key · tap → TD-05 · Thêm → `/moi` · **không** check-in · **KEEP** |
| TD-05 | `/field/tuan-duong/nhat-ky/moi` · `…/:lineId` | Form tạo/sửa | Pattern B Lưu · capture · POST/PUT · cancel → TD-04 + LeaveConfirm nếu dirty |

**Out of B:** TD-06 · TK-02…07 · WO / scope BDTX write (đợt D) · findings (C).

**Nav peer A:** TD-01 «Sổ / Ghi nhật ký» → TD-04/05.

## 6. List / Form AC (packKind=list · phone)

| AC | Rule | Pass |
|----|------|------|
| DES-GRID / LinErpListFilterBar | **N/A** — Field phone · **cấm** Kind B / Excel | Design note N/A |
| L-01 empty | Không dòng → EmptyState copy key · CTA Thêm → `/moi` | QA |
| L-02 data | Cards bind GET `sessions/{id}/journal-lines` · at · kmText · kind · status | QA |
| L-03 no check-in | List **không** gồm dòng check-in (TD-03) | QA |
| L-04 tap | Card → TD-05 `:lineId` | QA |
| L-05 parent | Không ca đang mở → empty/redirect hub A · toast · **cấm** `window.alert` | QA |
| L-06 no mock | **cấm** fake list / demo seed | Dev/QA |
| F-01 Pattern B GPS | TD-05: GPS deny → **bấm Lưu** mới banner + inline · Lưu **không** pre-disable vì GPS · **cấm** fake coords | QA |
| F-02 Pattern B narrative | Thiếu narrative → banner + inline **on submit** · **cấm** pre-disable Lưu | QA |
| F-03 save gate | Disable Lưu **chỉ** `saving`/`hydrating` | QA |
| F-04 save API | POST tạo · PUT sửa · body §B | QA |
| F-05 labels | useFormOptions keys (weather·kind·status·direction·reportedTo) | QA |
| F-06 report TK | Nút báo tuần kiểm → `reportedTo=tuan-kiem` + `reportedAt` · **không** TK-03 | QA |
| F-07 violation | `kind=hanh-lang` → flag BB · **không** sổ 07 | QA |
| F-08 out D | scope / workOrderId ẩn hoặc disabled | QA |
| F-09 capture | media upload `capture=environment` | QA |
| F-10 transport | FE chỉ `mobileApiBase()` · **cấm** web-bff | QA |
| F-11 Leave | Dirty cancel/back → LeaveConfirmModal | QA |

## 7. Field inventory (from analy · Design chốt control-map)

| uiField | screen | controlHint | notes |
|---------|--------|-------------|-------|
| journalList | TD-04 | List cards | GET sessions/{id}/journal-lines |
| card.at / kmText / kind / status | TD-04 | Text / Chip | tap → edit |
| addLine / emptyHint | TD-04 | Button / EmptyState | copy key |
| at | TD-05 | DateTime | default now |
| userName | TD-05 | Text RO | auth/profile · users resolve miss → `--` |
| lat / lng / accuracyM · getGps | TD-05 | GPS | Pattern B · banner on submit · **cấm** pre-disable |
| kmText | TD-05 | Text | tay · GAP-TD-LRS-01 **KEEP** |
| direction | TD-05 | Dropdown | default ca Note `chieu=` |
| weather | TD-05 | Dropdown | 6 keys Live |
| kind | TD-05 | Radio/Dropdown | 9 keys |
| narrative | TD-05 | TextArea | required · validate on submit |
| mediaIds | TD-05 | FileMulti | files/* · **capture=environment** |
| onSiteAction / onSiteResult | TD-05 | Toggle + Text | |
| reportedTo / reportedAt | TD-05 | Button + DateTime | no TK-03 |
| violationFlag | TD-05 | Button/flag | if hanh-lang |
| status | TD-05 | Dropdown | 4 keys |
| save | TD-05 | Button | Pattern B · disable only saving/hydrating |
| cancel | TD-05 | Button | TD-04 · LeaveConfirm nếu dirty |

## 8. API / data (cite real-data §A+§B · Live KEEP)

| Method | Path | Note |
|--------|------|------|
| GET | `patrol/sessions/{id}` | parent Live |
| GET | `patrol/sessions/{id}/journal-lines` | list sổ Live |
| GET | `patrol/journal-lines/{id}` | hydrate edit Live |
| POST | `patrol/journal-lines` | tạo · body `sessionId` |
| PUT | `patrol/journal-lines/{id}` | sửa |
| GET | `auth/profile` | Live |
| files | init → object → commit | Live · capture |
| GET | `integration/users` | Mobile.Bff forward nếu thiếu (peer/shared) |

Transport: **chỉ** `mobile-bff/api/v1` via `mobileApiBase()` / `VITE_MOBILE_API_URL`.

**Body Live:** `sessionId` · `at` · `lat` · `lng` · `accuracyM` · `kmText` · `direction` · `weather` · `kind` · `narrative` · `mediaIds` · `onSiteAction` · `onSiteResult` · `reportedTo` · `reportedAt` · `violationFlag` · `status`.

**HARD:** **cấm** invent API · **cấm** stub fake · **cấm ERP.*** · **cấm** web-bff FE · **cấm** gộp check-in DTO.

## 9. Leave (navigation / exit)

| From | Action | To |
|------|--------|-----|
| TD-04 | Back | TD-01 hub (peer A) |
| TD-04 | Thêm / empty CTA | TD-05 `/moi` |
| TD-04 | Card tap | TD-05 `:lineId` |
| TD-05 | Cancel / Back (clean) | TD-04 · không ghi |
| TD-05 | Cancel / Back (dirty) | LeaveConfirmModal → stay hoặc TD-04 |
| TD-05 | Save OK | TD-04 (refresh list) |
| TD-05 | Auth fail | redirect login |

## 10. Non-goals (B)

- TD-06 kết ca · TK phiếu · findings  
- `POST maintenance/work-orders` · write `scope` / `vuot-bdtx`  
- Desktop Asset MFE · iOS/Android native · ERP.*  
- Demo HTML / fake GPS / mock journal SSOT · Excel toolbar  
- typed CRUD `new_page` · android/ios proto  

## 11. Open questions

| id | Owner | Note |
|----|-------|------|
| UNCLEAR-CAPTURE-PROP | Dev | LinImageUpload prop `capture` vs input local · **cấm** fork package |
| UNCLEAR-BANNER-KEYS | PO chốt | Prefer `useFormOptions()` / existing copy keys cho GPS/narrative · **cấm** invent VN label mới nếu key đã có |
| UNCLEAR-LRS | Design | `kmText` tay · **KEEP** tới LRS |

**Closed prior (analy):** UNCLEAR-JL-PATH · UNCLEAR-JL-SCHEMA · UNCLEAR-WEATHER (Live).

## 12. DoD PO → Design

- [x] packKind=`list` confirmed · changeScope=`edit_page`  
- [x] Screens TD-04/05 + Leave + LeaveConfirm  
- [x] List AC + Form AC Pattern B / capture / transport  
- [x] Inventory + controlHint reuse analy (hash skip)  
- [x] real-data §A+§B cited · Live API KEEP  
- [x] § Delta Current vs New · Out-of-B · DES-GRID N/A  
- [x] Open questions listed · **không** block Design start  
- [x] autoApprove=ON · e2eQa queued QA  

## 13. Handoff Design

| Input | Path / note |
|-------|-------------|
| requirement | this file |
| compact | `handoff/po-compact.md` |
| control-hint | `specs/_data-analy/features/web-rmms-mobile-b-control-hint.md` |
| real-data | `specs/_data-analy/features/web-rmms-mobile-b-real-data.md` |
| zones | TD-04 · TD-05 · phone 430 · banner zone TD-05 · no desktop grid |
| reviewUrl | **KEEP** prototype · patch TD-05 always-on Lưu + banner |
| peerStdUrl | `http://localhost:9301/web-rmms-mobile-b` |
| align | `/align-mobile-to-mfe` · 430 · no new route/icon |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:fe3ccad04e66ee08b65a65aead0fbef9f46328e5c2a3b828b3bee12969bbf72e` · `rulesVersion=2026.09.27.1` · `writtenAt=2026-09-27T07:05:00.000Z` · `taskId=task_91e15981` · `changeScope=edit_page`
