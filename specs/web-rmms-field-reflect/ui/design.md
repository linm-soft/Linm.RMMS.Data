# Design — web-rmms-field-reflect

| Field | Value |
|-------|-------|
| feature | `web-rmms-field-reflect` |
| title | Phản ánh hiện trường |
| this role | `design` · `/agent-design` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_809a7227`) |
| changeScope | `edit_page` |
| packKind | **`list`** (PO · UI = **phone Field form** · **≠** Kind B desktop) |
| lane | `web` |
| stack | `web_mfe_phone` · `Linm.Web.RMMS.Mobile` · `max-width: 430px` |
| formPattern | Mobile **full** · Android 1-1 · **không** ERP Modal/Slideout Kind B |
| DES-GRID / LinErpListFilterBar | **N/A** — phone Field form · **cấm** clone |
| Report AC / DES-RPT | **N/A** |
| shared_grid_example | **N/A** (phone) |
| real_view_parity | `v1` |
| peerStdUrl | `http://localhost:9301/phan-anh` |
| mfeStdUrl | `http://localhost:9301/phan-anh` |
| mfeStdRoute | `/phan-anh` |
| productRoute | `/field/reflect` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field-reflect/ui/prototype/index.html` |
| demo | **N/A** · hash skip · **cấm** re-scan (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · Incident + Patrol + Integration + AiVision (+files) · **cấm ERP.*** |
| bff | `Linm.RMMS.Mobile.Bff` · `:5202` · `mobile-bff/api/v1` · **cấm** web-bff |
| controlHint | `specs/_data-analy/features/web-rmms-field-reflect-control-hint.md` |
| realData | `specs/_data-analy/features/web-rmms-field-reflect-real-data.md` · §A+§B PASS |
| editCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` · Pattern B · `FieldReflectPage` |
| prior | PO `confirmed` · `handoff/po-compact.md` · DA `confirmed` · contentHash `sha256:d8f13df3772c0f27b367c5e01a5ce2cf942b1a27640c1390e76e34c3a8c267f2` |
| priorDesign | `task_3cd98c18` new_page · **giữ** zones/prototype · delta CTA/banner |
| autoApprove | **ON** |
| e2eQa | ON queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở Design |
| `devSlash` | `/agent-dev` |
| updatedAt | `2026-09-27T12:05:00.000Z` |
| taskId | `task_809a7227` |
| skillId | `agent-design` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:d8f13df3772c0f27b367c5e01a5ce2cf942b1a27640c1390e76e34c3a8c267f2` |

**Cấm:** Dev/BE trước confirm (đã autoApprove) · ERP.* · invent `field-reflect/*` · fake GPS · hardcode VN labels ngoài `useFormOptions` · `window.alert` · re-scan demo · `yarn build` / e2e / start:std · Me*/feedback/cam-view · Excel · typed `new_page` · tab/route/icon mới · mở android/ios proto · khóa CTA vì thiếu required.

## 0. Context / Demo

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/web-rmms-field-reflect.md` | edit_page · hash gate |
| CTX-02 | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` | Pattern B · FieldReflectPage |
| CTX-03 | `docs/plan/web-rmms-mobile/SCREENS.md` | `/field/reflect` + photo-geo |
| DEM | — | **N/A** · hash skip · **cấm** crawl |
| DA-01 / DA-02 | `_data-analy/features/web-rmms-field-reflect-{control-hint,real-data}.md` | inventory + §B · contentHash match |
| PO | `po/requirement.md` · `handoff/po-compact.md` | Pattern B DoD · FR-00…02 |
| tokens | `docs/mobile-tokens.json` | primary `#0C84C0` · phone 430 |

## 0b. § Delta Current vs New (edit_page HARD)

| | Current (shipped / prior design) | New (this task) |
|--|----------------------------------|-----------------|
| changeScope | `new_page` pipeline PASS | `edit_page` · **giữ** FR-00/01/02 · reviewUrl |
| mfeStdRoute | notes cũ `/web-rmms-field-reflect` | **SSOT** `/phan-anh` · product `/field/reflect` |
| Detect CTA | `disabled={!canDetect}` | Pattern B: idle **luôn bật** · chỉ `disabled={detecting}` |
| Create CTA | `disabled={!canCreate}` | Pattern B: idle **luôn bật** · chỉ `disabled={creating}` |
| Validate UX | early toast / return | first click → `validationAttempted` · **validationBanner** `string[]` (phiên · TS · GPS · ảnh) + inline · API 4xx → toast |
| GPS | khóa CTA trước khi đủ fix | deny/poor: **không** khóa nút · bấm mới báo · Acc>30 **không** POST detect (handler) · nút vẫn bật |
| Photo | PhotoRow → FR-02 | giữ · `capture="environment"` nếu file input local |
| Align cuối | — | `/align-mobile-to-mfe` · SSOT `FieldReflectPage` · 430px · **cấm** tab/route/icon mới · **cấm** mở android/ios proto |

