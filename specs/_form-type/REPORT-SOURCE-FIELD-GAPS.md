# Report → form nguồn — cột lưới còn thiếu trên form/entity

SSOT đối chiếu `docs/context/features/rpt-*.md` **Grid** ↔ entity `Linm.RMMS.WebService`.  
**Cấm** Col1–Col3 CSDL làm SSOT sổ. **Cấm** implement `login` cho pack này.

| Report | sourceFeature | Table | Cột report | Form/entity | Gap |
|--------|---------------|-------|------------|-------------|-----|
| `rpt-tai-san` | `asset` **done** | `rmms_road_assets` | tuyến · hạng mục · **SL** · **ĐVT** · TT · cập nhật | Route · Type · Status · UpdatedAt | **Quantity · UnitCode** |
| `rpt-su-co` | `incident` paused Dev | `rmms_incidents` | mã · tuyến · loại · mức · TT · thời gian | Code · RouteName · IncidentType · Severity · Status · RequestedAt | đủ P1 |
| `rpt-thien-tai` | `incident` **list done** | `rmms_incidents` | ngày · tuyến · loại · km · mức · thiệt hại tóm tắt | RequestedAt · RouteName · IncidentType · KmStart/KmEnd · Severity · **Description** | **CLOSED P1** `task_b580eac0` map Description (typed DamageSummary cột riêng = P2) |
| `rpt-thiet-hai` | `incident` | — | tuyến · hạng mục · **KL** · **ĐVT** · ước giá | không line | **bảng dòng thiệt hại** |
| `rpt-un-tac` | `incident` | `rmms_incidents` | thời điểm · tuyến · km · loại · **thời lượng** · TT | CausesCongestion · Km* | **DurationMin** · type congestion\|flood |
| `rpt-tngt` | `incident` | `rmms_incidents` | 6 tab thống kê | IncidentType | **CLOSED P1** `task_46a44cfc` filter `type=TNGT` + tab `serious` mức bắt buộc |
| `rpt-hang-muc-hu-hong` | `incident` / `ai-vision` | `rmms_incidents` | tuyến · km · hạng mục · mức · nguồn | AssetLabel | **DefectItem · SourceKind** |
| `rpt-checkin` · `rpt-tuan-duong` · `rpt-tuan-kiem` | `patrol` **done** | `rmms_patrol_sessions` | cán bộ · tuyến · ngày · điểm · coverage | session fields | đủ P1 |
| `rpt-bao-cao-cong` | `attendance` **done** | `rmms_attendance_logs` | InZone% · first→last | logs | đủ P1 |
| `rpt-tong-hop-bao-tri` | `maintenance` paused Dev | `rmms_work_orders` | KPI · WO tóm tắt | Code · WorkType · Status · Progress | đủ P1 |
| `rpt-nhat-ky-cong-viec` | `maintenance` | `rmms_work_orders` | ngày · WO · hạng mục · **KL** · **ĐVT** · TT | Title · WorkType | **Quantity · UnitCode** trên WO |
| `rpt-tinh-trang-mat-duong` | `pavement-section` | `rmms_pavement_sections` | đoạn · km · **PCI** · **lớp** · **ngày đo** | Km* · StructureType · **Pci · LayerCode · MeasuredAt** | **CLOSED** task_6a731526 |
| `rpt-nhat-ky-tuan-duong` · `rpt-nhat-ky-tuan-kiem` · `rpt-kiem-tra-cau` · `rpt-dem-xe` · `rpt-giay-phep-thi-cong` | `csdl-so-sach` paused QA | `rmms_csdl_catalog_records` | sổ-specific | Resource + Detail* + **Col1–3 cấm** | **field sổ typed** (không Col*) |
| `rpt-vi-pham-hlatdb` | `csdl-so-sach` T-UI-LIST-01 **done** | `RowViolation` | ngày · tuyến · km · địa bàn · TT · tổ chức · BB · hiện trạng · ĐV XN | `At` `StationKm` `AdminArea` `ViolationStatus` `OrgName` `Minutes*` `CurrentState` `UnitConfirm` | **CLOSED P1** `task_24fb0ec1` |
| `rpt-cong-van` | `ops` | `rmms_notifications` | số CV · ngày · trích yếu · chiều · đơn vị | Code · SentAt · **DocumentNumber · Direction · Summary · OrgUnit*** | **CLOSED** task_31a9bbd8 |

## Implement order (không login)

1. `incident` — Dev resume + field thiên tai / ùn tắc / TNGT / dòng thiệt hại  
2. `maintenance` — Dev resume + KL/ĐVT trên WO  
3. `pavement-section` — Dev resume + PCI · lớp · ngày đo  
4. `csdl-so-sach` — QA resume + typed sổ fields  
5. `ops` — OfficialDocument scalars **CLOSED** task_31a9bbd8  
6. `asset` — crud_gap **Quantity + UnitCode** (form done nhưng report thiếu SL/ĐVT)
