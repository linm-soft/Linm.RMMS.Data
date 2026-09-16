# Handoff compact — review

schemaVersion: 1
feature: patrol-offline
packKind: list
role: review
status: confirmed
skillVersion: 2026.08.19.29
writtenAt: 2026-09-12T14:55:00.000Z
taskId: task_0e218573
slash: /agent-review-mobile
mode: feature_context
changeScope: edit_page
gap: offline_sync_apply_checkins
autoApprove: ON
e2eQa: ON
contentHash: sha256:patrol-offline-delta-apply-checkins-20260912
bffContentHash: sha256:patrol-offline-bff-apply-checkins-20260912
review_confirm: approve
post_review: skip
mfeStdUrl: —

## Decisions
- edit_page delta Review · apply-checkins · **approve** (autoApprove ON)
- Sync DoD dual: replay POST patrol/sessions/{id}/check-ins · remove only 2xx · offline-batch optional receipt
- Pipeline data_analy→qa all confirmed · hashes aligned · UNCLEAR none
- Must align 0 · QA ok:true · Dev VERIFY PASS · Review **cấm** build/e2e/start:std
- Step 4b N/A · cấm ERP.* · cấm GET queue · Incident P2 Accept · GAP-MOB-ACT-PAT-OFFLINE-01 Defer
- phase_to: **done** · post_review skip

## Screens / zones (ids only)
- DES-MOB-PAT-OFFLINE / #sc-patrol-offline
- DES-MOB-PAT-OFFLINE-NAV · #btn-sync (replay)
- SEG · BANNER · CARD · payload hidden sessionId+body
- store: qa/store/patrol-offline/ · A11/A9/A3/P6/P6-2 · ok:true

## API / tasks (ids only)
- POST patrol/sessions/{sessionId}/check-ins (primary apply)
- POST integration/sync/offline-batch (optional receipt)
- T-IOS-PAT-OFF-APPLY · T-AND-PAT-OFF-APPLY · T-QA-PAT-OFFLINE · T-REVIEW-* PASS
- T-BE/T-BFF/T-KIT n/a

## Artifacts
- review/findings.md · review/REVIEW-META.json
- full prior: implement/{ios,android}.md · qa/scenarios · qa/store

## Debt / next
- Pipeline complete · next visual `/edit-mobile-feature` only
- P2: PrivacyInfo · Android mappin/hint · Incident apply · store submit `/review-app-submit`
- GAP-MOB-ACT-PAT-OFFLINE-01 Defer

## UNCLEAR
- none
