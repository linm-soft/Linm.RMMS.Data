# SA — Solution — web-rmms-cam-home

> Status: **confirmed** · autoApprove ON · task `task_e81e73fa` · 2026-10-01T03:30:00.000Z  
> **changeScope=`edit_page`** · packKind=`list` · **cấm** ERP.* · **cấm** invent `CamHomeController` / `cam-home/*` · **cấm** Step 4b / migration run tại SA · **cấm** Write MFE/native · **cấm** web-bff · **cấm** demo-json · **cấm** Excel / SLA 24h / Mục IV / tab 4 / native.

| | |
|--|--|
| Feature | `web-rmms-cam-home` |
| Title | Trang chủ và tab theo vai |
| Role | `sa` |
| packKind | `list` (phone Home + hub + shell · ≠ desktop Kind B) |
| changeScope | `edit_page` |
| formPattern | Mobile Home / PatrolHub / Shell TabBar · phone ≤430 · N/A ERP Modal/Slideout · DES-GRID N/A |
| domain | **Notification** (`notification`) · Home+shell chrome Auth+Notification · cite Patrol / Incident / role-gate |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| productRoute | `/trang-chu` · `/tuan-duong` · shell tabs (đã ship) |
| mfeStdUrl | `http://localhost:9301/web-rmms-cam-home` (**alias only** · **cấm** invent product slug) |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| BFF | Mobile.Bff `http://localhost:5202` · prefix `mobile-bff/api/v1` · **cấm** web-bff bind |
| contentHash | `sha256:4bca94712257e93fa88e3cec4f6bb851b3aa00d7a28508932d46aef12b73441a` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| solution_confirm | **approve** (autoApprove) |
| design_confirm | **approve** |
| be_repo_confirm | **approve** |
| ui_repo_confirm | **approve** |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-home/ui/prototype/index.html` |
| real_view_parity | `v1` |
| demo | **N/A** · **cấm** rescan / demo SSOT |
| deltaCite | `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` § enqueue #7 · Plan #2 #3 #8 |
| prior · design | `confirmed` · compact · reviewUrl · task `task_51504d81` |
| prior · po | `confirmed` · compact · task `task_316b81f9` |
| prior · data_analy | `confirmed` · compact · task `task_2f8d86d0` |

> SA **chốt** FormMode↔API · DOMAIN-MAP slug · BFF vs API · entity/migration=none · roleCaps cite.  
> **Cấm** invent API path/DTO · **cấm** HOW (TL) · **cấm** Write MFE.

## 0. Delta vs baseline (edit_page)

| Keep (Live peer home / shell / hub) | New / change (this task) |
|-------------------------------------|--------------------------|
| `GET auth/profile` · `GET notification/overview` · cite `GET patrol/sessions` hub today · roleCaps from profile | **Role-gate** hero + tiles + shell FIELD_ROOTS theo PLAN #8 |
| Home chrome · PatrolHub quick · Shell TabBar | Hero CTA gate `tuanDuong` · `gridAssign`→`/van-de` · `gridSupervise`+hub.supervise **chỉ** `QL_HAT` |
| Paths/DTO Auth+Notification+sessions **không đổi** | **REMOVE** `hub.quick.nghiemThu` · **cấm** CamHome* · **cấm** route mới · **cấm** MANAGER-RMMS→Giao việc |

## 1. Domain / ownership

| Item | Decision |
|------|----------|
| DOMAIN-MAP slug | `web-rmms-cam-home` → **Notification** / `notification` · bind peer `web-rmms-home` + `web-rmms-shell` · cite `web-rmms-role-gate` · cite Patrol hub / Incident `/van-de` |
| Rationale | Surface = Home+shell chrome (Auth+Notification Live) · caps = Integration role-gate cite · nav tiles = peer routes — **không** domain Camera / Home CRUD mới |
| API folder | Reuse Auth rewrite + Notification overview · Mobile.Bff forward · **cấm** new controller |
| Role caps | Cite `web-rmms-role-gate` · `packageCode` / `roleCaps` từ `GET auth/profile` · `QL_HAT` = HAT-TRUONG+HAT-PHO seed · **cấm** suy từ `MANAGER-RMMS` |
| **Cấm** | invent `CamHomeController` · `api/v1/cam-home` · ERP.* · web-bff từ Mobile MFE · fake roleCaps |

**DOMAIN-MAP row (apply):**

| Feature slug | Domain | kebab · note |
|--------------|--------|--------------|
| `web-rmms-cam-home` | Notification | `notification` · Home+hub+shell chrome Auth+Notification · cite role-gate caps · cite Patrol sessions hub · cite Incident `/van-de` · MFE Mobile product `/trang-chu` · `/tuan-duong` · alias `/web-rmms-cam-home` · **cấm** invent CamHomeController · bind peer `web-rmms-home` + `web-rmms-shell` |

**GAP-CH-DM-01 → CLOSED** (row trên · patch DOMAIN-MAP).  
**DEP-CH-ROLE** → open dep `web-rmms-role-gate` (caps DTO Live — không invent).

## 2. FormMode ↔ API

Home/hub/shell **không** master form / Modal CRUD. Modes = guest vs staff + role-gated nav.

| Mode / zone | UI | API | Write | Notes |
|-------------|----|-----|-------|-------|
| CH-00 guest | GuestHome | — / session miss | nav login (shell) | no invent |
| CH-HM profile | Text RO `profileName` | `GET …/auth/profile` | — | Live · toast 4xx · **cấm** alert |
| CH-HM badge | Number RO `notifyBadge` | `GET …/notification/overview` | tap → `/ops` peer | empty→0 |
| CH-HM roleCaps | Hidden gates | profile `roleCaps` / `packageCode` | — | cite role-gate · **cấm** fake |
| CH-HM-HERO | qaPatrolPoint / qaIncidentNew | — | nav iff `tuanDuong` | **new gate** |
| CH-HM-GRID | tiles Nav gated | caps only | `/tuan-duong` · `/tuan-kiem` · NT iff `nghiemThu` · `/van-de` iff `qlHat` · `/giam-sat` iff `qlHat` | **cấm** `/cong-viec` entry assign |
| CH-HM-WALLET | asset tile | peer counts cite | `/asset` peer | giữ |
| CH-HUB-QUICK | hub.quick.* | — | nav peer | **REMOVE** `hub.quick.nghiemThu` |
| CH-HUB supervise | hub.quick.supervise | caps `qlHat` | `/giam-sat` | **chỉ** QL_HAT |
| CH-HUB today | Card RO | `GET …/patrol/sessions` cite | — | peer mobile-a · empty OK |
| CH-SH-TAB | shell.tab.* | caps + pathname | Plan #8 FIELD_ROOTS | **edit** highlight · **cấm** Field thắp trên `/tuan-kiem`\|`/phat-hien` khi tuần kiểm |
| DES-GRID / LinErpListFilterBar | — | — | — | **N/A** phone |

### Live endpoints (KEEP — no path/DTO invent)

| Id | Method | BFF path (client) | Downstream | Status |
|----|--------|-------------------|------------|--------|
| API-01 | GET | `mobile-bff/api/v1/auth/profile` | Auth + role-gate enrich | **Live** cite · caps/packageCode |
| API-02 | GET | `mobile-bff/api/v1/notification/overview` | Notification | **Live** cite · badge |
| API-03 | GET | `mobile-bff/api/v1/patrol/sessions` (cite peer) | Patrol | **Live** cite hub today card only |

- Client base: `http://localhost:5202` + `mobile-bff/api/v1` — **không** gọi `web-bff` từ Mobile MFE.
- **API Mới:** none · **migration:** none · **entity mới:** none.
- Labels: LinmCopy / peer i18n keys · **cấm** hardcode VN mới ngoài delta.

