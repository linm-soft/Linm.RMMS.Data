# QA — Scenarios — asset-detail (mobile · Chi tiết tài sản)

| Field | Value |
|-------|-------|
| feature | `asset-detail` |
| this role | `qa` · `/agent-qa-mobile` |
| status | **blocked** |
| packKind | **`screen`** |
| taskId | `task_20e8f629` |
| priorFail | `task_cbda6a54` · qaFix implement `task_714bba2c` |
| e2eQa | **ON** · `yarn e2e-qa-mobile` · `ios_test_phase=phase1_iphone` · **A4-IPAD DEFER** |
| store_qa | **run_store** (autoApprove=ON) |
| e2e result | **ok:false** · dest **iPhone 17 Pro Max** · AVD **Pixel_2** / emulator-5554 |
| method | e2e runtime · yarn e2e-qa-mobile · Maestro + simctl/adb · **cấm** GenerateImage · **cấm** yarn start:std / mfeStdUrl |
| align | iOS A3 live `KM-QL1-NA-461` **Aligned** · Android P6 empty list **Not Aligned** |
| updatedAt | `2026-09-01T16:41:26.000Z` |

**Scope:** slug `asset-detail` screen `#sc-asset-detail` only. **Cấm** AC sibling list/collect/adjust/AI/gis-map as in-scope.

## Verdict

fail

## VERIFY GATE

| Gate | Result |
|------|--------|
| Mobile.Bff :5202 | **PASS** (healthy) |
| API docker :5111 + host :5101 forward | **PASS** |
| Maestro iOS | **PASS** · live detail `KM-QL1-NA-461` · YAML tap seed by code |
| Maestro Android | **FAIL** · `GAP-QA-STORE-03` · list empty **Chưa có tài sản** |
| `yarn e2e-qa-mobile` | **FAIL** · `ok:false` · error `GAP-QA-STORE-03` |
| Real BFF detail iOS | **PASS** · GET by id bind hero |
| Real BFF list Android | **FAIL** · `GAP-QA-REAL-01` |

## Device AC

| ID | Expect | Result |
|----|--------|--------|
| QA-01 | Login → asset hub → list → row → `#sc-asset-detail` live GET by id | **PARTIAL** · iOS **PASS** · Android **FAIL** (empty list) |
| QA-02 | Title iOS **Chi tiết** / Android **Chi tiết tài sản** · hero Mã TS + live Code | **PARTIAL** · iOS **PASS** (`KM-QL1-NA-461`) · Android **FAIL** |
| QA-03 | Rows Loại · Tuyến · lý trình · Tọa độ · CTA **Ghim trên bản đồ** | **PARTIAL** · iOS **PASS** · Android **FAIL** |
| QA-04 | Live seed `KM-QL1-NA-461` (id `c33e0001-…0001`) — **cấm** demo-only PASS | **PARTIAL** · iOS **PASS** · Android **FAIL** |
| QA-05 | CTA map → toast P1 OK nếu gis-map chưa ship | **PASS** (iOS optional tap) · Android **BLOCKED** |
| AC-D-14 | Cấm watermark / process text | **PASS** |

## Store Must

| Case | Store | Evidence | Result |
|------|-------|----------|--------|
| A11-LAUNCH | A11 | ![A11-LAUNCH](screens/A11-LAUNCH.png) | **PASS** (CLI) |
| A10-BFF | A10 · P11 | — | **PASS** |
| A9-LOGIN | A9 · P10 | ![A9-LOGIN](screens/A9-LOGIN.png) | **PASS** (CLI) |
| A3-CORE | A3 · A11 | ![A3-CORE](screens/A3-CORE.png) | **PASS** CLI · visual **Aligned** live `KM-QL1-NA-461` |
| P6-CORE | P6 · P11 | ![P6-CORE](screens/P6-CORE.png) | **PASS** CLI · visual **Not Aligned** · empty list harvest |
| P6-CORE-2 | P6 | ![P6-CORE-2](screens/P6-CORE-2.png) | **PASS** CLI · visual **Not Aligned** |
| A4-IPAD | A4 | **DEFER** Phase 1 | DEFER |

## Maestro

| Flow | Path | Result |
|------|------|--------|
| iOS | `qa/e2e/ios.yaml` | **PASS** · list live KM → tap seed text → detail hero `KM-QL1-NA-461` · zones label/value/rows/CTA |
| Android | `qa/e2e/android.yaml` | **FAIL** · `#sc-asset-list` · `asset-list-empty` **Chưa có tài sản** · không thấy `KM-QL1-NA-461` |

## Root cause (QA)

1. **iOS (closed prior EmptyChrome):** qaFix nav + YAML tap `.*KM-QL1-NA-461.*` (không `row-asset-0` — BFF order row0=`BB-QL1-NA-478`) → detail live **PASS**. Đóng GAP-MOB-ASSET-DET-NAV-02 · GAP-QA-STORE-01 (code+flow).
2. **Android:** List empty sau login · hierarchy `asset-list-empty` · **không** demo `TS-20260810-*` lần này · nghi GET list fail / tenant `X-Company-Id` / session trên emulator (`bff.base=http://10.0.2.2:5202` OK từ host). **Cấm** AC PASS. Mở lại GAP-QA-STORE-03 · GAP-QA-REAL-01 (Android).
3. CLI harvest P6 sau Maestro FAIL = empty list · **≠** visual Aligned (GAP-MOB-E2E-VIS-01 open Android).

## Gaps

| ID | Note | Block complete? |
|----|------|-----------------|
| GAP-QA-STORE-03 | Maestro Android FAIL · empty list · no live KM | **yes** |
| GAP-QA-REAL-01 | Android list không chứng minh GET BFF live · CORE P6 invalid | **yes** (Android) |
| GAP-MOB-ASSET-DET-NAV-02 | iOS EmptyChrome | **closed** (re-QA) |
| GAP-QA-STORE-01 | Maestro iOS EmptyChrome / wrong row | **closed** (YAML tap seed + live detail) |
| GAP-MOB-E2E-VIS-01 | P6 CLI PASS ≠ visual detail live | **yes** (Android) |

## E2E screenshots

- `qa/screens/` · `qa/store/asset-detail/` · Maestro debug `_maestro_ios` / `_maestro_android`
- Log: `/tmp/e2e-qa-mobile-asset-detail-2.log`

## Next

`qa_fail_rollback` → Dev `/edit-mobile-feature` **Android-only** list live GET + company header trên emulator · rồi re-QA. **Cấm** chain review.
