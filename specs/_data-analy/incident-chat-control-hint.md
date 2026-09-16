# Control hint — incident-chat (mobile · Trao đổi sự cố)

| | |
|---|---|
| feature | `incident-chat` |
| title | [Mobile] [Vấn đề] -> Trao đổi sự cố |
| kind | `sheet` (STATUS / BY-ACTION) · **demo surface P1** = **toast** (không `#sc-*` / `#sheet-incident-chat`) |
| packKind | **`sheet`** |
| changeScope | `new_page` |
| mode | `feature_context` |
| demo | `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-incident-list` card `#i-chat` → `toast('Trao đổi sự cố')` |
| ctx | `docs/context/features/incident-chat.md` · domain `incident.md` · peers `incident-list.md` · `incident-detail.md` · `mnt-chat` |
| map | `docs/html-to-native-map.md` · `_form-type-mobile/ACTION-TREE.md` · `BY-ACTION.md` |
| agent | `agent-data-analy-mobile` |
| at | `2026-08-29T10:34:45.000Z` |
| thisAction | **Trao đổi sự cố** only · entry list card `#i-chat` · **cấm** gộp list / detail / create / `#sheet-incident` / `mnt-chat` |
| taskId | `task_9e8d18c5` |
| autoApprove | `ON` |
| status | **confirmed** |

**Cấm:** watermark Gói · invent `api/v1/incident-chat` · invent `POST …/comments` live · gộp `#sc-incident-list` / `#sc-incident-detail` / `#sc-inc-form` · ERP.* · mfeStdUrl · system alert · fake comment thread · composer UI khi API DEFER.

## Skill packet (`/agent-data-analy-mobile`) — 4 file

| File | Skill step |
|------|------------|
| **file này** | 4–5 controlHint + tech factors |
| [`incident-chat-bff-endpoints.md`](incident-chat-bff-endpoints.md) | 6 BFF · **cấm invent** |
| [`incident-chat-action-tree.md`](incident-chat-action-tree.md) | 7 tree + share/reuse |
| [`incident-chat-real-data.md`](incident-chat-real-data.md) | 6b real-data bind |

## § Delta Current vs New (`new_page`)

| ID | Current (native) | New (SSOT mobile demo + CTX) | Surface |
|----|------------------|------------------------------|---------|
| GAP-MOB-INC-CHAT-NAV-01 | List card `#i-chat` → toast (owned by `incident-list` copy) | Pack `incident-chat` **owns** Trao đổi action · same toast P1 | entry |
| GAP-MOB-INC-CHAT-TOAST-01 | Toast «Trao đổi sự cố» | **Giữ** dual toast SSOT · **cấm** fake success comment | toast |
| GAP-MOB-INC-CHAT-UI-01 | Không sheet / screen chat | STATUS packKind=`sheet` vs demo toast — Design/PO chốt P1 toast · sheet **DEFER** | meta |
| GAP-MOB-INC-CHAT-API-01 | — | `POST …/comments` **DEFER** · không live `IncidentsController` — **cấm** invent | BFF |
| GAP-MOB-INC-CHAT-DES-01 | — | Chưa `DES-MOB-INC-CHAT` / `#sheet-incident-chat` — Design khi comments Signed | Design |
| GAP-MOB-INC-CHAT-CTX-01 | CTX file thiếu | Tạo `incident-chat.md` · cite domain Incident | meta |

**Không** đổi (OUT pack): list Kind F · detail · create form · `#sheet-incident` · assign/close · map · `mnt-chat` · platform-message parcel.

**Reuse:** domain Incident · entry trên `incident-list` cards · icon `#i-chat` · toast kit.

## UI control — entry `#i-chat` (P1 toast)

| Field / zone | controlHint | Kit (iOS + Android) | Native |
|--------------|-------------|---------------------|--------|
| actChat | Trao đổi | `LinmIconButton` `#i-chat` | on card · `stopPropagation` |
| toastChat | Trao đổi sự cố | `LinmToast` | after tap · **no HTTP** |
| sheetChat | (DEFER) | — | **cấm** ship composer P1 |
| threadList | (DEFER) | — | **cấm** fake messages |
| composer | (DEFER) | TextArea + Send | khi comments Signed |
| btnSend | (DEFER) | PrimaryButton | POST comments |

