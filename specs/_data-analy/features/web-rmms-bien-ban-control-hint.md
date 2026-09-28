# Data-analy — controlHint — web-rmms-bien-ban

| Field | Value |
|-------|-------|
| feature | `web-rmms-bien-ban` |
| title | Đề nghị lập biên bản |
| packKind | `list` |
| changeScope | `edit_page` |
| mode | `feature_context` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:3f196a65ee5bc6578aa8d96f9c08a6e0d0ca3fb263399e7a8d3fe3863da26b0e` |
| contentHashPrev | `sha256:bc9070c4ab20da1960355a727eae18029943c2d95865aebd7d9bcb443ea60cd2` |
| analyzedAt | `2026-09-27T15:42:56.000Z` |
| demo | **N/A** · master-adjacent · **cấm** demo SSOT |
| realData | `specs/_data-analy/features/web-rmms-bien-ban-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Patrol** · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/bien-ban` |
| mfeStdRoute | `/bien-ban` |
| nativeCite | TD-05 nút đề nghị · TK-03 violationAction · Android Field 1-1 |
| taskId | `task_af34e11a` |
| phoneFrame | `max-width: 430px` |
| formPattern | Mobile list + full create/detail · **không** ERP Modal/Slideout Kind B · master = no demo · `/erp-form-context` labels · Pattern B validate |
| deltaCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` · slug `web-rmms-bien-ban` |
| keepArtifacts | PO/Design/SA/TL/implement/qa/review **giữ** · **cấm** typed CRUD `new_page` |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map (giữ prototype). SA **giữ** DOMAIN-MAP + Mobile.Bff.  
> Nhãn UI: `useFormOptions()` / copy key — **cấm** hardcode tiếng Việt trên form.  
> **Cấm** mở form sổ 07 · **cấm** nhét phone vào MFE desktop · **cấm** iOS/Android · **cấm** fake GPS · **cấm** Excel toolbar/export.

## Sources

