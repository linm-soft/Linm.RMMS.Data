# PO — Requirement — web-rmms-shell

| Field | Value |
|-------|-------|
| feature | `web-rmms-shell` |
| title | Tab bar Home · Field · Incident · Work |
| this role | `po` · `/agent-po` |
| changeScope | **`new_page`** |
| packKind | **`list`** (PO confirm · data-analy đề xuất · **≠** Kind B desktop catalog) |
| lane | `web` |
| stack | `web_mfe_phone` · `Linm.Web.RMMS.Mobile` · phone `max-width: 430px` |
| status | `confirmed` (autoApprove=ON) |
| requestSource | run packet `task_63a6c94f` · `/agent-qldb-workflow` · roleOnly=`po` · `/agent-po` · source `qldb_implement` |
| autoApprove | **ON** — Design/SA tự confirm **khi tới lượt** · turn này **không** chain role khác (**GAP-PKT-ROLE-01**) |
| e2eQa | ON — queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở role PO |
| prior | data-analy **confirmed** · compact `handoff/data_analy-compact.md` · `specs/_data-analy/features/web-rmms-shell-{control-hint,real-data}.md` · contentHash `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · skillVersion `2026.09.05.03` · rulesVersion `2026.09.25.2` · **hash skip** · demo **N/A** · **cấm** re-scan (**GAP-PO-DEMO-RESCAN-01**) |
| `devSlash` | `/agent-dev` |
| demo | **N/A** |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-shell` |
| mfeStdUrl | `http://localhost:9301/web-rmms-shell` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · chrome **Auth** + **Notification** · deep cite Patrol/Incident/Maintenance/Asset · **cấm ERP.*** |
| context | `docs/context/features/web-rmms-shell.md` |
| controlHint | `specs/_data-analy/features/web-rmms-shell-control-hint.md` |
| realData | `specs/_data-analy/features/web-rmms-shell-real-data.md` |
| screensPlan | `docs/plan/web-rmms-mobile/SCREENS.md` |
| plan | `docs/plan/web-rmms-mobile/PLAN.md` |
| updatedAt | `2026-09-25T11:25:00.000Z` |
| taskId | `task_63a6c94f` |
| skillId | `agent-po` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |

**Cấm:** implement ở role PO · ERP.* · nhét phone shell vào MFE desktop Asset/Gis/Camera · iOS/Android native · invent `me*` / feedback / cam-view APIs · fake GPS · hardcode label VN trên form · `window.alert` / `confirm` native · re-scan demo · clone LinErp desktop shell / Kind B grid · `yarn start:std` / e2e ở PO · deep journal/findings/close/frequency (owners `web-rmms-mobile-b`…`e`).

## 1. Goal

Phone shell 1-1 Android chrome trên **web MFE** (`Linm.Web.RMMS.Mobile` · khung 430px): **bottom TabBar 4 mục** Home · Field · Incident · Work (+ login overlay · stack back). **Bỏ** tab Cá nhân và mọi route `me*` / feedback / cam-view. Field hub giữ **hai lối**: Tuần đường (BDTX) · Tuần kiểm (Khu/VP) → peer `web-rmms-mobile-a`. Nội dung sâu = peer b–e — shell chỉ nav/stub. API chrome **Live**: auth · session-window · profile · notification/overview qua Mobile.Bff `:5202`.

## 2. packKind confirm

| | |
|--|--|
| packKind | **`list`** (PO confirm) |
| Kind UI | **Phone shell chrome** (TabBar · login · Home · Field hub · tab roots) — **≠** Kind B desktop catalog |
| Grid AC Kind B | **N/A** — `LinErpListFilterBar` / `DES-GRID-*` **cấm** clone (**analy**) |
| Report AC | **N/A** |
| formPattern | Mobile **shell / full / sheet** · **không** ERP Modal/Slideout Kind B |
| typography | label **13** · field ≥**16** (**GAP-TYP-01**) · labels qua `useFormOptions()` / copy key `tab.*` |

## 3. changeScope `new_page`

MFE Mobile shell routes **mới** (TabBar 4 · bỏ me) — **không** bảng Current vs New desktop. SSOT = CTX + SCREENS/PLAN + data-analy (hash skip). Demo HTML = **N/A**. Design gen prototype phone 430 · zones SH-*.

## 4. DoD (đo được)

