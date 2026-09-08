# PO — patrol (Tuần đường / tuần kiểm)

| Field | Value |
|-------|-------|
| feature | `patrol` |
| changeScope | `edit_page` |
| packKind | `list` |
| Feature Kind | **B** — Catalog list A–D + **full-page** form (`PatrolFormPage`) |
| status | `done` |
| requestSource | run packet `task_54394ae1` · `/agent-qldb-workflow` · roleOnly=`po` · `/agent-po` |
| autoApprove | **ON** |
| e2eQa | **ON** (queued `/agent-qa*` only) |
| prior | data-analy `done` · controlHint + real-data · hash `sha256:f2761b7dc5…` · compact `handoff/data_analy-compact.md` · **cấm** re-scan demo |
| updatedAt | `2026-09-06T17:50:00.000Z` |
| taskId | `task_54394ae1` |

## 1. Goal

Enhance trang **Tuần đường / tuần kiểm** (đã ship Kind B): **leftover** `crud_formtype` + **upload ảnh/video** hiện trường trên form. Giữ list A–D · full-page form · route SearchInput / `?route=` / validate ∈ 38 **CLOSED**. Align MFE `Linm.Web.RMMS.Field` `/patrol` · BE `Linm.RMMS.WebService` domain **Patrol** · `api/v1/patrol/sessions` · FileService BFF `web-bff/api/v1/files/*`. **Cấm ERP.*** · **cấm** invent `api/v1/patrol-files` · **cấm** persist full URL · lane **web** only.

Persona: Tuần đường · Hạt trưởng giám sát.

## 2. Current → New (`edit_page` · họp 04/09 W4-1 W4-2)

| Layer | Current (shipped) | New (this pack) |
|-------|-------------------|-----------------|
| Scope | List CRUD sessions · route SearchInput · `?route=` · footer-only · View `<dl>` **CLOSED** | + leftover formType (`code` readOnly P2) · **+ upload media** form |
| Media | Không field media DTO/form | **`mediaIds[]`** `FileMulti` · image+video · FileService guid · resign mỗi xem |
| File API | — | Reuse `/init-bff-file` + `/integrate-file-upload-web` · `web-bff/api/v1/files/*` · **cấm** scaffold / invent file path |
| Form | full-page `PatrolFormPage` · footer Lưu/Hủy | **KEEP** · + upload zone · View gallery từ resign URL |
| List A–D | Kind B live | **KEEP** — không đổi chrome A–D |
| Kind E+F | Map/tracks/KPI | **P2 KEEP** — không block |
| Prior GAP-PO-PAT-01..07 | CLOSED | **KEEP CLOSED** — không reopen |

## 3. DoD (đo được)

### Keep (prior P1 — regression)

1. List load + search work · Zone B search/status/route · Tạo mới trên B · grid A–D · pagination 50/100/200/500.
2. Form full-page C/E/V/Copy · View `<dl>` · footer-only Lưu/Hủy · leave-confirm dirty · `route` SearchInput `road-route` · **cấm** Slideout / free-text tuyến.
3. API `api/v1/patrol/sessions` CRUD + `?route=` · validate Route ∈ 38 · **cấm ERP.***

### New (this pack)

4. Form có zone **Ảnh/video hiện trường** (`mediaIds`) controlHint **`FileMulti`** — Create/Edit/Copy upload được; View hiển thị gallery/preview từ **resign URL** (không Input xám).
5. Persist **chỉ file id (guid)** trên session/DTO — **cấm** lưu full/presigned URL.
6. Upload qua FileService BFF `web-bff/api/v1/files/*` — thiếu package → slash `/init-bff-file` + `/integrate-file-upload-web` · **cấm** `/implement-file-service` · **cấm** copy `FilesController` · **cấm** invent `api/v1/nghiem-thu-files` / `api/v1/patrol-files`.
7. MIME/size DoD (PO chốt): image `jpeg|png|webp` ≤ **10 MB**/file · video `mp4|webm` ≤ **50 MB**/file · max **10** file/session · vượt → toast (cấm alert).
8. Leftover P2: form `code` ưu tiên **`readOnly`** (không xám `disabled`) — GAP-QA-PAT-CODE-DISABLED · **không block** media P0.
9. FE/BE build PASS khi đụng media/API — Dev ghi implement § Build (role này **cấm** yarn build).

