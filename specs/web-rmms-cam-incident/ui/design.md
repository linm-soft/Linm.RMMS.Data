# Design — web-rmms-cam-incident

| Field | Value |
|-------|-------|
| feature | `web-rmms-cam-incident` |
| title | Camera sự cố theo vai |
| this role | `design` · `/agent-design` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_3b488130`) |
| changeScope | `edit_page` · keep sheet/list/create/detail · **§ Delta role-gate + Giao việc CTA** · **cấm** `new_page` · **cấm** route mới |
| packKind | **`list`** · UI = **phone Field** · **≠** Kind B desktop |
| lane | `web` |
| stack | `web_mfe_phone` · `Linm.Web.RMMS.Mobile` · `max-width: 430px` |
| formPattern | **Sheet** INC-CAP · **Full** INC-N/D/L · **không** ERP Modal/Slideout Kind B |
| DES-GRID / LinErpListFilterBar | **N/A** — phone · **cấm** clone · WAIVE |
| Report AC / DES-RPT | **N/A** |
| shared_grid_example | **N/A** (phone) |
| real_view_parity | **v1** |
| peerStd deep-link | `/van-de` · `/van-de/moi` · `/van-de/:id` |
| mfeStdUrl | `http://localhost:9301/web-rmms-cam-incident` (**alias only** · **cấm** invent product slug) |
| mfeStdRoute | product `/van-de` · `/van-de/moi` · `/van-de/:id` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-incident/ui/prototype/index.html` |
| demo | **N/A** · hash skip · **cấm** re-scan (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · Incident (+ Patrol · Integration · FileService · Auth · Maintenance peer) · **cấm ERP.*** |
| bff | `Linm.RMMS.Mobile.Bff` · `:5202` · `mobile-bff/api/v1` · **cấm** web-bff |
| controlHint | `specs/_data-analy/features/web-rmms-cam-incident-control-hint.md` |
| realData | `specs/_data-analy/features/web-rmms-cam-incident-real-data.md` · §A+§B PASS |
| deltaCite | `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` § enqueue #4 |
| prior | PO `confirmed` · `handoff/po-compact.md` · contentHash `sha256:e515f74ca821b652154473ac30eaec7bb13c8921acf6725b739dc4eb1744b8d1` |
| autoApprove | **ON** |
| e2eQa | ON queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở Design |
| `devSlash` | `/agent-dev` |
| updatedAt | `2026-10-01T01:45:00.000Z` |
| taskId | `task_3b488130` |
| skillId | `agent-design` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.27.1` |
| versionGate | `ok` |
| contentHash | `sha256:e515f74ca821b652154473ac30eaec7bb13c8921acf6725b739dc4eb1744b8d1` |

**Cấm:** Dev/BE trước confirm (đã autoApprove) · ERP.* · iOS/Android native · Kind B DES-GRID · `LinErpListFilterBar` · invent `CamIncident*` · invent product route `/web-rmms-cam-incident` · fake GPS · Giao việc ngoài `QL_HAT` · SLA 24h · Mục IV tiền · Excel · web-bff · form giao fields (peer `web-rmms-giao-viec-ql-hat`) · native `alert`/`confirm` · re-scan demo · `yarn build` / e2e / start:std ở role này · **cấm** khóa Create/Lưu trước bấm (Pattern B).

## 0. Context / Demo

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/web-rmms-cam-incident.md` | feature_context |
| DELTA | `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` | enqueue #4 · role matrix · Giao việc QL_HAT |
| DEM | — | **N/A** · hash skip |
| DA-01 / DA-02 | `_data-analy/features/web-rmms-cam-incident-{control-hint,real-data}.md` | inventory + §B |
| PO | `po/requirement.md` · `handoff/po-compact.md` | Screens · Pattern B · Leave · ẩn close QL_HAT |
| peer | `web-rmms-incident` Incident* Live | keep layout · edit role-gate + assign CTA |
| code | `IncidentCaptureSheet.tsx` · `IncidentCreatePage.tsx` · `IncidentDetailPage.tsx` · `IncidentListPage.tsx` · `paths.ts` | SSOT edit |
| tokens | `docs/mobile-tokens.json` | primary `#0C84C0` · 430px |

