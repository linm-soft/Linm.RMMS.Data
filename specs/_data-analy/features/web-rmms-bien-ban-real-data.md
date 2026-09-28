# Data-analy — real-data bind — web-rmms-bien-ban

| Field | Value |
|-------|-------|
| feature | `web-rmms-bien-ban` |
| title | Đề nghị lập biên bản |
| packKind | `list` |
| changeScope | `edit_page` |
| status | `done` |
| taskId | `task_af34e11a` |
| prefix API | `api/v1/patrol` |
| prefix BFF web (cite) | `web-bff/api/v1/patrol/*` · **không** base client |
| prefix BFF mobile (HARD) | `mobile-bff/api/v1` · host `http://localhost:5202` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/bien-ban` |
| mfeStdRoute | `/bien-ban` |
| domain | **Patrol** · petitions + journal-lines + findings · **cấm** invent BienBan* |
| contentHash | `sha256:3f196a65ee5bc6578aa8d96f9c08a6e0d0ca3fb263399e7a8d3fe3863da26b0e` |
| contentHashPrev | `sha256:bc9070c4ab20da1960355a727eae18029943c2d95865aebd7d9bcb443ea60cd2` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| analyzedAt | `2026-09-27T15:42:56.000Z` |
| demo | **N/A** · **cấm** demo-json / in-app mock SSOT / fake GPS |
| deltaCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` |

## § Scope BB

| In | Out |
|----|-----|
| BB-00…07 · list · create TD/TK · detail · GPS · Field entry · Pattern B submit · SearchInput tuyến | sổ 07 form · journal CRUD · kết ca · findings full · frequency · me* · desktop · invent entity/path · ERP.* · Excel export · new_page CRUD |

## § Delta Current vs New (edit_page)

