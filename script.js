/* ---------------- State ---------------- */
let products = [
  {id:1, name:"Anarkali Wrap Dress", category:"Clothing", price:2499, from:"#E3A9B3", to:"#C97F8D", icon:"dress", image:"https://images.unsplash.com/photo-1610202631408-fa6ba0f39ca3?w=800&q=80&auto=format&fit=crop"},
  {id:2, name:"Handloom Cotton Saree", category:"Clothing", price:3199, from:"#EAC7CE", to:"#C97F8D", icon:"dress", image:"https://images.unsplash.com/photo-1619516388835-2b60acc4049e?w=800&q=80&auto=format&fit=crop"},
  {id:3, name:"Georgette Kurta Set", category:"Clothing", price:1899, from:"#E3A9B3", to:"#B9727F", icon:"dress", image:"https://images.unsplash.com/photo-1616583936499-d4116e7e2e76?w=800&q=80&auto=format&fit=crop"},
  {id:4, name:"Tiered Maxi Dress", category:"Clothing", price:2299, from:"#EFC2CB", to:"#C97F8D", icon:"dress", image:"https://images.unsplash.com/photo-1610048869310-d889ff25c374?w=800&q=80&auto=format&fit=crop"},
  {id:5, name:"Woven Cane Tote", category:"Bags", price:1499, from:"#EAD9BC", to:"#B98B3E", icon:"bag", image:"https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=800&q=80&auto=format&fit=crop"},
  {id:6, name:"Structured Sling Bag", category:"Bags", price:1799, from:"#E7D2A4", to:"#93691F", icon:"bag", image:"https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80&auto=format&fit=crop"},
  {id:7, name:"Embroidered Potli Clutch", category:"Bags", price:999, from:"#EAD9BC", to:"#C9A227", icon:"bag", image:"https://images.unsplash.com/photo-1591561954557-26941169b49e?w=800&q=80&auto=format&fit=crop"},
  {id:8, name:"Quilted Crossbody", category:"Bags", price:2099, from:"#E7D2A4", to:"#B98B3E", icon:"bag", image:"https://images.unsplash.com/photo-1614179689702-355944cd0918?w=800&q=80&auto=format&fit=crop"},
  {id:9, name:"Matte Velvet Lipstick Set", category:"Cosmetics", price:799, from:"#3E6C66", to:"#1F4A44", icon:"cosmetic", image:"https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?w=800&q=80&auto=format&fit=crop"},
  {id:10, name:"Rose Gold Highlighter Duo", category:"Cosmetics", price:649, from:"#4C7A72", to:"#1F4A44", icon:"cosmetic", image:"https://images.unsplash.com/photo-1583209814683-c023dd293cc6?w=800&q=80&auto=format&fit=crop"},
  {id:11, name:"Kohl &amp; Kajal Trio", category:"Cosmetics", price:499, from:"#3E6C66", to:"#163632", icon:"cosmetic", image:"https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80&auto=format&fit=crop"},
  {id:12, name:"Silk Finish Compact", category:"Cosmetics", price:899, from:"#4C7A72", to:"#1F4A44", icon:"cosmetic", image:"https://images.unsplash.com/photo-1598528738936-c50861cc75a9?w=800&q=80&auto=format&fit=crop"},
  {id:13, name:"Chikankari Cotton Kurti", category:"Clothing", price:1699, from:"#EAC7CE", to:"#B9727F", icon:"dress", image:"https://images.unsplash.com/photo-1571908599407-cdb918ed83bf?w=800&q=80&auto=format&fit=crop"},
  {id:14, name:"Floral Wrap Skirt", category:"Clothing", price:1399, from:"#E3A9B3", to:"#C97F8D", icon:"dress", image:"https://images.unsplash.com/photo-1571587289339-cb7da03fb5a6?w=800&q=80&auto=format&fit=crop"},
  {id:15, name:"Velvet Blouse", category:"Clothing", price:1199, from:"#EFC2CB", to:"#B9727F", icon:"dress", image:"https://images.unsplash.com/photo-1599746146388-a7ec2004b67a?w=800&q=80&auto=format&fit=crop"},
  {id:16, name:"Embellished Box Clutch", category:"Bags", price:1299, from:"#EAD9BC", to:"#C9A227", icon:"bag", image:"https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800&q=80&auto=format&fit=crop"},
  {id:17, name:"Canvas Weekender Bag", category:"Bags", price:2399, from:"#E7D2A4", to:"#93691F", icon:"bag", image:"https://images.unsplash.com/photo-1600857062241-98e5dba7f214?w=800&q=80&auto=format&fit=crop"},
  {id:18, name:"Beaded Sling Pouch", category:"Bags", price:899, from:"#EAD9BC", to:"#B98B3E", icon:"bag", image:"https://images.unsplash.com/photo-1605733513597-a8f8341084e6?w=800&q=80&auto=format&fit=crop"},
  {id:19, name:"Hydrating Lip Tint Set", category:"Cosmetics", price:599, from:"#3E6C66", to:"#163632", icon:"cosmetic", image:"https://images.unsplash.com/photo-1571646034647-52e6ea84b28c?w=800&q=80&auto=format&fit=crop"},
  {id:20, name:"Compact Makeup Kit", category:"Cosmetics", price:1099, from:"#4C7A72", to:"#1F4A44", icon:"cosmetic", image:"https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80&auto=format&fit=crop"},
];
let nextId = 21;
let tryAtHome = new Set();
let activeCat = "all";
const WHATSAPP_NUMBER = "918128177882";
const DELIVERY_CHARGE = 59;
const TRIAL_CHARGE = 69;
let orderProductId = null;

