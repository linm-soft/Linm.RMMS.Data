# PO — Requirement — web-rmms-mnt-log

| Field | Value |
|-------|-------|
| feature | `web-rmms-mnt-log` |
| title | Nhật ký công việc — timeline readonly WorkOrder |
| packKind | `list` (confirm) |
| changeScope | `new_page` |
| role | `po` |
| status | `confirmed` |
| skillId | `agent-po` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| contentHash | `sha256:b8f4e2a19c7d5036e0a1b2c3d4e5f67890123456789abcdef0123456789abcd` |
| writtenAt | `2026-09-26T00:00:00.000Z` |
| taskId | `task_c234f845` |
| demo | **N/A** |
| autoApprove | ON |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-mnt-log` |
| mfeStdUrl | `http://localhost:9301/web-rmms-mnt-log` |
| productRoute | `/work/log` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Maintenance · **cấm ERP.*** |
| bff | `Linm.RMMS.Mobile.Bff` · `mobile-bff/api/v1` `:5202` · **cấm** FE web-bff |
| phoneFrame | `max-width: 430px` |
| formPattern | Mobile full / sheet · **không** ERP Modal/Slideout Kind B |
| prior | data_analy `confirmed` · compact `handoff/data_analy-compact.md` |

> Nhãn UI: `useFormOptions()` / copy key — **cấm** hardcode tiếng Việt trên form.  
> **Cấm** implement ở role PO · **cấm** invent `…/logs` · **cấm** Primary write CTA · **cấm** fake GPS.

## 1. Goal / persona

| | |
|--|--|
| Goal | Màn **readonly** nhật ký xử lý WorkOrder: header WO + timeline derive từ Live GET `{id}` qua Mobile.Bff. Copy layout 1-1 Android phone. |
| Persona | Tuần đường (BDTX) · Tuần kiểm (Khu/VP) — Work tab dùng chung |
| Entry | Card/nav từ peer `web-rmms-work` (`WORK-L`) · deep-link `?id=` / route param |
| DoD P1 | WORK-G Live RO · derive timeline · empty thiếu id/GET fail · toast · back list |

## 2. Screens

| id | productRoute | std | Surface | In scope |
|----|--------------|-----|---------|----------|
| WORK-G | `/work/log` | `/web-rmms-mnt-log` | Screen/sheet nhật ký **readonly** | **YES** |
| WORK-L | `/work` | peer `web-rmms-work` | List entry | peer only — **không** implement slug này |
| WORK-P | `/work/progress` | peer `web-rmms-mnt-progress` | Progress write | **OUT** |
| WORK-C | `/work/chat` | peer `web-rmms-mnt-chat` | Chat | **OUT** |

**Out slug:** Me* · feedback · cam-view · estimate · journal/kết ca/tồn tại/tần suất (`web-rmms-mobile-b…e`).

## 3. Leave / navigation

| From | Action | To |
|------|--------|-----|
| WORK-L card / nav nhật ký | open với `id` | WORK-G |
| WORK-G | back | WORK-L (`web-rmms-work`) |
| WORK-G thiếu id / 404 | empty + toast · CTA back | WORK-L |
| WORK-G | **cấm** Primary write / progress / chat CTA | — (peers riêng) |

## 4. Grid / Filter AC (packKind=list)

| Rule | Decision |
|------|----------|
| DES-GRID / LinErpListFilterBar | **N/A** — phone Work peer screen · **không** Kind B desktop grid primary |
| List surface | Timeline rows (derived) · **không** ERP data-grid columns |
| Filter bar | **N/A** trên WORK-G |
| packKind confirm | `list` = timeline list RO · Design chốt zone `DES-MOB-MNT-LOG` / `#sc-mnt-log` |

## 5. Timeline AC (derive P1)

| Order | Condition | Row | At |
|-------|-----------|-----|----|
| 1 | always | Tạo công việc | `CreatedAt` |
| 2 | `DueAt` set | Hạn | `DueAt` |
| 3 | `Description` non-empty | Mô tả | `CreatedAt` |
| 4 | `%` > 0 **hoặc** status `in_progress`/`done` | Tiến độ {n}% | `UpdatedAt` |
| 5 | `Note` non-empty | Ghi chú | `UpdatedAt` |
| 6 | status `done` | Hoàn thành | `UpdatedAt` |

