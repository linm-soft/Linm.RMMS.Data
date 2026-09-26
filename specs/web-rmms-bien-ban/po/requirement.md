# PO requirement — web-rmms-bien-ban

| Field | Value |
|-------|-------|
| feature | `web-rmms-bien-ban` |
| title | Đề nghị lập biên bản |
| packKind | `list` · **confirmed** |
| changeScope | `new_page` |
| lane | `web` · MFE Mobile phone |
| demo | **N/A** · hash skip analy · **cấm** re-scan |
| status | `done` |
| skillId | `agent-po` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:bc9070c4ab20da1960355a727eae18029943c2d95865aebd7d9bcb443ea60cd2` |
| writtenAt | `2026-09-26T00:40:00.000Z` |
| taskId | `task_e85d8f14` |
| prior | data_analy `confirmed` · compact + control-hint + real-data §A+§B · hash skip · **cấm** re-scan demo |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-bien-ban` |
| mfeStdUrl | `http://localhost:9301/web-rmms-bien-ban` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Patrol** · **cấm ERP.*** |
| phoneFrame | `max-width: 430px` |
| formPattern | Mobile list + full create/detail · **không** ERP Modal/Slideout Kind B · master = no demo |

> Labels: `useFormOptions()` / copy key — **cấm** hardcode VN trên form.  
> **Cấm** mở / clone form sổ 07 · chỉ đề nghị + link dẫn.  
> Peer lock: journal / kết ca / findings / frequency = `web-rmms-mobile-b`…`e` — **không** gộp.  
> BFF: `VITE_MOBILE_API_URL=http://localhost:5202/mobile-bff/api/v1` · **cấm** web-bff client · **cấm** Route `mobile-bff` trên web-bff.  
> **Cấm** invent `BienBan*` entity/path · **cấm** fake GPS · **cấm** iOS/Android · **cấm** MFE desktop.

## 1. Goal

Màn phone **Đề nghị lập biên bản** (TT 72 / T38): NV tuần đường (BDTX) **đề nghị** người có thẩm quyền lập BB VPHC từ journal `hanh-lang` (`ViolationFlag` / UI key `de-nghi-bien-ban`); cán bộ tuần kiểm (Khu/VP) chọn `lap-bien-ban` \| `de-nghi-vphc` trên finding. Formal record = **Live** `patrol/petitions` (`kind=hanh-lang`). Hai lối Field · deep peer TD-05 / TK-03. **Không** tự lập sổ 07 trên phone.

## 2. Screens

| id | route / zone | surface | DoD |
|----|--------------|---------|-----|
| BB-00 | phone frame | shell ≤430 | Android Field 1-1 · **không** tab me / me-profile / me-settings / feedback / cam-view |
| BB-01 | `/web-rmms-bien-ban` | list cards | Primary: GET petitions `kind=hanh-lang` · optional § union (PO chốt dưới) · tap → BB-04 |
| BB-02 | `/web-rmms-bien-ban/moi?from=tuan-duong` | create TD | Parent journal-line `hanh-lang` RO · set `ViolationFlag=true` · POST petition · GPS HARD |
| BB-03 | `/web-rmms-bien-ban/moi?from=tuan-kiem` | create TK | Parent finding `hanh-lang` RO · `ViolationAction` radio · POST petition (+ FindingId) · GPS HARD |
| BB-04 | `/web-rmms-bien-ban/:id` | detail RO | GET petition/{id} · Code · route · km · content · status · GPS · `leadSo07` link only |
| BB-05 | GPS zone | geolocation | deny → chặn Lưu trừ `noFace` · **cấm** fake · lưu `accuracyM` nếu có |
| BB-06 | Field entry | deep | Hub → TD/TK · cite peer TD-05 / TK-03 · **không** clone journal/finding CRUD |
| BB-07 | empty / search | EmptyState + Text | copy keys · search `route`/`status` P1 optional |

**Out:** sổ 07 form · journal CRUD · kết ca · findings full · frequency · me* · desktop grid · invent BienBan* · ERP.*.

## 3. List / Grid AC (packKind=list · phone)