const ICONS = {
  dress: '<svg viewBox="0 0 24 24" fill="none"><path d="M9 3l1.5 2h3L15 3l3 3-2 2v13H8V8L6 6l3-3z" stroke="#3B0A1A" stroke-width="1.4" stroke-linejoin="round"/></svg>',
  bag: '<svg viewBox="0 0 24 24" fill="none"><path d="M6 8h12l1 13H5L6 8z" stroke="#3B0A1A" stroke-width="1.4" stroke-linejoin="round"/><path d="M9 8V6a3 3 0 016 0v2" stroke="#3B0A1A" stroke-width="1.4"/></svg>',
  cosmetic: '<svg viewBox="0 0 24 24" fill="none"><path d="M10 2h4v6l-2 2-2-2V2z" stroke="#FBF6EF" stroke-width="1.5" stroke-linejoin="round"/><path d="M9 10h6l1 12H8l1-12z" stroke="#FBF6EF" stroke-width="1.5" stroke-linejoin="round"/></svg>'
};

/* ---------------- Helpers ---------------- */
function fmt(n){ return "₹" + n.toLocaleString("en-IN"); }

function toast(msg){
  const wrap = document.getElementById('toastwrap');
  const el = document.createElement('div');
  el.className = 'toast';
  el.textContent = msg;
  wrap.appendChild(el);
  setTimeout(()=> el.remove(), 2600);
}

/* ---------------- Shop rendering ---------------- */
function renderCatPills(){
  const cats = ["all","Clothing","Bags","Cosmetics"];
  const labels = {all:"All products", Clothing:"Clothing", Bags:"Bags", Cosmetics:"Cosmetics"};
  const el = document.getElementById('catpills');
  el.innerHTML = cats.map(c =>
    `<button class="catpill ${c===activeCat?'active':''}" onclick="filterCat('${c}')">${labels[c]}</button>`
  ).join("");
}

function filterCat(c){
  activeCat = c;
  renderCatPills();
  renderGrid();
}

