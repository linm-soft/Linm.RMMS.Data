# Design — web-rmms-cam-journal

| Field | Value |
|-------|-------|
| feature | `web-rmms-cam-journal` |
| title | Camera nhật ký tuần đường |
| this role | `design` · `/agent-design` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_cac06ccb`) |
| changeScope | `edit_page` · keep JL list/form · **§ Delta role-gate only** · **cấm** `new_page` · **cấm** route mới |
| packKind | **`list`** · UI = **phone Field** · **≠** Kind B desktop |
| lane | `web` |
| stack | `web_mfe_phone` · `Linm.Web.RMMS.Mobile` · `max-width: 430px` |
| formPattern | Full page JL-02 list · JL-01 create/edit · **không** ERP Modal/Slideout Kind B |
| DES-GRID / LinErpListFilterBar | **N/A** — phone · **cấm** clone · WAIVE · `{feature}-filter-bar.md` **skip** |
| Report AC / DES-RPT | **N/A** |
| shared_grid_example | **N/A** (phone) |
| real_view_parity | **v1** |
| peerStd deep-link | `/nhat-ky/:sessionId` · `/nhat-ky/:sessionId/moi` · `/nhat-ky/:sessionId/:lineId` |
| mfeStdUrl | `http://localhost:9301/web-rmms-cam-journal` (**alias only** · **cấm** invent product slug) |
| mfeStdRoute | product `/nhat-ky/:sessionId` · `/moi` · `/:lineId` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-journal/ui/prototype/index.html` |
| demo | **N/A** · hash skip · **cấm** re-scan (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol (+ FileService · Auth) · **cấm ERP.*** |
| bff | `Linm.RMMS.Mobile.Bff` · `:5202` · `mobile-bff/api/v1` · **cấm** web-bff |
| controlHint | `specs/_data-analy/features/web-rmms-cam-journal-control-hint.md` |
| realData | `specs/_data-analy/features/web-rmms-cam-journal-real-data.md` · §A+§B PASS |
| deltaCite | `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` § enqueue #3 |
| prior | PO `confirmed` · `handoff/po-compact.md` · contentHash `sha256:76d6d3e1ec6437552d8e12b1c18c3aa8a0fd16abdcc3ef54b3ebc783d062050e` |
| autoApprove | **ON** |
| e2eQa | ON queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở Design |
| `devSlash` | `/agent-dev` |
| updatedAt | `2026-10-01T01:15:00.000Z` |
| taskId | `task_cac06ccb` |
| skillId | `agent-design` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.27.1` |
| versionGate | `ok` |
| contentHash | `sha256:76d6d3e1ec6437552d8e12b1c18c3aa8a0fd16abdcc3ef54b3ebc783d062050e` |

**Cấm:** Dev/BE trước confirm (đã autoApprove) · ERP.* · iOS/Android native · Kind B DES-GRID · `LinErpListFilterBar` · invent `CamJournal*` · invent product route `/web-rmms-cam-journal` · fake GPS · Giao việc trên JL-* · SLA 24h · Mục IV tiền · Excel · web-bff · review PUT (peer C) · native `alert`/`confirm` · re-scan demo · `yarn build` / e2e / start:std ở role này · **cấm** khóa Lưu trước bấm (Pattern B trừ `saving`/`photoBusy`).

## 0. Context / Demo

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/web-rmms-cam-journal.md` | feature_context |
| DELTA | `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` | enqueue #3 · tuần đường ghi · vai khác không tạo |
| DEM | — | **N/A** · hash skip |
| DA-01 / DA-02 | `_data-analy/features/web-rmms-cam-journal-{control-hint,real-data}.md` | inventory + §B |
| PO | `po/requirement.md` · `handoff/po-compact.md` | Screens · Pattern B · Leave · role matrix · AC |
| peer | `web-rmms-mobile-b` JournalListPage / JournalFormPage | keep layout · edit role-gate |
| code | `src/pages/WebRmmsMobileB/JournalFormPage.tsx` · `JournalListPage.tsx` | SSOT edit |
| tokens | `docs/mobile-tokens.json` | primary `#0C84C0` · 430px |

## 0b. § Delta Current vs New (edit_page HARD)

