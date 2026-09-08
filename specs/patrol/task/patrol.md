# Team-lead — patrol (edit_page · leftover + upload media)

| Field | Value |
|-------|-------|
| feature | `patrol` |
| this role | `team_lead` · `/agent-team-lead` |
| status | `done` |
| packKind | `list` |
| changeScope | `edit_page` |
| gap | `crud_formtype` + upload media (W4-1 W4-2) |
| mode | `fix_gaps` |
| Feature Kind | **B** — catalog A–D + **full-page** (`PatrolFormPage`) |
| taskId | `task_62694861` |
| autoApprove | **ON** |
| e2eQa | **ON** (queued `/agent-qa*` only) |
| design_confirm | **approve** (`task_a57d8389`) |
| solution_confirm | **approve** (`task_8072f549`) |
| be_repo_confirm | **approve** |
| ui_repo_confirm | **approve** |
| updatedAt | `2026-09-07T00:55:57.818Z` |

## Source assignment

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Field` |
| `source.routes` | `/patrol` · `/patrol/new` · `/patrol/:id` · **route_confirm N/A** (KEEP) |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` |
| `source.domain` | **Patrol** (DOMAIN-MAP slug `patrol`) |
| `source.api` | `api/src/RMMS.Service.Api/Domains/Patrol/` · **`api/v1/patrol/sessions`** |
| `source.bff` | PatrolSessionsBff · **`web-bff/api/v1/patrol/sessions`** |
| Files | **reuse** `web-bff/api/v1/files/*` · slash `/init-bff-file` + `/integrate-file-upload-web` |
| FE BASE | `/patrol/sessions` |
| Lookup FE | `/integration/road-routes` (KEEP) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/patrol/ui/prototype/patrol-list-prototype.html` |
| mfeStdRoute | `/patrol` |
| mfeStdUrl | `http://localhost:9304/patrol` |

**Cấm** `ERP.Service.*` · invent `patrol-files` · persist full URL · parent JSON nested · child table media P1.

## Prior KEEP CLOSED (cấm rewrite shell)

| id | Status | Note |
|----|--------|------|
| T-CTX-01 · T-BE-01 · T-BE-02 · T-PERM-01 · T-BE-CRUD-01 | **done** | CRUD + table |
| T-BE-Q-01 · T-BE-VAL-01 · T-BFF-01 · T-FE-API-01 | **done** | `?route=` · validate catalog · enum VN |
| T-UI-LKP-01 · T-UI-FIELD-01 · T-UI-PROD-01 | **done** | SearchInput road-route · seed 38 |
| T-UI-LIST-01 · T-UI-FORM-01 · T-UI-ACT-01 · T-UI-UX-01 | **done** | A–D KEEP · full-page · footer-only |
| T-QA-01 · T-QA-CRUD-01 | **done** | prior pack |
| GAP-PO-PAT-01..07 · GAP-SA-PAT-Q01/LKP/VAL/ENUM · GAP-TL-PAT-* | **CLOSED** | |
| GAP-SA-PAT-FILE-01 · GAP-DES-PAT-MEDIA-UI | **CLOSED** | SA/Design chốt |

## Live audit (TL · `tl-retry-ssot-rereview`)

| Check | Live | Pack required |
|-------|------|----------------|
| List A–D shell · route filter · SearchInput | **PASS** (prior) | KEEP — **cấm rewrite** |
| Form full-page · View `<dl>` · footer-only | **PASS** (prior) | KEEP + **upload zone** |
| `mediaIds` / FileMulti / gallery | **thiếu** | NEW P0 |
| DB `MediaIds` column | **thiếu** | T-MIG-MEDIA |
| sessions DTO `mediaIds[]` | **thiếu** | T-BE-FILE-01 |
| FileService wire FE | **thiếu** | T-FE-FILE-01 |
| AC-G-08 media không cột grid | Design | KEEP |

### retry.ssot_rereview