## 1. Pattern & ownership

| | |
|--|--|
| Frame | Phone **430px** · primary `#0C84C0` · label **13** · field **≥16** |
| Surface | Full screen form · **cấm** ERP Modal/Slideout · **cấm** DES-GRID |
| This feature | FR-00 pick · FR-01 form · FR-02 capture · **delta** CTA/banner Pattern B |
| Peer | Field hub · offline draft · photo-geo |
| Out | Me* · cam-view · feedback · journal/kết ca/tồn tại/tần suất · Excel · invent path |

### GPS / validate (Design chốt Pattern B)

| | |
|--|--|
| FR-01 `detect` / `create` | Nút **enabled** khi idle · thiếu field → banner on click |
| FR-01 `validationBanner` | Banner `string[]` · phiên · tài sản · GPS · ảnh |
| GPS deny | modal/banner **on click** · **cấm** fake · **cấm** khóa CTA trước |
| Acc > 30 | Detect vẫn bật · handler chặn POST · banner/toast |
| FR-02 photos | PhotoRow → `openCapture` · photo-geo overlay |

## 2. Screens / zones

| Zone | Route | Surface | Wire |
|------|-------|---------|------|
| **FR-00** | pick gate | LookupGrid | `GET integration/asset-types` |
| **FR-01** | `/field/reflect` · std `/phan-anh` | Full form + Pattern B banner | kind · checklist · photos · detect · session · GPS · severity · desc · Create/Draft |
| **FR-02** | capture overlay | Overlay | photo-geo · GPS báo khi bấm shutter |

### IA

```
(auth) → Field hub → FR-00 pick (optional) → FR-01 form
  FR-01 photos → FR-02 → back FR-01 (+ MediaIds)
  FR-01 Detect click → validate photos/GPS/acc → banner | POST detect
  FR-01 Create click → validate session/TS/GPS → banner | POST incidents
  FR-01 Draft → local queue peer offline
GPS deny → on click modal/banner · CTA vẫn enabled idle
No session → banner on Create · Draft OK
```

## 3. Field inventory (Control = controlHint)

| uiField | screen | controlHint | Required | Bind / notes |
|---------|--------|-------------|----------|--------------|
| phoneFrame | FR-* | Layout | * | max-width 430 |
| assetPick | FR-00 | LookupGrid | * | `GET integration/asset-types` |
| assetCard | FR-01 | Text RO / Card | * | thiếu → banner on Create |
| back | FR-01 | Button/Nav | * | → FR-00 hoặc Field hub |
| screenTitle | FR-01 | Text | * | copy key |
| kind | FR-01 | Segment/Pill 3 | * | → `IncidentType` `Damage`/`Lost`/`Broken` · BE catalog cho phép cùng mã |
| checklist | FR-01 | CheckboxGroup | — | local · → `Description` |
| photos | FR-01 | PhotoRow | — | FR-02 · thiếu → banner on Detect |
| detect | FR-01 | Button | — | Pattern B · `disabled` chỉ `detecting` |
| detectionHint | FR-01 | Text RO | — | class optional |
| sessionStamp | FR-01 | Text RO | * | sessions · empty → banner on Create |
| gpsLock | FR-01 | GPS / Chip | * | deny→banner on click · **cấm** khóa CTA |
| severity | FR-01 | Select | — | LOOKUP_STATIC |
| description | FR-01 | Textarea | — | copy key |
| validationBanner | FR-01 | Banner | — | Pattern B `string[]` |
| create | FR-01 | Button primary | * | Pattern B · `disabled` chỉ `creating` |
| draftOffline | FR-01 | Button secondary | * | peer offline |
| emptyNoSession | FR-01 | Banner/Toast | — | live-only |
| toast.* | FR-01 | Toast | * | API/network · **cấm** `window.alert` |
| capture / shutter | FR-02 | Overlay | — | GPS báo on click · MediaIds |

