import fs from 'fs';

const mig =
  'D:/AI-QLBD/Linm.RMMS.WebService/api/shared/RMMS.Service.Migrations/Migrations/20260808115552_Schema_RmmsAssetTypes.cs';
const frag = fs.readFileSync(
  'D:/AI-QLBD/Linm.RMMS.Data/local-script/_asset-type-insertdata.fragment.cs',
  'utf8',
);

let src = fs.readFileSync(mig, 'utf8');
if (src.includes('InsertData')) {
  console.log('already patched');
  process.exit(0);
}

const re =
  /migrationBuilder\.CreateIndex\(\s*\r?\n\s*name:\s*"IX_rmms_asset_types_GroupCode_IsActive"/;
if (!re.test(src)) {
  console.error('marker not found');
  process.exit(1);
}

src = src.replace(
  re,
  `${frag.trimEnd()}\n\n            migrationBuilder.CreateIndex(\n                name: "IX_rmms_asset_types_GroupCode_IsActive"`,
);
fs.writeFileSync(mig, src);
console.log('patched seed into', mig);
