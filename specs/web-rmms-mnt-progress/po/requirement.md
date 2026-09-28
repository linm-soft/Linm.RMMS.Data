# PO — requirement — web-rmms-mnt-progress

| Field | Value |
|-------|-------|
| feature | `web-rmms-mnt-progress` |
| title | Tiến độ công việc — edit Pattern B (submit luôn bật + capture) |
| packKind | `list` |
| changeScope | `edit_page` |
| lane | `web` |
| status | `confirmed` |
| skillId | `agent-po` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:544d007b5b40b3f3b71bb94aa78e804b2342af0c6eb7ec1edcea4b76b1b28080` |
| writtenAt | `2026-09-27T20:34:02.663Z` |
| taskId | `task_41245e40` |
| demo | **N/A** · **cấm** demo-json / crawl DemoRoot / re-scan |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-mnt-progress.md` |
| analy | `specs/_data-analy/features/web-rmms-mnt-progress-control-hint.md` · `…-real-data.md` |
| deltaCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` · Pattern B · `MntProgressPage.tsx` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/cong-viec/tien-do` |
| mfeStdUrl | `http://localhost:9301/cong-viec/tien-do` |
| productRoute | `/work/progress` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Maintenance WorkOrder · **cấm ERP.*** |
| bff | `Linm.RMMS.Mobile.Bff` · `mobile-bff/api/v1` `:5202` · **cấm** FE web-bff |
| formPattern | Mobile full / sheet · phone `max-width: 430px` · **không** ERP Modal/Slideout Kind B |
| persona | Tuần đường (BDTX) · Tuần kiểm (Khu/VP) — Work tab dùng chung |
| keep | Prior baseline Live (T-01…T-05 done) · Design prototype/reviewUrl · pipeline re-confirm |
| handoff | Design (`ui/design.md` + prototype reviewUrl) |

> Nhãn UI: `useFormOptions()` / copy key — **cấm** hardcode tiếng Việt trên form.  
> **Cấm** MFE desktop primary · **cấm** iOS/Android native edit · **cấm** invent controller · **cấm** `new_page` typed CRUD.  
> **Cấm** mount `/web-rmms-mnt-progress` · std = `/cong-viec/tien-do`.

## 1. Goal / DoD (edit_page)

Giữ Live WORK-P (prefill · progress · complete · GPS→Note · init-data · Mobile.Bff) **+ Delta Pattern B**:

1. CTA `submitProgress` / `submitComplete`: **chỉ** `disabled={saving}` (hoặc `!wo`) — **cấm** pre-lock vì GPS.
2. GPS deny / thiếu: bấm → `validationAttempted` · banner `string[]` + inline · **cấm** fake coords · **cấm** silent early return.
3. `input[type=file]` photos: `accept="image/*"` + **`capture="environment"`** · local only · **cấm** MediaUrl body.
4. Client errors = banner/inline; API 4xx/5xx = toast only · **cấm** `window.alert`.
5. API/DTO/BFF **không đổi**.

## 2. Screens

| id | productRoute | std | Surface | In scope |
|----|--------------|-----|---------|----------|
| WORK-P | `/work/progress` | `/cong-viec/tien-do` | Form/sheet cập nhật tiến độ | **Yes** · edit `MntProgressPage.tsx` |
| WORK-L | `/work` | peer `web-rmms-work` | List entry → nav WORK-P | Peer only · **không** implement slug này |

**Entry:** card action từ `web-rmms-work` (`#i-sync` / nav tiến độ) kèm `id` WO.  
**reviewUrl (keep):** `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-progress/ui/prototype/index.html`

## 3. Leave / Out of scope

| Out | Note |
|-----|------|
| WORK-G log · WORK-C chat · estimate | peers khác |
| Me* · feedback · cam-view | tab Cá nhân |
| journal / kết ca / tồn tại / tần suất | peers khác |
| List/create WO · thêm tab/route/icon | **cấm** |
| Invent Progress DTO lat/media · Excel/toolbar | Live only · N/A export |
| Desktop LinErpListFilterBar / DES-GRID | **N/A** phone form |
| FE `web-bff` · iOS/Android native | HARD |
| Re-scan demo / crawl DemoRoot | hash skip analy |

## 4. Field inventory + AC (analy §B + § Delta)

| uiField | controlHint | AC |
|---------|-------------|-----|
| topBarTitle | Text | Copy key tiến độ · `useFormOptions` |
| backNav | Button/Nav | Back → peer `web-rmms-work` |
| woCode / woTitle / woRouteName | Text RO | GET `{id}` · thiếu id → toast + back |
| woStatus | Badge RO | Map **list chrome** (§5) · keep CLOSED |
| woWorkType | Text RO | init-data / copy key |
| progressPercent | Number/Slider | Required 0–100 · prefill · inline sau attempt |
| note | Text | Optional · suffix GPS khi ok |
| lat/lng/accuracyM | GPS | Device · embed Note · **không** body · Pattern B on click |
| validationBanner | Banner `string[]` | **NEW** · GPS deny / required / % · sau `validationAttempted` |
| photoLocalIds | FileMulti optional | +`capture="environment"` · local · GAP-MEDIA |
| submitProgress | Button primary | POST progress · `disabled={saving}` only |
| submitComplete | Button | POST complete · `disabled={saving}` only |

