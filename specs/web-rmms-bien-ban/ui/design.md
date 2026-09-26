# Design — web-rmms-bien-ban

| Field | Value |
|-------|-------|
| feature | `web-rmms-bien-ban` |
| title | Đề nghị lập biên bản |
| this role | `design` · `/agent-design` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_9648a32d`) |
| changeScope | `new_page` |
| packKind | **`list`** (PO confirm · UI = **phone Field** · **≠** Kind B desktop) |
| lane | `web` |
| stack | `web_mfe_phone` · `Linm.Web.RMMS.Mobile` · `max-width: 430px` |
| formPattern | Mobile list + create TD/TK + detail · phone 430 · LeaveConfirmModal · **N/A** ERP Modal/Slideout |
| DES-GRID / LinErpListFilterBar | **N/A** — phone Field · **cấm** clone |
| Report AC / DES-RPT | **N/A** |
| shared_grid_example | **N/A** (phone) |
| real_view_parity | **v1** |
| peerStdUrl | `http://localhost:9301/web-rmms-bien-ban` |
| mfeStdUrl | `http://localhost:9301/web-rmms-bien-ban` |
| mfeStdRoute | `/web-rmms-bien-ban` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-bien-ban/ui/prototype/index.html` |
| demo | **N/A** · hash skip · **cấm** re-scan (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol · **cấm ERP.*** · **cấm** invent BienBan* |
| controlHint | `specs/_data-analy/features/web-rmms-bien-ban-control-hint.md` |
| realData | `specs/_data-analy/features/web-rmms-bien-ban-real-data.md` · §A+§B PASS |
| prior | PO `confirmed` · `handoff/po-compact.md` · contentHash `sha256:bc9070c4ab20da1960355a727eae18029943c2d95865aebd7d9bcb443ea60cd2` |
| autoApprove | **ON** |
| e2eQa | ON queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở Design |
| `devSlash` | `/agent-dev` |
| updatedAt | `2026-09-26T00:45:00.000Z` |
| taskId | `task_9648a32d` |
| skillId | `agent-design` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:bc9070c4ab20da1960355a727eae18029943c2d95865aebd7d9bcb443ea60cd2` |

**Cấm:** Dev/BE trước confirm (đã autoApprove) · ERP.* · invent BienBan* · sổ 07 form embed · iOS/Android native · Kind B DES-GRID · `LinErpListFilterBar` · fake GPS · hardcode label keys ngoài `useFormOptions` · native `alert`/`confirm` · re-scan demo · `yarn build` / e2e / start:std ở role này · me* / feedback / cam-view shell · MFE desktop.

## 0. Context / Demo

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/web-rmms-bien-ban.md` | feature BB |
| CTX-02 | `docs/plan/web-rmms-mobile/IMPLEMENT-SCREENS.md` | TD-05 §9 · TK-03 violation |
| CTX-03 | `docs/plan/web-rmms-mobile/GAP-TUAN-DUONG-TUAN-KIEM.md` | §5 TT 72 đề nghị VPHC |
| CTX-04 | peer B/C/D · Field | ViolationFlag · ViolationAction · petitions · hai cửa |
| DEM | — | **N/A** · hash skip |
| DA-01 / DA-02 | `_data-analy/features/web-rmms-bien-ban-{control-hint,real-data}.md` | inventory + §B |
| PO | `po/requirement.md` | LIST P1 petitions-only · STD `/web-rmms-bien-ban` · SO07 nav |
| tokens | `docs/mobile-tokens.json` | color/radius/size |

## 1. Pattern & shell

| | |
|--|--|
| Frame | Phone **430px** · content-only · tokens primary `#0C84C0` · label **13** · field **≥16** |
| Shell | App topbar (title · back) · **không** ERP `LinPageLayout` · **không** me tab |
| List | BB-01 — card list `GET petitions?kind=hanh-lang` · EmptyState BB-07 · dual CTA tạo TD/TK |
| Full forms | BB-02 / BB-03 — header rồi **Hủy / Lưu** onTop (toolbar sticky) · **cấm** footer · GPS «Ghim vị trí hiện tại» · **cấm** «Thử lại GPS» |
| Detail | BB-04 RO · `leadSo07` link → `csdl-bieu-07` nav only (disable+copy nếu Mobile không host) |
| Leave | **LeaveConfirmModal** (`DES-LEAVE`) · dirty BB-02/03 · **cấm** native dialog |
| Tabs | none |
| Out | sổ 07 form · journal CRUD · kết ca · findings full · frequency · me* · invent path — **hide** |

