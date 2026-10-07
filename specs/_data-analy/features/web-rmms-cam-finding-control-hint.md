# Data-analy — controlHint — web-rmms-cam-finding

| Field | Value |
|-------|-------|
| feature | `web-rmms-cam-finding` |
| title | Camera phiếu tuần kiểm và SLA |
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
| contentHash | `sha256:a7c3e91f0b4d62e8c5f1a9d0e3b7c4f6a2d8e1b5c9f0a4d7e6b3c1f8a5d2e0b9` |
| analyzedAt | `2026-10-01T02:10:00.000Z` |
| demo | **N/A** |
| realData | `specs/_data-analy/features/web-rmms-cam-finding-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol (+ Maintenance cite · FileService · Auth cite) · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-cam-finding` (queue alias) |
| mfeStdRoute | product `/phat-hien/:sessionId` · `/phat-hien/:sessionId/moi` · `/phat-hien/:sessionId/:findingId` · `/phat-hien/:sessionId/:findingId/sua` · **cấm** invent slug route |
| productRoute | `/phat-hien/:sessionId` · `/moi` · `/:findingId` · `/:findingId/sua` |
| taskId | `task_726d9b3a` |
| phoneFrame | `max-width: 430px` |
| formPattern | Mobile full · list + form + detail · **không** ERP Modal/Slideout Kind B |
| bff | `Linm.RMMS.Mobile.Bff` · `:5202` · `VITE_MOBILE_API_URL=…/mobile-bff/api/v1` · **cấm** web-bff |
| deltaCite | `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` § List enqueue #5 · § Tuần kiểm đánh giá SLA |
| priorArtifacts | peer `web-rmms-mobile-c` Live findings · edit role-gate + due suggest + SLA labels · **cấm** nút giao việc |

> Data-analy **đề xuất** controlHint (edit). Design giữ layout list/form/detail đã ship; thêm role tuần kiểm + hạn gợi ý TT41 + nhãn Trong hạn/Quá hạn. SA cite Live `patrol/findings` · **không** invent CamFindingController.  
> Pattern B: Lưu / Xác nhận **không** pre-disable vì thiếu GPS — banner on click.  
> Nhãn: `useFormOptions('web-rmms-mobile-c')` / FINDING_*_LOOKUP_STATIC. **Cấm** toolbar Excel.  
> Giao việc / form hạn giao = peer `web-rmms-giao-viec-ql-hat` · **cấm** CTA giao trên FIND-F/D.  
> CTX file missing → nguồn chính PLAN-3-VAI + code (UNCLEAR-CTX).

## § Delta Current vs New

| Area | Current | New |
|------|---------|-----|
| changeScope | shipped FindingForm/Detail/List (mobile-c) | `edit_page` · **cấm** `new_page` · **cấm** route mới |
| FIND-F write | mọi user mở form POST được | chỉ vai **tuần kiểm** · tuần đường/NT/QL_HAT **không lập** |
| FIND-D recheck | `caps.tuanKiem` · Xác nhận đạt / Ghi chưa đạt | giữ · **chỉ** tuần kiểm · GPS Pattern B |
| FIND-D assign | nút **Giao đơn vị BDTX** khi `caps.qlHat` | **XÓA** khỏi slug này · **cấm** nút giao việc · giao = peer |
| dueAt (FIND-F) | date tay khi `scope=bdtx` · không catalog | chọn `hangMuc` → gợi ý `dueAt` theo TT41 Phụ lục IV · **sửa được** · **cấm** SLA 24h |
| SLA labels | thiếu nhãn Trong hạn / Quá hạn | so `dueAt` lúc recheck: Đạt/Chưa đạt + Trong hạn/Quá hạn · **cấm** trừ tiền Mục IV |
| RouteCapture | purpose patrol-finding · form write · detail view/recheck/feedback | tuần kiểm write form+recheck; feedback BDTX giữ khi đã có WO |
| mfe / bff | Mobile · Mobile.Bff | giữ · **cấm** web-bff · **cấm** iOS/Android |
| align | phone | `/align-mobile-to-mfe` · 430px · no new tab/route |

## Sources

| Source | Path | note |
|--------|------|------|
| CTX | `docs/context/features/web-rmms-cam-finding.md` | **MISSING** · UNCLEAR-CTX · feature_context |
| PLAN-3-VAI | `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` | enqueue #5 · SLA table · role HARD |
| Peer DOMAIN | DOMAIN-MAP `web-rmms-mobile-c` | Live findings · recheck |
| Code | `FindingFormPage.tsx` · `FindingDetailPage.tsx` · `FindingListPage.tsx` · `paths.ts` | current SSOT |
| Endpoint | `services/patrol` · `FINDING_BASE=/patrol/findings` | list/create/update/recheck/feedback/assign |
| DOMAIN-MAP | Patrol · peer mobile-c | **cấm ERP.*** · GAP slug row cam-finding |

