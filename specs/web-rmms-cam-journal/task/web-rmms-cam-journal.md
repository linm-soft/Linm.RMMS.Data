# Team lead — Task — web-rmms-cam-journal

> Status: **ready** · skillVersion `2026.09.05.03` · task `task_dd688639` · writtenAt `2026-10-01T01:25:00.000Z`  
> contentHash: `sha256:76d6d3e1ec6437552d8e12b1c18c3aa8a0fd16abdcc3ef54b3ebc783d062050e`  
> PackKind: **list** · changeScope: **edit_page** · autoApprove: **ON** · e2eQa: **queued QA**

| | |
|--|--|
| Feature | `web-rmms-cam-journal` |
| Title | Camera nhật ký tuần đường — role-gate + Pattern B |
| Role | `team_lead` → handoff `/agent-dev` |
| Lane | `web` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Patrol** · **cấm ERP.*** |
| BFF | Mobile.Bff `:5202` · `mobile-bff/api/v1/patrol/**` · **cấm web-bff** |
| productRoute | `/nhat-ky/:sessionId` · `/nhat-ky/:sessionId/moi` · `/nhat-ky/:sessionId/:lineId` |
| mfeStdUrl | `http://localhost:9301/web-rmms-cam-journal` (**alias only** · cấm invent product slug) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-journal/ui/prototype/index.html` |
| route_confirm | **N/A** — không URL mới · giữ product deep-link peer mobile-b |
| Step 4b / migration | **skip** — entity none · Live DTO KEEP |
| prior | data_analy·po·design·sa = **confirmed** · UNCLEAR closed |

## changeScope

`changeScope=edit_page` · **cấm** `new_page` · **cấm** invent `CamJournal*` / route mới / controller mới.

## Notes

- Delta: `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` § enqueue #3
- Forms: **JL-01** JournalFormPage · **JL-02** JournalListPage · LeaveConfirm dirty JL-01 · phone ≤430 · DES-GRID / LinErpListFilterBar **N/A**
- Role: **tuần đường** write + capture · **QL_HAT** (HAT-TRUONG+HAT-PHO) / **TK** / **NT** view-only · ẩn CTA · cite `web-rmms-role-gate` packageCode/roleCaps · **cấm** suy từ MANAGER-RMMS
- Pattern B GPS: banner on Lưu · **cấm** fake GPS · Lưu `disabled` chỉ khi `saving|photoBusy`
- **Cấm:** Giao việc · SLA 24h · Mục IV tiền · Excel · ERP.* · web-bff · native · invent CamJournal* · review PUT (peer C)
- DOMAIN-MAP: `web-rmms-cam-journal` → Patrol (CLOSED SA) · bind peer mobile-b
- Dev slash: `/agent-dev` · QA E2E chỉ `/agent-qa*`

## Screens / zones

| Zone | Form / page | File |
|------|-------------|------|
| JL-01 | JournalFormPage | `src/pages/WebRmmsMobileB/JournalFormPage.tsx` |
| JL-02 | JournalListPage | `src/pages/WebRmmsMobileB/JournalListPage.tsx` |
| DES-LEAVE | leaveConfirm dirty JL-01 | cùng JournalFormPage |
| roleGateBanner | view-only hint | JL-01 + JL-02 (optional) |

## Inventory → implement

| id | controlHint | Role behavior | AC |
|----|-------------|---------------|-----|
| photos | RouteCaptureControl | tuần đường write · others view | AC-JL-PHOTO |
| gps | GPS + Banner | Pattern B required | AC-JL-GPS-B |
| narrative | TextArea | required · tuần đường write | AC-JL-NARR |
| at/km/dir/weather/kind | DateTime+Input+Select | LOOKUP_STATIC | AC-JL-LOOKUP |
| onSite/reported/status | Checkbox+Select | reportedTo=cờ TK | AC-JL-WRITE |
| save | Button | tuần đường · lock saving\|photoBusy | AC-JL-WRITE · GPS-B |
| lineCards | List RO | GET journal-lines · all allowed | AC-JL-CTA |
| ctaCreate | Button | ẩn non-tuần-đường | AC-JL-CTA |
| roleCaps / roleGateBanner | Hidden / Banner | cite role-gate | AC-JL-WRITE · CTA |

## FormMode ↔ API (Live KEEP — no path invent)

| API | Method / path (BFF) | Used by |
|-----|---------------------|---------|
| API-01 | GET `sessions/{id}` | JL-01/02 session header |
| API-02 | GET `journal-lines` (list) | JL-02 lineCards |
| API-03 | GET `journal-lines/{lineId}` | JL-01 edit |
| API-04 | POST `journal-lines` | JL-01 create (`/moi`) |
| API-05 | PUT `journal-lines/{lineId}` | JL-01 update |
| API-06 | files (cite Live) | photos RouteCapture |
| API-07 | auth/profile caps | roleCaps |

Prefix: `mobile-bff/api/v1/patrol/**` · entity/migration: **none**.

---

## T-* tasks

### T-01 — JL-01 JournalFormPage role-gate + Pattern B + leave

| | |
|--|--|
| id | `T-01` |
| page | JL-01 JournalFormPage |
| file | `src/pages/WebRmmsMobileB/JournalFormPage.tsx` |
| deps | role-gate caps · SA FormMode↔API · design reviewUrl |
| priority | P0 |
| estimate | M |

**Do**
1. Wire `roleCaps` / packageCode từ role-gate — tuần đường write+capture; QL_HAT/TK/NT view-only (không POST/PUT, không capture).
2. `roleGateBanner` (optional): hint RO khi non-tuần-đường theo design zones JL-01v.
3. Pattern B: GPS thật — banner cảnh báo trước Lưu; **cấm** fake GPS; `save` `disabled` chỉ khi `saving|photoBusy`.
4. Fields: photos (RouteCapture) · gps · narrative (required) · at/km/dir/weather/kind (LOOKUP_STATIC) · onSite/reported/status · save → POST/PUT `journal-lines` (+ files cite).
5. LeaveConfirm khi dirty JL-01 write (DES-LEAVE).
6. Deep-link giữ `/nhat-ky/:sessionId/moi` · `/:lineId` · mfeStdUrl alias only.
7. Parity prototype `reviewUrl` zones JL-01 · ≤430px.

**AC**
- [ ] AC-JL-WRITE: tuần đường tạo/sửa dòng + ảnh thành công (POST/PUT journal-lines).
- [ ] AC-JL-NARR: narrative required trước Lưu.
- [ ] AC-JL-GPS-B: GPS banner Pattern B · no fake · lock = saving|photoBusy.
- [ ] AC-JL-PHOTO: RouteCapture write tuần đường · view-only roles khác.
- [ ] AC-JL-LEAVE: dirty confirm JL-01.
- [ ] AC-JL-LOOKUP: meta dùng LOOKUP_STATIC.
- [ ] AC-JL-ROUTE · AC-JL-API: không route mới · không CamJournal* · không ERP.*/web-bff · Live KEEP.
- [ ] QL_HAT/TK/NT: form/ảnh view · không enable save write / capture.

