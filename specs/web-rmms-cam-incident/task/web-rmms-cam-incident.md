# Team lead — Task — web-rmms-cam-incident

> Status: **ready** · skillVersion `2026.09.05.03` · task `task_c3e355d0` · writtenAt `2026-10-01T02:05:00.000Z`  
> contentHash: `sha256:e515f74ca821b652154473ac30eaec7bb13c8921acf6725b739dc4eb1744b8d1`  
> PackKind: **list** · changeScope: **edit_page** · autoApprove: **ON** · e2eQa: **queued QA**  
> **Cấm** xóa file này · **cấm** implement trong role team_lead · **cấm** e2e / yarn build / start:std.

| | |
|--|--|
| Feature | `web-rmms-cam-incident` |
| Title | Camera sự cố theo vai — role-gate + Giao việc QL_HAT |
| Role | `team_lead` → handoff `/agent-dev` |
| Lane | `web` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Incident** · **cấm ERP.*** |
| BFF | Mobile.Bff `:5202` · `mobile-bff/api/v1/incident/**` + patrol/sessions + asset-types + files + auth/profile · **cấm web-bff** |
| productRoute | `/van-de` · `/van-de/moi` · `/van-de/:id` |
| mfeStdUrl | `http://localhost:9301/web-rmms-cam-incident` (**alias only** · cấm invent product slug) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-incident/ui/prototype/index.html` |
| route_confirm | **N/A / keep** — không URL mới · giữ product deep-link peer |
| Step 4b / migration | **skip** — entity none · Live DTO KEEP |
| prior | data_analy·po·design·sa = **confirmed** · UNCLEAR closed |
| team_lead_confirm | **approve** (autoApprove) |
| nextSlash | `/agent-dev` · roleOnly stop (GAP-PKT-ROLE-01) |

## changeScope

`changeScope=edit_page` · **cấm** `new_page` · **cấm** invent `CamIncident*` / route mới / controller mới · cite PLAN-3-VAI #4.

## Notes

- Delta: `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` § enqueue #4
- Forms: **INC-CAP** IncidentCaptureSheet · **INC-N** IncidentCreatePage · **INC-D** IncidentDetailPage · **INC-L** IncidentListPage · LeaveConfirm dirty INC-CAP/N · phone ≤430 · DES-GRID / LinErpListFilterBar **N/A**
- Role: **tuần đường** create+capture+close · **QL_HAT** (HAT-TRUONG/HAT-PHO) list all + **Giao việc** CTA · **TK+NT** RO no giao · cite `web-rmms-role-gate` packageCode/roleCaps · **cấm** suy từ MANAGER-RMMS
- **DEC-LIST-01:** không invent reporter query · tuần đường client filter `reporterName≈profile` · QL_HAT unscoped
- **DEC-CLOSE-01:** ẩn close QL_HAT/TK/NT · tuần đường giữ close · BE close KEEP
- Assign: nav `paths.workFor(id)` → peer `web-rmms-giao-viec-ql-hat` · **cấm** invent assign DTO
- Pattern B GPS: banner on Create/Lưu · **cấm** fake GPS · `disabled=creating|saving` only
- Form giao đầy đủ = peer `web-rmms-giao-viec-ql-hat` · slug này = CTA + scope only
- **Cấm:** Giao việc ngoài QL_HAT · SLA 24h · Mục IV tiền · Excel · ERP.* · web-bff · native · CamIncident*
- DOMAIN-MAP: `web-rmms-cam-incident` → Incident (CLOSED SA)
- Dev slash: `/agent-dev` · QA E2E chỉ `/agent-qa*`

## Screens / zones

| Zone | Form / page | File |
|------|-------------|------|
| INC-CAP | IncidentCaptureSheet | `src/pages/WebRmmsIncident/IncidentCaptureSheet.tsx` |
| INC-N | IncidentCreatePage | `src/pages/WebRmmsIncident/IncidentCreatePage.tsx` |
| INC-D | IncidentDetailPage | `src/pages/WebRmmsIncident/IncidentDetailPage.tsx` |
| INC-L | IncidentListPage | `src/pages/WebRmmsIncident/IncidentListPage.tsx` |
| DES-LEAVE | leaveConfirm dirty INC-CAP/N | CreatePage / CaptureSheet host |
| roleGateBanner | view-only / block | INC-* per role |
| paths | workFor / product routes | `src/pages/WebRmmsIncident/paths.ts` |

## Inventory → implement

| id | controlHint | Role behavior | AC |
|----|-------------|---------------|-----|
| photos | RouteCapture | tuần đường write · detail view | upload/view per role |
| gps | GPS+Banner | Pattern B · cấm fake | banner trước Create/Lưu |
| title/type/sev | Input+Select | LOOKUP_STATIC · required title | create tuần đường |
| create | Button | tuần đường · creating lock | POST incidents |
| fabCreate | FAB | **ẩn** non-tuần-đường | INC-L |
| cards | List | GET · DEC-LIST-01 | scope by role |
| assignCta | Button | **QL_HAT only** · paths.workFor | INC-L (+ INC-D nếu design) |
| close | Button | **ẩn** QL_HAT/TK/NT · tuần đường giữ | DEC-CLOSE-01 |
| roleCaps | Hidden | cite role-gate | qlHat · tuanDuong · … |

## FormMode ↔ API (Live KEEP — no path invent)

| API | Method / path (BFF) | Used by |
|-----|---------------------|---------|
| API-01 | GET `incident/incidents` | INC-L cards · DEC-LIST-01 client filter |
| API-02 | POST `incident/incidents` | INC-N / INC-CAP create |
| API-03 | GET `incident/incidents/{id}` | INC-D bind |
| API-04 | POST `incident/incidents/{id}/close` | INC-D close · tuần đường only UI |
| API-05 | GET `patrol/sessions` (cite Live) | create session bind |
| API-06 | GET asset-types (cite Live) | LOOKUP / asset pick |
| API-07 | files (cite Live) | photos |
| API-08 | GET `auth/profile` caps | roleCaps |

Prefix: `mobile-bff/api/v1/**` · entity/migration: **none**.

## FormType pack (phone list — WAIVE Kind B desktop)

| Task id | Status | Note |
|---------|--------|------|
| T-UI-LIST-01 · T-UI-FILTER-01 · T-UI-CFG-01 · T-UI-HIST-01 | **WAIVE** | DES-GRID / LinErpListFilterBar N/A phone |
| T-QA-FILTER-01 · T-QA-FILTER-02 | **WAIVE** | no Kind B filter bar |
| T-UI-LEAVE-01 · T-UI-UX-01 · T-UI-RESP-01 · T-UI-PROD-01 · T-PERM-01 | **REQUIRED** | leave + constitution + DTM + end-user · role matrix |
| T-BE-CRUD-01 / T-BE-UISCHEMA-01 | **WAIVE** | Live Incident DTO KEEP · no invent catalog |
| T-BE-MIG-01 / Step 4b | **WAIVE** | entity none · SA skip |

---

## T-* tasks

### T-01 — INC-CAP CaptureSheet role-gate + Pattern B + leave

| | |
|--|--|
| id | `T-01` |
| page | INC-CAP IncidentCaptureSheet |
| file | `src/pages/WebRmmsIncident/IncidentCaptureSheet.tsx` |
| deps | role-gate caps · SA FormMode↔API · design reviewUrl |
| priority | P0 |
| estimate | M |

**Do**
1. Wire `roleCaps` / packageCode từ role-gate — tuần đường write; QL_HAT/TK/NT **không** mở sheet ghi sự cố (view/block per design).
2. `roleGateBanner` khi view-only / block.
3. Pattern B GPS + photos (RouteCapture) — banner trước Lưu/Create; **cấm** fake GPS; `disabled` chỉ `creating|saving`.
4. LeaveConfirm khi dirty (DES-LEAVE).
5. Parity prototype `?screen=capture&role=*` · ≤430px.

**AC**
- [ ] Tuần đường: capture + ảnh OK.
- [ ] Non-tuần-đường: không write capture.
- [ ] Pattern B · no fake · lock = creating|saving only.
- [ ] Leave dirty confirm.
- [ ] Không route mới · không CamIncident* · không ERP.*/web-bff.