**Labels:** `useFormOptions()` / copy keys — prototype nhãn VN để review; Dev wire key.

## 4. Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/index.html` |
| Zones | FR-00 · FR-01 · FR-02 |
| Form | Mobile full · Pattern B CTA/banner |
| Grid/filter desktop | **N/A** |
| SSOT | control-hint · real-data §B · SUBMIT-VALIDATE Pattern B |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field-reflect/ui/prototype/index.html` |
| **peerStdUrl** | `http://localhost:9301/phan-anh` |
| **real_view_parity** | `v1` |

### Wire

```
FR-00: LookupGrid → FR-01
FR-01: kind · PhotoRow · Detect (idle on) · session RO · GPS · validationBanner · Create (idle on) / Draft
FR-02: photo-geo · shutter → MediaIds
Board: Default | Form ready | FR-02 | GPS deny | No session | Accuracy >30 | Missing fields
```

### Query modes

| Query | Effect |
|-------|--------|
| (default) | FR-00 pick |
| `?form=1` | FR-01 ready · GPS ok · session loaded · CTA idle on |
| `?capture=1` | FR-02 overlay |
| `?deny=1` | GPS deny chip · CTA **enabled** · click → modal/banner |
| `?empty=1` | no session · Create click → banner |
| `?acc=1` | accuracy 48 · Detect enabled · click → no POST + banner |
| `?miss=1` | thiếu ảnh (+ optional) · Detect/Create click → validationBanner |

## 5. API map (cite real-data §B)

| Action | API |
|--------|-----|
| Session stamp | `GET mobile-bff/api/v1/patrol/sessions` · live-only |
| Asset pick | `GET …/integration/asset-types` |
| Upload | `POST ai-vision/uploads` **hoặc** `files/init` · object · commit |
| Detect | `POST ai-vision/detect` · Acc≤30 in handler |
| Create | `POST incident/incidents` · body cite Live · `HasGps=true` khi có fix |
| Draft | local queue peer offline |
| Peer | `road-routes/search` (có) · `integration/users` forward nếu thiếu · reflect không picker |
| GPS | `navigator.geolocation` · **cấm** fake |

**BFF:** Mobile.Bff `:5202` · **cấm** web-bff · **cấm ERP.*** · **cấm** invent `field-reflect/*`.

## 6. DES checklist

| ID | Result |
|----|--------|
| DES-A zones FR-00…02 | **PASS** (giữ) |
| DES-B control = controlHint | **PASS** (+ validationBanner) |
| DES-C prototype + reviewUrl | **PASS** · Pattern B delta |
| DES-D Leave dirty | Draft OK · Create validate on click |
| DES-GRID / DES-RPT | **N/A** phone |
| DES-MOB-FIELD-KIND | **PASS** |
| DES-MOB-GPS-DENY | **PASS** · on click · CTA idle on |
| DES-VALIDATE-B | **PASS** · banner string[] · disabled chỉ busy |
| real_view_parity | `v1` |

### kit_missing_confirm

**approve** (prior) · PhotoRow + CheckboxGroup compose · autoApprove=ON.

## 7. UNCLEAR (carry)

| id | Action |
|----|--------|
| UNCLEAR-VALIDATE-B | Dev bỏ `canDetect`/`canCreate` disable · Pattern B banner · **open** |
| UNCLEAR-ALIGN-01 | end `/align-mobile-to-mfe` · SSOT MFE · 430px · **open** |
| (prior closed) | DOMAIN-MAP · MEDIA · PGC · ENTRY · SESS · CHK | giữ closed |

## 8. Handoff

| Role | Need |
|------|------|
| SA | giữ Live cite · Mobile.Bff · users forward peer · **cấm** invent · **cấm ERP.*** |
| TL | tasks edit FieldReflectPage gates + banner only |
| Dev | Pattern B CTA · validationBanner · Acc>30 handler · align cuối · BFF `:5202` |
| QA | nút bật · banner thiếu field · GPS deny on click · Acc>30 no POST · no fake · no web-bff · e2e queued |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:d8f13df3772c0f27b367c5e01a5ce2cf942b1a27640c1390e76e34c3a8c267f2` · `rulesVersion=2026.09.25.2` · `updatedAt=2026-09-27T12:05:00.000Z` · `changeScope=edit_page` · `taskId=task_809a7227` · `design_confirm=approve`
