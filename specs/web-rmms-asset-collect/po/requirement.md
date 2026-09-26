# PO — requirement — web-rmms-asset-collect

| Field | Value |
|-------|-------|
| feature | `web-rmms-asset-collect` |
| title | Thêm tài sản thủ công |
| packKind | `list` |
| changeScope | `new_page` |
| lane | `web` |
| status | `confirmed` |
| skillId | `agent-po` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| writtenAt | `2026-09-25T14:36:45.000Z` |
| taskId | `task_c84f220c` |
| demo | **N/A** |
| formPattern | Mobile full form · phone `max-width: 430px` · **không** ERP Modal/Slideout · **không** DES-GRID / LinErpListFilterBar |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-asset-collect` |
| mfeStdUrl | `http://localhost:9301/web-rmms-asset-collect` |
| nativeRouteCite | SCREENS `/asset/collect` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` · `mobile-bff/api/v1` · domain **Asset** (+ cite Integration/Patrol) · **cấm ERP.*** |
| priorAnaly | confirmed · compact `handoff/data_analy-compact.md` · control-hint + real-data §A+§B PASS |
| autoApprove | ON → Design |

> Labels: `useFormOptions()` / copy keys `assetCollect.*` — **cấm** hardcode VN trên form.  
> **Cấm** demo HTML / mock SSOT · **cấm** re-scan demo (hash skip) · **cấm** sửa iOS/Android · **cấm** nhét phone form vào MFE desktop.

## 1. Goal / DoD

Nhân viên tuần đường / cán bộ QLĐB thêm **1 tài sản đường bộ thủ công** từ Hub tile «Thêm thủ công»: form Android 1-1 · GPS ghim bắt buộc · POST Live `asset/road-assets` · toast `Code` (`TS-yyyyMMdd-nnn`) · back Hub `/asset`.

| DoD | Criterion |
|-----|-----------|
| D1 | AC-00…10 ship · phone ≤430 · Android icon/layout 1-1 |
| D2 | Required: Name · Type · Route · KmFrom · Status · Lat/Lng (GPS) |
| D3 | GPS deny / poor → **disable** submit · **cấm** fake · **cấm** gõ tay |
| D4 | `POST asset/road-assets` Live · Source trống → server `manual` · **cấm** `ai` · toast Code · **cấm** `window.alert` |
| D5 | Prefill optional Route/KmFrom từ `GET patrol/sessions` (Đang tuần) khi có |
| D6 | Photos local P1 only · **không** invent media POST (GAP) |
| D7 | **Không** `me*` / feedback / cam-view / AI / adjust / list-detail / Field deep / journal–e |
| D8 | Client ONLY Mobile.Bff `:5202` · **cấm ERP.*** · **cấm** invent CollectController |

## 2. packKind confirm

| | |
|--|--|
| packKind | `list` (queue/STATUS) |
| Surface | **Phone form** — **không** desktop Kind B list/grid |
| DES-GRID / LinErpListFilterBar | **N/A** |
| Form AC | **PASS** (mandatory) |
| Grid AC | **N/A** — phone form |
| Report AC | **N/A** |

## 3. Screens / zones

| id | zone | control | AC |
|----|------|---------|----|
| AC-00 | phone frame | Layout ≤430 · center desktop review | frame + Android parity |
| AC-01 | top bar | Button/Nav back → Hub `/asset` | nav |
| AC-02 | name | Text * · `Name` · copy `assetCollect.field.name` | required |
| AC-03 | type | Select * · `GET integration/asset-types` · `Type` | required + catalog |
| AC-04 | route | Select/Search * · `GET integration/road-routes/search` · prefill sessions | required + search |
| AC-05 | km | KmFrom * · KmTo opt | KmFrom required |
| AC-06 | status | Select * · `GET asset/road-assets/init-data` · default `tot` | required |
| AC-07 | gpsPin | Text RO Lat/Lng * · `navigator.geolocation` | fix or block |
| AC-08 | photos | PhotoRow local · media GAP | local only P1 |
| AC-09 | primary | Button POST · toast Code | Live create |
| AC-10 | cancel | Button/Nav → `/asset` | leave |

**reviewUrl:** (Design) · **peerStdUrl:** `http://localhost:9301/web-rmms-asset-collect` · std route packet ưu tiên STATUS URL; alias SCREENS `/asset/collect` nếu shell cần (UNCLEAR-STD-ROUTE → Design/Dev).

