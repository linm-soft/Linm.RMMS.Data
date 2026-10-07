import { chromium } from "playwright";
import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = __dirname;
const base = "http://localhost:9301";
/** Live SSOT: window = /m/{slug} · memory = /{slug} (paths.ts). */
const featurePath = "/m/ban-do-tuan";
const homePath = "/m/trang-chu";
const loginPath = "/m/dang-nhap";
const featureUrl = base + featurePath;
const homeUrl = base + homePath;
const require = createRequire(import.meta.url);

let chromiumLauncher = chromium;
try {
  require.resolve("playwright");
} catch {
  const autoPw = createRequire("D:/AI-Extension/AI-AutoCode/package.json");
  chromiumLauncher = autoPw("playwright").chromium;
}

const rulesCred = JSON.parse(
  readFileSync("D:/AI-Rules/Linm.Development.Rules/e2e.local.json", "utf8"),
);
const user = process.env.QLBD_USER || process.env.E2E_USER || rulesCred.user || "";
const password =
  process.env.QLBD_PASSWORD || process.env.E2E_PASSWORD || rulesCred.password || "";
if (!user || !password) throw new Error("GAP-QA-E2E-03 missing QLBD_USER/PASSWORD");

function shotName(id) {
  return id.replace(/[^a-zA-Z0-9._-]+/g, "-").replace(/^-+|-+$/g, "") + ".png";
}

const results = [];
const browser = await chromiumLauncher.launch({ headless: true });
const context = await browser.newContext({
  viewport: { width: 430, height: 900 },
  geolocation: { latitude: 21.0285, longitude: 105.8542 },
  permissions: ["geolocation"],
});
const page = await context.newPage();
const pageErrors = [];
page.on("pageerror", (e) => pageErrors.push(String(e.message || e)));

/** Dev server deep-link returns 404 HTML — fulfill document nav with index. */
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

async function dismissOverlay() {
  for (let i = 0; i < 25; i++) {
    const ov = page.locator(
      "iframe#webpack-dev-server-client-overlay, #webpack-dev-server-client-overlay",
    );
    if (!(await ov.count()) || !(await ov.first().isVisible().catch(() => false))) return;
    await page.evaluate(() => {
      document
        .querySelectorAll(
          "iframe#webpack-dev-server-client-overlay, #webpack-dev-server-client-overlay",
        )
        .forEach((el) => el.remove());
    });
    await page.waitForTimeout(300);
  }
}

/** Standalone MemoryRouter: mount không sync window → dùng popstate để sync. */
async function navigateMemory(windowPath) {
  await page.evaluate((p) => {
    window.history.pushState(null, "", p);
    window.dispatchEvent(new PopStateEvent("popstate"));
  }, windowPath);
  await page.waitForTimeout(600);
  await dismissOverlay();
}

async function fatalUi() {
  await dismissOverlay();
  const t = await page.locator("body").innerText().catch(() => "");
  if (
    /Something went wrong|Uncaught |ChunkLoadError|Failed to compile|TypeError:|ReferenceError:/i.test(
      t,
    )
  ) {
    return "crash text: " + t.slice(0, 180).replace(/\s+/g, " ");
  }
  if (/Trang không tìm thấy|không tồn tại hoặc đã bị di chuyển/i.test(t)) {
    return "spa-404: " + t.slice(0, 120).replace(/\s+/g, " ");
  }
  const real = pageErrors.filter(
    (e) =>
      /Module build failed|Failed to compile|ChunkLoadError|TypeError|ReferenceError/i.test(e) &&
      !/removeChild/i.test(e),
  );
  if (real.length) return "pageerror: " + real.slice(-1)[0];
  return null;
}

