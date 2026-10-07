# Design — web-rmms-cam-nghiem-thu

| Field | Value |
|-------|-------|
| feature | `web-rmms-cam-nghiem-thu` |
| title | Camera phiếu nghiệm thu — role-gate + RO đối chiếu |
| this role | `design` · `/agent-design` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_d877da9e`) |
| changeScope | `edit_page` · keep NghiemThuList/Form · **§ Delta role-gate + RO links + hide Tạo** · **cấm** `new_page` · **cấm** route mới |
| packKind | **`list`** · UI = **phone Field** · **≠** Kind B desktop |
| lane | `web` |
| stack | `web_mfe_phone` · `Linm.Web.RMMS.Mobile` · `max-width: 430px` |
| formPattern | Mobile list + full form · Pattern B GPS · **không** ERP Modal/Slideout Kind B |
| DES-GRID / LinErpListFilterBar | **N/A** — phone · **cấm** clone · WAIVE |
| Report AC / DES-RPT | **N/A** |
| shared_grid_example | **N/A** (phone) |
| real_view_parity | **v1** |
| peerStd deep-link | `/nghiem-thu` · `/nghiem-thu/moi` · `/nghiem-thu/:id` |
| mfeStdUrl | `http://localhost:9301/web-rmms-cam-nghiem-thu` (**alias only** · **cấm** invent product slug) |
| mfeStdRoute | product `/nghiem-thu` · `/nghiem-thu/moi` · `/nghiem-thu/:id` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-nghiem-thu/ui/prototype/index.html` |
| demo | **N/A** · hash skip · **cấm** re-scan (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol · `nghiem-thu` · FileService · Auth · Integration · **cấm ERP.*** |
| bff | `Linm.RMMS.Mobile.Bff` · `:5202` · `mobile-bff/api/v1` · **cấm** web-bff |
| controlHint | `specs/_data-analy/features/web-rmms-cam-nghiem-thu-control-hint.md` |
| realData | `specs/_data-analy/features/web-rmms-cam-nghiem-thu-real-data.md` · §A+§B PASS |
| deltaCite | `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` § enqueue #6 · § Công tác nghiệm thu · Plan #7 |
| prior | PO `confirmed` · `handoff/po-compact.md` · contentHash `sha256:c4e8a1b9d2f57306e8a0c1d4b7f9e2a5c8d0f3b6a9e1c4d7f0b2e5a8c1d4f7b0` |
| autoApprove | **ON** |
| e2eQa | ON queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở Design |
| `devSlash` | `/agent-dev` |
| updatedAt | `2026-10-01T02:22:22.000Z` |
| taskId | `task_d877da9e` |
| skillId | `agent-design` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.27.1` |
| versionGate | `ok` |
| contentHash | `sha256:c4e8a1b9d2f57306e8a0c1d4b7f9e2a5c8d0f3b6a9e1c4d7f0b2e5a8c1d4f7b0` |

**Cấm:** Dev/BE trước confirm (đã autoApprove) · ERP.* · iOS/Android native · Kind B DES-GRID · `LinErpListFilterBar` · invent `CamNghiemThu*` · invent product route `/web-rmms-cam-nghiem-thu` · fake GPS · Giao việc · Xác nhận đạt / Hoàn thành SC trên NT-* · Mục IV tiền · SlaHours=24 · chấm kỳ 100 điểm trên form · Excel · web-bff · native `alert`/`confirm` · re-scan demo · `yarn build` / e2e / start:std ở role này · **cấm** khóa Lưu trước bấm (Pattern B).

