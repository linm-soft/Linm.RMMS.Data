# Train model ổ gà — từ ảnh có nhãn tới file cho trang Camera tuần

Trang Camera tuần (`/camera-tuan`) chỉ **chạy** file ONNX trong trình duyệt. Train làm trên [Roboflow](https://app.roboflow.com), xong mới copy file ONNX vào `public/models/` của `Linm.Web.RMMS.Mobile`.

Bộ mẫu đang dùng: [Annotated Potholes Dataset](https://www.kaggle.com/datasets/chitholian/annotated-potholes-dataset?resource=download) — 665 ảnh, mỗi ảnh một file XML cùng tên (`img_1.jpg` + `img_1.xml`). Workspace mẫu: `linm-soft`, project `o-ga`.

## 1. Ảnh

- Ảnh mặt đường có ổ gà, chụp ban ngày, nhìn từ xe hoặc từ trên xuống. Ảnh đêm, mưa, lỗ ngập nước, hoặc lỗ chiếm gần hết khung dễ trượt.
- Giữ tên file không dấu cách. Mỗi ảnh một nhãn cùng tên.
- Không trộn ảnh biển báo vào project này. Biển báo dùng model khác (`traffic-sign-yolo11s.onnx`).

## 2. Gắn nhãn

Hai cách.

**Đã có XML** (bộ Kaggle): mỗi file XML là một hộp chữ nhật quanh ổ gà, lớp tên `pothole`. Không vẽ lại.

**Ảnh chưa có nhãn:** trên Roboflow, menu **Annotate**. Vẽ hộp quanh từng ổ gà, lớp đúng một tên `pothole`. Ảnh không có ổ gà thì bỏ, không gán hộp rỗng.

## 3. Upload

1. Vào project **Object Detection** (project `o-ga`).
2. Menu **Upload Data**.
3. Kéo cả thư mục: ảnh và file XML nằm cạnh nhau. Roboflow đọc XML và vẽ hộp sẵn. Bộ Kaggle hiện **665 annotated, 0 not annotated**.
4. Hộp **How should we split these images?** để **Split Images Between Train/Valid/Test**: **70% train / 20% valid / 10% test** (465 / 133 / 67). Thư mục là một danh sách phẳng, không chọn split có sẵn.
5. **Continue**.

## 4. Version — kích thước ảnh

Menu **Versions** → **Create New Version**. Bản **v1** đã khóa **512 Stretch**, không sửa trên màn Train.

Preprocessing chỉ bật hai mục:

| Mục | Giá trị |
|-----|---------|
| Auto-Orient | Bật |
| Resize | **640 × 640**, kiểu **Fit (black)** |

**Fit (black)** giữ tỷ lệ và thêm viền đen cho đủ ô vuông. Trang cũng đưa ảnh vào ô 640 và giữ tỷ lệ. **Stretch** kéo méo ổ gà. **Fill** cắt mất mép ảnh.

Các mục Grayscale, Isolate Objects, Tile, Augmentation để tắt. Tạo version (bản **v2** trở đi).

## 5. Train

Menu **Train**.

| Bước | Chọn |
|------|------|
| Engine | **Custom Training** |
| Architecture | **YOLOv11**, cỡ **Small** |
| Data | Version vừa tạo (640, Fit black). Không chọn v1 |
| Checkpoint / Hyperparameters | Để mặc định |
| Credit Cap | No Cap. Lượt này khoảng 0,52 credit, 12–16 phút |

**RF-DETR**, **YOLO26**, **YOLO-NAS** ra đầu ra khác kiểu trang đang đọc. Không chọn.

Mục **Download Dataset** trên Versions chỉ tải ảnh và nhãn. Danh sách format không có ONNX. ONNX chỉ có sau khi train xong.

## 6. Gắn file vào trang

1. Train xong, mở **Models**, tải trọng số của lần train YOLOv11 Small.
2. File `.onnx` thì dùng luôn. File `.pt` thì xuất ONNX, ảnh 640, trên máy có Python và `ultralytics`.
3. Copy ONNX vào `Linm.Web.RMMS.Mobile/public/models/`. Deploy không tự đẩy thư mục này. Máy chủ cần copy tay vào gốc site.
4. Trang chọn **Mặt đường** mới nạp file mặt đường. File biển báo không thay.

Model này là **1 lớp** `pothole`. Parser trang hiện nhận mặt đường **5 lớp**, biển báo **82 lớp**, hoặc đầu 3 lớp. Đầu 1 lớp bị bỏ, hộp không hiện. Muốn dùng file mới thì sửa parser trước khi đổi file đang chạy.

Model mặt đường đang chạy không train từ bộ Kaggle này. Đó là [YOLOv8s RDD](https://huggingface.co/vinothvikas1987/pothole-detection-yolov8), file `combined_traffic_model.onnx`.

## Không đưa vào train

- File trong `public/models/_archive/` (`traffic-sign.onnx`, `yolov8n-coco.onnx`, `yolov8n.onnx`).
- Script `export_model.py` cạnh tài liệu này: chỉ xuất `yolov8n.pt` có sẵn, không dùng ảnh đã gắn nhãn.
