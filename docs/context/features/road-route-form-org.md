# Tuyến đường — form org-tree

**Page:** `RoadRouteFormModal` · **route:** `/mas/tuyen-duong` · **testIdPrefix:** `rmms-road-route-form`  
**Skill:** `/rmms-form-input-org-tree` · **scope:** `searchinput_parity`  
**Confirm:** 2026-08-31  
**MFE:** `Linm.Web.RMMS.Master`

Catalog tuyến — không cascade Khu→VP→ĐV.  
Lookup sẵn: **Tuyến chính** = `SearchInput` mã + tên · persist `parentCode` · GET `parentName` JOIN.
