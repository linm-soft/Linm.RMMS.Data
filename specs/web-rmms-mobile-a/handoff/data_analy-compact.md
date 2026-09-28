# Handoff compact — data_analy

schemaVersion: 1
feature: web-rmms-mobile-a
packKind: list
role: data_analy
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T06:39:33.767Z
contentHash: sha256:110e845481b0f27091c0f5ca856fef74524bc1634ab8e3785a5d7755730eea45
taskId: task_0a76198d

## Decisions
- changeScope: edit_page · editTask=1 · NEW AutocodeTask · keep PO/Design
- formPattern: Mobile full / sheet (phone max-width 430) · N/A ERP Modal/Slideout
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-mobile-a
- be: D:/AI-QLBD/Linm.RMMS.WebService · Patrol + Integration + Auth + Files · cấm ERP.*
- demo: N/A · no Excel toolbar/export (SUBMIT override)
- deltaCite: docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md
- Pattern B: CheckInSheet Lưu luôn bật trừ saving · GPS deny on-click banner
- road-route: SearchInput · xóa ROAD_ROUTE_SEED/filterSeed/QL.22 · miss → `--`
- users: resolve/display via GET integration/users · Mobile.Bff forward · miss → `--`
- transport: mobileApiBase()/VITE_MOBILE_API_URL only · cấm web-bff
- align: /align-mobile-to-mfe · 430px · no new tab/route/icon · no android/ios proto
- real-data §A+§B: PASS · map: none
- open questions: UNCLEAR-PLAN-POINT · UNCLEAR-NOTE-ENCODE · UNCLEAR-USER-RESOLVE-A

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| route | tuyến | SearchInput | no seed · miss `--` |
| userName | người | Text RO+resolve | users catalog |
| userSearch | chọn người | SearchInput | Bff forward (shared) |
| direction | chiều | Dropdown | Note chieu=* |
| plannedDate | ngày | Date | |
| kmFrom/kmTo | km | Number | Note encode TK-01 |
| inspectMode | hình thức | Dropdown | dinh-ky/dot-xuat |
| inspectReason | lý do | Text | Pattern B no pre-disable |
| planPointLabel | điểm KH | Text | plan-points empty OK |
| lat/lng/accuracyM | GPS | GPS | banner on submit |
| submitCheckIn | Lưu | Button | disable only saving |
| content | nội dung | Text | check-in |
| photoLocalIds | ảnh | FileMulti | files/* |
| historyCards | lịch sử | List | GET sessions filter |

## Screens / zones (ids only)
- TD-00 · TD-01 · TD-02 · TD-03 · TD-07 · TK-00 · TK-01
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-a/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-mobile-a
- DES-GRID / LinErpListFilterBar: N/A phone hub

## API / tasks (ids only)
- FormMode↔API: POST patrol/sessions · POST …/check-ins · GET sessions · GET road-routes/search · GET users
- real-data §A+§B: PASS · delta gaps SEED/PATTERN-B/USERS
- T-*: (team_lead from delta)

## UNCLEAR
- UNCLEAR-PLAN-POINT: empty plan-points · no auto MatchOk
- UNCLEAR-NOTE-ENCODE: chiều/km/mode in Note until Schema D
- UNCLEAR-USER-RESOLVE-A: A resolve-only vs full picker (PO)

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mobile-a-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mobile-a-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-mobile-a.md
- delta: D:/AI-QLBD/Linm.RMMS.Data/docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-a/STATUS.md
