# PO requirement — web-rmms-mobile-d

| Field | Value |
|-------|-------|
| feature | `web-rmms-mobile-d` |
| title | Đợt D — kết ca / sổ KN · **delta SUBMIT-VALIDATE** |
| packKind | `list` · **confirmed** |
| changeScope | `edit_page` · **keep** prior PO/Design/SA baseline · § Delta only |
| lane | `web` · MFE Mobile phone |
| demo | **N/A** |
| status | `done` |
| skillId | `agent-po` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:5f81d29ed889b244e81f537e7e3f8e8d4033a5f3a2e8b37e000d83ad97784488` |
| writtenAt | `2026-09-27T08:40:00.000Z` |
| taskId | `task_e3231d97` |
| prior | data_analy `confirmed` · compact + control-hint + real-data §A+§B · hash skip · **cấm** re-scan demo |
| deltaCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/kien-nghi/moi` |
| mfeStdUrl | `http://localhost:9301/kien-nghi/moi` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol + Maintenance WO · Integration · **cấm ERP.*** |
| phoneFrame | `max-width: 430px` |
| formPattern | Mobile full · **không** ERP Modal/Slideout Kind B |
| autoApprove | ON |
| e2eQa | ON (queued `/agent-qa*` only) |

> Labels: `useFormOptions()` / copy key — **cấm** hardcode VN trên form.  
> **Schema-before-form (baseline keep):** handover/pause · `Schema_PatrolPetition` · finding.feedback · `workOrderId`.  
> Petition **≠** `notification/inbox`. WO **Live** Maintenance — **cấm** invent WO trong Patrol.  
> **Transport:** mọi call `mobileApiBase()` / `VITE_MOBILE_API_URL` · **cấm** web-bff trực tiếp.

## 1. Goal (delta overlay)

Giữ wave D baseline (TD-06 · TK-03 · TK-05 · TK-06). Task này **chỉ** chỉnh submit UX + lookup:

1. **Pattern B** trên TD-06 + TK-06: nút Lưu **luôn bật** (chỉ `disabled` khi `saving`) · validate-on-first-click · banner `string[]` + inline · API lỗi = toast · **cấm** `disabled={!canSave}` vì thiếu required.
2. **TD-06** `receiverName` → **SearchInput users** (`GET mobile-bff/…/integration/users?search=`) · mã=`username`/`code` · tên=`fullName` · miss → `--` · **cấm** free-text fallback · **cấm** ERP `UserSearchInput` nguyên bản.
3. **TK-06** `route` → **SearchInput road-routes** (`ROAD_ROUTE_LOOKUP_CONFIG`) · **xóa** `ROAD_ROUTE_SEED` / filter `QL.22` · miss → `--`.
4. **Mobile.Bff** forward `GET api/v1/integration/users` (pattern RoadRoutes) · **cấm** API mới WebService.
5. **Align** `/align-mobile-to-mfe` · khung 430 · **cấm** tab/route/icon mới · **cấm** prototype android/ios.
6. **mfeStd** real = `/kien-nghi/moi` (không `/web-rmms-mobile-d`).

## 2. Screens

| id | route / file | surface delta | DoD |
|----|--------------|---------------|-----|
| TD-06 | `/field/tuan-duong/ket-ca` · `CloseSessionPage.tsx` | receiver SearchInput + Pattern B | Radio 1-of-3 + PUT session · **không** GPS · cancel → TD-01 |
| TK-06 create | `/kien-nghi/moi` · `PetitionFormPage.tsx` | route SearchInput + Pattern B | POST petition · GPS deny/required **sau** bấm · no-face OK · **cấm** fake |
| TK-06 list | `/field/tuan-kiem/kien-nghi` | **không** delta submit-validate | GET cards · EmptyState · **cấm** inbox |
| TK-03 / TK-05 | baseline | **không** delta slug D | giữ assign WO · feedback |

**Out of D:** TK-07 (E) · track GPS liên tục · native · desktop Asset · Excel · `new_page` typed CRUD · invent endpoint.

