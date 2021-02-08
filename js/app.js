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