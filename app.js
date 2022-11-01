const sections = document.querySelectorAll('.section');
const secButtons = document.querySelectorAll('.controls');
const secButton = document.querySelectorAll('.control');
const allSection = document.querySelector('.main-content');

function PageTransition() {
  for (let i = 0; i < secButton.length; i++) {
    secButton[i].addEventListener('click', function () {
      let currentButton = document.querySelectorAll('.active-btn');
      currentButton[0].className = currentButton[0].className.replace(
        'active-btn',
        ''
      );
      this.className += ' active-btn';
    });
  }
  allSection.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if (id) {
      secButtons.forEach((btn) => {
        btn.classList.remove('active');
      });
      e.target.classList.add('active');
      sections.forEach((section) => {
        section.classList.remove('active');
      });
      const element = document.getElementById(id);
      element.classList.add('active');
    }
  });
}

PageTransition();
