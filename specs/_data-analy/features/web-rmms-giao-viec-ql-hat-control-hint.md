# Data-analy — controlHint — web-rmms-giao-viec-ql-hat

| Field | Value |
|-------|-------|
| feature | `web-rmms-giao-viec-ql-hat` |
| title | Giao việc chỉ QL_HAT |
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
| contentHash | `sha256:96af983c06df39ae72f23cd8bca1d51b7851c175d5d43f1a62d1fea87673ecb7` |
| analyzedAt | `2026-10-01T03:25:00.000Z` |
| demo | **N/A** |
| realData | `specs/_data-analy/features/web-rmms-giao-viec-ql-hat-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · Incident + Maintenance (+ Patrol · Integration · Auth cite) · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-giao-viec-ql-hat` |
| mfeStdRoute | queue `/web-rmms-giao-viec-ql-hat` · product `/van-de` · `/van-de/:id` · `/tuan-duong/lich-su` · form giao · `/cong-viec` · **cấm** invent slug route |
| productRoute | `/van-de*` · báo cáo ca đã ship · `/cong-viec` |
| taskId | `task_46b5e132` |
| phoneFrame | `max-width: 430px` |
| formPattern | Mobile full · DES-MOB-INC-DETAIL · **không** ERP Modal/Slideout Kind B · **không** form master CRUD mới |
| bff | `Linm.RMMS.Mobile.Bff` · `:5202` · `VITE_MOBILE_API_URL=…/mobile-bff/api/v1` · **cấm** web-bff |
| deltaCite | `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` § List enqueue #8 |
| priorPeers | `web-rmms-role-gate` · `web-rmms-cam-incident` · `web-rmms-work` · `web-rmms-estimate` |

> Data-analy **đề xuất** controlHint (edit). Design **chốt** control-map + prototype/reviewUrl trên form giao đã có. SA **cite** Live `maintenance/work-orders` + `incident/.../assign` · **cấm** invent GiaoViecController.  
> Nhãn: `useFormOptions()` / copy key — **cấm** hardcode VN. **Cấm** toolbar/export Excel · **cấm** iOS/Android.  
> **HARD:** `changeScope=edit_page` · **cấm** `new_page` · **cấm** route public mới · **cấm** suy `QL_HAT` từ `MANAGER-RMMS` · **cấm** SLA 24h mặc định · **cấm** tiền Mục IV.

## § Delta Current vs New

| Area | Current | New |
|------|---------|-----|
| changeScope | CTA/list peer có icon Giao việc rộng / estimate | `edit_page` · chỉ `packageCode=QL_HAT` |
| Form giao | `AssigneeName` · `TeamName` · `DueAt` tay · `SlaHours` P1=24 | + hạng mục → **hạn gợi ý** TT41 Phụ lục IV · editable · **bỏ** default 24h |
| List `/van-de` · lịch sử ca | có thể lọc theo creator / quyền rộng | QL_HAT: **mọi** phiếu · **cấm** filter người tạo |
| Nguồn giao | chủ yếu sự cố / estimate | sự cố **và** báo cáo ca |
| Sau giao | WO + `/cong-viec` | giữ · **cấm** Hoàn thành / Đóng hộ · **cấm** xác nhận đạt |
| Route | đã ship | **giữ** · **cấm** invent |
| Tiền Mục IV | — | **cấm** (out) |

## Sources

| Source | Path | note |
|--------|------|------|
| CTX | `docs/context/features/web-rmms-giao-viec-ql-hat.md` | written this run · edit_page |
| PLAN-3-VAI | `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` | enqueue #8 · QL_HAT form |
| SCREENS | `docs/plan/web-rmms-mobile/SCREENS.md` | CreateWorkOrderRequest |
| Peer | role-gate · cam-incident · work · estimate | caps · CTA · WO Live |
| DOMAIN-MAP | Incident · Maintenance · Patrol · Integration | **GAP-GV-DM-01** slug row |
| BFF | Mobile.Bff `:5202` | **cấm** web-bff |

## Screens (ids)

| id | route / zone | surface |
|----|--------------|---------|
| GV-00 | phone | ≤430 · Android 1-1 |
| GV-L-INC | `/van-de` | List mọi sự cố (QL_HAT) · filter tuyến/loại/status/mức · **no** creator filter |
| GV-L-RPT | `/tuan-duong/lich-su` | List báo cáo ca (QL_HAT) · cùng scope rule |
| GV-D-INC | `/van-de/:id` | Detail RO · CTA **Giao việc xử lý** |
| GV-D-RPT | báo cáo ca detail (shipped) | CTA giao từ báo cáo |
| GV-F | form giao full page | Assignee · Team · hạng mục · DueAt hint · note · submit |
| GV-W | `/cong-viec` peer | theo dõi · **cấm** complete-from-here |

**Out:** invent `/web-rmms-giao-viec-ql-hat` product route · Giao việc ngoài QL_HAT · Excel · Mục IV money · SLA 24h · native apps · ERP.*.

