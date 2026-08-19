# Team lead — Task — me (mobile hub)

| Field | Value |
|-------|-------|
| feature | `me` |
| packKind | **`hub`** |
| route_confirm | **route_a** — Login ngoài tab → Tab 5 · tab Tôi = `#sc-me` |
| thisAction | Hub `#sc-me` only |
| taskId | `task_84e8e0e2` |
| updatedAt | `2026-08-19T02:20:00.000Z` |

## Source lock

| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `mobile-bff/api/v1` |
| be | `Linm.RMMS.WebService` · **cấm ERP.*** |
| kit | `LinmListRow` implement_kit dual this turn |

### route_a

Cold start không token → Login. Có phiên → Tab 5 chọn Trang Chủ. Tab **Tôi** → Me hub. Đăng xuất hub hoặc Home `btn-logout` → Login.

## Tasks

| id | layer | status | DoD |
|----|-------|--------|-----|
| **T-KIT-LISTROW** | kit | **done** | `LinmListRow` tap/leading/chevron/badge iOS+Android + gallery |
| **T-IOS-ME** | ios | **done** | `Presentation/Features/Me` · **`LinmTabBar`** 5 · `tabLabel` **10** · Tuần đường `location.fill` · GET `auth/profile` · `xcodebuild` dest **iPhone 17 Pro** |
| **T-AND-ME** | android | **done** | `presentation/feature/me` · **`LinmTabBar`** 5 · `tabLabel` **10** · `Place` · same API · `assembleDebug` |
| **T-BE-API** | be | **n/a** | Auth profile live |
| **T-BE-MIG** | be | **n/a** | |

Sibling `patrol-offline` · `feedback` · `cam-view` · `ops` = analy enqueue `pending_confirm` — **cấm** implement this pack.

## Version meta

skillId=agent-tl-mobile · skillVersion=2026.08.19.15 · workflowVersion=2026.08.19.19 · generatedAt=2026-08-19T02:20:00.000Z
