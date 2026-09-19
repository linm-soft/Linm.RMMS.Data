# Solution discovery — nghiem-thu

> Status: **confirmed** (autoApprove ON · `solution_confirm=approve`)  
> Lane: **mobile** · slash `/agent-sa-mobile` · taskId `task_ca050f3a`  
> Prior web SA: **keep** (`task_25cd95bb` · Schema_NghiemThu live) · **delta = native list + Mobile.Bff reuse**  
> Standards: api-endpoint · bff-api-structure · no-parent-json-field · ios networking · android api-client · offline-sync  
> Requires: design **confirmed** · compact data_analy/po/design · `_data-analy/nghiem-thu-bff-endpoints.md`  
> **Cấm:** invent API · fork DTO · ERP.* · Step 4b/MIG · e2e/start:std · Write MFE/native · mfeStdUrl native

| Field | Value |
|-------|-------|
| feature | `nghiem-thu` |
| title | Công tác nghiệm thu — mobile list |
| Role | `sa` · `/agent-sa-mobile` |
| packKind | `list` |
| featureKind | **B** — web Full kept · mobile list P1 |
| changeScope | `edit_page` |
| formPattern | **N/A** on slug list · create/detail = sibling sheets (pending_confirm) |
| demo | `#sc-nghiem-thu` · DES-MOB-NGHIEM-THU · **cấm** re-scan |
| contentHash | `sha256:a635f3f55a8bedd952c4449056cf072a8eda890eda2b30a45e84bda5d7bf3859` |
| skillVersion | `2026.08.25.01` (agent-sa-mobile) |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.3` |
| rulesVersion | `2026.09.19.6` |
| updatedAt | `2026-09-19T15:55:00.000Z` |
| solution_confirm | **approve** · `2026-09-19T15:55:00.000Z` |

## 0. § Delta Mobile (edit_page) — REQUIRED

| Item | Web (keep) | Mobile (this task) |
|------|------------|---------------------|
| UI | MFE Field `/nghiem-thu` Kind B Full | iOS + Android list · DES-MOB-NGHIEM-THU |
| BFF | `web-bff/api/v1/patrol/nghiem-thu` | **`mobile-bff/api/v1/patrol/nghiem-thu`** · catch-all proxy |
| Domain API | `api/v1/patrol/nghiem-thu` **live** | **reuse** · app **không** gọi `:5101` |
| FormMode on slug | List+C/E/V/Copy/Delete | **List only** · SearchField + row → sibling |
| Files | FileService web-bff | **OUT** list · create/detail siblings |
| Migration | Schema_NghiemThu applied | **SKIP** Step 4b · **cấm** new MIG |
| Gates TZ/XCO/SHARE | required / required / tenant_keep | **keep** (list TZ bounds · detail XCO on sibling) |

AskQuestion (autoApprove ON): `be_repo_confirm=yes` · `solution_confirm=approve` · no new TZ/XCO/SHARE Ask (keep web gates).

## 1. Ownership (mobile)

| Layer | Repo / module |
|-------|----------------|
| **iOS** | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · ApiClient → `{BffBase}/mobile-bff/api/v1` |
| **Android** | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · same prefix |
| **Mobile.Bff** | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · `MobileApiProxyController` `{**path}` → `api/v1/{path}` · **proxy only** · **cấm** dedicated NT controller · **cấm** DbContext |
| **BackendRoot** | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **be_repo_confirm=yes** · Domain **Patrol** · `NghiemThuController` · **cấm ERP.*** |
| MFE (ref only) | Field `/nghiem-thu` · peerStdUrl `http://localhost:9304/patrol` · **cấm** mfeStdUrl native runtime |
| DocsRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/docs` |
| DataImportRoot | N/A |

### Architecture

| Layer | Choice |
|-------|--------|
| Domain | Patrol · DOMAIN-MAP `nghiem-thu`→Patrol (**CLOSED**) |
| App base | `{BffPrefix}` = `mobile-bff/api/v1` |
| List path | `GET patrol/nghiem-thu` · query passthrough |
| Init | `GET patrol/nghiem-thu/init-data` · badge/status labels |
| Auth | JWT + `X-Company-Id` · perm `patrol.nghiem-thu.read` (list) |
| Persist | **none** on this slug · entity already `NghiemThu` + `NghiemThuMedia` |
| Out of pack | POST/PUT/DELETE · files · GPS capture · camera — **siblings** or P2 |

## 2. Form data analysis (mobile list)

| Screen / FormMode | Fields (UI) | Source type | Entity | notes |
|-------------------|-------------|-------------|--------|-------|
| List | search | query | — | `?search=` CI |
| List | rowCode · rowSub · rowStatus | transaction | NghiemThu | Code · Template·Route·Km · Status badge |
| List | empty / toastFail | chrome | — | 0 items · offline/4xx |
| Init | status labels | LOOKUP_STATIC | — | API-00 → badge map |
| Nav | navCreate · rowTap | local nav | — | → create/detail siblings · **không** API list |

### controlHint → API shape (list)

| uiField | controlHint | SA API |
|---------|-------------|--------|
| search | SearchField | API-01 `?search=` |
| rowCode | Text | DTO `Code` |
| rowSub | Text | `TemplateType`·`Route`·`KmFrom` (+ label via init) |
| rowStatus | Badge | DTO `Status` ↔ API-00 `statuses[]` |
| navCreate / rowTap | TextButton / ListRow | local route only |

**Cấm** invent filter APIs · **cấm** demoItems SSOT · optional status/route/template filter = P1 sheet (PO).

## 3. API catalog — mobile bind (reuse live)

Base domain: `api/v1/patrol/nghiem-thu`  
App calls: `mobile-bff/api/v1/patrol/nghiem-thu*` (BFF rewrite → domain)

### API-00: GET …/patrol/nghiem-thu/init-data

| | |
|--|--|
| Purpose | LOOKUP_STATIC status (+ templateType) for badges |
| Permission | `patrol.nghiem-thu.read` |
| Tenant | X-Company-Id |
| Request | — |
| Response | `{ statuses:[{value,label}], templateTypes:[{value,label}] }` |
| Form surfaces | **List** badge bind |
| Migration | **none** (live) |
| Mobile | **IN** list P1 |

### API-01: GET …/patrol/nghiem-thu

| | |
|--|--|
| Purpose | Paged list + search/filter |
| Permission | `patrol.nghiem-thu.read` |
| Tenant | X-Company-Id |
| Request | `search?` · `status?` · `route?` · `templateType?` · `fromDate?` · `toDate?` · `page` · `pageSize` — P1 default `page=1` · `pageSize=50` |
| Response | paged items: `Id` · `Code` · `TemplateType` · `Route` · `KmFrom` · `Status` · (+ optional ZoneOrgCode · MediaIds count · dates P2) |
| Form surfaces | **List** |
| gates.tz | **yes** (fromDate/toDate bounds if used) |
| Migration | **none** |
| Mobile | **IN** list P1 · fail → EmptyChrome + toast |

### OUT slug list (owner = siblings / web)

| API | Path | Owner |
|-----|------|-------|
| API-02 GET/{id} | `patrol/nghiem-thu/{id}` | nghiem-thu-detail (pending_confirm) · optional prefetch OUT UI |
| API-03 POST | `patrol/nghiem-thu` | nghiem-thu-create |
| API-04 PUT | `patrol/nghiem-thu/{id}` | detail |
| API-05 DELETE | `patrol/nghiem-thu/{id}` | detail / web |
| API-FILE | `mobile-bff/api/v1/files/*` | create/detail · FileService reuse · **cấm** invent NT file API |

**GAP-MOB-ACT-02:** **cấm** nhét create/detail actions vào solution list slug.

## 4. BFF vs API · tenant · store

| Decision | Value |
|----------|-------|
| BFF | Mobile.Bff **proxy only** · verify `patrol/nghiem-thu*` · **cấm** mobile-only NT path |
| App | **cấm** hardcode `localhost` / LAN IP in solution · use configured BffBase |
| Tenant | `X-Company-Id` on every call |
| Id | nav key = DTO `Id` (guid) · display `Code` `NT-*` |
| Privacy | list = network content · no new camera/GPS on this slug · signup delete-TK N/A · family `1` → **cấm** iPad listing claim |
| Offline | no dedicated offline queue on list P1 · fail network → toast · **cấm** invent local NT store as SSOT |
| GPS / camera / push | **OUT** list · create/detail later · **cấm** invent mobile-only upload endpoint |

## 5. Data model / EF

| Entity | Status |
|--------|--------|
| `NghiemThu` / `rmms_nghiem_thu` | **live** · Schema_NghiemThu applied (web) |
| `NghiemThuMedia` | **live** · mediaIds guid[] · **cấm** parent JSON |
| New migration | **SKIP** · Step 4b **cấm** this role |

Gates keep: TZ=**required** · XCO=**required** · SHARE=**tenant_keep**.

## 6. Permissions

| Code | Mobile list |
|------|-------------|
| `patrol.nghiem-thu.read` | API-00 · API-01 |
| `patrol.nghiem-thu.write` | **OUT** list (siblings) |

## 7. Gaps closed / open

| Gap | Status |
|-----|--------|
| GAP-DA-NT-DOMAIN-01 / API-01 | CLOSED · Patrol path |
| GAP-MOB-NT-DATA/BFF/LIST | CLOSED · proxy keep · live DTO |
| GAP-MOB-ACT-02 | CLOSED · siblings own write APIs |
| GAP-SA-STORE-01 | CLOSED · no localhost/IP in solution; list no new privacy claim |
| New BFF/MIG | **none** |
| open questions | **none** |

## 8. Handoff → Team lead

| Item | Value |
|------|-------|
| FormMode↔API | List→API-01 · Lookups→API-00 · (Create/Edit/View/Delete/Files → sibling/web OUT) |
| Entity/migration | Schema_NghiemThu **exists** · migration flag=**no** |
| TZ/XCO/SHARE | required / required / tenant_keep |
| Perm | patrol.nghiem-thu.read (list) |
| devSlash | `/agent-dev-ios` + `/agent-dev-android` |
| e2eQa | queued `/agent-qa*` only · **cấm** e2e this role |
| **Cấm TL/Dev** | invent API · ERP.* · WO · sessions · DbContext on BFF · fork DTO · start create/detail trước Approve |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.19.3 |
| rulesVersion | 2026.09.19.6 |
| generatedAt | 2026-09-19T15:55:00.000Z |
| versionGate | ok |
| contentHash | sha256:a635f3f55a8bedd952c4449056cf072a8eda890eda2b30a45e84bda5d7bf3859 |
| solution_confirm | **approve** (autoApprove) |
| taskId | task_ca050f3a |

---
<!-- Version meta: skillId=agent-sa-mobile skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.09.19.3 versionGate=ok solution_confirm=approve -->
