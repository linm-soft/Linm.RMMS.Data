# Cơ cấu tổ chức Cục Đường bộ Việt Nam — SSOT Master

> **catalogKind:** `org-unit` · **MFE:** `Linm.Web.RMMS.Master` · `/master/org-unit`  
> **Nguồn:** [drvn.gov.vn — Cơ cấu tổ chức](https://drvn.gov.vn/gioi-thieu/co-cau-to-chuc?categoryId=101875659) · sơ đồ DRVN  
> **Workflow:** `/agent-qldb-workflow` · `packKind=master` · **không demo** · UI confirm Design (`master-catalog-no-demo.md`)  
> **Feature context:** [`features/org-unit.md`](features/org-unit.md) · hub [`features/master.md`](features/master.md)  
> **Seed (machine — Design/SA/Dev):** [`seed/org-unit-seed.json`](seed/org-unit-seed.json) · **60** nodes · mirror `specs/_data-analy/shared-catalogs/org-unit-seed.json`

## 1. Mục đích

Danh mục **dùng chung** (platform shared) — tree đơn vị DRVN để:

- Filter / tenant scope theo Khu · Văn phòng QLĐB  
- **SearchInput** trên form Asset / Patrol / … (`erp-form-context` Step **2li** · **2s**)  
- Map folder `data-import/RMMS CUC 2/Chi cục QLĐB II.x` → mã org-unit

## 2. Cây chuẩn (seed)

**AI Design MUST load** [`seed/org-unit-seed.json`](seed/org-unit-seed.json) — mỗi node: `code` · `name` · `parentCode` · `kind` · `legacyAlias` · `isLegacyExtra`.

| kind | Count | Ví dụ |
|------|------:|-------|
| ORG | 1 | `DRVN` |
| HQ | 1 | `HQ` |
| ADV | 1 | `ADV` |
| REG | 5 | `REG-I`…`REG-IV` (+ nhóm) |
| ROOM | 27 | Phòng Khu / tham mưu |
| VP | 18 | `VP-I.1`…`VP-IV.4` · `VP-II.1`/`II.6` legacy |
| SU | 7 | Ban QLDA · TT KT · CĐ |
| **Total** | **60** | |

Outline (đọc nhanh — **không** thay seed JSON):

```
DRVN                          Cục Đường bộ Việt Nam
├── HQ                        Lãnh đạo Cục
├── ADV                       Cơ quan tham mưu
│   ├── ADV-VP … ADV-QLCL     (11 phòng tham mưu)
├── REG                       Cơ quan quản lý khu vực
│   ├── REG-I … REG-IV        (+ 4 phòng/Khu · VP-*.*)
└── SU                        Đơn vị sự nghiệp
    └── SU-BQLDA-* · SU-TTKT-* · SU-CĐ
```

Mỗi Khu (I–IV) có 4 phòng chức năng: Tổ chức – Hành chính · Kế hoạch – Tài chính · Quản lý, bảo trì · Quản lý, tổ chức giao thông. **Chi tiết mã** → seed JSON.
## 3. Map data-import `RMMS CUC 2`

| Import folder | orgCode đề xuất | Ghi chú |
|---------------|-----------------|---------|
| `Chi cục QLĐB II.2` … `II.5` | `VP-II.2` … `VP-II.5` | Legacy **Chi cục** = official **Văn phòng QLĐB** |
| `Chi cục QLĐB II.1`, `II.6` | `VP-II.1` / `VP-II.6` | **GAP-ORG-01** — không trên trang DRVN (Khu II chỉ II.2–II.5) · giữ `legacyAlias` |
| Sở GTVT / BOT / Cty… | — | Catalog **`partner-unit`** (không thuộc cây DRVN) |

## 4. Entity / API (SA chốt)

| | |
|--|--|
| Entity | `OrgUnit` (tree: `parentCode` · `code` · `name` · `kind` · `legacyAlias?`) |
| Shared | `Scope=Shared` platform — `shared-master-catalog` pattern RMMS |
| API | `api/v1/rmms/org-units` · search · tree · CRUD (approve shared) |
| FE lookup | `SearchInput` / `LinTreeNav` — mã + tên |

## 5. Implement trước

Catalog này **P0 trước** page Asset/list dùng filter đơn vị — pipeline `/agent-qldb-workflow` feature `org-unit`.