1. Route pack `/web-rmms-shell` (std) map MobileShell phone ≤430 · **cấm** desktop chrome.
2. **SH-01** TabBar đúng **4** tab: Home · Field · Incident · Work · icons/layout 1-1 Android · **cấm** render `tab.me` / routes `me*`.
3. **SH-02** login overlay: `POST auth/login` → refresh · session-window · guest vẫn mở Home.
4. **SH-03** Home: guest FAQ + CTA login · staff quick actions + grid nav (copy SCREENS) · profile RO · ops badge từ `notification/overview`.
5. **SH-04** Field hub **2 cửa**: Tuần đường → `/field/tuan-duong` · Tuần kiểm → `/field/tuan-kiem` (owner nội dung: peer A) · optional sync → offline.
6. **SH-05 / SH-06** tab roots Incident / Work = stub mount peer lists — **cấm** invent CRUD shell.
7. Stack back (SH-00) pop đúng AppRouter · Tab switch highlight ActiveTab.
8. Labels: `useFormOptions()` / copy keys · **cấm** hardcode VN form.
9. GPS: shell chrome **không** bắt · deep = peer · deny → disable nút coords · **cấm** fake.
10. BE ONLY `Linm.RMMS.WebService` + Mobile.Bff `mobile-bff/api/v1` · **cấm ERP.*** · **cấm** Web BFF base client.
11. Empty / error / 403 session-window → toast in-app · **cấm** `window.alert`.
12. Dev (sau): `yarn build` MFE Mobile PASS · **cấm** PO chạy build/e2e/start:std.
13. QA (sau): e2e queued · PNG `qa/screens` · live `mfeStdUrl` `:9301`.

## 5. CTX / DEM / DI inventory

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/web-rmms-shell.md` | feature P0 |
| CTX-02 | `docs/plan/web-rmms-mobile/SCREENS.md` | screens / GPS / BFF |
| CTX-03 | `docs/plan/web-rmms-mobile/PLAN.md` | Shell · HARD · Map (bỏ me) |
| CTX-04 | `docs/context/features/web-rmms-mobile-a.md` | peer Field 2 cửa |
| DEM | — | **N/A** · hash skip · **cấm** crawl DemoRoot |
| DI | — | **no Excel** |
| DA-01 | `specs/_data-analy/features/web-rmms-shell-control-hint.md` | controlHint |
| DA-02 | `specs/_data-analy/features/web-rmms-shell-real-data.md` | §A+§B PASS |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` | web phone |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` | Auth+Notification · **cấm ERP.*** |
| MAP | `docs/DOMAIN-MAP.md` | GAP shell row → SA |

## 6. Screens (REQUIRED)

| ID | Route | Pattern | FormMode | Actions | Notes |
|----|-------|---------|----------|---------|-------|
| SH-00 | shell | Full / stack | none | stackBack | MobileShell ≤430 |
| SH-01 | TabBar | Tab/Nav | none | switch 4 tabs | **no** `tab.me` |
| SH-02 | `/login` | Overlay / Full | Create (login) | Submit · Cancel | Dirty → Leave |
| SH-03 | `/` | Full page | none | quick + grid nav · guestLoginCta | guest / staff |
| SH-04 | `/field` | Full page | none | doorPatrol · doorInspect · sync | hub 2 cửa → peer A |
| SH-05 | `/incident` | Full / stub | none | mount peer list | owner Incident peer |
| SH-06 | `/work` | Full / stub | none | mount peer list | owner Maintenance peer |

**Out of shell:** `/me` · `/me/profile` · `/me/settings` · `/me/feedback` · `/me/cam` · journal / findings / close / frequency (b–e).  
**tabs:** Home · Field · Incident · Work only.  
**`devSlash`:** `/agent-dev`.

## 7. controlHint (PO chốt — copy DA-01)

| uiField | screen | controlHint | Required | Notes |
|---------|--------|-------------|----------|-------|
| phoneFrame | SH-00 | Layout | * | max-width 430 · center desktop review |
| tabHome / tabField / tabIncident / tabWork | SH-01 | Tab/Nav | * | copy `tab.*` · 4 only |
| tabMe | — | **REMOVED** | — | **cấm** render · 404/hide `me*` |
| stackBack | SH-00 | Button | * | pop stack |
| loginUser | SH-02 | Text | * | account |
| loginPass | SH-02 | Password | * | |
| loginSubmit | SH-02 | Button | * | `POST auth/login` |
| guestFaq / guestLoginCta | SH-03 | Static / Button | — | guest |
| qa* Home CTAs | SH-03 | Button/Nav | — | SCREENS Home grid/quick |
| profileName | SH-03 | Text RO | staff | `GET auth/profile` |
| notifyBadge | SH-03 | Number RO | — | `GET notification/overview` |
| doorPatrol | SH-04 | Button/Nav | * | → `/field/tuan-duong` |
| doorInspect | SH-04 | Button/Nav | * | → `/field/tuan-kiem` |
| syncBtn | SH-04 | Button | — | → offline peer |
| incidentRoot / workRoot | SH-05/06 | List stub | — | peer mount only |

## 8. Grid list AC

| Area | Acceptance |
|------|------------|
| Kind B shell A–D / Toolbar FULL / Config / Grid menu | **N/A** — phone shell · **cấm** `DES-GRID-*` · **cấm** `shared-grid-example` clone |
| Filter Zone C desktop | **N/A** — **cấm** `LinErpListFilterBar` / `ErpListHeaderFilters` |
| Home grid | icon tiles **nav only** · **không** ERP list filter bar |
| Form pair | login Overlay/Full · hubs Full · Design phone 430 |
| Handoff Design | zones SH-* ids · **không** grid_standard Kind B |

**GAP-PO-GRID-01:** không áp Kind B — pack `list` = phone shell chrome; flag N/A ghi rõ.

## 9. Report AC

**N/A** — không report/dashboard.

## 10. Leave / alert (REQUIRED)

| Surface | Rule |
|---------|------|
| SH-02 login dirty | **`LeaveConfirmModal`** · **cấm** `window.confirm` / native alert (**GAP-PO-LEAVE-01**) |
| Auth/API error · session-window 403 · notify empty | in-app toast / Modal · **cấm** `window.alert` |
| Tab switch / stack back (no dirty form) | no Leave modal |
| ReInit / destructive | N/A shell chrome |

## 11. API Live (PO chốt path — **cấm** invent)

Prefix HARD: Mobile.Bff `http://localhost:5202` · `mobile-bff/api/v1` · **cấm** Web BFF base client.

