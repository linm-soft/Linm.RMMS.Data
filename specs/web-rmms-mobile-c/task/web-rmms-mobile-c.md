# Team lead — Task — web-rmms-mobile-c

| Field | Value |
|-------|-------|
| feature | `web-rmms-mobile-c` |
| title | Tuần kiểm đợt C — delta Pattern B · capture · mobileApiBase · align (TK-02…05) |
| role | `team_lead` · `/agent-team-lead` |
| status | `done` (autoApprove=ON · `route_confirm=approve` path `/phat-hien`) |
| packKind | `list` (**phone Field list+form** ≠ desktop Kind B grid) |
| changeScope | `edit_page` · editTask=`1` · **§ Delta** overlay prior CRUD wave C |
| formPattern | Full (TK-02 list · TK-03 form · TK-04 review · TK-05 detail+recheck) · phone max-width **430** · `LeaveConfirmModal` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/phat-hien` (**route_confirm** autoApprove=ON · khớp STATUS · **cấm** new route/tab/icon) |
| mfeStdUrl | `http://localhost:9301/phat-hien` (Dev điền live) |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol + Auth + Files · **cấm ERP.*** |
| BFF bind | `mobileApiBase()` / `VITE_MOBILE_API_URL` **only** · **cấm** web-bff · users forward **nếu thiếu** (GAP-DA-MOB-C-BFF-USERS-01) |
| demo | **N/A** · wave **C delta** · out TK-06/07 · WO assign · feedback CRUD D |
| contentHash | `sha256:4a38b53861c732cbbde7208c21d766f1b8b2c8decc007d2dc24ea34a4793339c` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| updatedAt | `2026-09-27T08:25:00.000Z` |
| taskId | `task_da228f5b` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-c/ui/prototype/index.html` |
| deltaCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` · Pattern B |
| prior | data_analy·po·design·sa = **confirmed** · compact exist · prior T-BE-* / T-UI-* = **done** |

> TL **chia HOW + DoD + T-*** · **cấm** implement product code · **cấm** e2e / yarn build / start:std.  
> Kind B grid / `LinErpListFilterBar` / ui-schema editor = **N/A WAIVE** (PO·Design·SA chốt phone).  
> **Delta HARD:** Pattern B + capture + mobileApiBase + align = **FE only** · **migration=none** · **no new schema/API/DTO** · KEEP API-01…05 Live.

## route_confirm

| Option | Path | Decision |
|--------|------|----------|
| A (default) | `/phat-hien` | **approve** (autoApprove=ON · khớp STATUS · peerStdUrl · **no new URL**) |
| B | `/web-rmms-mobile-c` | rejected (legacy alias — STATUS đã `/phat-hien`) |
| C custom | — | N/A |

`source.routes` = `[/phat-hien]` · draft `mfeStdRoute` giữ nguyên · Leave Back→hub A · peer journal B.

## FormType pack adapt (phone findings · delta overlay)

| Canonical (form-type-task-pack §2a) | Adapt | Reason |
|-------------------------------------|-------|--------|
| T-UI-LIST-01 Kind B `tl-grid-task-template` | → **T-UI-LIST-01** phone cards · **done** prior | DES-GRID N/A |
| T-UI-FILTER-01 `LinErpListFilterBar` | **WAIVE** | phone · Chip/Select · **cấm** desktop filter |
| T-UI-CFG-01 / T-BE-UISCHEMA-01 | **WAIVE** | no catalog Kind B |
| T-QA-FILTER-01 / T-QA-FILTER-02 | **WAIVE** | no filter-bar DTM |
| T-UI-LKP-01 SearchInput | **WAIVE** | Dropdown LOOKUP only |
| T-UI-HIST-01 | **WAIVE** | no history C |
| T-UI-FORM-01 · FORM-02 · FORM-03 · LEAVE · ACT · FIELD · PROD · UX · RESP | **done** prior · **KEEP surface** | list-form-quality-gates |
| T-BE-SCHEMA-01 · CRUD · INIT · PERM | **done** prior · **migration=none** | SA Live KEEP API-01…05 |
| T-QA-CRUD-01 · T-QA-FORM-01 | **pending** delta AC | PB-01…10 · supersede F-01/K-01 gate |
| **T-DELTA-PATTERN-B-01** · **CAPTURE-01** · **BFF-01** · **ALIGN-01** | **pending** | SUBMIT-VALIDATE § Delta |

