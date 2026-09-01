# Linm.RMMS.Vision — implement BE → BFF → UI

> **Host:** `new_svc` — **`Linm.RMMS.Vision`** (`D:/AI-QLBD/Linm.RMMS.Vision`, sibling `Linm.RMMS.WebService`). **Cấm** infer/persist AiVision SSOT trên WebService. **Cấm** RMMS gọi `Linm.AI.WebService` `:5301`.  
> **V1 = P1 online** GPT-4o (Azure **chỉ** Vision). **P2 = ONNX/GPU** — **chỉ đổi adapter trên service này**; BFF/MFE/path **không** đổi.  
> **Scope:** cả domain AiVision — `ai-vision` · `ai-asset-detect` · `its-traffic-detect` · `its-anpr-overload` · `predict` · `estimate`.  
> **Context:** [`../../context/features/ai-vision-service.md`](../../context/features/ai-vision-service.md) · [`ai-vision.md`](../../context/features/ai-vision.md) · P2 [`../../context/14-P2-AI-VISION-STANDARD.md`](../../context/14-P2-AI-VISION-STANDARD.md)  
> **Cấm invent** `api/v1/ai-vision-service/*` · `api/v1/rmms-vision/*` · Azure SDK trong WebService / MFE · trộn class ổ gà với class TS.

**Entry:** `/new-service` (API · micro-src) rồi `/implement-ai-detect-run` `{AiService}=Linm.RMMS.Vision`. UI `/agent-dev-ai-detect`. STATUS infer `specs/ai-vision/run/STATUS.md`.

Chạy **đúng thứ tự**. Không copy prompt generic YOLO/OpenAI.

---

## Ranh giới (fail closed)

| Thành phần | Repo | Việc |
|------------|------|------|
| **Infer + persist + HITL + PCI/predict/estimate** | `{VisionRoot}` `Linm.RMMS.Vision` | Một host · một DB · Azure/ONNX **chỉ** đây |
| **BFF** | `bff/domains/ai-vision` (đã có) | Retarget downstream → Vision · **cấm** BFF host mới · **cấm** lộ `:5311` ra MFE |
| **RMMS.WebService** | domain AiVision | **Migrate out** — cấm giữ bảng detections/candidates làm SSOT |
| **MFE** | `Linm.Web.RMMS.AiVision` | Cùng path `web-bff/api/v1/ai-vision/**` |
| **`Linm.AI.WebService`** | Medical completions | **Không** RMMS vision. Cutover xong: 0 call `:5301` từ RMMS |

P2 sau này: đổi `IDefectDiagnoser` / `IAssetDetector` / ITS / ANPR / predict / estimate **trong Vision** — không đụng MFE route, không đụng BFF path.

---

## Chuỗi slash (SSOT)

| # | Tầng | Slash | Repo / host | Output |
|---|------|-------|-------------|--------|
| 0 | Context | *(xong)* `/hey-linm` | `Linm.RMMS.Data` | Host `Linm.RMMS.Vision` · 6 slug |
| 1 | **Scaffold** | `/new-service` · API · **micro-src** | `Linm.RMMS.Vision` | `api/src/Vision.Api` · JWT `company_id` · Serilog `"Serilog"` · `IIdCodeService` · `ApplyUtcDateTimeConvention` |
| 1b | Review | `/review-service-setup` | cùng | P0 FAIL → dừng |
| 2 | **Domain** | `/implement-ai-detect-run` `--from-start` `{slug}=ai-vision` | Vision | Move/wire `api/v1/ai-vision/**` · GPT V1 · **cấm** stub `mock://` |
| 2b | EF | `/database-migration` `Schema_RmmsVision` | Vision `api/src/Vision.Api` | **pair** `.cs` + Designer · tables detections · candidates · ITS · ANPR · predict · estimate |
| 2c | Sibling slugs | cùng detect-run / `/agent-dev` | Vision | `detect-assets` · `its/*` · ANPR · predict · estimate — **cùng host** |
| 3 | **BFF web** | `/create-bff-api-feature` · Ask **BFF** (không API mới) | `LINM.RMMS.AiVision.Bff` | Downstream **Vision** · JWT · cùng `web-bff/api/v1/ai-vision/**` |
| 3b | **BFF mobile** | `/create-bff-api-feature` lần 2 | `Linm.RMMS.Mobile.Bff` | Cùng path — **cấm** app gọi `:5311` / WebService AiVision |
| 4 | **UI web** | `/agent-dev-ai-detect` + `/agent-dev` list | `Linm.Web.RMMS.AiVision` | Upload thật · HITL · **0** badge P1/P2/score |
| 5 | Cutover | xóa SSOT AiVision trên WebService | `Linm.RMMS.WebService` | Không `DetectStubAsync` · không `HttpAssetDetector` → `:5301` |
| 6 | Gate | `dotnet build` Vision + BFF + MFE | — | health `:5311` · 1 ảnh thật → Draft |
| 7 | **P2** | `/implement-ai-detect-run --phase=p2` **sau** `P2-0` | **chỉ** Vision | ONNX + worker GPU · **không** đổi BFF/MFE path |

