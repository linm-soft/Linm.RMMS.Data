# THUYẾT MINH CHỨC NĂNG PHẦN MỀM CAMERA TRONG RMMS

| STT | NỘI DUNG |
|-----|----------|
| 1 | Đếm và phân tích lưu lượng AI (có báo cáo theo thời gian và phương tiện) |
| 2 | Công nghệ trí tuệ nhân tạo AI nhận diện biển số xe, phương tiện quay đầu xe (có báo cáo theo thời gian và theo phương tiện) |
| 3 | Giám sát video màn hình tập trung tại Cục ĐBVN |
| 4 | Kết nối và quản lý camera ITS trên phần mềm RMMS |
| 5 | Tường hình và bản đồ camera trên nền tảng RMMS |
| 6 | AI nhận diện vi phạm tốc độ, quá tải kết hợp đối chiếu đăng kiểm |
| 7 | AI nhận diện biển báo, cọc tiêu và đối soát tài sản trên tuyến |
| 8 | AI kiểm định mặt đường từ hình ảnh camera |
| 9 | AI phát hiện tài sản, thiết bị mới từ camera tuần đường |
| 10 | Quản lý camera ITS trên sổ tài sản kết cấu hạ tầng |

---

## 1. Đếm và phân tích lưu lượng AI (có báo cáo theo thời gian và phương tiện)

Đặc điểm:

Nhận diện phương tiện giao thông qua quá trình phân tích hình ảnh đa luồng một cách chi tiết. Phần mềm ứng dụng nhiều thuật toán tiên tiến trong công nghệ trí tuệ nhân tạo AI cho phép các phương tiện riêng lẻ được xác định và phân loại một cách đồng thời với độ chính xác cao, trong khi vẫn duy trì được việc thực thi thời nhằm mục đích phân luồng và điều khiển hệ thống đèn tín hiệu giao thông một cách phù hợp với tình hình giao thông hiện tại. Hệ thống được xây dựng các chức năng có thể tự học trong quá trình hoạt động qua đó liên tục tối ưu được quá trình điều khiển và phân luồng giao thông.

Phần mềm phân tích lưu lượng được xây dựng dựa trên công nghệ trí tuệ nhân tạo, với đầu vào là tất cả luồng video realtime từ các camera được thu thập về máy tính sau đó máy tính tiến hành phân tích song song đa luồng và cho kết quả đầu ra là số lượng, loại phương tiện đang lưu thông qua nút theo các hướng đi thẳng, rẽ phải, rẽ trái của (ô tô, xe máy, xe bus, xe tải, mật độ phương tiện…..) đây là các số liệu cần thiết cho quá trình điều khiển hệ thống đèn tín hiệu giao thông.

Phần mềm truy cập trực tiếp vào khối quan trắc, đo đếm lưu lượng giao thông qua mạng LAN giúp khả năng truy xuất video trực tiếp mà không cần quan tâm đến tốc độ đường truyền internet, hoạt động trao đổi dữ liệu với server là những gói dữ liệu đã được xử lý tại chỗ qua và được mã hóa dưới dạng text vì vậy internet 4G hoàn toàn có thể đáp ứng được nhu cầu liên lạc giữa bộ điều khiển và server trung tâm góp phần giảm tải tài nguyên tính toán cho server, điều này đặc biệt hữu ích tại những nơi gặp nhiều khó khăn trong việc thiết lập đường truyền internet cáp quang hay sự liên kết giữa các cột tín hiệu với nhau gặp nhiều khó khăn trong các hệ thống cũ cần nâng cấp cải tạo.

Hệ thống server cho phép lưu lại dữ liệu trong quá trình vận hành giúp các đơn vị vận hành có thể trích xuất dữ liệu để phân tích, báo cáo, đánh giá về tình hình giao thông của từng nút giao thông.

---

## 2. Công nghệ trí tuệ nhân tạo AI nhận diện biển số xe, phương tiện quay đầu xe (có báo cáo theo thời gian và theo phương tiện)