## 2. Screens / zones

| Zone | Route | Surface | Wire |
|------|-------|---------|------|
| **BB-00** | phone frame | Layout ≤430 | Android Field 1-1 · no me |
| **BB-01** | `/web-rmms-bien-ban` | List cards | GET petitions `hanh-lang` · optional flagged chips → BB-02/03 |
| **BB-02** | `…/moi?from=tuan-duong` | Full form | parent journal · `ViolationFlag` · POST petition |
| **BB-03** | `…/moi?from=tuan-kiem` | Full form | parent finding · `ViolationAction` radio · POST petition |
| **BB-04** | `…/:id` | Detail RO | GET petition · leadSo07 |
| **BB-05** | GPS block | on BB-02/03 | geolocation · deny block trừ noFace |
| **BB-06** | Field deep | entry | peer TD-05 / TK-03 → create |
| **BB-07** | empty/search | EmptyState + Search | copy keys · query route/status P1 optional |
| **DES-LEAVE** | overlay | Modal | dirty leave BB-02/03 |

### IA

```
(auth) → Field hub
  → BB-01 list petitions (hanh-lang)
      → BB-02 create TD (journal parent + ViolationFlag)
      → BB-03 create TK (finding parent + ViolationAction)
      → BB-04 detail → leadSo07 (csdl-bieu-07 nav)
  → BB-06 deep: TD-05 «đề nghị» → BB-02 · TK-03 action → BB-03
```

### LIST-SCOPE (PO chốt)

| | |
|--|--|
| P1 primary | `GET patrol/petitions?kind=hanh-lang` only |
| Secondary | optional chips «có cờ» từ peer journal/finding → deep BB-02/03 · **không** union rows vào list chính |
| ≠ | notification / inbox |

## 3. Field inventory (Control = controlHint)

