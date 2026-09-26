# Review — Findings — web-rmms-incident-chat

> Status: **confirmed** · writtenAt `2026-09-26T10:01:28.289Z` · task `task_3eb555c0`  
> skillVersion: `2026.09.05.03` · packKind: `list` · autoApprove: ON · `review_confirm=approve`  
> **Cấm** xóa file này.

| | |
|--|--|
| Feature | `web-rmms-incident-chat` |
| Title | Chat sự cố |
| Role | `review` |
| changeScope | `new_page` |
| formPattern | Mobile chat/full · phone ≤430 · LinmChatThread+Composer · `#sc-incident-chat` · N/A ERP Modal |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-incident-chat` |
| mfeStdUrl | `http://localhost:9301/web-rmms-incident-chat` |
| productRoute | `/incident/:id/chat` → alias STD |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` · **cấm ERP.*** |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| prior QA | `confirmed` · S0/S1/QA-20 PASS · screens PNG · `_capture_incident_chat.mjs` |

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
| Prefill GET `{id}` | **PASS** | `incidentEndpoint.getById` · `GET /incident/incidents/{id}` |
| Messages GET | **PASS** | `getMessages(id,'message')` · `GET …/{id}/messages?type=message` |
| Messages POST | **PASS** | `createMessage` body `{content,type:'message'}` · **no** parentId |
| re-GET after POST | **PASS** | `onSend` → `createMessage` then `refreshMessages` · cấm SignalR |
| Init-data opt | **PASS** | SA/Dev opt · labels via useFormOptions + LOOKUP_STATIC |
| No invent `incident-chat` | **PASS** | INCIDENTS=`/incident/incidents` · Live Incident messages |
| Param `?id=` | **PASS** | missing → missingId empty · present → Live load (QA S0/S1) |

## SEC

| Check | Result | Evidence |
|-------|--------|----------|
| cấm ERP.* | **PASS** | Mobile endpoint `/incident/incidents` · no ERP namespace |
| cấm web-bff FE | **PASS** | Mobile.Bff apiClient · QA live `:5202` |
| cấm invent ChatController | **PASS** | DOMAIN-MAP + FE endpoint reuse Incident · cấm gộp mnt-chat |
| cấm GPS / fake | **PASS** | no geolocation on chat · QA hasGps=false |
| cấm Me* labels | **PASS** | `useFormOptions('web-rmms-incident-chat')` + LOOKUP_STATIC |
| cấm toast-only | **PASS** | banner+retry + empty shells · sendError inline |
| POST body P1 flat | **PASS** | FE posts `{content,type}` only · no parentId |
| Auth surface | **PASS** | QA-20 SH-02 LoginSheet · no crash |
| Content surface | **PASS** | composer trim · type `message` whitelist FE |

## UI-FN

| Check | Result | Evidence |
|-------|--------|----------|
| Shell `#sc-incident-chat` · phone ≤430 | **PASS** | Layout `data-feature` · `id=sc-incident-chat` · QA des |
| Zones CH-01…03 | **PASS** | topBar CH-01 · thread CH-02 · composer CH-03 |
| TopBar incident subtitle | **PASS** | code · title · status · GET {id} |
| Thread bubbles isMine | **PASS** | `bubbleMine`/`bubbleTheirs` · QA emptyThread OK |
| emptyThread | **PASS** | wired · S0 emptyThread=true · bubbleCount=0 |
| Composer send | **PASS** | LinmChatComposer · hasComposer=true S0 |
| missingId | **PASS** | S1 PASS · emptyBack |
| Entry peer `#i-chat` | **PASS** | IncidentList `data-entry=i-chat` · Detail `id=i-chat` |
| Alias `/incident/:id/chat` | **PASS** | `IncidentChatAliasRedirect` → STD `?id=` |
| DES-GRID / filter bar | **N/A** | phone chat · T-QA-FILTER WAIVE |
| Labels | **PASS** | useFormOptions · incident.chat.* keys · cấm hardcode-only |
| Soft UI debt | noted | GAP-QA-UI-MISSING-BANNER soft (S1 retry+missingId duplicate) |

## BE-FN

| Check | Result | Evidence |
|-------|--------|----------|
| DOMAIN-MAP row | **PASS** | `web-rmms-incident-chat` → Incident · messages GET/POST (SA closed) |
| API Mới / entity / migration | **N/A** | SA none · Step 4b skip · T-BE N/A |
| FormMode↔API | **PASS** | GET {id} · GET/POST messages · init-data opt · re-GET |
| ParentId P1 | **PASS** | FE omits · reply P2 |
| Realtime HTTP-only | **PASS** | re-GET · cấm SignalR |
| BFF live | **PASS** | QA S0 Live GET INC-DEMO + messages 200 |
| Debt soft (non-block) | noted | stock e2e DUP/port · WDS deep-link · playwright junction · showDevNav |

## Cross-role consistency

| Prior | Align |
|-------|-------|
| data_analy → po → design → sa → team_lead → dev → qa | inventory + API + chat zones consistent |
| UNCLEAR CLOSED | DOMAIN-MAP · PARENT-ID · POLLING |
| T-01…T-06 Dev PASS · T-QA-* PASS/WAIVE | yes |
| contentHash | stable `6f74282b…ff80e` across prior compacts |

## Must / Gaps

| ID | Sev | Action |
|----|-----|--------|
| — | P0 | **none** |
| GAP-QA-UI-MISSING-BANNER | soft | carry · S1 banner+missingId duplicate (UX polish) |
| GAP-QA-E2E-STOCK-PORT | soft | carry · stock yarn e2e DUP/port gate |
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
