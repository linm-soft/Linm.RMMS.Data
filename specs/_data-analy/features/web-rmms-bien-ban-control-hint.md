# Data-analy — controlHint — web-rmms-bien-ban

| Field | Value |
|-------|-------|
| feature | `web-rmms-bien-ban` |
| title | Đề nghị lập biên bản |
| packKind | `list` |
| changeScope | `new_page` |
| mode | `feature_context` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:bc9070c4ab20da1960355a727eae18029943c2d95865aebd7d9bcb443ea60cd2` |
| analyzedAt | `2026-09-26T00:25:00.000Z` |
| demo | **N/A** · master · **cấm** demo SSOT |
| realData | `specs/_data-analy/features/web-rmms-bien-ban-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Patrol** · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-bien-ban` |
| mfeStdRoute | `/web-rmms-bien-ban` |
| nativeCite | TD-05 nút đề nghị · TK-03 violationAction · Android Field 1-1 |
| taskId | `task_41debbaa` |
| phoneFrame | `max-width: 430px` |
| formPattern | Mobile list + full create/detail · **không** ERP Modal/Slideout Kind B · master = no demo · `/erp-form-context` labels |
| delta | § Delta HARD · T38 · new_page · hai lối Field · peer B–E giữ journal/ket-ca/finding/frequency |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** DOMAIN-MAP row + Mobile.Bff proxy.  
> Nhãn UI: `useFormOptions()` / copy key — **cấm** hardcode tiếng Việt trên form.  
> **Cấm** mở form sổ 07 · **cấm** nhét phone vào MFE desktop · **cấm** iOS/Android · **cấm** fake GPS.

## Sources

| Source | Path | note |
|--------|------|------|
| CTX | `docs/context/features/web-rmms-bien-ban.md` | created this run · hash gate |
| Implement | `IMPLEMENT-SCREENS.md` | TD-05 §9 · TK-03 violation · `bc9070c4…` |
| Gap | `GAP-TUAN-DUONG-TUAN-KIEM.md` | §5 TT 72 đề nghị VPHC |
| Peer B/C/D | CTX + `_data-analy/...-b/c/d-*` | ViolationFlag · ViolationAction · petitions |
| Field | `web-rmms-field.md` | hai cửa BDTX / Khu-VP |
| BE Live | journal-lines · findings · petitions · sessions | **cấm** invent BienBan* |
| DOMAIN-MAP | Patrol | **GAP** slug `web-rmms-bien-ban` |
| BFF | Mobile.Bff `:5202` · `mobile-bff/api/v1` | **cấm** web-bff base · **cấm** Route mobile-bff trên web-bff |

## Screens BB (ids)

| id | route / zone | surface |
|----|--------------|---------|
| BB-00 | phone | frame ≤430 · Android 1-1 · no me tab |
| BB-01 | `/web-rmms-bien-ban` | list đề nghị / petitions hanh-lang |
| BB-02 | `…/moi?from=tuan-duong` | form BDTX · journal parent |
| BB-03 | `…/moi?from=tuan-kiem` | form Khu/VP · finding parent |
| BB-04 | `…/:id` | detail |
| BB-05 | GPS | geolocation · deny block |
| BB-06 | Field entry | deep → peer TD-05 / TK-03 |
| BB-07 | empty/search | copy keys |

**Out:** sổ 07 · journal CRUD · kết ca · findings full · frequency · me* · invent path/entity.

## ControlHint inventory (BB)

| uiField | screen | controlHint | catalogKind / notes |
|---------|--------|-------------|---------------------|
| phoneFrame | BB-00 | Layout | `max-width: 430px` |
| listItems | BB-01 | List cards | `GET patrol/petitions?kind` filter `hanh-lang` (+ cite flagged peers) |
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
| parentJournalId | BB-02 | Lookup/RO | journal-line id · kind must `hanh-lang` |
| parentFindingId | BB-03 | Lookup/RO | finding id · findingKind `hanh-lang` |
| tdFlag | BB-02 | Button/flag | sets `ViolationFlag=true` · key `de-nghi-bien-ban` · **không** sổ 07 |
| tkAction | BB-03 | Radio | `lap-bien-ban` \| `de-nghi-vphc` · **không** sổ 07 |
| senderUnit | BB-02/03 | Text | profile / đơn vị · **required** |
| route | BB-02/03 | Text | **required** |
| kmText | BB-02/03 | Text | **required** |
| content | BB-02/03 | TextArea | **required** · nội dung đề nghị |
| petitionKind | BB-02/03 | Dropdown | default `hanh-lang` |
| getGps | BB-05 | Button | accuracy · deny block save (trừ noFace) |
| lat/lng/accuracyM | BB-05 | GPS | **cấm** fake |
| noFaceFlag | BB-02/03 | Checkbox | allow save w/o GPS + flag |
| mediaIds | BB-02/03 | PhotoRow | optional · files/* · cite peer |
| savePetition | BB-02/03 | Button | `POST patrol/petitions` · + PUT journal / finding parent |
| saveParentFlag | BB-02 | Button/side | `PUT journal-lines/{id}` ViolationFlag |
| saveParentAction | BB-03 | Button/side | persist `ViolationAction` on finding |
| cancel | BB-02/03 | Button/Nav | → list · no write |
| detailFields | BB-04 | Text RO | Code · route · km · content · status · GPS |
| leadSo07 | BB-04 | Link/Nav | **dẫn** sổ 07 (cite) · **không** embed form |

## Filter / grid (desktop HARD)

| | |
|--|--|
| LinErpListFilterBar / DES-GRID-* | **N/A** — phone list · **không** Kind B desktop grid |
| BB-01 list | cards phone · **cấm** clone ERP filter bar |

## GPS

| Màn | Rule |
|-----|------|
| BB-02/03 create | `navigator.geolocation` · deny → chặn Lưu trừ `noFace` · **cấm** mẫu |
| BB-01 list · BB-04 detail RO | không bắt GPS mới |
| Accuracy | lưu `accuracyM` nếu có · không UI «GPS OK ±m» bắt buộc |

## API — Live vs Mới

| Method | Path | Live? | Note |
|--------|------|-------|------|
| GET\|POST\|GET{id} | `patrol/petitions` | **Live** | formal đề nghị · kind `hanh-lang` |
| PUT | `patrol/journal-lines/{id}` | **Live** | `ViolationFlag` TD path |
| GET\|POST | `patrol/findings` | **Live** | `ViolationAction` TK path |
| GET | `patrol/sessions` | **Live** | ca context |
| GET | `auth/profile` | **Live** | senderUnit |
| — | `files/*` | **Live** | optional media |
| — | invent `BienBan*` / sổ 07 write | **Cấm** | — |

## § Delta (new_page)

| | |
|--|--|
| changeScope | `new_page` · MFE Mobile · phone 430 |
| T38 | Đề nghị lập biên bản · cite IMPLEMENT TD-05/TK-03 + GAP §5 |
| Hai lối | Tuần đường (BDTX) · Tuần kiểm (Khu/VP) |
| Peer lock | journal / kết ca / tồn tại / tần suất = `web-rmms-mobile-b`…`e` |
| Shell | bỏ me · me-profile · me-settings · feedback · cam-view |
| BFF | Mobile.Bff only · `VITE_MOBILE_API_URL` · **cấm** web-bff client |
| NEW | AutocodeTask `task_41debbaa` · full pipeline from data_analy |

## UNCLEAR

| id | Issue | Action |
|----|-------|--------|
| UNCLEAR-DOMAIN-MAP-BB | DOMAIN-MAP chưa row `web-rmms-bien-ban` | SA thêm · Patrol · Mobile MFE |
| UNCLEAR-BFF-PROXY | Mobile.Bff catch-all `patrol/petitions` + journal/findings | SA confirm · **cấm** invent |
| UNCLEAR-LIST-SCOPE | List = chỉ petitions hay + journal ViolationFlag + finding ViolationAction | PO/Design chốt union vs petitions-only |
| UNCLEAR-STD-ROUTE | mfeStd `/web-rmms-bien-ban` vs native Field deep TD-05/TK-03 | Design/Dev follow STATUS + deep cite |
| UNCLEAR-SO07-LINK | «dẫn sang sổ» = deep link feature nào | PO cite `csdl-so-*` / sổ 07 slug · **cấm** embed form |
| UNCLEAR-JOURNAL-KIND-FIELD | bool `ViolationFlag` vs string key `de-nghi-bien-ban` | SA: flag bool Live; UI key via useFormOptions |

## Handoff

| Role | Dùng |
|------|------|
| PO | 2 lối · DoD · no sổ 07 · peer lock B–E · GPS deny |
| Design | Phone 430 · zones BB-* · Android 1-1 · prototype+reviewUrl |
| SA | DOMAIN-MAP `web-rmms-bien-ban` · Mobile.Bff · **cấm** invent BienBan* |
| TL/Dev | Wire Mobile MFE · reuse petitions + ViolationFlag/Action |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:bc9070c4ab20da1960355a727eae18029943c2d95865aebd7d9bcb443ea60cd2` · `rulesVersion=2026.09.25.2` · `analyzedAt=2026-09-26T00:25:00.000Z`