**GAP-TL-FORMTYPE-01:** PASS — prior pack done + delta T-* đủ · waive có cite.  
**GAP-TL-FILTER-01:** N/A (waive). **GAP-TL-GRID-*-01:** N/A. **GAP-TL-LEAVE-01:** prior T-UI-LEAVE-01 done · delta **cấm** reintroduce `alert`/`confirm`.  
**GAP-TL-DEV-ASSIGN-01:** PASS — `devSlash` per task.

## Screens → tasks

| id | Surface | Pattern | FormMode | Actions | Task | devSlash |
|----|---------|---------|----------|---------|------|----------|
| TK-02 | Danh mục phiếu | Full 430 | — | cards·filter·tap KEEP | prior LIST done | `/agent-dev` |
| TK-03 | Lập/sửa phiếu | Full 430 | Create/Edit | Pattern B Lưu · capture · banner | T-DELTA-PATTERN-B-01 · CAPTURE-01 | `/agent-dev` |
| TK-04 | Đối chiếu journal | Full 430 | Review | Pattern B Lưu · lech note on click | T-DELTA-PATTERN-B-01 | `/agent-dev` |
| TK-05 | Chi tiết + recheck | Full 430 | Recheck | Pattern B confirm · capture · banner | T-DELTA-PATTERN-B-01 · CAPTURE-01 | `/agent-dev` |
| banner | validationAttempted | zone | — | string[] GPS/required | T-DELTA-PATTERN-B-01 | `/agent-dev` |
| DES-LEAVE | Dirty leave | Modal | — | stay·leave KEEP | prior LEAVE done | `/implement-show-leave-confirm` |
| shell | phone align | 430 | — | no new tab/route/icon | T-DELTA-ALIGN-01 | `/align-mobile-to-mfe` |
| transport | API base | — | — | mobileApiBase · users forward | T-DELTA-BFF-01 | `/agent-dev` |

Leave nav KEEP: TK-02↔03/05 · TK-04→03 prefill · Back→hub A · Save TK-03→TK-05.

## ssot.reuse

| Concern | Reuse | Cấm |
|---------|-------|-----|
| UI | `@linm-soft-org/linm-web-common-components` + mobile kit · `useFormOptions()` | clone Lin* · hardcode VN · fork package for capture |
| HTTP | apiClient SSOT · **`mobileApiBase()` / `VITE_MOBILE_API_URL`** | invent axios · **web-bff** · ERP.* |
| BE | Patrol Live findings/recheck/review · ApiResponse · Auth | new endpoint/DTO · fake GPS · schema reopen |
| Files | `files/init`→`object`→`commit` · guid only | full URL persist |
| Schema | Live `Schema_PatrolFinding` · journal review cols | new migration |
| Validation | Pattern B (SUBMIT-VALIDATE · erp-form-context 3-validation) | `disabled=!canSave/!canConfirm/!feedbackQty` · `alert.warning` thay banner |

## implement.wire

| From | To | Note |
|------|----|------|
| TK-02 list | `GET …/findings?sessionId&status&route` | KEEP · via mobileApiBase |
| TK-03 create/edit | `POST …/findings` · `GET …/{id}` | KEEP · no new API |
| TK-05 recheck | `POST …/findings/{id}/recheck` | KEEP · Pattern B confirm |
| TK-04 review | `PUT …/journal-lines/{id}/review` | KEEP · lech note on click |
| Peer | sessions · journal-lines · files · road-routes | KEEP |
| Feedback (if Live) | POST feedback | Pattern B only · **cấm** CRUD D expand |
| Users (nếu thiếu) | BFF forward users | GAP-DA-MOB-C-BFF-USERS-01 · **cấm** invent WebService |

