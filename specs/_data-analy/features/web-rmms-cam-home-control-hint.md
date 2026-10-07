# Data-analy — controlHint — web-rmms-cam-home

| Field | Value |
|-------|-------|
| feature | `web-rmms-cam-home` |
| title | Trang chủ và tab theo vai |
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
| contentHash | `sha256:4bca94712257e93fa88e3cec4f6bb851b3aa00d7a28508932d46aef12b73441a` |
| analyzedAt | `2026-10-01T02:50:00.000Z` |
| demo | **N/A** |
| realData | `specs/_data-analy/features/web-rmms-cam-home-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · Auth profile cite + Notification chrome · cite Patrol/Incident · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-cam-home` |
| mfeStdRoute | `/web-rmms-cam-home` |
| productRoute | `/trang-chu` · `/tuan-duong` · shell tabs (**đã ship**) |
| taskId | `task_2f8d86d0` |
| phoneFrame | `max-width: 430px` |
| formPattern | Mobile full · Home / Hub / Shell visibility · **không** ERP Modal/Slideout Kind B · **không** form master CRUD mới |
| bff | `Linm.RMMS.Mobile.Bff` · `VITE_MOBILE_API_URL=http://localhost:5202/mobile-bff/api/v1` · **cấm** web-bff |
| deltaCite | `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` § enqueue #7 · Plan #2 #3 #8 |

> Data-analy **đề xuất** controlHint (edit). Design **chốt** control-map + prototype/reviewUrl. SA **chốt** DOMAIN-MAP row (cite home/shell) + giữ profile caps từ role-gate.  
> Nhãn: `useFormOptions()` / copy key — **cấm** hardcode VN. **Cấm** toolbar/export Excel · **cấm** iOS/Android.  
> **HARD:** `changeScope=edit_page` · **cấm** `new_page` · **cấm** route public mới · **cấm** suy `QL_HAT` từ `MANAGER-RMMS` · hub tuần đường **không** Công tác nghiệm thu.

## § Delta Current vs New

| Area | Current | New |
|------|---------|-----|
| changeScope | packet queue ghi `new_page` (sai) | **`edit_page`** · Home/Hub/Shell đã có |
| Home grid | partial `roleCaps` · hero Điểm tuần / Ghi SC luôn staff | ô + hero theo vai PLAN § View · tuần đường **không** ô NT · tuần kiểm thấy ô Tuần kiểm |
| Home `gridAssign` | hiện khi `qlHat` → `/web-rmms-role-gate` | giữ **chỉ** `QL_HAT` · target nav = peer giao-viec / sự cố (Design chốt) · **cấm** MANAGER |
| PatrolHub QUICK | còn `nghiem-thu` | **xóa** Công tác nghiệm thu khỏi hub tuần đường |
| Shell FIELD_ROOTS | `/tuan-kiem` `/phat-hien` `/nghiem-thu` thắp tab Field | tab highlight theo vai · tuần kiểm **không** thắp Tuần đường trên `/tuan-kiem*` `/phat-hien*` |
| Route | — | **giữ** route đã ship · **cấm** invent |
| SLA / tiền | — | **cấm** SLA 24h · **cấm** Mục IV (out of this slug) |

## Sources

| Source | Path | note |
|--------|------|------|
| CTX | `docs/context/features/web-rmms-cam-home.md` | written this run · edit_page |
| PLAN-3-VAI | `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` | enqueue #7 · Plan #2 #3 #8 |
| Peer role-gate | `docs/context/features/web-rmms-role-gate.md` | packageCode / roleCaps |
| Peer home/shell | `web-rmms-home` · `web-rmms-shell` | chrome + zones HM-* |
| Code | `HomePage.tsx` · `PatrolHubPage.tsx` · `WebRmmsShellLayout.tsx` | GAP scan |
| DOMAIN-MAP | cite `web-rmms-home` · `web-rmms-shell` | **GAP-CH-DM-01** slug cam-home chưa có row |
| BFF | Mobile.Bff `:5202` | **cấm** web-bff |

## Screens (ids)

| id | route / zone | surface |
|----|--------------|---------|
| CH-00 | phone | ≤430 · Android 1-1 |
| CH-HM-00 | Home root | `data-zone=HM-00` peer · staff/guest |
| CH-HM-HERO | hero quick | `qaPatrolPoint` · `qaIncidentNew` — gate `tuanDuong` |
| CH-HM-GRID | lưới nghiệp vụ | tiles gated theo caps |
| CH-HM-WALLET | wallet | giữ peer home (asset) |
| CH-HUB-00 | PatrolHub | `/tuan-duong` · session cards |
| CH-HUB-QUICK | thao tác nhanh | **không** NT · giữ reflect/cam/map/history/supervise/offline |
| CH-SH-TAB | TabBar | home · field · incident · work · me — highlight theo vai |

