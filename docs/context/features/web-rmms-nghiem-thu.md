# Feature context — web-rmms-nghiem-thu

> **Slug:** `web-rmms-nghiem-thu` · **Wave:** W3 Field — Nghiệm thu (list / tạo / chi tiết)  
> **Status:** draft → data_analy · **packKind:** `list` · **changeScope:** `new_page`  
> **Demo:** N/A (master · **cấm** demo HTML / mock SSOT · cite native `#sc-nghiem-thu*` only)  
> **MFE:** `Linm.Web.RMMS.Mobile` · khung phone `max-width` 430px · **cấm** nhét vào MFE desktop Field  
> **BE:** `Linm.RMMS.WebService` + Mobile.Bff `:5202` · DOMAIN-MAP **Patrol** · resource `nghiem-thu` · **cấm ERP.*** / Domains/Master  
> **mfeStdRoute:** `/web-rmms-nghiem-thu` · **mfeStdUrl:** `http://localhost:9301/web-rmms-nghiem-thu`  
> **Native routes (SCREENS):** `/field/nghiem-thu` · `/field/nghiem-thu/new` · `/field/nghiem-thu/:id`  
> **Queue:** `/agent-qldb-workflow` · alias `web-rmms-nghiem-thu` · **cấm** sửa iOS/Android · **≠** gộp tuần đường / tuần kiểm / maintenance

## 1. Mục tiêu

Ba màn **Nghiệm thu** 1-1 Android `NghiemThuScreen` / `NghiemThuCreateScreen` / `NghiemThuDetailScreen`: list + tạo + chi tiết/sửa. Entry từ quick action hub Field. **Không** thêm tab. Persona = cán bộ nghiệm thu (≠ tuần đường / tuần kiểm).

## 2. Màn NT (ids)

| Id | Route / zone | Việc |
|----|--------------|------|
| NT-00 | phone frame | ≤430px · Android layout 1-1 |
| NT-01 | `/field/nghiem-thu` list | Paged list · `GET patrol/nghiem-thu` page=1 pageSize=50 |
| NT-02 | list chrome | Back + title + nút **Tạo** → `/field/nghiem-thu/new` |
| NT-03 | search | Query `search` (API sẵn: status/route/templateType/fromDate/toDate) |
| NT-04 | empty | Empty copy khi 0 item |
| NT-05 | row | Icon `LinmStrokeKind.Check` nền success · badge trạng thái + kết quả · tap → detail |
| NT-06 | `/field/nghiem-thu/new` | Create form · POST · Lưu nháp Status=draft |
| NT-07 | `/field/nghiem-thu/:id` | Detail/edit · GET + PUT · **cấm** DELETE P1 |
| NT-08 | GPS | `navigator.geolocation` → FieldInfo / ZoneOrgCode · deny → **cấm** bịa |
| NT-09 | media | `MediaIds` guid[] max 10 · `files/*` FileService |
| NT-10 | result / scores | ResultCode pass/fail/deduct · Scores[] từ init-data |
| NT-11 | entry | Field hub quick action · **không** tab mới |

**Out:** tuần đường / tuần kiểm / maintenance WO · desktop Field MFE · invent entity/path · label «Mẫu nghiệm thu NN» · DELETE P1 · iOS/Android edit.

## 3. Nguồn SSOT (cite)

| Source | Path |
|--------|------|
| Screens / GPS / BFF | `docs/plan/web-rmms-mobile/SCREENS.md` · `/field/nghiem-thu*` |
| Plan | `docs/plan/web-rmms-mobile/PLAN.md` · NghiemThu*View |
| Tasks | `docs/plan/web-rmms-mobile/TASKS.md` · **T-W3-08** |
| MAU-10 labels | `docs/plan/nghiem-thu-mau/MAU-10.md` · `mau-01`…`mau-10` |
| Legacy peer (cite) | `docs/context/features/nghiem-thu.md` · create · detail |
| DOMAIN-MAP | Patrol · slug `nghiem-thu` (+ add `web-rmms-nghiem-thu` row SA) |
| BFF | Mobile.Bff `mobile-bff/api/v1` `:5202` catch-all |

## 4. API Live (reuse — cấm invent)

| Surface | Prefix / path |
|---------|----------------|
| Mobile BFF | `http://localhost:5202` · `mobile-bff/api/v1` |
| List | `GET patrol/nghiem-thu` |
| Create | `POST patrol/nghiem-thu` |
| Detail | `GET/PUT patrol/nghiem-thu/{id}` |
| Init | `GET patrol/nghiem-thu/init-data` |
| Files | `files/*` · MediaIds max 10 |
| Web BFF | **cite only** — **cấm** base client |

## 5. HARD rules (product)

| Rule | |
|------|--|
| Layout | Android 1-1 · phone `max-width` 430 · Check icon success row |
| Entry | Field hub QA · **không** tab · **không** gộp patrol/tuần kiểm/mnt |
| Labels mau | init-data + MAU-10 · **cấm** «Mẫu nghiệm thu NN» |
| Kết quả | pass / fail / deduct · Scores[] init-data |
| Nhãn UI | `useFormOptions()` / copy key · **cấm** hardcode VN form |
| GPS | geolocation → FieldInfo/ZoneOrgCode · deny = không fake |
| BFF | ONLY Mobile.Bff `:5202` |
| BE | ONLY `Linm.RMMS.WebService` + DOMAIN-MAP · **cấm ERP.*** |
| Native | **cấm** sửa iOS/Android · **cấm** MFE desktop Field |
| Entity/path | **cấm** entity mới · **cấm** path mới |

## 6. Persona

| Zone | Ai |
|------|-----|
| NT-01…10 staff | Cán bộ nghiệm thu sau login |
| Guest | Redirect login (shell) |

## 7. DoD (data_analy → PO)

- control-hint + real-data PASS · packKind=list · changeScope=new_page  
- 3 màn NT + API reuse + MAU-10 + GPS deny rule documented  
- DOMAIN-MAP gap `web-rmms-nghiem-thu` flagged for SA  
- compact handoff ≤5KB

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-25T15:47:01.620Z` |
| mobile | — | — | — |
