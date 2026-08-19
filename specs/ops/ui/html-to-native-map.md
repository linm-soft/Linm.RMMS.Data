# HTML → native map — ops (mobile list · Thông báo)

> Status: **confirmed** · `/agent-design-mobile` · task `task_7e65792d`  
> SSOT product: `docs/html-to-native-map.md` · cite hàng dưới — **cấm** đoán kit.

| | |
|--|--|
| Feature | `ops` |
| Demo | `ui/prototype/{ios,android}/index.html` `#sc-ops` |
| Kit gate | **reuse** list · `kit_missing_confirm` N/A |

## Zone → kit

| Demo zone / element | Map row (docs) | SwiftUI | Compose | e2e |
|---------------------|----------------|---------|---------|-----|
| `#sc-ops` | screen root | `OpsView` / `OpsScreen` | same | `sc-ops` |
| nav back `#i-chevron-left` | A top bar / nav chrome | `LinmTopBar` leading | `LinmTopBar` | `nav-back` |
| title Thông báo | A top bar title | `LinmTopBar` title | same | — |
| `.card-group` / `.row` | list row | `LinmListRow` | `LinmListRow` | `row-ops-{id}` |
| `.badge blue` | status pill info | `LinmBadge` info | `LinmBadge` info | — |
| `.badge gray` | status pill neutral | `LinmBadge` neutral | `LinmBadge` neutral | — |
| toast mark-read | A toast / banner | `LinmToast` | `LinmToast` | — |
| Me entry row | parent reuse | `MeView` row | `MeScreen` row | `row-ops` |
| Home notify | hero tools | `LinmNotifyButton` | `LinmNotifyButton` | `btn-notify` / `hero-tools` |

## Tokens

| CSS / design | Hex / value | Native |
|--------------|-------------|--------|
| primary | `#0C84C0` | `LinmTokens.primary` |
| surface | `#F2F2F7` | `LinmTokens.surface` |
| row title | ≥16 | `fieldText` |
| badge label | 13 | badge caption |

## Cấm

- Raw `List`/`LazyColumn` row chrome · M3 `Badge` · `UIAlert` / `AlertDialog`
- WebView HTML-as-app · `mfeStdUrl` · invent `api/v1/ops`
- Ship watermark «bản Gói N» / device label / «gen realapp»
- Filter toolbar · form create · Command badge on list

## Version meta

skillId=agent-design-mobile · generatedAt=2026-08-19T12:40:00.000Z · taskId=task_7e65792d
