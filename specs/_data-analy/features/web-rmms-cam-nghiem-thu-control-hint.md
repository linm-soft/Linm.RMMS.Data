# Data-analy — controlHint — web-rmms-cam-nghiem-thu

| Field | Value |
|-------|-------|
| feature | `web-rmms-cam-nghiem-thu` |
| title | Camera phiếu nghiệm thu |
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
| contentHash | `sha256:c4e8a1b9d2f57306e8a0c1d4b7f9e2a5c8d0f3b6a9e1c4d7f0b2e5a8c1d4f7b0` |
| analyzedAt | `2026-10-01T02:20:00.000Z` |
| demo | **N/A** |
| realData | `specs/_data-analy/features/web-rmms-cam-nghiem-thu-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol · resource `nghiem-thu` · FileService cite · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-cam-nghiem-thu` (queue alias) |
| mfeStdRoute | product `/nghiem-thu` · `/nghiem-thu/moi` · `/nghiem-thu/:id` · **cấm** invent slug route |
| productRoute | `/nghiem-thu` · `/nghiem-thu/moi` · `/nghiem-thu/:id` |
| taskId | `task_85003423` |
| phoneFrame | `max-width: 430px` |
| formPattern | Mobile full · list + form · **không** ERP Modal/Slideout Kind B |
| bff | `Linm.RMMS.Mobile.Bff` · `:5202` · `VITE_MOBILE_API_URL=…/mobile-bff/api/v1` · **cấm** web-bff |
| deltaCite | `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` § List enqueue #6 · § Công tác nghiệm thu · Plan #7 |
| priorArtifacts | peer `web-rmms-nghiem-thu` Live NT · edit role-gate + camera write · **cấm** giao việc · **cấm** xác nhận hoàn thành sự cố |

> Data-analy **đề xuất** controlHint (edit). Design giữ layout list/form đã ship; thêm role nghiệm thu trên form camera. SA cite Live `patrol/nghiem-thu` · **không** invent CamNghiemThuController.  
> Pattern B: Lưu **không** pre-disable vì thiếu GPS — banner on click.  
> Nhãn: `useFormOptions('web-rmms-nghiem-thu')` / nghiemThu.* LOOKUP_STATIC. **Cấm** toolbar Excel.  
> NghiemThuFormPage: lập phiếu + ảnh. **Không** giao việc · **không** xác nhận đạt / hoàn thành sự cố (peer finding / công việc).  
> CTX file missing → nguồn chính PLAN-3-VAI + code (UNCLEAR-CTX).  
> **Cấm** `new_page` · **cấm** route mới · **cấm** Mục IV tiền · **cấm** SlaHours=24 · **cấm** iOS/Android.

## § Delta Current vs New

| Area | Current | New |
|------|---------|-----|
| changeScope | shipped NghiemThuList/Form (web-rmms-nghiem-thu) | `edit_page` · **cấm** `new_page` · **cấm** route mới |
| NT-F write | mọi user mở `/nghiem-thu/moi` POST được | chỉ vai **nghiệm thu** · tuần đường / tuần kiểm / `QL_HAT` **không lập** |
| NT-L create CTA | Tạo → moi | **ẩn** non-nghiệm-thu · list xem RO khi được phép |
| RouteCapture | purpose patrol-nghiem-thu · form write | nghiệm thu write chỉ · RO view khi khác vai (nếu mở detail) |
| Đối chiếu | thiếu link RO ca / phiếu đạt | RO link sang ca tuần đường + finding đã **Xác nhận đạt** · **chỉ đọc** |
| Giao việc / hoàn thành SC | không có trên form (đúng) | **giữ cấm** · không thêm CTA |
| Chấm kỳ / Mục IV | chưa | **cấm** nhét tiền · chấm 100 điểm = màn sau |
| mfe / bff | Mobile · Mobile.Bff | giữ · **cấm** web-bff · **cấm** iOS/Android |
| align | phone | `/align-mobile-to-mfe` · 430px · no new tab/route |

## Sources

