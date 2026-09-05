# handoff-compact — dev → qa

| | |
|--|--|
| schemaVersion | `1` |
| role | `dev` |
| feature | `so-ts-culvert-x` |
| title | Sổ TS — Cống thoát nước ngang |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_c9bbebd3` |
| typeCode | `CULVERT_X` |
| dump | missing (GAP-CULVERT-X-01) · empty OK |
| clusterUi | `crossing` · tile `t07` |
| prefix | `CN-` (GIS `CN` · `cong`) |
| formPattern | **Full page** · CatalogFormShell 5 cols · **S-LOC-POINT** |
| Kind | **B** A–D+F+H |
| mfeStdRoute | `/so-ts-culvert-x` |
| mfeStdUrl | `http://localhost:9301/so-ts-culvert-x` |
| peerStdUrl | `http://localhost:9301/so-ts?type=CULVERT_X` |
| alias | `/so-ts-culvert-x` → Navigate live **REQUIRED** |
| API | `api/v1/asset/road-assets` |
| domain | **Asset** |
| migration | **none** P1 |
| e2eQa | **ON** (queued `/agent-qa*` only) |
| build | MFE `yarn build` **PASS** · BE `dotnet build` **PASS** |
| contentHashPrior | `sha256:baf73523f54f4452cfe4c8eaef3f1a5cd333c56f48f44933027a34a417d49b1b` |
| skillVersion | `2026.08.19.04` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| writtenAt | `2026-09-01T13:10:00.000Z` |

## Artifact

- implement: `specs/so-ts-culvert-x/implement/so-ts-culvert-x.md`
- filterBar: `docs/context/features/so-ts-culvert-x-filter-bar.md`

## Decisions shipped

- Kind B · dumpSpecs P1 · flatten DEFER · **cấm** Schema_* / Step 4b
- `name` optional · list OFF · trống OK · **cấm** IsWeak
- Point: **S-LOC-POINT** · ẩn kmTo · **cấm** ép `"0"`
- LOOKUP init: typeWork · culvertShapes · materialBody · structures
- prefix **CN-** · grid hide-empty width/material_body_id · ẩn type/kmTo/SL/ĐVT
- LeaveConfirmModal shared · alias Navigate REQUIRED

## APIs

| Method | Path |
|--------|------|
| GET/POST/PUT/DELETE | `api/v1/asset/road-assets` (+ BFF proxy) |
| GET | `.../init-data` · `.../summary-by-type` |

## Debt

- GAP-CN-FLAT-01 flatten P2 · Auth DEFER · E2E `/agent-qa*` only · dump CSV 0

## Next

| Role | Need |
|------|------|
| **qa** | `/agent-qa*` · scenarios · e2e C/E/V/D + filter V1–V5 · **cấm** invent |
