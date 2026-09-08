# handoff-compact — design · csdl-so-08

| | |
|--|--|
| schemaVersion | `1` |
| role | `design` |
| feature | `csdl-so-08` |
| title | CSDL Sổ 08 — Kết quả BDTX |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_e009f09b` |
| resource | `maintenance-work-logs` |
| formNo | `08` |
| IdCode | `SO-` |
| autoApprove | `ON` |
| e2eQa | `ON` |
| design_confirm | `approve` |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| contentHashPrior | `sha256:46cd2b05ce4a396d08fa326183d9a17603afc381fbd00669155c13703a4e3146` |
| headerFingerprintPrior | `sha256:e6fd49c647b1f4435fe5110097964fa15b4eeba116926d885297b81d2e373a02` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-06T01:50:00.000Z` |

## Decisions

- Kind **B** A–D+F+H + Kind **D** Slideout · `data-form-cols=2` · footer_actions_only · entries `inline_grid` typed **5 cột**
- Control = controlHint · **cấm** detail*/col1–3 only · **cấm** kmAt gộp · media **N/A**
- Alias `/csdl-so-08` + hub `?resource=maintenance-work-logs` · label «Sổ 08 — Kết quả BDTX»
- Filter-bar HARD 1 hàng · SearchText+🔍 · province/status/road/from/to · **cấm** nút Tìm
- Q-VP-KHU/STATUS/PROV/ORG/ENTRY-KM theo PO · GAP-CSDL-ORG-01 DEFER P2 · XLS OUT
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
| bookNo/contractor | Số quyển/Thầu | Text | req |
| officeUnit/zoneUnit | VP/Khu | Text | req · P1 |
| roadCode/roadName | Đường | SearchInput+display | req |
| kmFrom/kmTo | Km | Number | kmFrom req |
| periodStart/End | Kỳ sổ | Date | start req |
| manageUnit/notes | ĐV QL/Ghi chú | Text/Textarea | |
| entries.* | Dòng BDTX | Text/Number/Textarea | workItem·kmFrom·solution·mainResult req · kmTo·note |

## Screens / zones (ids only)

- S-LIST DES-GRID-A · B · B-FILTER · C · D · F · H
- S-FORM-* DES-GRID-Z · DES-FORM-Z1–Z3 · DES-ENTRIES · LeaveConfirmModal
- S-HUB-ENTRY · S-SKIP-MAP
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-08/ui/prototype/csdl-so-08-list-prototype.html`
- mfeStdUrl=`http://localhost:9301/csdl-so-08`
- peerStdUrl=`http://localhost:9301/so-ts/csdl-so-sach?resource=maintenance-work-logs`
- prototype=`specs/csdl-so-08/ui/prototype/csdl-so-08-list-prototype.html`

## API / next

- CRUD BFF `…/asset/csdl-records` · resource=maintenance-work-logs · typed DTO **SA**
- road-route `…/integration/road-routes/search`
- Next: **SA** Schema_CsdlSo08 · typed UiSchema · migration
- e2e: queued `/agent-qa*` only · **cấm** e2e/start:std ở Design

## UNCLEAR

- none

## Full paths (Read only if needed)

- design: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-08/ui/design.md`
- control-hint: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-so-08-control-hint.md`
- real-data: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-so-08-real-data.md`
- prior po: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-08/handoff/po-compact.md`
- STATUS: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-08/STATUS.md`

## Cấm (compact)

Demo/LS SSOT · ERP.* · Guid IdCode · form 3 ô/col1–3 only · invent map · yarn build/e2e/start:std · re-scan demo · paste HTML vào compact
