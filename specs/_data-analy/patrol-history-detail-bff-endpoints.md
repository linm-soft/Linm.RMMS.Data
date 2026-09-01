# BFF endpoints — patrol-history-detail (mobile · Chi tiết ca)

| | |
|---|---|
| feature | `patrol-history-detail` |
| bff | `Linm.RMMS.Mobile.Bff` · `MobileApiProxyController` catch-all |
| prefix | `mobile-bff/api/v1` |
| downstream | `ApiBase` → `RMMS.Service.Api` · Patrol domain |
| source | CTX `patrol-history-detail.md` · `patrol-history.md` · `PatrolSessionsController` · DOMAIN-MAP Patrol · demo `#sc-patrol-detail` |
| **cấm** | invent `api/v1/patrol-history-detail` · invent `GET …/check-ins` list P1 · ERP.* · Report domain · app `:5101` · DbContext trên BFF |

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`. Path **không** lặp prefix.

## Như thế nào (skill step 6)

| Tầng | Repo / package | App có biết? |
|------|----------------|--------------|
| UI | iOS + Android | Có — `{BffPrefix}` + nav `Id` |
| BFF host | `Linm.RMMS.Mobile.Bff` | Có — một host |
| Domain API | `RMMS.Service.Api` · Patrol | **Không** — proxy rewrite |
| Web BFF | `web-bff/api/v1/patrol/sessions` | **Không** — mobile dùng mobile-bff |
| Dedicated PatrolHistoryDetailController | **không** | **cấm invent** |

## Table — detail `#sc-patrol-detail` · `DES-MOB-PAT-DETAIL`

| Action / zone | Method | `{BffPrefix}` path | BFF | Downstream | Source | Gap |
|---------------|--------|--------------------|-----|------------|--------|-----|
| Load chi tiết ca | GET | `patrol/sessions/{id}` | proxy | `PatrolSessionsController.GetById` · XCO | `api/v1/patrol/sessions/{id}` | hero + info rows |
| Timeline điểm tuần | — | — | — | demo SSOT | controlHint | **GAP-MOB-PAT-HIST-DET-TIMELINE-01** · **không** GET check-ins list |
| Nav Mở bản đồ ca | — | — | — | local nav | `go('patrol-map')` | **không** API |
| Nav timeline → check-in | — | — | — | local nav | `go('checkin-detail')` | owner `patrol-checkin` |
| Nav back list | — | — | — | local nav | `go('patrol-history')` | **không** API |
| Chia sẻ trailing | — | — | — | toast P1 | controlHint | **không** API |
| Kết thúc ca | — | — | — | toast P1 | controlHint | **cấm** PUT P1 |
| Toast err / empty | — | — | — | local UI | controlHint | **không** API |

## DTO bind (live `PatrolSessionDto`)

| Field | Wire | UI |
|-------|------|-----|
| `Id` | yes Guid | route param / nav key |
| `Code` | yes | codeHero |
| `UserName` | yes | rowUser |
| `Route` | yes | rowRoute |
| `PatrolType` | yes | rowType |
| `PlannedDate` | yes DateOnly | rowPlanDate (dd/MM/yyyy) |
| `StartedAt` | yes DateTime? | rowStarted (HH:mm local) |
| `CoveragePercent` | decimal | rowCoverage + `%` |
| `Status` | yes | badgeStatus mapped VN |
| `CheckInCount` | int | timeline subtitle hint · **không** bind timeline rows P1 |
| `OfflineQueued` | bool | badge override Mất sóng |
| `Note` | string? | **không** bind P1 UI |
| `IsActive` · timestamps | yes | **không** bind P1 UI |

**Cấm** app fork DTO khác BFF table. **Cấm** invent path `patrol-history-detail`.

## Có trên domain — **không** thuộc slug `patrol-history-detail` P1 UI

| Method | Path | Ghi |
|--------|------|-----|
| GET | `patrol/sessions` | list — owner `patrol-history` |
| POST | `patrol/sessions` | create — web |
| PUT | `patrol/sessions/{id}` | update/end — **OUT** P1 (toast only) |
| DELETE | `patrol/sessions/{id}` | soft delete — **OUT** |
| POST | `patrol/sessions/{id}/check-ins` | field check-in — owner `patrol-checkin` |
| GET | `patrol/sessions/{id}/check-ins` | — | **MISSING** · timeline P2 · **cấm invent P1** |
| GET | `patrol/sessions/{id}/tracks` | coverage/tracks | **P2** — owner `patrol-map` |
| Web | `web-bff/api/v1/patrol/**` · `td-tk/sessions` | web BFF · mobile = mobile-bff proxy |

## Verify live (không invent)

| Check | Result |
|-------|--------|
| `PatrolSessionsController` | `[Route("api/v1/patrol/sessions")]` GetById · 403/404 |
| `PatrolSessionDto` | Code · UserName · Route · PatrolType · PlannedDate · StartedAt · CoveragePercent · Status · CheckInCount · OfflineQueued |
| Mobile.Bff `patrol/*` | proxy catch-all `MobileApiProxyController` |
| DOMAIN-MAP | Patrol · **cấm** ERP.* |
| `api/v1/patrol-history-detail` | **không** — **cấm invent** |
| GET check-ins list | **không** — timeline demo SSOT P1 |
| Step 4b | **N/A** — GetById **DONE** · **cấm** data_analy migration |

## Cấm

- App biết RMMS `:5101` trực tiếp  
- DbContext trên Mobile.Bff  
- Invent `GET patrol-history-detail` / mobile-only DTO fork  
- Invent `GET patrol/sessions/{id}/check-ins` P1  
- Ship detail từ hardcode khi BFF live (`GAP-MOB-REAL-02`)  
- Gộm POST check-ins / PUT end session vào slug này P1  

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.31.2 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | `2026-08-31T03:25:00.000Z` |
| versionGate | rechecked |
| contentHash | sha256:patrol-history-detail-bff-20260831 |
| bffContentHash | sha256:patrol-sessions-getbyid-passthrough |
| taskId | `task_b2fb1a98` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.31.2 schemaVersion=2 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
