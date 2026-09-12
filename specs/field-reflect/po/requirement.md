# PO — Requirement — field-reflect (mobile screen)

| Field | Value |
|-------|-------|
| feature | `field-reflect` |
| title | [Mobile] [Tuần đường] -> Ghi nhận hư hỏng |
| this role | `po` · `/agent-po-mobile` |
| changeScope | `edit_page` · gap=`field_reflect_sessions_live_only` · **GAP-MOB-FIELD-SESS-01** |
| packKind | **`screen`** (keep · PACK-01 CLOSED) |
| stack | `native_dual` |
| thisAction | **Ghi nhận hư hỏng** `#sc-field-reflect` only · owner `DES-MOB-FIELD-REFLECT` · kind `DES-MOB-FIELD-KIND` · entry `patrol-home` `#row-reflect` / pick `#sc-field-pick` · **cấm** gộp `cam-patrol` / `inc-form` |
| status | `confirmed` (autoApprove=ON) |
| requestSource | run packet `task_72e56250` · `/agent-qldb-workflow-mobile` · roleOnly=`po` · `/agent-po-mobile` |
| autoApprove | **ON** — Design/SA tự confirm **khi tới lượt** · turn này **không** chain |
| e2eQa | ON · queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở role PO |
| prior | data-analy **confirmed** · compact `handoff/data_analy-compact.md` · control-hint + real-data abs `_data-analy/field-reflect-*` · contentHash control `sha256:43744be6c3dc+field-reflect-sess-live-20260912` · real `sha256:43744be6c3dc+field-reflect-real-sess-20260912` · **hash skip** — **cấm** re-scan demo (`GAP-PO-DEMO-RESCAN-01`) |
| `devSlash` | `/agent-dev-ios` + `/agent-dev-android` |
| updatedAt | `2026-09-12T10:39:31.000Z` |
| taskId | `task_72e56250` |

**Cấm:** gộp sibling · invent `api/v1/field-reflect` · ERP.* · `mfeStdUrl` · native alert · watermark Gói · fake lat/lng · **`itemsOrDemo` / `demoToday` ship** · re-scan demo HTML · Step 4b / e2e ở PO.

## 1. Goal

Keep màn **Ghi nhận hư hỏng** dual native. **Delta này:** bootstrap ca/tuyến **live-only** từ `GET patrol/sessions` — fail/empty → empty `locationRow` + toast · **cấm** fallback demo tuyến. Persona: Tuần đường. App chỉ `{BffBase}/mobile-bff/api/v1/…`.

**1 action = 1 feature.** Kind / photo / detect / checklist / Create / draft = cùng slug.

## 2. changeScope `edit_page` — § Delta Current vs New

| ID | Current (native) | New (DoD) | Surface |
|----|------------------|-----------|---------|
| **GAP-MOB-FIELD-SESS-01** | `FieldReflectViewModel` `(fetchSessions).itemsOrDemo` → `PatrolHomeCopy.demoToday` khi GET fail | **Live-only** · `FetchPatrolSessionsOutcome`: `.loaded` bind · empty/no-active → empty `routeStamp` + toast «Không có ca đang tuần» · `.loadFailed` → empty + toast «Không tải được ca tuần» · **cấm** `itemsOrDemo` / `demoToday` | locationRow / bootstrap |
| Keep | pills / PhotoRow / detect / severity / checklist / CTA / pick→form / BFF paths | **không** đổi inventory UI | — |
| GAP-MOB-FIELD-MEDIA-01 | Signed deferred | **Accept** | media |
| GAP-MOB-FIELD-CHK-01 | local CHK by asset | giữ | checklist |

**OUT:** sibling `cam-patrol` / `inc-form` · invent path · Step 4b migration.

## 3. DoD (đo được)

