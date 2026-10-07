# Data-analy — controlHint — web-rmms-cam-incident

| Field | Value |
|-------|-------|
| feature | `web-rmms-cam-incident` |
| title | Camera sự cố theo vai |
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
| contentHash | `sha256:e515f74ca821b652154473ac30eaec7bb13c8921acf6725b739dc4eb1744b8d1` |
| analyzedAt | `2026-10-01T00:00:00.000Z` |
| demo | **N/A** |
| realData | `specs/_data-analy/features/web-rmms-cam-incident-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · Incident (+ Patrol · Integration · FileService · Auth cite · Maintenance peer) · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-cam-incident` (queue alias) |
| mfeStdRoute | product `/van-de` · `/van-de/moi` · `/van-de/:id` · **cấm** invent slug route |
| productRoute | `/van-de` · `/van-de/moi` · `/van-de/:id` |
| taskId | `task_770ceabe` |
| phoneFrame | `max-width: 430px` |
| formPattern | Mobile full · sheet + list + detail · **không** ERP Modal/Slideout Kind B |
| bff | `Linm.RMMS.Mobile.Bff` · `:5202` · `VITE_MOBILE_API_URL=…/mobile-bff/api/v1` · **cấm** web-bff |
| deltaCite | `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` § List enqueue #4 |
| priorArtifacts | peer `web-rmms-incident` Live · edit role-gate + Giao việc CTA |

> Data-analy **đề xuất** controlHint (edit). Design giữ layout list/create/detail/sheet đã ship; thêm role visibility + nút **Giao việc xử lý** chỉ `QL_HAT`. SA cite Live incidents · **không** invent CamIncidentController.  
> Pattern B: Create/Lưu **không** pre-disable vì thiếu GPS — banner on click.  
> Nhãn: `useFormOptions('web-rmms-incident')` / INCIDENT_LOOKUP_STATIC. **Cấm** toolbar Excel.  
> Form giao đầy đủ (người nhận · hạn TT41) = peer `web-rmms-giao-viec-ql-hat` — slug này chỉ CTA + scope list.

## § Delta Current vs New

| Area | Current | New |
|------|---------|-----|
| changeScope | shipped incident (peer) | `edit_page` · **cấm** `new_page` · **cấm** route mới |
| INC-CAP / INC-N write | mọi user mở create/capture đều POST được | chỉ vai **tuần đường** · TK/NT **không tạo** · QL_HAT không capture create |
| INC-L scope | list chưa lọc theo vai / người tạo | tuần đường: sự cố mình · **QL_HAT: mọi sự cố** · TK/NT: xem RO |
| INC-D CTA | chat · estimate · Đóng sự cố · **thiếu** Giao việc | nút **Giao việc xử lý** chỉ `QL_HAT` · nav `paths.workFor(id)` · TK/NT/tuần đường **ẩn** |
| Đóng sự cố | hiện mọi user mở detail | giữ peer close policy · **không** Đóng thay Giao việc cho QL_HAT (PLAN: không Đóng hộ) — Design/SA confirm; mặc định: tuần đường/reporter close; QL_HAT ưu tiên Giao việc |
| RouteCapture | purpose photo-geo · sheet | tuần đường write; detail `mode=view` mọi vai |
| SLA / tiền | SCREENS từng default 24h (peer giao) | **cấm** SLA 24h trên slug này · **cấm** Mục IV tiền · hạn gợi ý = peer giao |
| mfe / bff | Mobile · Mobile.Bff | giữ · **cấm** web-bff · **cấm** iOS/Android |
| align | phone | `/align-mobile-to-mfe` · 430px · no new tab/route/icon |

## Sources

| Source | Path | note |
|--------|------|------|
| CTX | `docs/context/features/web-rmms-cam-incident.md` | feature_context · hash gate |
| PLAN-3-VAI | `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` | enqueue #4 · role matrix HARD |
| Peer CTX | `docs/context/features/web-rmms-incident.md` | Live incidents L/N/D |
| Code | `IncidentCaptureSheet.tsx` · `IncidentDetailPage.tsx` · `IncidentCreatePage.tsx` · `IncidentListPage.tsx` · `paths.ts` | current SSOT |
| Endpoint | `services/incident` | getList · create · getById · close |
| DOMAIN-MAP | Incident · peer web-rmms-incident | **cấm ERP.*** · GAP slug row |

## Screens (ids)

| id | route | surface |
|----|-------|---------|
| INC-CAP | sheet `/van-de/moi` | `IncidentCaptureSheet` · RouteCapture · Hủy/Lưu |
| INC-N | `/van-de/moi` | Form tạo · Pattern B · POST |
| INC-D | `/van-de/:id` | Detail RO · photos view · **Giao việc xử lý** (QL_HAT) |
| INC-L | `/van-de` | List · FAB create (tuần đường) · CTA giao (QL_HAT) |

**Out:** invent `/web-rmms-cam-incident` product route · Giao việc ngoài QL_HAT · Excel · form giao fields (peer) · invent CamIncident*.

## ControlHint inventory

