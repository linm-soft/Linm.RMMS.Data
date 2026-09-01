# Linm.RMMS.Vision — host AiVision (P1 GPT · P2 ONNX)

> **Slug:** `ai-vision-service` · **Module:** Platform/RMMS Vision  
> **Phase:** V1 = P1 online · P2 local **chỉ trên host này**  
> **Status:** Context  
> **Host:** **`Linm.RMMS.Vision`** (`D:/AI-QLBD/Linm.RMMS.Vision`) — **không** `Linm.AI.WebService` · **không** domain AiVision SSOT trên `Linm.RMMS.WebService`  
> **Skills:** `/new-service` · `/implement-ai-detect-run` · `/agent-dev-ai-detect` · `/database-migration` · `/create-bff-api-feature`  
> **Implement plan:** [`../../plan/ai-vision-service/README.md`](../../plan/ai-vision-service/README.md)  
> **Features trên host:** [`ai-vision.md`](ai-vision.md) · [`ai-asset-detect.md`](ai-asset-detect.md) · [`its-traffic-detect.md`](its-traffic-detect.md) · [`its-anpr-overload.md`](its-anpr-overload.md) · [`predict.md`](predict.md) · [`estimate.md`](estimate.md)

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Một service cho **mọi** infer + persist AiVision. P2 đổi engine **không** đổi BFF/MFE. |
| Persona | Dev BE · AI lead |
| App hiện có | Domain AiVision **trong** WebService + infer mỏng `Linm.AI.WebService` `:5301` (asset-only) — **lệch** |
| DoD V1 | Host `:5311` · `api/v1/ai-vision/**` · GPT-4o · BFF retarget · WebService **migrate out** |
| DoD P2 | ONNX/GPU **chỉ** Vision — cùng path |

## 2. Design / UI

Không MFE riêng. UI = `Linm.Web.RMMS.AiVision` qua BFF.

## 3. API

**Cấm invent** `api/v1/ai-vision-service/*` · `api/v1/rmms-vision/*`.

Reuse Signed DOMAIN-MAP trên **Vision**:

| Method | Path |
|--------|------|
| * | `/api/v1/ai-vision/**` (detect · detections · detect-assets · its · anpr · predict · estimate) |

Client **qua BFF** `web-bff/api/v1/ai-vision/**`. **Cấm** MFE gọi `:5311`.

## 4. Database

PG riêng `linm_rmms_vision`. Schema qua CLI `Schema_RmmsVision` **pair**. **Cấm** hai SSOT bảng vision trên WebService.

## 5. Events

Giữ contract feature: `defect.detected` · `asset.candidate.detected` — emit từ Vision.

## 6. Gaps

| ID | Default |
|----|---------|
| GAP-VIS-HOST-01 | Repo chưa scaffold — `/new-service` |
| GAP-VIS-CUTOVER-01 | WebService + `:5301` còn là runtime hiện tại |
| GAP-F-AIV-04 | `DetectStubAsync` `mock://` trên WebService |

## 7. Demo checklist

- [ ] Host health `:5311`
- [ ] BFF cùng path
- [ ] P2 không đổi route MFE
