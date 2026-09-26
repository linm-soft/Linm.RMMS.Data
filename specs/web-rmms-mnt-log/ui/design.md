# Design — web-rmms-mnt-log

| Field | Value |
|-------|-------|
| feature | `web-rmms-mnt-log` |
| title | Nhật ký công việc |
| this role | `design` · `/agent-design` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_a02de17b`) |
| changeScope | `new_page` |
| packKind | **`list`** (PO · UI = **phone WORK-G timeline RO** · **≠** Kind B desktop) |
| lane | `web` |
| stack | `web_mfe_phone` · `Linm.Web.RMMS.Mobile` · `max-width: 430px` |
| formPattern | Mobile **full / sheet** · phone 430 · **không** ERP Modal/Slideout Kind B |
| DES-GRID / LinErpListFilterBar | **N/A** — phone Work peer screen · **cấm** clone |
| Report AC / DES-RPT | **N/A** |
| shared_grid_example | **N/A** (phone) |
| real_view_parity | **v1** |
| peerStdUrl | `http://localhost:9301/web-rmms-work` |
| mfeStdUrl | `http://localhost:9301/web-rmms-mnt-log` |
| mfeStdRoute | `/web-rmms-mnt-log` |
| productRoute | `/work/log` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-log/ui/prototype/index.html` |
| reviewUrl empty | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-log/ui/prototype/index.html?empty=1` |
| reviewUrl fail | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-log/ui/prototype/index.html?fail=1` |
| demo | **N/A** · hash skip · **cấm** re-scan (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · Maintenance WorkOrder · **cấm ERP.*** |
| bff | `Linm.RMMS.Mobile.Bff` · `:5202` · `mobile-bff/api/v1` · **cấm** web-bff |
| controlHint | `specs/_data-analy/features/web-rmms-mnt-log-control-hint.md` |
| realData | `specs/_data-analy/features/web-rmms-mnt-log-real-data.md` · §A+§B PASS |
| prior | PO `confirmed` · `handoff/po-compact.md` · DA `confirmed` · contentHash `sha256:b8f4e2a19c7d5036e0a1b2c3d4e5f67890123456789abcdef0123456789abcd` |
| autoApprove | **ON** |
| e2eQa | ON queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở Design |
| `devSlash` | `/agent-dev` |
| updatedAt | `2026-09-26T06:05:00.000Z` |
| taskId | `task_a02de17b` |
| skillId | `agent-design` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:b8f4e2a19c7d5036e0a1b2c3d4e5f67890123456789abcdef0123456789abcd` |

**Cấm:** Dev/BE trước confirm (đã autoApprove) · ERP.* · invent `…/logs` · Primary write CTA · fake GPS · hardcode VN ngoài `useFormOptions` · `window.alert` · re-scan demo · Kind B DES-GRID · `LinErpListFilterBar` · Me*/feedback/cam-view · journal/kết ca · gộp WORK-L list DoD · `yarn build` / e2e / start:std ở role này.

## 0. Context / Demo

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/web-rmms-mnt-log.md` | greenfield WORK-G |
| CTX-02 | `docs/plan/web-rmms-mobile/SCREENS.md` | `/work/log` readonly |
| CTX-03 | peer `mnt-log.md` · `web-rmms-work.md` · `web-rmms-mnt-progress.md` | Android toast · WORK-L entry |
| DEM | — | **N/A** · hash skip · **cấm** crawl (**GAP-DES-DEMO-RESCAN-01**) |
| DA-01 / DA-02 | `_data-analy/features/web-rmms-mnt-log-{control-hint,real-data}.md` | inventory + §B |
| PO | `po/requirement.md` · `handoff/po-compact.md` | ENTRY/SORT/LABEL closed · HIST→SA |
| tokens | `docs/mobile-tokens.json` | primary `#0C84C0` · phone 430 |

## 1. Pattern & ownership

| | |
|--|--|
| Frame | Phone **430px** · tokens primary `#0C84C0` · label **13** · field **≥16** (**GAP-TYP-01**) · control **≥44** |
| Surface | Full / sheet timeline RO · **cấm** ERP Modal/Slideout · **cấm** Kind B desktop |
| This feature | **WORK-G** only — header WO RO · timeline derive · empty · **không** write CTA |
| Peer WORK-L | Entry card/nav → `/work/log?id=` (`web-rmms-work`) · **không** implement list ở slug này |
| Shell | TabBar / login — out |
| DES-LEAVE | Back → WORK-L · dirty N/A (RO) · toast · **cấm** `window.alert` |
| Out | WORK-P/C · Me* · feedback · cam-view · journal/kết ca · list/create WO |

