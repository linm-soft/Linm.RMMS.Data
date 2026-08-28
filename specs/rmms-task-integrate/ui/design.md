# Design — rmms-task-integrate (RMMS Field × Platform Task/Message)

| Field | Value |
|-------|-------|
| feature | `rmms-task-integrate` |
| this role | `design` · `/agent-design` |
| Feature Kind | **Platform integration** — Field patrol/incident touchpoints → CreateTask modal → deep-link `/cv/:id` + **`ChatSectionParcel`** |
| packKind | **`platform`** (PO confirm · integration) |
| changeScope | `edit_page` |
| status | **`confirmed`** (autopilot · `design_confirm=approve`) |
| design_confirm | **`approve`** · autoApprove ON · `2026-08-27T05:15:00.000Z` |
| DEMO | **N/A** · packKind=platform · **cấm** `tuan-duong-web.html` / `task.html` SSOT · **cấm** re-scan DemoRoot (hash skip) |
| peer | live `Linm.Web.RMMS.Field` (PatrolFormPage · IncidentListPage) + `Linm.Web.Task` (`HandoffBanner` · `ChatSectionHost`) + `@linm/message` **`ChatSectionParcel`** |
| mfe | `D:\AI-QLBD\MFE-Source\Linm.Web.RMMS.Field` (patrol + incident) + `D:\MFE-CORE\Linm.Web.Task` (`@linm/task` · `/cv`) |
| peerStdUrl | `http://localhost:9301/rmms-task-integrate` |
| mfeStdUrl | `http://localhost:9301/rmms-task-integrate` |
| backend | RMMS `PatrolSessionsController` · `IncidentsController` **live** + consumer `Linm.Platform.Task.Bff` NuGet — **cấm** embed Task vào `Linm.RMMS.WebService` |
| common | `ChatSectionParcel` (`@linm/message`) · `ChatTab` · `CommentsTab` · `routeMap` · `useAppToast` |
| devSlash | `/integrate-task-service` · `/integrate-message-service` (`client_scope=both`) |
| prior | PO **done** · analy hash `sha256:49011e5dfcb8bbbb15adc781a60d62ba44446985c9dbf397806ba69dda786c54` |
| dependsOn | `platform-message` · `platform-task` QA green (prereq P1) |
| taskId | `task_5638b6a9` |
| updatedAt | `2026-08-27T05:15:00.000Z` |

## 0. Context / live peer (hash skip — **cấm** demo crawl)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/plan/platform-task/RMMS-TUAN-DUONG.md` | integration plan |
| CTX-02 | `docs/context/24-TUAN-DUONG-DUONG-BO.md` | hub tuần đường |
| CTX-03 | `docs/context/25-PLATFORM-TASK.md` | CreateTask `domainSource=patrol` |
| CTX-04 | `docs/context/26-MESSAGE-PARCEL.md` | ChatSectionParcel · routeMap |
| CTX-05 | `docs/context/features/patrol.md` | `/td-tk` live |
| CTX-06 | `docs/context/features/incident.md` | `/su-co` live |
| DA-01 | `specs/_data-analy/features/rmms-task-integrate-control-hint.md` | controlHint SSOT |
| DA-02 | `specs/_data-analy/features/rmms-task-integrate-real-data.md` | §A–§F cite |
| PO-01 | `specs/rmms-task-integrate/po/requirement.md` | DoD · Screens · AC |
| DEM | **N/A** | platform-pack-live-mfe · zone ref only |
| LIVE-FIELD-PATROL | `D:\AI-QLBD\MFE-Source\Linm.Web.RMMS.Field\src\pages\PatrolFormPage` | CRUD phiên · **thiếu** CTA «Giao việc» |
| LIVE-FIELD-INC | `D:\AI-QLBD\MFE-Source\Linm.Web.RMMS.Field\src\pages\IncidentListPage` | row menu «Giao việc» = mock `assignName` overlay |
| LIVE-TASK | `D:\MFE-CORE\Linm.Web.Task` · `HandoffBanner` · `ChatSectionHost` | patrol-only banner stub · parcel mount shipped |
| LIVE-PARCEL | `D:\MFE-CORE\Linm.Web.Message\src\parcels\ChatSectionParcel.tsx` | shipped · mode=`both` · routeMap |
| LIVE-API | Medical `task/endpoint.ts` · RMMS patrol/incident controllers | create + messages cite |

