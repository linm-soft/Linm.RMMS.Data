# PO requirement — web-rmms-bien-ban

| Field | Value |
|-------|-------|
| feature | `web-rmms-bien-ban` |
| title | Đề nghị lập biên bản |
| packKind | `list` · **confirmed** |
| changeScope | `edit_page` |
| lane | `web` · MFE Mobile phone |
| demo | **N/A** · hash skip analy · **cấm** re-scan (**GAP-PO-DEMO-RESCAN-01**) |
| status | `done` |
| skillId | `agent-po` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:3f196a65ee5bc6578aa8d96f9c08a6e0d0ca3fb263399e7a8d3fe3863da26b0e` |
| contentHashPrev | `sha256:bc9070c4ab20da1960355a727eae18029943c2d95865aebd7d9bcb443ea60cd2` |
| writtenAt | `2026-09-27T15:50:00.000Z` |
| taskId | `task_3dddf896` |
| priorAnalyTask | `task_af34e11a` · data_analy `confirmed` · hash skip |
| deltaCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` · slug `web-rmms-bien-ban` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/bien-ban` |
| mfeStdUrl | `http://localhost:9301/bien-ban` |
| peerStdUrl | `http://localhost:9301/bien-ban` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-bien-ban/ui/prototype/index.html` (**keep**) |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Patrol** · **cấm ERP.*** |
| phoneFrame | `max-width: 430px` |
| formPattern | Mobile list + full create/detail · **không** ERP Modal/Slideout Kind B · master = no demo · Pattern B validate |
| keepArtifacts | Design/SA/TL/implement/qa/review **giữ** · **cấm** typed CRUD `new_page` |
| controlHint | `specs/_data-analy/features/web-rmms-bien-ban-control-hint.md` |
| realData | `specs/_data-analy/features/web-rmms-bien-ban-real-data.md` |

> Labels: `useFormOptions()` / copy key — **cấm** hardcode VN trên form.  
> **Cấm** mở / clone form sổ 07 · chỉ đề nghị + link dẫn.  
> Peer lock: journal / kết ca / findings / frequency = `web-rmms-mobile-b`…`e` — **không** gộp.  
> BFF: `mobileApiBase()` → Mobile.Bff `:5202` `mobile-bff/api/v1` · **cấm** web-bff client.  
> **Cấm** invent `BienBan*` · fake GPS · iOS/Android · MFE desktop · Excel export · ROAD_ROUTE_SEED.

## 1. Goal

Màn phone **Đề nghị lập biên bản** (TT 72 / T38) — **edit_page** trên shipped MFE: giữ hai lối TD/TK + Live petitions; **delta HARD** từ SUBMIT-VALIDATE = Pattern B submit (banner+inline) · GPS deny-on-submit · SearchInput tuyến `road-routes/search` · route SSOT `/bien-ban` · align-mobile-to-mfe (430 · no new tab/route/icon). **Không** tự lập sổ 07 trên phone.

## 2. Current vs New (edit_page HARD)

| Area | Current (shipped) | New (this task) |
|------|-------------------|-----------------|
| changeScope | `new_page` pipeline Review PASS | `edit_page` · task `task_3dddf896` · **cấm** typed CRUD new_page |
| mfeStdRoute | prior PO `/web-rmms-bien-ban` · code `/bien-ban` | **SSOT `/bien-ban`** · `http://localhost:9301/bien-ban` · paths.ts |
| Submit CTA | `disabled={!canSave}` create TD/TK | Pattern B: nút **luôn bật** khi form sẵn sàng · chỉ `disabled` khi `saving` |
| Validate | early `return` · thiếu banner | Lần bấm đầu → `validationAttempted` · banner `string[]` + inline + scroll · **cấm** một `alert.warning` |
| GPS | deny → khóa nút / chặn trước bấm | deny → **bấm mới báo** (banner/modal) · **cấm** pre-disable · noFace vẫn Lưu không GPS |
| route field | `<input>` free text | **SearchInput** + `ROAD_ROUTE_LOOKUP_CONFIG` · `GET integration/road-routes/search` · **cấm** SEED · miss → `--` |
| Media | peer | ảnh local: `capture="environment"` nếu có input |
| Toolbar/export | N/A phone | **cấm** Excel / toolbar export |
| Design/SA | done | **keep** prototype + solution · Design **không** gen demo mới |
| Align cuối | — | `/align-mobile-to-mfe` · demo_ref=no_demo · khung 430 · mọi call `mobileApiBase()` |
| BFF users | — | forward `GET integration/users` **nếu** thiếu (peer); BB chính = road-routes SearchInput |
| Out of scope | — | journal/ket-ca/finding/frequency · sổ 07 form · native · ERP.* · invent API |

