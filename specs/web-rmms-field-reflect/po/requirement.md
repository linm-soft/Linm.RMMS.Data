# PO requirement — web-rmms-field-reflect

| Field | Value |
|-------|-------|
| feature | `web-rmms-field-reflect` |
| title | Phản ánh hiện trường |
| packKind | `list` |
| changeScope | `edit_page` |
| formPattern | Mobile full (phone max-width 430) · Android 1-1 · **N/A** ERP Modal/Slideout Kind B |
| lane | `web` |
| status | `confirmed` |
| skillId | `agent-po` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:d8f13df3772c0f27b367c5e01a5ce2cf942b1a27640c1390e76e34c3a8c267f2` |
| writtenAt | `2026-09-27T11:50:00.000Z` |
| demo | **N/A** |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/phan-anh` |
| mfeStdUrl | `http://localhost:9301/phan-anh` |
| productRoute | `/field/reflect` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Incident + Patrol + Integration + AiVision (+ FileService cite) · Mobile.Bff `:5202` · `mobile-bff/api/v1` · **cấm ERP.*** |
| editCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` · Pattern B · `FieldReflectPage.tsx` |
| prior | data_analy `confirmed` · control-hint + real-data · compact `handoff/data_analy-compact.md` · prior PO `new_page` PASS (giữ DoD FR-00/01/02) |
| taskId | `task_8da9efa7` |
| autoApprove | ON → Design |
| e2eQa | ON (queued `/agent-qa*` — **cấm** E2E ở PO) |

> Analy hash skip · **cấm** re-scan demo. Labels: `useFormOptions()` / copy key · **cấm** hardcode VN form.  
> **Cấm** typed `new_page` · **cấm** Excel toolbar · **cấm** tab/route/icon mới · **cấm** mở android/ios proto · **cấm** invent `field-reflect/*` · **cấm** fake GPS / bịa ca · **cấm** web-bff client.

## 1. Goal / DoD

**Goal (delta):** Giữ màn Phản ánh hiện trường đã ship (FR-00/01/02 Live) · chỉnh **submit/validate Pattern B** trên `FieldReflectPage` theo SUBMIT-VALIDATE · không rebuild CRUD/API.

**DoD (PASS khi):**

1. **Giữ** FR-00 pick · FR-01 form · FR-02 photo-geo · Live API wire prior (sessions · asset-types · uploads/files · detect · incidents).
2. **Detect CTA:** chỉ `disabled={detecting}` · **cấm** `disabled={!canDetect}` (authed/online/gps/photos).
3. **Create CTA:** chỉ `disabled={creating}` · **cấm** `disabled={!canCreate}` (session/asset/gps).
4. Lần bấm Detect/Create đầu set `validationAttempted` · banner `string[]` (phiên · tài sản · GPS · ảnh theo action) + inline · scroll lỗi đầu · **cấm** một `alert.warning` thay banner.
5. GPS deny / chưa chốt: **không** khóa nút · bấm mới báo (banner/modal quyền) · Acc>30 vẫn **chặn POST detect trong handler** (nút vẫn bật).
6. API 4xx/5xx/mạng → toast · **cấm** banner cho lỗi API · **cấm** `window.alert` · **cấm** silent ok.
7. Photo: giữ PhotoRow → photo-geo shutter · nếu thêm file input local → `capture="environment"`.
8. Session stamp RO · mã tuyến thiếu catalog → `--` · **cấm** seed `ROAD_ROUTE_SEED` trên reflect · **cấm** gắn SearchInput users/routes trên FR-01.
9. Labels `useFormOptions` / LinmCopy · BFF Mobile only `:5202` · **cấm** ERP.* · **cấm** Me* / journal / kết ca / tồn tại / tần suất.
10. End align: `/align-mobile-to-mfe` · SSOT = `FieldReflectPage` · phone ≤430 · **cấm** tab/route/icon path mới · **cấm** mở prototype android/ios.

## 2. changeScope / packKind

| | |
|--|--|
| `changeScope` | `edit_page` · **cấm** typed `new_page` |
| `packKind` | `list` (mobile Field form — **không** ERP Kind B desktop list) |
| DES-GRID / LinErpListFilterBar | **N/A** — phone Field form |
| Report AC | **N/A** |
| Form AC | **PASS required** — Pattern B CTA + banner + giữ FR-00/01/02 |
| Prior artifacts | **Giữ** Design prototype/reviewUrl · SA solution · **không** rewrite new_page |

## 3. § Delta Current vs New

| | Current (shipped) | New (this PO) |
|--|-------------------|---------------|
| Detect | `disabled={!canDetect}` | idle luôn bật · `disabled={detecting}` · thiếu GPS/ảnh/offline → banner on click |
| Create | `disabled={!canCreate}` | idle luôn bật · `disabled={creating}` · thiếu phiên/TS/GPS → banner on click |
| Validate UX | toast sớm / early return | `validationAttempted` · banner `string[]` + inline · API → toast |
| GPS | khóa CTA trước khi đủ fix | deny → báo khi bấm · Acc>30 chặn POST detect (handler) |
| Route / users | N/A picker trên reflect | giữ RO session · peer users forward Mobile.Bff (không gắn picker reflect) |
| Align | — | `/align-mobile-to-mfe` · SSOT MFE page · 430px |
| API | Live paths PASS | **không** invent path · **không** ERP.* |

## 4. Screens / zones

| Id | Zone | AC |
|----|------|----|
| FR-00 | `assetPick` LookupGrid | **Giữ** `GET integration/asset-types` · thiếu TS → banner on Create (không khóa nút) |
| FR-01 | Form full | **Giữ** kind · checklist · photos · detect · sessionStamp · gpsLock · severity · description · create · draftOffline · **+** `validationBanner` Pattern B |
| FR-01 | `validationBanner` | string[] phiên · TS · GPS · ảnh · thu gọn/đóng · **cấm** một alert.warning |
| FR-01 | `detect` / `create` | Pattern B disable chỉ busy · **cấm** canDetect/canCreate |
| FR-01 | `emptyNoSession` | no ca → banner on Create · **cấm** bịa ca |
| FR-02 | capture overlay | **Giữ** PhotoRow / photo-geo · GPS deny báo khi bấm · **cấm** fake |

**Out (Leave):** Me* · feedback · cam-view · journal/kết ca/tồn tại/tần suất (B–E) · invent `field-reflect/*` · ERP.* · Excel · iOS/Android native · tab/route/icon mới.

## 5. Grid AC (list pack)

| Rule | Verdict |
|------|---------|
| DES-GRID-* / LinErpListFilterBar | **N/A** — không desktop grid |
| FR-00 pick | mobile LookupGrid asset-types · **cấm** ERP list filter bar |
| Empty / Error | empty → banner on action hoặc toast API · **cấm** `window.alert` |
| toolbar/export Excel | **N/A** — SUBMIT-VALIDATE override |

## 6. Form AC (mobile · Pattern B)

| Control | Rule |
|---------|------|
| kind | Segment 3 → `IncidentType` · LOOKUP_STATIC · **giữ** |
| checklist | local by asset → `Description` · **cấm** invent API · **giữ** |
| photos | PhotoRow → FR-02 · thiếu → banner on Detect |
| detect | Pattern B · POST `ai-vision/detect` · Acc≤30 trong handler · **cấm** fake class |
| sessionStamp | Route·Km live sessions · empty → banner on Create |
| gpsLock | deny → banner on click · **cấm** khóa CTA trước · **cấm** fake |
| severity | Select LOOKUP_STATIC · **giữ** |
| description | Textarea · copy key · **giữ** |
| validationBanner | Pattern B `string[]` · first click |
| create | Pattern B · POST `incident/incidents` · body Live prior |
| draftOffline | secondary · peer offline · **cấm** fake success |
| toasts | API/network only · copy keys |

## 7. Leave / boundary

| Leave | Owner |
|-------|-------|
| UNCLEAR-VALIDATE-B / GAP-VALIDATE-B-REFLECT | Dev — bỏ canDetect/canCreate · banner |
| UNCLEAR-ALIGN-01 / GAP-ALIGN-REFLECT-01 | Dev/QA — `/align-mobile-to-mfe` · 430px |
| GAP-PGC-BE-01 HasGps only | deferred · **cấm** MIG ở PO |
| Prior DOMAIN-MAP · MEDIA · PGC · ENTRY · SESS · CHK | **closed** · không reopen typed new_page |
| Offline queue replay | `web-rmms-offline` |
| Journal / kết ca / tồn tại / tần suất | web-rmms-mobile-b…e |
| users SearchInput | peer forms (kết ca…) · **không** reflect picker |
| Native iOS/Android | **out of scope** |

## 8. API / data (giữ Live — SA confirm)

| Method | Path | Note |
|--------|------|------|
| GET | `patrol/sessions` | ca Đang tuần · Route/Km · live-only |
| GET | `integration/asset-types` | pick loại TS |
| POST | `ai-vision/uploads` (+ PUT) | ảnh optional |
| POST | `files/init` · PUT object · POST commit | photo-geo · purpose=`photo-geo-capture` |
| POST | `ai-vision/detect` | optional · Lat/Lng · Acc≤30 handler |
| POST | `incident/incidents` | tạo vấn đề · HasGps khi có fix |
| GET | `integration/road-routes/search` | peer shared · reflect RO |
| GET | `integration/users` | peer forward Mobile.Bff nếu thiếu · reflect không picker |

App base: `{BffBase}/mobile-bff/api/v1`. **Cấm** invent `field-reflect/*`. **Cấm** ERP.*. Demo **N/A**.

## 9. Personas

| Ai | Việc |
|----|------|
| NV tuần đường (BDTX) | Reflect trong ca · Pattern B CTA |
| Cán bộ QLĐB (VP/Khu) | Cùng form · stamp PatrolType từ ca |

## 10. Handoff Design

| Packet | |
|--------|--|
| changeScope | `edit_page` · delta CTA/banner · **giữ** phone 430 zones FR-* |
| reviewUrl | **giữ** `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field-reflect/ui/prototype/index.html` |
| peerStdUrl | `http://localhost:9301/phan-anh` |
| controlHint | inventory analy · Design chốt control-map delta |
| OUT | Excel · Me · new tab/route · android/ios proto edit |
| autoApprove | ON |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:d8f13df3772c0f27b367c5e01a5ce2cf942b1a27640c1390e76e34c3a8c267f2` · `rulesVersion=2026.09.25.2` · `writtenAt=2026-09-27T11:50:00.000Z` · `changeScope=edit_page` · `taskId=task_8da9efa7`
