# Team lead — Task — web-rmms-mobile-b

| Field | Value |
|-------|-------|
| feature | `web-rmms-mobile-b` |
| title | Tuần đường đợt B — delta Pattern B · capture · mobileApiBase · align (TD-04 · TD-05) |
| role | `team_lead` · `/agent-team-lead` |
| status | `done` (autoApprove=ON · `route_confirm=approve` path `/web-rmms-mobile-b`) |
| packKind | `list` (**phone Field list+form** ≠ desktop Kind B grid) |
| changeScope | `edit_page` · editTask=`1` · **§ Delta** overlay prior wave B |
| formPattern | Full (TD-04 list · TD-05 create/edit) · phone max-width **430** · `LeaveConfirmModal` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-mobile-b` (**route_confirm** autoApprove=ON · giữ path STATUS · **cấm** new route/tab/icon) |
| mfeStdUrl | `http://localhost:9301/web-rmms-mobile-b` (Dev điền live) |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol + Auth + Files · **cấm ERP.*** |
| BFF bind | `mobileApiBase()` / `VITE_MOBILE_API_URL` **only** · **cấm** web-bff · users forward **nếu thiếu** (cùng pattern road-routes) |
| demo | **N/A** · wave **B delta** · out TD-06 · TK-02…07 · WO/scope đợt D |
| contentHash | `sha256:fe3ccad04e66ee08b65a65aead0fbef9f46328e5c2a3b828b3bee12969bbf72e` |
| skillVersion | `2026.09.19.01` |
| schemaVersion | `1` |
| updatedAt | `2026-09-27T07:20:00.000Z` |
| taskId | `task_5e771d04` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-b/ui/prototype/index.html` |
| deltaCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` · slug B |
| prior | data_analy·po·design·sa = **confirmed** · compact exist · prior T-BE-* / T-UI-* = **done** |

> TL **chia HOW + DoD + T-*** · **cấm** implement product code · **cấm** e2e / yarn build / start:std.  
> Kind B grid / `LinErpListFilterBar` / ui-schema editor = **N/A WAIVE** (PO·Design·SA chốt phone).  
> **Delta HARD:** Pattern B + capture + mobileApiBase + align = **FE only** · **migration=none new** · **no new API/DTO**.

## route_confirm

| Option | Path | Decision |
|--------|------|----------|
| A (default) | `/web-rmms-mobile-b` | **approve** (autoApprove=ON · khớp STATUS · peerStdUrl · **no new URL**) |
| B | `/td-journal-b` | rejected |
| C custom | — | N/A |

`source.routes` = `[/web-rmms-mobile-b]` · draft `mfeStdRoute` giữ nguyên · parent TD-01 → TD-04.

## FormType pack adapt (phone journal · delta overlay)

| Canonical (form-type-task-pack §2a) | Adapt | Reason |
|-------------------------------------|-------|--------|
| T-UI-LIST-01 Kind B `tl-grid-task-template` | → **T-UI-LIST-01** phone cards · **done** prior | DES-GRID N/A |
| T-UI-FILTER-01 `LinErpListFilterBar` | **WAIVE** | phone · sessionId query · **cấm** desktop filter |
| T-UI-CFG-01 / T-BE-UISCHEMA-01 | **WAIVE** | no catalog Kind B |
| T-QA-FILTER-01 / T-QA-FILTER-02 | **WAIVE** | no filter-bar DTM |
| T-UI-LKP-01 SearchInput | **WAIVE** wave B journal | Dropdown LOOKUP_STATIC only (user SearchInput = slug khác SUBMIT) |
| T-UI-HIST-01 | **WAIVE** | no TD-07 B |
| T-UI-FORM-01 · LEAVE · ACT · FIELD · PROD · UX · RESP | **done** prior · **KEEP surface** | list-form-quality-gates |
| T-BE-SCHEMA-01 · CRUD · INIT · PERM | **done** prior · **migration=none new** | SA Live |
| T-QA-CRUD-01 · T-QA-FORM-01 | **pending** delta AC | F-01/02 Pattern B · F-09 · F-10 · align |
| **T-DELTA-PATTERN-B-01** · **CAPTURE-01** · **BFF-01** · **ALIGN-01** | **pending** | SUBMIT-VALIDATE § Delta |

**GAP-TL-FORMTYPE-01:** PASS — prior pack done + delta T-* đủ · waive có cite.  
**GAP-TL-FILTER-01:** N/A (waive). **GAP-TL-GRID-*-01:** N/A. **GAP-TL-LEAVE-01:** prior T-UI-LEAVE-01 done · delta **cấm** reintroduce `alert`/`confirm`.  
**GAP-TL-DEV-ASSIGN-01:** PASS — `devSlash` per task.

## Screens → tasks

