# Team-lead — incident (edit_page · fill_gaps · BFF-init + media)

| Field | Value |
|-------|-------|
| feature | `incident` |
| this role | `team_lead` · `/agent-team-lead` |
| status | `confirmed` (autoApprove=ON · agent self-confirm) |
| packKind | `list` |
| Feature Kind | **B** catalog A–D · **Kind D Slideout** Z1–Z3 + **DES-FORM-Z2-MEDIA** |
| changeScope | `edit_page` |
| gap | `bff_init` + `media_upload` · FormType CRUD **CLOSED** |
| runMode | `fill_gaps` · `qa_fail_rollback` |
| autoApprove | **ON** (`task_554b5a39`) |
| e2eQa | **ON** — queued `/agent-qa*` · **cấm** e2e / `yarn start:std` / `yarn build` ở role TL |
| taskId | `task_554b5a39` |
| prior · sa | `confirmed` · `be/solution-discovery.md` · compact `handoff/sa-compact.md` · `task_343230dc` |
| prior · design | `confirmed` · `ui/design.md` + prototype · compact `handoff/design-compact.md` · `task_e0587959` |
| prior · po | `confirmed` · `po/requirement.md` · compact `handoff/po-compact.md` · `task_900ecdd8` |
| prior · data_analy | `confirmed` · control-hint + real-data · compact `handoff/data_analy-compact.md` · contentHash `sha256:927979e9a8dc3f1491792cc2a87a5e42e0af21842278e65aefcb359f45e021ad` |
| contentHash | `sha256:927979e9a8dc3f1491792cc2a87a5e42e0af21842278e65aefcb359f45e021ad` |
| updatedAt | `2026-09-07T01:52:00.000Z` |

**SUPERSEDED delta:** prior pack `task_0387effb` (FormType CRUD fill_gaps) — **CLOSED** keep. Pack này **chỉ** GAP-QA-BFF-INIT-01 + GAP-INC-MEDIA-01 (+ HARD) · **cấm** re-CRUD · **cấm** rewrite list A–D · **cấm** re-open FormType ACT.

---

## Source assignment

