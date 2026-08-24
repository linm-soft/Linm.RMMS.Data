# Real-data bind — ai-vision (Kind B catalog list + form · packKind ai)

| | |
|---|---|
| feature | `ai-vision` |
| prefix | `web-bff/api/v1` |
| sourceTables | `rmms_ai_vision_detections` |
| changeScope | `edit_page` |
| taskId | `task_d52ac8ac` |

## §A Resource

| Resource | Entity / table | Key |
|----------|----------------|-----|
| Detection list/detail | `AiVisionDetectionEntity` / `rmms_ai_vision_detections` | `Id` Guid · `Code` DET-* · tenant `CompanyCode` |
| Section lookup | demo seed `SECTIONS` + BE filter `sectionId` | `SEC-QL1-*` |
| Defect taxonomy | init constants `DEFECT_CLASSES` (10 classes) | Ổ gà … Hư mép |
| Engine | `P1` / `P2` | modelVersion gpt-4o-vision / onnx-rmms-v1 |
| Catalog UI schema | `CatalogUiSchemaRegistry` kind `ai-vision-detections` | seed cột list + form |
| Detect stub | `POST /ai-vision/detect` | creates Draft row |
| PCI history stub | `GET /ai-vision/pci-history/{sectionId}` | modal (out list pack) |

## §B Bind

| UI zone | Method | Path | DTO → display |
|---------|--------|------|---------------|
| Zone B search | GET | `/ai-vision/detections?search=&defectClass=&severity=&status=&engine=&sectionId=&page=&pageSize=` | filter → page=1 |
| Zone C grid | GET | (same list) | `code` · `defectClass` · `score` · `severity` · `sectionId` · `routeLabel` · `status` · `engine` · `incidentCode` |
| Zone D pagination | — | server | `totalCount` · pageSize 50 default |
| Section filter | GET | `sectionId` query | Dropdown `SECTIONS` |
| Form View/Edit | GET | `/ai-vision/detections/{id}` | full DTO |
| Create/Copy | POST | `/ai-vision/detections` | body fields per controlHint |
| Update | PUT | `/ai-vision/detections/{id}` | body + soft fields |
| Soft delete | DELETE | `/ai-vision/detections/{id}` | `IsActive=false` |
| Detect stub toolbar | POST | `/ai-vision/detect` | `{ engine?: P1\|P2 }` → new Draft |
| Incident confirm | PUT | `/ai-vision/detections/{id}` | `status=IncidentCreated` · `incidentCode=VI-*` |
| Schema editor | GET/PUT | `/integration/catalogs/ai-vision-detections/ui-schema` | `LinCatalogUiSchemaEditorModal` |

**BFF:** `web-bff/api/v1/ai-vision/detections` proxy → API `api/v1/ai-vision/detections`.  
**Cấm** ERP.* · `Domains/Master` · prefix `/rmms/` ERP.

## §C Write rules

| Action | Rule |
|--------|------|
| create | `defectClass` + `sectionId` + `engine` required · `Code` auto DET-* |
| update | PUT scalars flat · incident via status transition |
| copy | POST new · clear `id` · new `code` |
| delete | soft delete tenant-scoped |
| detect stub | POST creates Draft · engine P1 default · score/severity from taxonomy |
| incident | Critical + Draft → row menu «Tạo Vấn đề» → VI-* |

## §D Empty / fail

| Case | Behavior |
|------|----------|
| list empty | «Không có dữ liệu phát hiện.» |
| list filtered empty | «Không tìm thấy phát hiện phù hợp» |
| list fail | empty grid · totalCount=0 · localStorage fallback |
| detect fail | toast error · no row added |
| form 404 | redirect list |
| schema fail | bootstrap columns from `uiColumns` |

## §E Progress

| Milestone | Status |
|-----------|--------|
| Analy real-data | **this turn** (`task_d52ac8ac`) |
| GAP-FILTER-SECTION sectionId filter | Dev this turn |
| GAP-TOOLBAR-DETECT stub | Dev this turn |
| GAP-STATUS-LABEL vi labels | Dev this turn |
| Kind F map / PCI modal | OUT list pack |

## §F Cấm

- Badge/tag `AI` · P1/P2 chrome on header/`beforeToolbar` (`ai-chrome-skip.md`)
- ERP.WebService / Domains/Master fork
- Mock-only list khi BFF available (fallback OK)
- Real GPT-4o / ONNX runtime (P1 stub only)

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.08.09.02 |
| schemaVersion | qldb-workflow-skill-v1 |
| workflowVersion | 2026.08.09.02 |
| generatedAt | 2026-08-23T16:50:00.000Z |
| versionGate | ok |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.08.09.02 schemaVersion=qldb-workflow-skill-v1 workflowVersion=2026.08.09.02 versionGate=ok -->
