# Implement — màn mobile web Tuần đường / Tuần kiểm

> **Ngày:** 2026-09-24  
> **App:** `Linm.Web.RMMS.Mobile` · khung phone · `max-width` 430px  
> **API:** Mobile.Bff `:5202` · prefix `mobile-bff/api/v1`  
> **Gap:** [`GAP-TUAN-DUONG-TUAN-KIEM.md`](GAP-TUAN-DUONG-TUAN-KIEM.md)  
> **Màn app cũ** (sự cố, tài sản, chấm công, cá nhân): [`SCREENS.md`](SCREENS.md) — file này không viết lại.

Nhãn UI qua `useFormOptions()` / copy key. Bảng dưới là nghĩa field, không phải chuỗi hardcode.

API ghi **Live** là controller đang có. API ghi **Mới** chưa có route — làm entity + `Schema_*` rồi mới nối form. Đợt A chạy được với API Live.

## Thứ tự màn

| Đợt | Màn |
|-----|-----|
| A | TD-00 hub · TD-01 ca tuần đường · TD-02 mở ca · TD-03 check-in · TD-07 lịch sử · TK-00 hub tuần kiểm · TK-01 mở đợt |
| B | TD-04 sổ trong ca · TD-05 dòng nhật ký |
| C | TK-02 danh mục tồn tại · TK-03 phiếu · TK-04 đối chiếu · TK-05 kiểm tra lại |
| D | TD-06 kết ca / bàn giao / tạm dừng · TK-03 nút giao việc và kiến nghị · TK-06 sổ kiến nghị |
| E | TK-07 kế hoạch tần suất |

## Dùng chung

| Việc | Cách |
|------|------|
| Tuyến | `GET integration/road-routes/search` · mã có trong `road-routes` |
| Ảnh | `POST files/init` → `PUT files/{id}/object` → `POST files/commit` → lưu guid. Xem `GET files/{id}/object` + JWT |
| GPS | `navigator.geolocation`. Deny thì chặn nút cần tọa độ. Cấm tọa độ mẫu |
| Ca | `GET patrol/sessions?status=Đang tuần&page=1&pageSize=50` rồi lọc `PatrolType` trên client |
| Người | `AssigneeCode` / tên từ `GET auth/profile` |

`CreatePatrolSessionRequest` Live: `UserName` · `Route` · `PatrolType` (`Tuần đường` \| `Tuần kiểm`) · `Status` · `PlannedDate` · `StartedAt` · `CheckInCount` · `CoveragePercent` · `OfflineQueued` · `Note` · `MediaIds`.

---

## TD-00 — Hub Field

| | |
|--|--|
| Route | `/field` |
| Đợt | A |
| Ai | Mọi user đã login trên tab Field |

**Bố cục trên → dưới**

1. Thanh: tiêu đề tab Field · nút sync (→ `/field/offline`) · nút thông báo (→ `/ops`).
2. Hai cửa lớn: **Tuần đường** → `/field/tuan-duong` · **Tuần kiểm** → `/field/tuan-kiem`.
3. Nếu có ca `Đang tuần` đúng loại: dòng phụ «Đang tuần · {Route} · {Code}» trên đúng cửa.
4. Lưới việc khác giữ từ app: chấm công, lịch sử, nghiệm thu, camera, phản ánh. Không nhét vào hai cửa trên.

**GPS:** không. **API Live:** `GET patrol/sessions`.

**Xong khi:** bấm từng cửa ra đúng route. Ca tuần kiểm không hiện trên cửa tuần đường.

---

## TD-01 — Ca tuần đường

| | |
|--|--|
| Route | `/field/tuan-duong` |
| Đợt | A |
| Ai | Nhân viên tuần đường (BDTX) |

**Không ca `Đang tuần` + `PatrolType=Tuần đường`**

- Empty: «Chưa có ca». Nút **Mở ca** → TD-02.
- Nút phụ **Lịch sử** → TD-07.

**Đang có ca**

| Vùng | Nội dung |
|------|----------|
| Header | `Code` · tuyến · trạng thái `Đang tuần` · giờ `StartedAt` |
| Việc chính | **Check-in** → TD-03 · **Ghi nhật ký** → TD-05 · **Sổ trong ca** → TD-04 |
| Phụ | Bản đồ `/field/map` · Camera `/field/cam` · Phản ánh `/field/reflect` |
| Đáy | **Kết ca** → TD-06 |

