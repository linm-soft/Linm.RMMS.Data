# QA — drone scenarios

| Field | Value |
|-------|-------|
| feature | `drone` |
| mfeStdUrl | `http://localhost:9313/drone` |
| pack | T-QA-CRUD-01 · FormType |
| status | `done` |
| taskId | `task_df075284` |

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

## T-QA-CRUD-01 — Create→Edit→View→Delete

| # | Layer | Scenario | Expect | Result |
|---|-------|----------|--------|--------|
| QA-10 | FormType | Create `/drone/new` | Required name/flightType/road · Lưu → list | **PASS** (code) |
| QA-11 | FormType | Edit `?mode=edit` | Fields writable · PUT | **PASS** |
| QA-12 | FormType | View default `/:id` | readOnly · Sửa in footer | **PASS** |
| QA-13 | FormType | Copy `?copyFrom=` | New code · POST | **PASS** |
| QA-14 | FormType | Toolbar Delete | confirm · DELETE soft · row gone | **PASS** |
| QA-15 | FormType | Row menu Delete | same `deleteRow` | **PASS** |
| QA-16 | FormType | Form Hủy job | confirm · DELETE · back list | **PASS** |
| QA-20 | FormType ACT | T-UI-ACT-01 inventory · actions wired | Toolbar + row pair form/API | **PASS** |

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
