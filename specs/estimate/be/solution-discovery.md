# SA — Solution — estimate (mobile sheet → screen · Giao việc xử lý)

| Field | Value |
|-------|-------|
| feature | `estimate` |
| title | [Mobile] [Công việc] -> Giao việc xử lý |
| this role | `sa` · `/agent-sa-mobile` |
| status | `confirmed` |
| solution_confirm | **approve** (`autoApprove=ON` · `task_9f669577`) |
| changeScope | `edit_page` |
| packKind | **`sheet`** (PO + Design chốt · GAP-MOB-EST-PACK-01 **closed** · surface = **full screen** `#sc-estimate` · **cấm** bottom-sheet) |
| stack | `native_dual` |
| Feature Kind | **sheet→screen** · `DES-MOB-EST` · **cấm** Kind B list / Kind D multi-line web / Lin* / Config / Report |
| thisAction | **Giao việc xử lý** `#sc-estimate` only · entry mnt-list hub/card + incident CTA · **cấm** gộp `mnt-chat` / `mnt-progress` / `mnt-log` / web Kind B+D |
| domain | **AiVision** estimates + **Maintenance** work-orders + **Incident** assign · **cấm** invent `api/v1/estimate` / `api/v1/ai-estimate/*` |
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` |
| prior · design | **confirmed** · `ui/design.md` · `ui/ux-analy.md` · `ui/html-to-native-map.md` · dual `#sc-estimate` · `ui/review/demo-parity.md` · `task_c0fb308d` · `design_confirm=approve` |
| prior · po | **confirmed** · `po/requirement.md` · `task_5338c2be` |
| prior · data_analy | **confirmed** · `_data-analy/estimate-*.md` · contentHash `sha256:estimate-mobile-control-hint-20260829` · realDataHash `sha256:estimate-mobile-real-data-20260829` · bffContentHash `sha256:estimate-mobile-bff-20260829` · actionTreeHash `sha256:estimate-mobile-action-tree-20260829` |
| priorWeb | **giữ** · `be/solution-discovery-web.md` (Kind B+D · **OUT** mobile P1) |
| autoApprove | **ON** |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** `yarn start:std` / `mfeStdUrl` / e2e ở role SA |
| versionGate | `rechecked` |
| requestSource | run packet `task_9f669577` · `/agent-qldb-workflow-mobile` · roleOnly=`sa` · `/agent-sa-mobile` |
| taskId | `task_9f669577` |
| confirmedBy | agent autoApprove · `task_9f669577` |
| updatedAt | `2026-08-29T04:36:00.000Z` |

**Cấm:** invent `api/v1/estimate` / `ai-estimate/*` · invent `EstimateController` trên Mobile.Bff · fork DTO · clone domain controller · app `:5101` · ERP.* · `mfeStdUrl` / `yarn start:std` · system `UIAlert` / `AlertDialog` · watermark Gói · device label · badge P1/P2 header · fake CV / fake 200 khi POST fail · Write MFE/native ở role SA · chạy Step 4b / migration / e2e / yarn build ở role này · gộp sibling (`GAP-MOB-ACT-01/02/07`) · re-scan demo (`hash skip`) · WorkType string ngoài live enum.

Standards: api-endpoint · bff-api-structure · company-field · no-parent-json-field · sa-implement-gates · ios networking · android api-client · offline-sync · PrivacyInfo / Play Data safety (`GAP-SA-STORE-01`).

