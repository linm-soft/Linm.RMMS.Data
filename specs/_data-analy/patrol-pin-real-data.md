# Real-data bind — patrol-pin

Skill: `example/real-data-bind.md` · **GAP-MOB-REAL-01** · **GAP-MOB-PIN-PERSIST-01**

| | |
|---|---|
| feature | `patrol-pin` |
| changeScope | `edit_page` |
| taskId | `task_48f136ed` |
| generatedAt | `2026-09-12T11:55:00.000Z` |

## §A Source

CTX `patrol-pin.md` · sibling `patrol-checkin.md` · BFF `patrol-pin-bff-endpoints.md` · demo `pinHereCheckin()` · `DES-MOB-CI-PIN-HERE` · `DES-MOB-GPS-DENY` · BE `CreatePatrolCheckInRequest` / `PatrolCheckInDto`.

## § Delta Current vs New

| Zone | Current bind | New bind |
|------|--------------|----------|
| Toast route | `Route` active session · live-only | **giữ** |
| Toast accuracy | `LocationFix.accuracyM` | **giữ** |
| Map pin | `LocationFix` lat/lng device | **giữ** · **cấm** fake |
| Server | **không** write | Handoff payload → sibling POST check-ins |
| Handoff | stub toast only | `sessionId` + `lat`/`lng`/`accuracyM` + `route` → `patrol-checkin` |

## §B Path = BFF table

| UI zone | Bind | Path |
|---------|------|------|
| CTA label | static | — **Ghim vị trí hiện tại** |
| Toast route | `Route` active session | `GET patrol/sessions` |
| Toast accuracy | `LocationFix.accuracyM` (round) | Device GPS |
| Map pin (reuse) | `LocationFix` lat/lng | Device · **cấm** fake |
| Active session id | `Id` status Đang tuần | `GET patrol/sessions` |
| Persist ghim | `CreatePatrolCheckInRequest` (sibling submit) | `POST patrol/sessions/{id}/check-ins` |
| Check-in form fields | — | **không** trên pack này |

§B path **khớp** BFF table — **không** invent `patrol-pin` / `/pins`.

## §C Map DTO → UI

| dtoField | UI / handoff |
|----------|--------------|
| `Id` | handoff `sessionId` |
| `Route` | toast lý trình · handoff prefill Route |
| `Status` / `Code` | filter active only · không hiện toast P1 |
| Device `lat`/`lng`/`accuracyM` | toast ±m · handoff LocationFix |
| POST response `PatrolCheckInDto` | **sibling** toast «Đã ghi điểm tuần» — **không** bind trên pin |

## §D Map overlay

N/A riêng pack — reuse `patrol-map` pin `.here` khi đứng map.

## §E Progress

| Case | Behavior |
|------|----------|
| GET fail/empty · no active | Toast pin vẫn OK nếu GPS OK · **không** POST · toast thiếu ca / empty route copy live |
| GPS deny | modal · **không** handoff |
| GPS timeout | toast timeout · **không** handoff |
| GPS OK + active | toast pin → **real** handoff check-in (persist owner = sibling) |
| Offline | toast pin · queue handoff payload |

## §F Cấm

Watermark · fake lat/lng · invent `/pins` · ship check-in form / MatchOk UI trên pin · system alert · WebView · ERP.* · app `:5101`.

## Version meta

| Field | Value |
|-------|-------|
| contentHash | sha256:patrol-pin-real-data-20260912-persist |
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.19.23 |