## 3. List / Grid AC (packKind=list · phone)

| AC | Rule | Pass |
|----|------|------|
| DES-GRID / LinErpListFilterBar | **N/A** — Field phone · **cấm** clone ERP Kind B / Excel toolbar | Design note N/A |
| L-01…L-06 | **keep baseline** TK-06 list / parent session gate | QA |
| S-01…S-07 | **keep baseline** TD-06 action/summary/labels | QA |
| S-08 Pattern B | Lưu TD-06 always-on trừ `saving` · thiếu handover/pause → banner+inline sau bấm · **cấm** pre-disable | QA |
| S-09 receiver Search | SearchInput users · chọn mã+tên · miss/`--` · **cấm** chuỗi gõ tay lưu | QA |
| W-* / F-* | **keep baseline** assign + feedback (ngoài delta) | QA |
| P-01 required | senderUnit · route · km · content · petitionKind **required on-submit** | QA |
| P-02 GPS deny | Deny + không no-face → banner **sau** bấm Lưu · **cấm** khóa nút trước (Pattern B) | QA |
| P-03 no-face | Flag → Lưu không lat/lng · **cấm** fake | QA |
| P-04…P-06 | **keep** POST `moi` · close rules · openFinding | QA |
| P-07 route Search | SearchInput road-routes · no seed · miss `--` | QA |
| P-08 Pattern B | Lưu TK-06 always-on trừ `saving` · banner required | QA |
| B-01 BFF users | `GET …/integration/users` qua Mobile.Bff → 200 · empty OK · **cấm** mock | Dev/QA |
| B-02 transport | mọi call `mobileApiBase()` · **cấm** web-bff | Dev |
| B-03 no seed | `lookups.ts` không `ROAD_ROUTE_SEED` / filter QL.22 | Dev/QA |
| X-01 out E | TK-07 **không** stub | Dev |
| X-02 align | 430 · no new tab/route/icon · no android/ios prototype | Design/Dev |

## 4. Field inventory (delta overlays · Design chốt control-map)

| uiField | screen | controlHint | notes |
|---------|--------|-------------|-------|
| receiverName | TD-06 | **SearchInput** users | replace free input · miss `--` |
| handoverNote | TD-06 | TextArea | required if ban-giao · **on-submit** |
| pauseReason | TD-06 | Dropdown | required if tam-dung · **on-submit** |
| saveSession | TD-06 | Button | **never** disable for required · only `saving` |
| route | TK-06 | **SearchInput** road-routes | no seed · miss `--` |
| senderUnit / kmText / content / kind | TK-06 | Text / TextArea / Dropdown | required **on-submit** |
| lat/lng/accuracyM · noFace | TK-06 | GPS + Flag | deny after click · cấm fake |
| savePetition | TK-06 | Button | **never** disable for required · only `saving` |
| actionKind · summary* · assignWo · feedback* · petitionList | baseline | keep | ngoài delta control |

## 5. Enum keys (keep baseline)

| Key group | Values |
|-----------|--------|
| TD-06 action | `ket-ca` · `ban-giao` · `tam-dung` |
| pauseReason | `su-co-mat-an-toan` · `cuu-nan` · `thien-tai` · `chay-no` · `bat-kha-khang` |
| petition.kind | `hu-hong` · `hanh-lang` · `atgt` · `tuan-duong` · `khac` |
| petition.status | `moi` · (đóng khi phiếu `xong` hoặc lý do tay) |

## 6. API / bind (cite real-data §A+§B · delta focus)

| Method | Path | Live? | PO rule |
|--------|------|-------|---------|
| GET | `integration/users?search=` | **Live** WS | Mobile.Bff **forward** · display map username/code + fullName |
| GET | `integration/road-routes/search` | **Live** BFF | no FE seed |
| PUT | `patrol/sessions/{id}` | **Live** | keep baseline Status/handover/pause |
| GET\|POST | `patrol/petitions` | Live (post Schema D) | keep · route từ SearchInput |
| POST | `maintenance/work-orders` · `findings/{id}/feedback` | baseline | **không** đổi shape delta này |

