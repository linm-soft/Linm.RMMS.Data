# PO — Requirement — rmms-task-integrate

| Field | Value |
|-------|-------|
| feature | `rmms-task-integrate` |
| this role | `po` · `/agent-po` |
| changeScope | `edit_page` |
| packKind | **`platform`** (integration · PO confirm · **không** list/report/master Field) |
| Feature Kind | RMMS Field touchpoints (patrol `/td-tk` · incident `/su-co`) → Platform Task create + deep-link `/cv/:id` + **`ChatSectionParcel`** |
| gap | GAP-RTI-* · GAP-TD-PRIORITY-01 · GAP-PT-SOURCE-01 · GAP-MSG-ROUTE-01 (cite analy) |
| mode | `feature_context` · **no Excel** |
| status | `done` |
| requestSource | run packet `task_74794df9` · `/agent-qldb-workflow` · roleOnly=`po` · `/agent-po` |
| autoApprove | **ON** (Design/SA/Review khi tới lượt → agent tự confirm · enqueue role kế) |
| e2eQa | **ON** — queued tới `/agent-qa*` · **cấm** e2e / `yarn start:std` ở role PO |
| prior | data-analy **done** · hash skip · `specs/_data-analy/features/rmms-task-integrate-control-hint.md` · `rmms-task-integrate-real-data.md` · contentHash `sha256:49011e5dfcb8bbbb15adc781a60d62ba44446985c9dbf397806ba69dda786c54` · **cấm** re-scan demo (**GAP-PO-DEMO-RESCAN-01**) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `Linm.Web.RMMS.Field` (patrol + incident) + `D:\MFE-CORE\Linm.Web.Task` (`@linm/task` · `/cv`) |
| mfeStdUrl | `http://localhost:9301/rmms-task-integrate` (integration verify · QA role) |
| backend | RMMS `PatrolSessionsController` · `IncidentsController` **live** + consumer `Linm.Platform.Task.Bff` NuGet — **cấm** embed Task vào `Linm.RMMS.WebService` |
| be_repo_confirm | `approved` (RMMS patrol/incident live · Task cite Medical/NuGet) |
| ui_repo_confirm | `approved` (Field edit_page modal · Task deep-link + parcel) |
| common | `ChatSectionParcel` (`@linm/message`) · `ChatTab` · `CommentsTab` · `routeMap` · `useAppToast` |
| devSlash | **`/integrate-task-service`** · **`/integrate-message-service`** (`client_scope=both`) |
| dependsOn | `platform-message` · `platform-task` QA green (prereq P1) |
| updatedAt | `2026-08-27T05:30:00.000Z` |
| taskId | `task_74794df9` · analy `task_adc7f208` |

## 1. Goal

Tích hợp **Platform Task + Message** vào RMMS Field tuần đường / sự cố: từ patrol session detail hoặc incident detail, NV bấm **«Giao việc»** → modal confirm → `POST /web-bff/api/v1/tasks` thật → navigate Task MFE `/cv/:id?from=patrol|incident&sourceId=` → trao đổi / bình luận qua **`ChatSectionParcel`** (send · expand · ↗).

Persona: NV tuần đường · Hạt duyệt ca · điều phối sự cố · người nhận việc trên Task MFE.

**packKind confirm:** `platform` (integration — PO chốt). **Không** new list page trong Field · **không** Grid Kind B catalog A–D · **không** mount ChatTab trên Field.

**Chat/message design:** modern parcel SSOT (`send` `fa-paper-plane` · `expand` `TabSlideout` · ↗ `routeMap`) — live cite `ChatSectionParcel.tsx` + `ChatSectionHost.tsx` — **cấm** fork ChatTab markup vào Field · **cấm** demo localStorage CV mock làm SSOT.

**Cấm ERP.*** · **cấm** `TasksController` embed RMMS · **cấm** `api/v1/tuan-duong-*` task paths · **cấm** `window.alert` · **cấm** re-scan demo HTML.

## 2. Current → New (edit_page · REQUIRED)

