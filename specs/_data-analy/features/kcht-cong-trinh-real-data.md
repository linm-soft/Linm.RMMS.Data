# Real-data bind — kcht-cong-trinh (Công trình KCHT · edit_page PH2–PH4)

| | |
|---|---|
| feature | `kcht-cong-trinh` |
| packKind | `list` |
| changeScope | `edit_page` (PH2–PH4) · PH1 **giữ** |
| status | `done` |
| taskId | `task_399151e1` |
| prefix | **live** `api/v1/kcht-ct` · BFF `web-bff/api/v1/kcht-ct` · PH2–PH4 nested paths = **GAP** đến SA |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Contract` · `ui_repo_confirm` locked |
| mfeStdUrl | `http://localhost:9312/kcht-cong-trinh` |
| map | `none` (list/form) · PH2 LRS child = wave này (SA) · **cấm** invent map canvas |
| contentHash | `sha256:4652f6331035f6521fe50b83cf35ad19d594ca0b4de1fbb40a44f17d52a337dd` |
| headerFingerprint | `sha256:b42f332386243b15594ca97c71e26d37f16a62eb27badbe7df51aabbe4554167` |

## § Delta Current vs New (`edit_page` · `task_399151e1`)

| ID | Current live (Wave 1) | New (PH2–PH4) |
|----|----------------------|---------------|
| BE project | `KchtProjectsController` · `rmms_kcht_projects` · decisions/contracts/attachments | **giữ** |
| MFE | `/kcht-cong-trinh` Kind B + form 4 tab | + `/:id/doan-tuyen` · `/:id/tien-do` · `/:id/giai-ngan` **GAP** |
| Đoạn / BH | `routeSegmentSummary` text · Contract warranty mỏng | `KchtRouteSegment` **GAP** · 6 TT · 90/60/30 |
| Tuần | **none** | `KchtWeeklyProgress` **GAP** · RAG · alerts |
| KH vốn | `KchtProject.CapitalPlanAmount` 1 cột | `KchtCapitalPlan` **GAP** |
| Thanh toán | `ContractPaymentEntity` Period/Amount/PaidAt | `KchtDisbursement` **GAP** · voucher · KBNN file |
| Excel/form nguồn | — | extract `kcht-giai-ngan-03-sheet.md` — **cấm** demo-json · **cấm** Read xlsx lại |
| PH5 | — | `sourceFormReady=no` · park PHỤ LỤC 03 |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/kcht-cong-trinh.md` | — | version mismatch → gate |
| `context` | `docs/data/analyzed/kcht-wave-ph2-ph4.md` | — | wave SSOT |
| `context` | `docs/data/analyzed/kcht-giai-ngan-03-sheet.md` | — | SRC-KCT-GN03 · **cấm** xlsx |
| `context` | `docs/tinh-nang/Cung-cap-thong-tin-phan-mem.md` | — | PH2–PH4 công văn |
| `api` · list **live** | `KchtProjectsController` `GET /kcht-ct/projects` | empty copy | toast · **cấm** alert |
| `api` · detail **live** | `GET /kcht-ct/projects/{id}` | — | 404 → toast · list |
| `api` · CRUD **live** | POST/PUT/DELETE projects + decisions/contracts/attachments | — | validation toast |
| `api` · segments | **GAP** `…/projects/{id}/segments` | grid trống | toast |
| `api` · weekly | **GAP** `…/projects/{id}/weekly-progress` | list trống | toast |
| `api` · capital-plans | **GAP** `…/projects/{id}/capital-plans` | — | toast |
| `api` · disbursements | **GAP** `…/projects/{id}/disbursements` | sổ trống | toast |
| `api` · payment cite (mỏng) | `ContractPaymentEntity` / contract payments | — | **không** đủ PH4 |
| `api` · road-route | `GET /integration/road-routes/search` | no match | toast |
| `api` · org-unit | `GET /integration/org-units/search` | no match | toast |
| `api` · partner-unit | `GET /integration/partner-units/search` | no match | toast |
| `api` · file | FileService `/integrate-file-upload-web` | empty | upload toast |
| `mfe` · list | `KchtProjectListPage.tsx` | — | live |
| `mfe` · form | `KchtProjectFormPage.tsx` | — | 4 tab live · PH2–PH4 **chưa** |
| `mfe` · service | `services/kchtProject/endpoint.ts` `BASE=/kcht-ct/projects` | — | live |
| `derived` | IdCode `CT-yyyyMMdd-nnnn` | — | live IdCode pattern |
| `derived` | warrantyAlert 90/60/30 · RAG · alerts[] | — | job / rules SA |

`sourceCite` = file **có trong repo**. PH2–PH4 API = **GAP** đến SA `Schema_KchtCongTrinhDisburse*`.

## §B — Bind field (HARD · PH1 live · giữ)

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe |
|---------|-------|-------------|-------------|-----|-------------|---------|
| search | Tìm | SearchTextInput | — | `GET …/projects?search=` **live** | — | yes |
| projectType | Loại CT | SearchInput | kcht-project-type | `?projectType=` | `projectType` | yes |
| roadRouteCode | Quốc lộ | SearchInput | road-route | `?roadRouteCode=` | `roadRouteCode` | yes |
| provinceCode | Tỉnh | SearchInput | province | `?provinceCode=` | `provinceCode` | yes · UNCLEAR master |
| orgUnitCode | ĐV QL | SearchInput | org-unit | `?orgUnitCode=` | `orgUnitCode` | yes |
| bqlOrgUnitCode | Ban QLDA | SearchInput | org-unit | `?bqlOrgUnitCode=` | `bqlOrgUnitCode` | yes |
| ownerUserId | Người PT | SearchInput | users | `?ownerUserId=` | `ownerUserId` | partial P2 |
| contractorCode | Nhà thầu | SearchInput | partner-unit | `?contractorCode=` | filter | yes |
| status | Trạng thái | SearchInput | kcht-project-status | `?status=` | `status` | yes |
| code | Mã CT | Text readonly | — | detail `code` | auto | yes |
| name | Tên CT | Text | — | detail | `name` | yes |
| routeSegmentSummary | Đoạn (text) | Text | — | detail | `routeSegmentSummary` | yes · **PH2 supersede** |
| capitalPlanAmount | KH vốn 1 số | Money | — | detail | `capitalPlanAmount` | yes · **PH4 supersede** |
| decisions[] | Quyết định | inline grid | kcht-decision-kind | nested | nested | yes |
| contracts[] | Hợp đồng | child list | — | `…/contracts` | link/unlink | yes |
| attachments[] | Hồ sơ | file list | — | `…/attachments` | stub+presign | partial · harden PH4 |

**Prefix map PH1 (live):**

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/kcht-ct/projects` |
| Detail | `GET /web-bff/api/v1/kcht-ct/projects/{id}` |
| Create | `POST /web-bff/api/v1/kcht-ct/projects` |
| Update | `PUT /web-bff/api/v1/kcht-ct/projects/{id}` |
| Delete | `DELETE /web-bff/api/v1/kcht-ct/projects/{id}` |
| Decisions | nested trong body PUT/POST (Wave 1) |
| Contract links | `GET/POST/DELETE …/projects/{id}/contracts` |
| Attachments | `GET/POST/DELETE …/projects/{id}/attachments` |

