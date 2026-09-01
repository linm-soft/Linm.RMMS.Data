# STATUS — mobile-cleanup-mock

| Field | Value |
|-------|-------|
| feature | `mobile-cleanup-mock` |
| title | [Mobile] Clean-up mock data + seed CRUD per screen |
| phase | `dev` |
| status | `done` |
| changeScope | `edit_page` |
| packKind | `hub` (epic · children = per-slug fix_gaps) |
| stack | `native_dual` |
| lane | `mobile` |
| epic | **YES** — parent of P0/P1 cleanup child tasks |
| createdAt | `2026-09-01T00:56:00.000Z` |
| updatedAt | `2026-09-01T10:10:00.000Z` |
| source | `/hey-linm` · Clean-up mock data · review từng màn + CRUD seed |
| lastRole | `dev` · `/edit-mobile-feature` · `task_a33dfede` |
| mfeStdUrl | — (native · **cấm**) |

## Goal

1. **Review từng màn** iOS + Android còn `*Copy.demo*` / `OfflineDemo` / empty→demo.  
2. **Gỡ mock** — GET OK empty = EmptyChrome · GET fail = empty + toast · **cấm** demo SSOT.  
3. **Seed / CRUD data tương ứng** trên BE (qua Mobile BFF `mobile-bff/api/v1`) để màn có data thật khi QA.  
4. Dual build + context lock `specs/{slug}/` · **cấm** re-run full PO→Design pipeline.

**Reference:** `attendance-day` đã clear (live-only). Pattern: `/edit-mobile-feature`.

## Child matrix

### P0 — list/detail mock (empty/fail → demo)

| # | slug | Mock hiện tại | Seed / CRUD cần |
|---|------|---------------|-----------------|
| 1 | `ops` | **DONE** live-only EmptyChrome · `task_708dcc0b` | notifications inbox · POST seed / empty OK |
| 2 | `supervise` | **DONE** live-only EmptyChrome · `task_65931a17` | `patrol/attendance-logs` list · empty OK |
| 3 | `supervise-detail` | **DONE** live-only EmptyChrome · `task_b9997d8c` | attendance-log by id · empty/404 OK |
| 4 | `asset` | **DONE** live-only EmptyChrome · `task_dc98ed58` | `asset/road-assets` list · BE empty OK |
| 5 | `asset-detail` | **DONE** live-only EmptyChrome · `task_a33dfede` | road-asset by id · 404/fail OK |
| 6 | `asset-adjust` | **DONE** live-only EmptyChrome · `task_a33dfede` | road-assets adjust list · empty OK |
| 7 | `asset-hub` | **DONE** live-only wallet · `task_9c9293d2` | wallet count từ live GET |
| 8 | `incident-list` | **DONE** live-only EmptyChrome · `task_a33dfede` | `incident/incidents` · empty OK |
| 9 | `incident-detail` | **DONE** live-only EmptyChrome | incident by id |
| 10 | `mnt-list` | **DONE** live-only EmptyChrome · `task_53934dab` | `maintenance/work-orders` · empty OK |
| 11 | `mnt-progress` | **DONE** live-only · `task_e4368753` | work-order detail |
| 12 | `patrol-home` | **DONE** live-only EmptyChrome · `task_22fa5cba` | `patrol/sessions` |
| 13 | `patrol-history` | **DONE** live-only EmptyChrome · `task_430bde31` | sessions history · empty OK |

### P1 — stamp / placeholder / local seed

| # | slug | Mock hiện tại | Seed / CRUD cần |
|---|------|---------------|-----------------|
| 14 | `cam-patrol` | **DONE** live-only route stamp · `task_e7101ed6` | active session · BE empty OK |
| 15 | `vis-capture` | **DONE** live-only · `task_4dc20e00` | GPS / session stamp |
| 16 | `patrol-checkin` | **DONE** live-only · `task_2f18d421` | active session + check-in POST · BE empty OK |
| 17 | `patrol-pin` | **DONE** live-only route stamp · `task_c9fd5cec` | session route · BE empty OK |
| 18 | `estimate` | **DONE** live-only seed · `task_a33dfede` | estimate from incident · no demoFromIncident |
| 19 | `gis-map` | **DONE** live-only · `task_ad6cbe30` | gis geojson + asset |
| 20 | `patrol-offline` | **DONE** live-only EmptyChrome · `task_93163b23` | local queue real offline only · BE empty OK |
| 21 | `attendance` | **DONE** live-only `lastWho` · `task_242d0372` | profile displayName · POST check-in seed |

