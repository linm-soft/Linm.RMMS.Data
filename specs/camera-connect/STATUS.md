# STATUS — camera-connect

| Field | Value |
|-------|-------|
| feature | `camera-connect` |
| phase | `qa` |
| status | `await_confirm` |
| securityWave | **S1 done** · ingest-apikey **I0–I2 done** `task_c8a1e4b2` |
| changeScope | `edit_page` |
| packKind | `list` |
| gap | `camera_security` · `GAP-CAM-SEC-01…07` S1 closed · S2+ open |
| mode | `fix_gaps` |
| taskId | `task_f921abce` |
| demo | `D:/AI-QLBD/Linm.RMMS.Demo/src/demo/features/camera-connect-demo.html` |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/camera-connect.md` |
| controlHint | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/camera-connect-control-hint.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Camera` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/cameras` · schema `api/v1/open-api/catalogs/camera-devices/ui-schema` |
| skillVersion | `2026.08.15.19` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.15.19` |
| versionGate | `rechecked` |
| mfeStdRoute | `/camera` |
| mfeStdUrl | `http://localhost:9316/camera` |
| updatedAt | `2026-09-06T15:08:43.790Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | released |

## Confirms (chat)

| Key | Value | Notes |
|-----|-------|-------|
| design_confirm | **approved** | autoApprove ON · agent · `task_2eab28c8` · reviewUrl proto + `http://localhost:9316/camera` |
| be_repo_confirm | **approved** | `Linm.RMMS.WebService` |
| ui_repo_confirm | **approved** | `Linm.Web.RMMS.Camera` |
| solution_confirm | **approved** | autoApprove ON · agent · `task_ae3b33f3` · seed `camera-devices` · CRUD keep · no new API |
| sa_tz_gate | **tz_na** | no date filter/field this pack · audit UTC keep |
| sa_xco_gate | **xco_get_only** | API-02 GET/{id} |
| sa_shared_table | **share_tenant** | `CameraDeviceEntity` |
| review_confirm | **approve** | autoApprove ON · `/agent-review` · `task_de015f02` |
| live_gateway_confirm | **pending** | plan 21 · out of this edit |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data_analy | control-hint § Delta | **confirmed** |
| 1 | po | po/requirement.md | **confirmed** |
| 2.1 | design | reviewUrl | **confirmed** |
| 2.2 | sa | be/solution-discovery.md | **confirmed** |
| 3 | team_lead | task/camera-connect.md | **confirmed** |
| 4 | dev | vault AEAD · snapshot-by-id · passwordSet | **confirmed** |
| 5 | qa | T-QA-SEC-S1 · no password JSON · JPEG | **blocked** |
| 6 | review | review/findings.md | **pending** |
## Tasks