**API Live:** `GET patrol/sessions` lọc Đang tuần + Tuần đường · `GET patrol/sessions/{id}`.

**GPS:** không trên hub. Check-in và dòng nhật ký mới lấy GPS.

---

## TD-02 — Mở ca tuần đường

| | |
|--|--|
| Route | `/field/tuan-duong/mo-ca` |
| Đợt | A |
| Ghi | `POST patrol/sessions` **Live** |

| Field | Bắt buộc | Bind |
|-------|----------|------|
| Tuyến | yes | `Route` |
| Chiều | yes trên UI | `Note` prefix `chieu=` đến khi có cột · giá trị `chieu-di` \| `chieu-ve` \| `hai-chieu` |
| Người | yes | `UserName` từ profile, readonly |
| Loại | khóa | `PatrolType=Tuần đường` |
| Ngày | yes | `PlannedDate` hôm nay |
| Giờ bắt đầu | yes | `StartedAt` now UTC |
| Trạng thái | khóa | `Đang tuần` |
| CheckInCount / Coverage | khóa | `0` |

| Nút | Việc |
|-----|------|
| Mở ca | POST · thành công về TD-01 với id ca |
| Hủy | về TD-00 |

Đã có ca Đang tuần cùng user + tuyến + loại: không mở ca thứ hai, đưa về TD-01.

**GPS:** không chặn mở ca. Có fix thì ghi lat/lng vào `Note` dạng `startLat,startLng` đến khi có cột — đợt D chuyển sang field riêng, không bịa nếu deny.

---

## TD-03 — Check-in (có mặt trên tuyến)

| | |
|--|--|
| Route | sheet trên `/field/tuan-duong/check-in` |
| Đợt | A |
| Ghi | `POST patrol/sessions/{id}/check-ins` **Live** |

Giữ đúng [`SCREENS.md`](SCREENS.md) mục sheet check-in. Không thêm loại hư hỏng vào sheet này.

| Field | Bind |
|-------|------|
| Điểm kế hoạch | `planPointLabel` · `GET …/plan-points` chưa có → để trống và ghi GAP, cấm tọa độ giả |
| Tuyến | `route` từ ca |
| GPS | `lat` `lng` `accuracyM` · deny = không Lưu |
| Nội dung | `content` |
| Ảnh | guid FileService |

`MatchOk`: khi chưa có plan-point, không tự set true để lách validate. Nếu BE bắt `MatchOk=true` mà chưa có plan, nút Lưu hiện lỗi từ server, không sửa body cho qua.

Mất mạng: xếp hàng offline như patrol-offline (body đủ lat/lng đã đo).

---

## TD-04 — Sổ nhật ký trong ca

| | |
|--|--|
| Route | `/field/tuan-duong/nhat-ky` |
| Đợt | B |
| API | **Mới** `GET patrol/sessions/{id}/journal-lines` |

List dòng của ca đang mở. Mỗi thẻ: giờ, lý trình, loại, trạng thái khép kín. Bấm thẻ → TD-05 sửa. Nút thêm → TD-05 tạo.

Empty: «Chưa ghi việc» + nút thêm. Check-in không hiện trong list này.

| Trạng thái dòng | Nhãn nghĩa |
|-----------------|------------|
| `phat-hien` | mới ghi |
| `dang-xu-ly` | đã giao hoặc đang xử lý tại chỗ |
| `cho-kiem-tra` | chờ tuần kiểm hoặc lần sau |
| `xong` | đã xác nhận |

---

## TD-05 — Dòng nhật ký tuần đường

| | |
|--|--|
| Route | `/field/tuan-duong/nhat-ky/moi` · `/field/tuan-duong/nhat-ky/:lineId` |
| Đợt | B tạo/sửa · D giao việc |
| API | **Mới** `POST` và `PUT patrol/journal-lines/{id}` |

**Bố cục**

