# PO — Requirement — web-rmms-cam-journal

| Field | Value |
|-------|-------|
| feature | `web-rmms-cam-journal` |
| title | Camera nhật ký tuần đường |
| packKind | `list` · **confirmed** |
| changeScope | `edit_page` · **cấm** `new_page` · **cấm** route mới |
| lane | `web` · MFE phone 430px |
| status | `done` |
| skillId | `agent-po` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.27.1` |
| versionGate | `ok` |
| contentHash | `sha256:76d6d3e1ec6437552d8e12b1c18c3aa8a0fd16abdcc3ef54b3ebc783d062050e` |
| writtenAt | `2026-10-01T01:06:48.355Z` |
| taskId | `task_f4d8107d` |
| demo | **N/A** · **cấm** re-scan demo (hash skip) |
| prior | data_analy `confirmed` · compact + control-hint + real-data §A+§B |
| deltaCite | `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` § enqueue #3 |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-cam-journal` (alias) |
| productRoute | `/nhat-ky/:sessionId` · `/nhat-ky/:sessionId/moi` · `/nhat-ky/:sessionId/:lineId` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol · **cấm ERP.*** |
| bff | `Linm.RMMS.Mobile.Bff` `:5202` · `mobile-bff/api/v1` · **cấm** web-bff |
| autoApprove | ON → Design |

## 1. Goal

Edit form nhật ký đã ship (peer `web-rmms-mobile-b`): **tuần đường** ghi dòng + ảnh; **QL_HAT / TK / NT** chỉ xem list/dòng · **không tạo/sửa**. Không đổi API paths/DTO Live journal-lines.

## 2. Screens

| Id | Route | File | Job |
|----|-------|------|-----|
| JL-01 | `/nhat-ky/:sessionId/moi` · `…/:lineId` | `JournalFormPage.tsx` | Form create/edit · RouteCapture · GPS Pattern B · POST/PUT |
| JL-02 | `/nhat-ky/:sessionId` | `JournalListPage.tsx` | List dòng ca · CTA ghi (role-gate) · card → JL-01 |

**Out screens:** invent product route `/web-rmms-cam-journal` · nút Giao việc · Excel · SLA 24h · Mục IV tiền · review PUT (peer C) · native iOS/Android.

## 3. Role matrix (HARD)

| Vai | JL-01 write | JL-02 | Tạo dòng |
|-----|-------------|-------|----------|
| Tuần đường | POST/PUT + capture | full + CTA | **yes** |
| `QL_HAT` (`HAT-TRUONG`+`HAT-PHO`) | view-only deep-link | list RO · **ẩn CTA** | **no** |
| Tuần kiểm | view-only | list RO · **ẩn CTA** | **no** |
| Nghiệm thu | view-only | list RO · **ẩn CTA** | **no** |

`QL_HAT` = chỉ `HAT-TRUONG` + `HAT-PHO` · **cấm** suy từ `MANAGER-RMMS`. Caps cite `web-rmms-role-gate` (`packageCode` / `roleCaps`).

## 4. ControlHint → AC (copy inventory)

| uiField | screen | controlHint | AC |
|---------|--------|-------------|-----|
| screenTitle | JL-01 | Text | create «Ghi nhật ký» / edit «Sửa dòng» |
| back/cancel | JL-01/02 | Nav | leaveConfirm khi dirty |
| bannerErrors | JL-01 | Banner | narrative required · GPS Pattern B on Lưu |
| atLocal | JL-01 | DateTimeLocal | map `at` ISO |
| writerLabel | JL-01 | Text RO | profile / dto |
| kmText | JL-01 | TextInput | optional |
| direction/weather/kind/status | JL-01 | Select | LOOKUP_STATIC · `useFormOptions('web-rmms-mobile-b')` |
| narrative | JL-01 | TextArea | **required** |
| onSiteAction/Result | JL-01 | Checkbox+TextArea | bool + optional text |
| reportedTo/At | JL-01 | Select+DateTime | cờ TK · **không** tạo phiếu |
| violationFlag | JL-01 | Checkbox | bool |
| gpsPin | JL-01 | GPS | Pattern B · **cấm** fake · create auto-read; edit hydrate |
| photos | JL-01 | RouteCaptureControl | multiple · write tuần đường; view khác |
| save | JL-01 | Button | chỉ `disabled={saving\|\|photoBusy}` · role tuần đường |
| lineCards | JL-02 | List RO | GET journal-lines |
| ctaCreate | JL-02 | Button | **ẩn** non-tuần-đường |
| emptyState | JL-02 | Empty | «Chưa ghi việc» + CTA gated |
| roleGateBanner | JL-01/02 | Banner opt | view-only hint |

