# Implement — web-rmms-incident

> Status: **done** · writtenAt `2026-09-27T12:40:00.000Z` · task `task_74641ae2`  
> skillVersion: `2026.09.05.03` · packKind: `list` · autoApprove: ON  
> role: `/agent-dev` · **cấm** e2e / `yarn start:std` (queued QA)

| | |
|--|--|
| Feature | `web-rmms-incident` |
| changeScope | `edit_page` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/van-de` · `/van-de/moi` · `/van-de/:id` |
| mfeStdUrl | `http://localhost:9301/van-de/moi` |
| productRoute | `/incident` · `/incident/new` · `/incident/:id` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `mobile-bff/api/v1` · Incident (+ Patrol / Integration / AiVision) |
| Step 4b | **skip** · API/entity/migration **none** (SA FE-only · T-BE N/A) |
| build | MFE `yarn build` **PASS** · BE `dotnet build` **PASS** |
| deltaCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` · `IncidentCreatePage` |

## Delivered (Pattern B · edit_page)

| id | DoD |
|----|-----|
| T-01…T-06 | Prior Live INC-L/N/D **kept** · no regress |
| T-UI-VAL-B-01 | Bỏ `disabled={!canCreate}` · `disabled={creating}` only · `validate.banner` string[] on click · `validationAttempted` |
| T-UI-ACC-01 | Banner keys useFormOptions/lookup: asset→`incident.pick.title` · session→`incident.session.empty` · GPS→`incident.gps.deny` · offline→`incident.offline` · dismiss key |
| T-UI-GPS-B-01 | GPS deny **on-submit** (+ modal) · CTA không khóa vì GPS · no auto-modal on load |
| T-UI-ALIGN-01 | SSOT `IncidentCreatePage` · modes `?gps=deny` · `?nosession=1` · `?miss=1` · **cấm** tab/route/icon mới · **cấm** native |
| T-BE | N/A |
| T-QA-VAL-B-01 | queued `/agent-qa*` only |

## Files (slim)

- `src/pages/WebRmmsIncident/IncidentCreatePage.tsx` — Pattern B create/detect validate
- `src/pages/WebRmmsIncident/styles.module.css` — bannerDanger / bannerList / fieldError
- `src/pages/WebRmmsIncident/lookupStatic.ts` — `incident.banner.dismiss`

## APIs (unchanged · Mobile.Bff)

- `GET/POST /incident/incidents` · `GET …/{id}` · `POST …/{id}/close`
- `GET /patrol/sessions` · `GET /integration/asset-types`
- `POST /ai-vision/uploads/*` · `POST /ai-vision/detect`

## Verify

- `yarn build` (MFE) — **PASS** (size warnings only) · chunk `van-de`
- `dotnet build` (WebService.sln) — **PASS** · 0 errors
- Step 4b — **N/A** (no API/DTO/entity/migration)
- E2E — **queued** `/agent-qa*` · not run in Dev

## Notes — giao việc từ sự cố (2026-09-27)

- `entry.assign` → `/cong-viec?incidentId={id}` (`paths.workFor`)
- WORK-L lọc `incidentId` (API + client) · hub new → `/uoc-luong?incidentId=&entry=work`
- Parent WO = cột `IncidentId` · **cấm** `parentId`

## Notes — ảnh list + chi tiết (2026-09-28)

- INC-L thumb 72×72 bên phải thẻ: `mediaIds[0]` qua `photoGeoEndpoint.getObject` · `+N` · rỗng «Chưa có ảnh» (`incident.photo.none`)
- INC-D gallery trước Peer: mọi id · 1 ảnh full · ≥2 lưới 2 cột · label `incident.detail.photos`
- Bản đồ sự cố tab **Chi tiết**: dòng Trạng thái · Thời gian · Tuyến · KM · Mức · Định vị · Người báo · gallery ảnh (`GET incidents/{id}`) · **cấm** lặp list điểm trên tab Chi tiết
- **Cấm** pin / cache khớp phiên tuần đường — sự cố không có `photoPins`
- DTO không đổi · `MediaIds` đã có trên GET list và GET `{id}`

## Notes — spinner bản đồ sự cố (2026-10-05)

- Tab Bản đồ sự cố: `overlayLoading` trong lúc `GET` GeoJSON `incidents` · sheet hiện spinner (`sheet.loading`)
- `sheet.emptyList` và hint lớp trống chỉ sau khi request xong · request cũ không ghi đè request mới
- Verify: `yarn typecheck` trong `Linm.Web.RMMS.Mobile`

## Notes — nhân viên theo tài khoản (2026-10-06)

- Ô Nhân viên trên form tạo: readonly, giá trị `caller` của `GET patrol/actors` (mã + họ tên). Không mở danh sách.
- `rmms_users.HideFromSearch`: search (`GET integration/users`, `GET patrol/actors` items) bỏ dòng đã đánh dấu. `GET {id}` và `GET integration/users/me` vẫn trả hồ sơ. `caller` vẫn là tài khoản đang đăng nhập.
- Verify: `yarn typecheck` trong `Linm.Web.RMMS.Mobile` · `dotnet build` API.

## Notes — tên tuyến + field có cấu trúc (2026-10-06)

- Chỗ hiện tuyến dùng tên danh mục (`Đường Hồ Chí Minh (Phú Thọ)`), không hiện mã `QL.HOCHIMINH-PHUTHO`. Mã giữ ở `RouteCode`.
- Loại lưu cột `Kind`. Hạng mục ở `rmms_incident_checks`. Pin ảnh ở `rmms_incident_pins`. Mô tả chỉ còn ghi chú. Lý trình giữ `KmStart` / `KmEnd` dạng `numeric(12,3)` (100.250 = Km 100 + 250m). Chữ lý trình cũ được đổi sang số khi chạy migration.
- `Seed_IncidentRawSplit` tách mọi dòng checklist và `@@pins` đang nằm trong `Description` sang bảng con, rồi ghi lại mô tả chỉ còn ghi chú.
- Verify: `yarn typecheck` · `dotnet build` API · migration `Schema_IncidentStructured`.

## Notes — nhận diện + bộ lọc list/bản đồ (2026-10-06)

- Banner «Nhận diện sự cố» mở `/van-de/moi`, cùng đích với nút +.
- Bộ lọc sheet: tuyến, loại (Hư/Hỏng gộp Damage + Broken, và Mất), trạng thái, từ ngày–đến ngày (ngày ICT trên `RequestedAt`, để trống = không giới hạn). Session `rmms.incident.listFilter`. Mặc định tất cả. Áp dụng gửi `routeName`, `incidentType`, `status`, `fromDate`, `toDate` cho list và GeoJSON `incidents` (kèm severity của chip). Không lọc trên client.
- Tuyến khớp mã hoặc tên catalog. Loại khớp `IncidentType` hoặc tiêu đề chứa nhãn loại.

## Notes — mã kèm mô tả (2026-10-06)

- Thẻ danh sách: sau mã sự cố hiện ghi chú người dùng. Checklist và `@@pins` không hiện trên dòng mã.
- Tạo sự cố: ô mô tả bắt buộc, nhãn có dấu *. API từ chối khi description không còn dòng ghi chú sau khi bỏ checklist và pin.
- Form tạo không còn nút «Lưu nháp mất sóng». Khi `navigator` báo offline và đang ở form, bản ghi được đưa vào hàng đợi offline (một lần cho mỗi lần mất sóng, cập nhật nếu vẫn offline). Tạo thành công thì xóa mục vừa xếp hàng.

## Notes — tab active + người phát hiện (2026-10-06)

- Segment Danh sách / Bản đồ sự cố: class active thắng `.seg > button` — chữ và gạch chân primary.
- Thẻ list, chi tiết, sheet bản đồ: **Người phát hiện sự cố** (`reporterName`) và **Số điện thoại** (`reporterPhone`) · icon phone mở `tel:` để gọi xác nhận.
- GET `incidents/{id}` hiện không có `reporterName` / `phone`. Tên trên payload là `assigneeName`. Phone là `rmms_users.Phone`, trả về `reporterPhone` khi khớp `userId` hoặc `employeeCode` / `assigneeCode`. UI tên: `reporterName` hoặc `assigneeName`.
- Verify: `yarn typecheck` trong `Linm.Web.RMMS.Mobile` · `dotnet build` API.

## Notes — chi tiết lý trình (2026-10-07)

- Chi tiết bind `chainageSpanText(kmStart, kmEnd)` rồi `chainageKmOnly`, cùng list. Số `numeric(12,3)` không bị `isChainage` loại thành `—`.
- Verify: `yarn typecheck` trong `Linm.Web.RMMS.Mobile`.

## Notes — lọc mặc định hôm nay (2026-10-07)

- List và bản đồ: `from`/`to` mặc định là ngày ICT (`ictDayKey`). Session thiếu ngày thì điền hôm nay. Nút Hôm nay ghi cả hai ngày rồi gửi `fromDate`/`toDate`. Tuyến, loại, trạng thái trong sheet giữ nguyên.
- Verify: `yarn typecheck` trong `Linm.Web.RMMS.Mobile`.

## Notes — vị trí 2 dòng + icon ngày (2026-10-06)

- Thẻ list: dòng 1 tên tuyến (`routeName`), dòng 2 lý trình Km (bỏ lặp tên tuyến). Icon lịch cạnh `requestedAt`.

## Debt / note

- GAP-PGC-BE-01 Lat MIG deferred · HasGps only
- Ảnh form tạo: `IncidentCaptureSheet` + `RouteCaptureControl` `mode=multiple` · purpose `photo-geo-capture` · entity `incident`
- Nút sheet chỉ Hủy / Lưu · Lưu copy preview rồi gắn `MediaIds` và đóng về `/van-de/moi`
- Nhận diện AI trên form tạo: để sau · **cấm** mở lại `openPhotoGeoCapture` cho sự cố
- Chi tiết: `RouteCaptureControl` `mode=view` hiện pin + định vị / khoảng cách / vật thể / tuyến phía trên bản đồ
- Tuyến chỉ khi người dùng chọn hoặc tuyến ca nằm trong 200 m · chưa xác định thì `RouteName`/`RouteCode` để trống · màn hình hiện `--` · Km không copy mã tuyến
- Create/Update sự cố không đối chiếu `RoadRoutes` · mọi mã tuyến đều lưu được
- Peer INC-V/C/E full screens OOS