Đặc điểm:

Phần mềm AI nhận diện biển số xe và phát hiện phương tiện quay đầu là giải pháp giám sát giao thông thông minh, ứng dụng công nghệ trí tuệ nhân tạo, thị giác máy tính và xử lý hình ảnh để tự động nhận diện phương tiện, đọc biển số, theo dõi hướng di chuyển và phát hiện hành vi quay đầu xe tại khu vực giám sát.

Hệ thống tiếp nhận hình ảnh trực tiếp từ camera giao thông hoặc camera chuyên dụng. Công nghệ AI tự động phát hiện phương tiện trong khung hình, phân loại phương tiện và nhận dạng biển số xe. Phần mềm có khả năng ghi nhận biển số của ô tô, xe tải, xe khách, xe máy và các loại phương tiện khác tùy theo cấu hình camera và điều kiện triển khai thực tế.

Thông qua việc theo dõi quỹ đạo di chuyển của từng phương tiện, phần mềm xác định hướng đi ban đầu, hướng đi sau khi chuyển hướng và tự động phát hiện trường hợp phương tiện thực hiện hành vi quay đầu trong khu vực được thiết lập. Khi phát hiện sự kiện quay đầu xe, hệ thống ghi nhận đầy đủ thời gian, vị trí, làn đường, hướng di chuyển, loại phương tiện, biển số xe và hình ảnh hoặc video liên quan.

Phần mềm cho phép thiết lập các vùng giám sát, làn đường, hướng lưu thông và khu vực cấm quay đầu theo yêu cầu quản lý. Khi phương tiện quay đầu, hệ thống có thể tự động phát cảnh báo, đồng thời lưu trữ hình ảnh trước, trong và sau thời điểm xảy ra sự kiện để phục vụ kiểm tra, đối chiếu và xử lý.

Dữ liệu được tổng hợp thành báo cáo theo thời gian và theo từng phương tiện. Người dùng có thể tra cứu lịch sử theo biển số xe, loại phương tiện, thời gian, vị trí, camera, hướng di chuyển. Hệ thống cũng hỗ trợ thống kê số lượng phương tiện quay đầu, tần suất xuất hiện của từng biển số trong khoảng thời gian được lựa chọn.

Các chức năng chính của phần mềm bao gồm: Phát hiện và theo dõi phương tiện tự động bằng công nghệ AI; nhận diện, đọc và lưu trữ biển số xe; phân loại phương tiện như xe máy, ô tô con, xe tải và xe khách; theo dõi quỹ đạo và xác định hướng di chuyển của phương tiện; tự động phát hiện hành vi quay đầu xe; thiết lập khu vực được phép hoặc không được phép quay đầu; ghi nhận thời gian, vị trí, làn đường và camera phát hiện sự kiện; lưu hình ảnh toàn cảnh, ảnh phương tiện, ảnh biển số và video sự kiện; phát cảnh báo khi phát hiện phương tiện quay đầu lên biển cảnh báo cho các phương tiện lưu thông trên khu vực đó; tra cứu lịch sử di chuyển và lịch sử sự kiện theo biển số xe; thống kê số lượt quay đầu theo ngày, tuần, tháng hoặc khoảng thời gian tùy chọn; báo cáo theo từng phương tiện, loại phương tiện, biển số, vị trí và hướng di chuyển; xuất báo cáo dưới các định dạng phổ biến như Excel, PDF hoặc CSV; phân quyền người dùng, quản lý tài khoản và ghi nhận lịch sử thao tác; hỗ trợ kết nối với hệ thống camera, trung tâm điều hành và các phần mềm quản lý giao thông khác.

