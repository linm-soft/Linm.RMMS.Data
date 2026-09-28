# Team lead — Task — web-rmms-bien-ban

| Field | Value |
|-------|-------|
| feature | `web-rmms-bien-ban` |
| title | Đề nghị lập biên bản — edit_page · Pattern B · SearchInput road-routes · GPS deny-on-submit |
| role | `team_lead` · `/agent-team-lead` |
| status | `done` (autoApprove=ON · `team_lead_confirm=approve` · `route_confirm=approve`) |
| packKind | `list` (**phone** list+form ≠ desktop Kind B grid) |
| changeScope | `edit_page` |
| formPattern | Mobile list + create TD/TK + detail · phone max-width **430** · Pattern B · LeaveConfirmModal · N/A ERP Modal/Slideout |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/bien-ban` (**route_confirm** autoApprove=ON · khớp STATUS · STD-ROUTE CLOSED) |
| mfeStdUrl | `http://localhost:9301/bien-ban` |
| productRoute | deep BB-06 → TD-05 / TK-03 (cite peer · **cấm** clone sổ 07 form) |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol · Mobile.Bff `:5202` · **cấm ERP.*** · **cấm invent BienBan*** |
| BFF bind | `mobile-bff/api/v1/**` · catch-all `patrol/*` · **cấm** web-bff client · **cấm** BFF biz |
| DOMAIN-MAP | `web-rmms-bien-ban` → Patrol/`patrol` · CLOSED (SA) |
| demo | **N/A** · Live-only · hash skip · **cấm** rescan |
| contentHash | `sha256:3f196a65ee5bc6578aa8d96f9c08a6e0d0ca3fb263399e7a8d3fe3863da26b0e` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| updatedAt | `2026-09-27T16:12:00.000Z` |
| taskId | `task_151bec53` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-bien-ban/ui/prototype/index.html` |
| deltaCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` |
| prior | data_analy·po·design·sa = **confirmed** · compact exist · UNCLEAR soft chốt PO |

> TL **chia HOW + DoD + T-*** · **cấm** implement product code · **cấm** e2e / yarn build / start:std / Step 4b.  
> Kind B grid / `LinErpListFilterBar` / ui-schema editor = **N/A** (phone list).  
> Entity/migration = **none Mới** · reuse Live `PatrolPetitionEntity` + Schema_PatrolPetition · parent journal/finding Live.  
> Ownership: BB-* only · deep Field TD/TK = peer · SO07 = nav `csdl-bieu-07` only.  
> Delta HARD (edit_page): Pattern B Lưu luôn bật · GPS deny-on-submit · SearchInput road-routes · no SEED · miss=`--` · capture=environment · **cấm** Excel.

## route_confirm

| Option | Path | Decision |
|--------|------|----------|
| A (default) | `/bien-ban` | **approve** (autoApprove=ON · khớp STATUS · peerStdUrl · STD-PORT `:9301` · SA CLOSED) |
| B | `/web-rmms-bien-ban` (prior new_page) | **reject** — superseded by STD-ROUTE CLOSED `/bien-ban` |
| C | Field deep only TD-05/TK-03 (no STD list) | rejected as sole mfeStdRoute · deep BB-06 ok |

`source.routes` = `[/bien-ban]` · draft `mfeStdRoute` = `/bien-ban`.

## FormType pack adapt (phone list + create + detail · edit_page)