FE cite: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Contract/src/services/kchtProject/endpoint.ts`.

## §B2 — Bind PH2 đoạn tuyến (HARD · **GAP**)

| uiField | controlHint | GET (đề xuất SA) | write | sameMfe |
|---------|-------------|------------------|-------|---------|
| segments[].roadRouteCode | SearchInput | `GET …/segments` **GAP** | `roadRouteCode` | **gap** |
| segments[].kmFrom · kmTo | Number | same | kmFrom/kmTo | **gap** |
| segments[].lengthM | Number | same | `lengthM` | **gap** |
| segments[].workItem | Text | same | `workItem` | **gap** |
| segments[].contractId | SearchInput | child contracts **live** | `contractId` | cite picker |
| segments[].contractorCode | SearchInput | partner-unit **live** | `contractorCode` | cite |
| segments[].startAt · finishAt · acceptAt · handoverAt | Date | same | UTC | **gap** |
| segments[].warrantyMonths · warrantyStart · warrantyEnd | Integer/Date | same | | **gap** |
| segments[].status | SearchInput | same | `status` | **gap** |
| warrantyAlert | derived | job | — | **gap** |

**Entity đề xuất:** `KchtRouteSegment` NEW **hoặc** widen `ContractRoute` — SA. Table đề xuất `rmms_kcht_route_segments`.

## §B3 — Bind PH3 tiến độ tuần (HARD · **GAP**)

| uiField | controlHint | GET (đề xuất SA) | write | sameMfe |
|---------|-------------|------------------|-------|---------|
| weekOf | Date/week | `GET …/weekly-progress` **GAP** | `weekOf` | **gap** |
| planPctToWeek · actualPctToWeek | Number | same | % | **gap** |
| prevWeekPct · weekDeltaPct | Number | derived | | **gap** |
| valueCum · valueWeek | Money | same | | **gap** |
| situation · nextWeekWork · issues · solution | Text | same | | **gap** |
| delayCause | SearchInput | same | enum | **gap** |
| rag | SearchInput/derived | same | rule công văn | **gap** |
| alerts[] | derived chips | job + rules | — | **gap** |
| header.* | readonly | project + segments + contracts **live** | — | cite |

**Entity đề xuất:** `KchtWeeklyProgress` · table `rmms_kcht_weekly_progress` · unique (projectId, weekOf, tenant).

## §B4 — Bind PH4 sổ giải ngân (HARD · form nguồn · **GAP**)

| uiField | controlHint | GET (đề xuất SA) | write | sameMfe |
|---------|-------------|------------------|-------|---------|
| yearEstimate · yearEstimateFinal | Money | `GET …/capital-plans?year=` **GAP** | | **gap** |
| savingDeducted · capitalPlan | Money | same | | **gap** |
| lines[].costGroup | SearchInput | `GET …/disbursements` **GAP** | `costGroup` | **gap** |
| lines[].content | Text | same | `content` | **gap** |
| lines[].contractValue | Money | same | optional SCĐK | **gap** |
| lines[].paymentValue | Money | same | `paymentValue` | **gap** |
| lines[].disbursedValue | Money | same | `disbursedValue` | **gap** |
| lines[].outstandingValue | Money | same | computed/nhập | **gap** |
| lines[].partyCode | SearchInput | partner-unit / org-unit **live** | `partyCode` | cite |
| lines[].partyKind | SearchInput | enum | `partyKind` | **gap** |
| lines[].voucherKind · voucherNo · voucherDate | SearchInput+Text+Date | same | | **gap** |
| lines[].attachments | file | FileService | `attachmentId` | **gap** · harden |

**Entity đề xuất:** `KchtCapitalPlan` · `KchtDisbursement` (+ optional FK `ContractPayment`) · Schema `Schema_KchtCongTrinhDisburse`.

**sourceTables PH5 (park):** `rmms_kcht_disbursements` · `rmms_kcht_capital_plans` — **chưa có** · `sourceFormReady=no`.

### Cite Wave 1 (không invent DONE)

| Live | Path |
|------|------|
| API | `…/Domains/Contract/Controllers/KchtProjectsController.cs` |
| Service | `…/Services/KchtProjectsService.cs` |
| BFF | `…/KchtProjectsBffController.cs` |
| Entity | `…/Entities/KchtProjectEntity.cs` `rmms_kcht_projects` |
| Decision | `KchtProjectDecisionEntity` |
| Junction | `KchtProjectContractEntity` |
| Attachment | `KchtProjectAttachmentEntity` |
| Payment mỏng | `ContractPaymentEntity.cs` `rmms_contract_payments` |
| Catalog UI | `CatalogUiSchemaRegistry.KchtProjects` = `kcht-projects` |
| MFE endpoint | `src/services/kchtProject/endpoint.ts` |
| MFE list/form | `KchtProjectListPage.tsx` · `KchtProjectFormPage.tsx` |

**Cấm** invent `api/v1/rmms/kcht/*` · **cấm** embed ERP.* · **cấm** mark PH2–PH4 path là live.

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| kcht-project-type | closed · live FE lookups | CTX §1.1 | hardcode ngoài useFormOptions |
| kcht-project-status | closed · live | SA PH1 | demo status |
| kcht-segment-status | closed **NEW** | công văn 6 TT | — |
| kcht-delay-cause | closed **NEW** | công văn PH3 | — |
| kcht-rag | closed **NEW** | xanh/vàng/đỏ | — |
| kcht-cost-group | closed **NEW** | SRC-KCT-GN03 TT1–8 | — |
| kcht-voucher-kind | closed **NEW** | giay-rut · pg · unc | — |
| kcht-party-kind | closed **NEW** | contractor · khu · bql · cuc | — |
| road-route | `GET /integration/road-routes/search` | live | plain text only |
| org-unit | `GET /integration/org-units/search` | `REG-IV*` | demo local |
| partner-unit | `GET /integration/partner-units/search` | live | demo CONTRACTORS |
| province | **UNCLEAR** | FormsService P1 | invent list |
| users | users API | JWT company | — |

## §D — Map / vẽ

`map: none` — list/form/sổ **không** map canvas. Đoạn tuyến = LRS fields (kmFrom/kmTo) + SearchInput `road-route`, không Kind F.

Handoff HĐ: `/hd-ns/:contractId?from=kcht&projectId={id}` **live**.

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| project.status | `KchtProject.status` **live** | QLBT / Ban QLDA | PUT project | header chip |
| segment.status | `KchtRouteSegment` **GAP** | Ban QLDA | nested segments | PH2 |
| warrantyAlert | derived job | system | job | badge 90/60/30 |
| weekly.rag | rule + user | Ban QLDA / phòng | weekly-progress **GAP** | PH3 |
| weekly.alerts | derived | system | job | chips 3 nhóm |
| capitalPlan | `KchtCapitalPlan` **GAP** | KHTC | capital-plans | sổ header |
| disbursement | `KchtDisbursement` **GAP** | KHTC / Ban | disbursements | sổ dòng |
| kbnCompare | read-model **GAP** | KHTC | import/Excel P1 | grid 3 cột |

## §F — Handoff

| Role | Dùng packet |
|------|-------------|
| PO | AC PH2 đoạn/BH · PH3 tuần+RAG · PH4 sổ SCĐK+SCTX+voucher+file · **cấm** PH5 |
| Design | Kind B sổ/đoạn/tuần · control-map khớp §B2–B4 · **cấm** Slideout hồ sơ CT · reviewUrl |
| SA | Entity segment/weekly/capital/disburse · Schema pair · route nested · DOMAIN-MAP slug · **cấm ERP.*** |
| TL | task pack · route_confirm mở rộng · FileService bind dòng GD |
| Dev | **không** trong `roleOnly=data_analy` |
| QA | queued sau Dev — **cấm** e2e ở role này |

## § Empty / fail

| Case | Behavior |
|------|----------|
| list empty | «Chưa có công trình» · **cấm** fake row |
| detail 404 | toast · `/kcht-cong-trinh` |
| segments empty | empty + CTA thêm đoạn |
| weekly empty | empty + CTA cập nhật tuần |
| sổ empty | empty + CTA thêm giao dịch |
| lookup no match | SearchInput empty · **cấm** free text substitute master |
| 4xx / 5xx | toast · **cấm** `window.alert` · **cấm** silent empty |

## § Cấm

| ❌ | ✅ |
|----|-----|
| Demo-json / GOVOne SSOT | Công văn + CTX + wave SSOT + SRC-KCT-GN03 + live cite |
| Invent PH2–PH4 path as DONE | mark **GAP** đến SA scaffold |
| `api/v1/rmms/*` · ERP.* | `api/v1/kcht-ct` live + nested GAP |
| Slideout form CT | full-page · Kind B child surfaces |
| PH5 / Kind E trước form nguồn | `sourceFormReady=no` |
| Nhồi CT vào contract parent-less | giữ `KchtProject` |
| `window.alert` | `dispatchAppToast` / `useAppToast` |
| Read lại xlsx SRC-KCT-GN03 | dùng extract md |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.08.21.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.21.01 |
| rulesVersion | 2026.08.25.4 |
| generatedAt | 2026-08-29T04:15:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:4652f6331035f6521fe50b83cf35ad19d594ca0b4de1fbb40a44f17d52a337dd |
| headerFingerprint | sha256:b42f332386243b15594ca97c71e26d37f16a62eb27badbe7df51aabbe4554167 |
| taskId | `task_399151e1` |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.08.21.01 schemaVersion=2 workflowVersion=2026.08.21.01 rulesVersion=2026.08.25.4 versionGate=rechecked contentHash=sha256:4652f6331035f6521fe50b83cf35ad19d594ca0b4de1fbb40a44f17d52a337dd headerFingerprint=sha256:b42f332386243b15594ca97c71e26d37f16a62eb27badbe7df51aabbe4554167 taskId=task_399151e1 -->