async function login() {
  await page.goto(base + loginPath, { waitUntil: "domcontentloaded", timeout: 60000 });
  await navigateMemory(loginPath);
  await page.waitForSelector(
    '#f-pass, input[name="password"], input[type="password"], input[name="username"]',
    { timeout: 20000 },
  );
  await dismissOverlay();
  const userSel = page
    .locator('#f-user, input[name="username"], input[name="userName"], input[type="text"]')
    .first();
  const passSel = page.locator('#f-pass, input[name="password"], input[type="password"]').first();
  await userSel.fill(user);
  await passSel.fill(password);
  await Promise.all([
    page
      .waitForResponse(
        (r) => /auth\/login/i.test(r.url()) && r.status() < 500,
        { timeout: 25000 },
      )
      .catch(() => null),
    page
      .locator('#btn-login, button[type="submit"], button:has-text("Đăng nhập")')
      .first()
      .click({ force: true }),
  ]);
  await page.waitForTimeout(2000);
  await dismissOverlay();
  const hasToken = await page.evaluate(() => !!localStorage.getItem("auth_token"));
  if (!hasToken) throw new Error("GAP-QA-E2E-03 login no auth_token");
}

async function dumpZones() {
  return page.evaluate(() => {
    const root = document.querySelector(
      '[data-feature="web-rmms-patrol-map"], [data-feature="web-rmms-home"]',
    );
    const zones = [...document.querySelectorAll("[data-zone]")].map((el) =>
      el.getAttribute("data-zone"),
    );
    const ids = [
      "gridPatrolMap",
      "navBack",
      "mapHost",
      "map-patrol-host",
      "sc-patrol-map",
      "btn-pin-here",
      "ci-chainage-km",
      "ci-chainage-label",
    ].filter((id) => !!document.getElementById(id) || !!document.querySelector(`[data-testid="${id}"]`));
    const canvas = !!document.querySelector(
      ".maplibregl-canvas, .mapboxgl-canvas, [data-testid='map-patrol-host'] canvas, canvas",
    );
    const text = (document.body?.innerText || "").slice(0, 900).replace(/\s+/g, " ");
    return {
      feature: root?.getAttribute("data-feature") || null,
      zones: [...new Set(zones)],
      ids,
      canvas,
      text,
      href: location.href,
    };
  });
}

async function captureCurrent(id, waitSel) {
  const file = shotName(id);
  const abs = join(outDir, file);
  try {
    await dismissOverlay();
    if (waitSel) await page.waitForSelector(waitSel, { timeout: 45000 });
    await page.waitForTimeout(1800);
    await dismissOverlay();
    const fatal = await fatalUi();
    if (fatal) throw new Error("GAP-QA-E2E-CRASH-01 " + fatal);
    await page.screenshot({ path: abs, fullPage: true });
    const dump = await dumpZones();
    if (id === "S0" || id === "QA-20") {
      if (dump.feature && dump.feature !== "web-rmms-patrol-map") {
        throw new Error("GAP-QA-E2E-MAP-01 wrong feature " + dump.feature);
      }
      if (!dump.zones?.includes("PM-00") && !dump.ids?.includes("sc-patrol-map")) {
        throw new Error(
          "GAP-QA-E2E-MAP-01 patrol surface missing: " +
            JSON.stringify({ zones: dump.zones, ids: dump.ids }),
        );
      }
      if (!dump.canvas && !dump.ids?.includes("map-patrol-host")) {
        throw new Error("GAP-QA-E2E-MAP-01 map canvas/host missing");
      }
      if (/web-rmms-patrol-map/i.test(dump.href || "") && !/ban-do-tuan|patrol-map|field\/map/i.test(dump.href || "")) {
        /* legacy STATUS slug may 404 — already guarded by spa-404 */
      }
    }
    if (id === "S1") {
      if (
        !dump.ids?.includes("gridPatrolMap") &&
        !/Bản đồ tuần|Tuần đường|patrolMap|gridPatrolMap/i.test(dump.text || "")
      ) {
        throw new Error("GAP-QA-E2E-PEER-01 Home gridPatrolMap missing");
      }
    }
    results.push({ id, result: "PASS", screenshot: file, href: page.url(), dump });
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
  }
}

