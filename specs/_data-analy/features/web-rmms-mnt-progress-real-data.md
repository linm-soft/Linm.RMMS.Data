# Data-analy — real-data bind — web-rmms-mnt-progress

| Field | Value |
|-------|-------|
| feature | `web-rmms-mnt-progress` |
| title | Tiến độ công việc — edit Pattern B (submit luôn bật + capture) |
| packKind | `list` |
| changeScope | `edit_page` |
| status | `done` |
| taskId | `task_f99adc72` |
| prefix API | `api/v1/maintenance` |
| prefix BFF web (cite) | `web-bff/api/v1/maintenance` · **cấm** FE gọi |
| prefix BFF mobile (HARD) | `mobile-bff/api/v1` · `:5202` · cùng `{resource}` · **chỉ** `Linm.RMMS.Mobile.Bff` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/cong-viec/tien-do` |
| mfeStdRoute | `/cong-viec/tien-do` |
| domain | **Maintenance** (WorkOrder) |
| contentHash | `sha256:544d007b5b40b3f3b71bb94aa78e804b2342af0c6eb7ec1edcea4b76b1b28080` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| analyzedAt | `2026-09-27T13:30:10.000Z` |
| demo | **N/A** · **cấm** demo-json / in-app mock SSOT |
| deltaCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` |

## § Scope

| In | Out |
|----|-----|
| WORK-P `/cong-viec/tien-do` · GET detail · POST progress · POST complete · GPS→Note · init-data · **Pattern B CTA/banner** · **capture** | WORK-L list · WORK-G/C · estimate · Me* · journal/kết ca · Excel export · invent DTO lat/media |
| Edit `MntProgressPage.tsx` only (layout/route giữ) | `new_page` · thêm tab/route · iOS/Android · web-bff FE |

## § Delta bind (Current → New)