### T-02 — JL-02 JournalListPage CTA + lineCards gate

| | |
|--|--|
| id | `T-02` |
| page | JL-02 JournalListPage |
| file | `src/pages/WebRmmsMobileB/JournalListPage.tsx` |
| deps | T-01 roleCaps same source · API-01/02 |
| priority | P0 |
| estimate | S |

**Do**
1. Same roleCaps source — `ctaCreate` **ẩn** non-tuần-đường.
2. `lineCards` RO: GET `journal-lines` — QL_HAT/TK/NT được xem.
3. Session header: GET `sessions/{id}`.
4. `roleGateBanner` (optional) khi view-only.
5. Deep-link giữ `/nhat-ky/:sessionId` · CTA → `/moi` · mfeStdUrl alias only.
6. Parity prototype JL-02 · ≤430px.

**AC**
- [ ] AC-JL-CTA: tuần đường CTA ghi visible & navigates `/moi`.
- [ ] QL_HAT/TK/NT: lineCards view · CTA write ẩn.
- [ ] AC-JL-ROUTE · AC-JL-API: không invent route / slug / ERP.* / web-bff / migration.

### T-03 — QA handoff checklist (dev notes · QA executes)

| | |
|--|--|
| id | `T-03` |
| page | JL-01 + JL-02 |
| owner | `/agent-qa*` (e2eQa queued) |
| deps | T-01 · T-02 |
| priority | P1 |

**Do (dev prepare · QA run)**
- Scenarios: role matrix (tuần đường write · QL_HAT/TK/NT view) · GPS Pattern B · leave dirty · LOOKUP · no new route · Live API KEEP.
- **Cấm** team_lead/dev chạy e2e / `yarn start:std` / build ở role này.

**AC**
- [ ] Dev notes list AC từ T-01/T-02 đủ cho `qa/scenarios.md`.

---

## Out of scope

- new_page / new route / CamJournalController
- Step 4b migration / entity
- Giao việc · SLA · Mục IV · Excel · native · review PUT (peer C)
- ERP.* · web-bff · fake GPS
- Running e2e / start:std ở team_lead hoặc trước `/agent-qa*`

## Handoff

| Field | Value |
|-------|-------|
| next | `/agent-dev` · implement `implement/web-rmms-cam-journal.md` |
| after | `/agent-qa*` (e2eQa ON) · `/agent-review` |
| compact | `handoff/team_lead-compact.md` |
| full | `task/web-rmms-cam-journal.md` |
| STATUS | patch team-lead → **confirmed** · lock release |
