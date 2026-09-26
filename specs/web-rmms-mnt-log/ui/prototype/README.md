# Prototype — web-rmms-mnt-log

Design gate: **prototype + reviewUrl** — `design_confirm=approve` (autoApprove=ON).

| | |
|--|--|
| Feature | `web-rmms-mnt-log` |
| Title | Nhật ký công việc |
| Pack kind | `list` |
| Zone | `#sc-mnt-log` · `DES-MOB-MNT-LOG` · `data-zone=WORK-G` |
| MFE | `Linm.Web.RMMS.Mobile` |
| Demo SSOT | **N/A** · hash skip · **cấm** re-scan |

## reviewUrl

`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-log/ui/prototype/index.html`

| Query | Effect |
|-------|--------|
| (default) | Timeline newest-first · WO in_progress |
| `?empty=1` | thiếu id · empty |
| `?fail=1` | 404 · empty + toast |
| `?done=1` | status done · row.done |

## HARD

- Phone max-width 430 · readonly · **cấm** Primary write CTA · **cấm** GPS
- Control = controlHint · **cấm** invent `/logs`
- Labels prototype VN để review · Dev = `useFormOptions`
