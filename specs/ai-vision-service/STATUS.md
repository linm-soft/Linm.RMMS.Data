# STATUS — ai-vision-service

| Field | Value |
|-------|-------|
| feature | `ai-vision-service` |
| phase | `qa` |
| status | `await_confirm` |
| agent | `agent-qa` |
| qa | `specs/ai-vision-service/qa/scenarios.md` · **FAIL** · gaps CRUD-EMPTY + DEMO-NOTE |
| packKind | `ai` |
| stackSkill | `/implement-ai-vision-stack` |
| changeScope | `edit_page` |
| lock | `1` · role=`qa` FAIL · next=`dev` (qa_fail_rollback) |
| context | `Linm.RMMS.Data/docs/context/features/ai-vision-service.md` |
| plan | `Linm.RMMS.Data/docs/plan/ai-vision-service/README.md` |
| analy | `specs/_data-analy/features/ai-vision-service-control-hint.md` + `…-real-data.md` · **done** |
| po | `specs/ai-vision-service/po/requirement.md` · **done** |
| design | `specs/ai-vision-service/ui/design.md` · **done** · `design_confirm=approve` |
| sa | `specs/ai-vision-service/be/solution-discovery.md` · **done** · `solution_confirm=approve` |
| team_lead | `specs/ai-vision-service/task/ai-vision-service.md` · **done** · `route_confirm=approve` |
| implement | `specs/ai-vision-service/implement/ai-vision-service.md` · **done** |
| prototype.reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/ai-vision-service/ui/prototype/ai-vision-service-stack-hub.html` |
| prototype.artifact | `specs/ai-vision-service/ui/prototype/ai-vision-service-stack-hub.html` |
| peerStdUrl | `http://localhost:9301/ai-vision-service` |
| mfeStdUrl | `http://localhost:9301/ai-vision-service` |
| mfeStdRoute | `/ai-vision-service` |
| handoff | `specs/ai-vision-service/handoff/qa-compact.md` |
| taskId | `task_fe3ee27b` |
| updatedAt | `2026-09-12T08:18:57.620Z` |
## Roles

| Role | Status | at |
|------|--------|-----|
| data_analy | **done** | 2026-09-12T07:05:00.000Z |
| po | **done** | 2026-09-12T07:10:00.000Z |
| design | **done** | 2026-09-12T14:20:00.000Z |
| sa | **done** | 2026-09-12T14:30:00.000Z |
| team_lead | **done** | 2026-09-12T14:45:00.000Z |
| dev | **done** | 2026-09-12T07:36:00.000Z |
| qa | **FAIL** | 2026-09-12T08:20:00.000Z |
| review | pending | — |

## Stack waves

| Wave | Name | Confirm | Status | at |
|------|------|---------|--------|-----|
| 0p | host | scaffold_new_service | done | 2026-09-05T23:55:00+07:00 |
| 1 | vision_service | taxonomy=catalog_codes | done | 2026-09-06T00:35:00+07:00 |
| 2 | bff_service | web=done · mobile=defer(lane web) | done | 2026-09-12T07:36:00.000Z |
| 3 | integrate_bff | web=done · mobile=defer | done | 2026-09-12T07:36:00.000Z |
| 4 | detect_ui | web=done · ios=defer · android=defer | done | 2026-09-12T07:36:00.000Z |
| 5 | p2_gpu | skip_until_p2_0 | pending | — |

## Notes

- Pattern `/implement-map-stack`: một wave / lượt · AskQuestion · **cấm** fake done.
- **Wave 0p done:** `D:/AI-QLBD/Linm.RMMS.Vision` · `api/src/Vision.Api` · `:5311`.
- **Wave 1 done:** `api/v1/ai-vision/**` + internal `POST /api/v1/vision/detect` · GPT HttpClient (0 Azure SDK) · taxonomy catalog (`TRAFFIC_SIGN` ≠ `GANTRY_SIGN`) · uploads init→PUT→complete · persist Draft `linm_rmms_vision` · CLI pair `20260905173308_Schema_RmmsVision` (+ Designer) · `dotnet build` PASS · `GET /health` 200 · `detect-assets` Draft · `mock://` 422.
- **data_analy done (`task_d99b6bc2`):** control-hint + real-data §A/B · § Delta edit_page Wave 2–4 · chrome skip · lane web · contentHash CTX `90961d05…`.
- **PO done (`task_73b158a9`):** requirement + Screens/Grid AC peer/Leave · packKind `ai` confirm · Q-AVS-* autoApprove · hash skip · compact `handoff/po-compact.md`.
- **Design done (`task_8d8de4b9`):** stack hub prototype + reviewUrl · peer list links · chrome skip · Full page 5-col wire · LeaveConfirmModal · `design_confirm=approve` · compact `handoff/design-compact.md` · **cấm** re-scan demo.
- **SA done (`task_31fbfd98`):** solution FormMode↔API API-01…09 · BFF retarget · hard cutover · HITL upload · gates tz_required / xco_get_only / share_tenant · `solution_confirm=approve` · compact `handoff/sa-compact.md` · **cấm** Write MFE/native · **cấm** Dev trước TL.
- **Team lead done (`task_48454408`):** task pack AI §2c + Wave T-BFF-01 · T-CUTOVER-01 · T-HITL-UPLOAD-01 · Kind B list/filter/form/leave · T-UI-AI-* · T-CTX-FILTER-01 · `route_confirm=approve` `/ai-vision-service` · compact `handoff/team_lead-compact.md` · **cấm** product code / e2e / migration this role.
- **Dev done (`task_61d43835`):** Wave2 BFF `VisionApi`→`:5311` (detections/candidates/uploads/health) · Wave3 cutover WebService refuse `:5301` · Wave4 hub `/ai-vision-service` + filter-bar context + remove P1/P2 stub toolbar · builds PASS · compact `handoff/dev-compact.md` · **cấm** e2e this role · debt: peer ITS/ANPR/predict/est còn RmmsApi.
- **QA FAIL (`task_fe3ee27b`):** e2e S0/S1/QA-20 PASS · T-QA-AI/FILTER shot PASS · **GAP-QA-CRUD-EMPTY-01** (`/ai-kd` empty) · **GAP-QA-DEMO-NOTE-01** (form badge «Tạo mới») · compact `handoff/qa-compact.md` · PNG `qa/screens/` · queue **failed** · board **`qa_fail_rollback`** · **cấm** completed · **cấm** phase=done.
- Wave 5 `skipped` OK khi `skip_until_p2_0`.
- **Cấm** TrafficAI scaffold · ERP.* · yarn run-implement-mobile (this lane).
