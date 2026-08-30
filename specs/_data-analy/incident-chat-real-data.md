# Real-data bind — incident-chat (mobile)

| | |
|---|---|
| feature | `incident-chat` |
| prefix | `mobile-bff/api/v1` |
| sameMobile | yes · proxy Incident domain (khi P2 Signed) |
| taskId | `task_9e8d18c5` |

Skill: `example/real-data-bind.md` · **GAP-MOB-REAL-01**

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `local` | demo toast «Trao đổi sự cố» · `#i-chat` | n/a | n/a — P1 không HTTP |
| `api` | CTX `incident-chat.md` · `incident.md` · comments **DEFER** | — | **cấm** fake comments |
| `derived` | card `Id` từ parent list (nav arg P2) | missing id → toast only | **cấm** invent id |
| `catalog` | n/a P1 | — | — |

## §B — Bind field (HARD · khớp BFF table)

| uiField | Label | controlHint | catalogKind | GET / write | write field | sameMfe | sameMobile |
|---------|-------|-------------|-------------|-------------|-------------|---------|------------|
| actChat | Trao đổi | IconButton `#i-chat` | — | local tap | — | n/a | yes |
| toastChat | Trao đổi sự cố | Toast | — | local | — | n/a | yes |
| incidentId | — | Hidden | — | parent card `Id` (P2) | — | gap | yes |
| threadList | (DEFER) | List | — | `GET …/comments` **DEFER** | — | gap | gap |
| messageBody | (DEFER) | MultilineText | — | — | body | gap | gap |
| btnSend | (DEFER) | PrimaryButton | — | `POST …/comments` **DEFER** | CommentCreate | gap | gap |

§B path **khớp** `incident-chat-bff-endpoints.md` — P1 **không** HTTP · P2 **cấm** invent path.

### Display rules (P1)

| Line | Rule |
|------|------|
| toast | Fixed copy «Trao đổi sự cố» · dual iOS/Android |
| icon | `#i-chat` only · **cấm** invent |
| comments | **không** bind · **không** fake list |
| success send | **DEFER** — **cấm** toast «Đã gửi» khi chưa Signed |

### Display rules (P2 · khi Signed — Design/SA)

| Line | Rule |
|------|------|
| header | optional `GET incident/incidents/{id}` → `Code` · `Title` |
| thread | comments DTO from live API only |
| send | POST 200 → toast OK · append · fail → toast lỗi · **cấm** fake 200 |

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| — | n/a P1 | — | Invent comment catalog |

## §D — Map / vẽ

`map: none`.

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| Toast shown | local | user tap `#i-chat` | — | toast |
| Comments (P2) | DEFER entity | user send | POST comments | sheet |
| Incident status | OUT | — | — | **không** đổi từ chat P1 |

## §F — Handoff

| Role | Dùng packet |
|------|-------------|
| PO | DoD toast P1 · GAP sheet packKind · comments DEFER |
| Design | dual toast · optional `DES-MOB-INC-CHAT` sheet khi Signed |
| SA | **cấm** invent comments · cite DEFER · Step 4b sau Signed |
| Dev iOS + Android | toast entry · **cấm** composer P1 |

## Demo rows SSOT (fallback)

| Field | Value |
|-------|-------|
| Toast | Trao đổi sự cố |
| Icon | `#i-chat` |
| Card context (parent) | SC-2401 / SC-2398 — **không** bind trên toast |

## § Cấm

- Watermark / «bản Gói N» / process text  
- Fake comment thread / fake POST  
- Invent mobile-only path `incident-chat`  
- Bind `mfeStdUrl`  
- Skip §B ≠ BFF → **GAP-MOB-REAL-01**  
- Gộp list/detail/create vào slug → **GAP-MOB-ACT-02**  
- Enqueue toast / comments submit → **GAP-MOB-ACT-07**  

## Gaps

| ID | Note |
|----|------|
| GAP-MOB-INC-CHAT-UI-01 | packKind sheet vs toast demo |
| GAP-MOB-INC-CHAT-API-01 | comments DEFER · không live |
| GAP-MOB-REAL-01 | P1 local-only · §B khớp BFF (no invent) |

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
| contentHash | sha256:incident-chat-mobile-real-data-20260829 |
| taskId | `task_9e8d18c5` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