## 3. Screens (REQUIRED)

| id | route / zone | Pattern | FormMode | actions | devSlash | DoD |
|----|--------------|---------|----------|---------|----------|-----|
| BB-00 | phone frame | Full (shell) | — | — | `/agent-dev` | ≤430 · Android Field 1-1 · **không** me* / feedback / cam-view |
| BB-01 | `/bien-ban` | Full page list | List | refresh · tap → BB-04 · create Td/Tk | `/agent-dev` | GET petitions `kind=hanh-lang` · cards |
| BB-02 | `/bien-ban/moi?from=tuan-duong` | Full page | Create | save Pattern B · cancel · GPS · noFace | `/agent-dev` | journal parent · ViolationFlag · POST petition |
| BB-03 | `/bien-ban/moi?from=tuan-kiem` | Full page | Create | save Pattern B · cancel · GPS · noFace | `/agent-dev` | finding parent · ViolationAction · POST petition |
| BB-04 | `/bien-ban/:id` | Full page | View | back · leadSo07 nav | `/agent-dev` | GET petition/{id} RO |
| BB-05 | GPS zone | (in create) | — | getGps | `/agent-dev` | deny-on-submit · **cấm** fake · accuracyM |
| BB-06 | Field entry | Nav deep | — | → BB-02/03 | `/agent-dev` | cite TD-05 / TK-03 · **không** clone CRUD peers |
| BB-07 | empty / search | (in list) | — | search P1 | `/agent-dev` | EmptyState + optional query |

**Out:** sổ 07 form · journal CRUD · kết ca · findings full · frequency · me* · desktop Kind B · invent BienBan* · ERP.* · Excel.

**Tab index:** `tabs: none` (1 surface stack phone).

## 4. Grid list AC (packKind=list · phone)

| AC | Rule | Pass |
|----|------|------|
| DES-GRID / LinErpListFilterBar | **N/A** — phone list · **cấm** clone ERP Kind B filter bar / desktop grid / Excel (**filter-bar-layout-hard** desktop N/A) | Design note N/A · **GAP-PO-GRID-01** waived phone |
| L-01 empty | Không petition → EmptyState `bienBan.list.empty` · CTA create TD/TK | QA |
| L-02 data | Cards GET `patrol/petitions?kind=hanh-lang` · Code · status · route/km · **cấm** mock · **cấm** inbox | QA |
| L-03 tap | Card → BB-04 | QA |
| L-04 create | `btnCreateTd` → BB-02 · `btnCreateTk` → BB-03 · entryPath RO | QA |
| L-05 union | **P1 = petitions-only**. Secondary optional: flagged peers chips RO → BB-02/03 — **không** merge fake row | Design/QA |
| L-06 search | BB-07 `route`/`status` optional P1 | QA |
| L-07 parent gate | BB-02 thiếu journal / kind≠`hanh-lang` → banner/toast · **cấm** `window.alert`. BB-03 tương tự finding | QA |
| F-01 required | senderUnit · route(mã) · kmText · content · petitionKind default `hanh-lang` | QA |
| F-02 Pattern B | Save luôn bật · validate on submit · banner+inline+scroll · chỉ `saving` disable | QA |
| F-03 route SearchInput | catalog `road-route` · BFF search · no SEED · miss `--` | QA |
| F-04 tdFlag | BB-02 UI key `de-nghi-bien-ban` → PUT journal `ViolationFlag=true` | QA |
| F-05 tkAction | BB-03 Radio `lap-bien-ban` \| `de-nghi-vphc` → finding `ViolationAction` | QA |
| F-06 save | POST `patrol/petitions` Status=`moi` · + parent write · 4xx toast (≠ validation banner) | QA |
| F-07 cancel | → BB-01 · no write · dirty → LeaveConfirmModal | QA |
| F-08 labels | useFormOptions / `bienBan.*` · **cấm** hardcode VN | Dev/QA |
| G-01 GPS deny | Deny + không noFace → báo **khi bấm Lưu** · **cấm** pre-disable | QA |
| G-02 noFace | Cho Lưu không lat/lng · ghi `NoFace` · **cấm** fake | QA |
| G-03 list/detail | BB-01 / BB-04 **không** bắt GPS mới | QA |
| D-01 detail | GET `{id}` RO · badge status | QA |
| D-02 so07 | `leadSo07` → slug **`csdl-bieu-07`** · nav only · disable+copy nếu Mobile không host | Design/QA |
| X-01 peer lock | **Cấm** stub journal/ket-ca/finding/frequency trong slug | Dev |
| X-02 BFF | **chỉ** Mobile.Bff · **cấm** web-bff base | Dev |
| X-03 invent | **Cấm** BienBan* path | SA/Dev |
| X-04 Excel | **Cấm** toolbar export | Dev |
| X-05 align | `/align-mobile-to-mfe` · 430 · no new tab/route/icon | Dev |

