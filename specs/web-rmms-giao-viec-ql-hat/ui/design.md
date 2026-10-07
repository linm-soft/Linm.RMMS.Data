# Design — web-rmms-giao-viec-ql-hat

| Field | Value |
|-------|-------|
| feature | `web-rmms-giao-viec-ql-hat` |
| title | Giao việc chỉ QL_HAT |
| this role | `design` · `/agent-design` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_772e5a0b`) |
| changeScope | `edit_page` · **cấm** `new_page` · **cấm** invent product route |
| packKind | **`list`** (PO) · UI = phone list+detail+form · **≠** Kind B desktop |
| lane | `web` |
| stack | `web_mfe_phone` · `Linm.Web.RMMS.Mobile` · `max-width: 430px` |
| formPattern | Mobile full · DES-MOB-INC-DETAIL · phone 430 · Android 1-1 · LeaveConfirmModal · **N/A** ERP Modal/Slideout |
| DES-GRID / LinErpListFilterBar | **N/A** — phone · **cấm** clone Kind B |
| Report AC / DES-RPT | **N/A** |
| shared_grid_example | **N/A** (phone) |
| real_view_parity | **v1** |
| peerStdUrl | `http://localhost:9301/web-rmms-giao-viec-ql-hat` |
| mfeStdUrl | `http://localhost:9301/web-rmms-giao-viec-ql-hat` |
| mfeStdRoute | `/web-rmms-giao-viec-ql-hat` (alias only · **cấm** product slug) |
| productRoute | `/van-de` · `/van-de/:id` · `/tuan-duong/lich-su` · `/tuan-duong/:sessionId` · `/cong-viec?incidentId=` / `?reportId=` + `mode=assign` · `/cong-viec` track |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-giao-viec-ql-hat/ui/prototype/index.html` |
| demo | **N/A** · hash skip · **cấm** re-scan (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · Incident + Maintenance (+ Patrol · Integration · Auth) · **cấm ERP.*** |
| bff | `Linm.RMMS.Mobile.Bff` · `:5202` · `mobile-bff/api/v1` · **cấm** web-bff client |
| controlHint | `specs/_data-analy/features/web-rmms-giao-viec-ql-hat-control-hint.md` |
| realData | `specs/_data-analy/features/web-rmms-giao-viec-ql-hat-real-data.md` · §A+§B PASS |
| prior | PO `confirmed` · `handoff/po-compact.md` · contentHash `sha256:96af983c06df39ae72f23cd8bca1d51b7851c175d5d43f1a62d1fea87673ecb7` |
| autoApprove | **ON** |
| e2eQa | ON queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở Design |
| `devSlash` | `/agent-dev` |
| updatedAt | `2026-10-01T03:30:00.000Z` |
| taskId | `task_772e5a0b` |
| skillId | `agent-design` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.27.1` |
| versionGate | `ok` |
| contentHash | `sha256:96af983c06df39ae72f23cd8bca1d51b7851c175d5d43f1a62d1fea87673ecb7` |

**Cấm:** Dev/BE trước confirm (đã autoApprove) · ERP.* · invent `giao-viec/*` controller · invent product route `/web-rmms-giao-viec-ql-hat` · suy giao từ `MANAGER-RMMS` · SLA 24h default · tiền Mục IV · Excel · Hoàn thành/Đóng hộ từ form giao · GPS bắt buộc trên GV-F · Kind B DES-GRID · `LinErpListFilterBar` · hardcode VN labels (wire `useFormOptions`) · native `alert`/`confirm` · re-scan demo · `yarn build` / e2e / start:std · iOS/Android native · web-bff.

## 0. Context / Demo

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/web-rmms-giao-viec-ql-hat.md` | edit_page · QL_HAT |
| PLAN | `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` § enqueue #8 · bảng hạn Phụ lục IV | hangMuc→due |
| DEM | — | **N/A** · hash skip |
| DA-01 / DA-02 | `_data-analy/features/web-rmms-giao-viec-ql-hat-{control-hint,real-data}.md` | inventory + §B |
| PO | `po/requirement.md` · `handoff/po-compact.md` | PO-DEC-01..05 |
| peer | `web-rmms-cam-incident` · `web-rmms-work` · `web-rmms-role-gate` · `web-rmms-estimate` | CTA · WO · caps · peer form |
| tokens | `docs/mobile-tokens.json` | primary `#0C84C0` |

## 1. Pattern & shell

