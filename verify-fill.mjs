import { chromium } from '/Users/jimmyarikawe/cms/node_modules/playwright/index.mjs';
const b=await chromium.launch();
const p=await (await b.newContext({viewport:{width:1440,height:1000}})).newPage();
/*
 * With `fill`, the <img> element always matches its frame, so comparing element
 * boxes proves nothing. What matters is the ratio of the *served bitmap*
 * against the frame ratio — that is what object-contain letterboxes.
 */
await p.goto('http://localhost:3420/work',{waitUntil:'networkidle'});
await p.waitForTimeout(2000);
const r = await p.evaluate(() => {
  const link = [...document.querySelectorAll('section a')].find(a => a.href.endsWith('/work/omits'));
  const f = link.querySelector('span').getBoundingClientRect();
  const img = link.querySelector('img');
  const frameRatio = f.width / f.height;
  const imgRatio = img.naturalWidth / img.naturalHeight;
  const scale = Math.min(f.width / img.naturalWidth, f.height / img.naturalHeight);
  return {
    served: `${img.naturalWidth}x${img.naturalHeight}`,
    imgRatio: +imgRatio.toFixed(4),
    frameRatio: +frameRatio.toFixed(4),
    barsX: Math.round(f.width  - img.naturalWidth  * scale),
    barsY: Math.round(f.height - img.naturalHeight * scale),
  };
});
console.log(JSON.stringify(r, null, 1));
console.log(r.barsX === 0 && r.barsY === 0 ? '=> edge to edge, zero letterboxing' : '=> letterboxed');
await b.close();
