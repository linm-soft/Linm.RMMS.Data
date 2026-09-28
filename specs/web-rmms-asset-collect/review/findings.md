# Review — Findings — web-rmms-asset-collect

> Status: **done** · `review_confirm=approve` · autoApprove=ON · task `task_e249d547`  
> skillVersion=`2026.09.05.03` · contentHash=`sha256:bf61e3677d8c0ff81bfccd4e08df8f452a069408ae43f3d025dde73959990a79` · **re-review** (prior findings hash lệch · changeScope `edit_page`)

| | |
|--|--|
| Feature | `web-rmms-asset-collect` |
| Title | Thêm tài sản thủ công |
| Role | `review` · `/agent-review` |
| packKind | `list` (phone Create form · Kind B **WAIVE**) |
| changeScope | `edit_page` |
| mfeStdUrl | `http://localhost:9301/tai-san/thu-thap` |
| mfeStdRoute | `/tai-san/thu-thap` |
| peerStdUrl | same |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-collect/ui/prototype/index.html` |
| Verdict | **PASS** · P0=0 · Must=0 · no fix_gaps |

## Gate summary

| Gate | Result |
|------|--------|
| Prior roles (data_analy→qa) | all **confirmed** · same contentHash |
| Delta SUBMIT-VALIDATE | **PASS** · Pattern B · SearchInput · GPS-on-submit · no `canSave` |
| QA S0 / S1 / QA-20 | **PASS** · visual **Aligned** · Must **0** · searchInput=true · submitDisabled=false |
| DOMAIN-MAP row | present · Asset · cite Integration/Patrol · **cấm** invent CollectController/media |
| MFE/BE build (Dev cite) | PASS (implement compact) |
| ERP.* | **none** in collect page/service |
| demo | **N/A** · hash skip · no crawl this role |

## QUERY

| id | Check | Result | Notes |
|----|-------|--------|-------|
| Q-01 | Live BFF paths vs SA/real-data | **PASS** | `GET …/asset/road-assets/init-data` · `…/integration/asset-types` · `…/integration/road-routes/search` · patrol sessions prefill · `POST …/asset/road-assets` |
| Q-02 | Create payload Source | **PASS** | page + endpoint force `source: 'manual'` |
| Q-03 | Required CreateRoadAsset fields | **PASS** | Name* Type* Route* KmFrom* Status* Lat/Lng* · KmTo opt |
| Q-04 | No invent CollectController / media API | **PASS** | reuse road-assets · photos local only |
| Q-05 | cấm ERP.* / web-bff client | **PASS** | Mobile.Bff relative paths only (`endpoint.ts`) |

## SEC

| id | Check | Result | Notes |
|----|-------|--------|-------|
| S-01 | Auth gate | **PASS** | `hasAccessToken()` · guest → login CTA · no Live when unauthed |
| S-02 | GPS integrity | **PASS** | `readBrowserGeolocation` · RO Lat/Lng · deny blocks submit after attempt · **cấm** type-in/fake · CTA not locked pre-submit |
| S-03 | Leave discard | **PASS** | `LeaveConfirmModal` + form leave guard · no `window.confirm` |
| S-04 | Secrets / credentials in FE | **PASS** | no hardcoded tokens · apiClient JWT shell |

## UI-FN

| id | Check | Result | Notes |
|----|-------|--------|-------|
| U-01 | Zones AC-00…10 + errBanner | **PASS** | wired · QA dump ids match |
| U-02 | Labels / i18n | **PASS** | `useFormOptions` / assetCollect.* · cấm hardcode-only JSX |
| U-03 | Form Pattern B | **PASS** | `disabled={saving}` only · `validationAttempted` · errBanner string[] name/type/route/km/GPS/photos + scroll |
| U-04 | Route SearchInput | **PASS** | `ROAD_ROUTE_LOOKUP_CONFIG` · no seed options · miss `--` |
| U-05 | Photos | **PASS** (accepted GAP) | local File/capture · no upload invent · GAP-MOB-ASSET-COLLECT-MEDIA-01 |
| U-06 | STD route | **PASS** | `/tai-san/thu-thap` · Hub tileCollect |
| U-07 | Prototype parity (QA visual) | **PASS** | Aligned · Must 0 · cite S0/S1/QA-20 |

## BE-FN

| id | Check | Result | Notes |
|----|-------|--------|-------|
| B-01 | DOMAIN-MAP | **PASS** | `web-rmms-asset-collect` → Asset |
| B-02 | No entity/migration / Step 4b invent | **PASS** | SA/Dev · reuse existing dual BFF |
| B-03 | Write path | **PASS** | POST road-assets Source=manual · Lat/Lng required · toast Code · back Hub |
| B-04 | Lookups Live | **PASS** | QA Live: asset-types · road-routes/search · init-data · sessions |

## Findings (severity)

| Sev | id | Finding | Disposition |
|-----|----|---------|-------------|
| — | — | **No P0 / Must** | — |
| soft | GAP-MOB-ASSET-COLLECT-MEDIA-01 | Photos local only · no media upload path | **accepted** debt · UNCLEAR-MEDIA-01 open |
| soft | GAP-QA-E2E-STOCK-DUP | stock yarn e2e-qa FAIL soft (S1 DUP-01) · capture workaround | carry · QA noted |
| soft | LOOKUP_WALLET_DASH / Hub hints | peer Hub / OMS debt | out of collect scope |
| soft | T-QA-POST / Leave click | QA smoke **WAIVE** destructive POST + Leave click | accepted · code path present |

## review_confirm

| Field | Value |
|-------|-------|
| decision | **approve** |
| autoApprove | ON |
| fix_gaps | **none** |
| next | Review done · e2eQa already confirmed at QA · **cấm** start other roles this task (GAP-PKT-ROLE-01) · **cấm** phase=done invent |

## Evidence cite

- compact priors: `handoff/{data_analy,po,design,sa,team_lead,dev,qa}-compact.md`
- implement: `implement/web-rmms-asset-collect.md`
- QA: `qa/scenarios.md` · `qa/screens/` · S0/S1/QA-20
- FE: `src/pages/WebRmmsAssetCollect/AssetCollectPage.tsx` · `src/services/assetCollect/**`
- DOMAIN-MAP: `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` row `web-rmms-asset-collect`

## Version meta

`skillVersion=2026.09.05.03` · `contentHash=sha256:bf61e3677d8c0ff81bfccd4e08df8f452a069408ae43f3d025dde73959990a79` · `updatedAt=2026-09-27T09:42:00.000Z` · `taskId=task_e249d547`
