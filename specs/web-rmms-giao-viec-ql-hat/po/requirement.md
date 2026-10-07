# PO — Requirement — web-rmms-giao-viec-ql-hat

| Field | Value |
|-------|-------|
| feature | `web-rmms-giao-viec-ql-hat` |
| title | Giao việc chỉ QL_HAT |
| packKind | `list` (**confirm**) |
| changeScope | `edit_page` · **cấm** `new_page` · **cấm** route public mới |
| lane | `web` · Mobile phone ≤430 |
| status | `done` |
| skillId | `agent-po` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.27.1` |
| versionGate | `ok` |
| contentHash | `sha256:96af983c06df39ae72f23cd8bca1d51b7851c175d5d43f1a62d1fea87673ecb7` |
| writtenAt | `2026-10-01T03:28:00.000Z` |
| taskId | `task_afd19ed3` |
| demo | **N/A** |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-giao-viec-ql-hat` |
| mfeStdRoute | queue `/web-rmms-giao-viec-ql-hat` · product `/van-de` · `/van-de/:id` · `/tuan-duong/lich-su` · form giao · `/cong-viec` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Incident+Maintenance (+Patrol/Integration/Auth) · **cấm ERP.*** |
| bff | `Linm.RMMS.Mobile.Bff` `:5202` `mobile-bff/api/v1` · **cấm** web-bff |
| formPattern | Mobile full · DES-MOB-INC-DETAIL · **N/A** ERP Modal/Slideout |
| deltaCite | `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` § enqueue #8 |
| priorAnaly | control-hint + real-data §A+§B · compact `handoff/data_analy-compact.md` · status=confirmed |
| autoApprove | ON → Design gate next |

## 1. Goal / DoD

Chỉnh CTA + form **Giao việc xử lý** trên chi tiết sự cố / báo cáo ca: **chỉ** `packageCode=QL_HAT` (`HAT-TRUONG` + `HAT-PHO`). Chọn người nhận · đơn vị · hạng mục → **hạn gợi ý TT41 Phụ lục IV** (editable) → `POST maintenance/work-orders` (+ optional assign cite) → theo dõi `/cong-viec`. List QL_HAT **mọi** phiếu · **cấm** filter người tạo · **cấm** SLA 24h default · **cấm** tiền Mục IV · **cấm** Hoàn thành/Đóng hộ.

## 2. Actors / Role matrix (HARD)

| Vai | GV-L scope | CTA / GV-F | Hoàn thành hộ |
|-----|------------|------------|---------------|
| `QL_HAT` | mọi sự cố + báo cáo | **yes** | **no** |
| Tuần đường | peer own | **no** | — |
| Tuần kiểm | xem RO | **no** | xác nhận peer finding |
| Nghiệm thu | xem RO | **no** | — |
| `MANAGER-RMMS` | peer policy | **no** giao | — |

**Cấm** suy `QL_HAT` từ `MANAGER-RMMS`. Caps cite `web-rmms-role-gate` (`roleCaps.qlHat`).

## 3. § Screens (ids)

| Id | Surface | AC tóm tắt |
|----|---------|------------|
| GV-00 | phone ≤430 | Android 1-1 · Mobile.Bff only · **cấm** desktop Asset/Gis |
| GV-L-INC | `/van-de` | CardList mọi sự cố (QL_HAT) · filter tuyến/loại/status/mức · **cấm** creator |
| GV-L-RPT | `/tuan-duong/lich-su` | CardList mọi báo cáo ca · cùng scope |
| GV-D-INC | `/van-de/:id` | Detail RO · CTA «Giao việc xử lý» iff qlHat · **cấm** Đóng/Hoàn thành hộ |
| GV-D-RPT | báo cáo ca detail (shipped) | CTA giao iff qlHat · **cấm** invent path |
| GV-F | form giao full page | assignee* · team · hangMuc · dueAt hint · note · submit · sourceStamp RO |
| GV-W | `/cong-viec` | theo dõi sau giao · **cấm** complete-from-here |

**Out:** invent product route `/web-rmms-giao-viec-ql-hat` · Excel · Mục IV money · SlaHours=24 · native apps · ERP.* · web-bff · invent `giao-viec/*`.

## 4. § Leave / Leave-behind

| Leave | Rule |
|-------|------|
| Sau submit OK | toast success · nav `/cong-viec` (hoặc back detail + stamp đã giao) · **không** stay dirty form |
| Cancel / Back | discard draft · về detail nguồn · **không** POST |
| Non-QL_HAT | CTA ẩn · deep-link form → deny/redirect · **không** 500 |
| After assign | CTA ẩn hoặc disabled · status rời «Đợi phân công» (peer) |
| Error 4xx | toast · giữ form · **cấm** fake success · **cấm** alert native |

## 5. Form fields + bind (cite analy §B)

