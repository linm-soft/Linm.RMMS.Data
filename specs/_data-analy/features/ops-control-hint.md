# Data-analy — controlHint — ops (Kind B catalog list + form)

| Field | Value |
|-------|-------|
| feature | `ops` |
| packKind | `list` |
| mode | `feature_context` (edit_page · **no Excel** · demo + context + live MFE) |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `rechecked` |
| contentHash | `sha256:ops-delta-official-doc-20260816` |
| headerFingerprint | `sha256:ops-header-v2-official-doc` |
| analyzedAt | `2026-08-16T00:40:00.000Z` |
| cluster | — (không Excel header · synthetic inbox + công văn) |
| taskId | `task_31a9bbd8` |
| autoApprove | `ON` |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** lookup API.  
> **Cấm** Dev đoán Text vs SearchInput khi đã có bảng này.  
> **Cấm ERP.*** · domain **Notification** · BE `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/notification/inbox`.  
> **≠** GOVOne Giám sát (`patrol`) — không embed map.

## Sources

| Source | Path | Note |
|--------|------|------|
| Context | `docs/context/features/ops.md` | Kind B inbox + full-page form |
| Demo | `Linm.RMMS.Demo/src/demo/features/ops-demo.html` → `ops/ops.html` | content-only A–D |
| MFE live | `Linm.Web.RMMS.Field` · `/ops` | `NotificationListPage` + `NotificationFormPage` |
| Report gap | `specs/_form-type/REPORT-SOURCE-FIELD-GAPS.md` | **GAP-RPT-SRC-OPS-01** |
| Shared catalogs | `INVESTIGATE-CUC2.md` · org-unit | APPROVED A |

Normalized header (no Excel):

`code|title|body|recipient|priority|type|status|channel|sender|linkRef|reply|sentAt|isUnread|documentNumber|direction|summary|orgUnitCode|orgUnitName`

## § Delta Current vs New (`edit_page`)

Giữ PO/Design/SA artifacts đã confirmed. Delta **bắt buộc** task_31a9bbd8:

| ID | Current (MFE/BE 2026-08-15) | New (SSOT) | Surface |
|----|-----------------------------|------------|---------|
| GAP-RPT-SRC-OPS-01 | Inbox-only · không số CV / chiều / trích yếu / đơn vị | OfficialDocument scalars trên `rmms_notifications`: `DocumentNumber` · `Direction` · `Summary` · `OrgUnitCode` · `OrgUnitName` | form + list + BE |
| GAP-DEV-CONFIG-PLACEHOLDER-01 | `configHint` placeholder | `LinCatalogUiSchemaEditorModal` title «Cấu hình hiển thị danh mục» + `useCatalogUiSchema` · `buildDynamicGridColumns` | list |
| GAP-DEV-GRID-SCHEMA-BOOTSTRAP-01 | leftover `const columns` | seed `CatalogUiSchemaRegistry.OpsInbox` = `ops-inbox` | BE Integration + FE |
| GAP-LIST-FILTER-CV | Zone B thiếu chiều / đơn vị | SearchInput `direction` · `orgUnitCode` · GET `?direction=&orgUnitCode=` | list |

**Không** đổi: Kind B · Full-page form (cấm Slideout) · IdCode `OPS-*` · SearchInput status/priority/type/recipient · LinPageLayout A–D · route Field `/ops` · domain Notification.

SignalR · Command center · map embed — **OUT pack** (giữ P2).

## Kind / zones (handoff Design)

| Zone | Pattern | DoD |
|------|---------|-----|
| A | Header | title «Chỉ đạo điều hành» — **cấm** Thêm mới trên A |
| B | Toolbar + filter | SearchText · SearchInput status/priority/type/direction/org-unit · Tạo · Refresh · config FULL · history · unread |
| C | `LinCatalogDataGrid` | kéo cột default ON · cột số CV · chiều · trích yếu · đơn vị |
| D | Footer | `LinCatalogListPagination` 50/100/200/500 |
| Form | Kind B full-page | C/E/V/Copy · **cấm** Resource/Slideout/View=disabled xám |
| F | Schema editor | `LinCatalogUiSchemaEditorModal` · **cấm** `LinListTableConfigModal` · **cấm** `configHint` |

## Control hint — list filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · tiêu đề · số CV · trích yếu · đội |
| status | Trạng thái | `SearchInput` | enum ops-status | **cấm** native select |
| priority | Ưu tiên | `SearchInput` | enum ops-priority | |
| type | Loại | `SearchInput` | enum ops-type | |
| direction | Chiều CV | `SearchInput` | **cv-direction** | `di` / `den` · trống = tất cả |
| orgUnitCode | Đơn vị | `SearchInput` | **org-unit** | master FE Chi cục II · **cấm** free-text |
| unreadOnly | Chỉ chưa đọc | toggle | | extra bar |

## Control hint — form fields

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã chỉ đạo | `Text` | auto | IdCode `OPS-YYYYMMDD-NNNN` readonly |
| documentNumber | Số công văn | `Text` | | **NEW** · nguồn `rpt-cong-van` |
| direction | Chiều | `SearchInput` | | **NEW** · `di` / `den` |
| summary | Trích yếu | `Text` | | **NEW** · textarea |
| orgUnitCode | Đơn vị | `SearchInput` | | **NEW** · org-unit master · persist code+name |
| sender | Người gửi | `Text` | | |
| sentAt | Thời gian gửi | `Date` (datetime) | | |
| status | Trạng thái | `SearchInput` | * | |
| title | Tiêu đề | `Text` | * | |
| body | Nội dung | `Text` | * | textarea |
| recipient | Người nhận / đội | `SearchInput` | * | |
| priority | Độ ưu tiên | `SearchInput` | | |
| type | Loại chỉ đạo | `SearchInput` | | |
| channel | Kênh gửi | `SearchInput` | | |
| linkRef | Liên kết nguồn | `Text` | | |
| reply | Phản hồi | `Text` | | P2 |

## Lookup API (handoff SA)

| catalogKind | Source | Notes |
|-------------|--------|-------|
| ops-status / priority / type / channel / recipient | FE master `lookups.ts` | P1 constants |
| cv-direction | FE master `DIRECTION_LOOKUP` | Đi · Đến |
| org-unit | FE master Chi cục II (P1) · Integration API P2 | SearchInput |

CRUD: `GET/POST/PUT/DELETE api/v1/notification/inbox` · query thêm `direction` · `orgUnitCode` · BFF proxy querystring passthrough.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.08.15.5 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.15.5 |
| rulesVersion | 2026.08.15.8 |
| versionGate | rechecked |
| generatedAt | 2026-08-16T00:40:00.000Z |

<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=rechecked -->
