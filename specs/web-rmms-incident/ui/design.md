# Design — web-rmms-incident

| Field | Value |
|-------|-------|
| feature | `web-rmms-incident` |
| title | Sự cố — edit Pattern B (submit + banner + GPS on-click) |
| this role | `design` · `/agent-design` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_7da17034`) |
| changeScope | `edit_page` |
| packKind | **`list`** (PO · UI = **phone CardList** · **≠** Kind B desktop) |
| lane | `web` |
| stack | `web_mfe_phone` · `Linm.Web.RMMS.Mobile` · `max-width: 430px` |
| formPattern | Mobile **full** · Android 1-1 · **Pattern B** · **không** ERP Modal/Slideout Kind B |
| DES-GRID / LinErpListFilterBar | **N/A** — phone Search+Chip · **cấm** clone Kind B |
| Report AC / DES-RPT | **N/A** |
| shared_grid_example | **N/A** (phone) |
| real_view_parity | **v1** |
| peerStdUrl | `http://localhost:9301/van-de/moi` |
| mfeStdUrl | `http://localhost:9301/van-de/moi` |
| mfeStdRoute | `/van-de/moi` |
| productRoute | `/incident` · `/incident/new` · `/incident/:id` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident/ui/prototype/index.html` |
| demo | **N/A** · hash skip · **cấm** re-scan (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · Incident+Patrol+Integration+AiVision(+files) · **cấm ERP.*** |
| bff | `Linm.RMMS.Mobile.Bff` · `:5202` · `mobile-bff/api/v1` · **cấm** web-bff client |
| controlHint | `specs/_data-analy/features/web-rmms-incident-control-hint.md` |
| realData | `specs/_data-analy/features/web-rmms-incident-real-data.md` · §A+§B+Delta PASS |
| deltaCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` · IncidentCreatePage |
| prior | PO `confirmed` · `handoff/po-compact.md` · contentHash `sha256:d753df685c7334cda81339c1c6daccaa3463c4e8c6350eaff5562a6e41584015` |
| keep | prior Design L/N/D zones · reviewUrl path · nest `/van-de` |
| autoApprove | **ON** |
| e2eQa | ON queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở Design |
| `devSlash` | `/agent-dev` |
| updatedAt | `2026-09-27T12:26:00.000Z` |
| taskId | `task_7da17034` |
| skillId | `agent-design` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:d753df685c7334cda81339c1c6daccaa3463c4e8c6350eaff5562a6e41584015` |

**Cấm:** Dev/BE trước confirm (đã autoApprove) · ERP.* · invent slug controller · Kind B DES-GRID · `LinErpListFilterBar` · fake GPS · hardcode label keys ngoài `useFormOptions` · native `alert`/`confirm` · re-scan demo · `yarn build` / e2e / start:std · Me*/feedback/cam-view · journal B–E · `disabled={!canCreate}` · khóa Create vì asset∧session∧gps∧online · banner cho API 4xx · SearchInput users/routes trên INC-N.

## 0. Context / Demo

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/web-rmms-incident.md` | § Delta Pattern B |
| DELTA | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` | IncidentCreatePage |
| DEM | — | **N/A** · hash skip · **cấm** re-scan |
| DA-01 / DA-02 | `_data-analy/features/web-rmms-incident-{control-hint,real-data}.md` | inventory + §B+Delta |
| PO | `po/requirement.md` | AC-PB-01…04 · AC-CREATE-05 edit · keep GRID/DETAIL |
| tokens | `docs/mobile-tokens.json` | primary `#0C84C0` · phone 430 |
| keep proto | `ui/prototype/index.html` | patch INC-N Pattern B · **giữ** reviewUrl |

## 1. Pattern & ownership

| | |
|--|--|
| Frame | Phone **430px** · tokens primary `#0C84C0` · label **13** · field **≥16** (**GAP-TYP-01**) |
| This feature owns | **INC-L / INC-N / INC-D** · std `/van-de` nest |
| Delta focus | **INC-N** Pattern B only · L/D **giữ** |
| Peer owns | INC-V vis · INC-C chat · INC-E estimate/WO · offline draft |
| DES-LEAVE | dirty on INC-N → in-app sheet · **cấm** `window.confirm` |
| Out | typed CRUD rewrite · Excel · Me* · journal B–E · invent path |

### Ownership (Design resolve)

| Surface | Owner |
|---------|-------|
| List std `/van-de` · product `/incident` | **this feature** (keep) |
| Create `/van-de/moi` · `/incident/new` | **this feature** · **Pattern B Delta** |
| Detail `/van-de/:id` | **this feature** (keep) |
| Banner keys asset/session/GPS/offline | **useFormOptions** · AC-PB-04 (**UNCLEAR-PB-BANNER-01 resolved**) |