## 0b. § Delta Current vs New (edit_page HARD)

| Area | Current (shipped peer) | New (Design chốt) |
|------|------------------------|-------------------|
| changeScope | incident Live peer | `edit_page` · **cấm** `new_page` · **cấm** route mới |
| INC-CAP / INC-N write | mọi user mở create/capture đều POST | chỉ **tuần đường** · TK/NT **không tạo** · QL_HAT **không** capture/create |
| INC-L scope | list chưa lọc theo vai | tuần đường: **mình** · **QL_HAT: mọi** · TK/NT: xem RO |
| INC-L FAB | FAB tạo hiện chung | chỉ tuần đường · **ẩn** QL_HAT/TK/NT |
| INC-D CTA | chat · estimate · Đóng · **thiếu** Giao việc | nút **Giao việc xử lý** chỉ `QL_HAT` · nav `paths.workFor(id)` |
| INC-L assign | thiếu | icon/button **Giao việc** chỉ QL_HAT · `paths.workFor` |
| Đóng sự cố | hiện mọi user mở detail | **ẩn** close với QL_HAT/TK/NT · tuần đường giữ close peer (**PO chốt**) |
| RouteCapture | purpose photo-geo · sheet | tuần đường write · detail `mode=view` mọi vai |
| GPS Create/Lưu | Pattern B (peer) | **KEEP** · banner on Create/Lưu · `disabled={creating\|saving}` only · **cấm** fake |
| Leave dirty INC-CAP/N | LeaveConfirmModal | **KEEP** · **cấm** native dialog |
| Form giao đầy đủ | N/A trên slug | **peer** `web-rmms-giao-viec-ql-hat` · slug này = **CTA + scope only** |
| Align | phone 430 | `/align-mobile-to-mfe` · **cấm** tab/route/icon mới |
| Grid / filter | N/A phone Search+Chip | **KEEP WAIVE** |

## 1. Pattern & shell

| | |
|--|--|
| Frame | Phone **430px** · content-only · tokens primary `#0C84C0` · label **13** · field **≥16** · hit **≥44** |
| Shell | App topbar (title · back) · **không** ERP `LinPageLayout` chrome |
| Sheet | INC-CAP — capture sheet · footer Hủy + Lưu (**Pattern B**) |
| Full | INC-N create · INC-D detail · INC-L list |
| Leave | **LeaveConfirmModal** (`DES-LEAVE`) · dirty INC-CAP/N · **cấm** native dialog |
| Out | invent CamIncident* · Excel · invent product slug · form giao fields · SLA/tiền |

## 2. Screens / zones

| Zone | Route | Surface | Wire |
|------|-------|---------|------|
| **INC-L** | `/van-de` | Full list | Search+Chip · cards · FAB (tuần đường) · assign CTA (QL_HAT) |
| **INC-N** | `/van-de/moi` | Full form | Pattern B Create · asset/session/GPS banners · POST tuần đường |
| **INC-CAP** | sheet trên `/van-de/moi` | Sheet | RouteCapture · Hủy/Lưu · tuần đường write |
| **INC-D** | `/van-de/:id` | Full RO | photos view · **Giao việc xử lý** (QL_HAT) · close (tuần đường) · peer chat/est |
| **DES-LEAVE** | overlay | Modal | dirty leave INC-CAP/N · Ở lại / Rời |
| **roleGateBanner** | INC-* | Banner | view-only / no-assign / no-create hint |

### IA

