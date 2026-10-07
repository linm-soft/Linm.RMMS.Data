# Feature context — web-rmms-cam-home

> **Slug:** `web-rmms-cam-home` · **Wave:** Mobile home / hub / shell theo vai  
> **Status:** draft → data_analy · **packKind:** `list` · **changeScope:** `edit_page`  
> **Demo:** N/A (**cấm** demo HTML / mock SSOT)  
> **MFE:** `Linm.Web.RMMS.Mobile` · khung phone `max-width` 430px · **cấm** MFE desktop Asset/Gis  
> **BE:** `Linm.RMMS.WebService` + Mobile.Bff `:5202` · **cấm ERP.*** / Domains/Master / web-bff  
> **mfeStdRoute:** `/web-rmms-cam-home` (alias queue) · **product routes:** `/trang-chu` · `/tuan-duong` · shell tabs  
> **mfeStdUrl:** `http://localhost:9301/web-rmms-cam-home`  
> **Delta cite:** `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` § enqueue #7 · Match source Home/PatrolHub/Shell · Plan #2 #3 #8  
> **Queue:** `/agent-qldb-workflow` · alias `web-rmms-cam-home` · task `task_2f8d86d0`  
> **HARD:** `edit_page` · **cấm** `new_page` · **cấm** route public mới · **cấm** iOS/Android

## 1. Mục tiêu

Ô và tab theo vai trên **HomePage**, **PatrolHubPage**, **WebRmmsShellLayout**. Tài khoản sau login chỉ thấy nghiệp vụ đúng vai. Hub tuần đường **không** có Công tác nghiệm thu. Tab shell highlight theo vai đang mở — `/tuan-kiem` và `/phat-hien` **không** thắp tab Tuần đường khi vai là tuần kiểm.

## 2. changeScope HARD

| | |
|--|--|
| Scope | `edit_page` · Home / PatrolHub / Shell **đã có** |
| Cấm | `new_page` · host mới · tab thứ tư · đổi route public đã ship |
| Peer | `web-rmms-role-gate` (caps) · `web-rmms-home` · `web-rmms-shell` · cam-* forms |

## 3. Màn / zone (ids)

| Id | Surface | Việc |
|----|---------|------|
| CH-00 | phone ≤430 | Android layout 1-1 · Mobile.Bff only |
| CH-HM | `HomePage` `/trang-chu` | Lưới ô theo `roleCaps` · hero quick theo tuần đường |
| CH-HUB | `PatrolHubPage` `/tuan-duong` | Thao tác nhanh — **bỏ** Công tác nghiệm thu |
| CH-SH | `WebRmmsShellLayout` | Tab highlight theo vai · `/tuan-kiem`/`/phat-hien` không thắp Field khi tuần kiểm |

**Out:** route mới · SLA 24h · tiền Mục IV · chấm 100 điểm · nút Giao việc ngoài `QL_HAT` · sửa native.

## 4. Vai → Home / Hub / Shell (SSOT PLAN-3-VAI)

| Vai / package | Home thấy | Hub tuần đường | Shell |
|---------------|-----------|----------------|-------|
| Tuần đường | ô Tuần đường · Vấn đề · Công việc (theo dõi) · **không** ô nghiệm thu · **không** ô Tuần kiểm · **không** Giao việc | mở ca · điểm · lịch sử · **không** quick NT | tab Field = tuần đường |
| Tuần kiểm | ô **Tuần kiểm** → `/tuan-kiem` · xem vấn đề RO · **không** mở ca · **không** Giao việc · **không** tạo NT | **không** vào hub tuần đường như operator | `/tuan-kiem` `/phat-hien` **không** thắp tab Tuần đường |
| Nghiệm thu | ô **Công tác nghiệm thu** · xem vấn đề RO · **không** mở ca/đợt · **không** Giao việc | không hub tuần đường | tab / highlight nghiệm thu khi mở `/nghiem-thu*` |
| `QL_HAT` (`HAT-TRUONG`/`HAT-PHO`) | ô Giao việc (cite) + hub tuần đường nếu còn chức danh tuần đường | xem · giao từ sự cố/báo cáo (peer giao-viec) | như chức danh kèm |

**Cấm** suy Giao việc từ `MANAGER-RMMS`.

## 5. Current GAP (code scan 2026-10-01)

| Surface | Current | New |
|---------|---------|-----|
| Home tiles | một phần `roleCaps` (patrol/tuanKiem/NT/qlHat) · hero Điểm tuần/Ghi SC luôn hiện staff | hero + ô còn lại khớp bảng §4 · tuần đường không thấy ô NT |
| PatrolHub `QUICK` | còn id `nghiem-thu` | **xóa** Công tác nghiệm thu khỏi hub |
| Shell `FIELD_ROOTS` | gom `/tuan-kiem` `/phat-hien` `/nghiem-thu` vào tab Field | tách highlight theo vai · Plan #8 |

## 6. Nguồn SSOT

| Source | Path |
|--------|------|
| Plan delta | `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` |
| Peer role-gate | `docs/context/features/web-rmms-role-gate.md` · caps |
| Peer home/shell | `docs/context/features/web-rmms-home.md` · `web-rmms-shell.md` |
| DOMAIN-MAP | cite `web-rmms-home` · `web-rmms-shell` · Auth/Notification · **GAP** slug `web-rmms-cam-home` |
| BE / BFF | `Linm.RMMS.WebService` · `Linm.RMMS.Mobile.Bff` `:5202` |

## 7. DoD data-analy

- control-hint + real-data `done` · compact handoff  
- `changeScope=edit_page` ghi rõ · packKind `list`  
- Handoff PO khi đủ cả hai artifact

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-30T20:21:14.009Z` |
| mobile | — | — | — |
