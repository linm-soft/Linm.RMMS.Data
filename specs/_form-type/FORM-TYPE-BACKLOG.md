# Form-type backlog

| | |
|---|---|
| skill | `scan-qlbd-form-type` |
| hash | `cec7d67cf76269e0` |
| filter | list, map, ai, report, dashboard, master |
| generated | 2026-08-14T14:24:23.113Z |

| feature | formType | prior | conf | readme | domain | mfe | stdPort | mfeStdUrl | demo | downstream |
|---------|----------|-------|------|--------|--------|-----|---------|-----------|------|------------|
| `asset-type` | **master** | done | high | Context | master | `Linm.Web.RMMS.Master` | 9318 | http://localhost:9318/master/asset-type | N/A | /erp-form-context · /agent-qldb-workflow |
| `org-unit` | **master** | done | high | Context | master | `Linm.Web.RMMS.Master` | 9318 | http://localhost:9318/master/org-unit | N/A | /erp-form-context · /agent-qldb-workflow |
| `partner-unit` | **master** | done | high | Context | master | `Linm.Web.RMMS.Master` | 9318 | http://localhost:9318/master/partner-unit | N/A | /erp-form-context · /agent-qldb-workflow |
| `road-route` | **master** | done | high | Context | master | `Linm.Web.RMMS.Master` | 9318 | http://localhost:9318/master/road-route | N/A | /erp-form-context · /agent-qldb-workflow |
| `asset` | **list** | busy | medium | Demo | asset | `Linm.Web.RMMS.Asset` | 9301 | http://localhost:9301/asset | features/asset-demo.html | /erp-form-context · /agent-qldb-workflow |
| `attendance` | **list** | busy | medium | Context | patrol | `Linm.Web.RMMS.Field` | 9304 | http://localhost:9304/patrol/attendance | features/attendance-demo.html | /erp-form-context · /agent-qldb-workflow |
| `camera-connect` | **list** | busy | high | Demo | camera | `Linm.Web.RMMS.Camera` | 9316 | http://localhost:9316/camera | features/camera-connect-demo.html | /erp-form-context · /agent-qldb-workflow |
| `citizen` | **list** | busy | medium | Demo | integration | `Linm.Web.RMMS.Integration` | 9314 | http://localhost:9314/integration/citizen | features/citizen-demo.html | /erp-form-context · /agent-qldb-workflow |
| `contract` | **list** | busy | medium | Demo | contract | `Linm.Web.RMMS.Contract` | 9312 | http://localhost:9312/contract | features/contract-demo.html | /erp-form-context · /agent-qldb-workflow |
| `csdl-so-sach` | **list** | busy | medium | Demo | patrol | `Linm.Web.RMMS.Asset` | 9301 | http://localhost:9301/asset/csdl-so-sach | features/csdl-so-sach-demo.html | /erp-form-context · /agent-qldb-workflow |
| `ai-asset-detect` | **ai** | done | high | Demo | ai-vision | `Linm.Web.RMMS.AiVision` | 9303 | http://localhost:9303/ai-vision/ai-asset-detect | features/ai-asset-detect-demo.html | /agent-qldb-workflow |
| `ai-vision` | **ai** | done | high | Demo | ai-vision | `Linm.Web.RMMS.AiVision` | 9303 | http://localhost:9303/ai-vision | features/ai-vision-demo.html | /agent-qldb-workflow |
| `drone` | **list** | busy | medium | Demo | drone | `Linm.Web.RMMS.Drone` | 9313 | http://localhost:9313/drone | features/drone-demo.html | /erp-form-context · /agent-qldb-workflow |
| `feedback` | **list** | busy | medium | Demo | integration | `Linm.Web.RMMS.Integration` | 9314 | http://localhost:9314/integration/feedback | features/feedback-demo.html | /erp-form-context · /agent-qldb-workflow |
| `incident` | **list** | busy | medium | Demo | incident | `Linm.Web.RMMS.Field` | 9304 | http://localhost:9304/incident | features/incident-demo.html | /erp-form-context · /agent-qldb-workflow |
| `copilot` | **ai** | new | high | Demo | copilot | `Linm.Web.RMMS.Copilot` | 9310 | http://localhost:9310/copilot | features/copilot-demo.html | /agent-qldb-workflow |
| `integration` | **list** | busy | medium | Demo | integration | `Linm.Web.RMMS.Integration` | 9314 | http://localhost:9314/integration | features/integration-demo.html | /erp-form-context · /agent-qldb-workflow |
| `inventory` | **list** | busy | medium | Demo | contract | `Linm.Web.RMMS.Contract` | 9312 | http://localhost:9312/contract/inventory | features/inventory-demo.html | /erp-form-context · /agent-qldb-workflow |
| `estimate` | **ai** | new | high | Demo | ai-vision | `Linm.Web.RMMS.AiVision` | 9303 | http://localhost:9303/ai-vision/estimate | features/estimate-demo.html | /agent-qldb-workflow |
| `maintenance` | **list** | busy | medium | Context | maintenance | `Linm.Web.RMMS.Field` | 9304 | http://localhost:9304/maintenance | features/maintenance-demo.html | /erp-form-context · /agent-qldb-workflow |
| `ops` | **list** | busy | low | Demo | features | `Linm.Web.RMMS.Field` | 9304 | http://localhost:9304/ops | features/ops-demo.html | /erp-form-context · /agent-qldb-workflow |
| `patrol` | **list** | busy | medium | Demo | patrol | `Linm.Web.RMMS.Field` | 9304 | http://localhost:9304/patrol | features/patrol-demo.html | /erp-form-context · /agent-qldb-workflow |
| `pavement-section` | **list** | busy | medium | Demo | asset | `Linm.Web.RMMS.Asset` | 9301 | http://localhost:9301/asset/pavement-section | features/pavement-section-demo.html | /erp-form-context · /agent-qldb-workflow |
| `its-anpr-overload` | **ai** | new | high | Demo | ai-vision | `Linm.Web.RMMS.AiVision` | 9303 | http://localhost:9303/its-anpr-overload | ai-vision/its-anpr-overload.html | /agent-qldb-workflow |
| `its-traffic-detect` | **ai** | new | high | Context | ai-vision | `Linm.Web.RMMS.AiVision` | 9303 | http://localhost:9303/its-traffic-detect | ai-vision/its-traffic-detect.html | /agent-qldb-workflow |
| `users` | **list** | busy | medium | Demo | integration | `Linm.Web.RMMS.Integration` | 9314 | http://localhost:9314/integration/users | features/users-demo.html | /erp-form-context · /agent-qldb-workflow |
| `gis` | **map** | done | high | Demo | gis | `Linm.Web.RMMS.Gis` | 9302 | http://localhost:9302/gis | features/gis-demo.html | /agent-dev-oms-map · /agent-qldb-workflow |
| `dashboard` | **dashboard** | new | high | Context | bao-cao | `Linm.Web.RMMS.Report` | 9311 | http://localhost:9311/bao-cao | features/dashboard-demo.html | /erp-report-context · /agent-qldb-workflow |
| `gis-draw-google` | **map** | done | high | Demo | gis | `Linm.Web.RMMS.Gis` | 9302 | http://localhost:9302/gis/draw-google | gis/gis-draw-google.html | /agent-dev-oms-map · /agent-qldb-workflow |
| `gis-draw-live` | **map** | done | high | Demo | gis | `Linm.Web.RMMS.Gis` | 9302 | http://localhost:9302/gis/draw | gis/gis-draw-live.html | /agent-dev-oms-map · /agent-qldb-workflow |
| `predict` | **ai** | new | high | Demo | ai-vision | `Linm.Web.RMMS.AiVision` | 9303 | http://localhost:9303/ai-vision/predict | features/predict-demo.html | /agent-qldb-workflow |
| `reports` | **report** | new | high | Context | bao-cao | `Linm.Web.RMMS.Report` | 9311 | http://localhost:9311/bao-cao | features/reports-demo.html | /erp-report-context · /agent-qldb-workflow |

<!-- Version meta: skillId=scan-qlbd-form-type schemaVersion=1 -->