| uiField | screen | controlHint | catalogKind / notes |
|---------|--------|-------------|---------------------|
| screenTitle | INC-N/D/L | Text | create «Ghi sự cố» / detail «Chi tiết sự cố» / list «Vấn đề» |
| back / cancel | INC-* | Button/Nav | leaveConfirm khi dirty (N/CAP) |
| bannerErrors | INC-N | Banner | asset · session · GPS · Pattern B |
| assetType | INC-N | Select/Pick | integration asset-types |
| sessionStamp | INC-N | Text RO | patrol sessions |
| title | INC-N | TextInput | required |
| incidentType | INC-N | Select | LOOKUP_STATIC |
| severity | INC-N/D | Select/Badge | severities lookup |
| routeName / km | INC-N/D | Text RO / stamp | từ session + capture route |
| description | INC-N | TextArea | optional + pin sidecar |
| photos / capture | INC-CAP/N | RouteCaptureControl | tuần đường write · multiple |
| saveCapture | INC-CAP | Button | Hủy / Lưu · busy lock |
| createSubmit | INC-N | Button primary | Pattern B · role tuần đường · lock `creating` only |
| listFilters | INC-L | Search+Select | search · status · severity |
| incidentCards | INC-L | List | GET incidents · open → INC-D |
| fabCreate | INC-L | FAB | chỉ tuần đường · **ẩn** QL_HAT/TK/NT |
| assignCtaList | INC-L | Button/Icon | **Giao việc** chỉ QL_HAT · `paths.workFor` |
| detailCode/status | INC-D | Text/Badge | RO |
| detailFields | INC-D | Text RO | type · route · km · severity · gps · reporter · time · desc |
| detailPhotos | INC-D | RouteCapture view | mode=view |
| peerChat / peerEst | INC-D | Button | nav peer · giữ |
| assignCtaDetail | INC-D | Button primary | **Giao việc xử lý** · **chỉ** QL_HAT |
| closeNote / closeBtn | INC-D | TextArea+Button | peer close · **không** thay Giao việc |
| roleGateBanner | INC-*/CAP | Banner optional | view-only / no-assign hint |
| roleCaps | all | Hidden | cite role-gate |

## Filter / grid (desktop HARD)

| | |
|--|--|
| LinErpListFilterBar / DES-GRID-* | **N/A** — phone Field |
| toolbar / export Excel | **N/A** |

## GPS

| Màn | Rule |
|-----|------|
| INC-CAP / INC-N | Pattern B · deny/pending → banner khi Lưu/Create · **cấm** fake |
| INC-D / INC-L | RO · không bắt GPS mới khi chỉ xem |

## Role matrix (HARD)

| Vai | INC-CAP/N write | INC-L | INC-D | Giao việc |
|-----|-----------------|-------|-------|-----------|
| Tuần đường | POST + capture | list mình · FAB | xem · close peer | **no** |
| `QL_HAT` | **no** | **mọi** sự cố · no FAB create | xem + **Giao việc xử lý** | **yes** |
| Tuần kiểm | **no** | xem RO | xem · **no** giao | **no** |
| Nghiệm thu | **no** | xem RO | xem · **no** giao | **no** |

`QL_HAT` = `HAT-TRUONG` + `HAT-PHO` only · **cấm** suy từ `MANAGER-RMMS`.

## API (cite Live — SA confirm DTO)

| Method | Path | Note |
|--------|------|------|
| GET | `incident/incidents` | INC-L · QL_HAT unscoped · tuần đường own filter |
| POST | `incident/incidents` | INC-N · tuần đường only |
| GET | `incident/incidents/{id}` | INC-D |
| POST | `incident/incidents/{id}/close` | peer close · giữ |
| GET | `patrol/sessions` | create stamp RO |
| GET | `integration/asset-types` | pick |
| files/* · ai-vision uploads | FileService / AiVision via capture | cite |
| Maintenance WO | via `paths.workFor` | peer giao · **không** invent trên slug này |

App base: `{BffBase}/mobile-bff/api/v1`. **Cấm** invent `cam-incident/*` · **cấm** web-bff.

## UNCLEAR

| id | Issue | Action |
|----|-------|--------|
| UNCLEAR-INC-DOMAIN-ROW | DOMAIN-MAP chưa có slug `web-rmms-cam-incident` | SA: add row Incident · cite incidents Live · hoặc bind peer web-rmms-incident |
| UNCLEAR-INC-ROLE-SOURCE | profile `packageCode`/`roleCaps` từ role-gate | deps `web-rmms-role-gate` |
| UNCLEAR-INC-LIST-FILTER | BE đã có filter reporter? | SA: confirm query param hoặc client filter · QL_HAT no filter by creator |
| UNCLEAR-INC-CLOSE-VS-ASSIGN | PLAN: QL_HAT không Đóng sự cố | Design/SA: ẩn close với QL_HAT; tuần đường giữ close |
| — | mfeStdUrl alias vs product route | PO/Design: deep-link `/van-de/moi` · **cấm** route mới |

## Handoff

| Role | Dùng |
|------|------|
| PO | Delta role-gate · Giao việc QL_HAT · edit_page · PLAN-3-VAI #4 |
| Design | keep L/N/D/sheet · role visibility · CTA Giao việc · 430px |
| SA | Live incidents · Mobile.Bff · DOMAIN-MAP row · list scope |
| TL/Dev | Edit Incident* pages · caps · workFor CTA · no new route |
| QA | tuần đường tạo · QL_HAT mọi list+giao · TK/NT xem không giao · Pattern B |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:e515f74ca821b652154473ac30eaec7bb13c8921acf6725b739dc4eb1744b8d1` · `rulesVersion=2026.09.27.1` · `analyzedAt=2026-10-01T00:00:00.000Z` · `changeScope=edit_page`
