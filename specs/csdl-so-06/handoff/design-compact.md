# handoff-compact — design · csdl-so-06

| | |
|--|--|
| schemaVersion | `1` |
| role | `design` |
| feature | `csdl-so-06` |
| title | CSDL Sổ 06 — QL cầu / phiếu KT |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_8dc712d5` |
| resource | `bridge-inspections` |
| formNo | `06` |
| IdCode | `SO-` |
| autoApprove | `ON` |
| e2eQa | `ON` |
| design_confirm | `approve` |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| contentHashPrior | `sha256:efbccc4800d45e5dfe2b30b8b35773d127554eb6912be14729c0da066e214d8a` |
| headerFingerprintPrior | `sha256:f87218b875c86a0a438994d8dd3abf30f59757fe4f85ddc4e9af0893efb9422f` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-06T03:35:00.000Z` |

## Decisions

- Kind **B** A–D+F+H + Kind **D** Slideout · `data-form-cols=2` · footer_actions_only · entries `inline_grid` **fixed-20**
- Control = controlHint · **cấm** detail*/col1–3 · **cấm** add/remove · **cấm** đổi partCode seed
- Alias `/csdl-so-06` + hub `?resource=bridge-inspections` · title «Sổ 06 — QL cầu / phiếu KT» · hub card «Phiếu KT cầu» đến T-REN-01
- Filter-bar HARD 1 hàng · SearchText+🔍 · province/status(`draft|done|cancelled`)/road/bridge/from/to · **cấm** nút Tìm
- status phiếu draft|done|cancelled · manageUnit Text P1 · org DEFER P2 · priority required khi damageDesc · photoIds optional max 5 · XLS OUT
- Peer SearchInput/deep-link Biểu 2 · **cấm** merge form · map none · DES-RPT N/A
- API giữ `api/v1/asset/csdl-records` · **cấm** runtime `/api/v1/bridge-inspections`
- design_confirm **approve** (autoApprove ON) · open Q: **none**

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B · 🔍 cụm phải |
| province/status | Tỉnh/TT | Dropdown | LOOKUP_STATIC · draft/done/cancelled |
| roadCode/bridgeId | Đường/Cầu | SearchInput | road-route · bridges |
| fromDate/toDate | Ngày KT | Date | filter inspectedAt |
| code | Mã | Text ro | SO- |
| bridge*/road* | Cầu/Đường | SearchInput+display | req |
| kmStation/manageUnit | Km/ĐV | Number/Text | req · org P2 |
| passportRef | Passport | Text+link | Biểu 2 deep-link |
| inspectedAt/inspector | Ngày/Người KT | Date/Text | req |
| notes | Ghi chú phiếu | Textarea | |
| entries.* | 20 BP | ro partCode/Name · Textarea/Text/Dropdown/FileMulti | priority* nếu damage · photo max5 |

## Screens / zones (ids only)

- S-LIST DES-GRID-A · B · B-FILTER · C · D · F · H
- S-FORM-* DES-GRID-Z · DES-FORM-Z1–Z3 · DES-ENTRIES (fixed-20) · LeaveConfirmModal
- S-HUB-ENTRY · S-SKIP-MAP
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-06/ui/prototype/csdl-so-06-list-prototype.html`
- mfeStdUrl=`http://localhost:9301/csdl-so-06`
- peerStdUrl=`http://localhost:9301/so-ts/csdl-so-sach?resource=bridge-inspections`
- prototype=`specs/csdl-so-06/ui/prototype/csdl-so-06-list-prototype.html`

## API / next

- CRUD BFF `…/asset/csdl-records` · resource=bridge-inspections · typed DTO **SA**
- road-route `…/integration/road-routes/search` · bridges peer · FileService photoIds
- Next: **SA** Schema_CsdlSo06 · DOMAIN-MAP row · seed 20 · UiSchema typed
- e2e: queued `/agent-qa*` only · **cấm** e2e/start:std ở Design

## UNCLEAR

- none

## Full paths (Read only if needed)

- design: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-06/ui/design.md`
- control-hint: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-so-06-control-hint.md`
- real-data: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-so-06-real-data.md`
- prior po: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-06/handoff/po-compact.md`
- STATUS: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-06/STATUS.md`

## Cấm (compact)

Demo/LS SSOT · ERP.* · Guid IdCode · form 3 ô/col1–3 only · add/remove >20 · invent map/file API · runtime bridge-inspections path · yarn build/e2e/start:std · re-scan demo · paste HTML vào compact
