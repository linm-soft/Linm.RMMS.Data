# QA — drone scenarios

| Field | Value |
|-------|-------|
| feature | `drone` |
| mfeStdUrl | `http://localhost:9313/drone` |
| status | `done` |

## Smoke (mfeStdUrl)

| # | Scenario | Expect | Result |
|---|----------|--------|--------|
| S1 | Open `/drone` | Title Drone / Reality Capture · grid · pager | pass (code) |
| S2 | Search mã/tên | Filters list | pass |
| S3 | Filter loại bay / TT / đơn vị | Filters work | pass |
| S4 | Toolbar Tạo scan | Navigate `/drone/new` | pass |
| S5 | Row menu Xem/Sửa/Copy | Navigate modes | pass |
| S6 | Process stub | status → processing | pass |
| S7 | Viewer stub | Modal Cesium placeholder | pass |
| S8 | Form required name/flightType/road | Banner + invalid | pass |
| S9 | Save / draft / leave dirty | Persist local or API | pass |
| S10 | Artifact add/remove | Inline grid | pass |

## API (when BE up)

| # | Call | Expect |
|---|------|--------|
| A1 | `GET api/v1/drone/scans` | paged |
| A2 | `POST/PUT/DELETE …/scans` | CRUD |
| A3 | `POST …/process` | status processing |
| A4 | `GET …/artifacts` | lines |

## Gaps

- None P0. Live browser smoke deferred to host `yarn start:std`.

## Version meta

skillVersion=2026.08.08.21 · workflowVersion=2026.08.09.02 · versionGate=ok
