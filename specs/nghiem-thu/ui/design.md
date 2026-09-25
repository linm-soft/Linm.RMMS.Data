# Design — nghiem-thu (mobile list)

| Field | Value |
|-------|-------|
| feature | `nghiem-thu` |
| title | [Mobile] [Tuần đường] -> Công tác nghiệm thu |
| role | `/agent-design-mobile` |
| status | **confirmed** (autoApprove=ON · `design_confirm=approve`) |
| packKind | **`list`** |
| changeScope | `edit_page` · § Delta = MAU-10 Label + ResultCode badge · keep list chrome |
| formPattern | **N/A** on list slug · create/detail = sibling sheets (`pending_confirm`) |
| taskId | `task_5999afb9` |
| priorPo | `po/requirement.md` **confirmed** · `handoff/po-compact.md` · `task_44dce651` |
| priorDa | `_data-analy/nghiem-thu-control-hint.md` + `nghiem-thu-real-data.md` **done** · hash skip · **cấm** re-scan (`GAP-DES-DEMO-RESCAN-01`) |
| contentHash | `sha256:1044ba719edda88d256d5c2a780cd2293f2fab87e2a39acdbb86001fad6ff659` |
| planCite | `docs/plan/nghiem-thu-mau/{README,MAU-10,CHI-SO,SCHEMA}.md` |
| real_view_parity | `v1` |
| updatedAt | `2026-09-20T00:55:00.000Z` |

## § Keep (confirmed · không đổi)

- Web Field Kind B Full-page · Leave · FileMulti — **OUT** queue native turn này
- List chrome: back · title · Tạo · SearchField · EmptyChrome · toastFail · Tab shell `field`
- Mobile.Bff catch-all · BE Patrol `api/v1/patrol/nghiem-thu` · FileService · **cấm ERP.***
- Ship base GAPs LIST/DATA/ROW/CREATE/BFF/FILTER — delta = MAU + Result overlay

## § Delta Current vs New (`edit_page` · cite MAU-10 + CHI-SO)

| ID | Current (ship interim) | New (Design DoD) | Surface |
|----|------------------------|------------------|---------|
| GAP-MOB-NT-MAU-01 | rowSub «Mẫu 03» / «Mẫu nghiệm thu 0N» | `{TemplateLabel MAU-10} · {Route} Km {KmFrom}` · **cấm** «Mẫu nghiệm thu NN» | list |
| GAP-MOB-NT-RESULT-01 | chỉ badge Status | + ResultBadge `pass`/`fail`/`deduct` → Đạt / Không đạt / Khấu trừ · null → **ẩn** | list |
| GAP-MOB-NT-ROWSUB-01 | raw mau-0N | Label từ init-data TemplateTypes | list |
| GAP-MOB-NT-SCORE-01 | — | scores[] **OUT** list · owner create/detail | sibling |
| GAP-MOB-NT-HUB-01 | hub sub placeholder | «10 công việc BDTX · ảnh / video hiện trường» | hub cite |

## reviewUrl (dual — REQUIRED)

| Platform | Path | reviewUrl |
|----------|------|-----------|
| iOS | `ui/prototype/ios/index.html` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/ui/prototype/ios/index.html` |
| iOS empty | `?empty=1` | `…/ios/index.html?empty=1` |
| iOS fail | `?fail=1` | `…/ios/index.html?fail=1` |
| Android | `ui/prototype/android/index.html` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/ui/prototype/android/index.html` |
| Android empty | `?empty=1` | `…/android/index.html?empty=1` |
| Android fail | `?fail=1` | `…/android/index.html?fail=1` |

**peerStdUrl:** `http://localhost:9304/patrol` (web ref only · **cấm** `mfeStdUrl` native) · **cấm** `yarn start:std` / e2e / Step 4b ở role này.

## Frame / chrome

| | iOS | Android |
|--|-----|---------|
| Frame | 390×844 | 412×915 |
| Back | `#i-chevron-left` + **Tuần đường** | icon-btn chevron only |
| Title | **Công tác nghiệm thu** 17 | TopAppBar ~20 |
| Trailing | TextButton **Tạo** | same |
| Shell | Tab 5 · tab **`field`** active | Nav 5 · cùng index |
| pack tabs | **none** · **cấm** invent (`GAP-TAB-01`) | same |

## DES table

