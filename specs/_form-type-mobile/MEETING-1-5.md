# Họp 04/09 — seed scan mobile (enqueue later)

| | |
|---|---|
| skill | `scan-qlbd-form-type-mobile` · `/scan-mobile-feature` |
| queue | `qlbd-mobile` |
| slash | `/agent-qldb-workflow-mobile` |
| enqueue_later | **true** — chưa gen task queue |
| generated | 2026-09-06 |

Upload: `/init-bff-file` trên `{MobileBff}` + `/integrate-file-upload-mobile` · persist file **id**.  
Vision Wave 2 BFF = web queue; native gọi `api/v1/ai-vision/**`.

## Enqueue later (unique)

| meeting | feature | kind | parent | share | scope |
|---------|---------|------|--------|-------|-------|
| 1 | `nghiem-thu` | list | `patrol-home` | unique | Clone tuần kiểm · 10 mẫu · dual OS · chờ API web |
| 1 | `nghiem-thu-create` | sheet | `nghiem-thu` | unique | Tạo NT + upload ảnh/video |
| 3 | `patrol-home` | hub | `home` | unique | **edit** scope Khu I (cùng JWT org) |
| 4 | `patrol-checkin` | sheet | `patrol-home` | unique | Camera/GPS + FileService + AI mất TS |
| 4 | `field-reflect` | sheet | `patrol-home` | unique | Hư hỏng từ ảnh hiện trạng |
| 5 | `patrol-map` | map | `patrol-home` | unique | Leftover + inspect ảnh TS / mặt cắt · copy `/gis/live` |

## Skip (không enqueue native)

| meeting | slug | skip_reason |
|---------|------|-------------|
| 2 | `csdl-bieu-*` · `csdl-so-*` · `csdl-cuc-2026` | P1 office web |
| 3 | `khu-1-pilot` | Data import web · mobile = filter trên `patrol-home` |
| 4 | `ai-vision` · `ai-asset-detect` · `ai-vision-service` | MAIN3 / kind `ai` · client trên checkin/reflect |
| 5 | `gis-draw-live` · `gis-patrol-map` | MAIN3 web |

## Demo

`#sc-nghiem-thu` · row `#row-nghiem-thu` trên `#sc-patrol-home` · dual `ios`/`android` `index.html`.
