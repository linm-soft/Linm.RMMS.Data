# html-to-native-map — mobile-bff-file

| Demo | Zone | HTML / token | iOS kit | Android kit | Notes |
|------|------|--------------|---------|-------------|-------|
| DES-MOB-FILE-KIT | kit | `#kit-linm-image-upload` | `LinmImageUpload` | same | Ask `mobile_img_kit` · slot-only |
| photoLabel | section | `.section-label` | Text 13 | same | **Ảnh hiện trường** / **Ảnh** |
| photoSlot | empty | `#photo-slot` · `.slot.empty` | ImageUploadSlot | same | dashed |
| photoThumb | preview | `#photo-thumb` | ImageThumb | same | local **hoặc** GET `/object` JWT |
| progress | inline | `#photo-progress` | ProgressInline | same | **Đang tải…** |
| btnAdd | camera | `#i-camera` · `#btn-add` | host IconButton / PhotosPicker | same | **cấm** File HTTP trong kit |
| btnRemove | X | `#btn-remove` | IconButton | same | clear id |
| toastFail | toast | `#toast-file-fail` | `LinmToast` | same | **Không tải được ảnh** |
| attachmentBind | hidden | `#attachment-bind` | HiddenField VM | same | form body |
| purpose | meta | `data-purpose` | VM | same | host slug |
| DES-MOB-FILE-HOST-CHECKIN | sheet cite | `#sheet-checkin` · `#ci-photos` | PhotoRow | same | purpose=`patrol-checkin` · shipped |
| DES-MOB-FILE-HOST-INC | form cite | `#sc-inc-form` · `#inc-photos` | PhotoRow + kit | same | P1 `{ attachmentId }` |
| DES-MOB-FILE-HOST-REFLECT | alt | `#sc-field-reflect` | PhotoRow | same | alt TL |
| Shell Tab 5 | chrome | `.tabbar` / `.nav` | host keep | host keep | **không** invent |

## BFF bind (Design note · SA chi tiết)

| UI | Method · Path | Status |
|----|---------------|--------|
| Upload lifecycle | `POST files/init` · `PUT files/{id}/object` · `POST files/commit` | live BFF · GAP-MOB-BFF-FILE-01 **CLOSED** |
| Preview committed | `GET files/{id}/object` + JWT | GAP-MOB-FILE-PREVIEW-01 · Dev |
| Preview pending | local bytes | device |
| Form / check-in body | `attachmentId` / `attachmentId[]` | GAP-MOB-FILE-CLIENT-01 · Dev |
| ai-vision | `ai-vision/uploads*` | **giữ** · **không** files/* |

**Cấm** invent `api/v1/mobile-files` · app→`:5018` · resign URL · fake attachmentId · ERP.* · mfeStdUrl.

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
