# handoff-compact — design · csdl-bieu-15

| | |
|--|--|
| schemaVersion | `1` |
| role | `design` |
| feature | `csdl-bieu-15` |
| title | CSDL Biểu 15 — TMC / thu phí / hạt / kho |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_dbeaf01a` |
| resource | `ops-facilities` |
| formNo | `15` |
| columns | `20` · section vị trí + công trình + thiết bị + quản lý |
| IdCode | `OF-` |
| peerSoTs | `so-ts-toll` · `so-ts-rest-area` · `so-ts-station-house` · **cấm** merge · none_p1 |
| autoApprove | `ON` |
| e2eQa | `ON` |
| design_confirm | `approve` |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| contentHashPrior | `sha256:3bf356f00182dd6c0864bf5b88ae4d460ef8da73e5521f1b14756b7168dc20a7` |
| headerFingerprintPrior | `sha256:0064a4903777f7ea8d51c7423d8451a20daf77a5934929001905edaa380f4fe4` |
| skillVersion | `2026.08.29.03` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T15:23:00.000Z` |

## Decisions

- Kind **B** A–D+F + Kind **D** Slideout · `data-form-cols=2` · footer_actions_only · 4 section Vị trí + Cơ sở/công trình + Thiết bị + Quản lý · **cấm** Full-page
- form typed **20** · **cấm** detail* only · Control = controlHint · facilityKind keep_5 · equipmentKind free_text · DT number_m2
- Q-ROUTE **alias_now** `/csdl-bieu-15` · Q-PROV **keep_static** · Q-KIND-SET **keep_5** · Q-EQ-SET **free_text** · Q-AREA-UNIT **number_m2** · Q-MANAGE **in_20** · Q-PREFIX **OF** · Q-LIST-COLS **subset** · Q-TITLE **ctx_tmc** · Q-DMAP **add_now** · Q-PEER-LINK **none_p1** · Q-KM **range**
- GAP-BIEU15-HUB/TYPED/ROUTE/KIND/AREA/EQ/STATUS/DMAP P1 · GAP-CSDL-ROAD-01 SearchInput P1 · ORG Text P1→org P2 · XLS OUT stub
- peer cite only · map none · hub NEW card formNo 15 «TMC / thu phí / hạt / kho»
- API giữ `api/v1/asset/csdl-records` · catalogKind `ops-facilities` · **cấm** ERP.* · **cấm** invent infra · **cấm** road-assets / so-ts-*
- design_confirm **approve** (autoApprove ON) · open Q: **none**
- Report DES-RPT **N/A** · Grid AC YES · Leave YES

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B · 🔍 cụm phải |
| province/status/facilityKind | Tỉnh/TT/Loại CS | Dropdown | LOOKUP_STATIC · keep_5 |
| roadCode | Đường | SearchInput | road-route |
| kmFrom/kmTo | Km | Number | Line · range |
| code | Mã | Text ro | OF- |
| facilityKind/facilityName/courtyard*/building*/other*/status/yearBuilt | Công trình | Dropdown/Text/Number | Z2 |
| equipmentKind/Qty/Status | Thiết bị | Text/Number/Dropdown | Z3 · free_text |
| manageUnit/notes | Quản lý | Text/Textarea | in_20 · org P2 |

## Screens / zones (ids only)

- S-LIST DES-GRID-A · B · B-FILTER · C · D · F · H
- S-FORM-* DES-GRID-Z · DES-FORM-Z1–Z3 · Z2 Cơ sở/công trình · Z3 Thiết bị+Quản lý · LeaveConfirmModal
- S-HUB-ENTRY · S-SKIP-MAP · S-SKIP-PEER
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-15/ui/prototype/csdl-bieu-15-list-prototype.html`
- mfeStdUrl=`http://localhost:9301/csdl-bieu-15`
- hubUrl=`http://localhost:9301/so-ts/csdl-so-sach?resource=ops-facilities`
- prototype=`specs/csdl-bieu-15/ui/prototype/csdl-bieu-15-list-prototype.html`

## API / next

- CRUD BFF `…/asset/csdl-records` · resource=ops-facilities · typed DTO **SA**
- road-route `…/integration/road-routes/search`
- Next: **SA** Schema_CsdlBieu15 · UiSchema typed · Facility*/Area*/Equipment* · DOMAIN-MAP slug · **cấm** invent infra · **cấm** merge road-assets/so-ts-*
- e2e: queued `/agent-qa*` only · **cấm** e2e/start:std ở Design

## UNCLEAR

- none

## Full paths (Read only if needed)

- design: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-15/ui/design.md`
- control-hint: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-15-control-hint.md`
- real-data: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-15-real-data.md`
- prior po: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-15/handoff/po-compact.md`
- STATUS: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-15/STATUS.md`

## Cấm (compact)

Demo/LS SSOT · ERP.* · Guid IdCode · form 3 ô only · invent map · invent infra API · merge so-ts-toll/rest/station/road-assets · yarn build/e2e/start:std · re-scan demo · paste HTML vào compact
