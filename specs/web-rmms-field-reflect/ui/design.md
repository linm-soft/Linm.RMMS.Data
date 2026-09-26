# Design — web-rmms-field-reflect

| Field | Value |
|-------|-------|
| feature | `web-rmms-field-reflect` |
| title | Phản ánh hiện trường |
| this role | `design` · `/agent-design` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_3cd98c18`) |
| changeScope | `new_page` |
| packKind | **`list`** (PO · UI = **phone Field form** · **≠** Kind B desktop) |
| lane | `web` |
| stack | `web_mfe_phone` · `Linm.Web.RMMS.Mobile` · `max-width: 430px` |
| formPattern | Mobile **full** · Android 1-1 `#sc-field-reflect` · **không** ERP Modal/Slideout Kind B |
| DES-GRID / LinErpListFilterBar | **N/A** — phone Field form · **cấm** clone |
| Report AC / DES-RPT | **N/A** |
| shared_grid_example | **N/A** (phone) |
| real_view_parity | **v1** |
| peerStdUrl | `http://localhost:9301/web-rmms-field-reflect` |
| mfeStdUrl | `http://localhost:9301/web-rmms-field-reflect` |
| mfeStdRoute | `/web-rmms-field-reflect` |
| productRoute | `/field/reflect` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field-reflect/ui/prototype/index.html` |
| demo | **N/A** · hash skip · **cấm** re-scan (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · Incident + Patrol + Integration + AiVision (+files) · **cấm ERP.*** |
| bff | `Linm.RMMS.Mobile.Bff` · `:5202` · `mobile-bff/api/v1` · **cấm** web-bff |
| controlHint | `specs/_data-analy/features/web-rmms-field-reflect-control-hint.md` |
| realData | `specs/_data-analy/features/web-rmms-field-reflect-real-data.md` · §A+§B PASS |
| prior | PO `confirmed` · `handoff/po-compact.md` · DA `confirmed` · contentHash `sha256:e678be9152069e48f353f88e9f4d377e20e4fd4ad5c8d4aa2c86bd995bc1e667` |
| autoApprove | **ON** |
| e2eQa | ON queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở Design |
| `devSlash` | `/agent-dev` |
| updatedAt | `2026-09-26T03:15:00.000Z` |
| taskId | `task_3cd98c18` |
| skillId | `agent-design` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:e678be9152069e48f353f88e9f4d377e20e4fd4ad5c8d4aa2c86bd995bc1e667` |

**Cấm:** Dev/BE trước confirm (đã autoApprove) · ERP.* · invent `field-reflect/*` API · fake GPS / itemsOrDemo sessions · hardcode VN labels ngoài `useFormOptions` · `window.alert` · re-scan demo · `yarn build` / e2e / start:std · Me*/feedback/cam-view · journal/kết ca/tồn tại/tần suất (B–E) · Kind B DES-GRID.

## 0. Context / Demo

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/web-rmms-field-reflect.md` | Feature CTX |
| CTX-02 | `docs/plan/web-rmms-mobile/SCREENS.md` | `/field/reflect` + photo-geo overlay |
| CTX-03 | peer `field-reflect.md` · DES-MOB-FIELD-REFLECT / KIND | Android 1-1 |
| DEM | — | **N/A** · hash skip |
| DA-01 / DA-02 | `_data-analy/features/web-rmms-field-reflect-{control-hint,real-data}.md` | inventory + §B |
| PO | `po/requirement.md` | FR-00…02 · GPS · live sessions · :9301 |
| tokens | `docs/mobile-tokens.json` | primary `#0C84C0` · phone 430 |

## 1. Pattern & ownership

| | |
|--|--|
| Frame | Phone **430px** · tokens primary `#0C84C0` · label **13** · field **≥16** (**GAP-TYP-01**) |
| Surface | Full screen form · **cấm** ERP Modal/Slideout · **cấm** bottom-sheet pack chrome |
| This feature | FR-00 pick · FR-01 form · FR-02 capture overlay |
| Peer Field hub | entry tile → `/field/reflect` (`web-rmms-field`) |
| Peer offline | draftOffline queue (`web-rmms-offline`) |
| Peer photo-geo | FR-02 capture pattern · purpose=`photo-geo-capture` |
| Out | Me* · cam-view · feedback · journal / kết ca / tồn tại / tần suất |