### Nav deep-links (PO/Design confirmed — no API)

| Control id | Target | Cap gate |
|------------|--------|----------|
| gridAssign | `/van-de` | `qlHat` / `QL_HAT` only |
| gridSupervise · hub.quick.supervise | `/giam-sat` | `qlHat` only |
| gridPatrolMap · hero điểm tuần | `/tuan-duong` (+ peer) | `tuanDuong` |
| gridTuanKiem | `/tuan-kiem` | `tuanKiem` |
| gridNghiemThu | peer NT route | `nghiemThu` only |
| hub.quick.nghiemThu | — | **REMOVE** |

## 3. BFF vs API

| Layer | Role for cam-home |
|-------|-------------------|
| Mobile.Bff `:5202` | sole FE entry · rewrite `auth/*` · proxy `notification/*` · proxy `patrol/*` cite |
| RMMS.Service.Api | Notification overview · Auth profile (+role-gate enrich) · Patrol sessions cite — **no CamHome / Home controller** |
| web-bff | cite only · **not** Mobile client base |

Fail: 4xx/503 → toast · badge fallback 0 · guest/empty tiles on missing caps — **cấm** mock SSOT · **cấm** `window.alert`.

## 4. Entity / migration

| Item | Decision |
|------|----------|
| Tables | none |
| EF migration | **skip** (no schema) |
| Step 4b | **skip** at SA · Dev only if peer gap (not expected) |

## 5. FE surface (SA contract — Dev implements)

| Zone | Contract |
|------|----------|
| CH-HM-* | Home owns · phone 430 · hero+grid+wallet role-gated |
| CH-HUB-* | PatrolHub · remove NT quick · supervise qlHat-only |
| CH-SH-TAB | WebRmmsShellLayout · Plan #8 FIELD_ROOTS by role |
| GPS | **none** on Home chrome |
| DES-GRID / LinErpListFilterBar | **N/A** |
| GAP-CH-HUB-NT / SHELL / HERO | → Dev implement |

## 6. Risks / open

| ID | Status |
|----|--------|
| GAP-CH-DM-01 | **resolved** — DOMAIN-MAP row `web-rmms-cam-home` |
| UNCLEAR-CH-ASSIGN-TARGET | **resolved PO** — `/van-de` |
| UNCLEAR-CH-SUPERVISE-VIS | **resolved PO** — QL_HAT only |
| DEP-CH-ROLE | **open dep** — `web-rmms-role-gate` caps Live |
| GAP-CH-HUB-NT · GAP-CH-SHELL-TAB · GAP-CH-HERO | → Dev |

## 7. Handoff

| Next | Need |
|------|------|
| team_lead | Tasks: Home hero/tiles gate · assign→`/van-de` · supervise qlHat · remove hub NT · Shell FIELD_ROOTS · Live profile+overview only |
| devSlash | `/agent-dev` |
| qa | AC-CH-* · phone 430 · E2E queued `/agent-qa*` · **cấm** e2e ở SA |

## Version meta

`skillVersion=2026.09.05.03` · `contentHash=sha256:4bca94712257e93fa88e3cec4f6bb851b3aa00d7a28508932d46aef12b73441a` · `solution_confirm=approve` · `writtenAt=2026-10-01T03:30:00.000Z`
