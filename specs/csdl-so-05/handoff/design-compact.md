# handoff-compact — design · csdl-so-05

| | |
|--|--|
| schemaVersion | `1` |
| role | `design` |
| feature | `csdl-so-05` |
| title | CSDL Sổ 05 — TNGT + điểm đen |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_0332f55e` |
| resource | `accident-summaries` |
| formNo | `05` |
| IdCode | `SO-` |
| autoApprove | `ON` |
| e2eQa | `ON` |
| design_confirm | `approve` |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| contentHashPrior | `sha256:ccb6cccc2010c67b8cd3b02484f6a424d09f5a7e0494ad59b5b71ea6ff15f8ce` |
| headerFingerprintPrior | `sha256:73a54e566bbad59af489c97e74cad13d131c338daa386a531e535704e374d14a` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-06T05:55:00.000Z` |

## Decisions

- Kind **B** A–D+F+H + Kind **D** Slideout · `data-form-cols=2` · footer_actions_only · **3 tabs** C.1/C.2/BS add-row
- Control = controlHint · **cấm** detail*/col1–3 · **cấm** 16 hạng xe · title «Sổ 05 — TNGT + điểm đen»
- Alias `/csdl-so-05` + hub `?resource=accident-summaries` · NEW catalog card
- Filter-bar HARD 1 hàng · SearchText+🔍 · province/status/road/year/periodType/tableKind · **cấm** nút Tìm
- period month→1–12 · half→1|2 · year=year · cause 3× Number · damage Number + «triệu đồng»
- BS assess `blackspot|potential|under_watch` · contractor Text P1 · org DEFER P2 · XLS OUT
- API giữ `…/csdl-records` · map none · DES-RPT N/A · so-05 ship độc lập
- design_confirm **approve** (autoApprove ON) · open Q: **none**

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B · 🔍 cụm phải |
| province/status | Tỉnh/TT | Dropdown | LOOKUP_STATIC · draft/active/closed |
| roadCode | Đường | SearchInput | road-route |
| year/periodType/tableKind | Năm/Kỳ/Bảng | Integer/Dropdown | filter+form |
| code | Mã | Text ro | SO- |
| bookNo/contractor | Số quyển/NT | Text | req · NT Text P1 |
| road*/km* | Đường/Km | SearchInput+Number | req |
| periodValue | Kỳ | Dropdown/Integer | sync Q-PERIOD |
| notes | Ghi chú | Textarea | |
| c1* | C.1 lines | grid add-row | DES-TAB-C1 |
| c2* | C.2 lines | grid add-row | DES-TAB-C2 |
| bs* | BS lines | grid add-row | DES-TAB-BS · assess enum |

## Screens / zones (ids only)

- S-LIST DES-GRID-A · B · B-FILTER · C · D · F · H
- S-FORM-* DES-GRID-Z · DES-FORM-Z1–Z3 · DES-TAB-C1/C2/BS · LeaveConfirmModal
- S-HUB-ENTRY (NEW card) · S-SKIP-MAP
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-05/ui/prototype/csdl-so-05-list-prototype.html`
- mfeStdUrl=`http://localhost:9301/csdl-so-05`
- peerStdUrl=`http://localhost:9301/so-ts/csdl-so-sach?resource=accident-summaries`
- prototype=`specs/csdl-so-05/ui/prototype/csdl-so-05-list-prototype.html`

## API / next

- CRUD BFF `…/asset/csdl-records` · resource=accident-summaries · typed DTO **SA**
- road-route `…/integration/road-routes/search`
- Next: **SA** Schema_CsdlSo05 · 3 collections · enums period/BS/status · typed UiSchema
- e2e: queued `/agent-qa*` only · **cấm** e2e/start:std ở Design

## UNCLEAR

- none

## Full paths (Read only if needed)

- design: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-05/ui/design.md`
- control-hint: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-so-05-control-hint.md`
- real-data: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-so-05-real-data.md`
- prior po: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-05/handoff/po-compact.md`
- STATUS: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-05/STATUS.md`

## Cấm (compact)

Demo/LS SSOT · ERP.* · Guid IdCode · form 3 ô/col1–3 only · gộp đếm xe · invent map · yarn build/e2e/start:std · re-scan demo · paste HTML vào compact · CRUD rpt-tngt