| Layer | Current (live inventory 2026-08-27) | New (delta PO chốt · copy analy) |
|-------|-------------------------------------|----------------------------------|
| Patrol Field `/td-tk/:id` | `PatrolFormPage` CRUD phiên · **không** CTA «Giao việc» · `patrolService` fallback `patrolStore` demo (**GAP-RTI-PATROL-01**) | Footer «Kết ca» giữ · thêm «Giao việc» → modal Zone B → POST task → navigate `/cv/:id` |
| Patrol Cấp bách | Điểm đỏ/cam chưa auto-suggest task (**GAP-RTI-PATROL-02**) | Confirm modal · map severity → `priority` + `dueDate` SLA 24–48h |
| Incident Field `/su-co` | Row menu «Giao việc» = modal mock assign tên (`assignName` input) — **không** CreateTask (**GAP-RTI-INC-01**) | Modal Zone B → `POST /tasks` `domainSource=incident` · `sourceEntityId=incidentId` |
| Notification Field | `window.alert('Giao việc — DEFER P2')` (**GAP-F-OPS-01**) | Out of scope P1 — incident `/su-co` là surface chính |
| Task create API | Medical `ITaskService.CreateTaskAsync` + `taskEndpoint.createTask` cite · RMMS.WebService **none** (đúng) | Consumer `Linm.Platform.Task.Bff` NuGet — **cấm** embed (**GAP-RTI-BFF-01**) |
| Post-create nav | Absent / hard-code | `/platform-task/cv/{id}?from=patrol\|incident&sourceId=` · RMMS `routeMap` `task→/cv/:id` · `incident→/su-co/:id` (**GAP-RTI-ROUTE-01**) |
| Chat on Field | Absent (đúng — **GAP-RTI-CHAT-01**) | Deep-link Task only · `ChatSectionParcel` `mode=both` tab 0 Trao đổi · 1 Bình luận |
| Task detail banner | `HandoffBanner` patrol-only stub (`?from=patrol`) | Extend Zone D: patrol + incident read-only ↗ `/td-tk/:id` hoặc `/su-co/:id` — **cấm** CRUD source |
| Chat parcel live | `ChatSectionParcel` ship `@linm/message` · `ChatSectionHost` mount `entityType=task` | Reuse — **cấm** copy vào Field |
| Medical ITaskService | Full lifecycle + `CreateTaskAsync` + unified messages | Bind create body `domainSource` · `sourceEntityType` · `sourceEntityId` — **GAP-PT-SOURCE-01** SA chốt column |
| Priority map | Màu đỏ/cam/vàng chưa map task enum (**GAP-TD-PRIORITY-01**) | `critical`/`high` Cấp bách · `medium` kế hoạch năm — SA chốt enum |
| Mobile channel | Web-App vs native dual (**GAP-TD-CHANNEL-01**) | Mobile Giao việc = sibling deep-link `/cv/:id` — **cấm** native chat form |
| Demo | `tuan-duong-web.html` · `task.html` localStorage | Zone/handoff ref only · **cấm** SSOT data |
| Prereq platform | `platform-message` + `platform-task` in pipeline | Block Giao việc CTA + tooltip «Đang triển khai Platform Task» until QA green P1 |

### GAP IDs (PO bắt buộc Design/Dev đóng P1 trừ DEFER)

| ID | New |
|----|-----|
| GAP-RTI-PATROL-01 | «Giao việc» modal trên patrol session detail |
| GAP-RTI-PATROL-02 | Cấp bách auto-suggest priority + dueDate |
| GAP-RTI-INC-01 | Thay mock assign bằng CreateTask thật |
| GAP-RTI-CHAT-01 | Chat chỉ trên `/cv/:id` via parcel |
| GAP-RTI-ROUTE-01 | RMMS shell `routeMap` + post-create query |
| GAP-RTI-BFF-01 | NuGet `Linm.Platform.Task.Bff` consumer — **cấm** RMMS embed |
| GAP-TD-PRIORITY-01 | Severity → task priority enum — SA chốt |
| GAP-PT-SOURCE-01 | `domainSource` POST body — **≠** list filter `source` |
| GAP-TD-CHANNEL-01 | Mobile deep-link only — **DEFER** native form P2 |
| GAP-F-OPS-01 | Notification Giao việc — **DEFER** P2 |

**Không đổi:** Patrol session CRUD path · Incident CRUD path · Task list/detail SSOT (`platform-task`) · Message parcel SSOT (`platform-message`) · Kết ca / supervise flow.

## 3. DoD (đo được)