---

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` |
| Domain | AiVision `AiVisionEstimatesController` · Maintenance `WorkOrdersController` · Incident `IncidentsController.Assign` (+ GetById prefill) |
| API downstream | `api/v1/ai-vision/estimates` · `api/v1/maintenance/work-orders` · `api/v1/incident/incidents/{id}` · `…/assign` |
| BFF mobile | `Linm.RMMS.Mobile.Bff` · `MobileApiProxyController` catch-all → `ApiBase` |
| App | iOS + Android · base `{BffBase}/mobile-bff/api/v1` · **cấm** URLSession/OkHttp trong View |
| Persist BE | **reuse** EstimateAudit + EstimateLine + WorkOrder + Incident — **không** bảng mới · **không** `/database-migration` · **không** `/new-endpoint` |
| Out of pack | web Kind B list · Kind D multi-line · from-defects · Config schema · auto WO event `estimate.created` · staff lookup · SLA policy API · offline draft queue · mnt-chat/progress/log |

### Route decision

| | Choice |
|--|--------|
| Slug | `estimate` → **sheet→screen** · owner `DES-MOB-EST` · `#sc-estimate` |
| App prefix | `mobile-bff/api/v1` |
| App path P1 read | optional `GET incident/incidents/{id}` · `GET ai-vision/estimates/{id}` · optional `GET …/init-data` (estimates + WO) |
| App path P1 seed | `POST ai-vision/estimates/from-incident/{incidentId}` |
| App path P1 write lines | `PUT ai-vision/estimates/{id}` · map mobile 1 row → `Lines[0]` |
| App path P1 draft | `POST ai-vision/estimates/{id}/draft` |
| App path P1 assign WO | `POST maintenance/work-orders` (**primary**) · optional `POST …/confirm` · optional `POST incident/incidents/{id}/assign` |
| Downstream | existing controllers · **không** dedicated invent EstimateController trên Mobile.Bff |
| GPS / camera / push | **n/a** pack này |
| Step 4b | **N/A** — schema estimates + work-orders **Signed** · **cấm** SA chạy `/new-endpoint` / `/database-migration` |
| Rationale | Live AiVision + Maintenance + Incident đủ Giao việc P1 · **cấm** invent path |

---

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| BFF HTTP | `MobileApiProxyController` catch-all | **cấm** EstimateController local trên BFF |
| BE HTTP | `AiVisionEstimatesController` · `WorkOrdersController` · `IncidentsController` | live paths cited · **cấm** legacy `ai-estimate` |
| Estimate DTO | `EstimateDto` · `EstimateLineDto` · `UpdateEstimateRequest` · `UpdateEstimateLineRequest` | **không** fork app-only |
| WO DTO | `CreateWorkOrderRequest` · `WorkOrderDto` | Status=`new` · WorkType=`repair` (live AllowedWorkTypes) |
| Assign DTO | `AssignIncidentRequest` | `AssigneeName` · optional `Note` |
| HTTP app | EstimateRepository + WorkOrderRepository + IncidentRepository (reuse mnt-list / incident) | **cấm** raw HTTP trong View · **cấm** VM→ApiClient |
| Offline | **no queue P1** · screen **mở** · draft online only | offline queue **DEFER** · **cấm** invent path |
| Token | Keychain / EncryptedSharedPreferences | Bearer + `X-Company-Id` + `X-Timezone` |
| Kit | `LinmTopBar` · `LinmListRow` · `LinmTextField` · `LinmPrimaryButton` · `LinmSecondaryButton` · `LinmToast` · Tab shell | Design `kit_missing_confirm` **N/A** |
| Persist | no-parent-json-field | lines = `EstimateLineEntity` rows · **cấm** parent `*LinesJson` |
| Tabs | Shell Tab 5 **giữ** · pack `tabs: none` · tab **`work`** khi entry mnt-list | **cấm** invent (`GAP-TAB-01`) |

---

## BFF / API contract (live audit 2026-08-29)

| Action | App path | BFF | Downstream | Live |
|--------|----------|-----|------------|------|
| Prefill header SC | `GET incident/incidents/{id}` | proxy | `IncidentsController.GetById` | **PASS** · optional nếu nav payload đủ |
| Seed / mở ước lượng | `POST ai-vision/estimates/from-incident/{incidentId}` | proxy | `FromIncident` | **PASS** |
| Init catalogs (opt) | `GET ai-vision/estimates/init-data` | proxy | `GetInitData` | **PASS** · optional P1 |
| Get draft | `GET ai-vision/estimates/{id}` | proxy | `GetById` | **PASS** · resume |
| Update qty/giá | `PUT ai-vision/estimates/{id}` | proxy | `Update` · `UpdateEstimateRequest.Lines` | **PASS** · `Lines[0]` |
| Lưu nháp | `POST ai-vision/estimates/{id}/draft` | proxy | `SaveDraft` | **PASS** · secondary |
| Confirm (opt chain) | `POST ai-vision/estimates/{id}/confirm` | proxy | `Confirm` | **PASS** · optional với Giao việc |
| Giao việc → tạo CV | `POST maintenance/work-orders` | proxy | `WorkOrdersController.Create` | **PASS** · **primary** |
| WO init (WorkType) | `GET maintenance/work-orders/init-data` | proxy | init-data | **PASS** · default **`repair`** |
| Gán người trên SC | `POST incident/incidents/{id}/assign` | proxy | `Assign` | **PASS** · optional sync |
| Qty / giá / assignee / SLA UI | — | — | local derived | **N/A** API |
| Nav back / toast | — | — | local UI | **N/A** API |
| Invent estimate / ai-estimate | — | — | — | **cấm invent** |