## Fields

| Field | VN | controlHint | Required | Source | Notes |
|-------|----|-------------|----------|--------|-------|
| actChat | Trao đổi | IconButton | * | demo `#i-chat` | entry · title attr |
| toastChat | Trao đổi sự cố | Toast | * | demo / `inc.list.toast.chat` | P1 only UX |
| incidentId | — | Hidden | * | parent card `Id` | pass nav arg P2 · **không** bind UI P1 |
| sheetTitle | Trao đổi sự cố | TopBar | | Design P2 | DEFER |
| messageBody | Nội dung | MultilineText | | Design P2 | DEFER · **cấm** P1 |
| btnSend | Gửi | PrimaryButton | | Design P2 | DEFER · cùng slug khi Signed |

### Copy SSOT (P1)

| Key | VN |
|-----|-----|
| toast | Trao đổi sự cố |
| icon title | Trao đổi |
| icon | `#i-chat` **cấm** invent |

## § Tab index

`tabs: none` trên surface chat — entry từ list trong shell tab `incident` (**giữ** Tab 5). **Không** segment trên toast (`GAP-TAB-01`).

## § Demo dual

| # | iOS | Android | `#i-*` |
|---|-----|---------|--------|
| Entry | card `#i-chat` toast | **same** | `#i-chat` |
| Toast copy | Trao đổi sự cố | **same** | — |
| Sheet / composer | **thiếu** | **thiếu** | — · GAP-MOB-INC-CHAT-UI-01 |
| Thread | **thiếu** | **thiếu** | — |

**Cấm** invent icon. Chrome card actions flex dàn đều = parent list — **không** đổi layout list trong pack này.

## Kit map

| Demo chrome | Map | Kit dual |
|-------------|-----|----------|
| `#i-chat` button | icon CTA | `LinmIconButton` |
| `toast('Trao đổi sự cố')` | toast | `LinmToast` |
| (P2 sheet) | sheet | `LinmSheet` / bottom sheet — Design |
| (P2 composer) | textarea + send | `LinmTextArea` · `LinmPrimaryButton` |

## Tech factors

| Factor | Detail P1 | Note |
|--------|-----------|------|
| GPS | no | — |
| camera | no | media attach OUT P1 / DEFER |
| offline | toast local OK | comments POST cần online khi Signed |
| map | no | — |
| biometric | no | — |
| push | no | notify new comment **DEFER** |
| token | Keychain / Encrypted | Bearer khi P2 BFF |

## Hành vi (không `alert`)

| Case | UI |
|------|-----|
| Tap `#i-chat` trên card | Toast «Trao đổi sự cố» · **không** mở detail · **không** HTTP |
| P1 comments | **DEFER** — **cấm** fake thread / fake POST 200 |
| P2 Signed comments | Sheet + GET/POST comments · toast gửi OK — Design/SA/Dev sau |
| Fail network (P2) | Toast lỗi · **cấm** fake ok |

## UNCLEAR

**none** — demo toast + CTX DEFER comments chốt · packKind sheet vs toast = GAP (không UNCLEAR UI P1).

## Handoff → PO

| Field | Value |
|-------|-------|
| feature / packKind | `incident-chat` / **sheet** (GAP-MOB-INC-CHAT-UI-01 · demo toast P1) |
| phase_from / phase_to | `data_analy` **done** → `po` |
| BFF | `incident-chat-bff-endpoints.md` |
| Action tree | `incident-chat-action-tree.md` |
| Real-data | `incident-chat-real-data.md` |
| DoD P1 | Dual toast «Trao đổi sự cố» · entry `#i-chat` · **cấm** comments API |
| Out | list/detail/create · invent path · composer P1 |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | `2026-08-29T10:34:45.000Z` |
| versionGate | rechecked |
| contentHash | sha256:incident-chat-mobile-control-hint-20260829 |
| ctxHash | sha256:incident-chat-ctx-20260829 |
| demoHash | `394ab44597648f04` (ios prototype prefix) |
| taskId | `task_9e8d18c5` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
