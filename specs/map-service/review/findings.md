# Review findings — map-service

> Status: **done** · Mode: `review_only` · autoApprove=ON · `review_confirm=accept`  
> reviewHash: `f59c7fa5afb6b70a28290c66773fb3e7bf3235a6e025bc84735d6fc234ea1512` · rulesVersion: `2026.09.17.2`  
> task: `task_1028a7b7` · changeScope: `edit_page` · gap: `osrm_self_host` · packKind: `map`

| | |
|--|--|
| Feature | `map-service` |
| Title | MapService — OSRM self-host + GIS clip |
| Role | `review` |
| Prior QA | `confirmed` · verdict PASS · `handoff/qa-compact.md` |

## Scope

| Surface | Repo / path |
|---------|-------------|
| FE OSRM client | `Linm.Web.RMMS.Gis` · `src/shared/map/osrmCenterline.ts` · `.env.template` |
| BE compose OSRM | `D:/API-CORE/Linm.Platform.MapService` · `docker-compose.yml` profile `osrm` · `local-script/setup_osrm.sh` |
| Bake | `Linm.RMMS.WebService` · `Gis:OsrmUrl` → `http://127.0.0.1:5000` |
| Map UI | `Gis*Page` clip BFF MVT · mfeStdUrl board `http://localhost:9301/map-service` · QA runtime `:9302` `/gis/tai-san` |
| Evidence | `qa/screens/{S0,S1,QA-20}.png` · `qa/scenarios.md` |

## Findings

| ID | Class | Sev | Where | Repro | Fix hint |
|----|-------|-----|-------|-------|----------|
| — | — | — | — | **0 P0/P1** trong scope `osrm_self_host` | — |
| REV-NOTE-01 | debt | P3 | Linux OSRM extract | runtime `:5000` chưa listen trên Windows agent | `./local-script/setup_osrm.sh` · DEFER Linux · **cấm** fake PASS |
| REV-NOTE-02 | debt | P3 | Store / HTTPS | Nginx TLS + live smoke chưa | `/review-map-release` **sau** HTTPS OSRM · **cấm** auto-done |
| REV-NOTE-03 | process | P3 | `specs/_data-analy/features/` | thiếu `map-service-control-hint.md` / `map-service-real-data.md` | prior `data_analy` confirmed · scope `edit_page` — **không** block accept gap này |

## Query (`/review-query`)

- Scope gap = OSRM self-host · **không** đổi list/import BE catalog / Field SSOT.
- Clusters / geojson vẫn RMMS Gis qua BFF — không N+1/OOM gap mới từ change này.
- Verdict: **PASS** (N/A surface).

## Security

- Guest tiles `AllowAnonymous` (basemap/boundaries/mask) · overlay/geojson **`[Authorize]`** + guest layer deny → **401** (STATUS + controller).
- OSRM bind `127.0.0.1:${OSRM_HOST_PORT:-5000}` · **cấm** `0.0.0.0:5000` prod (compose comment).
- FE/BE defaults **0** `router.project-osrm.org` · loopback `http://127.0.0.1:5000`.
- Secrets: không phát hiện credential mới trong env templates gap này.
- Verdict: **PASS** (scope).

## UI / BE function · map pack R1–R11

| Check | Result | Evidence |
|-------|--------|----------|
| R1 Live map | PASS | QA S0 canvas Leaflet/MapLibre |
| R2 MFE clip · 0 OSM.org CDN | PASS | QA S1 · grep Gis*Page 0 `openstreetmap.org`/`tileLayer(` |
| R8 OSRM self-host default | PASS | `osrmCenterline.ts` + `.env.template` + QA-20 0 `project-osrm.org` |
| R11 Fit VN clip chrome | PASS | QA S0 Lớp/Chú giải/Thuộc tính |
| R3–R7 / R9–R10 | PASS (prior waves) | Wave 4 done · không regress trong gap OSRM |
| ERP Kind B / form chrome | N/A | map pack · không list/form voucher |

BE: `docker compose --profile osrm` service `osrm-backend` + graph volume · Dev/QA config PASS · extract runtime DEFER (NOTE-01).

## Confirm

`review_confirm` = **accept** (autoApprove=ON) · **không** `fix_gaps` · **không** implement trong role này.

## Handoff → next

| Item | Action |
|------|--------|
| OSRM extract + HTTPS | Linux server · rồi `/review-map-release` |
| phase | **cấm** `done` đến khi Store/HTTPS gate (hoặc product confirm) |
| e2e | queued `/agent-qa*` only — role review **không** chạy e2e |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-review |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.17.2 |
| reviewHash | f59c7fa5afb6b70a28290c66773fb3e7bf3235a6e025bc84735d6fc234ea1512 |
| generatedAt | 2026-09-17T02:20:00+07:00 |
| versionGate | ok |
| hashInputs | `handoff/dev-compact.md` · `handoff/qa-compact.md` · `qa/scenarios.md` · `osrmCenterline.ts` · `docker-compose.yml` |
