# THUYẾT MINH CHỨC NĂNG PHẦN MỀM CAMERA TRONG RMMS

**Hệ thống quản lý, bảo trì đường bộ (RMMS)**  
Tài liệu giới thiệu — Chi cục, Ban QLDA, trực ban trung tâm điều hành / Cục ĐBVN

Tài liệu gồm hai phần:

- **Phần A** — chức năng đã thuyết minh (đếm lưu lượng, biển số / quay đầu, giám sát video tập trung).
- **Phần B** — tính năng nổi bật **bổ sung** khi Camera AI gắn vào RMMS (kết nối, bản đồ GIS, sự cố, sổ tài sản, AI tuần đường).

---

# Phần A — Chức năng đã thuyết minh

## 1. Đếm và phân tích lưu lượng AI

*(Có báo cáo theo thời gian và theo phương tiện)*

Nhận diện phương tiện giao thông qua phân tích hình ảnh đa luồng. Phần mềm dùng trí tuệ nhân tạo để xác định và phân loại từng phương tiện đồng thời, phục vụ phân luồng và điều khiển đèn tín hiệu phù hợp tình hình thực tế. Hệ thống có khả năng tự học trong quá trình vận hành để tối ưu điều khiển và phân luồng.

Đầu vào: luồng video thời gian thực từ camera. Đầu ra: số lượng và loại phương tiện qua nút theo hướng đi thẳng, rẽ phải, rẽ trái (ô tô, xe máy, xe buýt, xe tải, mật độ…), phục vụ điều khiển đèn tín hiệu.

Phần mềm truy cập khối quan trắc / đo đếm qua mạng nội bộ (LAN), xem video tại chỗ mà không phụ thuộc tốc độ Internet. Gói gửi về máy chủ trung tâm là dữ liệu đã xử lý tại biên (dạng văn bản mã hóa), nên **4G đủ cho liên lạc sự kiện** với trung tâm — hữu ích nơi chưa có cáp quang hoặc liên kết cột tín hiệu khó nâng cấp.

Máy chủ lưu dữ liệu vận hành để đơn vị trích xuất, phân tích, báo cáo, đánh giá từng nút giao thông.

## 2. AI nhận diện biển số và phát hiện quay đầu xe

*(Có báo cáo theo thời gian và theo phương tiện)*

Giải pháp giám sát giao thông thông minh: nhận diện phương tiện, đọc biển số, theo dõi hướng di chuyển và phát hiện hành vi **quay đầu** tại khu vực được thiết lập.

Hệ thống nhận hình từ camera giao thông hoặc camera chuyên dụng. AI phát hiện phương tiện trong khung hình, phân loại và nhận dạng biển số (ô tô, xe tải, xe khách, xe máy và loại khác tùy cấu hình, điều kiện hiện trường).

Theo dõi quỹ đạo từng xe: hướng ban đầu, hướng sau khi chuyển, tự động ghi nhận quay đầu (thời gian, vị trí, làn, hướng, loại xe, biển số, ảnh / video). Có thể lập vùng giám sát, làn, hướng lưu thông, khu vực cấm quay đầu; cảnh báo và lưu ảnh trước / trong / sau sự kiện.

Người dùng tra cứu lịch sử theo biển số, loại xe, thời gian, vị trí, camera, hướng đi; thống kê lượt quay đầu và tần suất biển số theo ngày, tuần, tháng hoặc khoảng tùy chọn. Xuất báo cáo Excel, PDF hoặc CSV. Phân quyền tài khoản, nhật ký thao tác. Kết nối camera, trung tâm điều hành và phần mềm quản lý giao thông khác.

Giảm theo dõi thủ công, tăng khả năng truy xuất. Báo cáo làm cơ sở tổ chức giao thông và phân tích hành vi lưu thông.

**Chức năng chính (tóm tắt):** phát hiện và theo dõi xe; đọc / lưu biển số; phân loại xe máy, ô tô con, xe tải, xe khách; quỹ đạo và hướng; phát hiện quay đầu; vùng được phép / cấm; ghi nhận sự kiện; lưu ảnh toàn cảnh, ảnh xe, ảnh biển, video; cảnh báo; tra cứu; thống kê; xuất báo cáo; phân quyền; tích hợp trung tâm.

## 3. Giám sát video màn hình tập trung tại Cục ĐBVN

Nền tảng giám sát video: quản lý camera, người dùng, sự kiện, cảnh báo, lưu trữ và khai thác hình ảnh tại trung tâm.

**Khả năng nhận diện (điều kiện tiêu chuẩn — ban ngày, đủ sáng, không mưa / sương mù, hình rõ, không lóa / mờ; loại trừ xe nối đuôi, biển bẩn / che khuất):**

