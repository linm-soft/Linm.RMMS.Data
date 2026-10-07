# SA — Solution — web-rmms-cam-nghiem-thu

> Status: **confirmed** · autoApprove ON · task `task_bbcbf513` · 2026-10-01T02:30:00.000Z  
> **changeScope=`edit_page`** · citeDelta `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` #6 · bind peer `web-rmms-nghiem-thu` + `web-rmms-role-gate`.  
> **Cấm** ERP.* · invent CamNghiemThu* / path / entity / controller · Step 4b/migration @ SA · Write MFE/native · fake GPS · demo SSOT · web-bff · Giao việc · Xác nhận SC / recheck từ NT · Mục IV · SlaHours=24 · route mới.

| | |
|--|--|
| Feature | `web-rmms-cam-nghiem-thu` |
| Title | Camera phiếu nghiệm thu — role-gate + capture + RO đối chiếu (edit_page) |
| Role | `sa` |
| packKind | `list` |
| changeScope | `edit_page` |
| formPattern | Mobile list + full create/detail ≤430 · Pattern B GPS · N/A DES-GRID / LinErpListFilterBar |
| domain | **Patrol** (`patrol`) · resource **`nghiem-thu`** · entity `rmms_nghiem_thu` · **cấm** reuse sessions table · **cấm** Maintenance WO |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| productRoute | `/nghiem-thu` · `/nghiem-thu/moi` · `/nghiem-thu/:id` |
| mfeStdUrl | `http://localhost:9301/web-rmms-cam-nghiem-thu` (**alias only** · deep-link product `/nghiem-thu*`) |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` |
| BFF | Mobile.Bff `:5202` · `mobile-bff/api/v1` · **cấm** web-bff |
| contentHash | `sha256:c4e8a1b9d2f57306e8a0c1d4b7f9e2a5c8d0f3b6a9e1c4d7f0b2e5a8c1d4f7b0` |
| skillVersion | `2026.09.05.03` |
| solution_confirm | **approve** (autoApprove) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-nghiem-thu/ui/prototype/index.html` |
| prior peer SA | `specs/web-rmms-nghiem-thu/be/solution-discovery.md` (**keep** Live CRUD) |

## 1. Domain / ownership

| Item | Decision |
|------|----------|
| DOMAIN-MAP | **bind peer** — **không** invent slug `cam-nghiem-thu` |
| Slug (API) | `nghiem-thu` → Patrol / `patrol` · resource `nghiem-thu` |
| Peer feature | `web-rmms-nghiem-thu` → same Live list+create+detail · FileService cite |
| Alias queue | `web-rmms-cam-nghiem-thu` = product `/nghiem-thu*` only |
| API folder | **reuse** Patrol `NghiemThuController` · **no new** controller |
| Role deps | cite `web-rmms-role-gate` · seed `NGHIEM-THU` · `roleCaps.nghiemThu` · `QL_HAT`=HAT-* only |
| **Cấm** | invent CamNghiemThu* · ERP.* · Web BFF · gộp tuần đường/tuần kiểm/mnt · DELETE P1 |

**UNCLEAR-NT-DOMAIN-ROW → RESOLVED:** bind `nghiem-thu` / `web-rmms-nghiem-thu` (DOMAIN-MAP đã có) · không thêm row mới.

## 2. FormMode ↔ API

FormMode = **List** + **Create** + **Detail/Edit** (full-page phone). Delta = role-gate write + hide Tạo + NT-RO-LINK + Pattern B keep.