| Field | Value |
|-------|-------|
| result | **gaps** — shell PASS · **GAP cùng surface** media FILE-01 + form upload + View gallery + Copy clone |
| rule | Dev **cấm** chỉ patch 1 chỗ — đóng hết T-MIG/BE/FE/UI-MEDIA |

## Implement HOW

| Topic | Decision |
|-------|----------|
| Schema | `MediaIds` **varchar(2000)** CSV guid trên `rmms_patrol_sessions` · **cấm** jsonb · child table **P2** |
| DTO | `mediaIds: string[]` max **10** · replace-all Create/Update |
| Files | reuse `web-bff/api/v1/files/*` · persist **guid only** · resign View |
| MIME | jpeg\|png\|webp ≤10MB · mp4\|webm ≤50MB · max 10 — FE+FileService; BE **count only** |
| FormMode | List **no** media · View GetById+resign · Copy **clone guid[]** · Delete soft **no** cascade files |
| UI | Form `data-zone=upload` FileMulti sau note · View `data-zone=media-gallery` · **không** cột grid (AC-G-08) |
| List/route | **KEEP** — không đụng filter/route/LKP |
| Skills | `form-type-task-pack` · `list-form-quality-gates` · `tl-retry-ssot-rereview` · `/init-bff-file` · `/integrate-file-upload-web` · `dev-ui-ux-constitution` |

