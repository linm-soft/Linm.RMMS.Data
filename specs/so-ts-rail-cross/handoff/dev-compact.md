# handoff-compact — dev · so-ts-rail-cross

| | |
|--|--|
| schemaVersion | `1` |
| role | `dev` |
| feature | `so-ts-rail-cross` |
| title | Sổ TS — Giao cắt đường sắt |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_73072d33` |
| typeCode | `RAIL_CROSS` |
| dump | `tbl_railway_crossing` |
| prefix | `DS-` |
| clusterUi | `crossing` · tile `t15` |
| mfeStdRoute | `/so-ts?type=RAIL_CROSS` |
| mfeStdUrl | `http://localhost:9301/so-ts?type=RAIL_CROSS` |
| alias | `/so-ts-rail-cross` → redirect |
| API | `api/v1/asset/road-assets` |
| migration | **none** |
| buildMfe | **PASS** |
| buildBe | **PASS** |
| e2eQa | ON (queued `/agent-qa*`) |
| skillVersion | `2026.08.25.02` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-02T07:45:00.000Z` |

## Implemented

- RAIL_CROSS list profile · grid columns · filter bar context
- Form S-ATTR editable · name ← name_crossing · ẩn kmTo
- BE init `railCrossProtectionTypes` / `railCrossTrafficControlMethods` · prefix DS-
- dumpSpecLabels traffic_control + shortest_waiting · route alias redirect

## APIs

GET list `?type=RAIL_CROSS` · CRUD road-assets · init-data delta · catalogKind `road-assets`

## Debt

Auth perm DEFER · flatten P2 · QA e2e only

## Next

| Role | Need |
|------|------|
| **QA** | `/agent-qa*` · e2e queued |

## Cấm

ERP.* · invent so-ts API · fork AssetFormPage · e2e ở dev
