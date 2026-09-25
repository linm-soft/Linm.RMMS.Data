# SA — Solution — nghiem-thu-detail (Chi tiết / Sửa nghiệm thu · edit_page)

| Field | Value |
|-------|-------|
| feature | `nghiem-thu-detail` |
| title | [Mobile] [Công tác nghiệm thu] -> Chi tiết nghiệm thu |
| this role | `sa` · `/agent-sa-mobile` |
| status | `confirmed` |
| solution_confirm | **approve** (`autoApprove=ON` · `task_1f6caf97`) |
| changeScope | `edit_page` |
| packKind | **`sheet`** (PO + Design confirm) |
| stack | `native_dual` |
| Feature Kind | **sheet→screen** · `DES-MOB-NGHIEM-THU-DETAIL` · `#sc-nghiem-thu-detail` · View + Edit cùng slug · **cấm** Kind A–G web / Grid / Report / invent tab / Full list·create trên slug |
| thisAction | **Xem / Sửa** phiếu NT only · entry list row · **cấm** gộp list/create (`GAP-MOB-ACT-02`) |
| domain | **Patrol** · `NghiemThuController` live · FileService `files/*` · **cấm** invent `api/v1/nghiem-thu-detail` · **cấm** invent `files-nt` |
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` |
| prior · design | **confirmed** · `handoff/design-compact.md` · `task_69705146` · design_confirm approve |
| prior · po | **confirmed** · `handoff/po-compact.md` · `task_64a693da` |
| prior · data_analy | **confirmed** · `_data-analy/nghiem-thu-detail-*.md` · contentHash `sha256:250aebcbfb9a445c517a0c40f399fee82a5a00d524499e7310fd7feac0fb5380` · bffContentHash `sha256:nghiem-thu-detail-mobile-bff-20260919` |
| autoApprove | **ON** |
| e2eQa | ON khi QA · **cấm** `yarn start:std` / `mfeStdUrl` / e2e / Step 4b ở role SA |
| versionGate | `ok` |
| taskId | `task_1f6caf97` |
| confirmedBy | agent autoApprove · `task_1f6caf97` |
| updatedAt | `2026-09-19T20:10:00.000Z` |

**Cấm:** invent `api/v1/nghiem-thu-detail` · invent `files-nt` · clone controller trên Mobile.Bff · app `:5101` · ERP.* · `mfeStdUrl` · system alert · fake GPS / fake NT-* · enqueue Lưu/files/scores · fork DTO · Write MFE/native ở SA · Step 4b / migration / e2e ở role này · `localhost` / IP LAN trong solution runtime · persist presigned URL · parent `*Json` scores.

Standards: api-endpoint · bff-api-structure · company-field · no-parent-json-field · sa-implement-gates · ios networking · android api-client · offline-sync · PrivacyInfo / Play · mobile-bff-file · typography-web-mobile (cấm invent font) · tab-index-analy-review (`tabs: none`).

---

## § Delta (`edit_page` · `task_1f6caf97`)

| Gap | Analy / Design | SA chốt |
|-----|----------------|---------|
| GAP-MOB-NT-BIND-01 | Mở = GET by id | Wire `GET …/patrol/nghiem-thu/{id}` · id từ list row · **cấm** Code toast làm id |
| GAP-MOB-NT-LABEL-01 | LOOKUP_STATIC MAU-10 | Wire `GET …/init-data` · display `TemplateLabel` · **cấm** «Mẫu nghiệm thu NN» · **cấm** hardcode 100+ criteria |
| GAP-MOB-NT-SAVE-01 | Lưu = PUT cùng slug | Wire `PUT …/patrol/nghiem-thu/{id}` · `UpdateNghiemThuRequest` · toast «Đã lưu · {Code}» |
| GAP-MOB-NT-MEDIA-01 | FileService max 10 | Upload `files/*` → persist guid only trong `MediaIds` · resign GET · **cấm** URL |
| GAP-MOB-NT-DETAIL-01 | Design gen screen | Dual proto confirmed · SA không đổi control |
| GAP-MOB-ACT-07 | cấm enqueue Lưu/files/scores | Online-only submit · toast fail · **cấm** fake 200 |
| DELETE | live web | P1 mobile **OUT** |
| Step 4b / MIG | `20260919180443_Schema_NghiemThuMau` live | **SKIP** · entity/migration = none |

---

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` RMMS only |
| Domain | `NghiemThuController` `[Route("api/v1/patrol/nghiem-thu")]` · `GetById` · `Update` · `GetInitData` **live** |
| File | FileService via Mobile.Bff · `files/*` · proxy **không** forward `files` ApiBase · **cấm** invent `files-nt` |
| BFF mobile | `MobileApiProxyController` catch-all → `ApiBase` · **cấm** dedicated NghiemThu detail controller |
| App | iOS + Android · base `{BffBase}/mobile-bff/api/v1` · **cấm** URLSession/OkHttp trong View |
| Init | `GET patrol/nghiem-thu/init-data` → TemplateTypes (+ criteria) · ResultCodes · Statuses |
| Open | `GET patrol/nghiem-thu/{id}` → `NghiemThuDto` + `Scores` |
| GPS | Device CL / Fused · deny → `DES-MOB-GPS-DENY` · **cấm** fake · **không** API GPS |
| Camera / media | Device capture → FileService → `MediaIds` guid[] max 10 |
| Save | `PUT patrol/nghiem-thu/{id}` · `UpdateNghiemThuRequest` · **cấm** enqueue |
| Persist BE mới | **none** — `NghiemThuEntity` / `rmms_nghiem_thu` · child `rmms_nghiem_thu_score` · `rmms_nghiem_thu_media` live |
| Sibling | parent `#sc-nghiem-thu` · sibling `#sc-nghiem-thu-create` navigate only · **cấm** re-own |
| Out of pack | list GET · create POST · DELETE · web-bff · invent tab |

### SSOT anti-duplicate

| | Choice |
|--|--------|
| DTO | **Giữ** `NghiemThuDto` · `UpdateNghiemThuRequest` · `NghiemThuScoreDto` / `NghiemThuScoreInput` · `NghiemThuInitDataDto` · **cấm** fork mobile DTO |
| Path | **Giữ** `api/v1/patrol/nghiem-thu/{id}` · app prefix `mobile-bff/api/v1` |
| Controller | Domain only · BFF catch-all · **cấm** Mobile NghiemThuController |
| Catalog | `NghiemThuCatalog` server · init-data `{ value, label }` · **cấm** FE-only enum |

### Route decision

| | Choice |
|--|--------|
| Slug | `nghiem-thu-detail` → **sheet→screen** · owner `DES-MOB-NGHIEM-THU-DETAIL` |
| App prefix | `mobile-bff/api/v1` |
| Open | `GET patrol/nghiem-thu/{id}` — **live** |
| Init | `GET patrol/nghiem-thu/init-data` — **live** |
| Write | `PUT patrol/nghiem-thu/{id}` — **live** · cùng slug |
| Files | `POST/PUT/commit/GET object files/*` · preview JWT optional · persist guid only |
| Downstream | `NghiemThuController` + FileService · **không** invent path |
| Step 4b | **SKIP** — schema live · **cấm** SA chạy migration |
| Rationale | sameMobile=yes · reuse Web live API · Mobile.Bff catch-all · offline Lưu/files/scores **cấm** |

---

## Form data analysis (REQUIRED)

| Screen / FormMode | Fields (UI) | Source type | Entity | data-import / mock |
|-------------------|-------------|-------------|---------|-------------------|
| View · `#sc-nghiem-thu-detail` | title · templateRow · resultRow · resultNote · scoreList · route/km/field · status · workTime · note · attachRow · navClose · navEdit | transaction + catalog + files + derived | `NghiemThuEntity` · score child · media child | **none** · **cấm** demo-json SSOT |
| Edit · cùng slug | same + navSave · navCancel · GPS chốt fieldRow | transaction + catalog + geo + files + derived | same | **none** |

### controlHint → API shape

| controlHint (Design) | SA |
|----------------------|-----|
| Select LOOKUP_STATIC (Mẫu / Kết quả / Trạng thái) | **REQUIRED** `GET …/init-data` → `{ value, label }[]` · **cấm** FE-only enum / «Mẫu nghiệm thu NN» |
| Checklist (Tiêu chí) | criteria từ `TemplateTypes[].criteria` · write `Scores[]` child · Verdict `pass`/`fail`/`n_a` · display n_a = «Không áp dụng» |
| Text / DateTime | scalars `ResultNote` · `Note` · `WorkStartedAt` · `WorkEndedAt` · `InspectedAt` · **cấm** invent lookup |
| ListRow+GPS (Tuyến · Km · Hiện trường) | GET `Route` · `KmFrom`/`KmTo` · `FieldInfo` · `ZoneOrgCode?` · Edit GPS device · **không** API GPS |
| PhotoRow/files | `files/*` → `MediaIds` guid[] max 10 · **cấm** URL |
| TextButton Lưu | `PUT …/patrol/nghiem-thu/{id}` cùng slug |
| TextButton Sửa / Hủy / Đóng | local FormMode + leave-dirty · **không** API |

---

## API catalog

Base app: `mobile-bff/api/v1` · downstream: `api/v1/`

### API-01: GET /api/v1/patrol/nghiem-thu/init-data

| | |
|--|--|
| Purpose | Lookup mẫu (kèm criteria) · ResultCodes · Statuses |
| Permission | `patrol.nghiem-thu.read` (controller stub · JWT) |
| Tenant | X-Company-Id · companyCode |
| Request | (none · headers only) |
| Response | `ApiResponse<NghiemThuInitDataDto>` · `TemplateTypes[]` `{ value, label, criteria[] }` · `ResultCodes[]` · `Statuses[]` |
| Errors | 401 · 403 · toast fail · criteria rỗng → ẩn checklist · **cấm** hardcode Phụ lục |
| Form surfaces | View + Edit · `#sheet-mau` · `#sheet-result` · `#sheet-status` · scoreList |
| Field map | templateRow → TemplateTypes · resultRow → ResultCodes · statusRow → Statuses · scoreList codes → criteria |
| **gates.tz** | n/a |
| **gates.xco** | n/a (catalog · tenant header) |
| **gates.shared** | inherit tenant_keep · catalog C# không phải shared table |
| Context docs | `docs/context/features/nghiem-thu-detail.md` §3 |
| Demo HTML | `ui/prototype/{ios,android}/index.html` · `#sc-nghiem-thu-detail` · zone ids only |
| Demo JSON | **cấm** ship |
| data-import | n/a (không import Excel) |
| Sample | `mau-01`…`mau-10` + Label MAU-10 từ BE · ResultCodes `pass`/`fail`/`deduct` |
| Migration | **none** |

### API-02: GET /api/v1/patrol/nghiem-thu/{id}

| | |
|--|--|
| Purpose | Mở chi tiết phiếu · id Guid từ list row |
| Permission | `patrol.nghiem-thu.read` |
| Tenant | X-Company-Id · companyCode |
| Request | path `{id:guid}` |
| Response | `ApiResponse<NghiemThuDto>` · `Scores` (detail only) · `MediaIds` · `TemplateLabel` (not stored) · `Code` |
| Errors | 404 → toast «không tồn tại» · back list · 403 `NghiemThuForbiddenException` · 401 · **cấm** fake NT-* · **cấm** alert |
| Form surfaces | View + Edit open |
| Field map | see § Field map |
| **gates.tz** | **yes** — `InspectedAt` · `WorkStartedAt` · `WorkEndedAt` display local |
| **gates.xco** | **yes** — GET/{id} · 403 cross-tenant |
| **gates.shared** | tenant_keep |
| Context docs | same §3 |
| Demo HTML | zone `#sc-nghiem-thu-detail` · title NT-* |
| Demo JSON | **cấm** |
| data-import | n/a |
| Sample | shape only: `Code` NT-* · `TemplateType=mau-02` · `TemplateLabel` từ init (proto copy · **không** seed) |
| Migration | **none** |

### API-03: PUT /api/v1/patrol/nghiem-thu/{id}

| | |
|--|--|
| Purpose | Lưu sửa cùng slug |
| Permission | `patrol.nghiem-thu.write` |
| Tenant | X-Company-Id · companyCode |
| Request | path `{id}` · body `UpdateNghiemThuRequest` — see § Body map |
| Response | `ApiResponse<NghiemThuDto>` · `Code` |
| Errors | 422 validation (TemplateType · ResultCode khi done · CriterionCode ∉ catalog) · 404 · 401/403 · network toast · **cấm** alert · **cấm** fake 200 |
| Form surfaces | Edit · navSave |
| Field map | see § Body map |
| **gates.tz** | **yes** — `InspectedAt` · `WorkStartedAt` · `WorkEndedAt` UTC store |
| **gates.xco** | n/a write same-tenant |
| **gates.shared** | tenant_keep |
| Context docs | same |
| Demo HTML | zone `navSave` |
| Demo JSON | **cấm** |
| data-import | n/a |
| Sample | Status + TemplateType + Route + FieldInfo + AssigneeCode + InspectedAt + Scores[] + MediaIds[] |
| Migration | **none** |

### API-04: POST/PUT/commit/GET object · files/*

| | |
|--|--|
| Purpose | Upload / resign gallery · guid only |
| Permission | FileService JWT |
| Tenant | company headers |
| Request | init metadata · object bytes · commit · GET object để preview |
| Response | file id (guid) · object bytes (không persist URL) |
| Errors | toast upload fail · **cấm** persist presigned URL |
| Form surfaces | attachRow · PhotoRow |
| Field map | file id → `MediaIds[]` → `rmms_nghiem_thu_media.FileId` |
| **gates.tz** | n/a |
| **gates.xco** | n/a |
| **gates.shared** | n/a |
| Context / Demo | attachRow zone |
| data-import | n/a |
| Migration | **none** |

### Field map — GET `NghiemThuDto` (live · cấm fork)

| uiField | dtoField | dbColumn |
|---------|----------|----------|
| title | `Code` (read) · path `{id}` | `rmms_nghiem_thu.Code` · `Id` |
| templateRow | `TemplateType` · display `TemplateLabel` | `TemplateType` · label **không** cột |
| resultRow | `ResultCode` | `ResultCode` |
| resultNote | `ResultNote` | `ResultNote` |
| scoreList | `Scores[]` `{CriterionCode, Verdict, Note, SortOrder}` | `rmms_nghiem_thu_score` same columns · FK `NghiemThuId` |
| routeRow | `Route` | `Route` |
| kmRow | `KmFrom` · `KmTo` | `KmFrom` · `KmTo` decimal(18,3) |
| fieldRow | `FieldInfo` · `ZoneOrgCode?` | `FieldInfo` · `ZoneOrgCode` |
| statusRow | `Status` | `Status` |
| workTime | `WorkStartedAt?` · `WorkEndedAt?` | same |
| note | `Note?` | `Note` |
| attachRow | `MediaIds` | `rmms_nghiem_thu_media.FileId` · `SortOrder` |
| assignee | `AssigneeCode` | `AssigneeCode` |
| inspectedAt | `InspectedAt` | `InspectedAt` |
| (opt) | `VpOrgCode?` | `VpOrgCode` |

### Body map — `UpdateNghiemThuRequest` (live · cấm fork)

| uiField / derived | dtoField | Required | Notes |
|-------------------|----------|----------|-------|
| templateRow | `TemplateType` | **yes** | `mau-01`…`mau-10` · không gửi `TemplateLabel` |
| resultRow | `ResultCode` | **yes** khi `Status=done` · null OK draft | `pass`/`fail`/`deduct` |
| resultNote | `ResultNote` | no | |
| scoreList | `Scores` | no | non-null = replace-set · null = giữ cũ · Verdict `pass`/`fail`/`n_a` · code ∈ catalog đúng mẫu |
| routeRow / kmRow / fieldRow | `Route` · `KmFrom?`/`KmTo?` · `FieldInfo` · `ZoneOrgCode?` | Route · FieldInfo **yes** | GPS deny chặn save Edit |
| statusRow | `Status` | **yes** | `draft`/`in_progress`/`done`/`cancelled` · done ⇒ ResultCode |
| workTime | `WorkStartedAt?` · `WorkEndedAt?` | no | UTC |
| note | `Note?` | no | |
| attachRow | `MediaIds` | no | guid[] max 10 · null/empty clears |
| auth | `AssigneeCode` | **yes** | |
| inspectedAt | `InspectedAt` | **yes** | UTC |
| (opt) | `VpOrgCode?` | no | |

**Validate live:** TemplateType allow-list 10 · ResultCode ∈ pass/fail/deduct khi `done` · Scores.CriterionCode ∈ catalog của đúng TemplateType · `Scores` non-null = replace-set.

### FormMode ↔ API (mandatory)

| FormMode | API |
|----------|-----|
| View open | API-02 GET/{id} + API-01 init-data + API-04 resign `files/*` |
| Edit save | API-03 PUT/{id} · files đã commit trước PUT |
| Sửa / Hủy / Đóng / leave-dirty | local only · Đóng → `nghiem-thu` |
| GPS deny | local modal · no API |
| List / Create / DELETE | **OUT** — owner `nghiem-thu` / `nghiem-thu-create` · DELETE P1 OUT |

---

## BFF vs API · tenant

| Decision | Value |
|----------|-------|
| BFF | Mobile.Bff catch-all proxy · **giữ** path `patrol/nghiem-thu*` · `files/*` FileService rewrite |
| Web BFF | **OUT** native |
| x-company-id | JWT + header từ session · **cấm** hardcode |
| App base | `{BffBase}/mobile-bff/api/v1` · **cấm** RMMS `:5101` |

---

## Data model / EF

| Entity | Columns (key) | Migration |
|--------|---------------|-----------|
| `NghiemThuEntity` / `rmms_nghiem_thu` | Code · Status · TemplateType · ResultCode · ResultNote · Route · FieldInfo · AssigneeCode · InspectedAt · WorkStartedAt · WorkEndedAt · Zone · Km · Note · soft IsActive | **none** (`Schema_NghiemThuMau` live) |
| `NghiemThuScoreEntity` / `rmms_nghiem_thu_score` | NghiemThuId · CriterionCode · Verdict · Note · SortOrder | **none** |
| `NghiemThuMediaEntity` / `rmms_nghiem_thu_media` | NghiemThuId · FileId · SortOrder | **none** |

### Persist gate (`no-parent-json-field`)

| | |
|--|--|
| Parent JSON string inventory | **none** |
| Child tables | `rmms_nghiem_thu_score` · `rmms_nghiem_thu_media` |
| API shape | scalars on header · `Scores: []` · `MediaIds: []` · **cấm** `*LinesJson` / `*DetailsJson` / URL blob |

---

## 5b. Implement gates (confirm) — REQUIRED

| Gate | Decision | Endpoints / surfaces | Skill | Note |
|------|----------|----------------------|-------|------|
| TZ | **required** | API-02/03 `InspectedAt` · `WorkStartedAt` · `WorkEndedAt` | `/review-timezone-implement` | store UTC · display local · slug này không filter fromDate/toDate (list OUT) |
| XCO | **get_only** | API-02 GET/{id} (403 live) | `/implement-view-cross-company` | PUT same-tenant · không subordinate query |
| SHARE | **tenant_keep** | `NghiemThuEntity` : `TenantEntity` | `/implement-shared-table` | phiếu theo đơn vị · catalog C# không shared table |

`sa_tz_gate=tz_required` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` — **autoApprove ON** → confirmed `2026-09-19T20:10:00.000Z`.

---

## Mobile gaps (SA chốt)

| Gap | Decision |
|-----|----------|
| Offline Lưu / files / scores | **cấm** enqueue (`GAP-MOB-ACT-07`) · require online · toast fail |
| GPS | live device · deny modal `DES-MOB-GPS-DENY` · chặn save Edit nếu chưa chốt · View read-only không gọi GPS |
| Camera upload | FileService lifecycle · max 10 · **cấm** fake 200 · **cấm** persist URL |
| Push `targetUrl` | n/a P1 detail |
| GAP-MOB-BFF-01 / CTX gap | catch-all **đã** cover `patrol/nghiem-thu*` · verify only · **cấm** dedicated controller |
| Store · PrivacyInfo | Location + Photos (camera/library) · Play Data safety same · không signup-delete trên slug này |
| Family / iPad | family `1` nếu listing phone-only · **cấm** claim iPad |
| Runtime URL | **cấm** `localhost` / LAN IP trong solution |

---

## Risks / unknowns

| Item | Status |
|------|--------|
| UNCLEAR | **none** |
| Parent JSON | none |
| Invent path | none — live cite |
| MIG | SKIP |
| Permission attribute | stub TODO trên controller · code đã cite · **cấm** invent code mới |
| Open questions | none |

---

## Confirm

`solution_confirm` = **approve** · autoApprove=ON · `task_1f6caf97` · **cấm** Dev trước confirmed (PASS).

---

## Handoff → Team lead

| Field | Value |
|-------|-------|
| feature / packKind | `nghiem-thu-detail` · **sheet** |
| phase_from / phase_to | sa → team_lead |
| STATUS | solution **confirmed** |
| formPattern | sheet→screen · View + Edit cùng slug |
| FormMode↔API | View → API-02 + API-01 + API-04 · Edit save → API-03 |
| APIs | API-01 init · API-02 GET/{id} · API-03 PUT/{id} · API-04 files/* |
| entity / migration | live · **none** / Step 4b **SKIP** |
| TZ / XCO / SHARE | tz_required · xco_get_only · share_tenant |
| BFF | Mobile.Bff proxy keep · files NuGet |
| controlHint / UNCLEAR | Design inventory · none |
| Screens | `DES-MOB-NGHIEM-THU-DETAIL` · GPS-DENY · LEAVE · `#sheet-mau` · `#sheet-result` · `#sheet-status` |
| reviewUrl | ios/android file:// prototype (Design) |
| peerStdUrl | `http://localhost:9304/nghiem-thu/:id` (web ref only) |
| Open questions | none |
| Next | `/agent-team-lead-mobile` · T-* dual Dev · **cấm** SA Write native |
| e2eQa | queued `/agent-qa*` |

### T-* gợi ý (TL chốt)

| Id | Scope |
|----|-------|
| T-NTD-01 | iOS wire View/Edit sheet · GET + init + GPS + files + PUT |
| T-NTD-02 | Android same §B bind |
| T-NTD-03 | PrivacyInfo / Play location+photos |
| T-NTD-04 | leave-dirty · GPS deny · toast · **cấm** enqueue Lưu/files/scores |
| T-NTD-05 | DOMAIN-MAP Patrol · **cấm ERP.*** · DELETE OUT |

---

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-sa-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.19.5 |
| rulesVersion | 2026.09.19.7 |
| contentHashPrior | sha256:250aebcbfb9a445c517a0c40f399fee82a5a00d524499e7310fd7feac0fb5380 |
| bffContentHashPrior | sha256:nghiem-thu-detail-mobile-bff-20260919 |
| generatedAt | 2026-09-19T20:10:00.000Z |
| versionGate | ok |
| taskId | `task_1f6caf97` |

---
<!-- Version meta: skillId=agent-sa-mobile skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.09.19.5 rulesVersion=2026.09.19.7 versionGate=ok -->
