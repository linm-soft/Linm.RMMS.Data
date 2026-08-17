# Data-analy — controlHint — integration (Kind G hub + Kind B grids + full-page form)

| Field | Value |
|-------|-------|
| feature | `integration` |
| packKind | `list` |
| mode | `feature_context` (edit_page · **no Excel** · demo + context + live MFE) |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `rechecked` |
| contentHash | `sha256:integration-delta-schema-fullpage-20260816` |
| headerFingerprint | `sha256:integration-header-v2-hub-grids` |
| analyzedAt | `2026-08-16T05:40:00.000Z` |
| cluster | — (không Excel header · demo HTML + context + live MFE) |
| taskId | `task_47bcb9ae` |
| autoApprove | `ON` |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** lookup API.  
> **Cấm** Dev đoán Text vs SearchInput khi đã có bảng này.  
> **Cấm ERP.*** · domain **Integration** · BE `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/integration/*`.  
> **≠** Góp ý (`feedback`) · **≠** Cổng dân (`citizen`).

## Sources

| Source | Path | Note |
|--------|------|------|
| Context | `docs/context/features/integration.md` | Kind G hub + Import · IdCode `SYNC-*` |
| Demo entry | `Linm.RMMS.Demo/src/demo/features/integration-demo.html` → `integration/integration.html` | chrome SKIP |
| MFE live | `Linm.Web.RMMS.Integration` · `/integration` | `IntegrationListPage` + Slideout stale |
| Prior design.md | `specs/integration/ui/design.md` | Kind D Import slideout — **GAP docs** |
| Shared catalogs | static FE enums | không master Excel |

Normalized header (no Excel):

`code|syncType|partner|status|recordCount|startedAt|finishedAt|error|name|systemType|auth|health|phase|enabled|method|path|description`

## § Delta Current vs New (`edit_page`)

Giữ PO/Design/SA artifacts đã confirmed. Delta **bắt buộc** `task_47bcb9ae`:

| ID | Current (MFE/BE 2026-08-15) | New (SSOT) | Surface |
|----|-----------------------------|------------|---------|
| GAP-F-SLIDE-01 | `ImportAssetSlideout` + `SyncJobFormSlideout` + View Input `readOnly` | Full-page `ImportAssetFormPage` · `SyncJobFormPage` · `PartnerFormPage` · View=`<dl>` | form |
| GAP-DEV-CONFIG-PLACEHOLDER-01 | `configHint` dialog | `LinCatalogUiSchemaEditorModal` title «Cấu hình hiển thị danh mục» + `useCatalogUiSchema` · `buildDynamicGridColumns` | list |
| GAP-DEV-GRID-SCHEMA-BOOTSTRAP-01 | leftover `const columns` / `LinCatalogDataColumn` | seed `integration-sync-jobs` · `integration-partners` · `integration-endpoints` | BE Integration + FE |
| GAP-LIST-FILTER-SELECT | Zone B `Select` phase/type/status | `SearchInput` static enum · **cấm** native Select | list |
| GAP-FORM-LKP-01 | Form `Select` status/asset/region/route | `SearchInput` static enum | form |

**Không** đổi: Kind G hub tabs Endpoints/Sync/Partners/Guide · IdCode `SYNC-YYYYMMDD-NNNN` · CRUD `api/v1/integration/*` · LinPageLayout 1 shell · `LinCatalogListPagination` · domain Integration · webhook P2 stub.

Demo host chrome / localStorage-only — **SKIP** clone; MFE giữ fallback khi API down.

## Kind / zones (handoff Design)

| Zone | Pattern | DoD |
|------|---------|-----|
| A | Header | title «Open API và tích hợp» — **cấm** Thêm mới trên A |
| B | Toolbar + filter | Hub OpenAPI actions · tabs · SearchTextInput · SearchInput enum · Import · Refresh · config FULL theo tab |
| C | `LinCatalogDataGrid` | kéo cột default ON · columns theo schema tab · row menu |
| D | Footer | `LinCatalogListPagination` 50/100/200/500 (Sync + Partners) |
| Form | Kind B **full-page** | Import / Job C-E-V · Partner View · View=`<dl>` · **cấm** Slideout/Resource/View=`readOnly` Input · leave-confirm |
| F | Schema editor | `LinCatalogUiSchemaEditorModal` · **cấm** `LinListTableConfigModal` · **cấm** `configHint` |

**Skip chrome:** logo · hamburger · user menu demo.

## Control hint — list filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| epSearch | Lọc path / mô tả | `SearchTextInput` | text | method · path · mô tả |
| epPhase | Phase | `SearchInput` | enum integration-phase | P1/P2/P3 · trống = tất cả |
| jobSearch | Tìm kiếm | `SearchTextInput` | text | mã · partner |
| jobType | Loại sync | `SearchInput` | enum integration-sync-type | import · offline-batch · webhook |
| jobStatus | Trạng thái | `SearchInput` | enum integration-job-status | draft/running/done/failed |
| partnerSearch | Tìm partner | `SearchTextInput` | text | name · systemType |

## Control hint — form fields (Import)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã job | `Text` | auto | IdCode `SYNC-*` readonly |
| assetType | Loại tài sản | `SearchInput` | * | static FE |
| region | Địa bàn | `SearchInput` | * | static FE |
| route | Tuyến đường | `SearchInput` | * | static FE |
| section | Đoạn đường | `Text` | | |
| fileName | File nguồn | `File` | * | xlsx/xls/csv |
| note | Ghi chú | `Text` | | |

## Control hint — form fields (Sync job)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã job | `Text` | auto | readonly |
| syncType | Loại sync | `Text` | | display |
| partner | Partner | `Text` | * | |
| status | Trạng thái | `SearchInput` | * | enum job-status |
| note | Ghi chú | `Text` | | |
| logText | Log | `Text` | | view/display |

## Lookup API (handoff SA)

| catalogKind | Source | Notes |
|-------------|--------|-------|
| integration-phase | static FE | P1 · P2 · P3 |
| integration-sync-type | static FE | import · offline-batch · webhook |
| integration-job-status | static FE | draft · running · done · failed |
| integration-asset-type | static FE | mat-duong · cau · cong · bien-bao · den |
| integration-region | static FE | hn · hcm · dn |
| integration-route | static FE | QL1A · QL18 · CT01 |
| integration-sync-jobs | `CatalogUiSchemaRegistry` | list column schema |
| integration-partners | `CatalogUiSchemaRegistry` | list column schema |
| integration-endpoints | `CatalogUiSchemaRegistry` | list column schema |

Không CUC2 master cho hub OpenAPI.

## Handoff

- Design: chốt full-page + schema editor; prototype A–D content-only.
- SA: seed 3 catalogKind trên Integration CatalogUiSchema.
- TL: T-UI-LKP · T-UI-FIELD · T-UI-PROD · T-UI-UX · T-BE-SCHEMA.
- Dev: cấm Slideout / configHint / leftover `const columns`.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.08.15.5 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.15.5 |
| rulesVersion | 2026.08.15.8 |
| generatedAt | 2026-08-16T05:40:00.000Z |
| versionGate | rechecked |
| taskId | `task_47bcb9ae` |