| Area | Current | New |
|------|---------|-----|
| Submit | `canSave` gates `disabled` + early return | Pattern B: luôn bật · validate on submit · banner+inline |
| GPS | pre-block nút | deny on submit click · noFace OK |
| route bind | free text write `Route` | SearchInput → mã catalog · GET `integration/road-routes/search` · empty/error → [] · miss display `--` |
| Client base | mobileApiBase (shipped) | HARD giữ · **cấm** web-bff · users forward nếu thiếu trên Mobile.Bff |
| Route path | `/bien-ban` in MFE | SSOT STATUS/mfeStdUrl · CTX legacy path ignore |
| Artifacts | PO/Design done | **keep** · delta only |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/web-rmms-bien-ban.md` | — | — |
| `plan-edit` | `SUBMIT-VALIDATE.md` · slug web-rmms-bien-ban | — | Pattern B + SearchInput |
| `plan` | `IMPLEMENT-SCREENS.md` TD-05 §9 · TK-03 | — | SSOT nút / radio |
| `gap` | `GAP-TUAN-DUONG-TUAN-KIEM.md` §5 TT 72 | — | đề nghị ≠ tự lập BB |
| `code` | `BienBanCreateTdPage.tsx` · `BienBanCreateTkPage.tsx` | — | current canSave gap |
| `peer-b` | journal-lines · `ViolationFlag` | no parent → chặn BB-02 (banner) | toast · **cấm** `window.alert` |
| `peer-c` | findings · `ViolationAction` | no finding → chặn BB-03 | toast |
| `peer-d` | petitions Live | empty list OK | **≠** inbox |
| `api-live` | petitions · journal-lines · findings · sessions | [] | 4xx toast (API ≠ banner) |
| `catalog` | `integration/road-routes/search` Mobile.Bff | [] no seed | 4xx toast · **cấm** ROAD_ROUTE_SEED |
| `auth` | `auth/profile` | — | redirect login |
| `files` | `files/*` | [] | resign fail toast |
| `geo` | `navigator.geolocation` | deny → banner on submit | **cấm** fake |
| `demo` | — | N/A | **cấm** demo SSOT |

## §B — Bind field (HARD) — BB

| uiField | Label (key) | controlHint | catalogKind | GET | write field | sameMfe | sameMobile |
|---------|-------------|-------------|-------------|-----|-------------|---------|------------|
| phone.frame | — | Layout | — | — | — | yes | Android Field |
| list.items | bienBan.list | List cards | — | `GET patrol/petitions` | — | yes | TK-06 cite |
| list.search | bienBan.search | Text/Search | — | `route`/`status` | — | yes | n/a |
| empty.state | bienBan.empty | EmptyState | LOOKUP_STATIC | — | — | yes | n/a |
| btn.createTd | bienBan.createTd | Button/Nav | — | — | → BB-02 | yes | n/a |
| btn.createTk | bienBan.createTk | Button/Nav | — | — | → BB-03 | yes | n/a |
| entryPath | bienBan.entry | Radio/RO | LOOKUP_STATIC | query | drives form | yes | n/a |
| parent.journalId | bienBan.journal | Lookup/RO | — | `GET journal-lines/{id}` | FK | yes | TD-05 |
| parent.findingId | bienBan.finding | Lookup/RO | — | `GET findings/{id}` | `FindingId` | yes | TK-03 |
| tdFlag | bienBan.deNghi | Button/flag | LOOKUP_STATIC | — | `ViolationFlag=true` | yes | TD-05 |
| tkAction | bienBan.action | Radio | LOOKUP_STATIC | — | `ViolationAction` | yes | TK-03 |
| senderUnit | bienBan.sender | Text | — | profile | **required** · banner | yes | petitions |
| route | bienBan.route | **SearchInput** | `road-route` | `GET integration/road-routes/search` | **required** mã | gap→fix | n/a |
| kmText | bienBan.km | Text | — | parent | **required** | yes | n/a |
| content | bienBan.content | TextArea | — | — | **required** | yes | n/a |
| petitionKind | bienBan.kind | Dropdown | LOOKUP_STATIC | — | default `hanh-lang` | yes | AllowedKinds |
| lat/lng/accuracyM | bienBan.gps | GPS | geo | device | optional if noFace | yes | petitions |
| noFaceFlag | bienBan.noFace | Checkbox | — | — | `NoFace` | yes | petitions |
| mediaIds | bienBan.media | PhotoRow | files | — | mediaIds? · capture | yes | peer |
| status | bienBan.status | Badge | LOOKUP_STATIC | item | `moi` on create | yes | n/a |
| code | bienBan.code | Text RO | — | item.Code | server | yes | n/a |
| action.save | bienBan.save | Button | — | — | Pattern B · `POST petitions` + parent | fix | n/a |
| action.cancel | bienBan.cancel | Button/Nav | — | — | → list | yes | n/a |
| detail.load | — | — | — | `GET petitions/{id}` | — | yes | n/a |
| leadSo07 | bienBan.so07 | Link | — | cite | **nav only** | yes | n/a |

**CreatePatrolPetitionRequest (Live):** `SenderUnit` · `Route` · `KmText` · `Content` · `Kind` · `Lat?` · `Lng?` · `AccuracyM?` · `NoFace` · `Status=moi` · `FindingId?`.

**Parent writes (Live):** journal `ViolationFlag` · finding `ViolationAction` ∈ `lap-bien-ban` \| `de-nghi-vphc`.

**Cấm** ERP.* · fake GPS · invent BienBanController · mở sổ 07 form · hardcode VN · demo SSOT · ROAD_ROUTE_SEED · `disabled={!canSave}` · Excel export.

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| LOOKUP_STATIC | FE `useFormOptions` / LinmCopy `bienBan.*` | CTX · IMPLEMENT · GAP | hardcode label VN |
| road-route | `GET …/integration/road-routes/search` Mobile.Bff | lookups.ts · **xóa SEED** | free text · seed QL.* |
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
| users (peer) | `GET integration/users` | AppUsersController · BFF forward | ERP UserSearchInput raw |

## §D — Map / vẽ

| Mục | Ghi |
|-----|-----|
| map | **none** P1 · GPS point only |
| GPS | create BB-02/03 · Pattern B deny-on-submit |

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| petition.Status | `rmms_patrol_petitions` | user create | POST → `moi` | badge |
| journal.ViolationFlag | `rmms_patrol_journal_lines` | user BB-02 / TD-05 | PUT | chip đề nghị |
| finding.ViolationAction | `rmms_patrol_findings` | user BB-03 / TK-03 | POST/PUT finding | radio |
| so07 | CSDL sổ 07 (cite) | ngoài page | — | link only · **không** write |

## §F — DoD real-data

- [x] §A sources + empty/error
- [x] §B bind Live petitions + ViolationFlag/Action + road-route SearchInput
- [x] §C catalog useFormOptions + road-routes no seed
- [x] GPS Pattern B deny-on-submit
- [x] § Delta edit_page SUBMIT-VALIDATE
- [x] Peer lock B–E · no sổ 07 form · no Excel

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=2` · `contentHash=sha256:3f196a65ee5bc6578aa8d96f9c08a6e0d0ca3fb263399e7a8d3fe3863da26b0e` · `rulesVersion=2026.09.25.2` · `analyzedAt=2026-09-27T15:42:56.000Z` · `taskId=task_af34e11a` · `changeScope=edit_page`