**real_view_parity:** `v1` · peer = live Field + Task MFE + Message parcel — **không** clone demo host/chrome.

---

## 1. Kind + UI pattern (HARD — **không** Kind B grid A–D)

| | |
|--|--|
| Feature Kind | **Platform integration** (action/modal on Field + banner + chat parcel on Task) |
| List / Grid catalog | **N/A** — **cấm** DES-GRID A–D · **cấm** new list page Field |
| Form CRUD | Patrol/incident CRUD **giữ nguyên** — integration = modal Zone B only |
| Surfaces | S-PATROL-FOOTER · S-INCIDENT-ACTION · S-GIAO-VIEC-MODAL · S-POST-CREATE · S-TASK-HANDOFF · S-CHAT-SECTION |
| Chat pattern | **Modern chat/message** via `ChatSectionParcel` — send `fa-paper-plane` · expand `TabSlideout` · ↗ `routeMap` |
| Skip | logo · GOVOne · demo localStorage CV · Field chat form · Notification Giao việc P2 |

### Visual direction — integration modal + task handoff + chat parcel

- **Field footer:** primary «Kết ca» giữ · secondary «Giao việc» outline — **cấm** inline task form
- **Giao việc modal:** centered overlay · title prefill readonly context strip · form 2-col desktop / 1-col mobile · label **13px** · input D14/M16
- **Priority chips:** map severity đỏ/cam/vàng → `critical`/`high`/`medium` (SA chốt enum)
- **Post-create:** success toast + shell navigate `/platform-task/cv/{id}?from=patrol|incident&sourceId=`
- **Task banner:** soft amber read-only strip ↗ source — extend `HandoffBanner` patrol **+** incident
- **Chat zone:** reuse **`DES-MSG-SEC-*`** parcel SSOT — bubble thread · sticky composer · mute · expand
- Tokens: `--color-surface` / primary blue · banner `#fffbeb` (cite live `HandoffBanner.module.css`)

---

## 2. Screens / zones (PO §6 expand)

| Surface | Pattern | Mount | Zones (DES-RTI-*) | Actions |
|---------|---------|-------|-------------------|---------|
| **S-PATROL-FOOTER** | Detail footer actions | Patrol `/td-tk/:id` view mode | **DES-RTI-PATROL-FOOTER** | Kết ca · Giao việc → modal |
| **S-INCIDENT-ACTION** | Row menu / detail CTA | Incident `/su-co` | **DES-RTI-INC-ACTION** | Giao việc → modal (thay mock assign) |
| **S-GIAO-VIEC-MODAL** | Confirm modal Zone B | Patrol + Incident shared | **DES-RTI-MODAL** | prefill · POST · cancel |
| **S-POST-CREATE** | Toast + navigate | Field shell | **DES-RTI-NAV** | success → `/cv/:id?from=&sourceId=` |
| **S-TASK-HANDOFF** | Read-only banner Zone D | Task `/cv/:id` | **DES-RTI-SOURCE-BANNER** | ↗ `/td-tk/:id` hoặc `/su-co/:id` |
| **S-CHAT-SECTION** | Parcel Zone E | Task detail | **DES-MSG-SEC-*** (cross-ref platform-message) | send · comment · mute · expand |
| **S-SKIP** | — | demo chrome · Field chat | — | deep-link only |

### Zone ids (prototype `data-des-id`)

