# 32 — Cấp server để tủ 5G **đẩy** RTSP (publish) vào RMMS

> **Đối tượng:** ITS khách (máy nhúng) · Dev RMMS  
> **Ngày:** 2026-09-18  
> **Plan:** [`../plan/camera-live/PLAN-push-ingest.md`](../plan/camera-live/PLAN-push-ingest.md)  
> **Playback web:** HLS fMP4 — [`30-CAMERA-LIVE-STREAM-CONFIG.md`](30-CAMERA-LIVE-STREAM-CONFIG.md)  
> **Khác** Host notify event (biển/tốc độ) — [`23-CAMERA-HOST-NOTIFY-CONFIG.md`](23-CAMERA-HOST-NOTIFY-CONFIG.md)

RMMS **không** xin IP:port RTSP của tủ. Tủ **không IP tĩnh** → chủ động publish về server.

---

## I. Thông số gửi khách (lab Docker)

| Field | Giá trị lab | Prod |
|-------|-------------|------|
| Protocol | **RTSP publish** (ANNOUNCE), transport **TCP** | Giữ |
| Host | IP/domain máy chạy MediaMTX | IP **tĩnh** public / TCP proxy |
| Port | **8554** | TCP **8554** (không dùng domain HLS :8888) |
| Path | `cam_` + Guid **N** (32 hex, không gạch) | Cùng rule |
| User | `rmms-edge` | Đổi yaml |
| Pass | `rmmsEdgePublishLab` | Secret prod — **cấm** commit |
| Codec | **H.264** (AVC) · không audio hoặc AAC | **Cấm H.265/HEVC** trên G0 |
| Auth | HTTP **Basic** trên RTSP | Giữ |

URL (lab):

```text
rtsp://rmms-edge:rmmsEdgePublishLab@<HOST_MTX>:8554/cam_<ID32>
```

Ví dụ Id `aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee` → path **`cam_aaaaaaaabbbbccccddddeeeeeeeeeeee`**.

Lấy Id: form RMMS camera đã **Lưu** (`GET /api/v1/cameras/{id}`).

---

## II. ffmpeg (máy nhúng)

```bash
ffmpeg -re -i "<SOURCE>" \
  -c:v libx264 -preset veryfast -tune zerolatency -pix_fmt yuv420p \
  -g 50 -b:v 1500k \
  -an \
  -f rtsp -rtsp_transport tcp \
  "rtsp://rmms-edge:rmmsEdgePublishLab@<HOST_MTX>:8554/cam_<ID32>"
```

`<SOURCE>` = RTSP LAN camera Hik trên tủ, hoặc file test. **H.264 trên đoạn encode đẩy về RMMS** — dù cam nội bộ H.265.

---

## III. Kiểm tra

1. MTX up: `docker compose up -d linm-rmms-mediamtx`
2. Máy nhúng publish (giữ process).
3. Playlist: `curl -sI http://<HOST>:8888/cam_<ID32>/index.m3u8` → 200 · `avc1` không `hvc1`.
4. RMMS: Bật live HLS trên đúng camera Id — `live/start` `source=publisher` (không JPEG vì RTSP tủ đóng).

`GET /api/v1/cameras/gateway/health` chỉ chứng minh Control API, **không** chứng minh tủ đã publish.

---

## IV. Lỗi thường gặp

| Hiện tượng | Nguyên nhân |
|------------|-------------|
| 401 publish | Sai user/pass · path không bắt đầu `cam_` |
| HLS 404 | Chưa ANNOUNCE · sai Id32 |
| Khung đen `hvc1` | Đang H.265 — encode H.264 |
| Bật live vẫn JPEG | Path chưa ready · Id camera khác path ffmpeg |
| Railway chỉ mở 8888 | HLS HTTP ≠ RTSP TCP — cần TCP proxy :8554 |

---

## V. Hai host (đừng nhầm)

| Host | Vai trò |
|------|---------|
| MediaMTX **8554** | Nhận **video** từ máy nhúng |
| API ingest event | Nhận **biển/tốc độ** ISAPI — không phải live |
