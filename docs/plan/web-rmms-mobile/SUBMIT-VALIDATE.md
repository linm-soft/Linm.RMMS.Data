# RMMS Mobile — submit luôn bật + validate Pattern B

Cite cho `/add-task` · queue `qlbd` · `changeScope=edit_page` · MFE `Linm.Web.RMMS.Mobile`.

**Override:** dòng “toolbar/export theo pack” trong body task **không áp dụng**. Không xuất Excel. Không `new_page`. Không sửa iOS/Android. Không invent API. BFF giữ `VITE_MOBILE_API_URL` → Mobile.Bff `:5202`. Được thêm forward `integration/users` vì Mobile.Bff chưa có; WebService `GET api/v1/integration/users` đã có.

## Rule chung (mọi slug)

SSOT: `Linm.Development.Rules/web-app/skill/erp-form-context/spec/3-validation.md` (Pattern B).

1. Nút submit / Lưu / Tạo / Chấm vào **luôn bật** khi form sẵn sàng. **Cấm** `disabled` vì thiếu required, GPS, ảnh, hoặc `canSave` / `canCreate` / `canDetect`.
2. Chỉ `disabled` khi request **đang chạy** (`saving` / `creating` / `pending`).
3. Lần bấm đầu set `validationAttempted`. Trước đó **cấm** inline error.
4. Fail client: banner `string[]` (mọi lỗi) + thu gọn / đóng + inline dưới field + scroll tới lỗi đầu. **Cấm** một `alert.warning` thay banner.
5. Required đánh dấu trên label. Message lấy `useFormOptions()` / lookup key đã có. **Cấm** hardcode nhãn Việt mới nếu key đã có.
6. Lỗi API (4xx/5xx/mạng): toast. **Cấm** banner cho lỗi API.
7. Nút ảnh / `<input type="file" accept="image/*">`: thêm `capture="environment"`. `LinImageUpload` không có prop `capture` thì không fork package — bật camera qua input local `capture="environment"` hoặc prop component đã forward. Ảnh đã là camera (Photo geo shutter) giữ camera, không đổi sang gallery.
8. GPS deny: bấm submit mới báo (banner hoặc modal quyền đang có). **Cấm** khóa nút trước.

Bỏ qua (không task): Login / LoginSheet (`disabled={pending}`), chat composer, phân trang, Estimate khi `locked`.

## Search control (bổ sung)

### 1. User — danh sách tài khoản

Đã có API, **chưa có** control trên Mobile.

| Lớp | Hiện trạng |
|-----|------------|
| Danh sách | `GET api/v1/integration/users?search=` · `AppUsersController` · `Username` + `FullName` + `Code`. Không có catalog employees riêng. |
| Common | `UserSearchInput` gọi `userService.getUsers` (ERP). **Cấm** gắn nguyên control đó trên RMMS Mobile. |
| Mobile.Bff | Chưa forward `integration/users` (chỉ có `road-routes`, `asset-types`). Thêm forward cùng pattern `RoadRoutesMobileController`. **Cấm** endpoint mới. |
| MFE | Không có `SearchInput` user. Kết ca `receiverName` là `<input>` tự do. Nghiệm thu `assigneeCode` readonly. Mở ca «Người» readonly từ profile. |

Việc: `SearchInput` config gọi `GET /integration/users?search=&page=&pageSize=` (Mobile.Bff). Cột mã = `username` hoặc `code`, cột tên = `fullName`. Không thấy user trong danh sách → hiện `--`, không giữ chuỗi gõ tay.

Gắn picker cho field **chọn người**: Kết ca người nhận, Nghiệm thu người thực hiện. «Người» của ca đang đăng nhập: đối chiếu cùng danh sách; không có thì `--`, không invent tên.

### 2. Tuyến — SearchInput, không seed

`ROAD_ROUTE_LOOKUP_CONFIG` (`src/services/patrol/lookups.ts`) đã gắn Mở ca, Mở tuần kiểm, Lịch sử. API search đã có: Mobile.Bff `integration/road-routes/search`.

Đang sai:

- `ROAD_ROUTE_SEED` hardcode `QL.1`, `QL.7`, `QL.8`, `QL.15`, `HCM` khi API rỗng hoặc lỗi.
- `getDetail` không thấy mã thì trả đúng mã đó, không phải `--`.
- Lọc bỏ `QL.22`.

Việc trên config dùng chung:

- Xóa `ROAD_ROUTE_SEED` và `filterSeed`. API rỗng hoặc lỗi → danh sách rỗng, không seed.
- Bỏ lọc `QL.22`.
- Mã không có trong kết quả search → hiển thị `--`. **Cấm** hiện mã lạ như một tuyến hợp lệ.

Đổi `<input>` tuyến tự do sang `SearchInput` + config trên:

| Form | File |
|------|------|
| Thêm tài sản | `AssetCollectPage.tsx` |
| Camera AI | `AssetAiDetectPage.tsx` |
| Biên bản TK / TD | `BienBanCreateTkPage.tsx` · `BienBanCreateTdPage.tsx` |
| Kiến nghị | `PetitionFormPage.tsx` |
| Nghiệm thu | `NghiemThuFormPage.tsx` |

Màn chỉ đọc tuyến của ca (Check-in, Sự cố, Phản ánh, Camera tuần, Nhận diện, Ảnh GPS): giữ read-only. Mã không có trong catalog → `--`.

## Theo form