- Phát hiện phương tiện — độ chính xác lên tới 99%.
- Phân loại xe tải, xe khách, xe con — lên tới 98%.
- Đo đếm lưu lượng — sai số không quá ± 2%; tốc độ trung bình — sai số không quá ± 5%.
- Nhận dạng biển số ô tô — độ chính xác ≥ 98%.
- Phát hiện sự kiện, sự cố, vi phạm trên cao tốc — tỷ lệ phát hiện lên tới 90%.
- Sẵn sàng tích hợp phần mềm ITS bên thứ ba.

**Sự kiện bổ sung trên phạm vi camera:** lấn làn / đè vạch; vượt đèn đỏ; quay đầu không đúng quy định; dừng đỗ sai quy định; **vật rơi trên đường** — cảnh báo tuần đường / tuần kiểm.

**Nền tảng vận hành tập trung**

| Hạng mục | Nội dung |
|----------|----------|
| Mô hình | Độc lập hoặc nền tảng tích hợp module giám sát tập trung |
| Camera / video | Quản lý thiết bị, xem trực tiếp, xem lại, khai thác theo phân quyền |
| Lưu trữ | Lưu chính / phụ, ghi hình, xem lại |
| Cảnh báo | Tiếp nhận và xử lý sự kiện từ thiết bị / hệ thống |
| Bản đồ | Bản đồ số để quản lý vị trí thiết bị, điểm camera và sự kiện |
| Bằng chứng | Trích xuất ảnh / video phục vụ xác minh và báo cáo |
| Người dùng | Phân quyền, nhóm, vai trò theo chức năng và phạm vi |
| Đồng thời | Nhiều người dùng đăng nhập cùng lúc |
| Hạ tầng | Vận hành trên máy chủ ảo hóa |
| Sức khỏe hệ thống | Trạng thái thiết bị, dịch vụ, lịch sử bảo trì |
| Client | Xem trực tiếp, xem lại, chia cửa sổ, theo dõi trực quan |
| Tương thích | Camera IP, lưu trữ, giải mã, màn hình ghép |
| Bảo mật | Tài khoản, phân quyền, nhật ký thao tác |
| Khai thác | Theo dõi hình, xử lý cảnh báo, truy xuất, bằng chứng, giám sát hệ thống |

---

# Phần B — Tính năng nổi bật bổ sung trên RMMS

Phần A mô tả năng lực camera / AI giao thông. Phần B mô tả **cách những năng lực đó gắn vào RMMS**: cùng tài khoản, đúng tuyến / Km, sổ tài sản, sự cố và tuần đường — không đứng như phần mềm NVR tách rời.

## 4. Kết nối camera ITS trong RMMS

Kỹ thuật khai báo camera đúng hiện trường: mã cam, tên, model, địa chỉ mạng, tuyến đường, lý trình.

- Thử kết nối trước khi đưa vào vận hành.
- Xem ảnh hiện trường ngay khi kết nối thành công.
- Nhận sự kiện từ camera (biển số, tốc độ, loại / màu / hướng xe) vào RMMS.

Model ưu tiên tuyến đô thị / ANPR + radar: **Hikvision iDS-TCM403-GIR**. Các model DeepinView khác chọn theo loại tuyến trong danh mục thiết bị.

## 5. Tường hình trung tâm trên RMMS

Trực ban xem **nhiều camera cùng lúc** ngay trong phần mềm RMMS:

- Kéo-thả camera vào ô, sắp xếp theo ca trực.
- Bố cục 1 cam lớn, 2×2, 3×2, hoặc thêm ô tự do.
- Phóng to một camera toàn màn hình khi xử lý tình huống.

Tường hình là màn hình chính tại phòng trực — đúng expect xem tại trung tâm điều hành (bổ sung mục 3 Phần A theo cách vận hành RMMS).

## 6. Bản đồ camera GIS trên RMMS

Cùng tường hình, bản đồ Việt Nam (lớp nền chuẩn hóa của hệ thống) hiện **pin camera** trên tuyến:

- Một lần bấm: đếm xe, sự kiện vượt tốc, xem live / ảnh.
- Chia màn hình tường hình ↔ bản đồ; ẩn bản đồ khi cần tập trung hình.
- Tóm tắt: tên, mã, Km, GPS, tuyến, tổng phương tiện, số xe vượt tốc.

Trực ban tìm cam theo **tuyến và vị trí**, không phải nhớ địa chỉ từng điểm.

## 7. Vi phạm tốc độ và quá tải — người xác nhận trước khi lập sự cố

