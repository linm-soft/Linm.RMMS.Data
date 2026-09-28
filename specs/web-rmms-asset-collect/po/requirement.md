# PO — requirement — web-rmms-asset-collect

| Field | Value |
|-------|-------|
| feature | `web-rmms-asset-collect` |
| title | Thêm tài sản thủ công |
| packKind | `list` |
| changeScope | `edit_page` |
| lane | `web` |
| status | `confirmed` |
| skillId | `agent-po` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:bf61e3677d8c0ff81bfccd4e08df8f452a069408ae43f3d025dde73959990a79` |
| writtenAt | `2026-09-27T16:12:00.000Z` |
| taskId | `task_b0013a84` |
| priorTask | `task_a6862c38` · keep Design artifacts · re-confirm delta |
| demo | **N/A** |
| formPattern | Mobile full form · phone `max-width: 430px` · Pattern B validate · **không** ERP Modal/Slideout · **không** DES-GRID / LinErpListFilterBar · master no demo |
| toolbarExport | **N/A** — phone form · SUBMIT override **cấm** Excel |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/tai-san/thu-thap` |
| mfeStdUrl | `http://localhost:9301/tai-san/thu-thap` |
| codeCurrent | `src/pages/WebRmmsAssetCollect/AssetCollectPage.tsx` |
| nativeRouteCite | SCREENS `/asset/collect` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` · `mobile-bff/api/v1` · domain **Asset** (+ cite Integration/Patrol) · **cấm ERP.*** |
| deltaCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` · AssetCollectPage |
| priorAnaly | confirmed · compact `handoff/data_analy-compact.md` · control-hint + real-data §A+§B PASS · hash skip |
| autoApprove | ON → Design |

> Labels: `useFormOptions()` / copy keys `assetCollect.*` — **cấm** hardcode VN trên form.  
> **Cấm** `new_page` typed CRUD · **cấm** demo HTML / mock SSOT · **cấm** re-scan demo (hash skip) · **cấm** sửa iOS/Android · **cấm** thêm tab/route/icon · **cấm** nhét phone form vào MFE desktop.

## 1. Goal / DoD

**Edit** form Thêm tài sản thủ công đã ship: giữ layout/route/icon AC-* · áp delta SUBMIT-VALIDATE (Pattern B · SearchInput route · GPS-on-submit · submit always on) · POST Live · toast `Code` · back Hub `/asset`.

| DoD | Criterion |
|-----|-----------|
| D1 | Giữ AC-00…10 · phone ≤430 · Android icon/layout 1-1 · **cấm** tab/route/icon mới |
| D2 | Required: Name · Type · Route · KmFrom · Status · Lat/Lng (GPS) · photos (UI) |
| D3 | Submit **luôn bật** khi form sẵn sàng · chỉ `disabled={saving}` · **cấm** `disabled={!canSave}` |
| D4 | Pattern B: lần bấm đầu `validationAttempted` · banner `string[]` (tên·loại·tuyến·km·GPS·ảnh) + inline · scroll lỗi đầu · **cấm** single `alert.warning` |
| D5 | GPS deny/poor → **báo lúc bấm submit** (banner) · **cấm** khóa CTA trước · **cấm** fake · **cấm** gõ tay |
| D6 | Route = `SearchInput` + `ROAD_ROUTE_LOOKUP_CONFIG` · **xóa seed** · missing catalog → `--` · **cấm** gõ tay tuyến hợp lệ |
| D7 | Photos: **giữ** `capture="environment"` · banner thiếu nếu required · media POST vẫn GAP |
| D8 | `POST asset/road-assets` Live · Source → server `manual` · **cấm** `ai` · toast Code · **cấm** `window.alert` |
| D9 | Prefill optional Route/KmFrom từ `GET patrol/sessions` (Đang tuần) · mã lạ → `--` |
| D10 | Client ONLY `mobileApiBase()` / Mobile.Bff `:5202` · **cấm** web-bff base · **cấm ERP.*** · **cấm** invent CollectController |
| D11 | **Không** `me*` / feedback / cam-view / AI / adjust / list-detail / Field deep / journal–e / Excel |

## 2. packKind confirm

| | |
|--|--|
| packKind | `list` (queue/STATUS) |
| Surface | **Phone form** — **không** desktop Kind B list/grid |
| DES-GRID / LinErpListFilterBar | **N/A** |
| toolbar/export Excel | **N/A** — SUBMIT override |
| Form AC | **PASS** (mandatory) |
| Grid AC | **N/A** — phone form |
| Report AC | **N/A** |

## 3. Screens / zones (giữ ids)

| id | zone | control | AC |
|----|------|---------|----|
| AC-00 | phone frame | Layout ≤430 · Android 1-1 | frame |
| AC-01 | top bar | Button/Nav back → Hub `/asset` | nav |
| AC-02 | name | Text * · `Name` · `assetCollect.field.name` | required |
| AC-03 | type | Select * · `GET integration/asset-types` · `Type` | required + catalog |
| AC-04 | route | **SearchInput** * · `ROAD_ROUTE_LOOKUP_CONFIG` · `GET …/road-routes/search` · no seed · `--` if missing | required + search |
| AC-05 | km | KmFrom * · KmTo opt | KmFrom required |
| AC-06 | status | Select * · `GET asset/road-assets/init-data` · default `tot` | required |
| AC-07 | gpsPin | Text RO Lat/Lng · geolocation · validate-on-submit | fix or banner on click |
| AC-08 | photos | PhotoRow local · `capture="environment"` · media GAP | local + banner |
| AC-09 | primary | Button POST · always on · `disabled={saving}` only | Pattern B + Live create |
| AC-10 | cancel | Button/Nav → `/asset` | leave |

