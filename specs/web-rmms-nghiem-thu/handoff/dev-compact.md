# Handoff compact — dev

schemaVersion: 1
feature: web-rmms-nghiem-thu
packKind: list
role: dev
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T15:30:00.000Z
taskId: task_72515633
contentHash: sha256:b8f3ce70ff3e80073c39d2dac6a01d2fed2e98232877ef6979881eef8e37acb4
changeScope: edit_page
autoApprove: ON
e2eQa: ON (queued — `/agent-qa*` only)

## Decisions
- changeScope: edit_page · citeDelta SUBMIT-VALIDATE · NghiemThuFormPage Pattern B + SearchInput
- formPattern: Mobile list+create/detail ≤430 · Pattern B · N/A ERP Modal · nghiemThu.*
- domain: Patrol · DOMAIN-MAP keep · cấm ERP.* · cấm invent NT controller
- mfe: Linm.Web.RMMS.Mobile · mfeStdRoute=/nghiem-thu/moi · mfeStdUrl http://localhost:9301/nghiem-thu/moi
- nativeRouteCite: /field/nghiem-thu* alias → /nghiem-thu* · cấm sửa iOS/Android
- be: Linm.RMMS.WebService · Mobile.Bff :5202 · Step 4b skip · entity/migration none · DELETE OUT
- Pattern B: CTA disabled={saving} only · banner string[] NT-10b · 0 disabled={!canSave} · 0 alert.warning
- SearchInput: route=ROAD_ROUTE_LOOKUP_CONFIG · assignee=USER_LOOKUP_CONFIG · resolveCurrentUser create default
- media: RouteCaptureControl environment camera · MediaIds ≤10 · GPS deny=no fake
- BFF users: UsersMobileController already forward · verified · no new BE code
- build: MFE yarn build PASS · Mobile.Bff dotnet build PASS
- next: /agent-qa · roleOnly stop (GAP-PKT-ROLE-01) · cấm e2e ở Dev

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| list/search/empty | List/Search/Static | keep |
| route * | SearchInput | road-routes/search · no seed |
| assignee * | SearchInput | integration/users · BFF |
| validationBanner * | Banner | Pattern B string[] |
| saveCreate/saveEdit * | Button | always-on except saving |
| mediaIds * | PhotoRow | RouteCaptureControl · env cam |
| gpsCapture | Action | deny=no fake |

## Screens / zones (ids only)
- NT-00 · NT-01 · NT-02 · NT-03 · NT-04 · NT-05 · NT-06 · NT-06b · NT-07 · NT-08 · NT-09 · NT-10 · NT-10b · NT-11
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-nghiem-thu/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/nghiem-thu/moi
- DES-GRID / LinErpListFilterBar: N/A phone

## API / tasks (ids only)
- FormMode↔API: GET list · init-data · POST · GET/{id} · PUT · files/* · road-routes/search · users
- API mới/entity/migration: none · DELETE OUT · Step 4b skip
- T-UI-LKP/FIELD/FORM/LEAVE/PROD/UX/RESP · T-BE-INIT/CRUD · T-PERM = **done**
- T-QA-FORM/CRUD = pending QA · N/A: T-UI-LIST Kind B · FILTER · CFG · HIST
- implement=specs/web-rmms-nghiem-thu/implement/web-rmms-nghiem-thu.md

## UNCLEAR
- UNCLEAR-ROUTE-SEED: **resolved** Dev — lookups no ROAD_ROUTE_SEED; NT uses SearchInput
- UNCLEAR-SEARCHINPUT-PKG: **resolved** Dev — MFE SearchInput + ROAD/USER configs
- UNCLEAR-USERS-BFF: **resolved** prior — UsersMobileController present · build PASS
- RESOLVED keep: DOMAIN-MAP · BFF-PROXY · FILTER · DELETE · STD-ROUTE

## Full paths (Read only if needed)
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-nghiem-thu/implement/web-rmms-nghiem-thu.md
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-nghiem-thu/task/web-rmms-nghiem-thu.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-nghiem-thu/STATUS.md
- form: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile/src/pages/WebRmmsNghiemThu/NghiemThuFormPage.tsx
