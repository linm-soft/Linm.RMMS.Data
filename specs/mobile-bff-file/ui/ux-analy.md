# UX analy — mobile-bff-file

**Sources:** `ui/prototype/ios/index.html` · `ui/prototype/android/index.html` · `ui/design.md` · PO compact · DA controlHint + real-data (hash skip · **cấm** re-scan DemoRoot)  
**Gate:** `/mobile-ui-ux-analy` §1–§9 · **REQUIRED** trước Dev  
**Slash:** `/mobile-ui-ux-analy` · `task_f2581175` · `changeScope=edit_page` · `2026-09-12T15:50:00.000Z`  
**Brand tokens:** Primary `#0C84C0` · success `#34C759` · danger `#FF3B30` / `#E53935` · surface `#F2F2F7` · label `#1C1C1E` · muted `#8E8E93`

## § Delta (`edit_page`)

| Bind | UX impact | Note |
|------|-----------|------|
| Kit `LinmImageUpload` | slot empty → upload progress → thumb · remove | Ask `mobile_img_kit` lúc Dev · **cấm** HTTP File trong kit |
| Preview | committed → bytes JWT `GET /object` | **cấm** resign URL · pending = local bytes |
| purpose | host slug | `patrol-checkin` · `incident` · `field-reflect` |
| P1 form | `incident-create` photos → `{ attachmentId }` | alt `field-reflect` (TL) |
| Fail | toast **Không tải được ảnh** | **cấm** fake id / fake 200 |
| Host chrome | **không** redesign | cite `#sheet-checkin` · `#sc-inc-form` |

## 1. IA

```
Host surface (keep tab / sheet owner)
  → PhotoRow / LinmImageUpload
       → empty: tap camera (#i-camera) → capture/picker (device)
       → upload: POST files/init → PUT files/{id}/object → POST files/commit
       → preview: local pending OR GET files/{id}/object + JWT
       → bind: attachmentId → form / check-in body
       → fail: LinmToast · clear · no fake id
       → remove: clear local + attachmentId
P1 default host: incident-create #sc-inc-form
Shared shipped: patrol-checkin #sheet-checkin
Alt TL: field-reflect #sc-field-reflect
```

`tabs: none` trên pack · **cấm** invent segment (`GAP-TAB-01`).  
Demo states: `?state=empty|uploading|preview|fail` · `?host=checkin|inc-form`.

## 2. Màn

| DES / zone | Tên VN | iOS chrome | Android chrome | CTA |
|------------|--------|------------|----------------|-----|
| DES-MOB-FILE-KIT / `#kit-linm-image-upload` | Kit tải ảnh | card trong phone frame | same | add / remove |
| DES-MOB-FILE-HOST-CHECKIN / `#sheet-checkin` | Ghi điểm tuần (cite) | bottom sheet host | ModalBottomSheet | host save |
| DES-MOB-FILE-HOST-INC / `#sc-inc-form` | Ghi sự cố (cite) | full screen host | same | Tạo vấn đề |
| Toast fail | Không tải được ảnh | `LinmToast` | same | dismiss |

**Không** `#sc-*` mới · **không** GPS/Leave owner ở pack này.

## 3. Zone

### DES-MOB-FILE-KIT

| Zone | Demo (user thấy) | Map row | SwiftUI | Compose |
|------|------------------|---------|---------|---------|
| Label | Ảnh hiện trường | `.section-label` | Text 13 | same |
| Slot empty | dashed + camera | `#photo-slot` | `LinmImageUpload` | same |
| Progress | Đang tải… | `#photo-progress` | ProgressInline | same |
| Thumb | preview image | `#photo-thumb` | ImageThumb | same |
| Remove | X | `#btn-remove` | IconButton | same |
| Hidden bind | guid (debug label proto) | `#attachment-bind` | HiddenField VM | same |

**States:** empty · uploading · preview · fail  
**Cấm:** kit URLSession/Retrofit → FileService (`FILE-ATT-06`).

### DES-MOB-FILE-HOST-CHECKIN / INC

| Zone | Demo | Map row | Native |
|------|------|---------|--------|
| PhotoRow | slots + `#i-camera` | `#ci-photos` / photos | reuse PhotoRow + kit |
| purpose | meta | — | VM param |
| Form bind | attachmentId | hidden | body field |

## 4. Flow (happy / fail)

| Step | Happy | Fail |
|------|-------|------|
| Capture | local bytes → slot pending | permission deny → host message |
| init | 200 uploadId | 401/422 → toastFail |
| PUT object | bytes uploaded | abort · toastFail · **không** commit |
| commit | attachmentId | toastFail · **không** bind |
| preview | GET /object JWT **hoặc** local | placeholder · **cấm** resign |
| submit host | DTO + ids | host validation |

## 5. Typography / spacing

| Token | Value |
|-------|-------|
| Section label | 13 muted |
| Body / toast | 13–16 |
| Frame | iOS 390×844 · Android 412×915 |
| Slot | ~96×96 · radius 12 · dashed border empty |
| AC-TYPO-01 | parity dual copy |

## 6. Icon

`#i-camera` · remove X — SSOT mobile-p1 · dual `d=` parity · **cấm** invent.

## 7. A11y / offline

| Case | UX |
|------|-----|
| Offline / FileService down | toastFail · host queue · **cấm** fake 200 |
| VoiceOver / TalkBack | slot = «Thêm ảnh» · remove = «Xóa ảnh» |
| Reduced motion | progress indeterminate OK |

## 8. Risks → Dev

| Risk | Mitigation |
|------|------------|
| GAP-MOB-FILE-KIT-01 | Ask `mobile_img_kit` · dual OS |
| GAP-MOB-FILE-PREVIEW-01 | GET `/object` JWT only |
| GAP-MOB-FILE-CLIENT-01 | purpose param + 1 P1 form |
| Fake id | toast + no bind |
| ai-vision | **không** route files/* |

## 9. VERIFY UX gate

- dual prototype openable · reviewUrl file://  
- zone ids khớp controlHint  
- **không** new `#sc-*` · tabs none  
- copy VN parity  
- hash skip · **cấm** re-scan demo  

## Version meta

| Field | Value |
|-------|-------|
| skillId | mobile-ui-ux-analy |
| generatedAt | `2026-09-12T15:50:00.000Z` |
| contentHash | sha256:mobile-bff-file-control-hint-20260912-delta |
| changeScope | edit_page |
| taskId | task_f2581175 |

---
<!-- Version meta: skillId=mobile-ui-ux-analy contentHash=sha256:mobile-bff-file-control-hint-20260912-delta -->