## 0. Context / Demo

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/web-rmms-cam-nghiem-thu.md` | created PO · feature_context |
| DELTA | `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` | enqueue #6 · role NT · Plan #7 |
| DEM | — | **N/A** · hash skip |
| DA-01 / DA-02 | `_data-analy/features/web-rmms-cam-nghiem-thu-{control-hint,real-data}.md` | inventory + §B |
| PO | `po/requirement.md` · `handoff/po-compact.md` | Screens · Pattern B · LIST-VIS · RO links |
| peer | `web-rmms-nghiem-thu` NghiemThu* Live | keep layout · edit role-gate + RO + hide create |
| code | `NghiemThuFormPage.tsx` · `NghiemThuListPage.tsx` · `paths.ts` | SSOT edit |
| tokens | `docs/mobile-tokens.json` | primary `#0C84C0` · 430px |

## 0b. § Delta Current vs New (edit_page HARD)

| Area | Current (shipped peer) | New (Design chốt) |
|------|------------------------|-------------------|
| changeScope | Live NT list/form | `edit_page` · **cấm** `new_page` · **cấm** route mới |
| NT-F write | mọi user mở `/nghiem-thu/moi` POST được | chỉ vai **nghiệm thu** · tuần đường / tuần kiểm / `QL_HAT` **không lập** |
| NT-L create CTA | Tạo → moi | **ẩn** non-nghiệm-thu |
| LIST-VIS | chung | NT full+Tạo · tuần đường **ẩn** list · TK/`QL_HAT` RO tối thiểu · không Tạo |
| RouteCapture | purpose patrol-nghiem-thu · form write | nghiệm thu write only · RO view khi khác vai mở detail |
| Đối chiếu | thiếu | **NT-RO-LINK** RO ca tuần đường + finding đã **Xác nhận đạt** · no write |
| Giao việc / hoàn thành SC | không có (đúng) | **giữ cấm** · không thêm CTA |
| GPS Lưu | Pattern B peer | **KEEP** · banner on Lưu · `disabled={saving\|photoBusy}` only · **cấm** fake |
| Leave dirty | leaveConfirm | **KEEP** · **cấm** native dialog |
| Align | phone 430 | `/align-mobile-to-mfe` · **cấm** tab/route mới |
| Grid / filter | N/A phone Search | **KEEP WAIVE** |

## 1. Pattern & shell

| | |
|--|--|
| Frame | Phone **430px** · content-only · tokens primary `#0C84C0` · label **13** · field **≥16** · hit **≥44** |
| Shell | App topbar (title · back · Tạo) · **không** ERP `LinPageLayout` chrome |
| Full | NT-L list · NT-F create/edit |
| Leave | **LeaveConfirmModal** (`NT-leave`) · dirty NT-F · **cấm** native dialog |
| Out | invent CamNghiemThu* · Excel · invent product slug · Giao việc · Xác nhận SC · Mục IV / SLA |

## 2. Screens / zones

| Zone | Route | Surface | Wire |
|------|-------|---------|------|
| **NT-L** | `/nghiem-thu` | Full list | Search · cards · CTA Tạo (chỉ nghiệm thu) |
| **NT-F** | `/nghiem-thu/moi` · `/nghiem-thu/:id` | Full form | Pattern B Lưu · RouteCapture · fields keep |
| **NT-RO-LINK** | zone trên NT-F | Nav RO | ca tuần đường cùng tuyến · finding đã đạt · **chỉ đọc** |
| **NT-leave** | overlay | Modal | dirty leave · Ở lại / Rời |
| **roleGateBanner** | NT-* | Banner | view-only / no-create / deny-write hint |

### IA

```
/nghiem-thu (NT-L)
  · nghiệm thu → Tạo → /nghiem-thu/moi (NT-F) → Pattern B Lưu → POST → list/detail
  · TK / QL_HAT → list RO tối thiểu · mở NT-F RO · ẩn Tạo · ẩn write/capture
  · tuần đường → ẩn NT-L (mặc định)
NT-F: NT-RO-LINK → nav RO ca / finding đạt (no recheck/assign)
CẤM: Giao việc · Xác nhận đạt / Hoàn thành SC trên NT-*
```

### Role visibility (HARD)

