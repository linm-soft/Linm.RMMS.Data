# Real-data bind — kcht-cong-trinh (Công trình KCHT · PH1 wave)

| | |
|---|---|
| feature | `kcht-cong-trinh` |
| packKind | `list` |
| changeScope | `new_page` |
| taskId | `task_e3745f39` |
| prefix | **đề xuất** `api/v1/kcht-ct` (SA confirm) · BFF `web-bff/api/v1/kcht-ct` · **cấm** invent runtime path đã live |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Contract` |
| map | `none` (PH1) · PH2 route segment map **DEFER** |

## § Delta Current vs New (`new_page` · `task_e3745f39`)

| ID | Current | New |
|----|---------|-----|
| GAP-DA-REAL | Stub draft only | §A–§F cite Contract MFE + BE integration + công văn field map |
| BE project API | **none** | `KchtProject` CRUD + decisions + contract links — SA scaffold |
| MFE route | `/hd-ns` contract only | `/kcht-cong-trinh` list + form 4 tab |
| Child HĐ | `GET /contract/contracts` flat | junction `projectId` + reuse `ContractEntity` |
| Lookups | contract demo seed | Integration `road-route` · `org-unit` · `partner-unit` |
| File tab | **none** | FileService presign bind `attachmentId` |
| Demo | **N/A** synthetic | **cấm** demo-json SSOT (**GAP-DA-REAL-03**) |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/kcht-cong-trinh.md` | — | version mismatch → gate |
| `context` | `D:/AI-QLBD/Linm.RMMS.Data/docs/tinh-nang/Cung-cap-thong-tin-phan-mem.md` | — | công văn UTF-8 |
| `api` · list (target) | **GAP** — SA scaffold `KchtProjectsController` | list trống | 4xx → toast · **cấm** `window.alert` |
| `api` · list (cite pattern) | `D:/AI-QLBD/Linm.RMMS.WebService/api/src/RMMS.Service.Api/Domains/Contract/Controllers/ContractsController.cs` `GET /contracts` | empty copy | toast |
| `api` · detail (target) | **GAP** `GET /kcht-ct/projects/{id}` | — | 404 → toast · redirect list |
| `api` · CRUD (target) | **GAP** POST/PUT/DELETE projects | — | validation toast |
| `api` · decisions (target) | **GAP** nested `…/decisions` | grid trống | toast |
| `api` · contracts link (target) | **GAP** `…/contracts` + existing `ContractsController` | no child | toast |
| `api` · contract cite | `ContractsController` · `ContractDtos.cs` | — | reuse DTO widen |
| `api` · road-route | `RoadRoutesController` `GET /integration/road-routes/search` | no match | toast |
| `api` · org-unit | `OrgUnitsController` `GET /integration/org-units/search` | no match | toast |
| `api` · partner-unit | `PartnerUnitsController` `GET /integration/partner-units/search` | no match | toast |
| `api` · file | FileService `/integrate-file-upload-web` presign | tab empty | upload error toast |
| `mfe` · list pattern | `ContractListPage.tsx` · `contractService.getList` | — | cite only until kcht service |
| `mfe` · form pattern | `ContractFormPage.tsx` | — | shell cite · add tabs |
| `mfe` · integration lookup | `inventory/lookups.ts` `orgLookupConfig()` | — | wire for kcht |
| `derived` | IdCode `CT-yyyyMMdd-nnnn` | — | `IIdCodeService` SA |

`sourceCite` = file **có trong repo**. Inventory = Contract domain live + integration masters READY; **KchtProject** = net-new PH1.