| Source | Path | note |
|--------|------|------|
| CTX | `docs/context/features/web-rmms-cam-nghiem-thu.md` | **MISSING** · UNCLEAR-CTX · feature_context |
| PLAN-3-VAI | `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` | enqueue #6 · role NT · Plan #7 |
| Peer DOMAIN | DOMAIN-MAP `web-rmms-nghiem-thu` / `nghiem-thu` | Live NT |
| Peer analy | `web-rmms-nghiem-thu-control-hint.md` | Pattern B · SearchInput · MAU-10 |
| Code | `NghiemThuFormPage.tsx` · `NghiemThuListPage.tsx` · `paths.ts` | current SSOT · thiếu role-gate |
| Endpoint | `services/patrol` · `NGHIEM_THU_BASE=/patrol/nghiem-thu` | list/init/get/create/update |
| DOMAIN-MAP | Patrol · peer nghiem-thu | **cấm ERP.*** · GAP slug row cam-nghiem-thu |

## Screens (ids)

| id | route | surface |
|----|-------|---------|
| NT-L | `/nghiem-thu` | `NghiemThuListPage` · search · cards · CTA Tạo (nghiệm thu) |
| NT-F | `/nghiem-thu/moi` · `/nghiem-thu/:id` | `NghiemThuFormPage` · RouteCapture · Huỷ/Lưu · Pattern B |
| NT-RO-LINK | zone trên NT-F | RO links đối chiếu ca / finding đã đạt · **no** write |

**Out:** invent `/web-rmms-cam-nghiem-thu` product route · Giao việc · Xác nhận đạt / Hoàn thành sự cố · Excel · invent CamNghiemThu* · Mục IV tiền · SlaHours=24 · chấm kỳ 100 điểm trên form này.

## ControlHint inventory

| uiField | screen | controlHint | catalogKind / notes |
|---------|--------|-------------|---------------------|
| screenTitle | NT-F/L | Text | createTitle / editTitle / list title |
| back / cancel | NT-* | Button/Nav | leaveConfirm khi dirty (F) |
| bannerErrors | NT-F | Banner | mau · route · fieldInfo · assignee · inspectedAt · photo · GPS Pattern B |
| search | NT-L | Text/Search | query `search` |
| listCards | NT-L | List | GET patrol/nghiem-thu · open → NT-F |
| fabCreate / btnCreate | NT-L | Button | chỉ nghiệm thu · **ẩn** khác |
| templateType | NT-F | Select | init-data mau-01…10 · MAU-10 label |
| route | NT-F | SearchInput | ROAD_ROUTE_LOOKUP · integration/road-routes |
| fieldInfo | NT-F | Text | hiện trường · required |
| zoneOrgCode | NT-F | Text RO/opt | GPS fill |
| kmFrom / kmTo | NT-F | Number | optional |
| resultCode | NT-F | Select | pass / fail / deduct |
| resultNote | NT-F | Text | optional |
| scores | NT-F | Checklist | Scores[] · criteria theo mau · Đạt / Không đạt / Không áp dụng |
| assigneeCode | NT-F | SearchInput | integration/users · required |
| inspectedAt | NT-F | DateTime | required |
| note | NT-F | TextArea | optional |
| status | NT-F | Select/State | draft on Lưu nháp |
| gpsCapture | NT-F | GPS + Button | Pattern B · **cấm** fake |
| photos / capture | NT-F | RouteCaptureControl | nghiệm thu write · multiple · max PATROL_MEDIA_MAX |
| detailPhotos | NT-F edit | RouteCapture view+edit | mode theo quyền |
| saveSubmit | NT-F | Button primary | Pattern B · role nghiệm thu · lock saving/photoBusy |
| linkPatrolRo | NT-F | Nav/Link RO | ca tuần đường cùng tuyến · **chỉ đọc** |
| linkFindingRo | NT-F | Nav/Link RO | phiếu phát hiện đã Xác nhận đạt · **chỉ đọc** |
| assignCta | — | — | **cấm** · không có trên slug |
| confirmIncident | — | — | **cấm** Xác nhận đạt / Hoàn thành SC |
| roleCaps | all | Hidden | cite role-gate · `nghiemThu` |

## Filter / grid (desktop HARD)

| | |
|--|--|
| LinErpListFilterBar / DES-GRID-* | **N/A** — phone Field |
| toolbar / export Excel | **N/A** |

## GPS

| Màn | Rule |
|-----|------|
| NT-F create/edit | Pattern B · deny/pending → banner khi Lưu · **cấm** fake |
| NT-L | không bắt GPS mới khi chỉ xem |

## Role matrix (HARD)