## 2. Screens / zones

| Zone | Route | Surface | Wire |
|------|-------|---------|------|
| **INC-L** | `/van-de` · `/incident` | Full list | Search · Chip · CardList · FAB · **giữ** |
| **INC-N** | `/van-de/moi` · `/incident/new` | Full form | assetPick · kind · checklist · photos(sheet Hủy/Lưu) · sessionStamp · gpsLock · severity · **validate.banner** · create/draft · **Pattern B** |
| **INC-D** | `/van-de/:id` · `/incident/:id` | Full RO | keep close+Note |
| peer INC-V/C/E | peer | Peer | nav-only |

### IA

```
(auth) → shell tab Incident → INC-L
  FAB / create     → INC-N (/van-de/moi)
  row.open         → INC-D (/:id)
  INC-N Create tap → validate.banner (+ GPS modal nếu deny) · POST khi PASS
  INC-N draft      → peer offline queue
```

## 3. Field inventory (Control = controlHint)

### INC-L (giữ)

| uiField | controlHint | Required | Bind / notes |
|---------|-------------|----------|--------------|
| search / filter.status / filter.severity | SearchInput · Chip | — | Live query |
| list | CardList | * | `GET incident/incidents` · HasGps · **không** Lat/Lng · thumb 72×72 từ `mediaIds[0]` · `+N` · rỗng = «Chưa có ảnh» |
| card.thumb | Image | — | `GET files/{id}/object` · **cấm** pin (không có tap) · **cấm** cache khớp phiên tuần đường |
| fab | FAB | * | → `/van-de/moi` |
| entry.assign | IconButton | * | `/cong-viec?incidentId={id}` · list chỉ WO của sự cố · hub new truyền cùng `incidentId` |
| empty / toast.fail | EmptyState / Toast | — | **cấm** `window.alert` |

### INC-N (Delta Pattern B)

| uiField | controlHint | Required | Bind / notes |
|---------|-------------|----------|--------------|
| assetIdentify | Radio 2 cột | * | Đã/Chưa xác định · keep prior |
| assetPick | LookupGrid | * khi Đã xác định | `GET integration/asset-types` · thiếu → banner on submit |
| assetCard | Card RO | * | selected |
| kind | Segment 3 | * | → `IncidentType` |
| checklist | CheckboxGroup | — | local → `Description` · ẩn khi Chưa xác định |
| photos | PhotoRow | — | Nút **+** mở sheet chụp · pin + nhiều ảnh · cùng `RouteCaptureControl` |
| captureSave / captureCancel | Button | * trên sheet | Chỉ **Lưu** / **Hủy** · Lưu gắn `MediaIds` rồi đóng về form Ghi sự cố |
| detect | — | — | **Để sau** · không nút Nhận diện trên form tạo |
| sessionStamp | Text RO | * | `GET patrol/sessions` · thiếu → banner on submit · **không** SearchInput tuyến |
| gpsLock | GPS | * | deny/pending · **không** `disabled` Create · báo **on submit** · **cấm** fake |
| severity | Select | — | LOOKUP_STATIC |
| description | Textarea | — | + checklist fold |
| validate.banner | Banner | — | `string[]` Pattern B · keys AC-PB-04 · chỉ sau `validationAttempted` |
| create | Button primary | * | **always enabled** (form ready) · `disabled` **chỉ** `creating` · **cấm** `disabled={!canCreate}` |
| draftOffline | Button secondary | — | peer offline |
| gps.deny.modal | Modal | — | keys `incident.gps.deny.title` / `.body` · on submit khi deny |

**Pattern B rules (Design chốt):**

| Rule | Behavior |
|------|----------|
| AC-PB-01 | Create enabled · disable chỉ khi `creating` |
| AC-PB-02 | First tap → `validationAttempted=true` · trước đó **cấm** inline error |
| AC-PB-03 | Fail client → banner `string[]` + inline + scroll first · **cấm** single `alert.warning` · API 4xx = toast **không** banner |
| AC-PB-04 | asset→`incident.pick.title` · session→`incident.session.empty` · GPS→`incident.gps.deny` · offline→`incident.offline` |
| AC-CREATE-05 | GPS deny **không** khóa nút · banner/modal on submit |

### INC-D (giữ)

| uiField | controlHint | Required | Bind / notes |
|---------|-------------|----------|--------------|
| header / routeKm / hasGps | Text/Flag | * | RO · **cấm** invent Lat display as create body |
| detail.photos | Image gallery | — | Sau khối thông tin · trước Peer · mọi `mediaIds` · rỗng = «Chưa có ảnh» · 1 ảnh full · ≥2 lưới 2 cột · keys `incident.detail.photos` / `incident.photo.none` |
| note / close | Textarea / Button | * | POST close · `disabled` chỉ `closing` |

