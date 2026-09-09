import { chromium } from '/Users/jimmyarikawe/cms/node_modules/playwright/index.mjs';
const B='http://localhost:3610';
const b=await chromium.launch();
const d=await b.newContext({viewport:{width:1440,height:1000}});
const p=await d.newPage();
for (const [path,name,y] of [['/','a-home-top',0],['/','a-home-work',760],['/work','a-work',300],['/about','a-about',0],['/resume','a-resume',0],['/contact','a-contact',0]]) {
  await p.goto(B+path,{waitUntil:'networkidle'}); await p.waitForTimeout(1500);
  if(y){await p.evaluate(v=>window.scrollTo(0,v),y); await p.waitForTimeout(900);}
  await p.screenshot({path:`${name}.png`});
}
console.log('resume h1 count:', await p.evaluate(()=>document.querySelectorAll('h1').length));
await d.close();
const m=await b.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true,deviceScaleFactor:2});
const mp=await m.newPage();
await mp.goto(B+'/',{waitUntil:'networkidle'}); await mp.waitForTimeout(1500);
await mp.screenshot({path:'a-mob-home.png'});
console.log('mobile overflow:', await mp.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth?'none':'OVERFLOW'));
await b.close();