```
/van-de (INC-L)
  · tuần đường → FAB → /van-de/moi (INC-N) → sheet INC-CAP → POST → INC-D
  · QL_HAT → mọi cards · Giao việc → paths.workFor(id) (peer form)
  · TK/NT → list RO · mở INC-D RO · ẩn FAB · ẩn Giao việc · ẩn close
```

### Role visibility (HARD)

| Vai | INC-CAP/N | INC-L | INC-D | Giao việc | Close |
|-----|-----------|-------|-------|-----------|-------|
| Tuần đường | write + capture · Create/Lưu Pattern B | list mình · FAB | xem · close peer | **no** | **yes** (peer) |
| `QL_HAT` (`HAT-TRUONG`/`HAT-PHO`) | **no** create/capture | **mọi** · no FAB | xem + **Giao việc xử lý** | **yes** | **ẩn** |
| Tuần kiểm | **no** | xem RO | xem · **no** giao | **no** | **ẩn** |
| Nghiệm thu | **no** | xem RO | xem · **no** giao | **no** | **ẩn** |

**Cấm** suy `QL_HAT` từ `MANAGER-RMMS`. Caps cite `web-rmms-role-gate` (UNCLEAR-INC-ROLE-SOURCE → SA/Dev).

## 3. Field inventory (Control = controlHint)

| uiField | screen | controlHint | Required | Bind / notes |
|---------|--------|-------------|----------|--------------|
| screenTitle | INC-N/D/L | Text | — | «Ghi sự cố» / «Chi tiết sự cố» / «Vấn đề» |
| back / cancel | INC-* | Button/Nav | — | leaveConfirm khi dirty (N/CAP) |
| bannerErrors | INC-N | Banner | — | asset · session · GPS · Pattern B |
| assetType | INC-N | Select/Pick | — | integration asset-types |
| sessionStamp | INC-N | Text RO | — | patrol sessions |
| title | INC-N | TextInput | * | required |
| incidentType | INC-N | Select | — | LOOKUP_STATIC |
| severity | INC-N/D | Select/Badge | — | severities |
| routeName / km | INC-N/D | Text RO / stamp | — | session + capture |
| description | INC-N | TextArea | — | optional + pin sidecar |
| photos / capture | INC-CAP/N | RouteCaptureControl | * write | tuần đường write · detail view |
| saveCapture | INC-CAP | Button | * | Hủy / Lưu · `disabled={saving}` only |
| createSubmit | INC-N | Button primary | * | Pattern B · tuần đường · `disabled={creating}` only |
| listFilters | INC-L | Search+Select | — | search · status · severity |
| incidentCards | INC-L | List | — | GET · scope by role · open → INC-D |
| fabCreate | INC-L | FAB | — | chỉ tuần đường · **ẩn** khác |
| assignCtaList | INC-L | Button/Icon | — | **Giao việc** chỉ QL_HAT · `paths.workFor` |
| detailCode/status | INC-D | Text/Badge | — | RO |
| detailFields | INC-D | Text RO | — | type · route · km · severity · gps · reporter · time · desc |
| detailPhotos | INC-D | RouteCapture view | — | mode=view |
| peerChat / peerEst | INC-D | Button | — | nav peer · giữ |
| assignCtaDetail | INC-D | Button primary | — | **Giao việc xử lý** · **chỉ** QL_HAT |
| closeNote / closeBtn | INC-D | TextArea+Button | — | peer close · **ẩn** QL_HAT/TK/NT |
| roleGateBanner | INC-*/CAP | Banner | — | view-only / no-assign / no-create |
| roleCaps | all | Hidden | * | cite role-gate · gate UI |

**Labels:** `useFormOptions('web-rmms-incident')` / INCIDENT_LOOKUP_STATIC — prototype hiện nhãn VN review; Dev wire key.

