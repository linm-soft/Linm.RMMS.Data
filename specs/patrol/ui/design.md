# Design — patrol (Tuần đường / tuần kiểm)

| Field | Value |
|-------|-------|
| feature | `patrol` |
| Feature Kind | **B** — Catalog list A–D + **full-page** form (`PatrolFormPage`) + **upload zone** |
| status | `confirmed` (autoApprove=ON · agent self-confirm) |
| design_confirm | `approve` (`task_a57d8389`) |
| changeScope | `edit_page` |
| packKind | `list` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Field` (`/patrol`) |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/patrol/sessions` · files `web-bff/api/v1/files/*` |
| prior | PO `confirmed` · `po/requirement.md` · data-analy hash `f2761b7dc5…` · prior design KEEP |
| autoApprove | **ON** (`task_a57d8389`) → agent confirm Design |
| updatedAt | `2026-09-07T00:49:00.000Z` |
| taskId | `task_a57d8389` |

## § Delta Current vs New (`edit_page` · W4-1 W4-2 · `task_a57d8389`)

| ID | Current (prior design `task_5e7961be`) | New (this run) | Surface |
|----|----------------------------------------|----------------|---------|
| A–D list | Kind B catalog · SearchInput route KEEP | **KEEP** — không đổi Zone A–D | list |
| Form pattern | Full-page · View `<dl>` · footer-only | **KEEP** + **upload section** | form |
| mediaIds | Không | **`FileMulti`** · section «Ảnh / video hiện trường» · View gallery resign | form |
| MIME/UI | — | jpeg\|png\|webp ≤10MB · mp4\|webm ≤50MB · max 10 · helper copy dưới zone | form |
| Grid media | — | **AC-G-08** không cột media P1 | list |
| Org bind | live RmmsOrgFormFields | Inventory **KEEP** SearchInput org-unit | form |
| code | Text readonly IdCode | leftover P2: `readOnly` > `disabled` (không block media) | form |
| Prior GAP-PO-PAT-01..07 | CLOSED | **KEEP CLOSED** | — |

**Không** đổi: Kind B A–D · full-page · View `<dl>` · footer-only · `?route=` · seed 38 · **cấm ERP.*** · **cấm** invent `api/v1/patrol-files` · lane web · Kind E+F P2.

## 0. Context & Demo (from PO / analy)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/patrol.md` | Kind B + GPS/ảnh DoD |
| DEM-01 | demo `patrol-demo.html` | Visual ref only — **cấm** re-scan (hash skip) |
| DI-02 | `specs/_data-analy/features/patrol-control-hint.md` | controlHint SSOT · hash `f2761b7dc5…` |
| DI-03 | `patrol-real-data.md` §A+§B | bind mediaIds FileMulti |
| DI-04 | `road-route-seed.json` | **38** · `QL.1` |

Persona: Tuần đường · Hạt trưởng. Pack **không** clone Kind E report / Kind F Leaflet.

## 1. Kind + UI pattern

| | |
|--|--|
| Feature Kind | **B** |
| List pattern | **1×** `LinPageLayout` kind=catalog — **cấm** nested `CatalogListShell` |
| Grid | `LinCatalogDataGrid` · kéo cột **default ON** · **không** cột media P1 |
| Footer | `LinCatalogListPagination` — **cấm** footerPagination / pageSizeBar |
| Form pattern | **Full-page** `PatrolFormPage` C/E/V/Copy — **cấm** Resource · **cấm** Slideout |
| Upload | Form section `FileMulti` · View = gallery resign — **cấm** Input xám |
| Routes | List `/patrol` · Create `/patrol/new` · Edit/View `/patrol/:id` |
| Toolbar SSOT | `catalog-list-toolbar` + `erp-control-icon-map` |
| View | **`<dl>` / display** + media gallery — **cấm** Input `readOnly` xám toàn form |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls |
|--------|----------|-------|----------|
| Sổ phiên tuần tra | list | **A Header · B Toolbar+filter · C Grid · D Pagination** | SearchTextInput + SearchInput status + SearchInput route |
| Form phiên | create/edit/view/copy | **Full-page** + **upload zone** | fields P1 + FileMulti · footer-only Lưu/Hủy |

### Zone A — Header

- Icon `fa-route` + title **Tuần đường / tuần kiểm** (22px)
- **Cấm** nút Thêm mới / Tạo mới trên A

### Zone B — Toolbar + filter (**KEEP**)

**Trái:** search `SearchTextInput` · status `SearchInput` · route `SearchInput` road-route · Làm mới · Lịch sử stub · fa-cog · Xóa  
**Phải:** **Tạo mới** primary — **chỉ trên B**  
Filter đổi → **page=1**. **Cấm** Excel / orgUnit filter / date range P2 trên B.

### Zone C — Grid (**KEEP** · AC-G-08)

