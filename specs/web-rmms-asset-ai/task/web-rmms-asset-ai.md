# Team lead — Task — web-rmms-asset-ai

> Status: **confirmed** · writtenAt `2026-09-25T16:01:00.000Z` · task `task_d405f168`  
> skillVersion: `2026.09.05.03` · packKind: `list` · autoApprove: ON  
> **Cấm** xóa file này · **cấm** implement trong role team_lead.

| | |
|--|--|
| Feature | `web-rmms-asset-ai` |
| Title | Camera AI và HITL |
| Role | `team_lead` |
| changeScope | `new_page` |
| formPattern | Mobile full ≤430 · detect + HITL · N/A ERP Modal/Slideout |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-asset-ai` |
| mfeStdUrl | `http://localhost:9301/web-rmms-asset-ai` |
| nativeRouteCite | SCREENS `/asset/ai` + `/asset/ai/hitl/{id}` · alias shell nếu cần |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` `mobile-bff/api/v1` · domain **AiVision** (`ai-vision`) · **cấm ERP.*** |
| demo | N/A |
| DES-GRID / LinErpListFilterBar | N/A phone |
| Step 4b / migration | **skip** · API Mới / entity: **none** |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-ai/ui/prototype/index.html` |
| zones | AA-00 … AA-14 |
| nextSlash | `/agent-dev` · roleOnly stop (GAP-PKT-ROLE-01) |

## route_confirm

| Field | Value |
|-------|-------|
| action | **confirm** (new_page) |
| mfeStdRoute | `/web-rmms-asset-ai` |
| mfeStdUrl | `http://localhost:9301/web-rmms-asset-ai` |
| shellAlias | optional `/asset/ai` + `/asset/ai/hitl/{id}` if shell requires |
| note | Follow STATUS URL · Design UNCLEAR-STD-ROUTE chốt |

## Decisions (rolled from prior)

- Detect: photo* · GPS Acc≤30 · RouteId* · PatrolTripId opt · nearby warn opt · POST detect-assets → Draft → nav HITL · **cấm auto-confirm**
- HITL: confirm + dismiss · pin drag **local** · score **SHOW RO %** · no gate
- GPS: `navigator.geolocation` · deny/poor blocks detect · **cấm** fake / type-in / 0,0
- Labels: `useFormOptions()` / `assetAi.*` · **cấm** hardcode VN form
- DES-LEAVE: in-app discard · **cấm** native confirm
- Copy: Android icon/layout 1-1 · **cấm** sửa iOS/Android native
- REMOVED: me* / feedback / cam-view · collect/adjust/list · Field doors / journal… (out of slug)
- SA: reuse AiVision · **cấm invent AssetAiController** · DOMAIN-MAP row `web-rmms-asset-ai` done

## FormMode ↔ API

| Mode | APIs |
|------|------|
| Detect (Create Draft) | `POST ai-vision/uploads/init` + PUT · `GET integration/road-routes/search` · `GET patrol/sessions` · `GET ai-vision/asset-candidates/nearby` · `POST ai-vision/detect-assets` |
| HITL (Confirm \| Dismiss) | `GET ai-vision/asset-candidates/{id}` · `POST …/confirm` · `POST …/dismiss` |
| BFF | Mobile.Bff only · no new controller · Step 4b skip |

## Tasks

| id | page / slice | role | deps | status | DoD (slim) |
|----|--------------|------|------|--------|------------|
| T-01 | Route + shell page `/web-rmms-asset-ai` · AA-00 navBack → Hub `/asset` | FE | — | pending | Route registered · deep-link mfeStdUrl · navBack Hub · no ERP.* |
| T-02 | Detect form AA-01…AA-05 · photo · GPS RO · RouteId* · trip opt · Acc≤30 gate | FE | T-01 | pending | Fields bind DetectAssetsRequest · geolocation only · deny/poor blocks CTA · useFormOptions |
| T-03 | Nearby warn AA-06 · Detect/Cancel AA-07 · POST detect → Draft → HITL | FE | T-02 | pending | Optional GET nearby · POST detect-assets · **no** auto-confirm · nav HITL with draft id |
| T-04 | HITL AA-08…AA-14 · draft bind · pin local drag · score SHOW RO · confirm/dismiss | FE | T-03 | pending | GET candidate · pin local-only · confirm+dismiss CTA · leave=in-app discard |
| T-05 | Wire Mobile.Bff clients · error/toast · DES-LEAVE · Android 1-1 parity zones | FE | T-01 | pending | All live APIs via BFF · labels i18n keys · prototype parity AA-* · **cấm** native confirm |
| T-BE | — | — | — | **N/A** | No new API / entity / migration (SA) |

### Assignee

- Impl: `/agent-dev` · MFE cwd `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile`
- QA E2E: queued `/agent-qa*` · **cấm** e2e ở team_lead/dev unless QA role
- Review: `/agent-review` after QA

## Acceptance map (PO → T-*)

| AC | Owner task |
|----|------------|
| Detect photo* GPS Acc≤30 RouteId* → Draft → HITL | T-02 · T-03 |
| Nearby optional warn | T-03 |
| HITL confirm + dismiss · pin local · score SHOW | T-04 |
| No auto-confirm on detect | T-03 |
| Labels useFormOptions · no hardcode VN | T-02 · T-05 |
| GPS deny/poor blocks · no fake | T-02 |
| DES-LEAVE in-app | T-04 · T-05 |
| Android 1-1 · cấm native code change | T-05 |

## Out of scope

- me / me-profile / me-settings / feedback / cam-view
- collect / adjust / list
- Field doors · journal / kết ca / tồn tại / tần suất (other shells)
- New BE controller · migration · Step 4b
- ERP.* namespaces

## Prior artifacts

| Role | Compact | Full |
|------|---------|------|
| data_analy | `handoff/data_analy-compact.md` | `_data-analy/features/web-rmms-asset-ai-control-hint.md` · `…-real-data.md` |
| po | `handoff/po-compact.md` | `po/requirement.md` |
| design | `handoff/design-compact.md` | `ui/design.md` + prototype |
| sa | `handoff/sa-compact.md` | `be/solution-discovery.md` |

## UNCLEAR

- (none blocking) DOMAIN-MAP-AAI · HITL-SPLIT · SCORE-01 · STD-ROUTE — resolved prior roles