### CreateWorkOrderRequest (P1 · live validate)

| Field | Required | Mobile P1 bind |
|-------|----------|----------------|
| `RouteName` | **yes** | SC / estimate `RouteSection` |
| `WorkType` | **yes** | live AllowedWorkTypes: **`repair`** \| `inspect` \| `emergency` · P1 default **`repair`** (Label «Sửa chữa») — **không** `sua-chua` |
| `Status` | **yes** | **`new`** |
| `DueAt` | **yes** | field «Hạn xử lý» (now + slaHours · UTC wire) |
| `SlaHours` | opt | field «Thời hạn xử lý (giờ)» = **24** |
| `AssigneeName` | opt | «Giao cho *» (trim trước `·` hoặc full) |
| `TeamName` | opt | parse sau `·` nếu có |
| `IncidentId` | opt | SC id/code |
| `Title` | opt | defect / SC title |
| `Description` / `Note` | opt | qty · đơn giá · thành tiền text |

Response `WorkOrderDto.Code` → toast `Đã giao việc · {Code} · thời hạn {SlaHours} giờ`.

### Estimate lines (mobile 1 row · GAP-MOB-EST-SIMP-01)

| UI | → API |
|----|-------|
| qty | `Lines[0].Qty` (`UpdateEstimateLineRequest`) |
| unitPrice | `Lines[0].UnitPrice` |
| totalAmount | derived client · server `Lines[0].Amount` / `TotalAmount` OK |
| ItemCode / ItemName / Unit | từ seed `from-incident` / unitCatalog — **cấm** invent catalog API khác |
| fromIncident header | `IncidentId` · `DefectType` · `RouteSection` · GET incident Code/Title/Route |

### AssignIncidentRequest

| Field | Mobile P1 |
|-------|-----------|
| `AssigneeName` | same «Giao cho *» |
| `Note` | optional (qty/total) |

### Permissions (reuse · no new slug)

| Permission | Scope | Pack |
|------------|-------|------|
| `ai-vision.estimates.*` | seed / get / update / draft / confirm | **reuse** |
| `maintenance.work-orders.create` | POST WO | **reuse** |
| `incident.incidents.read` / assign | GET + assign | **reuse** |
| estimates list / from-defects / delete / WO progress | OUT | **cấm** gọi trên slug này |

**Cấm** thêm controller/permission trên Mobile.Bff.

---

## Implement gates (confirm)

| Gate | Decision | Endpoints / surfaces | Skill | Note |
|------|----------|----------------------|-------|------|
| TZ | **tz_required** | `DueAt` form derived → wire UTC · display VN local | `/review-timezone-implement` | header `X-Timezone` interceptor giữ |
| XCO | **xco_na** | current-company estimates / WO / incident | `/implement-view-cross-company` | no View catalog cross-company |
| SHARE | **share_tenant** | reuse Estimate + Line + WorkOrder + Incident tables **đã có** · **cấm** parent JSON · **cấm** invent bảng | `/implement-shared-table` | tenant_keep |
| Offline | **screen mở · no queue P1** | GET/seed fail → keep form + demo fallback rows · POST fail → toast err · **cấm** fake CV | offline-sync | draft offline **DEFER** · **cấm** invent path |
| GPS | **n/a** | — | — | không pin trên `#sc-estimate` |
| Camera | **n/a** | — | — | |
| Push | **n/a** | — | — | |
| Store | **N/A** new claim | no camera/location/signup trên pack | GAP-SA-STORE-01 | **cấm** `localhost` / LAN IP trong solution listing · family `1` · **cấm** iPad listing claim |
| Step 4b | **N/A** | endpoints + schema live Signed | — | **không** chạy ở role SA |