Giải pháp giúp tự động hóa công tác giám sát phương tiện và phát hiện hành vi quay đầu xe, giảm phụ thuộc vào việc theo dõi thủ công, nâng cao độ chính xác và khả năng truy xuất dữ liệu. Các báo cáo theo thời gian và theo phương tiện cung cấp cơ sở phục vụ quản lý giao thông, phân tích hành vi lưu thông và xây dựng phương án tổ chức giao thông phù hợp.

---

## 3. Giám sát video màn hình tập trung tại Cục ĐBVN

Đặc điểm:

Cung cấp các tính năng cơ bản của hệ thống giám sát video, làm nền tảng để quản lý camera, người dùng, sự kiện, cảnh báo, lưu trữ và khai thác hình ảnh.

Tự động phát hiện phương tiện với độ chính xác lên tới 99% trong điều kiện tiêu chuẩn. Tự động phân loại phương tiện (xe tải, xe khách, xe con) với độ chính xác lên tới 98% trong điều kiện tiêu chuẩn, loại trừ các trường hợp phương tiện nối đuôi nhau. Đo đếm lưu lượng phương tiện với tỷ lệ sai số không quá ± 2% và đo tốc độ trung bình của phương tiện với sai số không quá ± 5%. Tự động nhận dạng biển số phương tiện (ô tô) với độ chính xác ≥ 98% trong điều kiện tiêu chuẩn (loại trừ các trường hợp biển số bị bẩn mờ, cong vênh, bị che khuất 1 phần hoặc hoàn toàn). Tự động phát hiện và ghi nhận các sự kiện, sự cố và các trường hợp vi phạm giao thông xảy ra trên cao tốc với tỷ lệ phát hiện lên tới 90% trong điều kiện tiêu chuẩn. Sẵn sàng tích hợp với phần mềm ITS của bên thứ 3. Ghi chú: Điều kiện tiêu chuẩn: ban ngày, đảm bảo đủ môi trường ánh sáng, không mưa, sương mù, chất lượng hình ảnh tốt, không bị lóa, mờ, mắt thường nhìn rõ.

Tự động phát hiện phương tiện lấn làn đè vạch, vượt đèn xanh đèn đỏ, quay đầu xe không đúng quy định.

Tự động phát hiện phương tiện đậu xe trong phạm vi có camera nhưng sai quy định dừng đỗ.

Tự động phát hiện vật rơi trên đường để đưa ra cảnh báo cho tuần đường tuần kiểm trong phạm vi có camera.

Mô hình triển khai: Hỗ trợ triển khai độc lập hoặc làm nền tảng tích hợp các module ứng dụng khác trong hệ thống giám sát tập trung.

Quản lý camera/video: Hỗ trợ quản lý thiết bị camera, xem trực tiếp, xem lại, khai thác dữ liệu video theo phân quyền.

Quản lý lưu trữ: Hỗ trợ lưu trữ chính/phụ, phục vụ ghi hình, xem lại và quản lý dữ liệu video.

Quản lý cảnh báo: Hỗ trợ quản lý cảnh báo, tiếp nhận và xử lý sự kiện từ thiết bị/hệ thống.

Quản lý bản đồ: Hỗ trợ tích hợp bản đồ Google Map hoặc bản đồ số tương đương để quản lý vị trí thiết bị, điểm camera và sự kiện.

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

---

## 4. Kết nối và quản lý camera ITS trên phần mềm RMMS

Đặc điểm:

Phần mềm cho phép đơn vị quản lý đường bộ khai báo, kết nối và vận hành camera ITS ngay trong hệ thống RMMS, không phải mở phần mềm camera độc lập. Người dùng nhập đầy đủ thông tin hiện trường gồm mã camera, tên gọi, model thiết bị, địa chỉ mạng, tuyến đường và lý trình, từ đó mỗi điểm camera được gắn đúng vị trí nghiệp vụ trên tuyến được quản lý.