**Không** dùng: `/implement-map-service` · `/ai-integrate` (Medical credit) · `/new-service` BFF (BFF **đã có**). GIS/Camera/Incident **không** chuyển vào Vision.

---

## API Signed (reuse DOMAIN-MAP)

Prefix **giữ** `api/v1/ai-vision` trên **Vision** (không prefix mới). Client **qua BFF**.

| Method | Path | Slug |
|--------|------|------|
| POST | `/api/v1/ai-vision/detect` | `ai-vision` |
| CRUD | `/api/v1/ai-vision/detections` | `ai-vision` |
| GET | `/api/v1/ai-vision/pci-history/{sectionId}` | `ai-vision` |
| POST | `/api/v1/ai-vision/detect-assets` · CRUD `asset-candidates` | `ai-asset-detect` |
| POST | `/api/v1/ai-vision/its/detect` · CRUD `its/objects` | `its-traffic-detect` |
| CRUD + confirm | `/api/v1/ai-vision/anpr/events` | `its-anpr-overload` |
| CRUD | `/api/v1/ai-vision/predict` · `/api/v1/ai-vision/estimates` | `predict` · `estimate` |
| POST | `/api/v1/ai-vision/uploads` | frame `imageUrl` (reuse session) |

**DEFER V1:** `POST …/batch` · `…/segment` · `…/calculate-pci` (chưa Signed).  
Internal infer **không** lộ `POST /api/v1/vision/detect` ra MFE — đó là adapter **trong** Vision (V1 GPT · P2 ONNX).

---

## Taxonomy (không đổi khi P1→P2)

| `taxonomy` | Class | Persist |
|------------|-------|---------|
| `pavement` | 10 class `14` §3 | `detections` |
| `asset` | 8 loại TS | `asset_candidates` — **cấm** ổ gà |
| ITS / ANPR | SSOT `16` · `18` | tables ITS/ANPR |

---

## Lab ports / env

| | |
|--|--|
| API | `http://localhost:5311` |
| Health | `GET /health` |
| PG | `linm_rmms_vision` (compose Vision — **không** ghi bảng vision vào PG RMMS) |
| Azure | User secrets **Vision** `Ai:Endpoint` · `Ai:ApiKey` · `Ai:DeploymentDefault=gpt-4o` |
| BFF | `ServiceEndpoints:Vision` / `AiVisionBaseUrl` → `5311` |

`:5301` = `Linm.AI.WebService` (Medical) — **không** dùng cho RMMS sau cutover.

---

## Verify (fail closed)

- Repo `Linm.RMMS.Vision` · `dotnet ef migrations list` hiện `Schema_RmmsVision` **pair**.  
- `GET http://localhost:5311/health` 200.  
- `POST web-bff/api/v1/ai-vision/detect` + `imageUrl` thật → row trên **DB Vision** · không `mock://`.  
- `detect-assets` / ITS / ANPR / predict / estimate cùng host `:5311`.  
- `dotnet build` Vision + WebService (sau cutover **0** AiVision persist) + BFF.  
- 0 Azure SDK trong `RMMS.Service.Api` / MFE.  
- P2: chỉ binary/adapter trên Vision — MFE vẫn `web-bff/api/v1/ai-vision/**`.

---

## DEFER

| ID | Việc | Khi |
|----|------|-----|
| **VIS-P2-0** | Go local + P2-A/B | Văn bản + dataset ≥20k — **chỉ** Vision |
| **VIS-P2-GPU** | Worker GPU + Redis + ONNX | `--phase=p2` trên Vision |
| **VIS-V1.1** | Dual-token `[Authorize]` Vision | Prod |
| **VIS-FILE** | FileService ảnh | `/implement-file-service` consumer |
| **VIS-CREDIT** | Medical credit pool | **không** chặn V1 |

---

## Skill path (Rules)

| Slash | File |
|-------|------|
| `/new-service` | `{RulesRoot}/service/skill/new-service/` |
| `/review-service-setup` | `{RulesRoot}/service/skill/review-service-setup/` |
| `/database-migration` | `{RulesRoot}/service/skill/database-migration/` |
| `/create-bff-api-feature` | `{RulesRoot}/service/skill/bff-api-structure/` |
| `/implement-ai-detect-run` | `{RulesRoot}/common/skill/implement-ai-detect-run/` · `{AiService}`=Vision |
| `/agent-dev-ai-detect` | `{RulesRoot}/common/skill/agent-dev-ai-detect/` |
