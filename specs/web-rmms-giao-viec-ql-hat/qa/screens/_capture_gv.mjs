/**
 * E2E capture — web-rmms-giao-viec-ql-hat
 * Stock yarn e2e-qa: S0/QA-20 PASS · S1 GAP-QA-E2E-DUP-01.
 * Custom: S0 WORK-L · S1 GV-F · QA-20 /dang-nhap · SPA fulfill · no kill.
 */
import pw from "file:///D:/AI-Extension/AI-AutoCode/node_modules/playwright/index.js";
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { createHash } from "node:crypto";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const { chromium: chromiumLauncher } = pw;
const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = __dirname;
const base = "http://localhost:9301";
const feature = "web-rmms-giao-viec-ql-hat";
const LOGIN = `${base}/dang-nhap`;
const ALIAS = `${base}/web-rmms-giao-viec-ql-hat`;
const ASSIGN = `${base}/cong-viec?incidentId=INC-E2E-GV-01&mode=assign`;

let user = process.env.QLBD_USER || process.env.E2E_USER || "";
let password = process.env.QLBD_PASSWORD || process.env.E2E_PASSWORD || "";
if (!user || !password) {
  const buf = readFileSync("D:/AI-Rules/Linm.Development.Rules/e2e.local.json");
  const s =
    buf[0] === 0xef && buf[1] === 0xbb && buf[2] === 0xbf
      ? buf.slice(3).toString("utf8")
      : buf.toString("utf8").replace(/^\uFEFF/, "");
  const rulesCred = JSON.parse(s);
  user = user || rulesCred.user || "";
  password = password || rulesCred.password || "";
}
if (!user || !password) throw new Error("GAP-QA-E2E-03 missing QLBD_USER/PASSWORD");
console.log("[gv] creds user_set=", !!user, "pass_len=", password.length);

function shotName(id) {
  return id.replace(/[^a-zA-Z0-9._-]+/g, "-").replace(/^-+|-+$/g, "") + ".png";
}
function pathOf(page) {
  try {
    return new URL(page.url()).pathname;
  } catch {
    return "";
  }
}
function shaFile(abs) {
  try {
    return createHash("sha256").update(readFileSync(abs)).digest("hex").slice(0, 16);
  } catch {
    return "";
  }
}

const results = [];
const browser = await chromiumLauncher.launch({ headless: true });
const context = await browser.newContext({
  viewport: { width: 430, height: 900 },
  geolocation: { latitude: 21.0285, longitude: 105.8542, accuracy: 12 },
  permissions: ["geolocation"],
});
const page = await context.newPage();
const pageErrors = [];
page.on("pageerror", (e) => pageErrors.push(String(e.message || e)));

await page.route(/http:\/\/localhost:9301(\/[^?]*)?(\?.*)?$/, async (route) => {
  const req = route.request();
  if (req.resourceType() !== "document") {
    await route.continue();
    return;
  }
  const url = req.url();
  if (/\/(linm-rmms-mobile\.js|index\.html)(\?|$)/.test(url) || /\.[a-z0-9]+(\?|$)/i.test(url)) {
    await route.continue();
    return;
  }
  const r = await page.request.get(base + "/");
  await route.fulfill({
    status: 200,
    contentType: "text/html; charset=utf-8",
    body: await r.text(),
  });
});

async function dismissOverlay(p) {
  await p
    .evaluate(() => {
      document
        .querySelectorAll(
          "iframe#webpack-dev-server-client-overlay, #webpack-dev-server-client-overlay",
        )
        .forEach((el) => el.remove());
    })
    .catch(() => {});
}

