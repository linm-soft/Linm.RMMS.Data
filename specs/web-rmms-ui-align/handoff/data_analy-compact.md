# Handoff compact — data_analy

schemaVersion: 1
feature: web-rmms-ui-align
packKind: list
role: data_analy
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T06:39:04.505Z

## Decisions
- changeScope: edit_page
- formPattern: N/A (chrome + nav align · peer forms reuse)
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · phone max-width 430
- be: D:/AI-QLBD/Linm.RMMS.WebService + Mobile.Bff :5202 · cấm ERP.* / Web BFF client / MapService browser
- TabBar: 5 — Trang Chủ · Tuần đường · Vấn đề · Công việc · Tôi (prototype stroke)
- Me: profile · offline · signal · feedback · cam-view · ops · logout · settings=toast only
- Routes: reuse existing only · cấm product route mới · cấm mock list
- Labels: useFormOptions() / LOOKUP_STATIC copy keys
- Map tiles: GET mobile-bff/api/v1/gis/tiles/… (GisTilesController)
- filterBar: N/A (peers keep own)
- open questions: GAP-DA-UIALIGN-ME-01 (cam-view/feedback path) · GAP-DA-UIALIGN-TAB-01 (tab.field copy)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| tab.items | tab.* | TabBar | 5 items |
| login.* | login | Text/Password | overlay |
| home.* | home | Static/Nav/RO | guest+staff |
| field.doors | field | Button/Nav | sessions badge opt |
| me.* | me rows | Nav/RO/toast | settings toast |
| map.tiles | tiles | Map | BFF only |
| peer lists | incident/work/asset/… | reuse peer hints | live BFF |

## Screens / zones (ids only)
- DES-MOB-TABBAR · LOGIN · HOME · FAQ · PRIVACY · PAT-* · ATT · CI · INC-* · GIS · ASSET-* · AI · VIS · DET-HITL · EST · MNT · OPS · ME · CAM-VIEW · FEEDBACK · SUPERVISE · NT · FIELD-REFLECT · CAM-PATROL
- golden: specs/mobile-p1/ui/prototype/android/index.html · ios/index.html (read-only)
- reviewUrl: (Design)
- peerStdUrl: http://localhost:9301/web-rmms-home · /web-rmms-shell/…

## API / tasks (ids only)
- Auth: login/refresh/profile · Notification overview · optional patrol/sessions
- Tiles: mobile-bff/api/v1/gis/tiles/{layer}/{z}/{x}/{y}.pbf
- Peer CRUD: DOMAIN-MAP cite only
- real-data §A+§B: PASS · §D map: PASS · §E chrome progress: PASS

## UNCLEAR
- GAP-DA-UIALIGN-ME-01 · GAP-DA-UIALIGN-TAB-01

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-ui-align-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-ui-align-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-ui-align.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-ui-align/STATUS.md