| Vai | NT-F write | NT-L | Capture | Tạo | Giao việc | Xác nhận SC |
|-----|------------|------|---------|-----|-----------|-------------|
| Nghiệm thu | POST/PUT + capture | full · CTA Tạo | **yes** | **yes** | **no** | **no** |
| Tuần đường | **no** | **ẩn** | **no** | **no** | **no** | **no** |
| Tuần kiểm | **no** | RO tối thiểu | **no** | **no** | **no** | **no** |
| `QL_HAT` (`HAT-TRUONG`/`HAT-PHO`) | **no** | RO tối thiểu | **no** | **no** | **no** trên NT | **no** |

**Cấm** suy `QL_HAT` từ `MANAGER-RMMS`. Caps cite `web-rmms-role-gate` (UNCLEAR-NT-ROLE-SOURCE → SA/Dev).

## 3. Field inventory (Control = controlHint)

| uiField | screen | controlHint | Required | Bind / notes |
|---------|--------|-------------|----------|--------------|
| screenTitle | NT-F/L | Text | — | createTitle / editTitle / list title |
| back / cancel | NT-* | Button/Nav | — | leaveConfirm khi dirty (F) |
| bannerErrors | NT-F | Banner | — | mau · route · fieldInfo · assignee · inspectedAt · photo · GPS Pattern B |
| search | NT-L | Text/Search | — | query `search` |
| listCards | NT-L | List | * | GET patrol/nghiem-thu · open → NT-F |
| fabCreate / btnCreate | NT-L | Button | — | chỉ nghiệm thu · **ẩn** khác |
| templateType | NT-F | Select | * | init-data mau-01…10 · MAU-10 |
| route | NT-F | SearchInput | * | ROAD_ROUTE · integration/road-routes |
| fieldInfo | NT-F | Text | * | hiện trường · required |
| zoneOrgCode | NT-F | Text RO/opt | — | GPS fill |
| kmFrom / kmTo | NT-F | Number | — | optional |
| resultCode | NT-F | Select | * | pass / fail / deduct |
| resultNote | NT-F | Text | — | optional |
| scores | NT-F | Checklist | — | Đạt / Không đạt / Không áp dụng |
| assigneeCode | NT-F | SearchInput | * | integration/users |
| inspectedAt | NT-F | DateTime | * | required |
| note | NT-F | TextArea | — | optional |
| status | NT-F | Select/State | — | draft on Lưu nháp |
| gpsCapture | NT-F | GPS + Button | — | Pattern B · **cấm** fake |
| photos / capture | NT-F | RouteCaptureControl | * write | nghiệm thu write · max PATROL_MEDIA_MAX |
| detailPhotos | NT-F edit | RouteCapture view+edit | — | mode theo quyền |
| saveSubmit | NT-F | Button primary | * | Pattern B · role NT · lock saving/photoBusy |
| linkPatrolRo | NT-F | Nav/Link RO | — | ca tuần đường cùng tuyến · **chỉ đọc** |
| linkFindingRo | NT-F | Nav/Link RO | — | phiếu phát hiện đã Xác nhận đạt · **chỉ đọc** |
| assignCta | — | — | — | **cấm** |
| confirmIncident | — | — | — | **cấm** Xác nhận đạt / Hoàn thành SC |
| roleGateBanner | NT-* | Banner | — | view-only / no-create |
| roleCaps | all | Hidden | * | cite role-gate · `nghiemThu` |

**Labels:** `useFormOptions('web-rmms-nghiem-thu')` / `nghiemThu.*` — prototype hiện nhãn VN review; Dev wire key.