| DES | Zone | iOS | Android | Notes |
|-----|------|-----|---------|-------|
| `DES-MOB-NGHIEM-THU` | `#sc-nghiem-thu` | push từ hub `#row-nghiem-thu` | same | `data-tab="field"` |
| `DES-MOB-NT-SEARCH` | SearchField | `LinmSearchField` `#i-search` | same | **Tìm mẫu nghiệm thu…** · `?search=` |
| `DES-MOB-NT-STATUS` | StatusBadge | `.badge` Status | same | draft/in_progress/done/cancelled |
| `DES-MOB-NT-RESULT` | ResultBadge | `.badge` Result · stack dưới Status | same | ẩn khi `ResultCode` null |
| Row | `LinmListRow` | `#i-check` + Code ≥16 · sub MAU-10 13 · badges · `#i-chevron-right` | same | bind §B real-data |
| EmptyChrome | empty | «Chưa có phiếu nghiệm thu» | same | `?empty=1` · **cấm** fake NT-* |
| Toast fail | `#toast` | `LinmToast` | Snackbar | `?fail=1` · **cấm** alert |
| Hub entry | `#row-nghiem-thu` | trên `patrol-home` | same | sub BDTX · **không** reimplement |

## Status / Result badge map (SSOT)

| API | Label VN | Tone |
|-----|----------|------|
| `draft` | Nháp | blue |
| `in_progress` | Đang NT | info |
| `done` | Hoàn thành | green |
| `cancelled` | Hủy | gray |
| `pass` | Đạt | green |
| `fail` | Không đạt | red |
| `deduct` | Khấu trừ | orange |
| `(null)` Result | — | **ẩn** trên list |

## SF ↔ Material icon

| `#i-*` | Motif | SF Symbol | Material |
|--------|-------|-----------|----------|
| `#i-chevron-left` | `M15 5l-7 7 7 7` | `chevron.left` | `ArrowBack` |
| `#i-chevron-right` | `M9 5l7 7-7 7` | `chevron.right` | `ChevronRight` |
| `#i-search` | circle + stem | `magnifyingglass` | `Search` |
| `#i-check` | check path | `checkmark` | `Check` |
| shell Tab 5 | home/mappin/warning/wrench/person | same motif dual | same |

**Cấm** invent `#i-*` · **cấm** lệch `d=` dual.

## Copy VN (SSOT — parity dual)

| Zone | Copy |
|------|------|
| title | Công tác nghiệm thu |
| back (iOS) | Tuần đường |
| trail | Tạo |
| search | Tìm mẫu nghiệm thu… |
| empty | Chưa có phiếu nghiệm thu / Nhấn Tạo để lập phiếu mới |
| toastFail | Không tải được danh sách nghiệm thu |
| rowSub example | Vệ sinh / vá ổ gà mặt đường · QL.1 Km 12+100 |
| hub sub | 10 công việc BDTX · ảnh / video hiện trường |

**Cấm:** «Mẫu nghiệm thu NN» · watermark Gói · `demoItems` SSOT · invent TemplateType value.

## Proto preview rows (không ship)

| Code | Sub (MAU-10) | Status | Result |
|------|--------------|--------|--------|
| NT-20260906-0001 | Vệ sinh / vá ổ gà mặt đường · QL.1 Km 12+100 | Nháp | — (ẩn) |
| NT-20260905-0012 | Hót sụt · ảnh + video hiện trường | Hoàn thành | Đạt |

## BFF bind (Design note · SA schema)

| Zone | Method · Path |
|------|----------------|
| List | `GET mobile-bff/api/v1/patrol/nghiem-thu` |
| Search | same + `?search=` |
| Labels / ResultCodes | `GET …/init-data` TemplateTypes(+criteria) · ResultCodes |
| Scores / FileMulti | **OUT** list · create/detail |
| Schema | `Schema_NghiemThuMau` → SA · Design **SKIP** Step 4b |

## design_confirm

**approve** (autoApprove=ON) · Must demo-parity = 0 · handoff SA.

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-design-mobile |
| skillVersion | 2026.08.25.01 |
| generatedAt | 2026-09-20T00:55:00.000Z |
| contentHash | sha256:1044ba719edda88d256d5c2a780cd2293f2fab87e2a39acdbb86001fad6ff659 |

---
<!-- Version meta: skillId=agent-design-mobile contentHash=sha256:1044ba719edda88d256d5c2a780cd2293f2fab87e2a39acdbb86001fad6ff659 -->