1. Giờ (now, sửa được) · người readonly.
2. GPS: nút «Ghim vị trí hiện tại». Hiện `[lat, lng]` (6 số). **Cấm** «Thử lại GPS» và «GPS OK · ±m». Accuracy vẫn lưu. Deny thì không cho Lưu.
3. Km tay (`kmText`) + chiều (lấy từ ca, sửa được).
4. Thời tiết: `nang` `mua` `mu` `lu` `bao` `khac`.
5. Loại một chọn: `kcht` `hanh-lang` `tngt` `un-tac` `xe-hong` `chuong-ngai` `chay` `thoi-tiet` `atgt`.
6. Diễn biến (bắt buộc) + ảnh hiện trường.
7. Đã xử lý tại chỗ + kết quả (để trống nếu chỉ phát hiện).
8. Đã báo cáo: người nhận, thời điểm. Nút «Báo tuần kiểm» chỉ đánh dấu `reportedTo=tuan-kiem`, chưa tạo phiếu (phiếu do TK-03).
9. Nếu loại `hanh-lang`: nút **Đề nghị lập biên bản** → cờ `de-nghi-bien-ban`. Không mở form sổ 07.
10. Đợt D: **Thuộc BDTX** → `POST maintenance/work-orders` Live và lưu `workOrderId`. **Vượt BDTX** → cờ `kien-nghi-khu`, không tạo work order.
11. Trạng thái dòng.

| Nút | Việc |
|-----|------|
| Lưu | POST hoặc PUT. Thiếu GPS hoặc diễn biến: chặn |
| Hủy | về TD-04, không ghi |

Body đề xuất (chưa có DTO): `sessionId` · `at` · `lat` · `lng` · `accuracyM` · `kmText` · `direction` · `weather` · `kind` · `narrative` · `mediaIds` · `onSiteAction` · `onSiteResult` · `reportedTo` · `reportedAt` · `violationFlag` · `scope` (`bdtx` \| `vuot-bdtx`) · `workOrderId` · `status`.

---

## TD-06 — Kết ca, bàn giao, tạm dừng

| | |
|--|--|
| Route | `/field/tuan-duong/ket-ca` |
| Đợt | D |
| Ca | `PUT patrol/sessions/{id}` **Live** cho trạng thái. Bàn giao / tạm dừng cần cột **Mới** |

Ba việc trên một màn, một chọn:

| Việc | Status | Thêm |
|------|--------|------|
| Kết ca | `Hoàn thành` | Tóm tắt số dòng `xong` / chưa xong. Dòng chưa xong liệt kê, không xóa |
| Bàn giao | ca vẫn `Đang tuần` hoặc ca mới nhận | `handoverNote` + danh id dòng chưa xong. Người nhận chọn từ profile cùng đơn vị nếu API user có; chưa có thì ghi tên tay vào note và GAP |
| Tạm dừng | không tính thiếu lượt | `pauseReason`: `su-co-mat-an-toan` \| `cuu-nan` \| `thien-tai` \| `chay-no` \| `bat-kha-khang` · bắt buộc |

Nút Lưu gọi PUT. `Note` ghép handover/pause đến khi có cột riêng — ghi rõ trong payload comment của task BE, không để FE và BE mỗi nơi một format. Chốt format một lần trong Schema.

**GPS:** không.

---

## TD-07 — Lịch sử tuần đường

| | |
|--|--|
| Route | `/field/tuan-duong/lich-su` · chi tiết `/field/tuan-duong/lich-su/:id` |
| Đợt | A list · B kèm dòng nhật ký khi API mới có |
| API | **Live** `GET patrol/sessions?route&page&pageSize` · lọc `Tuần đường` |

Thẻ: `Code` · `Route` · `PlannedDate` · `Status` · `CheckInCount`. Chi tiết: header ca + check-in Live `GET` check-ins nếu controller có GET. Đợt B thêm list journal-lines.

Không sửa ca `Hoàn thành` trên màn này.

---

## TK-00 — Hub tuần kiểm

| | |
|--|--|
| Route | `/field/tuan-kiem` |
| Đợt | A shell · C khi có phiếu |
| Ai | Cán bộ quản lý đường (VP / Khu), không phải ca tuần đường |

| Vùng | Đợt | Việc |
|------|-----|------|
| Mở đợt | A | → TK-01 |
| Đợt đang kiểm | A | `GET patrol/sessions` · `Tuần kiểm` + `Đang tuần` |
| Tồn tại đang mở | C | → TK-02 · đếm status khác `xong` |
| Đối chiếu nhật ký | C | → TK-04 |
| Kiến nghị | D | → TK-06 |
| Kế hoạch tuần | E | → TK-07 |

