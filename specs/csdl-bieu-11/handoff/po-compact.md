# handoff-compact — po · csdl-bieu-11

| | |
|--|--|
| schemaVersion | `1` |
| role | `po` |
| feature | `csdl-bieu-11` |
| title | CSDL Biểu 11 — Hệ thống chiếu sáng |
| packKind | `list` |
| changeScope | `new_page` |
| status | `confirmed` |
| taskId | `task_ec8df9b0` |
| autoApprove | `ON` |
| resource | `lighting-systems` |
| formNo | `11` |
| columns | `24` |
| IdCode | `LT-` |
| peerSoTs | `so-ts-lighting` (toolbar deep-link · ≠ merge · qty ≠ điểm) |
| contentHash | `sha256:7980db07b4712336ab0b675fa89feaab75c67fdaef3b54fe94647ab9ec1863d8` |
| headerFingerprint | `sha256:b37759a9224c09c7c63bc81583b4a9bcbca02e74cba8b63579819e90d57f1d1a` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| confirmedAt | `2026-09-05T12:20:00.000Z` |

## Artifacts

| Kind | Path |
|------|------|
| requirement | `specs/csdl-bieu-11/po/requirement.md` |
| prior compact | `specs/csdl-bieu-11/handoff/data_analy-compact.md` |
| control-hint | `specs/_data-analy/features/csdl-bieu-11-control-hint.md` |
| real-data | `specs/_data-analy/features/csdl-bieu-11-real-data.md` |

## Live bind (1-liner)

- API: `api/v1/asset/csdl-records?resource=lighting-systems` (+ BFF) · **cấm ERP.***
- Entry: `/csdl-bieu-11` (**alias_now**) · hub `?resource=lighting-systems`
- Form: Kind D Slideout 2col · 2 section lưới + NLMT · typed 24 · **cấm** detail*
- Import: XLS Biểu 11 stub P1 · peer toolbar deep-link

## Header (24)

`code|roadCode|roadName|province|kmFrom|kmTo|side|gridLed600|gridLed240|gridLed150|gridLed125|gridStatus|gridPoleCount|cabinetCount|substationCount|solarPoleCount|solarControllerCount|solarPanel240Wp|solarLamp100W|solarBattery145Ah|solarCabinetCount|status|manageUnit|notes`

## PO decisions (autoApprove)

| Q | Decision |
|---|----------|
| Q-ROUTE | alias_now |
| Q-PROV | keep_static |
| Q-GRID-STATUS | align_status (tot/tb/kem/hong) |
| Q-LED-ZERO | allow_zero |
| Q-SOLAR-REQ | optional |
| Q-CABINET | split |
| Q-LIST-COLS | subset |
| Q-PEER | toolbar |
| Q-TITLE | keep_demo («Biểu 11 — Hệ thống chiếu sáng») |

## Zones / AC

- List A/B/C/D Kind B · search must work · **cấm** nút Tìm · paginate 50/100/200/500
- Form Kind D · LeaveConfirm dirty · View readOnly · IdCode LT auto
- Grid subset: shared + LED4 + gridStatus + pole/cabinet + status · map: none
- Empty: «Chưa có hệ thống chiếu sáng»

## GAP (Design/SA)

TYPED · ROUTE · GRID/LED/STATUS/QTY · SOLAR · BLOCK · ROAD · PROV static · ORG P2 · XLS stub · CUC-11 peer ≠ merge

## Next

| Role | Need |
|------|------|
| **Design** | control-map · prototype 24 · 2 section · reviewUrl · filter-bar HARD |
| SA | typed DTO/UiSchema · Schema_CsdlBieu11 · **cấm** infra |
| TL/Dev | wire controlHint · **cấm** guess Text vs SearchInput |

## Cấm (compact)

ERP.* · invent infra · detail* form · merge so-ts-lighting · Guid IdCode · demo SSOT · dump điểm→qty · yarn build/e2e @ po