| Area | Current (shipped peer mobile-b) | New (Design chốt) |
|------|--------------------------------|-------------------|
| changeScope | journal Live mobile-b | `edit_page` · **cấm** `new_page` · **cấm** route mới |
| JL-01 write | mọi user mở form đều POST/PUT | chỉ **tuần đường** · `QL_HAT`/TK/NT **view-only** nếu deep-link |
| JL-02 CTA ghi | hiện theo ca (chưa lọc vai) | chỉ tuần đường · **ẩn** QL_HAT / TK / NT |
| RouteCapture | purpose journal · multiple | giữ · tuần đường write · `mode=view` cho vai khác |
| GPS Lưu | Pattern B (peer) | **KEEP** · banner on Lưu · `disabled={saving\|\|photoBusy}` only · **cấm** fake |
| Leave dirty JL-01 | LeaveConfirmModal | **KEEP** · **cấm** native dialog |
| SLA / tiền / Giao việc | N/A | **cấm** trên JL-* |
| Align | phone 430 | `/align-mobile-to-mfe` · **cấm** tab/route/icon mới |
| Grid / filter | N/A phone | **KEEP WAIVE** |
| API paths | journal-lines Live | **KEEP** · **cấm** invent CamJournal* |

## 1. Pattern & shell

| | |
|--|--|
| Frame | Phone **430px** · content-only · tokens primary `#0C84C0` · label **13** · field **≥16** · hit **≥44** |
| Shell | App topbar (title · back) · **không** ERP `LinPageLayout` chrome |
| List | JL-02 — cards theo ca · FAB/CTA «Ghi» role-gated · EmptyState |
| Full form | JL-01 — header **Hủy / Lưu** · Pattern B · RouteCapture |
| Leave | **LeaveConfirmModal** (`DES-LEAVE`) · dirty JL-01 write · **cấm** native dialog |
| Submit UX | **Pattern B** · `validationAttempted` · banner + inline · API 4xx/5xx = toast |
| Tabs | none |
| Out | Giao việc · SLA · Mục IV · Excel · invent route · review API |

## 2. Screens / zones

| Zone | Route | Surface | Wire |
|------|-------|---------|------|
| **JL-02** | `/nhat-ky/:sessionId` | Full list | lineCards · empty · `ctaCreate` role-gated |
| **JL-02v** | same · role≠tuần đường | Full list RO | **ẩn** CTA/FAB · optional `roleGateBanner` |
| **JL-01** | `/nhat-ky/:sessionId/moi` · `…/:lineId` | Full form write | tuần đường · Pattern B · capture |
| **JL-01g** | same · `validationAttempted` | Full form | GPS deny + empty narrative **sau** Lưu · Lưu vẫn enabled |
| **JL-01v** | `…/:lineId` · role≠tuần đường | Full form RO | ẩn Lưu/capture · fields RO |
| **DES-LEAVE** | overlay | Modal | dirty leave JL-01 write |
| **banner** | trong JL-01 | Alert strip | `string[]` · zone id `banner` |

### IA

```
(auth) → ca → JL-02 (/nhat-ky/:sessionId)
  → tuần đường: CTA → JL-01 /moi | tap card → JL-01 :lineId (write)
  → QL_HAT/TK/NT: list RO · no CTA · tap → JL-01v view-only
  ← Back · Save OK→JL-02 · Save fail→banner+inline (stay)
```

### Role matrix (HARD)

| Vai | JL-01 write | JL-02 CTA | Note |
|-----|-------------|-----------|------|
| Tuần đường | yes + capture | yes | POST/PUT |
| `QL_HAT` (`HAT-TRUONG`+`HAT-PHO`) | no · view-only | **ẩn** | **cấm** suy `MANAGER-RMMS` |
| Tuần kiểm | no · view-only | **ẩn** | — |
| Nghiệm thu | no · view-only | **ẩn** | — |

## 3. Field inventory (Control = controlHint)

| uiField | screen | controlHint | Required | Bind / notes |
|---------|--------|-------------|----------|--------------|
| listHeader | JL-02 | Text | — | session stamp |
| lineCards | JL-02 | List RO | — | `GET …/journal-lines` · tap → JL-01 |
| ctaCreate | JL-02 | Button | — | **chỉ** tuần đường · ẩn QL_HAT/TK/NT |
| emptyState | JL-02 | Empty | — | «Chưa ghi việc» · CTA gated |
| roleGateBanner | JL-01/02 | Banner optional | — | view-only hint |
| screenTitle | JL-01 | Text | — | create «Ghi nhật ký» / edit «Sửa dòng» |
| atLocal | JL-01 | DateTimeLocal | * | `at` ISO |
| writerLabel | JL-01 | Text RO | * | profile / dto |
| kmText | JL-01 | TextInput | — | optional |
| direction | JL-01 | Select | * | DIRECTION_LOOKUP_STATIC |
| weather | JL-01 | Select | * | WEATHER_LOOKUP_STATIC |
| kind | JL-01 | Select | * | JOURNAL_KIND_LOOKUP_STATIC |
| narrative | JL-01 | TextArea | * | required · fail on Lưu |
| onSiteAction | JL-01 | Checkbox | — | bool |
| onSiteResult | JL-01 | TextArea | — | optional khi onSite |
| reportedTo | JL-01 | Select | — | REPORTED_TO · cờ TK · **không** tạo phiếu |
| reportedAtLocal | JL-01 | DateTimeLocal | — | optional |
| violationFlag | JL-01 | Checkbox | — | bool |
| status | JL-01 | Select | * | JOURNAL_STATUS_LOOKUP_STATIC |
| gpsPin | JL-01 | GPS + Button | * | Pattern B · **cấm** fake |
| photos | JL-01 | RouteCaptureControl | — | write tuần đường · view khác |
| save | JL-01 | Button primary | — | role tuần đường · `disabled={saving\|\|photoBusy}` |
| cancel / back | JL-01 | Button/Nav | — | LeaveConfirm nếu dirty |
| bannerErrors | JL-01 | Banner | — | GPS + narrative on submit |
| roleCaps | JL-* | Hidden | — | cite role-gate |

