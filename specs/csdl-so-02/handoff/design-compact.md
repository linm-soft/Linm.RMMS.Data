# handoff-compact — design · csdl-so-02

| | |
|--|--|
| schemaVersion | `1` |
| role | `design` |
| feature | `csdl-so-02` |
| title | CSDL Sổ 02 — Nhật ký tuần đường |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_4a522163` |
| resource | `patrol-logs` |
| formNo | `02` |
| IdCode | `SO-` |
| autoApprove | `ON` |
| e2eQa | `ON` |
| design_confirm | `approve` |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| contentHashPrior | `sha256:70538d9c9588d335aa43fd5a1fe28433d1138960d5954c5a7ef4cff33a5bd1c3` |
| headerFingerprintPrior | `sha256:5da56778e38ecc53807d424082520372c7bbed355257bdacfa0457dba0036e3c` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-06T00:15:00.000Z` |

## Decisions

- Kind **B** A–D+F+H + Kind **D** Slideout · `data-form-cols=2` · footer_actions_only · entries `inline_grid` typed
- Control = controlHint · **cấm** detail*/col1–3 only · sketch/media FileService opt max 10
- Alias `/csdl-so-02` + hub `?resource=patrol-logs` · label «Sổ 02 — Nhật ký tuần đường»
- Filter-bar HARD 1 hàng · SearchText+🔍 · province/status/road/from/to · **cấm** nút Tìm
- Q-FORMNO/STATUS/SKETCH/PROV/CONTRACTOR theo PO · GAP-CSDL-ORG-01 DEFER P2 · XLS OUT
- API giữ `api/v1/asset/csdl-records` · map none · DES-RPT N/A
- design_confirm **approve** (autoApprove ON) · open Q: **none**

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B · 🔍 cụm phải |
| province/status | Tỉnh/TT | Dropdown | LOOKUP_STATIC · tot/tb/kem/hong |
| roadCode | Đường | SearchInput | road-route |
| fromDate/toDate | Kỳ | Date | filter |
| code | Mã | Text ro | SO- |
| bookNo/contractor | Số quyển/NT | Text | req |
| roadCode/roadName | Đường | SearchInput+display | req |
| kmFrom/kmTo | Km | Number | kmFrom req |
| patrolStaff | NV tuần | Text | req |
| periodStart/End | Kỳ sổ | Date | start req |
| manageUnit/notes | ĐV/GC | Text/Textarea | |
| entries.* | Dòng NK | DateTime/Text/Textarea/File | eventAt·locationKm·weatherEvent req |

## Screens / zones (ids only)

- S-LIST DES-GRID-A · B · B-FILTER · C · D · F · H
- S-FORM-* DES-GRID-Z · DES-FORM-Z1–Z3 · DES-ENTRIES · LeaveConfirmModal
- S-HUB-ENTRY · S-SKIP-MAP
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-02/ui/prototype/csdl-so-02-list-prototype.html`
- mfeStdUrl=`http://localhost:9301/csdl-so-02`
- peerStdUrl=`http://localhost:9301/so-ts/csdl-so-sach?resource=patrol-logs`
- prototype=`specs/csdl-so-02/ui/prototype/csdl-so-02-list-prototype.html`

## API / next

- CRUD BFF `…/asset/csdl-records` · resource=patrol-logs · typed DTO **SA**
- road-route `…/integration/road-routes/search` · FileService integrate-file-upload-web
- Next: **SA** Schema_CsdlSo02 · typed UiSchema · file bind
- e2e: queued `/agent-qa*` only · **cấm** e2e/start:std ở Design

## UNCLEAR

- none

## Full paths (Read only if needed)

- design: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-02/ui/design.md`
- control-hint: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-so-02-control-hint.md`
- real-data: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-so-02-real-data.md`
- prior po: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-02/handoff/po-compact.md`
- STATUS: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-02/STATUS.md`

## Cấm (compact)

Demo/LS SSOT · ERP.* · Guid IdCode · form 3 ô/col1–3 only · invent map/file API · yarn build/e2e/start:std · re-scan demo · paste HTML vào compact
