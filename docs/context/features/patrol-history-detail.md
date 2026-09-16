# Context — patrol-history-detail (mobile · Chi tiết ca)

| Field | Value |
|-------|-------|
| feature | `patrol-history-detail` |
| title | [Mobile] [Lịch sử phiên] -> Chi tiết ca |
| des | `DES-MOB-PAT-DETAIL` |
| demo | `#sc-patrol-detail` · `specs/patrol-history-detail/ui/prototype/{ios,android}/index.html` |
| packKind | **`sheet`** · surface full `#sc-patrol-detail` |
| changeScope | `edit_page` · GAP timeline live `task_dc906824` |
| parent | `patrol-history` list |
| domain | Patrol · `PatrolSessionDto` / `PatrolCheckInDto` |
| BE | `Linm.RMMS.WebService` · DOMAIN-MAP **Patrol** — **cấm ERP.*** |
| BFF | `Linm.RMMS.Mobile.Bff` · `mobile-bff/api/v1/patrol/sessions/{id}` (+ `/check-ins`) |
| peers | `patrol-history.md` · `patrol-home.md` · `patrol-checkin.md` · `patrol-map.md` |

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Chi tiết ca: mã · badge · thông tin · **timeline điểm từ GET check-ins** · CTA bản đồ / kết thúc |
| Persona | Tuần đường · quản lý ca |
| Entry | `#sc-patrol-history` / today row → push detail + `Id` |
| DoD (edit) | Timeline = GET `patrol/sessions/{id}/check-ins` live · empty OK · **cấm** `timelineDemo` · tap done → checkin-detail · map nav · end toast P1 |

## 2. Design / UI

| Zone | Pattern | Notes |
|------|---------|-------|
| Screen | Full detail | Title «Chi tiết ca» · back Lịch sử |
| Hero | Code + badge | GET session |
| Section | Thông tin | GET session rows |
| Section | Điểm tuần | **Live check-ins** · empty OK · tap done → `#sc-checkin-detail` |
| Primary | Mở bản đồ ca | → `patrol-map` + session id |
| Secondary | Kết thúc ca | toast P1 · **cấm** PUT |
| Trailing | Chia sẻ | toast P1 |

**Không** gộp: list/filter · CI form/save · POST check-ins · web session CRUD.

## 3. API (mobile BFF — cấm invent path `patrol-history-detail`)

| Method | `{BffPrefix}` path | Downstream | Status |
|--------|-------------------|------------|--------|
| GET | `patrol/sessions/{id}` | `GetById` · XCO | **Live** — hero/info |
| GET | `patrol/sessions/{id}/check-ins` | `GetCheckIns` · `PatrolCheckInDto[]` | **Live** — timeline · empty OK |
| GET | `patrol/sessions` | list | parent — **OUT** |
| POST | `patrol/sessions/{id}/check-ins` | create | **OUT** — `patrol-checkin` |
| PUT/DELETE | `patrol/sessions/{id}` | end | **OUT** P1 — toast |

App base: `{BffBase}/mobile-bff/api/v1`. **Cấm** `:5101` · invent slug · ERP.*.

`PatrolCheckInDto`: Id · SessionId · PlanPointLabel · Route · Lat · Lng · AccuracyM · DistanceToPlanM · MatchOk · Content · PhotoLocalIds · CreatedAt.

## 4. Sibling

| Slug | Quan hệ |
|------|---------|
| `patrol-history` | Parent / back |
| `patrol-map` | CTA map |
| `patrol-checkin` | Timeline tap done |
| `patrol-home` | Hub — OUT detail |

## 5. Demo SSOT (prototype ref only — **không** runtime timeline)

| Field | Value |
|-------|-------|
| Code | PAT-20260810-0014 / seed TD-* |
| Badge | Đang tuần |
| Info rows | User · Route · Type · Date · Start · Coverage |
| Timeline proto | 3 rows design ref · **runtime = API / empty** |
| CTA | Mở bản đồ ca · Kết thúc ca |

## 6. Gaps

| ID | Default |
|----|---------|
| GAP-MOB-PAT-HIST-DET-TIMELINE-01 | **OPEN edit** — strip timelineDemo · GET check-ins |
| GAP-MOB-PAT-HIST-DET-TAP-01 | **OPEN** — toast → nav checkin-detail |
| GAP-MOB-PAT-HIST-DET-MAP-01 | Verify nav `patrol-map` (no toast) |
| GAP-MOB-PAT-HIST-DET-END-01 | Keep toast · PUT P2 |
| GAP-MOB-PAT-HIST-DET-NAV-01 / DEMO-01 / DATA-01 / SCR-01 | **closed** prior |

## 7. Cấm

- Watermark · invent path · ERP.* · mfeStdUrl  
- `timelineDemo` ship · fake 200 · gộp CI save · PUT end P1  
- Step 4b migration trong data_analy  

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | — | — | — |
| mobile | `done` | `done` | `2026-09-12T14:24:11.836Z` |