Empty đợt: chỉ nút Mở đợt. Không hiện check-in tuần đường.

---

## TK-01 — Mở đợt tuần kiểm

| | |
|--|--|
| Route | `/field/tuan-kiem/mo-dot` |
| Đợt | A |
| Ghi | `POST patrol/sessions` **Live** · `PatrolType=Tuần kiểm` · `Status=Đang tuần` |

| Field | Bắt buộc | Bind |
|-------|----------|------|
| Tuyến | yes | `Route` |
| Từ km / đến km | yes trên UI | `Note` `kmFrom` `kmTo` đến khi có cột |
| Hình thức | yes | `dinh-ky` \| `dot-xuat` trong `Note` |
| Lý do đột xuất | yes nếu đột xuất | sự cố, TNGT, phản ánh |
| Người | yes | profile |
| Ngày | yes | `PlannedDate` |

Mở xong → TK-02 (đợt C) hoặc về TK-00 (đợt A, list phiếu chưa có thì ở hub).

**GPS:** không chặn. Có fix thì lưu điểm xuất phát cùng cách TD-02.

---

## TK-02 — Danh mục tồn tại

| | |
|--|--|
| Route | `/field/tuan-kiem/ton-tai` |
| Đợt | C |
| API | **Mới** `GET patrol/findings?sessionId&status&route` |

Mỗi thẻ: `code` mã tồn tại · tuyến · km · loại · hạn · trạng thái.

| Lọc | Query |
|-----|--------|
| Đợt đang mở | `sessionId` |
| Trạng thái | `phat-hien` `da-giao` `cho-kiem-tra` `xong` |
| Tuyến | `route` |

Nút **Tạo phiếu** → TK-03. Bấm thẻ → TK-05.

Empty: «Chưa có tồn tại trong đợt».

---

## TK-03 — Phiếu kiểm tra

| | |
|--|--|
| Route | `/field/tuan-kiem/phieu/moi` |
| Đợt | C · nút giao việc ở D |
| API | **Mới** `POST patrol/findings` · server sinh `code` |

| Field | Bắt buộc | Ghi chú |
|-------|----------|---------|
| Nguồn | yes | `tuan-duong` `nha-thau` `trung-tam` `nguoi-dan` `tai-cho` |
| Liên kết | yes nếu nguồn tuần đường | `journalLineId` hoặc `sessionId` tuần đường |
| Loại phiếu | yes | `hu-hong` `tuan-duong` `hanh-lang` `atgt` `thi-cong` `tngt` `kien-nghi` |
| Từ km, đến km | yes | tay |
| Vị trí | yes | `trai` `phai` `tim` `hanh-lang` `hai-ben` |
| Hạng mục | yes | nền, mặt, cầu, cống, hầm, thoát nước, ATGT, hộ lan, biển, dải phân cách, thiết bị, thi công |
| Mô tả | yes | |
| Khối lượng ước tính | no | text + đơn vị |
| Phạm vi | yes | `bdtx` \| `vuot-bdtx` |
| Ảnh hiện trường | no | `mediaIds` |
| GPS | yes | lat lng accuracy · deny chặn Lưu |
| Hạn xử lý | yes nếu `bdtx` | date |
| Việc với vi phạm | nếu `hanh-lang` | `lap-bien-ban` hoặc `de-nghi-vphc` · không form sổ 07 |

| Nút | Đợt | Việc |
|-----|-----|------|
| Lưu phiếu | C | POST · status `phat-hien` · về TK-05 |
| Giao đơn vị BDTX | D | sau khi có id: `POST maintenance/work-orders` · `IncidentId` để trống · `Title` = mã tồn tại · `DueAt` = hạn · lưu `workOrderId` · status `da-giao` |
| Hủy | | không ghi |

Loại `thi-cong`: mô tả bắt buộc có biển / rào / phân luồng (ba checkbox, ít nhất một).

---

## TK-04 — Đối chiếu nhật ký tuần đường

| | |
|--|--|
| Route | `/field/tuan-kiem/doi-chieu` |
| Đợt | C |
| Gap | GAP-TK-01 |