## 4. Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/index.html` |
| Zones | NT-L NT · NT-L TK/QL_HAT · NT-L ẩn tuần đường · NT-F write · NT-F Pattern B GPS deny · NT-RO-LINK · NT-leave · roleGateBanner |
| Form | Full NT-F Pattern B · LeaveConfirmModal · RouteCapture zone |
| Grid/filter desktop | **N/A** |
| SSOT | control-hint · real-data §B · mobile-tokens · **cấm** shared-grid desktop · **cấm** re-scan demo |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-nghiem-thu/ui/prototype/index.html` |
| **modes** | `?screen=list\|form\|leave` · `?role=nt\|tk\|qlhat\|tuan` · `?gps=deny` · `?banner=1` |
| **peerStd deep-link** | `/nghiem-thu/moi` |
| **real_view_parity** | `v1` |

### Wire

```
NT-L NT: topbar Nghiệm thu · Search · cards · CTA Tạo · ẩn Giao việc
NT-L TK/QL_HAT: cards RO · ẩn Tạo · roleGateBanner · ẩn Giao việc
NT-L tuần đường: empty/hidden shell · meta «ẩn list»
NT-F write: form keep · RouteCapture · Lưu Pattern B always-on (except saving/photoBusy)
NT-F Pattern B: Lưu + GPS deny → banner · cấm khóa nút trước
NT-RO-LINK: 2 link RO (ca · finding đạt) · no write/recheck
NT-leave: dirty → Modal Ở lại / Rời
CẤM zones: assignCta · confirmSc · Mục IV
```

## 5. API map (cite real-data §B — **không đổi** core paths)

| Action | API |
|--------|-----|
| List | `GET …/patrol/nghiem-thu` · `?search=` |
| Init | `GET …/patrol/nghiem-thu/init-data` |
| Detail | `GET …/patrol/nghiem-thu/{id}` |
| Create | `POST …/patrol/nghiem-thu` · nghiệm thu only |
| Update | `PUT …/patrol/nghiem-thu/{id}` · nghiệm thu only |
| Routes | `GET …/integration/road-routes/search` |
| Users | `GET …/integration/users` |
| Files | FileService via RouteCapture · cite |
| Sessions RO | `GET …/patrol/sessions` · NT-RO-LINK only |
| Findings RO | `GET …/patrol/findings` (filter đạt) · NT-RO-LINK only |
| Role caps | auth profile · cite `web-rmms-role-gate` |

App base: `{BffBase}/mobile-bff/api/v1`. **Cấm** invent `cam-nghiem-thu/*` · **cấm** web-bff · **cấm** ERP.*.

## 6. UNCLEAR (handoff SA)

| id | Design chốt | SA |
|----|-------------|-----|
| UNCLEAR-NT-DOMAIN-ROW | keep Live nghiem-thu · không invent CamNghiemThu* | add DOMAIN-MAP slug `web-rmms-cam-nghiem-thu` hoặc bind peer `web-rmms-nghiem-thu` |
| UNCLEAR-NT-ROLE-SOURCE | UI gate theo caps · cấm suy MANAGER-RMMS | confirm packageCode/roleCaps từ role-gate |
| UNCLEAR-NT-RO-LINKS | zone NT-RO-LINK · cite paths tuần đường / phát hiện | confirm deep-link query / filter đạt |
| UNCLEAR-NT-CTX | RESOLVED (CTX created PO) | — |
| UNCLEAR-NT-LIST-VIS | RESOLVED (NT full; tuần đường ẩn; TK/QL_HAT RO) | — |
| GAP-DA-NT-STD-ALIAS | mfeStdUrl = alias only · deep-link `/nghiem-thu*` | keep · **cấm** product slug mới |

## 7. design_confirm

| | |
|--|--|
| autoApprove | ON → **approve** |
| reviewUrl | prototype path above |
| handoff | SA · zone ids NT-L/F · NT-RO-LINK · NT-leave · control-map · Pattern B · role visibility · hide Tạo · real_view_parity v1 |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:c4e8a1b9d2f57306e8a0c1d4b7f9e2a5c8d0f3b6a9e1c4d7f0b2e5a8c1d4f7b0` · `rulesVersion=2026.09.27.1` · `updatedAt=2026-10-01T02:22:22.000Z`
