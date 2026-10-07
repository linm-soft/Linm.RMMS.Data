# Design — web-rmms-cam-home

| Field | Value |
|-------|-------|
| feature | `web-rmms-cam-home` |
| title | Trang chủ và tab theo vai |
| this role | `design` · `/agent-design` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_51504d81`) |
| changeScope | `edit_page` |
| packKind | **`list`** (PO · phone visibility matrix · **≠** Kind B desktop) |
| lane | `web` |
| stack | `web_mfe_phone` · `Linm.Web.RMMS.Mobile` · `max-width: 430px` |
| formPattern | Mobile full · Home / Hub / Shell visibility · **không** ERP Modal/Slideout Kind B |
| DES-GRID / LinErpListFilterBar | **N/A** — phone · **cấm** clone |
| Report AC / DES-RPT | **N/A** |
| shared_grid_example | **N/A** (phone) |
| real_view_parity | **v1** (edit peer home/hub/shell zones) |
| peerStdUrl | `http://localhost:9301/web-rmms-cam-home` |
| mfeStdUrl | `http://localhost:9301/web-rmms-cam-home` |
| mfeStdRoute | `/web-rmms-cam-home` |
| productRoute | `/trang-chu` · `/tuan-duong` · shell tabs (**đã ship**) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-home/ui/prototype/index.html` |
| reviewUrl TD | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-home/ui/prototype/index.html?role=td` |
| reviewUrl TK | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-home/ui/prototype/index.html?role=tk` |
| reviewUrl NT | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-home/ui/prototype/index.html?role=nt` |
| reviewUrl QL_HAT | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-home/ui/prototype/index.html?role=qlhat` |
| reviewUrl Hub | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-home/ui/prototype/index.html?view=hub&role=td` |
| reviewUrl Shell TK | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-home/ui/prototype/index.html?view=shell&role=tk&path=tuan-kiem` |
| demo | **N/A** · hash skip · **cấm** re-scan (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · Auth + Notification cite · **cấm ERP.*** |
| bff | `Linm.RMMS.Mobile.Bff` · `:5202` · `mobile-bff/api/v1` · **cấm** web-bff |
| controlHint | `specs/_data-analy/features/web-rmms-cam-home-control-hint.md` |
| realData | `specs/_data-analy/features/web-rmms-cam-home-real-data.md` · §A+§B PASS |
| deltaCite | `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` § enqueue #7 · Plan #2 #3 #8 |
| prior | PO `confirmed` · `handoff/po-compact.md` · contentHash `sha256:4bca94712257e93fa88e3cec4f6bb851b3aa00d7a28508932d46aef12b73441a` |
| autoApprove | **ON** |
| e2eQa | ON queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở Design |
| `devSlash` | `/agent-dev` |
| updatedAt | `2026-10-01T03:15:00.000Z` |
| taskId | `task_51504d81` |
| skillId | `agent-design` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.19.7` |
| versionGate | `ok` |
| contentHash | `sha256:4bca94712257e93fa88e3cec4f6bb851b3aa00d7a28508932d46aef12b73441a` |

**Cấm:** Dev/BE trước confirm (đã autoApprove) · ERP.* · iOS/Android · Kind B DES-GRID · `LinErpListFilterBar` · invent CamHome API · route public mới · suy Giao việc từ `MANAGER-RMMS` · SLA 24h · Mục IV · Excel · hardcode VN ngoài `useFormOptions` · `window.alert` · re-scan demo · `yarn build` / e2e / start:std · fake roleCaps.

## 0. Context / Demo

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/web-rmms-cam-home.md` | edit_page · delta vai |
| CTX-02 | `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` | #7 · Plan #2 #3 #8 |
| DEM | — | **N/A** · hash skip |
| DA-01 / DA-02 | `_data-analy/features/web-rmms-cam-home-{control-hint,real-data}.md` | inventory + §B |
| PO | `po/requirement.md` | matrix · ASSIGN→`/van-de` · SUPERVISE=QL_HAT |
| Peer | `web-rmms-home` · `web-rmms-shell` · `web-rmms-role-gate` | HM-* · SH-* · caps |
| tokens | `docs/mobile-tokens.json` | primary `#0C84C0` · phone 430 |

## 1. Pattern & ownership