| | |
|--|--|
| Frame | Phone **430px** · content-only · tokens primary `#0C84C0` · label **13** · field **≥16** · control **44** |
| Shell | App topbar (back · title key) · **không** ERP `LinPageLayout` · **không** me tab |
| Lists | GV-L-* CardList · filter route/type/status/severity · **cấm** creator filter |
| Detail | GV-D-* RO stamp · CTA «Giao việc xử lý» gated `roleCaps.qlHat` |
| Form | GV-F — sourceStamp RO → assignee · team · hangMuc · dueAt hint · note → footer Giao in-flow |
| Leave | **LeaveConfirmModal** (`DES-LEAVE`) · dirty discard · **cấm** native dialog |
| GPS | **N/A** bắt buộc trên GV-F · map link chỉ GV-D (peer GIS) |
| Out | Excel · Mục IV money · complete-from-here · invent route |

## 2. Screens / zones

| Zone | Route (shipped) | Surface | Wire |
|------|-----------------|---------|------|
| **GV-00** | phone frame | Layout ≤430 | Android 1-1 · no me · no GPS require |
| **GV-L-INC** | `/van-de` | List mọi sự cố (QL_HAT) | GET incidents · filters · assign icon · **no** creator |
| **GV-L-RPT** | `/tuan-duong/lich-su` | List báo cáo ca | patrol history · same unscoped · assign CTA |
| **GV-D-INC** | `/van-de/:id` | Detail RO | GET incident · CTA assign · map link · **cấm** đóng hộ |
| **GV-D-RPT** | `/tuan-duong/:sessionId` | Báo cáo ca detail shipped | CTA assign · **cấm** invent path |
| **GV-F** | `/cong-viec?incidentId=` / `?reportId=` + `mode=assign` | Form giao full | POST WO (+ assign) · hangMuc→due |
| **GV-W** | `/cong-viec` | Peer track list | after submit · **cấm** complete từ đây |
| **DES-LEAVE** | overlay | Modal | dirty leave GV-F |
| **TOAST** | overlay | Toast | ok/fail · deny · **cấm** `window.alert` |
| **roleGateBanner** | GV-* | Banner | non-qlHat · no-assign hint |

### IA

```
(auth · roleCaps) → GV-L-INC (/van-de) | GV-L-RPT (/tuan-duong/lich-su)
  → GV-D-INC | GV-D-RPT
      → assignCta (qlHat only) → GV-F (/cong-viec?…&mode=assign)
          → submit → toast → GV-W (/cong-viec)
          → cancel dirty → DES-LEAVE
      → non-qlHat tap → TOAST deny · CTA hidden
  → std alias /web-rmms-giao-viec-ql-hat → deep-link peer /van-de or /cong-viec?mode=assign
```

### UNCLEAR-GV-RPT-ROUTE (Design chốt · PO-DEC-03)

| | |
|--|--|
| List | `/tuan-duong/lich-su` (`HistoryPage`) — **giữ** |
| Detail | `/tuan-duong/:sessionId` (`PatrolDetailPage`) — **giữ** · **cấm** invent `/bao-cao-ca/*` |
| Assign entry | `paths` edit: `/cong-viec?reportId={sessionId}&mode=assign` · song song incident `?incidentId=&mode=assign` |
| Peer current | `paths.workFor(id)` → `/cong-viec?incidentId=` — Dev **edit** thêm `mode=assign` mở GV-F (không invent slug) |

### UNCLEAR-GV-HANGMUC-CAT (Design map · PO-DEC-01)

Client static catalog PLAN-3-VAI Phụ lục IV (MVP). Label via `useFormOptions` / LOOKUP keys — prototype hiện VN.

| value | dueHint (default days) | note |
|-------|------------------------|------|
| `va-o-ga` | **3** | cấp I–II; user editable · cấp III–VI có thể sửa tay → 5 |
| `nut` | **7** | mùa mưa default; khô → user sửa 14 |
| `lun-lom` | **10** | không tự trừ ngày mưa |
| `ve-sinh` | **7** | nguy hiểm → user sửa về gần (giờ) |
| `nuoc-dong` | **1** | ≤24h → DueAt +1d · **không** set `SlaHours=24` |
| `bien-bao` | **1** | biển còn lại → user sửa 3 |
| `vach-son` | **28** | |
| `ton-tai-nt` | **5** | từ văn bản yêu cầu |

On change hangMuc → set dueAt = now + dueHint · **editable** · **cấm** tiền Mục IV.

### UNCLEAR-GV-SLA-MAP → SA (PO-DEC-02)

Design: bind UI `DueAt` absolute only · **không** default `SlaHours=24` · SA map null|derive từ DueAt.

