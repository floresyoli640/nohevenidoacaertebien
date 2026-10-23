'use strict';
document.documentElement.classList.add('js-ready');
document.getElementById('year').textContent = String(new Date().getFullYear());

const toggle = document.getElementById('menu-toggle');
const nav = document.getElementById('primary-nav');
function closeMenu() {
  nav.classList.remove('is-open'); toggle.setAttribute('aria-expanded','false');
  toggle.setAttribute('aria-label','Abrir menú');
  document.body.classList.remove('menu-open');
}
toggle.addEventListener('click', () => {
  const opened = nav.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', String(opened));
  toggle.setAttribute('aria-label', opened ? 'Cerrar menú' : 'Abrir menú');
  document.body.classList.toggle('menu-open', opened);
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });
window.addEventListener('resize', () => { if (innerWidth > 760) closeMenu(); });

const progress = document.getElementById('progress');
let ticking=false;
function updateProgress(){
  const max=document.documentElement.scrollHeight-innerHeight;
  progress.style.width = (max > 0 ? (scrollY/max)*100 : 0)+'%';
  ticking=false;
}
window.addEventListener('scroll', () => {
  if(!ticking){ ticking=true;requestAnimationFrame(updateProgress); }
}, {passive:true});
updateProgress();

if('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches){
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}});
  },{threshold:0.10,rootMargin:'0px 0px -25px 0px'});
  document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));
}else{
  document.querySelectorAll('.reveal').forEach(el=>el.classList.add('is-visible'));
}
