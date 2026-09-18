# handoff-compact — map-service / agent-dev
schemaVersion: 1
role: dev
feature: map-service
alias: map-service
taskId: task_814f7976
at: 2026-09-17T01:35:00.000Z
changeScope: edit_page
gap: osrm_self_host
mode: fix_gaps
packKind: map
mfeStdUrl: http://localhost:9301/map-service

## DoR
- compose `--profile osrm` config PASS
- setup_osrm.sh + nginx-osrm.conf.example + vietnam.poly trackable
- VITE_OSRM_URL / Gis:OsrmUrl → http://127.0.0.1:5000 (0 public OSRM defaults)
- yarn typecheck Gis PASS
- RMMS.Service.Api build PASS (Gis OsrmUrl)
- extract/smoke HTTPS DEFER Linux server

## Paths
- BE: D:/API-CORE/Linm.Platform.MapService/docker-compose.yml · local-script/setup_osrm.sh · nginx-osrm.conf.example
- FE: Linm.Web.RMMS.Gis/src/shared/map/osrmCenterline.ts · .env.template
- Bake: Linm.RMMS.WebService Gis:OsrmUrl (appsettings + GisRouteBakeOptions)
- STATUS: specs/map-service/STATUS.md
- context: docs/context/features/map-service.md

## APIs
- OSRM loopback: GET /nearest/v1/driving/{lng},{lat}?number=1 · GET /route/v1/driving/{coords}
- MapService gis/* unchanged

## Debt / NEXT
- Linux: ./local-script/setup_osrm.sh (~4GB) → docker compose --profile osrm up -d
- Nginx TLS fill server_name + certs
- /review-map-release after HTTPS live (cấm auto PASS)
- Wave 1–4 remain done (cấm flip pending)

## Verify
- docker compose --profile osrm config PASS
- yarn typecheck PASS
- dotnet build RMMS.Service.Api PASS
- 0 router.project-osrm.org in prod env templates / code defaults