### § Delta Current → New (HARD)

| Zone | Current | New |
|------|---------|-----|
| CTA disable | `!gpsReady \|\| saving \|\| !wo` | `saving` (hoặc `!wo`) only |
| GPS UX | pre-disable + silent return | click → banner · **cấm** fake |
| file input | no `capture` | `capture="environment"` |
| client errors | toast / silent | banner `string[]` + inline · API = toast |

### List packKind — Grid AC

| AC | Result |
|----|--------|
| DES-GRID / LinErpListFilterBar | **N/A** — phone form/sheet · không Kind B desktop |
| Toolbar / Excel | **N/A** — SUBMIT-VALIDATE override |
| packKind confirm | `list` · surface form/sheet WORK-P |

### FormMode ↔ API (unchanged paths)

| Mode | Trigger | API |
|------|---------|-----|
| prefill | open WORK-P + `id` | `GET maintenance/work-orders/{id}` |
| update | Cập nhật (Pattern B) | `POST …/{id}/progress` `{ ProgressPercent, Note? }` |
| complete | Hoàn thành | `POST …/{id}/complete` `{ Note? }` |
| lookup | mount | `GET …/work-orders/init-data` |

### Empty / error

| Case | UX |
|------|----|
| GET 404 / missing id | toast · back list |
| % ngoài 0–100 | banner/inline sau attempt |
| GPS deny / thiếu | **banner on click** · CTA vẫn bật khi idle · **cấm** fake |
| BFF 503 / network | toast · **cấm** `window.alert` · **cấm** banner cho API |

## 5. PO decisions — UNCLEAR → CLOSED

| id | Decision | Owner next |
|----|----------|------------|
| UNCLEAR-GPS-GATE (prior) → **SUPERSEDED** | Prior “disable CTA khi GPS deny” **thay** bằng Pattern B (SUBMIT-VALIDATE). GPS vẫn bắt buộc lúc submit · báo bằng banner · **cấm** pre-disable · **cấm** fake. | Design zone banner; Dev gate on click |
| UNCLEAR-BANNER-COPY → **CLOSED** | Copy GPS deny / required / unavailable: **reuse** keys `mnt.progress.gps.*` (deny · required · unavailable). Design map key → banner `string[]`. **Cấm** hardcode VN trong code path. | Design control-map; Dev i18n keys |
| UNCLEAR-MEDIA → **CLOSED-P1** (keep) | Camera local + `capture` · **cấm** MediaUrl body. Persist = SA Signed / GAP-MEDIA defer P2. | SA Signed nếu mở persist |
| UNCLEAR-LABEL-MAP → **CLOSED** (keep) | Badge list chrome: `new`→Chờ xử lý · `in_progress`→Đang xử lý · `done`→Đã hoàn thành · `cancelled`→Đã hủy. | Design/Dev keep |

### Status badge map (SSOT PO — keep)

| API `status` | Badge WORK-P (list chrome) |
|--------------|----------------------------|
| `new` | Chờ xử lý |
| `in_progress` | Đang xử lý |
| `done` | Đã hoàn thành |
| `cancelled` | Đã hủy |

## 6. Constraints HARD

- Phone 430 · Android layout 1-1 · edit page only (`MntProgressPage.tsx`)
- BFF chỉ `VITE_MOBILE_API_URL` → Mobile.Bff `:5202`
- Live body: `ProgressPercent` · `Note?` — **không** lat/lng/media
- Server: progress `new`→`in_progress`; complete → 100% + `done`
- Align cuối (later): `/align-mobile-to-mfe` · **không** proto android/ios · **không** tab/route/icon mới
- **Cấm** ERP.* · demo SSOT · invent path · hash-skip → **cấm** re-scan demo

## 7. Tasks (edit) — handoff team_lead

| id | scope | note |
|----|-------|------|
| T-EDIT-01 | Pattern B CTA | bỏ `ctasDisabled` GPS · `disabled={saving}` only |
| T-EDIT-02 | Banner validate | GPS deny / required → banner on click |
| T-EDIT-03 | capture | `input` + `capture="environment"` |
| T-BE | — | N/A · no API mới |
| T-QA | e2e | queued `/agent-qa*` after Dev |

## 8. Handoff Design

1. Keep prototype + `reviewUrl` · zone WORK-P · phone 430.
2. Control-map: Pattern B CTA + `validationBanner` + capture · label map §5 keep.
3. Banner copy keys `mnt.progress.gps.*` · **không** desktop grid / Excel.
4. Re-confirm design gate (autoApprove) · compact `handoff/design-compact.md`.

## DoR PO

- [x] changeScope=`edit_page` · packKind=`list` · **cấm** `new_page`
- [x] Screens WORK-P · Leave peers · mfeStd `/cong-viec/tien-do`
- [x] Field AC + FormMode↔API · Grid AC = N/A
- [x] § Delta Pattern B + capture + banner copy CLOSED
- [x] Prior LABEL/MEDIA keep · GPS gate SUPERSEDED → Pattern B
- [x] contentHash align analy · **cấm** re-scan demo
- [x] handoff Design · compact `handoff/po-compact.md`
