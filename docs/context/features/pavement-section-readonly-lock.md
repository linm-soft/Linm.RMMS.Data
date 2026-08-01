# Readonly / lock map — `pavement-section`

> erp-form-context Step **2d** · `field-readonly-lock-map.md`

| Field | Create | Edit | View |
|-------|--------|------|------|
| code | RO (BE gen) / editable nếu import | RO | RO |
| roadName | RW | RW | RO |
| provinceName | RW | RW | RO |
| kmFrom / kmTo | RW | RW | RO |
| structureType | RW | RW | RO |
| status | RW | RW | RO |
| manageUnit | RW | RW | RO |
| updatedAt / updatedBy | — | RO | RO |
| lengthKm | RW hoặc computed RO | same | RO |

**View mode:** section `pointer-events: none` · **cấm** disabled xám toàn form (parity phiếu thu).

**Lock sau duyệt (nếu có workflow sau):** TBD — P1 không khóa.