## DoD (epic)

| Gate | Criteria | Result |
|------|----------|--------|
| D1 | Mỗi child: dual iOS+Android **không** `offlineDemo` / empty→`*Copy.demo*` trên path list/detail | **PASS** P0 13/13 |
| D2 | Mỗi child: seed ≥1 record live qua BFF (hoặc document «BE empty OK» + EmptyChrome) | **PASS** / empty OK |
| D3 | Toast copy: fail = lỗi tải · **cấm** «Đang dùng dữ liệu mẫu» khi không còn demo payload | **PASS** (path P0 + attendance.day) |
| D4 | Context lock `implement/{ios,android}.md` + `STATUS` Notes per slug | **PASS** epic + residual |
| D5 | Build iOS dest + Android `assembleDebug` PASS per child | **PASS** epic VERIFY |
| D6 | Epic STATUS → `done` khi P0 **13/13** PASS · P1 tracked | **PASS** |

## Queue

| Pack | Value |
|------|-------|
| queue | `qlbd-mobile` |
| slash | `/edit-mobile-feature` (Dev) · seed via BFF/API |
| mode | `fix_gaps` · `changeScope=edit_page` |
| roleOnly | `dev` · **cấm** reset STATUS→po |
| parent | this epic |
| taskId | `task_a33dfede` |

## Notes

- Auth/BFF/API **đã ready** (probe 2026-09-01).  
- Epic Dev sweep `task_a33dfede` (2026-09-01): closed residual P0 mock on `asset-detail` · `asset-adjust` · `incident-list` + P1 `estimate` demoFromIncident · toast «dữ liệu mẫu» stripped dual.  
- **Debt (non-blocking D6):** `patrol-history-detail` vẫn `OfflineDemo` (sibling detail · **không** trong P0 matrix list). `itemsOrDemo` còn cho field-reflect / incident-create / asset-collect stamp.  
- VERIFY: iOS `LinmRmms` iPhone 17 Pro · Android `assembleDebug` · BFF `dotnet build` — **PASS**.  
- **Cấm** e2e / mfeStdUrl / start:std ở role Dev.

## Enqueued tasks
| priority | taskId | slug |
|----------|--------|------|
| 200 | `task_708dcc0b` | `ops` |
| 199 | `task_65931a17` | `supervise` |
| 198 | `task_b9997d8c` | `supervise-detail` |
| 197 | `task_dc98ed58` | `asset` |
| 196 | `task_10e62312` | `asset-detail` |
| 195 | `task_f02cd93e` | `asset-adjust` |
| 194 | `task_9c9293d2` | `asset-hub` |
| 193 | `task_3a718e5d` | `incident-list` |
| 192 | `task_53a77d94` | `incident-detail` |
| 191 | `task_53934dab` | `mnt-list` |
| 190 | `task_e4368753` | `mnt-progress` |
| 189 | `task_22fa5cba` | `patrol-home` |
| 188 | `task_430bde31` | `patrol-history` |
| 170 | `task_e7101ed6` | `cam-patrol` |
| 169 | `task_4dc20e00` | `vis-capture` |
| 168 | `task_2f18d421` | `patrol-checkin` |
| 167 | `task_c9fd5cec` | `patrol-pin` |
| 166 | `task_f99abdcc` | `estimate` |
| 165 | `task_ad6cbe30` | `gis-map` |
| 164 | `task_93163b23` | `patrol-offline` |
| 163 | `task_242d0372` | `attendance` |
| 50 | `task_a33dfede` | `mobile-cleanup-mock` |

---
<!-- Version meta: skillId=agent-dev-ios+android skillVersion=2026.08.29.1 schemaVersion=1 workflowVersion=2026.08.29.1 rulesVersion=2026.08.29.5 versionGate=rechecked taskId=task_a33dfede -->
