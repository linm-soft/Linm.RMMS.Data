# Team lead — Task — web-rmms-field-reflect

| Field | Value |
|-------|-------|
| feature | `web-rmms-field-reflect` |
| title | Phản ánh hiện trường — pick loại TS · form Hư/Mất/Hỏng · photo-geo · Create Incident |
| role | `team_lead` · `/agent-team-lead` |
| status | `done` (autoApprove=ON · `route_confirm=approve` path `/web-rmms-field-reflect`) |
| packKind | `list` (**phone Field form** ≠ desktop Kind B grid) |
| changeScope | `new_page` |
| formPattern | Mobile full FR-00/01/02 · phone max-width **430** · Android 1-1 · N/A ERP Modal/Slideout · DES-LEAVE dirty form **KEEP** |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-field-reflect` (**route_confirm** autoApprove=ON · giữ path STATUS) |
| mfeStdUrl | `http://localhost:9301/web-rmms-field-reflect` |
| productRoute | `/field/reflect` (cite Design · peer field-reflect) |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Incident+Patrol+Integration+AiVision(+files) · Mobile.Bff `:5202` · **cấm ERP.*** |
| BFF bind | `mobile-bff/api/v1/**` · **cấm** web-bff · **cấm** invent `field-reflect` path |
| DOMAIN-MAP | `web-rmms-field-reflect` → Incident/`incident` (+ cite Patrol · Integration · AiVision) · CLOSED (SA) |
| demo | **N/A** · Live-only · hash skip |
| contentHash | `sha256:e678be9152069e48f353f88e9f4d377e20e4fd4ad5c8d4aa2c86bd995bc1e667` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| updatedAt | `2026-09-26T03:45:00.000Z` |
| taskId | `task_fcf96a88` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field-reflect/ui/prototype/index.html` |
| prior | data_analy·po·design·sa = **confirmed** · compact exist |
| Step4b / migration | **skip** (SA: none · GAP-PGC-BE-01 deferred HasGps only) |
| next | `/agent-dev` · roleOnly stop (GAP-PKT-ROLE-01) · e2eQa queued `/agent-qa*` |

> TL **chia HOW + DoD + T-*** · **cấm** implement product code · **cấm** e2e / yarn build / start:std.  
> Kind B grid / `LinErpListFilterBar` / ui-schema editor = **N/A** (PO·Design·SA chốt phone Field form).  
> Entity/migration / Step 4b = **none** · reuse Incident + Patrol sessions + Integration asset-types + AiVision(+files).  
> Ownership: Field Reflect = **FR-*** only · hub entry = peer `web-rmms-field` · draft deep = peer offline.

## Notes

- changeScope=`new_page` · analy `web-rmms-field-reflect-control-hint.md` + `…-real-data.md` **PASS** → full TL pack.
- HARD: GPS deny → block Create/Detect/geo · sessions **live-only** · checklist **local** → Description · `useFormOptions()` · **cấm** fake coords/ca · **cấm** invent field-reflect API.
- DEC-MEDIA-01: `CreateIncidentRequest.MediaIds` = FileService guids max10 · `DetectionId` opt · `HasGps=true` · no Lat col.
- UNCLEAR: DOMAIN-MAP-REFLECT · MEDIA-01 · PGC · ENTRY · CHK-01 · SESS-01 = **resolved** prior · GAP-PGC-BE-01 deferred.
- Cite W3: **T-W3-10** (TASKS) — map vào T-BE-CRUD / T-UI-FR / T-QA dưới.

## route_confirm

| Option | Path | Decision |
|--------|------|----------|
| A (default) | `/web-rmms-field-reflect` | **approve** (autoApprove=ON · khớp STATUS · peerStdUrl · STD-PORT `:9301`) |
| B | `/field/reflect` only (no web- prefix) | rejected as mfeStdRoute · product `/field/reflect` ok |
| C custom | — | N/A |

`source.routes` = `[/web-rmms-field-reflect]` · draft `mfeStdRoute` giữ nguyên.

## FormType pack adapt (phone Field form)

| Canonical (form-type-task-pack §2a) | Adapt | Reason |
|-------------------------------------|-------|--------|
| T-UI-LIST-01 Kind B `tl-grid-task-template` | → **T-UI-FR-01** | DES-GRID N/A · phone Field form FR-* |
| T-UI-FILTER-01 `LinErpListFilterBar` | **WAIVE** | phone Field form · **cấm** desktop filter bar |
| T-UI-CFG-01 `LinCatalogUiSchemaEditorModal` | **WAIVE** | no catalog Kind B |
| T-BE-UISCHEMA-01 | **WAIVE** | no ui-schema |
| T-QA-FILTER-01 / T-QA-FILTER-02 | **WAIVE** | no filter-bar DTM |
| T-UI-FORM-01 | **KEEP** → **T-UI-FR-01** | Create Incident form FR-01 |
| T-UI-LEAVE-01 | **KEEP** | dirty form leave FR-01 |
| T-UI-LKP-01 | **KEEP** | LookupGrid assetPick FR-00 |
| T-UI-ACT · FIELD · PROD · UX · RESP · HIST | **KEEP** | list-form-quality-gates adapted Field form |
| T-BE-CRUD-01 · T-BE-INIT-01 · T-PERM-01 | **KEEP** | Live sessions · asset-types · uploads/detect · incidents |
| T-QA-CRUD-01 · T-QA-FR-01 | **KEEP** | queued `/agent-qa*` |

**GAP-TL-FORMTYPE-01:** PASS — pack đủ phone Field form + waive có cite.  
**GAP-TL-FILTER-01:** N/A (waive). **GAP-TL-GRID-*-01:** N/A.

## Screens → tasks

| id | Surface | Pattern | FormMode | Actions | Task | devSlash |
|----|---------|---------|----------|---------|------|----------|
| FR-00 | Pick loại tài sản | LookupGrid full 430 | Read | select → FR-01 | T-UI-FR-00 · T-UI-LKP-01 | `/agent-dev` |
| FR-01 | Form phản ánh | Field form full | Create | checklist · PhotoRow→FR-02 · Detect · Create · draft | T-UI-FR-01 · T-UI-FORM/ACT/FIELD/LEAVE | `/agent-dev` |
| FR-02 | Photo-geo overlay | Capture overlay | Create | camera · GPS stamp · commit MediaIds | T-UI-FR-02 · T-UI-ACT-01 | `/agent-dev` |
| — | gpsLock | GPS | — | deny→block Create/Detect | T-UI-FIELD-01 · T-BE-CRUD-01 | `/agent-dev` |
| — | sessionStamp | Text RO | — | GET patrol/sessions live | T-UI-FIELD-01 · T-BE-CRUD-01 | `/agent-dev` |

## ssot.reuse

| Concern | Reuse | Cấm |
|---------|-------|-----|
| UI | `@linm-soft-org/linm-web-common-components` + mobile kit · LookupGrid · Segment · CheckboxGroup · PhotoRow compose · `useFormOptions()` | clone Lin* · hardcode VN |
| HTTP | apiClient SSOT · prefix `mobile-bff` | invent axios · ERP.* · web-bff · invent `/field-reflect*` |
| BE | Incident Create · PatrolSessionsController · Integration asset-types · AiVision uploads/files/detect · CommonLib `ApiResponse` | invent Reflect entity · parent `*Json` · Lat col MIG |
| GPS | browser geolocation · ≤30s freshness Detect · deny block | fake coords · Create without HasGps |
| Media | FileService guids → `MediaIds` max10 · DEC-MEDIA-01 | invent media table · skip commit |
| Copy | Android Field Reflect 1-1 | sửa iOS/Android native |
| Peer | hub entry = `web-rmms-field` tileReflect · draft = offline peer | duplicate hub CRUD |
| Ownership | Reflect owns **FR-*** only | implement Field hub / journal B–E here |

## implement.wire

| From | To | Note |
|------|----|------|
| assetPick | `GET mobile-bff/api/v1/integration/asset-types` | LookupGrid FR-00 |
| sessionStamp | `GET mobile-bff/api/v1/patrol/sessions` | Text RO · live-only · stamp PatrolType |
| photos / FR-02 | `POST …/ai-vision/uploads` · `files/init\|object\|commit` | MediaIds guids |
| detect | `POST …/ai-vision/detect` | GPS age ≤30s · deny→block |
| create | `POST …/incident/incidents` | HasGps=true · MediaIds · Description(+checklist) · DetectionId opt |
| draftOffline | peer offline local queue | **cấm** invent draft API |
| kind / severity / labels | LOOKUP_STATIC `useFormOptions()` | **cấm** hardcode VN |

## implement.state

- Route phone **430** · react-router under `/web-rmms-field-reflect`
- FR-00 → FR-01 → FR-02 overlay · GPS deny block · empty/loading/error
- Labels: `useFormOptions()` keys only · UTF-8 VN
- STD-PORT `:9301` · mfeStdUrl STATUS
- **cấm** fake GPS/ca · **cấm** ERP.* · **cấm** web-bff
- Prototype modes cite: `?form=1` · `?capture=1` · `?deny=1` · `?empty=1` · `?acc=1`

## implement.init_data

| Field | Source | Cấm |
|-------|--------|-----|
| reflect.* / kind / severity labels | LOOKUP_STATIC `useFormOptions()` | hardcode VN string |
| assetPick options | GET integration/asset-types | invent asset catalog |
| sessionStamp / PatrolType | GET patrol/sessions live | itemsOrDemo · fake ca |
| checklist items | local const → fold Description | invent checklist API |
| MediaIds | FileService commit guids | skip commit · fake ids |

## Field → control (T-UI-FIELD)

| uiField | controlHint | catalogKind / source | write |
|---------|-------------|----------------------|-------|
| assetPick | LookupGrid | GET integration/asset-types | → FR-01 |
| kind | Segment | useFormOptions · IncidentType | Create body |
| checklist | CheckboxGroup | local | → Description fold |
| photos | PhotoRow | → FR-02 · MediaIds | Create MediaIds |
| detect | Button | POST ai-vision/detect · GPS≤30 | DetectionId opt |
| sessionStamp | Text RO | GET patrol/sessions | — |
| gpsLock | GPS | browser · deny block | HasGps |
| severity | Select | LOOKUP_STATIC | Create body |
| description | Textarea | copy key + checklist | Create body |
| create | Button | POST incident/incidents | Create |
| draftOffline | Button | peer offline | local queue |

---

## Tasks

### T-BE-CRUD-01 — Live API wire (sessions · asset-types · media · detect · incidents)
- **role:** Dev · **deps:** none · **status:** pending
- **DoD:** Wire Live `GET patrol/sessions` · `GET integration/asset-types` · AiVision `uploads` + `files/init|object|commit` · `POST ai-vision/detect` · `POST incident/incidents` (HasGps · MediaIds max10 · Description+checklist · DetectionId opt) via Mobile.Bff · **migration none** · ApiResponse · **cấm ERP.*** · **cấm** invent Reflect controller/path · **cấm** Lat col MIG (GAP-PGC-BE-01)
- **skills:** `/agent-dev` · SA solution · DOMAIN-MAP Incident
- **cite:** T-W3-10

### T-BE-INIT-01 — LOOKUP_STATIC + checklist local
- **role:** Dev · **deps:** none · **status:** pending
- **DoD:** kind/severity/session/create/detect/draft labels từ `useFormOptions()` · checklist local fold Description · **cấm** hardcode VN · **cấm** invent Reflect init-data / checklist API
- **skills:** `tl-dropdown-from-backend` (LOOKUP_STATIC path)

### T-PERM-01 — Auth gate (Field Reflect)
- **role:** Dev · **deps:** T-BE-CRUD-01 · **status:** pending
- **DoD:** unauth → redirect/shell login cite · auth → FR-* + Live calls · **cấm** call APIs khi unauth · **cấm** bypass GPS deny
- **skills:** `/agent-dev`

### T-UI-FR-00 — Pick loại tài sản (LookupGrid)
- **role:** Dev · **deps:** T-BE-CRUD-01 · T-BE-INIT-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** FR-00 LookupGrid · phone 430 · bind asset-types · select → FR-01 · empty/loading/error · UTF-8 · **cấm** DES-GRID / LinErpListFilterBar · Android 1-1
- **skills:** `/agent-dev` · prototype reviewUrl `?empty=1`
- **ssot.reuse:** LookupGrid mobile kit

### T-UI-FR-01 — Form phản ánh (Create)
- **role:** Dev · **deps:** T-UI-FR-00 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** FR-01 Segment kind · CheckboxGroup · PhotoRow→FR-02 · Detect · sessionStamp · gpsLock · severity · description · Create · draftOffline · GPS deny block Create/Detect · leave dirty · **cấm** fake coords/ca
- **skills:** `/agent-dev` · `/dev-web-responsive` · `dev-ui-ux-constitution` · prototype `?form=1` · `?deny=1`

### T-UI-FR-02 — Photo-geo capture overlay
- **role:** Dev · **deps:** T-UI-FR-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** FR-02 overlay từ PhotoRow · camera + GPS stamp · uploads/files commit → MediaIds · **cấm** Create media without commit · prototype `?capture=1` · `?acc=1`
- **skills:** `/agent-dev` · Design UNCLEAR-PGC resolved

### T-UI-LKP-01 — LookupGrid assetPick
- **role:** Dev · **deps:** T-UI-FR-00 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** Search/select asset-types Live · **cấm** hardcode options · (**GAP-LIST-LKP** adapted)
- **skills:** `/agent-dev`

### T-UI-ACT-01 — Action inventory (detect · create · draft · photo · pick)
- **role:** Dev · **deps:** T-UI-FR-01 · T-UI-FR-02 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** mọi nút → handler · **cấm** dead button (**GAP-P2-ACT-***) · draft → offline peer · Create POST incidents
- **skills:** `/agent-dev`

### T-UI-FIELD-01 — Field type + DTO map
- **role:** Dev · **deps:** T-UI-FR-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** bảng field→control→API khớp SA DEC-MEDIA-01 · GPS · MediaIds · Description fold · (**GAP-LIST-FIELD-01**)
- **skills:** list-form-quality-gates §2

### T-UI-LEAVE-01 — Dirty leave FR-01
- **role:** Dev · **deps:** T-UI-FR-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** dirty form → confirm leave SSOT · **cấm** silent discard without confirm
- **skills:** `/agent-dev`

### T-UI-PROD-01 — End-user Field Reflect
- **role:** Dev · **deps:** T-UI-FR-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** **cấm** note Dev / GAP / SSOT / stub trên UI · title nghiệp vụ UTF-8 · (**GAP-DEV-DEMO-NOTE-01**)
- **skills:** `demo-to-real-enduser`

### T-UI-UX-01 — UI-Ux constitution (phone Field)
- **role:** Dev · **deps:** T-UI-FR-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** Principles 1–7 · spacing 4/8/12/16/24/32 · Lin* only · empty/loading/error · phone primary 430 · (**GAP-DEV-UX-01**)
- **skills:** `dev-ui-ux-constitution`

### T-UI-RESP-01 — Responsive web
- **role:** Dev · **deps:** T-UI-UX-01 · **devSlash:** `/dev-web-responsive`
- **status:** pending
- **DoD:** verify **375** (primary) · 768 · 1280 · **không** shrink mù · `/dev-ui-review` · (**GAP-DEV-UX-RESP-***)
- **skills:** `/dev-web-responsive` · `/dev-ui-review`

### T-UI-HIST-01 — Alert / toast overlay
- **role:** Dev · **deps:** T-UI-FR-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** network/GPS/detect fail → toast/inline SSOT · **cấm** `alert()` · (**GAP-LIST-HIST-01** adapted)
- **skills:** `/agent-dev`

### T-QA-CRUD-01 — Reflect Live API scenarios (queued)
- **role:** QA · **deps:** T-UI-FR-01 · T-BE-CRUD-01 · **status:** pending
- **DoD:** scenarios Create + MediaIds + Detect + GPS deny · **chỉ** `/agent-qa*` chạy e2e · **cấm** team_lead/dev start:std
- **skills:** `/agent-qa*`

### T-QA-FR-01 — FR-00/01/02 surface AC (queued)
- **role:** QA · **deps:** T-UI-FR-00 · T-UI-FR-01 · T-UI-FR-02 · **status:** pending
- **DoD:** AC pick→form→capture→create · deny · empty · **queued** `/agent-qa*`
- **skills:** `/agent-qa*`

---

## STATUS Tasks mirror

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| T-BE-CRUD-01 | Live API wire | dev | — | pending | sessions·asset-types·media·detect·incidents · T-W3-10 |
| T-BE-INIT-01 | LOOKUP_STATIC + checklist | dev | — | pending | useFormOptions · local checklist |
| T-PERM-01 | Auth gate | dev | T-BE-CRUD-01 | pending | unauth block |
| T-UI-FR-00 | Pick asset | dev | T-BE-CRUD-01,T-BE-INIT-01 | pending | LookupGrid FR-00 |
| T-UI-FR-01 | Form Create | dev | T-UI-FR-00 | pending | FR-01 · GPS deny |
| T-UI-FR-02 | Photo-geo | dev | T-UI-FR-01 | pending | FR-02 MediaIds |
| T-UI-LKP-01 | LookupGrid | dev | T-UI-FR-00 | pending | asset-types Live |
| T-UI-ACT-01 | Actions | dev | T-UI-FR-01,T-UI-FR-02 | pending | detect·create·draft |
| T-UI-FIELD-01 | Field↔DTO | dev | T-UI-FR-01 | pending | DEC-MEDIA-01 |
| T-UI-LEAVE-01 | Dirty leave | dev | T-UI-FR-01 | pending | confirm leave |
| T-UI-PROD-01 | End-user | dev | T-UI-FR-01 | pending | no Dev notes |
| T-UI-UX-01 | UX constitution | dev | T-UI-FR-01 | pending | Principles 1–7 |
| T-UI-RESP-01 | Responsive | dev | T-UI-UX-01 | pending | 375/768/1280 |
| T-UI-HIST-01 | Toast/hist | dev | T-UI-FR-01 | pending | no alert() |
| T-QA-CRUD-01 | Live API QA | qa | T-UI-FR-01,T-BE-CRUD-01 | pending | queued /agent-qa* |
| T-QA-FR-01 | Surface AC | qa | T-UI-FR-00…02 | pending | queued /agent-qa* |

## Out of scope (P1)

- Entity/migration / Step 4b / Lat columns (GAP-PGC-BE-01)
- ERP.* · web-bff client · invent `/field-reflect*` BE
- Me*/feedback/cam-view · journal/kết ca/tồn tại/tần suất (B–E)
- Native iOS/Android code edits
- yarn e2e / start:std / build (chỉ Dev/QA đúng slash)

## Handoff

- compact: `specs/web-rmms-field-reflect/handoff/team_lead-compact.md`
- next role: **dev** · artifact `implement/web-rmms-field-reflect.md`
- e2e: queued QA only