## 3. Field inventory (Control = controlHint)

| uiField | screen | controlHint | Required | Bind / notes |
|---------|--------|-------------|----------|--------------|
| listFilters.route/type/status/severity | GV-L-* | Select/Chip | — | peer · **cấm** creator |
| incidentCards / reportCards | GV-L-* | CardList | — | GET unscoped QL_HAT |
| detail.code/status/severity | GV-D-* | Text/Badge RO | — | stamp |
| detail.fields | GV-D-* | Text RO | — | loại · vị trí · GPS RO · **cấm** sửa/xóa |
| assignCta | GV-D-* / row | Button gated | — | «Giao việc xử lý» · **chỉ** `qlHat` |
| mapLink | GV-D-INC | Button secondary | — | peer GIS · không Đóng hộ |
| sourceStamp | GV-F | Text RO | * | incidentId / reportId |
| assignee | GV-F | SearchInput | * | Integration users · Mobile.Bff |
| team | GV-F | SearchInput | — | partner/org bảo dưỡng |
| hangMuc | GV-F | Dropdown | * | static TT41 table §2 · trigger due |
| dueAt | GV-F | DateTime | * | TT41 hint · editable · **cấm** SlaHours=24 |
| routeChainage | GV-F | RouteChainage span | * cột KM đầu | GET nguồn: sự cố `kmStart`/`kmEnd`, ca `fromKm`/`toKm` · điền sẵn · `remember` tắt |
| note | GV-F | TextArea | — | → Description |
| submitAssign | GV-F | Button primary | — | POST WO (+ assign) · busy lock |
| roleCaps.qlHat | all | Hidden | — | role-gate · **cấm** MANAGER→giao |
| afterNav | GV-W | Nav | — | `/cong-viec` track only |
| leaveConfirm | DES-LEAVE | Dialog | — | dirty GV-F |
| toast.ok/fail/deny | TOAST | Toast | — | **cấm** alert |

**Labels:** `useFormOptions()` / feature keys — prototype VN để review; Dev wire key.

**FormMode↔API**

| Mode | API |
|------|-----|
| list-inc | `GET incident/incidents` |
| list-rpt | patrol history cite |
| detail-inc | `GET incident/incidents/{id}` |
| detail-rpt | patrol session cite |
| users/team | Integration users / partners (Mobile.Bff) |
| profile | `GET auth/profile` · roleCaps |
| submit | `POST maintenance/work-orders` · optional `POST incident/…/assign` |

App base `{BffBase}/mobile-bff/api/v1`. **Cấm** invent `giao-viec/*`.

## 4. Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/index.html` |
| Zones | GV-L-INC · GV-L-RPT · GV-D-INC · GV-D-RPT · GV-F · GV-W · DES-LEAVE · TOAST · role deny |
| Modes | `?screen=list-inc\|list-rpt\|detail-inc\|detail-rpt\|form\|work` · `?role=qlhat\|other` · `?leave=1` · `?deny=1` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-giao-viec-ql-hat/ui/prototype/index.html` |
| Peer std | `http://localhost:9301/web-rmms-giao-viec-ql-hat` |
| Parity | **v1** phone · CTA gate · hangMuc→due · no creator filter · no 24h SLA badge |

## 5. A–D / DES-RPT

| Check | Result |
|-------|--------|
| A Control = controlHint | **PASS** — §3 = DA controlHint |
| B real-data §A+§B | **PASS** — Live incidents · WO · users · profile |
| C Form / list AC | **PASS** — zones + role matrix + due editable |
| D Grid / DES-GRID / filter-bar | **N/A** phone |
| DES-RPT | **N/A** |

## 6. kit_missing / parity

| | |
|--|--|
| kit_missing_confirm | **N/A** — phone · không ERP Kind D kit gap |
| real_view_parity | **v1** |
| shared_grid_example | **N/A** |

## 7. Handoff

| Role | Packet |
|------|--------|
| SA | GAP-GV-DM-01 DOMAIN-MAP row · UNCLEAR-GV-SLA-MAP DueAt↔SlaHours · confirm reportId bind · hangMuc cite |
| TL/Dev | edit CTA gate + GV-F fields + list unscoped · **cấm** new route · wire TT41 static |
| QA | matrix qlHat · due hint editable · no creator · no 24h · deny non-qlHat |
| next | `/agent-sa` · roleOnly stop (**GAP-PKT-ROLE-01**) |

**DoR Design:** design.md + prototype + reviewUrl · A–D PASS · compact · STATUS step 2.1 confirmed · design_confirm approve.