| AC | Rule | Pass |
|----|------|------|
| DES-GRID / LinErpListFilterBar | **N/A** — phone list · **cấm** clone ERP Kind B filter bar / desktop grid | Design note N/A |
| L-01 empty | Không petition → EmptyState `bienBan.list.empty` · CTA create TD/TK | QA |
| L-02 data | Cards bind GET `patrol/petitions?kind=hanh-lang` · Code · status badge · route/km · **cấm** mock seed · **cấm** `notification/inbox` | QA |
| L-03 tap | Card → BB-04 · **không** ERP grid | QA |
| L-04 create Td/Tk | `btnCreateTd` → BB-02 · `btnCreateTk` → BB-03 · entryPath RO từ query | QA |
| L-05 union (PO) | **P1 primary = petitions-only**. Secondary (optional P1): section «đã gắn cờ chưa có petition» = journal `ViolationFlag` / finding `ViolationAction` **read-only chips** → BB-02/03 continue — **không** merge row type giả · SA/Design wire API existing peers | Design/QA |
| L-06 search | BB-07 query `route`/`status` optional P1 · client or query param | QA |
| L-07 parent gate | BB-02 không journal id / kind≠`hanh-lang` → chặn · toast · **cấm** `window.alert`. BB-03 tương tự finding | QA |
| F-01 required | senderUnit · route · kmText · content · petitionKind(**default** `hanh-lang`) **required** | QA |
| F-02 tdFlag | BB-02: button/flag UI key `de-nghi-bien-ban` → PUT journal `ViolationFlag=true` · **không** sổ 07 | QA |
| F-03 tkAction | BB-03: Radio `lap-bien-ban` \| `de-nghi-vphc` → persist finding `ViolationAction` · **không** sổ 07 | QA |
| F-04 save | POST `patrol/petitions` Status=`moi` · + parent write · toast lỗi 4xx | QA |
| F-05 cancel | Cancel → BB-01 · **không** write | QA |
| F-06 labels | useFormOptions / `bienBan.*` · **cấm** hardcode VN | Dev/QA |
| G-01 GPS deny | Deny + **không** noFace → chặn nút cần tọa độ | QA |
| G-02 noFace | Checkbox → cho Lưu **không** lat/lng · ghi `NoFace` · **cấm** fake coords | QA |
| G-03 list/detail | BB-01 / BB-04 **không** bắt GPS mới | QA |
| D-01 detail | GET `{id}` · fields RO · badge status | QA |
| D-02 so07 | `leadSo07` → deep link slug **`csdl-bieu-07`** (cite CSDL biểu/sổ 07) · **nav only** · **cấm** embed form · nếu shell Mobile không host CSDL → disable + copy key «mở trên web CSDL» | Design/QA |
| X-01 peer lock | **Cấm** stub journal/ket-ca/finding/frequency trong slug này | Dev |
| X-02 BFF | Client **chỉ** Mobile.Bff `:5202` `mobile-bff/api/v1` · **cấm** web-bff base | Dev |
| X-03 invent | **Cấm** BienBanController / invent path | SA/Dev |
| X-04 shell | Bỏ me · me-profile · me-settings · feedback · cam-view | Dev |

## 4. Field inventory (from analy · Design chốt control-map)

