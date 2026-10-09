# Implement — web-rmms-cam-patrol

> Status: **done** · writtenAt `2026-09-27T11:05:00.000Z` · task `task_37051747`  
> skillVersion: `2026.09.05.03` · packKind: `list` · autoApprove: ON  
> mfeStdUrl: `http://localhost:9301/camera-tuan` · contentHash: `sha256:c46ae5660ccba1b8e64ce8e5294acef77ceb4e0a75474372f2a3d3901efb5796`

| | |
|--|--|
| Feature | `web-rmms-cam-patrol` |
| Title | Camera tuần — Pattern B submit-validate |
| Role | `dev` · `/agent-dev` |
| changeScope | `edit_page` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/camera-tuan` |
| productRoute | `/field/cam` |
| be | Mobile.Bff `:5202` `mobile-bff/api/v1` · **Step 4b N/A** · keep Live Patrol+AiVision+Incident |
| DES-GRID | N/A phone |
| deltaCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` |
| build | MFE `yarn build` **PASS** · BE `dotnet build` Linm.RMMS.WebService.sln **PASS** |

## Done (T-*)

| id | Result |
|----|--------|
| T-01 | `btnDetect` `disabled={detecting}` only · `btnConfirm` `disabled={confirming}` only · removed `!canDetect` / GPS·offline pre-disable |
| T-02 | `#validationBanner` DES-MOB-CAM-VALIDATION · `string[]` after click · dismiss · clear on success / new frame |
| T-03 | Finder · stamp sessions · GPS Acc≤30 · `capture=environment` **keep** · báo khi bấm |
| T-04 | POST detect Engine=P1 · POST incident DetectionId+HasGps · skip dismiss · leave dirty discard · ẩn score |
| T-05 | `useFormOptions` / `cam.*` · Mobile.Bff only · CP-01 zones · empty/offline/toast |
| T-BE | **N/A** — no API/entity/migration |

## Files (MFE)

- `src/pages/WebRmmsCamPatrol/CamPatrolPage.tsx` — Pattern B CTA + validationBanner
- `src/pages/WebRmmsCamPatrol/lookupStatic.ts` — `cam.banner.dismiss`
- `src/pages/WebRmmsCamPatrol/styles.module.css` — bannerHead / list / dismiss

## APIs (Mobile.Bff — keep Live)

- `GET patrol/sessions` · `POST ai-vision/detect` · `GET ai-vision/detections/{id}` opt · `POST incident/incidents`

## Gates

- List/grid Kind B: **N/A** phone
- Form: Mobile full ≤430 · Pattern B · cấm ERP.* · cấm invent cam-patrol path
- Build HARD: **PASS** (MFE + BE) · Step 4b skip

## Debt / notes

- Stamp km = latest check-in `planPointLabel`
- Frame = `<input capture=environment>` → base64
- E2E: queued `/agent-qa*` — **cấm** e2e ở Dev

## Notes — edge ONNX (2026-10-08)

- UI có công tắc Camera (mặc định) / Tải file. Ảnh dừng quét khi đã nhận. Video và camera dừng khi cuộn tới vùng sự kiện, bấm danh sách, hoặc mở sự kiện, kèm dòng vàng “Đã dừng nhận diện để tránh lag.” Khung camera, ảnh xem lớn, và hàng dropdown mô hình có `data-pull-lock`: kéo hoặc chạm ở đó không gọi làm mới trang. Đổi nguồn cũng dừng và hiện dòng vàng cho tới khi bấm bắt đầu hoặc chọn file. Camera gắn tọa độ `watchPosition` vào ảnh đã nhận. File không đọc được track GPS của camera hành trình. Mặt đường (nhãn Sự cố) nạp `public/ai-model/mat-duong-model.onnx` (YOLO11s, 1 lớp `pothole` hiện «Ổ gà», output `[1,5,8400]`, ngưỡng 0.25). Xác nhận mở sheet, upload JPEG rồi `POST /incident/incidents` với `mediaIds`, không chặn GPS hay 0.75.
- Biển báo: `public/models/traffic-sign-yolo11s.onnx` = [YOLO11s 82 lớp](https://huggingface.co/star092304/traffic-sign-detection-vietnam-yolo), output `[1,86,8400]`, ngưỡng 0.25. Ảnh Hội An tốc độ 30 ra lớp 62 khoảng 0.76. File không nạp nằm ở `public/models/_archive/` (`traffic-sign.onnx`, `yolov8n-coco.onnx`, `yolov8n.onnx`). Hit dưới 0.75 không POST.
- BE: `POST api/v1/ai-vision/edge-sync` lưu `rmms_ai_vision_detections` Engine=P2 · SourceKind=`edge-onnx` · không ghi base64 vào ImageUrl. Ảnh bằng chứng chỉ ở preview máy. Dedupe 12 giây cùng loại trong ~30 m. Không thêm cột.
- Verify: `yarn typecheck` MFE · `dotnet build` RMMS.Service.Api. Quét thật cần file onnx và quyền camera/GPS.

## nextSlash

`/agent-qa` · roleOnly stop (GAP-PKT-ROLE-01)
