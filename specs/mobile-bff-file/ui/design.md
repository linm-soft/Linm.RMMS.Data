# Design — mobile-bff-file

| Field | Value |
|-------|-------|
| feature | `mobile-bff-file` |
| title | [Mobile] Mobile.Bff × FileService (kit + host PhotoRow) |
| role | `/agent-design-mobile` |
| status | **confirmed** (autoApprove=ON · `design_confirm=approve`) |
| packKind | **`sheet`** (upload kit · **không** screen riêng) |
| changeScope | `edit_page` |
| taskId | `task_f2581175` |
| priorPo | `po/requirement.md` + `handoff/po-compact.md` **confirmed** · `task_873e65c9` |
| priorDa | `_data-analy/mobile-bff-file-control-hint.md` + `mobile-bff-file-real-data.md` **confirmed** · contentHash `sha256:mobile-bff-file-control-hint-20260912-delta` |
| hashSkip | **yes** · **cấm** re-scan demo (`GAP-DES-DEMO-RESCAN-01`) · inventory từ controlHint + real-data §A+§B |
| updatedAt | `2026-09-12T15:50:00.000Z` |

## § Delta Current vs New (`edit_page`)

| ID | Current | New (DoD) | Surface |
|----|---------|-----------|---------|
| GAP-MOB-BFF-FILE-01 | **CLOSED** BFF NuGet + rewrite | Giữ · verify-only `/init-bff-file` · **cấm** re-clone | Mobile.Bff |
| GAP-MOB-FILE-CLIENT-01 | Upload live **patrol-checkin only** · purpose hardcode | purpose param · **1** P1 form `attachmentId` (default `incident-create`) | host VM |
| GAP-MOB-FILE-PREVIEW-01 | Local bytes / id text | `GET files/{id}/object` + JWT · **FILE-ATT-09** · **cấm** resign URL | kit thumb |
| GAP-MOB-FILE-KIT-01 | PhotosPicker ad-hoc check-in | Dual `LinmImageUpload` slot-only · Ask `mobile_img_kit` lúc Dev · **cấm** File host trong kit | kit |
| UI | Host PhotoRow check-in shipped | **giữ** zones/copy · kit + preview + form bind | dual prototype |

## reviewUrl (dual — REQUIRED)

| Platform | Path | reviewUrl |
|----------|------|-----------|
| iOS kit default | `ui/prototype/ios/index.html` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/mobile-bff-file/ui/prototype/ios/index.html` |
| iOS uploading | same + `?state=uploading` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/mobile-bff-file/ui/prototype/ios/index.html?state=uploading` |
| iOS preview | same + `?state=preview` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/mobile-bff-file/ui/prototype/ios/index.html?state=preview` |
| iOS fail | same + `?state=fail` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/mobile-bff-file/ui/prototype/ios/index.html?state=fail` |
| iOS host check-in | same + `?host=checkin` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/mobile-bff-file/ui/prototype/ios/index.html?host=checkin` |
| iOS host inc-form | same + `?host=inc-form` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/mobile-bff-file/ui/prototype/ios/index.html?host=inc-form` |
| Android kit default | `ui/prototype/android/index.html` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/mobile-bff-file/ui/prototype/android/index.html` |
| Android uploading | same + `?state=uploading` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/mobile-bff-file/ui/prototype/android/index.html?state=uploading` |
| Android preview | same + `?state=preview` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/mobile-bff-file/ui/prototype/android/index.html?state=preview` |
| Android fail | same + `?state=fail` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/mobile-bff-file/ui/prototype/android/index.html?state=fail` |
| Android host check-in | same + `?host=checkin` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/mobile-bff-file/ui/prototype/android/index.html?host=checkin` |
| Android host inc-form | same + `?host=inc-form` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/mobile-bff-file/ui/prototype/android/index.html?host=inc-form` |

**Cấm** `mfeStdUrl` / `yarn start:std`.

## Frame / chrome

| | iOS | Android |
|--|-----|---------|
| Frame | 390×844 | 412×915 |
| Pack owner | Kit card + host cite (sheet / form) | same |
| Shell | Tab 5 **giữ** · host quyết định tab | NavigationBar 5 · same |
| pack tabs | **none** — **cấm** invent segment (`GAP-TAB-01` / `AC-TAB-01`) | same |
| `#sc-*` mới | **none** | same |

## DES table

