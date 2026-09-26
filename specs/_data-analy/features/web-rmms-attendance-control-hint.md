# Data-analy — controlHint — web-rmms-attendance

| Field | Value |
|-------|-------|
| feature | `web-rmms-attendance` |
| title | Chấm công — hub GPS + lịch sử + báo cáo ngày/log |
| packKind | `list` |
| changeScope | `new_page` |
| mode | `feature_context` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| analyzedAt | `2026-09-26T01:30:00.000Z` |
| demo | **N/A** |
| realData | `specs/_data-analy/features/web-rmms-attendance-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol `attendance-logs` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-attendance` |
| mfeStdRoute | `/web-rmms-attendance` |
| taskId | `task_1b2783bf` |
| phoneFrame | `max-width: 430px` |
| formPattern | Mobile hub + RO detail chain · **không** ERP Modal/Slideout Kind B · **không** form master edit |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** DOMAIN-MAP row.  
> Nhãn UI: `useFormOptions()` / copy key — **cấm** hardcode tiếng Việt trên form.  
> **Cấm** nhét phone Attendance vào MFE desktop · **cấm** sửa iOS/Android native.

## Sources

| Source | Path | note |
|--------|------|------|
| CTX | `docs/context/features/web-rmms-attendance.md` | new · written this run |
| Peer | `docs/context/features/attendance.md` | `ae89e26f…` · API + DoD |
| Screens | `docs/plan/web-rmms-mobile/SCREENS.md` | `6f74282b…` · `/field/attendance*` |
| Plan | `docs/plan/web-rmms-mobile/PLAN.md` | `60d75d5b…` · Attendance*View |
| DOMAIN-MAP | Patrol · slug `attendance` | **GAP** slug `web-rmms-attendance` chưa có row |
| BFF | Mobile.Bff `:5202` · `mobile-bff/api/v1` | **cấm** Web BFF base |

## Screens Attendance (ids)

| id | route / zone | surface |
|----|--------------|---------|
| ATT-00 | phone | frame ≤430 · Android / DES-MOB-ATT 1-1 |
| ATT-01 | `/field/attendance` | hub title + chrome |
| ATT-02 | hero | status · GPS meta · Chấm vào · Báo cáo |
| ATT-03 | history | day rows từ GET list |
| ATT-04 | `/field/attendance/report` | group-by-day |
| ATT-05 | `/field/attendance/day/:key` | lần trong ngày |
| ATT-06 | `/field/attendance/log/:id` | RO detail |
| ATT-07 | GPS | geolocation gate Chấm vào |
| ATT-08 | empty/error | `[]` / toast · **cấm** demo SSOT |
| ATT-09 | entry | Field hub · **cấm** gộp supervise |

**Out:** supervise monitor · zone config · Face/NFC · invent report/zones API · desktop Field · ERP.*.

## ControlHint inventory

| uiField | screen | controlHint | catalogKind / notes |
|---------|--------|-------------|---------------------|
| phoneFrame | ATT-00 | Layout | `max-width: 430px` |
| pageTitle | ATT-01 | Text | copy `attendance.title` |
| heroEyebrow | ATT-02 | Text | Chấm công theo định vị (copy key) |
| heroStatus | ATT-02 | Text RO | Chưa chấm / Đã chấm · state |
| heroGpsMeta | ATT-02 | Text RO | lat/lng · accuracy · ca/ngày |
| btnCheckIn | ATT-02 | Button | POST + GPS gate |
| btnReport | ATT-02 | Button/Nav | → `/field/attendance/report` |
| historySection | ATT-03 | SectionLabel | 7 ngày / lịch sử |
| dayRow | ATT-03 | ListRow + Badge | title · sub time · badge status |
| reportList | ATT-04 | List | client group by day |
| dayList | ATT-05 | List | filter CheckInAt dayKey |
| logDetail | ATT-06 | Detail RO | UserName · Route · KmPoint · CheckInAt · Lat · Lng · InZone · Status · Note |
| gpsCapture | ATT-07 | Action | `navigator.geolocation` · deny → no POST |
| emptyState | ATT-08 | Empty | GET empty → `[]` / hero «—» |

## Filter / grid (desktop HARD)

| | |
|--|--|
| LinErpListFilterBar / DES-GRID-* | **N/A** — phone hub · **không** Kind B desktop grid |
| Optional route filter | query `route` trên GET · P1 minimal |

## GPS

| Màn | Rule |
|-----|------|
| ATT-02 Chấm vào | **bắt buộc** live fix · deny → disable + modal · **cấm** fake / demo lat |
| ATT-04…06 | chỉ **đọc** tọa độ đã lưu · không capture mới |

## UNCLEAR

| id | Issue | Action |
|----|-------|--------|
| UNCLEAR-DOMAIN-MAP-ATT | DOMAIN-MAP chưa có row `web-rmms-attendance` | SA thêm · cite Patrol `attendance` |
| UNCLEAR-STD-ROUTE | SCREENS `/field/attendance*` vs packet `/web-rmms-attendance` | Design/Dev follow STATUS mfeStdUrl |
| UNCLEAR-REPORT-API | BE report/summary/zones MISSING | P1 client aggregate · **cấm** invent |
| UNCLEAR-EMPTY-COPY | Peer mobile từng demoDays | Web-rmms: live only · empty/`[]` · **cấm** demo SSOT |

## Handoff

| Role | Dùng |
|------|------|
| PO | Hub + report/day/log · GPS gate · DoD · no Face/NFC · no supervise gộp |
| Design | Phone 430 · zones ATT-* · Android/DES-MOB-ATT 1-1 · prototype+reviewUrl |
| SA | DOMAIN-MAP row · Mobile.Bff `patrol/attendance-logs` · **cấm** invent path |
| TL/Dev | Wire Mobile MFE Attendance only · reuse GET/POST |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `rulesVersion=2026.09.25.2` · `analyzedAt=2026-09-26T01:30:00.000Z`
