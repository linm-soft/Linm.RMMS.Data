# PO — ai-vision (AI kiểm định mặt đường)

| Field | Value |
|-------|-------|
| feature | `ai-vision` |
| changeScope | `edit_page` |
| packKind | `ai` |
| Feature Kind | **B** — Catalog list + form (full page) |
| status | `confirmed` (autopilot · task_bc9cfb1a) |
| skillVersion | `2026.08.09.02` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.09.02` |
| versionGate | `ok` |
| controlHint | `specs/_data-analy/features/ai-vision-control-hint.md` |
| updatedAt | `2026-08-09T16:42:00.000Z` |

## 1. Goal

Align MFE **AI kiểm định mặt đường** Kind B catalog parity (erp-form-context): LinPageLayout · toolbar · search/filter · LinCatalogDataGrid · LinCatalogListPagination · row menu · View/Create/Edit/Copy · P1/P2 badge · Critical → VI-*. BE `Linm.RMMS.WebService` domain AiVision only.

## 2. Current → New (edit_page)

| Layer | Current | New (delta) |
|-------|---------|-------------|
| Demo | Full interactive Kind B+D+F (Signed) | SSOT UX; pack = **list + form** |
| MFE list | Prior footerPagination / HTML table | LinCatalogDataGrid + LinCatalogListPagination + pageSize |
| MFE form | Full page C/E/V/Copy | Keep + validate |
| API client | `/ai-vision/detections` + fallback | Keep |
| BE | Detections API/BFF present | Named migration `Schema_RmmsAiVisionDetections` · verify build |

## 3. Personas / DoD

1. List load + **search work** (mã/class/section/route/severity/status/engine)
2. Filters: defectClass · severity · status · engine (controlHint Dropdown)
3. Toolbar: Tạo mới · Làm mới · history · config · badge P1 online
4. Row menu: Xem · Sửa · Sao chép · (Critical) Tạo Vấn đề
5. View = `readOnly`
6. Create/Edit/Copy validate + save (Draft)
7. FE `yarn build` + `typecheck` PASS
8. BE API+BFF build PASS

## 4. CTX / DEM inventory

| Source | Path |
|--------|------|
| Context | `docs/context/features/ai-vision.md` |
| controlHint | `_data-analy/features/ai-vision-control-hint.md` |
| Demo | `Demo/.../ai-vision/ai-vision.html` |
| MFE | `Linm.Web.RMMS.AiVision` |
| BE | `Linm.RMMS.WebService` · `api/v1/ai-vision` |

### List columns

STT · Mã · Class · Score · Severity · Section · Route · Status · Engine · Incident · actions

### Form fields (*)

code (readonly) · defectClass* · score* · severity* · status* · engine* · sectionId* · routeLabel · lat · lng · pciSnapshot · modelVersion · bbox · note · incidentCode

## 5. Out of scope

- Full Leaflet map (Kind F)
- Real GPT-4o / ONNX / SAM runtime
- ai-asset-detect
- Token budget alert

## 6. Handoff → Design

Kind B zones A–D · controlHint → controls · prototype + reviewUrl

---
<!-- Version meta: skillVersion=2026.08.09.02 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.09.02 · versionGate=ok -->