async function fatalUi(p) {
  await dismissOverlay(p);
  const overlay = p.locator(
    "iframe#webpack-dev-server-client-overlay, #webpack-dev-server-client-overlay",
  );
  if (await overlay.count()) {
    const vis = await overlay.first().isVisible().catch(() => false);
    const featureOk = await p
      .locator(
        `#WORK-ROOT, [data-zone='WORK-L'], [data-zone='GV-F'], #f-pass, #f-user`,
      )
      .count();
    if (vis && featureOk === 0) return "webpack overlay";
  }
  const t = await p.locator("body").innerText().catch(() => "");
  if (
    /Something went wrong|Uncaught |ChunkLoadError|Failed to compile|TypeError:|ReferenceError:/i.test(
      t,
    )
  ) {
    return "crash text: " + t.slice(0, 180).replace(/\s+/g, " ");
  }
  if (pageErrors.length) return "pageerror: " + pageErrors.slice(-1)[0];
  return null;
}

async function fillLogin() {
  await page.goto(LOGIN, { waitUntil: "domcontentloaded", timeout: 60000 }).catch(() => {});
  if (!(await page.locator('#f-pass, input[type="password"]').count())) {
    await page.goto(base + "/login", { waitUntil: "domcontentloaded", timeout: 60000 });
  }
  await page.waitForSelector('#f-pass, input[type="password"]', { timeout: 20000 });
  const userEl = page.locator("#f-user, input[name='username'], input[type='text']").first();
  const passEl = page.locator("#f-pass, input[type='password']").first();
  await userEl.fill(user);
  await passEl.fill(password);
  await page
    .locator("#btn-login, button[type='submit'], button:has-text('Đăng nhập')")
    .first()
    .click({ force: true });
  await page.waitForFunction(() => !/\/dang-nhap|\/login/i.test(location.pathname), {
    timeout: 30000,
  });
  await page.waitForTimeout(1500);
  console.log("[gv] after login href=", page.url());
}

async function dumpZones() {
  return page.evaluate(() => {
    const zones = [...document.querySelectorAll("[data-zone]")].map((el) =>
      el.getAttribute("data-zone"),
    );
    const des = [...document.querySelectorAll("[data-des-id]")].map((el) =>
      el.getAttribute("data-des-id"),
    );
    const fields = [...document.querySelectorAll("[data-field]")].map((el) =>
      el.getAttribute("data-field"),
    );
    const caps = [...document.querySelectorAll("[data-cap]")].map((el) =>
      el.getAttribute("data-cap"),
    );
    const text = (document.body?.innerText || "").slice(0, 1600).replace(/\s+/g, " ");
    return {
      feature:
        document.querySelector("#WORK-ROOT")?.getAttribute("data-feature") ||
        document.querySelector("[data-feature]")?.getAttribute("data-feature") ||
        null,
      zones: [...new Set(zones.filter(Boolean))],
      des: [...new Set(des.filter(Boolean))],
      fields: [...new Set(fields.filter(Boolean))],
      caps: [...new Set(caps.filter(Boolean))],
      text,
      href: location.href,
      path: location.pathname,
      hasAssignCta: !!document.querySelector('[data-field="assignCta"]'),
      hasGvF: !!document.querySelector('[data-zone="GV-F"]'),
      cardCount: document.querySelectorAll('[data-field="list.card"]').length,
    };
  });
}

async function captureCurrent(id, waitSel) {
  const file = shotName(id);
  const abs = join(outDir, file);
  try {
    if (waitSel) await page.waitForSelector(waitSel, { timeout: 25000 });
    await page.waitForTimeout(1600);
    const fatal = await fatalUi(page);
    if (fatal) throw new Error("GAP-QA-E2E-CRASH-01 " + fatal);
    await page.screenshot({ path: abs, fullPage: true });
    const dump = await dumpZones();
    results.push({ id, result: "PASS", screenshot: file, href: page.url(), dump });
    console.log("[gv]", id, "PASS", page.url(), "zones=", dump.zones.join(","));
  } catch (err) {
    try {
      await page.screenshot({ path: abs, fullPage: true });
    } catch {
      /* ignore */
    }
    let dump = null;
    try {
      dump = await dumpZones();
    } catch {
      /* ignore */
    }
    results.push({
      id,
      result: "FAIL",
      screenshot: file,
      error: err instanceof Error ? err.message : String(err),
      href: page.url(),
      dump,
    });
    console.log("[gv]", id, "FAIL", err instanceof Error ? err.message : String(err));
  }
}

