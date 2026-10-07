# Data-analy — controlHint — web-rmms-cam-journal

| Field | Value |
|-------|-------|
| feature | `web-rmms-cam-journal` |
| title | Camera nhật ký tuần đường |
| packKind | `list` |
| changeScope | `edit_page` |
| mode | `feature_context` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.27.1` |
| versionGate | `ok` |
| contentHash | `sha256:76d6d3e1ec6437552d8e12b1c18c3aa8a0fd16abdcc3ef54b3ebc783d062050e` |
| analyzedAt | `2026-09-30T18:01:42.000Z` |
| demo | **N/A** |
| realData | `specs/_data-analy/features/web-rmms-cam-journal-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol (+ FileService cite · Auth) · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-cam-journal` (queue alias) |
| mfeStdRoute | product `/nhat-ky/:sessionId` · `/nhat-ky/:sessionId/moi` · `/nhat-ky/:sessionId/:lineId` · **cấm** invent slug route |
| productRoute | `/nhat-ky/:sessionId` · `/nhat-ky/:sessionId/moi` · `/nhat-ky/:sessionId/:lineId` |
| taskId | `task_e44f140b` |
| phoneFrame | `max-width: 430px` |
| formPattern | Mobile full · list + form · **không** ERP Modal/Slideout Kind B |
| bff | `Linm.RMMS.Mobile.Bff` · `:5202` · `VITE_MOBILE_API_URL=…/mobile-bff/api/v1` · **cấm** web-bff |
| deltaCite | `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` § List enqueue #3 |
| priorArtifacts | peer `web-rmms-mobile-b` journal Live · edit role-gate only |

> Data-analy **đề xuất** controlHint (edit). Design giữ layout list/form đã ship; thêm role visibility. SA cite Live journal-lines · **không** invent CamJournalController.  
> Pattern B: Lưu **không** pre-disable vì thiếu GPS — banner on click.  
> Nhãn: `useFormOptions('web-rmms-mobile-b')` / JOURNAL_*_LOOKUP_STATIC. **Cấm** toolbar Excel.

## § Delta Current vs New

| Area | Current | New |
|------|---------|-----|
| changeScope | shipped journal (mobile-b) | `edit_page` · **cấm** `new_page` · **cấm** route mới |
| JL-01 write | mọi user mở form đều POST/PUT được | chỉ vai **tuần đường** · QL_HAT/TK/NT **không tạo dòng** |
| JL-02 CTA ghi | hiện theo ca (chưa lọc vai) | CTA «Ghi»/thêm chỉ tuần đường · vai khác list RO / ẩn CTA |
| RouteCapture | purpose journal · multiple | giữ · tuần đường capture; view-only cho vai khác deep-link |
| SLA / tiền / Giao việc | N/A form này | **cấm** SLA 24h · **cấm** Mục IV tiền · **cấm** nút Giao việc trên JL-* |
| mfe / bff | Mobile · Mobile.Bff | giữ · **cấm** web-bff · **cấm** iOS/Android |
| align | phone | `/align-mobile-to-mfe` · 430px · no new tab/route/icon |

## Sources

| Source | Path | note |
|--------|------|------|
| CTX | `docs/context/features/web-rmms-cam-journal.md` | feature_context · hash gate |
| PLAN-3-VAI | `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` | enqueue #3 · tuần đường ghi · vai khác không tạo |
| Peer CTX | `docs/context/features/web-rmms-mobile-b.md` | Live journal-lines TD-04/05 |
| Code | `JournalFormPage.tsx` · `JournalListPage.tsx` | current SSOT |
| Endpoint | `services/patrol/endpoint.ts` | getJournalLines · patrolJournalLinesEndpoint create/update/getById |
| DOMAIN-MAP | Patrol · peer mobile-b | **cấm ERP.*** · GAP slug row |

## Screens (ids)

| id | route | surface |
|----|-------|---------|
| JL-01 | `/nhat-ky/:sessionId/moi` · `…/:lineId` | Form tạo/sửa dòng + RouteCapture |
| JL-02 | `/nhat-ky/:sessionId` | List dòng ca · CTA ghi (role) |

**Out:** invent `/web-rmms-cam-journal` product route · Giao việc · Excel · tạo dòng từ TK/NT/QL_HAT · review PUT (peer C).

## ControlHint inventory

| uiField | screen | controlHint | catalogKind / notes |
|---------|--------|-------------|---------------------|
| screenTitle | JL-01 | Text | create «Ghi nhật ký» / edit «Sửa dòng» |
| back / cancel | JL-01/02 | Button/Nav | leaveConfirm khi dirty |
| bannerErrors | JL-01 | Banner | GPS + narrative required · Pattern B |
| atLocal | JL-01 | DateTimeLocal | `at` ISO |
| writerLabel | JL-01 | Text RO | profile / dto display |
| kmText | JL-01 | TextInput | optional lý trình |
| direction | JL-01 | Select | DIRECTION_LOOKUP_STATIC |
| weather | JL-01 | Select | WEATHER_LOOKUP_STATIC |
| kind | JL-01 | Select | JOURNAL_KIND_LOOKUP_STATIC |
| narrative | JL-01 | TextArea | **required** |
| onSiteAction | JL-01 | Checkbox | bool |
| onSiteResult | JL-01 | TextArea | optional khi onSite |
| reportedTo | JL-01 | Select | REPORTED_TO_LOOKUP_STATIC · cờ TK · **không** tạo phiếu |
| reportedAtLocal | JL-01 | DateTimeLocal | optional |
| violationFlag | JL-01 | Checkbox | bool |
| status | JL-01 | Select | JOURNAL_STATUS_LOOKUP_STATIC |
| gpsPin | JL-01 | GPS + Button | Pattern B · pin / re-read |
| photos | JL-01 | RouteCaptureControl | multiple · tuần đường write; view cho vai khác |
| save | JL-01 | Button primary | chỉ `disabled={saving\|\|photoBusy}` · role tuần đường |
| listHeader | JL-02 | Text | ca stamp |
| lineCards | JL-02 | List | GET journal-lines · open → JL-01 |
| ctaCreate | JL-02 | Button | chỉ tuần đường · **ẩn** QL_HAT/TK/NT |
| emptyState | JL-02 | Empty | «Chưa ghi việc» + CTA gated |
| roleGateBanner | JL-01/02 | Banner optional | view-only hint |

## Filter / grid (desktop HARD)

| | |
|--|--|
| LinErpListFilterBar / DES-GRID-* | **N/A** — phone Field |
| toolbar / export Excel | **N/A** |

## GPS

| Màn | Rule |
|-----|------|
| JL-01 | Pattern B · deny/pending → banner khi Lưu · **cấm** fake · create: auto-read; edit: hydrate từ dto |
| JL-02 | RO · không bắt GPS mới khi chỉ xem list |

## Role matrix (HARD)

| Vai | JL-01 write | JL-02 view | Tạo dòng |
|-----|-------------|------------|----------|
| Tuần đường | POST/PUT + capture | full + CTA | **yes** |
| `QL_HAT` | **no** · view-only nếu deep-link | list RO · no CTA | **no** |
| Tuần kiểm | **no** · view-only (đối chiếu peer) | list RO · no CTA | **no** |
| Nghiệm thu | **no** · view-only | list RO · no CTA | **no** |

`QL_HAT` = `HAT-TRUONG` + `HAT-PHO` only · **cấm** suy từ `MANAGER-RMMS`.

## API (cite Live — SA confirm DTO)

| Method | Path | Note |
|--------|------|------|
| GET | `patrol/sessions/{id}` | session stamp · route/chieu |
| GET | `patrol/sessions/{id}/journal-lines` | JL-02 list |
| GET | `patrol/journal-lines/{id}` | JL-01 edit hydrate |
| POST | `patrol/journal-lines` | JL-01 create · tuần đường only · body + `sessionId` |
| PUT | `patrol/journal-lines/{id}` | JL-01 update · tuần đường only |
| files/* | FileService via capture | cite · không invent |

App base: `{BffBase}/mobile-bff/api/v1`. **Cấm** invent `cam-journal/*` · **cấm** web-bff.  
**Out API này:** `PUT …/review` (peer tuần kiểm C).

## UNCLEAR

| id | Issue | Action |
|----|-------|--------|
| UNCLEAR-JL-DOMAIN-ROW | DOMAIN-MAP chưa có slug `web-rmms-cam-journal` | SA: add row Patrol · cite journal-lines Live · hoặc bind peer mobile-b |
| UNCLEAR-JL-ROLE-SOURCE | profile `packageCode`/`roleCaps` từ role-gate | deps `web-rmms-role-gate` · Dev đọc caps client |
| — | mfeStdUrl alias vs product route | PO/Design: deep-link `/nhat-ky/:sessionId/moi` · **cấm** route mới |

## Handoff

| Role | Dùng |
|------|------|
| PO | Delta role-gate trên JL-01/02 · edit_page · PLAN-3-VAI #3 |
| Design | keep list/form · role visibility · 430px |
| SA | Live journal-lines · Mobile.Bff · DOMAIN-MAP row |
| TL/Dev | Edit `JournalFormPage` + `JournalListPage` · role caps · no new route |
| QA | tuần đường ghi · QL_HAT/TK/NT không tạo · Pattern B GPS |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:76d6d3e1ec6437552d8e12b1c18c3aa8a0fd16abdcc3ef54b3ebc783d062050e` · `rulesVersion=2026.09.27.1` · `analyzedAt=2026-09-30T18:01:42.000Z` · `changeScope=edit_page`