### T-02 — INC-N CreatePage role-gate + Pattern B + leave

| | |
|--|--|
| id | `T-02` |
| page | INC-N IncidentCreatePage |
| file | `src/pages/WebRmmsIncident/IncidentCreatePage.tsx` |
| deps | T-01 roleCaps same source · API-02/05/06/07 |
| priority | P0 |
| estimate | L |

**Do**
1. Same roleCaps — chỉ tuần đường create (title/type/sev LOOKUP_STATIC · required title · POST incidents).
2. Pattern B GPS banner trên Create; leaveConfirm dirty; creating lock.
3. Sessions + asset-types + files cite Live — **cấm** invent path.
4. Parity prototype `?screen=create` · deep-link `/van-de/moi`.

**AC**
- [ ] Tuần đường POST create thành công → detail.
- [ ] QL_HAT/TK/NT không create / không enable write.
- [ ] GPS banner Pattern B · leave dirty · no fake.
- [ ] Không invent API / CamIncident*.

### T-03 — INC-D DetailPage assign CTA + DEC-CLOSE-01

| | |
|--|--|
| id | `T-03` |
| page | INC-D IncidentDetailPage |
| file | `src/pages/WebRmmsIncident/IncidentDetailPage.tsx` |
| deps | T-01 roleCaps · API-03/04 · paths.workFor |
| priority | P0 |
| estimate | M |

