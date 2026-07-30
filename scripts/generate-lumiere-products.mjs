import sharp from 'sharp';
import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';
const DIRS=['public/assets/images/skincare','public/assets/images/makeup','public/assets/images/haircare','public/assets/images/fragrance','public/assets/images/bodycare','public/assets/images/accessories','public/assets/images/hero','public/assets/images/reviews'];
DIRS.forEach(d=>mkdirSync(d,{recursive:true}));
function sp(cx,cy,r1,r2,n){let d='';for(let i=0;i<n*2;i++){const r=i%2===0?r1:r2,a=(Math.PI/n)*i-Math.PI/2,x=cx+r*Math.cos(a),y=cy+r*Math.sin(a);d+=(i===0?'M':'L')+x.toFixed(2)+','+y.toFixed(2);}return d+'Z';}
function lbl(cx,y,w,o){const x=cx-w/2,h=158,tc=o.dark?'#f0f0f0':'#1a1a1a',dc=o.dark?'#a0a0a0':'#666',vc=o.dark?'#707070':'#999',sc=o.borderColor;
return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="11" fill="${o.labelBg}" stroke="${o.borderColor}" stroke-width="2"/><rect x="${x+5}" y="${y+5}" width="${w-10}" height="${h-10}" rx="7" fill="none" stroke="${o.borderColor}" stroke-width="0.5" opacity="0.4"/><path d="${sp(cx,y+17,7,3,5)}" fill="${o.borderColor}"/><text x="${cx}" y="${y+36}" text-anchor="middle" font-family="Georgia,serif" font-size="14.5" fill="${tc}" font-weight="800" letter-spacing="3">${o.brandName}</text><text x="${cx}" y="${y+49}" text-anchor="middle" font-family="Arial,sans-serif" font-size="7.5" fill="${sc}" letter-spacing="4" font-weight="700">${o.subBrand}</text><line x1="${x+14}" y1="${y+57}" x2="${x+w-14}" y2="${y+57}" stroke="${o.borderColor}" stroke-width="0.9" opacity="0.6"/><text x="${cx}" y="${y+80}" text-anchor="middle" font-family="Georgia,serif" font-size="12" fill="${tc}" font-weight="700">${o.productName}</text><text x="${cx}" y="${y+95}" text-anchor="middle" font-family="Arial,sans-serif" font-size="8.5" fill="${dc}">${o.subtitle}</text><text x="${cx}" y="${y+h-12}" text-anchor="middle" font-family="Arial,sans-serif" font-size="8" fill="${vc}">${o.volume}</text>`;}
function bg(theme){
  const ts={
    rose:{g:['#fff0f3','#ffe4ea','#ffc8d5'],e:`<radialGradient id="spot" cx="50%" cy="35%" r="55%"><stop offset="0%" stop-color="#ffb3c6" stop-opacity="0.38"/><stop offset="100%" stop-color="#fff0f3" stop-opacity="0"/></radialGradient><rect width="600" height="600" fill="url(#spot)"/><ellipse cx="78" cy="85" rx="58" ry="40" fill="#ffb3c6" opacity="0.55" transform="rotate(-28 78 85)"/><ellipse cx="84" cy="118" rx="44" ry="29" fill="#ff8fab" opacity="0.42" transform="rotate(12 84 118)"/><ellipse cx="522" cy="78" rx="62" ry="42" fill="#ffb3c6" opacity="0.50" transform="rotate(22 522 78)"/><ellipse cx="512" cy="110" rx="46" ry="31" fill="#ff8fab" opacity="0.36" transform="rotate(-18 512 110)"/><ellipse cx="52" cy="476" rx="50" ry="33" fill="#fecdd3" opacity="0.45" transform="rotate(18 52 476)"/><ellipse cx="542" cy="458" rx="54" ry="35" fill="#fecdd3" opacity="0.40" transform="rotate(-22 542 458)"/><circle cx="162" cy="52" r="5" fill="#ff8fab" opacity="0.6"/><circle cx="442" cy="68" r="4" fill="#ff8fab" opacity="0.5"/><circle cx="102" cy="418" r="6" fill="#fda4af" opacity="0.5"/><circle cx="488" cy="428" r="5" fill="#fda4af" opacity="0.45"/>`},
    green:{g:['#edfdf4','#d2f5e3','#b3eccc'],e:`<radialGradient id="spot" cx="50%" cy="30%" r="55%"><stop offset="0%" stop-color="#86efac" stop-opacity="0.30"/><stop offset="100%" stop-color="#edfdf4" stop-opacity="0"/></radialGradient><rect width="600" height="600" fill="url(#spot)"/><path d="M-12,55 C82,8 205,108 152,282 C102,456 -32,402 -12,55Z" fill="#86efac" opacity="0.45"/><path d="M492,38 C595,-12 665,142 558,264 C460,182 412,-12 492,38Z" fill="#86efac" opacity="0.38" transform="rotate(14 545 142)"/><path d="M482,398 C575,352 625,478 542,562Z" fill="#4ade80" opacity="0.32"/><circle cx="192" cy="52" r="7" fill="#bbf7d0" opacity="0.8"/><circle cx="422" cy="62" r="5" fill="#bbf7d0" opacity="0.7"/><circle cx="82" cy="428" r="8" fill="#bbf7d0" opacity="0.6"/><circle cx="512" cy="438" r="6" fill="#86efac" opacity="0.55"/>`},
    amber:{g:['#fffbf0','#fef3c7','#fde68a'],e:`<radialGradient id="spot" cx="50%" cy="28%" r="55%"><stop offset="0%" stop-color="#fbbf24" stop-opacity="0.28"/><stop offset="100%" stop-color="#fffbf0" stop-opacity="0"/></radialGradient><rect width="600" height="600" fill="url(#spot)"/><polygon points="0,0 355,0 162,600 0,600" fill="#ffffff" opacity="0.28"/><path d="M-18,78 C72,28 178,112 132,242Z" fill="#fbbf24" opacity="0.35"/><path d="M472,58 C562,18 632,138 552,232Z" fill="#fbbf24" opacity="0.30"/><circle cx="202" cy="42" r="6" fill="#fde68a" opacity="0.8"/><circle cx="402" cy="50" r="5" fill="#fde68a" opacity="0.7"/>`},
    tropical:{g:['#edfffe','#ccfbf1','#99f6e4'],e:`<radialGradient id="spot" cx="50%" cy="30%" r="55%"><stop offset="0%" stop-color="#2dd4bf" stop-opacity="0.25"/><stop offset="100%" stop-color="#edfffe" stop-opacity="0"/></radialGradient><rect width="600" height="600" fill="url(#spot)"/><path d="M-28,28 C92,-22 232,58 188,198 C128,182 -8,148 -28,28Z" fill="#2dd4bf" opacity="0.38"/><path d="M468,18 C582,-32 658,108 558,212 C462,188 402,78 468,18Z" fill="#2dd4bf" opacity="0.33"/><circle cx="148" cy="182" r="8" fill="#ffffff" opacity="0.85"/><circle cx="472" cy="168" r="10" fill="#ffffff" opacity="0.75"/>`},
    noir:{g:['#0f0f1a','#1a1a2e','#0d0d20'],e:`<radialGradient id="spot" cx="50%" cy="25%" r="55%"><stop offset="0%" stop-color="#6366f1" stop-opacity="0.22"/><stop offset="100%" stop-color="#0f0f1a" stop-opacity="0"/></radialGradient><rect width="600" height="600" fill="url(#spot)"/><circle cx="300" cy="300" r="282" fill="none" stroke="#4338ca" stroke-width="1" opacity="0.14"/><circle cx="152" cy="78" r="3" fill="#a5b4fc" opacity="0.7"/><circle cx="452" cy="58" r="2.5" fill="#a5b4fc" opacity="0.6"/><circle cx="82" cy="348" r="2" fill="#818cf8" opacity="0.6"/><circle cx="522" cy="368" r="3" fill="#818cf8" opacity="0.5"/>`},
    spa:{g:['#f8fafc','#eff6ff','#dbeafe'],e:`<radialGradient id="spot" cx="50%" cy="30%" r="55%"><stop offset="0%" stop-color="#94a3b8" stop-opacity="0.22"/><stop offset="100%" stop-color="#f8fafc" stop-opacity="0"/></radialGradient><rect width="600" height="600" fill="url(#spot)"/><ellipse cx="122" cy="428" rx="68" ry="29" fill="#94a3b8" opacity="0.28" transform="rotate(-14 122 428)"/><ellipse cx="472" cy="442" rx="72" ry="31" fill="#94a3b8" opacity="0.26" transform="rotate(10 472 442)"/><path d="M-22,68 C72,18 158,102 118,222Z" fill="#cbd5e1" opacity="0.28"/><path d="M482,78 C568,28 632,118 558,222Z" fill="#cbd5e1" opacity="0.26"/>`},
  };
  const t=ts[theme]||ts.rose;
  return{bgDefs:`<linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="${t.g[0]}"/><stop offset="50%" stop-color="${t.g[1]}"/><stop offset="100%" stop-color="${t.g[2]}"/></linearGradient>`,nature:t.e};
}
function cg(c){return c==='gold';}
function gDef(id,c){const g=cg(c);return `<linearGradient id="${id}" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="${g?'#ffe599':c}"/><stop offset="50%" stop-color="${g?'#d4af37':c}"/><stop offset="100%" stop-color="${g?'#997a15':c}"/></linearGradient>`;}
const shDef=`<linearGradient id="sh" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#ffffff" stop-opacity="0.52"/><stop offset="100%" stop-color="#ffffff" stop-opacity="0"/></linearGradient>`;
const btlDef=(o)=>`<linearGradient id="btl" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="${o.bottleGradient[0]}"/><stop offset="30%" stop-color="${o.bottleGradient[1]}"/><stop offset="70%" stop-color="${o.bottleGradient[2]}"/><stop offset="100%" stop-color="${o.bottleGradient[0]}"/></linearGradient>`;

function dropper(o){return `<defs>${btlDef(o)}${gDef('cap',o.capColor)}${shDef}</defs>
<rect x="218" y="190" width="164" height="266" rx="38" fill="url(#btl)"/>
<rect x="218" y="190" width="36" height="266" rx="18" fill="#000" opacity="0.12"/>
<rect x="346" y="190" width="36" height="266" rx="18" fill="#000" opacity="0.08"/>
<rect x="233" y="200" width="22" height="232" rx="11" fill="url(#sh)"/>
<rect x="258" y="140" width="84" height="56" rx="10" fill="url(#btl)"/>
<rect x="258" y="140" width="20" height="56" rx="10" fill="#fff" opacity="0.15"/>
<rect x="248" y="120" width="104" height="26" rx="8" fill="url(#cap)"/>
<rect x="252" y="122" width="96" height="9" rx="4" fill="#fff" opacity="0.25"/>
<path d="M284,120 Q300,56 316,120" stroke="#111" stroke-width="4.5" fill="none" stroke-linecap="round"/>
<circle cx="300" cy="53" r="5.5" fill="#222" opacity="0.8"/>
${lbl(300,242,138,o)}
<ellipse cx="300" cy="458" rx="76" ry="10" fill="url(#btl)" opacity="0.15"/>`;}

function jar(o){return `<defs>${btlDef(o)}${gDef('lid',o.capColor)}${shDef}</defs>
<rect x="170" y="238" width="260" height="198" rx="28" fill="url(#btl)"/>
<rect x="170" y="238" width="42" height="198" rx="21" fill="#000" opacity="0.13"/>
<rect x="388" y="238" width="42" height="198" rx="21" fill="#000" opacity="0.08"/>
<rect x="186" y="248" width="26" height="170" rx="13" fill="url(#sh)"/>
<rect x="160" y="178" width="280" height="66" rx="18" fill="url(#lid)"/>
<rect x="165" y="182" width="268" height="22" rx="11" fill="#fff" opacity="0.22"/>
<rect x="162" y="173" width="276" height="12" rx="6" fill="url(#lid)" opacity="0.68"/>
${lbl(300,272,218,o)}
<ellipse cx="300" cy="438" rx="120" ry="12" fill="url(#btl)" opacity="0.12"/>`;}

function bottle(o){return `<defs>${btlDef(o)}${gDef('cap',o.capColor)}${shDef}</defs>
<rect x="222" y="178" width="156" height="285" rx="32" fill="url(#btl)"/>
<rect x="222" y="178" width="33" height="285" rx="16" fill="#000" opacity="0.13"/>
<rect x="345" y="178" width="33" height="285" rx="16" fill="#000" opacity="0.09"/>
<rect x="237" y="190" width="20" height="255" rx="10" fill="url(#sh)"/>
<rect x="258" y="128" width="84" height="56" rx="12" fill="url(#btl)"/>
<rect x="258" y="128" width="19" height="56" rx="9" fill="#fff" opacity="0.15"/>
<rect x="248" y="100" width="104" height="34" rx="10" fill="url(#cap)"/>
<rect x="252" y="103" width="96" height="10" rx="5" fill="#fff" opacity="0.22"/>
${lbl(300,240,128,o)}
<ellipse cx="300" cy="465" rx="70" ry="9" fill="url(#btl)" opacity="0.14"/>`;}

function perfume(o){const goldGrad=`<linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#ffe599"/><stop offset="50%" stop-color="#d4af37"/><stop offset="100%" stop-color="#997a15"/></linearGradient>`;
return `<defs>${btlDef(o)}${goldGrad}${shDef}</defs>
<rect x="205" y="205" width="190" height="242" rx="22" fill="url(#btl)"/>
<rect x="205" y="205" width="39" height="242" rx="19" fill="#000" opacity="0.14"/>
<rect x="356" y="205" width="39" height="242" rx="19" fill="#000" opacity="0.10"/>
<rect x="222" y="216" width="26" height="210" rx="13" fill="url(#sh)"/>
<rect x="255" y="148" width="90" height="63" rx="10" fill="url(#gold)"/>
<rect x="260" y="152" width="80" height="18" rx="9" fill="#fff" opacity="0.22"/>
<rect x="240" y="98" width="120" height="56" rx="12" fill="url(#btl)"/>
<rect x="245" y="102" width="22" height="48" rx="11" fill="#fff" opacity="0.15"/>
<rect x="280" y="82" width="40" height="24" rx="8" fill="url(#gold)"/>
<rect x="284" y="86" width="32" height="8" rx="4" fill="#fff" opacity="0.25"/>
${lbl(300,258,162,o)}
<ellipse cx="300" cy="449" rx="89" ry="11" fill="url(#btl)" opacity="0.13"/>`;}
function lipstick(o){return `<defs><linearGradient id="lip" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="${o.bottleGradient[0]}"/><stop offset="50%" stop-color="${o.bottleGradient[1]}"/><stop offset="100%" stop-color="${o.bottleGradient[0]}"/></linearGradient><linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#ffe599"/><stop offset="50%" stop-color="#d4af37"/><stop offset="100%" stop-color="#997a15"/></linearGradient><linearGradient id="sh" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#ffffff" stop-opacity="0.50"/><stop offset="100%" stop-color="#ffffff" stop-opacity="0"/></linearGradient></defs>
<rect x="248" y="216" width="104" height="228" rx="22" fill="url(#gold)"/>
<rect x="254" y="222" width="14" height="208" rx="7" fill="url(#sh)"/>
<rect x="244" y="200" width="112" height="22" rx="6" fill="url(#gold)"/>
<rect x="248" y="203" width="104" height="8" rx="4" fill="#fff" opacity="0.25"/>
<rect x="263" y="150" width="74" height="56" rx="8" fill="#b8941e"/>
<path d="M270,154 L270,95 C270,62 330,62 330,95 L330,154 Z" fill="url(#lip)"/>
<rect x="275" y="62" width="14" height="90" rx="7" fill="#fff" opacity="0.20"/>
<text x="300" y="328" text-anchor="middle" font-family="Georgia,serif" font-size="12" fill="${o.dark?'#f0f0f0':'#1a1a1a'}" font-weight="800" letter-spacing="2">${o.brandName}</text>
<text x="300" y="342" text-anchor="middle" font-family="Arial,sans-serif" font-size="8" fill="#6b4c00" letter-spacing="3" font-weight="700">${o.subBrand}</text>
<text x="300" y="360" text-anchor="middle" font-family="Georgia,serif" font-size="10" fill="${o.dark?'#ddd':'#333'}" font-weight="600">${o.productName}</text>
<text x="300" y="374" text-anchor="middle" font-family="Arial,sans-serif" font-size="8" fill="${o.dark?'#aaa':'#666'}">${o.subtitle}</text>
<ellipse cx="300" cy="447" rx="52" ry="8" fill="url(#gold)" opacity="0.20"/>`;}

function palette(o){
  const cols=['#fecdd3','#fda4af','#fb7185','#e11d48','#fde68a','#f59e0b','#d97706','#b45309','#c4b5fd','#a78bfa','#7c3aed','#4c1d95'];
  const sw=48,sh=34,gap=6,sx=162,sy=228;
  const sw2=cols.map((c,i)=>{const r=Math.floor(i/4),cc=i%4,x=sx+cc*(sw+gap),y=sy+r*(sh+gap);return `<rect x="${x}" y="${y}" width="${sw}" height="${sh}" rx="7" fill="${c}"/><rect x="${x+3}" y="${y+3}" width="${sw-6}" height="10" rx="3" fill="#fff" opacity="0.25"/>`;}).join('');
  return `<defs><linearGradient id="btl" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="${o.bottleGradient[0]}"/><stop offset="50%" stop-color="${o.bottleGradient[1]}"/><stop offset="100%" stop-color="${o.bottleGradient[0]}"/></linearGradient><linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#ffe599"/><stop offset="50%" stop-color="#d4af37"/><stop offset="100%" stop-color="#997a15"/></linearGradient></defs>
<rect x="138" y="188" width="324" height="252" rx="22" fill="url(#btl)" stroke="url(#gold)" stroke-width="2.5"/>
<rect x="150" y="200" width="300" height="230" rx="14" fill="#18181b"/>
${sw2}
<rect x="158" y="392" width="284" height="24" rx="8" fill="#e2e8f0" opacity="0.3"/>
<text x="300" y="457" text-anchor="middle" font-family="Georgia,serif" font-size="13" fill="url(#gold)" font-weight="800" letter-spacing="3">${o.brandName}</text>
<text x="300" y="472" text-anchor="middle" font-family="Arial,sans-serif" font-size="8" fill="#d4af37" letter-spacing="4" font-weight="700">${o.productName.toUpperCase()}</text>
<ellipse cx="300" cy="443" rx="154" ry="12" fill="url(#btl)" opacity="0.15"/>`;}

function buildSVG(p){
  const {bgDefs,nature}=bg(p.bgTheme||'rose');
  const args={bottleGradient:p.bottleGradient,capColor:p.capColor||'gold',labelBg:p.labelBg||'#ffffff',borderColor:p.borderColor||'#d4af37',brandName:p.brandName||'LUMIERE',subBrand:p.subBrand||'PARIS',productName:p.productName||'',subtitle:p.subtitle||'',volume:p.volume||'',dark:p.darkLabel||false};
  let g='';
  if(p.shape==='dropper')g=dropper(args);
  else if(p.shape==='jar')g=jar(args);
  else if(p.shape==='bottle')g=bottle(args);
  else if(p.shape==='perfume')g=perfume(args);
  else if(p.shape==='lipstick')g=lipstick(args);
  else if(p.shape==='palette')g=palette(args);
  else g=bottle(args);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600"><defs>${bgDefs}<filter id="shadow" x="-25%" y="-25%" width="150%" height="150%"><feDropShadow dx="0" dy="20" stdDeviation="18" flood-color="#000" flood-opacity="0.22"/></filter></defs><rect width="600" height="600" fill="url(#bg)"/>${nature}<g filter="url(#shadow)">${g}</g></svg>`;}
const PRODUCTS=[
  {path:'skincare/serum.png',bgTheme:'rose',shape:'dropper',bottleGradient:['#be123c','#f43f5e','#9f1239'],capColor:'gold',subBrand:'LAB',productName:'Radiance Serum',subtitle:'Vitamin C 20% Glow',volume:'30ml 1.0 fl.oz'},
  {path:'skincare/night_cream.png',bgTheme:'noir',shape:'jar',bottleGradient:['#3b0764','#7e22ce','#4c1d95'],capColor:'gold',subBrand:'NOVADERM',productName:'Midnight Repair',subtitle:'Overnight Retinol Cream',volume:'50ml 1.7 fl.oz',darkLabel:true,labelBg:'#0f0a1a',borderColor:'#d4af37'},
  {path:'skincare/sunscreen.png',bgTheme:'amber',shape:'bottle',bottleGradient:['#d97706','#fbbf24','#b45309'],capColor:'#10b981',subBrand:'PURE BLISS',productName:'SPF 50+ Shield',subtitle:'Lightweight PA++++',volume:'50ml 1.7 fl.oz'},
  {path:'skincare/toner.png',bgTheme:'tropical',shape:'bottle',bottleGradient:['#0e7490','#06b6d4','#155e75'],capColor:'gold',subBrand:'BOTANICA',productName:'Hyaluronic Toner',subtitle:'Deep Moisture Balance',volume:'200ml 6.7 fl.oz'},
  {path:'skincare/mask.png',bgTheme:'rose',shape:'jar',bottleGradient:['#991b1b','#dc2626','#7f1d1d'],capColor:'gold',subBrand:'PARIS',productName:'Vitamin C Mask',subtitle:'Brightening Clay',volume:'75ml 2.5 fl.oz'},
  {path:'skincare/moisturizer.png',bgTheme:'green',shape:'jar',bottleGradient:['#15803d','#22c55e','#14532d'],capColor:'#15803d',subBrand:'NOVADERM',productName:'Ceramide Repair',subtitle:'Barrier Repair Cream',volume:'60ml 2.0 fl.oz'},
  {path:'skincare/eye_cream.png',bgTheme:'rose',shape:'dropper',bottleGradient:['#9f1239','#f43f5e','#881337'],capColor:'gold',subBrand:'NOVADERM',productName:'Retinol Eye Cream',subtitle:'Anti-Circle Treatment',volume:'15ml 0.5 fl.oz'},
  {path:'skincare/exfoliating_toner.png',bgTheme:'noir',shape:'bottle',bottleGradient:['#1e1b4b','#4338ca','#312e81'],capColor:'gold',subBrand:'LAB',productName:'AHA BHA Toner',subtitle:'Pore Refining',volume:'150ml 5.0 fl.oz',darkLabel:true,labelBg:'#0a0a18',borderColor:'#d4af37'},
  {path:'makeup/lipstick.png',bgTheme:'rose',shape:'lipstick',bottleGradient:['#9f1239','#e11d48','#7f1d1d'],capColor:'gold',subBrand:'VELVET',productName:'Velvet Lipstick',subtitle:'Matte Finish',volume:'3.5g 0.12 oz'},
  {path:'makeup/foundation.png',bgTheme:'amber',shape:'bottle',bottleGradient:['#c2410c','#f97316','#9a3412'],capColor:'gold',subBrand:'PARIS',productName:'Flawless Foundation',subtitle:'24HR Wear SPF 30',volume:'30ml 1.0 fl.oz'},
  {path:'makeup/eyeshadow_palette.png',bgTheme:'rose',shape:'palette',bottleGradient:['#4c1d95','#7c3aed','#2e1065'],capColor:'gold',subBrand:'ECLAT',productName:'Glitter Palette',subtitle:'18 Luxe Shades',volume:'18 x 1.5g'},
  {path:'makeup/mascara.png',bgTheme:'noir',shape:'bottle',bottleGradient:['#111827','#374151','#1f2937'],capColor:'gold',subBrand:'VELVET',productName:'Volume Mascara',subtitle:'Dramatic Lash Lift',volume:'10ml 0.33 fl.oz',darkLabel:true,labelBg:'#0a0a0f',borderColor:'#d4af37'},
  {path:'makeup/highlighter.png',bgTheme:'amber',shape:'lipstick',bottleGradient:['#b45309','#f59e0b','#78350f'],capColor:'gold',subBrand:'ECLAT',productName:'Glow Stick',subtitle:'Champagne Shimmer',volume:'5g 0.17 oz'},
  {path:'haircare/hair_serum.png',bgTheme:'green',shape:'dropper',bottleGradient:['#78350f','#d97706','#92400e'],capColor:'gold',subBrand:'BOTANICA',productName:'Argan Hair Serum',subtitle:'Frizz Control and Shine',volume:'100ml 3.4 fl.oz'},
  {path:'haircare/keratin_mask.png',bgTheme:'rose',shape:'jar',bottleGradient:['#581c87','#9333ea','#3b0764'],capColor:'#fda4af',subBrand:'PARIS',productName:'Keratin Mask',subtitle:'Deep Conditioning',volume:'200ml 6.7 fl.oz'},
  {path:'haircare/scalp_shampoo.png',bgTheme:'tropical',shape:'bottle',bottleGradient:['#065f46','#10b981','#047857'],capColor:'#1f2937',subBrand:'NOVADERM',productName:'Scalp Detox',subtitle:'Salicylic Acid Formula',volume:'250ml 8.4 fl.oz'},
  {path:'haircare/hair_oil.png',bgTheme:'amber',shape:'dropper',bottleGradient:['#78350f','#d97706','#b45309'],capColor:'#78350f',subBrand:'BOTANICA',productName:'Biotin Growth Oil',subtitle:'Castor + Rosemary',volume:'100ml 3.4 fl.oz'},
  {path:'fragrance/rose_oud.png',bgTheme:'rose',shape:'perfume',bottleGradient:['#9f1239','#e11d48','#7f1d1d'],capColor:'gold',subBrand:'PARIS',productName:'Rose Oud EDP',subtitle:'Oriental Floral',volume:'50ml 1.7 fl.oz'},
  {path:'fragrance/jasmine_edp.png',bgTheme:'amber',shape:'perfume',bottleGradient:['#9a3412','#f97316','#c2410c'],capColor:'#fff7ed',subBrand:'ECLAT',productName:'Blush Jasmine',subtitle:'Fresh Floral EDP',volume:'50ml 1.7 fl.oz'},
  {path:'fragrance/midnight_noir.png',bgTheme:'noir',shape:'perfume',bottleGradient:['#1e1b4b','#4338ca','#312e81'],capColor:'gold',subBrand:'PARIS',productName:'Midnight Noir',subtitle:'Dark Vetiver EDP',volume:'50ml 1.7 fl.oz',darkLabel:true,labelBg:'#06060f',borderColor:'#d4af37'},
  {path:'bodycare/body_butter.png',bgTheme:'amber',shape:'jar',bottleGradient:['#b45309','#f59e0b','#92400e'],capColor:'#78350f',subBrand:'PURE BLISS',productName:'Body Butter Whip',subtitle:'Shea and Mango',volume:'200g 7.0 oz'},
  {path:'bodycare/coffee_scrub.png',bgTheme:'amber',shape:'jar',bottleGradient:['#3e2723','#6d4c41','#4e342e'],capColor:'#212121',subBrand:'BOTANICA',productName:'Coffee Scrub',subtitle:'Firming and Exfoliating',volume:'200g 7.0 oz'},
  {path:'bodycare/rose_lotion.png',bgTheme:'rose',shape:'bottle',bottleGradient:['#be123c','#f43f5e','#9f1239'],capColor:'#881337',subBrand:'PARIS',productName:'Rose Body Lotion',subtitle:'Silky Moisture',volume:'250ml 8.4 fl.oz'},
  {path:'accessories/jade_roller.png',bgTheme:'green',shape:'dropper',bottleGradient:['#065f46','#10b981','#059669'],capColor:'gold',subBrand:'BOTANICA',productName:'Jade Roller',subtitle:'De-Puffing Sculpting',volume:'100% Green Jade'},
  {path:'accessories/led_mask.png',bgTheme:'spa',shape:'jar',bottleGradient:['#475569','#94a3b8','#334155'],capColor:'gold',subBrand:'NOVADERM',productName:'LED Therapy Mask',subtitle:'7-Color Light',volume:'Anti-Aging and Acne'},
  {path:'accessories/gua_sha.png',bgTheme:'rose',shape:'jar',bottleGradient:['#be185d','#db2777','#9d174d'],capColor:'gold',subBrand:'PARIS',productName:'Gua Sha Stone',subtitle:'Lymphatic Drainage',volume:'Rose Quartz'},
  {path:'accessories/silk_pillowcase.png',bgTheme:'rose',shape:'jar',bottleGradient:['#7e22ce','#c084fc','#581c87'],capColor:'gold',subBrand:'PURE BLISS',productName:'Silk Pillowcase',subtitle:'Anti-Frizz Care',volume:'100% Mulberry Silk'},
  {path:'hero/hero_skincare.png',bgTheme:'rose',shape:'dropper',bottleGradient:['#be123c','#f43f5e','#881337'],capColor:'gold',subBrand:'HERO',productName:'Radiance Collection',subtitle:'Lumiere Paris 2026',volume:'Exclusive Edition'},
  {path:'hero/hero_makeup.png',bgTheme:'amber',shape:'lipstick',bottleGradient:['#9a3412','#f97316','#c2410c'],capColor:'gold',subBrand:'HERO',productName:'Velvet Matte Range',subtitle:'Lumiere Paris 2026',volume:'Exclusive Edition'},
  {path:'hero/hero_fragrance.png',bgTheme:'noir',shape:'perfume',bottleGradient:['#1e1b4b','#4338ca','#312e81'],capColor:'gold',subBrand:'HERO',productName:'Rose Oud and Jasmine',subtitle:'Lumiere Paris 2026',volume:'Exclusive Edition',darkLabel:true,labelBg:'#06060f',borderColor:'#d4af37'},
  {path:'reviews/avatar1.png',bgTheme:'rose',shape:'jar',bottleGradient:['#be123c','#f43f5e','#881337'],capColor:'gold',subBrand:'COMMUNITY',productName:'Priya S.',subtitle:'5-Stars Verified Buyer',volume:'Loyal Since 2024'},
  {path:'reviews/avatar2.png',bgTheme:'green',shape:'jar',bottleGradient:['#15803d','#22c55e','#14532d'],capColor:'gold',subBrand:'COMMUNITY',productName:'Ananya R.',subtitle:'5-Stars Verified Buyer',volume:'Loyal Since 2025'},
];
async function run(){
  console.log('LUMIERE -- Generating '+PRODUCTS.length+' ultra-premium product images...');
  let ok=0;
  for(const p of PRODUCTS){
    const svg=buildSVG(p);
    const buf=await sharp(Buffer.from(svg)).resize(800,800,{fit:'fill'}).png({quality:95,compressionLevel:7}).toBuffer();
    writeFileSync(join('public/assets/images',p.path),buf);
    ok++;
    process.stdout.write('  OK: '+p.path+'\n');
  }
  console.log('Done! '+ok+' LUMIERE product images created.');
}
run().catch(err=>{console.error('Error:',err);process.exit(1);});