## ControlHint inventory

| uiField | screen | controlHint | catalogKind / notes |
|---------|--------|-------------|---------------------|
| listFilters.route | GV-L-* | Select/Search | tuyến |
| listFilters.type | GV-L-* | Select | loại / workType cite |
| listFilters.status | GV-L-* | Select/Chip | status |
| listFilters.severity | GV-L-INC | Select | mức |
| listFilters.creator | GV-L-* | — | **cấm** · không lọc người tạo |
| incidentCards / reportCards | GV-L-* | List | GET incidents / patrol history · open detail |
| detail.code / status / severity | GV-D-* | Text/Badge RO | đầu trang |
| detail.fields | GV-D-* | Text RO | loại · vị trí · lý trình · GPS · **cấm** sửa tọa độ / xóa |
| assignCta | GV-D-* | Button primary gated | «Giao việc xử lý» · **chỉ** `qlHat` |
| mapLink | GV-D-* | Button secondary | xem bản đồ · không Đóng sự cố hộ |
| sourceStamp | GV-F | Text RO | sự cố id / báo cáo ca id |
| assignee | GV-F | SearchInput | users · **required** |
| team | GV-F | SearchInput | đơn vị bảo dưỡng |
| hangMuc | GV-F | SearchInput/Dropdown | hạng mục → due hint |
| dueAt | GV-F | DateTime | gợi ý TT41 · **editable** · **cấm** SlaHours=24 default |
| note | GV-F | TextArea | optional |
| submitAssign | GV-F | Button primary | POST WO (+ assign cite) · busy lock · chỉ QL_HAT |
| roleCaps.qlHat | all | Hidden | cite role-gate · **cấm** MANAGER→giao |
| afterNav | GV-W | Nav | `/cong-viec` · theo dõi |

## Role matrix (HARD)

| Vai | GV-L scope | CTA / GV-F | Hoàn thành hộ |
|-----|------------|------------|---------------|
| `QL_HAT` | mọi sự cố + báo cáo | **yes** | **no** |
| Tuần đường | peer own | **no** | — |
| Tuần kiểm | xem RO | **no** | xác nhận peer finding |
| Nghiệm thu | xem RO | **no** | — |
| `MANAGER-RMMS` | peer policy | **no** giao | — |

`QL_HAT` = `HAT-TRUONG` + `HAT-PHO` only.

## Filter / grid (desktop HARD)

| | |
|--|--|
| LinErpListFilterBar / DES-GRID-* | **N/A** — phone Mobile |
| toolbar / export Excel | **N/A** |

## GPS / map

| | |
|--|--|
| GPS trên GV-F | **none** bắt buộc · nguồn RO từ phiếu |
| map | link xem trên bản đồ (GV-D) · peer GIS |

## API (cite Live — SA confirm DTO)

| Method | Path | Note |
|--------|------|------|
| GET | `incident/incidents` | GV-L-INC · QL_HAT unscoped |
| GET | `incident/incidents/{id}` | GV-D-INC |
| GET | patrol history / sessions cite | GV-L-RPT · GV-D-RPT |
| POST | `maintenance/work-orders` | GV-F submit · CreateWorkOrderRequest |
| POST | `incident/incidents/{id}/assign` | optional cite estimate |
| GET | Integration users / partners cite | assignee · team |
| GET | `auth/profile` | roleCaps · peer role-gate |

App base: `{BffBase}/mobile-bff/api/v1`. **Cấm** invent `giao-viec/*` · **cấm** web-bff.

## GAP / UNCLEAR

| ID | Note |
|----|------|
| GAP-GV-DM-01 | DOMAIN-MAP thiếu row slug `web-rmms-giao-viec-ql-hat` → SA thêm (Incident+Maintenance cite) |
| UNCLEAR-GV-RPT-ROUTE | Exact product path báo cáo ca detail / assign-from-report — SA+Design confirm từ Mobile routes shipped · **cấm** invent |
| UNCLEAR-GV-SLA-MAP | Map `DueAt` ↔ bỏ `SlaHours=24` (null / derive hours?) — SA |
| UNCLEAR-GV-HANGMUC-CAT | Catalog hạng mục → bảng hạn: static PLAN client vs BE lookup — SA/Design |
| DEP-GV-ROLE | deps `web-rmms-role-gate` profile `packageCode` / `roleCaps.qlHat` |

## Handoff

| Role | Packet |
|------|--------|
| PO | DoD QL_HAT-only form · TT41 due hint · list unscoped · cấm 24h / Mục IV |
| Design | GV-F full page zones · reviewUrl · 430px |
| SA | DOMAIN-MAP row · WO+assign DTO · SLA map · report source |
| TL/Dev | edit CTA gate + form fields · **cấm** new route |
| QA | role matrix · due hint editable · no creator filter |

**DoR:** control-hint + real-data cùng `contentHash` · compact · STATUS step 0 PASS.
