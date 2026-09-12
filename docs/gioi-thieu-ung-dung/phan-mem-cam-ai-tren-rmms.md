# THUYẾT MINH CHỨC NĂNG PHẦN MỀM CAMERA TRONG RMMS

| STT | NỘI DUNG |
|-----|----------|
| 1 | **Đếm và phân tích lưu lượng AI** (có báo cáo theo thời gian và phương tiện)<br><br>Thị giác AI trên camera ITS (iDS-TCM403-BI, iDS-TCM403-GIR, iDS-2CD7A46G2/LM-IZHS): đếm lưu lượng, phân loại phương tiện, hướng đi, tốc độ trung bình và hàng chờ, theo tài liệu kỹ thuật của hãng.<br>Phần mềm RMMS tiếp nhận kết quả đã xử lý tại camera, lưu trữ và lập báo cáo theo thời gian, theo loại phương tiện. |
| 2 | **AI nhận diện biển số xe, phương tiện quay đầu xe** (có báo cáo theo thời gian và theo phương tiện)<br><br>Thị giác AI trên camera (iDS-TCM403-GIR, iDS-TCM403-BI, iDS-2CD7A46G2/LM-IZHS): đọc biển số, hướng xe, loại xe, màu xe; phát hiện quay đầu theo vùng giám sát đã thiết lập trên camera.<br>Phần mềm RMMS tiếp nhận sự kiện biển số và quay đầu, lưu ảnh kèm theo, cho phép tra cứu và báo cáo. |
| 3 | **Giám sát video màn hình tập trung tại Cục ĐBVN**<br><br>Thị giác AI trên camera: sự kiện ùn tắc, dừng đỗ, đổi làn, ngược chiều, vượt tốc, tốc độ thấp trên iDS-TCM403-BI; đọc biển số và đo tốc độ bằng radar trên iDS-TCM403-GIR.<br>Phần mềm RMMS kết nối camera, hiển thị trên trang giám sát tập trung trên tuyến, lưu trữ, phân quyền và quản lý bằng chứng. |
| 4 | **Kết nối và quản lý camera ITS trên phần mềm RMMS**<br><br>Hạng mục này không nhận diện hình ảnh.<br>Phần mềm RMMS khai báo camera theo model, địa chỉ mạng, tuyến đường và lý trình, thử kết nối, tiếp nhận sự kiện từ camera và phân quyền khai thác. |
| 5 | **Giám sát tập trung trên tuyến và bản đồ camera trên nền tảng RMMS**<br><br>Hạng mục này không nhận diện hình ảnh. Số liệu đếm xe và vượt tốc tại từng điểm camera lấy từ kết quả thị giác AI trên camera ở mục 1 và mục 2.<br>Phần mềm RMMS hiển thị lưới hình nhiều camera cùng lúc và bản đồ: lớp nền chung của thế giới, lớp bản đồ và tài sản vẽ lại theo chuẩn Việt Nam. Màn hình ghép tại phòng trực là thiết bị tại trung tâm điều hành, có thể nhận nguồn hình từ phần mềm khi đơn vị trang bị. |
| 6 | **AI nhận diện vi phạm tốc độ, quá tải kết hợp đối chiếu đăng kiểm**<br><br>Thị giác AI trên camera iDS-TCM403-GIR: đọc biển số và đo tốc độ bằng radar (sai số theo tài liệu hãng: cộng trừ 2 km/h, đến 120 km/h). Không dùng phân tích ảnh trên máy chủ để đọc lại biển số.<br>Phần mềm RMMS đối chiếu đăng kiểm, đề xuất nhóm lỗi; người vận hành xác nhận trước khi lập sự cố. |
| 7 | **AI nhận diện biển báo, cọc tiêu và đối soát tài sản trên tuyến**<br><br>Thị giác AI (ảnh gửi lên cloud): đề xuất biển báo, cọc tiêu. Camera ITS của hãng không nhận diện biển báo và cọc tiêu.<br>Phần mềm RMMS lưu đề xuất; người vận hành xác nhận trước khi ghi sổ tài sản hoặc lập sự cố mất, hư. |
| 8 | **AI kiểm định mặt đường từ hình ảnh camera**<br><br>Thị giác AI (ảnh gửi lên cloud): ổ gà, nứt, bong bật và các dạng hư mặt đường. Camera ITS của hãng không nhận diện hư mặt đường.<br>Phần mềm RMMS gửi ảnh tuần đường, lưu kết quả; người vận hành xác nhận trước khi lập sự cố hoặc vấn đề. |
| 9 | **AI phát hiện tài sản, thiết bị mới từ camera tuần đường**<br><br>Thị giác AI (ảnh gửi lên cloud): biển báo, hộ lan, cột Km và các đối tượng liên quan. Không dùng chỉ số đọc biển số của camera cố định cho hạng mục này.<br>Phần mềm RMMS đưa danh sách đề xuất; người vận hành xác nhận trước khi ghi sổ tài sản. |
| 10 | **Quản lý camera ITS trên sổ tài sản kết cấu hạ tầng**<br><br>Hạng mục này không nhận diện hình ảnh.<br>Phần mềm RMMS quản lý hồ sơ tài sản loại hệ thống ITS, gắn với kết nối vận hành và sự kiện ở các mục 1, 2, 3 và 6. |

---

## RMMS là phần mềm trung tâm kết nối và quản lý dữ liệu

RMMS không thay camera để nhận diện biển số tại hiện trường. RMMS là phần mềm trung tâm: kết nối thiết bị trên tuyến, tiếp nhận sự kiện hoặc ảnh hiện trường, lưu trữ, gắn đúng tuyến, lý trình và đơn vị quản lý, hiển thị trên trang giám sát tập trung trên tuyến và trên bản đồ, đối soát sổ tài sản và sự cố, lập báo cáo và phân quyền khai thác.

Dữ liệu đi từ camera ITS hoặc camera xe tuần về phần mềm RMMS dưới hai dạng: sự kiện đã được nhận diện tại camera, hoặc ảnh hiện trường. Người vận hành xác nhận khi lập hồ sơ tài sản hoặc sự cố.

Nhận diện hình ảnh trên hệ thống có hai nguồn, không gộp chung một chỉ số độ chính xác.

Nhận diện biển số, hướng xe, loại xe, tốc độ bằng radar, đếm lưu lượng, ùn tắc, dừng đỗ do trí tuệ nhân tạo tích hợp trên camera ITS của hãng. Phần mềm RMMS không huấn luyện lại các thuật toán này. Các chỉ số phần trăm dưới đây lấy từ tài liệu kỹ thuật của hãng Hikvision, trong điều kiện lắp đặt và chiếu sáng theo khuyến nghị. Thực tế trên tuyến có thể khác; số liệu này phục vụ đánh giá kỹ thuật, không thay thế hiệu chuẩn và nghiệm thu trên tuyến khi dùng cho xử lý vi phạm.