**Prefixes:** `api/v1/patrol` · `api/v1/maintenance` · `api/v1/integration` · BFF `mobile-bff/api/v1` cùng `{resource}`.

## 7. HARD product rules

| Rule | |
|------|--|
| Labels | useFormOptions / copy key · **cấm** hardcode VN form |
| Pattern B | submit always-on · validate-on-click · banner+inline · **cấm** pre-disable required |
| Search | users + road-routes · miss `--` · **cấm** free-text fallback |
| Seed | **cấm** `ROAD_ROUTE_SEED` / filter QL.22 |
| BFF | forward users only · **cấm** new WS endpoint · **cấm** web-bff |
| GPS | TD-06 none · TK-06 deny sau submit · no-face OK · **cấm** fake |
| BE | ONLY `Linm.RMMS.WebService` · **cấm ERP.*** |
| MFE | ONLY Mobile · 430 · **cấm** desktop Asset · **cấm** native · **cấm** Excel · **cấm** `new_page` |
| Toast | lỗi/empty · **cấm** `window.alert` |
| Demo | N/A · hash skip · **cấm** re-scan (GAP-PO-DEMO-RESCAN-01) |

## 8. Leave / out of scope

| Leave | Reason |
|-------|--------|
| TK-07 kế hoạch | Wave E |
| TK-03 / TK-05 submit-validate | ngoài slug D delta (peer A/C nếu có) |
| Track GPS liên tục · iOS/Android · desktop grid | Out D |
| Excel / `new_page` typed CRUD | cấm |
| Invent WO trong Patrol · invent users API | Live Maintenance / forward only |
| notification/inbox làm sổ KN | GAP-TK-04 |
| Re-scan demo / crawl CTX | analy hash skip |

## 9. Open → Design / SA (PO stance)

| id | PO stance | Owner |
|----|-----------|-------|
| UNCLEAR-USER-SEARCH-CTRL | SearchInput Mobile reuse pattern road-routes · **cấm** gắn nguyên ERP `UserSearchInput` | Design/Dev |
| UNCLEAR-RECEIVER-MISS | Không trong list → `--` · **không** free-text | Dev (PO chốt) |
| GAP-DA-MOB-D-USERS-01 | BFF forward users bắt buộc DoD | SA/Dev |
| GAP-DA-MOB-D-SEED-01 | Xóa seed lookups bắt buộc DoD | Dev |
| (baseline CLOSED) | Handover/pause/petition Schema · DOMAIN row D | **không** mở lại trừ GAP mới |

## 10. DoD PO → Design

- [x] packKind=`list` confirmed · changeScope=`edit_page` · deltaCite SUBMIT-VALIDATE
- [x] Screens TD-06 + TK-06 delta · TK-03/05 keep · Leave
- [x] List/Grid AC phone N/A DES-GRID · ACs S-08/09 · P-02/07/08 · B-01…03
- [x] Inventory delta + API Live forward · Pattern B · no seed
- [x] mfeStdUrl `/kien-nghi/moi` · contentHash match analy
- [x] UNCLEAR soft → Design/Dev · **cấm** re-scan demo
- [x] Handoff compact `handoff/po-compact.md`

## Handoff Design

| Field | Value |
|-------|-------|
| next | `/agent-design` · giữ prototype baseline · **chỉ** zone receiver + route control nếu lệch · phone 430 |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-d/ui/prototype/index.html` (keep) |
| peerStdUrl | `http://localhost:9301/kien-nghi/moi` |
| controlHint | reuse analy delta inventory · Design chốt control-map SearchInput |
| DES-GRID / filter bar | **N/A** phone |
| autoApprove | ON → tự confirm design gate |

## Version meta

| skillVersion | schemaVersion | workflowVersion | rulesVersion |
|--------------|---------------|-----------------|--------------|
| 2026.09.05.03 | 1 | 2026.09.19.02 | 2026.09.25.2 |