| Mode / zone | UI | API | Write | Notes |
|-------------|----|-----|-------|-------|
| NT-L cards | List | `GET patrol/nghiem-thu` | — | empty «Chưa có phiếu» |
| NT-L btnCreate | Button | — | nav `/moi` | **hide** khi `!roleCaps.nghiemThu` |
| NT-L visibility | — | profile caps | — | NT full · tuần đường **ẩn list** · TK/`QL_HAT` RO tối thiểu |
| NT-F init | Select/Checklist | `GET …/nghiem-thu/init-data` | — | mau-01…10 · criteria |
| NT-F detail | Form | `GET …/nghiem-thu/{id}` | — | edit |
| NT-F fields | keep peer | dto §B | POST/PUT | templateType·route·fieldInfo·scores·result·assignee·mediaIds… |
| NT-F photos | RouteCapture | `files/*` | `mediaIds` | **NT write only** · RO view khác vai |
| NT-F GPS | Banner Pattern B | geolocation | FieldInfo/zone | deny → banner on Lưu · **cấm** fake · **cấm** pre-disable |
| NT-F save | Button | POST / PUT | draft… | only `roleCaps.nghiemThu` · disabled=`saving\|photoBusy` only |
| NT-RO-LINK ca | Nav RO | `GET patrol/sessions` (cite) | — | deep-link `/tuan-duong` · **no write** |
| NT-RO-LINK finding | Nav RO | `GET patrol/findings` filter đạt | — | deep-link `/phat-hien` (+ filter đạt peer) · **no recheck/assign** |
| roleCaps | Hidden | `GET auth/profile` (+roleCaps) | — | cite role-gate · deny write nếu miss |
| assignCta / confirmSc | — | — | — | **ABSENT** |

### Live endpoints (HARD — real-data §A+§B)

| Method | BFF path (client) | Downstream | Bind | Status |
|--------|-------------------|------------|------|--------|
| GET | `mobile-bff/api/v1/patrol/nghiem-thu` | Patrol | NT-L | **Live keep** |
| GET | `mobile-bff/api/v1/patrol/nghiem-thu/init-data` | Patrol | NT-F selects | **Live keep** |
| GET | `mobile-bff/api/v1/patrol/nghiem-thu/{id}` | Patrol | NT-F detail | **Live keep** |
| POST | `mobile-bff/api/v1/patrol/nghiem-thu` | Patrol | create | **Live keep** · role deny toast |
| PUT | `mobile-bff/api/v1/patrol/nghiem-thu/{id}` | Patrol | update | **Live keep** · role deny toast |
| * | `mobile-bff/api/v1/files/*` | FileService | mediaIds | **Live keep** |
| GET | `mobile-bff/api/v1/integration/road-routes/search` | Integration | route SearchInput | **Live keep** |
| GET | `mobile-bff/api/v1/integration/users?search=` | Integration | assignee SearchInput | **Live keep** · BFF forward |
| GET | `mobile-bff/api/v1/patrol/sessions` | Patrol | NT-RO-LINK ca | **Live cite RO** |
| GET | `mobile-bff/api/v1/patrol/findings` | Patrol | NT-RO-LINK finding đạt | **Live cite RO** · **cấm** POST recheck từ NT |
| GET | `mobile-bff/api/v1/auth/profile` | Auth/role-gate | roleCaps · packageCode | **Live cite** |

- Client base: `:5202` + `mobile-bff/api/v1` — **không** `web-bff`.
- Permissions keep: `patrol.nghiem-thu.read` / `.write` (+ integration lookups) · FE gate thêm `roleCaps.nghiemThu`.
- **API Mới / entity mới / migration:** **none** · Step 4b **skip** @ SA.
- Labels: `useFormOptions()` / `nghiemThu.*` · **cấm** hardcode VN.

### API blocks (Delta summary)

#### API-01…06 — keep peer `web-rmms-nghiem-thu`
CRUD list/init/get/post/put + files + road-routes + users — **no path change**.

#### API-07: GET `auth/profile` (+roleCaps) — Delta bind
| | |
|--|--|
| Purpose | Gate write/Tạo · LIST-VIS |
| Cite | `web-rmms-role-gate` · `packageCode` · `roleCaps.nghiemThu` / `qlHat` / `tuanDuong` / `tuanKiem` |
| Form surfaces | roleGateBanner · btnCreate · save · RO mode |
| Migration | none · seed NGHIEM-THU @ peer Dev |

