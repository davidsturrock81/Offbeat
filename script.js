const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    navMenu.classList.toggle('hidden');
  });

  navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show');
    navMenu.classList.add('hidden');
  });
});