| id | page | role | status | notes |
|----|------|------|--------|-------|
| T-CTX-01 | docs | review | **pass** | context keep |
| T-PERM-01 | perm | review | **pass** | `camera.devices.*` FE · BE stub OUT |
| T-UI-LIST-01 | list A–D | review | **pass** | cấm rewrite shell |
| T-UI-CONFIG-01 | list schema | review | **pass** | `LinCatalogUiSchemaEditorModal` |
| T-BE-SCHEMA-01 | camera-devices | review | **pass** | seed keep |
| T-BE-CRUD-01 | cameras | review | **pass** | no new API |
| T-BFF-01 | cameras bff | review | **pass** | proxy keep |
| T-UI-FORM-01 | Kind C view | review | **pass** | **GAP-DES-VIEW-DL CLOSED** `<dl>` |
| T-UI-LKP-01 | form lookup | review | **pass** | **GAP-TL-LKP-SELECT-01 CLOSED** Lin Select |
| T-UI-FIELD-01 | field map | review | **pass** | + dl labels |
| T-UI-PROD-01 | product | review | **pass** | cấm View=readOnly Input |
| T-UI-UX-01 | ux | review | **pass** | **GAP-TL-UX-FILTER-MAX-01 CLOSED** |
| T-UI-ACT-01 | actions | review | **pass** | list keep |
| T-QA-CRUD-01 | qa | qa | **pass** | `task_03f79795` · yarn typecheck+build PASS |
| T-BE-SEC-S1 | vault AEAD | dev | **pass** | `enc:v1:` · passwordSet · snapshot decrypt · GAP-CAM-SEC-01/02/03 |
| T-UI-SEC-S1 | form snapshot | dev | **pass** | empty keep · snapshotById sau Lưu/boot · GAP-CAM-SEC-06/07 |
| T-BFF-SEC-S1 | bff | dev | **pass** | proxy `{id}/snapshot` null body · no pass log |
| T-UI-LIVE-POLL-01 | live JPEG | dev | **pass** | chu kỳ snapshot · timeout · sequential poll · BFF snapshot 120s |
| T-BE-LIVE-G1 | live/start | dev | **pass** | MediaMTX Hub+VPN · TCP probe :554 · fallback JPEG · plan `docs/plan/camera-live/PLAN.md` |
| T-QA-SEC-S1 | qa | qa | **failed** | live Docker plaintext password · e2e hung · `task_f921abce` · qa_fail_rollback |
| T-BE-SEC-S2 | resign | dev | blocked | deps S1 |
| T-UI-SEC-S2 | img resign | dev | blocked | deps S1 |
| T-QA-SEC-S2 | qa | qa | blocked | deps S1 |
| T-BE-SEC-S3 | host Camera | dev | blocked | `/new-service` · pending_confirm |
| T-BE-SEC-S4 | dashboard grant | dev | blocked | deps S2 |
| T-UI-SEC-S4 | wall kiosk | dev | blocked | deps S2 |
| T-BE-SEC-S5 | live token | dev | blocked | plan 21 confirm |
| T-AUTH-KEY-01 | Auth ApiKey store | dev | **pass** | EF pair `20260909074428_Schema_ApiKeys` |
| T-AUTH-INT-01 | Auth introspect | dev | **pass** | `POST /api/v1/apikeys/introspect` |
| T-BE-INGEST-01 | RMMS ingest Auth | dev | **pass** | `X-Api-Key` · query `apiKey` · Auth introspect |
| T-BE-RL-01 | ingest rate limit | dev | **pass** | 120/min key · 60/min IP · 429 |
| T-QA-INGEST-01 | qa ingest auth | qa | pending | 401/403/429 |

## Blockers / open questions

- Cluster `specs/camera-connect/specs/_data-analy/clusters/camera-connect.md` **không tồn tại** — SSOT = control-hint
- GAP-P2-CC-06 / GAP-DEV-CONFIG-PLACEHOLDER-01 / GAP-DEV-GRID-SCHEMA-BOOTSTRAP-01 **CLOSED live**
- GAP-DES-VIEW-DL **CLOSED** — View Z1–Z2 `<dl>` · Pass mask
- GAP-TL-LKP-SELECT-01 **CLOSED** — Lin `Select` model/protocol
- GAP-TL-UX-FILTER-MAX-01 **CLOSED** — removed `filterMaxWidthPx`
- **GAP-CAM-LIVE-POLL CLOSED** — chu kỳ snapshot + timeout · sequential JPEG · BFF 120s
- P2 live gateway **OUT pack** · S5 blocked until `live_gateway_confirm`
- **Security wave S1 QA FAILED** — Docker runtime plaintext password · e2e hung · `qa_fail_rollback` `task_f921abce`
- **Ingest Auth+RL** — **I0–I2 implemented** `task_c8a1e4b2` · Auth `ApiKeys` + introspect · RMMS limiter 120/60/10 · QA T-QA-INGEST-* remaining
- P2 live gateway **OUT pack** · S5 blocked until `live_gateway_confirm`
- Review CRUD `task_de015f02` **approve** · pipeline CRUD **closed**
- Source DTO has `PasswordSet` · **container image stale** (rebuild TLS fail)

## Links
- mfeStdUrl: `http://localhost:9316/camera`
- mfeStdRoute: `/camera`

