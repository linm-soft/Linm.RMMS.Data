# HTML → native map — attendance-log

Cite SSOT `docs/html-to-native-map.md`. Feature deltas (`#sc-attendance-log`):

| Demo | Kit dual | Notes |
|------|----------|-------|
| `.nav-bar` / `.top-bar` | `LinmTopBar` | title **Chi tiết chấm công** |
| back `#i-chevron-left` | `LinmTopBar` leading | iOS text «Ngày công» · Android icon-only · `go('attendance-day')` |
| `.hero-time` | Display `heroWho` | `CheckInAt` HH:mm |
| `.badge` | `LinmBadge` | `InZone` |
| `.code` | Text `label` + `fieldText` | `Code` · «—» |
| `.row` Thời điểm / Tuyến / Lý trình / Trạng thái / Tọa độ / Trong vùng / Ghi chú | `LinmListRow` | bind BE · **cấm** invent |
| empty | `LinmEmptyChrome` | |
| toast | `LinmToast` | GET fail · missing id **chỉ** khi list thật sự thiếu `Id` · **cấm** empty capture · **cấm** `window.alert` |
| `.tab` | `LinmTabBar` | shell Tuần đường |

**Cấm:** map CTA · `LinmPrimaryButton` map · reuse supervise-detail title.

## Bind

| UI | Source |
|----|--------|
| timeHero | `CheckInAt` HH:mm local |
| code | `Code` |
| time | `CheckInAt` `yyyy-MM-dd HH:mm:ss` |
| route | `Route` |
| km | `KmPoint` |
| status | `Status` raw |
| gps | `Lat`,`Lng` 4 decimals |
| inZone | true/false → Trong vùng / Ngoài vùng |
