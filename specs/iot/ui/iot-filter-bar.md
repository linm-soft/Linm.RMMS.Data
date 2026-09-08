# Filter bar — iot (list)

| Field | Value |
|-------|-------|
| feature | `iot` |
| surface | S-LIST · Zone C1 |
| component | `LinErpListFilterBar` |
| layout | `data-lin-list-layout="erp-filter-bar"` · V1–V5 HARD |
| search | bar `onSearch` only · **cấm** nút Tìm riêng |

## Fields (1:1 leading)

| id | label | control | source | notes |
|----|-------|---------|--------|-------|
| search | Tìm | SearchTextInput / Input | query `search` | no onSearch on field |
| status | Trạng thái | Dropdown | init-data `online`/`offline` | **cấm** hardcode label |
| type | Loại | Dropdown | init-data `sensor`/`logger` | Q-IOT-TYPE-01 chốt |
| routeCode | Tuyến | SearchInput | road-routes search | **cấm** free-text |

## Query keys

`search` · `status` · `type` · `routeCode` · `page` · `pageSize`

## Cấm

- `ErpListHeaderFilters` · `LinListFilterField` · wrapper bọc cả `leading`
- action / export / refresh trên filter bar
- stack dọc field · gap lệch D/T/M
