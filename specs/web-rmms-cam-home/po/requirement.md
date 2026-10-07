# PO — Requirement — web-rmms-cam-home

| Field | Value |
|-------|-------|
| feature | `web-rmms-cam-home` |
| title | Trang chủ và tab theo vai |
| packKind | `list` |
| changeScope | `edit_page` |
| status | `confirmed` |
| role | `po` |
| skillId | `agent-po` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.19.7` |
| contentHash | `sha256:4bca94712257e93fa88e3cec4f6bb851b3aa00d7a28508932d46aef12b73441a` |
| demo | **N/A** |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-cam-home` (alias) |
| productRoute | `/trang-chu` · `/tuan-duong` · shell tabs (**đã ship**) |
| mfeStdUrl | `http://localhost:9301/web-rmms-cam-home` |
| phoneFrame | `max-width: 430px` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| bff | `Linm.RMMS.Mobile.Bff` `:5202` · `mobile-bff/api/v1` · **cấm** web-bff |
| deltaCite | `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` § enqueue #7 · Plan #2 #3 #8 |
| analy | control-hint + real-data **done** · hash skip · **cấm** re-scan demo |
| taskId | `task_316b81f9` |
| writtenAt | `2026-10-01T03:00:00.000Z` |
| autoApprove | ON → Design next |

> **HARD:** `edit_page` · **cấm** `new_page` · **cấm** route public mới · **cấm** invent CamHome API · **cấm** SLA 24h · **cấm** Mục IV · **cấm** iOS/Android · **cấm** Excel · nhãn `useFormOptions` / copy key.

## § Goal

Tài khoản sau login chỉ thấy ô Home + thao tác hub tuần đường + highlight tab shell đúng vai (`roleCaps` / `packageCode` từ peer `web-rmms-role-gate`). Hub tuần đường **không** còn Công tác nghiệm thu. `/tuan-kiem*` và `/phat-hien*` **không** thắp tab Tuần đường khi vai tuần kiểm.

## § Pack / leave

| | |
|--|--|
| packKind | `list` (phone visibility matrix — **không** desktop grid CRUD) |
| DES-GRID / LinErpListFilterBar | **N/A** — Mobile 430px |
| Leave | Design (control-map + prototype + reviewUrl) → SA (DOMAIN-MAP cite) → … |
| Out slug | profile CRUD `/me*` · native · web-bff · ERP.* · tab thứ tư · chấm 100 điểm |

## § Screens (ids)

| id | Surface | DoD |
|----|---------|-----|
| CH-00 | phone ≤430 | Android 1-1 · Mobile.Bff only |
| CH-HM-00 | Home `/trang-chu` | GuestHome nếu guest; staff theo matrix |
| CH-HM-HERO | hero quick | `qaPatrolPoint` · `qaIncidentNew` **chỉ** khi `tuanDuong` |
| CH-HM-GRID | lưới ô | theo § Role matrix · **cấm** hardcode vượt seed |
| CH-HM-WALLET | wallet | giữ peer home |
| CH-HUB-00 | PatrolHub `/tuan-duong` | session cards peer · chỉ operator tuần đường / QL_HAT còn chức danh TD |
| CH-HUB-QUICK | thao tác nhanh | **xóa** `hub.quick.nghiemThu` · giữ reflect/cam/map/history/offline · supervise theo § PO quyết |
| CH-SH-TAB | Shell TabBar | highlight theo vai · Plan #8 |

## § Role matrix (AC — Home / Hub / Shell)

| Vai / cap | Home thấy | Home **không** | Hub TD | Shell |
|-----------|-----------|----------------|--------|-------|
| Tuần đường (`tuanDuong`) | ô Tuần đường · Vấn đề (tạo) · Công việc theo dõi · hero Điểm tuần/Ghi SC | ô NT · ô Tuần kiểm · Giao việc · Giám sát | mở ca · điểm · lịch sử · **không** quick NT · **không** supervise | Field = roots tuần đường |
| Tuần kiểm (`tuanKiem`) | ô **Tuần kiểm** → `/tuan-kiem` · xem vấn đề RO | mở ca TD · Giao việc · tạo NT · hero TD | **không** vào hub như operator | `/tuan-kiem*` `/phat-hien*` **không** thắp tab Tuần đường |
| Nghiệm thu (`nghiemThu`) | ô **Công tác nghiệm thu** · xem vấn đề RO | mở ca/đợt · Giao việc | không hub TD | highlight khi `/nghiem-thu*` |
| `QL_HAT` (`packageCode=QL_HAT` · HAT-TRUONG/HAT-PHO) | ô **Giao việc** + Giám sát + hub TD nếu còn chức danh TD | suy từ `MANAGER-RMMS` | xem · deep-link giao từ sự cố | như chức danh kèm |

