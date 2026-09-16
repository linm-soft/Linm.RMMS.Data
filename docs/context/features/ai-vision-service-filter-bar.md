# Filter bar — ai-vision-service (peer lists)

> **Feature:** `ai-vision-service` · **T-CTX-FILTER-01**  
> **SSOT UI:** `LinErpListFilterBar` · title trái · field lấp hàng rồi wrap · 🔍 mép phải (V10)  
> **Cấm:** `ErpListHeaderFilters` · `LinListFilterField` · export/print trên bar · `SearchTextInput onSearch` trùng bar

## Screens

| Screen | Path | Slots (lấp hàng rồi wrap) |
|--------|------|---------------------------|
| S-LIST-AIV | `/ai-kd` | search · classCode/defectClass · severity · status · engine · sectionId · 🔍 |
| S-LIST-AAD | `/ai-kd/phat-hien-ts` | search · classCode · status · routeId · missOnly? · 🔍 |
| S-LIST-EST | `/ai-kd/uoc-luong-sc` | peer estimate filters · 🔍 |
| S-LIST-PRED | `/ai-kd/du-bao-bt` | peer predict filters · 🔍 |
| S-LIST-ITS | `/ai-its/bb-ct` | peer ITS filters · 🔍 |
| S-LIST-ANPR | `/ai-its/toc-do-qt` | peer ANPR filters · 🔍 |
| S-HOST | `/ai-vision-service` | none (hub) |

## Field contracts (AIV)

| Query key | controlHint | Source |
|-----------|-------------|--------|
| search | SearchInput | list API |
| defectClass / classCode | Dropdown | init-data / catalog |
| severity | Dropdown | init-data |
| status | Dropdown | Draft/Confirmed/Dismissed |
| engine | Dropdown | init-data · **cấm** badge header |
| sectionId / routeId | SearchInput | Integration road-route / section |
| fromDate / toDate | Date | TZ bounds when Design slots |

## Layout HARD

- `data-lin-list-layout="erp-filter-bar"`
- onSearch **chỉ** trên `LinErpListFilterBar`
- 0 chrome AI/P1/P2/score trên filter/header
