# web-rmms-incident — Feature Context (MFE Mobile)

> **Slug:** `web-rmms-incident` · **Domain:** **Incident** (+ Patrol · Integration · AiVision · FileService · Maintenance cite)  
> **Phase:** P1 mobile web · **packKind:** `list` · **changeScope:** `edit_page` · **demo:** **N/A**  
> **Status:** po `task_7772751e` confirmed · cite `SUBMIT-VALIDATE.md` · Pattern B AC · handoff Design  
> **Prior ship:** new_page pipeline review-approved (`task_bc0e1942`) · analy edit `task_43536f7d`

> **MFE:** `Linm.Web.RMMS.Mobile` · std `/van-de` · create `/van-de/moi` · phone `max-width: 430px`  
> **BFF HARD:** `Linm.RMMS.Mobile.Bff` · `VITE_MOBILE_API_URL=http://localhost:5202/mobile-bff/api/v1` · **cấm** web-bff client  
> **BE:** `Linm.RMMS.WebService` · DOMAIN-MAP · **cấm ERP.*** · **cấm** iOS/Android edit

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Tab **Vấn đề / Sự cố**: **list** → **tạo** → **chi tiết** (1-1 Android). Copy icon/tab/layout. Nhãn `useFormOptions()` / copy key — **cấm** hardcode tiếng Việt trên form. |
| Persona | Tuần đường (BDTX) · Tuần kiểm (Khu/VP) — hai lối Field; Incident tab dùng chung list/create/detail |
| Entry | Tab Incident · Home «Ghi sự cố» / «Vấn đề» · FAB list |
| DoD P1 | INC-L list filter+cards · INC-N create (pick+form+GPS) · INC-D detail close · Mobile.Bff only · **cấm** fake GPS |
| DoD edit | Pattern B submit luôn bật · banner validate · GPS deny báo lúc bấm · **cấm** `disabled={!canCreate}` |
| Out P1 | Me* · feedback · cam-view · journal/kết ca/tồn tại/tần suất · invent IncidentListController · Excel/toolbar export |

## 2. Routes / screens

| id | productRoute | std mount | Surface |
|----|--------------|-----------|---------|
| INC-L | `/incident` | `/van-de` | List search/severity/status · FAB · cards · banner vis · map/chat nav |
| INC-N | `/incident/new` | `/van-de/moi` | Pick asset → form Ghi sự cố · GPS · create/draft offline |
| INC-D | `/incident/:id` | `/van-de/:id` | Detail RO + close · nav estimate/map |
| INC-V* | `/incident/vis` | peer `/chup-hien-truong` | Nhận diện — peer |
| INC-C* | `/incident/:id/chat` | peer `/van-de/trao-doi` | Chat — peer |
| INC-E* | `/incident/estimate/:id` | peer | Estimate/WO — peer |

\* Peer routes: nav-only · **không** invent controller riêng slug này. **Cấm** thêm tab/route mới (align HARD).

## 3. API (Mobile.Bff cite Live)

| Method | Path | Dùng |
|--------|------|------|
| GET | `incident/incidents` | List · `search` · `status` · `severity` · `page` · `pageSize=50` |
| POST | `incident/incidents` | Create · required `Title` · `RouteName` · `IncidentType` · `Status` · `RequestedAt` · `HasGps` khi có fix · **không** cột Lat trên Create |
| GET | `incident/incidents/{id}` | Detail |
| POST | `incident/incidents/{id}/close` | Đóng · `Note` optional |
| GET | `integration/asset-types` | Pick loại TS (create) |
| GET | `patrol/sessions` | Ca/tuyến/km (create) — **RO stamp** · không SearchInput tuyến |
| POST | `ai-vision/uploads` (+ PUT) · `ai-vision/detect` | Ảnh / nhận diện optional |
| POST | `files/init` · PUT object · `files/commit` | Photo-geo overlay peer |

GPS: `navigator.geolocation` · **edit_page:** deny → báo khi bấm Create (banner/modal) · **cấm** khóa nút trước · Accuracy > 30 m → **không** POST detect.

## 4. Peers / sources

| Source | Note |
|--------|------|
| `SUBMIT-VALIDATE.md` | **SSOT Delta** edit_page · Pattern B · row `web-rmms-incident` |
| `SCREENS.md` Tab Incident | SSOT actions |
| `PLAN.md` · TASKS T-W4-01/02/03 | List/Create/Detail views |
| `incident-list.md` · `incident-create.md` · `incident-detail.md` | Peer CTX native |
| DOMAIN-MAP | Incident · MFE `/van-de` |
| Code Current | `IncidentCreatePage.tsx` · `paths.ts` `INCIDENT_BASE=/van-de` |
| Ảnh + viewer | [`lin-image-view-capture.md`](lin-image-view-capture.md) — `pins` và `LinImageView` khi lưu / xem ảnh |

## 5. Constraints HARD

- Phone frame 430 · Android 1-1 · **không** ERP Kind B desktop grid làm primary
- **Cấm** tab Cá nhân · **cấm** demo-json / itemsOrDemo / fake lat-lng
- BFF chỉ Mobile.Bff `:5202` · **cấm** web-bff client
- **edit_page:** **cấm** typed CRUD `new_page` · **cấm** Excel/export toolbar · **cấm** thêm tab/route/icon mới
- Align: SSOT = page đã có MFE · không mở prototype android/ios

## § Delta Current vs New (edit_page · task_43536f7d)

Cite: `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` · file `IncidentCreatePage.tsx`.

| Zone / control | Current (shipped) | New (DoD) |
|----------------|-------------------|-----------|
| `create` button | `disabled={!canCreate}` · `canCreate` = asset∧session∧gpsHasFix∧online∧!creating | **Luôn bật** khi form sẵn sàng · `disabled` **chỉ** khi `creating` |
| Validate fail | early `return` · toast noSession · GPS modal nếu deny · **không** banner `string[]` | Pattern B: `validationAttempted` · banner mọi lỗi (asset · session · GPS) + inline + scroll · **cấm** một `alert.warning` thay banner |
| GPS deny gate | khóa Create trước khi bấm | **Cấm** khóa nút · bấm Create mới báo (banner hoặc modal quyền) |
| Photos | `capture` đã có trên input | **Giữ** `capture="environment"` |
| INC-L / INC-D | unchanged | **Không** đổi list/detail trừ regression |
| Route std | `/van-de` · `/van-de/moi` (paths.ts) | **Giữ** · mfeStdUrl `http://localhost:9301/van-de/moi` · **không** `/web-rmms-incident` |
| API / BFF | Mobile.Bff incident+patrol+asset-types | **Giữ** · không invent path · users/road-routes SearchInput **N/A** form này (tuyến RO từ session) |
| Align cuối | — | `/align-mobile-to-mfe` no_demo · khung 430 · cấm tab/route/icon mới |

**Keep:** prior PO/Design/SA/implement artifacts · L/N/D screens · live APIs · useFormOptions · HasGps only.

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-27T12:52:57.231Z` |
| mobile | — | — | — |
