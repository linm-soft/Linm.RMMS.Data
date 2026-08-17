# Demo — Camera tuần trên xe máy

Mở:

```text
specs/mobile-p1/ui/prototype/workflow-cam-patrol/index.html
```

Hoặc từ tổng quan: `../index.html` → **Chạy động · camera xe máy**.

```powershell
npx --yes serve -p 5198 "D:/AI-QLBD/Linm.RMMS.Data/specs/mobile-p1/ui/prototype"
```

Trình duyệt: `http://localhost:5198/workflow-cam-patrol/` · `#workflow`

## Hai chế độ

| Tab | Việc |
|-----|------|
| **Hiện trường** | Chọn kịch bản → ẩn biển không thuộc TH · xe máy chạy tới vị trí · capture chốt tọa độ TS |
| **Workflow 6 bước** | Xe quay → định vị → nhận diện AI → **hệ thống tự tạo vấn đề** (ảnh · tọa độ · video) → user **xác nhận lại sau** → đồng bộ |

Nhật ký: **Nguồn** = `Nhận diện AI` · **Đính kèm** = Ảnh · tọa độ · video · **Xác nhận** = Chờ xác nhận lại / Đã xác nhận lại / Không đúng. Detect là đã có mã SC — không chờ user mới tạo.

Không kết nối camera thật. Không hiện P1/P2/điểm số trên máy.
