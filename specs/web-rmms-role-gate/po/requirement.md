# PO — requirement — web-rmms-role-gate

| Field | Value |
|-------|-------|
| feature | `web-rmms-role-gate` |
| title | Quyền QL_HAT và vai theo chức danh |
| packKind | `list` (PO confirm · phone gate · **≠** Kind B desktop catalog) |
| changeScope | `edit_page` |
| lane | `web` |
| status | `confirmed` |
| skillId | `agent-po` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.19.7` |
| versionGate | `ok` |
| contentHash | `sha256:cc33bfbc2361d40d732e6b018e209ccce2e8778cce33f39c7766119237ba4216` |
| writtenAt | `2026-09-30T16:25:00.000Z` |
| demo | **N/A** |
| formPattern | Mobile full · phone `max-width: 430px` · Android 1-1 · profile + visibility gates · **không** ERP Modal/Slideout |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-role-gate` |
| mfeStdUrl | `http://localhost:9301/web-rmms-role-gate` |
| productRoute | profile gate · consumers trên route **đã ship** (`/trang-chu`, `/van-de`, `/tuan-duong`, `/tuan-kiem`, `/nghiem-thu`, …) |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Integration `job-titles` + Auth profile cite · Patrol/Incident/Maintenance consumers · **cấm ERP.*** |
| bff | `Linm.RMMS.Mobile.Bff` · `VITE_MOBILE_API_URL=http://localhost:5202/mobile-bff/api/v1` · **cấm** web-bff |
| deltaCite | `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` · `docs/context/seed/job-title-seed.json` |
| priorAnaly | `_data-analy/features/web-rmms-role-gate-control-hint.md` · `web-rmms-role-gate-real-data.md` · hash skip |
| context | `docs/context/features/web-rmms-role-gate.md` |
| taskId | `task_86f650f4` |
| priorAnalyTask | `task_e58600c5` |
| autoApprove | **ON** |
| e2eQa | ON — queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở PO |
| `devSlash` | `/agent-dev` |

> Nhãn UI: `useFormOptions()` / LOOKUP_STATIC — **cấm** hardcode VN mới nếu key đã có.  
> **HARD:** `changeScope=edit_page` · **cấm** `new_page` · **cấm** route public mới · **cấm** suy `QL_HAT` / Giao việc từ `MANAGER-RMMS` · **cấm** re-scan demo (**GAP-PO-DEMO-RESCAN-01**) · **cấm** invent `role-gate/*` controller · **cấm** Excel · **cấm** SLA 24h · **cấm** tiền Mục IV · **cấm** iOS/Android · **cấm** ERP.*.

## 1. Goal / persona / DoD

| | |
|--|--|
| Goal | **edit_page:** sau login, profile mang `jobTitleCode` · `packageCode` · `roleCaps`; Home/hub/shell/CTA peers ẩn/hiện đúng vai; `HAT-TRUONG`/`HAT-PHO` → `packageHint=QL_HAT`; nút **Giao việc xử lý** chỉ `qlHat`. |
| Persona | Tuần đường · Tuần kiểm · Nghiệm thu · Hạt trưởng/phó (`QL_HAT`). |
| Entry | Post-login profile · Home · PatrolHub · Incident detail · Finding · Nghiệm thu · Shell tab (routes đã ship). |
| DoD edit | Profile RO từ Live · seed HAT-* → `QL_HAT` · visibility theo roleCaps · assign CTA chỉ QL_HAT · dueAt gợi ý TT41 editable · **cấm** default `SlaHours=24` · Mobile.Bff only · phone ≤430. |
| DoD keep | Routes public đã ship · peer CRUD owners (home/shell/incident/finding/nghiem-thu) · **không** invent host/tab/route. |
| Out | `new_page` · Excel/DES-GRID · Me* · Mục IV money · chấm 100 điểm · native apps · web-bff · fake caps · demo-json SSOT. |

## 2. packKind confirm

