# Data-analy — controlHint — web-rmms-role-gate

| Field | Value |
|-------|-------|
| feature | `web-rmms-role-gate` |
| title | Quyền QL_HAT và vai theo chức danh |
| packKind | `list` |
| changeScope | `edit_page` |
| mode | `feature_context` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.19.7` |
| versionGate | `ok` |
| contentHash | `sha256:cc33bfbc2361d40d732e6b018e209ccce2e8778cce33f39c7766119237ba4216` |
| analyzedAt | `2026-09-30T16:08:25.000Z` |
| demo | **N/A** |
| realData | `specs/_data-analy/features/web-rmms-role-gate-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · Integration `job-titles` + Auth profile cite · Patrol/Incident/Maintenance consumers · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-role-gate` |
| mfeStdRoute | `/web-rmms-role-gate` |
| productRoute | profile gate · consumers trên route **đã ship** (`/trang-chu`, `/van-de`, …) |
| taskId | `task_e58600c5` |
| phoneFrame | `max-width: 430px` |
| formPattern | Mobile full · profile + visibility gates · **không** ERP Modal/Slideout Kind B · **không** form master CRUD mới |
| bff | `Linm.RMMS.Mobile.Bff` · `VITE_MOBILE_API_URL=http://localhost:5202/mobile-bff/api/v1` · **cấm** web-bff |
| deltaCite | `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` |
| seedCite | `docs/context/seed/job-title-seed.json` |

> Data-analy **đề xuất** controlHint (edit). Design **chốt** control-map + prototype/reviewUrl. SA **chốt** DOMAIN-MAP row + profile DTO.  
> Nhãn: `useFormOptions()` / copy key — **cấm** hardcode VN. **Cấm** toolbar/export Excel · **cấm** iOS/Android.  
> **HARD:** `changeScope=edit_page` · **cấm** `new_page` · **cấm** route public mới · **cấm** suy `QL_HAT` từ `MANAGER-RMMS`.

## § Delta Current vs New

| Area | Current | New |
|------|---------|-----|
| changeScope | App chưa lọc menu theo vai (PLAN Match source) | `edit_page` · gate theo profile |
| `HAT-TRUONG` / `HAT-PHO` seed | `packageHint=MANAGER-RMMS` | `packageHint=QL_HAT` |
| Profile client | thiếu `jobTitle` / `packageCode` / roleCaps | RO từ `GET auth/profile` (+ caps derived) |
| Nút **Giao việc xử lý** | hiện theo quyền rộng / MANAGER | **chỉ** `packageCode=QL_HAT` |
| Home / hub / shell | cùng lưới mọi tài khoản | ẩn ô & tab theo vai tuần đường / tuần kiểm / nghiệm thu |
| Hạn giao việc | `SlaHours` 24h / nhập tay | gợi ý Phụ lục IV theo hạng mục · sửa được · **cấm** SLA 24h mặc định |
| Tiền Mục IV | — | **cấm** (out of scope) |
| Route | — | **giữ** route đã ship · **cấm** invent |

## Sources

| Source | Path | note |
|--------|------|------|
| CTX | `docs/context/features/web-rmms-role-gate.md` | written this run · edit_page |
| PLAN-3-VAI | `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` | `e064658e…` · delta HARD |
| Seed | `docs/context/seed/job-title-seed.json` | HAT-* → QL_HAT delta |
| Peer | `web-rmms-home` · `web-rmms-shell` · `web-rmms-incident` · `job-title` | consumers / catalog |
| DOMAIN-MAP | Integration `job-titles` · Auth cite · Patrol/Incident/Maintenance | **GAP-RG-DM-01** slug chưa có row |
| BFF | Mobile.Bff `:5202` | **cấm** web-bff |

## Screens (ids)

| id | route / zone | surface |
|----|--------------|---------|
| RG-00 | phone | ≤430 · Android 1-1 |
| RG-01 | profile post-login | package + vai + caps RO |
| RG-02 | seed / Master job-title (cite) | packageHint edit HAT-* |
| RG-03a | Home grid (cite peer) | ô theo vai |
| RG-03b | PatrolHub / Shell tab (cite) | bỏ NT khỏi hub tuần đường · tab theo vai |
| RG-03c | Incident / báo cáo ca (cite) | CTA **Giao việc xử lý** chỉ QL_HAT |
| RG-03d | Finding / Nghiệm thu (cite) | xác nhận chỉ tuần kiểm · NT không giao việc |