## Screens (ids)

| id | route | surface |
|----|-------|---------|
| FIND-L | `/phat-hien/:sessionId` | `FindingListPage` · cards · FAB moi (tuần kiểm) |
| FIND-F | `/phat-hien/:sessionId/moi` · `…/:id/sua` | `FindingFormPage` · RouteCapture · Huỷ/Lưu · due suggest |
| FIND-D | `/phat-hien/:sessionId/:findingId` | `FindingDetailPage` · RO + recheck · SLA badge · **no** giao |

**Out:** invent `/web-rmms-cam-finding` product route · Giao việc trên FIND-* · Excel · invent CamFinding* · Mục IV tiền · SlaHours=24.

## ControlHint inventory

| uiField | screen | controlHint | catalogKind / notes |
|---------|--------|-------------|---------------------|
| screenTitle | FIND-F/D/L | Text | «Lập phiếu» / «Sửa phiếu» / «Chi tiết phiếu» / list |
| back / cancel | FIND-* | Button/Nav | leaveConfirm khi dirty (F) |
| bannerErrors | FIND-F/D | Banner | km · desc · gps · due · journal · Pattern B |
| source | FIND-F | Select | FINDING_SOURCE_LOOKUP_STATIC |
| journalLineId | FIND-F | TextInput | required nếu source=`tuan-duong` |
| findingKind | FIND-F/D | Select / Text RO | FINDING_KIND_LOOKUP_STATIC |
| kmFrom / kmTo | FIND-F | TextInput | required |
| side | FIND-F/D | Select / RO | FINDING_SIDE_LOOKUP_STATIC |
| hangMuc | FIND-F/D | Select / RO | FINDING_HANGMUC · **trigger** due suggest |
| description | FIND-F | TextArea | required |
| scope | FIND-F/D | Radio / RO | FINDING_SCOPE · `bdtx` → dueAt |
| dueAt | FIND-F | Date | required khi bdtx · **gợi ý TT41** · editable |
| dueAtDisplay | FIND-D | Text RO | hạn + so sánh SLA |
| slaBadge | FIND-D | Badge | Trong hạn / Quá hạn · sau/khi recheck |
| gps | FIND-F · recheck | GPS + Button | Pattern B · **cấm** fake |
| photos / capture | FIND-F | RouteCaptureControl | tuần kiểm write · multiple · purpose patrol-finding |
| detailPhotos | FIND-D | RouteCapture view | mode=view |
| saveSubmit | FIND-F | Button primary | Pattern B · role tuần kiểm · lock saving/photoBusy |
| listCards | FIND-L | List | GET findings?sessionId · open → FIND-D |
| fabCreate | FIND-L | FAB | chỉ tuần kiểm · **ẩn** khác |
| recheckResult | FIND-D | Radio | FINDING_RECHECK · dat / chua-dat |
| recheckNote | FIND-D | TextArea | optional |
| recheckPhotos | FIND-D | RouteCapture | purpose patrol-finding-recheck |
| confirmPass | FIND-D | Button primary | **Xác nhận đạt** · chỉ tuần kiểm · status cho-kiem-tra |
| confirmFail | FIND-D | Button primary | **Ghi chưa đạt** · chỉ tuần kiểm |
| feedback* | FIND-D | Form BDTX | giữ khi status da-giao · **không** phải giao việc |
| assignCta | FIND-D | — | **REMOVE** · cấm Giao đơn vị BDTX trên slug |
| roleCaps | all | Hidden | cite role-gate · `tuanKiem` |

## Filter / grid (desktop HARD)

| | |
|--|--|
| LinErpListFilterBar / DES-GRID-* | **N/A** — phone Field |
| toolbar / export Excel | **N/A** |

## GPS

| Màn | Rule |
|-----|------|
| FIND-F | Pattern B · deny/pending → banner khi Lưu · **cấm** fake |
| FIND-D recheck | Pattern B · deny → banner khi Xác nhận/Ghi chưa đạt |
| FIND-D RO / FIND-L | không bắt GPS mới khi chỉ xem |

## Role matrix (HARD)

| Vai | FIND-F write | FIND-L | FIND-D | Recheck | Giao việc |
|-----|--------------|--------|--------|---------|-----------|
| Tuần kiểm | POST + capture | list đợt · FAB | xem + **Xác nhận đạt / Ghi chưa đạt** + SLA | **yes** | **no** |
| Tuần đường | **no** | xem RO (cùng tuyến) | xem RO | **no** | **no** |
| `QL_HAT` | **no** | xem | xem · **no** giao trên FIND-D | **no** | **no** trên slug · peer giao |
| Nghiệm thu | **no** | xem RO phiếu đã đạt | xem RO | **no** | **no** |

