# Cơ cấu tổ chức — form org-tree

**Page:** `OrgUnitFormModal` · **route:** `/mas/co-cau-tc` · **testIdPrefix:** `rmms-org-unit-form`  
**Skill:** `/rmms-form-input-org-tree` · **scope:** `searchinput_parity`  
**Confirm:** 2026-08-31  
**MFE:** `Linm.Web.RMMS.Master`

Form **là** cây org — không nhét cascade Khu→VP→ĐV→Tuyến.  
Lookup sẵn: **Đơn vị chủ quản** = `SearchInput` mã + tên · persist `parentCode` · GET `parentName` JOIN.