#### API-08: GET `patrol/sessions` — RO only
| | |
|--|--|
| Purpose | Đối chiếu ca tuần đường |
| Deep-link | `/tuan-duong` (hub/list) · optional `/:id` peer |
| Write | **cấm** từ NT |

#### API-09: GET `patrol/findings` (filter đạt) — RO only
| | |
|--|--|
| Purpose | Đối chiếu finding đã Xác nhận đạt |
| Deep-link | `/phat-hien` · query filter đạt per peer mobile-c |
| Write | **cấm** recheck/assign từ NT |

## 3. BFF vs API

| Layer | Role |
|-------|------|
| Mobile.Bff `:5202` | sole FE entry · catch-all → `api/v1/{path}` · files/auth rewrite · users forward · **cấm** dedicated Cam/NT BFF controller |
| RMMS.Service.Api | Patrol `NghiemThuController` + sessions/findings + Auth profile — **reuse** |
| Patrol web-bff | desktop peer only · **not** Mobile client |
| FileService | RouteCapture via Mobile.Bff |

## 4. Entity / migration

| Item | Decision |
|------|----------|
| Tables | **reuse** `rmms_nghiem_thu` (+ scores child) |
| EF migration | **skip** @ SA · none |
| Step 4b | **skip** @ SA |
| Role seed | cite peer `web-rmms-role-gate` Seed_JobTitleQlHatNghiemThu · **không** re-run @ this feature SA |

## 5. Implement gates (autoApprove)

| Gate | Decision |
|------|----------|
| `sa_tz_gate` | **N/A** — keep peer inspectedAt |
| `sa_xco_gate` | **N/A** — single-tenant X-Company-Id |
| `sa_shared_table` | **tenant_keep** — reuse `rmms_nghiem_thu` |

## 6. FE surface (SA contract — Dev implements)

| Zone | Contract |
|------|----------|
| NT-L / NT-F | edit `NghiemThuListPage` / `NghiemThuFormPage` · **cấm** new route |
| roleGate | bind `roleCaps.nghiemThu` · hide Tạo · RO TK/`QL_HAT` · ẩn list tuần đường |
| Pattern B | CTA on · banner GPS deny · **cấm** fake · **cấm** `disabled={!canSave}` |
| NT-RO-LINK | 2 Nav RO: `/tuan-duong` · `/phat-hien`(+filter đạt) · no write/recheck |
| NT-leave | leaveConfirm dirty |
| CẤM UI | Giao việc · Xác nhận SC · Mục IV · Excel |

## 7. UNCLEAR resolution

| id | Decision |
|----|----------|
| UNCLEAR-NT-DOMAIN-ROW | **RESOLVED** — bind DOMAIN-MAP `nghiem-thu` / `web-rmms-nghiem-thu` |
| UNCLEAR-NT-ROLE-SOURCE | **RESOLVED** — deps `web-rmms-role-gate` · `roleCaps.nghiemThu` · seed `NGHIEM-THU` · **cấm** suy QL_HAT từ MANAGER-RMMS |
| UNCLEAR-NT-RO-LINKS | **RESOLVED** — deep-link `/tuan-duong` + `/phat-hien` (filter đạt) · API GET sessions/findings RO only |
| UNCLEAR-NT-CTX / LIST-VIS | keep RESOLVED (PO/Design) |

## 8. Handoff

| Next | Packet |
|------|--------|
| team-lead | edit NghiemThu* · role-gate · hide create · NT-RO-LINK · Pattern B · no new API/entity |
| Dev | implement AC · **cấm** Write native · Step 4b skip unless role-gate seed gap |
| QA | NT write+ảnh · non-NT deny · Pattern B · RO links · no giao/SC |
| Review | solution_confirm approve |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:c4e8a1b9d2f57306e8a0c1d4b7f9e2a5c8d0f3b6a9e1c4d7f0b2e5a8c1d4f7b0` · `solution_confirm=approve` · `writtenAt=2026-10-01T02:30:00.000Z` · `changeScope=edit_page`