**Cấm** suy Giao việc / Giám sát từ `MANAGER-RMMS`.

## § PO quyết UNCLEAR (autoApprove)

| ID | Quyết | AC |
|----|-------|-----|
| UNCLEAR-CH-ASSIGN-TARGET | `gridAssign` → **`/van-de`** (list sự cố — QL_HAT giao từ chi tiết; peer `web-rmms-giao-viec-ql-hat`) | **cấm** trỏ `/web-rmms-role-gate` · **cấm** `/cong-viec` làm entry Giao việc (đó là theo dõi đơn vị nhận) |
| UNCLEAR-CH-SUPERVISE-VIS | `gridSupervise` + `hub.quick.supervise` **chỉ** `qlHat` (`QL_HAT`) | tuần đường thuần / tuần kiểm / nghiệm thu **ẩn** ô + quick Giám sát |

## § Grid AC (list pack — phone)

Desktop DES-GRID-* / filter-bar HARD = **N/A**.

| AC-ID | Given | When | Then |
|-------|-------|------|------|
| AC-CH-HERO-01 | staff `tuanDuong=true` | mở Home | thấy hero Điểm tuần + Ghi sự cố |
| AC-CH-HERO-02 | staff `tuanDuong=false` | mở Home | **không** hero Điểm tuần / Ghi SC |
| AC-CH-TILE-TD | chỉ `tuanDuong` | Home | thấy Tuần đường · **không** NT · **không** Tuần kiểm · **không** Giao việc · **không** Giám sát |
| AC-CH-TILE-TK | `tuanKiem` | Home | thấy ô Tuần kiểm → `/tuan-kiem` · **không** Giao việc |
| AC-CH-TILE-NT | `nghiemThu` | Home | thấy ô NT · **không** Giao việc · **không** mở ca |
| AC-CH-TILE-ASSIGN | `packageCode=QL_HAT` | tap Giao việc | navigate `/van-de` |
| AC-CH-TILE-ASSIGN-NEG | không `QL_HAT` (kể cả MANAGER-RMMS) | Home | **không** ô Giao việc |
| AC-CH-SUP-01 | `QL_HAT` | Home / Hub | thấy Giám sát → `/giam-sat` |
| AC-CH-SUP-02 | không `qlHat` | Home / Hub | **không** Giám sát |
| AC-CH-HUB-NT | bất kỳ | PatrolHub QUICK | **không** Công tác nghiệm thu |
| AC-CH-SHELL-08 | vai tuần kiểm trên `/tuan-kiem` hoặc `/phat-hien` | Shell | tab Tuần đường **không** active |
| AC-CH-API | Mobile client | load | chỉ `mobile-bff` · GET auth/profile · notification/overview · cite patrol sessions · **cấm** invent path · toast lỗi · **cấm** window.alert · **cấm** fake caps |

## § Inventory bind (cite analy §B)

Giữ: `profileName` · `notifyBadge` · `roleCaps.*` · tiles gated · `hub.quick.*` trừ NT · `shell.tab.*` · `walletAsset` · `hub.todaySession`.

**Remove bind:** `hub.quick.nghiemThu`.

**Edit:** hero gate `tuanDuong` · `gridAssign` target `/van-de` · supervise chỉ `qlHat` · Shell `FIELD_ROOTS` tách theo vai.

## § GAP handoff

| ID | Owner |
|----|-------|
| GAP-CH-HUB-NT · GAP-CH-SHELL-TAB · GAP-CH-HERO | Dev (sau Design/SA/TL) |
| GAP-CH-DM-01 | SA — DOMAIN-MAP cite `web-rmms-home`/`web-rmms-shell` hoặc thêm row slug |
| DEP-CH-ROLE | deps `web-rmms-role-gate` Live caps |
| UNCLEAR-* | **resolved** this PO |

## § Design handoff

1. control-map zone `CH-*` · phone 430 · prototype + `reviewUrl`
2. Visual: tile visibility states theo matrix · hub QUICK không NT · shell tab active rules
3. Deep-link Giao việc = `/van-de` · Giám sát = `/giam-sat`
4. **Cấm** desktop filter-bar · **cấm** thẻ card trang trí vượt peer home

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `workflowVersion=2026.09.19.02` · `rulesVersion=2026.09.19.7` · `contentHash=sha256:4bca94712257e93fa88e3cec4f6bb851b3aa00d7a28508932d46aef12b73441a` · `writtenAt=2026-10-01T03:00:00.000Z`