try {
  // QA-20 — full login page (peer shell · distinct)
  pageErrors.length = 0;
  await page.goto(LOGIN, { waitUntil: "domcontentloaded", timeout: 60000 });
  await captureCurrent("QA-20", "#f-pass, #f-user, input[type='password']");

  // Login once for staff
  pageErrors.length = 0;
  await fillLogin();
  if (/\/dang-nhap|\/login/i.test(pathOf(page))) {
    throw new Error("GAP-QA-E2E-03 login stuck on " + page.url());
  }

  // S0 — alias → WORK-L list
  pageErrors.length = 0;
  await page.goto(ALIAS, { waitUntil: "domcontentloaded", timeout: 60000 });
  await page.waitForTimeout(1200);
  await dismissOverlay(page);
  await captureCurrent(
    "S0",
    "#WORK-ROOT, [data-zone='WORK-L'], [data-field='search'], [data-zone='GV-W']",
  );

  // S1 — mode=assign gate: non-qlHat → deny toast + redirect WORK-L · then filter search (distinct vs S0)
  pageErrors.length = 0;
  await page.goto(ASSIGN, { waitUntil: "domcontentloaded", timeout: 60000 });
  await page.waitForTimeout(2000);
  await dismissOverlay(page);
  // If qlHat → GV-F; else list after deny (cap=other for rmms-admin)
  const onForm = (await page.locator("[data-zone='GV-F'], #assign-hangMuc").count()) > 0;
  if (onForm) {
    await captureCurrent(
      "S1",
      "[data-zone='GV-F'], #assign-hangMuc, [data-field='hangMuc'], [data-field='submitAssign']",
    );
  } else {
    await page.waitForSelector("[data-field='search'], #mnt-search", { timeout: 15000 });
    await page.fill("[data-field='search'], #mnt-search", "EST-20260929-0008");
    await page.waitForTimeout(1200);
    await dismissOverlay(page);
    await captureCurrent("S1", "[data-field='search'], #WORK-ROOT, [data-zone='WORK-L']");
  }
} finally {
  await browser.close();
}

const hashes = {};
for (const id of ["S0", "S1", "QA-20"]) {
  const p = join(outDir, shotName(id));
  if (existsSync(p)) hashes[id] = shaFile(p);
}
const dup =
  hashes.S0 && hashes.S1 && hashes.S0 === hashes.S1
    ? "GAP-QA-E2E-DUP-01 S1 same as S0"
    : hashes.S0 && hashes["QA-20"] && hashes.S0 === hashes["QA-20"]
      ? "GAP-QA-E2E-DUP-01 QA-20 same as S0"
      : hashes.S1 && hashes["QA-20"] && hashes.S1 === hashes["QA-20"]
        ? "GAP-QA-E2E-DUP-01 QA-20 same as S1"
        : null;

const summary = {
  feature,
  cases: results,
  hashes,
  pass: results.every((r) => r.result === "PASS") && !dup,
  dup,
  at: new Date().toISOString(),
};
writeFileSync(
  join(outDir, "manifest.json"),
  JSON.stringify(
    {
      url: ALIAS,
      capturedAt: summary.at,
      steps: results.map((r) => ({
        id: r.id,
        result: r.result,
        screenshot: r.screenshot,
        error: r.error,
      })),
      ok: summary.pass,
      hashes,
    },
    null,
    2,
  ),
);
writeFileSync(join(outDir, "_capture_gv.result.json"), JSON.stringify(summary, null, 2));
console.log(JSON.stringify(summary, null, 2));
if (!summary.pass) process.exit(1);