| | |
|--|--|
| packKind | **`list`** (PO confirm) |
| Kind UI | Phone **profile gate + visibility** trên surfaces đã ship — **≠** Kind B desktop catalog |
| Grid AC Kind B | **N/A** — `LinErpListFilterBar` / `DES-GRID-*` **cấm** clone phone |
| Report AC | **N/A** |
| formPattern | Mobile full / sheet peer · **không** ERP Modal/Slideout Kind B |

## 3. changeScope `edit_page` — Current vs New

| Area | Current | New |
|------|---------|-----|
| Menu / Home / hub | Cùng lưới mọi tài khoản | Gate theo `roleCaps` / `packageCode` |
| Seed `HAT-TRUONG` / `HAT-PHO` | `packageHint=MANAGER-RMMS` | `packageHint=QL_HAT` |
| Profile client | thiếu jobTitle / package / caps | RO từ `GET auth/profile` (+ caps derived) |
| Nút **Giao việc xử lý** | quyền rộng / MANAGER | **chỉ** `packageCode=QL_HAT` (`roleCaps.qlHat`) |
| Hạn giao việc | `SlaHours` 24h / nhập tay | gợi ý Phụ lục IV theo hạng mục · editable · **cấm** SLA 24h mặc định |
| Tiền Mục IV / chấm 100 | — | **cấm** (out) |
| Route | đã ship | **giữ** · **cấm** invent |

## 4. CTX / DEM / DI inventory

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/web-rmms-role-gate.md` | feature P0 |
| CTX-02 | `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` | delta HARD |
| CTX-03 | `docs/context/seed/job-title-seed.json` | HAT-* · job codes |
| DEM | — | **N/A** · hash skip · **cấm** crawl DemoRoot |
| DI | — | **no Excel** |
| DA-01 | `specs/_data-analy/features/web-rmms-role-gate-control-hint.md` | controlHint |
| DA-02 | `specs/_data-analy/features/web-rmms-role-gate-real-data.md` | §A+§B PASS |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` | web phone |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` | Integration + Auth · **cấm ERP.*** |
| MAP | `docs/DOMAIN-MAP.md` | **GAP-RG-DM-01** → SA |

## 5. Screens / zones (REQUIRED)

| id | productRoute / zone | Pattern | FormMode | Actions | Delta |
|----|---------------------|---------|----------|---------|-------|
| RG-00 | phone ≤430 | Full chrome | none | — | Android 1-1 · Mobile.Bff |
| RG-01 | profile post-login | Full | none (RO) | show package · vai · caps | **edit** bind profile |
| RG-02 | Master job-title (cite) | peer Full/Modal | Edit | seed `packageHint` HAT-* → `QL_HAT` | **edit** seed/Master |
| RG-03a | Home grid (peer home) | Full | none | tiles gated by roleCaps | **edit** visibility |
| RG-03b | PatrolHub / Shell tab | Full / Tab | none | ẩn NT trên hub TD · tab theo vai | **edit** visibility |
| RG-03c | Incident / báo cáo ca | Full | Create assign (peer) | CTA **Giao việc xử lý** iff qlHat · dueAt hint | **edit** gate + due |
| RG-03d | Finding / Nghiệm thu | Full | peer | Pass/Fail iff tuanKiem · **cấm** assign trên NT | **edit** gate |

**reviewUrl** = (Design next · phone 430 prototype RG-01…03).  
**peerStdUrl** = `http://localhost:9301/web-rmms-role-gate`.  
**DES-GRID / LinErpListFilterBar / Excel** = **N/A** phone.

## 6. Grid list AC (packKind=list · Kind B desktop)

| AC id | Rule | Pass |
|-------|------|------|
| AC-GRID-KIND-B | Shell A–D · Toolbar FULL · `LinErpListFilterBar` · DES-GRID-* | **N/A** — phone gate · **cấm** clone Kind B |
| AC-GRID-01 | Phone: Home/hub **không** desktop filter bar · tiles/tabs gated by `roleCaps` | Live profile |
| AC-GRID-02 | Empty/error → toast in-app · **cấm** `window.alert` · **cấm** fake caps / demo-json | empty/error |
| AC-GRID-03 | Nav peers giữ route đã ship · **cấm** route/tab/icon mới | edit_page |