- Card: **Sổ phiên tuần tra / check-in**
- Columns: STT · □ · Mã phiên · Nhân viên · Tuyến · Loại tuần · Ngày KH · Check-in · Coverage % · Trạng thái · Offline · ⋯
- **Không** cột Ảnh/video P1 (optional thumb P2)
- Row menu: Xem · Sửa · Sao chép · Xóa · Lịch sử (stub)

### Zone D — Pagination (**KEEP**)

`LinCatalogListPagination`: 50 / 100 / 200 / 500 · FA pager 32×32.

### Form — Upload zone (Design chốt · GAP-DES-PAT-MEDIA-UI)

| Mode | Layout | Behavior |
|------|--------|----------|
| C/E/Copy | Section full-width **sau Ghi chú · trước Cập nhật** · label «Ảnh / video hiện trường» · `data-zone="upload"` | Dropzone + file picker · thumb strip (remove) · dirty khi add/remove |
| View | Gallery grid dưới `<dl>` · `data-zone="media-gallery"` | Resign URL mỗi lần mở · img / video thumb · lightbox click · **cấm** Input xám |
| Empty | Helper «Chưa có ảnh/video» | Không skeleton blank cả form |

**Cấm:** media strip trên Zone A/B · modal-only upload · persist full URL trên DTO · cột grid media P1.

## 3. Field inventory (form) — Design chốt controlHint

| uiField | Label VN | Control | Required | FormMode lock | Notes |
|---------|----------|---------|----------|---------------|-------|
| code | Mã phiên tuần | `Text` readOnly IdCode | auto | all readOnly | `TD-yyyyMMdd-nnn` · P2 leftover vs `disabled` |
| userName | Nhân viên | `Text` | * | view=`<dl>` | P1 **không** SearchInput users |
| route | Tuyến đường | `SearchInput` | * | view=`<dl>` | road-route 38 — **KEEP** |
| zoneOrgCode / zoneOrgName | Khu / Chi cục | `SearchInput` | | view=`<dl>` | `RmmsOrgFormFields` · org-unit **KEEP** |
| vpOrgCode / vpOrgName | VP | `SearchInput` | | view=`<dl>` | org-unit **KEEP** |
| assigneeCode / assigneeOrgName | Người giao / NV | `SearchInput` | | view=`<dl>` | org bind **KEEP** |
| routeCode | Mã tuyến (org) | derived / SearchInput | | view=`<dl>` | sync `route` |
| patrolType | Loại tuần | `SearchInput` | * | view=`<dl>` | Tuần đường · Tuần kiểm |
| plannedDate | Ngày kế hoạch | `Date` | * | view=`<dl>` | |
| startedAt | Bắt đầu thực tế | `Date` (datetime-local) | | view=`<dl>` | |
| checkInCount | Số điểm check-in | `Text` (number ≥0) | * | view=`<dl>` | |
| coveragePercent | Coverage % | `Text` (number 0–100) | | view=`<dl>` | |
| status | Trạng thái | `SearchInput` | * | view=`<dl>` | 4 enum VN |
| offlineQueued | Hàng đợi offline | `SearchInput` | | view=`<dl>` | |
| note | Ghi chú | `Text` | | view=`<dl>` | |
| **mediaIds** | **Ảnh / video hiện trường** | **`FileMulti`** | | view=gallery | **NEW P0** · guid[] · FileService · **cấm** full URL |
| updatedAt | Cập nhật | `Date` readOnly | | all readOnly | |

### Status / type / seed (**KEEP**)

| Enum | Values |
|------|--------|
| status | Đang tuần · Hoàn thành · Bỏ sót · Offline queue |
| patrolType | Tuần đường · Tuần kiểm |
| seed route | **`QL.1`** ∈ 38 |

### MIME / size (PO chốt · Design UI copy)

| Rule | Value | UI |
|------|-------|-----|
| Image | `jpeg` \| `png` \| `webp` ≤ **10 MB**/file | accept + helper dưới dropzone |
| Video | `mp4` \| `webm` ≤ **50 MB**/file | same |
| Max | **10** file / session | counter `n/10` · disable add khi đủ |
| Reject | vượt MIME/size | **toast** — **cấm** `alert` |
| Persist | file **guid** only | resign mỗi View |

### CSS / layout gates (**KEEP** + media)

| Rule | Gap |
|------|-----|
| SearchInput `route` filter + form | GAP-PO-PAT-01 **CLOSED** |
| Full-page · View `<dl>` | GAP-PO-PAT-03 **CLOSED** |
| Upload section + View gallery | **GAP-DES-PAT-MEDIA-UI** · GAP-PO-PAT-MEDIA-UI **chốt** |
| AppLayout height · Input 6×10 · focus | GAP-P2-LAYOUT/CSS |
| Spacing 4/8/16 · **cấm** `filterMaxWidth` | T-UI-UX-01 |

## 4. Form full-page wire