`QL_HAT` = `HAT-TRUONG` + `HAT-PHO` only · **cấm** suy từ `MANAGER-RMMS`.  
Tuần kiểm **không** đặt hạn thứ hai lúc recheck — dùng `dueAt` đã có (từ giao / lập phiếu).

## Hạn gợi ý TT41 (Phụ lục IV) — FIND-F

| hangMuc (catalog) | Gợi ý dueAt (từ ngày phát hiện) |
|-------------------|----------------------------------|
| Vá ổ gà (cấp I–II) | +3 ngày |
| Vá ổ gà (cấp III–VI) | +5 ngày |
| Nứt dọc/ngang/mai rùa | +7 ngày mưa · +14 ngày khô |
| Lún lõm / sình lún | +10 ngày (không tính ngày mưa ẩm) |
| Vệ sinh / chướng ngại nguy hiểm | +1 giờ · còn lại +7 ngày |
| Nước đọng mặt đường | ≤ 24 giờ (hạn lịch · **không** = SlaHours cố định form) |
| Biển cấm / hiệu lệnh | +1 ngày · biển khác +3 |
| Vạch sơn cục bộ | +28 ngày |
| Tồn tại nghiệm thu | +5 ngày từ văn bản |

Người lập/giao **sửa được** trước khi Lưu. **Cấm** default `SlaHours=24` làm SLA duy nhất. **Cấm** công thức tiền Mục IV.

## API (cite Live — SA confirm DTO)

| Method | Path | Note |
|--------|------|------|
| GET | `patrol/findings?sessionId=` | FIND-L |
| POST | `patrol/findings` | FIND-F create · tuần kiểm only |
| PUT | `patrol/findings/{id}` | FIND-F edit |
| GET | `patrol/findings/{id}` | FIND-D |
| POST | `patrol/findings/{id}/recheck` | Xác nhận đạt / Ghi chưa đạt |
| POST | `patrol/findings/{id}/feedback` | BDTX phản hồi · giữ |
| POST | `patrol/findings/{id}/assign-work-order` | **không gọi từ UI slug này** · peer giao |
| GET | `patrol/sessions/{id}` | stamp route RO |
| files/* | FileService via RouteCapture | cite |

App base: `{BffBase}/mobile-bff/api/v1`. **Cấm** invent `cam-finding/*` · **cấm** web-bff.

## UNCLEAR

| id | Issue | Action |
|----|-------|--------|
| UNCLEAR-FIND-CTX | CTX `web-rmms-cam-finding.md` missing | PO: tạo CTX từ control-hint hoặc accept PLAN+code |
| UNCLEAR-FIND-DOMAIN-ROW | DOMAIN-MAP chưa có slug `web-rmms-cam-finding` | SA: add row Patrol · bind peer `web-rmms-mobile-c` |
| UNCLEAR-FIND-ROLE-SOURCE | profile `roleCaps.tuanKiem` từ role-gate | deps `web-rmms-role-gate` |
| UNCLEAR-FIND-DUE-CATALOG | FE chưa map hangMuc→ngày TT41 | Design/Dev: catalog client hoặc BE suggest · editable |
| UNCLEAR-FIND-SLA-FIELD | DTO có field slaStatus? | SA: derive client từ dueAt+recheckAt hoặc add field |
| UNCLEAR-FIND-ASSIGN-API | giữ API assign-work-order | UI slug **không** gọi · peer giao |
| — | mfeStdUrl alias vs product `/phat-hien*` | PO/Design: deep-link product · **cấm** route mới |

## Handoff

| Role | Dùng |
|------|------|
| PO | Delta role-gate · edit_page · PLAN-3-VAI #5 · no giao · SLA labels · due TT41 |
| Design | keep L/F/D · role visibility · due suggest · SLA badge · 430px · **no** CTA giao |
| SA | Live findings · Mobile.Bff · DOMAIN-MAP row · sla derive |
| TL/Dev | Edit Finding* · caps · remove assign CTA · due catalog · SLA badge · no new route |
| QA | tuần kiểm lập+recheck · nhãn Trong/Quá hạn · ẩn giao · Pattern B · non-TK không Lưu |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:a7c3e91f0b4d62e8c5f1a9d0e3b7c4f6a2d8e1b5c9f0a4d7e6b3c1f8a5d2e0b9` · `rulesVersion=2026.09.27.1` · `analyzedAt=2026-10-01T02:10:00.000Z` · `changeScope=edit_page`