## 7. Role / profile AC (Delta)

| AC id | Rule | Pass |
|-------|------|------|
| AC-RG-01 | `GET auth/profile` → RO `displayName` · `jobTitleCode` · `jobTitleName` · `packageCode` · `roleCaps.*` · **cấm** FE hardcode map vượt seed/profile | Live + SA DTO |
| AC-RG-02 | Seed/Master: `HAT-TRUONG` + `HAT-PHO` → `packageHint=QL_HAT` · Đội trưởng/Trưởng VP giữ `MANAGER-RMMS` | seed + PUT job-titles |
| AC-RG-03 | `roleCaps.qlHat` = true **iff** `packageCode=QL_HAT` · **cấm** suy từ `MANAGER-RMMS` | HARD |
| AC-RG-04 | Tuần đường (`tuanDuong`): thấy `/tuan-duong*` · `/nhat-ky` ghi · `/van-de/moi` · **không** Giao việc · **không** `/tuan-kiem` lập · **không** `/nghiem-thu/moi` | PLAN-3-VAI |
| AC-RG-05 | Tuần kiểm (`tuanKiem`): ô Tuần kiểm · `/tuan-kiem*` · `/phat-hien*` xác nhận · `/tan-suat` · `/kien-nghi` · **không** mở ca TD · **không** Giao việc · **không** tạo NT | PLAN-3-VAI |
| AC-RG-06 | Nghiệm thu (`nghiemThu`): `/nghiem-thu*` · RO chuỗi đã xác nhận · **không** mở ca/đợt · **không** Giao việc · **không** Xác nhận đạt | PLAN-3-VAI |
| AC-RG-07 | `QL_HAT`: mọi sự cố + báo cáo ca · CTA **Giao việc xử lý** · form assignee/team/hangMuc/dueAt/note · **không** xác nhận hộ · **không** lập NT | PLAN-3-VAI |
| AC-RG-08 | `assign.dueAt`: gợi ý Phụ lục IV theo hạng mục · editable trước giao · **cấm** default `SlaHours=24` | PLAN-3-VAI |
| AC-RG-09 | Hub tuần đường: **ẩn** quick Nghiệm thu · Shell tab highlight theo vai (tuần kiểm **không** thắp tab Tuần đường) | RG-03b |
| AC-RG-10 | Labels `useFormOptions` / copy keys · toast fail · **cấm** invent `role-gate/*` API path | Live cite |

## 8. ControlHint inventory (copy analy)

| uiField | screen | controlHint | notes |
|---------|--------|-------------|-------|
| profile.displayName | RG-01 | Text RO | Auth profile |
| profile.jobTitleCode | RG-01 | Text/Chip RO | job-titles · **không** free text |
| profile.jobTitleName | RG-01 | Text RO | catalog / profile |
| profile.packageCode | RG-01 | Chip RO | `QL_HAT` \| `MANAGER-RMMS` \| `RMMS-TDTK` \| … |
| profile.roleCaps.tuanDuong | RG-01 | Flag RO | derived |
| profile.roleCaps.tuanKiem | RG-01 | Flag RO | derived · code `TUAN-KIEM` |
| profile.roleCaps.nghiemThu | RG-01 | Flag RO | derived · **UNCLEAR-RG-NT-CODE resolved** §9 |
| profile.roleCaps.qlHat | RG-01 | Flag RO | `packageCode==QL_HAT` |
| seed.packageHint | RG-02 | Dropdown | HAT-* → `QL_HAT` |
| home.tile.* | RG-03a | Button/Nav gated | peer home |
| hub.quick.nghiemThu | RG-03b | Button gated | **ẩn** trên hub TD |
| shell.tab.* | RG-03b | Tab gated | theo vai |
| incident.btnAssign | RG-03c | Button primary gated | chỉ qlHat |
| assign.assignee / team / hangMuc | RG-03c | SearchInput / Dropdown | bắt buộc khi mở form |
| assign.dueAt | RG-03c | DateTime | TT41 hint · editable |
| assign.note | RG-03c | Text | free |
| finding.btnPass / btnFail | RG-03d | Button gated | chỉ tuanKiem |
| finding.slaLabel | RG-03d | Chip RO | Trong/Quá hạn · **không** trừ tiền |
| nghiemThu.btnAssign | RG-03d | — | **cấm** hiện |
| nghiemThu.linkPrior | RG-03d | Link RO | xem ca / phiếu đã xác nhận |

