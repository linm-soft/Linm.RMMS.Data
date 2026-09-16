# Align UX — incident-chat (live vs demo)

| Field | Value |
|-------|-------|
| feature | `incident-chat` |
| this role | `qa` · `/review-align-ux-ios-android` |
| status | **Aligned** |
| Must open | **0** |
| CLI e2e | `ok:true` · **≠** visual (Read CORE done) |
| demo | `ui/prototype/{ios,android}/index.html` · `#i-chat` → `toastChat()` «Trao đổi sự cố» |
| live | `qa/screens/A3-CORE.png` · `P6-CORE.png` · `P6-CORE-2.png` |
| updatedAt | `2026-08-29T11:14:51.000Z` |
| taskId | `task_52378a1c` |

## Vision checklist

| Demo tile / zone | iOS A3-CORE | Android P6-CORE | Gap |
|------------------|-------------|-----------------|-----|
| `#i-chat` bubble on `.rc-actions` | chat bubble glyph on card | same | none |
| Toast «Trao đổi sự cố» | blue bottom toast + X | blue bottom toast + X | none |
| stopPropagation · stay list | `#sc-incident-list` visible | same | none |
| No sheet / composer P1 | none | none | none |
| No watermark / process | none | none | none |
| Dual copy parity | «Trao đổi sự cố» | «Trao đổi sự cố» | none |

## Verdict

**Aligned** · Must **0** · **cấm** GAP-MOB-E2E-VIS-01 · **cấm** GAP-MOB-UX-COMP-03.

Parent card live seed `VD-20260829-0001` vs demo `SC-2401` = parent list data (toast **không** bind id) · **không** Must.

## Handoff

→ `/agent-review-mobile` · phase `review` pending.