## 5. Grid / Filter AC (packKind=list)

| Rule | Value |
|------|-------|
| DES-GRID-* / LinErpListFilterBar | **N/A** — phone Field list cards · **không** desktop grid |
| toolbar Excel | **N/A** · **cấm** |
| JL-02 list | cards từ GET `…/sessions/{id}/journal-lines` · empty + gated CTA |
| Filter bar | **N/A** phone |

## 6. Form / GPS AC

| Id | AC |
|----|-----|
| AC-JL-WRITE | Chỉ tuần đường POST/PUT; QL_HAT/TK/NT mở form → RO · không Lưu |
| AC-JL-CTA | JL-02 CTA «Ghi»/thêm chỉ tuần đường |
| AC-JL-NARR | narrative required → banner nếu thiếu |
| AC-JL-GPS-B | Pattern B: Lưu **không** pre-disable thiếu GPS; deny/pending → banner on click · **cấm** fake lat/lng |
| AC-JL-PHOTO | RouteCapture write chỉ tuần đường |
| AC-JL-LEAVE | dirty leave → confirm; clean → navigate |
| AC-JL-LOOKUP | nhãn từ LOOKUP_STATIC / useFormOptions · **cấm** hardcode VN mới nếu key có |
| AC-JL-ROUTE | **cấm** route mới · deep-link product `/nhat-ky/…` · mfeStdUrl = alias only |
| AC-JL-API | giữ Live paths · **cấm** invent CamJournal* · **cấm** web-bff · **cấm** ERP.* |

## 7. Leave

| Trigger | Behavior |
|---------|----------|
| JL-01 dirty + back/cancel/route change | confirm discard |
| JL-01 clean / after save success | navigate free |
| JL-02 | RO list · no leaveConfirm (no draft) |

## 8. API cite (SA confirm DTO — không đổi path)

| Method | Path | Note |
|--------|------|------|
| GET | `patrol/sessions/{id}` | stamp |
| GET | `patrol/sessions/{id}/journal-lines` | JL-02 |
| GET | `patrol/journal-lines/{id}` | JL-01 edit |
| POST | `patrol/journal-lines` | create · tuần đường |
| PUT | `patrol/journal-lines/{id}` | update · tuần đường |
| files/* | FileService via capture | cite |

Base: `{BffBase}/mobile-bff/api/v1`. **Out:** `PUT …/review` (peer C).

## 9. Non-goals (HARD)

- `new_page` / invent product route / CamJournalController
- Giao việc trên JL-* · SLA 24h · Mục IV tiền
- Excel · ERP Modal/Slideout · web-bff · ERP.* · iOS/Android
- Re-scan demo / fake GPS / invent DTO

## 10. Open → SA / Design / Dev

| id | Owner | Action |
|----|-------|--------|
| UNCLEAR-JL-DOMAIN-ROW | SA | add DOMAIN-MAP slug hoặc bind peer mobile-b |
| UNCLEAR-JL-ROLE-SOURCE | Dev (+ role-gate) | đọc `packageCode`/`roleCaps` client |
| GAP-DA-JL-STD-ALIAS | Design | reviewUrl keep list/form · deep-link product · alias std |

## 11. Handoff Design

- keep JL-01/JL-02 layout · role visibility (CTA/save/capture)
- phone 430px · prototype keep list/form
- reviewUrl = Design · **cấm** invent zones ngoài inventory
- autoApprove=ON

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:76d6d3e1ec6437552d8e12b1c18c3aa8a0fd16abdcc3ef54b3ebc783d062050e` · `rulesVersion=2026.09.27.1` · `writtenAt=2026-10-01T01:06:48.355Z` · `changeScope=edit_page` · `packKind=list` · `taskId=task_f4d8107d`