| id | Surface | Content |
|----|---------|---------|
| `DES-RTI-PATROL-FOOTER` | Patrol detail | «Kết ca» primary · «Giao việc» secondary · context readonly strip |
| `DES-RTI-INC-ACTION` | Incident | row menu «Giao việc» · severity chip → priority hint |
| `DES-RTI-MODAL` | Modal | title · description · priority · assignmentStrategy · assigneeId · dueDate · hidden domain fields · Tạo CV / Hủy |
| `DES-RTI-NAV` | Handoff | toast success + URL query `from` `sourceId` |
| `DES-RTI-SOURCE-BANNER` | Task detail | «Từ tuần tra» / «Từ sự cố» read-only ↗ — **cấm** CRUD source |
| `DES-MSG-SEC-TAB` | Task detail | Tabs index 0 Trao đổi · 1 Bình luận (parcel SSOT) |
| `DES-MSG-SEC-CHAT` | Task detail | ChatTab + composer + `fa-paper-plane` |
| `DES-MSG-SEC-CMT` | Task detail | CommentsTab thread + Gửi Comment |
| `DES-MSG-LEAVE` | Overlay | `LeaveConfirmModal` dirty composer |
| `DES-RTI-PREREQ` | Field CTA | disabled «Giao việc» + tooltip khi platform QA chưa green |

**Cấm** `DES-GRID-A`…`D` trên artifact này.

Field patrol/incident: **`tabs: none`** (modal only).

---

## 3. Current → New (Design chốt)

| Layer | Current (live inventory 2026-08-27) | New (design) |
|-------|-------------------------------------|--------------|
| Patrol `/td-tk/:id` | `PatrolFormPage` CRUD · **không** CTA «Giao việc» (**GAP-RTI-PATROL-01**) | Footer «Kết ca» giữ · thêm «Giao việc» → modal Zone B |
| Patrol Cấp bách | Điểm đỏ/cam chưa auto-suggest (**GAP-RTI-PATROL-02**) | Modal prefill priority + dueDate SLA 24–48h |
| Incident `/su-co` | Row «Giao việc» = mock `assignName` overlay (**GAP-RTI-INC-01**) | Shared modal → `POST /tasks` `domainSource=incident` |
| Post-create nav | Absent / hard-code (**GAP-RTI-ROUTE-01**) | `/platform-task/cv/{id}?from=&sourceId=` · shell `routeMap` |
| Task banner | `HandoffBanner` patrol-only `?from=patrol` | Extend patrol **+** incident ↗ source (**Zone D**) |
| Chat on Field | Absent (đúng — **GAP-RTI-CHAT-01**) | Deep-link Task only · `ChatSectionParcel` `mode=both` |
| Chat parcel | `ChatSectionHost` mount shipped · `TASK_MESSAGE_ROUTE_MAP` task only | Add `incident` key to host `routeMap` |
| BE RMMS | none Task controller (đúng) | Consumer `Linm.Platform.Task.Bff` NuGet (**GAP-RTI-BFF-01**) |
| Prereq gate | none | Disable CTA + tooltip «Đang triển khai Platform Task» P1 |

### GAP close map (Design → Dev)

| ID | Design zone / prop | Dev |
|----|--------------------|-----|
| GAP-RTI-PATROL-01 | DES-RTI-PATROL-FOOTER · DES-RTI-MODAL | Field patrol footer + shared modal |
| GAP-RTI-PATROL-02 | modal prefill priority/dueDate | severity map derive |
| GAP-RTI-INC-01 | DES-RTI-INC-ACTION · replace mock assign | IncidentListPage |
| GAP-RTI-CHAT-01 | DES-MSG-SEC-* on Task only | **cấm** Field mount |
| GAP-RTI-ROUTE-01 | DES-RTI-NAV · routeMap §5 | shell inject |
| GAP-RTI-BFF-01 | — | SA/Dev NuGet consumer |
| GAP-MSG-ROUTE-01 | routeMap `task` + `incident` | ChatSectionHost + shell |
| GAP-TD-PRIORITY-01 | priority dropdown default | SA chốt enum |
| GAP-PT-SOURCE-01 | hidden POST fields | SA chốt DTO |
| GAP-TYP-01 | label 13 · input D14/M16 | prototype + Dev |
| GAP-RTI-PREREQ | DES-RTI-PREREQ disabled CTA | feature flag until platform QA green |

