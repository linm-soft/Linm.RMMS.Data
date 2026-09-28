# Design — web-rmms-bien-ban

| Field | Value |
|-------|-------|
| feature | `web-rmms-bien-ban` |
| title | Đề nghị lập biên bản |
| this role | `design` · `/agent-design` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_889425f7`) |
| changeScope | `edit_page` |
| packKind | **`list`** (PO confirm · UI = **phone Field** · **≠** Kind B desktop) |
| lane | `web` |
| stack | `web_mfe_phone` · `Linm.Web.RMMS.Mobile` · `max-width: 430px` |
| formPattern | Mobile list + create TD/TK + detail · phone 430 · Full · LeaveConfirmModal · **N/A** ERP Modal/Slideout |
| DES-GRID / LinErpListFilterBar | **N/A** — phone Field · **cấm** clone |
| Report AC / DES-RPT | **N/A** |
| shared_grid_example | **N/A** (phone) |
| real_view_parity | **v1** |
| peerStdUrl | `http://localhost:9301/bien-ban` |
| mfeStdUrl | `http://localhost:9301/bien-ban` |
| mfeStdRoute | `/bien-ban` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-bien-ban/ui/prototype/index.html` |
| demo | **N/A** · hash skip · **cấm** re-scan (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol · **cấm ERP.*** · **cấm** invent BienBan* |
| controlHint | `specs/_data-analy/features/web-rmms-bien-ban-control-hint.md` |
| realData | `specs/_data-analy/features/web-rmms-bien-ban-real-data.md` · §A+§B PASS |
| deltaCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` |
| prior | PO `confirmed` · `handoff/po-compact.md` · contentHash `sha256:3f196a65ee5bc6578aa8d96f9c08a6e0d0ca3fb263399e7a8d3fe3863da26b0e` |
| autoApprove | **ON** |
| e2eQa | ON queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở Design |
| `devSlash` | `/agent-dev` |
| updatedAt | `2026-09-27T16:05:00.000Z` |
| taskId | `task_889425f7` |
| skillId | `agent-design` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:3f196a65ee5bc6578aa8d96f9c08a6e0d0ca3fb263399e7a8d3fe3863da26b0e` |

**Cấm:** Dev/BE trước confirm (đã autoApprove) · ERP.* · invent BienBan* · sổ 07 form embed · iOS/Android native · Kind B DES-GRID · `LinErpListFilterBar` · fake GPS · hardcode label keys ngoài `useFormOptions` · native `alert`/`confirm` · re-scan demo · `yarn build` / e2e / start:std ở role này · me* / feedback / cam-view shell · MFE desktop · Excel export · `ROAD_ROUTE_SEED` · `disabled={!canSave}`.

## 0. Context / Demo

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/web-rmms-bien-ban.md` | feature BB |
| CTX-02 | `docs/plan/web-rmms-mobile/IMPLEMENT-SCREENS.md` | TD-05 §9 · TK-03 |
| CTX-03 | `docs/plan/web-rmms-mobile/GAP-TUAN-DUONG-TUAN-KIEM.md` | §5 TT 72 |
| CTX-04 | peer B/C/D · Field | ViolationFlag · ViolationAction · petitions |
| DEM | — | **N/A** · hash skip |
| DA-01 / DA-02 | `_data-analy/features/web-rmms-bien-ban-{control-hint,real-data}.md` | inventory + §B · delta |
| PO | `po/requirement.md` | LIST petitions-only · STD `/bien-ban` · SO07 nav · Pattern B |
| delta | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` | edit_page HARD |
| tokens | `docs/mobile-tokens.json` | color/radius/size |

## 0b. Current vs New (edit_page)

| Area | Current (shipped / prior design) | New (this task) |
|------|----------------------------------|-----------------|
| changeScope | `new_page` confirmed | `edit_page` · keep zones BB-* · **cấm** typed CRUD new_page |
| mfeStdRoute | legacy `/web-rmms-bien-ban` | **`/bien-ban`** · peerStdUrl `http://localhost:9301/bien-ban` |
| Submit CTA | `disabled={!canSave}` | Pattern B: Lưu **luôn bật** · chỉ `saving` disable · banner `string[]` + inline + scroll |
| GPS deny | pre-disable Lưu | deny **on submit click** · banner/modal · noFace vẫn lưu không GPS |
| route | Text free | **SearchInput** `road-route` · BFF `integration/road-routes/search` · no SEED · miss=`--` |
| Media | — | `capture="environment"` nếu input ảnh local |
| Export | — | **cấm** Excel |
| Leave | LeaveConfirmModal | giữ · dirty BB-02/03 |