| uiField / rule | Current code | New bind / UX |
|----------------|--------------|---------------|
| submitProgress / submitComplete | `disabled={ctasDisabled}` · `ctasDisabled=!gpsReady\|\|saving\|\|!wo` · early `return` nếu GPS ≠ ok | `disabled={saving}` only · click validate → banner nếu GPS deny · vẫn embed GPS vào `Note` khi ok |
| photoLocalIds input | `accept="image/*"` no capture | + `capture="environment"` · local only · **cấm** MediaUrl body |
| validation | silent / toast | Pattern B: `validationAttempted` · banner `string[]` · inline · API error = toast |
| API paths / DTO | Live unchanged | **no change** |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/web-rmms-mnt-progress.md` | — | — |
| `delta` | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` | — | Pattern B HARD |
| `code` | `MntProgressPage.tsx` · `paths.ts` · `MNT_PROGRESS_BASE` | missing `id` | toast load |
| `peer` | `mnt-progress.md` · `web-rmms-work.md` | — | — |
| `plan` | `SCREENS.md` · `/work/progress` | — | SSOT |
| `api` | `WorkOrdersController` · `{id}/progress` · `{id}/complete` | 404 toast | toast · **cấm** `window.alert` |
| `bff-web` | cite only | — | **cấm** FE web-bff |
| `bff-mobile` | `Linm.RMMS.Mobile.Bff` · `mobile-bff/api/v1/maintenance/work-orders/**` | proxy 503 | retry toast |
| `entity` | `WorkOrderEntity` | — | tenant / soft-delete |
| `dto` | `ProgressWorkOrderRequest` · `CompleteWorkOrderRequest` · `WorkOrderDto` · init-data | — | validate 0–100 |
| `domain-map` | `docs/DOMAIN-MAP.md` · Maintenance | — | **cấm ERP.*** |
| `geo` | `navigator.geolocation` | deny → banner on click | **cấm** fake |
| `files` | local FileList · optional files/* GAP | — | — |
| `demo` | — | N/A | **cấm** demo SSOT |

## §B — Bind field (HARD)

| uiField | Label (key) | controlHint | catalogKind | GET | write field | sameMfe | sameMobile |
|---------|-------------|-------------|-------------|-----|-------------|---------|------------|
| wo.byId | chi tiết WO | detail | — | `GET …/maintenance/work-orders/{id}` | — | yes | yes |
| woCode | mã | Text RO | — | detail | `Code` | yes | yes |
| woTitle | tiêu đề | Text RO | — | detail | `Title` | yes | yes |
| woStatus | trạng thái | Badge RO | LOOKUP_STATUS | detail · init-data | `Status` | yes | yes |
| woRouteName | tuyến | Text RO | — | detail | `RouteName` | yes | yes |
| woWorkType | loại CV | Text RO | LOOKUP_WORKTYPE | detail · init-data | `WorkType` | yes | yes |
| progressPercent | tiến độ % | Number/Slider | — | detail prefill | `ProgressPercent` POST progress | yes | yes |
| note | ghi chú | Text | — | detail | `Note` · optional GPS suffix | yes | yes |
| lat/lng/accuracyM | GPS | GPS | geo | device | **không** body · encode `Note` | yes | yes |
| validationBanner | lỗi client | Banner | — | — | Pattern B local | edit | edit |
| photoLocalIds | ảnh | FileMulti | files | — | local + **capture** · GAP body | edit | edit |
| submitProgress | cập nhật | Button | — | — | `POST …/{id}/progress` `{ ProgressPercent, Note? }` · Pattern B enable | edit | edit |
| submitComplete | hoàn thành | Button | — | — | `POST …/{id}/complete` `{ Note? }` · Pattern B enable | edit | edit |
| initStatuses | map status | lookup | LOOKUP_STATUS | `GET …/work-orders/init-data` | display · list chrome | yes | yes |
| initWorkTypes | map workType | lookup | LOOKUP_WORKTYPE | init-data | display only | yes | yes |

**Progress Live body:** `ProgressPercent` (0–100) · `Note?`. Server: `new`→`in_progress`.  
**Complete Live body:** `Note?`. Server: 100% + `done`.  
**Cấm** invent lat/lng/media trên body · **cấm** ERP.* · **cấm** fake GPS · **cấm** FE `web-bff`.

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| LOOKUP_STATUS | init-data → `Statuses` | list chrome badge | hardcode lệch PO |
| LOOKUP_WORKTYPE | init-data → `WorkTypes` | same | hardcode |
| geo | device geolocation | — | fake / demo lat |
| files | local + optional files/ai-vision GAP | — | MediaUrl trên Progress DTO |
| users / road-routes SearchInput | N/A WORK-P | SUBMIT-VALIDATE shared — **out** slug này | — |

## §D — Map / vẽ

N/A — GPS device → text `Note` only.

## §E — FormMode ↔ API

| Mode | Trigger | API |
|------|---------|-----|
| view/prefill | open WORK-P `?id=` | `GET …/work-orders/{id}` |
| update progress | Cập nhật (Pattern B) | `POST …/{id}/progress` |
| complete | Hoàn thành | `POST …/{id}/complete` |
| lookup | mount | `GET …/work-orders/init-data` |

## §F — Empty / error

| Case | UX |
|------|----|
| GET 404 / missing id | toast · back list |
| POST validate % | banner/inline sau attempt |
| GPS deny | **banner on click** · **cấm** pre-disable · **cấm** fake |
| BFF 503 / network | toast · **cấm** `window.alert` · **cấm** banner cho API |

## §G — Out of scope / cấm

- List/create WO · messages · Kind E · Excel/toolbar
- Tab Cá nhân · iOS/Android native · thêm tab/route/icon
- Route `mobile-bff` trên web-bff controllers
- Demo-json · invent controller · `new_page` CRUD
- User/route SearchInput (không field chọn người/tuyến trên WORK-P)

## DoR real-data

- [x] §A sources Live + Delta cite
- [x] §B bind + § Delta CTA/capture/banner
- [x] FormMode↔API unchanged paths
- [x] Mobile.Bff HARD · mfeStdUrl `/cong-viec/tien-do`
- [x] GPS/media GAP + Pattern B ghi rõ