AskQuestion (autoApprove=ON · không chờ board): `be_repo_confirm`=`/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `sa_tz_gate=tz_required` · `sa_xco_gate=xco_na` · `sa_shared_table=share_tenant` · `kit_missing_confirm=N/A` · `solution_confirm=approve` · `2026-08-29T04:36:00.000Z`.

---

## Persist gate (no-parent-json-field)

| | |
|--|--|
| Parent JSON string inventory (BE) | **none** — lines = child `EstimateLineEntity` |
| Child tables this pack (BE) | **reuse** EstimateLine · WorkOrder · Incident — **không** invent |
| Client store | screen state · estimateId · incidentId · lines[0] · assignee · sla/due · busy |
| Migration | **không** · schema Signed |
| T-BE-API / T-BE-MIG | **n/a** — reuse live · **cấm** invent endpoint |

---

## Live vs delta (audit 2026-08-29 / `task_9f669577`)

| Surface | Live | SA chốt P1 |
|---------|------|------------|
| `POST …/ai-vision/estimates/from-incident/{id}` | live | **Giữ** · seed on open khi có incidentId |
| `GET/PUT …/estimates/{id}` · `…/draft` · `…/confirm` | live | **Giữ** · 1 row → `Lines[0]` |
| `POST …/maintenance/work-orders` | live | **Giữ** · primary Giao việc · WorkType=`repair` · Status=`new` |
| `POST …/incidents/{id}/assign` | live | **Optional** sync AssigneeName |
| `GET …/incidents/{id}` | live | Prefill header nếu nav thiếu |
| `api/v1/estimate` / `ai-estimate` / EstimateController BFF | **không** | **Cấm** tạo |
| Native `#sc-estimate` | **toast stub** mnt-list / incident CTA (iOS+Android) | **DELTA UI** ship screen dual · thay toast (`GAP-MOB-EST-NAV-01`) |
| Tab 5 shell | shipped · work | **Giữ** · `tabs: none` pack |
| Web Kind B+D | prior closed | **OUT** · `solution-discovery-web.md` **giữ** |

---

## Form data analysis (REQUIRED)

| Screen / FormMode | Fields (UI) | Source type | Entity |
|-------------------|-------------|-------------|--------|
| `#sc-estimate` | header SC + asset + assignee + qty/price/total + SLA/due + Giao việc / Lưu nháp | nav + GET incident + seed/PUT/draft estimate + POST WO (+ assign) | Estimate + Line + WorkOrder + Incident |
| Banner missing | thiếu incidentId | local | — |
| Toast OK / Draft / Err | feedback | after POST | — |

### Field map (ui → dto → store) — khớp control-hint + real-data §B

| uiField | Label VN | dtoField | Wire | Notes |
|---------|----------|----------|------|-------|
| screenTitle | Giao việc xử lý | — | local | `LinmTopBar` · **cấm** badge P1/P2 |
| navBack | Công việc | — | local | `go('mnt-list')` / pop parent · Android icon-only OK |
| fromIncident | Từ sự cố | Incident Code·Title·Route / Estimate IncidentId·DefectType·RouteSection | GET incident / nav | ListRow readonly |
| assetType | Loại tài sản | AssetLabel / incident | nav / GET | ListRow readonly · demo «Mặt đường» |
| assignee | Giao cho * | `AssigneeName` · opt `TeamName` | form → WO + assign | TextField * · free text P1 |
| qty | Khối lượng | `Lines[0].Qty` | PUT / draft | NumberField decimal |
| unitPrice | Đơn giá | `Lines[0].UnitPrice` | PUT / draft | MoneyField VND |
| totalAmount | Thành tiền | derived / `TotalAmount` / `Lines[0].Amount` | display | qty × unitPrice |
| slaHours | Thời hạn xử lý (giờ) | `CreateWorkOrderRequest.SlaHours` | local default **24** | readonly |
| dueAt | Hạn xử lý | `CreateWorkOrderRequest.DueAt` | local now+sla · UTC wire | readonly · TZ |
| btnAssign | Giao việc | CreateWorkOrder (+ opt confirm + assign) | POST work-orders | Primary · busy · **chặn** nếu !assignee / !incidentId |
| btnDraft | Lưu nháp | draft | POST `…/draft` | Secondary · online P1 |
| toastOk | Đã giao việc · CV-* · thời hạn … giờ | `WorkOrderDto.Code` | after POST WO 200 | `LinmToast` · **cấm** fake |
| toastDraft | Đã lưu nháp ước lượng | — | after draft 200 | `LinmToast` |
| toastErr | (lỗi mạng / validate) | — | local | **cấm** fake CV |
| bannerMissing | Thiếu sự cố — chặn Giao việc… | — | local | `?missing=1` |
| seed | (open) | EstimateDto | POST from-incident | resume GET by id OK |

