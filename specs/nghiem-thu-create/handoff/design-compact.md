# Handoff compact — design

schemaVersion: 1
feature: nghiem-thu-create
packKind: sheet
role: design
status: done
skillVersion: 2026.08.25.01
writtenAt: 2026-09-19T17:10:00.000Z
taskId: task_b6b0bafc
autoApprove: ON
changeScope: new_page
contentHash: sha256:c2b17a793325c8eb40cc64a98b7775db138841107cd178cd6a6aa12ba8cfa66f
formPattern: sheet→screen
real_view_parity: v1

## Decisions
- changeScope: new_page · packKind **sheet** · Pattern sheet→screen `#sc-nghiem-thu-create`
- formPattern: sheet→screen · Create draft P1 · TopBar + 3 ListRows · leave-dirty Must
- COPY-01: display = init Label **Mẫu nghiệm thu NN** · **cấm** invent «Mặt đường»
- REQ-01: AssigneeCode/InspectedAt/Status=draft hidden bind
- dual proto ios/ + android/ · hash skip · **cấm** re-scan demo
- design_confirm: **approve** (autoApprove ON) · ux-analy PASS · demo-parity Must=0
- mfe / be: native · BFF catch-all + files · **cấm ERP.*** · **cấm** mfeStdUrl · **cấm** invent create path
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| navCancel | Hủy | BackButton | → nghiem-thu · leave-dirty |
| title | Tạo nghiệm thu | TopBar | fixed |
| navSave | Lưu | TextButton | POST draft · cùng slug |
| templateRow | Mẫu | Select LOOKUP_STATIC | mau-01…10 · init Label |
| locationRow | Vị trí | ListRow+GPS | Zone·Route·FieldInfo |
| attachRow | Đính kèm | PhotoRow/files | MediaIds max 10 |
| assignee/inspectedAt | (ẩn) | derived | API required |
| toastOk/Fail | Đã lưu nháp · NT-* | Toast | **cấm** alert |
| gpsDeny | Định vị bị tắt | Modal | DES-MOB-GPS-DENY |
| leave | Huỷ thay đổi? | Modal | DES-MOB-LEAVE Must |

## Screens / zones (ids only)
- DES-MOB-NGHIEM-THU-CREATE · `#sc-nghiem-thu-create`
- DES-MOB-GPS-DENY · DES-MOB-LEAVE · picker `#sheet-mau`
- parent `#sc-nghiem-thu` · sibling detail pending_confirm
- reviewUrlIos=`file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu-create/ui/prototype/ios/index.html`
- reviewUrlAndroid=`file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu-create/ui/prototype/android/index.html`
- peerStdUrl=`http://localhost:9304/patrol`
- formPattern=sheet→screen · real_view_parity=v1 · Leave=Must

## API / tasks (ids only)
- GET `mobile-bff/api/v1/patrol/nghiem-thu/init-data`
- POST `mobile-bff/api/v1/patrol/nghiem-thu` · Status=draft
- files `mobile-bff/api/v1/files/*` · **cấm** invent path / enqueue
- next: `/agent-sa-mobile` · proxy keep · no MIG · then TL → Dev dual → QA e2e-mobile

## UNCLEAR
- none

## Full paths (Read only if needed)
- design: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu-create/ui/design.md
- ux-analy: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu-create/ui/ux-analy.md
- html-to-native-map: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu-create/ui/html-to-native-map.md
- demo-parity: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu-create/ui/review/demo-parity.md
- ios: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu-create/ui/prototype/ios/index.html
- android: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu-create/ui/prototype/android/index.html
- STATUS: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu-create/STATUS.md