1. Dual keep `#sc-field-reflect` `DES-MOB-FIELD-REFLECT` · kind `DES-MOB-FIELD-KIND` · zones pills/PhotoRow/card rows/checklist/CTA — **parity** trừ chrome HIG/Material.
2. **Sessions live-only (HARD):** bootstrap `GET patrol/sessions` · bind active «Đang tuần» · **không** `itemsOrDemo` · peer cam-patrol / patrol-checkin.
3. Empty active → toast/banner «Không có ca đang tuần» · `locationRow` empty · form vẫn mở (GPS/draft) · **cấm** fake ca.
4. Load fail → toast «Không tải được ca tuần» (`toastSessionsFail`) · empty route · **cấm** demo tuyến.
5. Kind Hư/Mất/Hỏng · PhotoRow `#i-camera` · detect optional · severity · GPS chốt · checklist asset · Create / Draft — keep prior AC.
6. Create: `POST incident/incidents` · GPS gate · toast SC-* · **cấm** native alert · **cấm** fake lat/lng.
7. Draft: local · `patrol-offline` · toast nháp · **cấm** fake 200.
8. Kit reuse: TopBar · pills · PhotoRow · ListRow · CheckboxList · Primary/Secondary · Toast · `DES-MOB-GPS-DENY`.
9. App chỉ `{BffPrefix}` · Dev dual remove `itemsOrDemo` · QA later Maestro slug only · **cấm** invent FieldReflectController · Step 4b **N/A** PO.

## 4. CTX / DEM / DI inventory

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/field-reflect.md` | screen |
| CTX-02 | `docs/context/features/patrol-home.md` | entry |
| CTX-03–06 | incident · cam-patrol · asset-kcht-32 · patrol-offline | peers / reuse |
| DEM | `specs/field-reflect/ui/prototype/{ios,android}/index.html` `#sc-field-reflect` | Design SSOT only · **cấm** bind demo tuyến runtime |
| DA-01 | `specs/_data-analy/field-reflect-control-hint.md` | controlHint · Delta |
| DA-02 | `specs/_data-analy/field-reflect-bff-endpoints.md` | BFF |
| DA-03 | `specs/_data-analy/field-reflect-action-tree.md` | 1 action |
| DA-04 | `specs/_data-analy/field-reflect-real-data.md` | §A+§B live-only |
| DI-01 | — | **no Excel** |

## 5. controlHint (PO chốt)

Nguồn DA-01. UNCLEAR = **none**.

| Field | VN | controlHint | Required | Kit | Notes |
|-------|----|-------------|----------|-----|-------|
| navBack | Tuần đường / pick | BackButton | * | `LinmTopBar` | |
| title | Ghi nhận hư hỏng | TopBar title | * | `LinmTopBar` | 17 |
| kindLabel / kindPills | Loại · Hư/Mất/Hỏng | SectionLabel / PillSelect | * | pills | `DES-MOB-FIELD-KIND` |
| photoLabel / photos / addPhoto | Ảnh · camera | SectionLabel / PhotoRow / CameraButton | * | `#i-camera` | |
| detectRow / severityRow | Nhận diện / Mức | ListRow (+Badge) | | `LinmListRow` | empty OK |
| locationRow | Vị trí đã chốt | ListRow | * | `LinmListRow` | **live sessions + GPS** · empty nếu fail |
| chkLabel / checklist | Checklist | SectionLabel / CheckboxList | * | | by asset |
| btnCreate / btnDraft | Tạo vấn đề / Lưu nháp | Primary / Secondary | * | | |
| toastOk / toastDraft | success | Toast | * | `LinmToast` | |
| toastSessionsFail | Không tải được ca tuần / Không có ca đang tuần | Toast | * | `LinmToast` | **NEW** · GET fail/empty |
| gpsDeny | Định vị bị tắt | Modal | * | `DES-MOB-GPS-DENY` | |

## 6. BFF (keep — **cấm** invent)

| Action | Method | Path | Note |
|--------|--------|------|------|
| Prefill ca/tuyến | GET | `patrol/sessions` | **live-only** client outcome |
| Catalog TS | GET | `integration/asset-types` | optional |
| Detect / uploads | POST/PUT | `ai-vision/*` | keep · MEDIA Accept |
| Create | POST | `incident/incidents` | keep |
| Draft | — | local → `patrol-offline` | |

## 7. Open questions — PO chốt (autoApprove=ON)

