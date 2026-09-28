# Team lead — Task — web-rmms-field-reflect

| Field | Value |
|-------|-------|
| feature | `web-rmms-field-reflect` |
| title | Phản ánh hiện trường — Pattern B CTA/banner (delta edit_page) |
| role | `team_lead` · `/agent-team-lead` |
| status | `done` (autoApprove=ON · `route_confirm=keep` `/phan-anh`) |
| packKind | `list` (**phone Field form** ≠ desktop Kind B grid) |
| changeScope | `edit_page` |
| formPattern | Mobile full FR-00/01/02 · phone max-width **430** · Android 1-1 · N/A ERP Modal/Slideout · DES-LEAVE dirty form **KEEP** |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/phan-anh` (**route_confirm** keep · khớp STATUS · **cấm** invent route mới) |
| mfeStdUrl | `http://localhost:9301/phan-anh` |
| productRoute | `/field/reflect` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Incident+Patrol+Integration+AiVision(+files) · Mobile.Bff `:5202` · **cấm ERP.*** |
| BFF bind | `mobile-bff/api/v1/**` · **cấm** web-bff · **cấm** invent `field-reflect` path |
| DOMAIN-MAP | Incident/`incident` (+ Patrol · Integration · AiVision) · keep · **cấm** FieldReflectController |
| demo | **N/A** · Live-only · hash skip |
| editCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` · Pattern B · `FieldReflectPage` |
| contentHash | `sha256:d8f13df3772c0f27b367c5e01a5ce2cf942b1a27640c1390e76e34c3a8c267f2` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| updatedAt | `2026-09-27T12:10:00.000Z` |
| taskId | `task_2ead05fa` |
| priorTl | `task_fcf96a88` new_page **PASS** · keep T-* Live |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field-reflect/ui/prototype/index.html` |
| prior | data_analy·po·design·sa = **confirmed** · compact exist |
| Step4b / migration | **skip** (SA: none · GAP-PGC-BE-01 deferred HasGps only) |
| next | `/agent-dev` · roleOnly stop (GAP-PKT-ROLE-01) · e2eQa queued `/agent-qa*` |

> TL **chia HOW + DoD + T-*** · **cấm** implement product code · **cấm** e2e / yarn build / start:std.  
> Kind B grid / `LinErpListFilterBar` / ui-schema editor = **N/A**.  
> Entity/migration / Step 4b = **none**. T-BE invent = **N/A**.  
> Ownership: Field Reflect = **FR-*** only · hub = peer `web-rmms-field` · draft = peer offline.

## Notes

- changeScope=`edit_page` · control-hint + real-data **PASS** → full TL delta (không chỉ data-analy).
- **KEEP** prior Live FR-00/01/02 + T-BE-CRUD/INIT/PERM + T-UI-FR-* **PASS** (`task_5a08f380`).
- **NEW** Pattern B: bỏ `disabled={!canDetect}` / `{!canCreate}` · Detect/Create **disabled chỉ** `detecting` / `creating` · `validationBanner` `string[]` **on click** · Acc>30 **chặn POST detect trong handler** (không khóa CTA idle).
- GPS deny: **không** khóa CTA · báo on click · **cấm** fake.
- Align cuối: `/align-mobile-to-mfe` · SSOT=`FieldReflectPage` · **cấm** tab/route/icon mới · **cấm** mở android/ios proto.
- UNCLEAR-VALIDATE-B · UNCLEAR-ALIGN-01 → **open** · owned Dev/QA.
- Cite: T-W3-10 keep · delta T-UI-VAL-B / T-UI-ACC / T-UI-GPS-B / T-UI-ALIGN / T-QA-VAL-B.

## route_confirm

| Option | Path | Decision |
|--------|------|----------|
| Keep STATUS | `/phan-anh` | **approve** (autoApprove=ON · khớp compact PO/Design/SA · STD-PORT `:9301`) |
| Prior new_page | `/web-rmms-field-reflect` | **rejected** as mfeStdRoute (superseded · product `/field/reflect` ok) |
| Invent | `/field/reflect` as MFE path | **rejected** · product only |

`source.routes` = `[/phan-anh]` · **URL không mới** · không invent route.

## FormType pack adapt (phone Field form)