### UNCLEAR-PGC (Design chốt)

| | |
|--|--|
| FR-01 `photos` | **PhotoRow** slots + camera → `openCapture` |
| FR-02 | **photo-geo overlay** (viewfinder · GPS gate · shutter) · files/init→object→commit **hoặc** ai-vision/uploads |
| P1 | PhotoRow trên FR-01 **OK** · không bắt buộc map GIS pin trên FR-01 |
| GPS | deny → block Create · Detect · shutter · **cấm** fake |

### UNCLEAR-ENTRY (PO resolved)

1 route FR-01 `/field/reflect` · stamp `PatrolType` từ ca live · entry từ hub TD/TK tile.

## 2. Screens / zones

| Zone | Route | Surface | Wire |
|------|-------|---------|------|
| **FR-00** | pick gate | LookupGrid | `GET integration/asset-types` · optional trước form |
| **FR-01** | `/field/reflect` · std `/web-rmms-field-reflect` | Full form | kind · checklist · photos · detect · session · GPS · severity · desc · Create/Draft |
| **FR-02** | capture overlay | Overlay | photo-geo · GPS deny gate · shutter |

### IA

```
(auth) → Field hub tile reflect → FR-00 pick (optional) → FR-01 form
  FR-01 photos / camera → FR-02 capture → back FR-01 (+ MediaIds)
  FR-01 Create → POST incident/incidents (HasGps khi có fix)
  FR-01 Draft → local queue peer offline
GPS deny → modal · disable Create/Detect/shutter
No session → banner + toast · Create gắn Route chặn · Draft OK
```

## 3. Field inventory (Control = controlHint)

| uiField | screen | controlHint | Required | Bind / notes |
|---------|--------|-------------|----------|--------------|
| phoneFrame | FR-* | Layout | * | max-width 430 |
| assetPick | FR-00 | LookupGrid | * | `GET integration/asset-types` |
| assetCard | FR-01 | Text RO / Card | * | loại TS đã chọn · Đổi → FR-00 |
| back | FR-01 | Button/Nav | * | → FR-00 hoặc Field hub |
| screenTitle | FR-01 | Text | * | copy key «Phản ánh hiện trường» |
| kind | FR-01 | Segment/Pill 3 | * | Hư/Mất/Hỏng → `IncidentType` · DES-MOB-FIELD-KIND |
| checklist | FR-01 | CheckboxGroup | — | local by asset · fold → `Description` · **cấm** invent API |
| photos | FR-01 | PhotoRow | — | openCapture → FR-02 |
| detect | FR-01 | Button | — | `POST ai-vision/detect` · ảnh + GPS≤30 |
| detectionHint | FR-01 | Text RO | — | class optional |
| sessionStamp | FR-01 | Text RO | * | `GET patrol/sessions` Đang tuần · empty `—` |
| gpsLock | FR-01 | GPS / Chip | * | deny → disable Create/Detect |
| severity | FR-01 | Select | — | LOOKUP_STATIC |
| description | FR-01 | Textarea | — | copy placeholder key |
| create | FR-01 | Button primary | * | `POST incident/incidents` · HasGps · cần GPS |
| draftOffline | FR-01 | Button secondary | * | peer offline · **cấm** fake success |
| emptyNoSession | FR-01 | Banner/Toast | — | live-only · **cấm** itemsOrDemo |
| toast.* | FR-01 | Toast | * | ok/fail/gpsDeny · **cấm** `window.alert` |
| capture / shutter | FR-02 | Overlay | — | GPS gate · MediaIds |

**Labels:** `useFormOptions()` / copy keys — prototype hiện nhãn VN để review; Dev wire key.

## 4. Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/index.html` |
| Zones | FR-00 · FR-01 · FR-02 |
| Form | Mobile full Field form |
| Grid/filter desktop | **N/A** |
| SSOT | control-hint · real-data §B · mobile-tokens · peer field-reflect Android 1-1 |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field-reflect/ui/prototype/index.html` |
| **peerStdUrl** | `http://localhost:9301/web-rmms-field-reflect` |
| **real_view_parity** | `v1` |

