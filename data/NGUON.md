# Bộ data biển báo Việt Nam — đã gán nhãn

Nguồn: https://huggingface.co/datasets/star092304/Traffic-sign-detection-VietNam
Ảnh: đường phố Việt Nam, nhãn YOLO có sẵn (82 mã).
License bộ ảnh: trang Hugging Face không ghi. Model YOLO11s đi kèm ghi Apache-2.0. Dùng nội bộ để train, chưa phát hành lại.

Gộp 82 mã về 4 họ để khỏi học từng mã hiếm (nhiều mã dưới 100 hộp).
Bỏ hộp quá nhỏ: cạnh ngắn < 4% ảnh hoặc diện tích < 0.2%.
Bỏ lớp Đèn xanh và Đèn đỏ (không phải tấm biển).
Mỗi thư mục là một lớp. File nhãn dùng class id 0.

| Thư mục | Ảnh | Hộp giữ lại |
|---|---:|---:|
| `tai-san/bien-cam` | 4193 | 5210 |
| `tai-san/bien-nguy-hiem` | 3047 | 3517 |
| `tai-san/bien-hieu-lenh` | 896 | 901 |
| `tai-san/bien-chi-dan` | 878 | 878 |

Hộp bỏ vì quá nhỏ: 8317. Hộp đèn tín hiệu bỏ: 925.

## Họ ← mã gốc

### bien-cam

- 0 Cấm vào (62 hộp)
- 2 Tốc độ tối đa 40 km/h (152 hộp)
- 3 Cấm xe tải và xe buýt (24 hộp)
- 4 Cấm xe tải (473 hộp)
- 6 Cấm xe ô tô (181 hộp)
- 12 Tốc độ tối đa 60 km/h (126 hộp)
- 13 Cấm xe máy (76 hộp)
- 15 Hạn chế chiều cao (151 hộp)
- 16 Cấm bóp còi (95 hộp)
- 17 Cấm rẽ trái (124 hộp)
- 18 Cấm rẽ phải (101 hộp)
- 19 Cấm quay đầu (134 hộp)
- 20 Cấm quay đầu và rẽ trái (77 hộp)
- 21 Cấm quay đầu và rẽ phải (97 hộp)
- 23 Cấm dừng và đỗ xe (477 hộp)
- 24 Cấm đỗ xe (468 hộp)
- 25 Cấm đi thẳng và rẽ phải (61 hộp)
- 26 Cấm rẽ trái hoặc rẽ phải (181 hộp)
- 31 Cấm xe máy rẽ trái (15 hộp)
- 37 Cấm xe hai bánh và ba bánh (154 hộp)
- 39 Tốc độ tối đa 50 km/h (146 hộp)
- 40 Tốc độ tối đa 70 km/h (83 hộp)
- 41 Tốc độ tối đa 80 km/h (205 hộp)
- 43 Cấm ô tô quay đầu (78 hộp)
- 44 Cấm xe buýt (80 hộp)
- 45 Cấm vượt (113 hộp)
- 48 Hết mọi lệnh cấm (139 hộp)
- 57 Tốc độ tối đa 10 km/h (90 hộp)
- 58 Tốc độ tối đa 100 km/h (102 hộp)
- 59 Tốc độ tối đa 110 km/h (61 hộp)
- 60 Tốc độ tối đa 120 km/h (101 hộp)
- 61 Tốc độ tối đa 20 km/h (104 hộp)
- 62 Tốc độ tối đa 30 km/h (90 hộp)
- 63 Tốc độ tối đa 90 km/h (72 hộp)
- 66 Cấm đỗ ngày lẻ (43 hộp)
- 67 Cấm đỗ ngày chẵn (84 hộp)
- 71 Cấm ô tô quay đầu và rẽ trái (72 hộp)
- 74 Cấm ô tô rẽ trái (177 hộp)
- 78 Hết hạn chế tốc độ 50 km/h (141 hộp)

### bien-hieu-lenh

- 1 Chỉ được rẽ phải (50 hộp)
- 14 Phân làn (249 hộp)
- 33 Đường người đi bộ (111 hộp)
- 49 Đi vòng sang trái (80 hộp)
- 52 Rẽ trái (42 hộp)
- 53 Rẽ phải (60 hộp)
- 56 Vòng xuyến (186 hộp)
- 64 Dừng lại (123 hộp)

### bien-nguy-hiem

- 5 Hạn chế tĩnh không (122 hộp)
- 7 Nguy hiểm (18 hộp)
- 8 Đi chậm (240 hộp)
- 9 Nhiều chỗ ngoặt bên phải trước (243 hộp)
- 10 Chướng ngại vật trên đường (36 hộp)
- 22 Có đèn tín hiệu phía trước (103 hộp)
- 27 Chỗ ngoặt nguy hiểm bên trái (152 hộp)
- 28 Chỗ ngoặt nguy hiểm bên phải (89 hộp)
- 29 Giao với đường không ưu tiên (453 hộp)
- 30 Giao nhau cùng cấp (175 hộp)
- 32 Giao với đường ưu tiên (129 hộp)
- 34 Đường hẹp bên trái (56 hộp)
- 35 Đường hẹp bên phải (120 hộp)
- 36 Đường hẹp hai bên (138 hộp)
- 38 Gờ giảm tốc (18 hộp)
- 42 Giao đường sắt có rào chắn (195 hộp)
- 46 Trẻ em (224 hộp)
- 47 Người đi bộ cắt ngang (261 hộp)
- 50 Công trường (44 hộp)
- 72 Khu vực tai nạn (212 hộp)
- 73 Đường đôi (86 hộp)
- 75 Dốc lên (151 hộp)
- 76 Cầu hẹp (121 hộp)
- 77 Đường không bằng phẳng (32 hộp)
- 81 Đường trơn (99 hộp)

### bien-chi-dan

- 11 Đường có camera giám sát (28 hộp)
- 51 Đường một chiều (183 hộp)
- 65 Chỗ quay xe (138 hộp)
- 68 Nơi đỗ xe (61 hộp)
- 69 Trạm xe buýt (125 hộp)
- 70 Bệnh viện (62 hộp)
- 79 Khu đông dân cư (164 hộp)
- 80 Khu dân cư thưa (117 hộp)

## Chưa có ảnh

`tai-san/bien-phu`, `gia-long-mon`, `ho-lan`, `cot-km`, `coc-tieu`: bộ công khai không gán các loại này.

`su-co/o-ga`: 338 ảnh, 473 hộp, 12,8 MB. Nguồn `train-oga/annotated-images`. Giữ hộp cạnh ngắn ≥ 12% ảnh, diện tích ≥ 2%, tỷ lệ cạnh ≤ 5, rồi bỏ `img-1` đến `img-285`. Các thư mục `su-co` còn lại chưa có ảnh.
