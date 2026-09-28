# PO — Requirement — web-rmms-ui-align

| Field | Value |
|-------|-------|
| feature | `web-rmms-ui-align` |
| title | Align UI Home · Tab · Field · Me theo prototype iOS/Android |
| this role | `po` · `/agent-po` |
| changeScope | **`edit_page`** |
| packKind | **`list`** (PO confirm · data-analy đề xuất · **≠** Kind B desktop catalog) |
| lane | `web` |
| stack | `web_mfe_phone` · `Linm.Web.RMMS.Mobile` · phone `max-width: 430px` |
| status | `confirmed` (autoApprove=ON) |
| requestSource | run packet `task_c1dff105` · `/agent-qldb-workflow` · roleOnly=`po` · `/agent-po` · source `qldb_implement` |
| autoApprove | **ON** — Design/SA tự confirm **khi tới lượt** · turn này **không** chain role khác (**GAP-PKT-ROLE-01**) |
| e2eQa | ON — queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở role PO |
| prior | data-analy **confirmed** · compact `handoff/data_analy-compact.md` · `specs/_data-analy/features/web-rmms-ui-align-{control-hint,real-data}.md` · contentHash `sha256:554b56d529a010b6225fe92fc369904fd070a80f12503c35e914643f82bcfe4b` · skillVersion `2026.09.05.03` · rulesVersion `2026.09.25.2` · **hash skip** · demo **N/A** · **cấm** re-scan (**GAP-PO-DEMO-RESCAN-01**) |
| `devSlash` | `/agent-dev` |
| demo | **N/A** (golden prototype = zone ref only) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-ui-align` |
| mfeStdUrl | `http://localhost:9301/web-rmms-ui-align` |
| peerStdUrl | `http://localhost:9301/web-rmms-shell` · `http://localhost:9301/web-rmms-home` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · chrome Auth + Notification · peer cite DOMAIN-MAP · **cấm ERP.*** |
| bffRepo | `D:/AI-QLBD/Linm.RMMS.Mobile.Bff` · `:5202` · `mobile-bff/api/v1` |
| context | `docs/context/features/web-rmms-ui-align.md` |
| controlHint | `specs/_data-analy/features/web-rmms-ui-align-control-hint.md` |
| realData | `specs/_data-analy/features/web-rmms-ui-align-real-data.md` |
| goldenUi | `specs/mobile-p1/ui/prototype/android/index.html` · `ios/index.html` · **cấm** sửa |
| updatedAt | `2026-09-26T06:45:00.000Z` |
| taskId | `task_c1dff105` |
| skillId | `agent-po` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:554b56d529a010b6225fe92fc369904fd070a80f12503c35e914643f82bcfe4b` |

**Cấm:** implement ở role PO · ERP.* · Web BFF base client · MapService `:5021` browser · OSM.org TileUrl SSOT · mock list / demo-json · invent product route / API · sửa iOS/Android HTML · hardcode VN form labels · `window.alert` / `confirm` native · re-scan demo · clone Kind B desktop grid vào phone chrome · `yarn start:std` / e2e / build ở PO.

## 1. Goal

Align chrome UI **đã ship** trên `Linm.Web.RMMS.Mobile` (≤430px) với golden prototype: **TabBar 5** (Trang Chủ · Tuần đường · Vấn đề · Công việc · Tôi) · Home/Field/Incident/Work chrome · **tab Me** rows · map tiles qua Mobile.Bff. **Reuse** route `/web-rmms-*` đã có. Dữ liệu live giữ BFF. **Không** master form / report source mới.

## 2. packKind confirm

| | |
|--|--|
| packKind | **`list`** (PO confirm) |
| Kind UI | **Phone chrome align** (TabBar · Home · Field doors · Me · peer deep) — **≠** Kind B desktop catalog |
| Grid AC Kind B | **N/A this slug** — peers giữ `{peer}-filter-bar.md` / DES-GRID · **cấm** invent filter-bar chrome ở đây |
| Report AC | **N/A** |
| formPattern | Mobile **Full / Overlay / Tab** · **không** ERP Modal/Slideout Kind B cho chrome |
| typography | label **13** · field ≥**16** · labels `useFormOptions()` / LOOKUP_STATIC `tab.*` · `me.*` · `home.*` |

## 3. changeScope `edit_page` — Current vs New

| Area | Current | New |
|------|---------|-----|
| TabBar | 4: home·field·incident·work | **5** + `me` · labels Trang Chủ · **Tuần đường** · Vấn đề · Công việc · Tôi · stroke icons prototype |
| Tab Me | Out (shell/home cấm `me*`) | **In** DES-MOB-ME · profile / offline / signal / feedback / cam-view / ops / logout · settings=**toast only** |
| Screens | peer routes live | Align layout/icon/zone DES-MOB-* · **không** product route mới |
| Map tiles | Mobile.Bff gis/tiles | Giữ · **cấm** `:5021` · **cấm** Web BFF tiles |
| Labels | `useFormOptions` / LOOKUP_STATIC | Giữ · chốt `tab.field` = «Tuần đường» |

## 4. DoD (đo được)

1. `mfeStdRoute` `/web-rmms-ui-align` = review alias · live = existing shell/feature paths · phone ≤430.
2. **TabBar 5** highlight ActiveTab · icons stroke 1-1 prototype · copy keys `tab.home|field|incident|work|me`.
3. **Home** guest FAQ/privacy + login CTA · staff quick/grid → existing routes · profile RO · notify badge `GET notification/overview`.
4. **Field doors** tuần đường / tuần kiểm → `/web-rmms-field` (peer) · optional sessions badge.
5. **Incident / Work** tab roots mount peer lists live · **cấm** mock.
6. **Me** DES-MOB-ME rows per § Screens · settings toast · logout clear JWT.
7. **GAP-DA-UIALIGN-ME-01 CLOSED:** `me.feedback` / `me.camView` — nav alias `/web-rmms-feedback` · `/web-rmms-cam-view` **khi peer mount**; chưa mount → **toast** `me.peerPending` · **cấm** invent page/API trong slug này · peer owners = CTX `feedback` · `cam-view`.
8. Map deep: tiles `GET mobile-bff/api/v1/gis/tiles/{layer}/{z}/{x}/{y}.pbf` only.
9. Labels: **cấm** hardcode VN trên form · dùng copy keys.
10. Empty/error → in-app toast · **cấm** native alert/confirm.
11. Dev (sau): `yarn build` MFE PASS · QA e2e queued · **cấm** PO chạy build/e2e/start:std.

## 5. CTX / DEM / DI inventory

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/web-rmms-ui-align.md` | feature P0 |
| CTX-02 | `docs/context/features/web-rmms-shell.md` · `web-rmms-home.md` · `mobile-bff-map.md` | peer current |
| CTX-03 | `docs/context/features/feedback.md` · `cam-view.md` | peer Me deep |
| DEM | — | **N/A** · golden zone ref only · **cấm** crawl DemoRoot |
| GOLD | `specs/mobile-p1/ui/prototype/android/index.html` · `ios/index.html` | read-only DES-MOB-* |
| DI | — | no Excel |
| DA-01 | `specs/_data-analy/features/web-rmms-ui-align-control-hint.md` | controlHint · hash skip |
| DA-02 | `specs/_data-analy/features/web-rmms-ui-align-real-data.md` | §A+§B PASS · §D map PASS · §E chrome PASS |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` | web phone |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP | **cấm ERP.*** |
| BFF | `D:/AI-QLBD/Linm.RMMS.Mobile.Bff` `:5202` | Auth · Notify · GisTiles · proxy |

## 6. Screens (REQUIRED)

| ID | Zone | Route (existing / alias) | Pattern | FormMode | Actions | Notes |
|----|------|--------------------------|---------|----------|---------|-------|
| UA-00 | shell frame | shell | Full | none | stackBack | ≤430 |
| UA-01 | DES-MOB-TABBAR | TabBar | Tab/Nav | none | switch **5** tabs | `tab.field`=Tuần đường |
| UA-02 | DES-MOB-LOGIN | login overlay | Overlay / Full | Create (login) | Submit · Cancel | dirty → Leave |
| UA-03 | DES-MOB-HOME (+FAQ/PRIVACY) | `/web-rmms-home` | Full | none | quick/grid/nav | guest+staff |
| UA-04 | DES-MOB-PAT-HOME | `/web-rmms-field` | Full | none | doorPatrol · doorInspect | Field doors |
| UA-05 | DES-MOB-INC-LIST | `/web-rmms-incident` | Full | none | peer list | live BFF |
| UA-06 | DES-MOB-MNT-LIST | `/web-rmms-work` | Full | none | peer list | live BFF |
| UA-07 | DES-MOB-ME | Me tab root | Full | none | rows dưới | chrome align |
| UA-08 | DES-MOB-OPS | `/web-rmms-ops` | Full | none | notify inbox | badge overview |
| UA-09 | DES-MOB-PAT-OFFLINE | `/web-rmms-offline` | Full | none | queue | Me/Home |
| UA-10 | DES-MOB-FEEDBACK | `/web-rmms-feedback` | Full | peer | nav / toast | peer pending → toast |
| UA-11 | DES-MOB-CAM-VIEW | `/web-rmms-cam-view` | Full | peer | nav / toast | peer pending → toast |
| UA-12 | DES-MOB-PAT-* · ATT · GIS · ASSET-* · AI · VIS · EST · NT · REFLECT · CAM-PATROL · SUPERVISE · DET-HITL | existing `/web-rmms-*` | Full / peer | peer | deep nav | **reuse only** · cite peer AC |

**devSlash:** `/agent-dev` (phone chrome align · không map/camera/ai assign riêng trên slug này).

## 7. Control hints (copy from analy)

| Field key | Label | controlHint | Notes |
|-----------|-------|-------------|-------|
| tab.items | tab.* | TabBar | 5 · stroke SVG |
| login.user / login.pass | login | Text / Password | overlay |
| home.* | home | Static/Nav/Button | guest+staff |
| field.door* | field | Button/Nav | sessions badge opt |
| me.profile | me.profile | Text RO | `GET auth/profile` |
| me.offlineQueue | me.offline | Button/Nav | `/web-rmms-offline` |
| me.signal | me.signal | Text RO | derived net |
| me.feedback | me.feedback | Button/Nav\|toast | GAP-ME closed |
| me.camView | me.camView | Button/Nav\|toast | GAP-ME closed |
| me.notify | me.notify | Button/Nav | `/web-rmms-ops` + badge |
| me.settings | me.settings | Button toast | **cấm** màn |
| me.logout | me.logout | Button | clear JWT |
| map.tiles | map.tiles | Map | BFF tiles only |
| peer lists | incident/work/asset/… | reuse peer hints | live BFF |

Deep lists/forms: **Reuse** peer `{feature}-control-hint.md` — **cấm** re-invent field set.

## 8. Grid list AC (REQUIRED nếu Kind B / list)

| Area | Acceptance |
|------|------------|
| **This slug** | **N/A** — phone chrome / TabBar / Me · **không** DES-GRID-A…D · **không** `LinErpListFilterBar` trên shell |
| **Peer lists** | Incident / Work / Asset / … giữ Grid AC + filter-bar SSOT của peer (`po-design-grid-standard` · `filter-bar-layout-hard` · **GAP-FILTER-WRAP-02**) |
| **Handoff Design** | Prototype phone 430 · zones DES-MOB-* · **cấm** clone `shared-grid-example` desktop vào chrome |

**grid_standard:** `N/A-chrome` · peers own.

## 9. Leave / alert (REQUIRED)

| Surface | Rule |
|---------|------|
| Login overlay dirty | **`LeaveConfirmModal`** (`/implement-show-leave-confirm`) · **cấm** `window.confirm` |
| Me logout | confirm via **`useAlert` / Modal`** in-app · **cấm** native |
| Peer forms dirty | peer Leave AC · UI-align **không** override native |
| API / net error | toast · **cấm** `window.alert` |