| DES | Zone | iOS | Android | Notes |
|-----|------|-----|---------|-------|
| `DES-MOB-FILE-KIT` | `#kit-linm-image-upload` | `LinmImageUpload` | same | slot · thumb · progress · remove · **Ask** `mobile_img_kit` lúc Dev |
| `DES-MOB-FILE-HOST-CHECKIN` | `#sheet-checkin` · `#ci-photos` | PhotoRow host | same | shared_action shipped · purpose=`patrol-checkin` |
| `DES-MOB-FILE-HOST-INC` | `#sc-inc-form` · photos | PhotoRow / kit embed | same | P1 default bind `{ attachmentId }` |
| `DES-MOB-FILE-HOST-REFLECT` | `#sc-field-reflect` | alt TL | same | alt purpose=`field-reflect` · **không** default |
| Toast fail | `#toast-file-fail` | `LinmToast` | same | **cấm** fake attachmentId |

## SF ↔ Material icon

| `#i-*` | Motif (SSOT mobile-p1) | SF Symbol | Material |
|--------|------------------------|-----------|----------|
| `#i-camera` | body + circle r=3.5 | `camera` | `PhotoCamera` |
| `#i-xmark` / remove | X path | `xmark` | `Close` |

**Cấm** invent `#i-*` · **cấm** lệch `d=` dual (`GAP-MOB-ICON-*`).

## Copy VN (SSOT — parity dual)

| Key | Copy |
|-----|------|
| photoLabel | **Ảnh hiện trường** (inc-form) / **Ảnh** (check-in section-label) |
| btnAdd | camera / picker (`#i-camera`) |
| btnRemove | **Xóa** (icon) |
| progress | **Đang tải…** |
| toastFail | **Không tải được ảnh** |
| kitHint | Chọn ảnh → upload → preview → gắn `attachmentId` |
| purposeCheckin | `patrol-checkin` |
| purposeIncident | `incident` |
| purposeReflect | `field-reflect` |

**Cấm ship:** resign URL làm `<img src>` · fake attachmentId · watermark Gói · kit gọi `:5018`.

## Kit map

| Demo | Kit iOS+Android |
|------|-----------------|
| `#kit-linm-image-upload` | `LinmImageUpload` (Ask `mobile_img_kit`) |
| photoSlot | ImageUploadSlot |
| photoThumb | ImageThumb · local pending **hoặc** GET `/object` JWT |
| btnAdd | host `openCapture` / PhotosPicker → kit slot |
| btnRemove | kit clear local + attachmentId |
| progress | ProgressInline init→PUT→commit |
| toastFail | `LinmToast` |
| attachmentBind | HiddenField VM → form body |
| Host check-in / inc-form | PhotoRow reuse · **không** redesign host chrome |

## controlHint ↔ DES

| Field (DA) | DES / zone |
|------------|------------|
| photoLabel | host section · `DES-MOB-FILE-HOST-*` |
| photoSlot / photoThumb / progress / btnRemove | `DES-MOB-FILE-KIT` |
| btnAdd | host `#i-camera` |
| toastFail | `#toast-file-fail` |
| attachmentBind / purpose | VM · hidden · form submit |

UNCLEAR=none · hash skip inventory.

## States (prototype query)

| `?state=` | UI |
|-----------|-----|
| (default) / `empty` | empty slot + camera |
| `uploading` | progress **Đang tải…** · slot busy |
| `preview` | thumb filled · remove · bound guid demo |
| `fail` | toast **Không tải được ảnh** · **không** bind id |

| `?host=` | Surface |
|----------|---------|
| (omit) | kit-focused card |
| `checkin` | `#sheet-checkin` PhotoRow cite |
| `inc-form` | `#sc-inc-form` photos cite |

## Out of pack

- `ai-vision/uploads*` RMMS P1 — **giữ** · **không** bind FileService
- Step 4b / MIG / e2e — **SKIP** role design
- ERP.* · mfeStdUrl · invent `api/v1/mobile-files` · local FilesController
- GPS / Leave / Match banner — owner host (`patrol-checkin` / `incident-create`)

## Device AC (cite PO)

AC-FILE-01..09 · AC-CAM-01 · AC-TAB-01 · AC-TYPO-01 — Design giữ zone/copy/kit; Dev execute kit Ask + bind.

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-design-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-09-12T15:50:00.000Z |
| contentHash | sha256:mobile-bff-file-control-hint-20260912-delta |
| realDataHash | sha256:mobile-bff-file-real-data-20260912 |
| design_confirm | approve |
| taskId | task_f2581175 |

---
<!-- Version meta: skillId=agent-design-mobile skillVersion=2026.08.25.01 contentHash=sha256:mobile-bff-file-control-hint-20260912-delta -->
