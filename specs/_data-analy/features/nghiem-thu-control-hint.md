# Data-analy — controlHint — nghiem-thu (Kind B list + form · clone tuần kiểm)

| Field | Value |
|-------|-------|
| feature | `nghiem-thu` |
| title | Công tác nghiệm thu — clone tuần kiểm + 10 mẫu |
| packKind | `list` |
| changeScope | `new_page` |
| mode | `feature_context` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.05.8` |
| versionGate | `ok` |
| contentHash | `sha256:41b14359b00a0bacbd2f5e88ab9ed8f7604f962c4e4e58219bf9c1145b5ef4ea` |
| headerFingerprint | `sha256:41b14359b00a0bacbd2f5e88ab9ed8f7604f962c4e4e58219bf9c1145b5ef4ea` |
| analyzedAt | `2026-09-12T09:00:00.000Z` |
| updatedAt | `2026-09-12T09:00:00.000Z` |
| cluster | — (không Excel · CTX only · demo **N/A**) |
| taskId | `task_01b899ee` |
| autoApprove | `ON` |
| realData | `specs/_data-analy/features/nghiem-thu-real-data.md` |
| filterBar | `specs/_data-analy/features/nghiem-thu-filter-bar.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP 15 domain · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Field` · `/nghiem-thu` |
| mfeStdUrl | `http://localhost:9301/nghiem-thu` |
| peerClone | `patrol` (Kind B list + full-page form) |
| persona | cán bộ nghiệm thu (≠ tuần đường / tuần kiểm) |
| runMode | `full_pipeline` · greenfield |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** domain/resource + schema.  
> **Cấm** Dev đoán Text vs SearchInput · invent file API · gộp `maintenance` WO.

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context | `docs/context/features/nghiem-thu.md` | `41b14359b00a0bacbd2f5e88ab9ed8f7604f962c4e4e58219bf9c1145b5ef4ea` |
| Peer CTX | `docs/context/features/patrol.md` | clone shell / form pair |
| Peer analy | `specs/_data-analy/features/patrol-control-hint.md` | Kind B zones A–D + full-page |
| Meeting seed | `specs/_form-type-mobile/MEETING-1-5.md` | họp 1 · 10 mẫu · enqueue_later mobile |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | **chưa** có slug `nghiem-thu` · 15 domain FIXED |
| Files BFF | `bff/src/RMMS.Service.Bff` · NuGet `Linm.Platform.FileService.Bff` | HARD reuse |
| Demo | **N/A** | zone ids mobile seed only |

Normalized header (entity + form inventory):

`code|templateType|route|zoneOrgCode|vpOrgCode|assigneeCode|inspectedAt|kmFrom|kmTo|fieldInfo|status|mediaIds|note|updatedAt|search`

## Kind / zones (handoff Design)

| Zone | Pattern | DoD |
|------|---------|-----|
| A | Header | title «Công tác nghiệm thu» — **cấm** Thêm mới trên A |
| B | Toolbar + `LinErpListFilterBar` | leading filters + 🔍 mép phải · Tạo mới · Refresh · Delete · config · History stub — **GAP-FILTER-WRAP-02** |
| C | `LinCatalogDataGrid` | kéo cột default ON · row Xem/Sửa/Copy/Xóa/Lịch sử |
| D | Footer | `LinCatalogListPagination` 50/100/200/500 |
| Form | Kind B **full-page** (clone patrol) | C/E/V/Copy · View=`<dl>` · footer Lưu/Hủy · leave-confirm · URL `/nghiem-thu/new` · `/nghiem-thu/:id` |
| Upload | FileService | ảnh/video · `mediaIds[]` guid · resign mỗi xem |
| Templates | 10 mẫu | chọn mẫu trước/khi tạo · LOOKUP_STATIC — **GAP-DA-NT-TMPL-01** tên 10 mẫu |
| Mobile | enqueue_later | chờ API web · **cấm** queue qlbd-mobile trong lane web này |

**Skip chrome:** logo · Ban.TK skin · govone/social · theme GOVOne.

**Cấm gộp:** `maintenance` WO / P2 stub nghiệm thu WO · ERP.* · invent `api/v1/nghiem-thu-files`.

## Control hint — list filters (Zone B · filter-bar)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · tuyến · mẫu · ghi chú — **không** nút Tìm riêng |
| status | Trạng thái | `SearchInput` | enum | Nháp · Đang NT · Hoàn thành · Hủy — PO chốt nhãn |
| route | Tuyến đường | `SearchInput` | **road-route** | Master · **cấm** free-text |
| templateType | Mẫu NT | `SearchInput` | LOOKUP_STATIC | 10 mẫu · **UNCLEAR** danh sách tên |
| fromDate / toDate | Từ / Đến | `Date` | | kỳ nghiệm thu |

