# Team lead — Task — web-rmms-bien-ban

| Field | Value |
|-------|-------|
| feature | `web-rmms-bien-ban` |
| title | Đề nghị lập biên bản — list petitions · create TD/TK · detail · SO07 lead |
| role | `team_lead` · `/agent-team-lead` |
| status | `done` (autoApprove=ON · `team_lead_confirm=approve` · `route_confirm=approve`) |
| packKind | `list` (**phone** list+form ≠ desktop Kind B grid) |
| changeScope | `new_page` |
| formPattern | Mobile list + create TD/TK + detail · phone max-width **430** · LeaveConfirmModal · N/A ERP Modal/Slideout |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-bien-ban` (**route_confirm** autoApprove=ON · khớp STATUS) |
| mfeStdUrl | `http://localhost:9301/web-rmms-bien-ban` |
| productRoute | deep BB-06 → TD-05 / TK-03 (cite peer B–E · **cấm** clone sổ 07 form) |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol · Mobile.Bff `:5202` · **cấm ERP.*** · **cấm invent BienBan*** |
| BFF bind | `mobile-bff/api/v1/**` · catch-all `patrol/*` · **cấm** web-bff client · **cấm** BFF biz |
| DOMAIN-MAP | `web-rmms-bien-ban` → Patrol/`patrol` · CLOSED (SA) |
| demo | **N/A** · Live-only · hash skip |
| contentHash | `sha256:bc9070c4ab20da1960355a727eae18029943c2d95865aebd7d9bcb443ea60cd2` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| updatedAt | `2026-09-26T00:58:00.000Z` |
| taskId | `task_e32d080a` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-bien-ban/ui/prototype/index.html` |
| prior | data_analy·po·design·sa = **confirmed** · compact exist · UNCLEAR×3 CLOSED |

> TL **chia HOW + DoD + T-*** · **cấm** implement product code · **cấm** e2e / yarn build / start:std / Step 4b.  
> Kind B grid / `LinErpListFilterBar` / ui-schema editor = **N/A** (phone list).  
> Entity/migration = **none Mới** · reuse Live `PatrolPetitionEntity` + Schema_PatrolPetition · parent journal/finding Live.  
> Ownership: BB-* only · deep Field TD/TK = peer `web-rmms-mobile-b…e` · SO07 = nav `csdl-bieu-07` only.  
> Cite: T38 · TD-05 §9 · TK-03 · TK-06 (SA).

## route_confirm

| Option | Path | Decision |
|--------|------|----------|
| A (default) | `/web-rmms-bien-ban` | **approve** (autoApprove=ON · khớp STATUS · peerStdUrl · STD-PORT `:9301`) |
| B | Field deep only TD-05/TK-03 (no STD list) | rejected as sole mfeStdRoute · deep BB-06 ok |
| C custom | — | N/A |

`source.routes` = `[/web-rmms-bien-ban]` · draft `mfeStdRoute` giữ nguyên.

## FormType pack adapt (phone list + create + detail)

| Canonical (form-type-task-pack §2a) | Adapt | Reason |
|-------------------------------------|-------|--------|
| T-UI-LIST-01 Kind B `tl-grid-task-template` | → **T-UI-LIST-01** phone cards | DES-GRID N/A · BB-00/01 list petitions |
| T-UI-FILTER-01 `LinErpListFilterBar` | **WAIVE** | phone list search only · **cấm** desktop filter bar |
| T-UI-CFG-01 `LinCatalogUiSchemaEditorModal` | **WAIVE** | no catalog Kind B |
| T-BE-UISCHEMA-01 | **WAIVE** | no ui-schema |
| T-QA-FILTER-01 / T-QA-FILTER-02 | **WAIVE** | no filter-bar DTM |
| T-UI-FORM-01 | **KEEP** | BB-02 TD · BB-03 TK create · BB-04/05 detail RO |
| T-UI-LEAVE-01 | **KEEP** | DES-LEAVE dirty BB-02/03 |
| T-UI-ACT · FIELD · PROD · UX · RESP · HIST | **KEEP** | list-form-quality-gates phone |
| T-UI-LKP-01 | **WAIVE** | no SearchInput catalog · labels LOOKUP_STATIC |
| T-BE-CRUD-01 · T-BE-INIT-01 · T-PERM-01 | **KEEP** | Live petitions + parent PUT · LOOKUP_STATIC |
| T-BE-SCHEMA-01 | **WAIVE** | entity Live · migration skip SA · **cấm invent** |
| T-QA-CRUD-01 · T-QA-FORM-01 | **KEEP** | queued `/agent-qa*` |

**GAP-TL-FORMTYPE-01:** PASS — pack đủ phone list+form + waive có cite.  
**GAP-TL-FILTER-01:** N/A (waive). **GAP-TL-GRID-*-01:** N/A.

## Screens → tasks

| id | Surface | Pattern | FormMode | Actions | Task | devSlash |
|----|---------|---------|----------|---------|------|----------|
| BB-00 | List root / chrome | Full 430 | List | search · empty · create TD/TK | T-UI-LIST-01 | `/agent-dev` |
| BB-01 | Petition cards | List | List | open detail · GET petitions `kind=hanh-lang` | T-UI-LIST-01 · T-UI-FIELD-01 | `/agent-dev` |
| BB-02 | Create Tuần đường | Form | Create | ViolationFlag / `de-nghi-bien-ban` · GPS · POST + parent PUT journal | T-UI-FORM-01 · T-UI-ACT-01 · T-UI-LEAVE-01 | `/agent-dev` |
| BB-03 | Create Tuần kiểm | Form | Create | ViolationAction `lap-bien-ban`\|`de-nghi-vphc` · GPS · POST + parent PUT finding | T-UI-FORM-01 · T-UI-ACT-01 · T-UI-LEAVE-01 | `/agent-dev` |
| BB-04 | Detail petition | Full RO | View | fields RO · leadSo07 | T-UI-FORM-01 · T-UI-ACT-01 | `/agent-dev` |
| BB-05 | Detail media / meta | Full RO | View | files cite · GET{id} | T-UI-FORM-01 · T-UI-FIELD-01 | `/agent-dev` |
| BB-06 | Deep Field entry | Nav | — | → TD-05 / TK-03 peer · **cấm** clone form | T-UI-ACT-01 | `/agent-dev` |
| BB-07 | Optional flagged chips | Chip/Nav | — | secondary → BB-02/03 (LIST-SCOPE P1 petitions primary) | T-UI-LIST-01 · T-UI-ACT-01 | `/agent-dev` |
| DES-LEAVE | LeaveConfirmModal | Modal | — | dirty BB-02/03 · Save=POST+parent · Discard/Stay | T-UI-LEAVE-01 | `/agent-dev` |

## ssot.reuse

| Concern | Reuse | Cấm |
|---------|-------|-----|
| UI | `@linm-soft-org/linm-web-common-components` + mobile kit · `useFormOptions()` / `bienBan.*` | clone Lin* · hardcode VN |
| HTTP | apiClient SSOT · prefix `mobile-bff` · VITE_MOBILE_API_URL `http://localhost:5202/mobile-bff/api/v1` | invent axios · ERP.* · web-bff |
| BE | Live PatrolPetitionEntity · petitions CRUD · journal-lines ViolationFlag · findings ViolationAction · CommonLib `ApiResponse` | invent BienBan* entity/controller · parent `*Json` invent · string ViolationFlag column |
| GPS | `navigator.geolocation` · deny → block nút cần tọa độ · noFace exception | fake GPS · GPS mới trên list/detail |
| Copy | Android/iOS Field BB flow 1-1 where applicable | sửa iOS/Android native · MFE desktop |
| Peer | journal/ket-ca/finding/frequency = `web-rmms-mobile-b…e` · SO07 = `csdl-bieu-07` nav | embed sổ 07 · duplicate peer CRUD · petition ≠ inbox |
| Ownership | BB-* only | deep TD/TK journal/finding CRUD beyond parent flag/action write |