## implement.state

- Route shell phone **430** · **cấm** new tab/route/icon · react-router under `/phat-hien`
- Pattern B: submit **always enabled** trừ `saving`/`hydrating` · on-click → `validationAttempted` · banner `string[]` + inline · **cấm** `disabled=!canSave/!canConfirm/!feedbackQty` · **cấm** `alert.warning` thay banner
- GPS deny: báo **on submit** (banner) · **cấm** khóa nút trước · BE 422 hard KEEP
- capture: TK-03/05 `LinImageUpload` / `<input accept="image/*">` → `capture="environment"` · **cấm** fork package (UNCLEAR-CAPTURE-PROP → Dev)
- Feedback: Pattern B only if Live · UNCLEAR-FEEDBACK-SCOPE soft · **cấm** CRUD D
- Labels: `useFormOptions()` keys · **cấm** hardcode VN mới
- Transport: **chỉ** `mobileApiBase()` · **cấm** web-bff hardcode

## implement.init_data

| Field | Source | Cấm |
|-------|--------|-----|
| source · findingKind · side · hangMuc · scope · recheckResult | LOOKUP_STATIC `useFormOptions()` / PO slugs | invent init-data · hardcode VN |
| banner GPS/required keys | existing useFormOptions keys | invent new VN strings |
| lat/lng/accuracyM | navigator.geolocation (TK-03/05) · journal (TK-04) | fake / hardcode |

## Field → control (delta touch)

| uiField | controlHint | delta | write |
|---------|-------------|-------|-------|
| saveFinding | Button | Pattern B · disable **only** saving/hydrating | POST findings |
| reviewSave | Button | Pattern B · lech note on click | PUT review |
| submitFeedback | Button | Pattern B if Live · no CRUD D | POST feedback? |
| confirmDone | Button | Pattern B · was canConfirm | POST recheck |
| validationBanner | Banner | zone banner · string[] on-click | — |
| lat/lng/accuracyM | GPS | fail → banner on submit · **cấm** pre-disable CTA | Lat/Lng/AccuracyM |
| mediaIds | FileMulti | **capture=environment** TK-03/05 | guid[] |

---

## Tasks — prior wave (done · do not reopen)

| id | status | notes |
|----|--------|-------|
| T-BE-SCHEMA-01 · T-BE-CRUD-01 · T-BE-INIT-01 · T-PERM-01 | **done** | Live · migration none new · API-01…05 KEEP |
| T-UI-LIST-01 · T-UI-FORM-01 · T-UI-FORM-02 · T-UI-FORM-03 · T-UI-ACT-01 · T-UI-LEAVE-01 · T-UI-FIELD-01 · T-UI-PROD-01 · T-UI-UX-01 · T-UI-RESP-01 | **done** | phone TK-02…05 |

---

## Tasks — delta (this AutocodeTask)

### T-DELTA-PATTERN-B-01 — FindingForm · JournalReview · FindingDetail Pattern B
- **role:** Dev · **deps:** prior T-UI-FORM-01 · FORM-02 · FORM-03 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** TK-03 `saveFinding` · TK-04 `reviewSave` · TK-05 `confirmDone` (+ `submitFeedback` if Live) **always on** except `saving`/`hydrating` · **cấm** `disabled={!canSave}` / `!canConfirm` / `!feedbackQty` · first click → `validationAttempted` · banner `string[]` (GPS + required + lech note) + collapse/close + inline + scroll first error · API 4xx/5xx/network → **toast** (**cấm** banner for API) · **cấm** `alert.warning` thay banner · supersede F-01/K-01 gate-disable · cite SUBMIT-VALIDATE · PB-01…10 · R-01 lech note on click
- **skills:** `/agent-dev` · erp-form-context Pattern B · prototype reviewUrl zone banner
- **ssot.reuse:** useFormOptions message keys
- **implement.wire:** existing POST findings · PUT review · POST recheck · feedback if Live
- **UNCLEAR:** UNCLEAR-FEEDBACK-SCOPE → Pattern B only, no CRUD D