**Demo fallback SSOT** (API fail): SC-2401 · Ổ gà · QL.1 Km 1556+040 · Mặt đường · Nguyễn Văn A · Tổ tuần đường · 12.5 · 850.000 · 10.625.000 · 24 · 19/08/2026 08:00 — **chỉ** display fallback · **cấm** fake toast CV khi POST fail.

---

## Navigation / action (this pack)

| Control | Behavior P1 | Owner slug |
|---------|-------------|------------|
| mnt-list hub / card `#i-sum` | push `#sc-estimate` (thay toast) | **owner** `estimate` · entry reuse `mnt-list` |
| incident-create / detail CTA | push `#sc-estimate` + incidentId | shared_action · reuse owner · **cấm** enqueue |
| Back | pop → mnt-list / incident parent | chrome |
| Fields assignee/qty/price | local + derived total/due | owner · **cấm** enqueue |
| Lưu nháp | POST draft · toast | owner · **cấm** enqueue |
| Giao việc | POST WO (+ opt assign/confirm) · toast CV-* · back mnt-list | owner · **cấm** enqueue |
| Tab 5 | shell giữ · **work** active | **cấm** invent |
| mnt-chat / progress / log | **không** ship | siblings OUT |

**Cấm** start sibling `pending_confirm` (`GAP-MOB-ACT-06`) · **cấm** enqueue Giao việc / Lưu nháp / fields (`GAP-MOB-ACT-07`).

---

## GAP chốt (SA)

| ID | Decision |
|----|----------|
| GAP-MOB-EST-NAV-01 | **must Dev** · toast → push `#sc-estimate` |
| GAP-MOB-EST-SCR-01 | Ship dual screen Design |
| GAP-MOB-EST-HDR-01 | Card Từ sự cố + Loại TS readonly |
| GAP-MOB-EST-ASSIGN-01 / ASSIGNEE-01 | Free text → `AssigneeName` · **cấm** invent staff API |
| GAP-MOB-EST-QTY-01 / PRICE-01 / TOTAL-01 | Lines[0] + derived total |
| GAP-MOB-EST-SLA-01 | Local default 24h + DueAt · **cấm** invent SLA API |
| GAP-MOB-EST-CTA-01 / WO-01 | Explicit `POST maintenance/work-orders` · WorkType=`repair` · Status=`new` |
| GAP-MOB-EST-DRAFT-01 | `POST …/draft` online · offline **DEFER** |
| GAP-MOB-EST-DATA-01 / REAL-01 | §B = BFF table only |
| GAP-MOB-EST-PACK-01 | **CLOSED** · packKind=`sheet` · surface screen |
| GAP-MOB-EST-SIMP-01 | Mobile 1 row → `Lines[0]` |
| GAP-F-EST-01 | Auto WO event **DEFER** web — mobile dùng explicit POST |
| GAP-MOB-BFF-01 | **Không** — proxy catch-all đủ |
| GAP-TAB-01 | Tab 5 **giữ** · pack `tabs: none` · work active |
| GAP-MOB-ACT-01/02/05/06/07 | 1 slug · không gộp sibling · kit toast · không enqueue |
| GAP-MOB-ALIGN-01 | iOS + Android cùng copy · Android back icon-only OK |
| GAP-SA-STORE-01 | No new privacy claim · **cấm** localhost/LAN · no iPad listing claim |
| Step 4b / T-BE-* | **N/A** — không chạy turn SA |

---

## Client architecture (TL/Dev)

| Layer | iOS | Android |
|-------|-----|---------|
| Feature UI | `Presentation/Features/Estimate/*` (`EstimateView` · ViewModel · UiState · Copy) | `presentation/feature/estimate/*` |
| Entry wire | `MntListViewModel` hub/card · `IncidentCreate` / `IncidentDetail` CTA → push Estimate (thay `showToast`) | same · `MainTabScreen` / nav host |
| Use case | seed from-incident · get/update/draft estimate · create WO · optional assign · optional confirm | same |
| Repo | `EstimateRepository` · reuse `WorkOrderRepository` (mnt-list) · `IncidentRepository` | same |
| Mapper / copy | `EstimateCopy` VN SSOT Design | same |
| State | incidentId · estimateId · header · assignee · qty · unitPrice · total · slaHours · dueAt · busy · bannerMissing · toast | same |
| Shell | `AppRouter` work tab dưới screen | `MainTabScreen` |
| DI | `AppContainer` | Hilt |

