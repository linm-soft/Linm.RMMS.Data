# Data-analy — controlHint — web-rmms-mobile-b

| Field | Value |
|-------|-------|
| feature | `web-rmms-mobile-b` |
| title | Tuần đường đợt B — sổ và dòng nhật ký |
| packKind | `list` |
| changeScope | `edit_page` |
| editTask | `1` |
| mode | `feature_context` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.27.1` |
| versionGate | `ok` |
| contentHash | `sha256:fe3ccad04e66ee08b65a65aead0fbef9f46328e5c2a3b828b3bee12969bbf72e` |
| analyzedAt | `2026-09-27T06:55:00.000Z` |
| demo | **N/A** |
| realData | `specs/_data-analy/features/web-rmms-mobile-b-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Patrol** · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-mobile-b` |
| mfeStdRoute | `/web-rmms-mobile-b` |
| taskId | `task_c25cf1eb` |
| phoneFrame | `max-width: 430px` |
| formPattern | Mobile full · **không** ERP Modal/Slideout Kind B desktop |
| priorWave | `web-rmms-mobile-a` (hub/ca/check-in Live) · wave B journal-lines **Live** |
| deltaCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` · slug `web-rmms-mobile-b` |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** Bff/transport.  
> Nhãn UI: `useFormOptions()` / copy key — **cấm** hardcode tiếng Việt trên form.  
> **Cấm** nhét màn vào MFE desktop · **cấm** iOS/Android native · **cấm** typed CRUD `new_page`.  
> **Keep** PO/Design/implement artifacts — chỉ bổ sung **§ Delta**.

## § Delta Current vs New (edit_page HARD)

Cite: `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` (Pattern B + Search control + Mobile.Bff).  
Override body: **không** toolbar/export Excel · **không** `new_page`.

| Area | Current (shipped) | New (task_c25cf1eb) |
|------|-------------------|---------------------|
| changeScope | wave B Live journal list/form (prior pipeline PASS) | `edit_page` · NEW AutocodeTask · keep PO/Design |
| JournalFormPage Lưu | `disabled={!canSave}` · `canSave = gps.ok && narrative.trim() && !saving && !hydrating` | Pattern B: nút **luôn bật** trừ `saving`/`hydrating` · GPS/narrative thiếu → báo **khi bấm** (banner `string[]` + inline) · **cấm** khóa nút trước · **cấm** `alert.warning` thay banner |
| validation UX | `alert.warning` GPS/narrative trước save | `validationAttempted` · banner + inline + scroll first error · API 4xx/5xx = toast only |
| mediaIds / LinImageUpload | upload hiện có · **chưa** `capture` | `capture="environment"` (prop forward hoặc input local) · **cấm** fork package nếu thiếu prop |
| TD-04 list / empty / cards | Live journal-lines · no check-in | **KEEP** |
| Schema / routes journal | Live `Schema_PatrolJournalLine` + CRUD | **KEEP** · **cấm** invent API |
| Tuyến / users picker | N/A trên TD-04/05 (ca parent · userName profile RO) | **KEEP** N/A picker · shared Mobile.Bff users forward (peer A/d) · **cấm** ERP UserSearchInput |
| API base | mobile-bff plan / mixed risk | **chỉ** `mobileApiBase()` / `VITE_MOBILE_API_URL` · **cấm** web-bff trực tiếp |
| Mobile.Bff users | peer thiếu forward | Forward `GET api/v1/integration/users` nếu chưa · **cấm** API mới WebService · road-routes/search **đã có** |
| Grid / filter Kind B | N/A phone · WAIVE | **KEEP N/A** · **cấm** LinErpListFilterBar / DES-GRID / Excel |
| Align mobile | — | `/align-mobile-to-mfe` · SSOT = page MFE · khung 430 · **cấm** tab/route/icon mới · **cấm** prototype android/ios |
| Out of scope B | TD-06 · TK · WO · findings | **KEEP** out |

## Sources