| Canonical (form-type-task-pack §2a) | Adapt | Reason |
|-------------------------------------|-------|--------|
| T-UI-LIST-01 Kind B `tl-grid-task-template` | → **T-UI-LIST-01** phone cards | DES-GRID N/A · BB-00/01 list petitions |
| T-UI-FILTER-01 `LinErpListFilterBar` | **WAIVE** | phone list search only · **cấm** desktop filter bar · **cấm** Excel |
| T-UI-CFG-01 `LinCatalogUiSchemaEditorModal` | **WAIVE** | no catalog Kind B |
| T-BE-UISCHEMA-01 | **WAIVE** | no ui-schema |
| T-QA-FILTER-01 / T-QA-FILTER-02 | **WAIVE** | no filter-bar DTM |
| T-UI-FORM-01 | **KEEP** | BB-02 TD · BB-03 TK · BB-04/05 detail · **Pattern B** |
| T-UI-LEAVE-01 | **KEEP** | DES-LEAVE dirty BB-02/03 · LeaveConfirmModal · **cấm** native alert/confirm |
| T-UI-ACT · FIELD · PROD · UX · RESP · HIST | **KEEP** | list-form-quality-gates phone |
| T-UI-LKP-01 | **KEEP** (road-route) | SearchInput → `GET road-routes/search` · **cấm** SEED · miss=`--` · **không** catalog Kind B |
| T-BE-CRUD-01 · T-BE-INIT-01 · T-PERM-01 | **KEEP** | Live petitions + parent PUT · LOOKUP_STATIC · road-routes |
| T-BE-SCHEMA-01 | **WAIVE** | entity Live · migration skip SA · **cấm invent** |
| T-QA-CRUD-01 · T-QA-FORM-01 | **KEEP** | queued `/agent-qa*` |

**GAP-TL-FORMTYPE-01:** PASS — pack đủ phone list+form + Pattern B delta + SearchInput LKP + waive có cite.  
**GAP-TL-FILTER-01:** N/A (waive). **GAP-TL-GRID-*-01:** N/A.

## Screens → tasks

| id | Surface | Pattern | FormMode | Actions | Task | devSlash |
|----|---------|---------|----------|---------|------|----------|
| BB-00 | List root / chrome | Full 430 | List | search · empty · create TD/TK | T-UI-LIST-01 | `/agent-dev` |
| BB-01 | Petition cards | List | List | open detail · GET petitions `kind=hanh-lang` | T-UI-LIST-01 · T-UI-FIELD-01 | `/agent-dev` |
| BB-02 | Create Tuần đường | Form | Create | ViolationFlag · SearchInput route · Pattern B · GPS deny-on-submit · POST + parent PUT journal | T-UI-FORM-01 · T-UI-LKP-01 · T-UI-ACT-01 · T-UI-LEAVE-01 | `/agent-dev` |
| BB-03 | Create Tuần kiểm | Form | Create | ViolationAction · SearchInput route · Pattern B · GPS deny-on-submit · POST + parent PUT finding | T-UI-FORM-01 · T-UI-LKP-01 · T-UI-ACT-01 · T-UI-LEAVE-01 | `/agent-dev` |
| BB-04 | Detail petition | Full RO | View | fields RO · leadSo07 | T-UI-FORM-01 · T-UI-ACT-01 | `/agent-dev` |
| BB-05 | Detail media / meta | Full RO | View | files cite · GET{id} · capture=environment nếu ảnh | T-UI-FORM-01 · T-UI-FIELD-01 | `/agent-dev` |
| BB-06 | Deep Field entry | Nav | — | → TD-05 / TK-03 peer · **cấm** clone form | T-UI-ACT-01 | `/agent-dev` |
| BB-07 | Optional flagged chips | Chip/Nav | — | secondary → BB-02/03 (LIST-SCOPE P1 petitions primary) | T-UI-LIST-01 · T-UI-ACT-01 | `/agent-dev` |
| DES-LEAVE | LeaveConfirmModal | Modal | — | dirty BB-02/03 · Save=POST+parent · Discard/Stay | T-UI-LEAVE-01 | `/agent-dev` |

## ssot.reuse

| Concern | Reuse | Cấm |
|---------|-------|-----|
| UI | `@linm-soft-org/linm-web-common-components` + mobile kit · `useFormOptions()` / `bienBan.*` · SearchInput | clone Lin* · hardcode VN · SEED route |
| HTTP | apiClient SSOT · prefix `mobile-bff` · VITE_MOBILE_API_URL `http://localhost:5202/mobile-bff/api/v1` | invent axios · ERP.* · web-bff |
| BE | Live PatrolPetitionEntity · petitions CRUD · journal-lines ViolationFlag · findings ViolationAction · road-routes/search · CommonLib `ApiResponse` | invent BienBan* · parent `*Json` invent · string ViolationFlag column |
| GPS | `navigator.geolocation` · **deny-on-submit** (Pattern B) · noFace exception | fake GPS · deny chỉ gắn nút GPS · GPS mới trên list/detail |
| Validate | Pattern B · Lưu luôn bật · banner+inline · **cấm** `disabled={!canSave}` | disable Save theo canSave |
| Copy | Android/iOS Field BB flow 1-1 where applicable | sửa iOS/Android native · MFE desktop · Excel export |
| Peer | journal/ket-ca/finding/frequency = peer mobile · SO07 = `csdl-bieu-07` nav | embed sổ 07 · duplicate peer CRUD |
| Ownership | BB-* only | deep TD/TK CRUD beyond parent flag/action write |

