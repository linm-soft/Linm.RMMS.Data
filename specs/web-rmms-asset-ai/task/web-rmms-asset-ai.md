# Team lead — Task — web-rmms-asset-ai

> Status: **confirmed** · writtenAt `2026-09-27T10:45:00.000Z` · task `task_d7075d83`  
> skillVersion: `2026.09.05.03` · packKind: `list` · autoApprove: ON  
> contentHash: `sha256:e223304b3658e8067766aed729e36988d54f1df8ad38ca953b2e176e63c9594c`  
> **Cấm** xóa file này · **cấm** implement trong role team_lead.

| | |
|--|--|
| Feature | `web-rmms-asset-ai` |
| Title | Camera AI + HITL — Pattern B detect + SearchInput route |
| Role | `team_lead` |
| changeScope | `edit_page` |
| formPattern | Mobile full ≤430 · Pattern B · SearchInput · N/A ERP Modal/Slideout |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/tai-san/ai` |
| mfeStdUrl | `http://localhost:9301/tai-san/ai` |
| nativeRouteCite | SCREENS `/asset/ai` + `/asset/ai/hitl/{id}` · **cấm** sửa native |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` `mobile-bff/api/v1` · domain **AiVision** (`ai-vision`) · **cấm ERP.*** |
| demo | N/A · hash skip |
| DES-GRID / LinErpListFilterBar | N/A phone |
| Step 4b / migration | **skip** · API Mới / entity: **none** · T-BE **N/A** |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-ai/ui/prototype/index.html` |
| zones | AA-00 … AA-14 |
| deltaCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` |
| nextSlash | `/agent-dev` · roleOnly stop (GAP-PKT-ROLE-01) |

## route_confirm

| Field | Value |
|-------|-------|
| action | **confirm** (edit_page · route đã ship) |
| mfeStdRoute | `/tai-san/ai` |
| mfeStdUrl | `http://localhost:9301/tai-san/ai` |
| shellAlias | native cite `/asset/ai` + `/asset/ai/hitl/{id}` — **no** new tab/route/icon |
| note | UNCLEAR-STD-ROUTE resolved · **cấm** đổi lại `/web-rmms-asset-ai` |

## Decisions (rolled from prior)

- changeScope: **edit_page** · cấm typed CRUD new_page · cấm Excel · cấm invent API
- **Delta Pattern B:** drop `disabled={!canDetect}` · validate on click (banner photo+route+GPS) · GPS deny **không** khóa CTA trước click · Acc≤30 vẫn gate khi submit
- **Route:** SearchInput Live `integration/road-routes/search` · **cấm** `ROAD_ROUTE_SEED` · miss=`--`
- Detect → Draft → nav HITL · **cấm auto-confirm**
- HITL: confirm/dismiss **busy-only** · pin drag **local** · score **SHOW RO %**
- Labels: `useFormOptions()` / `assetAi.*` · **cấm** hardcode VN
- DES-LEAVE: in-app discard · **cấm** native confirm
- BFF: Mobile.Bff only · **cấm** web-bff · **cấm** AssetAiController
- REMOVED: me* · feedback · cam-view · collect/adjust · ROAD_ROUTE_SEED · `disabled={!canDetect}`
- Prior ship T-01…T-05 = **done** · this run = **T-EDIT** only

## FormMode ↔ API

| Mode | APIs |
|------|------|
| Detect (Create Draft) | `POST ai-vision/uploads/init` + PUT · `GET integration/road-routes/search` · `GET patrol/sessions` · `GET ai-vision/asset-candidates/nearby` · `POST ai-vision/detect-assets` |
| HITL (Confirm \| Dismiss) | `GET ai-vision/asset-candidates/{id}` · `POST …/confirm` · `POST …/dismiss` |
| BFF | Mobile.Bff Live reuse · no new controller · Step 4b skip |

## Tasks

| id | page / slice | role | deps | status | DoD (slim) |
|----|--------------|------|------|--------|------------|
| T-01…T-05 | AI+HITL prior ship `/tai-san/ai` · Live BFF · zones AA-* | FE | — | **done** | Route + detect + HITL + BFF wire đã ship |
| T-EDIT | Detect validate Pattern B · SearchInput route · no seed | FE | sa | **pending** | Drop `!canDetect` · on-click banner (photo+route+GPS) · GPS deny không khóa CTA trước · SearchInput Live miss=`--` · **cấm** ROAD_ROUTE_SEED · HITL busy-only · score SHOW % · useFormOptions · prototype AA-* parity · **cấm** auto-confirm |
| T-BE | — | — | — | **N/A** | No new API / entity / migration (SA) |
| T-QA | e2e Pattern B + SearchInput | QA | T-EDIT | **pending** | queued `/agent-qa*` · **cấm** e2e ở TL/dev |
| T-REV | review | review | T-QA | **pending** | after QA |

### Assignee

- Impl: `/agent-dev` · MFE cwd `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` · **chỉ** T-EDIT
- QA E2E: queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở team_lead
- Review: `/agent-review` after QA
- Align cuối: `/align-mobile-to-mfe` · no new tab/route/icon · mobileApiBase only

## Acceptance map (PO → T-*)

| AC | Owner task |
|----|------------|
| Pattern B detect · drop `!canDetect` · banner on click | T-EDIT |
| SearchInput route Live · no seed · miss=`--` | T-EDIT |
| GPS deny không khóa CTA trước · Acc≤30 gate on submit | T-EDIT |
| Detect → Draft → HITL · no auto-confirm | T-EDIT (keep T-03 behavior) |
| HITL confirm/dismiss busy-only · pin local · score SHOW % | T-EDIT (keep T-04) |
| Labels useFormOptions · no hardcode VN | T-EDIT |
| DES-LEAVE in-app · cấm native confirm | T-EDIT |
| No new BE / migration | T-BE N/A |
| E2E Pattern B + SearchInput | T-QA |

## Out of scope

- me / me-profile / me-settings / feedback / cam-view
- collect / adjust / list
- Field doors · journal / kết ca / tồn tại / tần suất
- New BE controller · migration · Step 4b
- ERP.* namespaces · web-bff client
- Re-open `/web-rmms-asset-ai` alias as primary std route
- Native iOS/Android code changes

## Prior artifacts

| Role | Compact | Full |
|------|---------|------|
| data_analy | `handoff/data_analy-compact.md` | `_data-analy/features/web-rmms-asset-ai-control-hint.md` · `…-real-data.md` |
| po | `handoff/po-compact.md` | `po/requirement.md` |
| design | `handoff/design-compact.md` | `ui/design.md` + prototype |
| sa | `handoff/sa-compact.md` | `be/solution-discovery.md` |

## UNCLEAR

- (none) · DOMAIN-MAP-AAI · HITL-SPLIT · SCORE-01 · STD-ROUTE — resolved prior roles