| Canonical (form-type-task-pack §2a) | Adapt | Reason |
|-------------------------------------|-------|--------|
| T-UI-LIST-01 Kind B | → **T-UI-FR-01** (keep PASS) | DES-GRID N/A · phone Field |
| T-UI-FILTER / CFG / UISCHEMA / QA-FILTER | **WAIVE** | phone Field · **cấm** desktop filter bar |
| T-UI-FORM / LEAVE / LKP / ACT / FIELD / PROD / UX / RESP / HIST | **KEEP PASS** | prior Live |
| T-BE-CRUD / INIT / PERM | **KEEP PASS** | Live wire done · **cấm** invent API |
| T-QA-CRUD / T-QA-FR | **KEEP PASS** | prior · **add** T-QA-VAL-B-01 queued |
| **T-UI-VAL-B-01** · **T-UI-ACC-01** · **T-UI-GPS-B-01** | **NEW** | Pattern B SUBMIT-VALIDATE |
| **T-UI-ALIGN-01** | **NEW** | UNCLEAR-ALIGN-01 · end-of-dev |
| **T-QA-VAL-B-01** | **NEW** queued | Pattern B + Acc + banner |

**GAP-TL-FORMTYPE-01:** PASS — prior pack + delta T-* đủ · waive có cite.  
**GAP-TL-FILTER-01:** N/A. **tl-retry-ssot-rereview:** N/A (task mới, không retry).

## Screens → tasks

| id | Surface | Pattern | FormMode | Actions | Task | devSlash |
|----|---------|---------|----------|---------|------|----------|
| FR-00 | Pick loại TS | LookupGrid 430 | Read | select → FR-01 | T-UI-FR-00 **PASS** | `/agent-dev` |
| FR-01 | Form phản ánh | Field form · Pattern B | Create | Detect/Create idle ON · banner on click | T-UI-VAL-B-01 · T-UI-ACC-01 · T-UI-GPS-B-01 | `/agent-dev` |
| FR-02 | Photo-geo | Overlay | Create | PhotoRow · banner on Detect nếu thiếu ảnh | T-UI-FR-02 **PASS** · T-UI-VAL-B-01 | `/agent-dev` |
| — | validationBanner | Banner | — | `string[]` on click | T-UI-VAL-B-01 | `/agent-dev` |
| — | Align | — | — | `/align-mobile-to-mfe` cuối | T-UI-ALIGN-01 | `/agent-dev` |

## ssot.reuse

| Concern | Reuse | Cấm |
|---------|-------|-----|
| UI | `FieldReflectPage` · mobile kit · `useFormOptions()` | clone Lin* · hardcode VN · typed new_page |
| HTTP | apiClient · prefix `mobile-bff` | invent axios · ERP.* · web-bff · `/field-reflect*` |
| BE | Incident Create · sessions · asset-types · AiVision(+files) | invent Reflect controller · Lat col MIG |
| GPS | geolocation · Acc>30 block **handler** · deny **banner on click** | fake coords · disable CTA idle vì deny |
| Media | FileService guids → `MediaIds` max10 · DEC-MEDIA-01 | invent media table |
| Align | `/align-mobile-to-mfe` · SSOT MFE page | tab/route/icon mới · android/ios proto |
| Ownership | Reflect owns **FR-*** delta gates | Field hub / journal B–E |

## implement.wire

| From | To | Note |
|------|----|------|
| detect click | validate photos+GPS+Acc → banner **or** `POST …/ai-vision/detect` | Acc>30 **no POST** · CTA idle ON |
| create click | validate asset+session+GPS → banner **or** `POST …/incident/incidents` | CTA idle ON · HasGps when fix |
| gpsLock deny | banner on Detect/Create click | **cấm** `disabled` vì deny |
| draftOffline | peer offline | **cấm** invent draft API |

## implement.state

- Route **`/phan-anh`** · phone **430** · **cấm** đổi mfeStdRoute
- Detect/Create: idle enabled · busy `detecting`/`creating` only
- Banner zone `validationBanner` · prototype `?miss=1` · `?deny=1` · `?acc=1`
- Align **cuối** Dev · không trong TL
- **cấm** fake GPS/ca · **cấm** ERP.* · **cấm** web-bff

## implement.init_data

| Field | Source | Cấm |
|-------|--------|-----|
| labels | LOOKUP_STATIC `useFormOptions()` **PASS** | hardcode VN |
| checklist | local **PASS** | invent checklist API |
| sessions / asset-types | Live **PASS** | itemsOrDemo |

## Field → control (T-UI-FIELD) — delta notes

| uiField | controlHint | write / delta |
|---------|-------------|---------------|
| detect | Button | Pattern B · disabled **chỉ** detecting · Acc handler |
| create | Button | Pattern B · disabled **chỉ** creating · banner on click |
| validationBanner | Banner | `string[]` Pattern B |
| gpsLock | GPS | deny→banner on click · **không** khóa CTA |
| photos | PhotoRow | banner on Detect nếu thiếu |
| assetPick / sessionStamp | LookupGrid / Text RO | banner on Create nếu thiếu |

---

## Tasks

### Prior Live (KEEP · **PASS** · `task_5a08f380`)

