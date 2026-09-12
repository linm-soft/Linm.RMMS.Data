# HTML → Native map — patrol-offline (edit_page · replay)

**Feature:** `patrol-offline` · `#sc-patrol-offline` · `DES-MOB-PAT-OFFLINE`  
**Sources:** `ui/prototype/{ios,android}/index.html` (keep) · `_data-analy` § Delta · hash skip  
**changeScope:** `edit_page` · gap=`offline_sync_apply_checkins`

## Screen zones (unchanged selectors)

| Demo selector | Zone | Kit iOS | Kit Android | Notes |
|---------------|------|---------|-------------|-------|
| `.nav-bar` / `.top-bar` | Nav chrome | `LinmTopBar` text leading + trailing | same | back «Trang Chủ» · title · «Đồng bộ» |
| `.nav-btn` leading | Back | text + `chevron.left` | text + `ArrowBack` | `nav-back` |
| `.nav-title` | Title | TopBar center | TopAppBar | `offline.title` |
| `#btn-sync` | Sync CTA | text trailing | text | **replay** check-ins · không clear-all |
| `.seg` | Segment 2 | `LinmSegment` | `LinmSegment` | idx 0 check-in · 1 incident |
| `.offline-banner` | Weak signal | `LinmBanner` `.warning` | same | `#i-wifi-off` · ẩn empty |
| `.rich-card` | Card | custom / `LinmListRow` pattern | same | display |
| `.rc-thumb` | Thumb 56 | RoundedRect | same | |
| `.rc-title` / `.rc-line` / `.rc-status.warn` | Body + status | Text + strip | same | «Chờ gửi» ngắn |
| `.toast` | Feedback | `LinmToast` | `LinmToast` | N = apply OK · **cấm** alert |
| `[data-payload]` annotate | Hidden | local store | dual | sessionId + CreatePatrolCheckInRequest |

## Sync bind (Design lock)

| Demo action | Native | API |
|-------------|--------|-----|
| `#btn-sync` tap | replay pending `kind=checkIn` | `POST patrol/sessions/{sessionId}/check-ins` |
| after OK count>0 | optional receipt | `POST integration/sync/offline-batch` · RecordCount = synced |
| item remove | only HTTP 2xx | **cấm** clear fail / clear-all / clear incident |

## Entry wiring (reuse)

| Entry demo | Native route | Kit |
|------------|--------------|-----|
| Home tile Lưu trữ | push `PatrolOfflineView` | `LinmHomeTile` |
| Me row offline | same | `LinmListRow` + badge local |
| Patrol-home Đồng bộ | reuse slug | sibling · Defer stub OK |

## kit_missing_confirm

| Gap | Decision |
|-----|----------|
| TopBar text slots | **unchanged** prior implement_kit |
| Rich card | custom OK · **cấm** invent `LinmRichCard` |
| Hidden payload | store layer · **không** new UI control |

## Version meta

skillId=agent-design-mobile · skillVersion=2026.08.19.29 · generatedAt=2026-09-12T14:31:03.000Z · contentHash=sha256:patrol-offline-delta-apply-checkins-20260912 · feature=patrol-offline