function renderGrid(){
  const grid = document.getElementById('productGrid');
  const list = activeCat === "all" ? products : products.filter(p => p.category === activeCat);
  if(list.length === 0){
    grid.innerHTML = `<div class="empty-msg" style="grid-column:1/-1;">No products in this category yet. Check back soon.</div>`;
    return;
  }
  grid.innerHTML = list.map(p => {
    const selected = tryAtHome.has(p.id);
    const full = tryAtHome.size >= 10 && !selected;
    const media = p.image
      ? `<img src="${p.image}" alt="${p.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
         <div class="fallback-icon">${ICONS[p.icon] || ICONS.dress}</div>`
      : (ICONS[p.icon] || ICONS.dress);
    return `
    <div class="pcard">
      <div class="pcard-media" style="background:linear-gradient(155deg, ${p.from}, ${p.to});">
        <span class="pcard-tag">${p.category}</span>
        ${media}
      </div>
      <div class="pcard-body">
        <div class="pcard-name">${p.name}</div>
        <div class="pcard-price">${fmt(p.price)}</div>
        <div class="pcard-actions">
          <button class="pbtn pbtn-buy" onclick="buyNow(${p.id})">Buy now</button>
          <button class="pbtn pbtn-try ${selected?'selected':''}" ${full?'disabled':''} onclick="toggleTry(${p.id})">
            ${selected ? 'Remove' : 'Try at home'}
          </button>
        </div>
      </div>
    </div>`;
  }).join("");
}

function buyNow(id){
  openOrderModal(id);
}

function toggleTry(id){
  const p = products.find(x=>x.id===id);
  if(!p) return;
  if(tryAtHome.has(id)){
    tryAtHome.delete(id);
    toast(`Removed ${p.name} from try-at-home`);
  } else {
    if(tryAtHome.size >= 10){
      toast("You can try up to 10 products at a time");
      return;
    }
    tryAtHome.add(id);
    toast(`Added ${p.name} to try-at-home (${tryAtHome.size}/10)`);
  }
  updateBadges();
  renderGrid();
  renderDrawer();
}

function updateBadges(){
  const n = tryAtHome.size;
  document.getElementById('navBadge').textContent = `${n}/10`;
  document.getElementById('fabCount').textContent = `${n}/10`;
  document.getElementById('drawerSub').textContent = `${n} of 10 products selected`;
  const trialCountEl = document.getElementById('trialCount');
  if(trialCountEl) trialCountEl.textContent = n;
}

/* ---------------- Drawer ---------------- */
function openDrawer(){
  document.getElementById('drawer').classList.add('open');
  document.getElementById('overlay').classList.add('open');
  renderDrawer();
}
function closeDrawer(){
  document.getElementById('drawer').classList.remove('open');
  document.getElementById('overlay').classList.remove('open');
}
function renderDrawer(){
  const list = document.getElementById('drawerList');
  const items = products.filter(p => tryAtHome.has(p.id));
  if(items.length === 0){
    list.innerHTML = `<div class="drawer-empty">Nothing selected yet. Add up to 10 products to try at home before you buy.</div>`;
    return;
  }
  list.innerHTML = items.map(p => `
    <div class="drawer-item">
      <img class="swatch" style="object-fit:cover;" src="${p.image}" alt="${p.name}">
      <div class="info">
        <div class="n">${p.name}</div>
        <div class="p">${fmt(p.price)}</div>
      </div>
      <button class="rm" onclick="toggleTry(${p.id})">Remove</button>
    </div>
  `).join("");
}
function scheduleTryAtHome(){
  if(tryAtHome.size === 0){
    toast("Select at least one product first");
    return;
  }
  const items = products.filter(p => tryAtHome.has(p.id));
  const location = document.getElementById('trialLocation').value;
  const day = document.getElementById('slotDay').value;
  const time = document.getElementById('slotTime').value;

  const lines = [
    "*Try-at-Home Request — FlipZo*",
    "",
    "Products:",
    ...items.map((p,i) => `${i+1}. ${p.name} — ${fmt(p.price)}`),
    "",
    `Location: ${location}`,
    `Trial slot: ${day}, ${time}`,
    "",
    `Trial charge: ${fmt(TRIAL_CHARGE)}`,
    `*Total payable now: ${fmt(TRIAL_CHARGE)}*`
  ];
  const message = encodeURIComponent(lines.join("\n"));
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
  window.open(url, "_blank");

  tryAtHome.clear();
  updateBadges();
  renderGrid();
  renderDrawer();
  closeDrawer();
  toast("Trial request sent to WhatsApp");
}