try {
  await login();

  // S0 — Patrol Map (live /m/ban-do-tuan)
  {
    await navigateMemory(featurePath);
    await page
      .waitForResponse(
        (r) => /patrol\/sessions|gis\/tiles|gis\/streets/i.test(r.url()) && r.status() < 500,
        { timeout: 25000 },
      )
      .catch(() => null);
    await captureCurrent(
      "S0",
      '[data-feature="web-rmms-patrol-map"], [data-testid="sc-patrol-map"], [data-testid="map-patrol-host"]',
    );
  }

  // S1 — peer Home entry (#gridPatrolMap)
  {
    await navigateMemory(homePath);
    await captureCurrent(
      "S1",
      '[data-feature="web-rmms-home"] #gridPatrolMap, #gridPatrolMap, [data-field="gridPatrolMap"]',
    );
  }

  // QA-20 — Home #gridPatrolMap → /tuan-duong hub → #patrol-map → /ban-do-tuan (JWT kept)
  {
    const entry = page.locator("#gridPatrolMap, [data-field='gridPatrolMap']").first();
    if (await entry.count()) {
      await entry.click();
      await dismissOverlay();
      await page.waitForTimeout(800);
      const hubMap = page
        .locator(
          "[data-testid='row-quick-patrol-map'], #patrol-map, [data-field='patrol-map'], a[href*='ban-do-tuan']",
        )
        .first();
      if (await hubMap.count()) {
        await hubMap.click();
        await dismissOverlay();
      } else {
        await navigateMemory(featurePath);
      }
      await page.waitForSelector(
        '[data-feature="web-rmms-patrol-map"], [data-testid="sc-patrol-map"]',
        { timeout: 45000 },
      );
      await page.waitForTimeout(800);
      await captureCurrent(
        "QA-20",
        '[data-feature="web-rmms-patrol-map"], [data-testid="sc-patrol-map"]',
      );
    } else {
      await navigateMemory(featurePath);
      await captureCurrent(
        "QA-20",
        '[data-feature="web-rmms-patrol-map"], [data-testid="sc-patrol-map"]',
      );
    }
  }
} catch (err) {
  results.push({
    id: "FATAL",
    result: "FAIL",
    error: err instanceof Error ? err.message : String(err),
  });
} finally {
  await browser.close();
}

const hashes = {};
for (const id of ["S0", "S1", "QA-20"]) {
  try {
    const buf = readFileSync(join(outDir, shotName(id)));
    hashes[id] = buf.length + ":" + buf.slice(0, 64).toString("hex");
  } catch {
    hashes[id] = null;
  }
}
const dup =
  hashes.S0 && hashes.S1 && hashes.S0 === hashes.S1
    ? "GAP-QA-E2E-DUP-01 S1 same as S0"
    : null;

const ok =
  ["S0", "S1", "QA-20"].every((id) => results.some((r) => r.id === id && r.result === "PASS")) &&
  !results.some((r) => r.result === "FAIL") &&
  !dup;
writeFileSync(
  join(outDir, "manifest.json"),
  JSON.stringify(
    {
      url: featureUrl,
      capturedAt: new Date().toISOString(),
      method:
        "capture_patrol_map · /m/dang-nhap · popstate MemoryRouter · phone 430 · S0 /m/ban-do-tuan · S1 /m/trang-chu #gridPatrolMap · QA-20 click→map · geo · no kill worker",
      liveStdUrl: featureUrl,
      legacyStatusUrl: "http://localhost:9301/web-rmms-patrol-map",
      note: "STATUS mfeStdUrl legacy slug → live SSOT /m/ban-do-tuan",
      hashes,
      dup,
      steps: results,
      ok,
    },
    null,
    2,
  ),
  "utf8",
);
if (!ok) {
  if (dup) console.error(dup);
  process.exit(1);
}
console.log(JSON.stringify({ ok, url: featureUrl, steps: results.map((r) => r.id + ":" + r.result) }));