---

## 4. Field inventory / control-map (Control = controlHint — **không** đoán)

### Patrol session footer (Zone DES-RTI-PATROL-FOOTER)

| uiField | Label VN | Control | Required | Zone | Notes |
|---------|----------|---------|----------|------|-------|
| sessionIdCode | Mã ca | Text readonly | — | DES-RTI-PATROL-FOOTER | `GET /patrol/sessions/{id}` |
| sessionRoute | Tuyến | Text readonly | — | DES-RTI-PATROL-FOOTER | prefill modal title |
| ketCa | Kết ca | action primary | — | DES-RTI-PATROL-FOOTER | giữ supervise — **không** gộp create task |
| giaoViec | Giao việc | action secondary | — | DES-RTI-PATROL-FOOTER | mở DES-RTI-MODAL · prereq gate |
| linkedTaskId | CV liên kết | Text readonly + link | — | DES-RTI-PATROL-FOOTER | P2 chip `/cv/:id` |

### Giao việc modal (Zone DES-RTI-MODAL · patrol + incident shared)

| uiField | Label VN | Control | Required | catalogKind | Notes |
|---------|----------|---------|----------|-------------|-------|
| title | Tiêu đề | Text | * | — | prefill «Xử lý điểm Cấp bách — {route}» hoặc incident title |
| description | Ghi chú | Text (textarea) | | — | D14/M16 · optional |
| priority | Ưu tiên | Dropdown | * | task-priority | GAP-TD-PRIORITY-01 · default từ severity |
| assignmentStrategy | Cách gán | Dropdown | * | task-assignment-strategy | `pool` patrol · `direct` incident |
| assigneeId | Người nhận | SearchInput | | users | khi `direct` P2 |
| dueDate | Hạn xử lý | Date | * | — | Cấp bách 24–48h UTC |
| domainSource | Nguồn (hidden) | Text hidden | * | domain-source | `patrol` \| `incident` |
| sourceEntityType | Loại nguồn (hidden) | Text hidden | * | — | `patrol_session` \| `incident` |
| sourceEntityId | Id nguồn (hidden) | Text hidden | * | — | Guid |
| confirmGiaoViec | Tạo công việc | action primary | * | — | `POST /web-bff/api/v1/tasks` |
| cancelModal | Hủy | action | | — | đóng modal · **cấm** alert |

### Incident action (Zone DES-RTI-INC-ACTION)

| uiField | Label VN | Control | Notes |
|---------|----------|---------|-------|
| incidentIdCode | Mã VĐ | Text readonly | `VD-yyyyMMdd-nnnn` |
| severity | Mức độ | Text readonly (chip) | → priority map |
| giaoViec | Giao việc | action | thay mock `assignName` overlay |
| linkedTaskChip | Công việc | Text readonly + link | P2 by `sourceEntityId` |

### Task detail handoff + chat (Zone D + E)

| uiField | Label VN | Control | Zone | Notes |
|---------|----------|---------|------|-------|
| sourceBanner | Nguồn | Text readonly + action ↗ | DES-RTI-SOURCE-BANNER | `?from=` `sourceId=` |
| messageBody | Nhắn tin | Text | DES-MSG-SEC-CHAT | POST `type=message` |
| sendChat | Gửi | action `fa-paper-plane` | DES-MSG-SEC-CHAT | parcel only |
| commentBody | Bình luận | Text (textarea) | DES-MSG-SEC-CMT | POST `type=comment` |
| sendComment | Gửi Comment | action `fa-paper-plane` | DES-MSG-SEC-CMT | |
| mute | Thông báo | action `fa-bell` | DES-MSG-SEC-CHAT | `useEntitySubscription` |
| expandPanel | Mở rộng | action `fa-expand` | DES-MSG-SEC-* | `TabSlideout` |

