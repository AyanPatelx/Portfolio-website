/* script.js */
function startAutoplay(){
if(timer) clearInterval(timer);
timer = setInterval(()=>{ if(autoplay) goToSlide(current+1) }, 5000);
}
function resetAutoplay(){ autoplay=false; clearInterval(timer); setTimeout(()=>{ autoplay=true; startAutoplay() }, 7000)}
startAutoplay();


// pause on hover
document.querySelector('.carousel').addEventListener('mouseenter', ()=> autoplay=false);
document.querySelector('.carousel').addEventListener('mouseleave', ()=> autoplay=true);


// REVEAL ON SCROLL
const observer = new IntersectionObserver((entries)=>{
entries.forEach(entry=>{
if(entry.isIntersecting) entry.target.classList.add('visible');
})
},{threshold:0.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));


// SIMPLE CONTACT FORM HANDLER (local only)
const form = document.getElementById('contact-form');
const status = document.getElementById('contact-status');
form.addEventListener('submit', function(e){
e.preventDefault();
status.textContent = 'Sending message...';
// simulate async send
setTimeout(()=>{
status.textContent = 'Message sent — I will reply within 48 hours.';
form.reset();
},800);
});


// PROJECT MODAL — simple static content; replace with your own descriptions
const modal = document.getElementById('project-modal');
const modalContent = document.getElementById('project-modal-content');
const modalClose = document.querySelector('.modal-close');


const projectsData = {
'project-1':{
title:'College Job Portal',
img:'images/project1.jpg',
desc:`Full-stack placements portal built as a DBMS project. Features: recruiter panel, filters, resume uploads, candidate search, and interview scheduling.`
},
'project-2':{
title:'Price Tracker',
img:'images/project2.jpg',
desc:`A web scraper and notification pipeline that tracks product prices across e-commerce sites and alerts users via email.`
},
'project-3':{
title:'AI Mail Assistant',
img:'images/project3.jpg',
desc:`Prototype that classifies incoming mail and drafts replies using templates and AI suggestions.`
},
'project-4':{
title:'Presentation Designer',
img:'images/project4.jpg',
desc:`Tools & templates to build high-impact presentations with flow-first design and storytelling templates.`
}
};


window.openProject = function(key){
const p = projectsData[key];
if(!p) return;
modalContent.innerHTML = `
<h2>${p.title}</h2>
<img src="${p.img}" alt="${p.title}" style="width:100%;max-height:360px;object-fit:cover;border-radius:8px;margin:12px 0">
<p class=\"muted\">${p.desc}</p>
<div style=\"margin-top:12px;display:flex;gap:10px\">
<a class=\"btn\" href=\"projects.html#${key}\">Read more</a>
<a class=\"btn ghost\" href=\"https://github.com/yourusername\" target=\"_blank\">Source</a>
</div>
`;
modal.classList.add('open');
modal.setAttribute('aria-hidden','false');
}


modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', function(e){ if(e.target===modal) closeModal() });
function closeModal(){ modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); }


});