# handoff-compact — design · csdl-so-03

| | |
|--|--|
| schemaVersion | `1` |
| role | `design` |
| feature | `csdl-so-03` |
| title | CSDL Sổ 03 — Trực BĐGT + chốt + SC |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_0fc07693` |
| resource | `duty-incident-logs` |
| formNo | `03` |
| IdCode | `SO-` |
| autoApprove | `ON` |
| e2eQa | `ON` |
| design_confirm | `approve` |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| contentHashPrior | `sha256:1e8b4b6d6149c1ff2f27010cbf0d6649af9408b05738f416cd58d8c7361fdd9d` |
| headerFingerprintPrior | `sha256:b5b6baa32c1a5ebbf3d8eb2ecaad922d90a291958347aa22ec8fa27096d93997` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-06T02:30:00.000Z` |

## Decisions

- Kind **B** A–D+F+H + Kind **D** Slideout · `data-form-cols=2` · footer_actions_only · entries `inline_grid` typed
- Control = controlHint · **cấm** detail*/col1–3 · **cấm** cột `dutyKind` · content gộp BĐGT/chốt/SC
- Merge P1: **1** resource `duty-incident-logs` · retire `duty-logs`+`checkpoint-duties` · **1** hub card «Sổ 03 — Trực BĐGT + chốt + sự cố» · legacy QS redirect
- Alias `/csdl-so-03` + hub `?resource=duty-incident-logs`
- Filter-bar HARD 1 hàng · SearchText+🔍 · province/status(`draft|active|closed`)/road/from/to · **cấm** nút Tìm
- status LOOKUP_STATIC draft|active|closed · contractor Text P1 · org SearchInput DEFER P2 · shift Text free · XLS OUT
- API giữ `api/v1/asset/csdl-records` · map none · DES-RPT N/A
- design_confirm **approve** (autoApprove ON) · open Q: **none**

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B · 🔍 cụm phải |
| province/status | Tỉnh/TT | Dropdown | LOOKUP_STATIC · draft/active/closed |
| roadCode | Đường | SearchInput | road-route |
| fromDate/toDate | Kỳ | Date | filter |
| code | Mã | Text ro | SO- |
| bookNo/contractor | Số quyển/NT | Text | req |
| roadCode/roadName | Đường | SearchInput+display | req |
| kmFrom/kmTo | Km | Number | kmFrom req |
| periodStart/End | Kỳ sổ | Date | start req |
| notes | Ghi chú | Textarea | |
| entries.* | Dòng NK | Date/Text/Textarea | dutyDate·shift·personName·content req · handling·signRemark |

## Screens / zones (ids only)

- S-LIST DES-GRID-A · B · B-FILTER · C · D · F · H
- S-FORM-* DES-GRID-Z · DES-FORM-Z1–Z3 · DES-ENTRIES · LeaveConfirmModal
- S-HUB-ENTRY (1 card) · S-SKIP-MAP
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-03/ui/prototype/csdl-so-03-list-prototype.html`
- mfeStdUrl=`http://localhost:9301/csdl-so-03`
- peerStdUrl=`http://localhost:9301/so-ts/csdl-so-sach?resource=duty-incident-logs`
- prototype=`specs/csdl-so-03/ui/prototype/csdl-so-03-list-prototype.html`

## API / next

- CRUD BFF `…/asset/csdl-records` · resource=duty-incident-logs · typed DTO **SA**
- road-route `…/integration/road-routes/search`
- Next: **SA** Schema_CsdlSo03 · migrate/retire 2 keys · legacy QS redirect · typed UiSchema
- e2e: queued `/agent-qa*` only · **cấm** e2e/start:std ở Design

## UNCLEAR

- none

## Full paths (Read only if needed)

- design: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-03/ui/design.md`
- control-hint: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-so-03-control-hint.md`
- real-data: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-so-03-real-data.md`
- prior po: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-03/handoff/po-compact.md`
- STATUS: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-03/STATUS.md`

## Cấm (compact)

Demo/LS SSOT · ERP.* · Guid IdCode · form 3 ô/col1–3 only · dutyKind P1 · 2 resource song song · invent map · yarn build/e2e/start:std · re-scan demo · paste HTML vào compact