## 4. CTX / DEM / DI inventory

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/patrol.md` | feature · hash `f2761b7d…` |
| DEM-01 | `Linm.RMMS.Demo/src/demo/features/patrol-demo.html` | demo entry · **cấm** re-scan this role |
| DI-01 | `specs/_data-analy/features/patrol-control-hint.md` | controlHint |
| DI-02 | `specs/_data-analy/features/patrol-real-data.md` | real-data §A+§B |
| DI-03 | `specs/_data-analy/shared-catalogs/road-route-seed.json` | 38 tuyến |
| MFE | `Linm.Web.RMMS.Field` `/patrol` · form full-page | UI |
| BE | `Linm.RMMS.WebService` · DOMAIN-MAP Patrol · FileService Bff | API |
| BFF files | `web-bff/api/v1/files/*` | upload/resign |

## 5. controlHint (PO chốt — Design map UI · SA map API)

### List filters (Zone B) — KEEP

| Field key | Label | controlHint | catalogKind |
|-----------|-------|-------------|-------------|
| search | Tìm kiếm | `SearchTextInput` | text |
| status | Trạng thái | `SearchInput` | enum VN 4 |
| route | Tuyến đường | `SearchInput` | **road-route** (38) |
| userName | Nhân viên | `Text` | P1 |
| orgUnit / fromDate / toDate | … | — | **P2** |

### Form fields

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã phiên tuần | `Text` readOnly IdCode | auto | leftover P2 vs disabled |
| userName | Nhân viên | `Text` | * | P1 |
| route | Tuyến đường | `SearchInput` `road-route` | * | KEEP |
| zoneOrgCode / vpOrgCode / assigneeCode | Org | `SearchInput` | | RmmsOrgFormFields KEEP |
| routeCode | Mã tuyến (org) | derived / SearchInput | | sync `route` |
| patrolType | Loại tuần | `SearchInput` | * | |
| plannedDate | Ngày kế hoạch | `Date` | * | |
| startedAt | Bắt đầu thực tế | `Date` | | |
| checkInCount | Số điểm check-in | `Text` (number) | * | |
| coveragePercent | Coverage % | `Text` (number) | | |
| status | Trạng thái | `SearchInput` | * | |
| offlineQueued | Hàng đợi offline | `SearchInput` | | |
| note | Ghi chú | `Text` | | |
| **mediaIds** | **Ảnh / video hiện trường** | **`FileMulti`** | | **NEW** · guid[] · image+video · FileService |
| updatedAt | Cập nhật | `Date` | | View readonly |

## 6. Open questions — PO chốt

| ID | Question | Decision (PO) |
|----|----------|----------------|
| GAP-PO-PAT-01..07 | Prior route/filter/Slideout/user/map/ERP | **KEEP CLOSED** |
| GAP-PO-PAT-MEDIA-01 · GAP-DA-PAT-MEDIA-01 | Form/DTO thiếu media | **IN P0:** `mediaIds[]` FileMulti · FileService · T-FILE-01 |
| GAP-PO-PAT-FILE-01 · GAP-DA-PAT-FILE-01 | jsonb vs child table | **P1 preference:** guid[] trên `PatrolSession` (jsonb/array) · **cấm** URL string · SA chốt schema exact · child table = P2 nếu audit |
| GAP-PO-PAT-MEDIA-UI · GAP-DA-PAT-MEDIA-UI | Zone layout | **PO require:** section upload trên form C/E/Copy · View = gallery resign · Design chốt visual/prototype |
| GAP-PO-PAT-MIME | MIME/size | image jpeg/png/webp ≤10MB · video mp4/webm ≤50MB · max 10 file/session · Design refine UI copy |
| GAP-QA-PAT-CODE-DISABLED | code disabled xám | **P2 leftover** `readOnly` — không block media |
| GAP-DA-PAT-MAP / GAP-F-PAT-01 | Kind E+F / offline merge | **P2 / out of pack** |

## 7. Grid AC (REQUIRED · list)

| ID | AC |
|----|-----|
| AC-G-01 | Zones **A Header · B Toolbar · C Grid · D Pagination** |
| AC-G-02 | Search + status/route apply → page=1 |
| AC-G-03 | Row menu Xem / Sửa / Copy / Xóa / Lịch sử |
| AC-G-04 | `LinCatalogDataGrid` + kéo cột default ON |
| AC-G-05 | Footer `LinCatalogListPagination` 50/100/200/500 |
| AC-G-06 | 1× `LinPageLayout` — **cấm** nested CatalogListShell |
| AC-G-07 | Flex + skeleton load — **cấm** blank body |
| AC-G-08 | Media **không** cột grid P1 (chỉ form) — optional thumb P2 |

## 8. Screens / Leave

| Screen | Pattern | Leave |
|--------|---------|-------|
| List `/patrol` | Kind B A–D | n/a |
| Form `/patrol/new` · `/patrol/:id` · copy | full-page · footer Lưu/Hủy · **+ upload zone** | dirty leave-confirm trước navigate |
| View | `<dl>` + media gallery resign | no dirty |

## 9. Out of scope (this pack)

- Kind E report / Kind F Leaflet / KPI / check-ins/tracks/coverage/kpi API
- Excel export · master users SearchInput list filter
- Invent route ngoài 38 · ERP.* · parent JSON · mobile lane
- Persist full URL · invent dedicated patrol-files API
- Reopen GAP-PO-PAT-01..07 CLOSED

## 10. Handoff → Design

| Field | Value |
|-------|-------|
| Kind | B list A–D + full-page form **+ upload zone** |
| Prototype | keep reviewUrl · extend upload section · skip chrome demo |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/patrol/ui/prototype/patrol-list-prototype.html` |
| autoApprove | **ON** → chain SA (không chờ board) |
| controlHint | §5 · **FileMulti** `mediaIds` · KEEP route SearchInput |
| BE | `api/v1/patrol/sessions` + FileService `web-bff/api/v1/files/*` |
| Next | design → sa → team-lead → dev → qa (e2e queued) → review = **pending** |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.14.5 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.14.5 |
| rulesVersion | 2026.08.14.9 |
| generatedAt | 2026-09-06T17:50:00.000Z |
| versionGate | rechecked |
| version_mismatch_action | recheck_new |
| contentHashPriorDataAnaly | sha256:f2761b7dc5b13b1388b9db493b028a10227efd81de142607827c582bc04450b7 |
| orchestratorSkillVersion | 2026.08.09.02 |
| orchestratorWorkflowVersion | 2026.08.09.02 |
| priorPoTaskId | task_af761fcc |

---
<!-- Version meta: skillVersion=2026.08.14.5 · schemaVersion=2 · workflowVersion=2026.08.14.5 · rulesVersion=2026.08.14.9 · versionGate=rechecked -->
