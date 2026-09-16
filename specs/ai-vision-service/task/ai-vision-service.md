# Team lead — Task — ai-vision-service

| | |
|--|--|
| Feature | `ai-vision-service` |
| Title | Vision stack Wave 2–4 · BFF retarget · hard cutover · HITL upload · peer Kind B lists |
| Role | `team_lead` |
| Status | **done** |
| packKind | `ai` |
| changeScope | `edit_page` |
| lane | `web` only · mobile defer |
| skillVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.12.2` |
| contentHash | `sha256:90961d05e9d8c5fb4be3e151dc476d18c4c65e093aa0d9151d2a86ba6962702f` |
| taskId | `task_48454408` |
| writtenAt | `2026-09-12T14:45:00.000Z` |
| stackSkill | `/implement-ai-vision-stack` |
| route_confirm | **approve** (autoApprove) · locked **`/ai-vision-service`** (peerStdUrl SSOT · A) · B `/nv/pt-ai` not chosen |

## Meta

- **MFE:** `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.AiVision`
- **Host Master:** `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Master`
- **Vision API:** `D:/AI-QLBD/Linm.RMMS.Vision` · `:5311`
- **BFF / WebService:** `D:/AI-QLBD/Linm.RMMS.WebService` · proxy `api/v1/ai-vision/**`
- **Cấm:** `ERP.*` · invent `ai-vision-service/*` · MFE→`:5311` direct · `:5301` after cutover · TrafficAI scaffold · yarn run-implement-mobile
- **Chrome:** `GAP-AI-DETECT-CHROME` · SSOT `agent-dev-ai-detect/example/ai-chrome-skip.md` — **0** badge AI/P1/P2/score header
- **FormPattern consumer:** Full page · `data-form-cols="5"` · tabs:none · map:none
- **Gates:** TZ=`tz_required` · XCO=`xco_get_only` · SHARE=`share_tenant`
- **Cutover:** hard after BFF smoke (Q-AVS-02)
- **reviewUrl:** `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/ai-vision-service/ui/prototype/ai-vision-service-stack-hub.html`
- **peerStdUrl / mfeStdRoute draft:** `http://localhost:9301/ai-vision-service` · path `/ai-vision-service`
- **source.routes:** `/ai-vision-service` (+ peer AiVision list/form routes existing)

## Screens → devSlash

| id | Surface | Pattern | FormMode | Actions | devSlash |
|----|---------|---------|----------|---------|----------|
| S-HOST | Stack hub | Full | — | wave status | `/agent-dev` |
| S-BFF-WEB | BFF retarget | config | — | proxy Vision | `/create-bff-api-feature` |
| S-CUTOVER | Hard cutover | ops | — | out `:5301` SSOT | `/agent-dev` |
| S-LIST-AIV/AAD/ITS/ANPR/PRED/EST | Peer grids | Full Kind B | — | CRUD+config+filter | `/agent-dev` |
| S-FORM-AIV | Detection form | Full 5-col | C/E/V | save,cancel | `/agent-dev` |
| S-DETECT | Detect run | Full | — | upload,detect | `/agent-dev-ai-detect` |
| S-UPLOAD | Uploads init→PUT→complete | Full | — | file | `/agent-dev-ai-detect` |
| S-HITL | Confirm/Dismiss | Full/Modal | HITL | confirm,dismiss | `/agent-dev-ai-detect` |
| S-LEAVE | LeaveConfirmModal | Modal | — | stay,leave | `/agent-dev` + `/agent-dev-ai-detect` |

## Deps (order)

```
T-BFF-01 → T-CUTOVER-01 → T-HITL-UPLOAD-01
T-BE-CRUD-01 → T-BE-UISCHEMA-01 → T-BE-INIT-01 → T-PERM-01
T-CTX-FILTER-01 → T-UI-FILTER-01 → T-UI-LIST-01 → T-UI-CFG-01 → T-UI-FORM-01 → T-UI-ACT-01 → T-UI-LEAVE-01
T-HITL-UPLOAD-01 → T-UI-AI-01 → T-UI-AI-FORM-01
T-UI-* → T-UI-UX-01 → T-UI-RESP-01 → T-UI-HIST-01
QA after Dev PASS: T-QA-AI-01 · T-QA-FILTER-01 · T-QA-FILTER-02 · T-QA-FORM-01 · T-QA-CRUD-01
```

---

## Wave / BFF tasks

### T-BFF-01 — Web BFF retarget → Vision `:5311`

**status:** pending  
**wave:** 2  
**devSlash:** `/create-bff-api-feature`  
**skills:** `/create-bff-api-feature` · DOMAIN-MAP · `/implement-ai-vision-stack` wave2  
**ssot.reuse:** BFF proxy only · prefix `web-bff/api/v1/ai-vision/**` → Vision `:5311` · **cấm** invent routes · **cấm** MFE HTTP→5311  
**implement.wire:** retarget `{WebBff}` AiVision handlers → Vision host; keep path `api/v1/ai-vision/**` (detections · detect · candidates · uploads · peers)  
**DoD:**
- [ ] Proxy smoke PASS (list + detect-assets Draft)
- [ ] DOMAIN-MAP updated if needed · **cấm** ERP.*
- [ ] No direct browser→`:5311`

### T-CUTOVER-01 — Hard cutover out WebService `:5301` SSOT

**status:** pending  
**wave:** 3  
**deps:** T-BFF-01 PASS  
**devSlash:** `/agent-dev`  
**skills:** solution-discovery cutover · `GAP-VIS-CUTOVER-01`  
**implement.wire:** remove/disable Linm.AI.WebService `:5301` as SSOT for ai-vision; traffic only via BFF→Vision  
**DoD:**
- [ ] Hard cutover after BFF smoke (PO Q-AVS-02)
- [ ] FE/BFF **0** calls to `:5301` for ai-vision
- [ ] Health/regression peer lists still via BFF

### T-HITL-UPLOAD-01 — Uploads + FileService HITL frame

**status:** pending  
**wave:** 4  
**deps:** T-BFF-01  
**devSlash:** `/agent-dev-ai-detect`  
**skills:** `/agent-dev-ai-detect` · uploads init→PUT→complete · `GAP-VIS-UPLOAD-01`  
**ssot.reuse:** Vision uploads API · FileService · **cấm** mock://  
**DoD:**
- [ ] init → PUT → complete works · Draft persist
- [ ] HITL can attach `uploadId`/`fileId`
- [ ] 422 on mock:// preserved

### T-BE-AI-01 — Infer + persist + HITL API (Vision)

**status:** pending  
**deps:** Wave1 done (Schema_RmmsVision)  
**devSlash:** `/agent-dev-ai-detect` (+ BE Vision)  
**implement.wire:** API-01…09 from SA · detect · pci · candidates confirm/dismiss · **cấm** Azure SDK in domain  
**DoD:** FormMode↔API PASS · taxonomy `TRAFFIC_SIGN`≠`GANTRY_SIGN`

### T-BE-CRUD-01 — Peer list CRUD via BFF

**status:** pending  
**devSlash:** `/agent-dev`  
**deps:** T-BFF-01  
**implement.wire:** list/search/page · getById · create · update · delete · history for S-LIST-*  
**DoD:** each FormMode hits SA-mapped endpoint

### T-BE-UISCHEMA-01 — Catalog ui-schema

**status:** pending  
**devSlash:** `/agent-dev`  
**ssot.reuse:** `CatalogUiSchemaRegistry` + seed `{catalogKind}` · GET/PUT `/integration/catalogs/{kind}/ui-schema`  
**DoD:** Sửa config = full cột editor

### T-BE-INIT-01 — init-data / LOOKUP_STATIC

**status:** pending  
**devSlash:** `/agent-dev`  
**ssot.reuse:** `tl-dropdown-from-backend` · classCode/status/routeId from init-data only  
**DoD:** **0** `KIND_LABEL` hardcode FE — **GAP-DEV-DROPDOWN-HARDCODE-01**

### T-PERM-01 — Permissions

**status:** pending  
**devSlash:** `/agent-dev`  
**DoD:** codes for infer/HITL + list/form CRUD · wired Auth

---

## UI — Kind B lists (`/agent-dev`)

### T-CTX-FILTER-01 — Filter-bar context (prereq)

**status:** pending  
**devSlash:** `/filter-bar-context`  
**skills:** `/filter-bar-context` · `/erp-filter-form` · `filter-bar-pipeline`  
**implement:** create `docs/context/features/ai-vision-service-filter-bar.md` (fields 1:1 peer lists) **trước** T-UI-FILTER Write  
**DoD:** context file exists · slots match Design DES-LIST-*

### T-UI-LIST-01 — Peer Kind B grids

**status:** pending  
**devSlash:** `/agent-dev`  
**skills:** `tl-grid-task-template` · `tl-grid-full-flow` · `tl-list-shell-height` · `ai-chrome-skip`  
**ssot.reuse:** Lin\* grid/pager · `buildDynamicGridColumns` · `LinCatalogUiSchemaEditorModal` · **cấm** clone ERP grid · **cấm** leftover `const columns` · **cấm** header AI/P1/P2/score  
**implement.wire:** S-LIST-AIV/AAD/ITS/ANPR/PRED/EST · toolbar FULL · row menu · config  
**DoD:**
- [ ] Live title+toolbar+grid/empty · **GAP-P2-LAYOUT-06** không DEFER
- [ ] CRUD actions work (T-UI-ACT)
- [ ] 0 badge chrome

### T-UI-FILTER-01 — List filter bar

**status:** pending  
**deps:** T-CTX-FILTER-01  
**devSlash:** `/agent-dev`  
**skills (REQUIRED load trước Write):**
  - /filter-bar-context · /erp-filter-form · filter-bar-pipeline · filter-bar-layout-hard
  - context: `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/ai-vision-service-filter-bar.md`
**ssot.reuse:**
  ui_filter: LinErpListFilterBar · fragment leading · data-lin-list-layout="erp-filter-bar"
  ui_layout: title trái · field lấp hàng rồi wrap · 🔍 mép phải (V10) · GAP-FILTER-WRAP-02
  init_data: Select từ GET …/init-data only
**implement.filter:**
  bar: LinErpListFilterBar · onSearch trên bar
  cấm: ErpListHeaderFilters · LinListFilterField · export/print trên bar · SearchTextInput-only · grid 3 cột hàng loạt
**DoD:**
- [ ] Context 1:1 · V1–V5 **+ V10** PASS
- [ ] Search/filter query work
- [ ] `rg` 0 ErpListHeaderFilters / LinListFilterField on page

### T-UI-CFG-01 — Config full cột

**status:** pending  
**devSlash:** `/agent-dev`  
**DoD:** `LinCatalogUiSchemaEditorModal` · **cấm** Zone F-only / `configHint` (**GAP-P2-CC-06**)

### T-UI-FORM-01 — Detection Full page form

**status:** pending  
**devSlash:** `/agent-dev`  
**skills:** `dev-form-review-checklist` · `form-field-grid.md`  
**ssot.reuse:** Full page **5 cột** `data-form-cols="5"` + header chrome · **cấm** footer Lưu Slideout pattern  
**Inventory:** uploadId/fileId FileUpload · classCode Dropdown · status Dropdown · score Number (form only) · routeId SearchInput · engine hidden  
**DoD:** Create/Edit/View/(Copy) · review.form PASS · **GAP-P2-FORM-GRID-05**

### T-UI-ACT-01 — Action inventory

**status:** pending  
**devSlash:** `/agent-dev`  
**DoD:** mọi Search/Tạo/Sửa/Xem/Copy/Xóa/History → handler + FormMode (**GAP-P2-ACT-***)

### T-UI-LEAVE-01 — LeaveConfirmModal

**status:** pending  
**devSlash:** `/agent-dev` (+ ai-detect surfaces)  
**skills:** `/implement-show-leave-confirm`  
**DoD:** dirty → `LeaveConfirmModal` · full `useFormLeaveGuard` / slideout `useLeaveConfirm` · **cấm** `window.confirm`/`alert` · **GAP-TL-LEAVE-01** / **GAP-DEV-LEAVE-01**

### T-UI-LKP-01 · T-UI-FIELD-01 · T-UI-PROD-01

**status:** pending  
**devSlash:** `/agent-dev`  
**DoD:** SearchInput lookups · field↔DTO · **cấm** note Dev end-user (`demo-to-real-enduser`)

### T-UI-UX-01 — UI-Ux constitution

**status:** pending  
**devSlash:** `/agent-dev`  
**skills:** `dev-ui-ux-constitution`  
**DoD:** Full 5-col · Slideout peer AAD 2-col OK · **GAP-DEV-UX-01**

### T-UI-RESP-01 — Responsive

**status:** pending  
**devSlash:** `/dev-web-responsive` + `/dev-ui-review`  
**DoD:** 1280/768/375 · Desktop+Tablet 1 layout · Mobile Web không shrink

### T-UI-HIST-01 — History + alert overlay

**status:** pending  
**devSlash:** `/agent-dev`  
**skills:** `dev-history-alert-overlay`  
**DoD:** History SSOT · **cấm** native alert/confirm/prompt · overlay `stacked`

---

## UI — Detect / HITL (`/agent-dev-ai-detect`)

### T-UI-AI-01 — Capture/upload + result

**status:** pending  
**deps:** T-HITL-UPLOAD-01  
**devSlash:** `/agent-dev-ai-detect`  
**skills:** `/agent-dev-ai-detect` · `ai-chrome-skip` · `demo-to-real-detect`  
**ssot.reuse:** split panel · Vision detect via BFF · **cấm** seed · **cấm** badge AI/P1/P2/score header  
**DoD:** upload+detect UI · result list · 0 demo chrome · **GAP-AI-DETECT-CHROME**

### T-UI-AI-FORM-01 — HITL confirm/dismiss VN

**status:** pending  
**devSlash:** `/agent-dev-ai-detect`  
**DoD:** Confirm/Dismiss VN · dirty → Modal · **cấm** `window.alert` · score field form-only OK

---

## QA (queued `/agent-qa*` — **cấm** e2e ở TL)

### T-QA-AI-01

**status:** pending · role QA  
**DoD:** detect/HITL + CRUD list · **0** badge AI header · no demo chrome

### T-QA-FILTER-01 · T-QA-FILTER-02

**status:** pending · role QA  
**DoD:** V1–V5+V10 live mfeStdUrl + context 1:1 · headed D+T+M (`filter-bar-dtm-gate`)

### T-QA-CRUD-01 · T-QA-FORM-01

**status:** pending · role QA  
**DoD:** C→E→V→D + row menu + config full cột · field e2e body = UI · dirty leave Modal

---

## ssot.reuse (global)

| Layer | Reuse |
|-------|--------|
| UI grid | Lin\* · Common.Components · **cấm** fork pager |
| Filter | LinErpListFilterBar · filter-bar-pipeline |
| Form leave | LeaveConfirmModal |
| HTTP | BFF `api/v1/ai-vision/**` only |
| Dropdown | init-data BE only |
| Chrome | ai-chrome-skip |

## implement.state (Dev — not TL)

- `dotnet build` Vision + WebService (Dev role)
- `yarn build` AiVision MFE (Dev role)
- **TL cấm** yarn build / e2e / start:std

## Gaps tracked

| GAP | Owner |
|-----|-------|
| GAP-VIS-CUTOVER-01 | T-CUTOVER-01 |
| GAP-AI-DETECT-CHROME | T-UI-AI-01 · T-UI-LIST-01 |
| GAP-VIS-UPLOAD-01 | T-HITL-UPLOAD-01 |
| GAP-TL-FILTER-01 | T-CTX-FILTER-01 · T-UI-FILTER-01 |
| GAP-P2-LAYOUT-06 | T-UI-LIST-01 |
| GAP-P2-FORM-GRID-05 | T-UI-FORM-01 |
| GAP-FILTER-WRAP-02 | T-UI-FILTER-01 |

## DoD (Team lead)

- [x] route_confirm autoApprove → `/ai-vision-service`
- [x] formType `ai` pack §2c đủ T-* + S-LIST Kind B
- [x] Wave T-BFF · T-CUTOVER · T-HITL-UPLOAD
- [x] devSlash per surface (GAP-TL-DEV-ASSIGN-01)
- [x] T-UI-FILTER + leave + chrome skip
- [x] compact handoff written
- [x] **cấm** product code / e2e / migration this role