| | |
|--|--|
| Frame | Phone **430px** · tokens primary `#0C84C0` · label **13** · field **≥16** |
| Home owns | **CH-HM-*** content · hero/tiles/wallet gated by `roleCaps` |
| Hub owns | **CH-HUB-*** · QUICK **không** NT |
| Shell owns | **CH-SH-TAB** · FIELD_ROOTS theo vai (Plan #8) |
| DES-LEAVE | **N/A** — không form dirty Home/Hub/Shell |
| Out | `/me*` CRUD · Excel · tab 4 · invent route · CamHome* API |

## 2. Screens / zones

| Zone | Route | Surface | Wire |
|------|-------|---------|------|
| **CH-00** | phone | Frame | max-width 430 · Android 1-1 |
| **CH-HM-00** | `/trang-chu` | Home root | guest → GuestHome peer · staff matrix |
| **CH-HM-HERO** | hero | Button/Nav gated | `qaPatrolPoint` · `qaIncidentNew` **iff** `tuanDuong` |
| **CH-HM-GRID** | lưới | Button/Nav gated | tiles theo § Role matrix |
| **CH-HM-WALLET** | wallet | Card/Nav | giữ peer home |
| **CH-HUB-00** | `/tuan-duong` | PatrolHub | Hôm nay: một `GET patrol/check-ins?day=` · ca mở/thu · Tải thêm · mặc định đúng ngày |
| **CH-HUB-QUICK** | quick | Button/Nav | reflect · cam · map · history · offline · supervise(**QL_HAT**) · **CẤM** NT |
| **CH-SH-TAB** | shell | TabBar | home · field · incident · work · me — highlight theo vai |

### IA

```
(auth + roleCaps)
  → CH-HM-00
       hero iff tuanDuong
       grid: TD | TK | NT | Work | Incident | Asset | Offline
             + Assign(/van-de) + Supervise(/giam-sat) iff QL_HAT
  → CH-HUB-00 (/tuan-duong) — operator TD / QL_HAT còn chức danh TD
       QUICK: không nghiem-thu · supervise iff QL_HAT
  → CH-SH-TAB
       path /tuan-kiem*|/phat-hien* + vai TK → Field KHÔNG active
```

### Role matrix (Design chốt = PO)

| Vai | Home thấy | Home ẩn | Hub | Shell |
|-----|-----------|---------|-----|-------|
| `tuanDuong` | hero · gridPatrolMap · Incident tạo · Work · Asset · Offline | NT · TK · Assign · Supervise | QUICK không NT · không supervise | Field roots TD |
| `tuanKiem` | gridTuanKiem → `/tuan-kiem` · Incident RO · Work · Asset | hero TD · Assign · NT mở ca | không operator hub | `/tuan-kiem*` `/phat-hien*` **không** thắp Field |
| `nghiemThu` | gridNghiemThu · Incident RO | Assign · hero TD · mở ca | không hub TD | highlight trên `/nghiem-thu*` |
| `QL_HAT` | Assign → **`/van-de`** · Supervise → `/giam-sat` · (+ caps chức danh kèm) | suy từ MANAGER-RMMS | supervise quick · không NT | như chức danh kèm |

## 3. Field inventory (Control = controlHint)

| uiField | screen | controlHint | Required | Bind / notes |
|---------|--------|-------------|----------|--------------|
| phoneFrame | CH-00 | Layout | * | max-width 430 |
| roleCaps.* | CH-HM/HUB/SH | Flag RO | * | `useRoleGateProfile` · **cấm** fake |
| profileName | CH-HM | Text RO | staff | `GET auth/profile` |
| notifyBadge | CH-HM | Number RO | staff | `GET notification/overview` |
| qaPatrolPoint | CH-HM-HERO | Nav gated | tuanDuong | **edit gate** |
| qaIncidentNew | CH-HM-HERO | Nav gated | tuanDuong | **edit gate** |
| gridPatrolMap | CH-HM-GRID | Nav gated | tuanDuong | → `/tuan-duong` |
| gridTuanKiem | CH-HM-GRID | Nav gated | tuanKiem | → `/tuan-kiem` |
| gridNghiemThu | CH-HM-GRID | Nav gated | nghiemThu | **chỉ** nghiemThu |
| gridAssign | CH-HM-GRID | Nav gated | QL_HAT | → **`/van-de`** · **cấm** role-gate · **cấm** `/cong-viec` entry |
| gridSupervise | CH-HM-GRID | Nav gated | QL_HAT | → `/giam-sat` · **chỉ** qlHat |
| gridWork | CH-HM-GRID | Nav | staff | Công việc theo dõi |
| gridIncident | CH-HM-GRID | Nav | staff | Vấn đề |
| gridAsset | CH-HM-GRID | Nav | staff | Tài sản peer |
| gridOffline | CH-HM-GRID | Nav | staff | Lưu trữ |
| walletAsset | CH-HM-WALLET | Nav | staff | peer |
| hub.quick.nghiemThu | — | — | — | **REMOVE** |
| hub.quick.supervise | CH-HUB-QUICK | Nav gated | QL_HAT | **chỉ** qlHat |
| hub.quick.* | CH-HUB-QUICK | Nav | TD | reflect/cam/map/history/offline |
| hub.todaySession | CH-HUB-00 | Card RO | — | cite patrol sessions |
| shell.tab.* | CH-SH-TAB | Tab | * | Plan #8 · FIELD_ROOTS tách vai |

**Labels:** `useFormOptions()` / copy keys — prototype hiện nhãn VN review; Dev wire key.  
**GPS:** none trên Home/Shell · hub ca giữ peer.

## 4. Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/index.html` |
| Zones | CH-00 · CH-HM-* · CH-HUB-* · CH-SH-TAB |
| Form | **none** master |
| Grid/filter desktop | **N/A** |
| SSOT | control-hint · PO matrix · mobile-tokens · peer home |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-home/ui/prototype/index.html` |
| **real_view_parity** | `v1` |

### Wire (board toggles)

```
?role=td     Home TD: hero ON · no NT/Assign/Supervise
?role=tk     Home TK: gridTuanKiem · no hero · no Assign
?role=nt     Home NT: gridNghiemThu only NT tile
?role=qlhat  Home QL_HAT: Assign→/van-de · Supervise→/giam-sat
?view=hub&role=td|qlhat  Hub QUICK không NT · supervise iff qlhat
?view=shell&role=tk&path=tuan-kiem  Field tab NOT active
```

## 5. API map (cite real-data §B)

| Action | API |
|--------|-----|
| Profile + caps | `GET mobile-bff/api/v1/auth/profile` · role-gate cite |
| Notify badge | `GET mobile-bff/api/v1/notification/overview` |
| Hub sessions | cite `patrolSessionsEndpoint` peer |
| Grid / hero / hub / shell | nav only · **không invent** CamHome path |

**BFF:** Mobile.Bff `:5202` · **cấm** web-bff · **cấm ERP.***  
Empty badge=0 · 4xx → toast · **cấm** `window.alert` · **cấm** fake caps.

## 6. DES checklist

| ID | Result |
|----|--------|
| DES-A zones CH-* | **PASS** |
| DES-B control = controlHint | **PASS** |
| DES-C prototype + reviewUrl | **PASS** |
| DES-D Leave dirty | **N/A** |
| DES-GRID / DES-RPT | **N/A** phone |
| real_view_parity | **v1** |
| AC-CH-* matrix | **PASS** (PO) |
| ASSIGN `/van-de` · SUPERVISE QL_HAT | **PASS** |

## 7. UNCLEAR / GAP (carry)

| id | Action |
|----|--------|
| UNCLEAR-CH-ASSIGN-TARGET | **resolved PO** → `/van-de` |
| UNCLEAR-CH-SUPERVISE-VIS | **resolved PO** → QL_HAT only |
| GAP-CH-DM-01 | → **SA** DOMAIN-MAP cite/row |
| GAP-CH-HUB-NT · GAP-CH-SHELL-TAB · GAP-CH-HERO | → **Dev** |
| DEP-CH-ROLE | deps `web-rmms-role-gate` Live |

## 8. Handoff

| Role | Need |
|------|------|
| SA | DOMAIN-MAP cite home/shell hoặc row `web-rmms-cam-home` · **không** invent API |
| TL | Tasks edit HomePage · PatrolHub QUICK · Shell FIELD_ROOTS |
| Dev | `/agent-dev` · gate hero · remove hub NT · assign→`/van-de` · supervise qlHat · Plan #8 |
| QA | AC-CH-* · phone 430 · Mobile.Bff only · e2e queued |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `workflowVersion=2026.09.19.02` · `rulesVersion=2026.09.19.7` · `contentHash=sha256:4bca94712257e93fa88e3cec4f6bb851b3aa00d7a28508932d46aef12b73441a` · `updatedAt=2026-10-01T03:15:00.000Z` · `design_confirm=approve` · `taskId=task_51504d81`
