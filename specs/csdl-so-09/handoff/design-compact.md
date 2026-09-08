# handoff-compact — design · csdl-so-09

| | |
|--|--|
| schemaVersion | `1` |
| role | `design` |
| feature | `csdl-so-09` |
| title | CSDL Sổ 09 — QL vận hành ITS/ETC/KSTTX |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_f109cd8d` |
| resource | `its-ops-logs` |
| formNo | `09` |
| IdCode | `SO-` |
| autoApprove | `ON` |
| e2eQa | `ON` |
| design_confirm | `approve` |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| contentHashPrior | `sha256:1cbd0cd26f977a518c29457acddd7c893fa56fe9bd750ac1ad6a15b0976d03dc` |
| headerFingerprintPrior | `sha256:c00fdbdda898129b6408c35f9fb57cd2cc918356208b1067310d40c8f3cbefd9` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-06T00:00:00.000Z` |

## Decisions

- Kind **B** A–D+F+H + Kind **D** Slideout · `data-form-cols=2` · footer_actions_only · entries `inline_grid` typed **9 cột** ca trực
- Control = controlHint · **cấm** detail*/col1–3 only · media **N/A**
- Alias `/csdl-so-09` + hub `?resource=its-ops-logs` · label «Sổ 09 — QL vận hành ITS/ETC/KSTTX» · **≠** Biểu 9
- Filter-bar HARD 1 hàng · SearchText+🔍 · province/status/road/from/to · **cấm** nút Tìm
- linkBieu14Id optional · SearchInput `its-systems` + deep-link · **cấm** embed Biểu 14
- Q-SHIFT/SYS-STATUS/LINK14/PROV/ORG/SIGN theo PO · GAP-CSDL-ORG-01 DEFER P2 · XLS OUT
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
| roadCode/roadName | Đường | SearchInput+display | req |
| kmFrom/kmTo | Km | Number | kmFrom req |
| periodStart/End | Kỳ sổ | Date | start req |
| manageUnit/notes | ĐV QL/Ghi chú | Text/Textarea | Text P1 |
| linkBieu14Id | Biểu 14 | SearchInput | optional · its-systems |
| entries.* | Ca trực | DateTime/Dropdown/Text/Textarea | occurredAt·shift·operator·systemStatus·action·result·signature req · anomaly·recommendation |

## Screens / zones (ids only)

- S-LIST DES-GRID-A · B · B-FILTER · C · D · F · H
- S-FORM-* DES-GRID-Z · DES-FORM-Z1–Z3 · DES-ENTRIES · DES-LINK14 · LeaveConfirmModal
- S-HUB-ENTRY · S-SKIP-MAP
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-09/ui/prototype/csdl-so-09-list-prototype.html`
- mfeStdUrl=`http://localhost:9301/csdl-so-09`
- peerStdUrl=`http://localhost:9301/so-ts/csdl-so-sach?resource=its-ops-logs`
- prototype=`specs/csdl-so-09/ui/prototype/csdl-so-09-list-prototype.html`

## API / next

- CRUD BFF `…/asset/csdl-records` · resource=its-ops-logs · typed DTO **SA**
- road-route `…/integration/road-routes/search`
- Peer Biểu 14 `…/csdl-records?resource=its-systems` · `/csdl-bieu-14`
- Next: **SA** Schema_CsdlSo09 · typed UiSchema · seed catalog · migration
- e2e: queued `/agent-qa*` only · **cấm** e2e/start:std ở Design

## UNCLEAR

- none

## Full paths (Read only if needed)

- design: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-09/ui/design.md`
- control-hint: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-so-09-control-hint.md`
- real-data: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-so-09-real-data.md`
- prior po: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-09/handoff/po-compact.md`
- STATUS: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-09/STATUS.md`

## Cấm (compact)

Demo/LS SSOT · ERP.* · Guid IdCode · form 3 ô/col1–3 only · invent map · merge Biểu 14 · yarn build/e2e/start:std · re-scan demo · paste HTML vào compact
