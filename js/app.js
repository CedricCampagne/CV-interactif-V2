// function ShowGrid(grid)
// {   
//   const divmain = document.querySelectorAll('.main_container_all');
  
//   divmain.forEach(div =>{
//       div.style.display ="none";
//   })
  
//   if(grid !== 'home'){
//     const description = document.querySelector('#description');
//     const nav = document.querySelector('.nav');

//     description.style.display='none';
//     nav.classList.add('open');
//   }else{
//     description.style.display='block';
//     nav.classList.remove('open');
//   }
//   const gridToShow = document.getElementById(grid);
//   gridToShow.style.display = "grid";
// }

function ShowGrid(sectionId) {
  const sections = [
    'home',
    'professional_experience',
    'education',
    'soft_skill',
    'hard_skill'
  ];

  // Cacher toutes les sections
  sections.forEach(id => {
    const div = document.getElementById(id);
    if (div) div.classList.add('hidden');
  });

  // Afficher la section demandée
  const target = document.getElementById(sectionId);
  if (target) target.classList.remove('hidden');

  // Gestion du menu et de la description
  const menu = document.getElementById('menu');
  const description = document.getElementById('description');

  if (sectionId === 'home') {
    menu.classList.add('hidden');
    description.classList.remove('hidden');
  } else {
    menu.classList.remove('hidden');
    description.classList.add('hidden');
  }
}


document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.toggle_btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetSelector = btn.getAttribute('data-target');
      const target = document.querySelector(targetSelector);

      if (target) {
        // Toggle la visibilité de l'élément
        target.classList.toggle('hidden');
        // Toggle la classe "open" sur le bouton pour changer le texte/fleche
        btn.classList.toggle('open');

        // Si tu veux que la flèche tourne seulement quand visible
        if (!target.classList.contains('hidden')) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });
        }
      }
    });
  });
});

