# PO — Requirement — web-rmms-mobile-a

| Field | Value |
|-------|-------|
| feature | `web-rmms-mobile-a` |
| title | Tuần đường / Tuần kiểm đợt A — hub, mở ca, check-in, lịch sử (**edit delta**) |
| this role | `po` · `/agent-po` |
| changeScope | **`edit_page`** · editTask=`1` · NEW AutocodeTask · **keep** prior PO/Design/implement |
| packKind | **`list`** (PO confirm · ≠ Kind B desktop catalog) |
| lane | `web` |
| stack | `web_mfe_phone` · `Linm.Web.RMMS.Mobile` · phone `max-width: 430px` |
| status | `confirmed` (autoApprove=ON) |
| requestSource | run packet `task_cd2a366e` · roleOnly=`po` · `/agent-po` · source `qldb_implement` |
| autoApprove | **ON** — Design/SA confirm **khi tới lượt** · turn này **không** chain role khác (**GAP-PKT-ROLE-01**) |
| e2eQa | ON — queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở role PO |
| prior | data-analy **confirmed** · compact `handoff/data_analy-compact.md` · `specs/_data-analy/features/web-rmms-mobile-a-{control-hint,real-data}.md` · contentHash `sha256:110e845481b0f27091c0f5ca856fef74524bc1634ab8e3785a5d7755730eea45` · skillVersion `2026.09.05.03` · rulesVersion `2026.09.27.1` · **hash skip** · demo **N/A** · **cấm** re-scan (**GAP-PO-DEMO-RESCAN-01**) |
| deltaCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` |
| `devSlash` | `/agent-dev` |
| demo | **N/A** |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-mobile-a` |
| mfeStdUrl | `http://localhost:9301/web-rmms-mobile-a` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Patrol** + Integration + Auth + Files · **cấm ERP.*** |
| context | `docs/context/features/web-rmms-mobile-a.md` |
| controlHint | `specs/_data-analy/features/web-rmms-mobile-a-control-hint.md` |
| realData | `specs/_data-analy/features/web-rmms-mobile-a-real-data.md` |
| screensPlan | `docs/plan/web-rmms-mobile/IMPLEMENT-SCREENS.md` |
| gapPlan | `docs/plan/web-rmms-mobile/GAP-TUAN-DUONG-TUAN-KIEM.md` |
| align | `/align-mobile-to-mfe` · SSOT = page MFE · **cấm** tab/route/icon mới · **cấm** android/ios proto |
| updatedAt | `2026-09-27T06:55:00.000Z` |
| taskId | `task_cd2a366e` |
| skillId | `agent-po` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.27.1` |
| versionGate | `ok` |
| contentHash | `sha256:110e845481b0f27091c0f5ca856fef74524bc1634ab8e3785a5d7755730eea45` |

**Cấm:** implement ở role PO · ERP.* · nhét màn vào MFE desktop · iOS/Android native · invent `journal-lines`/`findings`/pause-handover trong A · fake GPS · hardcode label VN · native `alert`/`confirm` · re-scan demo · clone Kind B grid · web-bff FE · `ROAD_ROUTE_SEED` · `yarn start:std`/e2e ở PO.

## 1. Goal

**edit_page** trên wave A đã Live: giữ hub/forms/sheet/history; chỉ bổ sung **§ Delta** (Pattern B check-in · SearchInput no-seed · users resolve/Bff · `mobileApiBase` only · align 430). Persona TD/TK không đổi. **Cấm** gộp đợt B–E.

## 2. packKind confirm

| | |
|--|--|
| packKind | **`list`** (PO confirm) |
| Kind UI | Phone Field hub + forms + card list — **≠** Kind B desktop |
| Grid AC Kind B | **N/A / WAIVE** — **cấm** `LinErpListFilterBar` / `DES-GRID-*` |
| Report AC | **N/A** |
| formPattern | Mobile **Full page** (TD-02 · TK-01) · **Sheet** (TD-03) · hub Full |
| typography | label **13** · field ≥**16** · labels `useFormOptions()` / copy key |

## 3. changeScope `edit_page` — § Delta Current vs New

Cite: `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` · override: **không** toolbar/export Excel · **không** `new_page`.

| Area | Current (shipped) | New (task_cd2a366e) |
|------|-------------------|---------------------|
| changeScope | `new_page` wave A Live | **`edit_page`** · keep PO/Design · § Delta only |
| CheckInSheet Lưu | `disabled={!canSave}` · `canSave=gps.ok && !saving` | **Pattern B:** nút **luôn bật** trừ `saving` · GPS deny → **banner khi bấm** · **cấm** khóa nút trước |
| OpenPatrol / OpenInspect submit | `disabled={saving}` only | **KEEP** |
| Tuyến SearchInput | `ROAD_ROUTE_SEED` / `filterSeed` / lọc `QL.22` | **Xóa seed** · API rỗng/lỗi → list rỗng · mã không catalog → **`--`** · **cấm** hiện mã lạ |
| «Người» TD-02/TK-01 | readonly profile / miss `--` | **SearchInput** `GET patrol/actors` · user/emp **theo quyền tuần** · default = nhân viên đang đăng nhập · **cấm** invent tên |
| User SearchInput (TD-02/TK-01) | resolve-only miss `--` | `GET patrol/actors` qua Mobile.Bff proxy · **cấm** ERP `UserSearchInput` · list = phạm vi `IPatrolDataScope` |
| API base | mixed / web-bff risk | **chỉ** `mobileApiBase()` / `VITE_MOBILE_API_URL` · **cấm** web-bff trực tiếp |
| Mobile.Bff users | thiếu forward | Forward `GET api/v1/integration/users` (pattern RoadRoutes) · **cấm** API mới WebService |
| Grid / filter Kind B | N/A phone · WAIVE | **KEEP N/A** |
| Align mobile | — | `/align-mobile-to-mfe` · 430px · **cấm** tab/route/icon mới |
| Out of scope A | journal/findings | **KEEP** out · waves B–E |

## 4. DoD (đo được)

1. Routes A **KEEP** — **cấm** tab/route/icon mới.
2. **TD-00…07 / TK-00/01** behavior prior **KEEP** trừ delta dưới.
3. **TD-03 Pattern B:** Lưu enable trừ `saving` · GPS deny/thiếu → banner **on click** · **cấm** `disabled={!gps}` · **cấm** fake lat/lng.
4. **route SearchInput:** no `ROAD_ROUTE_SEED`/`filterSeed` · empty on error · unknown → `--`.
5. **userName:** SearchInput `GET patrol/actors` · default caller · list theo quyền (admin / VP / tổ trưởng / chính mình) · không còn Text RO `--`.
6. Transport **chỉ** `mobileApiBase()` · Mobile.Bff users forward.
7. OpenPatrol/OpenInspect submit: disable **chỉ** `saving` (**KEEP**).
8. TD-07 card list + optional route SearchInput · **cấm** `LinErpListFilterBar`.
9. plan-points empty OK · **cấm** auto `MatchOk=true`.
10. Empty/error/GPS deny → in-app toast/banner · **cấm** native alert/confirm.
11. Labels `useFormOptions()` · **cấm** hardcode VN.
12. BE ONLY `Linm.RMMS.WebService` · **cấm ERP.***.
13. Align phone 430 · no android/ios proto.
14. Dev (sau): `yarn build` PASS · **cấm** PO build/e2e/start:std.
15. QA (sau): e2e queued · Pattern B · no-seed · users `--` · no web-bff.

## 5. CTX / DEM / DI inventory

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/web-rmms-mobile-a.md` | feature P0 |
| CTX-02 | `docs/plan/web-rmms-mobile/IMPLEMENT-SCREENS.md` | screens A SSOT |
| CTX-03 | `docs/plan/web-rmms-mobile/GAP-TUAN-DUONG-TUAN-KIEM.md` | gap Note / sổ |
| CTX-04 | `docs/context/features/patrol.md` | peer desktop — **cấm** clone shell |
| CTX-05 | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` | **delta SSOT** |
| DEM | — | **N/A** · hash skip · **cấm** crawl DemoRoot |
| DI | — | **no Excel** |
| DA-01 | `specs/_data-analy/features/web-rmms-mobile-a-control-hint.md` | controlHint · § Delta |
| DA-02 | `specs/_data-analy/features/web-rmms-mobile-a-real-data.md` | §A+§B PASS |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` · `WebRmmsMobileA/*` · `services/patrol/lookups.ts` | delta targets |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` | Patrol · **cấm ERP.*** |
| MAP | `docs/DOMAIN-MAP.md` | Patrol · Integration cite |

## 6. Screens (REQUIRED) — KEEP ids

| ID | Route | Pattern | FormMode | Actions | Notes |
|----|-------|---------|----------|---------|-------|
| TD-00 | `/field` | Full page | none | Nav doors · sync · notify | Hub 2 cửa |
| TD-01 | `/field/tuan-duong` | Full page | none | openSession · checkIn · history | Ca / empty |
| TD-02 | `/field/tuan-duong/mo-ca` | **Full page** | Create | Submit · Cancel | Dirty → Leave · người theo quyền |
| TD-03 | `/field/tuan-duong/check-in` | **Sheet** | Create | Lưu CI · Đóng | **Pattern B** · Dirty → Leave |
| TD-07 | `/field/tuan-duong/lich-su` | Full page | none | Filter route optional | Card list · route `--` miss |
| TK-00 | `/field/tuan-kiem` | Full page | none | openInspect · list active | Hub TK |
| TK-01 | `/field/tuan-kiem/mo-dot` | **Full page** | Create | Submit · Cancel | Dirty → Leave · người theo quyền |

**Out of A:** TD-04/05/06 · TK-02…07.  
**tabs:** none.  
**`devSlash`:** `/agent-dev`.

## 7. controlHint (PO chốt — copy DA-01 + delta)

| uiField | screen | controlHint | Required | Notes |
|---------|--------|-------------|----------|-------|
| doorPatrol / doorInspect | TD-00 | Button/Nav | * | badge ca |
| syncBtn / notifyBtn | TD-00 | Button | — | peer routes |
| openSession / historyNav / checkInNav | TD-01 | Button | * | journal/book/end **out A** |
| route | TD-02 · TK-01 · TD-07 | **SearchInput** | * (open) | no seed · miss → `--` · mobileApiBase |
| direction | TD-02 | **Dropdown** | * | LOOKUP `chieu-*` · Note `chieu=` |
| userName | TD-02 · TK-01 | **SearchInput** | * | `GET patrol/actors` · default caller · `assigneeCode` = mã emp |
| userSearch | shared (d+) | **SearchInput** | — | Bff forward · **not A picker** |
| plannedDate | TD-02 · TK-01 | **Date** | * | default hôm nay |
| patrolType / status | TD-02 · TK-01 | hidden | * | khóa type · `Đang tuần` |
| kmFrom / kmTo | TK-01 | **Number** | * | Note encode |
| inspectMode | TK-01 | **Dropdown** | * | `dinh-ky`/`dot-xuat` |
| inspectReason | TK-01 | **Text** | if dot-xuat | Pattern B: không pre-disable submit |
| planPointLabel | TD-03 | Text/Search | — | empty OK |
| lat/lng/accuracyM | TD-03 | GPS | * | deny → banner **on submit** · **cấm** fake · **cấm** disable Lưu trước |
| submitCheckIn | TD-03 | Button | * | disable **chỉ** `saving` |
| content | TD-03 | **Text** | — | |
| photoLocalIds | TD-03 | FileMulti | — | `files/*` |
| historyCards | TD-07 | List cards | * | Code · Route · PlannedDate · Status · CheckInCount |

## 8. Grid list AC

| Area | Acceptance |
|------|------------|
| Kind B shell A–D / Toolbar FULL / Config / Grid menu | **N/A / WAIVE** — phone hub · **cấm** `DES-GRID-*` · **cấm** `shared-grid-example` |
| Filter Zone C desktop | **N/A** — **cấm** `LinErpListFilterBar` / `ErpListHeaderFilters` |
| TD-07 filter | optional SearchInput `route` · no seed · miss `--` · phone stack OK |
| Form pair | TD-02/TK-01 **Full page** · TD-03 **Sheet** · Design keep prototype · patch delta zones |
| Handoff Design | zones TD/TK · **không** grid_standard Kind B |

**GAP-PO-GRID-01:** không áp Kind B — pack `list` = phone hub; flag N/A.

## 9. Report AC

**N/A**.

## 10. Leave / alert (REQUIRED)

| Surface | Rule |
|---------|------|
| TD-02 · TK-01 · TD-03 dirty | **`LeaveConfirmModal`** · **cấm** native confirm (**GAP-PO-LEAVE-01**) |
| GPS deny / API error / duplicate session | in-app toast / banner / Modal · **cấm** `window.alert` |
| ReInit / destructive | N/A đợt A |

## 11. API Live (PO chốt — **cấm** invent)

Prefix: `api/v1/patrol` · FE **chỉ** `mobile-bff/api/v1` via `mobileApiBase()` · web-bff **cite only**.

| Action | Method | Path | In slug A? |
|--------|--------|------|------------|
| List / active sessions | GET | `patrol/sessions` | **yes** |
| Session detail | GET | `patrol/sessions/{id}` | **yes** |
| Open session | POST | `patrol/sessions` | **yes** |
| Plan points | GET | `patrol/sessions/{id}/plan-points` | **yes** |
| Check-ins list | GET | `…/sessions/{id}/check-ins` | **yes** |
| Create check-in | POST | `…/sessions/{id}/check-ins` | **yes** |
| Road routes | GET | `integration/road-routes/search` | **yes** · no seed |
| Users resolve / search | GET | `integration/users?search=` | **yes** · Bff **forward mới** |
| Profile | GET | `auth/profile` | **yes** |
| Files | POST/PUT | `files/*` | **yes** |
| Journal / findings | — | — | **cấm invent A** |

Create session / check-in bodies: real-data §B (KEEP).  
Step 4b: **N/A** nếu giữ Live path · SA xác nhận Note-encode + Bff users · **cấm** invent WebService endpoint.

## 12. Open questions — PO chốt (autoApprove)

| ID | Issue | Decision (PO) |
|----|-------|----------------|
| UNCLEAR-PLAN-POINT | plan-points có thể empty | **Empty OK** · không auto `MatchOk=true` · Design optional · không block DoD |
| UNCLEAR-NOTE-ENCODE | chiều/km/mode trong `Note` đến Schema D | **Pass SA** — chốt format một lần · Dev follow real-data §B · không invent cột A |
| UNCLEAR-USER-RESOLVE-A | resolve-only vs full picker | **A = resolve display + `--`** · full SearchInput picker = waves d+ / nghiệm thu (SUBMIT) |
| packKind list vs Kind B | analy `list` + phone | **Confirm `list`** · Grid Kind B **N/A** |
| peerStdUrl | Design | `http://localhost:9301/web-rmms-mobile-a` (self) · desktop patrol **không** clone |

## 12b. Chi tiết ca — nav back

Back trên Chi tiết ca về đúng danh sách đã mở hàng (Hôm nay hoặc Lịch sử). Vùng bấm đủ lớn để ngón tay và có phản hồi khi nhấn.

## 13. Handoff → Design

| Field | Value |
|-------|-------|
| feature / packKind | `web-rmms-mobile-a` · **`list`** (phone hub) |
| phase_from / phase_to | `po` → `design` |
| STATUS | `confirmed` (autoApprove) |
| Context / Demo / DI | CTX-01…05 · DEM **N/A** · DI none |
| controlHint / real-data | DA-01 · DA-02 · contentHash match · **§ Delta** |
| Screens / Pattern / devSlash | §6 · Full/Sheet · `/agent-dev` |
| Grid AC / Report AC | Kind B **N/A** · Report **N/A** |
| Leave | §10 LeaveConfirmModal |
| peerStdUrl | `http://localhost:9301/web-rmms-mobile-a` |
| reviewUrl | keep `file:///…/ui/prototype/index.html` · Design **patch** TD-03 CTA + route/user `--` |
| Open questions | PLAN-POINT / NOTE-ENCODE → SA · USER-RESOLVE-A **chốt** resolve-only |
| Next | `/agent-design` · **cấm** PO chain (**GAP-PKT-ROLE-01**) |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `workflowVersion=2026.09.19.02` · `rulesVersion=2026.09.27.1` · `contentHash=sha256:110e845481b0f27091c0f5ca856fef74524bc1634ab8e3785a5d7755730eea45` · `writtenAt=2026-09-27T06:55:00.000Z` · `taskId=task_cd2a366e` · `changeScope=edit_page` · `versionGate=ok`
