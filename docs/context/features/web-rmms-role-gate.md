# Feature context — web-rmms-role-gate

> **Slug:** `web-rmms-role-gate` · **Wave:** Mobile role / package gate  
> **Status:** draft → data_analy · **packKind:** `list` · **changeScope:** `edit_page`  
> **Demo:** N/A (**cấm** demo HTML / mock SSOT)  
> **MFE:** `Linm.Web.RMMS.Mobile` · khung phone `max-width` 430px · **cấm** MFE desktop Asset/Gis  
> **BE:** `Linm.RMMS.WebService` + Mobile.Bff `:5202` · **cấm ERP.*** / Domains/Master / web-bff  
> **mfeStdRoute:** `/web-rmms-role-gate` · **mfeStdUrl:** `http://localhost:9301/web-rmms-role-gate`  
> **Delta cite:** `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` · **cấm** new_page · **cấm** route mới · **cấm** iOS/Android  
> **Queue:** `/agent-qldb-workflow` · alias `web-rmms-role-gate` · task `task_e58600c5`

## 1. Mục tiêu

Sau login, **profile** mang package + vai theo chức danh. Tài khoản chỉ thấy nghiệp vụ đúng vai trên form camera / hub đã ship. Package **`QL_HAT`** chỉ cho **`HAT-TRUONG`** và **`HAT-PHO`** (nút **Giao việc xử lý**). **Cấm** suy giao việc từ `MANAGER-RMMS`.

## 2. changeScope HARD

| | |
|--|--|
| Scope | `edit_page` · form camera / shell / home **đã có** |
| Cấm | `new_page` · host mới · tab thứ tư · đổi route public đã ship |
| Peer enqueue | `web-rmms-cam-*` · `web-rmms-cam-home` · `web-rmms-giao-viec-ql-hat` (PLAN-3-VAI list) — slug này = **Profile gate** |

## 3. Màn / zone (ids)

| Id | Surface | Việc |
|----|---------|------|
| RG-00 | phone ≤430 | Android layout 1-1 · Mobile.Bff only |
| RG-01 | Profile sau login | `GET auth/profile` → `jobTitleCode` · `packageCode` · roleCaps |
| RG-02 | Seed chức danh | `HAT-TRUONG`/`HAT-PHO` → `packageHint=QL_HAT` · Đội trưởng/Trưởng VP giữ `MANAGER-RMMS` |
| RG-03 | Gate consumers (cite) | Home grid · PatrolHub · Incident detail · Finding · Nghiệm thu · Shell tab — **ẩn/hiện theo RG-01** |

**Out:** route mới · SLA mặc định 24 giờ · công thức tiền Mục IV · màn chấm 100 điểm · sửa native iOS/Android · ERP.* 

## 4. Vai → thấy / không thấy (SSOT PLAN-3-VAI)

| Vai / package | Thấy | Không thấy |
|---------------|------|------------|
| Tuần đường (`TUAN-DUONG` …) | `/tuan-duong*` · `/nhat-ky` ghi · `/van-de/moi` | **Giao việc** · `/tuan-kiem` · `/phat-hien` lập · `/nghiem-thu/moi` |
| Tuần kiểm (`TUAN-KIEM` …) | ô Tuần kiểm · `/tuan-kiem*` · `/phat-hien*` xác nhận · `/tan-suat` · `/kien-nghi` | mở ca tuần đường · **Giao việc** · tạo nghiệm thu |
| Nghiệm thu | `/nghiem-thu*` · xem RO chuỗi trước | mở ca/đợt · **Giao việc** · Xác nhận đạt |
| `QL_HAT` | mọi sự cố + báo cáo ca · **Giao việc xử lý** · hạn gợi ý Phụ lục IV (sửa được) | xác nhận hoàn thành hộ · lập nghiệm thu · SLA 24h cố định |

## 5. Thời hạn / tiền (HARD)

- Hạn gợi ý theo Thông tư 41/2024 Phụ lục IV (bảng PLAN-3-VAI) · người giao sửa trước khi giao.  
- **Cấm** `SlaHours=24` mặc định.  
- **Cấm** công thức tiền khấu trừ Mục IV (bản trích chưa đủ) · chấm kỳ = sau.

## 6. Nguồn SSOT

| Source | Path |
|--------|------|
| Plan delta | `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` |
| Seed chức danh | `docs/context/seed/job-title-seed.json` |
| Peer home/shell | `docs/context/features/web-rmms-home.md` · `web-rmms-shell.md` |
| DOMAIN-MAP | Integration `job-titles` · Auth profile cite · Patrol/Incident/Maintenance consumers · **GAP** slug `web-rmms-role-gate` |
| BE / BFF | `Linm.RMMS.WebService` · `Linm.RMMS.Mobile.Bff` `:5202` `mobile-bff/api/v1` |

## 7. DoD data-analy

- control-hint + real-data §A+§B · compact handoff · `changeScope=edit_page` ghi rõ.  
- Profile fields + package `QL_HAT` seed delta cite.  
- **Cấm** invent Auth/JobTitle controller path ngoài DOMAIN-MAP / Live cite.

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-30T17:16:34.449Z` |
| mobile | — | — | — |
