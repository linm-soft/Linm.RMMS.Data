# handoff-compact — design · csdl-so-01

| | |
|--|--|
| schemaVersion | `1` |
| role | `design` |
| feature | `csdl-so-01` |
| title | CSDL Sổ 01 — Nhật ký tuần kiểm |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_09c37ee7` |
| resource | `inspection-logs` |
| formNo | `01` |
| IdCode | `SO-` |
| autoApprove | `ON` |
| e2eQa | `ON` |
| design_confirm | `approve` |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| contentHashPrior | `sha256:9b7c5f11adaed6b64404b77225fbdc0a6a4021b39d7a00dc1922c643aff822d3` |
| headerFingerprintPrior | `sha256:4e2c2ee770e209ccf28234cb47c2d32098a6b6f9efb8cc5817b9c8964e64a4da` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-06T01:00:00.000Z` |

## Decisions

- Kind **B** A–D+F+H + Kind **D** Slideout · `data-form-cols=2` · footer_actions_only · entries `inline_grid` typed
- Control = controlHint · **cấm** detail*/col1–3 only · media sau SC FileService · ≥1 nếu repairRequest ≠ empty · max 10
- Alias `/csdl-so-01` + hub `?resource=inspection-logs` · label «Sổ 01 — Nhật ký tuần kiểm»
- Filter-bar HARD 1 hàng · SearchText+🔍 · province/status/road/from/to · **cấm** nút Tìm
- Q-FORMNO/STATUS/MEDIA/PROV/ORG theo PO · GAP-CSDL-ORG-01 DEFER P2 · XLS OUT
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
| bookNo/manageUnit/inspector | Số quyển/ĐV/TK | Text | req |
| roadCode/roadName | Đường | SearchInput+display | req |
| kmFrom/kmTo | Km | Number | kmFrom req |
| periodStart/End | Kỳ sổ | Date | start req |
| notes | Ghi chú | Textarea | |
| entries.* | Dòng NK | Date/Text/Number/Textarea/File | inspectDate·itemProposal·kmFrom·description req · postRepairMediaIds cond |

## Screens / zones (ids only)

- S-LIST DES-GRID-A · B · B-FILTER · C · D · F · H
- S-FORM-* DES-GRID-Z · DES-FORM-Z1–Z3 · DES-ENTRIES · LeaveConfirmModal
- S-HUB-ENTRY · S-SKIP-MAP
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-01/ui/prototype/csdl-so-01-list-prototype.html`
- mfeStdUrl=`http://localhost:9301/csdl-so-01`
- peerStdUrl=`http://localhost:9301/so-ts/csdl-so-sach?resource=inspection-logs`
- prototype=`specs/csdl-so-01/ui/prototype/csdl-so-01-list-prototype.html`

## API / next

- CRUD BFF `…/asset/csdl-records` · resource=inspection-logs · typed DTO **SA**
- road-route `…/integration/road-routes/search` · FileService integrate-file-upload-web
- Next: **SA** Schema_CsdlSo01 · typed UiSchema · file bind
- e2e: queued `/agent-qa*` only · **cấm** e2e/start:std ở Design

## UNCLEAR

- none

## Full paths (Read only if needed)

- design: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-01/ui/design.md`
- control-hint: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-so-01-control-hint.md`
- real-data: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-so-01-real-data.md`
- prior po: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-01/handoff/po-compact.md`
- STATUS: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-01/STATUS.md`

## Cấm (compact)

Demo/LS SSOT · ERP.* · Guid IdCode · form 3 ô/col1–3 only · invent map/file API · yarn build/e2e/start:std · re-scan demo · paste HTML vào compact