## 5. Leave / alert (REQUIRED)

| Case | UI | Cấm |
|------|-----|-----|
| Dirty create BB-02/03 → back/cancel/nav | **`LeaveConfirmModal`** (`/implement-show-leave-confirm`) | native `confirm` / `alert` |
| Validation fail on save | banner `string[]` + inline | một `alert.warning` làm đủ |
| API 4xx / GPS deny message | toast / banner (Pattern B) | `window.alert` |
| Delete / chặn parent | `useAlert` / Modal nếu có | native dialog |

## 6. Field inventory (analy · Design chốt control-map)

| uiField | screen | controlHint | notes |
|---------|--------|-------------|-------|
| phoneFrame | BB-00 | Layout | max-width 430 |
| listItems / row* / btnCreate* / navBack / titleBar | BB-01/06 | List / Button / Nav | GET petitions |
| search / emptyState | BB-07 | Text/Search / EmptyState | P1 optional |
| entryPath | BB-02/03 | Radio/RO | `tuan-duong` \| `tuan-kiem` |
| parentJournalId / parentFindingId | BB-02/03 | Lookup/RO | FK peers B/C |
| tdFlag / tkAction | BB-02/03 | Button/flag / Radio | ViolationFlag / ViolationAction |
| senderUnit / kmText / content | BB-02/03 | Text* / TextArea* | required · Pattern B banner |
| route | BB-02/03 | **SearchInput** | road-route · BFF search · no seed · miss `--` |
| petitionKind | BB-02/03 | Dropdown | default `hanh-lang` |
| getGps / lat/lng/accuracyM / noFaceFlag | BB-05 | GPS / Checkbox | deny-on-submit · noFace OK |
| mediaIds | BB-02/03 | PhotoRow | optional · `capture="environment"` |
| savePetition / saveParent* / cancel | BB-02/03 | Button | Pattern B · POST + parent |
| detailFields / leadSo07 | BB-04 | Text RO / Link | `csdl-bieu-07` nav only |

## 7. Enum keys (PO chốt · label via useFormOptions)

| Key group | Values |
|-----------|--------|
| entryPath | `tuan-duong` · `tuan-kiem` |
| tdFlag (UI) | `de-nghi-bien-ban` → `ViolationFlag=true` |
| tkAction | `lap-bien-ban` · `de-nghi-vphc` |
| petition.kind | default `hanh-lang` |
| petition.status | `moi` · (peer D) |

## 8. API / bind (real-data §A+§B PASS)

| Method | Path | Live? | PO rule |
|--------|------|-------|---------|
| GET\|POST\|GET{id} | `patrol/petitions` | **Live** | list/create/detail · kind `hanh-lang` · Status `moi` |
| PUT | `patrol/journal-lines/{id}` | **Live** | BB-02 `ViolationFlag` |
| GET\|POST\|PUT | `patrol/findings` | **Live** | BB-03 `ViolationAction` · FindingId |
| GET | `patrol/sessions` | **Live** | ca context |
| GET | `auth/profile` | **Live** | senderUnit |
| GET | `integration/road-routes/search` | **Live** BFF | SearchInput · **cấm** SEED |
| GET | `integration/users` | Live WS · BFF forward nếu thiếu | peer |
| — | `files/*` | **Live** | optional media |
| — | invent BienBan* / sổ 07 write | **Cấm** | — |

**CreatePatrolPetitionRequest (Live):** `SenderUnit` · `Route` · `KmText` · `Content` · `Kind` · `Lat?` · `Lng?` · `AccuracyM?` · `NoFace` · `Status=moi` · `FindingId?`.

