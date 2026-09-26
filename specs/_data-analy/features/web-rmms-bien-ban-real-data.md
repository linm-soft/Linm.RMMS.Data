# Data-analy — real-data bind — web-rmms-bien-ban

| Field | Value |
|-------|-------|
| feature | `web-rmms-bien-ban` |
| title | Đề nghị lập biên bản |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_41debbaa` |
| prefix API | `api/v1/patrol` |
| prefix BFF web (cite) | `web-bff/api/v1/patrol/*` · **không** base client |
| prefix BFF mobile (HARD) | `mobile-bff/api/v1` · host `http://localhost:5202` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-bien-ban` |
| domain | **Patrol** · petitions + journal-lines + findings · **cấm** invent BienBan* |
| contentHash | `sha256:bc9070c4ab20da1960355a727eae18029943c2d95865aebd7d9bcb443ea60cd2` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| analyzedAt | `2026-09-26T00:25:00.000Z` |
| demo | **N/A** · **cấm** demo-json / in-app mock SSOT / fake GPS |

## § Scope BB

| In | Out |
|----|-----|
| BB-00…07 · list · create TD/TK · detail · GPS · Field entry | sổ 07 form · journal CRUD · kết ca · findings full · frequency · me* · desktop · invent entity/path · ERP.* |
| API **Live** petitions · ViolationFlag · ViolationAction · sessions · auth · files | API **Mới** invent BienBan* · mobile-only path trên web-bff |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/web-rmms-bien-ban.md` | — | — |
| `plan` | `IMPLEMENT-SCREENS.md` TD-05 §9 · TK-03 | — | SSOT nút / radio |
| `gap` | `GAP-TUAN-DUONG-TUAN-KIEM.md` §5 TT 72 | — | đề nghị ≠ tự lập BB tuần đường |
| `peer-b` | journal-lines · `ViolationFlag` | no parent → chặn BB-02 | toast · **cấm** `window.alert` |
| `peer-c` | findings · `ViolationAction` | no finding → chặn BB-03 | toast |
| `peer-d` | petitions Live · TK-06 | empty list OK | **≠** notification/inbox |
| `field` | `web-rmms-field` doors | — | hai lối |
| `api-live` | petitions · journal-lines · findings · sessions | [] | 4xx toast |
| `domain-map` | Patrol | — | **GAP** slug BB · **cấm ERP.*** |
| `auth` | `auth/profile` | — | redirect login |
| `files` | `files/*` | [] | resign fail toast |
| `geo` | `navigator.geolocation` | deny → block nút cần tọa độ | **cấm** fake |
| `demo` | — | N/A | **cấm** demo SSOT |

## §B — Bind field (HARD) — BB

| uiField | Label (key) | controlHint | catalogKind | GET | write field | sameMfe | sameMobile |
|---------|-------------|-------------|-------------|-----|-------------|---------|------------|
| phone.frame | — | Layout | — | — | — | CTX | Android Field |
| list.items | bienBan.list | List cards | — | `GET patrol/petitions` | — | peer D | TK-06 cite |
| list.search | bienBan.search | Text/Search | — | `route`/`status` | — | CTX | n/a |
| empty.state | bienBan.empty | EmptyState | LOOKUP_STATIC | — | — | CTX | n/a |
| btn.createTd | bienBan.createTd | Button/Nav | — | — | → BB-02 | Field | n/a |
| btn.createTk | bienBan.createTk | Button/Nav | — | — | → BB-03 | Field | n/a |
| entryPath | bienBan.entry | Radio/RO | LOOKUP_STATIC | query | drives form | gap | n/a |
| parent.journalId | bienBan.journal | Lookup/RO | — | `GET journal-lines/{id}` | FK | peer B | TD-05 |
| parent.findingId | bienBan.finding | Lookup/RO | — | `GET findings/{id}` | `FindingId` | peer C | TK-03 |
| tdFlag | bienBan.deNghi | Button/flag | LOOKUP_STATIC | — | `ViolationFlag=true` | Live | TD-05 |
| tkAction | bienBan.action | Radio | LOOKUP_STATIC | — | `ViolationAction` | Live | TK-03 |
| senderUnit | bienBan.sender | Text | — | profile | **required** | auth | petitions |
| route | bienBan.route | Text | — | parent/session | **required** | Live | n/a |
| kmText | bienBan.km | Text | — | parent | **required** | Live | n/a |
| content | bienBan.content | TextArea | — | — | **required** | Live | n/a |
| petitionKind | bienBan.kind | Dropdown | LOOKUP_STATIC | — | default `hanh-lang` | Live | AllowedKinds |
| lat/lng/accuracyM | bienBan.gps | GPS | geo | device | optional if noFace | geo | petitions |
| noFaceFlag | bienBan.noFace | Checkbox | — | — | `NoFace` | Live | petitions |
| mediaIds | bienBan.media | PhotoRow | files | — | mediaIds? | files | peer |
| status | bienBan.status | Badge | LOOKUP_STATIC | item | `moi` on create | Live | n/a |
| code | bienBan.code | Text RO | — | item.Code | server `KN-yyyyMMdd-###` | Live | n/a |
| action.save | bienBan.save | Button | — | — | `POST petitions` + parent PUT | Live | n/a |
| action.cancel | bienBan.cancel | Button/Nav | — | — | → list | CTX | n/a |
| detail.load | — | — | — | `GET petitions/{id}` | — | Live | n/a |
| leadSo07 | bienBan.so07 | Link | — | cite | **nav only** · no form | GAP | n/a |

**CreatePatrolPetitionRequest (Live):** `SenderUnit` · `Route` · `KmText` · `Content` · `Kind` · `Lat?` · `Lng?` · `AccuracyM?` · `NoFace` · `Status=moi` · `FindingId?`.

**Parent writes (Live):** journal `ViolationFlag` · finding `ViolationAction` ∈ `lap-bien-ban` \| `de-nghi-vphc`.

**Cấm** ERP.* · **cấm** fake GPS · **cấm** invent BienBanController · **cấm** mở sổ 07 form · **cấm** hardcode VN · **cấm** demo SSOT · **cấm** gộp journal/ket-ca/finding/frequency.

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| LOOKUP_STATIC | FE `useFormOptions` / LinmCopy `bienBan.*` | CTX · IMPLEMENT · GAP | hardcode label VN |
| entryPath | `tuan-duong` · `tuan-kiem` | Field hub | invent 3rd door |
| tdFlag | `de-nghi-bien-ban` → bool ViolationFlag | peer B | string column invent |
| tkAction | `lap-bien-ban` · `de-nghi-vphc` | peer C | sổ 07 embed |
| petition.kind | `hanh-lang` (+ AllowedKinds) | PatrolPetitionService | invent kind |
| petition.status | `moi` … | peer D | inbox as list |
| petitions | `GET/POST patrol/petitions` | Schema_PatrolPetition Live | invent path |
| journal-lines | `PUT …/journal-lines/{id}` | Schema_PatrolJournalLine | invent flag API |
| findings | findings CRUD peer C | Schema_PatrolFinding | invent action API |
| files | `files/*` | FileService | invent bien-ban-files |
| profile | `auth/profile` | Auth | invent user API in Patrol |

## §D — Map / vẽ

| Mục | Ghi |
|-----|-----|
| map | **none** P1 · GPS point only |
| GPS | create BB-02/03 · list/detail none |

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| petition.Status | `rmms_patrol_petitions` | user create | POST → `moi` | badge |
| journal.ViolationFlag | `rmms_patrol_journal_lines` | user BB-02 / TD-05 | PUT | chip đề nghị |
| finding.ViolationAction | `rmms_patrol_findings` | user BB-03 / TK-03 | POST/PUT finding | radio |
| so07 | CSDL sổ 07 (cite) | ngoài page | — | link only · **không** write |

## §F — DoD real-data

- [x] §A sources + empty/error
- [x] §B bind Live petitions + ViolationFlag/Action
- [x] §C catalog useFormOptions
- [x] GPS deny rule
- [x] DOMAIN-MAP GAP noted · **cấm ERP.***
- [x] Peer lock B–E · no sổ 07 form

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=2` · `contentHash=sha256:bc9070c4ab20da1960355a727eae18029943c2d95865aebd7d9bcb443ea60cd2` · `rulesVersion=2026.09.25.2` · `analyzedAt=2026-09-26T00:25:00.000Z`