**Out:** `/me*` · new host · Excel · Mục IV money · SLA 24h · native apps · ERP.*.

## ControlHint inventory

| uiField | screen | controlHint | catalogKind / notes |
|---------|--------|-------------|---------------------|
| profile.displayName | RG-01 | Text RO | Auth profile |
| profile.jobTitleCode | RG-01 | Text RO / Chip | cite Integration job-titles · **không** free text |
| profile.jobTitleName | RG-01 | Text RO | from catalog / profile |
| profile.packageCode | RG-01 | Chip RO | `QL_HAT` \| `MANAGER-RMMS` \| `RMMS-TDTK` \| … · **cấm** map MANAGER→Giao việc |
| profile.roleCaps.tuanDuong | RG-01 | Flag RO | derived chức danh tuần đường |
| profile.roleCaps.tuanKiem | RG-01 | Flag RO | derived chức danh tuần kiểm |
| profile.roleCaps.nghiemThu | RG-01 | Flag RO | derived chức danh nghiệm thu · **UNCLEAR-RG-NT-CODE** nếu seed chưa có mã riêng |
| profile.roleCaps.qlHat | RG-01 | Flag RO | true iff `packageCode=QL_HAT` |
| seed.packageHint | RG-02 | Dropdown / LOOKUP_STATIC | job-title Master · giá trị `QL_HAT` cho HAT-TRUONG/HAT-PHO |
| home.tile.* | RG-03a | Button/Nav gated | visible iff roleCap · peer web-rmms-home / cam-home |
| hub.quick.nghiemThu | RG-03b | Button gated | **ẩn** trên hub tuần đường |
| shell.tab.* | RG-03b | Tab gated | highlight theo vai · `/tuan-kiem` không thắp tab Tuần đường khi vai tuần kiểm |
| incident.btnAssign | RG-03c | Button primary gated | label key «Giao việc xử lý» · chỉ `qlHat` |
| assign.assignee | RG-03c | SearchInput | users catalog · bắt buộc khi mở form giao |
| assign.team | RG-03c | SearchInput | đơn vị bảo dưỡng |
| assign.hangMuc | RG-03c | SearchInput / Dropdown | hạng mục → gợi ý hạn |
| assign.dueAt | RG-03c | DateTime | gợi ý Phụ lục IV · **editable** · **cấm** default 24h SLA |
| assign.note | RG-03c | Text | free |
| finding.btnPass / btnFail | RG-03d | Button gated | chỉ `tuanKiem` |
| finding.slaLabel | RG-03d | Chip RO | Trong hạn / Quá hạn vs `dueAt` · **không** trừ tiền |
| nghiemThu.btnAssign | RG-03d | — | **cấm** hiện |
| nghiemThu.linkPrior | RG-03d | Link RO | xem ca / phiếu đã xác nhận |

## Filter / grid (desktop HARD)

| | |
|--|--|
| LinErpListFilterBar / DES-GRID-* | **N/A** — phone Mobile |
| toolbar / export Excel | **N/A** |

## GPS / map

| | |
|--|--|
| GPS / map trên RG-01 | **none** · peer camera forms giữ GPS riêng |

## GAP / UNCLEAR

| ID | Note |
|----|------|
| GAP-RG-DM-01 | DOMAIN-MAP thiếu row slug `web-rmms-role-gate` → SA thêm (Integration + Auth cite) |
| GAP-RG-PROF-01 | Profile Live có thể chưa trả `packageCode` / roleCaps → SA mở rộng DTO · **cấm** FE hardcode |
| UNCLEAR-RG-NT-CODE | Seed chưa có mã `NGHIEM-THU` riêng — PO/SA map chức danh → cap nghiệm thu |
| GAP-RG-SEED-01 | Đổi `packageHint` HAT-* trong seed + Master job-title |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `workflowVersion=2026.09.19.02` · `rulesVersion=2026.09.19.7` · `contentHash=sha256:cc33bfbc2361d40d732e6b018e209ccce2e8778cce33f39c7766119237ba4216` · `analyzedAt=2026-09-30T16:08:25.000Z`