Bổ sung so với nhận diện biển số (mục 2): gắn **đăng kiểm / tải trọng** và quy trình sự cố RMMS.

1. Camera gửi biển số + tốc độ (và tải trọng nếu có cầu cân).
2. Hệ thống tra cứu thông tin phương tiện (số trục, tải trọng cho phép).
3. Phần mềm **đề xuất** lỗi: vượt tốc, quá tải, không có trong đăng kiểm.
4. Người vận hành **xác nhận hoặc bỏ qua** — không tự lập sự cố oan.

Sau xác nhận, sự việc vào sự cố RMMS (giao việc, theo dõi, báo cáo).

## 8. Nhận diện biển báo và cọc tiêu — đối soát sổ tài sản

Từ ảnh camera tuần đường hoặc camera cố định, phần mềm đề xuất biển báo, cọc tiêu (và đối tượng cùng nhóm):

- Vị trí chuẩn hóa, tránh tạo trùng khi cùng một cột xuất hiện nhiều lần.
- Người dùng xác nhận để ghi sổ tài sản.
- Đối soát chỗ **đã có trên sổ nhưng không còn thấy** → sự cố «mất / hư».

Đây là **tài sản trên hành lang đường**, không phải hư mặt đường.

## 9. AI kiểm định mặt đường

Ảnh tuần đường (và nguồn camera liên quan) nhận diện: ổ gà, nứt dọc / ngang / mai rùa, bong bật, lún vệt, chảy nhựa, vá, sụt lề, hư mép.

Kết quả gồm mức độ, vị trí, gợi ý ưu tiên. Người dùng xác nhận để tạo **vấn đề / sự cố** — giữ quy trình ghi nhận hiện trường, có thêm lớp AI.

## 10. AI phát hiện tài sản mới từ camera xe tuần

Camera trên xe tuần phát hiện đối tượng **chưa có trong cơ sở dữ liệu**:

- Loại tài sản / thiết bị (biển báo, hộ lan, cột Km, …).
- Tọa độ và tuyến đi kèm chuyến tuần.
- Xác nhận tạo bản ghi tài sản, hoặc bỏ qua nếu nhận nhầm.

Cảnh báo trùng với điểm đã có (khoảng cách gần). Pin «tài sản mới do AI» phân biệt tài sản đã kiểm kê.

## 11. Sổ tài sản camera ITS

Mỗi camera trên tuyến là một **tài sản kết cấu hạ tầng** trên sổ tài sản RMMS:

- Danh sách / phiếu loại «Hệ thống ITS».
- Tuyến, lý trình, tọa độ, thông số — cùng chuẩn các loại tài sản khác.
- Kết nối vận hành (xem hình, sự kiện) gắn đúng bản ghi — không quản lý cam ngoài sổ.

---

## 12. Luồng nghiệp vụ trên RMMS

```
Camera trên tuyến (cố định hoặc trên xe tuần)
    → Ảnh / sự kiện (biển số, tốc độ, loại xe, đối tượng, quay đầu, vật rơi…)
    → Trung tâm: tường hình + bản đồ + feed sự kiện
    → Người vận hành xác nhận (khi cần lập hồ sơ)
    → Sự cố  /  Sổ tài sản  /  Báo cáo tuần đường / lưu lượng
```

| Nguồn | Việc điển hình |
|-------|----------------|
| Camera cố định ITS | Tường hình, ANPR, đếm xe, vượt tốc, quay đầu, vật rơi |
| Camera xe tuần | Kiểm định mặt đường, tài sản mới, đối soát biển / cọc |

Sự kiện (ảnh, biển số, tốc độ) **không thay** việc xem tại trung tâm. Expect chính: **trực ban nhìn thấy tuyến trên tường hình**.

---

## 13. Triển khai hiện trường

Để trực ban **xem tại trung tâm điều hành**, hiện trường cần:

- Tủ điện ngoài trời theo trang bị tiêu chuẩn.
- **Cáp quang hoặc VPN nội bộ** từ tủ camera về trung tâm — đường chính để xem hình.
- Camera địa chỉ mạng cố định, múi giờ đúng, gửi video và sự kiện về trung tâm.
- Trụ đỡ, giá camera đúng góc, đúng làn.
- Máy chủ video + màn hình tường hình tại phòng trực.

**Băng thông (tham khảo):** xem live khoảng 2–4 Mbps mỗi camera (luồng phụ); xem đồng thời ghi hình khoảng 4–8 Mbps mỗi camera.

**4G / 5G:** dự phòng gửi **sự kiện và ảnh** (đúng mô hình mục 1 — gói đã xử lý tại biên). Không đủ để xem live nhiều camera tại trung tâm.