| Vai | NT-F write | NT-L | Capture | Giao việc | Xác nhận SC / đạt |
|-----|------------|------|---------|-----------|-------------------|
| Nghiệm thu | POST/PUT + capture | list · CTA Tạo | **yes** | **no** | **no** |
| Tuần đường | **no** | **no** (hoặc RO nếu product cho xem — mặc định **ẩn**) | **no** | **no** | **no** |
| Tuần kiểm | **no** | xem RO phiếu (đối chiếu) nếu cần | **no** | **no** | **no** trên NT |
| `QL_HAT` | **no** | xem RO | **no** | **no** trên slug · peer giao | **no** |

`QL_HAT` = `HAT-TRUONG` + `HAT-PHO` only · **cấm** suy từ `MANAGER-RMMS`.  
Nghiệm thu **không** mở ca tuần đường · **không** mở đợt tuần kiểm · **không** nút Giao việc.

## Hạn / SLA / tiền

| Rule | Note |
|------|------|
| SlaHours=24 | **cấm** — không áp trên form NT |
| Mục IV tiền trừ ngày | **cấm** — bản trích chưa đủ · không field tiền |
| Chấm kỳ 100 điểm | **out** — màn sau khi có TL · không sửa form hiện trường |
| Kết quả phiếu | giữ pass / fail / deduct · hạng mục Đạt / Không đạt / Không áp dụng |

## API (cite Live — SA confirm DTO)

| Method | Path | Note |
|--------|------|------|
| GET | `patrol/nghiem-thu` | NT-L · page/search |
| GET | `patrol/nghiem-thu/init-data` | mau + criteria + resultCodes |
| GET | `patrol/nghiem-thu/{id}` | NT-F edit |
| POST | `patrol/nghiem-thu` | NT-F create · nghiệm thu only |
| PUT | `patrol/nghiem-thu/{id}` | NT-F update · nghiệm thu only |
| GET | `integration/road-routes/search` | SearchInput route |
| GET | `integration/users` | SearchInput assignee |
| files/* | FileService via RouteCapture | cite |
| findings / sessions | cite RO đối chiếu | **không** recheck / assign từ NT |

App base: `{BffBase}/mobile-bff/api/v1`. **Cấm** invent `cam-nghiem-thu/*` · **cấm** web-bff.

## UNCLEAR

| id | Issue | Action |
|----|-------|--------|
| UNCLEAR-NT-CTX | CTX `web-rmms-cam-nghiem-thu.md` missing | PO: tạo CTX từ control-hint hoặc accept PLAN+code |
| UNCLEAR-NT-DOMAIN-ROW | DOMAIN-MAP chưa có slug `web-rmms-cam-nghiem-thu` | SA: add row Patrol · bind peer `web-rmms-nghiem-thu` |
| UNCLEAR-NT-ROLE-SOURCE | profile `roleCaps.nghiemThu` từ role-gate | deps `web-rmms-role-gate` |
| UNCLEAR-NT-RO-LINKS | deep-link RO ca / finding đã đạt trên form | Design/Dev: zone NT-RO-LINK · cite paths tuần đường / phát hiện |
| UNCLEAR-NT-LIST-VIS | tuần kiểm / QL_HAT có thấy list NT? | PO: mặc định PLAN — NT thấy đầy đủ; khác vai ẩn tạo; xem RO tối thiểu |
| — | mfeStdUrl alias vs product `/nghiem-thu*` | PO/Design: deep-link product · **cấm** route mới |

## Handoff

| Role | Dùng |
|------|------|
| PO | Delta role-gate · edit_page · PLAN-3-VAI #6 · no giao · no xác nhận SC · camera NT |
| Design | keep L/F · role visibility · RouteCapture · RO links · 430px · **no** CTA giao/hoàn thành |
| SA | Live nghiem-thu · Mobile.Bff · DOMAIN-MAP row · role enforce |
| TL/Dev | Edit NghiemThu* · caps · hide create · no new route · no Mục IV |
| QA | NT lập+ảnh · ẩn tạo non-NT · Pattern B · cấm giao/hoàn thành trên form |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:c4e8a1b9d2f57306e8a0c1d4b7f9e2a5c8d0f3b6a9e1c4d7f0b2e5a8c1d4f7b0` · `rulesVersion=2026.09.27.1` · `analyzedAt=2026-10-01T02:20:00.000Z` · `changeScope=edit_page`