| id | Surface | Pattern | FormMode | Actions | Task | devSlash |
|----|---------|---------|----------|---------|------|----------|
| TD-04 | Sổ dòng nhật ký | Full 430 | — | cards·tap KEEP | prior LIST done | `/agent-dev` |
| TD-05 | Dòng nhật ký | Full 430 | Create/Edit | Pattern B Lưu · capture · banner | T-DELTA-PATTERN-B-01 · CAPTURE-01 | `/agent-dev` |
| banner | validationAttempted | zone | — | string[] GPS/narrative | T-DELTA-PATTERN-B-01 | `/agent-dev` |
| DES-LEAVE | Dirty leave | Modal | — | stay·leave KEEP | prior LEAVE done | `/implement-show-leave-confirm` |
| shell | phone align | 430 | — | no new tab/route/icon | T-DELTA-ALIGN-01 | `/align-mobile-to-mfe` |
| transport | API base | — | — | mobileApiBase only | T-DELTA-BFF-01 | `/agent-dev` |

Leave nav KEEP: TD-04↔TD-05 · Back→TD-01 · Save→TD-04.

## ssot.reuse

| Concern | Reuse | Cấm |
|---------|-------|-----|
| UI | `@linm-soft-org/linm-web-common-components` + mobile kit · `useFormOptions()` | clone Lin* · hardcode VN labels · fork package for capture |
| HTTP | apiClient SSOT · **`mobileApiBase()` / `VITE_MOBILE_API_URL`** | invent axios · **web-bff** · ERP.* |
| BE | Patrol Live journal-lines · ApiResponse · Auth | new endpoint/DTO · parent `*Json` · fake GPS |
| Files | `files/init`→`object`→`commit` · guid only | full URL persist |
| Schema | Live `Schema_PatrolJournalLine` | new migration |
| Validation | Pattern B (SUBMIT-VALIDATE · erp-form-context 3-validation) | `disabled=!canSave` · `alert.warning` thay banner |

## implement.wire