**Ghi hình tại trung tâm** (kèm theo, không thay live): máy chủ lưu trữ / NVR, số ngày lưu, UPS, đồng bộ giờ (NTP) để clip làm chứng từ. Mất mạng: ghi tại biên, có sóng gửi bù.

---

## 14. Thiết bị camera đề xuất

Các model có **xử lý AI tại camera** (nhận diện, phân loại, đọc biển tại biên). Sự kiện gửi về RMMS; không bắt buộc máy GPU tại mỗi điểm cam.

| Loại tuyến | Hướng chọn | Việc nổi bật |
|-----------|-------------|--------------|
| Đô thị / ITS tốc độ + biển số | Bullet ANPR có radar (ví dụ iDS-TCM403-GIR) | Đo tốc độ, đọc biển, phủ nhiều làn |
| Quốc lộ vận tốc cao | DeepinView ANPR thân (bullet) | Biển số và đếm xe tốc độ cao, phân loại xe |
| Liên tỉnh vận tốc trung bình | ANPR tối ưu đêm | 1–2 làn, chống lóa đèn pha |
| Khu dân cư / đô thị hỗn hợp | Dome hoặc thân góc rộng | Giám sát hỗn hợp, góc phủ rộng |

Chọn model theo khảo sát làn, tốc độ thiết kế và điều kiện đêm. RMMS lưu danh mục model để kỹ thuật chọn đúng cấu hình kết nối.

---

## 15. Bảo mật (mức vận hành)

Bổ sung so với phân quyền mục 3:

- Mật khẩu camera **không để dạng đọc được** trong phần mềm; người xem tường hình không cần biết mật khẩu thiết bị.
- Camera gửi sự kiện bằng **kênh riêng**, kiểm soát nguồn — không dùng tài khoản người dùng để giả sự kiện.
- Đường xem hình trên trình duyệt có hạn quyền và thời hạn; màn hình trực ban được cấp quyền xem liên tục theo ca.
- Phân quyền theo đơn vị / tuyến: Chi cục chỉ thấy camera thuộc phạm vi quản lý.

Hạ tầng (tường lửa, VPN, lưu trữ) theo phương án an toàn thông tin của đơn vị.

---

## 16. Lộ trình gắn RMMS

Không hứa hình ảnh liên tục khi chưa có đường truyền về trung tâm.

**Đã gắn vào phần mềm RMMS**

- Khai báo và kết nối camera ITS, thử kết nối, xem ảnh hiện trường.
- Nhận sự kiện từ camera (biển số, tốc độ, loại xe) vào hệ thống.
- Tường hình nhiều camera, kéo-thả bố cục.
- Bản đồ camera trên GIS (pin, đếm xe, vượt tốc).
- Sổ tài sản loại camera ITS.
- Bảo mật cấu hình kết nối như mục 15.

**Hạng mục tiếp theo (khi hiện trường đủ quang / VPN)**

- **Video trực tiếp liên tục** trên tường hình RMMS (không chỉ ảnh định kỳ) — hoàn thiện expect mục 3.
- Gắn xác nhận vi phạm tốc độ / quá tải thành sự cố thật trên quy trình RMMS.
- Nhận diện biển báo / cọc tiêu và đối soát mất tài sản trên tuyến.
- AI mặt đường và phát hiện tài sản mới từ camera xe tuần — vận hành rộng sau khi đơn vị chốt quy trình xác nhận.

Năng lực đếm xe, biển số, quay đầu, vật rơi, giám sát tập trung (Phần A) là thuyết minh gốc; Phần B là cách các năng lực đó **đi vào đúng nghiệp vụ quản lý đường** trên RMMS.

---

## Tóm tắt gửi lãnh đạo

> Camera AI trên RMMS đưa **mắt trên tuyến** vào phần mềm quản lý đường: tường hình, bản đồ, sự kiện biển số / tốc độ / quay đầu / lưu lượng, sổ tài sản và sự cố — một hệ, một tài khoản.  
> Để xem tại trung tâm cần **tủ điện, quang hoặc VPN, camera địa chỉ cố định, máy chủ video và tường hình**. 4G gửi sự kiện và ảnh đã xử lý tại biên, không thay live nhiều camera.  
> Video live liên tục là bước hoàn thiện khi đường truyền hiện trường đã về trung tâm; kết nối, ảnh, sự kiện, tường hình và bản đồ đã nằm trong RMMS.

---

*Phần A giữ thuyết minh chức năng camera gốc. Phần B bổ sung sau khi rà soát hệ thống RMMS: kết nối camera, GIS, sự cố, sổ tài sản ITS, AI tuần đường.*
