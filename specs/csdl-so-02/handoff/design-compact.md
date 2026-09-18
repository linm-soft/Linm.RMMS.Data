# handoff-compact — design · csdl-so-02

| | |
|--|--|
| schemaVersion | `1` |
| role | `design` |
| feature | `csdl-so-02` |
| title | CSDL Sổ 02 — Nhật ký tuần đường (CR PDF Wave A) |
| packKind | `list` |
| changeScope | `edit_page` |
| status | `done` |
| taskId | `task_b40a0dad` |
| cr | `nktd-pdf-20260917` · `SRC-NKTD-PDF` |
| resource | `patrol-logs` |
| formNo | `02` |
| IdCode | `SO-` |
| autoApprove | `ON` |
| e2eQa | `ON` (queued `/agent-qa*`) |
| design_confirm | `approve` |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| contentHashPrior | `sha256:3ddc42d7c4404f439925322953f28ffc9d3b263726ac6cf5216065751c19b4d6` |
| headerFingerprintPrior | `sha256:1b032f04f5154622239e0e2bdbebe6923ec76ba9ca33d283b51ebe0062c0d471` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-18T03:45:00.000Z` |

## Decisions

- Kind **B** A–D+F+H + Kind **D** Slideout · `data-form-cols=2` · entries `inline_grid`
- Wave A: **`locationText` Text** + `locationKm` Number cạnh nhau · OR-rule · weather **Textarea** rows=3 maxLength=2000
- List **luôn** cột «Vị trí» · G-11/G-12 · View no-req
- Sketch/media **text-id** P1 · **GAP-SO02-FILE-01** · Report Wave B **park**
- Filter-bar HARD · API giữ `csdl-records?resource=patrol-logs` · map none · DES-RPT N/A
- design_confirm **approve** (autoApprove) · open Q: **none**
- **giữ** new_page zones/routes · **cấm** wipe

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search…toDate | filter Zone B | SearchText/Dropdown/SearchInput/Date | HARD 1 hàng |
| header.* | bìa | Text/Number/Date/SearchInput | giữ prior |
| locationKm | Lý trình Km | Number | soft OR |
| **locationText** | Vị trí / SC-VP | **Text** | **GAP-NKTD-LOC-01** soft OR |
| weatherEvent | Thời tiết+diễn biến | **Textarea** | rows=3 · * |
| sketchRef/mediaIds | file debt | Text id | GAP-SO02-FILE-01 |

## Screens / zones (ids only)

- S-LIST DES-GRID-A · B · B-FILTER · C (+Vị trí) · D · F · H
- S-FORM-* DES-GRID-Z · DES-FORM-Z1–Z3 · DES-ENTRIES · LeaveConfirmModal
- S-HUB-ENTRY · S-SKIP-MAP · S-SKIP-RPT
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-02/ui/prototype/csdl-so-02-list-prototype.html`
- mfeStdUrl=`http://localhost:9301/csdl-so-02`
- peerStdUrl=`http://localhost:9301/so-ts/csdl-so-sach?resource=patrol-logs`
- prototype=`specs/csdl-so-02/ui/prototype/csdl-so-02-list-prototype.html`

## API / next

- CRUD BFF `…/asset/csdl-records` · resource=patrol-logs · **+ locationText** · **cấm** invent patrol-logs path
- Next: **SA** LocationText DTO · Schema_CsdlSo02LocationText · UiSchema seed
- TL: T-* từ CR task · **cấm** overwrite new_page task
- e2e: queued `/agent-qa*` only

## UNCLEAR

- none

## Full paths (Read only if needed)

- design: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-02/ui/design.md`
- control-hint: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-so-02-control-hint.md`
- real-data: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-so-02-real-data.md`
- prior po: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-02/handoff/po-compact.md`
- STATUS: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-02/STATUS.md`

## Cấm (compact)

Demo/LS SSOT · ERP.* · invent patrol-logs API · invent file picker · yarn build/e2e/start:std · re-scan demo · migration Step 4b · paste HTML · wipe new_page · report Wave B