## implement.wire

| From | To | Note |
|------|----|------|
| list/search/empty | `GET mobile-bff/api/v1/patrol/petitions?kind=hanh-lang` | P1 LIST-SCOPE petitions-only |
| btnCreateTd | navigate BB-02 | entryPath=`tuan-duong` |
| btnCreateTk | navigate BB-03 | entryPath=`tuan-kiem` |
| save BB-02 | `POST …/patrol/petitions` + `PUT …/journal-lines/{id}` ViolationFlag=true | UI key `de-nghi-bien-ban` → bool Live (LOOKUP_STATIC) · Code server KN-* |
| save BB-03 | `POST …/patrol/petitions` + `PUT …/findings/{id}` ViolationAction | values `lap-bien-ban` \| `de-nghi-vphc` |
| detail | `GET …/patrol/petitions/{id}` | RO · media via files/* |
| gps | navigator.geolocation | deny block trừ noFace |
| leadSo07 | navigate `csdl-bieu-07` | **cấm** embed · disable+copy nếu Mobile không host |
| BB-06 deep | peer TD-05 / TK-03 | cite T38 · **cấm** open/clone sổ 07 form |
| auth/profile | `GET …/auth/profile` | sender RO where applicable |
| files | `files/*` | media attach cite SA |
| sessions | optional GET sessions | context ca if needed · **cấm** invent |

## implement.state

- Route phone **430** · react-router under `/web-rmms-bien-ban`
- BB-00…BB-07 · DES-LEAVE · empty/loading/error
- Labels: `useFormOptions()` / `bienBan.*` only · UTF-8 VN
- GPS deny block trên create · list/detail không GPS mới
- STD-PORT `:9301` · mfeStdUrl STATUS
- **cấm** ERP.* · invent BienBan* · web-bff · sổ 07 embed
- Prototype cite reviewUrl · modes empty/error/deny-gps as Design

## implement.init_data

| Field | Source | Cấm |
|-------|--------|-----|
| bienBan.* / entryPath / flag / action labels | LOOKUP_STATIC `useFormOptions()` | hardcode VN |
| list rows | GET petitions kind=hanh-lang | demo fake · invent union API |
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
| route / km / content / kind | Text* | POST CreatePatrolPetitionRequest Live | POST required |
| gps / noFace | Action/Checkbox | geolocation | deny block |
| save / cancel | Button | CTA | POST+parent / Leave |
| leadSo07 | Link | csdl-bieu-07 | nav only |
| flagged chips (opt) | Chip/Nav | peer flags | → BB-02/03 |

---

## Tasks

### T-BE-CRUD-01 — Petitions + parent flag/action (Live)
- **role:** Dev · **deps:** none · **status:** pending
- **DoD:** Wire Live `GET|POST|GET{id} mobile-bff/api/v1/patrol/petitions` · `PUT journal-lines` ViolationFlag · `PUT findings` ViolationAction · ApiResponse · **migration none** · **cấm ERP.*** · **cấm invent BienBan*** · Code server KN-* · body CreatePatrolPetitionRequest Live · optional sessions/files/auth per SA
- **skills:** `/agent-dev` · SA solution · DOMAIN-MAP Patrol

### T-BE-INIT-01 — LOOKUP_STATIC labels + flag map
- **role:** Dev · **deps:** none · **status:** pending
- **DoD:** `bienBan.*` / entryPath / action keys từ `useFormOptions()` · UI `de-nghi-bien-ban` → ViolationFlag=true · **cấm** hardcode VN · **cấm** invent init-data endpoint
- **skills:** `tl-dropdown-from-backend` (LOOKUP_STATIC path)

### T-PERM-01 — Auth gate
- **role:** Dev · **deps:** T-BE-CRUD-01 · **status:** pending
- **DoD:** unauth → redirect/shell login cite · auth → BB-* + Live · **cấm** call petitions khi unauth · **cấm** bypass
- **skills:** `/agent-dev`

### T-UI-LIST-01 — Phone list BB-00/01 (+ optional BB-07)
- **role:** Dev · **deps:** T-BE-CRUD-01 · T-BE-INIT-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** BB-00/01 · phone 430 · GET petitions `kind=hanh-lang` · search/empty/loading/error · btnCreateTd/Tk · optional flagged chips nav · UTF-8 VN · **cấm** DES-GRID / LinErpListFilterBar · **cấm** Kind B
- **skills:** `/agent-dev` · `/dev-web-responsive` · prototype reviewUrl
- **ssot.reuse:** common-components mobile kit
- **implement.wire:** GET petitions · nav create/detail
- **implement.state:** route under `/web-rmms-bien-ban`

### T-UI-FORM-01 — Create BB-02/03 + detail BB-04/05
- **role:** Dev · **deps:** T-UI-LIST-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** BB-02 TD ViolationFlag path · BB-03 TK ViolationAction path · required sender/route/km/content/kind · GPS + noFace · POST + parent PUT · detail RO GET{id} · media cite · **cấm** sổ 07 embed · cite T38 / TD-05 §9 / TK-03 / TK-06
- **skills:** `/agent-dev` · list-form-quality-gates

### T-UI-ACT-01 — Action inventory
- **role:** Dev · **deps:** T-UI-FORM-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** mọi nút create/save/cancel/gps/leadSo07/deep BB-06/chips → handler · **cấm** dead button (**GAP-P2-ACT-***) · SO07 disable+copy nếu không host · deep peer routes đúng
- **skills:** `/agent-dev`

### T-UI-LEAVE-01 — LeaveConfirmModal
- **role:** Dev · **deps:** T-UI-FORM-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** dirty BB-02/03 → DES-LEAVE · Save=POST+parent · Discard/Stay · list/detail không Leave thừa · (**GAP-LIST-LEAVE-01** adapted)
- **skills:** `/agent-dev`

### T-UI-FIELD-01 — Field type + DTO map
- **role:** Dev · **deps:** T-UI-FORM-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** bảng field→control→API khớp SA · bool ViolationFlag · string ViolationAction · GPS deny · (**GAP-LIST-FIELD-01**)
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
- **DoD:** network/GPS/validation fail → toast/inline SSOT · **cấm** `alert()` · (**GAP-LIST-HIST-01** adapted)
- **skills:** `/agent-dev`

### T-QA-CRUD-01 — Live API scenarios (queued)
- **role:** QA · **deps:** T-UI-LIST-01 · T-BE-CRUD-01 · **status:** pending
- **DoD:** AC L-01…07 · G-01…03 · X-* API · e2e **chỉ** `/agent-qa*` · **cấm** TL/Dev chạy e2e/start:std
- **skills:** `/agent-qa*`

### T-QA-FORM-01 — Create/detail + Leave + GPS (queued)
- **role:** QA · **deps:** T-UI-FORM-01 · T-UI-LEAVE-01 · **status:** pending
- **DoD:** AC F-01…06 · D-01…02 · GPS deny · SO07 nav · Leave dirty · e2e queued QA only
- **skills:** `/agent-qa*`

---

## Deps graph

```
T-BE-INIT-01 ──┐
T-BE-CRUD-01 ──┼→ T-PERM-01
               └→ T-UI-LIST-01 → T-UI-FORM-01 → T-UI-ACT-01
                                  ├→ T-UI-LEAVE-01
                                  ├→ T-UI-FIELD-01
                                  └→ T-QA-FORM-01
               T-UI-LIST-01 → T-UI-PROD-01 · T-UI-UX-01 → T-UI-RESP-01 · T-UI-HIST-01 · T-QA-CRUD-01
```

## WAIVE summary

| Task | Reason |
|------|--------|
| T-BE-SCHEMA-01 | Live entity · migration skip SA |
| T-UI-FILTER-01 · T-QA-FILTER-* | phone · no LinErpListFilterBar |
| T-UI-CFG-01 · T-BE-UISCHEMA-01 · T-UI-LKP-01 | no Kind B catalog |
| Kind B grid template | packKind list phone cards |

## Handoff

- **next:** `/agent-dev` · **roleOnly stop** (GAP-PKT-ROLE-01)
- **e2eQa:** ON — queued `/agent-qa*` only
- **compact:** `specs/web-rmms-bien-ban/handoff/team_lead-compact.md`
- **autoApprove:** ON · `team_lead_confirm=approve` · `route_confirm=approve`
