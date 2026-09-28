# Handoff compact — po

schemaVersion: 1
feature: web-rmms-ui-align
packKind: list
role: po
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T06:45:00.000Z

## Decisions
- changeScope: edit_page
- formPattern: Full / Overlay / Tab (phone chrome · ≠ ERP Modal/Slideout)
- packKind confirm: list (phone chrome · ≠ Kind B desktop)
- Grid AC: N/A-chrome · peers keep filter-bar · Report AC: N/A
- Leave: LeaveConfirmModal (login dirty) · useAlert (logout) · cấm native
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · ≤430
- be: Linm.RMMS.WebService + Mobile.Bff :5202 · cấm ERP.* / Web BFF / MapService browser
- TabBar 5: Trang Chủ · Tuần đường · Vấn đề · Công việc · Tôi · tab.field=«Tuần đường»
- Me: profile·offline·signal·feedback·cam·ops·logout · settings=toast
- GAP-DA-UIALIGN-ME-01 CLOSED: alias /web-rmms-feedback · /web-rmms-cam-view khi peer mount · else toast me.peerPending · cấm invent route/API
- GAP-DA-UIALIGN-TAB-01 CLOSED: tab.field VN=Tuần đường · Design icon #i-mappin
- Routes: reuse existing only · cấm product route mới · cấm mock
- Labels: useFormOptions() / LOOKUP_STATIC
- Map tiles: GET mobile-bff/api/v1/gis/tiles/…
- devSlash: /agent-dev
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| tab.items | tab.* | TabBar | 5 items |
| login.* | login | Text/Password | Leave dirty |
| home.* | home | Static/Nav/RO | guest+staff |
| field.doors | field | Button/Nav | sessions badge |
| me.* | me rows | Nav/RO/toast | settings toast |
| map.tiles | tiles | Map | BFF only |
| peer lists | incident/work/… | reuse peer | live BFF |

## Screens / zones (ids only)
- UA-00…12 · DES-MOB-TABBAR · LOGIN · HOME · FAQ · PRIVACY · PAT-* · ATT · CI · INC-* · GIS · ASSET-* · AI · VIS · DET-HITL · EST · MNT · OPS · ME · CAM-VIEW · FEEDBACK · SUPERVISE · NT · FIELD-REFLECT · CAM-PATROL
- Grid AC: N/A-chrome · Leave: PASS
- peerStdUrl: http://localhost:9301/web-rmms-shell · /web-rmms-home
- reviewUrl: (Design)
- mfeStdUrl: http://localhost:9301/web-rmms-ui-align

## API / tasks (ids only)
- Auth: login/refresh/profile · Notification overview · optional patrol/sessions
- Tiles: mobile-bff/api/v1/gis/tiles/{layer}/{z}/{x}/{y}.pbf
- Peer CRUD: DOMAIN-MAP cite only
- real-data §A+§B: PASS · contentHash sha256:554b56d5…

## UNCLEAR
- none

## Full paths (Read only if needed)
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-ui-align/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-ui-align-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-ui-align-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-ui-align.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-ui-align/STATUS.md
