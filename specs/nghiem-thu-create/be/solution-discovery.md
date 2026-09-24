# SA — Solution — nghiem-thu-create (Tạo nghiệm thu · new_page)

| Field | Value |
|-------|-------|
| feature | `nghiem-thu-create` |
| title | [Mobile] [Công tác nghiệm thu] -> Tạo nghiệm thu |
| this role | `sa` · `/agent-sa-mobile` |
| status | `confirmed` |
| solution_confirm | **approve** (`autoApprove=ON` · `task_22aa08eb`) |
| changeScope | `new_page` |
| packKind | **`sheet`** (PO + Design confirm) |
| stack | `native_dual` |
| Feature Kind | **sheet→screen** · `DES-MOB-NGHIEM-THU-CREATE` · `#sc-nghiem-thu-create` · **cấm** Kind A–G web / Grid / Report / invent tab / Full list·detail trên slug |
| thisAction | **Tạo nghiệm thu** only · entry list nav **Tạo** · **cấm** gộp list/detail (`GAP-MOB-ACT-02`) |
| domain | **Patrol** · `NghiemThuController` live · FileService `files/*` · **cấm** invent `api/v1/nghiem-thu-create` · **cấm** invent `nghiem-thu-files` |
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` |
| prior · design | **confirmed** · `handoff/design-compact.md` · `task_b6b0bafc` |
| prior · po | **confirmed** · `handoff/po-compact.md` · `task_a31ee0a5` |
| prior · data_analy | **confirmed** · `_data-analy/nghiem-thu-create-*.md` · contentHash `sha256:c2b17a793325c8eb40cc64a98b7775db138841107cd178cd6a6aa12ba8cfa66f` · bffContentHash `sha256:nghiem-thu-create-mobile-bff-20260919` |
| autoApprove | **ON** |
| e2eQa | ON khi QA · **cấm** `yarn start:std` / `mfeStdUrl` / e2e / Step 4b ở role SA |
| versionGate | `ok` |
| taskId | `task_22aa08eb` |
| confirmedBy | agent autoApprove · `task_22aa08eb` |
| updatedAt | `2026-09-19T17:20:00.000Z` |

**Cấm:** invent `api/v1/nghiem-thu-create` · invent `nghiem-thu-files` · clone controller trên Mobile.Bff · app `:5101` · ERP.* · `mfeStdUrl` · system alert · fake GPS / fake NT-* · enqueue Lưu/files · fork DTO · Write MFE/native ở SA · Step 4b / migration / e2e ở role này · `localhost` / IP LAN trong solution runtime.

Standards: api-endpoint · bff-api-structure · company-field · no-parent-json-field · sa-implement-gates · ios networking · android api-client · offline-sync · PrivacyInfo / Play · mobile-bff-file · typography-web-mobile (cấm invent font) · tab-index-analy-review (`tabs: none`).

---

## § Delta (`new_page` · `task_22aa08eb`)

| Gap | Analy / Design | SA chốt |
|-----|----------------|---------|
| GAP-MOB-NTC-MAU-01 | init-data LOOKUP_STATIC | Wire `GET …/init-data` → TemplateTypes · display = init Label · **cấm** invent «Mặt đường» value |
| GAP-MOB-NTC-SAVE-01 | POST Create draft | Wire `POST …/patrol/nghiem-thu` · `Status=draft` · toast «Đã lưu nháp · NT-*» |
| GAP-MOB-NTC-MEDIA-01 | FileService max 10 | Upload `files/*` → persist guid only trong `MediaIds` |
| GAP-MOB-NTC-REQ-01 | AssigneeCode / InspectedAt ẩn | Bind auth + device now · **cấm** omit trên POST |
| GAP-MOB-ACT-07 | cấm enqueue Lưu/files | Online-only submit · toast fail · **cấm** fake 200 |
| COPY-01 / REQ-01 | Design closed | Giữ · SA không đổi control |
| Step 4b / MIG | Schema_NghiemThu live | **SKIP** · entity/migration = none |

---

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` RMMS only |
| Domain | `NghiemThuController` `[Route("api/v1/patrol/nghiem-thu")]` · `Create` · `GetInitData` **live** |
| File | FileService via Mobile.Bff · `files/*` · **cấm** invent `nghiem-thu-files` |
| BFF mobile | `MobileApiProxyController` catch-all → `ApiBase` · **cấm** dedicated NghiemThu create controller |
| App | iOS + Android · base `{BffBase}/mobile-bff/api/v1` · **cấm** URLSession/OkHttp trong View |
| Init | `GET patrol/nghiem-thu/init-data` → TemplateTypes · Statuses |
| GPS | Device CL / Fused · deny → `DES-MOB-GPS-DENY` · **cấm** fake |
| Camera / media | Device capture → FileService → `MediaIds` guid[] max 10 |
| Submit | `POST patrol/nghiem-thu` · `CreateNghiemThuRequest` · **cấm** enqueue |
| Persist BE mới | **none** — `NghiemThuEntity` / `rmms_nghiem_thu` · `NghiemThuMediaEntity` live |
| Sibling | parent list `#sc-nghiem-thu` · detail pending_confirm navigate only · **cấm** re-own |
| Out of pack | list GET · detail GET/PUT/DELETE · web-bff · invent tab |

### Route decision

| | Choice |
|--|--------|
| Slug | `nghiem-thu-create` → **sheet→screen** · owner `DES-MOB-NGHIEM-THU-CREATE` |
| App prefix | `mobile-bff/api/v1` |
| Init | `GET patrol/nghiem-thu/init-data` — **live** |
| Write | `POST patrol/nghiem-thu` — **live** · `Status=draft` |
| Files | `POST/PUT/commit files/*` · preview JWT optional |
| Downstream | `NghiemThuController` + FileService · **không** invent path |
| Step 4b | **SKIP** — schema live · **cấm** SA chạy migration |
| Rationale | sameMobile=yes · reuse Web live API · Mobile.Bff catch-all · offline Lưu **cấm** |

---

## Form data analysis (REQUIRED)

| Screen / FormMode | Fields (UI) | Source type | Entity | data-import / mock |
|-------------------|-------------|-------------|---------|-------------------|
| Create draft P1 · `#sc-nghiem-thu-create` | templateRow · locationRow · attachRow · navSave · navCancel · (ẩn) assignee / inspectedAt / status | catalog + geo + files + derived + transaction | `NghiemThuEntity` · media child | **none** · **cấm** demo-json SSOT |

### controlHint → API shape

| controlHint (Design) | SA |
|----------------------|-----|
| Select LOOKUP_STATIC (Mẫu) | **REQUIRED** `GET …/init-data` → `{ value, label }[]` TemplateTypes · **cấm** FE-only enum |
| ListRow+GPS (Vị trí) | Device GPS → `ZoneOrgCode?` · `Route` · `FieldInfo` · `KmFrom?`/`KmTo?` · **không** API GPS |
| PhotoRow/files (Đính kèm) | `files/*` → `MediaIds` guid[] max 10 · **cấm** URL |
| TextButton Lưu | `POST …/patrol/nghiem-thu` cùng slug |
| BackButton Hủy | local nav + leave-dirty · **không** API |
| derived ẩn | auth `AssigneeCode` · device `InspectedAt` · `Status=draft` |

---

## API catalog

Base app: `mobile-bff/api/v1` · downstream: `api/v1/`

### API-01: GET /api/v1/patrol/nghiem-thu/init-data

| | |
|--|--|
| Purpose | Lookup mẫu + status labels cho Create |
| Permission | Patrol NghiemThu read (JWT) |
| Tenant | X-Company-Id · companyCode |
| Request | (none · headers only) |
| Response | `NghiemThuInitDataDto` · `TemplateTypes[]` · `Statuses[]` `{ value, label }` |
| Errors | 401 · 403 · toast fail |
| Form surfaces | Create · templateRow picker `#sheet-mau` |
| Field map | initTemplates → TemplateTypes · status labels (display) |
| **gates.tz** | n/a |
| **gates.xco** | get_only — tenant header |
| **gates.shared** | inherit tenant |
| Context docs | `docs/context/features/nghiem-thu-create.md` |
| Demo HTML | `ui/prototype/{ios,android}/index.html` · `#sc-nghiem-thu-create` · zone ids only |
| Demo JSON | **cấm** ship |
| data-import | n/a |
| Sample | `mau-01`…`mau-10` + Label từ BE |
| Migration | **none** |

### API-02: POST /api/v1/patrol/nghiem-thu

| | |
|--|--|
| Purpose | Tạo nghiệm thu nháp (`Status=draft`) |
| Permission | Patrol NghiemThu create (JWT) |
| Tenant | X-Company-Id · companyCode |
| Request | `CreateNghiemThuRequest` — see body map |
| Response | created DTO · `Code` (NT-*) · `Id` |
| Errors | 422 validation · 401/403 · network toast · **cấm** alert · **cấm** fake NT-* |
| Form surfaces | Create · navSave |
| Field map | see § Body map |
| **gates.tz** | **yes** — `InspectedAt` UTC on submit |
| **gates.xco** | n/a write same-tenant |
| **gates.shared** | tenant_keep |
| Context docs | same |
| Demo HTML | zone `navSave` |
| Demo JSON | **cấm** |
| data-import | n/a |
| Sample | draft + mau-03 + Route/FieldInfo + MediaIds[] |
| Migration | **none** |

### API-03: POST/PUT/commit · files/*

| | |
|--|--|
| Purpose | Upload media trước Create · guid only |
| Permission | FileService JWT |
| Tenant | company headers |
| Request | init metadata · object bytes · commit |
| Response | file id (guid) |
| Errors | toast upload fail · **cấm** persist presigned URL |
| Form surfaces | attachRow · PhotoRow |
| Field map | file id → `MediaIds[]` |
| **gates.tz** | n/a |
| **gates.xco** | n/a |
| **gates.shared** | n/a |
| Context / Demo | attachRow zone |
| data-import | n/a |
| Migration | **none** |

### Body map — `CreateNghiemThuRequest` (live · cấm fork)

| uiField / derived | dtoField | Required | Notes |
|-------------------|----------|----------|-------|
| templateRow | `TemplateType` | **yes** | `mau-01`…`mau-10` · catalog validate |
| locationRow · GPS | `ZoneOrgCode?` · `Route` · `FieldInfo` · `KmFrom?`/`KmTo?` | Route · FieldInfo **yes** | GPS deny chặn save |
| attachRow · files | `MediaIds` | no | guid[] max 10 · replace-set |
| navSave | `Status` | **yes** | P1 = `draft` only |
| auth profile | `AssigneeCode` | **yes** | GAP-MOB-NTC-REQ-01 |
| device now | `InspectedAt` | **yes** | UTC |
| (opt) | `VpOrgCode?` · `Note?` | no | |

**Validate live:** Status · TemplateType · Route · AssigneeCode · FieldInfo · InspectedAt · catalog route + mau + status.

### FormMode ↔ API (mandatory)

| FormMode | API |
|----------|-----|
| Create draft P1 | API-01 init + API-03 files* + API-02 POST |
| Edit / View / List | **OUT** — owner `nghiem-thu` / `nghiem-thu-detail` |
| Hủy / leave-dirty | local only |
| GPS deny | local modal · no API |

---

## BFF vs API · tenant

| Decision | Value |
|----------|-------|
| BFF | Mobile.Bff catch-all proxy · **giữ** path `patrol/nghiem-thu*` |
| Web BFF | **OUT** native |
| x-company-id | JWT + header từ session · **cấm** hardcode |
| App base | `{BffBase}/mobile-bff/api/v1` · **cấm** RMMS `:5101` |

---

## Data model / EF

| Entity | Columns (key) | Migration |
|--------|---------------|-----------|
| `NghiemThuEntity` / `rmms_nghiem_thu` | TemplateType · Status · Route · FieldInfo · AssigneeCode · InspectedAt · Zone · Km · Note · soft IsActive | **none** (live) |
| `NghiemThuMediaEntity` | parent FK · media guid | **none** (live) |

### Persist gate (`no-parent-json-field`)

| | |
|--|--|
| Parent JSON string inventory | **none** |
| Child tables | `NghiemThuMediaEntity` · API `MediaIds: []` guids |
| API shape | scalars on header · media ids array · **cấm** `*LinesJson` / URL blob |

---

## 5b. Implement gates (confirm) — REQUIRED

| Gate | Decision | Endpoints / surfaces | Skill | Note |
|------|----------|----------------------|-------|------|
| TZ | **required** | API-02 `InspectedAt` | `/review-timezone-implement` | device now → UTC store · display local |
| XCO | **get_only** | API-01 init · tenant create | `/implement-view-cross-company` | create same-tenant only |
| SHARE | **tenant_keep** | `NghiemThuEntity` | `/implement-shared-table` | no shared cross-company table |

`sa_tz_gate=tz_required` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` — **autoApprove ON** → confirmed.

---

## Mobile gaps (SA chốt)

| Gap | Decision |
|-----|----------|
| Offline Lưu / files | **cấm** enqueue (`GAP-MOB-ACT-07`) · require online · toast fail |
| GPS | live device · deny modal `DES-MOB-GPS-DENY` · chặn save nếu chưa chốt |
| Camera upload | FileService lifecycle · max 10 · **cấm** fake 200 |
| Push `targetUrl` | n/a P1 create |
| GAP-MOB-BFF-01 | catch-all covers `patrol/nghiem-thu*` · verify only · **cấm** dedicated controller |
| Store · PrivacyInfo | Location + Photos (camera/library) · Play Data safety same |
| Store · signup delete | n/a this feature |
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
| Open questions | none |

---

## Confirm

`solution_confirm` = **approve** · autoApprove=ON · `task_22aa08eb` · **cấm** Dev trước confirmed (PASS).

---

## Handoff → Team lead

| Field | Value |
|-------|-------|
| feature / packKind | `nghiem-thu-create` · **sheet** |
| phase_from / phase_to | sa → team_lead |
| STATUS | solution **confirmed** |
| formPattern | sheet→screen · Create draft P1 |
| FormMode↔API | Create → API-01 + API-03 + API-02 |
| APIs | API-01 init · API-02 POST draft · API-03 files/* |
| entity / migration | live · **none** / Step 4b **SKIP** |
| TZ / XCO / SHARE | tz_required · xco_get_only · share_tenant |
| BFF | Mobile.Bff proxy keep · files NuGet |
| controlHint / UNCLEAR | Design inventory · none |
| Screens | `DES-MOB-NGHIEM-THU-CREATE` · GPS-DENY · LEAVE · `#sheet-mau` |
| reviewUrl | ios/android file:// prototype (Design) |
| peerStdUrl | `http://localhost:9304/patrol` (web ref only) |
| Open questions | none |
| Next | `/agent-team-lead-mobile` · T-* dual Dev · **cấm** SA Write native |
| e2eQa | queued `/agent-qa*` |

### T-* gợi ý (TL chốt)

| Id | Scope |
|----|-------|
| T-NTC-01 | iOS wire Create sheet · init + GPS + files + POST draft |
| T-NTC-02 | Android same §B bind |
| T-NTC-03 | PrivacyInfo / Play location+photos |
| T-NTC-04 | leave-dirty · GPS deny · toast · **cấm** enqueue |
| T-NTC-05 | DOMAIN-MAP Patrol · **cấm ERP.*** |

---

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-sa-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.19.5 |
| rulesVersion | 2026.09.19.7 |
| contentHashPrior | sha256:c2b17a793325c8eb40cc64a98b7775db138841107cd178cd6a6aa12ba8cfa66f |
| bffContentHashPrior | sha256:nghiem-thu-create-mobile-bff-20260919 |
| generatedAt | 2026-09-19T17:20:00.000Z |
| versionGate | ok |
| taskId | `task_22aa08eb` |

---
<!-- Version meta: skillId=agent-sa-mobile skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.09.19.5 rulesVersion=2026.09.19.7 versionGate=ok -->