| Source | Path | note |
|--------|------|------|
| CTX | `docs/context/features/web-rmms-mobile-b.md` | FE3CCAD0… |
| Delta SSOT | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` | BF61E367… · slug B |
| Screens B | `docs/plan/web-rmms-mobile/IMPLEMENT-SCREENS.md` | TD-04 · TD-05 |
| Gap | `docs/plan/web-rmms-mobile/GAP-TUAN-DUONG-TUAN-KIEM.md` | §2 · ≠ check-in |
| Peer A | `web-rmms-mobile-a` CTX + control-hint delta | Pattern B peer |
| BE Live | journal-lines + sessions · Schema_PatrolJournalLine | prior PASS |
| DOMAIN-MAP | Patrol · `api/v1/patrol` | cite · **cấm ERP.*** |
| MFE current | `src/pages/WebRmmsMobileB/JournalFormPage.tsx` · JournalList | delta probe |

## Screens đợt B (ids) — unchanged

| id | route | surface |
|----|-------|---------|
| TD-04 | `/field/tuan-duong/nhat-ky` | list cards sổ trong ca |
| TD-05 | `/field/tuan-duong/nhat-ky/moi` · `/field/tuan-duong/nhat-ky/:lineId` | form tạo/sửa dòng |

**Out of B:** TD-06 · TK-02…07 · WO `POST maintenance/work-orders` · cờ `vuot-bdtx` write (đợt D) · findings (C).

## ControlHint inventory (đợt B + delta)

| uiField | screen | controlHint | catalogKind / notes |
|---------|--------|-------------|---------------------|
| journalList | TD-04 | List cards | `GET …/sessions/{id}/journal-lines` · **không** gồm check-in |
| card.at | TD-04 | Text | giờ dòng |
| card.kmText | TD-04 | Text | lý trình |
| card.kind | TD-04 | Chip/Text | LOOKUP_STATIC kind key |
| card.status | TD-04 | Chip | `phat-hien` \| `dang-xu-ly` \| `cho-kiem-tra` \| `xong` |
| card.tap | TD-04 | Nav | → TD-05 `:lineId` |
| addLine | TD-04 | Button | → TD-05 `/moi` · empty CTA |
| emptyHint | TD-04 | EmptyState | copy key «Chưa ghi việc» · **không** hardcode VN string trong code |
| at | TD-05 | DateTime | default now · editable |
| userName | TD-05 | Text readonly | `GET auth/profile` · resolve users catalog miss → `--` (shared) |
| getGps | TD-05 | Button | `navigator.geolocation` · hiện accuracy |
| lat / lng / accuracyM | TD-05 | GPS read | deny → **banner on submit** · **cấm** `disabled={!gps}` · **cấm** fake |
| kmText | TD-05 | Text | km tay · GAP-TD-LRS-01 |
| direction | TD-05 | Dropdown | LOOKUP_STATIC · default từ ca `Note` `chieu=` |
| weather | TD-05 | Dropdown | `nang` `mua` `mu` `lu` `bao` `khac` |
| kind | TD-05 | Radio/Dropdown | một chọn · 9 keys kind |
| narrative | TD-05 | TextArea | **required** · fail → banner/inline **on submit** · **cấm** pre-disable Lưu |
| mediaIds | TD-05 | FileMulti | FileService guid · **capture=environment** |
| onSiteAction | TD-05 | Toggle/Checkbox | đã xử lý tại chỗ |
| onSiteResult | TD-05 | Text | để trống nếu chỉ phát hiện |
| reportedTo | TD-05 | Button+Text | «Báo tuần kiểm» → `reportedTo=tuan-kiem` · **không** tạo phiếu TK-03 |
| reportedAt | TD-05 | DateTime | khi đánh dấu báo cáo |
| violationFlag | TD-05 | Button/flag | nếu `kind=hanh-lang` → `de-nghi-bien-ban` · **không** mở sổ 07 |
| status | TD-05 | Dropdown | 4 status keys |
| scope / workOrderId | TD-05 | — | **OUT B** (đợt D) · UI ẩn hoặc disabled |
| save | TD-05 | Button | Pattern B · disable **chỉ** `saving`/`hydrating` · POST tạo · PUT sửa |
| cancel | TD-05 | Button | về TD-04 · LeaveConfirmModal nếu dirty |

## Filter / grid (desktop HARD)

| | |
|--|--|
| LinErpListFilterBar / DES-GRID-* | **N/A** — phone Field · **không** Kind B · SUBMIT override no Excel toolbar |
| TD-04 | Card list theo ca · **cấm** clone ERP filter bar |
| `{feature}-filter-bar.md` | **skip** — no LinErpListFilterBar surface |

## GPS (delta Pattern B)

| Màn | Rule |
|-----|------|
| TD-04 | không bắt GPS |
| TD-05 | GPS deny / thiếu narrative → **bấm Lưu mới** banner + inline · **cấm** `disabled={!canSave}` · **cấm** tọa độ mẫu |

## API (Live — KEEP)

| Method | Path | Note |
|--------|------|------|
| GET | `patrol/sessions/{id}/journal-lines` | list sổ |
| POST | `patrol/journal-lines` | tạo (body `sessionId`) |
| PUT | `patrol/journal-lines/{id}` | sửa |
| GET | `patrol/journal-lines/{id}` | hydrate edit |
| GET | `patrol/sessions/{id}` | parent ca |

Transport: **chỉ** `mobile-bff/api/v1` via `mobileApiBase()`.

## UNCLEAR

| id | Issue | Action |
|----|-------|--------|
| UNCLEAR-CAPTURE-PROP | `LinImageUpload` có/không prop `capture` | Dev: prop forward hoặc input local `capture="environment"` · **cấm** fork package |
| UNCLEAR-LRS | Km tay đến khi có snap LRS (`GAP-TD-LRS-01`) | Design giữ Text `kmText` · **KEEP** |
| UNCLEAR-BANNER-KEYS | Message banner GPS/narrative từ lookup vs copy key | PO: prefer `useFormOptions()` / existing keys · **cấm** invent VN label mới nếu key đã có |

**Closed prior:** UNCLEAR-JL-PATH · UNCLEAR-JL-SCHEMA · UNCLEAR-WEATHER (Live 6 keys).

## Handoff

| Role | Dùng |
|------|------|
| PO | Copy § Delta → requirement § Current vs New · Pattern B · capture · no Excel |
| Design | Keep prototype · patch TD-05 submit always-on + banner zone · phone 430 |
| SA | Mobile.Bff users forward (nếu thiếu) · giữ Live journal paths · **cấm** invent API |
| TL/Dev | Wire delta only · `JournalFormPage` · mobileApiBase · align-mobile |
| QA | submit enabled · GPS deny on-click banner · capture · no check-in in list |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:fe3ccad04e66ee08b65a65aead0fbef9f46328e5c2a3b828b3bee12969bbf72e` · `rulesVersion=2026.09.27.1` · `analyzedAt=2026-09-27T06:55:00.000Z` · `taskId=task_c25cf1eb` · `changeScope=edit_page`
