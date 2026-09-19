# Review findings — platform-task

> Status: **done**  
> Mode: `review_only` · autoApprove=**ON** · `review_confirm`=**done**  
> reviewHash: `sha256:57819cb14ad2bc32980174efe8a13ec205765ca288e74ed9ac5567c276bcb61a` · rulesVersion: `2026.09.19.2`

| Field | Value |
|-------|-------|
| feature | `platform-task` |
| title | Platform.Task / Công việc dùng chung |
| packKind | `platform` |
| changeScope | `new_page` |
| taskId | `task_2e60c5ca` |
| contentHash | `sha256:3090b2b000bd6de1f400c259e6e737fcbb64e4aa6b6227c2828d9d77a5d65962` |
| route_confirm | `route_a` · `/cv` · `/cv/:id` · RMMS `/platform-task` |
| mfeStdUrl | `http://localhost:8608/platform-task` (QA live · STATUS) |
| prior QA | `task_de5e3170` · S0/S1/QA-20 **PASS** · `qa/screens/manifest.json` |
| live shell | **skip** roleOnly=review · **cấm** start:std · evidence = QA manifest + code |
| hashSkip | **no** · prior `REVIEW-META` draft |

## Scope

| Surface | Repo / path |
|---------|-------------|
| UI hub | `D:\MFE-CORE\Linm.Web.Task` · list/detail/parcel · **cấm** DES-GRID |
| BE | cite Medical `/tasks` + `/tasks/pool` + sla · **0** RMMS TasksController · **cấm ERP.*** |
| Parcel | `ChatSectionHost` → `@linm/message` `ChatSectionParcel` `mode=both` |
| Step 4b | **N/A** `consumer_cite_p1` |

## Findings

| ID | Class | Sev | Where | Repro | Disposition |
|----|-------|-----|-------|-------|-------------|
| REV-Q-01 | query | — | `GET /tasks` page+pageSize=20 · stats separate | mine list | **PASS** |
| REV-Q-02 | query | — | `GET /tasks/pool` unpaged | SA API-02 cite | **PASS** (cite) |
| REV-S-01 | security | — | BFF `apiClient` · **0** secrets FE prod path | page | **PASS** |
| REV-S-02 | security | P3 | `standalone/mockAuth.ts` token chỉ `StandaloneEntry` | dev std | Accept |
| REV-UI-01 | ui-fn | — | KPI + tabs mine/pool/sla · detail lifecycle · parcel host | QA T-QA-TASK-01…06 | **PASS** |
| REV-UI-HDR-01 | ui-fn | — | title `Công việc nền tảng` · **0** `CREATE` / `≠ Cổng…` | code + T-QA-DEMO-01 | **PASS** |
| REV-UI-VI-01 | ui-fn | — | actions VN (Nhận/Bắt đầu/Hoàn thành/Tạo) | list+detail | **PASS** |
| REV-UI-VI-ENC-01 | ui-fn | — | **0** mojibake `á»`/`Ã`/`â€"` src | grep src | **PASS** |
| REV-UI-TB-01 | ui-fn | — | `LinListToolbar` refresh+create · detail back left | list/detail | **PASS** |
| REV-UI-FILTER-RIGHT-01 | ui-fn | — | N/A Kind B | packKind=platform | **N/A** |
| REV-UI-FORM-GRID-05 | ui-fn | — | **0** full-page form `data-form-cols` | hub | **N/A** |
| REV-BE-01 | be-fn | — | endpoint `/tasks*` cite · **0** `api/v1/rmms/tasks` | path scan | **PASS** |
| REV-INFO-01 | info | P3 | SA “P1 không create” vs QA-20 create affordance | CreateTaskModal | Accept (QA contract) |
| REV-INFO-02 | info | P3 | modal hint `Tạo tự do để test` · label `Nguồn (source)` | CreateTaskModal | Accept · cleanup later |

**P0/P1 open:** none · **fix_gaps:** none

## Query (`/review-query`)

- Mine: `taskEndpoint.getTasks` `page` + `pageSize` (default 20) + `status`/`priority`/`search` · KPI `GET /tasks/stats` không fan-out list
- Pool: `GET /tasks/pool` theo SA API-02 (skills optional) · claim `PATCH /tasks/{id}/claim` · không N+1 per row
- SLA: `getSLAAlerts` pageSize 50 · countdown client interval · không full-table pull
- **0** `ERP.*` · **0** invent RMMS task API

## Security

- API qua `@linm-soft-org/linm-web-common-components` `apiClient` · tenant/JWT peer BFF
- Mock token `standalone-dev-token` chỉ seed khi standalone entry — không gắn production route
- IDOR: detail `GET /tasks/{id}` cite Medical · permission `useTaskPermissions` trên action
- **0** password/secret file trong `src` (ngoài mock std)

## UI / BE function

| Gate | Result | Evidence |
|------|--------|----------|
| Platform hub / zones | PASS | DES-PT-LIST/KPI/DETAIL · parcel DES-MSG · **cấm** DES-GRID |
| HDR / VI / CREATE | PASS | `LinPageHeader` VN · T-QA-DEMO-01 |
| Toolbar | PASS | `LinListToolbar` · create right · back left detail |
| Filter V10 | N/A | không Kind B list/report |
| Form grid 5 | N/A | không full-page voucher |
| Parcel | PASS | `mode=both` · `routeMap.task` · fallback VN |
| Lifecycle | PASS | start/complete/submit/block/cancel/approve · Modal reason · toast · **0** `window.alert` |
| Leave | PASS | QA T-QA-TASK-04 · block/cancel Modal |
| BE cite | PASS | Step 4b N/A · Medical paths only |
| Demo note chrome | PASS | **0** stub/Kind D trên list/detail · hint modal = INFO-02 |

## Confirm

`review_confirm` = **done** (autoApprove ON) · verdict **PASS** · no Dev fix_gaps

## Handoff → Dev

| Gap | Task hint |
|-----|-----------|
| — | none |

## Debt (carry)

- REV-INFO-01 reconcile SA “không create P1” với QA-20 (create đã khóa bởi QA)
- REV-INFO-02 bỏ hint test + token EN `source` trên modal
- REV-S-02 mock auth chỉ standalone
- `rmms-task-integrate` **blocked** · GAP-PT-INBOX-01 DEFER P2
- URL legacy packet `:9301` / implement `:9302` — live QA `:8608` (STATUS đã chốt)

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-review |
| skillVersion | 2026.09.19.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.19.01 |
| rulesVersion | 2026.09.19.2 |
| reviewHash | `sha256:57819cb14ad2bc32980174efe8a13ec205765ca288e74ed9ac5567c276bcb61a` |
| contentHash | `sha256:3090b2b000bd6de1f400c259e6e737fcbb64e4aa6b6227c2828d9d77a5d65962` |
| generatedAt | 2026-09-18T19:15:00.000Z |
| versionGate | keep_current (autopilot · SSOT 2026.09.19.01 vs chain 2026.08.25.02) |
| taskId | task_2e60c5ca |
| review_confirm | done |

<!-- Version meta: skillVersion=2026.09.19.01 · schemaVersion=1 · workflowVersion=2026.09.19.01 · rulesVersion=2026.09.19.2 · versionGate=keep_current · taskId=task_2e60c5ca · contentHash=sha256:3090b2b000bd6de1f400c259e6e737fcbb64e4aa6b6227c2828d9d77a5d65962 · reviewHash=sha256:57819cb14ad2bc32980174efe8a13ec205765ca288e74ed9ac5567c276bcb61a · review=PASS · review_confirm=done -->