## 9. HARD product rules

| Rule | |
|------|--|
| Labels | useFormOptions / `bienBan.*` |
| Submit | Pattern B · **cấm** `disabled={!canSave}` |
| route | SearchInput road-route · **cấm** free-text SSOT · **cấm** SEED |
| GPS | deny-on-submit · noFace exception · **cấm** fake |
| Sổ 07 | link `csdl-bieu-07` only · **cấm** embed |
| Peer lock | B–E out of slug |
| BE | ONLY `Linm.RMMS.WebService` · Patrol · **cấm ERP.*** |
| MFE | ONLY Mobile · phone 430 · **cấm** desktop · **cấm** native |
| BFF | Mobile.Bff only · `mobileApiBase()` |
| Excel | **cấm** export toolbar |
| Toast/Leave | LeaveConfirmModal · **cấm** native alert/confirm |

## 10. Out of scope

| Leave | Reason |
|-------|--------|
| Form sổ 07 / CSDL write | Out · link only |
| Journal CRUD · kết ca · findings full · frequency | Peer B–E |
| me* / feedback / cam-view | Shell HARD |
| Desktop ERP grid / Excel | Wrong surface |
| Invent BienBan* · fake GPS · demo SSOT · native | HARD |
| new_page typed CRUD | changeScope=edit_page |

## 11. Persona

| Ai | Lối |
|----|-----|
| NV tuần đường (BDTX) | BB-02 từ journal `hanh-lang` · đề nghị VPHC |
| Cán bộ tuần kiểm (Khu/VP) | BB-03 từ finding · `lap-bien-ban` \| `de-nghi-vphc` |

## 12. PO stance → UNCLEAR

| id | Stance | Owner next |
|----|--------|------------|
| UNCLEAR-LIST-SCOPE | **Chốt:** P1 **petitions-only** `kind=hanh-lang`. Secondary optional flagged chips → BB-02/03 | Design/SA keep |
| UNCLEAR-SO07-LINK | **Chốt:** slug **`csdl-bieu-07`** · nav only · disable+copy nếu không host | Design keep |
| ~~UNCLEAR-STD-ROUTE~~ | **CLOSED:** `/bien-ban` paths.ts · STATUS mfeStdUrl | — |
| ~~UNCLEAR-DOMAIN-MAP-BB~~ | CLOSED prior SA | — |
| ~~UNCLEAR-BFF-PROXY~~ | CLOSED prior SA/Dev | — |
| ~~UNCLEAR-JOURNAL-KIND-FIELD~~ | CLOSED · bool Live · UI key useFormOptions | — |

## 13. Context / Demo inventory

| ID | Path | Bắt buộc |
|----|------|----------|
| CTX-01 | `docs/context/features/web-rmms-bien-ban.md` | P0 · hash skip copy |
| DEM | **N/A** · master-adjacent · **cấm** re-scan | — |
| DI | N/A phone petitions | — |
| plan | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` | edit delta HARD |

## 14. Handoff → Design

| Field | Value |
|-------|-------|
| feature / packKind | `web-rmms-bien-ban` · `list` confirmed |
| phase_from / phase_to | po → design |
| STATUS | po **confirmed** · autoApprove ON |
| changeScope | `edit_page` · keep prototype |
| Context / Demo / DI | CTX-01 · DEM N/A · hash skip |
| controlHint / real-data | abs under `specs/_data-analy/features/` · §A+§B PASS |
| Screens / Pattern / devSlash | BB-00…07 · Full page · `/agent-dev` |
| Grid AC | phone N/A DES-GRID · list AC L-* / F-* / G-* / X-* |
| Leave | LeaveConfirmModal · Pattern B banner |
| peerStdUrl / reviewUrl | `http://localhost:9301/bien-ban` · keep `ui/prototype/index.html` |
| Open questions | none hard · soft stances above |
| Next | `/agent-design*` · **giữ** zones BB-* · **không** gen demo · wire Pattern B + SearchInput affordance nếu prototype lệch · then SA keep |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:3f196a65ee5bc6578aa8d96f9c08a6e0d0ca3fb263399e7a8d3fe3863da26b0e` · `rulesVersion=2026.09.25.2` · `writtenAt=2026-09-27T15:50:00.000Z` · `taskId=task_3dddf896` · `changeScope=edit_page`