**Labels:** `useFormOptions()` — prototype nhãn VN review; Dev wire keys.  
**Live API only** — **cấm** itemsOrDemo · **cấm** invent `web-rmms-incident/*`.

## 4. Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/index.html` (**patched** Pattern B) |
| Zones | INC-L · INC-N · INC-D (+ peer notes) |
| Form | INC-N full · DES-LEAVE dirty · **validate.banner** · create always-on |
| Grid/filter desktop | **N/A** |
| SSOT | control-hint · real-data §B+Delta · SUBMIT-VALIDATE · mobile-tokens |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident/ui/prototype/index.html` |
| **peerStdUrl** | `http://localhost:9301/van-de/moi` |
| **real_view_parity** | `v1` |

### Wire

```
INC-L: topbar · search · chips · CardList(+HasGps · thumb mediaIds) · FAB  (giữ)
INC-PICK: radio Đã|Chưa xác định (giữ)
INC-N: asset · kind · checklist · photo(sheet Hủy/Lưu · pin · nhiều ảnh) · sessionStamp · gpsLock
      · validate.banner (hidden→show on fail submit) · Create always-on · Draft
INC-D: header · routeKm · HasGps · gallery mediaIds · close+Note (giữ)
Board: Default | Create | Empty | GPS deny (button ON · banner/modal on tap)
       | GPS >30 | No session (banner on tap) | Error toast
```

### Query modes (prototype)

| Query | Effect |
|-------|--------|
| (default) | INC-L |
| `?screen=create` | INC-N · Create **enabled** |
| `?screen=detail` | INC-D |
| `?empty=1` | EmptyState list |
| `?gps=deny` | Create **still enabled** · tap → banner + GPS modal · **cấm** fake |
| `?acc=45` | Sai số > 30 m · Create vẫn bật · sheet chụp vẫn Lưu |
| `?nosession=1` | Create enabled · tap → banner session key |
| `?error=1` | list toast · **cấm** `window.alert` |

## 5. API map (cite real-data §B — **không đổi** DTO)

| Action | API |
|--------|-----|
| List | `GET mobile-bff/api/v1/incident/incidents` |
| Create | `POST …/incident/incidents` |
| Detail | `GET …/incident/incidents/{id}` |
| Close | `POST …/incident/incidents/{id}/close` |
| Sessions | `GET …/patrol/sessions` |
| Asset types | `GET …/integration/asset-types` |
| Upload/detect | `POST …/ai-vision/uploads` · `…/detect` · files/* peer |

**BFF:** Mobile.Bff `:5202` · **cấm** Web BFF · **cấm ERP.***  
Create body **giữ Live:** Title · RouteName · IncidentType · Status · RequestedAt · optional Severity/Description/AssetLabel/KmStart/MediaIds/DetectionId · HasGps · **không** Lat.

## 6. DES checklist

| ID | Result |
|----|--------|
| DES-A zones INC-L/N/D | **PASS** (keep + Delta INC-N) |
| DES-B control = controlHint | **PASS** · Pattern B create/banner/gps |
| DES-C prototype + reviewUrl | **PASS** · patched |
| DES-D Leave dirty | **PASS** |
| DES-GRID / DES-RPT | **N/A** phone |
| real_view_parity | **v1** |
| AC-PB-01…04 | **PASS** Design zones |
| GAP-DES-DEMO-RESCAN-01 | **PASS** · no re-scan |
| UNCLEAR-PB-BANNER-01 | **resolved** PO AC-PB-04 |

## 7. UNCLEAR (carry)

| id | Action |
|----|--------|
| UNCLEAR-PB-BANNER-01 | **resolved** · AC-PB-04 keys |
| Prior UNCLEAR-* | **resolved** prior new_page pipeline |
| — | SA: no MIG · cite Live · Mobile.Bff only |

## 8. Handoff

| Role | Need |
|------|------|
| SA | no MIG · Live DTO cite · Pattern B = FE only · Mobile.Bff · **cấm** invent · **cấm** ERP.* |
| TL | T-* edit `IncidentCreatePage` Pattern B · keep L/D |
| Dev | `/agent-dev` · bỏ `disabled={!canCreate}` · banner + GPS on-submit · capture giữ · BFF `:5202` |
| QA | always-on Create · banner keys · GPS deny click · no fake · no web-bff · e2e queued |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:d753df685c7334cda81339c1c6daccaa3463c4e8c6350eaff5562a6e41584015` · `rulesVersion=2026.09.25.2` · `updatedAt=2026-09-27T12:26:00.000Z` · `design_confirm=approve` · `autoApprove=ON` · `taskId=task_7da17034`
