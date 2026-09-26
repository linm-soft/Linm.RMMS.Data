# Team lead — Task — web-rmms-mobile-d

| Field | Value |
|-------|-------|
| feature | `web-rmms-mobile-d` |
| title | Đợt D — kết ca / bàn giao / tạm dừng · giao BDTX · phản hồi · sổ kiến nghị |
| role | `team_lead` · `/agent-team-lead` |
| status | `done` (autoApprove=ON · `route_confirm=approve` path `/web-rmms-mobile-d`) |
| packKind | `list` (**phone Field list+form** ≠ desktop Kind B grid) |
| changeScope | `edit_page` |
| formPattern | Full (TD-06 · TK-03 assign · TK-05 feedback · TK-06 list+form) · phone max-width **430** · `LeaveConfirmModal` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-mobile-d` (**route_confirm** autoApprove=ON · giữ path STATUS) |
| mfeStdUrl | `http://localhost:9301/web-rmms-mobile-d` (Dev điền live) |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol + Maintenance WO · Auth · Files · **cấm ERP.*** |
| BFF bind | `mobile-bff/api/v1/patrol/**` · `mobile-bff/api/v1/maintenance/**` · cite peer `web-bff` · API owns |
| demo | **N/A** · wave **D** · out TK-07 (E) · **cấm** fake GPS / mock petitions / inbox=sổ KN |
| contentHash | `sha256:7ea5a5b9a00060f5de09af3b8e3688b39fd566383859a8e73748b9d3885ea034` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| updatedAt | `2026-09-25T09:50:00.000Z` |
| taskId | `task_6f250538` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-d/ui/prototype/index.html` |
| prior | data_analy·po·design·sa = **confirmed** · compact exist · UNCLEAR all CLOSED SA |

> TL **chia HOW + DoD + T-*** · **cấm** implement product code · **cấm** e2e / yarn build / start:std / Step 4b migration ở role này.  
> Kind B grid / `LinErpListFilterBar` / ui-schema editor = **N/A** (PO·Design·SA chốt phone).  
> **HARD:** `Schema_PatrolPetition` + `PatrolPetitionEntity` + session/finding/journal WO cols (migration D) **trước** form TK-06 / wire TD-06 scalar.  
> Note tạm 1 format đến khi cols Live: `D1|handover|{receiver}|{openIds}|{note}` · `D1|pause|{reason}|{note?}` · ket-ca **không** Note tạm.  
> Pause: `IsPaused` trên Status=`Đang tuần` · **cấm** invent Status `Tạm dừng`.  
> Receiver: Text tay + profile prefill · GAP-RECEIVER keep · **cấm** invent roster API.

## route_confirm

| Option | Path | Decision |
|--------|------|----------|
| A (default) | `/web-rmms-mobile-d` | **approve** (autoApprove=ON · khớp STATUS · peerStdUrl) |
| B | `/td-close-d` | rejected |
| C custom | — | N/A |

`source.routes` = `[/web-rmms-mobile-d]` · draft `mfeStdRoute` giữ nguyên · Leave Back→hub A · peer A sessions · B journal · C findings.

## FormType pack adapt (phone list+form · wave D)

| Canonical (form-type-task-pack §2a) | Adapt | Reason |
|-------------------------------------|-------|--------|
| T-UI-LIST-01 Kind B `tl-grid-task-template` | → **T-UI-LIST-01** (phone **List cards**) | DES-GRID N/A · TK-06 petition cards |
| T-UI-FILTER-01 `LinErpListFilterBar` | **WAIVE** | phone · optional Chip/Select `status`·`route` · **cấm** desktop filter bar |
| T-UI-CFG-01 `LinCatalogUiSchemaEditorModal` | **WAIVE** | no catalog Kind B |
| T-BE-UISCHEMA-01 | **WAIVE** | no ui-schema wave D |
| T-QA-FILTER-01 / T-QA-FILTER-02 | **WAIVE** | no filter-bar DTM |
| T-UI-FORM-01 (TD-06) · T-UI-FORM-02 (TK-05) · T-UI-FORM-03 (TK-06 create) · LEAVE · ACT · FIELD · PROD · UX · RESP | **KEEP** | list-form-quality-gates · wave D surfaces |
| T-UI-ACT-02 (TK-03 assignWo) | **KEEP** (action on finding) | POST WO Live · workOrderId |
| T-UI-LKP-01 SearchInput | **WAIVE** | Dropdown LOOKUP only · receiver Text tay |
| T-UI-HIST-01 | **WAIVE** | no history overlay wave D |
| T-BE-SCHEMA-01 · T-BE-CRUD-01 · T-BE-INIT-01 · T-PERM-01 | **KEEP** | petition Mới + migration D · Live WO |
| T-QA-CRUD-01 · T-QA-FORM-01 | **KEEP** (phone flows) | queued `/agent-qa*` |

**GAP-TL-FORMTYPE-01:** PASS — pack đủ phone list+form + TD-06/assign/feedback + waive có cite.  
**GAP-TL-FILTER-01:** N/A (waive). **GAP-TL-GRID-*-01:** N/A.

## Screens → tasks

| id | Surface | Pattern | FormMode | Actions | Task | devSlash |
|----|---------|---------|----------|---------|------|----------|
| TD-06 | Kết ca / bàn giao / tạm dừng | Full 430 | Edit session | Radio actionKind · save | T-UI-FORM-01 | `/agent-dev` |
| TK-03 | Giao BDTX (assign) | Action on finding | Assign | assignWo → WO | T-UI-ACT-02 | `/agent-dev` |
| TK-05 | Phản hồi finding | Full 430 | Feedback | save → cho-kiem-tra | T-UI-FORM-02 | `/agent-dev` |
| TK-06 | Sổ kiến nghị | List cards + create | List/Create | list · create · GPS/noFace | T-UI-LIST-01 · T-UI-FORM-03 | `/agent-dev` |
| DES-LEAVE | Dirty leave | Modal | — | stay·leave | T-UI-LEAVE-01 | `/agent-dev` |

Leave nav: dirty TD-06 / TK-06 create → LeaveConfirm · Back→hub A · Save TD-06 PUT · assign→da-giao · feedback→cho-kiem-tra · petition create→list.

## ssot.reuse

| Concern | Reuse | Cấm |
|---------|-------|-----|
| UI | `@linm-soft-org/linm-web-common-components` + mobile kit · `useFormOptions()` | clone Lin* · hardcode VN labels |
| HTTP | apiClient SSOT · prefix `mobile-bff` | invent axios · ERP.* |
| BE | Patrol · Maintenance WO Live · CommonLib `ApiResponse` · Auth | parent `*Json` · fake GPS · invent WO in Patrol |
| Files | `files/init`→`object`→`commit` · guid only | full URL persist |
| Schema | `Schema_PatrolPetition` + entity pair **trước** TK-06 · session/finding/journal WO cols migration D | form trước schema · mock petitions |
| Parent | `PatrolSession` Live · findings peer C · journal peer B | invent session · inbox=sổ KN |
| Petition code | server `KN-{yyyyMMdd}-{seq:D3}` on POST | client invent code |
| Note tạm | `D1\|` 1 format đến khi cols Live | JSON blob · multi format |

## implement.wire

| From | To | Note |
|------|----|------|
| TD-06 load | `GET …/patrol/sessions/{id}` | no active → chặn (peer A) |
| TD-06 ket-ca | `PUT …/patrol/sessions/{id}` | Status `Hoàn thành` · clear pause |
| TD-06 ban-giao | `PUT …/patrol/sessions/{id}` | Status `Đang tuần` · handover cols / Note `D1\|handover\|…` |
| TD-06 tam-dung | `PUT …/patrol/sessions/{id}` | Status `Đang tuần` · `IsPaused` + `PauseReason` / Note `D1\|pause\|…` |
| open lines | `GET …/journal-lines?sessionId&open` | peer B · handoverOpenIds |
| TK-03 assign | `POST …/maintenance/work-orders` | Live · then PUT finding `workOrderId` + `da-giao` |
| finding WO | `PUT/PATCH …/patrol/findings/{id}` | Schema D · WorkOrderId |
| TK-05 feedback | `POST …/patrol/findings/{id}/feedback` | Mới · → `cho-kiem-tra` |
| TK-06 list | `GET …/patrol/petitions` | Mới · empty OK · **cấm** mock |
| TK-06 create | `POST …/patrol/petitions` | Mới · status `moi` · GPS optional if noFace |
| profile | `GET auth/profile` | senderUnit / receiver prefill |
| Media | files/* | mediaIds guid[] |

## implement.state

- Route shell phone **430** · react-router under `/web-rmms-mobile-d` · entry từ hub A
- GPS: TD-06 **none** · TK-03/05 no HARD · TK-06 deny → block nút cần tọa độ · **no-face** → save w/o coords · **cấm** fake lat/lng
- Dirty → `LeaveConfirmModal` / `useFormLeaveGuard` · **cấm** `window.confirm`/`alert`
- Labels: `useFormOptions()` keys only · actionKind · pauseReason(5) · feedbackQuality · petitionKind
- Petition ≠ notification/inbox · **cấm** LinErpListFilterBar · **cấm** ERP.*

## implement.init_data

| Field | Source | Cấm |
|-------|--------|-----|
| actionKind · pauseReason · feedbackQuality · petitionKind · petition.status | LOOKUP_STATIC `useFormOptions()` | invent init-data · hardcode VN |
| lat/lng/accuracyM · noFace | navigator.geolocation (TK-06) | fake / hardcode |
| code (petition) | server on POST | client invent |
| receiverName | Text tay · optional profile display name | invent roster API |

## Field → control (T-UI-FIELD)

| uiField | controlHint | catalogKind / source | write |
|---------|-------------|----------------------|-------|
| actionKind | Radio | useFormOptions ket-ca/ban-giao/tam-dung | Status / IsPaused |
| handoverNote | TextArea | required if ban-giao | HandoverNote / Note tạm |
| receiverName | Text | Text tay · profile prefill | ReceiverName |
| handoverOpenLineIds | MultiSelect/hidden | GET open journal-lines | HandoverOpenLineIds CSV |
| pauseReason | Dropdown | useFormOptions 5 keys required if tam-dung | PauseReason |
| saveSession | Button | PUT sessions | — |
| assignWo | Button | POST WO Live · finding WO | WorkOrderId · da-giao |
| feedback.qtyDone | Text | required | QtyDone |
| feedback.quality | Dropdown/Radio | dat / chua-dat | Quality |
| feedback.at | DateTime | required | At |
| feedback.mediaIds | FileMulti | files/* | MediaIds CSV |
| feedback.note | TextArea | optional | Note |
| petitionList | List cards | GET petitions | — |
| senderUnit | Text | profile prefill | SenderUnit |
| route | Text | required | Route |
| kmText | Text | required | KmText |
| content | TextArea | required | Content |
| kind | Dropdown | useFormOptions petitionKind | Kind |
| lat/lng · noFace | GPS+Flag | geolocation · no-face OK | Lat/Lng · NoFace |

---

## Tasks

### T-BE-SCHEMA-01 — Schema + entity + migration D (HARD trước form)
- **role:** Dev · **deps:** none · **status:** pending
- **DoD:** `Schema_PatrolPetition` Live · `PatrolPetitionEntity` · table `rmms_patrol_petitions` · migration D: session (`HandoverNote`·`HandoverOpenLineIds`·`ReceiverName`·`PauseReason`·`IsPaused`) · finding (feedback cols + `WorkOrderId`) · journal-line `WorkOrderId` · pair entity↔schema · **cấm** ship TK-06 / scalar TD-06 trước schema · **cấm ERP.*** · Step 4b **Dev only**
- **skills:** `/agent-dev` · SA solution · DOMAIN-MAP Patrol (+ Maintenance cite) · Step 4b (Dev)

### T-BE-CRUD-01 — sessions D · WO link · feedback · petitions API
- **role:** Dev · **deps:** T-BE-SCHEMA-01 · **status:** pending
- **DoD:** `PUT sessions/{id}` (ket-ca/ban-giao/tam-dung + Note `D1|` interim) · `POST maintenance/work-orders` Live + finding `workOrderId`/`da-giao` · `POST findings/{id}/feedback` → `cho-kiem-tra` · `GET/POST petitions` · code `KN-{yyyyMMdd}-{seq:D3}` server-only · empty petition OK · **cấm** mock · ApiResponse · TZ=`tz_required` · XCO=`xco_get_only` · SHARE=`tenant_keep` · **cấm ERP.***
- **skills:** `/agent-dev` · SA solution · DOMAIN-MAP Patrol · Maintenance WO

### T-BE-INIT-01 — LOOKUP_STATIC options
- **role:** Dev · **deps:** none · **status:** pending
- **DoD:** actionKind(3) · pauseReason(5) · feedbackQuality · petitionKind · petition.status từ `useFormOptions()` · **cấm** hardcode VN · **cấm** invent `patrol/init-data` wave D
- **skills:** `tl-dropdown-from-backend` (LOOKUP_STATIC path)

### T-PERM-01 — Permission codes
- **role:** Dev · **deps:** T-BE-CRUD-01 · **status:** pending
- **DoD:** session-close/handover/pause · finding feedback/assign · petition list/create permission codes · RequirePermission trên API · UI hide/disable theo code · cite peer Patrol + Maintenance WO perms
- **skills:** `/agent-dev`

### T-UI-FORM-01 — Session close / handover / pause (TD-06)
- **role:** Dev · **deps:** T-BE-SCHEMA-01 · T-BE-CRUD-01 · T-BE-INIT-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** TD-06 · Radio actionKind · ban-giao→handoverNote+receiver required · tam-dung→pauseReason required · ket-ca→Status Hoàn thành · **no GPS** · Note `D1|` parity đến khi cols Live · S-* AC · phone Full · `dev-form-review-checklist` adapted mobile
- **skills:** `/agent-dev` · `/implement-show-leave-confirm` · form review checklist
- **implement.wire:** GET/PUT sessions/{id} · GET journal-lines open · GET auth/profile
- **implement.init_data:** useFormOptions LOOKUP_STATIC

### T-UI-ACT-02 — Assign WO (TK-03 assign)
- **role:** Dev · **deps:** T-BE-CRUD-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** assignWo trên finding · `POST maintenance/work-orders` Live · set `workOrderId` · status `da-giao` · W-* AC · **cấm** invent WO entity trong Patrol · no new GPS
- **skills:** `/agent-dev`
- **implement.wire:** POST work-orders · PUT/PATCH findings/{id}

### T-UI-FORM-02 — Feedback (TK-05)
- **role:** Dev · **deps:** T-BE-SCHEMA-01 · T-BE-CRUD-01 · T-BE-INIT-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** TK-05 feedback form · body `{ qtyDone, quality, at, mediaIds?, note? }` · → `cho-kiem-tra` · F-* AC · media guid · no HARD GPS
- **skills:** `/agent-dev` · `/implement-show-leave-confirm`
- **implement.wire:** POST findings/{id}/feedback · files/*

### T-UI-LIST-01 — Petition list cards (TK-06)
- **role:** Dev · **deps:** T-BE-CRUD-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** TK-06 list · phone 430 · List cards · L-* empty/data · optional Chip status/route · tap detail · create CTA · **cấm** mock · **cấm** inbox/notification · **cấm** DES-GRID / LinErpListFilterBar · UTF-8 VN
- **skills:** `/agent-dev` · `/dev-web-responsive` · `dev-ui-ux-constitution` · prototype reviewUrl
- **ssot.reuse:** common-components mobile kit
- **implement.wire:** GET petitions
- **implement.state:** route under `/web-rmms-mobile-d`

### T-UI-FORM-03 — Petition create (TK-06)
- **role:** Dev · **deps:** T-BE-SCHEMA-01 · T-BE-CRUD-01 · T-BE-INIT-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** TK-06 create · field map 1:1 · GPS deny blocks nút cần tọa độ · **no-face** save w/o coords · **cấm** fake · P-* AC · Save→list · code server-only
- **skills:** `/agent-dev` · `/implement-show-leave-confirm` · form review checklist
- **implement.wire:** POST petitions · GET auth/profile · geolocation
- **implement.init_data:** useFormOptions LOOKUP_STATIC

### T-UI-ACT-01 — Action inventory work
- **role:** Dev · **deps:** T-UI-FORM-01 · T-UI-ACT-02 · T-UI-FORM-02 · T-UI-LIST-01 · T-UI-FORM-03 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** mọi nút (Lưu TD-06 · assignWo · feedback · tạo KN · list tap · Back · Leave) → handler + FormMode/API · **cấm** dead button (**GAP-P2-ACT-***)
- **skills:** `/agent-dev`

### T-UI-LEAVE-01 — Dirty leave Modal
- **role:** Dev · **deps:** T-UI-FORM-01 · T-UI-FORM-02 · T-UI-FORM-03 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** DES-LEAVE · `LeaveConfirmModal` · dirty TD-06 / TK-06 create · Back→hub A · **cấm** `window.confirm`/`alert`/`prompt` · **/implement-show-leave-confirm**
- **skills:** `/implement-show-leave-confirm`

### T-UI-FIELD-01 — Field type + DTO map
- **role:** Dev · **deps:** T-UI-FORM-01 · T-UI-FORM-02 · T-UI-FORM-03 · T-UI-ACT-02 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** bảng field→control→DTO/API khớp SA · Date UTC · GPS/noFace · FileMulti guid · Dropdown keys · Note `D1|` · (**GAP-LIST-FIELD-01**)
- **skills:** list-form-quality-gates §2

### T-UI-PROD-01 — End-user chrome
- **role:** Dev · **deps:** T-UI-LIST-01 · T-UI-FORM-* · T-UI-ACT-02 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** **cấm** note Dev / GAP / SSOT / stub trên UI · title nghiệp vụ UTF-8 · (**GAP-DEV-DEMO-NOTE-01**)
- **skills:** `demo-to-real-enduser`

### T-UI-UX-01 — UI-Ux constitution (phone)
- **role:** Dev · **deps:** T-UI-LIST-01 · T-UI-FORM-* · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** Principles 1–7 · spacing 4/8/12/16/24/32 · Lin* only · empty/loading/error · phone primary shell 430 · radio/checkbox **20×20** `choiceRow`/`choiceStack` · **cấm** text-field chrome trên radio|checkbox · (**GAP-DEV-UX-01**)
- **skills:** `dev-ui-ux-constitution`

### T-UI-RESP-01 — Responsive web
- **role:** Dev · **deps:** T-UI-UX-01 · **devSlash:** `/dev-web-responsive`
- **status:** pending
- **DoD:** verify **375** (primary) · 768 · 1280 · **không** shrink mù · `/dev-ui-review` · (**GAP-DEV-UX-RESP-***)
- **skills:** `/dev-web-responsive` · `/dev-ui-review`

### T-QA-CRUD-01 — TD-06 · assign · feedback · petition · leave · GPS
- **role:** QA · **deps:** all T-UI-* + T-BE-* · **status:** pending
- **DoD:** scenarios S-* TD-06 · W-* assign · F-* feedback · L-* / P-* petition · schema-before-form · Note `D1|` parity · GPS deny-vs-no-face · Leave Modal · empty petition · **e2e chỉ** `/agent-qa*` (queued)
- **skills:** `/agent-qa`

### T-QA-FORM-01 — Form field ↔ body
- **role:** QA · **deps:** T-QA-CRUD-01 · **status:** pending
- **DoD:** từng field required · UI value = request body · mediaIds guid · pauseReason if tam-dung · handover if ban-giao · noFace omit coords · (**GAP-QA-FORM-FIELD-01**)
- **skills:** `/agent-qa` · `form-field-e2e`

---

## Deps (order)

```
T-BE-SCHEMA-01 ─┬─► T-BE-CRUD-01 ─┬─► T-PERM-01
                │                 ├─► T-UI-LIST-01 ─┬─► T-UI-ACT-01