| Action | Method | Path | In shell? |
|--------|--------|------|-----------|
| Login | POST | `auth/login` | **yes** |
| Refresh | POST | `auth/refresh-token` | **yes** |
| Profile | GET | `auth/profile` | **yes** |
| Session window | GET | `contract-accounts/session-window?authUserId=` | **yes** |
| Notify overview | GET | `notification/overview` | **yes** |
| Patrol sessions (badge optional) | GET | `patrol/sessions` | cite · Field doors |
| Incident / WO lists | GET | peer paths | **stub only** · owner peer |
| me / feedback / cam | — | — | **cấm invent** |

Step 4b: **N/A** nếu giữ Live path · SA thêm DOMAIN-MAP row `web-rmms-shell` · **cấm** đổi Live path không gap.

## 12. Open questions — PO chốt (autoApprove)

| ID | Issue | Decision (PO) |
|----|-------|----------------|
| UNCLEAR-DOMAIN-MAP-SHELL | DOMAIN-MAP chưa có row shell | **Pass SA** — thêm row chrome Auth+Notification · deep cite peer · không block DoD PO |
| UNCLEAR-STD-PORT | PLAN `:9330` vs packet `:9301` | **Follow STATUS** `mfeStdUrl` `http://localhost:9301/web-rmms-shell` · Design/Dev ghi note nếu scaffold port khác |
| packKind list vs Kind B | analy `list` + phone shell | **Confirm `list`** · Grid Kind B **N/A** |
| peerStdUrl | gợi ý Design | `http://localhost:9301/web-rmms-shell` (self) |

## 13. Handoff → Design

| Field | Value |
|-------|-------|
| feature / packKind | `web-rmms-shell` · **`list`** (phone shell) |
| phase_from / phase_to | `po` → `design` |
| STATUS | `confirmed` (autoApprove) |
| Context / Demo / DI | CTX-01…04 · DEM **N/A** · DI none |
| controlHint / real-data | DA-01 · DA-02 · contentHash match |
| Screens / Pattern / devSlash | §6 · shell/full/sheet · `/agent-dev` |
| Grid AC / Report AC | Kind B **N/A** · Report **N/A** |
| Leave | §10 LeaveConfirmModal (login dirty) |
| peerStdUrl | `http://localhost:9301/web-rmms-shell` |
| reviewUrl | (Design ghi) |
| Open questions | UNCLEAR-DOMAIN-MAP-SHELL / STD-PORT → SA/Design follow §12 |
| Next | `/agent-design` · **cấm** PO chain (**GAP-PKT-ROLE-01**) |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `workflowVersion=2026.09.19.02` · `rulesVersion=2026.09.25.2` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `writtenAt=2026-09-25T11:25:00.000Z` · `taskId=task_63a6c94f` · `versionGate=ok`
