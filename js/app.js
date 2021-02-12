function scrollSuave(){
  const linksInternos = document.querySelectorAll('.menu-nav a[href^="#"]');

  function scrollToSection(event){
    event.preventDefault();
    const href = event.target.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView({  
      behavior: 'smooth',
      block: 'start'
    })
  }

  linksInternos.forEach((link)=>{
    link.addEventListener('click',scrollToSection);
  })
}

scrollSuave();

function iniAnimationScroll(){

  const sections = document.querySelectorAll('.animation-scroll');

  if (sections.length) {
  const windowMetade = window.innerHeight * 0.60; 

  function animaScroll(){
    sections.forEach((section)=>{
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = (sectionTop - windowMetade) < 0;
      
      if (isSectionVisible) 
        section.classList.add('ativo');
      else
        section.classList.remove('ativo');
    });
  }

  animaScroll();
  window.addEventListener('scroll',animaScroll);
  }

}

iniAnimationScroll();