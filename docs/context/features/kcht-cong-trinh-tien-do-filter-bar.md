# Tiến độ tuần KCHT — filter bar context (PH3)

**Page:** `KchtWeeklyProgressListPage` · **kind:** catalog (Kind B nested)  
**Route:** `/kcht-cong-trinh/:id/tien-do` · **testIdPrefix:** `rmms-kcht-weekly-list`  
**Package:** `LinErpListFilterBar` · `data-lin-list-layout="erp-filter-bar"`  
**Context review version:** `2026.08.29.1`  
**Skills:** `/filter-bar-context` · `filter-bar-layout-hard`  
**Dev:** `/agent-dev` · **T-UI-FILTER-WEEK-01** — load **trước Write**  
**SA:** API-W01 · `GET …/projects/{id}/weekly-progress`

---

## 1. Fields

| # | Label VN | Control | Slot | API / query |
|---|----------|---------|------|-------------|
| 1 | Tuần / tìm | `SearchTextInput` / week | `leading` | `search` · `weekOf` |
| 2 | Đèn RAG | `SearchInput` · `kcht-rag` | `leading` | `rag` |
| 3 | Tìm | bar `onSearch` 🔍 | search | apply → page=1 |

**Cấm:** export trên bar · `ErpListHeaderFilters` · `LinListFilterField`.  
**Toolbar:** Refresh · **Cập nhật tuần** primary — không trên filter.