T-BE-INIT-01 ───┴─► T-UI-FORM-01 ─┤                 │   T-UI-LEAVE-01
                    T-UI-ACT-02 ──┤                 │   T-UI-FIELD-01
                    T-UI-FORM-02 ─┤                 │   T-UI-PROD-01 · T-UI-UX-01 · T-UI-RESP-01
                    T-UI-FORM-03 ─┘                 └─► T-QA-CRUD-01 · T-QA-FORM-01
```

## WAIVE register (Kind B desktop)

| id | status | cite |
|----|--------|------|
| T-UI-LIST-01 Kind B grid | WAIVE→phone cards | SA FormType · DES-GRID N/A |
| T-UI-FILTER-01 | WAIVE | PO/Design phone · Chip/Select optional |
| T-UI-CFG-01 | WAIVE | no catalog editor |
| T-BE-UISCHEMA-01 | WAIVE | no ui-schema D |
| T-UI-LKP-01 | WAIVE | no SearchInput · receiver Text tay |
| T-UI-HIST-01 | WAIVE | no history D |
| T-QA-FILTER-01/02 | WAIVE | no filter-bar |

## Next

- `/agent-dev` · roleOnly stop (**GAP-PKT-ROLE-01**) · e2eQa queued QA  
- **cấm** yarn build / e2e / start:std / Step 4b migration ở team_lead (Dev chạy BE+migration)
