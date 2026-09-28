# Handoff compact — team_lead

schemaVersion: 1
feature: web-rmms-nghiem-thu
packKind: list
role: team_lead
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T15:25:00.000Z
taskId: task_728c6377
contentHash: sha256:b8f3ce70ff3e80073c39d2dac6a01d2fed2e98232877ef6979881eef8e37acb4
changeScope: edit_page
route_confirm: approve
autoApprove: ON

## Decisions
- changeScope: edit_page · citeDelta SUBMIT-VALIDATE · NghiemThuFormPage · cấm typed new_page
- formPattern: Mobile list+create/detail ≤430 · Pattern B · N/A ERP Modal · Android 1-1 · nghiemThu.*
- domain: Patrol (patrol) · DOMAIN-MAP keep · cấm ERP.* · cấm invent NT controller
- mfe: Linm.Web.RMMS.Mobile · mfeStdRoute=/nghiem-thu/moi · mfeStdUrl http://localhost:9301/nghiem-thu/moi
- nativeRouteCite: /field/nghiem-thu* alias → /nghiem-thu* · cấm sửa iOS/Android
- be: Linm.RMMS.WebService · Mobile.Bff :5202 · Step 4b skip · entity/migration none · DELETE OUT
- Delta: Pattern B CTA always-on + banner string[] · SearchInput route+assignee · capture=environment · remove seed
- API: keep patrol/nghiem-thu CRUD+init+files · Delta road-routes/search · users BFF forward
- DES-GRID / LinErpListFilterBar / T-UI-LIST-01 Kind B / T-UI-FILTER / T-QA-FILTER: N/A phone
- route_confirm: approve · autoApprove · STD-ROUTE /nghiem-thu/moi
- T-* Dev: T-UI-LKP/FIELD/FORM/LEAVE/PROD/UX/RESP + T-BE-INIT/CRUD + T-PERM · QA: T-QA-FORM/CRUD
- devSlash=/agent-dev · cite T-W3-08 + SUBMIT-VALIDATE
- next: /agent-dev · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| list/search/empty | List/Search/Static | keep · search P1 |
| route * | SearchInput | road-routes/search · no seed |
| assignee * | SearchInput | integration/users · BFF |
| validationBanner * | Banner | Pattern B string[] |
| saveCreate/saveEdit * | Button | always-on except saving |
| mediaIds * | PhotoRow | capture=environment · ≤10 |
| gpsCapture | Action | deny=no fake |

## Screens / zones (ids only)
- NT-00 · NT-01 · NT-02 · NT-03 · NT-04 · NT-05 · NT-06 · NT-06b · NT-07 · NT-08 · NT-09 · NT-10 · NT-10b · NT-11
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-nghiem-thu/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/nghiem-thu/moi
- DES-GRID / LinErpListFilterBar: N/A phone list

## API / tasks (ids only)
- FormMode↔API: GET list · init-data · POST · GET/{id} · PUT · files/* · road-routes/search · users
- API mới/entity/migration: none · DELETE OUT · Step 4b skip
- T-UI-LKP-01 · T-UI-FIELD-01 · T-UI-FORM-01 · T-UI-LEAVE-01 · T-UI-PROD-01 · T-UI-UX-01 · T-UI-RESP-01
- T-BE-INIT-01 · T-BE-CRUD-01 · T-PERM-01 · T-QA-FORM-01 · T-QA-CRUD-01
- N/A: T-UI-LIST-01 Kind B · T-UI-FILTER · T-UI-CFG · T-BE-UISCHEMA · T-QA-FILTER · T-UI-HIST
- devSlash=/agent-dev · implement=specs/web-rmms-nghiem-thu/implement/web-rmms-nghiem-thu.md

## UNCLEAR
- UNCLEAR-ROUTE-SEED → Dev remove seed/QL.22
- UNCLEAR-SEARCHINPUT-PKG → Dev MFE SearchInput
- RESOLVED: USERS-BFF · DOMAIN-MAP · BFF-PROXY · FILTER · DELETE · STD-ROUTE

## Full paths (Read only if needed)
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-nghiem-thu/task/web-rmms-nghiem-thu.md
- sa compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-nghiem-thu/handoff/sa-compact.md
- design compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-nghiem-thu/handoff/design-compact.md
- submit-validate: D:/AI-QLBD/Linm.RMMS.Data/docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-nghiem-thu/STATUS.md