| From | To | Note |
|------|----|------|
| TD-04 list | `GET …/sessions/{id}/journal-lines` | KEEP · via mobileApiBase |
| TD-05 create/edit | `POST/PUT …/journal-lines` · `GET …/{id}` | KEEP · no new API |
| Parent | `GET …/sessions/{id}` | direction default Note |
| Profile | `GET …/auth/profile` | userName RO |
| Media | files/* | mediaIds guid[] · capture=environment |
| Users (nếu thiếu) | `GET …/integration/users` | BFF forward only · **cấm** invent |

## implement.state

- Route shell phone **430** · **cấm** new tab/route/icon · react-router under `/web-rmms-mobile-b`
- Pattern B: Lưu **always enabled** trừ `saving`/`hydrating` · on-click → `validationAttempted` · banner `string[]` + inline · **cấm** `disabled=!canSave` · **cấm** `alert.warning` thay banner
- GPS deny: báo **on submit** (banner) · **cấm** khóa nút trước
- capture: `LinImageUpload` / `<input accept="image/*">` → `capture="environment"` · **cấm** fork package (UNCLEAR-CAPTURE-PROP → Dev resolve prop vs local input)
- Labels: `useFormOptions()` / existing keys · UNCLEAR-BANNER-KEYS → prefer existing · **cấm** hardcode VN mới
- kmText tay KEEP (UNCLEAR-LRS)
- Transport: **chỉ** `mobileApiBase()` · **cấm** web-bff hardcode

## implement.init_data

| Field | Source | Cấm |
|-------|--------|-----|
| direction · weather · kind · status | LOOKUP_STATIC `useFormOptions()` | invent init-data · hardcode VN |
| banner GPS/narrative keys | existing useFormOptions keys | invent new VN strings |
| userName | auth/profile | editable |
| lat/lng/accuracyM | navigator.geolocation | fake / hardcode |

## Field → control (delta touch)

| uiField | controlHint | delta | write |
|---------|-------------|-------|-------|
| save | Button | Pattern B · disable **only** saving/hydrating | — |
| validationBanner | Banner | zone banner · string[] on-click | — |
| lat/lng/accuracyM | GPS | fail → banner+inline on submit · **cấm** pre-disable Lưu | Lat/Lng/AccuracyM |
| narrative | TextArea | required · on-submit banner+inline | Narrative |
| mediaIds | FileMulti | **capture=environment** | guid[] |

---

## Tasks — prior wave (done · do not reopen)

| id | status | notes |
|----|--------|-------|
| T-BE-SCHEMA-01 · T-BE-CRUD-01 · T-BE-INIT-01 · T-PERM-01 | **done** | Live · migration none new |
| T-UI-LIST-01 · T-UI-FORM-01 · T-UI-ACT-01 · T-UI-LEAVE-01 · T-UI-FIELD-01 · T-UI-PROD-01 · T-UI-UX-01 · T-UI-RESP-01 | **done** | phone TD-04/05 |

---

## Tasks — delta (this AutocodeTask)

### T-DELTA-PATTERN-B-01 — JournalFormPage Pattern B submit
- **role:** Dev · **deps:** prior T-UI-FORM-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** TD-05 · Lưu **always on** except `saving`/`hydrating` · **cấm** `disabled={!canSave}` / required/GPS/ảnh lock · first click → `validationAttempted` · banner `string[]` (GPS + narrative + …) + collapse/close + inline + scroll first error · API 4xx/5xx/network → **toast** (**cấm** banner for API) · **cấm** `alert.warning` thay banner · cite SUBMIT-VALIDATE · F-01/F-02/F-03
- **skills:** `/agent-dev` · erp-form-context Pattern B · prototype reviewUrl zone banner
- **ssot.reuse:** useFormOptions message keys
- **implement.wire:** existing POST/PUT journal-lines only
- **UNCLEAR:** UNCLEAR-BANNER-KEYS → prefer existing keys

### T-DELTA-CAPTURE-01 — mediaIds capture=environment
- **role:** Dev · **deps:** prior T-UI-FORM-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** mediaIds FileMulti / camera input → `capture="environment"` · **cấm** fork `@linm-soft-org/*` · nếu `LinImageUpload` thiếu prop → local `<input capture="environment">` hoặc prop đã forward · F-09 · photo-already-camera KEEP
- **skills:** `/agent-dev`
- **UNCLEAR:** UNCLEAR-CAPTURE-PROP → Dev resolve

### T-DELTA-BFF-01 — mobileApiBase transport + users forward nếu thiếu
- **role:** Dev · **deps:** none · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** mọi patrol/auth/files call TD-04/05 qua `mobileApiBase()` / `VITE_MOBILE_API_URL` · **cấm** web-bff · **cấm** invent axios · nếu thiếu users list cho picker khác slug → forward `integration/users` trên Mobile.Bff (pattern road-routes) · **cấm** endpoint mới WebService · F-10 · road-routes/search KEEP
- **skills:** `/agent-dev` · SA solution BFF gate
- **implement.wire:** mobileApiBase → Mobile.Bff `:5202` → WebService

### T-DELTA-ALIGN-01 — align phone shell 430
- **role:** Dev · **deps:** T-DELTA-PATTERN-B-01 · T-DELTA-CAPTURE-01 · **devSlash:** `/align-mobile-to-mfe`
- **status:** pending
- **DoD:** `/align-mobile-to-mfe` · phone **430** · **cấm** new tab/route/icon · **cấm** android/ios proto · TD-04/05 chrome khớp prototype · UTF-8 VN
- **skills:** `/align-mobile-to-mfe` · `/dev-web-responsive`

### T-QA-CRUD-01 — List · Pattern B · leave · GPS (delta AC)
- **role:** QA · **deps:** all T-DELTA-* · **status:** pending
- **DoD:** L-01…L-06 KEEP · F-01/02 Pattern B · F-03 save gate · F-04 API · F-09 capture · F-10 mobileApiBase · F-11 Leave Modal · align 430 · **e2e chỉ** `/agent-qa*` (queued)
- **skills:** `/agent-qa`

### T-QA-FORM-01 — Form field ↔ body + banner keys
- **role:** QA · **deps:** T-QA-CRUD-01 · **status:** pending
- **DoD:** required fields · UI value = request body · mediaIds guid · GPS deny on-submit banner · capture attr present · (**GAP-QA-FORM-FIELD-01**)
- **skills:** `/agent-qa` · `form-field-e2e`

---

## Deps (order)

```
prior T-BE-* / T-UI-* = done
T-DELTA-BFF-01 ─────────────────────────────┐
T-DELTA-PATTERN-B-01 ─┬─► T-DELTA-ALIGN-01 ─┼─► T-QA-CRUD-01 · T-QA-FORM-01
T-DELTA-CAPTURE-01 ───┘                     │
```

## WAIVE register (Kind B desktop)

| id | status | cite |
|----|--------|------|
| T-UI-LIST-01 Kind B grid | WAIVE→phone cards | SA FormType · DES-GRID N/A |
| T-UI-FILTER-01 | WAIVE | PO/Design phone · sessionId query |
| T-UI-CFG-01 | WAIVE | no catalog editor |
| T-BE-UISCHEMA-01 | WAIVE | no ui-schema B |
| T-UI-LKP-01 | WAIVE | no SearchInput journal B |
| T-UI-HIST-01 | WAIVE | no TD-07 B |
| T-QA-FILTER-01/02 | WAIVE | no filter-bar |
| T-UI-RPT-* | WAIVE | Report N/A · no Excel |

## Next

- `/agent-dev` · roleOnly stop (**GAP-PKT-ROLE-01**) · e2eQa queued QA  
- **cấm** yarn build / e2e / start:std / Step 4b / migration ở team_lead
