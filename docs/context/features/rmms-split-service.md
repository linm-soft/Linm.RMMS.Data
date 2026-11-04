# Tách service RMMS

> **Slug:** `rmms-split-service` · **Module:** Platform · **Phase:** dev  
> **Status:** Context — asset chưa gỡ khỏi host  
> **Chốt:** 2026-11-03

## 1. Giữ trên service gốc

`Linm.RMMS.WebService` giữ tuần đường và tuần kiểm: Patrol, nghiệm thu, sự cố, phiếu việc, sổ 02.

Web và mobile gọi `ApiBase` của host cho các route này. Không drop bảng trên `linm_rmms`.

## 2. Tách ra repo mới

| Phần | Repo | Dữ liệu |
|------|------|---------|
| Tài sản, catalog, biểu, KCHT | `Linm.RMMS.AssetService` | Drop trên host. Import lại từ file. Không copy dòng. |
| Camera | `Linm.RMMS.CameraService` | Copy rồi đối soát. Drop sau khi số dòng khớp. |

`Linm.RMMS.FieldService` không nhận tuần đường hay tuần kiểm.

## 3. Cờ gọi service

`SplitServices:Enabled` = `true`. Web và mobile gọi AssetBff cho road-assets, pavement-sections, asset health, asset-types.

File import tài sản: `Linm.RMMS.AssetService/api/src/RMMS.Asset.Api/data/import/sets/gov-vn` (`road_assets.part1`, `part2`, `pavement_sections`). `ReImportSeed` đang tắt. Bật khi cần nạp vào `linm_rmms_asset`.

Host `gov-vn` chỉ còn tuyến và loại biển. Script xóa dòng tài sản trên `linm_rmms`: `local-script/drop-asset-rows.sql`.