## §B — Bind field (HARD · PH1)

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe | sameMobile |
|---------|-------|-------------|-------------|-----|-------------|---------|------------|
| search | Tìm | SearchTextInput | — | `GET …/projects?search=` **GAP** | — | **gap** | n/a |
| projectType | Loại CT | SearchInput | kcht-project-type | `?projectType=` | `projectType` | **gap** | n/a |
| roadRouteCode | Quốc lộ | SearchInput | road-route | `?roadRouteCode=` | `roadRouteCode` | **gap** | n/a |
| provinceCode | Tỉnh | SearchInput | province | `?provinceCode=` | `provinceCode` | **gap** | n/a |
| orgUnitCode | ĐV QL | SearchInput | org-unit | `?orgUnitCode=` | `orgUnitCode` | **gap** | n/a |
| bqlOrgUnitCode | Ban QLDA | SearchInput | org-unit | `?bqlOrgUnitCode=` | `bqlOrgUnitCode` | **gap** | n/a |
| ownerUserId | Người PT | SearchInput | users | `?ownerUserId=` | `ownerUserId` | **gap** P2 | n/a |
| contractorCode | Nhà thầu | SearchInput | partner-unit | `?contractorCode=` | filter only | **gap** | n/a |
| status | Trạng thái | SearchInput | kcht-project-status | `?status=` | `status` | **gap** | n/a |
| code | Mã CT | Text readonly | — | detail `code` | auto | **gap** | n/a |
| name | Tên CT | Text | — | detail | `name` | **gap** | n/a |
| continuityKind | Mới/CT | SearchInput | kcht-continuity-kind | detail | `continuityKind` | **gap** | n/a |
| planYear | Năm KH | Integer | — | detail | `planYear` | **gap** | n/a |
| routeSegmentSummary | Đoạn tuyến | Text | — | detail | `routeSegmentSummary` | **gap** | n/a |
| lengthM | Chiều dài | Number | — | detail | `lengthM` | **gap** | n/a |
| capitalSourceKind | Nguồn vốn | SearchInput | enum | detail | `capitalSourceKind` | **gap** | n/a |
| capitalPlanAmount | KH vốn | Money | — | detail | `capitalPlanAmount` | **gap** | n/a |
| decisions[] | Quyết định | inline grid | kcht-decision-kind | `GET …/decisions` | nested POST/PUT | **gap** | n/a |
| contracts[] | Hợp đồng | child list | kcht-contract-type | `GET …/contracts` + `GET /contract/contracts/{id}` | link/create | partial cite | n/a |
| attachments[] | Hồ sơ | file list | — | `GET …/attachments` | presign POST | **gap** | n/a |

**Prefix map** (đề xuất SA — **chưa live**):

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/kcht-ct/projects` |
| Detail | `GET /web-bff/api/v1/kcht-ct/projects/{id}` |
| Create | `POST /web-bff/api/v1/kcht-ct/projects` |
| Update | `PUT /web-bff/api/v1/kcht-ct/projects/{id}` |
| Delete | `DELETE /web-bff/api/v1/kcht-ct/projects/{id}` |
| Decisions | `GET/POST/PUT/DELETE …/projects/{id}/decisions` |
| Contract links | `GET/POST/DELETE …/projects/{id}/contracts` |
| Attachments | `GET/POST/DELETE …/projects/{id}/attachments` |

**Contract child cite** (live today):

| Operation | Path |
|-----------|------|
| List HĐ | `GET /web-bff/api/v1/contract/contracts` |
| Detail HĐ | `GET /web-bff/api/v1/contract/contracts/{id}` |
| Create HĐ | `POST /web-bff/api/v1/contract/contracts` |
| Update HĐ | `PUT /web-bff/api/v1/contract/contracts/{id}` |

FE cite: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Contract/src/services/contract/endpoint.ts` (relative `/contract/contracts`).

**Integration lookup cite** (live):

| Catalog | Path |
|---------|------|
| road-route | `GET /web-bff/api/v1/integration/road-routes/search` |
| org-unit | `GET /web-bff/api/v1/integration/org-units/search` |
| partner-unit | `GET /web-bff/api/v1/integration/partner-units/search` |

**Cấm** invent `api/v1/rmms/kcht/*` · **cấm** embed vào ERP.*

**Entity cite (target SA):**

