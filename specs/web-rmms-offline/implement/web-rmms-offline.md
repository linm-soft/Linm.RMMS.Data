# Implement — web-rmms-offline

> Status: **done** · `/agent-dev` · task `task_b19318b7` · 2026-09-26T00:40:00.000Z  
> changeScope=`new_page` · packKind=`list` · autoApprove ON · e2eQa queued (QA owns)

| | |
|--|--|
| Feature | `web-rmms-offline` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-offline` |
| mfeStdUrl | `http://localhost:9301/web-rmms-offline` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` |
| Step 4b / API Mới / migration | **n/a** — reuse live check-ins + offline-batch |
| contentHash | `sha256:01ede8e7ff03f06a19e291b345d60faa95a7af42a43bae00efb799458a643cd1` |
| skillVersion | `2026.09.05.03` |

## DoD delivered (T-01…T-05)

| ID | Result |
|----|--------|
| T-01 | Route `/web-rmms-offline` + aliases `/offline` `/field/offline` · phone 430 · OFF-00/NAV chrome · **no** Me tabs |
| T-02 | Local store key `linm.offline.queue.v1` · CARD/SEG/BANNER/empty · **cấm** GET queue |
| T-03 | SyncBtn → Live `POST …/patrol/sessions/{id}/check-ins` · GPS stored only · clear **only** 2xx · mutex · partial keep fail |
| T-04 | Optional `POST …/integration/sync/offline-batch` after ≥1 OK · RecordCount=OK · Incident P1 filter-only (never clear on check-in sync) |
| T-05 | `useFormOptions('web-rmms-offline')` + LOOKUP_STATIC · auth gate · toast no alert · Home tile + Field `syncBtn` → offline page · CheckInSheet enqueue on network fail |

## Files (MFE)

- `src/pages/WebRmmsOffline/*` — layout, page, styles, paths, lookupStatic, aliasRedirects
- `src/services/offlineQueue/*` — store + replay sync
- `src/services/integration/*` — offline-batch receipt client
- `src/index.tsx` — routes
- `src/pages/WebRmmsHome/paths.ts` — offline → `/web-rmms-offline`
- `src/pages/WebRmmsShell/FieldDoorsPage.tsx` — syncBtn navigate
- `src/pages/WebRmmsMobileA/CheckInSheet.tsx` — enqueue on network fail

## APIs used (Live · mobile-bff)

| Action | Path |
|--------|------|
| Replay check-in | `POST mobile-bff/api/v1/patrol/sessions/{sessionId}/check-ins` |
| Receipt | `POST mobile-bff/api/v1/integration/sync/offline-batch` |
| List queue | **local only** (`linm.offline.queue.v1`) |

## VERIFY GATE

| Gate | Result |
|------|--------|
| MFE `yarn build` | **PASS** (chunk `web-rmms-offline`) |
| BE `dotnet build` | **PASS** (0 errors · no BE code change) |
| Step 4b | **skip** (SA/T-BE n/a) |
| E2E / start:std | **not run** (QA owns · e2eQa ON) |

## Debt / UNCLEAR carry → QA

- UNCLEAR-INCIDENT-REPLAY: P1 filter-only · P2 POST incident deferred
- UNCLEAR-STORE-KEY: **resolved** Dev → `linm.offline.queue.v1` localStorage JSON (peer payload shape)

## Out of scope (HARD)

- invent GET queue · ERP.* · web-bff · re-geolocate · clear-all · native edits · Me tabs · e2e at Dev
