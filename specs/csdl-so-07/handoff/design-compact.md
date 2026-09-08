# handoff-compact — design · csdl-so-07

| | |
|--|--|
| schemaVersion | `1` |
| role | `design` |
| feature | `csdl-so-07` |
| title | CSDL Sổ 07 — HL + GPTC + Dự án |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_66a57fe0` |
| resource | `row-violations` |
| formNo | `07` |
| IdCode | `SO-` |
| autoApprove | `ON` |
| e2eQa | `ON` |
| design_confirm | `approve` |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| contentHashPrior | `sha256:b928feb3e0d7900398812630e25afa43bfcbf4971633a9c1184c55ea2912ef69` |
| headerFingerprintPrior | `sha256:a923102afa38664e58effeb2b0dccfae12b942d4a3a6fb3c1cb8355df00aa531` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-06T04:20:00.000Z` |

## Decisions

- Kind **B** A–D+F+H + Kind **D** Slideout · `data-form-cols=2` · footer_actions_only · **2 tab** nested `violations[]` / `permits[]`(+QLDA) · add/remove · **cấm** flatten
- Control = controlHint · **cấm** detail*/col1–3
- Alias `/csdl-so-07` + hub `?resource=row-violations` · title «Sổ 07 — HL + GPTC + Dự án» · hub card formNo 6 đến T-REN-01
- Filter-bar HARD 1 hàng · SearchText+🔍 · province/status(`draft|active|closed`)/road/from/to · **cấm** nút Tìm
- status sổ draft|active|closed · VP open|processing|resolved|dismissed · Text org P1 · org DEFER P2 · QLDA Text optional · permitDays Integer · XLS OUT
- Peer drill `rpt-vi-pham-hlatdb` sau typed READY · **cấm** merge form · map none · DES-RPT N/A
- API giữ `api/v1/asset/csdl-records` · **cấm** runtime `/row-violations` · `/construction-permits`
- design_confirm **approve** (autoApprove ON) · open Q: **none**

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B · 🔍 cụm phải |
| province/status | Tỉnh/TT sổ | Dropdown | LOOKUP_STATIC · draft/active/closed |
| roadCode | Đường | SearchInput | road-route |
| fromDate/toDate | Ngày | Date | filter |
| code | Mã | Text ro | SO- |
| contractor/manageUnit | ĐV | Text | req · org P2 |
| road*/km* | Đường/Km | SearchInput+Number | req |
| notes | Ghi chú | Textarea | |
| violations.* | Tab A VP | Date/Number/Text/Dropdown/Textarea | DES-TAB-A · add/remove |
| permits.* | Tab B GPTC+QLDA | Text/Integer/Date/Textarea | DES-TAB-B · projectMgmtUnit |

## Screens / zones (ids only)

- S-LIST DES-GRID-A · B · B-FILTER · C · D · F · H
- S-FORM-* DES-GRID-Z · DES-FORM-Z1–Z3 · DES-TAB-A · DES-TAB-B · DES-ENTRIES-VP · DES-ENTRIES-GP · LeaveConfirmModal
- S-HUB-ENTRY · S-SKIP-MAP
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-07/ui/prototype/csdl-so-07-list-prototype.html`
- mfeStdUrl=`http://localhost:9301/csdl-so-07`
- peerStdUrl=`http://localhost:9301/so-ts/csdl-so-sach?resource=row-violations`
- prototype=`specs/csdl-so-07/ui/prototype/csdl-so-07-list-prototype.html`

## API / next

- CRUD BFF `…/asset/csdl-records` · resource=row-violations · typed DTO **SA**
- road-route `…/integration/road-routes/search`
- Next: **SA** Schema_CsdlSo07 · DOMAIN-MAP row · nested arrays · UiSchema typed
- e2e: queued `/agent-qa*` only · **cấm** e2e/start:std ở Design

## UNCLEAR

- none

## Full paths (Read only if needed)

- design: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-07/ui/design.md`
- control-hint: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-so-07-control-hint.md`
- real-data: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-so-07-real-data.md`
- prior po: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-07/handoff/po-compact.md`
- STATUS: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-07/STATUS.md`

## Cấm (compact)

Demo/LS SSOT · ERP.* · Guid IdCode · form 3 ô/col1–3 only · flatten tabs · invent map · runtime row-violations/construction-permits path · yarn build/e2e/start:std · re-scan demo · paste HTML vào compact
