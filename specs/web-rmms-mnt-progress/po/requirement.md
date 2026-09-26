# PO — requirement — web-rmms-mnt-progress

| Field | Value |
|-------|-------|
| feature | `web-rmms-mnt-progress` |
| title | Tiến độ công việc — cập nhật % / Note / hoàn thành |
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
| contentHash | `sha256:a7e3c91b4d2f6801e5a9b0c3d8f1472e6b5a0d9c4e1f2837a6b5c4d3e2f1098a` |
| writtenAt | `2026-09-25T22:30:00.000Z` |
| demo | **N/A** · **cấm** demo-json / crawl DemoRoot |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-mnt-progress.md` |
| analy | `specs/_data-analy/features/web-rmms-mnt-progress-control-hint.md` · `…-real-data.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-mnt-progress` |
| mfeStdUrl | `http://localhost:9301/web-rmms-mnt-progress` |
| productRoute | `/work/progress` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Maintenance WorkOrder · **cấm ERP.*** |
| bff | `Linm.RMMS.Mobile.Bff` · `mobile-bff/api/v1` `:5202` · **cấm** FE web-bff |
| formPattern | Mobile full / sheet · phone `max-width: 430px` · **không** ERP Modal/Slideout Kind B |
| persona | Tuần đường (BDTX) · Tuần kiểm (Khu/VP) — Work tab dùng chung |
| handoff | Design (`ui/design.md` + prototype reviewUrl) |

> Nhãn UI: `useFormOptions()` / copy key — **cấm** hardcode tiếng Việt trên form.  
> **Cấm** MFE desktop primary · **cấm** iOS/Android native edit · **cấm** invent controller theo slug.

## 1. Goal / DoD P1

Tab Work peer — form **Tiến độ công việc** (WORK-P):

1. Prefill header WO từ `GET …/work-orders/{id}`.
2. Cập nhật tiến độ `%` + ghi chú → `POST …/{id}/progress` (`ProgressPercent` 0–100 · `Note?`).
3. Hoàn thành → `POST …/{id}/complete` (`Note?` · server 100% + `done`).
4. GPS device → nhúng tóm tắt vào `Note` (không field lat/lng trên body).
5. Lookup status/workType display từ `GET …/work-orders/init-data` + map badge chốt dưới.
6. Chỉ Mobile.Bff · toast lỗi · **cấm** `window.alert` · **cấm** fake GPS/demo-json.

## 2. Screens

| id | productRoute | std | Surface | In scope |
|----|--------------|-----|---------|----------|
| WORK-P | `/work/progress` | `/web-rmms-mnt-progress` | Form/sheet cập nhật tiến độ | **Yes** |
| WORK-L | `/work` | peer `web-rmms-work` | List entry card → nav WORK-P | Peer only · **không** implement slug này |

**Entry:** card action từ `web-rmms-work` (`#i-sync` / nav tiến độ) kèm `id` WO.

## 3. Leave / Out of scope

| Out | Note |
|-----|------|
| WORK-G log · WORK-C chat · estimate | peers khác |
| Me* · feedback · cam-view | tab Cá nhân |
| journal / kết ca / tồn tại / tần suất | `web-rmms-mobile-b…e` |
| List/create WO | `web-rmms-work` |
| Invent `mnt-progress` controller / Progress DTO fork lat/media | Live WorkOrders only |
| Desktop LinErpListFilterBar / DES-GRID | **N/A** phone form |
| FE gọi `web-bff` · Route `mobile-bff` trên web-bff controllers | HARD |
| iOS/Android native toast-only clone | CTX peer cite only |

## 4. Field inventory + AC (bind analy §B)