- po: `D:/AI-QLBD/Linm.RMMS.Data/specs/camera-connect/po/requirement.md`
- data-analy: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/camera-connect-control-hint.md`
- design: `D:/AI-QLBD/Linm.RMMS.Data/specs/camera-connect/ui/design.md`
- sa: `D:/AI-QLBD/Linm.RMMS.Data/specs/camera-connect/be/solution-discovery.md`
- tl: `D:/AI-QLBD/Linm.RMMS.Data/specs/camera-connect/task/camera-connect.md`
- tl-security: `D:/AI-QLBD/Linm.RMMS.Data/specs/camera-connect/task/camera-security.md`
- tl-ingest-apikey: `D:/AI-QLBD/Linm.RMMS.Data/specs/camera-connect/task/camera-ingest-apikey.md`
- plan-security: `D:/AI-QLBD/Linm.RMMS.Data/docs/plan/camera-security/PLAN.md`
- implement: `D:/AI-QLBD/Linm.RMMS.Data/specs/camera-connect/implement/camera-connect.md`
- qa: `D:/AI-QLBD/Linm.RMMS.Data/specs/camera-connect/qa/scenarios.md`
- review: `D:/AI-QLBD/Linm.RMMS.Data/specs/camera-connect/review/findings.md`
- prototype: `D:/AI-QLBD/Linm.RMMS.Data/specs/camera-connect/ui/prototype/camera-connect-list-prototype.html`
- reviewUrl: `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/camera-connect/ui/prototype/camera-connect-list-prototype.html` · live `http://localhost:9316/camera`
- DOMAIN-MAP: `D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md`

## Resume / closeout

- closeout QA S1: `task_f921abce` · roleOnly=`qa` · `/agent-qa` · T-QA-SEC-S1 **failed** · Docker live still returns `password` · snapshot non-JPEG · `yarn e2e-qa` hung playwright install · fallback PNG S0/S1/QA-20 · FE typecheck+build **PASS** · docker rebuild TLS fail · **qa_fail_rollback** · at: `2026-09-06T15:06:48.507Z`
- closeout Dev S1: `task_24969c1a` · roleOnly=`dev` · `/agent-dev-camera-connect` · T-BE/UI/BFF-SEC-S1 **pass** · AEAD `enc:v1:` · passwordSet · snapshotById · yarn typecheck+build **PASS** · BE Release **PASS** · chain next=`qa` T-QA-SEC-S1 · at: `2026-09-06T14:42:00.000Z`
- closeout Review: `task_de015f02` · roleOnly=`review` · `/agent-review` · autoApprove=ON · **approve** · yarn typecheck+build **PASS** · pipeline CRUD **closed** · at: `2026-08-16T04:10:00.000Z`
- closeout QA: `task_03f79795` · roleOnly=`qa` · `/agent-qa` · autoApprove=ON · T-QA-CRUD-01 **pass** · yarn typecheck+build **PASS** · chain next=`review` **pending enqueue** · at: `2026-08-16T04:00:00.000Z`
- closeout Dev: `task_ba4221ae` · roleOnly=`dev` · `/agent-dev` · autoApprove=ON · chain next=`qa` **pending enqueue** · FE write Camera form/list · BE no write · yarn typecheck+build **PASS** · at: `2026-08-16T03:55:00.000Z`

## Verify

| Gate | Result |
|------|--------|
| Role | qa · S1 **failed** · handoff/qa-compact.md |
| FE yarn typecheck | **PASS** |
| FE yarn build | **PASS** (`LINM_RUN_DEV_LOCAL_BUNDLE=1` · webpack 5.109.2 · size warn) |
| yarn e2e-qa | **FAIL/HUNG** · playwright install dirlock · Pages :9100 down |
| API SEC live | **FAIL** · GET/BFF still plaintext `password` |
| docker rebuild | **FAIL** · TLS auth.docker.io |
| ERP.* | **none** |

## Version meta

skillVersion=`2026.08.15.19` · schemaVersion=`qldb-workflow-skill-v1` · workflowVersion=`2026.08.15.19`
