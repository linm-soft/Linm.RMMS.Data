# Implement — web-rmms-cam-checkin

> Status: **done** · skillVersion `2026.09.05.03` · task `task_b54ece46` · writtenAt `2026-10-01T00:50:00.000Z`  
> contentHash: `sha256:2ff2873ea06c8d3d8e707c24a142432b3f1e356db42bbb006f594fc6b9f213db`  
> PackKind: **list** · changeScope: **edit_page** · autoApprove: **ON** · e2eQa: **queued QA**

| | |
|--|--|
| Feature | `web-rmms-cam-checkin` |
| Role | `dev` · `/agent-dev` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol · **cấm ERP.*** |
| BFF | Mobile.Bff `:5202` · `mobile-bff/api/v1/patrol/**` |
| productRoute | `/tuan-duong/:id` · `/tuan-duong/:id/diem-tuan` |
| mfeStdUrl | `http://localhost:9301/web-rmms-cam-checkin` (alias only) |
| Step 4b | **skip** — entity/migration none · Live DTO KEEP · DOMAIN-MAP slug CLOSED |

## Notes — edit-web-feature 2026-10-04

- `CheckInSheet`: section **Tuyến hiện tại** — SearchInput `ROAD_ROUTE_LOOKUP_CONFIG` default tuyến ca; hàng **Cột KM | Khoảng cách (m)**.
- Cột KM và Khoảng cách (m) chỉ điền khi đã có điểm check-in cùng tuyến. Khoảng cách GPS / 1000, mét là số dư &lt; 1000. Không cùng tuyến hoặc chưa tính được: ô trống, placeholder `--` / `nhập khoảng cách`.
- Ẩn Tuyến dự kiến và Tuyến check-in thực tế.
- Chưa mở ca: `onSave` tạo/dùng ca `Đang tuần` theo tuyến đã chọn (`loadDefaultPatrolActor` + POST sessions), rồi POST check-in vào ca đó.
- `CreateCheckInAsync`: GPS vẫn đối tuyến ca; `chainageKm` client đã gửi thì không ghi đè bằng GIS.
- `yarn typecheck` (`tsc --noEmit`) tại `Linm.Web.RMMS.Mobile`: PASS.
- 2026-10-05: sau Lưu, `sc-checkin-detail` hiện đủ hàng như chi tiết giám sát (người, mã, tổ, hai tuyến, thời điểm, trạng thái, tọa độ, trong vùng, ảnh, xem bản đồ). Tiêu đề trang giữ «Ghi điểm tuần». `yarn typecheck` PASS.
- 2026-10-05: Cột KM bắt buộc khi Lưu. Form chặn ô trống. `CreateCheckInAsync` trả 422 khi `chainageKm` thiếu hoặc âm. GIS không còn điền cột KM thay client.
- 2026-10-05: Hộp thoại ghim (hub + bản đồ ca) hiện **Cột km gần nhất** — `GET km-posts` theo mã tuyến ca, haversine, lấy 5, cùng công thức pin `/gis/kh-td-tk`. Chỉ để xác nhận. Ô Cột KM trên phiếu vẫn nhập tay.
- 2026-10-05: Mỗi cột km kèm mã tuyến. Đổi tuyến trên hộp thoại thì danh sách cột km tải lại theo tuyến đó. Trang ghi điểm (chụp ảnh) có **Ghim vị trí**: modal Chọn / Hủy / Xem khoảng cách. Chọn điền Cột KM. Xem khoảng cách = haversine từ GPS hiện tại tới cột đang chọn.
- 2026-10-05: Xem khoảng cách mở bản đồ, vẽ đường đi (`routeAlongRoads`, không có thì đoạn thẳng) và dòng khoảng cách. Có đường bộ thì thêm «Theo đường đi».
- 2026-10-05: Dưới 40 km vẽ đường đi, hai ghim đỏ đánh số dùng chung icon sự cố: 1 vị trí hiện tại, 2 cột km. Trên 40 km không vẽ nét; dòng thứ hai là ước lượng quốc lộ = khoảng cách thẳng × 1.3.

## Summary

T-01/T-02: wire `roleCaps` từ `useRoleGateProfile` vào **CheckInSheet** + **PatrolDetailPage**. Tuần đường write · QL_HAT view · TK/NT block. Pattern B GPS + LeaveConfirm (đã Live) giữ nguyên — `save` chỉ `disabled=saving`. CTA `ctaCheckIn` / `endSession` ẩn non-tuần-đường. Không route mới · không CamCheckIn* · không migration.

## Files changed

| File | Change |
|------|--------|
| `src/pages/WebRmmsMobileA/camCheckInAccess.ts` | **new** — `write` / `view` / `block` từ RoleCaps |
| `src/pages/WebRmmsMobileA/CheckInSheet.tsx` | roleGateBanner · view RO · block · leave dirty write-only · save gate |
| `src/pages/WebRmmsMobileA/PatrolDetailPage.tsx` | roleGateBanner · ctaCheckIn · endSession gate · timeline RO |
| `src/pages/WebRmmsMobileA/lookupStatic.ts` | role / CTA labels |
| `src/pages/WebRmmsMobileA/styles.module.css` | `.bannerInfo` |

## AC map

| AC | Result |
|----|--------|
| Tuần đường POST check-ins + ảnh | PASS — write path Live KEEP |
| QL_HAT view · no POST / no save | PASS — viewOnly |
| TK+NT block | PASS — danger banner · no CTA |
| Pattern B · no fake · save=saving | PASS (pre-existing + gate) |
| Leave dirty CI-01 | PASS — write dirty only |
| No new route / CamCheckIn* / ERP.* | PASS |
| CTA + endSession tuần đường only | PASS |
| Timeline QL_HAT OK | PASS |

## FormMode ↔ API (Live KEEP)

| API | Path | Used |
|-----|------|------|
| API-01 | GET `sessions/{id}` | CI-02 |
| API-02 | GET `plan-points` | CI-01 |
| API-03 | GET `check-in-policy` | Pattern B |
| API-04 | GET `check-ins` | timeline |
| API-05 | POST `check-ins` | save write |
| API-06 | files cite | photos |
| API-07 | PUT `session` | endSession |
| API-08 | auth/profile caps | roleCaps |

## Build VERIFY

| Gate | Result |
|------|--------|
| MFE `yarn build` | **PASS** (exit 0 · size warnings only) |
| BE `dotnet build` RMMS.Service.Api | **PASS** (exit 0 · 0 errors) |
| Step 4b migration | **skip** (SA/TL) |
| E2E / start:std | **cấm** ở Dev · queued `/agent-qa*` |

## QA handoff notes (T-03)

1. Role matrix: tuanDuong write · qlHat view banner · TK/NT block banner.
2. Pattern B: deny GPS → banner on Lưu · không fake · Lưu không pre-disable.
3. LeaveConfirm khi dirty CI-01 (write).
4. CI-02: `btn-pat-detail-checkin` / `btn-pat-detail-end` chỉ tuần đường; timeline RO cho QL_HAT.
5. Deep-link product `/tuan-duong/:id/diem-tuan` · không invent CamCheckIn*.

## Debt

- (none) · mfeStdUrl alias queue-only (không mount page mới) · e2e deferred QA
