# Data-analy — controlHint — web-rmms-mobile-d

| Field | Value |
|-------|-------|
| feature | `web-rmms-mobile-d` |
| title | Đợt D — kết ca, giao việc, sổ kiến nghị · **delta SUBMIT-VALIDATE** |
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
| contentHash | `sha256:5f81d29ed889b244e81f537e7e3f8e8d4033a5f3a2e8b37e000d83ad97784488` |
| analyzedAt | `2026-09-27T08:35:00.000Z` |
| demo | **N/A** |
| realData | `specs/_data-analy/features/web-rmms-mobile-d-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Patrol** + **Maintenance** WO · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/kien-nghi/moi` |
| mfeStdRoute | `/kien-nghi/moi` |
| taskId | `task_b83eb3a7` |
| priorTask | `task_0ba23800` (wave D full pipeline **done**) |
| phoneFrame | `max-width: 430px` |
| formPattern | Mobile full · **không** ERP Modal/Slideout Kind B desktop |
| citeDelta | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` · slug `web-rmms-mobile-d` |
| priorWave | `web-rmms-mobile-a/b/c` · wave D baseline implemented · **this task = edit_page delta** |

> Data-analy **đề xuất** controlHint. **Giữ** PO/Design/SA artifacts baseline — chỉ § Delta dưới.  
> Nhãn UI: `useFormOptions()` / copy key — **cấm** hardcode tiếng Việt trên form.  
> **Cấm** typed CRUD `new_page` · **cấm** Excel export · **cấm** desktop Asset · **cấm** iOS/Android · **cấm** tọa độ mẫu.

## § Delta Current vs New (HARD — edit_page)

Cite: `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` · Pattern B (`erp-form-context` validation) · Search control users/tuyến · Mobile.Bff.

| Zone / file | Current (code) | New (task) |
|-------------|----------------|------------|
| `CloseSessionPage.tsx` · `receiverName` | `<input>` tự do · prefill profile | **SearchInput** → `GET …/integration/users?search=` (Mobile.Bff) · cột mã=`username`/`code` · tên=`fullName` · không thấy → `--` · **cấm** giữ chuỗi gõ tay |
| `CloseSessionPage.tsx` · Lưu | `disabled={!canSave}` · early `return` nếu thiếu | Pattern B: nút **luôn bật** (chỉ `disabled` khi `saving`) · bấm → `validationAttempted` · banner `string[]` + inline · **cấm** khóa vì thiếu required |
| `PetitionFormPage.tsx` · `route` | `<input>` tự do | **SearchInput** + `ROAD_ROUTE_LOOKUP_CONFIG` · **cấm** seed · mã không có → `--` |
| `PetitionFormPage.tsx` · Lưu | `disabled={!canSave}` · early return im | Pattern B giống trên · GPS deny / thiếu field → báo **sau** bấm · **cấm** khóa nút trước |
| `lookups.ts` (shared) | `ROAD_ROUTE_SEED` + filter `QL.22` | **Xóa** seed/filterSeed · API rỗng/lỗi → list rỗng · bỏ lọc `QL.22` |
| Mobile.Bff | chưa forward `integration/users` | Thêm forward `GET api/v1/integration/users` (pattern `RoadRoutesMobileController`) · **cấm** API mới WebService |
| API base | — | mọi call `mobileApiBase()` / `VITE_MOBILE_API_URL` · **cấm** web-bff trực tiếp |
| Align | — | `/align-mobile-to-mfe` · SSOT = page MFE đã có · khung 430 · **cấm** tab/route/icon mới · **cấm** prototype android/ios |
| mfeStdUrl | packet cũ `/web-rmms-mobile-d` | **Real** `http://localhost:9301/kien-nghi/moi` (`paths.ts`) |
| Out of scope | — | Excel · `new_page` · iOS/Android · invent endpoint · ERP.WebService |

**Screens đợt D (baseline — không đổi route):**

| id | route / file | surface delta |
|----|--------------|---------------|
| TD-06 | `CloseSessionPage.tsx` · `/field/tuan-duong/ket-ca` (sheet) | SearchInput users + Pattern B |
| TK-06 create | `PetitionFormPage.tsx` · `/kien-nghi/moi` | SearchInput road-routes + Pattern B |
| TK-03 / TK-05 | giữ baseline | **không** delta submit-validate slug D (cite bảng A/C nếu peer) |