## Control hint — form fields

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã nghiệm thu | `Text` | auto | IdCode `NT-yyyyMMdd-nnn` · Create readOnly |
| templateType | Mẫu nghiệm thu | `SearchInput` | * | 1/10 mẫu · LOOKUP_STATIC · **GAP-DA-NT-TMPL-01** |
| route | Tuyến đường | `SearchInput` | * | `catalogKind=road-route` · persist **code** |
| zoneOrgCode / zoneOrgName | Khu / Chi cục | `SearchInput` | | `catalogKind=org-unit` · clone RmmsOrgFormFields |
| vpOrgCode / vpOrgName | VP | `SearchInput` | | org-unit |
| assigneeCode / assigneeName | Cán bộ NT | `SearchInput` | * | persona NT · org/user bind |
| inspectedAt | Ngày nghiệm thu | `Date` | * | |
| kmFrom / kmTo | Km đầu / Km cuối | `Text` (number) | | chainage hiện trường |
| fieldInfo | Thông tin hiện trường | `Text` | * | multiline |
| status | Trạng thái | `SearchInput` | * | enum VN |
| note | Ghi chú | `Text` | | |
| mediaIds | Ảnh / video hiện trường | `FileMulti` | | FileService ids · image+video · **cấm** persist full URL |
| updatedAt | Cập nhật | `Date` | | readonly View |

## Upload HARD (họp 1–5)

| Rule | Value |
|------|-------|
| Host BFF | `Linm.RMMS.WebService/bff/src/RMMS.Service.Bff` |
| Route | `web-bff/api/v1/files/*` · NuGet `Linm.Platform.FileService.Bff` |
| UI | `/integrate-file-upload-web` · persist file **id** (guid) · resign mỗi lần xem |
| Slash | `/init-bff-file` nếu thiếu package — **cấm** `/implement-file-service` |
| Cấm | copy `FilesController` · invent `api/v1/nghiem-thu-files` · persist/log full presigned URL |

## Domain / API đề xuất (SA confirm)

| Mục | Đề xuất | Gap |
|-----|---------|-----|
| DOMAIN-MAP slug | Map `nghiem-thu` → domain **Patrol** (sibling resource, không `sessions`) | **GAP-DA-NT-DOMAIN-01** — slug chưa có trên map |
| API prefix | `api/v1/patrol/nghiem-thu` · BFF `web-bff/api/v1/patrol/nghiem-thu` | **GAP-DA-NT-API-01** — chưa có controller |
| Entity | bảng NT riêng (SA đặt tên) · **cấm** reuse `rmms_patrol_sessions` · **cấm** WO maintenance | SA |
| Cấm | domain thứ 16 · ERP.* · Maintenance WO complete stub | HARD |

## Open questions (PO MUST trước Design)

| ID | Q | Default analy |
|----|---|----------------|
| GAP-DA-NT-TMPL-01 | Tên chính xác **10 mẫu** nghiệm thu? | LOOKUP_STATIC placeholder `mau-01`…`mau-10` đến khi PO chốt |
| GAP-DA-NT-STATUS-01 | Enum trạng thái VN cuối? | Nháp / Đang NT / Hoàn thành / Hủy |
| GAP-DA-NT-DOMAIN-01 | SA xác nhận domain Patrol + resource path? | đề xuất Patrol sibling |
| GAP-DA-NT-FORM-01 | Form Pattern = Full page (clone patrol) OK? | Full page |

## Cấm

| ❌ | ✅ |
|----|-----|
| Gộp maintenance WO / P2 stub | Module riêng Field `/nghiem-thu` |
| Invent file API / persist URL | FileService BFF + guid |
| ERP.WebService / Domains/Master | Linm.RMMS.WebService only |
| Free-text tuyến khi có road-route | SearchInput road-route |
| Lane mobile implement trong task web | web only · mobile enqueue_later |
| Skip filter-bar HARD | `nghiem-thu-filter-bar.md` |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.05.8 |
| contentHash | sha256:41b14359b00a0bacbd2f5e88ab9ed8f7604f962c4e4e58219bf9c1145b5ef4ea |
| generatedAt | 2026-09-12T09:00:00.000Z |
| versionGate | ok |

---
<!-- Version meta: skillVersion=2026.09.05.03 · schemaVersion=data-analy-control-hint-v1 · workflowVersion=2026.09.05.03 · versionGate=ok -->
