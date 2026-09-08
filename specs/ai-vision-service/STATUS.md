# STATUS — ai-vision-service

| Field | Value |
|-------|-------|
| feature | `ai-vision-service` |
| phase | `data_analy` |
| status | `draft` |
| packKind | `ai` |
| stackSkill | `/implement-ai-vision-stack` |
| context | `Linm.RMMS.Data/docs/context/features/ai-vision-service.md` |
| plan | `Linm.RMMS.Data/docs/plan/ai-vision-service/README.md` |
| updatedAt | `2026-09-06T15:20:02.040Z` |
## Stack waves

| Wave | Name | Confirm | Status | at |
|------|------|---------|--------|-----|
| 0p | host | scaffold_new_service | done | 2026-09-05T23:55:00+07:00 |
| 1 | vision_service | taxonomy=catalog_codes | done | 2026-09-06T00:35:00+07:00 |
| 2 | bff_service | web=pending · mobile=pending | pending | — |
| 3 | integrate_bff | web=pending · mobile=pending | pending | — |
| 4 | detect_ui | web=pending · ios=pending · android=pending | pending | — |
| 5 | p2_gpu | — | pending | — |

## Notes

- Pattern `/implement-map-stack`: một wave / lượt · AskQuestion · **cấm** fake done.
- **Wave 0p done:** `D:/AI-QLBD/Linm.RMMS.Vision` · `api/src/Vision.Api` · `:5311`.
- **Wave 1 done:** `api/v1/ai-vision/**` + internal `POST /api/v1/vision/detect` · GPT HttpClient (0 Azure SDK) · taxonomy catalog (`TRAFFIC_SIGN` ≠ `GANTRY_SIGN`) · uploads init→PUT→complete · persist Draft `linm_rmms_vision` · CLI pair `20260905173308_Schema_RmmsVision` (+ Designer) · `dotnet build` PASS · `GET /health` 200 · `detect-assets` Draft · `mock://` 422.
- Next: Wave 2 `/create-bff-api-feature` retarget `{WebBff}` / `{MobileBff}` → Vision `:5311`.
- Runtime lệch: WebService AiVision + `Linm.AI.WebService` `:5301`. Cutover = Wave 3.
- Wave 5 `skipped` OK khi `skip_until_p2_0`.