## Sources

| Source | Path | note |
|--------|------|------|
| CTX | `docs/context/features/web-rmms-mobile-d.md` | hash gate · demo N/A |
| Delta SSOT | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` | Pattern B · users · road-routes · BFF |
| Screens D | `IMPLEMENT-SCREENS.md` | TD-06 · TK-03/05/06 baseline |
| Code | `src/pages/WebRmmsMobileD/CloseSessionPage.tsx` · `PetitionFormPage.tsx` | Current canSave/input |
| BE | DOMAIN-MAP Patrol · Maintenance · `integration/users` Live WebService | BFF forward only |
| Prior analy | task_0ba23800 control-hint/real-data | keep inventory; delta overlays |

## ControlHint inventory — **delta fields only**

| uiField | screen | controlHint | catalogKind / notes |
|---------|--------|-------------|---------------------|
| receiverName | TD-06 | **SearchInput** (users) | `GET mobile-bff/…/integration/users` · no free text · miss → `--` |
| handoverNote | TD-06 | TextArea | required **validate-on-submit** (Pattern B) · ban-giao |
| pauseReason | TD-06 | Dropdown | required **validate-on-submit** · tam-dung |
| saveSession | TD-06 | Button | **always enabled** trừ `saving` · banner on fail |
| route | TK-06 | **SearchInput** (road-routes) | `ROAD_ROUTE_LOOKUP_CONFIG` · no seed · miss → `--` |
| senderUnit / km / content / kind | TK-06 | Text / TextArea / Dropdown | required **validate-on-submit** |
| savePetition | TK-06 | Button | **always enabled** trừ `saving` · GPS deny báo sau bấm |
| getGps / noFace | TK-06 | Button / Flag | giữ baseline · **cấm** fake coords |

## Filter / grid (desktop HARD)

| | |
|--|--|
| LinErpListFilterBar / DES-GRID-* / toolbar export | **N/A** — phone Field · **không** Excel · **không** Kind B |

## GPS

| Màn | Rule |
|-----|------|
| TD-06 | **không** GPS |
| TK-06 | GPS hiện trường · deny → báo **sau** submit · no-face OK · **cấm** fake · **cấm** khóa nút trước |

## API — Live vs Mới (delta focus)

| Method | Path | Live? | Note |
|--------|------|-------|------|
| GET | `integration/users?search=` | **Live** WebService | Mobile.Bff **forward** (thiếu → thêm) |
| GET | `integration/road-routes/search` | **Live** BFF | đã có · **cấm** seed FE |
| PUT | `patrol/sessions/{id}` | **Live** | giữ baseline |
| GET\|POST | `patrol/petitions` | Live (post Schema D) | giữ |
| — | web-bff | **cấm** | chỉ `mobileApiBase()` |

## UNCLEAR

| id | Issue | Action |
|----|-------|--------|
| UNCLEAR-USER-SEARCH-CTRL | SearchInput users trên Mobile — component mới vs reuse pattern road-routes | Design/Dev · **cấm** gắn nguyên ERP `UserSearchInput` |
| UNCLEAR-RECEIVER-MISS | User không trong list → `--` | PO/Dev · không free-text fallback |
| (baseline CLOSED) | Handover/pause/petition Schema | SA prior · không mở lại trừ GAP mới |

## Handoff

| Role | Dùng |
|------|------|
| PO | Delta DoD: Pattern B · SearchInput users/tuyến · no seed · BFF users forward · mfeStd `/kien-nghi/moi` |
| Design | Giữ prototype baseline · reviewUrl cũ · **chỉ** cập nhật zone receiver + route control nếu prototype lệch |
| SA | Confirm forward-only `integration/users` · **cấm** ERP.* · **cấm** API mới WebService |
| TL/Dev | Wire CloseSession + PetitionForm · lookups no-seed · Mobile.Bff · align 430 |
| QA | Submit luôn bật · banner required · users 200 BFF · route `--` khi miss · no fake GPS |

## Version meta

| skillVersion | schemaVersion | workflowVersion | rulesVersion |
|--------------|---------------|-----------------|--------------|
| 2026.09.05.03 | 1 | 2026.09.19.02 | 2026.09.25.2 |