1. Patrol session detail (`/td-tk/:id`): CTA «Giao việc» mở modal Zone B — **cấm** inline task form · «Kết ca» giữ nguyên.
2. Incident detail/list: «Giao việc» mở cùng modal pattern — **cấm** mock `assignName`-only overlay hiện tại.
3. Modal Zone B: title prefill · priority · dueDate · assignmentStrategy · assigneeId (direct) · hidden `domainSource` · `sourceEntityType` · `sourceEntityId`.
4. Confirm «Tạo công việc»: `POST /web-bff/api/v1/tasks` — success toast + navigate `/platform-task/cv/{id}?from=patrol|incident&sourceId=`.
5. 422/5xx: toast business message · modal stays open · **cấm** `window.alert` · **cấm** silent success.
6. Session/incident 404: toast · **cấm** mở modal.
7. Task detail: `HandoffBanner` read-only ↗ source entity — patrol + incident query params.
8. Task detail tabs: index **0** Trao đổi · **1** Bình luận — **`ChatSectionParcel`** `mode=both` — **cấm** reorder · **cấm** Field mount.
9. Send chat/comment: `fa-paper-plane` · POST `…/tasks/{id}/messages` `type=message|comment`.
10. Expand / ↗: parcel toolbar — **cấm** hard-code Medical-only path · host inject `routeMap`.
11. RMMS shell: `routeMap` `task→/cv/:id` · `incident→/su-co/:id` for parcel cross-links.
12. SignalR: group `Task_{id}` on Task page only — **cấm** Field subscribe `taskGroup`.
13. Typography: label **13** · input D14/M16 (**GAP-TYP-01**).
14. Prereq gate: disable «Giao việc» + tooltip khi `platform-task` / `platform-message` chưa QA green P1.
15. `yarn build` PASS **ở role Dev** (PO **cấm** build/e2e/start:std).