**Out:** `/me*` profile CRUD · new host · Excel · Mục IV · SLA 24h · native · ERP.* · invent CamHomeController.

## ControlHint inventory

| uiField | screen | controlHint | catalogKind / notes |
|---------|--------|-------------|---------------------|
| phoneFrame | CH-00 | Layout | `max-width: 430px` |
| roleCaps.* | CH-HM / CH-HUB / CH-SH | Hidden / Flag RO | cite `useRoleGateProfile` · **cấm** hardcode map vượt seed |
| qaPatrolPoint | CH-HM-HERO | Button/Nav gated | visible iff `tuanDuong` |
| qaIncidentNew | CH-HM-HERO | Button/Nav gated | visible iff `tuanDuong` |
| gridSupervise | CH-HM-GRID | Button/Nav gated | QL_HAT / giám sát cite · ẩn tuần đường thuần nếu PLAN yêu cầu RO-only (PO) |
| gridPatrolMap | CH-HM-GRID | Button/Nav gated | `tuanDuong` → `/tuan-duong` / field |
| gridTuanKiem | CH-HM-GRID | Button/Nav gated | `tuanKiem` → `/tuan-kiem` |
| gridWork | CH-HM-GRID | Button/Nav | Công việc — đơn vị được giao / theo dõi |
| gridIncident | CH-HM-GRID | Button/Nav | Vấn đề — tạo nếu `tuanDuong` · xem nếu vai khác |
| gridAsset | CH-HM-GRID | Button/Nav | Tài sản — giữ peer |
| gridOffline | CH-HM-GRID | Button/Nav | Lưu trữ |
| gridNghiemThu | CH-HM-GRID | Button/Nav gated | **chỉ** `nghiemThu` · **cấm** hiện tuần đường |
| gridAssign | CH-HM-GRID | Button/Nav gated | **chỉ** `qlHat` (`packageCode=QL_HAT`) · **cấm** MANAGER-RMMS |
| hub.quick.nghiemThu | CH-HUB-QUICK | — | **CẤM** · xóa khỏi QUICK |
| hub.quick.* | CH-HUB-QUICK | Button/Nav | reflect · cam · map · history · supervise · offline |
| shell.tab.home | CH-SH-TAB | Tab | luôn |
| shell.tab.field | CH-SH-TAB | Tab gated highlight | tuần đường roots **không** gồm tuan-kiem/phat-hien khi vai tuần kiểm |
| shell.tab.incident | CH-SH-TAB | Tab | vấn đề |
| shell.tab.work | CH-SH-TAB | Tab | công việc |
| shell.tab.me | CH-SH-TAB | Tab | ops/me |
| notifyBadge | CH-HM | Number RO | `GET notification/overview` peer |
| profileName | CH-HM | Text RO | Auth profile peer |

## Filter / grid (desktop HARD)

| | |
|--|--|
| LinErpListFilterBar / DES-GRID-* | **N/A** — phone Mobile |
| toolbar / export Excel | **N/A** |

## GPS / map

| | |
|--|--|
| GPS / map trên Home/Shell | **none** · PatrolHub giữ GPS peer ca · không đổi slug này thành map form |

## GAP / UNCLEAR

| ID | Note |
|----|------|
| GAP-CH-DM-01 | DOMAIN-MAP thiếu row slug `web-rmms-cam-home` → SA cite home/shell hoặc thêm row |
| GAP-CH-HUB-NT | PatrolHub còn QUICK `nghiem-thu` → Dev xóa |
| GAP-CH-SHELL-TAB | FIELD_ROOTS gom tuan-kiem/phat-hien/nghiem-thu → Dev tách theo vai (Plan #8) |
| GAP-CH-HERO | Hero Điểm tuần / Ghi SC chưa gate `tuanDuong` |
| UNCLEAR-CH-ASSIGN-TARGET | `gridAssign` hiện trỏ `/web-rmms-role-gate` — Design/PO chốt deep-link sự cố/giao-viec |
| UNCLEAR-CH-SUPERVISE-VIS | ô Giám sát hiện mọi staff — PO chốt ẩn theo vai tuần đường thuần vs QL_HAT |
| DEP-CH-ROLE | deps `web-rmms-role-gate` cho caps Live |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `workflowVersion=2026.09.19.02` · `rulesVersion=2026.09.19.7` · `contentHash=sha256:4bca94712257e93fa88e3cec4f6bb851b3aa00d7a28508932d46aef12b73441a` · `analyzedAt=2026-10-01T02:50:00.000Z`
