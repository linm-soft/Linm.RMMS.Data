# Lắp đặt camera AI trên tuyến — hạng mục gửi khách

> **Đối tượng:** Khách / Chi cục / Ban QLDA  
> **Ngày:** 2026-09-06 · **Sửa:** expect = **xem live tại trung tâm**  
> **Nguồn kỹ thuật:** `[camera-model.md](camera-model.md)` · `[features/camera-connect.md](features/camera-connect.md)` · `[21-CAMERA-HLS-WEBRTC-GATEWAY.md](21-CAMERA-HLS-WEBRTC-GATEWAY.md)` · `[23-CAMERA-HOST-NOTIFY-CONFIG.md](23-CAMERA-HOST-NOTIFY-CONFIG.md)`

---

**Expect:** Trực ban tại **trung tâm điều hành xem live video** camera trên tuyến (tường hình 24/7).  
Gửi sự kiện AI (biển số, tốc độ) và ghi hình là **kèm theo** — không thay live.

---

## Hạng mục bắt buộc (để xem live tại trung tâm)

- **Tủ điện** ngoài trời: theo trang bị tiêu chuẩn.
- **Route mạng cáp quang / VPN nội bộ** từ tủ camera về trung tâm — đây là **đường chính**. 
  - Backup 4G/5G để gửi dữ liệu sự kiện ở các khu vực không có cap quang
- **Camera IP tĩnh**, thiết lập múi giờ chính xác, config để truyền vide và event về trung tâm.
- **Trụ đỡ + giá camera** đúng góc, đúng làn.
- **Hạng mục dự kiến trang bị dùng cho lưu video và hiển thị tại trung tâm**
  - **Máy chủ video tại trung tâm:** xem luồng từ camera **qua cáp quang/VPN** (mạng nội bộ ITS), rồi đưa lên màn hình.
  - **Màn hình tường hình** tại phòng trực.

---

## Băng thông (live)

- Xem live: **~2–4 Mbps / camera** (luồng phụ).
- Xem live + ghi đồng thời: **~4–8 Mbps / camera**.
- 4G/5G: chỉ dự phòng **sự kiện / ảnh**, **không đủ để** xem live nhiều camera tại trung tâm.

---

## Kèm theo — ghi hình tại trung tâm (không thay live)

- **Máy chủ lưu trữ / NVR** + ổ đĩa (NAS) theo số ngày lưu.
- **UPS**, tường lửa, switch lõi.
- Mất mạng: ghi tại biên (thẻ nhớ / NVR tủ), có sóng gửi bù.
- NTP bắt buộc — clip mới dùng làm chứng từ.

---

## Tóm tắt gửi khách

> Expect là **xem live tại trung tâm**. Cần: **tủ điện · cáp quang/VPN về trung tâm · camera IP tĩnh + RTSP · máy chủ video + tường hình**.  
> Không có quang/VPN thì **không xem live được** tại trung tâm. 4G chỉ gửi ảnh/sự kiện, không thay live.