T-BE-CRUD-01 · T-BE-INIT-01 · T-PERM-01 · T-UI-FR-00 · T-UI-FR-01 · T-UI-FR-02 · T-UI-LKP-01 · T-UI-ACT-01 · T-UI-FIELD-01 · T-UI-LEAVE-01 · T-UI-PROD-01 · T-UI-UX-01 · T-UI-RESP-01 · T-UI-HIST-01 · T-QA-CRUD-01 · T-QA-FR-01 — **không reopen** trừ regression Pattern B.

### T-UI-VAL-B-01 — Pattern B gates + banner (FieldReflectPage)

- **role:** Dev · **deps:** T-UI-FR-01 (PASS) · **devSlash:** `/agent-dev`
- **status:** **PASS**
- **DoD:** Bỏ `canDetect`/`canCreate` disable idle · Detect/Create **disabled chỉ** `detecting`/`creating` · click thiếu điều kiện → `validationBanner` `string[]` (không POST) · cite SUBMIT-VALIDATE Pattern B · prototype `?miss=1` · **cấm** khóa CTA vì thiếu ảnh/TS/ca/GPS deny · **cấm** typed new_page
- **skills:** `/agent-dev` · UNCLEAR-VALIDATE-B
- **ssot.reuse:** `FieldReflectPage` only

### T-UI-ACC-01 — Acc>30 chặn POST detect (handler)

- **role:** Dev · **deps:** T-UI-VAL-B-01 · **devSlash:** `/agent-dev`
- **status:** **PASS**
- **DoD:** AccuracyM > 30 → **không** `POST ai-vision/detect` · banner on click · CTA idle **ON** · prototype `?acc=1` · **cấm** disable Detect vì Acc
- **skills:** `/agent-dev`

### T-UI-GPS-B-01 — GPS deny Pattern B

- **role:** Dev · **deps:** T-UI-VAL-B-01 · **devSlash:** `/agent-dev`
- **status:** **PASS**
- **DoD:** deny **không** khóa Detect/Create · báo banner **khi bấm** · HasGps only when fix · **cấm** fake coords · GAP-PGC-BE-01 HasGps only
- **skills:** `/agent-dev` · prototype `?deny=1`

### T-UI-ALIGN-01 — Align mobile-to-mfe (cuối)

- **role:** Dev · **deps:** T-UI-VAL-B-01 · T-UI-ACC-01 · T-UI-GPS-B-01 · **devSlash:** `/agent-dev`
- **status:** **PASS**
- **DoD:** `/align-mobile-to-mfe` · SSOT=`FieldReflectPage` · phone 430 · **cấm** tab/route/icon mới · **cấm** mở android/ios proto · UNCLEAR-ALIGN-01
- **skills:** `/align-mobile-to-mfe`

### T-QA-VAL-B-01 — Pattern B + Acc + banner (queued)

- **role:** QA · **deps:** T-UI-VAL-B-01 · T-UI-ACC-01 · T-UI-GPS-B-01 · **status:** pending
- **DoD:** AC idle CTA ON · banner on click (miss/deny/acc) · Acc>30 no detect POST · align 430 · **chỉ** `/agent-qa*` e2e · **cấm** team_lead/dev start:std
- **skills:** `/agent-qa*`

---

## STATUS Tasks mirror

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| T-BE-CRUD-01 … T-QA-FR-01 | prior Live | — | — | **PASS** | keep |
| T-UI-VAL-B-01 | Pattern B gates+banner | dev | T-UI-FR-01 | **PASS** | UNCLEAR-VALIDATE-B closed Dev |
| T-UI-ACC-01 | Acc>30 handler | dev | T-UI-VAL-B-01 | **PASS** | no POST detect |
| T-UI-GPS-B-01 | GPS deny banner | dev | T-UI-VAL-B-01 | **PASS** | no lock CTA |
| T-UI-ALIGN-01 | align-mobile-to-mfe | dev | T-UI-VAL-B-01,T-UI-ACC-01,T-UI-GPS-B-01 | **PASS** | UNCLEAR-ALIGN-01 closed Dev |
| T-QA-VAL-B-01 | Pattern B AC | qa | T-UI-VAL-B-01…GPS-B | pending | queued /agent-qa* |

## Out of scope (P1)

- Entity/migration / Step 4b / Lat columns (GAP-PGC-BE-01)
- ERP.* · web-bff · invent `/field-reflect*` BE · T-BE invent
- Me*/feedback/cam-view · journal/kết ca (B–E)
- Native iOS/Android · new tab/route/icon
- yarn e2e / start:std / build (chỉ Dev/QA đúng slash)

## Handoff

- compact: `specs/web-rmms-field-reflect/handoff/team_lead-compact.md`
- next role: **dev** · artifact `implement/web-rmms-field-reflect.md`
- e2e: queued QA only