**Cấm** WebView HTML · watermark Gói · device label · native alert · invent estimate API slug · open Giao việc không assignee/incidentId · WorkType ngoài `repair|inspect|emergency`.

### Delta Dev (role sau — không implement turn SA)

1. Ship screen dual theo Design / html-to-native-map / copy VN / ListRow / TextField / Primary / Secondary / Toast.
2. Wire entry: mnt-list hub/card + incident CTA → push `#sc-estimate` (thay toast stub).
3. Seed from-incident · bind Lines[0] · derived total/SLA/due · PUT lines · draft · POST WO (`repair`/`new`) · optional assign · toast real Code · **cấm** fake CV.
4. Banner missing incidentId · chặn primary · dual parity.
5. Verify builds (Dev role): xcodegen + xcodebuild dest **iPhone 17 Pro** · `assembleDebug` · BFF `dotnet build`.

### Tasks đề xuất (TL)

| ID | Owner | Note |
|----|-------|------|
| `T-IOS-EST` | Dev iOS | screen + entry wire + seed/draft/WO/assign + Lines[0] + toast |
| `T-AND-EST` | Dev Android | parity dual + entry wire |
| `T-BE-*` | — | **n/a** · live Signed |
| `T-BFF-*` | — | **n/a** · proxy catch-all đủ |

---

## Handoff → TL

| Field | Value |
|-------|-------|
| feature / packKind | `estimate` / **`sheet`** (surface screen) |
| solution_confirm | **approve** |
| BFF | from-incident · get/put/draft/confirm estimates · POST work-orders · GET incident · POST assign · init-data optional · **cấm** invent |
| WorkType P1 | **`repair`** (live) — không `sua-chua` |
| Tasks đề xuất | `T-IOS-EST` · `T-AND-EST` |
| Kit | reuse TopBar / ListRow / TextField / Primary / Secondary / Toast · kit_missing **N/A** |
| Delta Dev | toast stub → `#sc-estimate` · seed · Lines[0] · draft · POST WO · dual |
| Verify (Dev) | iOS `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** · Android `assembleDebug` · BFF `dotnet build` |
| Next slash | `/agent-tl-mobile` |
| Chain this turn | **không** (roleOnly=`sa` · GAP-PKT-ROLE-01) |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** mfeStdUrl / e2e ở SA |

---

## VERIFY GATE (`task_9f669577` · roleOnly=`sa`)

| Check | Result |
|-------|--------|
| Role | sa only · **PASS** |
| artifact | `be/solution-discovery.md` (mobile) · prior web → `solution-discovery-web.md` · **PASS** |
| STATUS | sa **done** · tl **pending** · solution_confirm=approve · **PASS** |
| control-hint / real-data §B | **read** · hash skip · **cấm** re-scan · **PASS** |
| Design confirmed | dual + ux-analy + demo-parity · design_confirm=approve · **PASS** |
| Invent path / ERP.* | **none** · **PASS** |
| Write MFE/native | **skipped** (SA) |
| yarn build / e2e / start:std | **skipped** (roleOnly sa) |
| Step 4b / migration | **skipped** · N/A Signed |
| Chain other role | **không** (GAP-PKT-ROLE-01) |

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa-mobile |
| skillVersion | 2026.08.20.03 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.29.1 |
| rulesVersion | 2026.08.29.5 |
| generatedAt | `2026-08-29T04:36:00.000Z` |
| versionGate | rechecked |
| contentHash | sha256:estimate-mobile-control-hint-20260829 |
| realDataHash | sha256:estimate-mobile-real-data-20260829 |
| bffContentHash | sha256:estimate-mobile-bff-20260829 |
| actionTreeHash | sha256:estimate-mobile-action-tree-20260829 |
| ctxContentHash | sha256:58cb5c3279c3df7360e1f3f29adccc79fada11ce219853dfce035217e25b7f3d |
| demoContentHash | sha256:394ab44597648f04b25e6d58476378c16141feb53d3b58d39923b3defcff8328 |
| taskId | `task_9f669577` |

---
<!-- Version meta: skillId=agent-sa-mobile skillVersion=2026.08.20.03 schemaVersion=2 workflowVersion=2026.08.29.1 rulesVersion=2026.08.29.5 versionGate=rechecked -->
