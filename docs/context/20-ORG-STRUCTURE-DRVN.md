# Cơ cấu tổ chức Cục Đường bộ Việt Nam — SSOT Master

> **catalogKind:** `org-unit` · **MFE:** `Linm.Web.RMMS.Master` · `/master/org-unit`  
> **Nguồn:** [drvn.gov.vn — Cơ cấu tổ chức](https://drvn.gov.vn/gioi-thieu/co-cau-to-chuc?categoryId=101875659) · sơ đồ DRVN  
> **Workflow:** `/agent-qldb-workflow` · `packKind=master` · **không demo** · UI confirm Design (`master-catalog-no-demo.md`)  
> **Feature context:** [`features/org-unit.md`](features/org-unit.md) · hub [`features/master.md`](features/master.md)

## 1. Mục đích

Danh mục **dùng chung** (platform shared) — tree đơn vị DRVN để:

- Filter / tenant scope theo Khu · Văn phòng QLĐB  
- **SearchInput** trên form Asset / Patrol / … (`erp-form-context` Step **2li** · **2s**)  
- Map folder `data-import/RMMS CUC 2/Chi cục QLĐB II.x` → mã org-unit

## 2. Cây chuẩn (seed)

```
DRVN                          Cục Đường bộ Việt Nam
├── HQ                        Lãnh đạo Cục
├── ADV                       Cơ quan tham mưu
│   ├── ADV-VP                Văn phòng
│   ├── ADV-TCCB              Phòng Tổ chức cán bộ
│   ├── ADV-KHCN              Phòng KHCN, MT & HTQT
│   ├── ADV-KHTC              Phòng Kế hoạch - Tài chính
│   ├── ADV-DTCT              Phòng Quản lý đầu tư công tư
│   ├── ADV-QLGT              Phòng Quản lý, tổ chức giao thông
│   ├── ADV-QLBT              Phòng Quản lý, bảo trì
│   ├── ADV-QLVT              Phòng Quản lý vận tải
│   ├── ADV-PCĐT              Phòng Pháp chế – Đấu thầu
│   ├── ADV-TD                Phòng Thẩm định
│   └── ADV-QLCL              Phòng Quản lý chất lượng
├── REG                       Cơ quan quản lý khu vực
│   ├── REG-I                 Khu Quản lý đường bộ I
│   │   ├── REG-I-TCHC …      (4 phòng Khu)
│   │   └── VP-I.1 … VP-I.4   Văn phòng Quản lý đường bộ I.1–I.4
│   ├── REG-II                Khu Quản lý đường bộ II   ← RMMS CUC 2
│   │   ├── (4 phòng Khu)
│   │   └── VP-II.2 … VP-II.5 Văn phòng II.2–II.5 (SSOT DRVN)
│   ├── REG-III               Khu III → VP-III.1…III.4
│   └── REG-IV                Khu IV → VP-IV.1…IV.4
└── SU                        Đơn vị sự nghiệp
    ├── SU-BQLDA-N            Ban QLDA miền Bắc
    ├── SU-BQLDA-T            Ban QLDA miền Trung
    ├── SU-BQLDA-S            Ban QLDA miền Nam
    ├── SU-TTKT-N             TT KT&CN Đường bộ phía Bắc
    ├── SU-TTKT-S             TT KT&CN Đường bộ phía Nam
    └── SU-CĐ                 Trường CĐ GTVT đường bộ
```

Mỗi Khu (I–IV) có 4 phòng chức năng: Tổ chức – Hành chính · Kế hoạch – Tài chính · Quản lý, bảo trì · Quản lý, tổ chức giao thông.

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
