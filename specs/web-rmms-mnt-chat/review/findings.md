# Review — Findings — web-rmms-mnt-chat

> Status: **confirmed** · writtenAt `2026-09-26T06:44:36.017Z` · task `task_b3ebe776`  
> skillVersion: `2026.09.05.03` · packKind: `list` · autoApprove: ON · `review_confirm=approve`  
> **Cấm** xóa file này.

| | |
|--|--|
| Feature | `web-rmms-mnt-chat` |
| Title | Chat công việc (WORK-C) |
| Role | `review` |
| changeScope | `new_page` |
| formPattern | Mobile chat/full · phone ≤430 · LinmChatThread+Composer · `#sc-mnt-chat` · N/A ERP Modal |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-mnt-chat` |
| mfeStdUrl | `http://localhost:9301/web-rmms-mnt-chat` |
| productRoute | `/work/chat?id=` → alias STD |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` · **cấm ERP.*** |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| prior QA | `confirmed` · S0/S1/QA-20 PASS · screens PNG · `_capture_mnt_chat.mjs` |

## Verdict

| Gate | Result |
|------|--------|
| Overall | **PASS** |
| `review_confirm` | **approve** (autoApprove=ON) |
| fix_gaps | **none** (P0=0) |
| Hash | skip — contentHash unchanged vs data_analy→QA |

## QUERY

| Check | Result | Evidence |
|-------|--------|----------|
| Prefill GET `{id}` | **PASS** | `maintenanceWorkOrdersEndpoint.getById` · `GET /maintenance/work-orders/{id}` |
| Messages GET | **PASS** | `getMessages(id,'message')` · `GET …/{id}/messages?type=message` |
| Messages POST | **PASS** | `createMessage` body `{content,type:'message'}` · **no** parentId |
| re-GET after POST | **PASS** | `onSend` → `createMessage` then `refreshMessages` · cấm SignalR |
| Init-data opt | **PASS** | `getInitData().catch` → statuses fallback |
| No invent `mnt-chat` | **PASS** | WO_BASE=`/maintenance/work-orders` · Live WorkOrdersController |
| Param `?id=` | **PASS** | missing → missingId empty · present → Live load (QA S0/S1) |

## SEC

| Check | Result | Evidence |
|-------|--------|----------|
| cấm ERP.* | **PASS** | Mobile endpoint `/maintenance/work-orders` · no ERP namespace |
| cấm web-bff FE | **PASS** | Mobile.Bff apiClient · QA live `:5202` |
| cấm invent ChatController | **PASS** | DOMAIN-MAP + FE endpoint reuse WorkOrders |
| cấm GPS / fake | **PASS** | no geolocation · QA hasGps=false |
| cấm Me* labels | **PASS** | `useFormOptions('web-rmms-mnt-chat')` + LOOKUP_STATIC |
| cấm toast-only | **PASS** | banner+retry + empty shells · composer errors inline |
| POST body P1 flat | **PASS** | `CreateWorkOrderMessageRequest` = `{content,type}` only |
| Auth surface | **PASS** | QA-20 SH-02 LoginSheet · no crash |
| Content limits | **PASS** | BE `CreateMessageAsync` trim · max 4000 · type whitelist |

## UI-FN

| Check | Result | Evidence |
|-------|--------|----------|
| Shell `#sc-mnt-chat` · phone ≤430 | **PASS** | Layout `data-feature` · QA des=`sc-mnt-chat` |
| Zones CH-01…03 | **PASS** | topBar CH-01 · thread CH-02 · composer CH-03 |
| TopBar WO subtitle | **PASS** | code · title · status · S0 subtitle Live |
| Thread bubbles isMine | **PASS** | `bubbleMine`/`bubbleTheirs` · S0 bubbleCount=1 |
| emptyThread | **PASS** | wired · N/A this WO (has msgs) |
| Composer send | **PASS** | LinmChatComposer · hasComposer=true S0 |
| missingId | **PASS** | S1 PASS · emptyBack |
| Entry peer `#i-chat` | **PASS** | WorkListPage `data-des-id=i-chat` · `action.chat` |
| Alias `/work/chat` | **PASS** | `aliasRedirects` → STD |
| DES-GRID / filter bar | **N/A** | phone chat · T-QA-FILTER WAIVE |
| Labels | **PASS** | useFormOptions · work.chat.* keys · cấm hardcode-only |
| Soft UI debt | noted | GAP-QA-UI-MISSING-BANNER soft (S1 retry+missingId duplicate copy) |

## BE-FN

| Check | Result | Evidence |
|-------|--------|----------|
| DOMAIN-MAP row | **PASS** | `web-rmms-mnt-chat` → Maintenance · messages GET/POST |
| API Mới / entity / migration | **N/A** | SA none · Step 4b skip · T-BE N/A · existing WorkOrderMessages |
| FormMode↔API | **PASS** | GET {id} · GET/POST messages · init-data opt · re-GET |
| ParentId P1 | **PASS** | FE omits · BE accepts optional ParentId unused by FE |
| Realtime HTTP-only | **PASS** | re-GET · cấm SignalR (DOMAIN-MAP + code) |
| BFF live | **PASS** | QA S0 Live GET WO + messages 200 |
| Debt soft (non-block) | noted | stock e2e port 5101/5201 · WDS deep-link · playwright junction · showDevNav |

## Cross-role consistency

| Prior | Align |
|-------|-------|
| data_analy → po → design → sa → team_lead → dev → qa | inventory + API + chat zones consistent |
| UNCLEAR CLOSED | DOMAIN-MAP · PARENT-ID · POLLING |
| T-01…T-05 Dev PASS · T-QA-* PASS/WAIVE | yes |
| contentHash | stable `6f74282b…ff80e` across prior compacts |

## Must / Gaps

| ID | Sev | Action |
|----|-----|--------|
| — | P0 | **none** |
| GAP-QA-UI-MISSING-BANNER | soft | carry · S1 banner+missingId duplicate (UX polish) |
| GAP-QA-E2E-STOCK-PORT | soft | carry · stock yarn e2e port mismatch |
| GAP-QA-E2E-WDS / PLAYWRIGHT | soft | carry · WDS fulfill · junction |

## review_confirm

**approve** — DoR PASS · autoApprove=ON · không fix_gaps.

## Handoff

- compact: `handoff/review-compact.md`
- pipeline review → **confirmed** · phase=`done`
- **roleOnly stop** (GAP-PKT-ROLE-01) · không start role khác

## Version meta

| skillId | skillVersion | schemaVersion |
|---------|--------------|---------------|
| agent-review | 2026.09.05.03 | 1 |