## implement.wire

| From | To | Note |
|------|----|------|
| list/search/empty | `GET mobile-bff/api/v1/patrol/petitions?kind=hanh-lang` | P1 LIST-SCOPE petitions-only |
| btnCreateTd | navigate BB-02 | entryPath=`tuan-duong` |
| btnCreateTk | navigate BB-03 | entryPath=`tuan-kiem` |
| route SearchInput | `GET …/patrol/road-routes/search?q=` | **cấm** SEED · miss display=`--` |
| save BB-02 | `POST …/patrol/petitions` + `PUT …/journal-lines/{id}` ViolationFlag=true | UI `de-nghi-bien-ban` → bool · Pattern B · GPS deny-on-submit |
| save BB-03 | `POST …/patrol/petitions` + `PUT …/findings/{id}` ViolationAction | `lap-bien-ban` \| `de-nghi-vphc` · Pattern B · GPS deny-on-submit |
| detail | `GET …/patrol/petitions/{id}` | RO · media via files/* · capture=environment |
| gps | navigator.geolocation | deny → block **submit** (trừ noFace) · Lưu luôn enabled |
| leadSo07 | navigate `csdl-bieu-07` | **cấm** embed · disable+copy nếu Mobile không host |
| BB-06 deep | peer TD-05 / TK-03 | **cấm** open/clone sổ 07 form |
| auth/profile | `GET …/auth/profile` | sender RO where applicable |
| files | `files/*` | media attach · capture=environment |
| sessions | optional GET sessions | context ca if needed · **cấm** invent |

## implement.state

- Route phone **430** · react-router under `/bien-ban` · children `/moi` · `/:id`
- BB-00…BB-07 · DES-LEAVE · empty/loading/error
- Labels: `useFormOptions()` / `bienBan.*` only · UTF-8 VN
- Pattern B: Save always on · banner+inline · **cấm** `disabled={!canSave}` · only `saving` disables
- GPS deny-on-submit trên create · list/detail không GPS mới
- SearchInput road-routes · no SEED · miss=`--`
- capture=environment nếu có ảnh · **cấm** Excel
- STD-PORT `:9301` · mfeStdUrl STATUS
- **cấm** ERP.* · invent BienBan* · web-bff · sổ 07 embed
- Prototype cite reviewUrl · modes empty/error/deny-gps as Design

## implement.init_data

| Field | Source | Cấm |
|-------|--------|-----|
| bienBan.* / entryPath / flag / action labels | LOOKUP_STATIC `useFormOptions()` | hardcode VN |
| list rows | GET petitions kind=hanh-lang | demo fake · invent union API |
| route options | `GET road-routes/search` | SEED / hardcode route list |
| ViolationFlag map | UI `de-nghi-bien-ban` → bool true | invent string column |
| ViolationAction | Live string keys | invent enum BE |
| sender/user | auth/profile | invent user DTO |

## Field → control (T-UI-FIELD)

| uiField | controlHint | catalogKind / source | write |
|---------|-------------|----------------------|-------|
| list/search/empty | List/Search/Empty | GET petitions | — |
| btnCreateTd / btnCreateTk | Button/Nav | useFormOptions | → BB-02/03 |
| entryPath | Radio/RO | tuan-duong \| tuan-kiem | form mode |
| tdFlag | Button/Radio | ViolationFlag / de-nghi-bien-ban | PUT journal-lines |
| tkAction | Button/Radio | ViolationAction keys | PUT findings |
| sender | Text RO | auth/profile | — |
| route | **SearchInput** | `road-routes/search` · miss=`--` | POST body |
| km / content / kind | Text* | CreatePatrolPetitionRequest Live | POST required · Pattern B |
| gps / noFace | Action/Checkbox | geolocation · deny-on-submit | — |
| save / cancel | Button | CTA Pattern B | POST+parent / Leave · Save always on |
| leadSo07 | Link | csdl-bieu-07 | nav only |
| flagged chips (opt) | Chip/Nav | peer flags | → BB-02/03 |

---

## Tasks

### T-BE-CRUD-01 — Petitions + parent flag/action + road-routes (Live)
- **role:** Dev · **deps:** none · **status:** pending
- **DoD:** Wire Live `GET|POST|GET{id} mobile-bff/api/v1/patrol/petitions` · `PUT journal-lines` ViolationFlag · `PUT findings` ViolationAction · `GET road-routes/search` · ApiResponse · **migration none** · **cấm ERP.*** · **cấm invent BienBan*** · Code server KN-* · body CreatePatrolPetitionRequest Live · optional sessions/files/auth per SA
- **skills:** `/agent-dev` · SA solution · DOMAIN-MAP Patrol

### T-BE-INIT-01 — LOOKUP_STATIC labels + flag map
- **role:** Dev · **deps:** none · **status:** pending
- **DoD:** `bienBan.*` / entryPath / action keys từ `useFormOptions()` · UI `de-nghi-bien-ban` → ViolationFlag=true · **cấm** hardcode VN · **cấm** invent init-data endpoint · **cấm** SEED route
- **skills:** `tl-dropdown-from-backend` (LOOKUP_STATIC path)

### T-PERM-01 — Auth gate
- **role:** Dev · **deps:** T-BE-CRUD-01 · **status:** pending
- **DoD:** unauth → redirect/shell login cite · auth → BB-* + Live · **cấm** call petitions khi unauth · **cấm** bypass
- **skills:** `/agent-dev`

### T-UI-LIST-01 — Phone list BB-00/01 (+ optional BB-07)
- **role:** Dev · **deps:** T-BE-CRUD-01 · T-BE-INIT-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** BB-00/01 · phone 430 · GET petitions `kind=hanh-lang` · search/empty/loading/error · btnCreateTd/Tk · optional flagged chips nav · UTF-8 VN · **cấm** DES-GRID / LinErpListFilterBar · **cấm** Kind B · **cấm** Excel
- **skills:** `/agent-dev` · `/dev-web-responsive` · prototype reviewUrl
- **ssot.reuse:** common-components mobile kit
- **implement.wire:** GET petitions · nav create/detail
- **implement.state:** route under `/bien-ban`

### T-UI-LKP-01 — SearchInput road-routes (edit_page delta)
- **role:** Dev · **deps:** T-BE-CRUD-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** BB-02/03 field route = SearchInput · `GET …/patrol/road-routes/search` · **cấm** SEED / hardcode list · miss display=`--` · **không** Kind B catalog editor
- **skills:** `/agent-dev` · control-hint SearchInput

### T-UI-FORM-01 — Create BB-02/03 + detail BB-04/05 · Pattern B
- **role:** Dev · **deps:** T-UI-LIST-01 · T-UI-LKP-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** BB-02 TD ViolationFlag · BB-03 TK ViolationAction · required sender/route/km/content/kind · **Pattern B** Lưu luôn bật · banner+inline · **cấm** `disabled={!canSave}` · GPS **deny-on-submit** + noFace · POST + parent PUT · detail RO GET{id} · media capture=environment · **cấm** sổ 07 embed · cite T38 / TD-05 §9 / TK-03 / TK-06 · delta SUBMIT-VALIDATE
- **skills:** `/agent-dev` · list-form-quality-gates

### T-UI-ACT-01 — Action inventory
- **role:** Dev · **deps:** T-UI-FORM-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** mọi nút create/save/cancel/gps/leadSo07/deep BB-06/chips → handler · **cấm** dead button (**GAP-P2-ACT-***) · SO07 disable+copy nếu không host · deep peer routes đúng · Save luôn enabled trừ `saving`
- **skills:** `/agent-dev`

### T-UI-LEAVE-01 — LeaveConfirmModal
- **role:** Dev · **deps:** T-UI-FORM-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** dirty BB-02/03 → DES-LEAVE · Save=POST+parent (sau Pattern B validate + GPS gate) · Discard/Stay · list/detail không Leave thừa · **cấm** native `alert`/`confirm` · (**GAP-LIST-LEAVE-01** adapted)
- **skills:** `/agent-dev`

### T-UI-FIELD-01 — Field type + DTO map
- **role:** Dev · **deps:** T-UI-FORM-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** bảng field→control→API khớp SA · SearchInput route · bool ViolationFlag · string ViolationAction · GPS deny-on-submit · Pattern B banner · (**GAP-LIST-FIELD-01**)
- **skills:** list-form-quality-gates §2

### T-UI-PROD-01 — End-user surface
- **role:** Dev · **deps:** T-UI-LIST-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** **cấm** note Dev / GAP / SSOT / stub trên UI · title nghiệp vụ UTF-8 · (**GAP-DEV-DEMO-NOTE-01**)
- **skills:** `demo-to-real-enduser`

### T-UI-UX-01 — UI-Ux constitution (phone)
- **role:** Dev · **deps:** T-UI-LIST-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** Principles 1–7 · spacing 4/8/12/16/24/32 · Lin* only · empty/loading/error · phone primary 430 · (**GAP-DEV-UX-01**)
- **skills:** `dev-ui-ux-constitution`

### T-UI-RESP-01 — Responsive web
- **role:** Dev · **deps:** T-UI-UX-01 · **devSlash:** `/dev-web-responsive`
- **status:** pending
- **DoD:** verify **375** (primary) · 768 · 1280 · **không** shrink mù · `/dev-ui-review` · (**GAP-DEV-UX-RESP-***)
- **skills:** `/dev-web-responsive` · `/dev-ui-review`

### T-UI-HIST-01 — Alert / toast overlay
- **role:** Dev · **deps:** T-UI-LIST-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** network/GPS/validation fail → toast/inline SSOT · Pattern B banner · **cấm** `alert()` · (**GAP-LIST-HIST-01** adapted)
- **skills:** `/agent-dev`

### T-QA-CRUD-01 — Live API scenarios (queued)
- **role:** QA · **deps:** T-UI-LIST-01 · T-BE-CRUD-01 · **status:** pending
- **DoD:** AC L-01…07 · G-01…03 · X-* API · road-routes search · e2e **chỉ** `/agent-qa*` · **cấm** TL/Dev chạy e2e/start:std
- **skills:** `/agent-qa*`

### T-QA-FORM-01 — Create/detail + Leave + Pattern B + GPS (queued)
- **role:** QA · **deps:** T-UI-FORM-01 · T-UI-LEAVE-01 · T-UI-LKP-01 · **status:** pending
- **DoD:** AC F-01…06 · D-01…02 · Pattern B Save always on · GPS deny-on-submit · SearchInput miss=`--` · SO07 nav · Leave dirty · capture=environment · e2e queued QA only
- **skills:** `/agent-qa*`

---

## Deps graph

```
T-BE-INIT-01 ──┐
T-BE-CRUD-01 ──┼→ T-PERM-01
               ├→ T-UI-LKP-01 ─┐
               └→ T-UI-LIST-01 ┴→ T-UI-FORM-01 → T-UI-ACT-01
                                  ├→ T-UI-LEAVE-01
                                  ├→ T-UI-FIELD-01
                                  └→ T-QA-FORM-01
               T-UI-LIST-01 → T-UI-PROD-01 · T-UI-UX-01 → T-UI-RESP-01 · T-UI-HIST-01 · T-QA-CRUD-01
```

## WAIVE summary

| Task | Reason |
|------|--------|
| T-BE-SCHEMA-01 | Live entity · migration skip SA |
| T-UI-FILTER-01 · T-QA-FILTER-* | phone · no LinErpListFilterBar · cấm Excel |
| T-UI-CFG-01 · T-BE-UISCHEMA-01 | no Kind B catalog |
| Kind B grid template | packKind list phone cards |
| T-UI-LKP-01 Kind B catalog | **không waive toàn bộ** — KEEP SearchInput road-routes only |

## Handoff

- **next:** `/agent-dev` · **roleOnly stop** (GAP-PKT-ROLE-01)
- **e2eQa:** ON — queued `/agent-qa*` only
- **compact:** `specs/web-rmms-bien-ban/handoff/team_lead-compact.md`
- **autoApprove:** ON · `team_lead_confirm=approve` · `route_confirm=approve` · `/bien-ban`
