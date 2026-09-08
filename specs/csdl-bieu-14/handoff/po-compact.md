# handoff-compact — po · csdl-bieu-14

| | |
|--|--|
| schemaVersion | `1` |
| role | `po` |
| feature | `csdl-bieu-14` |
| title | CSDL Biểu 14 — Hệ thống ITS (GTTM) |
| packKind | `list` |
| changeScope | `new_page` |
| status | `confirmed` |
| taskId | `task_475a3c19` |
| autoApprove | `ON` |
| resource | `its-systems` |
| formNo | `14` |
| columns | `21` |
| IdCode | `IT-` |
| peerSoTs | `so-ts-its-camera` · **cấm** merge |
| contentHash | `sha256:6cfdefa3baaffcf2bd97c7a429bb5043e7f9d77b96bbb77eafaa34689007b112` |
| headerFingerprint | `sha256:14cd156a898dcc971a072dd1cd1b92460a8b597558a90dc9854fead9d4c4de5c` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| confirmedAt | `2026-09-05T14:45:00.000Z` |

## Artifacts

| Kind | Path |
|------|------|
| requirement | `specs/csdl-bieu-14/po/requirement.md` |
| prior compact | `specs/csdl-bieu-14/handoff/data_analy-compact.md` |
| control-hint | `specs/_data-analy/features/csdl-bieu-14-control-hint.md` |
| real-data | `specs/_data-analy/features/csdl-bieu-14-real-data.md` |

## Live bind (1-liner)

- API: `api/v1/asset/csdl-records?resource=its-systems` (+ BFF) · **cấm ERP.***
- Entry: `/csdl-bieu-14` (**alias_now**) · hub NEW card `?resource=its-systems`
- Form: Kind D Slideout 2col · section vị trí + thiết bị + hạ tầng · typed 21 · **cấm** detail*
- Import: XLS Biểu 14 stub P1 · peer so-ts-its-camera · **cấm** merge / ITS AiVision

## Header (21)

`code|roadCode|roadName|province|kmFrom|kmTo|side|direction|gpsLat|gpsLng|deviceType|brand|techSpec|qtyOrLength|operatingStatus|infraKind|clearanceM|infraQty|systemStatus|yearBuilt|notes`

## PO decisions (autoApprove)

| Q | Decision |
|---|----------|
| Q-ROUTE | alias_now |
| Q-PROV | keep_static |
| Q-DIR | lookup |
| Q-QTY-UNIT | number |
| Q-DEVICE-SET | keep_5 (cáp/CCTV/ANPR/VMS/tủ) |
| Q-INFRA-SET | keep_3 (cần vươn/long môn/đế BT) |
| Q-MANAGE | trail_p2 |
| Q-PREFIX | IT |
| Q-LIST-COLS | subset |
| Q-TITLE | ctx_its («Biểu 14 — Hệ thống ITS (GTTM)») |
| Q-DMAP | add_now |
| Q-PEER-LINK | none_p1 |
| Q-SO09 | none_p1 |

## Zones / AC

- List A/B/C/D Kind B · search must work · **cấm** nút Tìm · paginate 50/100/200/500
- Form Kind D · LeaveConfirm dirty · View readOnly · IdCode IT auto
- Grid subset: shared + deviceType/brand/operatingStatus/infraKind · map: none
- Empty: «Chưa có hệ thống ITS» · hub NEW card formNo 14

## GAP (Design/SA)

HUB · TYPED · ROUTE · DEV · INFRA · GPS · DIR · DB Schema_CsdlBieu14 · DMAP · PEER-ITS · ROAD · PROV static · ORG P2 · XLS stub · CUC-11 ≠ merge peer

## Next

| Role | Need |
|------|------|
| **Design** | control-map · prototype 21 · hub card · section TB+HT · reviewUrl · filter-bar HARD |
| SA | typed DTO/UiSchema · Schema_CsdlBieu14 · DOMAIN-MAP slug · **cấm** infra · **cấm** merge road-assets/ITS |
| TL/Dev | wire controlHint · hub card · **cấm** guess Text vs SearchInput |

## Cấm (compact)

ERP.* · invent infra · detail* form · merge so-ts-its-camera/road-assets/ITS AiVision · Guid IdCode · demo SSOT · yarn build/e2e @ po
