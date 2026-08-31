document.querySelectorAll('a[href^="#"]').forEach(link=>{
  link.addEventListener('click',e=>{
    const id=link.getAttribute('href');
    if(id && id!="#" && document.querySelector(id)){
      e.preventDefault();
      document.querySelector(id).scrollIntoView({behavior:'smooth'});
    }
  });
});
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting) entry.target.classList.add('show')});
},{threshold:.12});
document.querySelectorAll('.project,.skill-grid>div,.about-grid>div,.resume-box').forEach(el=>{
  el.classList.add('reveal'); observer.observe(el);
});
