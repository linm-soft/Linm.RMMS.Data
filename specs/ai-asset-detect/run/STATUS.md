# RUN — ai-asset-detect

| Field | Value |
|-------|-------|
| skill | implement-ai-detect-run |
| slug | ai-asset-detect |
| route | /ai-kd/phat-hien-ts |
| phase | p1 |
| mode | from-start |
| lastStep | P1-2 |
| lastRunAt | 2026-09-06T00:35:00+07:00 |
| backendFirst | required |
| docs | Linm.RMMS.Data |
| backend | Linm.RMMS.Vision (`:5311`) |
| mfe | Linm.Web.RMMS.AiVision (Wave 3/4) |
| aiService | Linm.RMMS.Vision |

## Steps

| id | layer | status | at | notes |
|----|-------|--------|----|-------|
| P1-0 | be | done | 2026-09-06T00:35:00+07:00 | **Vision** `:5311` · `POST /api/v1/vision/detect` + signed `api/v1/ai-vision/detect` · GPT HttpClient · catalog codes · lab fallback nếu chưa key · `dotnet build` PASS |
| P1-1 | be | done | 2026-09-06T00:35:00+07:00 | Vision uploads init→PUT→complete · `rmms_upload_sessions` trên `{VisionDb}` · CLI pair `20260905173308_Schema_RmmsVision` |
| P1-2 | be | done | 2026-09-06T00:35:00+07:00 | `IAssetCandidateService` infer in-process trên Vision · persist Draft · `imageUrl` bắt buộc (cấm `mock://`) · Confirm **không** auto-create Asset (Wave 3) |
| P1-3 | fe | done | 2026-08-15T13:38:00+07:00 | Upload thật + SearchInput tuyến + GPS user/geolocation · toast · `yarn build` PASS (`VITE_API_URL` verify) |
| P1-4 | fe | done | 2026-08-15T13:38:00+07:00 | Form đính kèm + preview/bbox · footer Draft **Chạy phát hiện** · `LeaveConfirmModal` |
| P1-5 | fe+be | done | 2026-08-15T13:38:00+07:00 | `POST /cameras/{id}/snapshot` → File → cùng P1-1 → detect · camera down = toast, không fake hit |
| P2-0 | gate | pending | | Go local + P2-A/B — ngoài phase p1 |
| P2-1 | ml | pending | | ONNX class TS + manifest |
| P2-2 | be | pending | | Its.GpuWorker + Redis |
| P2-3 | be | pending | | Video/RTSP 1 FPS + nearby 10 m |

## History

| at | mode | step | result |
|----|------|------|--------|
| 2026-08-15 | init | — | tracking created · chưa run |
| 2026-08-15T13:21:00+07:00 | from-start | — | reset all steps → pending · start P1-0 |
| 2026-08-15T13:25:00+07:00 | from-start | P1-0 | done · AiService build PASS |
| 2026-08-15T13:34:00+07:00 | from-start | P1-1 | done · Schema_RmmsUploadSessions pair |
| 2026-08-15T13:34:00+07:00 | from-start | P1-2 | done · HttpAssetDetector |
| 2026-08-15T13:38:00+07:00 | from-start | P1-3 | done · FE upload+GPS+toast · webpack PASS |
| 2026-08-15T13:38:00+07:00 | from-start | P1-4 | done · form attach + LeaveConfirm |
| 2026-08-15T13:38:00+07:00 | from-start | P1-5 | done · camera snapshot wire |
| 2026-09-06T00:35:00+07:00 | stack-w1 | P1-0 | done · Vision host `POST /api/v1/vision/detect` · catalog_codes |
| 2026-09-06T00:35:00+07:00 | stack-w1 | P1-1 | done · Vision uploads + Schema_RmmsVision pair |
| 2026-09-06T00:35:00+07:00 | stack-w1 | P1-2 | done · detect-assets Draft trên `linm_rmms_vision` · mock:// 422 |

## Image delivery (Azure)

| Mode | Khi | Storage | Azure nhận |
|------|-----|---------|------------|
| **A (lab)** | `StorageProvider=Local` · `imageUrl` localhost | Disk + PUT API | AiService GET ảnh → `data:image/...;base64` |
| **B (cloud)** | `StorageProvider=R2` + `R2_*` | Cloudflare R2 presign PUT | URL public (`R2_PUBLIC_BASE_URL`) hoặc presigned GET |

AiService `Ai:ImageDelivery`: `Auto` (default) · `InlineBase64` (ép A) · `RemoteUrl` (ép B).

## Azure OpenAI

- Guide + checklist: [`docs/plan/ai-asset-detect/azure-openai-register-use.md`](../../../docs/plan/ai-asset-detect/azure-openai-register-use.md) · [`AZURE-OPENAI-CHECKLIST.md`](../../../docs/plan/ai-asset-detect/AZURE-OPENAI-CHECKLIST.md)

## Blockers

- Azure key **chỉ** `Linm.RMMS.Vision` (User Secrets / env `Ai__Endpoint` / `Ai__ApiKey`). Không có key → fallback hash.
- Mode A lab: disk + PUT `api/v1/ai-vision/uploads/{id}/object`. Mode B R2 = DEFER (`VIS-FILE`).
- Infer lab: Vision `:5311` + PG `linm_rmms_vision` + `20260905173308_Schema_RmmsVision`. BFF/MFE vẫn WebService đến Wave 2–3.

## Rerun

```
/ai-asset-detect-run
/ai-asset-detect-run --from-start
/ai-asset-detect-run --rerun P1-3
/ai-asset-detect-run --phase=p2
```