### Wire

```
FR-00: LookupGrid asset-types → tap → FR-01
FR-01: kind pills · PhotoRow · Detect · session RO · GPS chip · severity · checklist local · desc · Create/Draft
FR-02: overlay photo-geo · shutter → MediaIds · back FR-01
Board: Default | Form ready | FR-02 | GPS deny | No session | Accuracy >30
```

### Query modes (prototype)

| Query | Effect |
|-------|--------|
| (default) | FR-00 pick |
| `?form=1` | FR-01 ready · GPS ok · session loaded |
| `?capture=1` | FR-02 overlay |
| `?deny=1` | GPS deny modal · Create/Detect disabled |
| `?empty=1` | no session banner + toast · session `—` |
| `?acc=1` | accuracy 48 · Detect blocked |

## 5. API map (cite real-data §B)

| Action | API |
|--------|-----|
| Session stamp | `GET mobile-bff/api/v1/patrol/sessions` · live-only |
| Asset pick | `GET …/integration/asset-types` |
| Upload | `POST ai-vision/uploads` (+ PUT) **hoặc** `files/init` · PUT object · `commit` |
| Detect | `POST ai-vision/detect` · GPS accuracy ≤30 |
| Create | `POST incident/incidents` · `Title` · `RouteName` · `IncidentType` · `Status` · `RequestedAt` · opt `Severity` · `Description` · `AssetLabel` · `KmStart` · `MediaIds` · `DetectionId` · `HasGps=true` khi có fix |
| Draft | local queue peer offline · **cấm** invent OfflineQueueController |
| GPS | `navigator.geolocation` · **cấm** fake |

**BFF:** Mobile.Bff `:5202` · **cấm** Web BFF base · **cấm ERP.*** · **cấm** invent `field-reflect/*`.

## 6. DES checklist

| ID | Result |
|----|--------|
| DES-A zones FR-00…02 | **PASS** |
| DES-B control = controlHint | **PASS** |
| DES-C prototype + reviewUrl | **PASS** |
| DES-D Leave dirty | Draft OK · Create needs GPS+session Route |
| DES-GRID / DES-RPT | **N/A** phone Field form |
| DES-MOB-FIELD-KIND | **PASS** Segment Hư/Mất/Hỏng |
| DES-MOB-GPS-DENY | **PASS** modal + block |
| UNCLEAR-PGC | **PASS** FR-02 photo-geo · PhotoRow P1 OK |
| real_view_parity | **v1** |

### kit_missing_confirm (PhotoRow · CheckboxGroup)

**approve** · autoApprove=ON · PhotoRow = slots + camera · CheckboxGroup = local chk-row by asset · Dev compose Image / IconButton / Toggle · **cấm** invent kit name lạ.

## 7. UNCLEAR (carry)

| id | Action |
|----|--------|
| UNCLEAR-DOMAIN-MAP-REFLECT | SA thêm DOMAIN-MAP row `web-rmms-field-reflect` · Incident (+ Patrol/Integration/AiVision) · MFE `/web-rmms-field-reflect` |
| UNCLEAR-MEDIA-01 | SA cite `MediaIds` / Description bind CreateIncidentRequest Live |
| UNCLEAR-PGC | **resolved Design** · FR-02 photo-geo · PhotoRow opens overlay |
| UNCLEAR-ENTRY / CHK-01 / SESS-01 | **resolved PO** |

## 8. Handoff

| Role | Need |
|------|------|
| SA | DOMAIN-MAP row · cite Live Incident/Patrol/Integration/AiVision/files · MediaIds · Mobile.Bff · **cấm** invent path · **cấm ERP.*** |
| TL | Tasks FR-00/01/02 scaffold · GPS + sessions gates |
| Dev | `/agent-dev` · MFE Mobile only · BFF `:5202` · useFormOptions · live-only sessions |
| QA | no session · GPS deny · accuracy>30 · offline draft · no fake coords · no Me · no web-bff · e2e queued |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:e678be9152069e48f353f88e9f4d377e20e4fd4ad5c8d4aa2c86bd995bc1e667` · `rulesVersion=2026.09.25.2` · `updatedAt=2026-09-26T03:15:00.000Z` · `design_confirm=approve`