| Source | Path | note |
|--------|------|------|
| CTX | `docs/context/features/web-rmms-bien-ban.md` | baseline zones BB-* |
| SUBMIT-VALIDATE | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` | **edit_page HARD** · Pattern B · SearchInput tuyến |
| Implement | `IMPLEMENT-SCREENS.md` | TD-05 §9 · TK-03 |
| Gap | `GAP-TUAN-DUONG-TUAN-KIEM.md` | §5 TT 72 |
| Code current | `src/pages/WebRmmsBienBan/*` | list/create TD/TK/detail shipped |
| paths | `paths.ts` · `/bien-ban` | **không** `/web-rmms-bien-ban` |
| BE Live | journal-lines · findings · petitions · sessions | **cấm** invent BienBan* |
| BFF | Mobile.Bff `:5202` · `mobile-bff/api/v1` | **cấm** web-bff base |

## § Delta Current vs New (edit_page HARD)

| Area | Current (shipped) | New (this task) |
|------|-------------------|-----------------|
| changeScope | `new_page` pipeline done · Review PASS | `edit_page` · NEW `task_af34e11a` · **cấm** typed CRUD new_page |
| mfeStdRoute | legacy CTX `/web-rmms-bien-ban` | **`/bien-ban`** · `http://localhost:9301/bien-ban` · paths.ts SSOT |
| Submit CTA | `disabled={!canSave}` trên `BienBanCreateTdPage` / `BienBanCreateTkPage` | Pattern B: nút **luôn bật** khi form sẵn sàng · chỉ `disabled` khi `saving` · cite `erp-form-context` 3-validation |
| Validate | early `return` khi `!canSave` · thiếu banner | Lần bấm đầu → `validationAttempted` · banner `string[]` + inline + scroll · **cấm** một `alert.warning` |
| GPS | deny → khóa nút / chặn trước bấm | deny → **bấm mới báo** (banner/modal) · **cấm** khóa nút trước · noFace vẫn cho phép lưu không GPS |
| route field | `<input>` free text `route` | **SearchInput** + `ROAD_ROUTE_LOOKUP_CONFIG` · API `integration/road-routes/search` · **cấm** `ROAD_ROUTE_SEED` · mã không có → `--` |
| Media | (peer) | ảnh file: `capture="environment"` nếu có input local |
| Toolbar/export | N/A phone | **cấm** Excel / toolbar export override SUBMIT-VALIDATE |
| PO/Design | artifacts done | **giữ** · PO copy delta vào requirement § Current vs New · Design không gen demo mới |
| Align cuối | — | `/align-mobile-to-mfe` · demo_ref=no_demo · khung 430 · **không** tab/route/icon mới · mọi call `mobileApiBase()` |
| BFF users | — | forward `GET integration/users` **nếu** thiếu (peer forms); BB slug chính = road-routes SearchInput |
| Out of scope | — | journal/ket-ca/finding/frequency · sổ 07 form · iOS/Android · ERP.* · invent API |

## Screens BB (ids) — giữ

| id | route / zone | surface |
|----|--------------|---------|
| BB-00 | phone | frame ≤430 · Android 1-1 · no me tab |
| BB-01 | `/bien-ban` | list đề nghị / petitions `hanh-lang` |
| BB-02 | `/bien-ban/moi?from=tuan-duong` | form BDTX · journal parent |
| BB-03 | `/bien-ban/moi?from=tuan-kiem` | form Khu/VP · finding parent |
| BB-04 | `/bien-ban/:id` | detail |
| BB-05 | GPS | geolocation · Pattern B deny-on-submit |
| BB-06 | Field entry | deep → peer TD-05 / TK-03 |
| BB-07 | empty/search | copy keys |

**Out:** sổ 07 · journal CRUD · kết ca · findings full · frequency · me* · invent path/entity · Excel export.

## ControlHint inventory (BB) — delta marks *

| uiField | screen | controlHint | catalogKind / notes |
|---------|--------|-------------|---------------------|
| phoneFrame | BB-00 | Layout | `max-width: 430px` |
| listItems | BB-01 | List cards | `GET patrol/petitions?kind` filter `hanh-lang` |
| navBack | BB-01 | Button/Nav | Field hub / stack |
| titleBar | BB-01 | Static | copy `bienBan.list.title` |
| btnCreateTd | BB-01/06 | Button/Nav | → BB-02 · entryPath `tuan-duong` |
| btnCreateTk | BB-01/06 | Button/Nav | → BB-03 · entryPath `tuan-kiem` |
| search | BB-07 | Text/Search | query `route` / `status` P1 optional |
| emptyState | BB-07 | EmptyState | copy `bienBan.list.empty` |
| rowCode | BB-01 | Text RO | petition.Code |
| rowStatus | BB-01 | Badge | `moi` … |
| rowTap | BB-01 | Nav | → BB-04 |
| entryPath | BB-02/03 | Radio/RO | `tuan-duong` \| `tuan-kiem` |
| parentJournalId | BB-02 | Lookup/RO | journal-line id · kind `hanh-lang` |
| parentFindingId | BB-03 | Lookup/RO | finding id · findingKind `hanh-lang` |
| tdFlag | BB-02 | Button/flag | `ViolationFlag=true` · key `de-nghi-bien-ban` · **không** sổ 07 |
| tkAction | BB-03 | Radio | `lap-bien-ban` \| `de-nghi-vphc` |
| senderUnit | BB-02/03 | Text | profile / đơn vị · **required** · banner Pattern B |
| route * | BB-02/03 | **SearchInput** | `catalogKind=road-route` · BFF `integration/road-routes/search` · no seed · miss → `--` |
| kmText | BB-02/03 | Text | **required** |
| content | BB-02/03 | TextArea | **required** |
| petitionKind | BB-02/03 | Dropdown | default `hanh-lang` |
| getGps | BB-05 | Button | accuracy · deny **không** pre-disable Lưu |
| lat/lng/accuracyM | BB-05 | GPS | **cấm** fake |
| noFaceFlag | BB-02/03 | Checkbox | allow save w/o GPS + flag |
| mediaIds | BB-02/03 | PhotoRow | optional · `capture="environment"` |
| savePetition * | BB-02/03 | Button | Pattern B luôn bật · `POST patrol/petitions` · + parent write |
| saveParentFlag | BB-02 | Button/side | `PUT journal-lines/{id}` ViolationFlag |
| saveParentAction | BB-03 | Button/side | persist `ViolationAction` |
| cancel | BB-02/03 | Button/Nav | → list · no write |
| detailFields | BB-04 | Text RO | Code · route · km · content · status · GPS |
| leadSo07 | BB-04 | Link/Nav | **dẫn** sổ 07 · **không** embed form |

## Filter / grid (desktop HARD)

| | |
|--|--|
| LinErpListFilterBar / DES-GRID-* | **N/A** — phone list · **không** Kind B desktop grid |
| BB-01 list | cards phone · **cấm** clone ERP filter bar · **cấm** Excel export |

## GPS (Pattern B — edit)

| Màn | Rule |
|-----|------|
| BB-02/03 create | `navigator.geolocation` · deny → báo khi bấm Lưu · **cấm** `disabled` trước · noFace exception |
| BB-01 list · BB-04 detail RO | không bắt GPS mới |
| Accuracy | lưu `accuracyM` nếu có |

## API — Live vs Mới

| Method | Path | Live? | Note |
|--------|------|-------|------|
| GET\|POST\|GET{id} | `patrol/petitions` | **Live** | formal đề nghị · kind `hanh-lang` |
| PUT | `patrol/journal-lines/{id}` | **Live** | `ViolationFlag` TD path |
| GET\|POST | `patrol/findings` | **Live** | `ViolationAction` TK path |
| GET | `patrol/sessions` | **Live** | ca context |
| GET | `auth/profile` | **Live** | senderUnit |
| GET | `integration/road-routes/search` | **Live** BFF | SearchInput tuyến · **cấm** seed |
| GET | `integration/users` | Live WS · BFF forward nếu thiếu | peer; BB không bắt buộc user picker |
| — | `files/*` | **Live** | optional media |
| — | invent `BienBan*` / sổ 07 write | **Cấm** | — |

## UNCLEAR

| id | Issue | Action |
|----|-------|--------|
| ~~UNCLEAR-DOMAIN-MAP-BB~~ | CLOSED (prior SA) | DOMAIN-MAP Patrol row |
| ~~UNCLEAR-BFF-PROXY~~ | CLOSED (prior SA/Dev) | Mobile.Bff patrol/* |
| ~~UNCLEAR-STD-ROUTE~~ | CLOSED | `/bien-ban` paths.ts · STATUS |
| ~~UNCLEAR-JOURNAL-KIND-FIELD~~ | CLOSED | flag bool Live · UI key useFormOptions |
| UNCLEAR-LIST-SCOPE | List = chỉ petitions hay + flagged peers | soft · PO giữ prior chốt nếu có |
| UNCLEAR-SO07-LINK | deep link sổ 07 slug | soft · **cấm** embed · prior detail disabled host OK |

## Handoff

| Role | Dùng |
|------|------|
| PO | Copy § Delta → requirement · Pattern B · SearchInput route · keep Screens |
| Design | Giữ prototype · **không** gen demo · zone ids BB-* · route `/bien-ban` |
| SA | Giữ API · confirm road-routes/users BFF forward · **cấm** invent |
| TL/Dev | enhance/fix_gaps · Pattern B + SearchInput · align-mobile-to-mfe |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:3f196a65ee5bc6578aa8d96f9c08a6e0d0ca3fb263399e7a8d3fe3863da26b0e` · `rulesVersion=2026.09.25.2` · `analyzedAt=2026-09-27T15:42:56.000Z` · `taskId=task_af34e11a` · `changeScope=edit_page`