**Labels:** `useFormOptions('web-rmms-mobile-b')` / JOURNAL_* — prototype VN để review; Dev wire key.

## 4. Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/index.html` |
| Zones | JL-02w · JL-02v · JL-02e · JL-01 · JL-01g · JL-01v · DES-LEAVE · banner |
| Form | Full header Hủy/Lưu · LeaveConfirmModal · Pattern B · role visibility |
| Grid/filter desktop | **N/A** |
| SSOT | control-hint · mobile-tokens · **cấm** shared-grid desktop |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-journal/ui/prototype/index.html` |
| **peerStd deep-link** | `/nhat-ky/:sessionId/moi` |
| **real_view_parity** | `v1` |

### Wire

```
JL-02w: cards + FAB «+ Ghi» (tuần đường)
JL-02v: cards RO · no FAB · roleGateBanner (QL_HAT/TK/NT)
JL-02e: Empty «Chưa ghi việc» + CTA gated
JL-01: Hủy|Lưu · meta LOOKUP · narrative* · RouteCapture · GPS · flags · Pattern B lock only saving|photoBusy
JL-01g: after Lưu · banner GPS+narrative · Lưu vẫn enabled
JL-01v: RO fields · no Lưu · capture view
Leave: Modal Ở lại / Rời (dirty write)
```

## 5. API map (cite real-data §B)

| Action | API |
|--------|-----|
| Parent ca | `GET patrol/sessions/{id}` via **mobileApiBase** |
| List sổ | `GET patrol/sessions/{id}/journal-lines` |
| Detail | `GET patrol/journal-lines/{id}` |
| Create | `POST patrol/journal-lines` · tuần đường only |
| Update | `PUT patrol/journal-lines/{id}` · tuần đường only |
| Photos | FileService via RouteCapture · cite |
| Transport | **chỉ** `mobileApiBase()` · **cấm** web-bff FE |
| Schema | Live journal-lines · **KEEP** · **cấm** invent CamJournal* |
| Out | `PUT …/review` (peer C) |

## 6. List / Form AC (ids — cite PO)

| id | Note |
|----|------|
| AC-JL-WRITE | tuần đường POST/PUT · others deny |
| AC-JL-CTA | CTA/FAB ẩn non-tuần-đường |
| AC-JL-NARR | narrative required on Lưu |
| AC-JL-GPS-B | Pattern B · banner · cấm fake · cấm pre-disable |
| AC-JL-PHOTO | RouteCapture write vs view |
| AC-JL-LEAVE | LeaveConfirmModal dirty JL-01 |
| AC-JL-LOOKUP | LOOKUP_STATIC keys |
| AC-JL-ROUTE | keep product `/nhat-ky/…` · cấm invent alias product |
| AC-JL-API | Live journal-lines · mobile-bff |
| Grid AC | **N/A/WAIVE** |
| Report AC / DES-RPT | **N/A** |

## 7. UNCLEAR (handoff)

| id | Design chốt | Owner |
|----|-------------|-------|
| UNCLEAR-JL-DOMAIN-ROW | Design **không** block · SA add DOMAIN-MAP slug hoặc bind peer mobile-b | SA |
| UNCLEAR-JL-ROLE-SOURCE | Design giả định caps từ role-gate package · Dev wire | Dev + `web-rmms-role-gate` |

## 8. Handoff

| Role | Packet |
|------|--------|
| SA | Live journal-lines · Mobile.Bff · DOMAIN-MAP row · **cấm ERP.*** |
| TL/Dev | Edit `JournalFormPage` + `JournalListPage` · roleCaps · no new route |
| QA | tuần đường ghi · QL_HAT/TK/NT no create · Pattern B · Leave |
| compact | `handoff/design-compact.md` |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:76d6d3e1ec6437552d8e12b1c18c3aa8a0fd16abdcc3ef54b3ebc783d062050e` · `rulesVersion=2026.09.27.1` · `updatedAt=2026-10-01T01:15:00.000Z` · `changeScope=edit_page` · `design_confirm=approve`