| ID | Decision |
|----|----------|
| **GAP-MOB-FIELD-SESS-01** | **OPEN → DoD** live-only · Dev dual bỏ `itemsOrDemo` |
| GAP-MOB-FIELD-MEDIA-01 | **Accept** Signed deferred |
| GAP-MOB-FIELD-CHK-01 | local CHK keep |
| GAP-QA-FIELD-GPS-TIMING-01 | **Defer** |
| UNCLEAR | **none** — hash skip · **cấm** re-crawl |

## 8. Screens (REQUIRED)

| Surface | Demo | Pattern | FormMode | Actions this slug | `devSlash` |
|---------|------|---------|----------|-------------------|------------|
| Ghi nhận hư hỏng | `#sc-field-reflect` · kind · pick `#sc-field-pick` | **Screen** | create (edit bootstrap) | GET sessions **live-only** · GPS · camera · detect · POST incident · draft · toastSessionsFail | `/agent-dev-ios` + `/agent-dev-android` |

Grid AC / Report AC = **N/A**. Leave = in-app kit · **cấm** native alert.

## 9. Device AC (REQUIRED) — Delta + keep

| ID | Behavior | AC |
|----|----------|-----|
| **AC-F-08** | Sessions | **Live-only** · empty/fail → empty location + toastSessionsFail · **cấm** `itemsOrDemo` / demoToday |
| AC-F-01 | Appear | GET sessions outcome switch · GPS · default Hư · checklist |
| AC-F-02–07 | Kind / photo / create / draft / parity / entry | keep prior |
| AC-D-01–06 · 09–11 | Offline · GPS deny · leave · alert · safe · token · tab · camera | keep · **cấm** fake lat/lng / native alert |
| AC-D-07/08/12 | Biometric / Signal / Push | N/A |

Typography: label/tab **13** · value **≥16**. Tab index: `tabs: none` · Shell Tab 5 `field`.

## 10. Leave / alert

Dirty leave · GPS deny · detect/create fail · sessions fail/empty → `LinmToast` / in-app modal · **cấm** `UIAlert` / `AlertDialog`.

## 11. Out of scope

- Re-implement full screen inventory (keep)
- Sibling cam-patrol / inc-form · invent path · Step 4b · e2e ở PO · demo fallback sessions

## 12. KPI

Field reflect gắn ca **thật** — không mẫu tuyến khi API fail. DoD Delta = live-only sessions dual.

## 13. Handoff → Design

| Field | Value |
|-------|-------|
| feature / packKind | `field-reflect` / **screen** |
| phase_from / phase_to | po **confirmed** → design pending |
| STATUS | `specs/field-reflect/STATUS.md` |
| Delta | **GAP-MOB-FIELD-SESS-01** · toastSessionsFail copy · keep control-map |
| controlHint / UNCLEAR | §5 · none |
| Screens / Pattern / `devSlash` | Screen · `/agent-dev-ios` + `/agent-dev-android` |
| Grid/Report AC | N/A |
| peerStdUrl / reviewUrl | **cấm** mfeStdUrl · dual `file://…/prototype/{ios,android}/index.html#sc-field-reflect` |
| Open questions | §7 chốt |
| Next slash | `/agent-design-mobile` |
| Chain this turn | **không** (roleOnly=po) |
| e2eQa | ON · queued QA only |
| SA/Dev note | **không** Step 4b · Dev remove itemsOrDemo dual |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po-mobile |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.12.1 |
| generatedAt | `2026-09-12T10:39:31.000Z` |
| versionGate | rechecked · autoApprove keep_current |
| contentHash | sha256:field-reflect-po-sess-live-20260912 |
| priorControlHintHash | sha256:43744be6c3dc+field-reflect-sess-live-20260912 |
| priorRealDataHash | sha256:43744be6c3dc+field-reflect-real-sess-20260912 |

---
<!-- Version meta: skillId=agent-po-mobile skillVersion=2026.09.05.03 schemaVersion=1 workflowVersion=2026.09.05.03 rulesVersion=2026.09.12.1 versionGate=rechecked -->