## 4. Form AC (mandatory)

| # | Rule | Pass |
|---|------|------|
| F1 | Required fields block submit khi trống | Name · Type · Route · KmFrom · Status · Lat/Lng |
| F2 | Catalog options từ Live API · **cấm** hardcode list | asset-types · road-routes/search · init-data status |
| F3 | Labels qua copy / `useFormOptions` · **cấm** hardcode VN | `assetCollect.*` |
| F4 | GPS gate: deny → AC-09 disabled · RO display | no type-in |
| F5 | Cancel / back → Hub không orphan draft persist SSOT | AC-01 · AC-10 |
| F6 | Success → toast Code · navigate Hub | no alert |
| F7 | Error API → toast · retry possible · **cấm** silent fail | |
| F8 | KmTo optional · không block | |
| F9 | Source không set `ai` từ UI | server `manual` |
| F10 | Photos không block submit nếu GAP media | local attach only |

## 5. Grid AC / Filter bar

**N/A** — không list/grid desktop · **cấm** LinErpListFilterBar trên collect.

## 6. API / FormMode bind (ids)

| Mode | API |
|------|-----|
| Load catalogs | `GET asset/road-assets/init-data` · `GET integration/asset-types` · `GET integration/road-routes/search` |
| Prefill | `GET patrol/sessions` (optional · Đang tuần) |
| Create | `POST asset/road-assets` · body `Name`·`Type`·`Route`·`KmFrom`·`Status`·`Lat`·`Lng` (+ `KmTo` opt) |
| Media | **GAP** · no invent path |

real-data §A+§B: **PASS** (reuse analy · hash skip).

## 7. Leave / Out of scope

| Leave | Owner / peer |
|-------|----------------|
| `/me*` · me-profile · me-settings · feedback · cam-view | REMOVED |
| AI detect / HITL · adjust | out slug |
| list / detail deep | peer |
| Field 2-door (BDTX / Khu-VP) deep | shell / mobile-a |
| journal / kết ca / tồn tại / tần suất | web-rmms-mobile-b…e |
| DES-GRID desktop · ERP Modal/Slideout | N/A |
| invent `CollectController` / `POST …/asset-collect` | **cấm** |
| Web BFF as client base | **cấm** (cite only) |
| ERP.* / Domains/Master | **cấm** |
| demo HTML / mock SSOT | **cấm** |
| sửa iOS/Android native | **cấm** |
| Map / GIS CTA trên collect P1 | out → peer `/gis` |
| Signed media upload | SA nếu ship (GAP-MOB-ASSET-COLLECT-MEDIA-01) |

## 8. Persona

| Zone | Actor |
|------|--------|
| AC-* Tuần đường | Nhân viên tuần đường (BDTX) — prefill tuyến từ ca Đang tuần |
| AC-* Tuần kiểm | Cán bộ QLĐB (VP / Khu) — cùng form · không lẫn session type |

Auth: staff session required · guest → login peer (Hub/shell).

## 9. Open questions (handoff — không block PO DoR)

| id | Issue | Next |
|----|-------|------|
| UNCLEAR-DOMAIN-MAP-ACOLLECT | DOMAIN-MAP thiếu row slug | **SA** add row Asset + cite Integration/Patrol |
| UNCLEAR-MEDIA-01 | Photo upload path | **SA** Signed upload nếu ship · P1 local only |
| UNCLEAR-STD-ROUTE | SCREENS `/asset/collect` vs mfeStdRoute | **Design/Dev** follow STATUS URL · alias nếu shell |
| UNCLEAR-STATUS-ANDROID | Peer thiếu Tình trạng | Prefer init-data Select · dual closed by catalog live |

## 10. Handoff Design

| Need | |
|------|--|
| Phone 430 · zones AC-00…10 · Android 1-1 icon/layout |
| control-map chốt từ controlHint |
| prototype + **reviewUrl** |
| **cấm** DES-GRID · **cấm** me tab · GPS UX deny state |
| autoApprove=ON · chain SA sau Design PASS |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `rulesVersion=2026.09.25.2` · `writtenAt=2026-09-25T14:36:45.000Z` · `taskId=task_c84f220c`