| Entity | Path |
|--------|------|
| KchtProject | **GAP** — propose `D:/AI-QLBD/Linm.RMMS.WebService/api/shared/RMMS.Service.Persistence/Entities/KchtProjectEntity.cs` |
| KchtProjectDecision | **GAP** |
| Contract (widen) | `ContractEntity.cs` — add optional `ProjectId` or junction table |
| Contract payment | `ContractPaymentEntity.cs` — reuse on child HĐ |

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| kcht-project-type | closed enum công văn | CTX §1.1 | invent label VN hardcode |
| kcht-project-status | closed enum đề xuất | SA PH1 | demo status |
| kcht-continuity-kind | closed | `moi` · `chuyen-tiep` | — |
| kcht-decision-kind | closed | chủ trương · phê duyệt · điều chỉnh | — |
| kcht-contract-type | closed | TVTK · TVGS · XL · QLDA · khác | nhầm `contract.type` bảo trì |
| road-route | `GET /integration/road-routes/search` | `RoadRouteEntity` | plain text only |
| org-unit | `GET /integration/org-units/search` | `org-unit-seed.json` `REG-IV*` | demo `ORG_UNITS` local |
| partner-unit | `GET /integration/partner-units/search` | `PartnerUnitEntity` | demo `CONTRACTORS` |
| province | **UNCLEAR** | FormsService P1 | invent province list |
| users | users API | JWT `company_id` | — |

## §D — Map / vẽ

`map: none` — PH1 list/form **không** map canvas. PH2 đoạn tuyến LRS = separate wave.

Handoff deep-link: `/hd-ns/:contractId?from=kcht&projectId={id}` read-only when opening child HĐ.

## §E — Progress / vòng đời (PH1 scope)

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| project.status | `KchtProject.status` **GAP** | phòng chuyên môn · Ban QLDA | PUT project | header chip |
| decision rows | child table | phòng KHTC/QLBT | nested CRUD | tab Quyết định |
| contract.status | `ContractEntity.Status` | reuse contract lifecycle | `PUT /contract/contracts/{id}` | tab Hợp đồng |
| attachment | FileService metadata | uploader RBAC | presign + bind | tab Hồ sơ |

PH3 RAG · PH2 warranty 6-state · PH4 disbursement — **DEFER** waves 2–4.

## §F — Handoff

| Role | Dùng packet |
|------|-------------|
| PO | DoD wave 1 PH1 · AC filter công văn · 1 CT : n HĐ · **cấm** BC trước form nguồn |
| Design | control-map khớp §B · Kind B + full-page 4 tab · **cấm** Slideout · reviewUrl |
| SA | Entity `KchtProject*` · route `api/v1/kcht-ct` · widen Contract FK · **cấm ERP.*** |
| TL | `ui_repo_confirm` · task pack list+form · perm 5 nhóm công văn |
| Dev | scaffold MFE route + service · **không** trong `roleOnly=data_analy` |
| QA | queued `/agent-qa*` — CRUD PH1 · no alert · E2E `mfeStdUrl` |

## § Empty / fail

| Case | Behavior |
|------|----------|
| list empty | empty copy «Chưa có công trình» · **cấm** fake row |
| detail 404 | toast · navigate `/kcht-cong-trinh` |
| decisions empty | tab grid empty state |
| contracts empty | «Chưa liên kết hợp đồng» + CTA thêm |
| attachments empty | FileService empty · CTA upload |
| lookup no match | SearchInput empty · **cấm** free text substitute master |
| 4xx validation | toast business message |
| 5xx list | toast error · **cấm** silent empty |

## § Cấm

| ❌ | ✅ |
|----|-----|
| Demo-json / GOVOne làm SSOT | Công văn + CTX + live Contract/integration cite |
| Nhồi CT vào `contract` without parent | `KchtProject` entity NEW |
| `api/v1/rmms/*` · ERP.* | `api/v1/kcht-ct` SA confirm |
| Slideout form CT | full-page 4 tab |
| PH2–PH5 API trong wave 1 | DEFER per PLAN waves |
| `window.alert` | `useAppToast` / `useAlert` |
| Invent live kcht path as DONE | mark **GAP** until SA scaffold |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.08.21.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.21.01 |
| rulesVersion | 2026.08.25.4 |
| generatedAt | 2026-08-26T23:50:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:77c91b35d170a15297c00fd9219f11fbe1f9e51bcab589c0c9b1d7283c702bbe |
| taskId | `task_e3745f39` |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.08.21.01 schemaVersion=2 workflowVersion=2026.08.21.01 rulesVersion=2026.08.25.4 versionGate=rechecked contentHash=sha256:77c91b35d170a15297c00fd9219f11fbe1f9e51bcab589c0c9b1d7283c702bbe taskId=task_e3745f39 -->