1. Chọn ca tuần đường `Hoàn thành` hoặc `Đang tuần` trên cùng tuyến (`GET patrol/sessions`).
2. List `journal-lines` của ca đó (**Mới**, cùng TD-04).
3. Mỗi dòng: narrative, ảnh, lat/lng, trạng thái xử lý.
4. Một chọn: `khop` \| `lech`. `lech` bắt buộc ghi câu lệch.
5. Nút **Lập phiếu từ dòng lệch** → TK-03 prefill nguồn `tuan-duong`, `journalLineId`, km, ảnh, GPS của dòng (không lấy GPS mới trừ khi user bấm lấy lại).

`PUT patrol/journal-lines/{id}/review` **Mới**: `review` · `reviewNote` · `findingId` khi đã lập phiếu.

Không sửa diễn biến của tuần đường trên màn này.

---

## TK-05 — Chi tiết phiếu và kiểm tra lại

| | |
|--|--|
| Route | `/field/tuan-kiem/phieu/:id` |
| Đợt | C đọc · D phản hồi · C/D kiểm tra lại |
| API | **Mới** `GET patrol/findings/{id}` · `POST patrol/findings/{id}/recheck` |

**Xem:** mã, nguồn, mô tả, km, hạn, scope, ảnh lúc phát hiện, work order code nếu có, trạng thái.

**Phản hồi BDTX** (đơn vị được giao, đợt D): khối lượng thực hiện, chất lượng (`dat` \| `chua-dat`), thời điểm, ảnh sau, ghi chú. `POST patrol/findings/{id}/feedback` **Mới**. Status → `cho-kiem-tra`.

**Kiểm tra lại** (cán bộ tuần kiểm):

| Field | Bắt buộc |
|-------|----------|
| Kết luận | `dat` \| `chua-dat` |
| Nhận xét | yes nếu chưa đạt |
| Ảnh sau | yes nếu đạt |
| GPS | yes |

Đạt → status `xong`. Chưa đạt → `da-giao` và giữ hạn cũ hoặc hạn mới bắt buộc.

Nút **Xác nhận hoàn thành** chỉ hiện khi kết luận đạt.

---

## TK-06 — Sổ kiến nghị

| | |
|--|--|
| Route | `/field/tuan-kiem/kien-nghi` · tạo `/field/tuan-kiem/kien-nghi/moi` |
| Đợt | D |
| API | **Mới** `GET|POST patrol/petitions` · không dùng `notification/inbox` |

| Field | Bắt buộc |
|-------|----------|
| Người / đơn vị gửi | yes · profile hoặc tên đơn vị BDTX |
| Tuyến, km | yes |
| Nội dung | yes |
| Phân loại | `hu-hong` `hanh-lang` `atgt` `tuan-duong` `khac` |
| GPS | yes nếu đang ở hiện trường · không thì được lưu không tọa độ và ghi «không có mặt» |

| Nút | Việc |
|-----|------|
| Ghi nhận | status `moi` |
| Lập phiếu | mở TK-03 nguồn `kien-nghi` |
| Đóng | chỉ khi phiếu liên kết `xong` hoặc lý do đóng tay |

---

## TK-07 — Kế hoạch tần suất

| | |
|--|--|
| Route | `/field/tuan-kiem/ke-hoach` |
| Đợt | E |
| API | **Mới** đọc kế hoạch theo tuyến. Chưa có thì màn để empty, không hard-code số lượt |

Bảng: tuyến · cấp đường (từ `road-routes` nếu có field cấp; chưa có thì cột trống + GAP) · quy tắc chữ (cao tốc mỗi chiều một lần/ngày, tuần kiểm một lần/tuần) · số ca tuần đường trong ngày · số đợt tuần kiểm trong tuần · thiếu / đủ.

Chỉ đọc. Sửa quy tắc không nằm trên phone.

---

## Việc BE trước khi code đợt B–E

| Đợt | Cần có trước UI ghi |
|-----|---------------------|
| A | Không. `patrol/sessions` + check-ins |
| B | Bảng journal-line + migration `Schema_PatrolJournalLine` |
| C | Bảng finding + recheck + review trên journal-line |
| D | Cột handover/pause trên session hoặc bảng handover · feedback finding · petition · nối `workOrderId` |
| E | Bảng tần suất theo tuyến, hoặc đọc cấp đường đã có |

Một migration một việc. Không nhét seed vào file Schema.

## Ngoài các màn này

Tab Cá nhân, cài đặt, trang bị xe, báo cáo tháng desktop, track GPS liên tục, nghiệm thu BDTX.
