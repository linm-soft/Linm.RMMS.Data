# Data-analy — controlHint — csdl-so-sach (Kind G hub + B list + D slideout)

| Field | Value |
|-------|-------|
| feature | `csdl-so-sach` |
| packKind | `list` |
| mode | `feature_context` (edit_page · **no Excel** · CTX + demo + live MFE/BE cite · synthetic) |
| changeScope | `edit_page` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.29.03` |
| rulesVersion | `2026.08.29.31` |
| versionGate | `rechecked` (`recheck_new` · STATUS) |
| contentHash | `sha256:e13a39df3b06c9b08f1ef4f197b6b0e76e3d7863b1e6fffe42a196a22bb1faad` |
| headerFingerprint | `sha256:0528db4c9a04d817a2fd2d9867ace7ebf739fb05aac01942032a7110d9ff6a14` |
| analyzedAt | `2026-08-29T10:45:00.000Z` |
| cluster | — (không Excel · import OUT pack) |
| taskId | `task_21f924bd` |
| autoApprove | `ON` |
| realData | `specs/_data-analy/features/csdl-so-sach-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/csdl-records` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · route live `/so-ts/csdl-so-sach` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| runMode | `edit_page` · board Retry · L3 analy fill |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** lookup/init-data.  
> **Cấm** Dev đoán Text vs SearchInput khi đã có bảng này.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> `sourceKind=synthetic` — **cấm** GOVOne chrome · demo = zone/field **tham chiếu**, **cấm** demo-json / localStorage làm SSOT data.  
> **Giữ** PO/Design/SA/TL/Dev/QA artifacts đã confirmed — pack này = **L3 analy + delta gaps**.

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context | `docs/context/features/csdl-so-sach.md` | `6dfa013144e83f3821d0eceb1a733d089074745aadf3838ebd11555ff2e9a3a6` |
| Control map | `docs/context/features/csdl-so-sach-control-map.md` | `e9af9082d09c524c5fd87d7806ae3221ac733b562c6af4651d44fb73ed672e6e` |
| Demo entry | `Linm.RMMS.Demo/src/demo/features/csdl-so-sach-demo.html` | `c2c9f8194cb104b3202bcaa46a589c9baba5cf8062aa12e7d0872a9e96eba7ae` |
| Demo page | `Linm.RMMS.Demo/src/demo/asset/csdl-so-sach.html` | part of contentHash set |
| Entity | `.../Entities/CsdlCatalogRecordEntity.cs` | `rmms_csdl_catalog_records` |
| Book entry | `.../Entities/CsdlBookEntryEntity.cs` | `rmms_csdl_book_entries` |
| API | `.../Controllers/CsdlCatalogRecordsController.cs` | `api/v1/asset/csdl-records` **live** |
| BFF | `.../CsdlCatalogRecordsBffController.cs` | `web-bff/api/v1/asset/csdl-records` proxy |
| MFE list+hub | `Linm.Web.RMMS.Asset/.../CsdlSoSachPage.tsx` | Kind G+B · `LinPageLayout` |
| MFE form | `.../CsdlFormSlideout.tsx` | Kind D Z1–Z3 |
| FE endpoint | `services/csdlSoSach/endpoint.ts` | `BASE=/asset/csdl-records` |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | `csdl-so-sach` → Asset · `asset` |
| Design | `specs/csdl-so-sach/ui/design.md` | confirmed |
| SA | `specs/csdl-so-sach/be/solution-discovery.md` | confirmed · **cấm** `api/v1/infra/*` |

Normalized header (no Excel · CTX + entity + form inventory):

`catalogTab|resource|search|province|status|fromDate|toDate|code|roadName|kmFrom|kmTo|side|manageUnit|ownerUnit|detailPrimary|detailSpec|detailExtra|notes|bookNo|contractor|entries.lineNo|entries.col1|entries.col2|entries.col3|entries.note`

## § Delta Current vs New (`edit_page` · `task_21f924bd`)

Giữ PO/Design/SA/TL/Dev/QA artifacts + live hub/list/slideout CRUD. Delta **bắt buộc** = fill L3 analy stubs + document residual gaps (không xóa confirmed artifacts).

| ID | Current (live inventory 2026-08-29) | New (SSOT CTX+demo+entity) | Surface |
|----|-------------------------------------|----------------------------|---------|
| GAP-L3-REAL-DATA | Stub `draft` control-hint + real-data **trống** | §A+§B bind hub/list/form + Version meta `done` | data-analy |
| GAP-CSDL-API-DOC | STATUS Field từng ghi `api/v1/so-ts/csdl-records` | SSOT **live** `api/v1/asset/csdl-records` (SA + controller) · STATUS sync | docs |
| GAP-CSDL-ROUTE-UI | Design/Review từng ghi `/asset/csdl-so-sach` | MFE live `index.tsx` **`/so-ts/csdl-so-sach`** · mfeStdUrl align | docs / shell |
| GAP-CSDL-ROAD-01 | Form/list `roadName` = **Text** free | **SearchInput** `catalogKind=road-route` (master 38 READY) · đề xuất PO/Design | filter + form |
| GAP-CSDL-PROV-01 | `province` Select cứng `PROVINCES` (5 mã FE) | giữ LOOKUP_STATIC P1 **hoặc** master province SearchInput — PO chốt | filter + form |
| GAP-CSDL-ORG-01 | `manageUnit` / `ownerUnit` Text free | SearchInput tree `org-unit` · DEFER P2 slim OK | form |
| GAP-RPT-SRC-CSDL-01 | Sổ entries `Col1`–`Col3` flat | Field **typed** theo mẫu sổ — report pack · **out of this list pack** | form / report |
| GAP-CSDL-AUTH-01 | `[RequirePermission]` TODO CommonLib | Wire Auth NuGet — **SD-AUTH** debt | BE |
| GAP-CSDL-HIST-01 | History modal stub (docType `csdl-catalog-record`) | History API real · **cấm** invent path | list |
| GAP-QA-HUB-SLUG | Hub card meta hiện `c.key` slug | Hiển thị `title` / listTitle VN | hub |
| GAP-CSDL-XLS-01 | Import/Export toast stub | Excel full 12 sheet — **OUT pack** | toolbar |

**Không** đổi: Kind G hub + Kind B list A–D + Kind D Slideout · `LinPageLayout kind="catalog"` · `LinCatalogDataGrid` · `LinCatalogListPagination` · polymorphic `CsdlCatalogRecord` + child entries · prefix `api/v1/asset/csdl-records` · BFF proxy · route MFE `/so-ts/csdl-so-sach` · deep-link `?resource=&form=` · **cấm ERP.*** · **cấm** parent JSON · Import Excel OUT.

## Kind / zones (handoff Design)

| Zone / surface | Pattern | DoD |
|----------------|---------|-----|
| Hub | Kind **G** | Tab CSDL(12) / Sổ(8) · KPI · card grid · open-resource · back-hub · **cấm** Thêm mới trên hub title |
| List A | Header | title theo resource · back hub |
| List B | Toolbar + filter | SearchTextInput · province/status Select · from/to Date · Tạo mới · Refresh · Delete · History · SchemaConfig · Import/Export stub · **search must work** · **cấm** nút Tìm riêng |
| List C | `LinCatalogDataGrid` | kéo cột default ON · row menu Xem/Sửa/Copy/Xóa/Lịch sử · STT |
| List D | Footer | `LinCatalogListPagination` 50/100/200/500 — **cấm** footerPagination / pageSizeBar raw |
| Form | Kind **D** Slideout Z1–Z3 | C/E/V/Copy · View=`readOnly` (**không** disabled xám) · leave-confirm dirty · footer Lưu/Hủy |
| Sổ entries | `pattern_inline_grid` | add/remove line · Col1–3 + note (typed fields = report gap) |
| Map | deep-link only | Toolbar map → gis · **cấm** invent map canvas trên pack list |
| Biểu 1 | deep-link | Card → `pavement-section` (khác slug) |

**Skip chrome:** GOVOne logo/bell/user · demo skin.

## Control hint — hub

| Field key | Label | controlHint | Notes |
|-----------|-------|-------------|-------|
| catalogTab | Tab catalog | Tab enum | `csdl` \| `so` |
| resourceKey | Card resource | Card click | 12 biểu + 8 sổ · `open-resource` |
| kpi.* | KPI counts | derived | từ `GET …/catalog` · **cấm** hardcode |

## Control hint — list filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · đường · chi tiết |
| province | Tỉnh/TP | `Dropdown` | LOOKUP_STATIC | FE `PROVINCES` P1 · **GAP-CSDL-PROV-01** |
| status | Tình trạng | `Dropdown` | LOOKUP_STATIC | `tot` · `tb` · `kem` · `hong` |
| fromDate | Từ ngày | `Date` | — | QS `fromDate` |
| toDate | Đến ngày | `Date` | — | QS `toDate` |
| roadName (đề xuất) | Tên đường | `SearchInput` | **road-route** | **GAP-CSDL-ROAD-01** · hiện Text trên form |

## Control hint — form fields (Slideout)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã | `Text` readonly | auto | IdCode `XX-yyyyMMdd-nnnn` theo `prefix` resource |
| roadName | Tên đường | `Text` → đề xuất `SearchInput` | * | **GAP-CSDL-ROAD-01** |
| province | Tỉnh | `Dropdown` | * | LOOKUP_STATIC · GAP-CSDL-PROV-01 |
| kmFrom | Lý trình từ | `Number` | * | decimal |
| kmTo | Lý trình đến | `Number` | | |
| side | Bên | `Dropdown` | | L / R / C / Both |
| status | Trạng thái | `Dropdown` | * | LOOKUP_STATIC |
| manageUnit | ĐV quản lý | `Text` → đề xuất SearchInput tree | | **GAP-CSDL-ORG-01** |
| ownerUnit | Chủ QLSD | `Text` → đề xuất SearchInput tree | | **GAP-CSDL-ORG-01** |
| detailPrimary | Chi tiết chính | `Text` | * | label theo `SPEC_LABELS[resource]` |
| detailSpec | Thông số | `Text` | | |
| detailExtra | Bổ sung | `Text` | | |
| notes | Ghi chú | `Textarea` | | |
| bookNo | Số sổ | `Text` | sổ | book resources only |
| contractor | Nhà thầu / trực | `Text` | sổ | đề xuất partner-unit P2 |
| entries[] | Dòng sổ | inline_grid | sổ | Col1–3 + note · **GAP-RPT-SRC-CSDL-01** |
| updatedAt | Cập nhật | `DateTime` readonly | | audit |

## Control hint — actions

| Action | Surface | Notes |
|--------|---------|-------|
| tab-csdl / tab-so | Hub | switch card set |
| open-resource / back-hub | Hub↔List | QS `?resource=` |
| create / view / edit / copy / delete | Toolbar + row | soft-delete API |
| save / cancel | Form footer | leave-confirm dirty |
| import / export | Toolbar | toast stub · OUT pack |
| open-map / open-p1 | Toolbar / card | deep-link only |
| add-entry / remove-entry | Form sổ | inline grid |
| history | Toolbar / row | stub modal · GAP-CSDL-HIST-01 |
| schema-config | Toolbar | `LinCatalogUiSchemaEditorModal` · catalogKind `csdl-records` |

## Open questions (PO AskQuestion trước Design nếu reopen)

| ID | Q | Options |
|----|---|---------|
| Q-ROAD | `roadName` giữ Text hay SearchInput `road-route`? | keep_text · search_route (**khuyến nghị**) |
| Q-PROV | Province master vs LOOKUP_STATIC 5 tỉnh? | keep_static · master_province |
| Q-ENTRIES | Typed sổ columns trong list pack này? | defer_report · widen_now |

## Handoff

| Role | Dùng packet |
|------|-------------|
| **PO** | Copy § Delta + open Q vào `requirement.md` |
| **Design** | control-map khớp bảng hint · prototype giữ |
| **SA** | Giữ path `api/v1/asset/csdl-records` · **cấm** đổi trừ gap |
| **TL/Dev** | Wire đúng common control — **cấm** đoán Text/SearchInput |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.29.03 |
| rulesVersion | 2026.08.29.31 |
| contentHash | `sha256:e13a39df3b06c9b08f1ef4f197b6b0e76e3d7863b1e6fffe42a196a22bb1faad` |
| headerFingerprint | `sha256:0528db4c9a04d817a2fd2d9867ace7ebf739fb05aac01942032a7110d9ff6a14` |
| generatedAt | 2026-08-29T10:45:00.000Z |
| versionGate | rechecked |
| taskId | task_21f924bd |
| packKind | list |
| changeScope | edit_page |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.29.03 rulesVersion=2026.08.29.31 versionGate=rechecked contentHash=sha256:e13a39df3b06c9b08f1ef4f197b6b0e76e3d7863b1e6fffe42a196a22bb1faad -->
