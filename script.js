const toggleBtn = document.getElementById('theme-toggle');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  // Save preference
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// On page load, apply saved theme
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  }
});

<script>
  const profileImg = document.getElementById('profile-img');

  profileImg.addEventListener('click', () => {
    profileImg.classList.add('rotate');

    // Remove the class after the animation ends so it can rotate again
    profileImg.addEventListener('animationend', () => {
      profileImg.classList.remove('rotate');
    }, { once: true });
  });
</script>
