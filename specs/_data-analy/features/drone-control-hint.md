# Data-analy controlHint — drone

| Field | Value |
|-------|-------|
| feature | `drone` |
| packKind | `list` |
| source | demo `drone-data.js` + context `drone.md` |
| status | `done` |

## Fields

| Column / field | Type | controlHint | catalogKind / notes |
|----------------|------|-------------|---------------------|
| search (list) | string | **SearchTextInput** | mã · tên · tuyến · phi công |
| code | IdCode | Text readonly | `SCN-YYYYMMDD-NNNN` |
| name | string | **Text** | required |
| flightType | enum ≤5 | **Dropdown** | cau · taluy · sat-lo · mapping · ortho |
| purpose | string | **Text** | |
| road | string | **Text** | tuyến/đoạn free-text P2 (master road-route later) |
| structure | string | **Text** | công trình |
| office | enum ≤3 | **Dropdown** | LOOKUP_STATIC offices |
| device | enum ≤3 | **Dropdown** | LOOKUP_STATIC devices |
| pilot | string | **Text** | |
| flightDate | date | **Date** | |
| startTime / endTime | time | **Text** | HH:mm |
| areaKm2 | number | **Text** (number) | |
| photoCount | number | **Text** (number) | |
| status | enum ≤5 | **Dropdown** | nhap · uploaded · processing · completed · error |
| pointCloudKey / orthophotoKey | string | **Text** | storage keys |
| tilesStatus | enum | **Dropdown** | chua · dang-gen · san-sang · loi |
| gisRef / incidentRef / aiVisionJob | string | **Text** | refs |
| note | string | **Text** | |
| artifacts.* | line grid | pattern_inline_grid | kind Dropdown · fileName Text · sizeMb number · status Dropdown |

## Confirmed by

ai-autocode-autopilot · task_e4372bbe

---
<!-- Version meta: skillVersion=2026.08.08.20 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.09.02 · versionGate=ok -->