Thiếu → **GAP-PO-LEAVE-01**.

## 10. Open questions (resolved — autoApprove)

| ID | Resolution |
|----|------------|
| GAP-DA-UIALIGN-ME-01 | **CLOSED** — alias `/web-rmms-feedback` · `/web-rmms-cam-view` khi peer mount; else toast `me.peerPending` · **cấm** invent route/API trong slug này · enqueue peer tách |
| GAP-DA-UIALIGN-TAB-01 | **CLOSED (PO)** — copy key `tab.field` VN = **«Tuần đường»** · Design chốt icon `#i-mappin` stroke |

## 11. Handoff → Design

| Field | Value |
|-------|-------|
| feature / packKind | `web-rmms-ui-align` · **`list`** (phone chrome · ≠ Kind B) |
| phase_from / phase_to | `po` → `design` |
| STATUS | confirmed (autoApprove) |
| Context / Demo / DI | CTX-01…03 · DEM **N/A** · GOLD android/ios · DI none |
| controlHint / real-data | abs DA-01 · DA-02 · contentHash `sha256:554b56d5…` |
| Screens / Pattern / devSlash | §6 · Full/Overlay/Tab · `/agent-dev` |
| Grid AC / Report AC | Grid **N/A-chrome** · Report **N/A** · peers keep filter-bar |
| Leave | §9 LeaveConfirmModal + useAlert |
| peerStdUrl / reviewUrl | peerStdUrl shell+home · reviewUrl = Design |
| Open questions | none (GAPs CLOSED) |
| Next | `/agent-design` — prototype DES-MOB-* · control-map · reviewUrl · **cấm** re-scan demo (**GAP-DES-DEMO-RESCAN-01**) |

## Version meta

| Field | Value |
|-------|-------|
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| contentHash | `sha256:554b56d529a010b6225fe92fc369904fd070a80f12503c35e914643f82bcfe4b` |
| writtenAt | `2026-09-26T06:45:00.000Z` |
| taskId | `task_c1dff105` |
| versionGate | `ok` |