`controlHint=UNCLEAR`: **none**.

### Tab index (HARD · GAP-TAB-01)

**Field patrol/incident:** `tabs: none` (modal only).

**Task detail (`/cv/:id`):**

| Index | id | VN | Component |
|-------|-----|-----|-----------|
| 0 | `chat` | Trao đổi | `ChatSectionParcel` → ChatTab |
| 1 | `comments` | Bình luận | `ChatSectionParcel` → CommentsTab |

**Cấm** reorder / invent tab P1.

---

## 5. routeMap + mount shape (Design chốt · TL path confirm)

Reuse prop shape từ `platform-message` design §5 (live `ChatSectionParcel.tsx`):

```ts
type MessageRouteMap = Partial<Record<MessageEntityType, (id: string) => string>>;

/** RMMS shell inject — GAP-RTI-ROUTE-01 · GAP-MSG-ROUTE-01 */
const RMMS_MESSAGE_ROUTE_MAP: MessageRouteMap = {
  task: (id) => `/cv/${id}`,
  incident: (id) => `/su-co/${id}`,
};
```

**Post-create navigation (HARD):**

| Surface | URL |
|---------|-----|
| Web shell | `/platform-task/cv/{taskId}?from=patrol&sourceId={sessionId}` |
| Incident create | `?from=incident&sourceId={incidentId}` |
| RMMS routeMap | `task→/cv/:id` · `incident→/su-co/:id` |

**CreateTask body (cite real-data §B):**

```json
{
  "title": "Xử lý điểm Cấp bách — QL.1 km 12",
  "description": "Từ kết ca tuần đường",
  "priority": "high",
  "assignmentStrategy": "pool",
  "dueDate": "2026-08-28T10:00:00Z",
  "domainSource": "patrol",
  "sourceEntityType": "patrol_session",
  "sourceEntityId": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee"
}
```

**HandoffBanner extend (live cite `HandoffBanner.tsx`):**

```tsx
// Current: from === 'patrol' only
// New: from === 'patrol' | 'incident' → link ↗ /td-tk/:id | /su-co/:id
```

**ChatSectionHost mount (live cite):**

```tsx
<ChatSectionHost
  taskId={task.id}
  onNavigate={navigate}
  routeMap={{
    task: (id) => `/cv/${id}`,
    incident: (id) => `/su-co/${id}`,
  }}
/>
```

**Cấm** copy ChatTab/CommentsTab markup vào Field — parcel + deep-link only.

---

## 6. Leave / alert / prereq

| Case | Control | Cấm |
|------|---------|-----|
| Modal dirty · đóng / Hủy | `LeaveConfirmModal` hoặc discard confirm | `window.confirm` |
| Composer dirty on Task parcel | `DES-MSG-LEAVE` via parcel | `window.confirm` |
| create 422/5xx | `useAppToast` business message · modal stays open | `window.alert` · silent success |
| session/incident 404 | toast · **cấm** mở modal | |
| platform prereq blocked | disable «Giao việc» + tooltip `DES-RTI-PREREQ` | |
| SignalR | group `Task_{id}` Task page only | Field subscribe |

---

## 7. Platform AC (Design mirror PO)

| ID | AC | Prototype zone |
|----|-----|----------------|
| AC-I-01 | Patrol «Giao việc» → modal → POST → navigate | DES-RTI-PATROL-FOOTER · DES-RTI-MODAL |
| AC-I-02 | Incident «Giao việc» thay mock assign | DES-RTI-INC-ACTION |
| AC-I-03 | Post-create URL `from` + `sourceId` | DES-RTI-NAV |
| AC-I-04 | Task banner ↗ patrol/incident read-only | DES-RTI-SOURCE-BANNER |
| AC-I-05 | Chat/comment Task parcel send + expand + ↗ | DES-MSG-SEC-* |
| AC-I-06 | **Cấm** ChatTab mount Field | note Skip |
| AC-I-07 | **Cấm** RMMS embed TasksController | note SA |
| AC-I-08 | Toast errors — **cấm** alert | note Dev |
| AC-I-09 | Prereq platform QA gate on CTA | DES-RTI-PREREQ |
| AC-I-10 | label 13 · input D14/M16 | prototype CSS |
| AC-I-11 | Mobile = deep-link sibling — **cấm** native chat | note P2 defer |