| uiField | screen | controlHint | notes |
|---------|--------|-------------|-------|
| phoneFrame | BB-00 | Layout | max-width 430 |
| listItems / rowCode / rowStatus / rowTap | BB-01 | List cards / Badge / Nav | GET petitions |
| btnCreateTd / btnCreateTk / navBack / titleBar | BB-01/06 | Button/Nav / Static | → BB-02/03 · copy keys |
| search / emptyState | BB-07 | Text/Search / EmptyState | P1 optional search |
| entryPath | BB-02/03 | Radio/RO | `tuan-duong` \| `tuan-kiem` |
| parentJournalId / parentFindingId | BB-02/03 | Lookup/RO | FK peers B/C |
| tdFlag / tkAction | BB-02/03 | Button/flag / Radio | ViolationFlag / ViolationAction |
| senderUnit / route / kmText / content | BB-02/03 | Text* / TextArea* | **required** |
| petitionKind | BB-02/03 | Dropdown | default `hanh-lang` |
| getGps / lat/lng/accuracyM / noFaceFlag | BB-05 | GPS / Checkbox | deny block · noFace exception |
| mediaIds | BB-02/03 | PhotoRow | optional files/* |
| savePetition / saveParentFlag / saveParentAction / cancel | BB-02/03 | Button | POST + parent PUT |
| detailFields / leadSo07 | BB-04 | Text RO / Link | so07 = `csdl-bieu-07` nav only |

## 5. Enum keys (PO chốt · label via useFormOptions)

| Key group | Values |
|-----------|--------|
| entryPath | `tuan-duong` · `tuan-kiem` |
| tdFlag (UI) | `de-nghi-bien-ban` → bool `ViolationFlag=true` (SA: bool Live · UI key copy) |
| tkAction | `lap-bien-ban` · `de-nghi-vphc` |
| petition.kind | default `hanh-lang` (+ AllowedKinds peer nếu reuse) |
| petition.status | `moi` · (peer D đóng) |

## 6. API / bind (cite real-data §A+§B)

| Method | Path | Live? | PO rule |
|--------|------|-------|---------|
| GET\|POST\|GET{id} | `patrol/petitions` | **Live** | list/create/detail · kind `hanh-lang` · Status `moi` on create |
| PUT | `patrol/journal-lines/{id}` | **Live** | BB-02 `ViolationFlag` |
| GET\|POST\|PUT | `patrol/findings` | **Live** | BB-03 `ViolationAction` · FindingId on petition |
| GET | `patrol/sessions` | **Live** | ca context |
| GET | `auth/profile` | **Live** | senderUnit |
| — | `files/*` | **Live** | optional media |
| — | invent BienBan* / sổ 07 write | **Cấm** | — |

**CreatePatrolPetitionRequest (Live):** `SenderUnit` · `Route` · `KmText` · `Content` · `Kind` · `Lat?` · `Lng?` · `AccuracyM?` · `NoFace` · `Status=moi` · `FindingId?`.

**Prefixes:** `api/v1/patrol` · BFF mobile `mobile-bff/api/v1` · **cấm** client web-bff.

## 7. HARD product rules

| Rule | |
|------|--|
| Labels | useFormOptions / `bienBan.*` · **cấm** hardcode VN form |
| GPS | `navigator.geolocation` · deny block trừ noFace · **cấm** tọa độ mẫu |
| Sổ 07 | **cấm** embed/clone form · link `csdl-bieu-07` only |
| Peer lock | B–E journal/ket-ca/finding/frequency out of slug |
| BE | ONLY `Linm.RMMS.WebService` · Patrol · **cấm ERP.*** |
| MFE | ONLY `Linm.Web.RMMS.Mobile` · phone 430 · **cấm** desktop · **cấm** native |
| BFF | Mobile.Bff only · forms/init-data trên Mobile.Bff |
| Toast | empty/error · **cấm** `window.alert` |
| Petition | **≠** notification/inbox |

## 8. Leave / out of scope

| Leave | Reason |
|-------|--------|
| Form sổ 07 / CSDL write | Out · link only |
| Journal CRUD · kết ca · findings full · frequency | Peer B–E |
| me / profile / settings / feedback / cam-view | Shell HARD |
| Desktop Asset/Field · ERP grid | Wrong MFE |
| Invent BienBan* API | Live petitions + flags |
| Fake GPS / demo SSOT | HARD |
| iOS/Android native | Out web MFE |

## 9. Persona

| Ai | Lối |
|----|-----|
| NV tuần đường (BDTX) | BB-02 từ journal `hanh-lang` · đề nghị VPHC |
| Cán bộ tuần kiểm (Khu/VP) | BB-03 từ finding · `lap-bien-ban` \| `de-nghi-vphc` |

## 10. PO stance → UNCLEAR (handoff)

| id | Stance | Owner next |
|----|--------|------------|
| UNCLEAR-LIST-SCOPE | **Chốt:** P1 list **petitions-only** `kind=hanh-lang`. Secondary optional: flagged peers **chips** → BB-02/03 (không merge fake row). Align CTX «+ gắn cờ» qua section 2, không inbox. | Design wire · SA API peers |
| UNCLEAR-STD-ROUTE | **Chốt:** mfeStd `/web-rmms-bien-ban` (+ `/moi` · `/:id`) · BB-06 deep cite TD-05/TK-03 | Design/Dev |
| UNCLEAR-SO07-LINK | **Chốt:** slug **`csdl-bieu-07`** · nav only · disable+copy nếu Mobile không host | Design/Dev |
| UNCLEAR-DOMAIN-MAP-BB | Giữ · SA thêm DOMAIN-MAP row Patrol · Mobile MFE | SA |
| UNCLEAR-BFF-PROXY | Giữ · SA confirm Mobile.Bff proxy `patrol/*` · **cấm** invent | SA |
| UNCLEAR-JOURNAL-KIND-FIELD | Giữ · SA: Live bool `ViolationFlag` · UI key `de-nghi-bien-ban` via useFormOptions | SA |

## 11. Handoff Design

| | |
|--|--|
| packKind | `list` confirmed · DES-GRID N/A phone |
| zones | BB-00…07 · phone 430 · Android 1-1 |
| reviewUrl | Design prototype + reviewUrl |
| prior | control-hint inventory · real-data §B · this requirement |
| next | `/agent-design*` · **cấm** demo re-scan |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:bc9070c4ab20da1960355a727eae18029943c2d95865aebd7d9bcb443ea60cd2` · `rulesVersion=2026.09.25.2` · `writtenAt=2026-09-26T00:40:00.000Z` · `taskId=task_e85d8f14`