**reviewUrl:** `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-collect/ui/prototype/index.html` (keep · Design reopen delta)  
**peerStdUrl:** `http://localhost:9301/tai-san/thu-thap`

## 4. Form AC (mandatory) — delta

| # | Rule | Pass |
|---|------|------|
| F1 | Submit luôn enabled trừ `saving` · validate **on click** | **cấm** gate `canSave` / GPS-before-click |
| F2 | Pattern B banner `string[]` + inline sau attempt | fields: name·type·route·km·GPS·photos |
| F3 | Catalog Live · **cấm** hardcode options | asset-types · road-routes/search · init-data status |
| F4 | Labels copy / `useFormOptions` · **cấm** hardcode VN | `assetCollect.*` |
| F5 | Route SearchInput · no `ROAD_ROUTE_SEED` · empty/error → [] · unknown → `--` | shared `lookups.ts` edit |
| F6 | GPS RO · deny → banner on submit · no type-in · no fake | AC-07 · AC-09 |
| F7 | Cancel / back → Hub · không orphan draft SSOT | AC-01 · AC-10 |
| F8 | Success → toast Code · navigate Hub | no alert |
| F9 | Error API → toast · retry · **cấm** silent fail | |
| F10 | KmTo optional · không block | |
| F11 | Source không set `ai` từ UI | server `manual` |
| F12 | Photos local · capture giữ · media GAP · banner nếu UI required | no invent POST |

## 5. Grid AC / Filter bar

**N/A** — không list/grid desktop · **cấm** LinErpListFilterBar · **cấm** Excel toolbar trên collect.

## 6. API / FormMode bind (ids)

| Mode | API |
|------|-----|
| Load catalogs | `GET asset/road-assets/init-data` · `GET integration/asset-types` · `GET integration/road-routes/search` |
| Prefill | `GET patrol/sessions` (optional · Đang tuần) |
| Create | `POST asset/road-assets` · body `Name`·`Type`·`Route`·`KmFrom`·`Status`·`Lat`·`Lng` (+ `KmTo` opt) |
| Users | BFF forward shared · **không** field trên collect |
| Media | **GAP** · no invent path |
| BFF base | HARD `mobileApiBase()` · **cấm** web-bff |

real-data §A+§B: **PASS** (reuse analy · hash skip · **cấm** re-scan demo).

## 7. Leave / Out of scope

| Leave | Owner / peer |
|-------|----------------|
| `/me*` · me-profile · me-settings · feedback · cam-view | REMOVED |
| AI detect / HITL · adjust | out slug |
| list / detail deep | peer |
| Field 2-door deep | shell / mobile-a |
| journal / kết ca / tồn tại / tần suất | web-rmms-mobile-b…e |
| DES-GRID · ERP Modal/Slideout · Excel toolbar | N/A |
| invent `CollectController` / `POST …/asset-collect` | **cấm** |
| Web BFF as client base | **cấm** |
| ERP.* / Domains/Master | **cấm** |
| demo HTML / mock SSOT · re-scan demo | **cấm** |
| sửa iOS/Android · new tab/route/icon | **cấm** |
| Map / GIS CTA trên collect | out → peer `/gis` |
| Signed media upload | GAP-MOB-ASSET-COLLECT-MEDIA-01 · no invent |

## 8. Persona

| Zone | Actor |
|------|--------|
| AC-* Tuần đường | Nhân viên tuần đường (BDTX) — prefill tuyến từ ca Đang tuần |
| AC-* Tuần kiểm | Cán bộ QLĐB (VP / Khu) — cùng form · không lẫn session type |

Auth: staff session required · guest → login peer (Hub/shell).

## 9. Open questions

| id | Issue | Status |
|----|-------|--------|
| UNCLEAR-MEDIA-01 | Photo upload path | **open GAP** · accepted prior Review · no invent · P1 local only |
| UNCLEAR-DOMAIN-MAP-ACOLLECT | DOMAIN-MAP row | **resolved** prior |
| UNCLEAR-STD-ROUTE | mfeStdRoute | **resolved** · `/tai-san/thu-thap` |
| UNCLEAR-STATUS-ANDROID | Tình trạng | **resolved** prior · init-data Select |

## 10. Handoff Design

| Need | |
|------|--|
| **Giữ** prototype AC-00…10 · reopen **reviewUrl** |
| Delta notes: AC-09 always on · errBanner Pattern B · AC-04 SearchInput · AC-07 GPS-on-submit |
| control-map chốt từ controlHint · **cấm** DES-GRID · **cấm** me tab |
| autoApprove=ON · chain SA sau Design PASS |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:bf61e3677d8c0ff81bfccd4e08df8f452a069408ae43f3d025dde73959990a79` · `rulesVersion=2026.09.25.2` · `writtenAt=2026-09-27T16:12:00.000Z` · `taskId=task_b0013a84`
