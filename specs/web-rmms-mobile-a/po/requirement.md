# PO — Requirement — web-rmms-mobile-a

| Field | Value |
|-------|-------|
| feature | `web-rmms-mobile-a` |
| title | Tuần đường / Tuần kiểm đợt A — hub, mở ca, check-in, lịch sử |
| this role | `po` · `/agent-po` |
| changeScope | **`new_page`** |
| packKind | **`list`** (PO confirm · data-analy đề xuất · **≠** Kind B desktop catalog) |
| lane | `web` |
| stack | `web_mfe_phone` · `Linm.Web.RMMS.Mobile` · phone `max-width: 430px` |
| status | `confirmed` (autoApprove=ON) |
| requestSource | run packet `task_50f286a6` · `/agent-qldb-workflow` · roleOnly=`po` · `/agent-po` · source `qldb_implement` |
| autoApprove | **ON** — Design/SA tự confirm **khi tới lượt** · turn này **không** chain role khác (**GAP-PKT-ROLE-01**) |
| e2eQa | ON — queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở role PO |
| prior | data-analy **confirmed** · compact `handoff/data_analy-compact.md` · `specs/_data-analy/features/web-rmms-mobile-a-{control-hint,real-data}.md` · contentHash `sha256:c5b21efdd411635233b56b13ee0b1a318c182c0a488f10d8290481a3dbbd3c2e` · skillVersion `2026.09.05.03` · rulesVersion `2026.09.25.2` · **hash skip** · demo **N/A** · **cấm** re-scan (**GAP-PO-DEMO-RESCAN-01**) |
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
| updatedAt | `2026-09-25T06:45:00.000Z` |
| taskId | `task_50f286a6` |
| skillId | `agent-po` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:c5b21efdd411635233b56b13ee0b1a318c182c0a488f10d8290481a3dbbd3c2e` |

**Cấm:** implement ở role PO · ERP.* · nhét màn vào MFE desktop Asset/Field · iOS/Android native · invent `journal-lines` / `findings` / pause-handover trong A · fake GPS · hardcode label VN trên form · `window.alert` / `confirm` native · re-scan demo · clone LinErp desktop shell / Kind B grid · `yarn start:std` / e2e ở PO.

## 1. Goal

Wave A trên **web MFE phone** (`Linm.Web.RMMS.Mobile` · khung 430px): hub Field → Tuần đường / Tuần kiểm → mở ca / mở đợt → check-in GPS → lịch sử ca. **Chỉ API Live** (sessions · check-ins · plan-points GET · road-routes · auth/profile · files). Persona: nhân viên tuần đường (TD-*) · cán bộ QLĐB (TK-*). **Cấm** gộp đợt B–E (TD-04/05/06 · TK-02…07).

## 2. packKind confirm

| | |
|--|--|
| packKind | **`list`** (PO confirm) |
| Kind UI | **Phone Field hub + forms + card list** — **≠** Kind B desktop catalog |
| Grid AC Kind B | **N/A** — `LinErpListFilterBar` / `DES-GRID-*` **cấm** clone (**analy**) |
| Report AC | **N/A** |
| formPattern | Mobile **Full page** (TD-02 · TK-01) · **Sheet** (TD-03) · hub Full (TD-00/01/07 · TK-00) |
| typography | label **13** · field ≥**16** (**GAP-TYP-01**) · labels qua `useFormOptions()` / copy key |

## 3. changeScope `new_page`

MFE Mobile **chưa** ship đợt A routes — **không** bảng Current vs New. SSOT = CTX + IMPLEMENT-SCREENS + data-analy (hash skip). Demo HTML = **N/A**. Design gen prototype phone 430 · zones TD/TK.

## 4. DoD (đo được)

1. Route pack `/web-rmms-mobile-a` (std) map tới hub Field phone · **cấm** desktop chrome.
2. **TD-00** hub 2 cửa: Tuần đường · Tuần kiểm · sync → `/field/offline` (peer) · notify → `/ops` (peer) — badge ca `Đang tuần`+đúng `PatrolType`.
3. **TD-01** empty → CTA mở ca (TD-02) · có ca → check-in (TD-03) · lịch sử (TD-07) · journal/book/end **ẩn/disable** (đợt B/D).
4. **TD-02** mở ca: SearchInput tuyến · Dropdown chiều · Date · User RO · `POST patrol/sessions` · `PatrolType=Tuần đường` · `Status=Đang tuần` · Note encode `chieu=` (+ optional GPS start).
5. **TD-03** sheet check-in: GPS **HARD** deny → disable Lưu · `POST …/check-ins` · plan-point empty OK · **cấm** ép `MatchOk=true` · FileMulti `files/*`.
6. **TD-07** card list lịch sử `GET sessions` filter `Tuần đường` · optional SearchInput `route` · **cấm** `LinErpListFilterBar`.
7. **TK-00 / TK-01** hub + mở đợt `PatrolType=Tuần kiểm` · kmFrom/kmTo · inspectMode · inspectReason (bắt buộc nếu `dot-xuat`) · Note encode.
8. Không mở ca trùng: cùng user + tuyến + loại đang `Đang tuần` → về hub ca (không duplicate POST).
9. Empty / error / GPS deny → toast in-app · **cấm** `window.alert`.
10. Labels: `useFormOptions()` · **cấm** hardcode VN form.
11. BE ONLY `Linm.RMMS.WebService` DOMAIN-MAP Patrol (+ Integration/Auth/Files) · **cấm ERP.***.
12. Dev (sau): `yarn build` MFE Mobile PASS · **cấm** PO chạy build/e2e/start:std.
13. QA (sau): e2e queued · PNG `qa/screens` · live `mfeStdUrl`.

## 5. CTX / DEM / DI inventory

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/web-rmms-mobile-a.md` | feature P0 |
| CTX-02 | `docs/plan/web-rmms-mobile/IMPLEMENT-SCREENS.md` | screens A SSOT |
| CTX-03 | `docs/plan/web-rmms-mobile/GAP-TUAN-DUONG-TUAN-KIEM.md` | gap Note / sổ |
| CTX-04 | `docs/context/features/patrol.md` | peer desktop — **cấm** clone shell |
| DEM | — | **N/A** · hash skip · **cấm** crawl DemoRoot |
| DI | — | **no Excel** |
| DA-01 | `specs/_data-analy/features/web-rmms-mobile-a-control-hint.md` | controlHint |
| DA-02 | `specs/_data-analy/features/web-rmms-mobile-a-real-data.md` | §A+§B PASS |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` | web phone |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` | Patrol · **cấm ERP.*** |
| MAP | `docs/DOMAIN-MAP.md` | Patrol cite |

## 6. Screens (REQUIRED)

| ID | Route | Pattern | FormMode | Actions | Notes |
|----|-------|---------|----------|---------|-------|
| TD-00 | `/field` | Full page | none | Nav doors · sync · notify | Hub 2 cửa |
| TD-01 | `/field/tuan-duong` | Full page | none | openSession · checkIn · history | Ca / empty |
| TD-02 | `/field/tuan-duong/mo-ca` | **Full page** | Create | Submit open session · Cancel | Dirty → Leave |
| TD-03 | `/field/tuan-duong/check-in` | **Sheet** | Create | Lưu CI · Đóng | GPS HARD · Dirty → Leave |
| TD-07 | `/field/tuan-duong/lich-su` | Full page | none | Filter route optional · open detail | Card list |
| TK-00 | `/field/tuan-kiem` | Full page | none | openInspect · list active | Hub TK |
| TK-01 | `/field/tuan-kiem/mo-dot` | **Full page** | Create | Submit · Cancel | Dirty → Leave |

**Out of A:** TD-04/05/06 · TK-02…07 — **cấm** stub fake list.  
**tabs:** none (shell app peer — **cấm** invent segment pack).  
**`devSlash`:** `/agent-dev`.

## 7. controlHint (PO chốt — copy DA-01)

| uiField | screen | controlHint | Required | Notes |
|---------|--------|-------------|----------|-------|
| doorPatrol / doorInspect | TD-00 | Button/Nav | * | → TD / TK hubs · badge ca |
| syncBtn / notifyBtn | TD-00 | Button | — | peer routes |
| openSession / historyNav / checkInNav | TD-01 | Button | * | journal/book/end **out A** |
| route | TD-02 · TK-01 · TD-07 | **SearchInput** | * (open) | `GET integration/road-routes/search` |
| direction | TD-02 | **Dropdown** | * | LOOKUP `chieu-*` · Note `chieu=` |
| userName | TD-02 · TK-01 | Text RO | * | `GET auth/profile` |
| plannedDate | TD-02 · TK-01 | **Date** | * | default hôm nay |
| patrolType / status | TD-02 · TK-01 | hidden | * | khóa `Tuần đường`/`Tuần kiểm` · `Đang tuần` |
| kmFrom / kmTo | TK-01 | **Number** | * | Note encode |
| inspectMode | TK-01 | **Dropdown** | * | `dinh-ky`/`dot-xuat` |
| inspectReason | TK-01 | **Text** | if dot-xuat | |
| planPointLabel | TD-03 | Text/Search | — | plan-points empty OK |
| lat/lng/accuracyM | TD-03 | GPS | * | deny → disable Lưu · **cấm** fake |
| content | TD-03 | **Text** | — | |
| photoLocalIds | TD-03 | FileMulti | — | `files/*` guid |
| historyCards | TD-07 | List cards | * | Code · Route · PlannedDate · Status · CheckInCount |

## 8. Grid list AC

| Area | Acceptance |
|------|------------|
| Kind B shell A–D / Toolbar FULL / Config / Grid menu | **N/A** — phone Field hub · **cấm** `DES-GRID-*` · **cấm** `shared-grid-example` clone |
| Filter Zone C desktop | **N/A** — **cấm** `LinErpListFilterBar` / `ErpListHeaderFilters` |
| TD-07 filter | optional SearchInput `route` trên card list · **không** nút Tìm riêng · wrap phone stack OK |
| Form pair | TD-02/TK-01 **Full page** · TD-03 **Sheet** · Design phone 430 |
| Handoff Design | zones TD/TK ids · **không** grid_standard Kind B |

**GAP-PO-GRID-01:** không áp Kind B — pack `list` = hub/forms/history **phone**; flag N/A ghi rõ.

## 9. Report AC

**N/A** — không report/dashboard.

## 10. Leave / alert (REQUIRED)

| Surface | Rule |
|---------|------|
| TD-02 · TK-01 · TD-03 dirty | **`LeaveConfirmModal`** · **cấm** `window.confirm` / native alert (**GAP-PO-LEAVE-01**) |
| GPS deny / API error / duplicate session | in-app toast / Modal · **cấm** `window.alert` |
| ReInit / destructive | N/A đợt A |

## 11. API Live (PO chốt path — **cấm** invent)

Prefix cite: `api/v1/patrol` · BFF web `web-bff/api/v1/patrol` · mobile-bff plan cùng `{resource}`.

| Action | Method | Path | In slug A? |
|--------|--------|------|------------|
| List / active sessions | GET | `patrol/sessions` | **yes** |
| Session detail | GET | `patrol/sessions/{id}` | **yes** |
| Open session | POST | `patrol/sessions` | **yes** |
| Plan points | GET | `patrol/sessions/{id}/plan-points` | **yes** |
| Check-ins list | GET | `…/sessions/{id}/check-ins` | **yes** |
| Create check-in | POST | `…/sessions/{id}/check-ins` | **yes** |
| Road routes | GET | `integration/road-routes/search` | **yes** |
| Profile | GET | `auth/profile` | **yes** |
| Files | POST/PUT | `files/init` · `files/{id}/object` · `files/commit` | **yes** |
| Journal / findings | — | — | **cấm invent A** |

Create session body: `UserName` · `Route` · `PatrolType` · `Status` · `PlannedDate` · `StartedAt` · `CheckInCount` · `CoveragePercent` · `OfflineQueued` · `Note` · `MediaIds`.  
Create check-in body: `PlanPointLabel` · `Route` · `Lat` · `Lng` · `AccuracyM` · `DistanceToPlanM` · `MatchOk` · `Content` · `PhotoLocalIds`/`AttachmentIds`.

Step 4b: **N/A** nếu giữ Live path · SA xác nhận Note-encode · **cấm** đổi Live path không gap.

## 12. Open questions — PO chốt (autoApprove)

| ID | Issue | Decision (PO) |
|----|-------|----------------|
| UNCLEAR-PLAN-POINT | plan-points có thể empty | **Empty OK** · không auto `MatchOk=true` · Design optional field · không block DoD |
| UNCLEAR-NOTE-ENCODE | chiều/km/mode trong `Note` đến Schema D | **Pass SA** — chốt format một lần · Dev follow real-data §B · không invent cột mới A |
| packKind list vs Kind B | analy `list` + phone hub | **Confirm `list`** · Grid Kind B **N/A** |
| peerStdUrl | gợi ý Design | `http://localhost:9301/web-rmms-mobile-a` (self) · peer desktop patrol **không** clone |

## 13. Handoff → Design

| Field | Value |
|-------|-------|
| feature / packKind | `web-rmms-mobile-a` · **`list`** (phone hub) |
| phase_from / phase_to | `po` → `design` |
| STATUS | `confirmed` (autoApprove) |
| Context / Demo / DI | CTX-01…04 · DEM **N/A** · DI none |
| controlHint / real-data | DA-01 · DA-02 · contentHash match |
| Screens / Pattern / devSlash | §6 · Full/Sheet · `/agent-dev` |
| Grid AC / Report AC | Kind B **N/A** · Report **N/A** |
| Leave | §10 LeaveConfirmModal |
| peerStdUrl | `http://localhost:9301/web-rmms-mobile-a` |
| reviewUrl | (Design ghi) |
| Open questions | UNCLEAR-PLAN-POINT / NOTE-ENCODE → SA follow §12 |
| Next | `/agent-design` · **cấm** PO chain (**GAP-PKT-ROLE-01**) |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `workflowVersion=2026.09.19.02` · `rulesVersion=2026.09.25.2` · `contentHash=sha256:c5b21efdd411635233b56b13ee0b1a318c182c0a488f10d8290481a3dbbd3c2e` · `writtenAt=2026-09-25T06:45:00.000Z` · `taskId=task_50f286a6` · `versionGate=ok`
