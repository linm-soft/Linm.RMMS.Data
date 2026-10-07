# Camera Hikvision có sự kiện quay đầu — hồ sơ để quyết định

> Ngày tra: 2026-10-07  
> Trạng thái: **chưa chốt**. Tài liệu này chỉ gom trang hãng, không đổi model đang chạy trong RMMS.  
> Bối cảnh: thuyết minh QL.5 (`Thuyet minh BCKTKT - A4 - 18.9.docx`) cần «phát hiện phương tiện quay đầu» tại lối mở.  
> Peer: [`tra-loi-yeu-cau-hikvision.md`](tra-loi-yeu-cau-hikvision.md) · catalog [`../../context/camera-model.md`](../../context/camera-model.md)

## Kết luận để đọc trước khi chọn

Sự kiện tên **U-Turn** nằm ở dòng **checkpoint** (卡口), và chỉ khi camera ở **E-Police mode**. Hãng mô tả: xe cơ giới quay đầu tại nút giao nơi cấm quay đầu hoặc cấm rẽ trái.

Họ **iDS-TCM403** (bản đang chọn cho QL.5 / lab) **không** có dòng U-Turn và không có event hướng, đổi làn, ngược chiều, vượt tốc, tốc độ thấp, ùn, dừng.

Lối mở dải phân cách trên QL.5 không phải nút giao E-Police. Trang hãng không ghi sự kiện quay đầu cho kiểu lắp đó. Muốn dùng checkpoint cho lối mở thì phải thử một điểm hiện trường trước khi ghi vào thuyết minh.

## Model có dòng U-Turn trên hikvision.com

| Model | Phân giải | Làn | Ghi chú trang hãng | Trang |
|-------|-----------|-----|--------------------|-------|
| iDS-TCV500-HI | 5 MP, cảm biến 2/3" | Tối đa 2 | U-Turn chỉ E-Police | [Europe](https://www.hikvision.com/europe/products/ITS-Products/traffic-cameras/checkpoint-capture-cameras/ids-tcv500-hi/) |
| iDS-TCV507-HER | 5 MP, radar 60 GHz gắn sẵn, đèn trắng | Tối đa 2 | Cùng điều kiện E-Police. Có lắp bên đường | [Malaysia](https://www.hikvision.com/my/products/ITS-Products/traffic-cameras/checkpoint-capture-cameras/ids-tcv507-her/) |
| iDS-TCV900-HI | 9 MP | Tối đa 3 | Bản `/H1(UHK)` cùng dòng U-Turn trên datasheet khu vực | [Global](https://www.hikvision.com/en/products/ITS-Products/traffic-cameras/checkpoint-capture-cameras/ids-tcv900-hi/) |
| iDS-TCVC00-HI | 12 MP, cảm biến 1.1" | Tối đa 3 | U-Turn chỉ E-Police | [South Asia](https://www.hikvision.com/sa/products/ITS-Products/traffic-cameras/checkpoint-capture-cameras/ids-tcvc00-hi/) |

Hậu tố đổi tính năng. Datasheet **iDS-TCV500-BI** (2024-01-23) và **iDS-TCVC00-HE** (2025-04-14) không có dòng U-Turn. Bản **HI** / **HER** trong bảng thì có. Đơn hàng phải đúng mã đầy đủ, không đặt «TCV500» chung.

## Model RMMS đang dùng — không có U-Turn

| Model | Vai trò hiện tại | Sự cố hãng công bố |
|-------|------------------|--------------------|
| iDS-TCM403-BI(G)/G | Thuyết minh 4 MP, không radar | Event xe: ANPR (biển, 9 loại, màu, ảnh). Mục Event: HDD Error, Network Disconnected, IP Address Conflicted, Vehicle Detector Exception, Traffic Light Detector Exception. Không có event hướng, đổi làn, ngược chiều, vượt tốc, tốc độ thấp, ùn, dừng |
| iDS-TCM403-GIR | Lab ingest, có radar 77 GHz | Cùng nhóm sự cố đô thị, không có dòng U-Turn |

Nguồn: [iDS-TCM403-BI Global](https://www.hikvision.com/en/products/ITS-Products/traffic-cameras/urban-road-anpr-cameras/ids-tcm403-bi/) · [bản Hồng Kông](https://www.hikvision.com/hk/products/ITS-Products/traffic-cameras/urban-road-anpr-cameras/ids-tcm403-bi/).

## Ba hướng khi quyết định

| Hướng | Khi nào hợp | Việc còn lại |
|-------|-------------|--------------|
| Giữ TCM403 | Cần đếm lưu lượng và bằng chứng ảnh ANPR tại lối mở, chấp nhận không có sự kiện tên «quay đầu» | Ca trực xem ảnh bắt xe hoặc live. Đã ghi trong bản trả lời yêu cầu |
| Thêm một checkpoint HI hoặc HER, chỉ camera nhìn lối mở | Cần sự kiện U-Turn đúng tên hãng, và chấp nhận thử lắp E-Police tại một lối mở | Chọn đúng hậu tố. Thử 1 nút trước 14 nút. Catalog RMMS chưa có các mã TCV |
| Tự train | Hikvision không nhận lối mở thành sự kiện U-Turn sau khi thử | Album nhãn riêng, không trộn với hư mặt đường. Hướng dẫn tập sự: [`../../trainning-ai/huong-dan-trainning.html`](../../trainning-ai/huong-dan-trainning.html) |

Chưa chọn hướng nào trong file này.

## Nếu sau này chọn checkpoint

- Camera đếm mặt cắt vẫn là TCM403. Checkpoint là máy thứ hai, nhìn lối mở, không thay máy đếm.
- RMMS hôm nay ingest ANPR của TCM403. Sự kiện U-Turn của dòng TCV chưa có parser và chưa có mã trong `CameraModelCatalog`.
- E-Police trên trang hãng đi cùng đèn đỏ, vạch hướng, dừng trong nút. Những mục đó là bài phạt nguội. Thuyết minh QL.5 đang theo hướng cảnh báo vận hành, không xử phạt. Bật U-Turn không có nghĩa bật cả gói phạt.
- Giấy phép vùng biển Asia-Pacific / Việt Nam phải hỏi hãng theo đúng mã đặt hàng. Trang Global của TCM403 có Việt Nam trong danh sách biển. Trang checkpoint ở trên không lặp lại câu đó trên mọi SKU.