---

## Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/rmms-task-integrate-prototype.html` |
| Zones | **DES-RTI-PATROL-FOOTER** · **DES-RTI-INC-ACTION** · **DES-RTI-MODAL** · **DES-RTI-NAV** · **DES-RTI-SOURCE-BANNER** · **DES-MSG-SEC-*** · **DES-RTI-PREREQ** |
| Scope | content-only — **skip** logo · GOVOne · demo mock · Field chat |
| SSOT | platform-pack-live-mfe · hub 24/25/26 · live Field + Task + ChatSectionParcel · **cấm** DES-GRID |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/rmms-task-integrate/ui/prototype/rmms-task-integrate-prototype.html` |
| **peerStdUrl** | `http://localhost:9301/rmms-task-integrate` |
| **real_view_parity** | `v1` |
| shared_grid_example | **N/A** (packKind=platform) |

### Wire (integration — REQUIRED)

```
[PATROL-FOOTER]  context strip · «Kết ca» primary · «Giao việc» secondary
[INC-ACTION]     row menu «Giao việc» · severity chip
[MODAL]          title prefill · description · priority · strategy · assignee · dueDate · Tạo CV / Hủy
[NAV]            toast success → /cv/:id?from=patrol&sourceId=
[BANNER]         «Từ tuần tra» / «Từ sự cố» read-only ↗
[SEC-TAB]        0 Trao đổi | 1 Bình luận (ChatSectionParcel)
[SEC-CHAT]       mute · expand · bubbles · messageBody · fa-paper-plane
[SEC-CMT]        comment thread · commentBody · Gửi Comment
[PREREQ]         disabled Giao việc + tooltip
[LEAVE]          LeaveConfirmModal (dirty composer)
```

---

## 8. Handoff → SA (`/agent-sa`)

| Field | Value |
|-------|-------|
| design_confirm | **approve** (autopilot) |
| reviewUrl | file://…/rmms-task-integrate-prototype.html |
| zone ids | DES-RTI-* + DES-MSG-SEC-* (không DES-GRID) |
| control-map | §4 = controlHint |
| API | RMMS patrol/incident live + Platform Task BFF cite · **cấm** invent `api/v1/rmms/tasks` |
| create→API | modal fields ↔ `POST /web-bff/api/v1/tasks` body §5 |
| routeMap | §5 · path exact = TL `route_confirm` |
| GAP-TD-PRIORITY-01 | SA chốt severity → priority enum |
| GAP-PT-SOURCE-01 | SA chốt `domainSource` column |
| Next | sa → team-lead → dev → qa → review = **pending** đến lượt |
| e2e | queued `/agent-qa*` only — Design **không** chạy e2e/start:std |

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.08.25.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.02 |
| rulesVersion | 2026.08.25.7 |
| generatedAt | 2026-08-27T05:15:00.000Z |
| versionGate | rechecked |
| contentHashPriorDataAnaly | sha256:49011e5dfcb8bbbb15adc781a60d62ba44446985c9dbf397806ba69dda786c54 |
| headerFingerprintPrior | sha256:rmms-task-integrate-integration-v1 |
| real_view_parity | v1 |
| taskId | `task_5638b6a9` |

---
<!-- Version meta: skillVersion=2026.08.25.02 · schemaVersion=1 · workflowVersion=2026.08.25.02 · rulesVersion=2026.08.25.7 · versionGate=rechecked -->
