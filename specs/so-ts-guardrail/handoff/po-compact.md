# Handoff compact — po

schemaVersion: 1
feature: so-ts-guardrail
packKind: list
role: po
status: done
skillVersion: 2026.08.25.01
writtenAt: 2026-09-01T16:14:20.000Z
taskId: task_124d8994
autoApprove: ON
e2eQa: ON

## Decisions
- changeScope: new_page
- formPattern: Full page (CatalogFormShell 5col · cấm Modal/Slideout · cấm tab legacy · reuse S-META/S-ROUTE/S-LOC-RANGE/S-NAME/S-ATTR/S-GPS)
- packKind: list · Kind B · Grid AC YES · Report AC N/A · Leave YES
- typeCode: GUARDRAIL · dump `tbl_guardrail` · tile t17 · cluster linear_protect · CSV 50335 · unit ATGT
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset · live `/so-ts?type=GUARDRAIL`
- alias: STATUS `/so-ts-guardrail` board-only · Design optional Navigate
- be: D:/AI-QLBD/Linm.RMMS.WebService · `api/v1/asset/road-assets` · cấm ERP.*
- GAP-GUARDRAIL-LOOKUP-01: Dropdown LOOKUP_STATIC P1 (loại/VL/mục đích/vị trí)
- GAP-GUARDRAIL-NAME-01: name optional · list primary=type_guardrail · cấm IsWeak→routeSegment
- GAP-GUARDRAIL-REFLECT-01: reflective=Number (SL)
- GAP-GUARDRAIL-PREFIX-01: HL- (GIS short HL)
- GAP-GUARDRAIL-RANGE-01: S-LOC-RANGE · 4 XY dumpSpecs P1 · cấm ép "0"
- GAP-GUARDRAIL-PEER-01: page GUARDRAIL only · NOISE_BARRIER riêng
- Flatten: dumpSpecs P1 · flatten=SA
- Leave: LeaveConfirmModal + useAlert
- contentHash: sha256:d0deaacc164574342c2d10d3b3e7f683ad5df9bbefa2fd3072d92c7af8533cc8
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter |
| type | Loại TS | SearchInput | lock GUARDRAIL |
| route* | 3 tầng | SearchInput | road-route · cấm gộp |
| kmFrom/kmTo | Lý trình | Text | S-LOC-RANGE |
| type_guardrail | Loại hộ lan | Dropdown | LOOKUP_STATIC · grid primary |
| material_id | Vật liệu | Dropdown | dumpSpecs · grid ON |
| reflective | SL phản quang | Number | GAP-GUARDRAIL-REFLECT-01 |
| installation_purpose_id | Mục đích lắp đặt | Dropdown | LOOKUP_STATIC · SPEC-01 |
| actual_length | Chiều dài (m) | Number | grid ON |
| installed_location_id | Vị trí mặt cắt | Dropdown | hide-empty |
| lat*/lng* | XY đầu/cuối | Number | dumpSpecs RANGE |
| name | Tên | Text | optional |
| lat/lng | GPS | Number | S-GPS |

## Screens / zones (ids only)
- S-LIST DES-GRID-A/B/C/D · LinErpListFilterBar (cấm nút Tìm riêng · cấm ảnh invent)
- S-FORM Full page C/E/V/Copy · S-META/S-ROUTE/S-LOC-RANGE/S-NAME/S-ATTR/S-GPS · LeaveConfirmModal
- S-ALIAS `/so-ts-guardrail` board → live filter (optional Navigate)
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9301/so-ts?type=GUARDRAIL
- mfeStdUrl= http://localhost:9301/so-ts-guardrail
- Grid AC=YES · Leave=YES · Report AC=N/A · controlHint cite DA-HINT

## API / tasks (ids only)
- FormMode↔API: list/detail/CRUD/init `…/asset/road-assets` · type=GUARDRAIL
- entity: rmms_road_assets · import RoadAssetCatalogHandler · GIS ho-lan · prefix HL-
- devSlash=/agent-dev
- T-*: DEFER TL (profile + labels + S-ATTR editable + DefaultCodePrefix HL- + lookup seed)

## UNCLEAR
- none

## Full paths (Read only if needed)
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-guardrail/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-guardrail-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-guardrail-real-data.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-guardrail/STATUS.md
