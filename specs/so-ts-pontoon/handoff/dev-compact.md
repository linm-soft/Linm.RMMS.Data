# handoff-compact — dev · so-ts-pontoon

| | |
|--|--|
| schemaVersion | `1` |
| role | `dev` |
| feature | `so-ts-pontoon` |
| title | Sổ TS — Cầu phao |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_65e6ce12` |
| typeCode | `PONTOON` |
| dump | `tbl_pontoon_bridge` |
| prefix | `CP-` |
| clusterUi | `crossing` · tile `t05` |
| mfeStdRoute | `/so-ts?type=PONTOON` |
| mfeStdUrl | `http://localhost:9301/so-ts?type=PONTOON` |
| alias | `/so-ts-pontoon` → redirect |
| API | `api/v1/asset/road-assets` |
| migration | **none** |
| buildMfe | **PASS** |
| buildBe | **PASS** |
| e2eQa | ON (queued `/agent-qa*`) |
| skillVersion | `2026.08.25.02` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-02T07:30:00.000Z` |

## Implemented

- PONTOON list profile · grid columns · filter bar context
- Form S-ATTR editable · name ← name_pontoon_bridge · ẩn kmTo
- BE init `pontoonWorkLevels` / `pontoonBridgeTypes` · prefix CP-
- dumpSpecLabels keys · route alias redirect

## APIs

GET list `?type=PONTOON` · CRUD road-assets · init-data delta · catalogKind `road-assets`

## Debt

Auth perm DEFER · flatten P2 · QA e2e only

## Next

| Role | Need |
|------|------|
| **QA** | `/agent-qa*` · e2e queued |

## Cấm

ERP.* · invent so-ts API · fork AssetFormPage · e2e ở dev
