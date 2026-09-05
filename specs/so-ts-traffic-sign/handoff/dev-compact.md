# handoff-compact — dev → qa

| | |
|--|--|
| schemaVersion | `1` |
| role | `dev` |
| feature | `so-ts-traffic-sign` |
| title | Sổ TS — Biển báo |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_3fdbc375` |
| typeCode | `TRAFFIC_SIGN` |
| dump | `tbl_road_sign` |
| clusterUi | `atgt_point` · tile `t32` |
| prefix | `BB-` |
| formPattern | Full page · CatalogFormShell 5 cols · S-LOC-POINT |
| Kind | B A–D+F+H |
| mfeStdRoute | `/so-ts?type=TRAFFIC_SIGN` |
| mfeStdUrl | `http://localhost:9301/so-ts?type=TRAFFIC_SIGN` |
| peerStdUrl | `http://localhost:9301/so-ts?type=TRAFFIC_SIGN` |
| alias | `/so-ts-traffic-sign` → Navigate live |
| API | `api/v1/asset/road-assets` |
| domain | Asset |
| migration | none P1 |
| e2eQa | ON (queued `/agent-qa*` only) |
| build | MFE yarn build PASS · BE dotnet build PASS |
| contentHashPrior | `sha256:36d61492d82e2fbb37adf4b9935116f9ce71e357e336150de46e95049566de88` |
| skillVersion | `2026.08.19.04` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| writtenAt | `2026-09-01T14:20:00.000Z` |

## Artifact

- implement: `specs/so-ts-traffic-sign/implement/so-ts-traffic-sign.md`
- filterBar: `docs/context/features/so-ts-traffic-sign-filter-bar.md`

## Decisions shipped

- dumpSpecs P1 · flatten DEFER · cấm Schema_*/Step 4b · cấm PoleCount
- name←sign_code_number · content=road_sign_content · SearchInput traffic-sign-types
- S-LOC-POINT · ẩn kmTo · LOOKUP materialsSign/shapesSign · prefix BB-
- LeaveConfirmModal · alias Navigate

## APIs

| Method | Path |
|--------|------|
| GET/POST/PUT/DELETE | `api/v1/asset/road-assets` (+ BFF) |
| GET | `.../init-data` (+ materialsSign · shapesSign) |
| GET | Integration `traffic-sign-types/search` |

## Debt

- GAP-SIGN-FLAT-01 P2 · Auth DEFER · E2E QA only

## Next

| Role | Need |
|------|------|
| qa | `/agent-qa*` · C/E/V/D + filter V1–V5 |