| Slug | File | Việc |
|------|------|------|
| `web-rmms-mobile-a` | `src/pages/WebRmmsMobileA/CheckInSheet.tsx` | Bỏ `disabled={!canSave}`. GPS chưa ok → bấm Lưu mới báo. OpenPatrol / OpenInspect chỉ khóa lúc `saving` — giữ. Tuyến đã `SearchInput`: bỏ seed trong `lookups.ts`. Mã không có trong catalog → `--`. «Người» đối chiếu `integration/users`, không có thì `--`. |
| `web-rmms-mobile-b` | `src/pages/WebRmmsMobileB/JournalFormPage.tsx` | Bỏ `disabled={!canSave}` (narrative + GPS). Banner + inline. `LinImageUpload` → capture. |
| `web-rmms-mobile-c` | `FindingFormPage.tsx` · `JournalReviewPage.tsx` · `FindingDetailPage.tsx` | Finding: description, kmFrom, kmTo, hạn, journal line. Review: lệch thì note. Detail: feedback số lượng / xác nhận. Bỏ `disabled` theo required (`!feedbackQty`, `!canConfirm`, `!canSave`). Ảnh → capture. |
| `web-rmms-mobile-d` | `CloseSessionPage.tsx` · `PetitionFormPage.tsx` | Kết ca: người nhận = `SearchInput` users (không input tự do) + ghi chú / lý do tạm dừng. Kiến nghị: tuyến = `SearchInput` road-routes, không gõ tay. Bỏ `disabled={!canSave}` và `return` im khi thiếu field. |
| `web-rmms-asset-collect` | `AssetCollectPage.tsx` | Đã `showErrors` + `capture`. Bỏ `disabled={!canSave}`. Banner đủ tên, loại, tuyến, km, GPS, ảnh. Tuyến đổi sang `SearchInput`; không có trong danh sách → `--`. |
| `web-rmms-asset-ai` | `AssetAiDetectPage.tsx` | Đã `showErrors` + `capture`. Bỏ `disabled={!canDetect}`. Banner ảnh + tuyến + GPS. Tuyến đổi sang `SearchInput`; không có trong danh sách → `--`. |
| `web-rmms-cam-patrol` | `CamPatrolPage.tsx` | `capture` đã có. Bỏ `disabled={!canDetect}`. Confirm chỉ khóa lúc `confirming`. |
| `web-rmms-vis-capture` | `VisCapturePage.tsx` | Bỏ `disabled={!canDetect}` và khóa confirm vì thiếu detection/GPS/offline — bấm mới báo. Giữ khóa lúc `attaching`. |
| `web-rmms-field-reflect` | `FieldReflectPage.tsx` | Bỏ `disabled={!canDetect}` và `disabled={!canCreate}`. Banner phiên, tài sản, GPS, ảnh. |
| `web-rmms-incident` | `IncidentCreatePage.tsx` | Bỏ `disabled={!canCreate}`. Banner tài sản, phiên, GPS. Nút ảnh đang có: capture. |
| `web-rmms-photo-geo` | `PhotoGeoPage.tsx` | Shutter đã là camera. Bỏ `disabled={!canShutter}` / `!canDetect` / `!canUse` vì thiếu dữ liệu. Thiếu quyền camera hoặc GPS → bấm mới báo. |
| `web-rmms-mnt-progress` | `MntProgressPage.tsx` | Bỏ `disabled={ctasDisabled}` trên Cập nhật / Hoàn thành (GPS). Input file thêm `capture="environment"`. |
| `web-rmms-nghiem-thu` | `NghiemThuFormPage.tsx` | Bỏ `disabled={!canSave}`. Thay `alert.warning` required bằng banner: mẫu, tuyến, hiện trường, người thực hiện. Người thực hiện = `SearchInput` users. Tuyến = `SearchInput` road-routes. `LinImageUpload` → capture. |
| `web-rmms-bien-ban` | `BienBanCreateTkPage.tsx` · `BienBanCreateTdPage.tsx` | Bỏ `disabled={!canSave}`. Banner đơn vị, tuyến, km, loại/cờ, GPS hoặc “không có mặt”. Tuyến = `SearchInput` road-routes, không gõ tay. |
| `web-rmms-attendance` | `AttendanceHubPage.tsx` | Bỏ `disabled={!canCheckIn}`. Thiếu đăng nhập / GPS / mạng → bấm Chấm vào mới báo. |

## Bước cuối — `/align-mobile-to-mfe` + Mobile.Bff

**`demo_ref=no_demo`** (đã chốt). Không mở `specs/mobile-p1/ui/prototype/android/index.html` hay `ios/index.html`. SSOT layout = page trong bảng trên, MFE `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile`, khung 430px.

| Giữ | Cấm |
|-----|-----|
| Layout và route đang có của từng form | Thêm tab, ô Home, route mới |
| Icon đã có trong `DemoIcon` | Vẽ `<path>` mới, emoji, `fa-*` |
| Dữ liệu live | Mock list, sửa prototype HTML, sửa iOS/Android, queue `qlbd-mobile` |

`mfeRoot` task phải là `Linm.Web.RMMS.Mobile`. Ghi chú cũ trỏ `Linm.Web.RMMS.Asset` là lệch — bỏ.

Integrate Mobile.Bff, làm sau validate và search control:

1. Mọi request đi `mobileApiBase()` / `VITE_MOBILE_API_URL` (`…/mobile-bff/api/v1`). Shell inject web-bff thì `toMobileBff()` đã rewrite — không gọi web-bff trực tiếp.
2. Tuyến: `GET …/integration/road-routes/search` — Mobile.Bff đã forward. Không seed.
3. User: Mobile.Bff chưa có `integration/users`. Thêm forward tới `GET api/v1/integration/users` (controller cùng kiểu `RoadRoutesMobileController`). Không tạo API mới trên WebService.
4. Xong khi form submit, search user và search tuyến đều 200 qua Mobile.Bff, không 404 web-bff.