Hệ thống hỗ trợ thử kết nối trước khi đưa camera vào vận hành, cho phép xem ảnh hiện trường ngay sau khi kết nối thành công và tiếp nhận sự kiện do camera gửi về gồm biển số, tốc độ, loại phương tiện, màu sắc và hướng di chuyển. Việc tiếp nhận sự kiện được thực hiện theo kênh riêng, có kiểm soát nguồn gửi, bảo đảm dữ liệu từ hiện trường đi vào đúng đơn vị và đúng tuyến được phân quyền.

Phần mềm lưu danh mục model camera ITS, trong đó ưu tiên các thiết bị ANPR có radar hỗ trợ đo tốc độ và đọc biển số tại biên như dòng camera giao thông đô thị, đồng thời cho phép chọn các model phù hợp quốc lộ, liên tỉnh hoặc khu đô thị hỗn hợp. Việc chọn model giúp kỹ thuật áp dụng đúng cấu hình kết nối mà không phải nhập lại từng thông số mặc định.

Các chức năng chính của phần mềm bao gồm: Khai báo camera theo tuyến và lý trình; thử kết nối và kiểm tra tín hiệu; xem ảnh hiện trường; tiếp nhận sự kiện biển số, tốc độ, loại xe từ camera; quản lý danh mục model thiết bị; phân quyền theo đơn vị và tuyến; mã hóa thông tin đăng nhập thiết bị, người xem tường hình không cần biết mật khẩu camera.

---

## 5. Tường hình và bản đồ camera trên nền tảng RMMS

Đặc điểm:

Phần mềm cung cấp màn hình tường hình tại trung tâm điều hành để trực ban theo dõi nhiều camera trên tuyến cùng lúc. Người vận hành kéo thả camera vào các ô hiển thị, sắp xếp theo ca trực, lựa chọn bố cục một camera lớn, lưới hai nhân hai, lưới ba nhân hai hoặc bố cục tự do, đồng thời phóng to một camera toàn màn hình khi cần xử lý tình huống.

Song song với tường hình, phần mềm tích hợp bản đồ số trên nền tảng GIS của RMMS, hiển thị vị trí các camera theo tuyến đường. Người dùng bấm vào điểm camera trên bản đồ để xem đếm phương tiện, sự kiện vượt tốc độ, ảnh hoặc luồng hình tại điểm đó. Màn hình cho phép chia tỷ lệ tường hình và bản đồ, ẩn bản đồ khi cần tập trung theo dõi hình ảnh. Thông tin tóm tắt tại mỗi điểm camera gồm tên, mã, lý trình, tọa độ, tuyến, tổng số phương tiện và số xe vượt tốc độ.

Giải pháp giúp trực ban tìm camera theo tuyến và vị trí trên bản đồ thay vì phải nhớ địa chỉ từng thiết bị, đồng thời gắn hình ảnh hiện trường với đúng đoạn đường đang quản lý trong RMMS.

Các chức năng chính của phần mềm bao gồm: Tường hình nhiều camera; kéo thả và lưu bố cục theo người dùng; phóng to toàn màn hình; bản đồ GIS vị trí camera trên tuyến; xem đếm xe và sự kiện vượt tốc tại điểm camera; chia màn hình tường hình và bản đồ; phân quyền khai thác theo đơn vị quản lý.

---

## 6. AI nhận diện vi phạm tốc độ, quá tải kết hợp đối chiếu đăng kiểm

Đặc điểm:

Phần mềm AI nhận diện vi phạm tốc độ và quá tải là giải pháp hỗ trợ tuần tra, thanh tra tải trọng trên tuyến, ứng dụng dữ liệu biển số, tốc độ từ camera ANPR và dữ liệu tải trọng khi có cầu cân, kết hợp đối chiếu thông tin phương tiện để đề xuất lỗi trước khi lập hồ sơ sự cố.