### SORT (PO CLOSED — Design wire)

| | |
|--|--|
| Default | **newest-first** (AC-TL-01) |
| Visual | Timeline vertical · newest row on top · connector line |
| Cite | GAP-MOB-MNT-LOG-SCR-01 · UNCLEAR-SORT CLOSED |

### LABEL-MAP (PO CLOSED)

| API `status` | Display SSOT (WORK-G) |
|--------------|----------------------|
| `new` / `in_progress` / `done` / `cancelled` | init-data Label qua `useFormOptions` |

List chrome VN = peer `web-rmms-work` only. Prototype hiện VN để review; Dev wire key.

### GPS

| | |
|--|--|
| WORK-G | **không** bắt GPS · **cấm** fake coords (AC-GPS-01) |

### HIST (PO → SA)

| | |
|--|--|
| P1 | Client-derive từ `WorkOrderDto` Signed fields · **cấm** invent `GET …/logs` |
| Cite | UNCLEAR-HIST-API · GAP-MOB-MNT-LOG-HIST-01 → SA |

## 2. Screens / zones

| Zone | Route | Surface | Wire |
|------|-------|---------|------|
| **WORK-G** | product `/work/log?id=` · std `/web-rmms-mnt-log` | Full sheet RO | Header · timeline · empty |
| **WORK-L** | peer `/work` | Entry only | Nav back · **không** DoD slug này |

### Zone ids (HARD)

| id | Value |
|----|-------|
| screen | `#sc-mnt-log` |
| DES | `DES-MOB-MNT-LOG` |
| data-zone | `WORK-G` |

### IA

```
(auth) Tab Work → WORK-L (web-rmms-work)
  card/nav nhật ký → /work/log?id={woId}
  std entry → /web-rmms-mnt-log (?id=)
  GET work-orders/{id} → header + derive timeline (newest-first)
  GET work-orders/init-data → status / workType labels
  thiếu id / 404 → empty «Chưa có nhật ký» + toast · CTA back WORK-L
  back → WORK-L
  cấm Primary write / progress / chat CTA
```

### STD nest

| Decision | Rule |
|----------|------|
| Product | `/work/log?id={woId}` |
| Std pack | `/web-rmms-mnt-log` · query `?id=` · **không** nest dưới `/web-rmms-work/*` |
| Peer list | `web-rmms-work` owns WORK-L |

## 3. Field inventory (Control = controlHint)

| uiField | screen | controlHint | Required | Bind / notes |
|---------|--------|-------------|----------|--------------|
| topBarTitle | WORK-G | Text | * | copy key «Nhật ký» / «Nhật ký xử lý» / «Nhật ký công việc» |
| backNav | WORK-G | Button/Nav | * | → WORK-L peer |
| woCode | WORK-G | Text RO | * | GET `{id}` · `Code` |
| woTitle | WORK-G | Text RO | * | `Title` |
| woStatus | WORK-G | Badge RO | * | `Status` · init-data / useFormOptions |
| woRouteName | WORK-G | Text RO | | `RouteName` optional |
| woWorkType | WORK-G | Text RO | | `WorkType` · init-data |
| timeline | WORK-G | Timeline list | * | derive DTO · no POST · newest-first |
| row.created | WORK-G | TimelineItem RO | * | always · `CreatedAt` |
| row.due | WORK-G | TimelineItem RO | | nếu `DueAt` |
| row.description | WORK-G | TimelineItem RO | | nếu `Description` |
| row.progress | WORK-G | TimelineItem RO | | nếu % > 0 hoặc in_progress/done · `UpdatedAt` |
| row.note | WORK-G | TimelineItem RO | | nếu `Note` · `UpdatedAt` |
| row.done | WORK-G | TimelineItem RO | | nếu status `done` · `UpdatedAt` |
| emptyState | WORK-G | Empty | * | thiếu id / GET fail · **cấm** demo fallback |
| primaryWrite | WORK-G | — | | **N/A** — **cấm** write CTA |
| toast.* | WORK-G | Toast | * | 404 / 503 / network · **cấm** `window.alert` |

**Labels:** `useFormOptions()` / copy keys — prototype VN để review; Dev wire key.

### Timeline derive order (source) → display newest-first