| uiField | screen | controlHint | Required | Bind / notes |
|---------|--------|-------------|----------|--------------|
| phoneFrame | BB-00 | Layout | — | max-width 430 |
| listItems | BB-01 | List cards | — | `GET patrol/petitions` kind `hanh-lang` |
| navBack | BB-01 | Button/Nav | — | Field hub / stack |
| titleBar | BB-01 | Static | — | `bienBan.list.title` |
| btnCreateTd | BB-01/06 | Button/Nav | — | → BB-02 · entryPath `tuan-duong` |
| btnCreateTk | BB-01/06 | Button/Nav | — | → BB-03 · entryPath `tuan-kiem` |
| search | BB-07 | Text/Search | — | query `route` / `status` P1 optional |
| emptyState | BB-07 | EmptyState | — | `bienBan.list.empty` |
| rowCode | BB-01 | Text RO | — | petition.Code |
| rowStatus | BB-01 | Badge | — | `moi` … |
| rowTap | BB-01 | Nav | — | → BB-04 |
| flaggedChip | BB-01 | Chip/Nav | — | optional peer → BB-02/03 |
| entryPath | BB-02/03 | Radio/RO | * | `tuan-duong` \| `tuan-kiem` |
| parentJournalId | BB-02 | Lookup/RO | * | journal-line id · kind `hanh-lang` · thiếu → chặn |
| parentFindingId | BB-03 | Lookup/RO | * | finding id · findingKind `hanh-lang` · thiếu → chặn |
| tdFlag | BB-02 | Button/flag | * | `ViolationFlag=true` · UI key `de-nghi-bien-ban` · **không** sổ 07 |
| tkAction | BB-03 | Radio | * | `lap-bien-ban` \| `de-nghi-vphc` · **không** sổ 07 |
| senderUnit | BB-02/03 | Text | * | profile / đơn vị |
| route | BB-02/03 | Text | * | |
| kmText | BB-02/03 | Text | * | |
| content | BB-02/03 | TextArea | * | nội dung đề nghị |
| petitionKind | BB-02/03 | Dropdown | * | default `hanh-lang` |
| getGps | BB-05 | Button | — | accuracy · deny block (trừ noFace) |
| lat/lng/accuracyM | BB-05 | GPS | cond | **cấm** fake |
| noFaceFlag | BB-02/03 | Checkbox | — | allow save w/o GPS |
| mediaIds | BB-02/03 | PhotoRow | — | optional · files/* |
| savePetition | BB-02/03 | Button | — | `POST patrol/petitions` + parent write |
| saveParentFlag | BB-02 | side-effect | — | `PUT journal-lines/{id}` ViolationFlag |
| saveParentAction | BB-03 | side-effect | — | persist ViolationAction on finding |
| cancel | BB-02/03 | Button/Nav | — | → list · no write · Leave if dirty |
| detailFields | BB-04 | Text RO | — | Code · route · km · content · status · GPS |
| leadSo07 | BB-04 | Link/Nav | — | `csdl-bieu-07` nav only · disable+copy nếu không host |

**Labels:** `useFormOptions()` / `bienBan.*` — prototype hiện nhãn VN để review; Dev wire key.

**GPS:** BB-02/03 create only · list/detail **không** GPS mới · nút «Ghim vị trí hiện tại» · **cấm** «Thử lại GPS» · deny → disable Lưu trừ `noFace`.

## 4. Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/index.html` |
| Zones | BB-01 list · BB-07 empty · BB-02 TD · BB-03 TK · BB-05 GPS deny/noFace · BB-04 detail · BB-06 Field entry · DES-LEAVE |
| Form | Full header Hủy/Lưu · LeaveConfirmModal |
| Grid/filter desktop | **N/A** |
| SSOT | control-hint · real-data · mobile-tokens · **cấm** shared-grid desktop |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-bien-ban/ui/prototype/index.html` |
| **peerStdUrl** | `http://localhost:9301/web-rmms-bien-ban` |
| **real_view_parity** | `v1` |

### Wire

```
BB-01 list: cards Code+status moi · search · CTA TD/TK · optional flagged chips
BB-07 empty: EmptyState · dual CTA
BB-02 TD: entryPath RO tuan-duong · parentJournal RO · tdFlag · sender*/route*/km*/content*/kind · GPS · noFace · Lưu POST+PUT flag
BB-03 TK: entryPath RO tuan-kiem · parentFinding RO · tkAction radio · same required · Lưu POST+action
BB-05 deny: banner · Lưu disabled · noFace → Lưu enabled w/o coords
BB-04 detail: RO fields · leadSo07 link
BB-06: Field deep chips → BB-02 / BB-03
Leave: Modal Ở lại / Rời (dirty BB-02/03)
```

## 5. API map (cite real-data §B)

| Action | API |
|--------|-----|
| List / create / detail | `GET\|POST\|GET{id} …/patrol/petitions` **Live** |
| Parent TD flag | `PUT …/patrol/journal-lines/{id}` ViolationFlag **Live** |
| Parent TK action | findings ViolationAction **Live** |
| Session context | `GET …/patrol/sessions` **Live** |
| Profile sender | `GET auth/profile` **Live** |
| Photos | `files/*` **Live** |
| SO07 | **nav only** `csdl-bieu-07` · **cấm** write / embed |
| Invent | **Cấm** BienBan* · ERP.* · mobile-only path trên web-bff |

**BFF:** `VITE_MOBILE_API_URL=http://localhost:5202/mobile-bff/api/v1` · **cấm** web-bff client.

## 6. UNCLEAR (handoff SA)

| id | Design chốt | SA |
|----|-------------|-----|
| UNCLEAR-DOMAIN-MAP-BB | cite Patrol · Mobile MFE | DOMAIN-MAP row `web-rmms-bien-ban` |
| UNCLEAR-BFF-PROXY | UI gọi mobile-bff `patrol/*` | confirm catch-all · **cấm** invent |
| UNCLEAR-JOURNAL-KIND-FIELD | UI key `de-nghi-bien-ban` via useFormOptions · write bool ViolationFlag | bool Live vs string column |
| (resolved PO) LIST-SCOPE · STD-ROUTE · SO07 | petitions-only P1 · `/web-rmms-bien-ban` · leadSo07 nav | — |

## 7. design_confirm

| | |
|--|--|
| autoApprove | ON → **approve** |
| reviewUrl opened | prototype path above |
| handoff | SA · zone ids BB-* · control-map · real_view_parity v1 |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:bc9070c4ab20da1960355a727eae18029943c2d95865aebd7d9bcb443ea60cd2` · `rulesVersion=2026.09.25.2` · `updatedAt=2026-09-26T00:45:00.000Z`