```
[Header] [← Quay lại]  Title «Phiên tuần tra» · badge Tạo mới|Sửa|Xem|Sao chép
         [📋 Sao chép] [✏ Sửa] khi view — không Lưu/Hủy trên header
[Hint] leave-confirm dirty (kể cả khi đổi mediaIds)
[Body C/E/Copy] 2-col fields · SearchInput tuyến/loại/status/offline · RmmsOrg*
         [Upload section span2] FileMulti dropzone + thumbs · helper MIME · n/10
[Body View] <dl> display + [Media gallery] resign thumbs
[Footer] [Hủy] [Lưu] — ẩn khi view
```

- Copy → POST new · IdCode mới · **mediaIds copy theo SA** (P1: copy guid list OK; SA chốt clone file)
- Dirty leave-confirm khi Hủy / Quay lại
- **Cấm** parent JSON · Leaflet/KPI/check-ins **out of pack** P2

## Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/patrol-list-prototype.html` |
| Zones | **A–D** + form **upload** + View **media-gallery** — skip chrome |
| Form | Full-page · View `<dl>` + gallery · footer-only |
| Lookups | SearchInput road-route / status / type / offline mock |
| Upload mock | dropzone · 2 sample thumbs · counter 2/10 |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/patrol/ui/prototype/patrol-list-prototype.html` |

### List / form wire

```
[A] fa-route + «Tuần đường / tuần kiểm»
[B] SearchText · status · route · icons | [+ Tạo mới]
[C] grid · không cột media
[D] pagination 50|100|200|500
[Form] fields… · [upload] FileMulti · [View gallery]
```

## 5. Map / AI / report (out of pack)

- Kind E+F Leaflet/KPI/check-ins/tracks: **P2**
- Excel / orgUnit list filter / date range: **P2**
- Offline conflict merge: **out** (GAP-F-PAT-01)

## 6. Open → owned (không re-open CLOSED)

| ID | Owner | Note |
|----|-------|------|
| GAP-PO-PAT-FILE-01 / GAP-DA-PAT-FILE-01 | **SA** | mediaIds jsonb vs child · guid[] P1 |
| GAP-DES-PAT-MEDIA-UI | **Design CLOSED** | section form + View gallery (this artifact) |
| GAP-PO-PAT-MIME | **PO CLOSED** · Design UI copy done | limits trên |
| GAP-QA-PAT-CODE-DISABLED | P2 leftover | không block media |
| Prior GAP-PO-PAT-01..07 | **KEEP CLOSED** | |

**Cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** invent file API · **cấm** re-scan demo.

## Confirm

`design_confirm` = **approve** — autoApprove **ON** · agent self-confirm · chain SA **pending** enqueue.

## Handoff → SA

| Field | Value |
|-------|-------|
| Kind / pattern | B · A–D + full-page + **upload zone** |
| Field inventory | §3 · **FileMulti `mediaIds`** · SearchInput route KEEP · RmmsOrg* KEEP |
| Filters | search · status · route → page=1 · **no media filter** |
| Prototype · reviewUrl | § Prototype |
| API prefer | sessions CRUD KEEP · **+** FileService `web-bff/api/v1/files/*` · persist guid[] |
| Lookups | road-routes · org · files resign · **không** users P1 |
| Entity | `PatrolSession` · mediaIds schema **SA chốt** · **cấm** URL string |
| Seed | `QL.1` · IdCode `TD-yyyyMMdd-nnn` |
| Next | SA **pending** (chain · autoApprove ON) |

## DES-GRID / DES-RPT map → Lin\*

| Zone | DES-GRID | Component |
|------|----------|-----------|
| A | DES-GRID-A | `LinPageLayout` header |
| B | DES-GRID-B | `catalogToolbar` |
| C | DES-GRID-C2 | `LinCatalogDataGrid` + resize ON |
| D | DES-GRID-D | `LinCatalogListPagination` |
| Form upload | DES-RPT-UPLOAD | `FileMulti` + FileService BFF |
| View gallery | DES-RPT-GALLERY | resign preview thumbs |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.08.14.5 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.14.5 |
| rulesVersion | 2026.08.14.9 |
| generatedAt | 2026-09-07T00:49:00.000Z |
| versionGate | rechecked |
| version_mismatch_action | recheck_new (STATUS orchestrator `2026.08.09.02` · Design SSOT `2026.08.14.5`) |
| contentHashPriorPo | sha256:task_54394ae1 |
| contentHashPriorDataAnaly | sha256:f2761b7dc5b13b1388b9db493b028a10227efd81de142607827c582bc04450b7 |
| orchestratorSkillVersion | 2026.08.09.02 |
| orchestratorWorkflowVersion | 2026.08.09.02 |

---
<!-- Version meta: skillVersion=2026.08.14.5 · schemaVersion=2 · workflowVersion=2026.08.14.5 · rulesVersion=2026.08.14.9 · versionGate=rechecked -->