Hệ thống tiếp nhận biển số và tốc độ do camera gửi về, tra cứu thông tin phương tiện gồm số trục, tải trọng toàn bộ cho phép và tải trọng hàng hóa. Trên cơ sở đó phần mềm đề xuất các nhóm lỗi gồm vượt tốc độ, quá tải trọng toàn bộ, quá tải hàng hóa hoặc không có trong dữ liệu đăng kiểm. Người vận hành xác nhận hoặc bỏ qua từng sự kiện, bảo đảm không tự động lập sự cố khi chưa có sự kiểm tra của con người.

Khi được xác nhận, sự việc được đưa vào quy trình sự cố của RMMS để giao việc, theo dõi và báo cáo. Dữ liệu sự kiện gồm thời gian, vị trí camera, lý trình, biển số, tốc độ, loại phương tiện và hình ảnh liên quan, phục vụ tra cứu và xuất báo cáo theo thời gian, theo phương tiện, theo tuyến.

Các chức năng chính của phần mềm bao gồm: Tiếp nhận sự kiện biển số và tốc độ từ camera ANPR; tiếp nhận dữ liệu tải trọng khi có cầu cân; đối chiếu thông tin đăng kiểm phương tiện; đề xuất lỗi vượt tốc, quá tải, không có đăng kiểm; xác nhận hoặc bỏ qua bởi người vận hành; lập sự cố trên RMMS sau khi xác nhận; lưu ảnh và thông tin sự kiện; tra cứu và báo cáo theo thời gian, biển số, tuyến, camera; xuất báo cáo Excel, PDF hoặc CSV.

---

## 7. AI nhận diện biển báo, cọc tiêu và đối soát tài sản trên tuyến

Đặc điểm:

Phần mềm AI nhận diện biển báo và cọc tiêu là giải pháp hỗ trợ kiểm kê, đối soát tài sản trên hành lang đường bộ từ hình ảnh camera tuần đường hoặc camera cố định. Công nghệ trí tuệ nhân tạo phát hiện đối tượng biển báo, cọc tiêu và các đối tượng giao thông cùng nhóm, chuẩn hóa vị trí theo tuyến và lý trình, tránh tạo trùng khi cùng một cột được ghi nhận nhiều lần ở khoảng cách gần.

Người dùng xem danh sách đề xuất, xác nhận để ghi vào sổ tài sản hoặc bỏ qua trường hợp nhận nhầm. Hệ thống đối soát với tài sản đã có trên sổ: tại vị trí kỳ vọng nếu không còn phát hiện đối tượng, phần mềm đề xuất sự cố mất hoặc hư hỏng để tuần đường, tuần kiểm xử lý. Nhóm chức năng này phục vụ quản lý tài sản trên hành lang đường, không thay thế chức năng kiểm định hư hỏng mặt đường.

Các chức năng chính của phần mềm bao gồm: Nhận diện biển báo và cọc tiêu từ hình ảnh camera; chuẩn hóa tọa độ và tuyến; cảnh báo trùng vị trí gần; xác nhận ghi sổ tài sản; đối soát tài sản kỳ vọng với kết quả nhận diện; đề xuất sự cố mất hoặc hư khi không còn thấy đối tượng; bản đồ thể hiện điểm đã có, điểm đề xuất mới và điểm đã xác nhận; tra cứu theo tuyến, ngày, loại đối tượng; xuất báo cáo theo thời gian và theo tuyến.

---

## 8. AI kiểm định mặt đường từ hình ảnh camera

Đặc điểm:

Phần mềm AI kiểm định mặt đường là giải pháp hỗ trợ ghi nhận hiện trường hư hỏng kết cấu mặt đường từ hình ảnh camera tuần đường và các nguồn hình ảnh liên quan. Hệ thống nhận diện các dạng hư gồm ổ gà, nứt dọc, nứt ngang, nứt mai rùa, bong bật, lún vệt bánh xe, chảy nhựa, vá, sụt lề và hư mép, đồng thời đưa ra mức độ, vị trí và gợi ý ưu tiên xử lý.