| Model camera | Việc trên tuyến theo công bố của hãng | Nguồn (trang sản phẩm hãng) |
|-------|--------------------------------------|--------|
| iDS-TCM403-GIR (kể cả bản POE/2812) | Đọc biển số và đo tốc độ bằng radar 77 GHz, đến 3 làn | [Trang sản phẩm Hikvision](https://www.hikvision.com/en/products/ITS-Products/traffic-cameras/urban-road-anpr-cameras/ids-tcm403-gir/) |
| iDS-TCM403-BI | Đọc biển số, đếm lưu lượng; sự kiện ùn tắc, dừng đỗ, đổi làn, ngược chiều, vượt tốc, tốc độ thấp | [Trang sản phẩm Hikvision](https://www.hikvision.com/en/products/ITS-Products/traffic-cameras/urban-road-anpr-cameras/ids-tcm403-bi/) |
| iDS-2CD7A46G2/LM-IZHS | Phát hiện phương tiện và hướng xe; đọc biển số ở kịch bản cổng, trạm | [Trang sản phẩm Hikvision](https://www.hikvision.com/en/products/IP-Products/Network-Cameras/DeepinView-Series/ids-2cd7a46g2-lm-izhs-y-/) |

Kiểm định mặt đường, đề xuất biển báo, cọc tiêu và tài sản mới: phần mềm RMMS gửi ảnh tuần đường lên dịch vụ thị giác AI (ảnh gửi lên cloud), nhận kết quả gợi ý, lưu và gắn vào sổ tài sản hoặc sự cố sau khi người vận hành xác nhận. Hãng camera không công bố nhận diện các hạng mục này. Không lấy chỉ số đọc biển số của camera cố định để đánh giá các việc này.

| Hạng mục | Nguồn nhận diện | Việc trên phần mềm RMMS | Kết quả trên hệ thống |
|---------|------------|---------------------------|-----------------|
| Mục 1, 2, 3 | Trí tuệ nhân tạo trên camera của hãng | Kết nối, tiếp nhận sự kiện, lưu trữ, giám sát tập trung trên tuyến, báo cáo | Sự kiện giao thông |
| Mục 4, 5, 10 | Không nhận diện | Kết nối thiết bị, giám sát tập trung, bản đồ, sổ tài sản camera | Hồ sơ tài sản ITS và hiển thị |
| Mục 6 | Đọc biển số và tốc độ trên camera, kết hợp quy tắc trên RMMS | Đối chiếu đăng kiểm, chờ xác nhận, lập sự cố | Sự kiện chuyển thành sự cố |
| Mục 7, 9 | Thị giác AI (ảnh gửi lên cloud) | Gửi ảnh, nhận đề xuất, người xác nhận, ghi sổ hoặc sự cố mất | Tài sản hoặc sự cố mất |
| Mục 8 | Thị giác AI (ảnh gửi lên cloud) | Gửi ảnh, nhận hư mặt đường, xác nhận | Sự cố hoặc vấn đề, không tạo tài sản mới |

---

## 1. Đếm và phân tích lưu lượng AI (có báo cáo theo thời gian và phương tiện)

Đặc điểm:

Nhận diện lưu lượng do trí tuệ nhân tạo trên camera ITS. Phần mềm RMMS tiếp nhận kết quả, lưu trữ và lập báo cáo, không chạy lại nhận diện trên máy chủ trung tâm.

Nhận diện phương tiện giao thông qua quá trình phân tích hình ảnh đa luồng một cách chi tiết. Phần mềm ứng dụng nhiều thuật toán tiên tiến trong công nghệ trí tuệ nhân tạo AI cho phép các phương tiện riêng lẻ được xác định và phân loại một cách đồng thời với độ chính xác cao, trong khi vẫn duy trì được việc thực thi thời nhằm mục đích phân luồng và điều khiển hệ thống đèn tín hiệu giao thông một cách phù hợp với tình hình giao thông hiện tại. Hệ thống được xây dựng các chức năng có thể tự học trong quá trình hoạt động qua đó liên tục tối ưu được quá trình điều khiển và phân luồng giao thông.

Phần mềm phân tích lưu lượng được xây dựng dựa trên công nghệ trí tuệ nhân tạo, với đầu vào là tất cả luồng video realtime từ các camera được thu thập về máy tính sau đó máy tính tiến hành phân tích song song đa luồng và cho kết quả đầu ra là số lượng, loại phương tiện đang lưu thông qua nút theo các hướng đi thẳng, rẽ phải, rẽ trái của (ô tô, xe máy, xe bus, xe tải, mật độ phương tiện…..) đây là các số liệu cần thiết cho quá trình điều khiển hệ thống đèn tín hiệu giao thông.

Phần mềm truy cập trực tiếp vào khối quan trắc, đo đếm lưu lượng giao thông qua mạng LAN giúp khả năng truy xuất video trực tiếp mà không cần quan tâm đến tốc độ đường truyền internet, hoạt động trao đổi dữ liệu với server là những gói dữ liệu đã được xử lý tại chỗ qua và được mã hóa dưới dạng text vì vậy internet 4G hoàn toàn có thể đáp ứng được nhu cầu liên lạc giữa bộ điều khiển và server trung tâm góp phần giảm tải tài nguyên tính toán cho server, điều này đặc biệt hữu ích tại những nơi gặp nhiều khó khăn trong việc thiết lập đường truyền internet cáp quang hay sự liên kết giữa các cột tín hiệu với nhau gặp nhiều khó khăn trong các hệ thống cũ cần nâng cấp cải tạo.

Hệ thống server cho phép lưu lại dữ liệu trong quá trình vận hành giúp các đơn vị vận hành có thể trích xuất dữ liệu để phân tích, báo cáo, đánh giá về tình hình giao thông của từng nút giao thông.

Chỉ số kỹ thuật theo tài liệu của hãng:

| Model | Bắt xe | Hướng xe | Đọc biển số | Bắt nhầm | Lưu lượng và loại xe |
|-------|------------------|----------|-----------------|----------|---------------------|
| iDS-TCM403-GIR | trên 99% | trên 98,5% | trên 98% | dưới 2% | Có đếm và phân loại (ô tô con, xe van, xe buýt, xe tải, xe tải nhẹ, SUV, bán tải, xe máy, xe ba bánh). Hãng không công bố phần trăm đếm và phân loại. |
| iDS-TCM403-BI | trên 99% tại 120 km/h; trên 95% tại 200 km/h | trên 98,5% tại 120 km/h; trên 94% tại 200 km/h | trên 98% tại 120 km/h; trên 90% tại 200 km/h | dưới 2% (bản vùng châu Âu) | Có lưu lượng, tốc độ trung bình, hàng chờ, trạng thái. Hãng không công bố phần trăm đếm. |
| iDS-2CD7A46G2/LM-IZHS | trên 98% | trên 96% | Bản LM không ghi đọc biển từ 98% trở lên (khác bản P chuyên đọc biển) | dưới 2% tại cổng; dưới 5% tại trạm | Có loại xe, màu xe, hãng xe (khuyến nghị đường phố đô thị) |

Việt Nam thuộc vùng nhận diện biển châu Á - Thái Bình Dương trên tài liệu TCM403. Màu xe chỉ nhận ban ngày. Đường truyền 4G phù hợp tải gói sự kiện đã xử lý tại camera, không thay video trực tiếp nhiều camera cùng lúc.

Kết quả trên RMMS là sự kiện lưu lượng (số lượng, loại, hướng), phục vụ báo cáo theo thời gian và phương tiện. Hạng mục này không tạo bản ghi sổ tài sản. Điểm camera gắn với tài sản ITS và tuyến, lý trình khi đã kết nối ở mục 4.

---

## 2. Công nghệ trí tuệ nhân tạo AI nhận diện biển số xe, phương tiện quay đầu xe (có báo cáo theo thời gian và theo phương tiện)

Đặc điểm:

Nhận diện biển số và theo dõi quỹ đạo do trí tuệ nhân tạo trên camera. Phần mềm RMMS tiếp nhận sự kiện biển số và quay đầu, lưu ảnh kèm theo, tra cứu và báo cáo.

Phần mềm AI nhận diện biển số xe và phát hiện phương tiện quay đầu là giải pháp giám sát giao thông thông minh, ứng dụng công nghệ trí tuệ nhân tạo, thị giác máy tính và xử lý hình ảnh để tự động nhận diện phương tiện, đọc biển số, theo dõi hướng di chuyển và phát hiện hành vi quay đầu xe tại khu vực giám sát.

Hệ thống tiếp nhận hình ảnh trực tiếp từ camera giao thông hoặc camera chuyên dụng. Công nghệ AI tự động phát hiện phương tiện trong khung hình, phân loại phương tiện và nhận dạng biển số xe. Phần mềm có khả năng ghi nhận biển số của ô tô, xe tải, xe khách, xe máy và các loại phương tiện khác tùy theo cấu hình camera và điều kiện triển khai thực tế.

Thông qua việc theo dõi quỹ đạo di chuyển của từng phương tiện, phần mềm xác định hướng đi ban đầu, hướng đi sau khi chuyển hướng và tự động phát hiện trường hợp phương tiện thực hiện hành vi quay đầu trong khu vực được thiết lập. Khi phát hiện sự kiện quay đầu xe, hệ thống ghi nhận đầy đủ thời gian, vị trí, làn đường, hướng di chuyển, loại phương tiện, biển số xe và hình ảnh hoặc video liên quan.

Phần mềm cho phép thiết lập các vùng giám sát, làn đường, hướng lưu thông và khu vực cấm quay đầu theo yêu cầu quản lý. Khi phương tiện quay đầu, hệ thống có thể tự động phát cảnh báo, đồng thời lưu trữ hình ảnh trước, trong và sau thời điểm xảy ra sự kiện để phục vụ kiểm tra, đối chiếu và xử lý.

Dữ liệu được tổng hợp thành báo cáo theo thời gian và theo từng phương tiện. Người dùng có thể tra cứu lịch sử theo biển số xe, loại phương tiện, thời gian, vị trí, camera, hướng di chuyển. Hệ thống cũng hỗ trợ thống kê số lượng phương tiện quay đầu, tần suất xuất hiện của từng biển số trong khoảng thời gian được lựa chọn.

Các chức năng chính của phần mềm bao gồm: Phát hiện và theo dõi phương tiện tự động bằng công nghệ AI; nhận diện, đọc và lưu trữ biển số xe; phân loại phương tiện như xe máy, ô tô con, xe tải và xe khách; theo dõi quỹ đạo và xác định hướng di chuyển của phương tiện; tự động phát hiện hành vi quay đầu xe; thiết lập khu vực được phép hoặc không được phép quay đầu; ghi nhận thời gian, vị trí, làn đường và camera phát hiện sự kiện; lưu hình ảnh toàn cảnh, ảnh phương tiện, ảnh biển số và video sự kiện; phát cảnh báo khi phát hiện phương tiện quay đầu lên biển cảnh báo cho các phương tiện lưu thông trên khu vực đó; tra cứu lịch sử di chuyển và lịch sử sự kiện theo biển số xe; thống kê số lượt quay đầu theo ngày, tuần, tháng hoặc khoảng thời gian tùy chọn; báo cáo theo từng phương tiện, loại phương tiện, biển số, vị trí và hướng di chuyển; xuất báo cáo dưới các định dạng phổ biến như Excel, PDF hoặc CSV; phân quyền người dùng, quản lý tài khoản và ghi nhận lịch sử thao tác; hỗ trợ kết nối với hệ thống camera, trung tâm điều hành và các phần mềm quản lý giao thông khác.

Giải pháp giúp tự động hóa công tác giám sát phương tiện và phát hiện hành vi quay đầu xe, giảm phụ thuộc vào việc theo dõi thủ công, nâng cao độ chính xác và khả năng truy xuất dữ liệu. Các báo cáo theo thời gian và theo phương tiện cung cấp cơ sở phục vụ quản lý giao thông, phân tích hành vi lưu thông và xây dựng phương án tổ chức giao thông phù hợp.

Chỉ số kỹ thuật theo tài liệu của hãng:

- iDS-TCM403-GIR: đọc biển trên 98%, bắt xe trên 99%, hướng trên 98,5%, bắt nhầm dưới 2%. Radar 77 GHz, đo tốc độ đến 120 km/h, sai số cộng trừ 2 km/h, khoảng 5 đến 120 km/h, phủ đến 3 làn, cự ly đến 50 m.
- iDS-TCM403-BI: cùng bộ chỉ số đọc biển, bắt xe, hướng ở 120 km/h; tại 200 km/h đọc biển trên 90%, bắt xe trên 95%, hướng trên 94%. Có bắt xe không biển và đọc biển xe máy.
- iDS-2CD7A46G2/LM-IZHS: bắt xe trên 98%, hướng trên 96%. Bản LM không ghi đọc biển từ 98% trở lên như bản P chuyên đọc biển (đọc biển từ 98%, bắt xe từ 99%, hướng từ 98%, lắp phía trước đến 120 km/h, lắp bên đến 80 km/h).
- Đổi làn, ngược chiều, dừng đỗ, ùn tắc, vượt tốc, tốc độ thấp: có chức năng trên iDS-TCM403-BI. Tài liệu hãng không công bố phần trăm. Quay đầu, vượt đèn, vật rơi cần cấu hình vùng giám sát; các model trên không có phần trăm cho các sự kiện này.

Số đo áp dụng khi lắp đặt và chiếu sáng đúng khuyến nghị của hãng. Biển bẩn, che khuất, mưa, sương mù làm giảm kết quả thực tế. Ảnh biển số, ảnh phương tiện và ảnh toàn cảnh được lưu kèm sự kiện để đối chiếu. Ban đêm cần đủ đèn bổ trợ hồng ngoại hoặc đèn trắng theo từng model.

Mỗi lần đọc biển hoặc phát hiện quay đầu là một sự kiện camera (thời gian, làn, hướng, loại xe, biển số, ảnh). Hạng mục này không ghi sổ tài sản. Khi đơn vị xác nhận xử lý, sự kiện có thể chuyển thành sự cố hoặc vấn đề trên RMMS để giao việc và theo dõi.

---

## 3. Giám sát video màn hình tập trung tại Cục ĐBVN

Đặc điểm:

Sự kiện giao thông do trí tuệ nhân tạo trên camera. Phần mềm RMMS và trung tâm điều hành kết nối, hiển thị, lưu trữ, phân quyền. Trang giám sát tập trung trên tuyến và bằng chứng nằm trên hệ thống trung tâm.

Cung cấp các tính năng cơ bản của hệ thống giám sát video, làm nền tảng để quản lý camera, người dùng, sự kiện, cảnh báo, lưu trữ và khai thác hình ảnh.

Tự động phát hiện phương tiện với độ chính xác lên tới 99% trong điều kiện tiêu chuẩn. Tự động phân loại phương tiện (xe tải, xe khách, xe con) với độ chính xác lên tới 98% trong điều kiện tiêu chuẩn, loại trừ các trường hợp phương tiện nối đuôi nhau. Đo đếm lưu lượng phương tiện với tỷ lệ sai số không quá ± 2% và đo tốc độ trung bình của phương tiện với sai số không quá ± 5%. Tự động nhận dạng biển số phương tiện (ô tô) với độ chính xác ≥ 98% trong điều kiện tiêu chuẩn (loại trừ các trường hợp biển số bị bẩn mờ, cong vênh, bị che khuất 1 phần hoặc hoàn toàn). Tự động phát hiện và ghi nhận các sự kiện, sự cố và các trường hợp vi phạm giao thông xảy ra trên cao tốc với tỷ lệ phát hiện lên tới 90% trong điều kiện tiêu chuẩn. Sẵn sàng tích hợp với phần mềm ITS của bên thứ 3. Ghi chú: Điều kiện tiêu chuẩn: ban ngày, đảm bảo đủ môi trường ánh sáng, không mưa, sương mù, chất lượng hình ảnh tốt, không bị lóa, mờ, mắt thường nhìn rõ.

Tự động phát hiện phương tiện lấn làn đè vạch, vượt đèn xanh đèn đỏ, quay đầu xe không đúng quy định.

Tự động phát hiện phương tiện đậu xe trong phạm vi có camera nhưng sai quy định dừng đỗ.

Tự động phát hiện vật rơi trên đường để đưa ra cảnh báo cho tuần đường tuần kiểm trong phạm vi có camera.

Mô hình triển khai: Hỗ trợ triển khai độc lập hoặc làm nền tảng tích hợp các module ứng dụng khác trong hệ thống giám sát tập trung.

Quản lý camera/video: Hỗ trợ quản lý thiết bị camera, xem trực tiếp, xem lại, khai thác dữ liệu video theo phân quyền.

Quản lý lưu trữ: Hỗ trợ lưu trữ chính/phụ, phục vụ ghi hình, xem lại và quản lý dữ liệu video.

Quản lý cảnh báo: Hỗ trợ quản lý cảnh báo, tiếp nhận và xử lý sự kiện từ thiết bị/hệ thống.

Quản lý bản đồ: Bản đồ trên phần mềm gồm hai lớp. Lớp nền dùng lớp bản đồ chung của thế giới (địa hình, vệ tinh) làm khung định vị. Lớp bản đồ và tài sản được vẽ lại theo chuẩn Việt Nam: ranh giới hành chính, tuyến đường, lý trình, điểm camera và tài sản trên tuyến. Vị trí thiết bị, sự kiện và sổ tài sản hiển thị trên lớp chuẩn Việt Nam, không lấy điểm tài sản từ lớp nền thế giới.

Quản lý bằng chứng: Hỗ trợ quản lý dữ liệu bằng chứng, trích xuất hình ảnh/video phục vụ tra cứu, xác minh và báo cáo.

Quản lý người dùng: Hỗ trợ phân quyền người dùng, nhóm người dùng, vai trò vận hành theo chức năng và phạm vi khai thác.

Số lượng người dùng truy cập đồng thời: Hỗ trợ nhiều người dùng đăng nhập đồng thời.

Vận hành trên máy ảo: Hỗ trợ triển khai, vận hành trên môi trường máy chủ ảo hóa.

Giám sát tình trạng hệ thống: Hỗ trợ giám sát sức khỏe hệ thống, trạng thái thiết bị, trạng thái dịch vụ và lịch sử bảo trì/dữ liệu vận hành.

Quản lý vận hành client: Hỗ trợ các thao tác trên phần mềm client như xem trực tiếp, xem lại, chia cửa sổ tùy chỉnh, theo dõi trực quan và các chức năng vận hành giám sát.

Hỗ trợ tích hợp module: Hỗ trợ làm điều kiện nền tảng để tích hợp các module mở rộng theo yêu cầu hệ thống.

Yêu cầu tương thích: Tương thích với hệ thống camera IP, thiết bị lưu trữ, thiết bị giải mã, màn hình ghép và các thành phần liên quan theo kiến trúc hệ thống.

Yêu cầu bảo mật: Hỗ trợ quản lý tài khoản, phân quyền truy cập, ghi nhật ký thao tác người dùng và kiểm soát truy cập theo vai trò.

Yêu cầu khai thác: Cho phép người vận hành tại trung tâm giám sát theo dõi hình ảnh, xử lý cảnh báo, truy xuất dữ liệu, quản lý bằng chứng và giám sát tình trạng hệ thống.

Chỉ số kỹ thuật theo tài liệu hiện hành của hãng Hikvision:

| Chỉ tiêu | iDS-TCM403-GIR | iDS-TCM403-BI | iDS-2CD7A46G2/LM-IZHS |
|---------|----------------|---------------|------------------------|
| Bắt xe | trên 99% | trên 99% tại 120 km/h; trên 95% tại 200 km/h | trên 98% |
| Đọc biển số | trên 98% | trên 98% tại 120 km/h; trên 90% tại 200 km/h | Bản LM không ghi từ 98% trở lên |
| Hướng xe | trên 98,5% | trên 98,5% tại 120 km/h; trên 94% tại 200 km/h | trên 96% |
| Bắt nhầm | dưới 2% | dưới 2% | dưới 2% tại cổng; dưới 5% tại trạm |
| Tốc độ radar | cộng trừ 2 km/h, đến 120 km/h, 77 GHz | Không có radar tích hợp như GIR; có phát hiện vượt tốc và tốc độ thấp, hãng không công bố phần trăm | Không có radar |
| Ùn tắc, dừng, đổi làn, ngược chiều, vượt tốc, tốc độ thấp | Không công bố | Có chức năng, hãng không công bố phần trăm | Không công bố |
| Phân loại loại xe | Có danh mục, hãng không công bố phần trăm | Có danh mục, hãng không công bố phần trăm | Có thuộc tính, hãng không công bố phần trăm |
| Vượt đèn đỏ, vật rơi | Không công bố trên tài liệu model này | Không công bố phần trăm | Cần cấu hình vùng giám sát |

Trực ban xem hình 24 giờ tại phòng trực trên trang giám sát tập trung của RMMS hoặc trên màn hình ghép tại phòng. Video trực tiếp nhiều camera cùng lúc cần đường truyền quang hoặc mạng riêng về trung tâm; 4G không thay video trực tiếp.

Cảnh báo và đoạn hình là sự kiện, bằng chứng. Vật rơi, lấn làn, dừng đỗ sai sau khi trực ban xác nhận được đưa vào sự cố để tuần đường, tuần kiểm xử lý. Vị trí camera trên bản đồ gắn với tài sản ITS ở mục 10, không tự tạo loại tài sản khác.

---

## 4. Kết nối và quản lý camera ITS trên phần mềm RMMS

Đặc điểm:

Hạng mục này không nhận diện hình ảnh. Đây là phần kết nối trung tâm của RMMS: khai báo thiết bị, thử kết nối, tiếp nhận sự kiện, gắn tuyến và lý trình, phân quyền.

Phần mềm cho phép đơn vị quản lý đường bộ khai báo, kết nối và vận hành camera ITS ngay trong hệ thống RMMS, không phải mở phần mềm camera độc lập. Người dùng nhập đầy đủ thông tin hiện trường gồm mã camera, tên gọi, model thiết bị, địa chỉ mạng, tuyến đường và lý trình, từ đó mỗi điểm camera được gắn đúng vị trí nghiệp vụ trên tuyến được quản lý.

Hệ thống hỗ trợ thử kết nối trước khi đưa camera vào vận hành, cho phép xem ảnh hiện trường ngay sau khi kết nối thành công và tiếp nhận sự kiện do camera gửi về gồm biển số, tốc độ, loại phương tiện, màu sắc và hướng di chuyển. Việc tiếp nhận sự kiện được thực hiện theo kênh riêng, có kiểm soát nguồn gửi, bảo đảm dữ liệu từ hiện trường đi vào đúng đơn vị và đúng tuyến được phân quyền.

Phần mềm lưu danh mục model camera ITS, trong đó ưu tiên các thiết bị đọc biển số có radar hỗ trợ đo tốc độ tại hiện trường như dòng camera giao thông đô thị, đồng thời cho phép chọn các model phù hợp quốc lộ, liên tỉnh hoặc khu đô thị hỗn hợp. Việc chọn model giúp kỹ thuật áp dụng đúng cấu hình kết nối mà không phải nhập lại từng thông số mặc định.

Các chức năng chính của phần mềm bao gồm: Khai báo camera theo tuyến và lý trình; thử kết nối và kiểm tra tín hiệu; xem ảnh hiện trường; tiếp nhận sự kiện biển số, tốc độ, loại xe từ camera; quản lý danh mục model thiết bị; phân quyền theo đơn vị và tuyến; mã hóa thông tin đăng nhập thiết bị, người xem trang giám sát tập trung không cần biết mật khẩu camera.

Hạng mục này không có chỉ số nhận diện. Độ tin cậy là kết nối thành công, nhận đúng sự kiện từ đúng camera, đúng tuyến. Sai cấu hình (sai địa chỉ mạng, sai model, sai lý trình) làm lệch vị trí sự kiện trên bản đồ và sổ sách, không phải lỗi nhận diện.

Nên thử kết nối và xem ảnh trước khi vận hành. Sự kiện gửi về được kiểm soát nguồn, không dùng tài khoản người dùng để giả sự kiện. Mật khẩu thiết bị không lưu dạng đọc được.

Mỗi camera kết nối nên gắn một bản ghi sổ tài sản loại hệ thống ITS ở mục 10. Sự kiện ở các mục 1, 2, 3 và 6 thừa kế tuyến, lý trình và đơn vị từ bản ghi này.

---

## 5. Giám sát tập trung trên tuyến và bản đồ camera trên nền tảng RMMS

Đặc điểm:

Hạng mục này không nhận diện hình ảnh. Phần mềm RMMS hiển thị và quản lý dữ liệu đã có: luồng hình, sự kiện đếm xe và vượt tốc lấy từ camera của hãng.

Trang giám sát tập trung trên tuyến cho phép trực ban theo dõi nhiều camera cùng lúc: lưới hình nhiều ô, kéo thả camera vào từng ô, lưu bố cục theo ca trực, phóng to một camera toàn màn hình khi cần xử lý tình huống. Bố cục gồm một camera lớn, lưới hai nhân hai, lưới ba nhân hai hoặc bố cục tự do.

Cùng trang này, phần mềm tích hợp bản đồ số của RMMS. Bản đồ gồm hai lớp:

Lớp nền dùng lớp bản đồ chung của thế giới (địa hình, vệ tinh) làm khung định vị, giúp người vận hành nhận ra vị trí địa lý.

Lớp bản đồ và tài sản được vẽ lại theo chuẩn Việt Nam: ranh giới hành chính, tuyến đường, lý trình, điểm camera và tài sản trên tuyến. Điểm camera, sự kiện và sổ tài sản nằm trên lớp này, không lấy từ lớp nền thế giới.

Người dùng bấm vào điểm camera trên bản đồ để xem đếm phương tiện, sự kiện vượt tốc độ, ảnh hoặc luồng hình tại điểm đó. Màn hình cho phép chia tỷ lệ lưới hình và bản đồ, ẩn bản đồ khi cần tập trung theo dõi hình ảnh. Thông tin tóm tắt tại mỗi điểm camera gồm tên, mã, lý trình, tọa độ, tuyến, tổng số phương tiện và số xe vượt tốc độ.

Màn hình ghép tại phòng trực là thiết bị hiển thị tại trung tâm điều hành. Khi đơn vị trang bị màn hình ghép, phần mềm có thể đưa nguồn hình ra thiết bị đó.

Giải pháp giúp trực ban tìm camera theo tuyến và vị trí trên bản đồ thay vì phải nhớ địa chỉ từng thiết bị, đồng thời gắn hình ảnh hiện trường với đúng đoạn đường đang quản lý trong RMMS.

Các chức năng chính của phần mềm bao gồm: Lưới hình nhiều camera trên trang giám sát tập trung; kéo thả và lưu bố cục theo người dùng; phóng to toàn màn hình; bản đồ hai lớp (nền thế giới và lớp tài sản theo chuẩn Việt Nam); xem đếm xe và sự kiện vượt tốc tại điểm camera; chia màn hình lưới hình và bản đồ; phân quyền khai thác theo đơn vị quản lý.

Hạng mục này không có chỉ số nhận diện. Chất lượng hình phụ thuộc luồng camera và đường truyền (ảnh định kỳ hoặc video liên tục khi có quang hoặc mạng riêng). Số đếm xe và vượt tốc tại điểm camera lấy từ sự kiện ở mục 1, 2 và 3, không do bản đồ tự nhận diện.

Điểm trên bản đồ chỉ thể hiện camera, không trộn các loại tài sản khác. Sai lý trình trên phiếu kết nối làm lệch vị trí trên bản đồ.

Điểm trên bản đồ là tài sản camera ITS. Thông tin đếm xe và vượt tốc là sự kiện. Khi xử lý, người vận hành có thể mở sự cố sau khi xác nhận.

---

## 6. AI nhận diện vi phạm tốc độ, quá tải kết hợp đối chiếu đăng kiểm

Đặc điểm:

Đọc biển số và tốc độ do trí tuệ nhân tạo trên camera. Đối chiếu đăng kiểm và đề xuất lỗi do quy tắc trên phần mềm RMMS. Không dùng phân tích ảnh trên máy chủ để đọc lại biển số.

Phần mềm AI nhận diện vi phạm tốc độ và quá tải là giải pháp hỗ trợ tuần tra, thanh tra tải trọng trên tuyến, ứng dụng dữ liệu biển số, tốc độ từ camera đọc biển số và dữ liệu tải trọng khi có cầu cân, kết hợp đối chiếu thông tin phương tiện để đề xuất lỗi trước khi lập hồ sơ sự cố.

Hệ thống tiếp nhận biển số và tốc độ do camera gửi về, tra cứu thông tin phương tiện gồm số trục, tải trọng toàn bộ cho phép và tải trọng hàng hóa. Trên cơ sở đó phần mềm đề xuất các nhóm lỗi gồm vượt tốc độ, quá tải trọng toàn bộ, quá tải hàng hóa hoặc không có trong dữ liệu đăng kiểm. Người vận hành xác nhận hoặc bỏ qua từng sự kiện, bảo đảm không tự động lập sự cố khi chưa có sự kiểm tra của con người.

Khi được xác nhận, sự việc được đưa vào quy trình sự cố của RMMS để giao việc, theo dõi và báo cáo. Dữ liệu sự kiện gồm thời gian, vị trí camera, lý trình, biển số, tốc độ, loại phương tiện và hình ảnh liên quan, phục vụ tra cứu và xuất báo cáo theo thời gian, theo phương tiện, theo tuyến.

Các chức năng chính của phần mềm bao gồm: Tiếp nhận sự kiện biển số và tốc độ từ camera; tiếp nhận dữ liệu tải trọng khi có cầu cân; đối chiếu thông tin đăng kiểm phương tiện; đề xuất lỗi vượt tốc, quá tải, không có đăng kiểm; xác nhận hoặc bỏ qua bởi người vận hành; lập sự cố trên RMMS sau khi xác nhận; lưu ảnh và thông tin sự kiện; tra cứu và báo cáo theo thời gian, biển số, tuyến, camera; xuất báo cáo Excel, PDF hoặc CSV.

Chỉ số kỹ thuật:

- Biển số, bắt xe, hướng: theo tài liệu hãng, xem mục 2 (iDS-TCM403-GIR: đọc biển trên 98%, bắt xe trên 99%, hướng trên 98,5%).
- Tốc độ tại điểm: chỉ iDS-TCM403-GIR, radar 77 GHz, đến 120 km/h, sai số cộng trừ 2 km/h theo tài liệu Hikvision. iDS-TCM403-BI và iDS-2CD7A46G2/LM không có radar tích hợp cùng thông số; không lấy sai số cộng trừ 2 km/h cho các model đó.
- Quá tải không phải nhận diện hình ảnh: số liệu cầu cân và dữ liệu đăng kiểm. Sai số thuộc thiết bị cân và độ mới của đăng kiểm.
- Đề xuất lỗi (vượt tốc, quá tải, không đăng kiểm) là quy tắc phần mềm; bắt buộc người vận hành xác nhận. Không tự lập sự cố.

Phần mềm RMMS dùng sự kiện đã xử lý tại camera, rồi đối chiếu đăng kiểm trên hệ thống trung tâm. Chỉ số trên tài liệu hãng phục vụ đánh giá kỹ thuật, không thay thế hiệu chuẩn radar và nghiệm thu trên tuyến khi dùng cho xử lý vi phạm.

Bản ghi chờ xác nhận là sự kiện đọc biển số. Sau xác nhận trở thành sự cố trên RMMS. Hạng mục này không tạo tài sản. Camera nguồn là tài sản ITS đã gắn lý trình.

---

## 7. AI nhận diện biển báo, cọc tiêu và đối soát tài sản trên tuyến

Đặc điểm:

Nhận diện bằng thị giác AI (ảnh gửi lên cloud). Phần mềm RMMS gửi ảnh, nhận đề xuất; người vận hành xác nhận trước khi ghi sổ tài sản hoặc lập sự cố mất, hư. Camera ITS của hãng không nhận diện biển báo và cọc tiêu. Không lấy chỉ số đọc biển số của camera cố định cho hạng mục này.

Phần mềm AI nhận diện biển báo và cọc tiêu là giải pháp hỗ trợ kiểm kê, đối soát tài sản trên hành lang đường bộ từ hình ảnh camera tuần đường hoặc camera cố định. Công nghệ trí tuệ nhân tạo phát hiện đối tượng biển báo, cọc tiêu và các đối tượng giao thông cùng nhóm, chuẩn hóa vị trí theo tuyến và lý trình, tránh tạo trùng khi cùng một cột được ghi nhận nhiều lần ở khoảng cách gần.

Người dùng xem danh sách đề xuất, xác nhận để ghi vào sổ tài sản hoặc bỏ qua trường hợp nhận nhầm. Hệ thống đối soát với tài sản đã có trên sổ: tại vị trí kỳ vọng nếu không còn phát hiện đối tượng, phần mềm đề xuất sự cố mất hoặc hư hỏng để tuần đường, tuần kiểm xử lý. Nhóm chức năng này phục vụ quản lý tài sản trên hành lang đường, không thay thế chức năng kiểm định hư hỏng mặt đường.

Các chức năng chính của phần mềm bao gồm: Nhận diện biển báo và cọc tiêu từ hình ảnh camera; chuẩn hóa tọa độ và tuyến; cảnh báo trùng vị trí gần; xác nhận ghi sổ tài sản; đối soát tài sản kỳ vọng với kết quả nhận diện; đề xuất sự cố mất hoặc hư khi không còn thấy đối tượng; bản đồ thể hiện điểm đã có, điểm đề xuất mới và điểm đã xác nhận; tra cứu theo tuyến, ngày, loại đối tượng; xuất báo cáo theo thời gian và theo tuyến.

Hãng không công bố phần trăm nhận diện biển báo và cọc tiêu trên camera ITS. Điểm tin cậy trên từng đề xuất chỉ để người dùng tham khảo. Kết quả chỉ ghi sổ hoặc lập sự cố sau khi người vận hành xác nhận. Đối soát trùng theo khoảng cách gần (10 mét trên thiết kế). Sự cố mất tài sản là đối soát sổ với kết quả nhận diện, không phải một lớp nhận diện riêng.

Ảnh tuyến và ảnh Chi cục không đưa lên công cụ gán nhãn công cộng. Hạng mục này khác mục 8 (mặt đường) và mục 9 (tài sản rộng hơn: hộ lan, cột Km).

Đề xuất đã xác nhận được ghi sổ tài sản (biển báo, cọc tiêu). Không thấy đối tượng tại điểm kỳ vọng thì lập sự cố mất hoặc hư. Ảnh quan sát là bằng chứng, chưa phải tài sản.

---

## 8. AI kiểm định mặt đường từ hình ảnh camera

Đặc điểm:

Nhận diện bằng thị giác AI (ảnh gửi lên cloud). Phần mềm RMMS gửi ảnh tuần đường, nhận dạng hư, lưu kết quả; người vận hành xác nhận trước khi lập sự cố. Camera ITS của hãng không nhận diện ổ gà, nứt mặt đường.

Phần mềm AI kiểm định mặt đường là giải pháp hỗ trợ ghi nhận hiện trường hư hỏng kết cấu mặt đường từ hình ảnh camera tuần đường và các nguồn hình ảnh liên quan. Hệ thống nhận diện các dạng hư gồm ổ gà, nứt dọc, nứt ngang, nứt mai rùa, bong bật, lún vệt bánh xe, chảy nhựa, vá, sụt lề và hư mép, đồng thời đưa ra mức độ, vị trí và gợi ý ưu tiên xử lý.

Kết quả nhận diện được trình bày kèm hình ảnh, khung đối tượng và độ tin cậy để người dùng kiểm tra. Người vận hành xác nhận để tạo vấn đề hoặc sự cố trên RMMS, bảo đảm quy trình ghi nhận hiện trường vẫn do đơn vị quản lý quyết định, có thêm lớp hỗ trợ của trí tuệ nhân tạo. Dữ liệu phục vụ theo dõi tình trạng mặt đường theo đoạn, tuyến và thời gian, hỗ trợ lập kế hoạch bảo trì.

Các chức năng chính của phần mềm bao gồm: Nhận diện các dạng hư mặt đường từ ảnh camera; phân loại và đánh giá mức độ; gắn vị trí theo tuyến và đoạn đường; xác nhận tạo vấn đề hoặc sự cố; tra cứu lịch sử kiểm định theo đoạn và theo thời gian; hiển thị trên bản đồ; xuất báo cáo phục vụ bảo trì; phân quyền theo đơn vị quản lý tuyến.

Hãng camera không công bố nhận diện ổ gà, nứt trên các model iDS-TCM403 và iDS-2CD7A46G2. Không dùng chỉ số đọc biển số 98 đến 99% cho hạng mục mặt đường. Mười nhóm hư (ổ gà, nứt dọc, nứt ngang, nứt mai rùa, chảy nhựa, bong bật, lún vệt bánh, vá, hư mép, sạt lở) là danh mục trên phần mềm RMMS.

Người dùng xem ảnh, khung đối tượng và mức độ, rồi xác nhận mới tạo vấn đề. Sự cố nghiêm trọng có thể đề xuất tạo nhanh, vẫn do người quyết định.

Kết quả là phát hiện hư gắn đoạn mặt đường. Sau xác nhận trở thành sự cố hoặc vấn đề. Hạng mục này không tạo tài sản mới. Có thể cập nhật tình trạng đoạn mặt đường khi đơn vị chốt.

---

## 9. AI phát hiện tài sản, thiết bị mới từ camera tuần đường

Đặc điểm:

Nhận diện bằng thị giác AI (ảnh gửi lên cloud). Phần mềm RMMS gửi ảnh, nhận đề xuất loại tài sản, tọa độ, tuyến; người vận hành xác nhận trước khi ghi sổ tài sản.

Phần mềm AI phát hiện tài sản và thiết bị mới là giải pháp hỗ trợ bổ sung cơ sở dữ liệu kết cấu hạ tầng từ camera lắp trên xe tuần đường. Trong quá trình tuần, hệ thống phát hiện các đối tượng chưa có trong cơ sở dữ liệu như biển báo, hộ lan, cột Km và các loại thiết bị liên quan, đồng thời ghi nhận loại tài sản, tọa độ và tuyến đường đi kèm chuyến tuần.

Danh sách đề xuất được đưa ra để người dùng xác nhận tạo bản ghi tài sản hoặc bỏ qua khi nhận nhầm. Hệ thống cảnh báo khi đề xuất nằm gần một tài sản cùng loại đã có trên bản đồ, hạn chế tạo trùng. Điểm tài sản mới do AI đề xuất được thể hiện khác với tài sản đã kiểm kê để đơn vị đối soát trước khi chính thức đưa vào sổ.

Các chức năng chính của phần mềm bao gồm: Nhận diện đối tượng mới từ camera xe tuần; xác định loại tài sản, tọa độ, tuyến đường; danh sách đề xuất chờ xác nhận; cảnh báo trùng vị trí gần; xác nhận tạo bản ghi tài sản hoặc bỏ qua; hiển thị trên bản đồ giám sát tài sản; tra cứu theo tuyến, ngày, loại tài sản; liên kết với sổ tài sản RMMS sau khi xác nhận.

Hãng không công bố phần trăm cho hạng mục này. Danh mục đối tượng gồm biển báo, hộ lan, cột Km, đèn, camera ITS, không trộn với các dạng hư mặt đường ở mục 8. Cảnh báo trùng vị trí gần theo thiết kế 10 mét. Bắt buộc xác nhận trước khi tạo tài sản.

Camera xe tuần không thay camera ITS cố định. Sai số vị trí đề xuất phụ thuộc định vị trên xe tuần. Ảnh gửi lên dịch vụ phân tích theo chính sách của đơn vị, không đưa kho ảnh ra công cụ công cộng.

Đề xuất là ứng viên tài sản, chưa vào sổ. Xác nhận thì ghi sổ tài sản. Bỏ qua thì loại bỏ nhận nhầm. Không lập sự cố trừ khi đơn vị quy định riêng.

---

## 10. Quản lý camera ITS trên sổ tài sản kết cấu hạ tầng

Đặc điểm:

Hạng mục này không nhận diện hình ảnh. Phần mềm RMMS quản lý hồ sơ tài sản camera, liên kết với kết nối vận hành và sự kiện ở các mục 1, 2, 3 và 6.

Phần mềm quản lý mỗi camera trên tuyến như một tài sản kết cấu hạ tầng trong sổ tài sản RMMS, thống nhất với các loại tài sản đường bộ khác về tuyến, lý trình, tọa độ và thông số kỹ thuật. Camera không được quản lý tách rời ngoài sổ sách, bảo đảm công tác kiểm kê, báo cáo và vận hành gắn với cùng một bản ghi.

Người dùng khai thác danh sách và phiếu theo loại hệ thống ITS, cập nhật thông tin chung, vị trí trên tuyến và các thuộc tính đặc thù. Kết nối vận hành gồm xem hình, nhận sự kiện và theo dõi trạng thái được gắn với đúng tài sản đã được cấp mã, phục vụ Chi cục, Ban QLDA đối soát thiết bị đang vận hành với hồ sơ tài sản trên tuyến.

Các chức năng chính của phần mềm bao gồm: Danh sách và phiếu tài sản loại hệ thống ITS; gắn tuyến, lý trình, tọa độ; liên kết bản ghi tài sản với kết nối vận hành camera; tìm kiếm, lọc theo tuyến và đơn vị; nhập và cập nhật theo mẫu sổ tài sản; phân quyền theo phạm vi quản lý; phục vụ báo cáo tài sản và giám sát thiết bị trên tuyến.

Hạng mục này không có chỉ số nhận diện. Chất lượng hồ sơ là đúng tuyến, lý trình, tọa độ và đúng mã model thiết bị. Sai hồ sơ làm lệch sự kiện từ camera và vị trí trên bản đồ.

Một camera đang vận hành tương ứng một tài sản ITS trên sổ. Không để camera ngoài sổ tài sản.

Bản ghi này là tài sản. Sự kiện ở các mục 1, 2, 3 và 6 tham chiếu mã tài sản và lý trình trên RMMS. Các mục 7, 8, 9 không ghi đè loại hệ thống ITS, trừ khi phát hiện thêm camera mới ở mục 9 và được xác nhận.

---

## Nguồn số liệu kỹ thuật

Chỉ số đọc biển số, bắt xe, hướng xe và tốc độ radar lấy từ tài liệu kỹ thuật Hikvision của các model iDS-TCM403-GIR, iDS-TCM403-BI và iDS-2CD7A46G2/LM-IZHS (chi tiết tại các mục 1, 2, 3 và 6). Đường dẫn đầy đủ nằm ở mục Tài liệu tham khảo của hãng.

Nhận diện biển báo, cọc tiêu, hư mặt đường và tài sản mới từ ảnh tuần đường do thị giác AI (ảnh gửi lên cloud) thực hiện. Hãng camera không công bố phần trăm cho các hạng mục này. Người vận hành xác nhận trước khi ghi sổ hoặc lập sự cố.

RMMS là phần mềm trung tâm kết nối thiết bị và quản lý dữ liệu: sự kiện, sổ tài sản, sự cố, bản đồ và báo cáo.

Chỉ số trên tài liệu hãng và điểm tin cậy của nhận diện ảnh tuần đường phục vụ đánh giá kỹ thuật, không thay thế hiệu chuẩn và nghiệm thu trên tuyến khi dùng cho xử lý vi phạm.

---

## Tài liệu tham khảo của hãng

Mục lục đường dẫn tài liệu Hikvision đã đối chiếu ngày 08 tháng 9 năm 2026. Chỉ số trên thuyết minh lấy từ các nguồn này, trong điều kiện lắp đặt và chiếu sáng theo khuyến nghị của hãng.

### Trang sản phẩm

1. iDS-TCM403-GIR: [https://www.hikvision.com/en/products/ITS-Products/traffic-cameras/urban-road-anpr-cameras/ids-tcm403-gir/](https://www.hikvision.com/en/products/ITS-Products/traffic-cameras/urban-road-anpr-cameras/ids-tcm403-gir/)
2. iDS-TCM403-BI: [https://www.hikvision.com/en/products/ITS-Products/traffic-cameras/urban-road-anpr-cameras/ids-tcm403-bi/](https://www.hikvision.com/en/products/ITS-Products/traffic-cameras/urban-road-anpr-cameras/ids-tcm403-bi/)
3. iDS-2CD7A46G2/LM-IZHS: [https://www.hikvision.com/en/products/IP-Products/Network-Cameras/DeepinView-Series/ids-2cd7a46g2-lm-izhs-y-/](https://www.hikvision.com/en/products/IP-Products/Network-Cameras/DeepinView-Series/ids-2cd7a46g2-lm-izhs-y-/)

### Tài liệu kỹ thuật PDF

4. iDS-TCM403-GIR, ngày 01 tháng 8 năm 2024: [https://www.hikvision.com/content/dam/hikvision/products/S000000001/S000000177/S000000188/S000000209/OFR000286/M000073503/Data_Sheet/iDS-TCM403-GIR_Datasheet_20240801.pdf](https://www.hikvision.com/content/dam/hikvision/products/S000000001/S000000177/S000000188/S000000209/OFR000286/M000073503/Data_Sheet/iDS-TCM403-GIR_Datasheet_20240801.pdf)
5. iDS-TCM403-BI, ngày 24 tháng 4 năm 2025: [https://www.hikvision.com/content/dam/hikvision/pt-br/iDS-TCM403-BI_Datasheet_20250424.pdf](https://www.hikvision.com/content/dam/hikvision/pt-br/iDS-TCM403-BI_Datasheet_20250424.pdf)
6. iDS-2CD7A46G2/LM-IZHS (bản đối chiếu PDF): [https://www.maxalarm.sk/buxus/docs/datasheety/iDS-2CD7A46G2_LM-IZHSY_en_Datasheet.pdf](https://www.maxalarm.sk/buxus/docs/datasheety/iDS-2CD7A46G2_LM-IZHSY_en_Datasheet.pdf)

### Đối chiếu bản P (không phải model trên danh mục)

Bản P dùng khi so sánh chỉ số đọc biển số. Không gán các số của bản P cho bản LM trên thuyết minh.

7. iDS-2CD7A46G2/P-IZHS, trang sản phẩm: [https://www.hikvision.com/en/products/IP-Products/Network-Cameras/DeepinView-Series/ids-2cd7a46g2-p-izhs-y---5g-/](https://www.hikvision.com/en/products/IP-Products/Network-Cameras/DeepinView-Series/ids-2cd7a46g2-p-izhs-y---5g-/)
8. iDS-2CD7A46G2/P-IZHS, PDF ngày 25 tháng 4 năm 2025: [https://download.discomp.cz/hikvision/datasheets/iDS-2CD7A46G2-P-IZHSY-5G_Datasheet_20250425.pdf](https://download.discomp.cz/hikvision/datasheets/iDS-2CD7A46G2-P-IZHSY-5G_Datasheet_20250425.pdf)
