# Data-analy INVESTIGATE — RMMS CUC 2 → Master catalogs

> Status: **done** (cluster_confirm **A** — 2026-08-08)  
> schemaVersion: `2026.08.08.1` · rulesVersion: `2026.08.08.15`  
> Scope: folder taxonomy (đơn vị → tuyến → loại TS)  
> data_root: `data-import/RMMS CUC 2`  
> Confirmed: 4 catalogs + canonical codes bên dưới

## 1. Cấu trúc

```
RMMS CUC 2/
  {Đơn vị}/          → org-unit | partner-unit
    {Tuyến}/         → road-route
      {Loại TS}/     → asset-type
        *.xlsx
```

## 2. partner-unit (13) — APPROVED

| kind | name |
|------|------|
| BOT | BOT Trùng Phương · Công ty BOT PPP · CTy TNHH 2 TV BOT QL.1A Cienco4-TCT319 · Tổng Cty XDCTGT4 — BOT tránh Vinh |
| DOANH_NGHIEP | Cty 495 · Cty Cp Phước Tượng-Phú Gia · Công ty CP Tập đoàn Trường Thịnh |
| SO_GTVT | Sở GTVT Hà Tĩnh · Nghệ An · Quảng Bình · Quảng Trị · Thanh Hóa · Thừa Thiên Huế |

## 3. road-route — APPROVED canonical

| code | name |
|------|------|
| QL.1 | Quốc lộ 1 |
| HCM | Đường Hồ Chí Minh |
| QL.7 | Quốc lộ 7 |
| QL.7B | Quốc lộ 7B |
| QL.8 | Quốc lộ 8 |
| QL.8B | Quốc lộ 8B |
| QL.8C | Quốc lộ 8C |
| QL.9 | Quốc lộ 9 |
| QL.9B | Quốc lộ 9B |
| QL.9D | Quốc lộ 9D |
| QL.10 | Quốc lộ 10 |
| QL.12A | Quốc lộ 12A |
| QL.12C | Quốc lộ 12C |
| QL.15 | Quốc lộ 15 |
| QL.15A | Quốc lộ 15A |
| QL.15B | Quốc lộ 15B |
| QL.15C | Quốc lộ 15C |
| QL.15D | Quốc lộ 15D |
| QL.16 | Quốc lộ 16 |
| QL.45 | Quốc lộ 45 |
| QL.46 | Quốc lộ 46 |
| QL.46B | Quốc lộ 46B |
| QL.46C | Quốc lộ 46C |
| QL.47 | Quốc lộ 47 |
| QL.47B | Quốc lộ 47B |
| QL.47C | Quốc lộ 47C |
| QL.48 | Quốc lộ 48 |
| QL.48B | Quốc lộ 48B |
| QL.48C | Quốc lộ 48C |
| QL.48D | Quốc lộ 48D |
| QL.48E | Quốc lộ 48E |
| QL.49 | Quốc lộ 49 |
| QL.49B | Quốc lộ 49B |
| QL.49C | Quốc lộ 49C |
| QL.217 | Quốc lộ 217 |
| QL.217B | Quốc lộ 217B |
| CT.NS-HCM | Đường nối cảng Nghi Sơn – HCM |
| CT.001 | Cao tốc (folder `Cao Toc ; 001` — name SA refine) |

**Exclude seed:** `Đã Import Xong` · KM range folders.  
**Legacy:** mọi alias folder → `legacyAliases[]` (tránh/hầm giữ trên segment/import, không tách feature).

## 4. asset-type — APPROVED canonical

| code | name VN |
|------|---------|
| CULVERT_X | Cống thoát nước ngang |
| INTERCHANGE | Nút giao đường bộ |
| SLOPE_PROTECT | Bảo vệ mái dốc |
| LIGHTING | Hệ thống chiếu sáng đường |
| GANTRY_SIGN | Giá long môn – biển báo |
| GUARDRAIL | Hộ lan – tôn sóng – hàng rào bảo vệ |
| DELINEATOR | Cọc tiêu / cọc H |
| CULVERT_L | Cống dọc – rảnh dọc – hào kỹ thuật dọc |
| MEDIAN | Dải phân cách giữa |
| ROW_UTIL | Công trình HTKT trong hành lang đường bộ |
| STATION_HOUSE | Nhà hạt quản lý đường bộ |
| RETAINING | Kè / tường chắn |
| KM_POST | Cột Km |
| BUS_STATION | Bến xe bus / xe khách |
| UNDERPASS | Cống chui dân sinh / hào kỹ thuật |
| RAIL_CROSS | Điểm giao bằng đường sắt |
| BUS_STOP | Điểm đỗ/dừng xe bus |
| EMS_POST | Trạm trực cấp cứu y tế |
| TOLL | Trạm thu phí |
| TUNNEL | Hầm |
| FERRY | Bến phà và phà |
| REST_AREA | Trạm dừng nghỉ / bãi đỗ xe |
| LAND_ROW | Đất thuộc tài sản hạ tầng đường bộ |

Alias thô → `legacyAliases` (xem scan raw trong history / import job).

## 5. org-unit — APPROVED (DRVN + Chi cục map)

Xem `docs/context/20-ORG-STRUCTURE-DRVN.md` · `shared-catalogs/org-structure.md`.  
Chi cục II.2–II.5 → VP-II.2…II.5; II.1/II.6 = legacyAlias (GAP-ORG-01 giữ).

## 6. Master pages + controlHint

| featureSlug | MFE route | Field | **controlHint** |
|-------------|-----------|-------|-----------------|
| org-unit | `/master/org-unit` | orgUnitCode | SearchInput tree |
| road-route | `/master/road-route` | routeCode | SearchInput |
| asset-type | `/master/asset-type` | assetTypeCode | SearchInput |
| partner-unit | `/master/partner-unit` | partnerUnitCode | SearchInput |
| (excel) ghi chú / số đo | — | — | Text / Number |
| (excel) enum đóng nhỏ | — | — | Dropdown |

## 7. Handoff

→ Context features · STATUS PO  
→ **controlHint** bắt buộc trong DI handoff (`data-analy-control-hint.md`)  
→ `/agent-qldb-workflow` packKind=master · Design chốt control-map · SA chốt lookup API  
→ Optional: Excel header fingerprint clusters