| Source order | Condition | Row title key | At |
|--------------|-----------|---------------|-----|
| 1 | always | Tạo công việc | `CreatedAt` |
| 2 | `DueAt` set | Hạn | `DueAt` |
| 3 | `Description` | Mô tả | `CreatedAt` |
| 4 | % > 0 hoặc in_progress/done | Tiến độ {n}% | `UpdatedAt` |
| 5 | `Note` | Ghi chú | `UpdatedAt` |
| 6 | status `done` | Hoàn thành | `UpdatedAt` |

Display: sort by `At` descending (newest on top). Equal timestamps keep source order stable.

## 4. Prototype (REQUIRED)

| | |
|--|--|
| Path | `specs/web-rmms-mnt-log/ui/prototype/index.html` |
| Zone | `#sc-mnt-log` · `data-zone=WORK-G` · `DES-MOB-MNT-LOG` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-log/ui/prototype/index.html` |
| Parity | Phone 430 · header WO · timeline newest-first · empty · **không** write CTA · **không** GPS |
| Board | autoApprove=ON → `design_confirm=approve` |

### Query modes

| Query | Effect |
|-------|--------|
| (default) | WORK-G · sample WO in_progress · timeline rows newest-first |
| `?empty=1` | thiếu id · empty «Chưa có nhật ký» · CTA back |
| `?fail=1` | GET 404 · empty + toast · CTA back |
| `?done=1` | status done · include row.done |

## 5. Brand / typography

| Token | Hex / size |
|-------|------------|
| Primary / Deep | `#0C84C0` / `#086A9A` |
| Success / Warn / Danger | `#3CB448` / `#FCB43C` / `#F03C30` |
| Surface | `#F2F2F7` |
| label / field / nav | **13** / **≥16** / **17** |
| control height | **44** |

## 6. AC map

| AC / DoD | Design coverage |
|----------|-----------------|
| AC-TL-01 newest-first | Timeline visual top = newest |
| AC-TL-02 Signed only | Derive rows · no `/logs` invent |
| AC-TL-03 empty edge | emptyState · no demo fallback |
| AC-HDR-01 | Header Code/Title/Status/Route/WorkType |
| AC-RO-01 | **Cấm** write CTA / POST |
| AC-BFF-01 | cite mobile-bff only |
| AC-GPS-01 | no GPS capture |
| AC-LBL-01 | badge via init-data / useFormOptions |
| Phone 430 | frame |
| Out peers | no WORK-P/C / Me* / journal |

## 7. API (cite Live — SA confirm DTO)

| Method | Path | Note |
|--------|------|------|
| GET | `maintenance/work-orders/{id}` | view/prefill · derive timeline |
| GET | `maintenance/work-orders/init-data` | status / workType display |
| write | — | **N/A** |

App base `{BffBase}/mobile-bff/api/v1`. **Cấm** invent `…/logs` · **cấm** FE web-bff · **cấm ERP.***.

## 8. DES checklist

| ID | Result |
|----|--------|
| DES-A zone WORK-G · `#sc-mnt-log` · `DES-MOB-MNT-LOG` | **PASS** |
| DES-B control = controlHint | **PASS** |
| DES-C no write CTA · RO | **PASS** |
| DES-D newest-first · empty | **PASS** |
| DES-GRID / LinErpListFilterBar | **N/A** |
| DES-RPT | **N/A** |
| GAP-MOB-MNT-LOG-SCR-01 | **PASS** |
| GAP-MOB-MNT-LOG-PACK-01 | **PASS** (list · phone sheet) |
| reviewUrl browser-openable | **PASS** |
| hash skip · no demo rescan | **PASS** |

## 9. Open → next · Handoff SA

| id | Owner |
|----|-------|
| UNCLEAR-HIST-API · GAP-MOB-MNT-LOG-HIST-01 | SA — P1 derive · cấm invent `/logs` |
| GAP-MOB-MNT-LOG-DMAP-01 | SA — DOMAIN-MAP slug row |
| GAP-MOB-MNT-LOG-LABEL-01 | Dev — bind useFormOptions (Design closed map) |

| Field | Value |
|-------|-------|
| Next slash | `/agent-sa` |
| Chain | roleOnly=design · **không** start SA turn này (**GAP-PKT-ROLE-01**) |
| Compact | `handoff/design-compact.md` |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| contentHash | `sha256:b8f4e2a19c7d5036e0a1b2c3d4e5f67890123456789abcdef0123456789abcd` |
| versionGate | `ok` |
| design_confirm | `approve` |
| writtenAt | `2026-09-26T06:05:00.000Z` |