| Layer | Path | Confirm |
|-------|------|---------|
| UI | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Field` · `pages/IncidentListPage` · `IncidentFormSlideout` | `ui_repo_confirm=approve` |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Incident** | `be_repo_confirm=approve` |
| Routes | **`source.routes`:** `/su-co` · form `?form=` Slideout | `route_confirm=route_keep` |
| API | **`api/v1/incident/incidents`** · BFF `web-bff/api/v1/incident/incidents` | **cấm ERP.*** |
| Files | **`web-bff/api/v1/files/*`** · NuGet `Linm.Platform.FileService.Bff` · host `RMMS.Service.Bff` | **cấm** invent FilesController |
| Lookup | Integration **`api/v1/integration/road-routes/search`** (LKP · share_a · KEEP) | **cấm** clone |
| mfeStdRoute | `/su-co` | draft OK |
| mfeStdUrl | `http://localhost:9304/su-co` | Dev/QA verify |
| **devSlash** | **`/agent-dev`** · BFF file: `/init-bff-file` · FE upload: `/integrate-file-upload-web` | **cấm** `/implement-file-service` · `/agent-dev-oms-map` |

**route_confirm:** A=`/su-co` · packet `/incident` **REJECT**. Autopilot **keep A**.

---

## retry.ssot_rereview (HARD — fill_gaps · surface delta only)

Checklist: `tl-retry-ssot-rereview` · `list-form-quality-gates` · peer Patrol MediaIds.

| Check | Live / cite | Result |
|-------|-------------|--------|
| List A–D · FormType C/E/V/Copy/Delete/assign-close | prior CLOSED | **PASS** — **cấm** re-open |
| Filter · LKP · footer-only · History · Leave | prior done / e2e PASS | **PASS** — **cấm** rewrite |
| API-01…08 CRUD+init source `GetInitData` **có** | SA · API 200 | **PASS** API · **GAP** BFF 404 → T-BFF-INIT-02 |
| Media FileUpload + MediaIds | missing | **GAP** → T-BE-MEDIA-01 · T-BFF-FILE-01 · T-UI-MEDIA-01 |
| tree_master / map Kind F | — | **n/a** / DEFER |

**Dev HARD:** re-review checklist **trước Write** · fix_all GAP P1 cùng surface · **cấm** chỉ patch 1 chỗ · **cấm** ERP.* · **cấm** persist presigned URL.

---

## DES-GRID → Lin\* (KEEP + media delta)

| Zone | Design | Component | DoD this pack |
|------|--------|-----------|---------------|
| A–D · FILTER · F · H | DES-GRID-* | LinPageLayout · LinErpListFilterBar · LinCatalog* | **KEEP** · **cấm** rewrite |
| Z1–Z3 | DES-GRID-Z | Slideout footer-only | **KEEP** |
| Media | **DES-FORM-Z2-MEDIA** · `data-zone=upload` | FileUpload (Lin\* / peer) | **NEW** · sau Mô tả · optional P1 |
| View gallery | DES-FORM-Z2-MEDIA | resign gallery | **NEW** · **cấm** persist URL |
| Leave | DES-MOD-LEAVE | LeaveConfirmModal | dirty on add/remove media · files fail **toast** |

---

## GAPs P1 (Dev phải đóng) · DEFER

| ID | Surface | Live | Required | Task |
|----|---------|------|----------|------|
| **GAP-QA-BFF-INIT-01** | BFF | init-data **404** · API **200** · source action **có** | rebuild/redeploy host → BFF **200** · **cấm** invent path | **T-BFF-INIT-02** |
| **GAP-INC-MEDIA-01** | BFF+API+FE | no upload | FileService.Bff `files/*` · DTO/`MediaIds` CSV · FE FileUpload | **T-BE-MEDIA-01** · **T-BFF-FILE-01** · **T-UI-MEDIA-01** |
| **GAP-INC-MEDIA-HARD** | lock | — | cấm `/implement-file-service` · invent FilesController · persist presigned · ERP.* · lane web only | **HARD** all media tasks |
| GAP-INC-ORG-01 | filter | — | org-unit | **DEFER P2** |
| GAP-RPT-SRC-INC-* | entity | — | DurationMin/damage/DefectItem | **DEFER** |
| GAP-INC-MAP-01 | Kind F | — | — | **DEFER** |
| FormType CRUD | list/form/ACT | CLOSED | **giữ** | **CLOSED** |

---

## FormType pack (canonical · delta stamp)

| Task id | Role | Status | Maps to / notes |
|---------|------|--------|-----------------|
| T-CTX-01 … T-BE-CRUD-01 | — | **done** | prior · **cấm** re-CRUD |
| T-BE-LIST-Q-01 · T-BE-INIT-01 · T-BE-VAL-01 | Dev | **done** | prior |
| T-BFF-01 | Dev | **fail** list OK · init **404** | → **T-BFF-INIT-02** |
| T-PERM-01 · T-UI-LIST-01 · T-UI-FILTER-01 · T-UI-FORM-01 · T-UI-ACT-01 · T-UI-LKP-01 · T-UI-HIST-01 · T-UI-LEAVE-01 · T-UI-FIELD-01 · T-UI-PROD-01 · T-UI-UX-01 · T-UI-RESP-01 | Dev | **done** | **cấm** rewrite |
| **T-BFF-INIT-02** | Dev | **pending** | **GAP-QA-BFF-INIT-01** |
| **T-BE-MEDIA-01** | Dev | **pending** | MediaIds CSV + DTO · mig `Schema_RmmsIncidents_MediaIds` |
| **T-BFF-FILE-01** | Dev | **pending** | `AddLinmFileServiceBff` · `files/*` |
| **T-UI-MEDIA-01** | Dev | **pending** | FileUpload · DES-FORM-Z2-MEDIA · GAP-INC-MEDIA-01 |
| T-UI-MAP-FORM | — | **n/a** | packKind=list |
| T-QA-CRUD-01 | QA | **fail** prior · **re-smoke** | sau Dev · BFF init + media |
| T-QA-FILTER-01 · T-QA-FORM-01 | QA | **done** prior | keep · re-verify if needed |
| T-QA-MEDIA-01 | QA | **pending** | đến lượt QA · upload/view/copy · **cấm** TL/Dev e2e |
| T-PILOT-01 | QA+docs | **pending** | blocked until QA PASS |

---

## Task details (NEW P1 ONLY)

### T-BFF-INIT-02 — BFF init-data 200

**status:** pending  
**devSlash:** `/agent-dev`  
**deps:** T-BE-INIT-01 (done · API 200)  
**GAP:** GAP-QA-BFF-INIT-01 · `qa_fail_rollback`

**ssot.reuse:**
- http: existing Incident BFF proxy · source `GetInitData` **đã có** (SA confirm)
- **cấm** invent new path / controller / business logic in BFF

**implement.wire:**
- Diagnose live BFF `GET web-bff/api/v1/incident/incidents/init-data` → **404**
- Align route registration / rebuild / redeploy **host** `RMMS.Service.Bff` so proxy forwards to API-08
- Verify FE fallback only when fail · after fix consume 200 arrays

**DoD:**
- [ ] Live BFF init-data **200** + `{value,label}[]` arrays
- [ ] FE lookups không còn phụ thuộc const-only SSOT khi BFF OK
- [ ] `rg` 0 ERP.* path
- [ ] Dev: `dotnet build` BFF PASS (role Dev only) · **cấm** TL build

### T-BE-MEDIA-01 — MediaIds CSV + DTO

**status:** pending  
**devSlash:** `/agent-dev`  
**deps:** T-SA-02 (done) · peer Patrol MediaIds  
**GAP:** GAP-INC-MEDIA-01 · HARD

**ssot.reuse:**
- entity: peer `Patrol` MediaIds varchar(2000) CSV pattern
- **cấm** jsonb · child table P1 · ERP.*

**implement.wire:**
- Migration `Schema_RmmsIncidents_MediaIds` — column `MediaIds` varchar(2000) nullable CSV (Dev Step 4b)
- `IncidentEntity.MediaIds` · DTO `mediaIds` `List<string>?` (= fileIds/attachmentKeys) **max 10**
- Create/Update: replace-all mediaIds after files/* upload
- GetById: return mediaIds guid[] · **cấm** return/persist full URL
- List: **cấm** media column / expand

**DoD:**
- [ ] Mig applied · CRUD round-trip guid[] ≤10
- [ ] View resign gallery uses ids only
- [ ] Peer parity Patrol · **cấm** invent schema

### T-BFF-FILE-01 — FileService.Bff wire

**status:** pending  
**devSlash:** `/init-bff-file` · `/agent-dev`  
**deps:** T-SA-02  
**GAP:** GAP-INC-MEDIA-01 · HARD

**ssot.reuse:**
- NuGet `Linm.Platform.FileService.Bff` · host `RMMS.Service.Bff`
- Routes `web-bff/api/v1/files/*` · `AddLinmFileServiceBff`
- **cấm** invent FilesController · `/implement-file-service` · copy controller

**implement.wire:**
- Register FileService.Bff on RMMS BFF host (idempotent if already present)
- Confirm upload/download/resign endpoints reachable under `files/*`
- Incident domain **không** own file storage — only store guid CSV

**DoD:**
- [ ] `files/*` 200 happy path (Dev verify)
- [ ] No custom Incident FilesController
- [ ] **cấm** ERP.* file APIs

### T-UI-MEDIA-01 — Form FileUpload

**status:** pending  
**devSlash:** `/integrate-file-upload-web` · `/agent-dev`  
**deps:** T-BFF-FILE-01 · T-BE-MEDIA-01 · T-UI-FORM-01 (done)  
**GAP:** GAP-INC-MEDIA-01 · HARD · Design DES-FORM-Z2-MEDIA

**ssot.reuse:**
- ui: peer Patrol / Lin FileUpload · `apiClient` → `web-bff/api/v1/files/*`
- form: Kind D slideout · zone sau Mô tả · `data-zone=upload`
- **cấm** demo-json SSOT · alert/confirm · media grid col

**implement.wire:**
- Create/Edit/Copy: FileUpload optional · write `mediaIds`/`fileIds`/`attachmentKeys` guid[]
- View: gallery resign · **cấm** persist presigned
- Dirty: add/remove media → LeaveConfirmModal
- Fail upload → toast (không block save unrelated fields if optional — follow Design/PO)
- MIME/size: peer FileService (jpeg|png|webp · video per SA/peer) · max 10

**DoD:**
- [ ] Zone DES-FORM-Z2-MEDIA visible Create/Edit/Copy/View
- [ ] Persist guid CSV via Incident CRUD · list no media col
- [ ] `rg` 0 ERP.* · 0 persist full URL in entity/DTO client
- [ ] footer-only / list A–D **unchanged**

### T-QA-MEDIA-01 / T-QA-CRUD-01 re-smoke (QA only)

**status:** pending đến lượt `/agent-qa*`  
**deps:** T-BFF-INIT-02 · T-UI-MEDIA-01  
**DoD (QA):**
- [ ] BFF init-data 200 · lookups OK
- [ ] Upload/view/copy media · leave dirty · toast fail
- [ ] Prior CRUD/filter/form scenarios re-smoke PASS
- [ ] **cấm** TL/Dev chạy e2e / start:std

---

## Deps (delta NEW)

```
T-BE-INIT-01 (done) → T-BFF-INIT-02
T-SA-02 (done)
  → T-BE-MEDIA-01 (mig Dev 4b)
  → T-BFF-FILE-01
  → T-UI-MEDIA-01
→ T-QA-MEDIA-01 · T-QA-CRUD-01 re-smoke → T-PILOT-01 → Review
```

---

## ssot.reuse (global · delta)

| Concern | Package / path |
|---------|----------------|
| UI | `@linm-soft-org/linm-web-common-components` · FileUpload peer · LeaveConfirmModal |
| HTTP | `apiClient` · `web-bff/api/v1/incident/incidents` · `web-bff/api/v1/files/*` |
| BE | Incident domain · MediaIds CSV · peer Patrol |
| BFF | `AddLinmFileServiceBff` · init-data proxy rebuild |
| Auth | `incident.incidents.*` KEEP |
| **Cấm** | ERP.* · invent FilesController · persist presigned · rewrite A–D · re-CRUD · demo-json SSOT |

## implement.wire / state (HOW — TL)

| Surface | Wire |
|---------|------|
| S-LIST | KEEP prior · **cấm** media col |
| S-FORM-* | KEEP fields + **mediaIds** replace-all · files/* upload first |
| S-FORM-VIEW | resign gallery from mediaIds |
| S-INIT | BFF init-data **200** after T-BFF-INIT-02 |
| state | form draft dirty includes media · leave guard |

## Gates

| Gate | Value |
|------|-------|
| design_confirm | **approve** |
| solution_confirm | **approve** |
| route_confirm | **route_keep** `/su-co` |
| be_repo_confirm | **approve** |
| ui_repo_confirm | **approve** |
| autoApprove | **ON** |
| e2eQa | **ON** (queued QA) |
| qa_fail_rollback | **active** |

## Cấm (HARD)

- ERP.* · invent FilesController · `/implement-file-service` · persist presigned URL
- re-CRUD API-01…07 · rewrite list A–D · re-open FormType ACT
- e2e / `yarn start:std` / `yarn build` / Step 4b migration ở role **team_lead**
- start role Dev/QA trong task này (GAP-PKT-ROLE-01)

## Handoff next

| Role | Do |
|------|----|
| Dev | T-BFF-INIT-02 · T-BE-MEDIA-01 · T-BFF-FILE-01 · T-UI-MEDIA-01 |
| QA | re-queue e2e · T-QA-MEDIA-01 · T-QA-CRUD-01 |
| Review | after QA PASS |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-team-lead |
| skillVersion | 2026.08.19.04 |
| taskSchemaVersion | 2 |
| schemaVersion | qldb-workflow-skill-v1 |
| workflowVersion | 2026.08.25.02 |
| rulesVersion | 2026.08.28.4 |
| generatedAt | 2026-09-07T01:52:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:927979e9a8dc3f1491792cc2a87a5e42e0af21842278e65aefcb359f45e021ad |

<!-- team_lead taskId=task_554b5a39 feature=incident gap=bff_init+media_upload -->
