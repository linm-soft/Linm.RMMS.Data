# Handoff compact — sa

schemaVersion: 1
feature: web-rmms-mobile-a
packKind: list
role: sa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T14:30:00.000Z
taskId: task_96445b40
contentHash: sha256:110e845481b0f27091c0f5ca856fef74524bc1634ab8e3785a5d7755730eea45
solution_confirm: approve
autoApprove: ON

## Decisions
- changeScope: edit_page · editTask=1 · § Delta SUBMIT-VALIDATE · keep wave A Live APIs
- formPattern: Full (TD-00/01/02/07·TK-00/01) · Sheet (TD-03 Pattern B) · phone 430 · LeaveConfirmModal
- Pattern B: TD-03 Lưu always-on except saving · GPS deny banner on-click · cấm fake lat/lng · cấm disabled={!gps}
- route: SearchInput · no ROAD_ROUTE_SEED · miss → `--`
- users: resolve-only A · GET integration/users · Mobile.Bff forward · miss → `--` · picker waves d+
- transport: mobileApiBase()/VITE_MOBILE_API_URL only · cấm web-bff · cấm ERP.*
- Grid/DES-GRID/LinErpListFilterBar: N/A/WAIVE phone hub
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-mobile-a
- be: D:/AI-QLBD/Linm.RMMS.WebService · Patrol+Integration+Auth+Files
- BFF: mobile-bff proxy patrol+integration · API owns · users forward only (no new API)
- entity: PatrolSession · PatrolCheckIn · migration **none**
- Note-encode CLOSED: `chieu=` · `kmFrom/kmTo` · `mode=` · `reason=` · optional startLat/startLng · join `; `
- plan-point CLOSED: empty OK · no auto MatchOk
- DOMAIN-MAP: web-rmms-mobile-a → Patrol (exists)
- gates: TZ=tz_required · XCO=xco_get_only · SHARE=tenant_keep · lookup=share_a
- align: /align-mobile-to-mfe · 430px · no new tab/route/icon
- next: /agent-team-lead · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| route | tuyến | SearchInput | no seed · miss `--` |
| direction | chiều | Dropdown | Note chieu= |
| userName | người | Text RO+resolve | users · miss `--` |
| plannedDate | ngày | Date | PlannedDate |
| kmFrom/kmTo | km | Number | Note TK-01 |
| inspectMode | hình thức | Dropdown | Note mode= |
| inspectReason | lý do | Text | if dot-xuat |
| planPointLabel | điểm KH | Text | empty OK |
| lat/lng/accuracyM | GPS | GPS | Pattern B on-click |
| submitCheckIn | Lưu | Button | disable only saving |
| content | nội dung | Text | check-in |
| photoLocalIds | ảnh | FileMulti | files/* |
| historyCards | lịch sử | List | GET sessions |

## Screens / zones (ids only)
- TD-00 · TD-01 · TD-02(Full) · TD-03(Sheet·Pattern B) · TD-07 · TK-00 · TK-01(Full) · DES-LEAVE
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-a/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-mobile-a

## API / tasks (ids only)
- FormMode↔API: GET/POST sessions · GET/{id} · plan-points · POST/GET check-ins · road-routes/search · integration/users · auth/profile · files/*
- entity/migration: Live · none
- TZ/XCO/SHARE: tz_required · xco_get_only · tenant_keep
- T-*: TL mint edit (Pattern B · no-seed · users Bff · mobileApiBase) · devSlash=/agent-dev

## UNCLEAR
- none

## Full paths (Read only if needed)
- sa: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-a/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-a/ui/design.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mobile-a-real-data.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-a/STATUS.md
- delta: D:/AI-QLBD/Linm.RMMS.Data/docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md
