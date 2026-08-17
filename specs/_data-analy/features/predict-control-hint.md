# Data-analy — controlHint — predict (Kind B catalog + Kind D slideout)

| Field | Value |
|-------|-------|
| feature | `predict` |
| packKind | `ai` |
| mode | `feature_context` (no Excel · context + demo) |
| status | `confirmed` (autopilot) |
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.15.19` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.16.02` |
| versionGate | `ok` |
| contentHash | `sha256:predict-ctx-demo-20260817` |
| analyzedAt | `2026-08-17T10:30:00.000Z` |
| updatedAt | `2026-08-17T10:30:00.000Z` |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** lookup API.  
> DOMAIN-MAP: slug `predict` → **AiVision** · API `api/v1/ai-vision/predict/*` (**cấm** `api/v1/ai-predict`).

## Sources

| Source | Path |
|--------|------|
| Context | `docs/context/features/predict.md` |
| Control map | `docs/context/_raw/legacy-govone/demo-maps/predict-control-map.md` |
| Actions | `docs/context/_raw/legacy-govone/demo-maps/predict-actions.md` |
| Demo page | `Linm.RMMS.Demo/src/demo/features/predict-demo.html` |
| Demo data | `Linm.RMMS.Demo/src/demo/ai-vision/js/predict-data.js` |
| Demo app | `Linm.RMMS.Demo/src/demo/ai-vision/js/predict-app.js` |

## Kind / zones (handoff Design)

| Zone | Pattern | DoD |
|------|---------|-----|
| A | Toolbar | Làm mới · Chạy dự báo hàng loạt · Xuất Excel · Mở Dashboard · Sort score · Refresh KPI · Column/config |
| B | Filter | Tuyến · Horizon · Top N · Score min · Áp dụng / Xóa lọc |
| C | `LinCatalogDataGrid` | rank · section · score badge · life · recommend · model · optional meta · row menu |
| D | Footer | `LinCatalogListPagination` — **cấm** footerPagination / raw table footer |
| Form | Kind D slideout | View/Edit note · drivers · chart stub · audit · footer actions · leave-confirm dirty note |
| KPI | Strip | count · avg score · major_rehab count · horizon |

**AI chrome (HARD):** **cấm** badge/tag `AI` trên header/`beforeToolbar` · **cấm** P1/P2/`10/10`/model id chrome trên list header (`ai-chrome-skip`). Model version chỉ trong cột/form field.

## Control hint cluster — list filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| routeId | Tuyến | `Dropdown` | enum / road-route | demo QL1A/QL22/QL14/ALL · P2 SearchInput road-route |
| horizonMonths | Horizon (tháng) | `Text` (number) | — | default 12 · 1–60 |
| topN | Top N | `Text` (number) | — | default 8 · 1–50 |
| scoreMin | Score tối thiểu | `Text` (number) | — | 0–100 |

## Control hint cluster — grid columns

| Field key | Label | controlHint | Notes |
|-----------|-------|-------------|-------|
| rank | Thứ hạng | `Text` (number) | derived |
| sectionId | Mã đoạn | `Text` | `SEC-*` |
| name | Tên đoạn / Km | `Text` | |
| score | Score | `Text` (number) | 0–100 · badge severity color |
| remainingLifeMonths | Tuổi thọ còn lại | `Text` (number) | tháng |
| recommend | Khuyến nghị | `Dropdown` | major_rehab / routine / watch |
| model | Model | `Text` | readonly · gpt-4o-mini |
| pci / traffic / material / ageYears | meta | `Text` | column picker optional |
| weatherAgg / repairHistory | meta | `Text` | optional |
| predictedAt | Dự báo lúc | `Date` | local display |

## Control hint cluster — form fields (slideout)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| sectionId | Mã đoạn | `Text` | auto | readonly |
| name | Tên đoạn / Km | `Text` | | readonly |
| routeId | Tuyến | `Dropdown` | | readonly on view |
| score | Score | `Text` (number) | | readonly after predict |
| horizonMonths | Horizon | `Text` (number) | | |
| remainingLifeMonths | Tuổi thọ còn lại | `Text` (number) | | |
| recommend | Khuyến nghị | `Dropdown` | | |
| model | Model | `Text` | | readonly |
| pci / traffic / material / ageYears | features | `Text` | | |
| weatherAgg / repairHistory | features | `Text` | | |
| predictedAt | Dự báo lúc | `Date` | | readonly |
| drivers[] | Drivers | list | | key + weight |
| chart[] | PCI trend stub | chart | | bars |
| note | Ghi chú khuyến nghị | `Text` | | multiline · **dirty leave-confirm** |

## Lookup APIs (SA)

| Lookup | API | controlHint consumer |
|--------|-----|----------------------|
| priority list | `GET /api/v1/ai-vision/predict/priority-list` | filters + grid |
| init-data | `GET /api/v1/ai-vision/predict/init-data` | routes · recommend · drivers |
| predict 1 section | `POST /api/v1/ai-vision/predict/sections/{id}` | row / rerun |
| batch | `POST /api/v1/ai-vision/predict/batch` | toolbar |
| history | `GET /api/v1/ai-vision/predict/sections/{id}/history` | audit |
| save note | `PUT /api/v1/ai-vision/predict/sections/{id}/note` | footer Lưu ghi chú |

## Handoff

→ PO: Kind B+D DoD · 20 actions · CRUD note + list CRUD seed · leave-confirm · **no AI chrome**  
→ Design: zones A–D · KPI · slideout drivers/chart · reviewUrl · Screens S-LIST  
→ SA: AiVision domain APIs above · BFF proxy · migration `Schema_RmmsAiVisionPredict`  
→ TL/Dev: `T-UI-LIST`+`T-UI-FORM`+`T-UI-ACT`+`T-BE-CRUD` · `/agent-dev` · peer Estimate

---
<!-- Version meta: skillVersion=2026.08.15.19 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.16.02 · versionGate=ok -->
