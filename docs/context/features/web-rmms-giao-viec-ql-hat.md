# Feature context — web-rmms-giao-viec-ql-hat

> **Slug:** `web-rmms-giao-viec-ql-hat` · **Wave:** Mobile QL_HAT giao việc  
> **Status:** draft → data_analy · **packKind:** `list` · **changeScope:** `edit_page`  
> **Demo:** N/A (**cấm** demo HTML / mock SSOT)  
> **MFE:** `Linm.Web.RMMS.Mobile` · khung phone `max-width` 430px · **cấm** MFE desktop Asset/Gis  
> **BE:** `Linm.RMMS.WebService` + Mobile.Bff `:5202` · **cấm ERP.*** / Domains/Master / web-bff  
> **mfeStdRoute:** `/web-rmms-giao-viec-ql-hat` (queue alias) · **product routes đã ship:** `/van-de` · `/van-de/:id` · `/tuan-duong/lich-su` · form giao · `/cong-viec`  
> **mfeStdUrl:** `http://localhost:9301/web-rmms-giao-viec-ql-hat`  
> **Delta cite:** `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` § List enqueue #8 · **cấm** `new_page` · **cấm** route public mới · **cấm** iOS/Android  
> **Queue:** `/agent-qldb-workflow` · alias `web-rmms-giao-viec-ql-hat` · task `task_46b5e132`

## 1. Mục tiêu

Form **Giao việc xử lý** trên **chi tiết sự cố** và **báo cáo ca** — chỉ package **`QL_HAT`** (`HAT-TRUONG`, `HAT-PHO`). Người giao chọn người nhận, đơn vị bảo dưỡng, hạng mục; hệ thống **gợi ý hạn** theo Thông tư 41/2024 Phụ lục IV (sửa được). Sau giao → tạo work order · theo dõi `/cong-viec`. Danh sách sự cố/báo cáo ca **không lọc theo người tạo**.

## 2. changeScope HARD

| | |
|--|--|
| Scope | `edit_page` · form giao + CTA trên màn đã có (incident detail · báo cáo ca) |
| Cấm | `new_page` · host mới · tab thứ tư · đổi route public đã ship · invent product route slug |
| Peer | `web-rmms-role-gate` (package/caps) · `web-rmms-cam-incident` (CTA) · `web-rmms-work` / estimate (WO Live) |

## 3. Màn / zone (ids)

| Id | Surface | Việc |
|----|---------|------|
| GV-00 | phone ≤430 | Android 1-1 · Mobile.Bff only |
| GV-L-INC | `/van-de` | QL_HAT: **mọi** sự cố · lọc tuyến/loại/trạng thái/mức · **cấm** filter người tạo |
| GV-L-RPT | `/tuan-duong/lich-su` | QL_HAT: mọi báo cáo ca · cùng rule scope |
| GV-D-INC | `/van-de/:id` | Detail RO · nút **Giao việc xử lý** chỉ `QL_HAT` · không Đóng hộ · không hoàn thành hộ |
| GV-D-RPT | báo cáo ca detail (route đã ship) | Nguồn giao từ báo cáo · CTA chỉ `QL_HAT` |
| GV-F | Form giao (full page · DES-MOB-INC-DETAIL) | Người nhận · đơn vị · hạng mục · hạn gợi ý · ghi chú · nguồn sự cố/báo cáo RO |
| GV-W | `/cong-viec` (peer) | Theo dõi sau giao · **cấm** Hoàn thành hộ đơn vị từ form này |

**Out:** route mới · SLA mặc định 24 giờ · tiền Mục IV · chấm 100 điểm · Giao việc ngoài `QL_HAT` · iOS/Android · ERP.* · web-bff

## 4. Vai → Giao việc (HARD)

| Vai / package | Thấy form / CTA Giao việc | Ghi chú |
|---------------|---------------------------|---------|
| `QL_HAT` (`HAT-TRUONG`, `HAT-PHO`) | **yes** · mọi sự cố + báo cáo | **cấm** suy từ `MANAGER-RMMS` |
| Tuần đường | **no** | tạo sự cố peer cam-incident |
| Tuần kiểm | **no** | xác nhận đạt peer finding |
| Nghiệm thu | **no** | chỉ xem RO |
| `MANAGER-RMMS` (Đội trưởng / Trưởng VP) | **no** giao việc | giữ package; không = QL_HAT |

## 5. Form giao — fields

| Ô | Rule |
|---|------|
| Nguồn | sự cố hoặc báo cáo ca · RO |
| Người nhận (`AssigneeName`) | SearchInput users · **bắt buộc** |
| Đơn vị (`TeamName`) | SearchInput đơn vị bảo dưỡng |
| Hạng mục | Dropdown/Search → trigger hạn gợi ý |
| Hạn `DueAt` | gợi ý bảng Phụ lục IV · **editable** trước khi giao |
| `SlaHours` | **cấm** default 24 · SLA = hạn vừa chốt (SA map) |
| Ghi chú | Text optional |
| Submit | `POST maintenance/work-orders` (+ optional `POST incident/.../assign` cite estimate) · chỉ `QL_HAT` |

### Bảng hạn gợi ý (cite PLAN-3-VAI)

| Hạng mục | Thời hạn |
|----------|----------|
| Vá ổ gà | 3 ngày cấp I–II · 5 ngày cấp III–VI |
| Nứt dọc/ngang/mai rùa | 7 ngày mùa mưa · 14 ngày mùa khô |
| Lún lõm / sình lún vượt mức | 10 ngày (không tính ngày mưa ẩm) |
| Vệ sinh / chướng ngại ATGT | 1 giờ nếu nguy hiểm · 7 ngày còn lại |
| Nước đọng mặt đường | ≤ 24 giờ |
| Biển cấm / hiệu lệnh | 1 ngày · biển khác 3 ngày |
| Vạch sơn hư cục bộ | 28 ngày |
| Tồn tại lúc nghiệm thu | ≤ 5 ngày từ văn bản yêu cầu |

## 6. Nguồn SSOT

| Source | Path |
|--------|------|
| Plan delta | `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` § Giao việc QL_HAT · enqueue #8 |
| SCREENS | `docs/plan/web-rmms-mobile/SCREENS.md` · CreateWorkOrderRequest |
| Peer | `web-rmms-role-gate` · `web-rmms-cam-incident` · `web-rmms-work` · `web-rmms-estimate` |
| DOMAIN-MAP | Incident · Maintenance · Patrol · Integration users · Auth cite · **GAP** row slug này |
| BE / BFF | `Linm.RMMS.WebService` · `Linm.RMMS.Mobile.Bff` `:5202` `mobile-bff/api/v1` |

## 7. DoD data-analy

- control-hint + real-data §A+§B · compact handoff · `changeScope=edit_page` ghi rõ.  
- CTA + form fields + hạn TT41 · **cấm** SLA 24h · **cấm** Mục IV tiền.  
- **Cấm** invent controller ngoài Live DOMAIN-MAP cite.

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-30T20:54:10.053Z` |
| mobile | — | — | — |