### T-DELTA-CAPTURE-01 — mediaIds capture=environment TK-03/05
- **role:** Dev · **deps:** prior T-UI-FORM-01 · FORM-03 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** mediaIds FileMulti / camera input TK-03/05 → `capture="environment"` · **cấm** fork `@linm-soft-org/*` · nếu `LinImageUpload` thiếu prop → local `<input capture="environment">` hoặc prop đã forward · PB capture AC
- **skills:** `/agent-dev`
- **UNCLEAR:** UNCLEAR-CAPTURE-PROP → Dev resolve

### T-DELTA-BFF-01 — mobileApiBase transport + users forward nếu thiếu
- **role:** Dev · **deps:** none · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** mọi patrol/auth/files call TK-02…05 qua `mobileApiBase()` / `VITE_MOBILE_API_URL` · **cấm** web-bff · **cấm** invent axios · nếu thiếu users → forward trên Mobile.Bff (GAP-DA-MOB-C-BFF-USERS-01 · pattern road-routes) · **cấm** endpoint mới WebService · **cấm** ERP.*
- **skills:** `/agent-dev` · SA solution BFF gate
- **implement.wire:** mobileApiBase → Mobile.Bff → WebService

### T-DELTA-ALIGN-01 — align phone shell 430
- **role:** Dev · **deps:** T-DELTA-PATTERN-B-01 · T-DELTA-CAPTURE-01 · **devSlash:** `/align-mobile-to-mfe`
- **status:** pending
- **DoD:** `/align-mobile-to-mfe` · phone **430** · **cấm** new tab/route/icon · **cấm** android/ios proto · TK-02…05 chrome khớp prototype · route `/phat-hien` · UTF-8 VN
- **skills:** `/align-mobile-to-mfe` · `/dev-web-responsive`

### T-QA-CRUD-01 — List · Pattern B · leave · GPS · review · recheck (delta AC)
- **role:** QA · **deps:** all T-DELTA-* · **status:** pending
- **DoD:** L-01…L-07 KEEP · F-02…F-08 KEEP · R-01…R-03 · K-02…K-04 · PB-01…10 · capture · mobileApiBase · Leave Modal · align 430 · **e2e chỉ** `/agent-qa*` (queued)
- **skills:** `/agent-qa`

### T-QA-FORM-01 — Form field ↔ body + banner keys
- **role:** QA · **deps:** T-QA-CRUD-01 · **status:** pending
- **DoD:** required fields · UI value = request body · mediaIds guid · GPS deny on-submit banner · capture attr present · lech note on click · (**GAP-QA-FORM-FIELD-01**)
- **skills:** `/agent-qa` · `form-field-e2e`

---

## Deps (order)

```
prior T-BE-* / T-UI-* = done (do not reopen)
T-DELTA-PATTERN-B-01 ─┬─► T-DELTA-ALIGN-01 ─┬─► T-QA-CRUD-01 · T-QA-FORM-01
T-DELTA-CAPTURE-01 ───┘                      │
T-DELTA-BFF-01 (parallel) ───────────────────┘
```

## WAIVE register (Kind B desktop)

| id | status | cite |
|----|--------|------|
| T-UI-LIST-01 Kind B grid | WAIVE→phone cards · done prior | SA FormType · DES-GRID N/A |
| T-UI-FILTER-01 | WAIVE | PO/Design phone · Chip/Select |
| T-UI-CFG-01 | WAIVE | no catalog editor |
| T-BE-UISCHEMA-01 | WAIVE | no ui-schema C |
| T-UI-LKP-01 | WAIVE | no SearchInput C |
| T-UI-HIST-01 | WAIVE | no history C |
| T-QA-FILTER-01/02 | WAIVE | no filter-bar |
| T-BE-SCHEMA / migration | **done prior · none new** | SA · no Step 4b this wave |

## Next

- `/agent-dev` · roleOnly stop (**GAP-PKT-ROLE-01**) · e2eQa queued QA  
- **cấm** yarn build / e2e / start:std / Step 4b / migration ở team_lead
