# Real-data bind — patrol-history-detail

| | |
|---|---|
| feature | `patrol-history-detail` |
| prefix | `mobile-bff/api/v1` |
| sameMobile | yes · proxy Patrol GetById sessions |
| taskId | `task_b2fb1a98` |

Skill: `example/real-data-bind.md` · **GAP-MOB-REAL-01**

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `api` | CTX `patrol-history-detail.md` · `PatrolSessionsController.GetById` · `PatrolSessionDto` | 404 → empty chrome · back list | Toast lỗi · demo SSOT fallback · **cấm** fake 200 |
| `nav` | parent list pass `Id` | thiếu Id → back list · toast | — |
| `derived` | Status VN map · Coverage `%` · PlannedDate/StartedAt format | unknown → raw | — |
| `demo` | mobile-p1 `#sc-patrol-detail` SSOT · timeline 3 rows | UI-only timeline P1 · UI-only khi GET fail | **không** SSOT ship khi live OK |

## §B — Bind field (HARD · khớp BFF table)

| uiField | Label | controlHint | catalogKind | GET / write | write field | sameMfe | sameMobile |
|---------|-------|-------------|-------------|-------------|-------------|---------|------------|
| codeHero | Mã phiên | Text display | — | GET `patrol/sessions/{id}` | `Code` | yes (web View) | yes |
| badgeStatus | (trạng thái) | Badge | — | GET | `Status` + `OfflineQueued` | yes | yes |
| rowUser | Nhân viên | ListRow | — | GET | `UserName` | yes | yes |
| rowRoute | Tuyến | ListRow | — | GET | `Route` | yes | yes |
| rowType | Loại tuần | ListRow | — | GET | `PatrolType` | yes | yes |
| rowPlanDate | Ngày KH | ListRow | — | GET | `PlannedDate` | yes | yes |
| rowStarted | Bắt đầu | ListRow | — | GET | `StartedAt` | yes | yes |
| rowCoverage | Độ phủ | ListRow | — | GET | `CoveragePercent` | yes | yes |
| tlItem | Điểm tuần | TimelineRow | — | demo SSOT P1 | — (GAP timeline API) | gap | yes |
| btnMap | Mở bản đồ ca | PrimaryButton | — | nav `patrol-map` | — (pass Id) | gap | yes |
| btnEnd | Kết thúc ca | SecondaryButton | — | toast P1 | — | — | yes |
| toastErr | (lỗi) | Toast | — | after GET fail | — | — | yes |

§B path **khớp** `patrol-history-detail-bff-endpoints.md` — **không** invent `patrol-history-detail` / check-ins list P1.

### Display rules

| Line | Rule |
|------|------|
| code | `Code` raw (PAT-*) |
| badge | map control-hint · `OfflineQueued=true` → «Mất sóng» override |
| user | `UserName` raw |
| route | `Route` raw · demo append `· Km 1551+200–1561+134` khi offline và Route thiếu Km |
| type | `PatrolType` raw |
| plan date | `PlannedDate` → `dd/MM/yyyy` |
| started | `StartedAt` → `HH:mm` local + `(UTC+7)` label demo |
| coverage | `CoveragePercent` → `{n}%` integer OK |
| timeline | **demo SSOT 3 rows P1** · **không** invent GET check-ins |
| map CTA | pass session `Id` · **không** fake coords |
| end CTA | toast «Kết thúc ca — xác nhận sau» · **cấm** PUT |

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| status display | — (client map) | control-hint + list SSOT | Invent status catalog API |
| patrol type | — | demo / DTO raw | Invent PatrolType catalog P1 |
| timeline points | — | demo SSOT | Invent GET check-ins P1 |
| — | — | DB `rmms_patrol_sessions` | In-app `demoItems` làm nguồn khi BFF OK |

## §D — Map / vẽ

`map: none` embed trên `#sc-patrol-detail`. CTA nav `patrol-map` (sibling reuse) · pass session id.

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| Detail load | PatrolSession | appear / nav Id | GET `…/{id}` | bind hero + info rows |
| XCO deny | AllowedCompanyIds | server | GET 403 | toast · back |
| Not found | — | server | GET 404 | empty · back |
| Timeline | demo SSOT | static P1 | — | 3 rows |
| Map nav | local nav | user CTA | — | `go('patrol-map')` |
| End session | toast | user CTA | — | **OUT** PUT P1 |
| Create check-in | — | — | POST check-ins | **OUT** — `patrol-checkin` |

## §F — Handoff

| Role | Dùng packet |
|------|-------------|
| PO | DoD «row → push · GET thật · timeline demo P1 · CTA map · screen riêng ≠ CI save» · GAP timeline/end/share |
| Design | dual `#sc-patrol-detail` · rewire demo row · control-map khớp §B |
| SA | giữ GetById + XCO · **cấm** ERP.* · Step 4b N/A · timeline GET = P2 gap |
| Dev iOS + Android | cùng §B · wire list toast → push · prefix mobile-bff |

## Demo rows SSOT (fallback UI only — **không** fake GET 200)

| Field | Value |
|-------|-------|
| Title | Chi tiết ca |
| Code | PAT-20260810-0014 |
| Badge | Đang tuần |
| UserName | Nguyễn Văn A |
| Route | QL.1 · Km 1551+200–1561+134 |
| PatrolType | Tuần đường |
| PlannedDate | 10/08/2026 |
| StartedAt | 07:20 (UTC+7) |
| CoveragePercent | 67% |
| Timeline 1 | Km 1551+200 · Xuân Hải · 07:28 · định vị đạt · Ảnh ×1 · Xem |
| Timeline 2 | Km 1556+000 · Cống ngang · 08:05 · định vị đạt |
| Timeline 3 | Km 1561+134 · Phước Dinh · Đang tới · ~180 m |
| CTA map | Mở bản đồ ca |
| CTA end | Kết thúc ca |
| Back | Lịch sử |

## § Delta Current vs New (real-data)

| ID | Current | New |
|----|---------|-----|
| GAP-MOB-PAT-HIST-DET-NAV-01 | row toast only | Nav + GET by id |
| GAP-MOB-PAT-HIST-DET-DATA-01 | — | Bind Code/User/Route/Type/Date/Start/Coverage/Status |
| GAP-MOB-PAT-HIST-DET-TIMELINE-01 | — | Demo SSOT timeline · **không** GET check-ins P1 |
| GAP-MOB-PAT-HIST-DET-DEMO-01 | toast only | wire push + Id |

## § Cấm

- Watermark / «bản Gói N» / process text  
- Fake success khi GET fail  
- Invent mobile-only path `patrol-history-detail` / `GET …/check-ins` P1  
- Bind `mfeStdUrl` / ERP.*  
- Skip §B ≠ BFF → **GAP-MOB-REAL-01**  
- Ship từ hardcode khi BFF live → **GAP-MOB-REAL-02**  
- Enqueue POST/PUT/DELETE từ detail → **GAP-MOB-ACT-07**  
- Gộp list / patrol-checkin save / end session PUT P1  

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.31.2 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | `2026-08-31T03:25:00.000Z` |
| versionGate | rechecked |
| contentHash | sha256:patrol-history-detail-real-data-20260831 |
| taskId | `task_b2fb1a98` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.31.2 schemaVersion=2 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
