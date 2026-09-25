# Solution discovery — nghiem-thu

> Status: **confirmed** (autoApprove ON · `solution_confirm=approve`)  
> Lane: **mobile** · slash `/agent-sa-mobile` · taskId `task_1791e2ed`  
> Prior SA keep: `task_ca050f3a` (native list + Mobile.Bff) · **§ Delta = MAU-10 Label + ResultCode + Schema_NghiemThuMau**  
> Standards: api-endpoint · bff-api-structure · no-parent-json-field · ios networking · android api-client · offline-sync  
> Requires: design **confirmed** · compact data_analy/po/design · plan `docs/plan/nghiem-thu-mau/SCHEMA.md`  
> **Cấm:** invent API · fork DTO · ERP.* · run Step 4b/MIG this role · e2e/start:std · Write MFE/native · mfeStdUrl native · JSON blob scores trên parent

| Field | Value |
|-------|-------|
| feature | `nghiem-thu` |
| title | Công tác nghiệm thu — mobile list · MAU-10+Result |
| Role | `sa` · `/agent-sa-mobile` |
| packKind | `list` |
| featureKind | **B** — web Full kept · mobile list P1 + schema delta |
| changeScope | `edit_page` |
| formPattern | **N/A** on slug list · scores/Result write → create/detail siblings (pending_confirm) |
| demo | `#sc-nghiem-thu` · DES-MOB-NGHIEM-THU · DES-MOB-NT-RESULT · **cấm** re-scan |
| contentHash | `sha256:1044ba719edda88d256d5c2a780cd2293f2fab87e2a39acdbb86001fad6ff659` |
| skillVersion | `2026.08.25.01` (agent-sa-mobile) |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.3` |
| rulesVersion | `2026.09.19.6` |
| updatedAt | `2026-09-20T01:00:00.000Z` |
| solution_confirm | **approve** · `2026-09-20T01:00:00.000Z` |

## 0. § Delta MAU-10 + Result (edit_page) — REQUIRED

| Item | Keep (prior mobile SA) | This task (SA) |
|------|------------------------|----------------|
| UI list | DES-MOB-NGHIEM-THU chrome | **+** rowSub = **TemplateLabel** MAU-10 · **+** DES-MOB-NT-RESULT badge |
| BFF | Mobile.Bff catch-all | **keep** · proxy only · **cấm** NT controller |
| Domain API | `api/v1/patrol/nghiem-thu` | **reuse** · extend DTO + init-data · **cấm invent path** |
| init-data | statuses + templateTypes | **+** TemplateTypes.label MAU-10 + criteria[] · **+** ResultCodes[] |
| List DTO | Code · TemplateType · Route · Km · Status | **+** `TemplateLabel` · **+** `ResultCode` (null ẩn) · scores **OUT** list |
| Persist | Schema_NghiemThu | **+ Schema_NghiemThuMau** (pair CLI · TL/Dev) · **cấm** run MIG this role |
| Files / GPS | OUT list | **keep** · FileService guid siblings only |
| Gates TZ/XCO/SHARE | required / required / tenant_keep | **keep** |

AskQuestion (autoApprove ON): `be_repo_confirm=yes` · `solution_confirm=approve` · schema_choice=**child_table** · migration_flag=**yes** · Step4b=**SKIP** this role.

## 1. Ownership (mobile)

| Layer | Repo / module |
|-------|----------------|
| **iOS** | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · ApiClient → `{BffBase}/mobile-bff/api/v1` |
| **Android** | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · same prefix |
| **Mobile.Bff** | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · catch-all `{**path}` → `api/v1/{path}` · **proxy only** · **cấm** dedicated NT controller · **cấm** DbContext |
| **BackendRoot** | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **be_repo_confirm=yes** · Domain **Patrol** · `NghiemThuController` · **cấm ERP.*** |
| MFE (ref only) | Field `/nghiem-thu` · peerStdUrl `http://localhost:9304/patrol` · **OUT** qlbd-mobile · **cấm** mfeStdUrl native |
| DocsRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/docs` |
| Plan cite | `docs/plan/nghiem-thu-mau/{README,MAU-10,CHI-SO,SCHEMA}.md` |

### Architecture

| Layer | Choice |
|-------|--------|
| Domain | Patrol · DOMAIN-MAP `nghiem-thu`→Patrol (**CLOSED**) |
| App base | `{BffPrefix}` = `mobile-bff/api/v1` |
| List path | `GET patrol/nghiem-thu` · query passthrough |
| Init | `GET patrol/nghiem-thu/init-data` · MAU-10 + ResultCodes + statuses |
| Auth | JWT + `X-Company-Id` · perm `patrol.nghiem-thu.read` (list) |
| Persist | Schema_NghiemThuMau · parent Result* + child scores · **no** parent JSON |
| Out of pack | POST/PUT/DELETE · scores write · files · GPS — **siblings** |

## 2. Form data analysis (mobile list)

| Screen / FormMode | Fields (UI) | Source type | Entity | notes |
|-------------------|-------------|-------------|--------|-------|
| List | search | query | — | `?search=` CI |
| List | rowCode | transaction | NghiemThu | `Code` NT-* |
| List | rowSub | transaction + lookup | NghiemThu | **TemplateLabel** (MAU-10) · Route · KmFrom — **cấm** raw `mau-0N` as display |
| List | rowStatus | transaction | NghiemThu | Status ↔ API-00 statuses |
| List | rowResult | transaction | NghiemThu | **ResultCode** pass/fail/deduct · **null ẩn** |
| List | empty / toastFail | chrome | — | 0 items · offline/4xx |
| Init | TemplateTypes · ResultCodes · statuses | LOOKUP_STATIC | — | API-00 |
| Nav | navCreate · rowTap | local nav | — | → create/detail · **không** API list |

### controlHint → API shape (list)

| uiField | controlHint | SA API |
|---------|-------------|--------|
| search | SearchField | API-01 `?search=` |
| rowCode | Text | DTO `Code` |
| rowSub | Text | DTO `TemplateLabel` + `Route` + `KmFrom` |
| rowStatus | Badge | DTO `Status` ↔ API-00 `statuses[]` |
| rowResult | Badge | DTO `ResultCode` ↔ API-00 `resultCodes[]` · omit when null |
| navCreate / rowTap | TextButton / ListRow | local route only |

**Cấm** invent filter APIs · **cấm** demoItems · **cấm** hardcode 100+ criteria trên client · optional status/route/template filter = P1 sheet (PO).

## 3. API catalog — mobile bind (reuse + extend)

Base domain: `api/v1/patrol/nghiem-thu`  
App calls: `mobile-bff/api/v1/patrol/nghiem-thu*` (BFF rewrite → domain)

### API-00: GET …/patrol/nghiem-thu/init-data

| | |
|--|--|
| Purpose | LOOKUP_STATIC for list badges + MAU catalog |
| Permission | `patrol.nghiem-thu.read` |
| Tenant | X-Company-Id |
| Request | — |
| Response | `{ statuses:[{value,label}], templateTypes:[{value,label,criteria:[{code,label,slaHint}]}], resultCodes:[{value,label}] }` |
| Notes | TemplateType **value** `mau-01`…`mau-10` **GIỮ** · **label** = TT 41 PL IV Mẫu 01 §1.2.1 (MAU-10) · ResultCodes = `pass`/`fail`/`deduct` · criteria bind create/detail only |
| Form surfaces | **List** badge/label bind |
| Migration | Schema_NghiemThuMau (catalog in code/seed — not JSON parent) |
| Mobile | **IN** list P1 |

### API-01: GET …/patrol/nghiem-thu

| | |
|--|--|
| Purpose | Paged list + search |
| Permission | `patrol.nghiem-thu.read` |
| Tenant | X-Company-Id |
| Request | `search?` · `status?` · `route?` · `templateType?` · `fromDate?` · `toDate?` · `page` · `pageSize` — P1 default `page=1` · `pageSize=50` |
| Response | items: `Id` · `Code` · `TemplateType` · **`TemplateLabel`** · `Route` · `KmFrom` · `Status` · **`ResultCode`** (nullable) · (+ ZoneOrgCode · dates P2) · **scores[] OUT list** |
| Form surfaces | **List** |
| gates.tz | **yes** (fromDate/toDate if used) |
| Migration | Schema_NghiemThuMau columns on list projection |
| Mobile | **IN** list P1 · fail → EmptyChrome + toast |

### OUT slug list (owner = siblings / web)

| API | Path | Owner |
|-----|------|-------|
| API-02 GET/{id} | `patrol/nghiem-thu/{id}` | nghiem-thu-detail · includes Result* · Scores[] |
| API-03 POST | `patrol/nghiem-thu` | nghiem-thu-create · Result* · Scores[] · Work* |
| API-04 PUT | `patrol/nghiem-thu/{id}` | detail · Result* · Scores[] |
| API-05 DELETE | `patrol/nghiem-thu/{id}` | detail / web |
| API-FILE | `mobile-bff/api/v1/files/*` | create/detail · FileService · **cấm** files-nt |

**GAP-MOB-ACT-02:** **cấm** nhét create/detail/scores actions vào solution list slug.

## 4. BFF vs API · tenant · store

| Decision | Value |
|----------|-------|
| BFF | Mobile.Bff **proxy only** · verify `patrol/nghiem-thu*` · **cấm** mobile-only NT path |
| App | **cấm** hardcode `localhost` / LAN IP · use configured BffBase |
| Tenant | `X-Company-Id` on every call |
| Id | nav key = DTO `Id` · display `Code` `NT-*` |
| Privacy | list = network content · no new camera/GPS on this slug |
| Offline | no dedicated offline queue on list P1 · fail → toast |
| GPS / camera / push | **OUT** list · siblings later |

## 5. Data model / EF — Schema_NghiemThuMau

| Entity / table | Decision |
|----------------|----------|
| `NghiemThu` / `rmms_nghiem_thu` | **keep** Code · Status · TemplateType · Route · Km · Media · tenant |
| **Parent ADD** | `ResultCode` varchar(16) null · `ResultNote` varchar(2000) null · `WorkStartedAt` timestamptz null · `WorkEndedAt` timestamptz null |
| **Child NEW** `NghiemThuScore` / `rmms_nghiem_thu_score` | Id guid · NghiemThuId FK · CriterionCode varchar(32) · Verdict `pass`/`fail`/`n_a` · Note varchar(500) · SortOrder int |
| JSON blob parent | **cấm** (query/filter theo verdict) |
| `NghiemThuMedia` | **keep** · FileService guid · **cấm** parent JSON media |
| Migration name | **`Schema_NghiemThuMau`** · pair Migrations + Api · **migration flag = yes** |
| Step 4b this role | **SKIP** · TL/Dev pair CLI · SA **cấm** run `dotnet ef` |
| Validate | TemplateType ∈ mau-01…10 · ResultCode ∈ pass/fail/deduct khi Status=`done` · draft ResultCode null OK · Scores.CriterionCode ∈ catalog của đúng TemplateType |

Gates keep: TZ=**required** · XCO=**required** · SHARE=**tenant_keep**.

## 6. Permissions

| Code | Mobile list |
|------|-------------|
| `patrol.nghiem-thu.read` | API-00 · API-01 |
| `patrol.nghiem-thu.write` | **OUT** list (siblings — Result/Scores write) |

## 7. Gaps closed / open

| Gap | Status |
|-----|--------|
| GAP-DA-NT-DOMAIN-01 / API-01 | CLOSED · Patrol path |
| GAP-MOB-NT-DATA/BFF/LIST | CLOSED · proxy keep |
| GAP-MOB-ACT-02 | CLOSED · siblings own write + scores |
| GAP-SA-MAU-01 | CLOSED · schema_choice=**child_table** · Schema_NghiemThuMau |
| GAP-SA-RESULT-01 | CLOSED · list ResultCode + init ResultCodes · null ẩn |
| GAP-SA-LABEL-01 | CLOSED · TemplateLabel MAU-10 · value mau-* GIỮ |
| New BFF controller | **none** |
| open questions | **none** |

## 8. Handoff → Team lead

| Item | Value |
|------|-------|
| FormMode↔API | List→API-01 · Lookups→API-00 · C/E/V/D/Files/Scores→sibling OUT |
| Entity/migration | Schema_NghiemThuMau · migration flag=**yes** · Step4b=TL/Dev · SA SKIP |
| DTO list delta | TemplateLabel · ResultCode |
| init-data delta | templateTypes.label+criteria · resultCodes |
| TZ/XCO/SHARE | required / required / tenant_keep |
| Perm | patrol.nghiem-thu.read (list) |
| next | `/agent-team-lead-mobile` |
| devSlash | `/agent-dev-ios` + `/agent-dev-android` |
| e2eQa | queued `/agent-qa*` only · **cấm** e2e this role |
| **Cấm TL/Dev** | invent API · ERP.* · WO · sessions · DbContext on BFF · fork DTO · JSON scores parent · start create/detail trước Approve · files-nt |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.19.3 |
| rulesVersion | 2026.09.19.6 |
| generatedAt | 2026-09-20T01:00:00.000Z |
| versionGate | ok |
| contentHash | sha256:1044ba719edda88d256d5c2a780cd2293f2fab87e2a39acdbb86001fad6ff659 |
| solution_confirm | **approve** (autoApprove) |
| taskId | task_1791e2ed |

---
<!-- Version meta: skillId=agent-sa-mobile skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.09.19.3 versionGate=ok solution_confirm=approve -->