| uiField | controlHint | AC |
|---------|-------------|-----|
| topBarTitle | Text | Copy key tiến độ / «Cập nhật trạng thái» · `useFormOptions` |
| backNav | Button/Nav | Back → peer `web-rmms-work` list |
| woCode / woTitle / woRouteName | Text RO | Hiển thị từ GET `{id}` · thiếu id → toast + back |
| woStatus | Badge RO | Map **list chrome** (§5) · không hardcode |
| woWorkType | Text RO | Map init-data / copy key |
| progressPercent | Number/Slider | Required 0–100 · prefill từ detail · validate inline/toast |
| note | Text | Optional · suffix GPS summary khi có tọa độ |
| lat/lng/accuracyM | GPS | Device only · embed Note · **cấm** body field · **cấm** fake |
| photoLocalIds | FileMulti optional | P1 preview local only · **không** POST MediaUrl (GAP-MEDIA) |
| submitProgress | Button primary | POST progress · disable khi GPS deny (§6) |
| submitComplete | Button | POST complete · enable khi %≥100 **hoặc** user chọn hoàn thành · disable khi GPS deny |

### List packKind — Grid AC

| AC | Result |
|----|--------|
| DES-GRID / LinErpListFilterBar | **N/A** — surface phone form/sheet · không Kind B desktop grid |
| packKind confirm | `list` (STATUS + CTX) · Design chốt zone WORK-P form (GAP-PACK) |

### FormMode ↔ API

| Mode | Trigger | API |
|------|---------|-----|
| prefill | open WORK-P + `id` | `GET maintenance/work-orders/{id}` |
| update | Cập nhật | `POST …/{id}/progress` `{ ProgressPercent, Note? }` |
| complete | Hoàn thành | `POST …/{id}/complete` `{ Note? }` |
| lookup | mount | `GET …/work-orders/init-data` |

### Empty / error

| Case | UX |
|------|----|
| GET 404 | toast · back list |
| % ngoài 0–100 | inline / toast |
| GPS deny | disable nút cần tọa độ · message copy key |
| BFF 503 / network | retry toast · **cấm** `window.alert` |

## 5. PO decisions — UNCLEAR → CLOSED

| id | Decision | Owner next |
|----|----------|------------|
| UNCLEAR-GPS-GATE → **CLOSED** | GPS **bắt buộc** cho cả `submitProgress` và `submitComplete`. Deny / unavailable → disable cả hai · **cấm** fake coords. | Design zone copy; Dev geolocation gate |
| UNCLEAR-MEDIA → **CLOSED-P1** | Camera UX optional (local preview). Progress/Complete body **không** `MediaUrl`. Persist file chỉ khi SA Signed mở DTO. | SA Signed; Design optional zone |
| UNCLEAR-LABEL-MAP → **CLOSED** | Badge WORK-P dùng **list chrome** (đồng bộ peer list): `new`→Chờ xử lý · `in_progress`→Đang xử lý · `done`→Đã hoàn thành · `cancelled`→Đã hủy. FE qua `useFormOptions`/copy key — **cấm** hardcode. init-data Labels không override badge list. | Design control-map; Dev bind |

### Status badge map (SSOT PO)

| API `status` | Badge WORK-P (list chrome) |
|--------------|----------------------------|
| `new` | Chờ xử lý |
| `in_progress` | Đang xử lý |
| `done` | Đã hoàn thành |
| `cancelled` | Đã hủy |

## 6. Constraints HARD

- Phone 430 · Android layout 1-1 (Design)
- BFF chỉ `VITE_MOBILE_API_URL` → Mobile.Bff `:5202`
- Live body: `ProgressWorkOrderRequest` / `CompleteWorkOrderRequest` — **không** lat/lng/media
- Server: progress trên `new` → `in_progress`; complete → 100% + `done`
- **Cấm** ERP.* · demo SSOT · invent path theo slug feature

## 7. Handoff Design

1. Zone WORK-P phone frame 430 · prototype + `reviewUrl`.
2. Control-map theo inventory + GPS gate + label map §5.
3. Optional camera zone (no persist) nếu giữ P1 UX.
4. **Không** desktop grid / LinErpListFilterBar.
5. Copy keys only — no hardcode VN strings in form code path.

## DoR PO

- [x] changeScope=`new_page` · packKind=`list`
- [x] Screens WORK-P · Leave peers
- [x] Field AC + FormMode↔API từ analy §B
- [x] Grid AC = N/A (phone form) ghi rõ
- [x] UNCLEAR GPS/MEDIA/LABEL chốt PO
- [x] contentHash align analy · **cấm** re-scan demo
- [x] handoff Design · compact `handoff/po-compact.md`