| AC | Expected |
|----|----------|
| AC-TL-01 | Sort default **newest-first** (Design zone visual) |
| AC-TL-02 | Chỉ field Signed trên `WorkOrderDto` — **cấm** invent history API |
| AC-TL-03 | 0 rows edge → empty copy · **cấm** demo fallback |
| AC-HDR-01 | Header: `Code` · `Title` · `Status` badge · optional `RouteName` · `WorkType` |
| AC-RO-01 | **Cấm** POST progress/complete/messages trên slug |
| AC-BFF-01 | FE chỉ `mobile-bff/api/v1` · **cấm** web-bff client |
| AC-GPS-01 | **không** bắt GPS trên WORK-G · **cấm** fake coords |
| AC-LBL-01 | Status/WorkType display qua `useFormOptions` + init-data |

## 6. Label map (chốt UNCLEAR-LABEL-MAP)

| API `status` | Display SSOT (WORK-G) | Note |
|--------------|----------------------|------|
| `new` | init-data Label (vd. Mới) | **không** hardcode VN |
| `in_progress` | init-data Label | same |
| `done` | init-data Label | same |
| `cancelled` | init-data Label | same |

List chrome VN (Chờ xử lý / …) = **peer** `web-rmms-work` only — WORK-G dùng **init-data** Labels qua `useFormOptions`.

## 7. API (cite · read-only)

| Method | Path | Mode |
|--------|------|------|
| GET | `maintenance/work-orders/{id}` | view/prefill |
| GET | `maintenance/work-orders/init-data` | lookup display |
| write | — | **N/A** |

**Cấm:** invent `GET …/logs` · `WorkOrderProgress` history · ERP.* · demo-json.

## 8. Empty / error

| Case | UX |
|------|----|
| thiếu `id` | empty «Chưa có nhật ký» · back list |
| GET 404 | empty + toast · back list |
| BFF 503 | retry toast |
| Network | toast · **cấm** `window.alert` |

## 9. UNCLEAR → PO chốt (autoApprove)

| id | Decision |
|----|----------|
| UNCLEAR-ENTRY | **Entry mọi status** khi có `id` (không chỉ `done`) |
| UNCLEAR-SORT | **newest-first** default |
| UNCLEAR-LABEL-MAP | WORK-G = **init-data** + `useFormOptions` (xem §6) |
| UNCLEAR-HIST-API | **P1 derive only** · SA giữ Live GET · **cấm** invent `/logs` |

## 10. Gaps handoff

| ID | Owner |
|----|-------|
| GAP-MOB-MNT-LOG-HIST-01 | SA — P1 derive · mở rộng nếu Signed later |
| GAP-MOB-MNT-LOG-SCR-01 | Design — `#sc-mnt-log` · `DES-MOB-MNT-LOG` · reviewUrl |
| GAP-MOB-MNT-LOG-LABEL-01 | Design/Dev — bind useFormOptions per §6 |
| GAP-MOB-MNT-LOG-ENTRY-01 | **CLOSED** PO — mọi status + id |
| GAP-MOB-MNT-LOG-CMT-01 | out — chat peer |
| GAP-MOB-MNT-LOG-PACK-01 | Design — packKind list · phone sheet |
| GAP-MOB-MNT-LOG-DMAP-01 | SA — DOMAIN-MAP slug row |

## 11. Out of scope / cấm

- POST progress / complete / messages / create WO
- Kind E summary · desktop LinErpListFilterBar primary
- Tab Cá nhân · iOS/Android native edit
- Route `mobile-bff` trên WebService web-bff controllers
- Demo-json / itemsOrDemo / fake lat-lng
- Invent controller theo slug feature
- Patrol journal / kết ca (`web-rmms-mobile-b…e`)

## 12. Handoff Design

| Need | Detail |
|------|--------|
| Zone | WORK-G · phone 430 · Android 1-1 |
| Prototype | `#sc-mnt-log` · reviewUrl |
| Controls | inventory control-hint (header + timeline + empty · no write CTA) |
| Sort visual | newest-first |
| Filter/grid | N/A desktop |
| Labels | copy keys · useFormOptions · init-data map |
| Peer leave | back → `web-rmms-work` |
| GPS | không capture |

## DoR PO

- [x] changeScope=`new_page` · packKind=`list` confirm
- [x] Screens WORK-G · Leave · Grid AC = N/A phone
- [x] Timeline AC + FormMode↔API RO
- [x] UNCLEAR ENTRY/SORT/LABEL/HIST chốt
- [x] analy reuse · **cấm** demo rescan
- [x] compact `handoff/po-compact.md`
- [x] STATUS → po confirmed · design pending

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:b8f4e2a19c7d5036e0a1b2c3d4e5f67890123456789abcdef0123456789abcd` · `rulesVersion=2026.09.25.2` · `writtenAt=2026-09-26T00:00:00.000Z`