**ssot.reuse:**
  ui: PatrolListPage · PatrolFormPage · Lin* · SearchInput road-route KEEP · FileMulti (common)
  http: patrolService · apiClient · FileService files/* (cấm patrol-files)
  be: PatrolSession entity widen MediaIds · no new controller domain
**implement.form:**
  View: `<dl>` + gallery resign
  upload: FileMulti · toast reject MIME/size
  footer_actions_only: KEEP
**DoD (retry HARD):**
- [ ] Dev stamp `retry.ssot_rereview` trên implement MD trước Write
- [ ] Đóng hết GAP media cùng surface — **cấm** patch 1 chỗ
- [ ] **Cấm** rewrite list shell / route LKP
- [ ] MFE `yarn build` PASS · BE `dotnet build` API + Patrol BFF PASS · implement § Build

## GAP inventory (Dev phải đóng)

| ID | Gap | Task |
|----|-----|------|
| GAP-SA-PAT-FILE-01 | MediaIds CSV varchar · DTO[] | T-MIG-MEDIA · T-BE-FILE-01 |
| GAP-DES-PAT-MEDIA-UI | upload zone + View gallery | T-UI-FORM-MEDIA · T-UI-VIEW-GALLERY |
| GAP-PO-PAT-MEDIA-* | FileMulti · MIME · max 10 | T-FE-FILE-01 · T-UI-FORM-MEDIA |
| GAP-TL-PAT-COPY-MEDIA | Copy clone guid[] | T-UI-COPY-MEDIA |
| GAP-TL-PAT-LIST-NO-MEDIA-COL | AC-G-08 | T-UI-LIST-01 verify KEEP |

**Out of pack P2:** Kind E+F map/tracks · child table media · code readOnly leftover · GAP-QA-PAT-CODE-DISABLED · SD-AUTH · invent patrol-files.

## Task pack (canonical · `form-type-task-pack`)

### Prior done (reference — **không** re-open)

T-CTX-01 · T-PERM-01 · T-BE-* · T-BFF-01 · T-FE-API-01 · T-UI-LKP/FIELD/PROD/LIST/FORM/ACT/UX · T-QA-01/CRUD — **done** (prior packs).

### T-MIG-MEDIA
**layer:** migration · **status:** pending · **deps:** T-BE-02  
**skills:** Schema migration (add column only)  
**DoD:**
- [ ] Migration `Schema_RmmsPatrolSessions_MediaIds` — add `MediaIds` varchar(2000) nullable trên `rmms_patrol_sessions`
- [ ] **Cấm** jsonb · **cấm** child table · **cấm** drop/rename existing cols
- [ ] Entity map `MediaIds` ↔ CSV guid
- [ ] `dotnet build` API PASS

### T-BE-FILE-01
**layer:** api · **status:** pending · **deps:** T-MIG-MEDIA  
**DoD:**
- [ ] DTO `mediaIds: string[]` max 10 · serialize CSV ↔ array (pattern CSDL)
- [ ] GetById returns `mediaIds[]` · List **omit** media (no column)
- [ ] Create/Update **replace-all** mediaIds · validate count ≤10 · guid format
- [ ] Copy/clone: response/source includes mediaIds[] for FE clone
- [ ] Delete soft — **không** cascade delete files
- [ ] **Cấm** ERP.* · **cấm** invent file endpoints trên Patrol
- [ ] `dotnet build` API PASS

### T-BFF-FILE-01
**layer:** bff · **status:** pending (verify) · **deps:** T-BE-FILE-01  
**DoD:**
- [ ] Patrol BFF proxy sessions body `mediaIds` passthrough — **không** business logic
- [ ] Files vẫn qua **existing** files BFF — **không** Patrol-files controller
- [ ] `dotnet build` Patrol BFF PASS

### T-FE-FILE-01
**layer:** ui · **status:** pending · **deps:** T-BFF-FILE-01  
**skills:** `/init-bff-file` · `/integrate-file-upload-web`  
**DoD:**
- [ ] Wire FileService `web-bff/api/v1/files/*` (upload · get · resign) — **cấm** scaffold API mới
- [ ] Types: `mediaIds: string[]` trên session DTO FE · getList **không** require media
- [ ] Persist **guid only** · **cấm** full URL trong store/API body
- [ ] MIME/size enforce FE: jpeg|png|webp ≤10MB · mp4|webm ≤50MB · max 10 · toast reject
- [ ] MFE `yarn build` PASS

### T-UI-FORM-MEDIA
**layer:** ui · **status:** pending · **deps:** T-FE-FILE-01 · T-UI-FORM-01  
**from_design:** `data-zone=upload`  
**DoD:**
- [ ] Form Create/Edit: section FileMulti **sau note** · controlHint=`FileMulti` · field `mediaIds`
- [ ] Upload → guid[] · dirty leave-confirm includes media change
- [ ] Submit Create/Update gửi `mediaIds[]` replace-all
- [ ] **KEEP** footer-only · **cấm** Resource/Slideout · **cấm** rewrite non-media fields
- [ ] MFE `yarn build` PASS

### T-UI-VIEW-GALLERY
**layer:** ui · **status:** pending · **deps:** T-FE-FILE-01 · T-UI-FORM-01  
**from_design:** `data-zone=media-gallery`  
**DoD:**
- [ ] View mode: gallery resign URLs từ FileService · **không** raw guid-only UI
- [ ] KEEP View `<dl>` cho scalar fields · gallery riêng zone
- [ ] MFE `yarn build` PASS

### T-UI-COPY-MEDIA
**layer:** ui · **status:** pending · **deps:** T-UI-FORM-MEDIA · T-BE-FILE-01  
**DoD:**
- [ ] Copy: clone `mediaIds[]` guid sang form mới · POST Create kèm mediaIds
- [ ] **Không** re-upload files · **không** invent copy-file API
- [ ] MFE `yarn build` PASS

### T-UI-LIST-01 (verify KEEP)
**layer:** ui · **status:** pending (verify) · **deps:** —  
**DoD:**
- [ ] AC-G-08: **không** thêm cột media trên grid
- [ ] **Cấm** rewrite Zone A–D shell / route filter

### T-UI-FIELD-01 (extend media)
**layer:** ui · **status:** pending (delta) · **deps:** T-FE-FILE-01  

| uiField | Control | dtoField | Required | Notes |
|---------|---------|----------|----------|-------|
| mediaIds | FileMulti | mediaIds[] | | NEW · max 10 · guid · CSV BE |

**DoD:**
- [ ] control-map ↔ DTO · prior fields KEEP

### T-QA-MEDIA
**layer:** qa · **status:** pending (QA role — **không** làm ở Dev/TL)  
**deps:** T-UI-FORM-MEDIA · T-UI-VIEW-GALLERY · T-UI-COPY-MEDIA · T-BE-FILE-01 · T-FE-FILE-01  
**DoD:**
- [ ] Upload/reject MIME · max 10 · View resign · Copy clone · List no media col · mfeStdUrl · no ERP
- [ ] E2E chỉ `/agent-qa*` khi e2eQa ON

## Deps

```
[prior done] T-CTX/PERM/BE-CRUD/Q/VAL/BFF/FE-API/UI-*route*
T-MIG-MEDIA → T-BE-FILE-01 → T-BFF-FILE-01 → T-FE-FILE-01
T-FE-FILE-01 → T-UI-FORM-MEDIA → T-UI-COPY-MEDIA
T-FE-FILE-01 → T-UI-VIEW-GALLERY
T-FE-FILE-01 → T-UI-FIELD-01 (extend)
T-UI-LIST-01 verify KEEP (parallel)
T-UI-*media + T-BE-FILE → T-QA-MEDIA  (QA role)
```

## Handoff → Dev

| Field | Value |
|-------|-------|
| Next | `/agent-dev` · **chỉ** delta media: T-MIG-MEDIA · T-BE-FILE-01 · T-BFF-FILE-01 · T-FE-FILE-01 · T-UI-FORM-MEDIA · T-UI-VIEW-GALLERY · T-UI-COPY-MEDIA · T-UI-FIELD-01 extend · T-UI-LIST verify |
| `devSlash` | `/agent-dev` — **không** `/erp-feature` · **không** OMS/AI |
| Anti-dup | reuse CRUD/shell/full-page/BFF/files — **cấm** rewrite list · **cấm** patrol-files |
| UI SSOT | `@linm-soft-org/linm-web-common-components` · FileMulti |
| BE SSOT | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol + FileService reuse |
| HARD | `tl-retry-ssot-rereview` · đóng GAP media cùng surface |
| Build | MFE `yarn build` · BE `dotnet build` API+BFF · implement § Build |
| **cấm** | `ERP.*` · jsonb MediaIds · child table P1 · full URL persist · cascade delete files · media cột grid |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-team-lead |
| skillVersion | 2026.08.14.5 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.14.5 |
| rulesVersion | 2026.08.14.9 |
| generatedAt | 2026-09-07T00:55:57.818Z |
| versionGate | rechecked |
| version_mismatch_action | recheck_new |
| dataAnalySkillVersion | 2026.09.05.03 |
| dataAnalyContentHash | sha256:f2761b7dc5b13b1388b9db493b028a10227efd81de142607827c582bc04450b7 |
| poSkillVersion | 2026.08.14.5 |
| designSkillVersion | 2026.08.14.5 |
| saSkillVersion | 2026.08.14.5 |
| contentHashPriorDataAnaly | sha256:f2761b7dc5b13b1388b9db493b028a10227efd81de142607827c582bc04450b7 |
| contentHashPriorPo | sha256:task_54394ae1 |
| contentHashPriorDesign | sha256:task_a57d8389 |
| contentHashPriorSa | sha256:task_8072f549 |
| priorDesign | design.md · task_a57d8389 |
| priorSa | solution-discovery.md · task_8072f549 |
| orchestratorSkillVersion | 2026.08.09.02 |
| orchestratorWorkflowVersion | 2026.08.09.02 |
| taskId | `task_62694861` |

---
<!-- Version meta: skillVersion=2026.08.14.5 · schemaVersion=2 · workflowVersion=2026.08.14.5 · rulesVersion=2026.08.14.9 · versionGate=rechecked -->
