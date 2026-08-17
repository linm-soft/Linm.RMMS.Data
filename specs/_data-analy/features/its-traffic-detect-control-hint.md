# Data-analy — controlHint — its-traffic-detect (Kind B + D + F)

| Field | Value |
|-------|-------|
| feature | `its-traffic-detect` |
| packKind | `ai` |
| mode | `feature_context` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.15.19` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.16.02` |
| rulesVersion | `2026.08.16.05` |
| versionGate | `ok` |
| analyzedAt | `2026-08-17T09:55:00.000Z` |
| updatedAt | `2026-08-17T09:55:00.000Z` |

> **≠ `ai-vision`:** không class ổ gà. **≠ `ai-asset-detect`:** chỉ `bien_bao`/`coc_tieu` · dedupe **10 m**.

## Sources

| Source | Path |
|--------|------|
| Context | `docs/context/features/its-traffic-detect.md` |
| Design SSOT | `docs/context/16-ITS-TRAFFIC-OBJECT-DETECTION-DESIGN.md` |
| Control map | `docs/context/_raw/legacy-govone/demo-maps/its-traffic-detect-control-map.md` |
| Demo | `Linm.RMMS.Demo/src/demo/ai-vision/its-traffic-detect.html` |

## Kind / zones

| Zone | Pattern | DoD |
|------|---------|-----|
| A | Toolbar | Tạo · sim Mobile/Dashcam/CCTV · Nearby 10m · Refresh · Export · Reset — **cấm** badge `AI` / P1/P2 chrome header (`ai-chrome-skip`) |
| B | Filter | Search + Dropdown + Date · search only on Tìm |
| C | `LinCatalogDataGrid` | cột kéo ON · row Xem/Sửa/Copy/Confirm/Dismiss/Xóa |
| D | Footer | `LinCatalogListPagination` |
| Form | Kind D | C/E/V/Copy · HITL Confirm · leave-confirm |
| Map | Kind F | pins · OSM/Esri/Fit |

## Screens

| Id | Kind |
|----|------|
| S-LIST | B |
| S-DETECT | D |
| S-MAP | F |

## Filters (Zone B)

| Field key | Label | controlHint |
|-----------|-------|-------------|
| search | Tìm kiếm | SearchInput |
| routeId | Tuyến | SearchInput · road-route |
| objectClass | Loại | Dropdown · bien_bao / coc_tieu |
| source | Nguồn | Dropdown · mobile / dashcam / cctv |
| status | Trạng thái | Dropdown |
| engine | Engine | Dropdown (filter only) |
| fromDate / toDate | Ngày | Date · observedAt |

## Form fields

| Field key | controlHint | required |
|-----------|-------------|----------|
| code | Text readonly ITS-* | auto |
| objectClass | Dropdown | * |
| score | Text number 0–1 | * |
| status | Dropdown | * |
| engine | Dropdown | * |
| lat / lng | Text number | * |
| routeId | SearchInput road-route | * |
| routeLabel | Text | |
| source | Dropdown | * |
| deviceId | Text | |
| headingDeg / alphaDeg | Text number | |
| bboxJson | Text | |
| modelVersion | Text readonly | |
| nearbyRisk / nearbyOf | Checkbox / Text | |
| note | Text multiline | |
| assetCode | Text readonly | |
| imageUrl | Text / preview | |
| observedAt | Date | |

## Confirm map

| objectClass | asset-type.code |
|-------------|-----------------|
| bien_bao | GANTRY_SIGN |
| coc_tieu | DELINEATOR |

## APIs (đề xuất SA — AiVision domain)

| API | Path |
|-----|------|
| list/CRUD | `GET/POST/PUT/DELETE /api/v1/ai-vision/its/objects` |
| nearby | `GET …/nearby?radiusM=10` |
| detect | `POST /api/v1/ai-vision/its/detect` |
| confirm | `POST …/{id}/confirm` |
| dismiss | `POST …/{id}/dismiss` |
| init-data | `GET …/init-data` |

Entity: `rmms_ai_vision_its_traffic_objects` · repo `Linm.RMMS.WebService` · **cấm ERP.***

## Seed DoD

≥1 bien_bao Draft · ≥1 coc_tieu Draft · ≥1 nearby &lt;10 m · ≥1 P2 low score · ≥1 Asset pin · HITL Confirm bắt buộc · **GAP-AI-DETECT-CHROME** no header AI badge

## Handoff

→ PO → Design (reviewUrl) → SA (DOMAIN-MAP slug) → TL → Dev MFE AiVision + BE → QA static

## Version meta

| skillVersion | schemaVersion | workflowVersion | versionGate |
|--------------|---------------|-----------------|-------------|
| 2026.08.15.19 | 1 | 2026.08.16.02 | ok |

---
<!-- Version meta: skillVersion=2026.08.15.19 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.16.02 · versionGate=ok -->