## 4. CTX / DEM / DI inventory (hash skip — đọc analy · **không** re-crawl)

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/plan/platform-task/RMMS-TUAN-DUONG.md` | integration plan |
| CTX-02 | `docs/context/24-TUAN-DUONG-DUONG-BO.md` | hub tuần đường |
| CTX-03 | `docs/context/25-PLATFORM-TASK.md` | hub task create |
| CTX-04 | `docs/context/26-MESSAGE-PARCEL.md` | hub chat parcel SSOT |
| CTX-05 | `docs/context/features/patrol.md` | `/td-tk` live |
| CTX-06 | `docs/context/features/incident.md` | `/su-co` live |
| DEM-01 | `Linm.RMMS.Demo/.../tuan-duong-web.html` · `task/task.html` | zone ref · **không** SSOT |
| DI-01 | — | **no Excel** |
| DA-01 | `D:\AI-QLBD\Linm.RMMS.Data\specs\_data-analy\features\rmms-task-integrate-control-hint.md` | controlHint SSOT |
| DA-02 | `D:\AI-QLBD\Linm.RMMS.Data\specs\_data-analy\features\rmms-task-integrate-real-data.md` | real-data §A–§F |
| MFE Field patrol | `D:\AI-QLBD\MFE-Source\Linm.Web.RMMS.Field\src\pages\PatrolFormPage` | live · no Giao việc yet |
| MFE Field incident | `D:\AI-QLBD\MFE-Source\Linm.Web.RMMS.Field\src\pages\IncidentListPage` | live · mock assign |
| MFE Task | `D:\MFE-CORE\Linm.Web.Task` · `HandoffBanner` · `ChatSectionHost` | target deep-link + parcel |
| MFE Message | `D:\MFE-CORE\Linm.Web.Message\src\parcels\ChatSectionParcel.tsx` | SSOT chat UI |
| MFE cite API | `D:\Medical\Linm.Web.Medical.Incidents\src\services\task\endpoint.ts` | createTask bind |
| BE cite | Medical `ITaskService` · RMMS patrol/incident controllers | API cite |
| BE consumer | `Linm.Platform.Task.Bff` NuGet P2 | **cấm** RMMS embed |
| COMMON | `ChatTab` · `CommentsTab` · `useMessages` · `resolveDetailRoute` | common-components |

Normalized header (analy): `domainSource|sourceEntityType|sourceEntityId|title|priority|assignmentStrategy|dueDate|assigneeId`

## 5. controlHint (PO chốt · copy data-analy — Design map UI · SA map API)

`controlHint=UNCLEAR`: **none**.

Pack **platform integration** = Kind **action/modal** trên Field existing pages + Kind **banner** read-only trên Task detail. **Không** new list page · **không** Grid Kind B catalog A–D.

### Zone A — Patrol session detail footer

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| sessionIdCode | Mã ca | `Text` readonly | — | `GET /patrol/sessions/{id}` |
| sessionRoute | Tuyến | `Text` readonly | road-route | prefill title modal |
| ketCa | Kết ca | action primary | — | giữ supervise — **không** gộp create task |
| giaoViec | Giao việc | action secondary | — | mở modal Zone B |
| linkedTaskId | CV liên kết | `Text` readonly | — | P2 chip link `/cv/:id` |

### Zone B — Giao việc modal (patrol + incident)

| Field key | Label | controlHint | required | catalogKind | Notes |
|-----------|-------|-------------|----------|-------------|-------|
| title | Tiêu đề | `Text` | * | — | prefill từ route/incident title |
| description | Ghi chú | `Text` | | — | textarea D14/M16 |
| priority | Ưu tiên | `Dropdown` | * | task-priority | GAP-TD-PRIORITY-01 |
| assignmentStrategy | Cách gán | `Dropdown` | * | task-assignment-strategy | pool patrol · direct incident |
| assigneeId | Người nhận | `SearchInput` | | users | khi `direct` P2 |
| dueDate | Hạn xử lý | `Date` | * | — | Cấp bách 24–48h UTC |
| domainSource | Nguồn (hidden) | `Text` hidden | * | domain-source | `patrol` \| `incident` |
| sourceEntityType | Loại nguồn (hidden) | `Text` hidden | * | — | `patrol_session` \| `incident` |
| sourceEntityId | Id nguồn (hidden) | `Text` hidden | * | — | Guid |
| confirmGiaoViec | Tạo công việc | action primary | * | — | POST → navigate |
| cancelModal | Hủy | action | | — | **cấm** alert |

### Zone A — Incident detail

| Field key | Label | controlHint | Notes |
|-----------|-------|-------------|-------|
| incidentIdCode | Mã VĐ | `Text` readonly | `VD-yyyyMMdd-nnnn` |
| severity | Mức độ | `Text` readonly | chip → priority map |
| giaoViec | Giao việc | action | thay mock assign overlay |
| linkedTaskChip | Công việc | `Text` readonly + link | P2 by `sourceEntityId` |

### Zone D — Task detail handoff banner (read-only)

| Field key | Label | controlHint | Notes |
|-----------|-------|-------------|-------|
| sourceBanner | Nguồn | `Text` readonly + action ↗ | `?from=` `sourceId=` → `/td-tk/:id` hoặc `/su-co/:id` |
| chatSection | Trao đổi | parcel | `ChatSectionParcel` tab 0 |
| commentsSection | Bình luận | parcel | tab 1 · `mode=both` |

### Real-data bind (copy §B analy)

| uiField | GET (context) | write (create) | sameMfe |
|---------|---------------|------------------|---------|
| sessionIdCode/sessionRoute | `GET /patrol/sessions/{id}` | prefill title | Field patrol |
| giaoViecAction | — | opens modal | Field |
| title…sourceEntityId | derived | POST body | modal |
| confirmGiaoViec | — | `POST /tasks` | modal |
| taskDeepLink | — | navigate `/cv/:id` | shell |
| sourceBanner | query params | — | Task MFE |
| messageBody/commentBody | `GET /tasks/{id}/messages` | POST `type=` | Task only (parcel) |

**Prefix map — RMMS live (Field context)**

| Operation | Path |
|-----------|------|
| Patrol detail | `GET /web-bff/api/v1/patrol/sessions/{id}` |
| Incident detail | `GET /web-bff/api/v1/incident/incidents/{id}` |

**Prefix map — Platform Task (create + detail · cite until NuGet live)**

| Operation | Path |
|-----------|------|
| Create | `POST /web-bff/api/v1/tasks` |
| Detail | `GET /web-bff/api/v1/tasks/{id}` |
| Messages | `GET/POST /web-bff/api/v1/tasks/{id}/messages` |

## 6. Screens / zones (integration · **cấm** Kind B grid A–D)

| Zone | Pattern | Host | DoD |
|------|---------|------|-----|
| A | Session/detail footer actions | Patrol `/td-tk/:id` · Incident `/su-co` | «Kết ca» giữ · «Giao việc» → modal |
| B | Giao việc modal | Patrol + Incident | title prefill · priority · due · assignee/pool · confirm |
| C | Post-create handoff | Field toast + navigate | success → `/cv/:id?from=&sourceId=` |
| D | Task detail context banner | `Linm.Web.Task` `/cv/:id` | read-only link ↗ source — **cấm** CRUD source |
| E | Chat | Task detail tab | `ChatSectionParcel` — **cấm** mount Field |
| Skip | — | demo chrome · Field chat · localStorage CV mock | |

Field patrol/incident: **`tabs: none`** (modal only).

Task detail tab order (cite platform-task Surface B):

| Index | id | VN | Kind |
|-------|-----|-----|------|
| 0 | `chat` | Trao đổi | `ChatSectionParcel` ChatTab |
| 1 | `comments` | Bình luận | `ChatSectionParcel` CommentsTab |

## 7. Platform AC (integration)

| AC | Mô tả |
|----|-------|
| AC-01 | Patrol «Giao việc» → modal → POST thật → navigate Task |
| AC-02 | Incident «Giao việc» thay mock assign |
| AC-03 | Post-create URL có `from` + `sourceId` query |
| AC-04 | Task banner ↗ patrol/incident read-only |
| AC-05 | Chat/comment chỉ trên Task parcel — send + expand + ↗ |
| AC-06 | **Cấm** ChatTab mount trên Field |
| AC-07 | **Cấm** RMMS embed TasksController |
| AC-08 | Toast errors — **cấm** alert |
| AC-09 | Prereq platform QA gate trên CTA P1 |
| AC-10 | Mobile = deep-link sibling — **cấm** native chat form |

## 8. Open questions (handoff SA / TL)

| ID | Question | Owner |
|----|----------|-------|
| GAP-TD-PRIORITY-01 | Exact enum map đỏ/cam/vàng → `critical`/`high`/`medium` | SA |
| GAP-PT-SOURCE-01 | `domainSource` column + DTO khi NuGet extract | SA |
| GAP-TD-CHANNEL-01 | Native handoff UX P2 | PO defer |
| Prereq | Unblock Dev khi `platform-message` + `platform-task` QA green | TL queue |

## 9. Handoff → Design (`/agent-design`)

| Field | Value |
|-------|-------|
| packKind confirm | **`platform`** (integration) |
| Kind / surfaces | Field modal Zone B + post-create Zone C + Task banner Zone D + **ChatSectionParcel** Zone E |
| Prototype | modal content-only · banner read-only · parcel tabs — **skip** demo chrome · GOVOne |
| reviewUrl | bắt buộc · `autoApprove=ON` → agent tự confirm Design |
| controlHint | §5 — **không** đoán Text vs SearchInput ngoài bảng |
| Screens | §6 · Platform AC §7 |
| Tab index Field | **none** (modal only) |
| Tab index Task chat | 0 Trao đổi · 1 Bình luận (parcel) |
| peerStdUrl | `http://localhost:9301/rmms-task-integrate` |
| BE | RMMS patrol/incident live + Task BFF NuGet cite — **cấm** invent RMMS task path |
| routeMap | Design ghi prop shape · TL chốt RMMS `/cv` + `/su-co` |
| prereq | `platform-message` + `platform-task` QA green |
| blockedReason | later until platform QA green — Dev integrate after |
| Next roles | design → sa → team-lead → dev → qa → review = **pending** đến lượt · chain ON |
| e2e | queued `/agent-qa*` only |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.4 |
| generatedAt | 2026-08-27T05:30:00.000Z |
| versionGate | rechecked |
| contentHashPriorDataAnaly | sha256:49011e5dfcb8bbbb15adc781a60d62ba44446985c9dbf397806ba69dda786c54 |
| headerFingerprintPrior | sha256:rmms-task-integrate-integration-v1 |
| orchestratorSkillVersion | 2026.08.25.01 |
| orchestratorWorkflowVersion | 2026.08.25.01 |
| dataAnalySkillVersion | 2026.08.25.01 |
| dataAnalyWorkflowVersion | 2026.08.25.01 |
| dataAnalyRulesVersion | 2026.08.25.4 |
| taskId | `task_74794df9` |

---
<!-- Version meta: skillVersion=2026.08.25.01 · schemaVersion=1 · workflowVersion=2026.08.25.01 · rulesVersion=2026.08.25.4 · versionGate=rechecked -->