| uiField | controlHint | Rule / AC |
|---------|-------------|-----------|
| sourceStamp | Text RO | incidentId / reportId · RO |
| assignee | SearchInput users | **required** · Integration users · empty→toast · **cấm** free-text bắt buộc |
| team | SearchInput | đơn vị bảo dưỡng · Live peer |
| hangMuc | Search/Dropdown | chọn → set due hint · catalog client PLAN (PO-DEC-01) |
| dueAt | DateTime | gợi ý TT41 · **editable** · **required** trước submit · **cấm** default SlaHours=24 |
| note | TextArea | optional → Description/Note |
| submitAssign | Button primary | busy lock · chỉ QL_HAT · POST WO (+ assign cite) |
| assignCta | Button gated | visible iff `roleCaps.qlHat` |

### Bảng hạn gợi ý (cite PLAN-3-VAI — client)

| Hạng mục | Thời hạn gợi ý |
|----------|----------------|
| Vá ổ gà | 3 ngày cấp I–II · 5 ngày cấp III–VI |
| Nứt dọc/ngang/mai rùa | 7 ngày mưa · 14 ngày khô |
| Lún lõm / sình lún | 10 ngày (không tính ngày mưa ẩm) |
| Vệ sinh / chướng ngại ATGT | 1 giờ nếu nguy hiểm · 7 ngày còn lại |
| Nước đọng mặt đường | ≤ 24 giờ |
| Biển cấm / hiệu lệnh | 1 ngày · biển khác 3 ngày |
| Vạch sơn hư cục bộ | 28 ngày |
| Tồn tại lúc nghiệm thu | ≤ 5 ngày từ văn bản yêu cầu |

## 6. List / Filter AC (packKind=list · phone)

| | |
|--|--|
| DES-GRID-* / LinErpListFilterBar | **N/A** — Mobile phone · **không** desktop grid |
| List surface | CardList peer cam-incident / patrol |
| AC-L1 | QL_HAT thấy **mọi** sự cố + báo cáo · **không** scope theo creator |
| AC-L2 | Filter cho phép: tuyến · loại · status · mức (INC) · **cấm** ô/filter người tạo |
| AC-L3 | Empty list OK · 4xx → toast |
| AC-L4 | Tap card → detail · CTA chỉ trên detail khi qlHat |

## 7. API cite (SA confirm DTO)

| Method | Path | Note |
|--------|------|------|
| GET | `incident/incidents` · `{id}` | GV-L-INC · GV-D-INC |
| GET | patrol history / sessions cite | GV-L-RPT · GV-D-RPT |
| POST | `maintenance/work-orders` | CreateWorkOrderRequest · DueAt · hangMuc cite |
| POST | `incident/incidents/{id}/assign` | optional cite estimate |
| GET | Integration users / partners | assignee · team |
| GET | `auth/profile` | roleCaps.qlHat |

Base: `{BffBase}/mobile-bff/api/v1`. **Cấm** invent controller · **cấm** ERP.*.

## 8. PO decisions (autoApprove · UNCLEAR → chốt / handoff SA)

| ID | Decision |
|----|----------|
| PO-DEC-01 · UNCLEAR-GV-HANGMUC-CAT | **MVP:** bảng hạn **client** từ PLAN-3-VAI (static) · SA được promote BE lookup sau · Design map Dropdown options |
| PO-DEC-02 · UNCLEAR-GV-SLA-MAP | **Cấm** `SlaHours=24` default · submit gửi **`DueAt` absolute** · `SlaHours` = null **hoặc** derive từ DueAt−now (SA chọn 1 · ghi DTO) |
| PO-DEC-03 · UNCLEAR-GV-RPT-ROUTE | **Giữ** product path báo cáo ca **đã ship** · Design+SA cite routes Mobile · **cấm** invent slug |
| PO-DEC-04 · GAP-GV-DM-01 | SA thêm DOMAIN-MAP row slug `web-rmms-giao-viec-ql-hat` · Incident+Maintenance cite |
| PO-DEC-05 · DEP-GV-ROLE | Hard dep `web-rmms-role-gate` · không ship CTA nếu thiếu `roleCaps.qlHat` |
| PO-DEC-06 | **Cấm** tiền Mục IV · chấm 100 · Hoàn thành hộ · Excel · iOS/Android · web-bff |

## 9. Non-goals / Out

- `new_page` · route public mới · queue alias làm product route  
- SLA 24h mặc định · tiền Mục IV · Giao việc ngoài QL_HAT  
- invent `giao-viec/*` · demo-json · fake users/WO  
- Desktop DES-GRID / LinErpListFilterBar / export  

## 10. Handoff

| Role | Packet |
|------|--------|
| Design | GV-* zones · reviewUrl · 430 · DES-MOB-INC-DETAIL · hangMuc options · CTA gate visual · **cấm** invent RPT path |
| SA | GAP-GV-DM-01 · DueAt/SlaHours map (PO-DEC-02) · report source DTO · WO fields · **cấm** ERP.* |
| TL/Dev | edit CTA gate + form bind Live · list unscoped · **cấm** new route |
| QA | role matrix · due editable · no creator filter · no 24h · non-QL_HAT deny |

**DoR PO:** requirement + compact · packKind confirm · Screens+Leave · List AC · decisions trên UNCLEAR · STATUS step 1 PASS · Design pending.