## 1. Pattern & shell

| | |
|--|--|
| Frame | Phone **430px** · content-only · tokens primary `#0C84C0` · label **13** · field **≥16** |
| Shell | App topbar (title · back) · **không** ERP `LinPageLayout` · **không** me tab |
| List | BB-01 — card list `GET petitions?kind=hanh-lang` · EmptyState BB-07 · dual CTA tạo TD/TK |
| Full forms | BB-02 / BB-03 — header rồi **Hủy / Lưu** onTop · **cấm** footer · GPS «Ghim vị trí hiện tại» · **cấm** «Thử lại GPS» |
| Validate | Pattern B · banner + inline · **cấm** native alert |
| Detail | BB-04 RO · `leadSo07` → `csdl-bieu-07` nav only |
| Leave | **LeaveConfirmModal** (`DES-LEAVE`) · dirty BB-02/03 · **cấm** native dialog |
| Out | sổ 07 form · journal CRUD · kết ca · findings full · frequency · me* · invent · Excel — **hide** |

## 2. Screens / zones

| Zone | Route | Surface | Wire |
|------|-------|---------|------|
| **BB-00** | phone frame | Layout ≤430 | Android Field 1-1 · no me |
| **BB-01** | `/bien-ban` | List cards | GET petitions `hanh-lang` |
| **BB-02** | `/bien-ban/moi?from=tuan-duong` | Full form | journal parent · ViolationFlag · Pattern B · SearchInput route |
| **BB-03** | `/bien-ban/moi?from=tuan-kiem` | Full form | finding parent · ViolationAction · Pattern B · SearchInput route |
| **BB-04** | `/bien-ban/:id` | Detail RO | GET petition · leadSo07 |
| **BB-05** | GPS block | on BB-02/03 | geolocation · deny-on-submit · noFace OK |
| **BB-06** | Field deep | entry | peer TD-05 / TK-03 → create |
| **BB-07** | empty/search | EmptyState + Search | copy keys |
| **DES-LEAVE** | overlay | Modal | dirty leave BB-02/03 |

### IA

```
(auth) → Field hub
  → BB-01 list petitions (hanh-lang)  [/bien-ban]
      → BB-02 create TD
      → BB-03 create TK
      → BB-04 detail → leadSo07 (csdl-bieu-07 nav)
  → BB-06 deep: TD-05 → BB-02 · TK-03 → BB-03
```

### LIST-SCOPE (PO chốt)

| | |
|--|--|
| P1 primary | `GET patrol/petitions?kind=hanh-lang` only |
| Secondary | optional chips «có cờ» peer → deep BB-02/03 · **không** union list chính |
| ≠ | notification / inbox |

## 3. Field inventory (Control = controlHint)

| uiField | screen | controlHint | Required | Bind / notes |
|---------|--------|-------------|----------|--------------|
| phoneFrame | BB-00 | Layout | — | max-width 430 |
| listItems | BB-01 | List cards | — | `GET patrol/petitions` kind `hanh-lang` |
| navBack | BB-01 | Button/Nav | — | Field hub / stack |
| titleBar | BB-01 | Static | — | `bienBan.list.title` |
| btnCreateTd | BB-01/06 | Button/Nav | — | → BB-02 · `tuan-duong` |
| btnCreateTk | BB-01/06 | Button/Nav | — | → BB-03 · `tuan-kiem` |
| search | BB-07 | Text/Search | — | query `route` / `status` P1 optional |
| emptyState | BB-07 | EmptyState | — | `bienBan.list.empty` |
| rowCode | BB-01 | Text RO | — | petition.Code |
| rowStatus | BB-01 | Badge | — | `moi` … |
| rowTap | BB-01 | Nav | — | → BB-04 |
| flaggedChip | BB-01 | Chip/Nav | — | optional peer → BB-02/03 |
| entryPath | BB-02/03 | Radio/RO | * | `tuan-duong` \| `tuan-kiem` |
| parentJournalId | BB-02 | Lookup/RO | * | journal-line · thiếu → banner |
| parentFindingId | BB-03 | Lookup/RO | * | finding · thiếu → banner |
| tdFlag | BB-02 | Button/flag | * | `ViolationFlag=true` · key `de-nghi-bien-ban` |
| tkAction | BB-03 | Radio | * | `lap-bien-ban` \| `de-nghi-vphc` |
| senderUnit | BB-02/03 | Text | * | profile · Pattern B banner |
| route | BB-02/03 | **SearchInput** | * | `road-route` · BFF search · no SEED · miss=`--` |
| kmText | BB-02/03 | Text | * | required · banner |
| content | BB-02/03 | TextArea | * | required · banner |
| petitionKind | BB-02/03 | Dropdown | * | default `hanh-lang` |
| getGps | BB-05 | Button | — | deny **không** pre-disable Lưu |
| lat/lng/accuracyM | BB-05 | GPS | cond | **cấm** fake |
| noFaceFlag | BB-02/03 | Checkbox | — | allow save w/o GPS |
| mediaIds | BB-02/03 | PhotoRow | — | optional · `capture="environment"` |
| savePetition | BB-02/03 | Button | — | Pattern B luôn bật · `POST petitions` + parent |
| saveParentFlag | BB-02 | side-effect | — | `PUT journal-lines/{id}` ViolationFlag |
| saveParentAction | BB-03 | side-effect | — | ViolationAction on finding |
| cancel | BB-02/03 | Button/Nav | — | → list · Leave if dirty |
| detailFields | BB-04 | Text RO | — | Code · route · km · content · status · GPS |
| leadSo07 | BB-04 | Link/Nav | — | `csdl-bieu-07` nav only |