Kết quả nhận diện được trình bày kèm hình ảnh, khung đối tượng và độ tin cậy để người dùng kiểm tra. Người vận hành xác nhận để tạo vấn đề hoặc sự cố trên RMMS, bảo đảm quy trình ghi nhận hiện trường vẫn do đơn vị quản lý quyết định, có thêm lớp hỗ trợ của trí tuệ nhân tạo. Dữ liệu phục vụ theo dõi tình trạng mặt đường theo đoạn, tuyến và thời gian, hỗ trợ lập kế hoạch bảo trì.

Các chức năng chính của phần mềm bao gồm: Nhận diện các dạng hư mặt đường từ ảnh camera; phân loại và đánh giá mức độ; gắn vị trí theo tuyến và đoạn đường; xác nhận tạo vấn đề hoặc sự cố; tra cứu lịch sử kiểm định theo đoạn và theo thời gian; hiển thị trên bản đồ; xuất báo cáo phục vụ bảo trì; phân quyền theo đơn vị quản lý tuyến.

---

## 9. AI phát hiện tài sản, thiết bị mới từ camera tuần đường

Đặc điểm:

Phần mềm AI phát hiện tài sản và thiết bị mới là giải pháp hỗ trợ bổ sung cơ sở dữ liệu kết cấu hạ tầng từ camera lắp trên xe tuần đường. Trong quá trình tuần, hệ thống phát hiện các đối tượng chưa có trong cơ sở dữ liệu như biển báo, hộ lan, cột Km và các loại thiết bị liên quan, đồng thời ghi nhận loại tài sản, tọa độ và tuyến đường đi kèm chuyến tuần.

Danh sách đề xuất được đưa ra để người dùng xác nhận tạo bản ghi tài sản hoặc bỏ qua khi nhận nhầm. Hệ thống cảnh báo khi đề xuất nằm gần một tài sản cùng loại đã có trên bản đồ, hạn chế tạo trùng. Điểm tài sản mới do AI đề xuất được thể hiện khác với tài sản đã kiểm kê để đơn vị đối soát trước khi chính thức đưa vào sổ.

Các chức năng chính của phần mềm bao gồm: Nhận diện đối tượng mới từ camera xe tuần; xác định loại tài sản, tọa độ, tuyến đường; danh sách đề xuất chờ xác nhận; cảnh báo trùng vị trí gần; xác nhận tạo bản ghi tài sản hoặc bỏ qua; hiển thị trên bản đồ giám sát tài sản; tra cứu theo tuyến, ngày, loại tài sản; liên kết với sổ tài sản RMMS sau khi xác nhận.

---

## 10. Quản lý camera ITS trên sổ tài sản kết cấu hạ tầng

Đặc điểm:

Phần mềm quản lý mỗi camera trên tuyến như một tài sản kết cấu hạ tầng trong sổ tài sản RMMS, thống nhất với các loại tài sản đường bộ khác về tuyến, lý trình, tọa độ và thông số kỹ thuật. Camera không được quản lý tách rời ngoài sổ sách, bảo đảm công tác kiểm kê, báo cáo và vận hành gắn với cùng một bản ghi.

Người dùng khai thác danh sách và phiếu theo loại hệ thống ITS, cập nhật thông tin chung, vị trí trên tuyến và các thuộc tính đặc thù. Kết nối vận hành gồm xem hình, nhận sự kiện và theo dõi trạng thái được gắn với đúng tài sản đã được cấp mã, phục vụ Chi cục, Ban QLDA đối soát thiết bị đang vận hành với hồ sơ tài sản trên tuyến.

Các chức năng chính của phần mềm bao gồm: Danh sách và phiếu tài sản loại hệ thống ITS; gắn tuyến, lý trình, tọa độ; liên kết bản ghi tài sản với kết nối vận hành camera; tìm kiếm, lọc theo tuyến và đơn vị; nhập và cập nhật theo mẫu sổ tài sản; phân quyền theo phạm vi quản lý; phục vụ báo cáo tài sản và giám sát thiết bị trên tuyến.
