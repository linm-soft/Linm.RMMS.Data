# RUN — ai-asset-detect

| Field | Value |
|-------|-------|
| skill | implement-ai-detect-run |
| slug | ai-asset-detect |
| route | /ai-kd/phat-hien-ts |
| phase | p1 |
| mode | from-start |
| lastStep | P1-5 |
| lastRunAt | 2026-08-15T13:38:00+07:00 |
| backendFirst | required |
| docs | Linm.RMMS.Data |
| backend | Linm.RMMS.WebService · AiVision |
| mfe | Linm.Web.RMMS.AiVision |
| aiService | Linm.AI.WebService (`http://localhost:5301`) |

## Steps

| id | layer | status | at | notes |
|----|-------|--------|----|-------|
| P1-0 | be | done | 2026-08-15T13:25:00+07:00 | `Linm.AI.WebService` · `POST /api/v1/vision/detect` · Azure chỉ host này · fallback SHA256 nếu chưa có key · `dotnet build` PASS |
| P1-1 | be | done | 2026-08-15T13:34:00+07:00 | Presign init→PUT→complete · `rmms_upload_sessions` · CLI pair `20260815063428_Schema_RmmsUploadSessions` (+ Designer) · `Up()` CreateTable · API/BFF build PASS |
| P1-2 | be | done | 2026-08-15T13:34:00+07:00 | `HttpAssetDetector` → AiService · xóa stub random · `imageUrl` bắt buộc (cấm `mock://`) · 0 Azure SDK trong RMMS.Api |
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

## Image delivery (Azure)

| Mode | Khi | Storage | Azure nhận |
|------|-----|---------|------------|
| **A (lab)** | `StorageProvider=Local` · `imageUrl` localhost | Disk + PUT API | AiService GET ảnh → `data:image/...;base64` |
| **B (cloud)** | `StorageProvider=R2` + `R2_*` | Cloudflare R2 presign PUT | URL public (`R2_PUBLIC_BASE_URL`) hoặc presigned GET |

AiService `Ai:ImageDelivery`: `Auto` (default) · `InlineBase64` (ép A) · `RemoteUrl` (ép B).

## Azure OpenAI

- Guide + checklist: [`docs/plan/ai-asset-detect/azure-openai-register-use.md`](../../../docs/plan/ai-asset-detect/azure-openai-register-use.md) · [`AZURE-OPENAI-CHECKLIST.md`](../../../docs/plan/ai-asset-detect/AZURE-OPENAI-CHECKLIST.md)

## Blockers

- Azure key chỉ trong `Linm.AI.WebService` (User Secrets / env `Ai__Endpoint` / `Ai__ApiKey`). Không có key → fallback hash.
- Mode B: set `AI_VISION_STORAGE=R2` + `R2_ACCOUNT_ID` / `R2_ACCESS_KEY_ID` / `R2_SECRET_ACCESS_KEY` / `R2_BUCKET` · CORS bucket cho origin MFE · khuyến nghị `R2_PUBLIC_BASE_URL` (r2.dev / custom domain).
- Infer lab: restart RMMS API + apply `20260815063428_Schema_RmmsUploadSessions` + start AiService `:5301`.

## Rerun

```
/ai-asset-detect-run
/ai-asset-detect-run --from-start
/ai-asset-detect-run --rerun P1-3
/ai-asset-detect-run --phase=p2
```