**Labels:** `useFormOptions()` / `bienBan.*` — prototype nhãn VN để review; Dev wire key.

**GPS (Pattern B):** BB-02/03 create only · deny → báo khi bấm Lưu · **cấm** khóa nút trước · noFace exception · list/detail không GPS mới.

## 4. Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/index.html` |
| Zones | BB-01 list · BB-07 empty · BB-02 TD · BB-03 TK · BB-05 GPS deny-on-submit · BB-04 detail · BB-06 Field · DES-LEAVE |
| Form | Full header Hủy/Lưu · Pattern B banner · SearchInput route · LeaveConfirmModal |
| Grid/filter desktop | **N/A** |
| SSOT | control-hint · real-data · mobile-tokens · SUBMIT-VALIDATE · **cấm** shared-grid desktop |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-bien-ban/ui/prototype/index.html` |
| **peerStdUrl** | `http://localhost:9301/bien-ban` |
| **real_view_parity** | `v1` |

### Wire

```
BB-01 list: cards Code+status moi · search · CTA TD/TK · /bien-ban
BB-07 empty: EmptyState · dual CTA
BB-02 TD: entryPath RO · parentJournal RO · tdFlag · sender* · route SearchInput* · km*/content*/kind · GPS · noFace · Lưu luôn bật · Pattern B banner on submit
BB-03 TK: entryPath RO · parentFinding RO · tkAction radio · SearchInput route · same Pattern B
BB-05 deny: Lưu luôn bật · bấm → banner nếu !noFace · noFace → OK w/o coords
BB-04 detail: RO · leadSo07
BB-06: Field deep → BB-02 / BB-03
Leave: Modal Ở lại / Rời (dirty BB-02/03) · cấm native
```

## 5. API map (cite real-data §B)

| Action | API |
|--------|-----|
| List / create / detail | `GET\|POST\|GET{id} …/patrol/petitions` **Live** |
| Parent TD flag | `PUT …/patrol/journal-lines/{id}` ViolationFlag **Live** |
| Parent TK action | findings ViolationAction **Live** |
| Session | `GET …/patrol/sessions` **Live** |
| Profile sender | `GET auth/profile` **Live** |
| Route lookup | `GET integration/road-routes/search` **Live** BFF · **cấm** seed |
| Photos | `files/*` **Live** |
| SO07 | **nav only** `csdl-bieu-07` |
| Invent | **Cấm** BienBan* · ERP.* · Excel |

**BFF:** `mobileApiBase` → Mobile.Bff `:5202` · **cấm** web-bff client · users forward nếu thiếu (peer).

## 6. UNCLEAR (handoff SA)

| id | Design chốt | SA |
|----|-------------|-----|
| (CLOSED PO) LIST-SCOPE · STD-ROUTE · SO07 | petitions-only · `/bien-ban` · leadSo07 nav | confirm DOMAIN-MAP row if needed |
| CLOSED prior | DOMAIN-MAP · BFF-PROXY · JOURNAL-KIND-FIELD | keep |

## 7. design_confirm

| | |
|--|--|
| autoApprove | ON → **approve** |
| reviewUrl | prototype path above |
| handoff | SA · zone ids BB-* · control-map · Pattern B · SearchInput · real_view_parity v1 |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:3f196a65ee5bc6578aa8d96f9c08a6e0d0ca3fb263399e7a8d3fe3863da26b0e` · `rulesVersion=2026.09.25.2` · `updatedAt=2026-09-27T16:05:00.000Z`