**Do**
1. GET `{id}` bind · photos view.
2. **DEC-CLOSE-01:** ẩn `close` (+ note) với QL_HAT/TK/NT · tuần đường giữ close → POST close (BE KEEP).
3. **assignCta** (nếu zone design trên detail): chỉ `roleCaps.qlHat` → `navigate(paths.workFor(id))` · **cấm** invent assign DTO.
4. `roleGateBanner` RO cho TK/NT khi cần.
5. Parity prototype `?screen=detail&role=qlhat|tuan|tk|nt`.

**AC**
- [ ] Tuần đường: close hiện + POST close OK.
- [ ] QL_HAT/TK/NT: close **ẩn** · không gọi close từ UI.
- [ ] QL_HAT: Giao việc → workFor peer (nếu CTA trên detail).
- [ ] TK/NT: RO · no giao · no close.

### T-04 — INC-L ListPage fab + DEC-LIST-01 + assign CTA

| | |
|--|--|
| id | `T-04` |
| page | INC-L IncidentListPage |
| file | `src/pages/WebRmmsIncident/IncidentListPage.tsx` (+ `paths.ts` cite) |
| deps | T-01 roleCaps · API-01 · DEC-LIST-01 |
| priority | P0 |
| estimate | M |

**Do**
1. GET incidents · **DEC-LIST-01:** tuần đường client filter `reporterName≈profile` · QL_HAT unscoped · **cấm** invent reporter query param.
2. `fabCreate` **ẩn** non-tuần-đường.
3. `assignCta` chỉ `roleCaps.qlHat` → `paths.workFor(row.id)` (đã có skeleton — verify + harden).
4. Cards + status chips KEEP · DES-GRID N/A.
5. Parity prototype `?screen=list&role=*`.

**AC**
- [ ] Tuần đường: list scoped reporter · FAB hiện · no assign CTA.
- [ ] QL_HAT: list all · FAB ẩn · assign CTA → workFor.
- [ ] TK/NT: RO list · FAB ẩn · no assign.
- [ ] Không invent reporter API · không route mới.

### T-PERM-01 — Role matrix end-to-end (REQUIRED)

| | |
|--|--|
| id | `T-PERM-01` |
| deps | T-01..T-04 |
| priority | P0 |
| estimate | S |

**Do / AC**
- [ ] Matrix: tuần đường write+close · QL_HAT assign only · TK+NT RO — cite role-gate · **cấm** MANAGER-RMMS→Giao việc.
- [ ] packageCode `QL_HAT` ⇔ HAT-TRUONG/HAT-PHO caps.

### T-UI-LEAVE-01 / T-UI-UX-01 / T-UI-RESP-01 / T-UI-PROD-01

| | |
|--|--|
| ids | leave · ux · resp · prod |
| deps | T-01..T-02 |
| priority | P1 |

**AC**
- [ ] LeaveConfirmModal dirty INC-CAP/N — **cấm** `window.alert`/`confirm`.
- [ ] Prototype parity zones · ≤430px · product routes `/van-de*`.
- [ ] End-user copy LOOKUP_STATIC · no CamIncident* labels.

### T-QA-* (queued QA — **cấm** chạy e2e ở team_lead/dev trừ `/agent-qa*`)

| id | Focus |
|----|--------|
| T-QA-ROLE-01 | role matrix AC · assign CTA · hide close |
| T-QA-GPS-01 | Pattern B · deny/`?gps=deny` · no fake |
| T-QA-LEAVE-01 | leave dirty INC-CAP/N |
| T-QA-ROUTE-01 | no new route · alias mfeStdUrl only · deep-link `/van-de/moi` |

---

## Handoff

| Field | Value |
|-------|-------|
| next | `/agent-dev` |
| implement artifact | `specs/web-rmms-cam-incident/implement/web-rmms-cam-incident.md` |
| compact | `specs/web-rmms-cam-incident/handoff/team_lead-compact.md` |
| e2eQa | ON — queued `/agent-qa*` only |
| blockers | none |

## Full paths

- po: `D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-incident/po/requirement.md`
- design: `D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-incident/ui/design.md`
- sa: `D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-incident/be/solution-discovery.md`
- control-hint: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-cam-incident-control-hint.md`
- real-data: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-cam-incident-real-data.md`
- STATUS: `D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-incident/STATUS.md`
