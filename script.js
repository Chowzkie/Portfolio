document.getElementById('year').textContent = new Date().getFullYear();

  // mobile menu
  const burger = document.getElementById('burger');
  const navlinks = document.getElementById('navlinks');
  burger.addEventListener('click', () => navlinks.classList.toggle('open'));
  navlinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navlinks.classList.remove('open')));

  // active link on scroll
  const sections = document.querySelectorAll('main section[id]');
  const links = document.querySelectorAll('.navlinks a');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        links.forEach(l => l.classList.remove('active'));
        const active = document.querySelector('.navlinks a[href="#' + entry.target.id + '"]');
        if(active) active.classList.add('active');
      }
    });
  }, { rootMargin: '-45% 0px -45% 0px' });
  sections.forEach(s => obs.observe(s));

  // role rotator
  const roles = ["IT Support", "Network Administrator", "Web Developer"];
  const roleEl = document.getElementById('roleText');
  let ri = 0, ci = roles[0].length, deleting = false;

  function tick(){
    const word = roles[ri];
    if(!deleting){
      ci++;
      if(ci > word.length){ deleting = true; setTimeout(tick, 1400); return; }
    } else {
      ci--;
      if(ci < 0){ deleting = false; ri = (ri+1) % roles.length; ci = 0; setTimeout(tick, 200); return; }
    }
    roleEl.textContent = word.slice(0, ci);
    setTimeout(tick, deleting ? 45 : 85);
  }
  setTimeout(tick, 1200);

  // certificate carousel
const certTrack = document.getElementById('certTrack');
const certPrev = document.querySelector('.cert-prev');
const certNext = document.querySelector('.cert-next');
if(certTrack && certPrev && certNext){
  const scrollAmount = () => certTrack.querySelector('.cert-card').offsetWidth + 18;
  certPrev.addEventListener('click', () => certTrack.scrollBy({left: -scrollAmount(), behavior:'smooth'}));
  certNext.addEventListener('click', () => certTrack.scrollBy({left: scrollAmount(), behavior:'smooth'}));
}

// project carousel
const projectTrack = document.getElementById('projectTrack');
const projectPrev = document.querySelector('.project-prev');
const projectNext = document.querySelector('.project-next');
if(projectTrack && projectPrev && projectNext){
  const projScrollAmount = () => projectTrack.querySelector('.project-card').offsetWidth + 18;
  projectPrev.addEventListener('click', () => projectTrack.scrollBy({left: -projScrollAmount(), behavior:'smooth'}));
  projectNext.addEventListener('click', () => projectTrack.scrollBy({left: projScrollAmount(), behavior:'smooth'}));
}

// hide next button if fewer than 3 projects
if(projectTrack && projectNext){
  const projectCount = projectTrack.querySelectorAll('.project-card').length;
  if(projectCount < 3){
    projectNext.style.display = 'none';
    projectPrev.style.display = 'none'
  }
}
