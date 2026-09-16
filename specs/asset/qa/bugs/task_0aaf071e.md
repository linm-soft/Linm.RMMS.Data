# QA bugs — asset · task_0aaf071e

## GAP-QA-STORE-03 (Must)
- Maestro Android assert `#row-asset-0` FAIL on `#sc-asset-list`.
- Evidence: `qa/screens/_maestro_android/android-3` · hierarchy `asset-list-empty` · P6-CORE EmptyChrome.

## GAP-MOB-ASSET-AND-FETCH-01 (Must)
- Emulator mở list nhưng **0** `GET .../asset/road-assets` trong Mobile.Bff log (`10.0.2.2`).
- Có traffic And: login · session-window · asset-types · road-routes · asset-candidates — **không** road-assets.
- Host/iOS `GET road-assets` → 200 + items; Android EmptyChrome «Chưa có tài sản».
- Prior fix `task_fa241430` (`SideEffect` + `LaunchedEffect(Unit)` Appear) **VERIFY build PASS** nhưng **runtime gap còn** — Appear→`FetchAssetListUseCase`→OkHttp chưa emit trên emulator.
- Fix hint (Dev): trace `AssetListViewModel.load` / use-case / Hilt binding trên emulator; confirm APK e2e chứa Appear fix; optional DisposableEffect(Lifecycle) Resume fetch; logcat Appear/load.

## GAP-MOB-UX-DUAL-01 (Must)
- iOS A3-CORE: live rows · Android P6-CORE: empty — dual not aligned.

## Non-block notes
- `auth/profile` Android → BFF rewrite log `web-bff` 500 (login vẫn 200).
- Live-only EmptyChrome đúng khi BE empty — **không** áp dụng (BE có data).