## 9. Leave / alert (REQUIRED)

| Surface | Rule |
|---------|------|
| RG-01 profile RO | không dirty · không Leave |
| RG-02 Master job-title (cite) | dirty → **`LeaveConfirmModal`** · **cấm** native `confirm` |
| RG-03c assign form (peer) | dirty → **`LeaveConfirmModal`** · fail API → toast · **cấm** `window.alert` |
| Gate deny / 403 | toast in-app · **cấm** native alert |

## 10. FormMode ↔ API

| Mode | API | Notes |
|------|-----|-------|
| Profile RO | `GET …/auth/profile` | packageCode · roleCaps · **GAP-RG-PROF-01** SA |
| Job titles | `GET/PUT …/integration/job-titles` | seed HAT-* packageHint |
| Assign (cite) | Incident assign / Maintenance WO peers | chỉ khi qlHat |
| Findings (cite) | peer findings confirm | chỉ tuanKiem |
| Home/shell (cite) | peer home/shell | visibility only |

App base: `{BffBase}/mobile-bff/api/v1`. **no MIG** slug mới trừ SA DOMAIN-MAP row. **Cấm** invent controller `role-gate/*`.

## 11. UNCLEAR / GAP → handoff

| id | Owner | Action |
|----|-------|--------|
| UNCLEAR-RG-NT-CODE | PO **resolved** (autoApprove) | Seed hiện **không** có mã `NGHIEM-THU`. **Chốt:** SA thêm row seed `code=NGHIEM-THU` · `name=Công tác nghiệm thu` · `titleGroup=ACCEPT` · `packageHint=RMMS-TDTK` (+ legacyAliases chứa «nghiệm thu» nếu có). Profile derive `roleCaps.nghiemThu` **chỉ** từ catalog/seed codes SA publish · **cấm** FE hardcode alias. |
| GAP-RG-DM-01 | SA | Thêm DOMAIN-MAP row slug `web-rmms-role-gate` (Integration + Auth cite) |
| GAP-RG-PROF-01 | SA | Mở rộng profile DTO `packageCode` / `roleCaps` · FE chỉ bind Live |
| GAP-RG-SEED-01 | Dev/SA | Đổi `packageHint` HAT-TRUONG/HAT-PHO → `QL_HAT` trong seed + Master |

## 12. Handoff → Design

| Packet | Value |
|--------|-------|
| changeScope | `edit_page` · hash skip analy · **cấm** re-scan demo |
| packKind | `list` confirmed · Grid Kind B **N/A** · Report **N/A** |
| zones | RG-00 · RG-01 · RG-02 · RG-03a..d |
| phone | max-width 430 · Android 1-1 |
| controlHint | Copy §8 + analy inventory |
| Leave | LeaveConfirmModal trên dirty Master/assign · **cấm** native |
| peerStdUrl | `http://localhost:9301/web-rmms-role-gate` |
| reviewUrl | Design gen prototype phone |
| labels | useFormOptions |
| Excel/DES-GRID | N/A |
| next | `/agent-design` · roleOnly stop (**GAP-PKT-ROLE-01**) · autoApprove ON khi tới lượt |
| `devSlash` | `/agent-dev` |

## 13. Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `workflowVersion=2026.09.19.02` · `rulesVersion=2026.09.19.7` · `contentHash=sha256:cc33bfbc2361d40d732e6b018e209ccce2e8778cce33f39c7766119237ba4216` · `writtenAt=2026-09-30T16:25:00.000Z` · `autoApprove=ON` · `versionGate=ok`
