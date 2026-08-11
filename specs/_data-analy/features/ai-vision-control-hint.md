# Data-analy — controlHint — ai-vision (Kind B catalog)

| Field | Value |
|-------|-------|
| feature | `ai-vision` |
| packKind | `list` |
| mode | `scan_workflow` (no Excel import · synthetic AI) |
| status | `confirmed` (autopilot) |
| skillVersion | `2026.08.08.31` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.08.31` |
| versionGate | `ok` |
| updatedAt | `2026-08-08T16:30:00.000Z` |

## Sources

| Source | Path |
|--------|------|
| Context | `docs/context/features/ai-vision.md` |
| Demo | `Demo/src/demo/ai-vision/ai-vision.html` + `js/ai-vision-data.js` |
| Control map | `docs/context/_raw/legacy-govone/demo-maps/ai-vision-control-map.md` (if present) · else demo toolbar |
| SSOT P2 | `docs/context/14-P2-AI-VISION-STANDARD.md` |

## Control hint cluster — list filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchInput` | text | code · class · section · route · incident · note |
| defectClass | Loại hư hỏng | `Dropdown` | enum | taxonomy 10 classes |
| severity | Mức độ | `Dropdown` | enum | Critical/High/Medium/Low |
| status | Trạng thái | `Dropdown` | enum | Draft/IncidentCreated/Dismissed |
| engine | Engine | `Dropdown` | enum | P1 / P2 |
| sectionId | Đoạn đường | `Dropdown` | lookup | sections seed |
| fromDate | Từ ngày | `Date` | optional | OUT this pack if not in demo list |
| toDate | Đến ngày | `Date` | optional | OUT this pack |

## Control hint cluster — form fields

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã DET | `Text` | auto | readonly server/local gen |
| defectClass | Loại hư hỏng | `Dropdown` | * | taxonomy |
| score | Confidence | `Text` (number) | * | 0–1 |
| severity | Mức độ | `Dropdown` | * | |
| status | Trạng thái | `Dropdown` | * | |
| engine | Engine | `Dropdown` | * | P1 badge / P2 badge |
| sectionId | Đoạn | `Dropdown` | * | |
| routeLabel | Tuyến | `Text` | | |
| lat / lng | Tọa độ | `Text` (number) | | |
| pciSnapshot | PCI | `Text` (number) | | |
| modelVersion | Model | `Text` | | gpt-4o-vision / onnx-rmms-v1 |
| bboxJson | BBox | `Text` | | JSON |
| note | Ghi chú | `Text` | | multiline |
| incidentCode | Mã Vấn đề | `Text` | readonly | VI-* after confirm |

## Lookup APIs (SA)

| Lookup | API | controlHint consumer |
|--------|-----|----------------------|
| detections list | `GET /api/v1/ai-vision/detections` | SearchInput + Dropdown filters |
| detection by id | `GET /api/v1/ai-vision/detections/{id}` | form View/Edit |
| create/update | `POST/PUT …/detections` | form save |
| detect stub | `POST /api/v1/ai-vision/detect` | toolbar upload (stub OK) |
| pci history | `GET /api/v1/ai-vision/pci-history/{sectionId}` | PCI modal (stub) |
| health | `GET /api/v1/ai-vision/health` | ops |

## Handoff

→ PO: Kind B list+form DoD · DEM inventory · taxonomy  
→ Design: zones A–D · Control from controlHint · reviewUrl  
→ SA: AiVision domain APIs above · BFF proxy · migration `Schema_RmmsAiVisionDetections`

---
<!-- Version meta: skillVersion=2026.08.08.31 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.08.31 · versionGate=ok -->