## 4. Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/index.html` |
| Zones | INC-L tuần đường · INC-L QL_HAT · INC-L TK · INC-N write · INC-N Pattern B · INC-CAP · INC-D QL_HAT · INC-D tuần đường · DES-LEAVE · roleGateBanner |
| Form | Sheet INC-CAP Pattern B · Full INC-N/D/L · LeaveConfirmModal |
| Grid/filter desktop | **N/A** |
| SSOT | control-hint · real-data §B · mobile-tokens · **cấm** shared-grid desktop · **cấm** re-scan demo |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-incident/ui/prototype/index.html` |
| **modes** | `?screen=list\|create\|capture\|detail` · `?role=tuan\|qlhat\|tk\|nt` · `?gps=deny` · `?leave=1` |
| **peerStd deep-link** | `/van-de/moi` |
| **real_view_parity** | `v1` |

### Wire

```
INC-L tuần đường: topbar Vấn đề · Search+Chip · cards own · FAB + · ẩn Giao việc
INC-L QL_HAT: mọi cards · ẩn FAB · mỗi card icon Giao việc · banner scope
INC-L TK/NT: cards RO · ẩn FAB · ẩn Giao việc · roleGateBanner
INC-N write: form · Pattern B Create always-on (except creating) · asset/session stamps
INC-N Pattern B: Create + GPS deny → banner · cấm khóa nút trước
INC-CAP: sheet RouteCapture · Hủy|Lưu · Pattern B
INC-D QL_HAT: RO fields · photos view · primary Giao việc xử lý · ẩn close
INC-D tuần đường: RO · close peer · ẩn Giao việc
DES-LEAVE: dirty → Modal Ở lại / Rời
```

## 5. API map (cite real-data §B — **không đổi** paths)

| Action | API |
|--------|-----|
| List | `GET …/incident/incidents` · scope by role |
| Create | `POST …/incident/incidents` · tuần đường only |
| Detail | `GET …/incident/incidents/{id}` |
| Close | `POST …/incident/incidents/{id}/close` · tuần đường peer · ẩn QL_HAT |
| Sessions | `GET …/patrol/sessions` |
| Asset types | `GET …/integration/asset-types` |
| Photos | FileService / AiVision via RouteCapture · cite |
| Assign nav | `paths.workFor(id)` → peer giao · **không** invent assign DTO |
| Role caps | auth profile · cite `web-rmms-role-gate` |

App base: `{BffBase}/mobile-bff/api/v1`. **Cấm** invent `cam-incident/*` · **cấm** web-bff · **cấm** ERP.*.

## 6. UNCLEAR (handoff SA)

| id | Design chốt | SA |
|----|-------------|-----|
| UNCLEAR-INC-DOMAIN-ROW | keep Live incidents · không invent controller | add DOMAIN-MAP slug `web-rmms-cam-incident` hoặc bind peer `web-rmms-incident` |
| UNCLEAR-INC-ROLE-SOURCE | UI gate theo caps · cấm suy MANAGER-RMMS | confirm packageCode/roleCaps từ role-gate |
| UNCLEAR-INC-LIST-FILTER | UI: tuần đường own · QL_HAT unscoped | confirm query param vs client filter |
| UNCLEAR-INC-CLOSE-VS-ASSIGN | **PO+Design:** ẩn close QL_HAT/TK/NT · tuần đường giữ | implement policy BE nếu cần |
| GAP-DA-INC-STD-ALIAS | mfeStdUrl = alias only · deep-link `/van-de/...` | keep · **cấm** product slug mới |

## 7. design_confirm

| | |
|--|--|
| autoApprove | ON → **approve** |
| reviewUrl | prototype path above |
| handoff | SA · zone ids INC-CAP/N/D/L · control-map · Pattern B · role visibility · assign CTA · ẩn close QL_HAT · real_view_parity v1 |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:e515f74ca821b652154473ac30eaec7bb13c8921acf6725b739dc4eb1744b8d1` · `rulesVersion=2026.09.27.1` · `updatedAt=2026-10-01T01:45:00.000Z`