/* ---------------- Promo banner autoplay ---------------- */
let bannerIndex = 0;
const bannerCount = 3;
function renderBannerDots(){
  const el = document.getElementById('bannerDots');
  el.innerHTML = Array.from({length:bannerCount}).map((_,i)=>
    `<button class="bdot ${i===bannerIndex?'active':''}" onclick="goToBanner(${i})"></button>`
  ).join("");
}
function updateBanner(){
  document.getElementById('bannerTrack').style.transform = `translateX(-${bannerIndex * (100/bannerCount)}%)`;
  renderBannerDots();
}
function goToBanner(i){
  bannerIndex = i;
  updateBanner();
  resetBannerTimer();
}
let bannerTimer = null;
function resetBannerTimer(){
  if(bannerTimer) clearInterval(bannerTimer);
  bannerTimer = setInterval(()=>{
    bannerIndex = (bannerIndex + 1) % bannerCount;
    updateBanner();
  }, 4000);
}

/* ---------------- WhatsApp order modal ---------------- */
function openOrderModal(productId){
  orderProductId = productId || null;
  const lockWrap = document.getElementById('productLockWrap');
  const selectWrap = document.getElementById('productSelectWrap');

  if(orderProductId){
    const p = products.find(x=>x.id===orderProductId);
    lockWrap.hidden = false;
    selectWrap.hidden = true;
    document.getElementById('lockedProductName').textContent = p ? p.name : "";
    document.getElementById('lockedProductPrice').textContent = p ? fmt(p.price) : "";
  } else {
    lockWrap.hidden = true;
    selectWrap.hidden = false;
    const sel = document.getElementById('oProduct');
    if(products.length === 0){
      sel.innerHTML = `<option value="">No products available</option>`;
    } else {
      sel.innerHTML = products.map(p => `<option value="${p.id}">${p.name} — ${fmt(p.price)}</option>`).join("");
    }
  }

  document.getElementById('oName').value = "";
  document.getElementById('oPhone').value = "";
  document.getElementById('oDate').selectedIndex = 0;
  document.getElementById('oSize').selectedIndex = 0;
  document.getElementById('oTime').selectedIndex = 0;
  document.getElementById('oLocation').selectedIndex = 0;

  refreshOrderSummary();
  document.getElementById('orderOverlay').classList.add('open');
}

function closeOrderModal(){
  document.getElementById('orderOverlay').classList.remove('open');
}

function getOrderProduct(){
  if(orderProductId){
    return products.find(x=>x.id===orderProductId);
  }
  const sel = document.getElementById('oProduct');
  const id = parseInt(sel.value, 10);
  return products.find(x=>x.id===id);
}

function refreshOrderSummary(){
  const p = getOrderProduct();
  const price = p ? p.price : 0;
  document.getElementById('sumPrice').textContent = fmt(price);
  document.getElementById('sumTotal').textContent = fmt(price + DELIVERY_CHARGE);
}

function sendWhatsAppOrder(){
  const p = getOrderProduct();
  if(!p){ toast("Select a product first"); return; }

  const size = document.getElementById('oSize').value;
  const name = document.getElementById('oName').value.trim();
  const phone = document.getElementById('oPhone').value.trim();
  const date = document.getElementById('oDate').value;
  const time = document.getElementById('oTime').value;
  const location = document.getElementById('oLocation').value;

  if(!name){ toast("Enter your name"); return; }
  if(!/^\d{10}$/.test(phone)){ toast("Enter a valid 10-digit phone number"); return; }

  const total = p.price + DELIVERY_CHARGE;

  const lines = [
    "*New Order — FlipZo*",
    "",
    `Product: ${p.name}`,
    `Size: ${size}`,
    "",
    `Customer: ${name}`,
    `Phone: ${phone}`,
    "",
    `Delivery: ${date}, ${time}`,
    `Location: ${location}`,
    "",
    `Price: ${fmt(p.price)}`,
    `Delivery charge: ${fmt(DELIVERY_CHARGE)}`,
    `*Final bill: ${fmt(total)}*`
  ];
  const message = encodeURIComponent(lines.join("\n"));
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
  window.open(url, "_blank");
  closeOrderModal();
  toast("Order sent to WhatsApp");
}

/* ---------------- Init ---------------- */
renderCatPills();
renderGrid();
updateBadges();
updateBanner();
resetBannerTimer();
